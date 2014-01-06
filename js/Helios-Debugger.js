define("amber_core/Helios-Debugger", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Helios-Core", "amber_core/Helios-Workspace"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Debugger');
smalltalk.packages["Helios-Debugger"].transport = {"type":"amd","amdNamespace":"amber_core"};

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
var $1,$2,$3,$4;
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
if(($receiver = $3) == nil || $receiver == null){
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
protocol: 'accessing',
fn: function (){
var self=this;
function $HLDebuggerCodeWidget(){return globals.HLDebuggerCodeWidget||(typeof HLDebuggerCodeWidget=="undefined"?nil:HLDebuggerCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($HLDebuggerCodeWidget())._new();
_st($3)._browserModel_(self._model());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},globals.HLDebugger)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "new", "model", "yourself"],
referencedClasses: ["HLDebuggerCodeWidget"]
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
selector: "initializeFromMethodContext:",
protocol: 'accessing',
fn: function (aMethodContext){
var self=this;
function $HLDebuggerModel(){return globals.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
return smalltalk.withContext(function($ctx1) { 
self["@model"]=_st($HLDebuggerModel())._on_(aMethodContext);
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},globals.HLDebugger)})},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x09model := HLDebuggerModel on: aMethodContext.\x0a\x09self observeModel",
messageSends: ["on:", "observeModel"],
referencedClasses: ["HLDebuggerModel"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectorWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorWidget(){return globals.HLInspectorWidget||(typeof HLInspectorWidget=="undefined"?nil:HLInspectorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspectorWidget"];
if(($receiver = $2) == nil || $receiver == null){
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
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == null){
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
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._announcer();
$ctx1.sendIdx["announcer"]=1;
_st($1)._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st(_st(self._model())._announcer())._on_send_to_($HLDebuggerStepped(),"onContextSelected:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLDebugger)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onContextSelected:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLDebuggerContextSelected", "HLDebuggerStepped"]
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
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st($HLHorizontalSplitter())._with_with_(self._stackListWidget(),_st($HLVerticalSplitter())._with_with_(self._codeWidget(),self._inspectorWidget()));
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLDebugger)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter\x0a\x09\x09with: self stackListWidget\x0a\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09with: self codeWidget\x0a\x09\x09\x09with: self inspectorWidget)))",
messageSends: ["with:", "with:with:", "stackListWidget", "codeWidget", "inspectorWidget"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"]
}),
globals.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stackListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLStackListWidget(){return globals.HLStackListWidget||(typeof HLStackListWidget=="undefined"?nil:HLStackListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@stackListWidget"];
if(($receiver = $2) == nil || $receiver == null){
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
globals.HLDebugger.superclass.fn.prototype._unregister.apply(_st(self), []);
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
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},globals.HLDebugger.klass)})},
args: ["aMethodContext"],
source: "on: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
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
globals.HLDebuggerCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]);
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
$2=globals.HLDebuggerCodeWidget.superclass.fn.prototype._editorOptions.apply(_st(self), []);
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
self._highlightNode_(_st(self._browserModel())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{},globals.HLDebuggerCodeWidget)})},
args: [],
source: "highlight\x0a\x09self highlightNode: self browserModel nextNode",
messageSends: ["highlightNode:", "nextNode", "browserModel"],
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
var $4,$3,$2,$1,$5,$10,$9,$8,$7,$13,$12,$11,$6,$18,$17,$16,$15,$14;
if(($receiver = aNode) == nil || $receiver == null){
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
$10=_st(aNode)._positionStart();
$ctx1.sendIdx["positionStart"]=2;
$9=_st($10)._x();
$ctx1.sendIdx["x"]=2;
$8=_st($9).__minus((1));
$ctx1.sendIdx["-"]=2;
$7="line".__minus_gt($8);
$ctx1.sendIdx["->"]=1;
$13=_st(_st(aNode)._positionStart())._y();
$ctx1.sendIdx["y"]=1;
$12=_st($13).__minus((1));
$ctx1.sendIdx["-"]=3;
$11="ch".__minus_gt($12);
$ctx1.sendIdx["->"]=2;
$6=globals.HashedCollection._from_([$7,$11]);
$18=_st(aNode)._positionEnd();
$ctx1.sendIdx["positionEnd"]=1;
$17=_st($18)._x();
$16=_st($17).__minus((1));
$15="line".__minus_gt($16);
$ctx1.sendIdx["->"]=3;
$14=globals.HashedCollection._from_([$15,"ch".__minus_gt(_st(_st(aNode)._positionEnd())._y())]);
_st($5)._setSelection_to_($6,$14);
};
return self}, function($ctx1) {$ctx1.fill(self,"highlightNode:",{aNode:aNode,token:token},globals.HLDebuggerCodeWidget)})},
args: ["aNode"],
source: "highlightNode: aNode\x0a\x09| token |\x0a\x09\x0a\x09aNode ifNotNil: [\x0a\x09\x09self\x0a\x09\x09\x09clearHighlight;\x0a\x09\x09\x09addStopAt: aNode positionStart x - 1.\x0a\x0a\x09\x09self editor \x0a\x09\x09\x09setSelection: #{ 'line' -> (aNode positionStart x - 1). 'ch' -> (aNode positionStart y - 1) }\x0a\x09\x09\x09to: #{ 'line' -> (aNode positionEnd x - 1). 'ch' -> (aNode positionEnd y) } ]",
messageSends: ["ifNotNil:", "clearHighlight", "addStopAt:", "-", "x", "positionStart", "setSelection:to:", "editor", "->", "y", "positionEnd"],
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
globals.HLDebuggerCodeWidget.superclass.fn.prototype._observeBrowserModel.apply(_st(self), []);
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



smalltalk.addClass('HLDebuggerModel', globals.HLToolModel, ['rootContext', 'currentContext', 'contexts'], 'Helios-Debugger');
globals.HLDebuggerModel.comment="I am a model for Helios debugging.\x0a\x0aMy instances hold a reference to an `AIContext` instance, built from a `MethodContext`. The context should be the root of the context stack.";
smalltalk.addMethod(
smalltalk.method({
selector: "contexts",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@contexts"];
return $1;
},
args: [],
source: "contexts\x0a\x09^ contexts",
messageSends: [],
referencedClasses: []
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "currentContext",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@currentContext"];
if(($receiver = $1) == nil || $receiver == null){
self._currentContext_(self._rootContext());
} else {
$1;
};
$2=self["@currentContext"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentContext",{},globals.HLDebuggerModel)})},
args: [],
source: "currentContext\x0a\x09currentContext ifNil: [ self currentContext: self rootContext ].\x0a\x09^ currentContext",
messageSends: ["ifNil:", "currentContext:", "rootContext"],
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
self["@currentContext"]=aContext;
self["@currentContext"];
$1=_st($HLDebuggerContextSelected())._new();
_st($1)._context_(aContext);
$2=_st($1)._yourself();
return _st(self._announcer())._announce_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentContext:",{aContext:aContext},globals.HLDebuggerModel)})},
args: ["aContext"],
source: "currentContext: aContext\x0a\x09self withChangesDo: [ \x0a\x09\x09self selectedMethod: aContext method.\x0a\x09\x09currentContext := aContext.\x0a\x09\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09\x09context: aContext;\x0a\x09\x09\x09yourself) ]",
messageSends: ["withChangesDo:", "selectedMethod:", "method", "announce:", "announcer", "context:", "new", "yourself"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContexts",
protocol: 'initialization',
fn: function (){
var self=this;
var context;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@contexts"]=_st($OrderedCollection())._new();
context=self._rootContext();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(context)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@contexts"])._add_(context);
context=_st(context)._outerContext();
return context;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeContexts",{context:context},globals.HLDebuggerModel)})},
args: [],
source: "initializeContexts\x0a\x09\x22Flatten the context stack into an OrderedCollection\x22\x0a\x09\x0a\x09| context |\x0a\x09\x0a\x09contexts := OrderedCollection new.\x0a\x09context := self rootContext.\x0a\x09\x0a\x09[ context notNil ] whileTrue: [\x0a\x09\x09contexts add: context.\x0a\x09\x09context := context outerContext ]",
messageSends: ["new", "rootContext", "whileTrue:", "notNil", "add:", "outerContext"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromContext:",
protocol: 'initialization',
fn: function (aMethodContext){
var self=this;
function $AIContext(){return globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
self["@rootContext"]=_st($AIContext())._fromMethodContext_(aMethodContext);
self._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aMethodContext:aMethodContext},globals.HLDebuggerModel)})},
args: ["aMethodContext"],
source: "initializeFromContext: aMethodContext\x0a\x09rootContext := AIContext fromMethodContext: aMethodContext.\x0a\x09self initializeContexts",
messageSends: ["fromMethodContext:", "initializeContexts"],
referencedClasses: ["AIContext"]
}),
globals.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._currentContext())._interpreter();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},globals.HLDebuggerModel)})},
args: [],
source: "interpreter\x0a\x09^ self currentContext interpreter",
messageSends: ["interpreter", "currentContext"],
referencedClasses: []
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
$1=_st(self._interpreter())._node();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},globals.HLDebuggerModel)})},
args: [],
source: "nextNode\x0a\x09^ self interpreter node",
messageSends: ["node", "interpreter"],
referencedClasses: []
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
_st(self._interpreter())._restart();
$1=_st($HLDebuggerStepped())._new();
_st($1)._context_(self._currentContext());
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.HLDebuggerModel)})},
args: [],
source: "restart\x0a\x09self interpreter restart.\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["restart", "interpreter", "announce:", "announcer", "context:", "new", "currentContext", "yourself"],
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
selector: "skip",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._interpreter())._skip();
$1=_st($HLDebuggerStepped())._new();
_st($1)._context_(self._currentContext());
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},globals.HLDebuggerModel)})},
args: [],
source: "skip\x0a\x09self interpreter skip.\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["skip", "interpreter", "announce:", "announcer", "context:", "new", "currentContext", "yourself"],
referencedClasses: ["HLDebuggerStepped"]
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
_st(self._interpreter())._stepOver();
$1=_st($HLDebuggerStepped())._new();
_st($1)._context_(self._currentContext());
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},globals.HLDebuggerModel)})},
args: [],
source: "stepOver\x0a\x09self interpreter stepOver.\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
messageSends: ["stepOver", "interpreter", "announce:", "announcer", "context:", "new", "currentContext", "yourself"],
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
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aMethodContext:aMethodContext},globals.HLDebuggerModel.klass)})},
args: ["aMethodContext"],
source: "on: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromContext:", "new", "yourself"],
referencedClasses: []
}),
globals.HLDebuggerModel.klass);


smalltalk.addClass('HLErrorHandler', globals.Object, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLDebugger(){return globals.HLDebugger||(typeof HLDebugger=="undefined"?nil:HLDebugger)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
self._onErrorHandled();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($HLDebugger())._on_(_st(anError)._context()))._openAsTab();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ErrorHandler())._new())._handleError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.HLErrorHandler)})},
args: ["anError"],
source: "handleError: anError\x0a\x09self onErrorHandled.\x0a\x0a\x09[ \x0a\x09\x09(HLDebugger on: anError context) openAsTab \x0a\x09] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ErrorHandler new handleError: error ]",
messageSends: ["onErrorHandled", "on:do:", "openAsTab", "on:", "context", "handleError:", "new"],
referencedClasses: ["HLDebugger", "Error", "ErrorHandler"]
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
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == null){
self["@items"]=_st(self._model())._contexts();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLStackListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self model contexts ]",
messageSends: ["ifNil:", "contexts", "model"],
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
_st($9)._class_("btn skip");
_st($9)._with_("Skip");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._skip();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLStackListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a\x09\x09class: 'debugger_bar'; \x0a\x09\x09with: [\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn restart';\x0a\x09\x09\x09\x09with: 'Restart';\x0a\x09\x09\x09\x09onClick: [ self restart ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn where';\x0a\x09\x09\x09\x09with: 'Where';\x0a\x09\x09\x09\x09onClick: [ self where ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn stepOver';\x0a\x09\x09\x09\x09with: 'Step over';\x0a\x09\x09\x09\x09onClick: [ self stepOver ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn skip';\x0a\x09\x09\x09\x09with: 'Skip';\x0a\x09\x09\x09\x09onClick: [ self skip ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "restart", "where", "stepOver", "skip"],
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
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},globals.HLStackListWidget)})},
args: ["aContext"],
source: "selectItem: aContext\x0a   \x09self model currentContext: aContext",
messageSends: ["currentContext:", "model"],
referencedClasses: []
}),
globals.HLStackListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._skip();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},globals.HLStackListWidget)})},
args: [],
source: "skip\x0a\x09self model skip",
messageSends: ["skip", "model"],
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
