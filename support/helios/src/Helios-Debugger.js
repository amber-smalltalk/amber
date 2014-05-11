define("helios/Helios-Debugger", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "helios/Helios-Core", "helios/Helios-Workspace"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Debugger');
smalltalk.packages["Helios-Debugger"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLContextInspectorDecorator', globals.Object, ['context'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:",
protocol: 'evaluating',
fn: function (aString,anEvaluator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._evaluate_on_(aString,anEvaluator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator},globals.HLContextInspectorDecorator)})},
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ self context evaluate: aString on: anEvaluator",
messageSends: ["evaluate:on:", "context"],
referencedClasses: []
}),
globals.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
protocol: 'initialization',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "initializeFromContext: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
globals.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
var variables,inspectedContext;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
variables=_st($Dictionary())._new();
inspectedContext=self._context();
$1=variables;
$2=_st(inspectedContext)._locals();
$ctx1.sendIdx["locals"]=1;
_st($1)._addAll_($2);
$ctx1.sendIdx["addAll:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(inspectedContext)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(inspectedContext)._isBlockContext();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
inspectedContext=_st(inspectedContext)._outerContext();
inspectedContext;
$3=inspectedContext;
if(($receiver = $3) == null || $receiver.isNil){
return $3;
} else {
return _st(variables)._addAll_(_st(inspectedContext)._locals());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
_st(anInspector)._setLabel_("Context");
$4=_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,inspectedContext:inspectedContext},globals.HLContextInspectorDecorator)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables inspectedContext |\x0a\x09\x0a\x09variables := Dictionary new.\x0a\x09inspectedContext := self context.\x0a\x09\x0a\x09variables addAll: inspectedContext locals.\x0a\x09\x0a\x09[ inspectedContext notNil and: [ inspectedContext isBlockContext ] ] whileTrue: [\x0a\x09\x09inspectedContext := inspectedContext outerContext.\x0a\x09\x09inspectedContext ifNotNil: [\x0a\x09\x09\x09variables addAll: inspectedContext locals ] ].\x0a\x09\x0a\x09anInspector\x0a\x09\x09setLabel: 'Context';\x0a\x09\x09setVariables: variables",
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "and:", "notNil", "isBlockContext", "outerContext", "ifNotNil:", "setLabel:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
globals.HLContextInspectorDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromContext_(aContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aContext:aContext},globals.HLContextInspectorDecorator.klass)})},
args: ["aContext"],
source: "on: aContext\x0a\x09^ self new\x0a\x09\x09initializeFromContext: aContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromContext:", "new", "yourself"],
referencedClasses: []
}),
globals.HLContextInspectorDecorator.klass);


smalltalk.addClass('HLDebugger', globals.HLFocusableWidget, ['model', 'stackListWidget', 'codeWidget', 'inspectorWidget'], 'Helios-Debugger');
globals.HLDebugger.comment="I am the main widget for the Helios debugger.";
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLDebuggerCodeWidget(){return globals.HLDebuggerCodeWidget||(typeof HLDebuggerCodeWidget=="undefined"?nil:HLDebuggerCodeWidget)}
function $HLDebuggerCodeModel(){return globals.HLDebuggerCodeModel||(typeof HLDebuggerCodeModel=="undefined"?nil:HLDebuggerCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$6,$7,$8,$9,$5,$10,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLDebuggerCodeWidget())._new();
$ctx1.sendIdx["new"]=1;
$4=$3;
$6=_st($HLDebuggerCodeModel())._new();
$7=$6;
$8=self._model();
$ctx1.sendIdx["model"]=1;
_st($7)._debuggerModel_($8);
$9=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=1;
$5=$9;
_st($4)._model_($5);
_st($3)._browserModel_(self._model());
$10=_st($3)._yourself();
self["@codeWidget"]=$10;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},globals.HLDebugger)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new\x0a\x09\x09model: (HLDebuggerCodeModel new\x0a\x09\x09\x09debuggerModel: self model;\x0a\x09\x09\x09yourself);\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "model:", "new", "debuggerModel:", "model", "yourself", "browserModel:"],
referencedClasses: ["HLDebuggerCodeWidget", "HLDebuggerCodeModel"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.HLDebugger.superclass.fn.prototype._cssClass.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2).__comma(" hl_debugger");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.HLDebugger)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' hl_debugger'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stackListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLDebugger)})},
args: [],
source: "focus\x0a\x09self stackListWidget focus",
messageSends: ["focus", "stackListWidget"],
referencedClasses: []
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromError:",
protocol: 'initialization',
fn: function (anError){
var self=this;
function $HLDebuggerModel(){return globals.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
self["@model"]=_st($HLDebuggerModel())._on_(anError);
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromError:",{anError:anError},globals.HLDebugger)})},
args: ["anError"],
source: "initializeFromError: anError\x0a\x09model := HLDebuggerModel on: anError.\x0a\x09self observeModel",
messageSends: ["on:", "observeModel"],
referencedClasses: ["HLDebuggerModel"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectorWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLInspectorWidget(){return globals.HLInspectorWidget||(typeof HLInspectorWidget=="undefined"?nil:HLInspectorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@inspectorWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@inspectorWidget"]=_st($HLInspectorWidget())._new();
$1=self["@inspectorWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectorWidget",{},globals.HLDebugger)})},
args: [],
source: "inspectorWidget\x0a\x09^ inspectorWidget ifNil: [ \x0a\x09\x09inspectorWidget := HLInspectorWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLInspectorWidget"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLDebuggerModel(){return globals.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=_st($HLDebuggerModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLDebugger)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLDebuggerModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLDebuggerModel"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
function $HLDebuggerProceeded(){return globals.HLDebuggerProceeded||(typeof HLDebuggerProceeded=="undefined"?nil:HLDebuggerProceeded)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLDebuggerStepped(),"onDebuggerStepped:",self);
$ctx1.sendIdx["on:send:to:"]=2;
$2=_st($1)._on_send_to_($HLDebuggerProceeded(),"onDebuggerProceeded",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLDebugger)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onDebuggerStepped:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLDebuggerProceeded\x0a\x09\x09send: #onDebuggerProceeded\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLDebuggerContextSelected", "HLDebuggerStepped", "HLDebuggerProceeded"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return globals.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
return smalltalk.withContext(function($ctx1) { 
_st(self._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},globals.HLDebugger)})},
args: ["anAnnouncement"],
source: "onContextSelected: anAnnouncement\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)",
messageSends: ["inspect:", "inspectorWidget", "on:", "context"],
referencedClasses: ["HLContextInspectorDecorator"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onDebuggerProceeded",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeTab();
return self}, function($ctx1) {$ctx1.fill(self,"onDebuggerProceeded",{},globals.HLDebugger)})},
args: [],
source: "onDebuggerProceeded\x0a\x09self removeTab",
messageSends: ["removeTab"],
referencedClasses: []
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onDebuggerStepped:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return globals.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._atEnd();
if(smalltalk.assert($1)){
self._removeTab();
};
_st(self._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
_st(self._stackListWidget())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onDebuggerStepped:",{anAnnouncement:anAnnouncement},globals.HLDebugger)})},
args: ["anAnnouncement"],
source: "onDebuggerStepped: anAnnouncement\x0a\x09self model atEnd ifTrue: [ self removeTab ].\x0a\x09\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context).\x0a\x09self stackListWidget refresh",
messageSends: ["ifTrue:", "atEnd", "model", "removeTab", "inspect:", "inspectorWidget", "on:", "context", "refresh", "stackListWidget"],
referencedClasses: ["HLContextInspectorDecorator"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},globals.HLDebugger)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._renderHeadOn_(html);
$2=_st($HLVerticalSplitter())._with_with_(self._codeWidget(),_st($HLHorizontalSplitter())._with_with_(self._stackListWidget(),self._inspectorWidget()));
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLDebugger)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x0a\x09html with: (HLContainer with: (HLVerticalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: (HLHorizontalSplitter\x0a\x09\x09\x09with: self stackListWidget\x0a\x09\x09\x09with: self inspectorWidget)))",
messageSends: ["renderHeadOn:", "with:", "with:with:", "codeWidget", "stackListWidget", "inspectorWidget"],
referencedClasses: ["HLContainer", "HLVerticalSplitter", "HLHorizontalSplitter"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("head");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._h2())._with_(_st(_st(self._model())._error())._messageText());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},globals.HLDebugger)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'head'; \x0a\x09\x09with: [ html h2 with: self model error messageText ]",
messageSends: ["class:", "div", "with:", "h2", "messageText", "error", "model"],
referencedClasses: []
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stackListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLStackListWidget(){return globals.HLStackListWidget||(typeof HLStackListWidget=="undefined"?nil:HLStackListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@stackListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLStackListWidget())._on_(self._model());
_st($3)._next_(self._codeWidget());
$4=_st($3)._yourself();
self["@stackListWidget"]=$4;
$1=self["@stackListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stackListWidget",{},globals.HLDebugger)})},
args: [],
source: "stackListWidget\x0a\x09^ stackListWidget ifNil: [ \x0a\x09\x09stackListWidget := (HLStackListWidget on: self model)\x0a\x09\x09\x09next: self codeWidget;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "next:", "on:", "model", "codeWidget", "yourself"],
referencedClasses: ["HLStackListWidget"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLDebugger.superclass.fn.prototype._unregister.apply(_st(self), []));
$ctx1.supercall = false;
$ctx1.sendIdx["unregister"]=1;
_st(self._inspectorWidget())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLDebugger)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self inspectorWidget unregister",
messageSends: ["unregister", "inspectorWidget"],
referencedClasses: []
}),
globals.HLDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromError_(anError);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anError:anError},globals.HLDebugger.klass)})},
args: ["anError"],
source: "on: anError\x0a\x09^ self new\x0a\x09\x09initializeFromError: anError;\x0a\x09\x09yourself",
messageSends: ["initializeFromError:", "new", "yourself"],
referencedClasses: []
}),
globals.HLDebugger.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "debugger";
},
args: [],
source: "tabClass\x0a\x09^ 'debugger'",
messageSends: [],
referencedClasses: []
}),
globals.HLDebugger.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Debugger";
},
args: [],
source: "tabLabel\x0a\x09^ 'Debugger'",
messageSends: [],
referencedClasses: []
}),
globals.HLDebugger.klass);


smalltalk.addClass('HLDebuggerCodeModel', globals.HLCodeModel, ['debuggerModel'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "debuggerModel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@debuggerModel"];
return $1;
},
args: [],
source: "debuggerModel\x0a\x09^ debuggerModel",
messageSends: [],
referencedClasses: []
}),
globals.HLDebuggerCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "debuggerModel:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@debuggerModel"]=anObject;
return self},
args: ["anObject"],
source: "debuggerModel: anObject\x0a\x09debuggerModel := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLDebuggerCodeModel);

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
return _st(self._debuggerModel())._evaluate_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._tryCatch_((function(e){
return smalltalk.withContext(function($ctx2) {
_st($ErrorHandler())._handleError_(e);
return nil;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},globals.HLDebuggerCodeModel)})},
args: ["aString"],
source: "doIt: aString\x0a\x09^ [ self debuggerModel evaluate: aString ]\x0a\x09\x09tryCatch: [ :e | \x0a\x09\x09\x09ErrorHandler handleError: e.\x0a\x09\x09\x09nil ]",
messageSends: ["tryCatch:", "evaluate:", "debuggerModel", "handleError:"],
referencedClasses: ["ErrorHandler"]
}),
globals.HLDebuggerCodeModel);



smalltalk.addClass('HLDebuggerCodeWidget', globals.HLBrowserCodeWidget, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "addStopAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._setGutterMarker_gutter_value_(anInteger,"stops",_st(_st("<div class=\x22stop\x22></stop>"._asJQuery())._toArray())._first());
return self}, function($ctx1) {$ctx1.fill(self,"addStopAt:",{anInteger:anInteger},globals.HLDebuggerCodeWidget)})},
args: ["anInteger"],
source: "addStopAt: anInteger\x0a\x09editor\x0a\x09\x09setGutterMarker: anInteger\x0a\x09\x09gutter: 'stops'\x0a\x09\x09value: '<div class=\x22stop\x22></stop>' asJQuery toArray first",
messageSends: ["setGutterMarker:gutter:value:", "first", "toArray", "asJQuery"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearHighlight",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._editor())._clearGutter_("stops");
return self}, function($ctx1) {$ctx1.fill(self,"clearHighlight",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "clearHighlight\x0a\x09self editor clearGutter: 'stops'",
messageSends: ["clearGutter:", "editor"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearHighlight();
($ctx1.supercall = true, globals.HLDebuggerCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},globals.HLDebuggerCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09self clearHighlight.\x0a\x09super contents: aString",
messageSends: ["clearHighlight", "contents:"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=($ctx1.supercall = true, globals.HLDebuggerCodeWidget.superclass.fn.prototype._editorOptions.apply(_st(self), []));
$ctx1.supercall = false;
_st($2)._at_put_("gutters",["CodeMirror-linenumbers", "stops"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "editorOptions\x0a\x09^ super editorOptions\x0a\x09\x09at: 'gutters' put: #('CodeMirror-linenumbers' 'stops');\x0a\x09\x09yourself",
messageSends: ["at:put:", "editorOptions", "yourself"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlight",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=_st(self._browserModel())._nextNode();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var node;
node=$receiver;
self._highlightNode_(node);
};
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "highlight\x0a\x09self browserModel nextNode ifNotNil: [ :node |\x0a\x09\x09self highlightNode: node ]",
messageSends: ["ifNotNil:", "nextNode", "browserModel", "highlightNode:"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightNode:",
protocol: 'actions',
fn: function (aNode){
var self=this;
var token;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5,$9,$8,$7,$11,$10,$6,$15,$14,$13,$12,$receiver;
if(($receiver = aNode) == null || $receiver.isNil){
aNode;
} else {
self._clearHighlight();
$4=_st(aNode)._positionStart();
$ctx1.sendIdx["positionStart"]=1;
$3=_st($4)._x();
$ctx1.sendIdx["x"]=1;
$2=_st($3).__minus((1));
$ctx1.sendIdx["-"]=1;
$1=self._addStopAt_($2);
$1;
$5=self._editor();
$9=_st(aNode)._positionStart();
$ctx1.sendIdx["positionStart"]=2;
$8=_st($9)._x();
$ctx1.sendIdx["x"]=2;
$7=_st($8).__minus((1));
$ctx1.sendIdx["-"]=2;
$11=_st(_st(aNode)._positionStart())._y();
$ctx1.sendIdx["y"]=1;
$10=_st($11).__minus((1));
$ctx1.sendIdx["-"]=3;
$6=globals.HashedCollection._newFromPairs_(["line",$7,"ch",$10]);
$15=_st(aNode)._positionEnd();
$ctx1.sendIdx["positionEnd"]=1;
$14=_st($15)._x();
$13=_st($14).__minus((1));
$12=globals.HashedCollection._newFromPairs_(["line",$13,"ch",_st(_st(aNode)._positionEnd())._y()]);
_st($5)._setSelection_to_($6,$12);
};
return self}, function($ctx1) {$ctx1.fill(self,"highlightNode:",{aNode:aNode,token:token},globals.HLDebuggerCodeWidget)})},
args: ["aNode"],
source: "highlightNode: aNode\x0a\x09| token |\x0a\x09\x0a\x09aNode ifNotNil: [\x0a\x09\x09self\x0a\x09\x09\x09clearHighlight;\x0a\x09\x09\x09addStopAt: aNode positionStart x - 1.\x0a\x0a\x09\x09self editor \x0a\x09\x09\x09setSelection: #{ 'line' -> (aNode positionStart x - 1). 'ch' -> (aNode positionStart y - 1) }\x0a\x09\x09\x09to: #{ 'line' -> (aNode positionEnd x - 1). 'ch' -> (aNode positionEnd y) } ]",
messageSends: ["ifNotNil:", "clearHighlight", "addStopAt:", "-", "x", "positionStart", "setSelection:to:", "editor", "y", "positionEnd"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
function $HLDebuggerWhere(){return globals.HLDebuggerWhere||(typeof HLDebuggerWhere=="undefined"?nil:HLDebuggerWhere)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
($ctx1.supercall = true, globals.HLDebuggerCodeWidget.superclass.fn.prototype._observeBrowserModel.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._browserModel();
$ctx1.sendIdx["browserModel"]=1;
$1=_st($2)._announcer();
$ctx1.sendIdx["announcer"]=1;
_st($1)._on_send_to_($HLDebuggerContextSelected(),"onContextSelected",self);
$ctx1.sendIdx["on:send:to:"]=1;
$4=self._browserModel();
$ctx1.sendIdx["browserModel"]=2;
$3=_st($4)._announcer();
$ctx1.sendIdx["announcer"]=2;
_st($3)._on_send_to_($HLDebuggerStepped(),"onContextSelected",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st(_st(self._browserModel())._announcer())._on_send_to_($HLDebuggerWhere(),"onContextSelected",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "observeBrowserModel\x0a\x09super observeBrowserModel.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerWhere\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self",
messageSends: ["observeBrowserModel", "on:send:to:", "announcer", "browserModel"],
referencedClasses: ["HLDebuggerContextSelected", "HLDebuggerStepped", "HLDebuggerWhere"]
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._highlight();
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "onContextSelected\x0a\x09self highlight",
messageSends: ["highlight"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLDebuggerCodeWidget.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
self._contents_(_st(_st(self._browserModel())._selectedMethod())._source());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLDebuggerCodeWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09self contents: self browserModel selectedMethod source",
messageSends: ["renderOn:", "contents:", "source", "selectedMethod", "browserModel"],
referencedClasses: []
}),
globals.HLDebuggerCodeWidget);



smalltalk.addClass('HLDebuggerModel', globals.HLToolModel, ['rootContext', 'debugger', 'error'], 'Helios-Debugger');
globals.HLDebuggerModel.comment="I am a model for debugging Amber code in Helios.\x0a\x0aMy instances hold a reference to an `ASTDebugger` instance, itself referencing the current `context`. The context should be the root of the context stack.";
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._debugger())._atEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},globals.HLDebuggerModel)})},
args: [],
source: "atEnd\x0a\x09^ self debugger atEnd",
messageSends: ["atEnd", "debugger"],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "contexts",
protocol: 'accessing',
fn: function (){
var self=this;
var contexts,context;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
contexts=_st($OrderedCollection())._new();
context=self._rootContext();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(context)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(contexts)._add_(context);
context=_st(context)._outerContext();
return context;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=contexts;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contexts",{contexts:contexts,context:context},globals.HLDebuggerModel)})},
args: [],
source: "contexts\x0a\x09| contexts context |\x0a\x09\x0a\x09contexts := OrderedCollection new.\x0a\x09context := self rootContext.\x0a\x09\x0a\x09[ context notNil ] whileTrue: [\x0a\x09\x09contexts add: context.\x0a\x09\x09context := context outerContext ].\x0a\x09\x09\x0a\x09^ contexts",
messageSends: ["new", "rootContext", "whileTrue:", "notNil", "add:", "outerContext"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._debugger())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentContext",{},globals.HLDebuggerModel)})},
args: [],
source: "currentContext\x0a\x09^ self debugger context",
messageSends: ["context", "debugger"],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
function $HLDebuggerContextSelected(){return globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedMethod_(_st(aContext)._method());
_st(self._debugger())._context_(aContext);
$ctx2.sendIdx["context:"]=1;
$1=_st($HLDebuggerContextSelected())._new();
_st($1)._context_(aContext);
$2=_st($1)._yourself();
return _st(self._announcer())._announce_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentContext:",{aContext:aContext},globals.HLDebuggerModel)})},
args: ["aContext"],
source: "currentContext: aContext\x0a\x09self withChangesDo: [ \x0a\x09\x09self selectedMethod: aContext method.\x0a\x09\x09self debugger context: aContext.\x0a\x09\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09\x09context: aContext;\x0a\x09\x09\x09yourself) ]",
messageSends: ["withChangesDo:", "selectedMethod:", "method", "context:", "debugger", "announce:", "announcer", "new", "yourself"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "debugger",
protocol: 'accessing',
fn: function (){
var self=this;
function $ASTDebugger(){return globals.ASTDebugger||(typeof ASTDebugger=="undefined"?nil:ASTDebugger)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@debugger"];
if(($receiver = $2) == null || $receiver.isNil){
self["@debugger"]=_st($ASTDebugger())._new();
$1=self["@debugger"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugger",{},globals.HLDebuggerModel)})},
args: [],
source: "debugger\x0a\x09^ debugger ifNil: [ debugger := ASTDebugger new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["ASTDebugger"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "error",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@error"];
return $1;
},
args: [],
source: "error\x0a\x09^ error",
messageSends: [],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._evaluate_for_(aString,self._currentContext());
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},globals.HLDebuggerModel)})},
args: ["aString"],
source: "evaluate: aString\x0a\x09^ self environment \x0a\x09\x09evaluate: aString \x0a\x09\x09for: self currentContext",
messageSends: ["evaluate:for:", "environment", "currentContext"],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "flushInnerContexts",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._currentContext();
$ctx1.sendIdx["currentContext"]=1;
_st($1)._innerContext_(nil);
self["@rootContext"]=self._currentContext();
self._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"flushInnerContexts",{},globals.HLDebuggerModel)})},
args: [],
source: "flushInnerContexts\x0a\x09\x22When stepping, the inner contexts are not relevent anymore,\x0a\x09and can be flushed\x22\x0a\x09\x0a\x09self currentContext innerContext: nil.\x0a\x09rootContext := self currentContext.\x0a\x09self initializeContexts",
messageSends: ["innerContext:", "currentContext", "initializeContexts"],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromError:",
protocol: 'initialization',
fn: function (anError){
var self=this;
var errorContext;
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
self["@error"]=anError;
errorContext=_st($AIContext())._fromMethodContext_(_st(self["@error"])._context());
self["@rootContext"]=_st(self["@error"])._signalerContextFrom_(errorContext);
self._selectedMethod_(_st(self["@rootContext"])._method());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromError:",{anError:anError,errorContext:errorContext},globals.HLDebuggerModel)})},
args: ["anError"],
source: "initializeFromError: anError\x0a\x09| errorContext |\x0a\x09\x0a\x09error := anError.\x0a\x09errorContext := (AIContext fromMethodContext: error context).\x0a\x09rootContext := error signalerContextFrom: errorContext.\x0a\x09self selectedMethod: rootContext method",
messageSends: ["fromMethodContext:", "context", "signalerContextFrom:", "selectedMethod:", "method"],
referencedClasses: ["AIContext"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._debugger())._node();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},globals.HLDebuggerModel)})},
args: [],
source: "nextNode\x0a\x09^ self debugger node",
messageSends: ["node", "debugger"],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "onStep",
protocol: 'reactions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
self["@rootContext"]=self._currentContext();
$ctx1.sendIdx["currentContext"]=1;
$2=self._currentContext();
$ctx1.sendIdx["currentContext"]=2;
$1=_st($2)._method();
self._selectedMethod_($1);
$3=_st($HLDebuggerContextSelected())._new();
_st($3)._context_(self._currentContext());
$4=_st($3)._yourself();
_st(self._announcer())._announce_($4);
return self}, function($ctx1) {$ctx1.fill(self,"onStep",{},globals.HLDebuggerModel)})},
args: [],
source: "onStep\x0a\x09rootContext := self currentContext.\x0a\x09\x0a\x09\x22Force a refresh of the context list and code widget\x22\x0a\x09self selectedMethod: self currentContext method.\x0a\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["currentContext", "selectedMethod:", "method", "announce:", "announcer", "context:", "new", "yourself"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerProceeded(){return globals.HLDebuggerProceeded||(typeof HLDebuggerProceeded=="undefined"?nil:HLDebuggerProceeded)}
return smalltalk.withContext(function($ctx1) { 
_st(self._debugger())._proceed();
_st(self._announcer())._announce_(_st($HLDebuggerProceeded())._new());
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},globals.HLDebuggerModel)})},
args: [],
source: "proceed\x0a\x09self debugger proceed.\x0a\x09\x0a\x09self announcer announce: HLDebuggerProceeded new",
messageSends: ["proceed", "debugger", "announce:", "announcer", "new"],
referencedClasses: ["HLDebuggerProceeded"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._debugger())._restart();
self._onStep();
$1=_st($HLDebuggerStepped())._new();
_st($1)._context_(self._currentContext());
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.HLDebuggerModel)})},
args: [],
source: "restart\x0a\x09self debugger restart.\x0a\x09self onStep.\x0a\x09\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["restart", "debugger", "onStep", "announce:", "announcer", "context:", "new", "currentContext", "yourself"],
referencedClasses: ["HLDebuggerStepped"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "rootContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@rootContext"];
return $1;
},
args: [],
source: "rootContext\x0a\x09^ rootContext",
messageSends: [],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._debugger())._stepOver();
self._onStep();
$1=_st($HLDebuggerStepped())._new();
_st($1)._context_(self._currentContext());
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},globals.HLDebuggerModel)})},
args: [],
source: "stepOver\x0a\x09self debugger stepOver.\x0a\x09self onStep.\x0a\x09\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["stepOver", "debugger", "onStep", "announce:", "announcer", "context:", "new", "currentContext", "yourself"],
referencedClasses: ["HLDebuggerStepped"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "where",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerWhere(){return globals.HLDebuggerWhere||(typeof HLDebuggerWhere=="undefined"?nil:HLDebuggerWhere)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLDebuggerWhere())._new());
return self}, function($ctx1) {$ctx1.fill(self,"where",{},globals.HLDebuggerModel)})},
args: [],
source: "where\x0a\x09self announcer announce: HLDebuggerWhere new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLDebuggerWhere"]
}),
globals.HLDebuggerModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromError_(anError);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anError:anError},globals.HLDebuggerModel.klass)})},
args: ["anError"],
source: "on: anError\x0a\x09^ self new\x0a\x09\x09initializeFromError: anError;\x0a\x09\x09yourself",
messageSends: ["initializeFromError:", "new", "yourself"],
referencedClasses: []
}),
globals.HLDebuggerModel.klass);


smalltalk.addClass('HLErrorHandler', globals.Object, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "confirmDebugError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLConfirmationWidget(){return globals.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmationWidget())._new();
_st($1)._confirmationString_(_st(anError)._messageText());
_st($1)._actionBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return self._debugError_(anError);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st($1)._cancelButtonLabel_("Abandon");
_st($1)._confirmButtonLabel_("Debug");
$2=_st($1)._show();
return self}, function($ctx1) {$ctx1.fill(self,"confirmDebugError:",{anError:anError},globals.HLErrorHandler)})},
args: ["anError"],
source: "confirmDebugError: anError\x0a\x09HLConfirmationWidget new\x0a\x09\x09confirmationString: anError messageText;\x0a\x09\x09actionBlock: [ self debugError: anError ];\x0a\x09\x09cancelButtonLabel: 'Abandon';\x0a\x09\x09confirmButtonLabel: 'Debug';\x0a\x09\x09show",
messageSends: ["confirmationString:", "new", "messageText", "actionBlock:", "debugError:", "cancelButtonLabel:", "confirmButtonLabel:", "show"],
referencedClasses: ["HLConfirmationWidget"]
}),
globals.HLErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "debugError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLDebugger(){return globals.HLDebugger||(typeof HLDebugger=="undefined"?nil:HLDebugger)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ConsoleErrorHandler(){return globals.ConsoleErrorHandler||(typeof ConsoleErrorHandler=="undefined"?nil:ConsoleErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($HLDebugger())._on_(anError))._openAsTab();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ConsoleErrorHandler())._new())._handleError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"debugError:",{anError:anError},globals.HLErrorHandler)})},
args: ["anError"],
source: "debugError: anError\x0a\x0a\x09[ \x0a\x09\x09(HLDebugger on: anError) openAsTab \x0a\x09] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ConsoleErrorHandler new handleError: error ]",
messageSends: ["on:do:", "openAsTab", "on:", "handleError:", "new"],
referencedClasses: ["HLDebugger", "Error", "ConsoleErrorHandler"]
}),
globals.HLErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._confirmDebugError_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.HLErrorHandler)})},
args: ["anError"],
source: "handleError: anError\x0a\x09self confirmDebugError: anError",
messageSends: ["confirmDebugError:"],
referencedClasses: []
}),
globals.HLErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorHandled",
protocol: 'error handling',
fn: function (){
var self=this;
function $HLProgressWidget(){return globals.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLProgressWidget())._default();
_st($1)._flush();
$2=_st($1)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"onErrorHandled",{},globals.HLErrorHandler)})},
args: [],
source: "onErrorHandled\x0a\x09\x22when an error is handled, we need to make sure that\x0a\x09any progress bar widget gets removed. Because HLProgressBarWidget is asynchronous,\x0a\x09it has to be done here.\x22\x0a\x09\x0a\x09HLProgressWidget default \x0a\x09\x09flush; \x0a\x09\x09remove",
messageSends: ["flush", "default", "remove"],
referencedClasses: ["HLProgressWidget"]
}),
globals.HLErrorHandler);



smalltalk.addClass('HLStackListWidget', globals.HLToolListWidget, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._contexts();
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLStackListWidget)})},
args: [],
source: "items\x0a\x09^ self model contexts",
messageSends: ["contexts", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Call stack";
},
args: [],
source: "label\x0a\x09^ 'Call stack'",
messageSends: [],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLStackListWidget.superclass.fn.prototype._observeModel.apply(_st(self), []));
$ctx1.supercall = false;
_st(_st(self._model())._announcer())._on_send_to_($HLDebuggerStepped(),"onDebuggerStepped:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLStackListWidget)})},
args: [],
source: "observeModel\x0a\x09super observeModel.\x0a\x09\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onDebuggerStepped:\x0a\x09\x09to: self",
messageSends: ["observeModel", "on:send:to:", "announcer", "model"],
referencedClasses: ["HLDebuggerStepped"]
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDebuggerStepped:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=nil;
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onDebuggerStepped:",{anAnnouncement:anAnnouncement},globals.HLStackListWidget)})},
args: ["anAnnouncement"],
source: "onDebuggerStepped: anAnnouncement\x0a\x09items := nil.\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},globals.HLStackListWidget)})},
args: [],
source: "proceed\x0a\x09self model proceed",
messageSends: ["proceed", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("debugger_bar");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._class_("btn restart");
$ctx2.sendIdx["class:"]=2;
_st($3)._with_("Restart");
$ctx2.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._restart();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
$ctx2.sendIdx["button"]=2;
_st($5)._class_("btn where");
$ctx2.sendIdx["class:"]=3;
_st($5)._with_("Where");
$ctx2.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._where();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=2;
$6;
$7=_st(html)._button();
$ctx2.sendIdx["button"]=3;
_st($7)._class_("btn stepOver");
$ctx2.sendIdx["class:"]=4;
_st($7)._with_("Step over");
$ctx2.sendIdx["with:"]=4;
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._stepOver();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=3;
$8;
$9=_st(html)._button();
_st($9)._class_("btn proceed");
_st($9)._with_("Proceed");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._proceed();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLStackListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a\x09\x09class: 'debugger_bar'; \x0a\x09\x09with: [\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn restart';\x0a\x09\x09\x09\x09with: 'Restart';\x0a\x09\x09\x09\x09onClick: [ self restart ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn where';\x0a\x09\x09\x09\x09with: 'Where';\x0a\x09\x09\x09\x09onClick: [ self where ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn stepOver';\x0a\x09\x09\x09\x09with: 'Step over';\x0a\x09\x09\x09\x09onClick: [ self stepOver ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn proceed';\x0a\x09\x09\x09\x09with: 'Proceed';\x0a\x09\x09\x09\x09onClick: [ self proceed ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "restart", "where", "stepOver", "proceed"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._restart();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.HLStackListWidget)})},
args: [],
source: "restart\x0a\x09self model restart",
messageSends: ["restart", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._currentContext_(aContext);
($ctx1.supercall = true, globals.HLStackListWidget.superclass.fn.prototype._selectItem_.apply(_st(self), [aContext]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},globals.HLStackListWidget)})},
args: ["aContext"],
source: "selectItem: aContext\x0a   \x09self model currentContext: aContext.\x0a\x09super selectItem: aContext",
messageSends: ["currentContext:", "model", "selectItem:"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._currentContext();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},globals.HLStackListWidget)})},
args: [],
source: "selectedItem\x0a   \x09^ self model currentContext",
messageSends: ["currentContext", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._stepOver();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},globals.HLStackListWidget)})},
args: [],
source: "stepOver\x0a\x09self model stepOver",
messageSends: ["stepOver", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "where",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._where();
return self}, function($ctx1) {$ctx1.fill(self,"where",{},globals.HLStackListWidget)})},
args: [],
source: "where\x0a\x09self model where",
messageSends: ["where", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);


});
