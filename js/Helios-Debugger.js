smalltalk.addPackage('Helios-Debugger');
smalltalk.addClass('HLContextInspectorDecorator', smalltalk.Object, ['context'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.HLContextInspectorDecorator)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
category: 'initialization',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aContext:aContext},smalltalk.HLContextInspectorDecorator)})},
args: ["aContext"],
source: "initializeFromContext: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'inspecting',
fn: function (anInspector){
var self=this;
var variables,inspectedContext;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
inspectedContext=_st(self)._context();
_st(variables)._addAll_(_st(inspectedContext)._locals());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(inspectedContext)._isBlockContext();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
inspectedContext=_st(inspectedContext)._outerContext();
inspectedContext;
return _st(variables)._addAll_(_st(inspectedContext)._locals());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_("Context");
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,inspectedContext:inspectedContext},smalltalk.HLContextInspectorDecorator)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables inspectedContext |\x0a\x09\x0a\x09variables := Dictionary new.\x0a\x09inspectedContext := self context.\x0a\x09\x0a\x09variables addAll: inspectedContext locals.\x0a\x09\x0a\x09[ inspectedContext isBlockContext ] whileTrue: [\x0a\x09\x09inspectedContext := inspectedContext outerContext.\x0a\x09\x09variables addAll: inspectedContext locals ].\x0a\x09\x0a\x09anInspector\x0a\x09\x09setLabel: 'Context';\x0a\x09\x09setVariables: variables",
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "outerContext", "isBlockContext", "setLabel:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLContextInspectorDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromContext_(aContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aContext:aContext},smalltalk.HLContextInspectorDecorator.klass)})},
args: ["aContext"],
source: "on: aContext\x0a\x09^ self new\x0a\x09\x09initializeFromContext: aContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLContextInspectorDecorator.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLFocusableWidget, ['model', 'stackListWidget', 'codeWidget', 'inspectorWidget'], 'Helios-Debugger');
smalltalk.HLDebugger.comment="I am the main widget for the Helios debugger."
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return smalltalk.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLBrowserCodeWidget())._new();
_st($3)._browserModel_(_st(self)._model());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLDebugger)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"],
referencedClasses: ["HLBrowserCodeWidget"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._stackListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLDebugger)})},
args: [],
source: "focus\x0a\x09self stackListWidget focus",
messageSends: ["focus", "stackListWidget"],
referencedClasses: []
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'accessing',
fn: function (aMethodContext){
var self=this;
function $HLDebuggerModel(){return smalltalk.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
self["@model"]=_st($HLDebuggerModel())._on_(aMethodContext);
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},smalltalk.HLDebugger)})},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x09model := HLDebuggerModel on: aMethodContext.\x0a\x09self observeModel",
messageSends: ["on:", "observeModel"],
referencedClasses: ["HLDebuggerModel"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectorWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLInspectorWidget(){return smalltalk.HLInspectorWidget||(typeof HLInspectorWidget=="undefined"?nil:HLInspectorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspectorWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@inspectorWidget"]=_st($HLInspectorWidget())._new();
$1=self["@inspectorWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectorWidget",{},smalltalk.HLDebugger)})},
args: [],
source: "inspectorWidget\x0a\x09^ inspectorWidget ifNil: [ \x0a\x09\x09inspectorWidget := HLInspectorWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLInspectorWidget"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLDebuggerModel(){return smalltalk.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st($HLDebuggerModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLDebugger)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLDebuggerModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLDebuggerModel"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLDebugger)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return smalltalk.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDebugger)})},
args: ["anAnnouncement"],
source: "onContextSelected: anAnnouncement\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)",
messageSends: ["inspect:", "on:", "context", "inspectorWidget"],
referencedClasses: ["HLContextInspectorDecorator"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'rendering',
fn: function (){
var self=this;
function $HLTab(){return smalltalk.HLTab||(typeof HLTab=="undefined"?nil:HLTab)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTab())._on_labelled_(self,_st(_st(self)._class())._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.HLDebugger)})},
args: [],
source: "open\x0a\x09HLManager current addTab: (HLTab on: self labelled: self class tabLabel)",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "class", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLDebugger);

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
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st(self)._stackListWidget(),_st($HLVerticalSplitter())._with_with_(_st(self)._codeWidget(),_st(self)._inspectorWidget()))));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLDebugger)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter\x0a\x09\x09with: self stackListWidget\x0a\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09with: self codeWidget\x0a\x09\x09\x09with: self inspectorWidget)))",
messageSends: ["with:", "with:with:", "stackListWidget", "codeWidget", "inspectorWidget"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stackListWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLStackListWidget(){return smalltalk.HLStackListWidget||(typeof HLStackListWidget=="undefined"?nil:HLStackListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@stackListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLStackListWidget())._on_(_st(self)._model());
_st($3)._next_(_st(self)._codeWidget());
$4=_st($3)._yourself();
self["@stackListWidget"]=$4;
$1=self["@stackListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stackListWidget",{},smalltalk.HLDebugger)})},
args: [],
source: "stackListWidget\x0a\x09^ stackListWidget ifNil: [ \x0a\x09\x09stackListWidget := (HLStackListWidget on: self model)\x0a\x09\x09\x09next: self codeWidget;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "next:", "codeWidget", "on:", "model", "yourself"],
referencedClasses: ["HLStackListWidget"]
}),
smalltalk.HLDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},smalltalk.HLDebugger.klass)})},
args: ["aMethodContext"],
source: "on: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLDebugger.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Debugger";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLDebugger.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Debugger'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebugger.klass);


smalltalk.addClass('HLDebuggerModel', smalltalk.HLToolModel, ['rootContext', 'currentContext', 'contexts'], 'Helios-Debugger');
smalltalk.HLDebuggerModel.comment="I am a model for Helios debugging.\x0a\x0aMy instances hold a reference to an `AIContext` instance, built from a `MethodContext`. The context should be the root of the context stack."
smalltalk.addMethod(
smalltalk.method({
selector: "contexts",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@contexts"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"contexts",{},smalltalk.HLDebuggerModel)})},
args: [],
source: "contexts\x0a\x09^ contexts",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@currentContext"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._currentContext_(_st(self)._rootContext());
} else {
$1;
};
$2=self["@currentContext"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentContext",{},smalltalk.HLDebuggerModel)})},
args: [],
source: "currentContext\x0a\x09currentContext ifNil: [ self currentContext: self rootContext ].\x0a\x09^ currentContext",
messageSends: ["ifNil:", "currentContext:", "rootContext"],
referencedClasses: []
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext:",
category: 'accessing',
fn: function (aContext){
var self=this;
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@currentContext"]=aContext;
self["@currentContext"];
$1=_st($HLDebuggerContextSelected())._new();
_st($1)._context_(aContext);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return _st(self)._selectedMethod_(_st(aContext)._method());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentContext:",{aContext:aContext},smalltalk.HLDebuggerModel)})},
args: ["aContext"],
source: "currentContext: aContext\x0a\x09self withChangesDo: [ \x0a\x09\x09currentContext := aContext.\x0a\x09\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09\x09context: aContext;\x0a\x09\x09\x09yourself).\x0a\x09\x09self selectedMethod: aContext method ]",
messageSends: ["withChangesDo:", "announce:", "context:", "new", "yourself", "announcer", "selectedMethod:", "method"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContexts",
category: 'initialization',
fn: function (){
var self=this;
var context;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@contexts"]=_st($OrderedCollection())._new();
context=_st(self)._rootContext();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(context)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@contexts"])._add_(context);
context=_st(context)._outerContext();
return context;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeContexts",{context:context},smalltalk.HLDebuggerModel)})},
args: [],
source: "initializeContexts\x0a\x09\x22Flatten the context stack into an OrderedCollection\x22\x0a\x09\x0a\x09| context |\x0a\x09\x0a\x09contexts := OrderedCollection new.\x0a\x09context := self rootContext.\x0a\x09\x0a\x09[ context notNil ] whileTrue: [\x0a\x09\x09contexts add: context.\x0a\x09\x09context := context outerContext ]",
messageSends: ["new", "rootContext", "whileTrue:", "add:", "outerContext", "notNil"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
category: 'initialization',
fn: function (aMethodContext){
var self=this;
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
self["@rootContext"]=_st($AIContext())._fromMethodContext_(aMethodContext);
_st(self)._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel)})},
args: ["aMethodContext"],
source: "initializeFromContext: aMethodContext\x0a\x09rootContext := AIContext fromMethodContext: aMethodContext.\x0a\x09self initializeContexts",
messageSends: ["fromMethodContext:", "initializeContexts"],
referencedClasses: ["AIContext"]
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "rootContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rootContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootContext",{},smalltalk.HLDebuggerModel)})},
args: [],
source: "rootContext\x0a\x09^ rootContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel.klass)})},
args: ["aMethodContext"],
source: "on: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLDebuggerModel.klass);


smalltalk.addClass('HLStackListWidget', smalltalk.HLToolListWidget, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=_st(_st(self)._model())._contexts();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLStackListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self model contexts ]",
messageSends: ["ifNil:", "contexts", "model"],
referencedClasses: []
}),
smalltalk.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Stack";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLStackListWidget)})},
args: [],
source: "label\x0a\x09^ 'Stack'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._currentContext_(aContext);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},smalltalk.HLStackListWidget)})},
args: ["aContext"],
source: "selectItem: aContext\x0a   \x09self model currentContext: aContext",
messageSends: ["currentContext:", "model"],
referencedClasses: []
}),
smalltalk.HLStackListWidget);



