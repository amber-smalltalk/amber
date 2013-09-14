smalltalk.addPackage('Helios-Inspector');
smalltalk.addClass('HLInspectorDisplayWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspectorDisplayWidget)})},
messageSends: []}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspectorDisplayWidget)})},
messageSends: []}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_(self._selectionDisplayString());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspectorDisplayWidget)})},
messageSends: ["with:", "selectionDisplayString", "div"]}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionDisplayString",
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
messageSends: ["selection", "ifTrue:ifFalse:", "printString", "instVarObjectAt:", "includes:", "keys", "variables"]}),
smalltalk.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'label', 'selection'], 'Helios-Inspector');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
function $HLCodeModel(){return smalltalk.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@code"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@code"]=_st($HLCodeModel())._on_(self._environment());
$1=self["@code"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "on:", "environment"]}),
smalltalk.HLInspectorModel);

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
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:on:",
fn: function (anObject,anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspectee"]=anObject;
self["@variables"]=[];
_st(self["@inspectee"])._inspectOn_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:on:",{anObject:anObject,anInspector:anInspector},smalltalk.HLInspectorModel)})},
messageSends: ["inspectOn:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@inspectee"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspectee"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarObjectAt:",
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._variables())._at_(anInstVarName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarObjectAt:",{anInstVarName:anInstVarName},smalltalk.HLInspectorModel)})},
messageSends: ["at:", "variables"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._inspectee())._printString();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "printString", "inspectee"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
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
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVar:",
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selection_(anInstVarName);
return self}, function($ctx1) {$ctx1.fill(self,"selectedInstVar:",{anInstVarName:anInstVarName},smalltalk.HLInspectorModel)})},
messageSends: ["selection:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedInstVarObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarObjectAt_(self._selection());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedInstVarObject",{},smalltalk.HLInspectorModel)})},
messageSends: ["instVarObjectAt:", "selection"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
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
messageSends: ["ifNil:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selection:",
fn: function (anObject){
var self=this;
function $HLInstanceVariableSelected(){return smalltalk.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
self["@selection"]=anObject;
_st(self._announcer())._announce_(_st($HLInstanceVariableSelected())._on_(self["@selection"]));
return self}, function($ctx1) {$ctx1.fill(self,"selection:",{anObject:anObject},smalltalk.HLInspectorModel)})},
messageSends: ["announce:", "on:", "announcer"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aWidget)._subscribeTo_(self._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget},smalltalk.HLInspectorModel)})},
messageSends: ["subscribeTo:", "announcer"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@variables"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st($Dictionary())._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
smalltalk.method({
selector: "variables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"variables:",{aCollection:aCollection},smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLInspectorModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._variables();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["variables"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["label", "model"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._variables()).__eq(self._items());
if(! smalltalk.assert($1)){
self._resetItems();
smalltalk.HLInspectorVariablesWidget.superclass.fn.prototype._refresh.apply(_st(self), []);
};
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["ifFalse:", "resetItems", "refresh", "=", "items", "variables"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
function $HLDiveRequested(){return smalltalk.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn");
_st($1)._with_("Dive");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._announcer())._announce_(_st($HLDiveRequested())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@diveButton"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["class:", "button", "with:", "onClick:", "announce:", "new", "announcer"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeadOn_(html);
smalltalk.HLInspectorVariablesWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["renderHeadOn:", "renderContentOn:"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-label");
$2=_st($1)._with_(self._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["class:", "div", "with:", "label"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "resetItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetItems",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLInspectorVariablesWidget.superclass.fn.prototype._selectItem_.apply(_st(self), [anObject]);
_st(self._model())._selectedInstVar_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["selectItem:", "selectedInstVar:", "model"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@model"])._selection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["selection"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._variables())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["keys", "variables", "model"]}),
smalltalk.HLInspectorVariablesWidget);



smalltalk.addClass('HLInspectorWidget', smalltalk.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget'], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
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
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["ifNil:", "model:", "code", "new", "receiver:", "inspectee", "yourself"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "displayWidget",
fn: function (){
var self=this;
function $HLInspectorDisplayWidget(){return smalltalk.HLInspectorDisplayWidget||(typeof HLInspectorDisplayWidget=="undefined"?nil:HLInspectorDisplayWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@displayWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLInspectorDisplayWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@displayWidget"]=$4;
$1=self["@displayWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLInspectorWidget.superclass.fn.prototype._initialize.apply(_st(self), []);
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLInspectorWidget)})},
messageSends: ["initialize", "register"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._model())._inspect_on_(anObject,self);
$1=self;
_st($1)._refreshVariablesWidget();
$2=_st($1)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.HLInspectorWidget)})},
messageSends: ["inspect:on:", "model", "refreshVariablesWidget", "refreshDisplayWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._inspectee();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},smalltalk.HLInspectorWidget)})},
messageSends: ["inspectee", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._inspectee_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},smalltalk.HLInspectorWidget)})},
messageSends: ["inspectee:", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLInspectorWidget)})},
messageSends: ["label", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
function $HLInspectorModel(){return smalltalk.HLInspectorModel||(typeof HLInspectorModel=="undefined"?nil:HLInspectorModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self._model_(_st($HLInspectorModel())._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLInspectorWidget)})},
messageSends: ["ifNil:", "model:", "new"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@model"]=aModel;
_st(self._codeWidget())._model_(_st(aModel)._code());
$1=self;
_st($1)._observeCodeWidget();
_st($1)._observeVariablesWidget();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLInspectorWidget)})},
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget", "observeVariablesWidget", "observeModel"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeCodeWidget",
fn: function (){
var self=this;
function $HLDoItExecuted(){return smalltalk.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._codeWidget())._announcer())._on_do_($HLDoItExecuted(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._onDoneIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["on:do:", "onDoneIt", "announcer", "codeWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLInstanceVariableSelected(){return smalltalk.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._on_send_to_($HLInstanceVariableSelected(),"onInstanceVariableSelected",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLInspectorWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeVariablesWidget",
fn: function (){
var self=this;
function $HLDiveRequested(){return smalltalk.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._variablesWidget())._announcer())._on_do_($HLDiveRequested(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._onDive();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeVariablesWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["on:do:", "onDive", "announcer", "variablesWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDive",
fn: function (){
var self=this;
function $HLInspector(){return smalltalk.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLInspector())._new();
_st($1)._inspect_(_st(self._model())._selectedInstVarObject());
$2=_st($1)._openAsTab();
return self}, function($ctx1) {$ctx1.fill(self,"onDive",{},smalltalk.HLInspectorWidget)})},
messageSends: ["inspect:", "selectedInstVarObject", "model", "new", "openAsTab"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoneIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onDoneIt",{},smalltalk.HLInspectorWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},smalltalk.HLInspectorWidget)})},
messageSends: []}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstanceVariableSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._codeWidget())._receiver_(_st(self._model())._selectedInstVarObject());
self._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"onInstanceVariableSelected",{},smalltalk.HLInspectorWidget)})},
messageSends: ["receiver:", "selectedInstVarObject", "model", "codeWidget", "refreshDisplayWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},smalltalk.HLInspectorWidget)})},
messageSends: []}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._refreshVariablesWidget();
$2=_st($1)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLInspectorWidget)})},
messageSends: ["refreshVariablesWidget", "refreshDisplayWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshDisplayWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._displayWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshDisplayWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["refresh", "displayWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshVariablesWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._variablesWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"refreshVariablesWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["refresh", "variablesWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
function $HLInspector(){return smalltalk.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
_st($HLInspector())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.HLInspectorWidget)})},
messageSends: ["register:"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(self._variablesWidget(),self._displayWidget()),self._codeWidget()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspectorWidget)})},
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._label_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},smalltalk.HLInspectorWidget)})},
messageSends: ["label:", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables:",
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._variables_(aDictionary);
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aDictionary:aDictionary},smalltalk.HLInspectorWidget)})},
messageSends: ["variables:", "model"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Inspector";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLInspectorWidget)})},
messageSends: []}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
function $HLInspector(){return smalltalk.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLInspectorWidget.superclass.fn.prototype._unregister.apply(_st(self), []);
_st($HLInspector())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLInspectorWidget)})},
messageSends: ["unregister", "unregister:"]}),
smalltalk.HLInspectorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variablesWidget",
fn: function (){
var self=this;
function $HLInspectorVariablesWidget(){return smalltalk.HLInspectorVariablesWidget||(typeof HLInspectorVariablesWidget=="undefined"?nil:HLInspectorVariablesWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@variablesWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLInspectorVariablesWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@variablesWidget"]=$4;
$1=self["@variablesWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variablesWidget",{},smalltalk.HLInspectorWidget)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLInspectorWidget);



smalltalk.addClass('HLInspector', smalltalk.HLInspectorWidget, [], 'Helios-Inspector');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(self._variablesWidget(),self._displayWidget()),self._codeWidget())));
_st(self._variablesWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLInspector)})},
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget", "focus"]}),
smalltalk.HLInspector);


smalltalk.HLInspector.klass.iVarNames = ['inspectors'];
smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLInspector.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._watchChanges();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLInspector.klass)})},
messageSends: ["initialize", "watchChanges"]}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._inspect_(anObject);
$2=_st($1)._openAsTab();
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.HLInspector.klass)})},
messageSends: ["inspect:", "new", "openAsTab"]}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectors",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspectors"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@inspectors"]=_st($OrderedCollection())._new();
$1=self["@inspectors"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectors",{},smalltalk.HLInspector.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._inspectors())._add_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},smalltalk.HLInspector.klass)})},
messageSends: ["add:", "inspectors"]}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "inspector";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Inspector";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (10);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._inspectors())._remove_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"unregister:",{anInspector:anInspector},smalltalk.HLInspector.klass)})},
messageSends: ["remove:", "inspectors"]}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "watchChanges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._inspectors())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._refresh();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithInterval_((500));
return self}, function($ctx1) {$ctx1.fill(self,"watchChanges",{},smalltalk.HLInspector.klass)})},
messageSends: ["valueWithInterval:", "do:", "refresh", "inspectors"]}),
smalltalk.HLInspector.klass);


