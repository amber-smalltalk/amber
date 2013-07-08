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
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables inspectedContext |\x0a\x09\x0a\x09variables := Dictionary new.\x0a\x09inspectedContext := self context.\x0a\x09\x0a\x09variables addAll: inspectedContext locals.\x0a\x09\x0a\x09[ inspectedContext notNil and: [ inspectedContext isBlockContext ] ] whileTrue: [\x0a\x09\x09inspectedContext := inspectedContext outerContext.\x0a\x09\x09inspectedContext ifNotNil: [\x0a\x09\x09\x09variables addAll: inspectedContext locals ] ].\x0a\x09\x0a\x09anInspector\x0a\x09\x09setLabel: 'Context';\x0a\x09\x09setVariables: variables",
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "outerContext", "ifNotNil:", "and:", "isBlockContext", "notNil", "setLabel:", "setVariables:"],
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
$2=self._new();
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
smalltalk.HLDebugger.comment="I am the main widget for the Helios debugger.";
smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
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
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"],
referencedClasses: ["HLDebuggerCodeWidget"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stackListWidget())._focus();
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
self._observeModel();
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
_st(_st(self._model())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
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
_st(self._inspectorWidget())._inspect_(_st($HLContextInspectorDecorator())._on_(_st(anAnnouncement)._context()));
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDebugger)})},
args: ["anAnnouncement"],
source: "onContextSelected: anAnnouncement\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)",
messageSends: ["inspect:", "on:", "context", "inspectorWidget"],
referencedClasses: ["HLContextInspectorDecorator"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLDebugger)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
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
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(self._stackListWidget(),_st($HLVerticalSplitter())._with_with_(self._codeWidget(),self._inspectorWidget()))));
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
args: [],
source: "stackListWidget\x0a\x09^ stackListWidget ifNil: [ \x0a\x09\x09stackListWidget := (HLStackListWidget on: self model)\x0a\x09\x09\x09next: self codeWidget;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "next:", "codeWidget", "on:", "model", "yourself"],
referencedClasses: ["HLStackListWidget"]
}),
smalltalk.HLDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDebugger.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(self._inspectorWidget())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLDebugger)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self inspectorWidget unregister",
messageSends: ["unregister", "inspectorWidget"],
referencedClasses: []
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
$2=self._new();
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
selector: "tabClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "debugger";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLDebugger.klass)})},
args: [],
source: "tabClass\x0a\x09^ 'debugger'",
messageSends: [],
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


smalltalk.addClass('HLDebuggerCodeWidget', smalltalk.HLBrowserCodeWidget, ['highlightedNode'], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "addStopAt:",
category: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._setGutterMarker_gutter_value_(anInteger,"stops",_st(_st("<div class=\x22stop\x22></stop>"._asJQuery())._toArray())._first());
return self}, function($ctx1) {$ctx1.fill(self,"addStopAt:",{anInteger:anInteger},smalltalk.HLDebuggerCodeWidget)})},
args: ["anInteger"],
source: "addStopAt: anInteger\x0a\x09editor\x0a\x09\x09setGutterMarker: anInteger\x0a\x09\x09gutter: 'stops'\x0a\x09\x09value: '<div class=\x22stop\x22></stop>' asJQuery toArray first",
messageSends: ["setGutterMarker:gutter:value:", "first", "toArray", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearHighlight",
category: 'actions',
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
args: [],
source: "clearHighlight\x0a\x09editor clearGutter: 'stops'.\x0a\x09self highlightedNode ifNotNil: [ :node |\x0a\x09\x09editor \x0a\x09\x09\x09removeLineClass: node position x - 1\x0a\x09\x09\x09where: 'background'\x0a\x09\x09\x09class: 'highlighted' ]",
messageSends: ["clearGutter:", "ifNotNil:", "removeLineClass:where:class:", "-", "x", "position", "highlightedNode"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._clearHighlight();
smalltalk.HLDebuggerCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLDebuggerCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09self clearHighlight.\x0a\x09super contents: aString",
messageSends: ["clearHighlight", "contents:"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
category: 'accessing',
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
args: [],
source: "editorOptions\x0a\x09^ super editorOptions\x0a\x09\x09at: 'gutters' put: #('CodeMirror-linenumbers' 'stops');\x0a\x09\x09yourself",
messageSends: ["at:put:", "editorOptions", "yourself"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlight",
category: 'actions',
fn: function (){
var self=this;
var anchor,head,selection;
return smalltalk.withContext(function($ctx1) { 
head=smalltalk.HashedCollection._from_(["line".__minus_gt(_st(_st(_st(self._highlightedNode())._position())._x()).__minus((1))),"ch".__minus_gt(_st(_st(_st(self._highlightedNode())._position())._y()).__minus((1)))]);
anchor=smalltalk.HashedCollection._from_(["line".__minus_gt(_st(_st(_st(self._highlightedNode())._extent())._x()).__minus((1))),"ch".__minus_gt(_st(_st(_st(self._highlightedNode())._extent())._y()).__minus((1)))]);
_st(self["@editor"])._setSelection_to_(head,anchor);
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{anchor:anchor,head:head,selection:selection},smalltalk.HLDebuggerCodeWidget)})},
args: [],
source: "highlight\x0a\x09| anchor head selection |\x0a\x09\x0a\x09head := #{\x0a\x09\x09'line' -> (self highlightedNode position x - 1).\x0a\x09\x09'ch' -> (self highlightedNode position y - 1)\x0a\x09}.\x0a\x09\x0a\x09anchor := #{\x0a\x09\x09'line' -> (self highlightedNode extent x - 1).\x0a\x09\x09'ch' -> (self highlightedNode extent y - 1)\x0a\x09}.\x0a\x09\x0a\x09editor setSelection: head to: anchor",
messageSends: ["->", "-", "x", "position", "highlightedNode", "y", "extent", "setSelection:to:"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightLine:",
category: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._addLineClass_where_class_(anInteger,"background","highlighted");
return self}, function($ctx1) {$ctx1.fill(self,"highlightLine:",{anInteger:anInteger},smalltalk.HLDebuggerCodeWidget)})},
args: ["anInteger"],
source: "highlightLine: anInteger\x0a\x09editor \x0a\x09\x09addLineClass: anInteger\x0a\x09\x09where: 'background'\x0a\x09\x09class: 'highlighted'",
messageSends: ["addLineClass:where:class:"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightNode:",
category: 'actions',
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
args: ["aNode"],
source: "highlightNode: aNode\x0a\x09| line |\x0a\x09aNode ifNotNil: [\x0a\x09\x09line := aNode position x - 1.\x0a\x09\x09self \x0a\x09\x09\x09clearHighlight; \x0a\x09\x09\x09addStopAt: line;\x0a\x09\x09\x09highlightLine: line;\x0a\x09\x09\x09highlightedNode: aNode\x0a\x09\x09]",
messageSends: ["ifNotNil:", "-", "x", "position", "clearHighlight", "addStopAt:", "highlightLine:", "highlightedNode:"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightedNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@highlightedNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"highlightedNode",{},smalltalk.HLDebuggerCodeWidget)})},
args: [],
source: "highlightedNode\x0a\x09^ highlightedNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightedNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highlightedNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"highlightedNode:",{aNode:aNode},smalltalk.HLDebuggerCodeWidget)})},
args: ["aNode"],
source: "highlightedNode: aNode\x0a\x09highlightedNode := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
category: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return smalltalk.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDebuggerCodeWidget.superclass.fn.prototype._observeBrowserModel.apply(_st(self), []);
_st(_st(self._browserModel())._announcer())._on_send_to_($HLDebuggerContextSelected(),"onContextSelected",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},smalltalk.HLDebuggerCodeWidget)})},
args: [],
source: "observeBrowserModel\x0a\x09super observeBrowserModel.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self",
messageSends: ["observeBrowserModel", "on:send:to:", "announcer", "browserModel"],
referencedClasses: ["HLDebuggerContextSelected"]
}),
smalltalk.HLDebuggerCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onContextSelected",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._highlightNode_(_st(self._browserModel())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"onContextSelected",{},smalltalk.HLDebuggerCodeWidget)})},
args: [],
source: "onContextSelected\x0a\x09self highlightNode: self browserModel nextNode",
messageSends: ["highlightNode:", "nextNode", "browserModel"],
referencedClasses: []
}),
smalltalk.HLDebuggerCodeWidget);



smalltalk.addClass('HLDebuggerModel', smalltalk.HLToolModel, ['rootContext', 'currentContext', 'contexts', 'interpreter'], 'Helios-Debugger');
smalltalk.HLDebuggerModel.comment="I am a model for Helios debugging.\x0a\x0aMy instances hold a reference to an `AIContext` instance, built from a `MethodContext`. The context should be the root of the context stack.";
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
self._currentContext_(self._rootContext());
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
args: ["aContext"],
source: "currentContext: aContext\x0a\x09self withChangesDo: [ \x0a\x09\x09self selectedMethod: aContext method.\x0a\x09\x09currentContext := aContext.\x0a\x09\x09interpreter := ASTDebugger context: aContext.\x0a\x09\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09\x09context: aContext;\x0a\x09\x09\x09yourself) ]",
messageSends: ["withChangesDo:", "selectedMethod:", "method", "context:", "announce:", "new", "yourself", "announcer"],
referencedClasses: ["ASTDebugger", "HLDebuggerContextSelected"]
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
self._initializeContexts();
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromContext:",{aMethodContext:aMethodContext},smalltalk.HLDebuggerModel)})},
args: ["aMethodContext"],
source: "initializeFromContext: aMethodContext\x0a\x09rootContext := AIContext fromMethodContext: aMethodContext.\x0a\x09self initializeContexts",
messageSends: ["fromMethodContext:", "initializeContexts"],
referencedClasses: ["AIContext"]
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interpreter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.HLDebuggerModel)})},
args: [],
source: "interpreter\x0a\x09^ interpreter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerModel);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._nextNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.HLDebuggerModel)})},
args: [],
source: "nextNode\x0a\x09^ self interpreter nextNode",
messageSends: ["nextNode", "interpreter"],
referencedClasses: []
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
$2=self._new();
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


smalltalk.addClass('HLErrorHandler', smalltalk.ErrorHandler, [], 'Helios-Debugger');
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
category: 'error handling',
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
args: ["anError"],
source: "handleError: anError\x0a\x09self onErrorHandled.\x0a\x0a\x09[ \x0a\x09\x09(HLDebugger on: anError context) openAsTab \x0a\x09] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ErrorHandler new handleError: error ]",
messageSends: ["onErrorHandled", "on:do:", "handleError:", "new", "openAsTab", "on:", "context"],
referencedClasses: ["Error", "ErrorHandler", "HLDebugger"]
}),
smalltalk.HLErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorHandled",
category: 'error handling',
fn: function (){
var self=this;
function $HLProgressWidget(){return smalltalk.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLProgressWidget())._default();
_st($1)._flush();
$2=_st($1)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"onErrorHandled",{},smalltalk.HLErrorHandler)})},
args: [],
source: "onErrorHandled\x0a\x09\x22when an error is handled, we need to make sure that\x0a\x09any progress bar widget gets removed. Because HLProgressBarWidget is asynchronous,\x0a\x09it has to be done here.\x22\x0a\x09\x0a\x09HLProgressWidget default \x0a\x09\x09flush; \x0a\x09\x09remove",
messageSends: ["flush", "default", "remove"],
referencedClasses: ["HLProgressWidget"]
}),
smalltalk.HLErrorHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._handleError_(anError);
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.HLErrorHandler.klass)})},
args: ["anError"],
source: "handleError: anError\x0a\x09^ self new handleError: anError",
messageSends: ["handleError:", "new"],
referencedClasses: []
}),
smalltalk.HLErrorHandler.klass);


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
self["@items"]=_st(self._model())._contexts();
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
return "Call stack";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLStackListWidget)})},
args: [],
source: "label\x0a\x09^ 'Call stack'",
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
_st(self._model())._currentContext_(aContext);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},smalltalk.HLStackListWidget)})},
args: ["aContext"],
source: "selectItem: aContext\x0a   \x09self model currentContext: aContext",
messageSends: ["currentContext:", "model"],
referencedClasses: []
}),
smalltalk.HLStackListWidget);



