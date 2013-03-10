smalltalk.addPackage('Helios-Workspace');
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_defaultReceiver",
smalltalk.method({
selector: "defaultReceiver",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.DoIt || DoIt))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{}, smalltalk.HLCodeModel)})},
args: [],
source: "defaultReceiver\x0a\x09^ DoIt new",
messageSends: ["new"],
referencedClasses: ["DoIt"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
category: 'actions',
fn: function (someCode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._eval_on_(someCode,_st(self)._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{someCode:someCode}, smalltalk.HLCodeModel)})},
args: ["someCode"],
source: "doIt: someCode\x0a\x0a\x09^ self environment eval: someCode on: self receiver",
messageSends: ["eval:on:", "receiver", "environment"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
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
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLCodeModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
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
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
messageSends: ["ifNil:", "defaultReceiver"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.HLCodeModel)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aWidget)._subscribeTo_(_st(self)._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget}, smalltalk.HLCodeModel)})},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
smalltalk.HLCodeModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLCodeModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "clear\x0a      self contents: ''",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_configureEditor",
smalltalk.method({
selector: "configureEditor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._editor())._at_put_("amberCodeWidget",self);
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09self editor at: 'amberCodeWidget' put: self",
messageSends: ["at:put:", "editor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "contents\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@editor"])._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.HLCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"currentLine",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [ self currentLine ]\x0a\x09\x09ifTrue: [ self selection ]",
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
category: 'actions',
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
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09self announcer announce: (HLDoItRequested on: model).\x0a\x0a\x09result:=  model doIt: self currentLineOrSelection.\x0a\x0a\x09self announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result        ",
messageSends: ["announce:", "on:", "announcer", "doIt:", "currentLineOrSelection"],
referencedClasses: ["HLDoItRequested", "HLDoItExecuted"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "focus\x0a\x09editor focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
var newInspector;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLInspectItRequested || HLInspectItRequested))._on_(self["@model"]));
newInspector=_st(self)._makeInspectorOn_(_st(self)._doIt());
_st(newInspector)._open();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{newInspector:newInspector}, smalltalk.HLCodeWidget)})},
args: [],
source: "inspectIt\x0a\x09| newInspector |\x0a       \x0a\x09self announcer announce: (HLInspectItRequested on: model).\x0a\x09newInspector := self makeInspectorOn: self doIt.\x0a\x09newInspector open",
messageSends: ["announce:", "on:", "announcer", "makeInspectorOn:", "doIt", "open"],
referencedClasses: ["HLInspectItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_makeInspectorOn_",
smalltalk.method({
selector: "makeInspectorOn:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.HLInspector || HLInspector))._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeInspectorOn:",{anObject:anObject}, smalltalk.HLCodeWidget)})},
args: ["anObject"],
source: "makeInspectorOn: anObject\x0a\x0a\x09^ HLInspector new \x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: ["HLInspector"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
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
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLCodeModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLCodeWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "onDoIt\x0a\x09\x0a    self doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onSaveIt",
smalltalk.method({
selector: "onSaveIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
category: 'actions',
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
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st(self)._doIt();
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLPrintItRequested || HLPrintItRequested))._on_(self["@model"]));
_st(self)._print_(_st(result)._printString());
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{result:result}, smalltalk.HLCodeWidget)})},
args: [],
source: "printIt\x0a\x09| result |\x0a\x0a\x09result:=  self doIt.\x0a       \x0a\x09self announcer announce: (HLPrintItRequested on: model).\x0a\x0a    self print: result printString.\x0a\x09self focus.",
messageSends: ["doIt", "announce:", "on:", "announcer", "print:", "printString", "focus"],
referencedClasses: ["HLPrintItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "receiver\x0a\x09^ self model receiver",
messageSends: ["receiver", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.HLCodeWidget)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
messageSends: ["receiver:", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@code"]=_st(html)._textarea();
_st(self)._setEditorOn_(_st(self["@code"])._element());
_st(self)._configureEditor();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLCodeWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a    code := html textarea.\x0a    self setEditorOn: code element.\x0a    self configureEditor",
messageSends: ["textarea", "setEditorOn:", "element", "configureEditor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_saveIt",
smalltalk.method({
selector: "saveIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "saveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"selection",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger}, smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{}, smalltalk.HLCodeWidget)})},
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger}, smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
category: 'actions',
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
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a                lineNumbers: true,\x0a                enterMode: 'flat',\x0a                indentWithTabs: true,\x0a\x09\x09\x09\x09indentUnit: 4,\x0a                matchBrackets: true,\x0a                electricChars: false,\x0a\x09\x09\x09\x09keyMap: 'Amber'\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.HLWidget.klass.fn.prototype._initialize.apply(_st(self), []);
$1=self;
_st($1)._setupCodeMirror();
_st($1)._setupCommands();
$2=_st($1)._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLCodeWidget.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09setupCodeMirror;\x0a\x09\x09setupCommands;\x0a\x09\x09setupKeyMaps.",
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_keyMap",
smalltalk.method({
selector: "keyMap",
category: 'accessing',
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
args: [],
source: "keyMap\x0a\x09^ HLManager current keyBinder systemIsMac\x0a\x09\x09ifTrue: [ self macKeyMap ]\x0a\x09\x09ifFalse: [ self pcKeyMap ]",
messageSends: ["ifTrue:ifFalse:", "macKeyMap", "pcKeyMap", "systemIsMac", "keyBinder", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_macKeyMap",
smalltalk.method({
selector: "macKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("Alt-Backspace").__minus_gt("delWordBefore"),_st("Alt-Delete").__minus_gt("delWordAfter"),_st("Alt-Left").__minus_gt("goWordBoundaryLeft"),_st("Alt-Right").__minus_gt("goWordBoundaryRight"),_st("Cmd-A").__minus_gt("selectAll"),_st("Cmd-Alt-F").__minus_gt("replace"),_st("Cmd-D").__minus_gt("doIt"),_st("Cmd-Down").__minus_gt("goDocEnd"),_st("Cmd-End").__minus_gt("goDocEnd"),_st("Cmd-F").__minus_gt("find"),_st("Cmd-G").__minus_gt("findNext"),_st("Cmd-I").__minus_gt("inspectIt"),_st("Cmd-Left").__minus_gt("goLineStart"),_st("Cmd-P").__minus_gt("printIt"),_st("Cmd-Right").__minus_gt("goLineEnd"),_st("Cmd-S").__minus_gt("saveIt"),_st("Cmd-Up").__minus_gt("goDocStart"),_st("Cmd-Y").__minus_gt("redo"),_st("Cmd-Z").__minus_gt("undo"),_st("Cmd-[").__minus_gt("indentLess"),_st("Cmd-]").__minus_gt("indentMore"),_st("Ctrl-Alt-Backspace").__minus_gt("delWordAfter"),_st("Shift-Cmd-Alt-F").__minus_gt("replaceAll"),_st("Shift-Cmd-G").__minus_gt("findPrev"),_st("Shift-Cmd-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"macKeyMap",{}, smalltalk.HLCodeWidget.klass)})},
args: [],
source: "macKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Backspace'\x09\x09-> 'delWordBefore'.\x0a\x09\x09'Alt-Delete'\x09\x09-> 'delWordAfter'. \x0a\x09\x09'Alt-Left'\x09\x09-> 'goWordBoundaryLeft'.\x0a\x09\x09'Alt-Right'\x09\x09-> 'goWordBoundaryRight'. \x0a\x09\x09'Cmd-A'\x09\x09\x09-> 'selectAll'. \x0a\x09\x09'Cmd-Alt-F'\x09\x09-> 'replace'. \x0a\x09\x09'Cmd-D'\x09\x09\x09-> 'doIt'. \x0a\x09\x09'Cmd-Down'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-End'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-F'\x09\x09\x09-> 'find'.\x0a\x09\x09'Cmd-G'\x09\x09\x09-> 'findNext'. \x0a\x09\x09'Cmd-I'\x09\x09\x09-> 'inspectIt'. \x0a\x09\x09'Cmd-Left'\x09\x09-> 'goLineStart'. \x0a\x09\x09'Cmd-P'\x09\x09\x09-> 'printIt'. \x0a\x09\x09'Cmd-Right'\x09\x09-> 'goLineEnd'. \x0a\x09\x09'Cmd-S'\x09\x09\x09-> 'saveIt'. \x0a\x09\x09'Cmd-Up'\x09\x09-> 'goDocStart'. \x0a\x09\x09'Cmd-Y'\x09\x09\x09-> 'redo'.\x0a\x09\x09'Cmd-Z'\x09\x09\x09-> 'undo'. \x0a\x09\x09'Cmd-['\x09\x09\x09-> 'indentLess'. \x0a\x09\x09'Cmd-]'\x09\x09\x09-> 'indentMore'.\x0a\x09\x09'Ctrl-Alt-Backspace'\x09-> 'delWordAfter'. \x0a\x09\x09'Shift-Cmd-Alt-F'\x09-> 'replaceAll'.\x0a\x09\x09'Shift-Cmd-G'\x09\x09-> 'findPrev'. \x0a\x09\x09'Shift-Cmd-Z'\x09\x09-> 'redo'. \x0a    \x09'fallthrough' \x09-> { 'basic' }\x0a  }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_pcKeyMap",
smalltalk.method({
selector: "pcKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[_st("Alt-Left").__minus_gt("goLineStart"),_st("Alt-Right").__minus_gt("goLineEnd"),_st("Alt-Up").__minus_gt("goDocStart"),_st("Ctrl-A").__minus_gt("selectAll"),_st("Ctrl-Backspace").__minus_gt("delWordBefore"),_st("Ctrl-D").__minus_gt("doIt"),_st("Ctrl-Delete").__minus_gt("delWordAfter"),_st("Ctrl-Down").__minus_gt("goDocEnd"),_st("Ctrl-End").__minus_gt("goDocEnd"),_st("Ctrl-F").__minus_gt("find"),_st("Ctrl-G").__minus_gt("findNext"),_st("Ctrl-I").__minus_gt("inspectIt"),_st("Ctrl-Home").__minus_gt("goDocStart"),_st("Ctrl-Left").__minus_gt("goWordBoundaryLeft"),_st("Ctrl-P").__minus_gt("printIt"),_st("Ctrl-Right").__minus_gt("goWordBoundaryRight"),_st("Ctrl-S").__minus_gt("saveIt"),_st("Ctrl-Y").__minus_gt("redo"),_st("Ctrl-Z").__minus_gt("undo"),_st("Ctrl-[").__minus_gt("indentLess"),_st("Ctrl-]").__minus_gt("indentMore"),_st("Shift-Ctrl-F").__minus_gt("replace"),_st("Shift-Ctrl-G").__minus_gt("findPrev"),_st("Shift-Ctrl-R").__minus_gt("replaceAll"),_st("Shift-Ctrl-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic"])];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pcKeyMap",{}, smalltalk.HLCodeWidget.klass)})},
args: [],
source: "pcKeyMap\x0a\x09^ {\x0a\x09\x09'Alt-Left' -> 'goLineStart'. \x0a\x09\x09'Alt-Right' -> 'goLineEnd'.\x0a\x09\x09'Alt-Up' -> 'goDocStart'. \x0a\x09\x09'Ctrl-A' -> 'selectAll'. \x0a\x09\x09'Ctrl-Backspace' -> 'delWordBefore'. \x0a\x09\x09'Ctrl-D' -> 'doIt'. \x0a\x09\x09'Ctrl-Delete' -> 'delWordAfter'. \x0a\x09\x09'Ctrl-Down' -> 'goDocEnd'.\x0a\x09\x09'Ctrl-End' -> 'goDocEnd'. \x0a\x09\x09'Ctrl-F' -> 'find'.\x0a\x09\x09'Ctrl-G' -> 'findNext'. \x0a\x09\x09'Ctrl-I' -> 'inspectIt'.\x0a\x09\x09'Ctrl-Home' -> 'goDocStart'. \x0a\x09\x09'Ctrl-Left' -> 'goWordBoundaryLeft'. \x0a\x09\x09'Ctrl-P' -> 'printIt'.\x0a\x09\x09'Ctrl-Right' -> 'goWordBoundaryRight'. \x0a\x09\x09'Ctrl-S' -> 'saveIt'. \x0a\x09\x09'Ctrl-Y' -> 'redo'.\x0a\x09\x09'Ctrl-Z' -> 'undo'. \x0a\x09\x09'Ctrl-[' -> 'indentLess'. \x0a\x09\x09'Ctrl-]' -> 'indentMore'.\x0a\x09\x09'Shift-Ctrl-F' -> 'replace'. \x0a\x09\x09'Shift-Ctrl-G' -> 'findPrev'. \x0a\x09\x09'Shift-Ctrl-R' -> 'replaceAll'.\x0a\x09\x09'Shift-Ctrl-Z' -> 'redo'. \x0a\x09\x09'fallthrough' -> #('basic')\x0a}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupCodeMirror",
smalltalk.method({
selector: "setupCodeMirror",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  CodeMirror.keyMap.default.fallthrough = ["basic"] ;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{}, smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupCodeMirror\x0a\x09< CodeMirror.keyMap.default.fallthrough = [\x22basic\x22] >",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupCommands",
smalltalk.method({
selector: "setupCommands",
category: 'initialization',
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
args: [],
source: "setupCommands\x0a\x09(CodeMirror basicAt: 'commands') \x0a\x09\x09at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];\x0a\x09\x09at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];\x0a\x09\x09at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];\x0a\x09\x09at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ]",
messageSends: ["at:put:", "doIt", "amberCodeWidget", "basicAt:", "inspectIt", "printIt", "saveIt"],
referencedClasses: ["CodeMirror"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupKeyMaps",
smalltalk.method({
selector: "setupKeyMaps",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{}, smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupKeyMaps\x0a\x09<CodeMirror.keyMap['Amber'] = self._keyMap()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);


smalltalk.addClass('HLSourceCodeWidget', smalltalk.HLCodeWidget, [], 'Helios-Workspace');
smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
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
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09(super onKeyDown: anEvent) ifFalse: [ ^ false ].\x0a    \x0a\x09anEvent ctrlKey ifTrue: [\x0a\x09\x09anEvent keyCode = 83 ifTrue: [\x0a\x09\x09\x09self onSave.\x0a\x09\x09\x09anEvent preventDefault.\x0a\x09\x09\x09^ false ] ]",
messageSends: ["ifFalse:", "onKeyDown:", "ifTrue:", "onSave", "preventDefault", "=", "keyCode", "ctrlKey"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
"_onSave",
smalltalk.method({
selector: "onSave",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onSave",{}, smalltalk.HLSourceCodeWidget)})},
args: [],
source: "onSave",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);



smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Workspace');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
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
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := HLCodeWidget new\x0a    \x09\x09model: self model code;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "code", "model", "new", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
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
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLWorkspaceModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLWorkspaceModel"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
_st(_st(self)._codeWidget())._model_(_st(aModel)._code());
_st(self)._observeCodeWidget();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLWorkspace)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a     \x0a    self codeWidget model: aModel code.\x0a    self observeCodeWidget.\x0a    ",
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{}, smalltalk.HLWorkspace)})},
args: [],
source: "observeCodeWidget\x0a\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{}, smalltalk.HLWorkspace)})},
args: [],
source: "onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{}, smalltalk.HLWorkspace)})},
args: [],
source: "onInspectIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{}, smalltalk.HLWorkspace)})},
args: [],
source: "onPrintIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st(self)._codeWidget());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLWorkspace)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self codeWidget\x0a    ",
messageSends: ["with:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLWorkspace.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);


smalltalk.addClass('HLWorkspaceModel', smalltalk.Object, ['announcer', 'environment', 'code'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
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
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ HLCodeModel on: self environment ]",
messageSends: ["ifNil:", "on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
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
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLWorkspaceModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
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
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspaceModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLWorkspaceModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLWorkspaceModel.klass);


