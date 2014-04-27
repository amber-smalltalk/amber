define("helios/Helios-Inspector", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Inspector');
smalltalk.packages["Helios-Inspector"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLInspectorDisplayWidget', globals.HLNavigationListWidget, ['inspector'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspector"];
return $1;
},
args: [],
source: "inspector\x0a\x09^ inspector",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector:",
protocol: 'accessing',
fn: function (anInspector){
var self=this;
self["@inspector"]=anInspector;
return self},
args: ["anInspector"],
source: "inspector: anInspector\x0a\x09inspector := anInspector",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._model();
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLInspectorDisplayWidget)})},
args: [],
source: "model\x0a\x0a\x09^ self inspector model",
messageSends: ["model", "inspector"],
referencedClasses: []
}),
globals.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(self._selectionDisplayString());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLInspectorDisplayWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: self selectionDisplayString",
messageSends: ["with:", "div", "selectionDisplayString"],
referencedClasses: []
}),
globals.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionDisplayString",
protocol: 'rendering',
fn: function (){
var self=this;
var selection;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2;
$1=self._model();
$ctx1.sendIdx["model"]=1;
selection=_st($1)._selection();
$5=self._model();
$ctx1.sendIdx["model"]=2;
$4=_st($5)._variables();
$3=_st($4)._includesKey_(selection);
if(smalltalk.assert($3)){
$2=_st(_st(self._model())._instVarObjectAt_(selection))._printString();
} else {
$2="";
};
return $2;
}, function($ctx1) {$ctx1.fill(self,"selectionDisplayString",{selection:selection},globals.HLInspectorDisplayWidget)})},
args: [],
source: "selectionDisplayString\x0a\x09|selection|\x0a\x09selection := self model selection.\x0a    ^ (self model variables includesKey: selection)\x0a    \x09ifTrue:[ (self model instVarObjectAt: selection) printString ]\x0a      \x09ifFalse:[ '' ]",
messageSends: ["selection", "model", "ifTrue:ifFalse:", "includesKey:", "variables", "printString", "instVarObjectAt:"],
referencedClasses: []
}),
globals.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', globals.HLModel, ['inspectee', 'code', 'variables', 'label', 'selection'], 'Helios-Inspector');
globals.HLInspectorModel.comment="I am the model of the Helios inspector `HLInspectorWidget`.\x0a\x0a## API\x0a\x0aUse the method `inspect:on:` to inspect an object on an inspector.";
smalltalk.addMethod(
smalltalk.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return globals.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@code"];
if(($receiver = $2) == null || $receiver.isNil){
self["@code"]=_st($HLCodeModel())._on_(self._environment());
$1=self["@code"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},globals.HLInspectorModel)})},
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ code := HLCodeModel on: self environment ]",
messageSends: ["ifNil:", "on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:on:",
protocol: 'actions',
fn: function (anObject,anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspectee"]=anObject;
self["@variables"]=[];
_st(self["@inspectee"])._inspectOn_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:on:",{anObject:anObject,anInspector:anInspector},globals.HLInspectorModel)})},
args: ["anObject", "anInspector"],
source: "inspect: anObject on: anInspector\x0a\x09inspectee := anObject.\x0a\x09variables := #().\x0a\x09inspectee inspectOn: anInspector",
messageSends: ["inspectOn:"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspectee"];
return $1;
},
args: [],
source: "inspectee \x0a\x09^ inspectee",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@inspectee"]=anObject;
return self},
args: ["anObject"],
source: "inspectee: anObject \x0a\x09inspectee := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarObjectAt:",
protocol: 'actions',
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._variables())._at_(anInstVarName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarObjectAt:",{anInstVarName:anInstVarName},globals.HLInspectorModel)})},
args: ["anInstVarName"],
source: "instVarObjectAt: anInstVarName\x0a\x09^ self variables at: anInstVarName",
messageSends: ["at:", "variables"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@label"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._inspectee())._printString();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HLInspectorModel)})},
args: [],
source: "label\x0a    ^ label ifNil: [ self inspectee printString ]",
messageSends: ["ifNil:", "printString", "inspectee"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a    label := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVar:",
protocol: 'actions',
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selection_(anInstVarName);
return self}, function($ctx1) {$ctx1.fill(self,"selectedInstVar:",{anInstVarName:anInstVarName},globals.HLInspectorModel)})},
args: ["anInstVarName"],
source: "selectedInstVar: anInstVarName\x0a    self selection: anInstVarName",
messageSends: ["selection:"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVarObject",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarObjectAt_(self._selection());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedInstVarObject",{},globals.HLInspectorModel)})},
args: [],
source: "selectedInstVarObject\x0a\x09^ self instVarObjectAt: self selection",
messageSends: ["instVarObjectAt:", "selection"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@selection"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},globals.HLInspectorModel)})},
args: [],
source: "selection\x0a\x09^ selection ifNil:[ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
function $HLInstanceVariableSelected(){return globals.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
self["@selection"]=anObject;
_st(self._announcer())._announce_(_st($HLInstanceVariableSelected())._on_(self["@selection"]));
return self}, function($ctx1) {$ctx1.fill(self,"selection:",{anObject:anObject},globals.HLInspectorModel)})},
args: ["anObject"],
source: "selection: anObject\x0a\x09selection := anObject.\x0a\x0a\x09self announcer announce: (HLInstanceVariableSelected on: selection)",
messageSends: ["announce:", "announcer", "on:"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribe:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aWidget)._subscribeTo_(self._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget},globals.HLInspectorModel)})},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@variables"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st($Dictionary())._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},globals.HLInspectorModel)})},
args: [],
source: "variables\x0a\x09^ variables ifNil: [ Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "variables:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@variables"]=aCollection;
return self},
args: ["aCollection"],
source: "variables: aCollection\x0a\x09variables := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorModel);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},globals.HLInspectorModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
globals.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', globals.HLNavigationListWidget, ['announcer', 'inspector', 'list', 'diveButton'], 'Helios-Inspector');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil:[ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._variables();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "defaultItems\x0a\x09^ self variables",
messageSends: ["variables"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "dive",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDiveRequested(){return globals.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLDiveRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"dive",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "dive\x0a\x09self announcer announce: HLDiveRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLDiveRequested"]
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspector"];
return $1;
},
args: [],
source: "inspector\x0a\x09^ inspector",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector:",
protocol: 'accessing',
fn: function (anInspector){
var self=this;
self["@inspector"]=anInspector;
return self},
args: ["anInspector"],
source: "inspector: anInspector\x0a\x09inspector := anInspector",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "label\x0a\x09^ self model label",
messageSends: ["label", "model"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._model();
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "model\x0a    ^ self inspector model",
messageSends: ["model", "inspector"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._variables()).__eq(self._items());
if(! smalltalk.assert($1)){
self._resetItems();
($ctx1.supercall = true, globals.HLInspectorVariablesWidget.superclass.fn.prototype._refresh.apply(_st(self), []));
$ctx1.supercall = false;
};
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "refresh\x0a\x09self variables = self items ifFalse: [\x0a\x09\x09self resetItems.\x0a    \x09super refresh ]",
messageSends: ["ifFalse:", "=", "variables", "items", "resetItems", "refresh"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn");
_st($1)._with_("Dive");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._dive();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@diveButton"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09diveButton := html button \x0a\x09\x09class: 'btn';\x0a\x09\x09with: 'Dive'; \x0a\x09\x09onClick: [ self dive ]",
messageSends: ["class:", "button", "with:", "onClick:", "dive"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeadOn_(html);
($ctx1.supercall = true, globals.HLInspectorVariablesWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self._wrapper())._onDblClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._dive();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x0a\x09super renderContentOn: html.\x0a\x09self wrapper onDblClick: [ self dive ]",
messageSends: ["renderHeadOn:", "renderContentOn:", "onDblClick:", "wrapper", "dive"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-label");
$2=_st($1)._with_(self._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},globals.HLInspectorVariablesWidget)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: self label",
messageSends: ["class:", "div", "with:", "label"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "resetItems",
protocol: 'actions',
fn: function (){
var self=this;
self["@items"]=nil;
return self},
args: [],
source: "resetItems\x0a\x09items := nil",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'reactions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLInspectorVariablesWidget.superclass.fn.prototype._selectItem_.apply(_st(self), [anObject]));
$ctx1.supercall = false;
_st(self._model())._selectedInstVar_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},globals.HLInspectorVariablesWidget)})},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09super selectItem: anObject.\x0a    self model selectedInstVar: anObject",
messageSends: ["selectItem:", "selectedInstVar:", "model"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._selection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "selection\x0a\x09^ self model selection",
messageSends: ["selection", "model"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._variables())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},globals.HLInspectorVariablesWidget)})},
args: [],
source: "variables\x0a\x09^ self model variables keys",
messageSends: ["keys", "variables", "model"],
referencedClasses: []
}),
globals.HLInspectorVariablesWidget);



smalltalk.addClass('HLInspectorWidget', globals.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@codeWidget"]=self._defaultCodeWidget();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := self defaultCodeWidget ]",
messageSends: ["ifNil:", "defaultCodeWidget"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@codeWidget"]=aWidget;
return self},
args: ["aWidget"],
source: "codeWidget: aWidget\x0a\x09codeWidget := aWidget",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCodeWidget",
protocol: 'defaults',
fn: function (){
var self=this;
function $HLCodeWidget(){return globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1;
$2=_st($HLCodeWidget())._new();
$3=$2;
$5=self._model();
$ctx1.sendIdx["model"]=1;
$4=_st($5)._code();
_st($3)._model_($4);
_st($2)._receiver_(_st(self._model())._inspectee());
$6=_st($2)._yourself();
$1=$6;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCodeWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "defaultCodeWidget\x0a\x09^ HLCodeWidget new\x0a    \x09model: self model code;\x0a       \x09receiver: self model inspectee;\x0a       \x09yourself",
messageSends: ["model:", "new", "code", "model", "receiver:", "inspectee", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "displayWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorDisplayWidget(){return globals.HLInspectorDisplayWidget||(typeof HLInspectorDisplayWidget=="undefined"?nil:HLInspectorDisplayWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@displayWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLInspectorDisplayWidget())._new();
_st($3)._inspector_(self);
$4=_st($3)._yourself();
self["@displayWidget"]=$4;
$1=self["@displayWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "displayWidget\x0a\x09^ displayWidget ifNil: [\x0a\x09\x09displayWidget := HLInspectorDisplayWidget new\x0a    \x09\x09inspector: self;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "inspector:", "new", "yourself"],
referencedClasses: ["HLInspectorDisplayWidget"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLInspectorWidget.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HLInspectorWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self register",
messageSends: ["initialize", "register"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._model())._inspect_on_(anObject,self);
_st(self._codeWidget())._receiver_(anObject);
self._refreshVariablesWidget();
$1=self._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.HLInspectorWidget)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self model inspect: anObject on: self.\x0a\x09self codeWidget receiver: anObject.\x0a    \x0a\x09self \x0a    \x09refreshVariablesWidget;\x0a\x09\x09refreshDisplayWidget",
messageSends: ["inspect:on:", "model", "receiver:", "codeWidget", "refreshVariablesWidget", "refreshDisplayWidget"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._inspectee();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},globals.HLInspectorWidget)})},
args: [],
source: "inspectee\x0a\x09^ self model inspectee",
messageSends: ["inspectee", "model"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._inspectee_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},globals.HLInspectorWidget)})},
args: ["anObject"],
source: "inspectee: anObject\x0a\x09self model inspectee: anObject",
messageSends: ["inspectee:", "model"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HLInspectorWidget)})},
args: [],
source: "label\x0a    ^ self model label",
messageSends: ["label", "model"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorModel(){return globals.HLInspectorModel||(typeof HLInspectorModel=="undefined"?nil:HLInspectorModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self._model_(_st($HLInspectorModel())._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLInspectorWidget)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLInspectorModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLInspectorModel"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@model"]=aModel;
_st(self._codeWidget())._model_(_st(aModel)._code());
self._observeCodeWidget();
self._observeVariablesWidget();
$1=self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},globals.HLInspectorWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel. \x0a    self codeWidget model: aModel code.\x0a    \x0a    self \x0a        observeCodeWidget;\x0a    \x09observeVariablesWidget;\x0a        observeModel",
messageSends: ["model:", "codeWidget", "code", "observeCodeWidget", "observeVariablesWidget", "observeModel"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeCodeWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDoItExecuted(){return globals.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._codeWidget())._announcer())._on_do_($HLDoItExecuted(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._onDoneIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "observeCodeWidget\x0a\x09self codeWidget announcer \x0a    \x09on: HLDoItExecuted \x0a        do: [ self onDoneIt ]",
messageSends: ["on:do:", "announcer", "codeWidget", "onDoneIt"],
referencedClasses: ["HLDoItExecuted"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLInstanceVariableSelected(){return globals.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._on_send_to_($HLInstanceVariableSelected(),"onInstanceVariableSelected",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLInspectorWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer\x0a        on: HLInstanceVariableSelected\x0a\x09\x09send: #onInstanceVariableSelected\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeVariablesWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDiveRequested(){return globals.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._variablesWidget())._announcer())._on_send_to_($HLDiveRequested(),"onDive",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeVariablesWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "observeVariablesWidget\x0a\x09self variablesWidget announcer \x0a        on: HLDiveRequested \x0a\x09\x09send: #onDive\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "variablesWidget"],
referencedClasses: ["HLDiveRequested"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDive",
protocol: 'reactions',
fn: function (){
var self=this;
function $HLInspector(){return globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLInspector())._new();
_st($1)._inspect_(_st(self._model())._selectedInstVarObject());
$2=_st($1)._openAsTab();
return self}, function($ctx1) {$ctx1.fill(self,"onDive",{},globals.HLInspectorWidget)})},
args: [],
source: "onDive\x0a\x09HLInspector new \x0a\x09\x09inspect: self model selectedInstVarObject;\x0a\x09\x09openAsTab",
messageSends: ["inspect:", "new", "selectedInstVarObject", "model", "openAsTab"],
referencedClasses: ["HLInspector"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoneIt",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onDoneIt",{},globals.HLInspectorWidget)})},
args: [],
source: "onDoneIt\x0a\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onInspectIt",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstanceVariableSelected",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"onInstanceVariableSelected",{},globals.HLInspectorWidget)})},
args: [],
source: "onInstanceVariableSelected\x0a\x09self refreshDisplayWidget",
messageSends: ["refreshDisplayWidget"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onPrintIt",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inspect_(self._inspectee());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLInspectorWidget)})},
args: [],
source: "refresh\x0a\x09self inspect: self inspectee",
messageSends: ["inspect:", "inspectee"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshDisplayWidget",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._displayWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshDisplayWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "refreshDisplayWidget\x0a\x09self displayWidget refresh",
messageSends: ["refresh", "displayWidget"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshVariablesWidget",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._variablesWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshVariablesWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "refreshVariablesWidget\x0a\x09self variablesWidget refresh",
messageSends: ["refresh", "variablesWidget"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $HLInspector(){return globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
_st($HLInspector())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},globals.HLInspectorWidget)})},
args: [],
source: "register\x0a\x09HLInspector register: self",
messageSends: ["register:"],
referencedClasses: ["HLInspector"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(self._variablesWidget(),self._displayWidget()),self._codeWidget());
$ctx1.sendIdx["with:with:"]=1;
_st(html)._with_($1);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLInspectorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            with: self variablesWidget\x0a            with: self displayWidget)\x0a        with: self codeWidget)",
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget"],
referencedClasses: ["HLHorizontalSplitter", "HLVerticalSplitter"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setLabel:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._label_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},globals.HLInspectorWidget)})},
args: ["aString"],
source: "setLabel: aString\x0a\x09self model label: aString",
messageSends: ["label:", "model"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables:",
protocol: 'actions',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._variables_(aDictionary);
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aDictionary:aDictionary},globals.HLInspectorWidget)})},
args: ["aDictionary"],
source: "setVariables: aDictionary\x0a\x09self model variables: aDictionary",
messageSends: ["variables:", "model"],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Inspector";
},
args: [],
source: "tabLabel\x0a    ^ 'Inspector'",
messageSends: [],
referencedClasses: []
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'registration',
fn: function (){
var self=this;
function $HLInspector(){return globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLInspectorWidget.superclass.fn.prototype._unregister.apply(_st(self), []));
$ctx1.supercall = false;
_st($HLInspector())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLInspectorWidget)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09HLInspector unregister: self",
messageSends: ["unregister", "unregister:"],
referencedClasses: ["HLInspector"]
}),
globals.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variablesWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorVariablesWidget(){return globals.HLInspectorVariablesWidget||(typeof HLInspectorVariablesWidget=="undefined"?nil:HLInspectorVariablesWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@variablesWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLInspectorVariablesWidget())._new();
_st($3)._inspector_(self);
$4=_st($3)._yourself();
self["@variablesWidget"]=$4;
$1=self["@variablesWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variablesWidget",{},globals.HLInspectorWidget)})},
args: [],
source: "variablesWidget\x0a\x09^ variablesWidget ifNil: [\x0a\x09\x09variablesWidget := HLInspectorVariablesWidget new\x0a    \x09\x09inspector: self;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "inspector:", "new", "yourself"],
referencedClasses: ["HLInspectorVariablesWidget"]
}),
globals.HLInspectorWidget);



smalltalk.addClass('HLInspector', globals.HLInspectorWidget, [], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setTabLabel_(_st(anObject)._printString());
($ctx1.supercall = true, globals.HLInspector.superclass.fn.prototype._inspect_.apply(_st(self), [anObject]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.HLInspector)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self setTabLabel: anObject printString.\x0a\x09super inspect: anObject",
messageSends: ["setTabLabel:", "printString", "inspect:"],
referencedClasses: []
}),
globals.HLInspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._variablesWidget();
$ctx1.sendIdx["variablesWidget"]=1;
$3=_st($HLVerticalSplitter())._with_with_($4,self._displayWidget());
$2=_st($HLHorizontalSplitter())._with_with_($3,self._codeWidget());
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
_st(self._variablesWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLInspector)})},
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLContainer with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            with: self variablesWidget\x0a            with: self displayWidget)\x0a        with: self codeWidget)).\x0a\x09\x0a\x09self variablesWidget focus",
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget", "focus"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"]
}),
globals.HLInspector);


globals.HLInspector.klass.iVarNames = ['inspectors'];
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
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLInspector.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._watchChanges();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HLInspector.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self watchChanges",
messageSends: ["initialize", "watchChanges"],
referencedClasses: []
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._openAsTab();
$2=_st($1)._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.HLInspector.klass)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self new\x0a\x09\x09openAsTab;\x0a\x09\x09inspect: anObject",
messageSends: ["openAsTab", "new", "inspect:"],
referencedClasses: []
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@inspectors"];
if(($receiver = $2) == null || $receiver.isNil){
self["@inspectors"]=_st($OrderedCollection())._new();
$1=self["@inspectors"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectors",{},globals.HLInspector.klass)})},
args: [],
source: "inspectors\x0a\x09^ inspectors ifNil: [ inspectors := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
protocol: 'registration',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._inspectors())._add_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},globals.HLInspector.klass)})},
args: ["anInspector"],
source: "register: anInspector\x0a\x09self inspectors add: anInspector",
messageSends: ["add:", "inspectors"],
referencedClasses: []
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "inspector";
},
args: [],
source: "tabClass\x0a\x09^ 'inspector'",
messageSends: [],
referencedClasses: []
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Inspector";
},
args: [],
source: "tabLabel\x0a\x09^ 'Inspector'",
messageSends: [],
referencedClasses: []
}),
globals.HLInspector.klass);

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
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister:",
protocol: 'registration',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._inspectors())._remove_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"unregister:",{anInspector:anInspector},globals.HLInspector.klass)})},
args: ["anInspector"],
source: "unregister: anInspector\x0a\x09self inspectors remove: anInspector",
messageSends: ["remove:", "inspectors"],
referencedClasses: []
}),
globals.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "watchChanges",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._inspectors())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._refresh();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._valueWithInterval_((500));
return self}, function($ctx1) {$ctx1.fill(self,"watchChanges",{},globals.HLInspector.klass)})},
args: [],
source: "watchChanges\x0a\x09[ self inspectors do: [ :each | each refresh ] ]\x0a\x09\x09valueWithInterval: 500",
messageSends: ["valueWithInterval:", "do:", "inspectors", "refresh"],
referencedClasses: []
}),
globals.HLInspector.klass);

});
