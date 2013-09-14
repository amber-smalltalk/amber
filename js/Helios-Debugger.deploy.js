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
var $1,$2,$3;
variables=_st($Dictionary())._new();
inspectedContext=self._context();
_st(variables)._addAll_(_st(inspectedContext)._locals());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(inspectedContext)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(inspectedContext)._isBlockContext();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
inspectedContext=_st(inspectedContext)._outerContext();
inspectedContext;
$1=inspectedContext;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(variables)._addAll_(_st(inspectedContext)._locals());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=anInspector;
_st($2)._setLabel_("Context");
$3=_st($2)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,inspectedContext:inspectedContext},smalltalk.HLContextInspectorDecorator)})},
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "outerContext", "ifNotNil:", "and:", "isBlockContext", "notNil", "setLabel:", "setVariables:"]}),
smalltalk.HLContextInspectorDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
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
function $HLDebuggerCodeWidget(){return smalltalk.HLDebuggerCodeWidget||(typeof HLDebuggerCodeWidget=="undefined"?nil:HLDebuggerCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLDebuggerCodeWidget())._new();
_st($3)._browserModel_(self._model());
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
_st(self._stackListWidget())._focus();
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
self._observeModel();
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
_st(_st(self._model())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
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
_st(self._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDebugger)})},
messageSends: ["inspect:", "on:", "context", "inspectorWidget"]}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLDebugger)})},
messageSends: ["registerConcreteClassesOn:for:", "model"]}),
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
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(self._stackListWidget(),_st($HLVerticalSplitter())._with_with_(self._codeWidget(),self._inspectorWidget()))));
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
$3=_st($HLStackListWidget())._on_(self._model());
_st($3)._next_(self._codeWidget());
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
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDebugger.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(self._inspectorWidget())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLDebugger)})},
messageSends: ["unregister", "inspectorWidget"]}),
smalltalk.HLDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},smalltalk.HLDebugger.klass)})},
messageSends: ["initializeFromMethodContext:", "new", "yourself"]}),
smalltalk.HLDebugger.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "debugger";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLDebugger.klass)})},
messageSends: []}),
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


smalltalk.addClass('HLDebuggerCodeWidget', smalltalk.HLBrowserCodeWidget, ['highlightedNode'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "addStopAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._setGutterMarker_gutter_value_(anInteger,"stops",_st(_st("<div class=\x22stop\x22></stop>"._asJQuery())._toArray())._first());
return self}, function($ctx1) {$ctx1.fill(self,"addStopAt:",{anInteger:anInteger},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["setGutterMarker:gutter:value:", "first", "toArray", "asJQuery"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearHighlight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@editor"])._clearGutter_("stops");
$1=self._highlightedNode();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var node;
node=$receiver;
_st(self["@editor"])._removeLineClass_where_class_(_st(_st(_st(node)._position())._x()).__minus((1)),"background","highlighted");
};
return self}, function($ctx1) {$ctx1.fill(self,"clearHighlight",{},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["clearGutter:", "ifNotNil:", "removeLineClass:where:class:", "-", "x", "position", "highlightedNode"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearHighlight();
smalltalk.HLDebuggerCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["clearHighlight", "contents:"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.HLDebuggerCodeWidget.superclass.fn.prototype._editorOptions.apply(_st(self), []);
_st($2)._at_put_("gutters",["CodeMirror-linenumbers", "stops"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["at:put:", "editorOptions", "yourself"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlight",
fn: function (){
var self=this;
var anchor,head,selection;
return smalltalk.withContext(function($ctx1) { 
head=smalltalk.HashedCollection._from_(["line".__minus_gt(_st(_st(_st(self._highlightedNode())._position())._x()).__minus((1))),"ch".__minus_gt(_st(_st(_st(self._highlightedNode())._position())._y()).__minus((1)))]);
anchor=smalltalk.HashedCollection._from_(["line".__minus_gt(_st(_st(_st(self._highlightedNode())._extent())._x()).__minus((1))),"ch".__minus_gt(_st(_st(_st(self._highlightedNode())._extent())._y()).__minus((1)))]);
_st(self["@editor"])._setSelection_to_(head,anchor);
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{anchor:anchor,head:head,selection:selection},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["->", "-", "x", "position", "highlightedNode", "y", "extent", "setSelection:to:"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightLine:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._addLineClass_where_class_(anInteger,"background","highlighted");
return self}, function($ctx1) {$ctx1.fill(self,"highlightLine:",{anInteger:anInteger},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["addLineClass:where:class:"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightNode:",
fn: function (aNode){
var self=this;
var line;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=aNode;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
line=_st(_st(_st(aNode)._position())._x()).__minus((1));
line;
$2=self;
_st($2)._clearHighlight();
_st($2)._addStopAt_(line);
_st($2)._highlightLine_(line);
$3=_st($2)._highlightedNode_(aNode);
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"highlightNode:",{aNode:aNode,line:line},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["ifNotNil:", "-", "x", "position", "clearHighlight", "addStopAt:", "highlightLine:", "highlightedNode:"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightedNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@highlightedNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightedNode",{},smalltalk.HLDebuggerCodeWidget)})},
messageSends: []}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightedNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightedNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"highlightedNode:",{aNode:aNode},smalltalk.HLDebuggerCodeWidget)})},
messageSends: []}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDebuggerCodeWidget.superclass.fn.prototype._observeBrowserModel.apply(_st(self), []);
_st(_st(self._browserModel())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["observeBrowserModel", "on:send:to:", "announcer", "browserModel"]}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._highlightNode_(_st(self._browserModel())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected",{},smalltalk.HLDebuggerCodeWidget)})},
messageSends: ["highlightNode:", "nextNode", "browserModel"]}),
smalltalk.HLDebuggerCodeWidget);



smalltalk.addClass('HLDebuggerModel', smalltalk.HLToolModel, ['rootContext', 'currentContext', 'contexts', 'interpreter'], 'Helios-Debugger');
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
self._currentContext_(self._rootContext());
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
function $ASTDebugger(){return smalltalk.ASTDebugger||(typeof ASTDebugger=="undefined"?nil:ASTDebugger)}
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedMethod_(_st(aContext)._method());
self["@currentContext"]=aContext;
self["@currentContext"];
self["@interpreter"]=_st($ASTDebugger())._context_(aContext);
self["@interpreter"];
$1=_st($HLDebuggerContextSelected())._new();
_st($1)._context_(aContext);
$2=_st($1)._yourself();
return _st(self._announcer())._announce_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentContext:",{aContext:aContext},smalltalk.HLDebuggerModel)})},
messageSends: ["withChangesDo:", "selectedMethod:", "method", "context:", "announce:", "new", "yourself", "announcer"]}),
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
context=self._rootContext();
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
self._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel)})},
messageSends: ["fromMethodContext:", "initializeContexts"]}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interpreter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.HLDebuggerModel)})},
messageSends: []}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._nextNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.HLDebuggerModel)})},
messageSends: ["nextNode", "interpreter"]}),
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
$2=self._new();
_st($2)._initializeFromContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel.klass)})},
messageSends: ["initializeFromContext:", "new", "yourself"]}),
smalltalk.HLDebuggerModel.klass);


smalltalk.addClass('HLErrorHandler', smalltalk.ErrorHandler, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
fn: function (anError){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
function $HLDebugger(){return smalltalk.HLDebugger||(typeof HLDebugger=="undefined"?nil:HLDebugger)}
return smalltalk.withContext(function($ctx1) { 
self._onErrorHandled();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($HLDebugger())._on_(_st(anError)._context()))._openAsTab();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ErrorHandler())._new())._handleError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.HLErrorHandler)})},
messageSends: ["onErrorHandled", "on:do:", "handleError:", "new", "openAsTab", "on:", "context"]}),
smalltalk.HLErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorHandled",
fn: function (){
var self=this;
function $HLProgressWidget(){return smalltalk.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLProgressWidget())._default();
_st($1)._flush();
$2=_st($1)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"onErrorHandled",{},smalltalk.HLErrorHandler)})},
messageSends: ["flush", "default", "remove"]}),
smalltalk.HLErrorHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._handleError_(anError);
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.HLErrorHandler.klass)})},
messageSends: ["handleError:", "new"]}),
smalltalk.HLErrorHandler.klass);


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
self["@items"]=_st(self._model())._contexts();
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
return "Call stack";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLStackListWidget)})},
messageSends: []}),
smalltalk.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._currentContext_(aContext);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},smalltalk.HLStackListWidget)})},
messageSends: ["currentContext:", "model"]}),
smalltalk.HLStackListWidget);



