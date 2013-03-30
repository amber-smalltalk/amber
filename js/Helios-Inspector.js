smalltalk.addPackage('Helios-Inspector');
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget', 'label'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLCodeWidget())._new();
_st($3)._model_(_st(self["@model"])._code());
_st($3)._receiver_(_st(self["@model"])._inspectee());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLInspector)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := HLCodeWidget new\x0a    \x09\x09model: model code;\x0a        \x09receiver: model inspectee;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "code", "new", "receiver:", "inspectee", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "displayWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLInspectorDisplayWidget(){return smalltalk.HLInspectorDisplayWidget||(typeof HLInspectorDisplayWidget=="undefined"?nil:HLInspectorDisplayWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@displayWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLInspectorDisplayWidget())._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@displayWidget"]=$4;
$1=self["@displayWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayWidget",{},smalltalk.HLInspector)})},
args: [],
source: "displayWidget\x0a\x09^ displayWidget ifNil: [\x0a\x09\x09displayWidget := HLInspectorDisplayWidget new\x0a    \x09\x09model: self model;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorDisplayWidget"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self)._model())._inspect_on_(anObject,self);
$1=self;
_st($1)._refreshVariablesWidget();
$2=_st($1)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.HLInspector)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self model inspect: anObject on: self.\x0a    \x0a\x09self \x0a    \x09refreshVariablesWidget;\x0a\x09\x09refreshDisplayWidget",
messageSends: ["inspect:on:", "model", "refreshVariablesWidget", "refreshDisplayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._inspectee();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},smalltalk.HLInspector)})},
args: [],
source: "inspectee\x0a\x09^ self model inspectee",
messageSends: ["inspectee", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._inspectee_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},smalltalk.HLInspector)})},
args: ["anObject"],
source: "inspectee: anObject\x0a\x09self model inspectee: anObject",
messageSends: ["inspectee:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

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
$1=_st(_st(self["@model"])._inspectee())._printString();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLInspector)})},
args: [],
source: "label\x0a    ^ label ifNil: [ model inspectee printString ]",
messageSends: ["ifNil:", "printString", "inspectee"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLInspectorModel(){return smalltalk.HLInspectorModel||(typeof HLInspectorModel=="undefined"?nil:HLInspectorModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._model_(_st($HLInspectorModel())._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspector)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLInspectorModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLInspectorModel"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@model"]=aModel;
_st(_st(self)._codeWidget())._model_(_st(aModel)._code());
$1=self;
_st($1)._observeCodeWidget();
_st($1)._observeVariablesWidget();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspector)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel. \x0a    self codeWidget model: aModel code.\x0a    \x0a    self \x0a        observeCodeWidget;\x0a    \x09observeVariablesWidget;\x0a        observeModel",
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget", "observeVariablesWidget", "observeModel"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "observeCodeWidget",
category: 'actions',
fn: function (){
var self=this;
function $HLDoItExecuted(){return smalltalk.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._codeWidget())._announcer())._on_do_($HLDoItExecuted(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onDoneIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{},smalltalk.HLInspector)})},
args: [],
source: "observeCodeWidget\x0a\x09self codeWidget announcer \x0a    \x09on: HLDoItExecuted \x0a        do: [ self onDoneIt ]",
messageSends: ["on:do:", "onDoneIt", "announcer", "codeWidget"],
referencedClasses: ["HLDoItExecuted"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLInstanceVariableSelected(){return smalltalk.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._on_do_($HLInstanceVariableSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onInstanceVariableSelected();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLInspector)})},
args: [],
source: "observeModel\x0a\x09self model announcer\x0a        on: HLInstanceVariableSelected do: [ :ann | self onInstanceVariableSelected ]",
messageSends: ["on:do:", "onInstanceVariableSelected", "announcer", "model"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "observeVariablesWidget",
category: 'actions',
fn: function (){
var self=this;
function $HLRefreshRequested(){return smalltalk.HLRefreshRequested||(typeof HLRefreshRequested=="undefined"?nil:HLRefreshRequested)}
function $HLDiveRequested(){return smalltalk.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._variablesWidget())._announcer();
_st($1)._on_do_($HLRefreshRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onRefresh();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLDiveRequested(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onDive();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeVariablesWidget",{},smalltalk.HLInspector)})},
args: [],
source: "observeVariablesWidget\x0a\x09self variablesWidget announcer \x0a    \x09on: HLRefreshRequested do: [ :ann | self onRefresh ];\x0a        on: HLDiveRequested do:[ self onDive ]\x0a        ",
messageSends: ["on:do:", "onRefresh", "announcer", "variablesWidget", "onDive"],
referencedClasses: ["HLRefreshRequested", "HLDiveRequested"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onDive",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._inspect_(_st(_st(self)._model())._selectedInstVarObject());
return self}, function($ctx1) {$ctx1.fill(self,"onDive",{},smalltalk.HLInspector)})},
args: [],
source: "onDive\x0a\x0a\x09self inspect: self model selectedInstVarObject",
messageSends: ["inspect:", "selectedInstVarObject", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoneIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onDoneIt",{},smalltalk.HLInspector)})},
args: [],
source: "onDoneIt\x0a\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},smalltalk.HLInspector)})},
args: [],
source: "onInspectIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstanceVariableSelected",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._codeWidget())._receiver_(_st(_st(self)._model())._selectedInstVarObject());
_st(self)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"onInstanceVariableSelected",{},smalltalk.HLInspector)})},
args: [],
source: "onInstanceVariableSelected\x0a\x09self codeWidget receiver: self model selectedInstVarObject.\x0a\x09self refreshDisplayWidget",
messageSends: ["receiver:", "selectedInstVarObject", "model", "codeWidget", "refreshDisplayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},smalltalk.HLInspector)})},
args: [],
source: "onPrintIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "onRefresh",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onRefresh",{},smalltalk.HLInspector)})},
args: [],
source: "onRefresh\x0a\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
function $HLTab(){return smalltalk.HLTab||(typeof HLTab=="undefined"?nil:HLTab)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTab())._on_labelled_(self,_st(self)._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.HLInspector)})},
args: [],
source: "open\x0a\x09HLManager current addTab: (HLTab on: self labelled: self tabLabel)",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._inspect_(_st(self)._inspectee());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLInspector)})},
args: [],
source: "refresh\x0a\x09self inspect: self inspectee",
messageSends: ["inspect:", "inspectee"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshDisplayWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._displayWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshDisplayWidget",{},smalltalk.HLInspector)})},
args: [],
source: "refreshDisplayWidget\x0a\x09self displayWidget refresh",
messageSends: ["refresh", "displayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshVariablesWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._variablesWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshVariablesWidget",{},smalltalk.HLInspector)})},
args: [],
source: "refreshVariablesWidget\x0a\x09self variablesWidget refresh",
messageSends: ["refresh", "variablesWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st(self)._variablesWidget(),_st(self)._displayWidget()),_st(self)._codeWidget())));
_st(_st(self)._variablesWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspector)})},
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLContainer with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            \x09\x09with: self variablesWidget\x0a            \x09    with: self displayWidget)\x0a        with: self codeWidget)).\x0a\x09\x0a\x09self variablesWidget focus\x0a ",
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget", "focus"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "setLabel:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},smalltalk.HLInspector)})},
args: ["aString"],
source: "setLabel: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables:",
category: 'actions',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._variables_(aDictionary);
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aDictionary:aDictionary},smalltalk.HLInspector)})},
args: ["aDictionary"],
source: "setVariables: aDictionary\x0a\x09self model variables: aDictionary",
messageSends: ["variables:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Inspector";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLInspector)})},
args: [],
source: "tabLabel\x0a    ^ 'Inspector'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "variablesWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLInspectorVariablesWidget(){return smalltalk.HLInspectorVariablesWidget||(typeof HLInspectorVariablesWidget=="undefined"?nil:HLInspectorVariablesWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@variablesWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLInspectorVariablesWidget())._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@variablesWidget"]=$4;
$1=self["@variablesWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variablesWidget",{},smalltalk.HLInspector)})},
args: [],
source: "variablesWidget\x0a\x09^ variablesWidget ifNil: [\x0a\x09\x09variablesWidget := HLInspectorVariablesWidget new\x0a    \x09\x09model: self model;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorVariablesWidget"]
}),
smalltalk.HLInspector);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLInspector.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Inspector";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLInspector.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Inspector'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLInspector.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplayWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspectorDisplayWidget)})},
args: [],
source: "model\x0a\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspectorDisplayWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(_st(self)._selectionDisplayString());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspectorDisplayWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: self selectionDisplayString\x0a    ",
messageSends: ["with:", "selectionDisplayString", "div"],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionDisplayString",
category: 'rendering',
fn: function (){
var self=this;
var selection;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
selection=_st(self["@model"])._selection();
$2=_st(_st(_st(self["@model"])._variables())._keys())._includes_(selection);
if(smalltalk.assert($2)){
$1=_st(_st(self["@model"])._instVarObjectAt_(selection))._printString();
} else {
$1="";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionDisplayString",{selection:selection},smalltalk.HLInspectorDisplayWidget)})},
args: [],
source: "selectionDisplayString\x0a\x09|selection|\x0a\x09selection := model selection.\x0a    ^ (model variables keys includes: selection)\x0a    \x09ifTrue:[(model instVarObjectAt: selection) printString]\x0a      \x09ifFalse:['']",
messageSends: ["selection", "ifTrue:ifFalse:", "printString", "instVarObjectAt:", "includes:", "keys", "variables"],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
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
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLInspectorModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return smalltalk.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@code"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@code"]=_st($HLCodeModel())._on_(_st(self)._environment());
$1=self["@code"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},smalltalk.HLInspectorModel)})},
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ code := HLCodeModel on: self environment ]",
messageSends: ["ifNil:", "on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLInspectorModel);

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
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLInspectorModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLInspectorModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:on:",
category: 'actions',
fn: function (anObject,anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspectee"]=anObject;
self["@variables"]=[];
_st(self["@inspectee"])._inspectOn_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:on:",{anObject:anObject,anInspector:anInspector},smalltalk.HLInspectorModel)})},
args: ["anObject", "anInspector"],
source: "inspect: anObject on: anInspector\x0a\x09inspectee := anObject.\x0a\x09variables := #().\x0a\x09inspectee inspectOn: anInspector    ",
messageSends: ["inspectOn:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@inspectee"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},smalltalk.HLInspectorModel)})},
args: [],
source: "inspectee \x0a\x09^ inspectee ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspectee"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},smalltalk.HLInspectorModel)})},
args: ["anObject"],
source: "inspectee: anObject \x0a\x09inspectee := anObject\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarObjectAt:",
category: 'actions',
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._variables())._at_(anInstVarName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarObjectAt:",{anInstVarName:anInstVarName},smalltalk.HLInspectorModel)})},
args: ["anInstVarName"],
source: "instVarObjectAt: anInstVarName\x0a\x09^ self variables at: anInstVarName",
messageSends: ["at:", "variables"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.HLInspectorModel)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVar:",
category: 'actions',
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selection_(anInstVarName);
return self}, function($ctx1) {$ctx1.fill(self,"selectedInstVar:",{anInstVarName:anInstVarName},smalltalk.HLInspectorModel)})},
args: ["anInstVarName"],
source: "selectedInstVar: anInstVarName\x0a    self selection: anInstVarName",
messageSends: ["selection:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVarObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._instVarObjectAt_(_st(self)._selection());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedInstVarObject",{},smalltalk.HLInspectorModel)})},
args: [],
source: "selectedInstVarObject\x0a\x09^ self instVarObjectAt: self selection\x0a    ",
messageSends: ["instVarObjectAt:", "selection"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selection"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLInspectorModel)})},
args: [],
source: "selection\x0a\x09^ selection ifNil:[ '' ] ",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection:",
category: 'accessing',
fn: function (anObject){
var self=this;
function $HLInstanceVariableSelected(){return smalltalk.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
self["@selection"]=anObject;
_st(_st(self)._announcer())._announce_(_st($HLInstanceVariableSelected())._on_(self["@selection"]));
return self}, function($ctx1) {$ctx1.fill(self,"selection:",{anObject:anObject},smalltalk.HLInspectorModel)})},
args: ["anObject"],
source: "selection: anObject\x0a\x09selection := anObject.\x0a\x0a\x09self announcer announce: (HLInstanceVariableSelected on: selection)\x0a    ",
messageSends: ["announce:", "on:", "announcer"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribe:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aWidget)._subscribeTo_(_st(self)._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget},smalltalk.HLInspectorModel)})},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

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
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.HLInspectorModel)})},
args: [],
source: "variables\x0a\x09^ variables",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "variables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"variables:",{aCollection:aCollection},smalltalk.HLInspectorModel)})},
args: ["aCollection"],
source: "variables: aCollection\x0a\x09variables := aCollection\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLInspectorModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
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
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil:[ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._variables())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "defaultItems\x0a\x09^ self model variables keys",
messageSends: ["keys", "variables", "model"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._model())._inspectee())._class())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "label\x0a\x09^ self model inspectee class name",
messageSends: ["name", "class", "inspectee", "model"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "model\x0a    ^ model\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspectorVariablesWidget)})},
args: ["aModel"],
source: "model: aModel\x0a    model := aModel\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._resetItems();
smalltalk.HLNavigationListWidget.fn.prototype._refresh.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "refresh\x0a\x09self resetItems.\x0a    super refresh\x0a    ",
messageSends: ["resetItems", "refresh"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $HLRefreshRequested(){return smalltalk.HLRefreshRequested||(typeof HLRefreshRequested=="undefined"?nil:HLRefreshRequested)}
function $HLDiveRequested(){return smalltalk.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._button();
_st($1)._class_("btn");
_st($1)._with_("Refresh");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._announcer())._announce_(_st($HLRefreshRequested())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._class_("btn");
_st($3)._with_("Dive");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._announcer())._announce_(_st($HLDiveRequested())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@diveButton"]=$4;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'btn';\x0a\x09\x09with: 'Refresh';\x0a\x09\x09onClick: [ self announcer announce: HLRefreshRequested new ].\x0a\x0a\x09diveButton := html button \x0a\x09\x09class: 'btn';\x0a\x09\x09with: 'Dive'; \x0a\x09\x09onClick: [ self announcer announce: HLDiveRequested new ]",
messageSends: ["class:", "button", "with:", "onClick:", "announce:", "new", "announcer"],
referencedClasses: ["HLRefreshRequested", "HLDiveRequested"]
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderHeadOn_(html);
smalltalk.HLNavigationListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x0a\x09super renderContentOn: html",
messageSends: ["renderHeadOn:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-label");
$2=_st($1)._with_(_st(self)._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: self label",
messageSends: ["class:", "div", "with:", "label"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "resetItems",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetItems",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "resetItems\x0a\x09items := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'reactions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLNavigationListWidget.fn.prototype._selectItem_.apply(_st(self), [anObject]);
_st(_st(self)._model())._selectedInstVar_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},smalltalk.HLInspectorVariablesWidget)})},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09super selectItem: anObject.\x0a    self model selectedInstVar: anObject",
messageSends: ["selectItem:", "selectedInstVar:", "model"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@model"])._selection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "selection\x0a\x09^ model selection",
messageSends: ["selection"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@model"])._variables();
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.HLInspectorVariablesWidget)})},
args: [],
source: "variables\x0a\x09^ model variables",
messageSends: ["variables"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);



