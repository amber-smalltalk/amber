smalltalk.addPackage('Helios-Debugger');
smalltalk.addClass('HLContextInspectorDecorator', smalltalk.Object, ['context'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.HLContextInspectorDecorator)})},
messageSends: []}),
smalltalk.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aContext:aContext},smalltalk.HLContextInspectorDecorator)})},
messageSends: []}),
smalltalk.HLContextInspectorDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
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
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "outerContext", "isBlockContext", "setLabel:", "setVariables:"]}),
smalltalk.HLContextInspectorDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["initializeFromContext:", "new", "yourself"]}),
smalltalk.HLContextInspectorDecorator.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLFocusableWidget, ['model', 'stackListWidget', 'codeWidget', 'inspectorWidget'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
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
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._stackListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLDebugger)})},
messageSends: ["focus", "stackListWidget"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
fn: function (aMethodContext){
var self=this;
function $HLDebuggerModel(){return smalltalk.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
self["@model"]=_st($HLDebuggerModel())._on_(aMethodContext);
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},smalltalk.HLDebugger)})},
messageSends: ["on:", "observeModel"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectorWidget",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLDebugger)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected:",
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return smalltalk.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDebugger)})},
messageSends: ["inspect:", "on:", "context", "inspectorWidget"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
function $HLTab(){return smalltalk.HLTab||(typeof HLTab=="undefined"?nil:HLTab)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTab())._on_labelled_(self,_st(_st(self)._class())._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.HLDebugger)})},
messageSends: ["addTab:", "on:labelled:", "tabLabel", "class", "current"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st(self)._stackListWidget(),_st($HLVerticalSplitter())._with_with_(_st(self)._codeWidget(),_st(self)._inspectorWidget()))));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLDebugger)})},
messageSends: ["with:", "with:with:", "stackListWidget", "codeWidget", "inspectorWidget"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stackListWidget",
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
messageSends: ["ifNil:", "next:", "codeWidget", "on:", "model", "yourself"]}),
smalltalk.HLDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["initializeFromMethodContext:", "new", "yourself"]}),
smalltalk.HLDebugger.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Debugger";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLDebugger.klass)})},
messageSends: []}),
smalltalk.HLDebugger.klass);


smalltalk.addClass('HLDebuggerModel', smalltalk.HLToolModel, ['rootContext', 'currentContext', 'contexts'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "contexts",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@contexts"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"contexts",{},smalltalk.HLDebuggerModel)})},
messageSends: []}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext",
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
messageSends: ["ifNil:", "currentContext:", "rootContext"]}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext:",
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
messageSends: ["withChangesDo:", "announce:", "context:", "new", "yourself", "announcer", "selectedMethod:", "method"]}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContexts",
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
messageSends: ["new", "rootContext", "whileTrue:", "add:", "outerContext", "notNil"]}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
fn: function (aMethodContext){
var self=this;
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
self["@rootContext"]=_st($AIContext())._fromMethodContext_(aMethodContext);
_st(self)._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel)})},
messageSends: ["fromMethodContext:", "initializeContexts"]}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "rootContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rootContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootContext",{},smalltalk.HLDebuggerModel)})},
messageSends: []}),
smalltalk.HLDebuggerModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["initializeFromContext:", "new", "yourself"]}),
smalltalk.HLDebuggerModel.klass);


smalltalk.addClass('HLStackListWidget', smalltalk.HLToolListWidget, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
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
messageSends: ["ifNil:", "contexts", "model"]}),
smalltalk.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Stack";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLStackListWidget)})},
messageSends: []}),
smalltalk.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._currentContext_(aContext);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},smalltalk.HLStackListWidget)})},
messageSends: ["currentContext:", "model"]}),
smalltalk.HLStackListWidget);



