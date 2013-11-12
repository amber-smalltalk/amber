define("amber_core/Helios-Workspace", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Helios-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Workspace');
smalltalk.packages["Helios-Workspace"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == null){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultReceiver",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._doItReceiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{},smalltalk.HLCodeModel)})},
args: [],
source: "defaultReceiver\x0a\x09^ self environment doItReceiver",
messageSends: ["doItReceiver", "environment"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._eval_on_(aString,self._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},smalltalk.HLCodeModel)})},
args: ["aString"],
source: "doIt: aString\x0a\x0a\x09^ self environment eval: aString on: self receiver",
messageSends: ["eval:on:", "environment", "receiver"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == null){
$1=_st(_st($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLCodeModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLCodeModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.HLCodeModel)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self environment inspect: anObject",
messageSends: ["inspect:", "environment"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == null){
self["@receiver"]=self._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeModel)})},
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
messageSends: ["ifNil:", "defaultReceiver"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeModel)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'actions',
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
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor', 'state'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeWidget)})},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLCodeWidget)})},
args: [],
source: "clear\x0a\x09self contents: ''",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._editor();
$ctx1.sendIdx["editor"]=1;
_st($1)._at_put_("amberCodeWidget",self);
_st(self._editor())._on_do_("change",(function(){
return smalltalk.withContext(function($ctx2) {
return self._onChange();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},smalltalk.HLCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09self editor at: 'amberCodeWidget' put: self.\x0a\x09self editor on: 'change' do: [ self onChange ]",
messageSends: ["at:put:", "editor", "on:do:", "onChange"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.HLCodeWidget)})},
args: [],
source: "contents\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@editor"])._setValue_(aString);
$1=self["@state"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self._updateState();
};
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString.\x0a\x09state ifNotNil: [ self updateState ]",
messageSends: ["setValue:", "ifNotNil:", "updateState"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},smalltalk.HLCodeWidget)})},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},smalltalk.HLCodeWidget)})},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [ self currentLine ]\x0a\x09\x09ifTrue: [ self selection ]",
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
var result;
function $HLDoItRequested(){return smalltalk.HLDoItRequested||(typeof HLDoItRequested=="undefined"?nil:HLDoItRequested)}
function $HLDoItExecuted(){return smalltalk.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._announcer();
$ctx1.sendIdx["announcer"]=1;
$3=_st($HLDoItRequested())._on_(self["@model"]);
$ctx1.sendIdx["on:"]=1;
_st($1)._announce_($3);
$ctx1.sendIdx["announce:"]=1;
result=_st(self["@model"])._doIt_(self._currentLineOrSelection());
_st(_st(self._model())._announcer())._announce_(_st($HLDoItExecuted())._on_(self["@model"]));
$4=result;
return $4;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},smalltalk.HLCodeWidget)})},
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09self model announcer announce: (HLDoItRequested on: model).\x0a\x09result := model doIt: self currentLineOrSelection.\x0a\x09self model announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result",
messageSends: ["announce:", "announcer", "model", "on:", "doIt:", "currentLineOrSelection"],
referencedClasses: ["HLDoItRequested", "HLDoItExecuted"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{},smalltalk.HLCodeWidget)})},
args: [],
source: "editor\x0a\x09^ editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$8,$9,$10,$1;
$2="theme".__minus_gt("amber");
$ctx1.sendIdx["->"]=1;
$3="lineNumbers".__minus_gt(true);
$ctx1.sendIdx["->"]=2;
$4="enterMode".__minus_gt("flat");
$ctx1.sendIdx["->"]=3;
$5="indentWithTabs".__minus_gt(true);
$ctx1.sendIdx["->"]=4;
$6="indentUnit".__minus_gt((4));
$ctx1.sendIdx["->"]=5;
$7="matchBrackets".__minus_gt(true);
$ctx1.sendIdx["->"]=6;
$8="electricChars".__minus_gt(false);
$ctx1.sendIdx["->"]=7;
$9="keyMap".__minus_gt("Amber");
$ctx1.sendIdx["->"]=8;
$10="extraKeys".__minus_gt(smalltalk.HashedCollection._from_(["Shift-Space".__minus_gt("autocomplete")]));
$ctx1.sendIdx["->"]=9;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,$6,$7,$8,$9,$10]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},smalltalk.HLCodeWidget)})},
args: [],
source: "editorOptions\x0a\x09^ #{\x0a\x09\x09'theme' -> 'amber'.\x0a        'lineNumbers' -> true.\x0a        'enterMode' -> 'flat'.\x0a        'indentWithTabs' -> true.\x0a\x09\x09'indentUnit' -> 4.\x0a        'matchBrackets' -> true.\x0a        'electricChars' -> false.\x0a\x09\x09'keyMap' -> 'Amber'.\x0a\x09\x09'extraKeys' -> #{'Shift-Space' -> 'autocomplete'}\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "focus\x0a\x09editor focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._asJQuery())._is_(":active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "hasFocus\x0a\x09^ code asJQuery is: ':active'",
messageSends: ["is:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},smalltalk.HLCodeWidget)})},
args: [],
source: "hasModification\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
var newInspector;
function $HLInspectItRequested(){return smalltalk.HLInspectItRequested||(typeof HLInspectItRequested=="undefined"?nil:HLInspectItRequested)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._announcer();
_st($1)._announce_(_st($HLInspectItRequested())._on_(self["@model"]));
_st(self._model())._inspect_(self._doIt());
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{newInspector:newInspector},smalltalk.HLCodeWidget)})},
args: [],
source: "inspectIt\x0a\x09| newInspector |\x0a       \x0a\x09self model announcer announce: (HLInspectItRequested on: model).\x0a\x09self model inspect: self doIt",
messageSends: ["announce:", "announcer", "model", "on:", "inspect:", "doIt"],
referencedClasses: ["HLInspectItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(_st(_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(aToken)._string();
$ctx2.sendIdx["string"]=1;
return _st(each)._includesSubString_($2);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ ((Smalltalk current at: 'allSelectors') value asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["reject:", "select:", "asArray", "value", "at:", "current", "includesSubString:", "string", "="],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return smalltalk.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == null){
self["@model"]=_st($HLCodeModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLCodeWidget)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLCodeModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLCodeWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onChange",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onChange\x0a\x09self updateState",
messageSends: ["updateState"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onDoIt\x0a\x09\x0a\x09self doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
category: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$8,$10,$9,$11,$12,$13,$15,$14;
$1=_st(self["@editor"])._getCursor_(false);
$ctx1.sendIdx["getCursor:"]=1;
currentLine=_st($1)._line();
start=_st($HashedCollection())._new();
$ctx1.sendIdx["new"]=1;
_st(start)._at_put_("line",currentLine);
$ctx1.sendIdx["at:put:"]=1;
$2=start;
$4=_st(self["@editor"])._getCursor_(false);
$ctx1.sendIdx["getCursor:"]=2;
$3=_st($4)._ch();
_st($2)._at_put_("ch",$3);
$ctx1.sendIdx["at:put:"]=2;
$5=_st(self["@editor"])._getSelection();
$ctx1.sendIdx["getSelection"]=1;
_st($5)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$6=start;
$7=_st(_st(self["@editor"])._getLine_(currentLine))._size();
$ctx2.sendIdx["size"]=1;
_st($6)._at_put_("ch",$7);
$ctx2.sendIdx["at:put:"]=3;
$8=self["@editor"];
$10="line".__minus_gt(currentLine);
$ctx2.sendIdx["->"]=1;
$9=smalltalk.HashedCollection._from_([$10,"ch".__minus_gt((0))]);
return _st($8)._setSelection_end_($9,start);
$ctx2.sendIdx["setSelection:end:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
stop=_st($HashedCollection())._new();
_st(stop)._at_put_("line",currentLine);
$ctx1.sendIdx["at:put:"]=4;
$11=stop;
$12=_st(_st(_st(start)._at_("ch")).__plus(_st(aString)._size())).__plus((2));
$ctx1.sendIdx["+"]=1;
_st($11)._at_put_("ch",$12);
$13=self["@editor"];
$15=_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString);
$ctx1.sendIdx[","]=2;
$14=_st($15).__comma(" ");
$ctx1.sendIdx[","]=1;
_st($13)._replaceSelection_($14);
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_(stop,start);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},smalltalk.HLCodeWidget)})},
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "getSelection", "size", "getLine:", "setSelection:end:", "->", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
category: 'actions',
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
args: [],
source: "printIt\x0a\x09| result |\x0a\x0a\x09result := self doIt.       \x0a\x09self model announcer announce: (HLPrintItRequested on: model).\x0a\x09self print: result printString.\x0a\x09\x0a\x09self focus.",
messageSends: ["doIt", "announce:", "announcer", "model", "on:", "print:", "printString", "focus"],
referencedClasses: ["HLPrintItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeWidget)})},
args: [],
source: "receiver\x0a\x09^ self model receiver",
messageSends: ["receiver", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeWidget)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
messageSends: ["receiver:", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
$ctx1.sendIdx["button"]=1;
_st($1)._class_("button");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_("DoIt");
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$3=_st(html)._button();
$ctx1.sendIdx["button"]=2;
_st($3)._class_("button");
$ctx1.sendIdx["class:"]=2;
_st($3)._with_("PrintIt");
$ctx1.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["onClick:"]=2;
$5=_st(html)._button();
_st($5)._class_("button");
_st($5)._with_("InspectIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLCodeWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [ self doIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [ self printIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [ self inspectIt ]",
messageSends: ["class:", "button", "with:", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("editor");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@code"]=_st(html)._textarea();
return self["@code"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
$ctx1.sendIdx["div"]=2;
self["@state"]=_st($3)._class_("state");
$ctx1.sendIdx["class:"]=2;
$4=_st(html)._div();
_st($4)._class_("buttons_bar");
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._setEditorOn_(_st(self["@code"])._element());
self._configureEditor();
$6=self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLCodeWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'editor'; with: [\x0a\x09\x09code := html textarea ].\x0a\x09state := html div class: 'state'.\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons_bar';\x0a\x09\x09with: [ self renderButtonsOn: html ].\x0a\x09\x0a\x09self \x0a\x09\x09setEditorOn: code element;\x0a\x09\x09configureEditor;\x0a\x09\x09updateState",
messageSends: ["class:", "div", "with:", "textarea", "renderButtonsOn:", "setEditorOn:", "element", "configureEditor", "updateState"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "saveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorOn:",
category: 'actions',
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@editor'] = CodeMirror.fromTextArea(aTextarea, self._editorOptions());
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},smalltalk.HLCodeWidget)})},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, self._editorOptions())>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateState",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasModification();
if(smalltalk.assert($1)){
$2=_st(self["@state"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._addClass_("modified");
} else {
_st(_st(self["@state"])._asJQuery())._removeClass_("modified");
};
return self}, function($ctx1) {$ctx1.fill(self,"updateState",{},smalltalk.HLCodeWidget)})},
args: [],
source: "updateState\x0a\x09self hasModification \x0a\x09\x09ifTrue: [ state asJQuery addClass: 'modified' ]\x0a\x09\x09ifFalse: [ state asJQuery removeClass: 'modified' ]",
messageSends: ["ifTrue:ifFalse:", "hasModification", "addClass:", "asJQuery", "removeClass:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
var variables,classNames,pseudoVariables;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4,$10,$9,$8,$11,$7,$6;
$3=_st(_st(_st(anEditor)._display())._wrapper())._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._find_("span.cm-variable");
$1=_st($2)._get();
variables=_st($1)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._html();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
$5=_st($Smalltalk())._current();
$ctx1.sendIdx["current"]=1;
$4=_st($5)._classes();
classNames=_st($4)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
pseudoVariables=_st(_st($Smalltalk())._current())._pseudoVariableNames();
$10=_st(_st(variables).__comma(classNames)).__comma(pseudoVariables);
$ctx1.sendIdx[","]=1;
$9=_st($10)._asSet();
$8=_st($9)._asArray();
$7=_st($8)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$11=_st(aToken)._string();
$ctx2.sendIdx["string"]=1;
return _st(each)._includesSubString_($11);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$6=_st($7)._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return $6;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken,variables:variables,classNames:classNames,pseudoVariables:pseudoVariables},smalltalk.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09| variables classNames pseudoVariables |\x0a\x09\x0a\x09variables := (anEditor display wrapper asJQuery find: 'span.cm-variable') get\x0a\x09\x09collect: [ :each | each asJQuery html ].\x0a\x09\x0a\x09classNames := Smalltalk current classes collect: [ :each | each name ].\x0a\x09pseudoVariables := Smalltalk current pseudoVariableNames.\x0a\x09\x0a\x09^ ((variables, classNames, pseudoVariables) asSet asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["collect:", "get", "find:", "asJQuery", "wrapper", "display", "html", "classes", "current", "name", "pseudoVariableNames", "reject:", "select:", "asArray", "asSet", ",", "includesSubString:", "string", "="],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "hintFor:options:",
category: 'hints',
fn: function (anEditor,options){
var self=this;
var cursor,token,completions;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$7,$10,$11,$9,$8,$6;
cursor=_st(anEditor)._getCursor();
token=_st(anEditor)._getTokenAt_(cursor);
$1=token;
$4=_st($CodeMirror())._basicAt_("innerMode");
$ctx1.sendIdx["basicAt:"]=1;
$3=_st($4)._value_value_(_st(anEditor)._getMode(),_st(token)._at_("state"));
$ctx1.sendIdx["value:value:"]=1;
$2=_st($3)._state();
_st($1)._at_put_("state",$2);
$5=_st(_st(token)._type()).__eq("variable");
if(smalltalk.assert($5)){
completions=_st($HLCodeWidget())._variableHintFor_token_(anEditor,token);
} else {
completions=_st($HLCodeWidget())._messageHintFor_token_(anEditor,token);
};
$7="list".__minus_gt(completions);
$ctx1.sendIdx["->"]=1;
$10=_st($CodeMirror())._basicAt_("Pos");
$ctx1.sendIdx["basicAt:"]=2;
$11=_st(cursor)._line();
$ctx1.sendIdx["line"]=1;
$9=_st($10)._value_value_($11,_st(token)._end());
$ctx1.sendIdx["value:value:"]=2;
$8="from".__minus_gt($9);
$ctx1.sendIdx["->"]=2;
$6=smalltalk.HashedCollection._from_([$7,$8,"to".__minus_gt(_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._start()))]);
return $6;
}, function($ctx1) {$ctx1.fill(self,"hintFor:options:",{anEditor:anEditor,options:options,cursor:cursor,token:token,completions:completions},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "options"],
source: "hintFor: anEditor options: options\x0a\x09| cursor token completions |\x0a\x09\x0a\x09cursor := anEditor getCursor.\x0a\x09token := anEditor getTokenAt: cursor.\x0a\x09token at: 'state' put: ((CodeMirror basicAt: 'innerMode')\x0a\x09\x09value: anEditor getMode value: (token at: 'state')) state.\x0a\x09\x0a\x09completions := token type = 'variable' \x0a\x09\x09ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]\x0a\x09\x09ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].\x0a\x09\x0a\x09^ #{\x0a\x09\x09'list' -> completions.\x0a\x09\x09'from' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token end).\x0a\x09\x09'to' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token start)\x0a\x09}",
messageSends: ["getCursor", "getTokenAt:", "at:put:", "state", "value:value:", "basicAt:", "getMode", "at:", "ifTrue:ifFalse:", "=", "type", "variableHintFor:token:", "messageHintFor:token:", "->", "line", "end", "start"],
referencedClasses: ["CodeMirror", "HLCodeWidget"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.HLCodeWidget.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._setupCodeMirror();
self._setupCommands();
$1=self._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09setupCodeMirror;\x0a\x09\x09setupCommands;\x0a\x09\x09setupKeyMaps.",
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyMap",
category: 'accessing',
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
args: [],
source: "keyMap\x0a\x09^ HLManager current keyBinder systemIsMac\x0a\x09\x09ifTrue: [ self macKeyMap ]\x0a\x09\x09ifFalse: [ self pcKeyMap ]",
messageSends: ["ifTrue:ifFalse:", "systemIsMac", "keyBinder", "current", "macKeyMap", "pcKeyMap"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "macKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$1;
$2="Alt-Backspace".__minus_gt("delWordBefore");
$ctx1.sendIdx["->"]=1;
$3="Alt-Delete".__minus_gt("delWordAfter");
$ctx1.sendIdx["->"]=2;
$4="Alt-Left".__minus_gt("goWordBoundaryLeft");
$ctx1.sendIdx["->"]=3;
$5="Alt-Right".__minus_gt("goWordBoundaryRight");
$ctx1.sendIdx["->"]=4;
$6="Cmd-A".__minus_gt("selectAll");
$ctx1.sendIdx["->"]=5;
$7="Cmd-Alt-F".__minus_gt("replace");
$ctx1.sendIdx["->"]=6;
$8="Cmd-D".__minus_gt("doIt");
$ctx1.sendIdx["->"]=7;
$9="Cmd-Down".__minus_gt("goDocEnd");
$ctx1.sendIdx["->"]=8;
$10="Cmd-End".__minus_gt("goDocEnd");
$ctx1.sendIdx["->"]=9;
$11="Cmd-F".__minus_gt("find");
$ctx1.sendIdx["->"]=10;
$12="Cmd-G".__minus_gt("findNext");
$ctx1.sendIdx["->"]=11;
$13="Cmd-I".__minus_gt("inspectIt");
$ctx1.sendIdx["->"]=12;
$14="Cmd-Left".__minus_gt("goLineStart");
$ctx1.sendIdx["->"]=13;
$15="Cmd-P".__minus_gt("printIt");
$ctx1.sendIdx["->"]=14;
$16="Cmd-Right".__minus_gt("goLineEnd");
$ctx1.sendIdx["->"]=15;
$17="Cmd-S".__minus_gt("saveIt");
$ctx1.sendIdx["->"]=16;
$18="Cmd-Up".__minus_gt("goDocStart");
$ctx1.sendIdx["->"]=17;
$19="Cmd-Y".__minus_gt("redo");
$ctx1.sendIdx["->"]=18;
$20="Cmd-Z".__minus_gt("undo");
$ctx1.sendIdx["->"]=19;
$21="Cmd-[".__minus_gt("indentLess");
$ctx1.sendIdx["->"]=20;
$22="Cmd-]".__minus_gt("indentMore");
$ctx1.sendIdx["->"]=21;
$23="Ctrl-Alt-Backspace".__minus_gt("delWordAfter");
$ctx1.sendIdx["->"]=22;
$24="Shift-Cmd-Alt-F".__minus_gt("replaceAll");
$ctx1.sendIdx["->"]=23;
$25="Shift-Cmd-G".__minus_gt("findPrev");
$ctx1.sendIdx["->"]=24;
$26="Shift-Cmd-Z".__minus_gt("redo");
$ctx1.sendIdx["->"]=25;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,"fallthrough".__minus_gt(["basic","emacsy"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"macKeyMap",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "macKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Backspace'\x09\x09-> 'delWordBefore'.\x0a\x09\x09'Alt-Delete'\x09\x09-> 'delWordAfter'. \x0a\x09\x09'Alt-Left'\x09\x09-> 'goWordBoundaryLeft'.\x0a\x09\x09'Alt-Right'\x09\x09-> 'goWordBoundaryRight'. \x0a\x09\x09'Cmd-A'\x09\x09\x09-> 'selectAll'. \x0a\x09\x09'Cmd-Alt-F'\x09\x09-> 'replace'. \x0a\x09\x09'Cmd-D'\x09\x09\x09-> 'doIt'. \x0a\x09\x09'Cmd-Down'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-End'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-F'\x09\x09\x09-> 'find'.\x0a\x09\x09'Cmd-G'\x09\x09\x09-> 'findNext'. \x0a\x09\x09'Cmd-I'\x09\x09\x09-> 'inspectIt'. \x0a\x09\x09'Cmd-Left'\x09\x09-> 'goLineStart'. \x0a\x09\x09'Cmd-P'\x09\x09\x09-> 'printIt'. \x0a\x09\x09'Cmd-Right'\x09\x09-> 'goLineEnd'. \x0a\x09\x09'Cmd-S'\x09\x09\x09-> 'saveIt'. \x0a\x09\x09'Cmd-Up'\x09\x09-> 'goDocStart'. \x0a\x09\x09'Cmd-Y'\x09\x09\x09-> 'redo'.\x0a\x09\x09'Cmd-Z'\x09\x09\x09-> 'undo'. \x0a\x09\x09'Cmd-['\x09\x09\x09-> 'indentLess'. \x0a\x09\x09'Cmd-]'\x09\x09\x09-> 'indentMore'.\x0a\x09\x09'Ctrl-Alt-Backspace'\x09-> 'delWordAfter'. \x0a\x09\x09'Shift-Cmd-Alt-F'\x09-> 'replaceAll'.\x0a\x09\x09'Shift-Cmd-G'\x09\x09-> 'findPrev'. \x0a\x09\x09'Shift-Cmd-Z'\x09\x09-> 'redo'. \x0a    \x09'fallthrough' \x09-> { 'basic'. 'emacsy' }\x0a  }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._messageHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09messageHintFor: anEditor token: aToken",
messageSends: ["messageHintFor:token:", "at:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pcKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$1;
$2="Alt-Left".__minus_gt("goLineStart");
$ctx1.sendIdx["->"]=1;
$3="Alt-Right".__minus_gt("goLineEnd");
$ctx1.sendIdx["->"]=2;
$4="Alt-Up".__minus_gt("goDocStart");
$ctx1.sendIdx["->"]=3;
$5="Ctrl-A".__minus_gt("selectAll");
$ctx1.sendIdx["->"]=4;
$6="Ctrl-Backspace".__minus_gt("delWordBefore");
$ctx1.sendIdx["->"]=5;
$7="Ctrl-D".__minus_gt("doIt");
$ctx1.sendIdx["->"]=6;
$8="Ctrl-Delete".__minus_gt("delWordAfter");
$ctx1.sendIdx["->"]=7;
$9="Ctrl-Down".__minus_gt("goDocEnd");
$ctx1.sendIdx["->"]=8;
$10="Ctrl-End".__minus_gt("goDocEnd");
$ctx1.sendIdx["->"]=9;
$11="Ctrl-F".__minus_gt("find");
$ctx1.sendIdx["->"]=10;
$12="Ctrl-G".__minus_gt("findNext");
$ctx1.sendIdx["->"]=11;
$13="Ctrl-I".__minus_gt("inspectIt");
$ctx1.sendIdx["->"]=12;
$14="Ctrl-Home".__minus_gt("goDocStart");
$ctx1.sendIdx["->"]=13;
$15="Ctrl-Left".__minus_gt("goWordBoundaryLeft");
$ctx1.sendIdx["->"]=14;
$16="Ctrl-P".__minus_gt("printIt");
$ctx1.sendIdx["->"]=15;
$17="Ctrl-Right".__minus_gt("goWordBoundaryRight");
$ctx1.sendIdx["->"]=16;
$18="Ctrl-S".__minus_gt("saveIt");
$ctx1.sendIdx["->"]=17;
$19="Ctrl-Y".__minus_gt("redo");
$ctx1.sendIdx["->"]=18;
$20="Ctrl-Z".__minus_gt("undo");
$ctx1.sendIdx["->"]=19;
$21="Ctrl-[".__minus_gt("indentLess");
$ctx1.sendIdx["->"]=20;
$22="Ctrl-]".__minus_gt("indentMore");
$ctx1.sendIdx["->"]=21;
$23="Shift-Ctrl-F".__minus_gt("replace");
$ctx1.sendIdx["->"]=22;
$24="Shift-Ctrl-G".__minus_gt("findPrev");
$ctx1.sendIdx["->"]=23;
$25="Shift-Ctrl-R".__minus_gt("replaceAll");
$ctx1.sendIdx["->"]=24;
$26="Shift-Ctrl-Z".__minus_gt("redo");
$ctx1.sendIdx["->"]=25;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,"fallthrough".__minus_gt(["basic"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pcKeyMap",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "pcKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Left' -> 'goLineStart'. \x0a\x09\x09'Alt-Right' -> 'goLineEnd'.\x0a\x09\x09'Alt-Up' -> 'goDocStart'. \x0a\x09\x09'Ctrl-A' -> 'selectAll'. \x0a\x09\x09'Ctrl-Backspace' -> 'delWordBefore'. \x0a\x09\x09'Ctrl-D' -> 'doIt'. \x0a\x09\x09'Ctrl-Delete' -> 'delWordAfter'. \x0a\x09\x09'Ctrl-Down' -> 'goDocEnd'.\x0a\x09\x09'Ctrl-End' -> 'goDocEnd'. \x0a\x09\x09'Ctrl-F' -> 'find'.\x0a\x09\x09'Ctrl-G' -> 'findNext'. \x0a\x09\x09'Ctrl-I' -> 'inspectIt'.\x0a\x09\x09'Ctrl-Home' -> 'goDocStart'. \x0a\x09\x09'Ctrl-Left' -> 'goWordBoundaryLeft'. \x0a\x09\x09'Ctrl-P' -> 'printIt'.\x0a\x09\x09'Ctrl-Right' -> 'goWordBoundaryRight'. \x0a\x09\x09'Ctrl-S' -> 'saveIt'. \x0a\x09\x09'Ctrl-Y' -> 'redo'.\x0a\x09\x09'Ctrl-Z' -> 'undo'. \x0a\x09\x09'Ctrl-[' -> 'indentLess'. \x0a\x09\x09'Ctrl-]' -> 'indentMore'.\x0a\x09\x09'Shift-Ctrl-F' -> 'replace'. \x0a\x09\x09'Shift-Ctrl-G' -> 'findPrev'. \x0a\x09\x09'Shift-Ctrl-R' -> 'replaceAll'.\x0a\x09\x09'Shift-Ctrl-Z' -> 'redo'. \x0a\x09\x09'fallthrough' -> #('basic')\x0a}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCodeMirror",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 
		CodeMirror.keyMap.default.fallthrough = ["basic"];
		CodeMirror.commands.autocomplete = function(cm) {
			CodeMirror.showHint(cm, self._hintFor_options_);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupCodeMirror\x0a\x09< \x0a\x09\x09CodeMirror.keyMap.default.fallthrough = [\x22basic\x22];\x0a\x09\x09CodeMirror.commands.autocomplete = function(cm) {\x0a\x09\x09\x09CodeMirror.showHint(cm, self._hintFor_options_);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCommands",
category: 'initialization',
fn: function (){
var self=this;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st($CodeMirror())._basicAt_("commands");
_st($1)._at_put_("doIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
$2=_st(cm)._amberCodeWidget();
$ctx2.sendIdx["amberCodeWidget"]=1;
return _st($2)._doIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,1)})}));
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("inspectIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
$3=_st(cm)._amberCodeWidget();
$ctx2.sendIdx["amberCodeWidget"]=2;
return _st($3)._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,2)})}));
$ctx1.sendIdx["at:put:"]=2;
_st($1)._at_put_("printIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
$4=_st(cm)._amberCodeWidget();
$ctx2.sendIdx["amberCodeWidget"]=3;
return _st($4)._printIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,3)})}));
$ctx1.sendIdx["at:put:"]=3;
$5=_st($1)._at_put_("saveIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._saveIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupCommands\x0a\x09(CodeMirror basicAt: 'commands') \x0a\x09\x09at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];\x0a\x09\x09at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];\x0a\x09\x09at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];\x0a\x09\x09at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ]",
messageSends: ["at:put:", "basicAt:", "doIt", "amberCodeWidget", "inspectIt", "printIt", "saveIt"],
referencedClasses: ["CodeMirror"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyMaps",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupKeyMaps\x0a\x09<CodeMirror.keyMap['Amber'] = self._keyMap()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._variableHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09variableHintFor: anEditor token: aToken",
messageSends: ["variableHintFor:token:", "at:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);


smalltalk.addClass('HLNavigationCodeWidget', smalltalk.HLCodeWidget, ['methodContents'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLNavigationCodeWidget.superclass.fn.prototype._configureEditor.apply(_st(self), []);
self._contents_(self._methodContents());
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},smalltalk.HLNavigationCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09super configureEditor.\x0a\x09self contents: self methodContents",
messageSends: ["configureEditor", "contents:", "methodContents"],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(aString);
smalltalk.HLNavigationCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLNavigationCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09self methodContents: aString.\x0a\x09super contents: aString",
messageSends: ["methodContents:", "contents:"],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodContents()).__eq(self._contents()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},smalltalk.HLNavigationCodeWidget)})},
args: [],
source: "hasModification\x0a\x09^ (self methodContents = self contents) not",
messageSends: ["not", "=", "methodContents", "contents"],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@methodContents"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents",{},smalltalk.HLNavigationCodeWidget)})},
args: [],
source: "methodContents\x0a\x09^ methodContents ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@methodContents"]=aString;
$1=self["@methodContents"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents:",{aString:aString},smalltalk.HLNavigationCodeWidget)})},
args: ["aString"],
source: "methodContents: aString\x0a\x09^ methodContents := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLNavigationCodeWidget)})},
args: [],
source: "previous\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLNavigationCodeWidget)})},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLNavigationCodeWidget.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
messageSends: ["browserModel:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLNavigationCodeWidget.klass);


smalltalk.addClass('HLBrowserCodeWidget', smalltalk.HLNavigationCodeWidget, ['browserModel'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "browserModel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@browserModel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browserModel",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "browserModel\x0a\x09^ browserModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "browserModel:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@browserModel"]=aBrowserModel;
self._observeSystem();
$1=self._observeBrowserModel();
return self}, function($ctx1) {$ctx1.fill(self,"browserModel:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCodeWidget)})},
args: ["aBrowserModel"],
source: "browserModel: aBrowserModel\x0a\x09browserModel := aBrowserModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeBrowserModel",
messageSends: ["observeSystem", "observeBrowserModel"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
category: 'actions',
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
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._browserModel())._announcer();
_st($1)._on_send_to_($HLSaveSourceCode(),"onSaveIt",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($HLSourceCodeSaved(),"onSourceCodeSaved",self);
$ctx1.sendIdx["on:send:to:"]=3;
_st($1)._on_send_to_($HLAboutToChange(),"onBrowserAboutToChange:",self);
$ctx1.sendIdx["on:send:to:"]=4;
_st($1)._on_send_to_($HLParseErrorRaised(),"onParseError:",self);
$ctx1.sendIdx["on:send:to:"]=5;
_st($1)._on_send_to_($HLCompileErrorRaised(),"onCompileError:",self);
$ctx1.sendIdx["on:send:to:"]=6;
_st($1)._on_send_to_($HLUnknownVariableErrorRaised(),"onUnknownVariableError:",self);
$ctx1.sendIdx["on:send:to:"]=7;
_st($1)._on_send_to_($HLInstVarAdded(),"onInstVarAdded",self);
$ctx1.sendIdx["on:send:to:"]=8;
_st($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
$ctx1.sendIdx["on:send:to:"]=9;
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=10;
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$ctx1.sendIdx["on:send:to:"]=11;
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
$ctx1.sendIdx["on:send:to:"]=12;
$2=_st($1)._on_send_to_($HLSourceCodeFocusRequested(),"onSourceCodeFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "observeBrowserModel\x0a\x09self browserModel announcer\x0a\x09\x09on: HLSaveSourceCode\x0a\x09\x09send: #onSaveIt\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeSaved\x0a\x09\x09send: #onSourceCodeSaved\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLAboutToChange\x0a\x09\x09send: #onBrowserAboutToChange:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLParseErrorRaised\x0a\x09\x09send: #onParseError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLCompileErrorRaised\x0a\x09\x09send: #onCompileError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLUnknownVariableErrorRaised\x0a\x09\x09send: #onUnknownVariableError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLInstVarAdded \x0a\x09\x09send: #onInstVarAdded\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09send: #onMethodSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLClassSelected \x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageSelected \x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLProtocolSelected \x0a\x09\x09send: #onProtocolSelected: \x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeFocusRequested \x0a\x09\x09send: #onSourceCodeFocusRequested\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "browserModel"],
referencedClasses: ["HLSaveSourceCode", "HLShowInstanceToggled", "HLSourceCodeSaved", "HLAboutToChange", "HLParseErrorRaised", "HLCompileErrorRaised", "HLUnknownVariableErrorRaised", "HLInstVarAdded", "HLMethodSelected", "HLClassSelected", "HLPackageSelected", "HLProtocolSelected", "HLSourceCodeFocusRequested"]
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $MethodModified(){return smalltalk.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._browserModel())._systemAnnouncer())._on_send_to_($MethodModified(),"onMethodModified:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "observeSystem\x0a\x09self browserModel systemAnnouncer\x0a    \x09on: MethodModified\x0a        send: #onMethodModified:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "browserModel"],
referencedClasses: ["MethodModified"]
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onBrowserAboutToChange:",
category: 'reactions',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st($HLChangeForbidden())._signal();
};
return self}, function($ctx1) {$ctx1.fill(self,"onBrowserAboutToChange:",{anAnnouncement:anAnnouncement,block:block},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onBrowserAboutToChange: anAnnouncement\x0a\x09| block |\x0a\x09\x0a\x09block := anAnnouncement actionBlock.\x0a\x09\x0a\x09self hasModification\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09confirm: 'Changes have not been saved. Do you want to discard these changes?' \x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x22Don't ask twice\x22\x0a\x09\x09\x09\x09\x09self methodContents: self contents.\x0a\x09\x09\x09\x09\x09block value ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09HLChangeForbidden signal ]",
messageSends: ["actionBlock", "ifTrue:", "hasModification", "confirm:ifTrue:", "methodContents:", "contents", "value", "signal"],
referencedClasses: ["HLChangeForbidden"]
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._item();
$1=class_;
if(($receiver = $1) == nil || $receiver == null){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(class_)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class:= anAnnouncement item.\x0a\x09\x0a\x09class ifNil: [ ^ self contents: '' ].\x0a\x09self contents: class definition",
messageSends: ["item", "ifNil:", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onCompileError:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alert_(_st(_st(anAnnouncement)._error())._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"onCompileError:",{anAnnouncement:anAnnouncement},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onCompileError: anAnnouncement\x0a\x09self alert: anAnnouncement error messageText",
messageSends: ["alert:", "messageText", "error"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstVarAdded",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onInstVarAdded",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "onInstVarAdded\x0a\x09self browserModel save: self contents",
messageSends: ["save:", "browserModel", "contents"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodModified:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4,$7,$6;
method=_st(anAnnouncement)._method();
$3=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$2=_st($3)._selectedClass();
$1=_st($2).__eq(_st(method)._methodClass());
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
return self;
};
$5=self._browserModel();
$ctx1.sendIdx["browserModel"]=2;
$4=_st($5)._selectedMethod();
$ctx1.sendIdx["selectedMethod"]=1;
if(($receiver = $4) == nil || $receiver == null){
return self;
} else {
$4;
};
$7=_st(_st(self._browserModel())._selectedMethod())._selector();
$ctx1.sendIdx["selector"]=1;
$6=_st($7).__eq(_st(method)._selector());
if(! smalltalk.assert($6)){
return self;
};
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onMethodModified: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement method.\x0a\x09\x0a\x09self browserModel selectedClass = method methodClass ifFalse: [ ^ self ].\x0a\x09self browserModel selectedMethod ifNil: [ ^ self ].\x0a\x09self browserModel selectedMethod selector = method selector ifFalse: [ ^ self ].\x0a\x0a\x09self refresh",
messageSends: ["method", "ifFalse:", "=", "selectedClass", "browserModel", "methodClass", "ifNil:", "selectedMethod", "selector", "refresh"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
method=_st(anAnnouncement)._item();
$1=method;
if(($receiver = $1) == nil || $receiver == null){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(method)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onMethodSelected: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement item.\x0a\x09\x0a\x09method ifNil: [ ^ self contents: '' ].\x0a\x09self contents: method source",
messageSends: ["item", "ifNil:", "contents:", "source"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
package_=_st(anAnnouncement)._item();
$1=package_;
if(($receiver = $1) == nil || $receiver == null){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(package_)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| package |\x0a\x09\x0a\x09package := anAnnouncement item.\x0a\x09\x0a\x09package ifNil: [ ^ self contents: '' ].\x0a\x09self contents: package definition",
messageSends: ["item", "ifNil:", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onParseError:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var lineIndex,newContents;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$6,$5,$4;
lineIndex=(1);
self._contents_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self._contents())._linesDo_((function(each){
return smalltalk.withContext(function($ctx3) {
$1=_st(lineIndex).__eq(_st(anAnnouncement)._line());
if(smalltalk.assert($1)){
$3=_st(anAnnouncement)._column();
$ctx3.sendIdx["column"]=1;
$2=_st(each)._copyFrom_to_((1),$3);
$ctx3.sendIdx["copyFrom:to:"]=1;
_st(stream)._nextPutAll_($2);
$ctx3.sendIdx["nextPutAll:"]=1;
_st(stream)._nextPutAll_("<- ");
$ctx3.sendIdx["nextPutAll:"]=2;
_st(stream)._nextPutAll_(_st(anAnnouncement)._message());
$ctx3.sendIdx["nextPutAll:"]=3;
_st(stream)._nextPutAll_(" ");
$ctx3.sendIdx["nextPutAll:"]=4;
$6=_st(_st(anAnnouncement)._column()).__plus((1));
$ctx3.sendIdx["+"]=1;
$5=_st(each)._copyFrom_to_($6,_st(each)._size());
$4=_st(stream)._nextPutAll_($5);
$ctx3.sendIdx["nextPutAll:"]=5;
$4;
} else {
_st(stream)._nextPutAll_(each);
$ctx3.sendIdx["nextPutAll:"]=6;
};
_st(stream)._nextPutAll_(_st($String())._cr());
lineIndex=_st(lineIndex).__plus((1));
return lineIndex;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"onParseError:",{anAnnouncement:anAnnouncement,lineIndex:lineIndex,newContents:newContents},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onParseError: anAnnouncement\x0a\x09| lineIndex newContents |\x0a\x09\x0a\x09lineIndex := 1.\x0a\x09\x0a\x09self contents: (String streamContents: [ :stream |\x0a\x09\x09self contents linesDo: [ :each |\x0a\x09\x09\x09lineIndex = anAnnouncement line \x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09stream \x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: 1 to: anAnnouncement column);\x0a\x09\x09\x09\x09\x09\x09nextPutAll: '<- ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: anAnnouncement message;\x0a\x09\x09\x09\x09\x09\x09nextPutAll: ' ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]\x0a\x09\x09\x09\x09ifFalse: [ stream nextPutAll: each ].\x0a\x09\x09\x09stream nextPutAll: String cr.\x0a\x09\x09\x09lineIndex := lineIndex + 1 ] ])",
messageSends: ["contents:", "streamContents:", "linesDo:", "contents", "ifTrue:ifFalse:", "=", "line", "nextPutAll:", "copyFrom:to:", "column", "message", "+", "size", "cr"],
referencedClasses: ["String"]
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$3=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $3;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a\x09self contents: self browserModel selectedClass definition",
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09self browserModel save: self contents",
messageSends: ["save:", "browserModel", "contents"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$3=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $3;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a\x09self contents: self browserModel selectedClass definition",
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "onSourceCodeFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeSaved",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(self._contents());
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeSaved",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "onSourceCodeSaved\x0a\x09self methodContents: self contents.\x0a\x09self updateState",
messageSends: ["methodContents:", "contents", "updateState"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnknownVariableError:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var error;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
error=_st(anAnnouncement)._error();
self._confirm_ifTrue_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPutAll_(_st(error)._messageText());
$ctx2.sendIdx["nextPutAll:"]=1;
_st(stream)._nextPutAll_(_st($String())._cr());
$ctx2.sendIdx["nextPutAll:"]=2;
$1=_st(stream)._nextPutAll_("Would you like to define an instance variable?");
return $1;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._browserModel())._addInstVarNamed_(_st(error)._variableName());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"onUnknownVariableError:",{anAnnouncement:anAnnouncement,error:error},smalltalk.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onUnknownVariableError: anAnnouncement\x0a\x09| error |\x0a\x09\x0a\x09error := anAnnouncement error.\x0a\x09\x0a\x09self \x0a\x09\x09confirm: (String streamContents: [ :stream |\x0a\x09\x09\x09stream \x0a\x09\x09\x09\x09nextPutAll: error messageText;\x0a\x09\x09\x09\x09nextPutAll: String cr;\x0a\x09\x09\x09\x09nextPutAll: 'Would you like to define an instance variable?' ])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self browserModel addInstVarNamed: error variableName ]",
messageSends: ["error", "confirm:ifTrue:", "streamContents:", "nextPutAll:", "messageText", "cr", "addInstVarNamed:", "browserModel", "variableName"],
referencedClasses: ["String"]
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasModification();
if(smalltalk.assert($1)){
return self;
};
$2=self._hasFocus();
if(smalltalk.assert($2)){
return self;
};
self._contents_(_st(_st(self._browserModel())._selectedMethod())._source());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "refresh\x0a\x09self hasModification ifTrue: [ ^ self ].\x0a    self hasFocus ifTrue: [ ^ self ].\x0a\x0a\x09self contents: self browserModel selectedMethod source",
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "browserModel"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'actions',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
smalltalk.HLBrowserCodeWidget.superclass.fn.prototype._renderButtonsOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLBrowserCodeWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'SaveIt';\x0a\x09\x09onClick: [ self saveIt ].\x0a\x09super renderButtonsOn: html",
messageSends: ["class:", "button", "with:", "onClick:", "saveIt", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._saveSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "saveIt\x0a\x09self browserModel saveSourceCode",
messageSends: ["saveSourceCode", "browserModel"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
smalltalk.HLBrowserCodeWidget.superclass.fn.prototype._unregsiter.apply(_st(self), []);
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._announcer();
_st($1)._unsubscribe_(self);
$ctx1.sendIdx["unsubscribe:"]=1;
_st(_st(self._browserModel())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLBrowserCodeWidget)})},
args: [],
source: "unregister\x0a\x09super unregsiter.\x0a\x09\x0a\x09self browserModel announcer unsubscribe: self.\x0a\x09self browserModel systemAnnouncer unsubscribe: self",
messageSends: ["unregsiter", "unsubscribe:", "announcer", "browserModel", "systemAnnouncer"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLBrowserCodeWidget.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
messageSends: ["browserModel:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserCodeWidget.klass);


smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['codeWidget', 'transcript'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWorkspace)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@codeWidget"]=_st($HLCodeWidget())._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLWorkspace)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._codeWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLWorkspace)})},
args: [],
source: "focus\x0a\x09^ self codeWidget focus",
messageSends: ["focus", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(self._codeWidget(),(function(canvas){
return smalltalk.withContext(function($ctx2) {
return self._renderTranscriptOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}))));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWorkspace)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: [ :canvas | self renderTranscriptOn: canvas ]))",
messageSends: ["with:", "with:with:", "codeWidget", "renderTranscriptOn:"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTranscriptOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("transcript-container");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("list-label");
$4=_st($3)._with_("Transcript");
$4;
return _st(self._transcript())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTranscriptOn:",{html:html},smalltalk.HLWorkspace)})},
args: ["html"],
source: "renderTranscriptOn: html\x0a\x09html div \x0a\x09\x09class: 'transcript-container';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'list-label';\x0a\x09\x09\x09\x09with: 'Transcript'.\x0a\x09\x09\x09self transcript renderOn: html ]",
messageSends: ["class:", "div", "with:", "renderOn:", "transcript"],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "transcript",
category: 'accessing',
fn: function (){
var self=this;
function $HLTranscript(){return smalltalk.HLTranscript||(typeof HLTranscript=="undefined"?nil:HLTranscript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@transcript"];
if(($receiver = $2) == nil || $receiver == null){
self["@transcript"]=_st($HLTranscript())._new();
$1=self["@transcript"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transcript",{},smalltalk.HLWorkspace)})},
args: [],
source: "transcript\x0a\x09^ transcript ifNil: [ transcript := HLTranscript new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLTranscript"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLWorkspace.superclass.fn.prototype._unregister.apply(_st(self), []);
$ctx1.sendIdx["unregister"]=1;
_st(self._transcript())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLWorkspace)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self transcript unregister",
messageSends: ["unregister", "transcript"],
referencedClasses: []
}),
smalltalk.HLWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabClass\x0a\x09^ 'workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (10);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

});
