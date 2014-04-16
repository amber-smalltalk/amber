define("helios/Helios-Workspace", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Workspace');
smalltalk.packages["Helios-Workspace"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLCodeModel', globals.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@announcer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.HLCodeModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "browse:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._browse();
return self}, function($ctx1) {$ctx1.fill(self,"browse:",{anObject:anObject},globals.HLCodeModel)})},
args: ["anObject"],
source: "browse: anObject\x0a\x09anObject browse",
messageSends: ["browse"],
referencedClasses: []
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultReceiver",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._doItReceiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{},globals.HLCodeModel)})},
args: [],
source: "defaultReceiver\x0a\x09^ self environment doItReceiver",
messageSends: ["doItReceiver", "environment"],
referencedClasses: []
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._evaluate_for_(aString,self._receiver());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._tryCatch_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($ErrorHandler())._handleError_(e);
return nil;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},globals.HLCodeModel)})},
args: ["aString"],
source: "doIt: aString\x0a\x09\x22Evaluate aString in the receiver's `environment`.\x0a\x09\x0a\x09Note: Catch any error and handle it manually, bypassing\x0a\x09boot.js behavior to avoid the browser default action on\x0a\x09ctrl+d/ctrl+p.\x0a\x09\x0a\x09See https://github.com/amber-smalltalk/amber/issues/882\x22\x0a\x0a\x09^ [ self environment evaluate: aString for: self receiver ]\x0a\x09\x09tryCatch: [ :e | \x0a\x09\x09\x09ErrorHandler handleError: e.\x0a\x09\x09\x09nil ]",
messageSends: ["tryCatch:", "evaluate:for:", "environment", "receiver", "handleError:"],
referencedClasses: ["ErrorHandler"]
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(_st($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},globals.HLCodeModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
protocol: 'accessing',
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.HLCodeModel)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self environment inspect: anObject",
messageSends: ["inspect:", "environment"],
referencedClasses: []
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@receiver"];
if(($receiver = $2) == null || $receiver.isNil){
self["@receiver"]=self._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},globals.HLCodeModel)})},
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
messageSends: ["ifNil:", "defaultReceiver"],
referencedClasses: []
}),
globals.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},globals.HLCodeModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
globals.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', globals.HLWidget, ['model', 'wrapper', 'code', 'editor', 'state'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.HLCodeWidget)})},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "browseIt",
protocol: 'actions',
fn: function (){
var self=this;
var result;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
result=_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(exception){
return smalltalk.withContext(function($ctx2) {
$1=_st($ErrorHandler())._handleError_(exception);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,2)})}));
_st(self._model())._browse_(result);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"browseIt",{result:result},globals.HLCodeWidget)})},
args: [],
source: "browseIt\x0a\x09| result |\x0a\x09\x0a\x09result := [ self doIt ] on: Error do: [ :exception | \x0a\x09\x09^ ErrorHandler handleError: exception ].\x0a\x09\x09\x0a\x09self model browse: result",
messageSends: ["on:do:", "doIt", "handleError:", "browse:", "model"],
referencedClasses: ["Error", "ErrorHandler"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.HLCodeWidget)})},
args: [],
source: "clear\x0a\x09self contents: ''",
messageSends: ["contents:"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._editor();
$ctx1.sendIdx["editor"]=1;
_st($1)._at_put_("amberCodeWidget",self);
$2=self._editor();
$ctx1.sendIdx["editor"]=2;
_st($2)._on_do_("change",(function(){
return smalltalk.withContext(function($ctx2) {
return self._onChange();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(self._wrapper())._asJQuery())._on_in_do_("mousedown",".CodeMirror pre",(function(event){
var position,node;
return smalltalk.withContext(function($ctx2) {
$3=_st(event)._at_("ctrlKey");
if(smalltalk.assert($3)){
position=_st(self._editor())._coordsChar_(globals.HashedCollection._newFromPairs_(["left",_st(event)._clientX(),"top",_st(event)._clientY()]));
position;
self._onCtrlClickAt_(_st(_st(_st(position)._line()).__at(_st(position)._ch())).__plus((1)));
return _st(event)._preventDefault();
};
}, function($ctx2) {$ctx2.fillBlock({event:event,position:position,node:node},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},globals.HLCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09self editor at: 'amberCodeWidget' put: self.\x0a\x09self editor on: 'change' do: [ self onChange ].\x0a\x0a\x09self wrapper asJQuery on: 'mousedown' in: '.CodeMirror pre' do: [ :event | | position node |\x0a\x09\x09(event at: 'ctrlKey') ifTrue: [\x0a\x09\x09\x09position := self editor coordsChar: #{ \x0a\x09\x09\x09\x09'left' -> event clientX.\x0a\x09\x09\x09\x09'top' -> event clientY\x0a\x09\x09\x09}.\x0a\x09\x09\x09self onCtrlClickAt: (position line @ position ch) + 1.\x0a\x09\x09\x09event preventDefault ] ]",
messageSends: ["at:put:", "editor", "on:do:", "onChange", "on:in:do:", "asJQuery", "wrapper", "ifTrue:", "at:", "coordsChar:", "clientX", "clientY", "onCtrlClickAt:", "+", "@", "line", "ch", "preventDefault"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.HLCodeWidget)})},
args: [],
source: "contents\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
_st(self["@editor"])._setValue_(aString);
$1=self["@state"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._updateState();
};
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},globals.HLCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString.\x0a\x09state ifNotNil: [ self updateState ]",
messageSends: ["setValue:", "ifNotNil:", "updateState"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLine",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},globals.HLCodeWidget)})},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLineOrSelection",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},globals.HLCodeWidget)})},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [ self currentLine ]\x0a\x09\x09ifTrue: [ self selection ]",
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
protocol: 'actions',
fn: function (){
var self=this;
var result;
function $HLDoItExecuted(){return globals.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._model();
$ctx1.sendIdx["model"]=1;
result=_st($1)._doIt_(self._currentLineOrSelection());
_st(_st(self._model())._announcer())._announce_(_st($HLDoItExecuted())._on_(self["@model"]));
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},globals.HLCodeWidget)})},
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09result := self model doIt: self currentLineOrSelection.\x0a\x09self model announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result",
messageSends: ["doIt:", "model", "currentLineOrSelection", "announce:", "announcer", "on:"],
referencedClasses: ["HLDoItExecuted"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editor",
protocol: 'actions',
fn: function (){
var self=this;
var $1;
$1=self["@editor"];
return $1;
},
args: [],
source: "editor\x0a\x09^ editor",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2="helios.editorTheme"._settingValueIfAbsent_("default");
$ctx1.sendIdx["settingValueIfAbsent:"]=1;
$1=globals.HashedCollection._newFromPairs_(["theme",$2,"mode","text/x-stsrc","lineNumbers",true,"enterMode","flat","indentWithTabs",true,"indentUnit",(4),"matchBrackets",true,"electricChars",false,"keyMap","Amber","extraKeys",_st($HashedCollection())._with_(_st("helios.completionKey"._settingValueIfAbsent_("Shift-Space")).__minus_gt("autocomplete"))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},globals.HLCodeWidget)})},
args: [],
source: "editorOptions\x0a\x09^ #{\x0a\x09\x09'theme' -> ('helios.editorTheme' settingValueIfAbsent: 'default').\x0a\x09\x09'mode' -> 'text/x-stsrc'.\x0a        'lineNumbers' -> true.\x0a        'enterMode' -> 'flat'.\x0a        'indentWithTabs' -> true.\x0a\x09\x09'indentUnit' -> 4.\x0a        'matchBrackets' -> true.\x0a        'electricChars' -> false.\x0a\x09\x09'keyMap' -> 'Amber'.\x0a\x09\x09'extraKeys' -> (HashedCollection with: ('helios.completionKey' settingValueIfAbsent: 'Shift-Space') -> 'autocomplete')\x0a\x09}",
messageSends: ["settingValueIfAbsent:", "with:", "->"],
referencedClasses: ["HashedCollection"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLCodeWidget)})},
args: [],
source: "focus\x0a\x09editor focus",
messageSends: ["focus"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._asJQuery())._is_(":active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},globals.HLCodeWidget)})},
args: [],
source: "hasFocus\x0a\x09^ code asJQuery is: ':active'",
messageSends: ["is:", "asJQuery"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasModification\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._inspect_(self._doIt());
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},globals.HLCodeWidget)})},
args: [],
source: "inspectIt\x0a\x09self model inspect: self doIt",
messageSends: ["inspect:", "model", "doIt"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(_st(_st(_st($Smalltalk())._vm())._allSelectors())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(aToken)._string();
$ctx2.sendIdx["string"]=1;
return _st(each)._includesSubString_($2);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},globals.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (Smalltalk vm allSelectors asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["reject:", "select:", "asArray", "allSelectors", "vm", "includesSubString:", "string", "="],
referencedClasses: ["Smalltalk"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return globals.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=_st($HLCodeModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLCodeWidget)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLCodeModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeModel"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "navigateTo:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Finder(){return globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
return smalltalk.withContext(function($ctx1) { 
_st($Finder())._findString_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"navigateTo:",{aString:aString},globals.HLCodeWidget)})},
args: ["aString"],
source: "navigateTo: aString\x0a\x09Finder findString: aString",
messageSends: ["findString:"],
referencedClasses: ["Finder"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "navigateToReference:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLReferences(){return globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLReferences())._openAsTab())._search_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"navigateToReference:",{aString:aString},globals.HLCodeWidget)})},
args: ["aString"],
source: "navigateToReference: aString\x0a\x09(HLReferences openAsTab)\x0a\x09\x09search: aString",
messageSends: ["search:", "openAsTab"],
referencedClasses: ["HLReferences"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onChange",{},globals.HLCodeWidget)})},
args: [],
source: "onChange\x0a\x09self updateState",
messageSends: ["updateState"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onCtrlClickAt:",
protocol: 'reactions',
fn: function (aPoint){
var self=this;
var ast,node;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
ast=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Smalltalk())._parse_(_st(self._editor())._getValue());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(error){
throw $early=[self];
}));
node=_st(ast)._navigationNodeAt_ifAbsent_(aPoint,(function(){
throw $early=[nil];
}));
self._navigateTo_(_st(node)._navigationLink());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onCtrlClickAt:",{aPoint:aPoint,ast:ast,node:node},globals.HLCodeWidget)})},
args: ["aPoint"],
source: "onCtrlClickAt: aPoint\x0a\x09| ast node |\x0a\x09\x0a\x09ast := [ Smalltalk parse: self editor getValue ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ^ self ].\x0a\x09\x0a\x09node := ast \x0a\x09\x09navigationNodeAt: aPoint \x0a\x09\x09ifAbsent: [ ^ nil ].\x0a\x09\x09\x0a\x09self navigateTo: node navigationLink",
messageSends: ["on:do:", "parse:", "getValue", "editor", "navigationNodeAt:ifAbsent:", "navigateTo:", "navigationLink"],
referencedClasses: ["Smalltalk", "Error"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},globals.HLCodeWidget)})},
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},globals.HLCodeWidget)})},
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onSaveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
protocol: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$8,$9,$10,$12,$11;
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
return _st(self["@editor"])._setSelection_end_(globals.HashedCollection._newFromPairs_(["line",currentLine,"ch",(0)]),start);
$ctx2.sendIdx["setSelection:end:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
stop=_st($HashedCollection())._new();
_st(stop)._at_put_("line",currentLine);
$ctx1.sendIdx["at:put:"]=4;
$8=stop;
$9=_st(_st(_st(start)._at_("ch")).__plus(_st(aString)._size())).__plus((2));
$ctx1.sendIdx["+"]=1;
_st($8)._at_put_("ch",$9);
$10=self["@editor"];
$12=_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString);
$ctx1.sendIdx[","]=2;
$11=_st($12).__comma(" ");
$ctx1.sendIdx[","]=1;
_st($10)._replaceSelection_($11);
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_(stop,start);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},globals.HLCodeWidget)})},
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "getSelection", "size", "getLine:", "setSelection:end:", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._print_(_st(self._doIt())._printString());
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{},globals.HLCodeWidget)})},
args: [],
source: "printIt\x0a\x09self print: self doIt printString",
messageSends: ["print:", "printString", "doIt"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},globals.HLCodeWidget)})},
args: [],
source: "receiver\x0a\x09^ self model receiver",
messageSends: ["receiver", "model"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},globals.HLCodeWidget)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
messageSends: ["receiver:", "model"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
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
$ctx1.sendIdx["button"]=3;
_st($5)._class_("button");
$ctx1.sendIdx["class:"]=3;
_st($5)._with_("InspectIt");
$ctx1.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onClick:"]=3;
$7=_st(html)._button();
_st($7)._class_("button");
_st($7)._with_("BrowseIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._browseIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLCodeWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [ self doIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [ self printIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [ self inspectIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'BrowseIt';\x0a\x09\x09onClick: [ self browseIt ]",
messageSends: ["class:", "button", "with:", "onClick:", "doIt", "printIt", "inspectIt", "browseIt"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
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
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLCodeWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'editor'; with: [\x0a\x09\x09code := html textarea ].\x0a\x09state := html div class: 'state'.\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons_bar';\x0a\x09\x09with: [ self renderButtonsOn: html ].\x0a\x09\x0a\x09self \x0a\x09\x09setEditorOn: code element;\x0a\x09\x09configureEditor;\x0a\x09\x09updateState",
messageSends: ["class:", "div", "with:", "textarea", "renderButtonsOn:", "setEditorOn:", "element", "configureEditor", "updateState"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "saveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},globals.HLCodeWidget)})},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{},globals.HLCodeWidget)})},
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger},globals.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{},globals.HLCodeWidget)})},
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger},globals.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorOn:",
protocol: 'actions',
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@editor'] = CodeMirror.fromTextArea(aTextarea, self._editorOptions());
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},globals.HLCodeWidget)})},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, self._editorOptions())>",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateState",
protocol: 'updating',
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
return self}, function($ctx1) {$ctx1.fill(self,"updateState",{},globals.HLCodeWidget)})},
args: [],
source: "updateState\x0a\x09self hasModification \x0a\x09\x09ifTrue: [ state asJQuery addClass: 'modified' ]\x0a\x09\x09ifFalse: [ state asJQuery removeClass: 'modified' ]",
messageSends: ["ifTrue:ifFalse:", "hasModification", "addClass:", "asJQuery", "removeClass:"],
referencedClasses: []
}),
globals.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
var variables,classNames,pseudoVariables;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$9,$8,$7,$6,$10,$5,$4;
$3=_st(_st(_st(anEditor)._display())._wrapper())._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._find_("span.cm-variable");
$1=_st($2)._get();
variables=_st($1)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._html();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
classNames=_st(_st($Smalltalk())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
pseudoVariables=_st($Smalltalk())._pseudoVariableNames();
$9=_st(_st(variables).__comma(classNames)).__comma(pseudoVariables);
$ctx1.sendIdx[","]=1;
$8=_st($9)._asSet();
$7=_st($8)._asArray();
$6=_st($7)._sort();
$5=_st($6)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$10=_st(aToken)._string();
$ctx2.sendIdx["string"]=1;
return _st(each)._includesSubString_($10);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$4=_st($5)._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken,variables:variables,classNames:classNames,pseudoVariables:pseudoVariables},globals.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09| variables classNames pseudoVariables |\x0a\x09\x0a\x09variables := (anEditor display wrapper asJQuery find: 'span.cm-variable') get\x0a\x09\x09collect: [ :each | each asJQuery html ].\x0a\x09\x0a\x09classNames := Smalltalk classes collect: [ :each | each name ].\x0a\x09pseudoVariables := Smalltalk pseudoVariableNames.\x0a\x09\x0a\x09^ ((variables, classNames, pseudoVariables) asSet asArray sort\x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["collect:", "get", "find:", "asJQuery", "wrapper", "display", "html", "classes", "name", "pseudoVariableNames", "reject:", "select:", "sort", "asArray", "asSet", ",", "includesSubString:", "string", "="],
referencedClasses: ["Smalltalk"]
}),
globals.HLCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "hintFor:options:",
protocol: 'hints',
fn: function (anEditor,options){
var self=this;
var cursor,token,completions;
function $CodeMirror(){return globals.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
function $HLCodeWidget(){return globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$7,$9,$10,$8,$6;
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
$7=completions;
$9=_st($CodeMirror())._basicAt_("Pos");
$ctx1.sendIdx["basicAt:"]=2;
$10=_st(cursor)._line();
$ctx1.sendIdx["line"]=1;
$8=_st($9)._value_value_($10,_st(token)._end());
$ctx1.sendIdx["value:value:"]=2;
$6=globals.HashedCollection._newFromPairs_(["list",$7,"from",$8,"to",_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._start())]);
return $6;
}, function($ctx1) {$ctx1.fill(self,"hintFor:options:",{anEditor:anEditor,options:options,cursor:cursor,token:token,completions:completions},globals.HLCodeWidget.klass)})},
args: ["anEditor", "options"],
source: "hintFor: anEditor options: options\x0a\x09| cursor token completions |\x0a\x09\x0a\x09cursor := anEditor getCursor.\x0a\x09token := anEditor getTokenAt: cursor.\x0a\x09token at: 'state' put: ((CodeMirror basicAt: 'innerMode')\x0a\x09\x09value: anEditor getMode value: (token at: 'state')) state.\x0a\x09\x0a\x09completions := token type = 'variable' \x0a\x09\x09ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]\x0a\x09\x09ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].\x0a\x09\x0a\x09^ #{\x0a\x09\x09'list' -> completions.\x0a\x09\x09'from' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token end).\x0a\x09\x09'to' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token start)\x0a\x09}",
messageSends: ["getCursor", "getTokenAt:", "at:put:", "state", "value:value:", "basicAt:", "getMode", "at:", "ifTrue:ifFalse:", "=", "type", "variableHintFor:token:", "messageHintFor:token:", "line", "end", "start"],
referencedClasses: ["CodeMirror", "HLCodeWidget"]
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.HLCodeWidget.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._setupCodeMirror();
self._setupCommands();
$1=self._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HLCodeWidget.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09setupCodeMirror;\x0a\x09\x09setupCommands;\x0a\x09\x09setupKeyMaps.",
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyMap",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st($HLManager())._current())._keyBinder())._systemIsMac();
if(smalltalk.assert($2)){
$1=self._macKeyMap();
} else {
$1=self._pcKeyMap();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyMap",{},globals.HLCodeWidget.klass)})},
args: [],
source: "keyMap\x0a\x09^ HLManager current keyBinder systemIsMac\x0a\x09\x09ifTrue: [ self macKeyMap ]\x0a\x09\x09ifFalse: [ self pcKeyMap ]",
messageSends: ["ifTrue:ifFalse:", "systemIsMac", "keyBinder", "current", "macKeyMap", "pcKeyMap"],
referencedClasses: ["HLManager"]
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "macKeyMap",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["Alt-Backspace","delWordBefore","Alt-Delete","delWordAfter","Alt-Left","goWordLeft","Alt-Right","goWordRight","Cmd-A","selectAll","Cmd-Alt-F","replace","Cmd-D","doIt","Cmd-B","browseIt","Cmd-Down","goDocEnd","Cmd-End","goDocEnd","Cmd-F","find","Cmd-G","findNext","Cmd-I","inspectIt","Cmd-Left","goLineStart","Cmd-P","printIt","Cmd-Right","goLineEnd","Cmd-S","saveIt","Cmd-Up","goDocStart","Cmd-Y","redo","Cmd-Z","undo","Cmd-[","indentLess","Cmd-]","indentMore","Ctrl-Alt-Backspace","delWordAfter","Shift-Cmd-Alt-F","replaceAll","Shift-Cmd-G","findPrev","Shift-Cmd-Z","redo","fallthrough",["basic","emacsy"]]);
return $1;
},
args: [],
source: "macKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Backspace'\x09\x09\x09-> 'delWordBefore'.\x0a\x09\x09'Alt-Delete'\x09\x09\x09-> 'delWordAfter'. \x0a\x09\x09'Alt-Left'\x09\x09\x09\x09-> 'goWordLeft'.\x0a\x09\x09'Alt-Right'\x09\x09\x09\x09-> 'goWordRight'. \x0a\x09\x09'Cmd-A'\x09\x09\x09\x09\x09-> 'selectAll'. \x0a\x09\x09'Cmd-Alt-F'\x09\x09\x09\x09-> 'replace'. \x0a\x09\x09'Cmd-D'\x09\x09\x09\x09\x09-> 'doIt'. \x0a\x09\x09'Cmd-B'\x09\x09\x09\x09\x09-> 'browseIt'. \x0a\x09\x09'Cmd-Down'\x09\x09\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-End'\x09\x09\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-F'\x09\x09\x09\x09\x09-> 'find'.\x0a\x09\x09'Cmd-G'\x09\x09\x09\x09\x09-> 'findNext'. \x0a\x09\x09'Cmd-I'\x09\x09\x09\x09\x09-> 'inspectIt'. \x0a\x09\x09'Cmd-Left'\x09\x09\x09\x09-> 'goLineStart'. \x0a\x09\x09'Cmd-P'\x09\x09\x09\x09\x09-> 'printIt'. \x0a\x09\x09'Cmd-Right'\x09\x09\x09\x09-> 'goLineEnd'. \x0a\x09\x09'Cmd-S'\x09\x09\x09\x09\x09-> 'saveIt'. \x0a\x09\x09'Cmd-Up'\x09\x09\x09\x09-> 'goDocStart'. \x0a\x09\x09'Cmd-Y'\x09\x09\x09\x09\x09-> 'redo'.\x0a\x09\x09'Cmd-Z'\x09\x09\x09\x09\x09-> 'undo'. \x0a\x09\x09'Cmd-['\x09\x09\x09\x09\x09-> 'indentLess'. \x0a\x09\x09'Cmd-]'\x09\x09\x09\x09\x09-> 'indentMore'.\x0a\x09\x09'Ctrl-Alt-Backspace'\x09-> 'delWordAfter'. \x0a\x09\x09'Shift-Cmd-Alt-F'\x09\x09-> 'replaceAll'.\x0a\x09\x09'Shift-Cmd-G'\x09\x09\x09-> 'findPrev'. \x0a\x09\x09'Shift-Cmd-Z'\x09\x09\x09-> 'redo'. \x0a    \x09'fallthrough' \x09\x09\x09-> { 'basic'. 'emacsy' }\x0a  }",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._messageHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},globals.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09messageHintFor: anEditor token: aToken",
messageSends: ["messageHintFor:token:", "at:"],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pcKeyMap",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["Alt-Left","goLineStart","Alt-Right","goLineEnd","Alt-Up","goDocStart","Ctrl-A","selectAll","Ctrl-Backspace","delWordBefore","Ctrl-D","doIt","Ctrl-B","browseIt","Ctrl-Delete","delWordAfter","Ctrl-Down","goDocEnd","Ctrl-End","goDocEnd","Ctrl-F","find","Ctrl-G","findNext","Ctrl-I","inspectIt","Ctrl-Home","goDocStart","Ctrl-Left","goWordLeft","Ctrl-P","printIt","Ctrl-Right","goWordRight","Ctrl-S","saveIt","Ctrl-Y","redo","Ctrl-Z","undo","Ctrl-[","indentLess","Ctrl-]","indentMore","Shift-Ctrl-F","replace","Shift-Ctrl-G","findPrev","Shift-Ctrl-R","replaceAll","Shift-Ctrl-Z","redo","fallthrough",["basic"]]);
return $1;
},
args: [],
source: "pcKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Left' -> \x09\x09'goLineStart'. \x0a\x09\x09'Alt-Right' -> \x09\x09'goLineEnd'.\x0a\x09\x09'Alt-Up' -> \x09\x09'goDocStart'. \x0a\x09\x09'Ctrl-A' -> \x09\x09'selectAll'. \x0a\x09\x09'Ctrl-Backspace' -> 'delWordBefore'. \x0a\x09\x09'Ctrl-D' -> \x09\x09'doIt'. \x0a\x09\x09'Ctrl-B' -> \x09\x09'browseIt'. \x0a\x09\x09'Ctrl-Delete' -> \x09\x09'delWordAfter'. \x0a\x09\x09'Ctrl-Down' -> \x09\x09'goDocEnd'.\x0a\x09\x09'Ctrl-End' -> \x09\x09'goDocEnd'. \x0a\x09\x09'Ctrl-F' -> \x09\x09'find'.\x0a\x09\x09'Ctrl-G' -> \x09\x09'findNext'. \x0a\x09\x09'Ctrl-I' -> \x09\x09'inspectIt'.\x0a\x09\x09'Ctrl-Home' -> \x09\x09'goDocStart'. \x0a\x09\x09'Ctrl-Left' -> \x09\x09'goWordLeft'. \x0a\x09\x09'Ctrl-P' -> \x09\x09'printIt'.\x0a\x09\x09'Ctrl-Right' -> \x09'goWordRight'. \x0a\x09\x09'Ctrl-S' -> \x09\x09'saveIt'. \x0a\x09\x09'Ctrl-Y' -> \x09\x09'redo'.\x0a\x09\x09'Ctrl-Z' -> \x09\x09'undo'. \x0a\x09\x09'Ctrl-[' -> \x09\x09'indentLess'. \x0a\x09\x09'Ctrl-]' -> \x09\x09'indentMore'.\x0a\x09\x09'Shift-Ctrl-F' -> \x09'replace'. \x0a\x09\x09'Shift-Ctrl-G' -> \x09'findPrev'. \x0a\x09\x09'Shift-Ctrl-R' -> \x09'replaceAll'.\x0a\x09\x09'Shift-Ctrl-Z' -> \x09'redo'. \x0a\x09\x09'fallthrough' -> \x09#('basic')\x0a}",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCodeMirror",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 
		CodeMirror.keyMap.default.fallthrough = ["basic"];
		CodeMirror.commands.autocomplete = function(cm) {
			CodeMirror.showHint(cm, self._hintFor_options_);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},globals.HLCodeWidget.klass)})},
args: [],
source: "setupCodeMirror\x0a\x09< \x0a\x09\x09CodeMirror.keyMap.default.fallthrough = [\x22basic\x22];\x0a\x09\x09CodeMirror.commands.autocomplete = function(cm) {\x0a\x09\x09\x09CodeMirror.showHint(cm, self._hintFor_options_);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCommands",
protocol: 'initialization',
fn: function (){
var self=this;
function $CodeMirror(){return globals.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
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
_st($1)._at_put_("saveIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
$5=_st(cm)._amberCodeWidget();
$ctx2.sendIdx["amberCodeWidget"]=4;
return _st($5)._saveIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,4)})}));
$ctx1.sendIdx["at:put:"]=4;
$6=_st($1)._at_put_("browseIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._browseIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,5)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},globals.HLCodeWidget.klass)})},
args: [],
source: "setupCommands\x0a\x09(CodeMirror basicAt: 'commands') \x0a\x09\x09at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];\x0a\x09\x09at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];\x0a\x09\x09at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];\x0a\x09\x09at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ];\x0a\x09\x09at: 'browseIt' put: [ :cm | cm amberCodeWidget browseIt ]",
messageSends: ["at:put:", "basicAt:", "doIt", "amberCodeWidget", "inspectIt", "printIt", "saveIt", "browseIt"],
referencedClasses: ["CodeMirror"]
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyMaps",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{},globals.HLCodeWidget.klass)})},
args: [],
source: "setupKeyMaps\x0a\x09<CodeMirror.keyMap['Amber'] = self._keyMap()>",
messageSends: [],
referencedClasses: []
}),
globals.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._variableHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken},globals.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09variableHintFor: anEditor token: aToken",
messageSends: ["variableHintFor:token:", "at:"],
referencedClasses: []
}),
globals.HLCodeWidget.klass);


smalltalk.addClass('HLNavigationCodeWidget', globals.HLCodeWidget, ['methodContents'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLNavigationCodeWidget.superclass.fn.prototype._configureEditor.apply(_st(self), []));
$ctx1.supercall = false;
self._contents_(self._methodContents());
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},globals.HLNavigationCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09super configureEditor.\x0a\x09self contents: self methodContents",
messageSends: ["configureEditor", "contents:", "methodContents"],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(aString);
($ctx1.supercall = true, globals.HLNavigationCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},globals.HLNavigationCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09self methodContents: aString.\x0a\x09super contents: aString",
messageSends: ["methodContents:", "contents:"],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodContents()).__eq(self._contents()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},globals.HLNavigationCodeWidget)})},
args: [],
source: "hasModification\x0a\x09^ (self methodContents = self contents) not",
messageSends: ["not", "=", "methodContents", "contents"],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@methodContents"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents",{},globals.HLNavigationCodeWidget)})},
args: [],
source: "methodContents\x0a\x09^ methodContents ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@methodContents"]=aString;
$1=self["@methodContents"];
return $1;
},
args: ["aString"],
source: "methodContents: aString\x0a\x09^ methodContents := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
return self},
args: [],
source: "previous\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
return self},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._browserModel_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},globals.HLNavigationCodeWidget.klass)})},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
messageSends: ["browserModel:", "new", "yourself"],
referencedClasses: []
}),
globals.HLNavigationCodeWidget.klass);


smalltalk.addClass('HLBrowserCodeWidget', globals.HLNavigationCodeWidget, ['browserModel'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "browserModel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@browserModel"];
return $1;
},
args: [],
source: "browserModel\x0a\x09^ browserModel",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "browserModel:",
protocol: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@browserModel"]=aBrowserModel;
self._observeSystem();
$1=self._observeBrowserModel();
return self}, function($ctx1) {$ctx1.fill(self,"browserModel:",{aBrowserModel:aBrowserModel},globals.HLBrowserCodeWidget)})},
args: ["aBrowserModel"],
source: "browserModel: aBrowserModel\x0a\x09browserModel := aBrowserModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeBrowserModel",
messageSends: ["observeSystem", "observeBrowserModel"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return globals.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
function $HLShowInstanceToggled(){return globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLSourceCodeSaved(){return globals.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
function $HLAboutToChange(){return globals.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
function $HLParseErrorRaised(){return globals.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
function $HLCompileErrorRaised(){return globals.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
function $HLUnknownVariableErrorRaised(){return globals.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
function $HLInstVarAdded(){return globals.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
function $HLMethodSelected(){return globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLClassSelected(){return globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLProtocolSelected(){return globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return globals.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
function $HLShowTemplate(){return globals.HLShowTemplate||(typeof HLShowTemplate=="undefined"?nil:HLShowTemplate)}
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
_st($1)._on_send_to_($HLSourceCodeFocusRequested(),"onSourceCodeFocusRequested",self);
$ctx1.sendIdx["on:send:to:"]=13;
$2=_st($1)._on_send_to_($HLShowTemplate(),"onShowTemplate:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "observeBrowserModel\x0a\x09self browserModel announcer\x0a\x09\x09on: HLSaveSourceCode\x0a\x09\x09send: #onSaveIt\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeSaved\x0a\x09\x09send: #onSourceCodeSaved\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLAboutToChange\x0a\x09\x09send: #onBrowserAboutToChange:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLParseErrorRaised\x0a\x09\x09send: #onParseError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLCompileErrorRaised\x0a\x09\x09send: #onCompileError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLUnknownVariableErrorRaised\x0a\x09\x09send: #onUnknownVariableError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLInstVarAdded \x0a\x09\x09send: #onInstVarAdded\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09send: #onMethodSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLClassSelected \x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageSelected \x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLProtocolSelected \x0a\x09\x09send: #onProtocolSelected: \x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeFocusRequested \x0a\x09\x09send: #onSourceCodeFocusRequested\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowTemplate\x0a\x09\x09send: #onShowTemplate:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "browserModel"],
referencedClasses: ["HLSaveSourceCode", "HLShowInstanceToggled", "HLSourceCodeSaved", "HLAboutToChange", "HLParseErrorRaised", "HLCompileErrorRaised", "HLUnknownVariableErrorRaised", "HLInstVarAdded", "HLMethodSelected", "HLClassSelected", "HLPackageSelected", "HLProtocolSelected", "HLSourceCodeFocusRequested", "HLShowTemplate"]
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $MethodModified(){return globals.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._browserModel())._systemAnnouncer())._on_send_to_($MethodModified(),"onMethodModified:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "observeSystem\x0a\x09self browserModel systemAnnouncer\x0a    \x09on: MethodModified\x0a        send: #onMethodModified:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "browserModel"],
referencedClasses: ["MethodModified"]
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onBrowserAboutToChange:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var block;
function $HLChangeForbidden(){return globals.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
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
return self}, function($ctx1) {$ctx1.fill(self,"onBrowserAboutToChange:",{anAnnouncement:anAnnouncement,block:block},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onBrowserAboutToChange: anAnnouncement\x0a\x09| block |\x0a\x09\x0a\x09block := anAnnouncement actionBlock.\x0a\x09\x0a\x09self hasModification\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09confirm: 'Changes have not been saved. Do you want to discard these changes?' \x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x22Don't ask twice\x22\x0a\x09\x09\x09\x09\x09self methodContents: self contents.\x0a\x09\x09\x09\x09\x09block value ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09HLChangeForbidden signal ]",
messageSends: ["actionBlock", "ifTrue:", "hasModification", "confirm:ifTrue:", "methodContents:", "contents", "value", "signal"],
referencedClasses: ["HLChangeForbidden"]
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
class_=_st(anAnnouncement)._item();
$1=class_;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(class_)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,class_:class_},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class:= anAnnouncement item.\x0a\x09\x0a\x09class ifNil: [ ^ self contents: '' ].\x0a\x09self contents: class definition",
messageSends: ["item", "ifNil:", "contents:", "definition"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onCompileError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alert_(_st(_st(anAnnouncement)._error())._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"onCompileError:",{anAnnouncement:anAnnouncement},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onCompileError: anAnnouncement\x0a\x09self alert: anAnnouncement error messageText",
messageSends: ["alert:", "messageText", "error"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstVarAdded",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onInstVarAdded",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "onInstVarAdded\x0a\x09self browserModel save: self contents",
messageSends: ["save:", "browserModel", "contents"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodModified:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4,$7,$6,$receiver;
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
if(($receiver = $4) == null || $receiver.isNil){
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
return self}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{anAnnouncement:anAnnouncement,method:method},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onMethodModified: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement method.\x0a\x09\x0a\x09self browserModel selectedClass = method methodClass ifFalse: [ ^ self ].\x0a\x09self browserModel selectedMethod ifNil: [ ^ self ].\x0a\x09self browserModel selectedMethod selector = method selector ifFalse: [ ^ self ].\x0a\x0a\x09self refresh",
messageSends: ["method", "ifFalse:", "=", "selectedClass", "browserModel", "methodClass", "ifNil:", "selectedMethod", "selector", "refresh"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
method=_st(anAnnouncement)._item();
$1=method;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(method)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,method:method},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onMethodSelected: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement item.\x0a\x09\x0a\x09method ifNil: [ ^ self contents: '' ].\x0a\x09self contents: method source",
messageSends: ["item", "ifNil:", "contents:", "source"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
package_=_st(anAnnouncement)._item();
$1=package_;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $2;
} else {
$1;
};
self._contents_(_st(package_)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| package |\x0a\x09\x0a\x09package := anAnnouncement item.\x0a\x09\x0a\x09package ifNil: [ ^ self contents: '' ].\x0a\x09self contents: package definition",
messageSends: ["item", "ifNil:", "contents:", "definition"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onParseError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var lineIndex,newContents;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
return self}, function($ctx1) {$ctx1.fill(self,"onParseError:",{anAnnouncement:anAnnouncement,lineIndex:lineIndex,newContents:newContents},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onParseError: anAnnouncement\x0a\x09| lineIndex newContents |\x0a\x09\x0a\x09lineIndex := 1.\x0a\x09\x0a\x09self contents: (String streamContents: [ :stream |\x0a\x09\x09self contents linesDo: [ :each |\x0a\x09\x09\x09lineIndex = anAnnouncement line \x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09stream \x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: 1 to: anAnnouncement column);\x0a\x09\x09\x09\x09\x09\x09nextPutAll: '<- ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: anAnnouncement message;\x0a\x09\x09\x09\x09\x09\x09nextPutAll: ' ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]\x0a\x09\x09\x09\x09ifFalse: [ stream nextPutAll: each ].\x0a\x09\x09\x09stream nextPutAll: String cr.\x0a\x09\x09\x09lineIndex := lineIndex + 1 ] ])",
messageSends: ["contents:", "streamContents:", "linesDo:", "contents", "ifTrue:ifFalse:", "=", "line", "nextPutAll:", "copyFrom:to:", "column", "message", "+", "size", "cr"],
referencedClasses: ["String"]
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$receiver;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$3=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $3;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a\x09self contents: self browserModel selectedClass definition",
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09self browserModel save: self contents",
messageSends: ["save:", "browserModel", "contents"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$receiver;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$3=self._contents_("");
$ctx1.sendIdx["contents:"]=1;
return $3;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a\x09self contents: self browserModel selectedClass definition",
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowTemplate:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._contents_(_st(anAnnouncement)._template());
return self}, function($ctx1) {$ctx1.fill(self,"onShowTemplate:",{anAnnouncement:anAnnouncement},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onShowTemplate: anAnnouncement\x0a\x09self contents: anAnnouncement template",
messageSends: ["contents:", "template"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "onSourceCodeFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeSaved",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(self._contents());
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeSaved",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "onSourceCodeSaved\x0a\x09self methodContents: self contents.\x0a\x09self updateState",
messageSends: ["methodContents:", "contents", "updateState"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnknownVariableError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var error;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
return self}, function($ctx1) {$ctx1.fill(self,"onUnknownVariableError:",{anAnnouncement:anAnnouncement,error:error},globals.HLBrowserCodeWidget)})},
args: ["anAnnouncement"],
source: "onUnknownVariableError: anAnnouncement\x0a\x09| error |\x0a\x09\x0a\x09error := anAnnouncement error.\x0a\x09\x0a\x09self \x0a\x09\x09confirm: (String streamContents: [ :stream |\x0a\x09\x09\x09stream \x0a\x09\x09\x09\x09nextPutAll: error messageText;\x0a\x09\x09\x09\x09nextPutAll: String cr;\x0a\x09\x09\x09\x09nextPutAll: 'Would you like to define an instance variable?' ])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self browserModel addInstVarNamed: error variableName ]",
messageSends: ["error", "confirm:ifTrue:", "streamContents:", "nextPutAll:", "messageText", "cr", "addInstVarNamed:", "browserModel", "variableName"],
referencedClasses: ["String"]
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "refresh\x0a\x09self hasModification ifTrue: [ ^ self ].\x0a    self hasFocus ifTrue: [ ^ self ].\x0a\x0a\x09self contents: self browserModel selectedMethod source",
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "browserModel"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'actions',
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
($ctx1.supercall = true, globals.HLBrowserCodeWidget.superclass.fn.prototype._renderButtonsOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLBrowserCodeWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'SaveIt';\x0a\x09\x09onClick: [ self saveIt ].\x0a\x09super renderButtonsOn: html",
messageSends: ["class:", "button", "with:", "onClick:", "saveIt", "renderButtonsOn:"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._saveSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "saveIt\x0a\x09self browserModel saveSourceCode",
messageSends: ["saveSourceCode", "browserModel"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.HLBrowserCodeWidget.superclass.fn.prototype._unregsiter.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._announcer();
_st($1)._unsubscribe_(self);
$ctx1.sendIdx["unsubscribe:"]=1;
_st(_st(self._browserModel())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLBrowserCodeWidget)})},
args: [],
source: "unregister\x0a\x09super unregsiter.\x0a\x09\x0a\x09self browserModel announcer unsubscribe: self.\x0a\x09self browserModel systemAnnouncer unsubscribe: self",
messageSends: ["unregsiter", "unsubscribe:", "announcer", "browserModel", "systemAnnouncer"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowserCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._browserModel_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},globals.HLBrowserCodeWidget.klass)})},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
messageSends: ["browserModel:", "new", "yourself"],
referencedClasses: []
}),
globals.HLBrowserCodeWidget.klass);


smalltalk.addClass('HLWorkspace', globals.HLWidget, ['codeWidget', 'transcript'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeWidget(){return globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@codeWidget"]=_st($HLCodeWidget())._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},globals.HLWorkspace)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeWidget"]
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._codeWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLWorkspace)})},
args: [],
source: "focus\x0a\x09^ self codeWidget focus",
messageSends: ["focus", "codeWidget"],
referencedClasses: []
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(self._codeWidget(),(function(canvas){
return smalltalk.withContext(function($ctx2) {
return self._renderTranscriptOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)})}))));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLWorkspace)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: [ :canvas | self renderTranscriptOn: canvas ]))",
messageSends: ["with:", "with:with:", "codeWidget", "renderTranscriptOn:"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter"]
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTranscriptOn:",
protocol: 'rendering',
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
return self}, function($ctx1) {$ctx1.fill(self,"renderTranscriptOn:",{html:html},globals.HLWorkspace)})},
args: ["html"],
source: "renderTranscriptOn: html\x0a\x09html div \x0a\x09\x09class: 'transcript-container';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'list-label';\x0a\x09\x09\x09\x09with: 'Transcript'.\x0a\x09\x09\x09self transcript renderOn: html ]",
messageSends: ["class:", "div", "with:", "renderOn:", "transcript"],
referencedClasses: []
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "transcript",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLTranscript(){return globals.HLTranscript||(typeof HLTranscript=="undefined"?nil:HLTranscript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@transcript"];
if(($receiver = $2) == null || $receiver.isNil){
self["@transcript"]=_st($HLTranscript())._new();
$1=self["@transcript"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transcript",{},globals.HLWorkspace)})},
args: [],
source: "transcript\x0a\x09^ transcript ifNil: [ transcript := HLTranscript new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLTranscript"]
}),
globals.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLWorkspace.superclass.fn.prototype._unregister.apply(_st(self), []));
$ctx1.supercall = false;
$ctx1.sendIdx["unregister"]=1;
_st(self._transcript())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLWorkspace)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self transcript unregister",
messageSends: ["unregister", "transcript"],
referencedClasses: []
}),
globals.HLWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";
},
args: [],
source: "tabClass\x0a\x09^ 'workspace'",
messageSends: [],
referencedClasses: []
}),
globals.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Workspace";
},
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
globals.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (10);
},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
globals.HLWorkspace.klass);

});
