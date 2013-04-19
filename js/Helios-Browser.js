smalltalk.addPackage('Helios-Browser');
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget', 'bottomDiv'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLBrowser)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "classesListWidget",
category: 'widgets',
fn: function (){
var self=this;
function $HLClassesListWidget(){return smalltalk.HLClassesListWidget||(typeof HLClassesListWidget=="undefined"?nil:HLClassesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesListWidget"]=_st($HLClassesListWidget())._on_(_st(self)._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(_st(self)._protocolsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self protocolsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"],
referencedClasses: ["HLClassesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._environment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLBrowser)})},
args: [],
source: "environment\x0a\x09^ self model environment",
messageSends: ["environment", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._packagesListWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowser)})},
args: [],
source: "focus\x0a\x09^ self packagesListWidget focus",
messageSends: ["focus", "packagesListWidget"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsListWidget",
category: 'widgets',
fn: function (){
var self=this;
function $HLMethodsListWidget(){return smalltalk.HLMethodsListWidget||(typeof HLMethodsListWidget=="undefined"?nil:HLMethodsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@methodsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@methodsListWidget"]=_st($HLMethodsListWidget())._on_(_st(self)._model());
self["@methodsListWidget"];
$1=_st(self["@methodsListWidget"])._next_(_st(self)._sourceWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "methodsListWidget\x0a\x09^ methodsListWidget ifNil: [\x0a      \x09methodsListWidget := HLMethodsListWidget on: self model.\x0a\x09\x09methodsListWidget next: self sourceWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "sourceWidget"],
referencedClasses: ["HLMethodsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLBrowserModel(){return smalltalk.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st($HLBrowserModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLBrowser)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLBrowserModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLBrowserModel"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLBrowser)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
category: 'widgets',
fn: function (){
var self=this;
function $HLPackagesListWidget(){return smalltalk.HLPackagesListWidget||(typeof HLPackagesListWidget=="undefined"?nil:HLPackagesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@packagesListWidget"]=_st($HLPackagesListWidget())._on_(_st(self)._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(_st(self)._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"],
referencedClasses: ["HLPackagesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsListWidget",
category: 'widgets',
fn: function (){
var self=this;
function $HLProtocolsListWidget(){return smalltalk.HLProtocolsListWidget||(typeof HLProtocolsListWidget=="undefined"?nil:HLProtocolsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@protocolsListWidget"]=_st($HLProtocolsListWidget())._on_(_st(self)._model());
self["@protocolsListWidget"];
$1=_st(self["@protocolsListWidget"])._next_(_st(self)._methodsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "protocolsListWidget\x0a\x09^ protocolsListWidget ifNil: [\x0a      \x09protocolsListWidget := HLProtocolsListWidget on: self model.\x0a\x09\x09protocolsListWidget next: self methodsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"],
referencedClasses: ["HLProtocolsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,_st(self)._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLBrowser)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
}),
smalltalk.HLBrowser);

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
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st(self)._packagesListWidget(),_st(self)._classesListWidget()),_st($HLVerticalSplitter())._with_with_(_st(self)._protocolsListWidget(),_st(self)._methodsListWidget())),_st(self)._sourceWidget())));
_st(_st(self)._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowser)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self protocolsListWidget\x0a                with: self methodsListWidget)) \x0a        with: self sourceWidget)).\x0a\x09\x0a\x09self packagesListWidget focus",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget", "focus"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceWidget",
category: 'widgets',
fn: function (){
var self=this;
function $HLBrowserBottomWidget(){return smalltalk.HLBrowserBottomWidget||(typeof HLBrowserBottomWidget=="undefined"?nil:HLBrowserBottomWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@sourceWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLBrowserBottomWidget())._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@sourceWidget"]=$4;
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "sourceWidget\x0a\x09^ sourceWidget ifNil: [\x0a      \x09sourceWidget := HLBrowserBottomWidget new\x0a\x09\x09\x09model: self model;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLBrowserBottomWidget"]
}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLBrowser.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2=_st("browser_").__comma(_st(_st(self["@nextId"]).__plus((1)))._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextId",{},smalltalk.HLBrowser.klass)})},
args: [],
source: "nextId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a    ^ 'browser_', (nextId + 1) asString",
messageSends: ["ifNil:", ",", "asString", "+"],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Browser";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLBrowser.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLBrowser.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserBottomWidget', smalltalk.HLWidget, ['model', 'codeWidget', 'documentationWidget', 'selectedWidget'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

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
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"],
referencedClasses: ["HLBrowserCodeWidget"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentationWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLDocumentationWidget(){return smalltalk.HLDocumentationWidget||(typeof HLDocumentationWidget=="undefined"?nil:HLDocumentationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@documentationWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLDocumentationWidget())._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@documentationWidget"]=$4;
$1=self["@documentationWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentationWidget",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "documentationWidget\x0a\x09^ documentationWidget ifNil: [ documentationWidget := HLDocumentationWidget new\x0a\x09\x09model: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLDocumentationWidget"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._selectedWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "focus\x0a\x09self selectedWidget focus",
messageSends: ["focus", "selectedWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

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
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLBrowserBottomWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_($HLShowInstanceToggled(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onShowInstanceToggled();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._on_do_($HLShowCommentToggled(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onShowCommentToggled();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09do: [ self onShowInstanceToggled ];\x0a\x09\x09on: HLShowCommentToggled\x0a\x09\x09do: [ self onShowCommentToggled ]",
messageSends: ["on:do:", "onShowInstanceToggled", "announcer", "model", "onShowCommentToggled"],
referencedClasses: ["HLShowInstanceToggled", "HLShowCommentToggled"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectWidget_(_st(self)._documentationWidget());
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "onShowCommentToggled\x0a\x09self selectWidget: self documentationWidget",
messageSends: ["selectWidget:", "documentationWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectWidget_(_st(self)._codeWidget());
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self selectWidget: self codeWidget",
messageSends: ["selectWidget:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "previous\x0a\x09\x22For navigation\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLBrowserBottomWidget)})},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22For navigation\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(self)._selectedWidget());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowserBottomWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self selectedWidget",
messageSends: ["with:", "selectedWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectWidget:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedWidget"]=aWidget;
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"selectWidget:",{aWidget:aWidget},smalltalk.HLBrowserBottomWidget)})},
args: ["aWidget"],
source: "selectWidget: aWidget\x0a\x09selectedWidget := aWidget.\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedWidget"]=_st(self)._codeWidget();
$1=self["@selectedWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedWidget",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "selectedWidget\x0a\x09^ selectedWidget ifNil: [ selectedWidget := self codeWidget ]",
messageSends: ["ifNil:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.HLToolModel, ['showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "focusOnClasses",
category: 'actions',
fn: function (){
var self=this;
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLClassesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnClasses",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnClasses\x0a\x09self announcer announce: HLClassesFocusRequested new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLClassesFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnMethods",
category: 'actions',
fn: function (){
var self=this;
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLMethodsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnMethods",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnMethods\x0a\x09self announcer announce: HLMethodsFocusRequested new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLMethodsFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnPackages",
category: 'actions',
fn: function (){
var self=this;
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLPackagesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnPackages",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnPackages\x0a\x09self announcer announce: HLPackagesFocusRequested new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLPackagesFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnProtocols",
category: 'actions',
fn: function (){
var self=this;
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLProtocolsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnProtocols",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnProtocols\x0a\x09self announcer announce: HLProtocolsFocusRequested new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLProtocolsFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnSourceCode",
category: 'actions',
fn: function (){
var self=this;
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLSourceCodeFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnSourceCode",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnSourceCode\x0a\x09self announcer announce: HLSourceCodeFocusRequested new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLSourceCodeFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBrowserModel",{},smalltalk.HLBrowserModel)})},
args: [],
source: "isBrowserModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showComment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLBrowserModel)})},
args: [],
source: "showComment\x0a\x09^ showComment ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showComment"]=aBoolean;
self["@showComment"];
return _st(_st(self)._announcer())._announce_(_st($HLShowCommentToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self withChangesDo: [\x0a\x09\x09showComment := aBoolean.\x0a\x09\x09self announcer announce: HLShowCommentToggled new ]",
messageSends: ["withChangesDo:", "announce:", "new", "announcer"],
referencedClasses: ["HLShowCommentToggled"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showInstance"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLBrowserModel)})},
args: [],
source: "showInstance\x0a\x09^ showInstance ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
_st(self)._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showInstance"]=aBoolean;
self["@showInstance"];
self["@showComment"]=false;
self["@showComment"];
$1=_st(self)._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self;
$4=aBoolean;
if(smalltalk.assert($4)){
$3=_st(_st(self)._selectedClass())._theNonMetaClass();
} else {
$3=_st(_st(self)._selectedClass())._theMetaClass();
};
_st($2)._selectedClass_($3);
};
return _st(_st(self)._announcer())._announce_(_st($HLShowInstanceToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09showInstance := aBoolean.\x0a\x09\x09showComment := false.\x0a\x0a    \x09self selectedClass ifNotNil: [\x0a    \x09\x09self selectedClass: (aBoolean\x0a    \x09\x09\x09ifTrue: [self selectedClass theNonMetaClass ]\x0a\x09    \x09  \x09ifFalse: [ self selectedClass theMetaClass ]) ].\x0a    \x0a\x09\x09self announcer announce: HLShowInstanceToggled new ] ",
messageSends: ["withChangesDo:", "ifNotNil:", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "selectedClass", "theMetaClass", "announce:", "new", "announcer"],
referencedClasses: ["HLShowInstanceToggled"]
}),
smalltalk.HLBrowserModel);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLBrowserModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'selectorsCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "invalidateChildrenSelector:",
category: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(_st(self)._theClass())._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(self)._selectorsCache())._cacheFor_(each);
_st($1)._removeSelector_(aSelector);
$2=_st($1)._invalidateChildrenSelector_(aSelector);
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"invalidateChildrenSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateChildrenSelector: aSelector\x0a\x09self theClass subclasses do: [ :each |\x0a    \x09(self selectorsCache cacheFor: each)\x0a        \x09removeSelector: aSelector;\x0a        \x09invalidateChildrenSelector: aSelector ]",
messageSends: ["do:", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateChildrenSelector:", "subclasses", "theClass"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateParentSelector:",
category: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._theClass())._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(_st(self)._selectorsCache())._cacheFor_(_st(_st(self)._theClass())._superclass());
_st($2)._removeSelector_(aSelector);
$3=_st($2)._invalidateParentSelector_(aSelector);
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"invalidateParentSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateParentSelector: aSelector\x0a\x09self theClass superclass ifNotNil: [\x0a    \x09(self selectorsCache cacheFor: self theClass superclass)\x0a        \x09removeSelector: aSelector;\x0a\x09\x09\x09invalidateParentSelector: aSelector ]",
messageSends: ["ifNotNil:", "removeSelector:", "cacheFor:", "superclass", "theClass", "selectorsCache", "invalidateParentSelector:"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateSelector:",
category: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._invalidateParentSelector_(aSelector);
_st($1)._invalidateChildrenSelector_(aSelector);
$2=_st($1)._removeSelector_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"invalidateSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateSelector: aSelector\x0a\x09self \x0a    \x09invalidateParentSelector: aSelector;\x0a        invalidateChildrenSelector: aSelector;\x0a        removeSelector: aSelector",
messageSends: ["invalidateParentSelector:", "invalidateChildrenSelector:", "removeSelector:"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._overriddenCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverridden();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ self overriddenCache \x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverridden ]",
messageSends: ["at:ifAbsentPut:", "selector", "isOverridden", "overriddenCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._overrideCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverride();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ self overrideCache\x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverride ]",
messageSends: ["at:ifAbsentPut:", "selector", "isOverride", "overrideCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overriddenCache",
category: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overriddenCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overriddenCache"]=_st($HashedCollection())._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{},smalltalk.HLClassCache)})},
args: [],
source: "overriddenCache\x0a\x09^ overriddenCache ifNil: [ overriddenCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideCache",
category: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overrideCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overrideCache"]=_st($HashedCollection())._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{},smalltalk.HLClassCache)})},
args: [],
source: "overrideCache\x0a\x09^ overrideCache ifNil: [ overrideCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'private',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._overriddenCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._overrideCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "removeSelector: aSelector\x0a\x09self overriddenCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ].\x0a    self overrideCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ]",
messageSends: ["removeKey:ifAbsent:", "overriddenCache", "overrideCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectorsCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLClassCache)})},
args: [],
source: "selectorsCache\x0a\x09^ selectorsCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache:",
category: 'accessing',
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectorsCache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"selectorsCache:",{aCache:aCache},smalltalk.HLClassCache)})},
args: ["aCache"],
source: "selectorsCache: aCache\x0a\x09selectorsCache := aCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@class"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.HLClassCache)})},
args: [],
source: "theClass\x0a\x09^ class",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.HLClassCache)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);


smalltalk.addMethod(
smalltalk.method({
selector: "on:selectorsCache:",
category: 'instance creation',
fn: function (aClass,aSelectorsCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._selectorsCache_(aSelectorsCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:selectorsCache:",{aClass:aClass,aSelectorsCache:aSelectorsCache},smalltalk.HLClassCache.klass)})},
args: ["aClass", "aSelectorsCache"],
source: "on: aClass selectorsCache: aSelectorsCache\x0a\x09^ self new\x0a    \x09theClass: aClass;\x0a        selectorsCache: aSelectorsCache;\x0a        yourself",
messageSends: ["theClass:", "new", "selectorsCache:", "yourself"],
referencedClasses: []
}),
smalltalk.HLClassCache.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "focusMethodsListWidget",
category: 'actions',
fn: function (){
var self=this;
function $HLMethodsListFocus(){return smalltalk.HLMethodsListFocus||(typeof HLMethodsListFocus=="undefined"?nil:HLMethodsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._announce_(_st($HLMethodsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "focusMethodsListWidget\x0a\x09self model announcer announce: HLMethodsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLMethodsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusProtocolsListWidget",
category: 'actions',
fn: function (){
var self=this;
function $HLProtocolsListFocus(){return smalltalk.HLProtocolsListFocus||(typeof HLProtocolsListFocus=="undefined"?nil:HLProtocolsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._announce_(_st($HLProtocolsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "focusProtocolsListWidget\x0a\x09self model announcer announce: HLProtocolsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLProtocolsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getChildrenOf:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._items())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._superclass()).__eq(aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "getChildrenOf: aClass\x0a\x09^ self items select: [ :each | each superclass = aClass ]",
messageSends: ["select:", "=", "superclass", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getRootClassesOf:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aCollection)._includes_(_st(each)._superclass()))._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection},smalltalk.HLClassesListWidget)})},
args: ["aCollection"],
source: "getRootClassesOf: aCollection\x0a\x09^ aCollection select: [ :each |\x0a    \x09\x09(aCollection includes: each superclass) not ]",
messageSends: ["select:", "not", "includes:", "superclass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st(aClass)._theNonMetaClass())._comment())._isEmpty();
if(smalltalk.assert($2)){
$1="icon-question-sign";
} else {
$1="icon-none";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "iconForItem: aClass\x0a\x09^ aClass theNonMetaClass comment isEmpty\x0a    \x09ifFalse: [ 'icon-none' ]\x0a      \x09ifTrue: [ 'icon-question-sign' ]",
messageSends: ["ifFalse:ifTrue:", "isEmpty", "comment", "theNonMetaClass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_($HLPackageSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLShowInstanceToggled(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onShowInstanceToggled();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLShowCommentToggled(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onShowCommentToggled();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLClassSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLClassesFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassesFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a    \x09on: HLPackageSelected do: [ :ann | self onPackageSelected: ann item ];\x0a    \x09on: HLShowInstanceToggled do: [ :ann | self onShowInstanceToggled ];\x0a\x09\x09on: HLShowCommentToggled do: [ :ann | self onShowCommentToggled ];\x0a\x09\x09on: HLClassSelected do: [ :ann | self onClassSelected: ann item ];\x0a\x09\x09on: HLClassesFocusRequested do: [ :ann | self onClassesFocusRequested ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onShowInstanceToggled", "onShowCommentToggled", "onClassSelected:", "onClassesFocusRequested"],
referencedClasses: ["HLPackageSelected", "HLShowInstanceToggled", "HLShowCommentToggled", "HLClassSelected", "HLClassesFocusRequested"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $ClassMoved(){return smalltalk.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
function $ClassRenamed(){return smalltalk.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $ClassMigrated(){return smalltalk.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._systemAnnouncer();
_st($1)._on_do_($ClassAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassAdded_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($ClassRemoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassRemoved_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($ClassMoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassMoved_from_(_st(ann)._theClass(),_st(ann)._oldPackage());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($ClassRenamed(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassRenamed_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($ClassMigrated(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassMigrated_from_(_st(ann)._theClass(),_st(ann)._oldClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a    \x09on: ClassAdded\x0a        do: [ :ann | self onClassAdded: ann theClass ];\x0a        on: ClassRemoved\x0a        do: [ :ann | self onClassRemoved: ann theClass ];\x0a\x09\x09on: ClassMoved\x0a        do: [ :ann | self onClassMoved: ann theClass from: ann oldPackage ];\x0a\x09\x09on: ClassRenamed\x0a        do: [ :ann | self onClassRenamed: ann theClass ];\x0a\x09\x09on: ClassMigrated\x0a\x09\x09do: [ :ann | self onClassMigrated: ann theClass from: ann oldClass ]",
messageSends: ["on:do:", "onClassAdded:", "theClass", "systemAnnouncer", "model", "onClassRemoved:", "onClassMoved:from:", "oldPackage", "onClassRenamed:", "onClassMigrated:from:", "oldClass"],
referencedClasses: ["ClassAdded", "ClassRemoved", "ClassMoved", "ClassRenamed", "ClassMigrated"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aClass)._package()).__eq(_st(_st(self)._model())._selectedPackage()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._items())._includes_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "onClassAdded: aClass\x0a\x09(aClass package = self model selectedPackage or: [\x0a\x09\x09self items includes: aClass ]) ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "or:", "includes:", "items", "=", "selectedPackage", "model", "package", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMigrated:from:",
category: 'reactions',
fn: function (aClass,oldClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._items())._includes_(oldClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(_st(self)._model())._selectedClass()).__eq(oldClass);
if(smalltalk.assert($3)){
_st(_st(self)._model())._selectedClass_(aClass);
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMigrated:from:",{aClass:aClass,oldClass:oldClass},smalltalk.HLClassesListWidget)})},
args: ["aClass", "oldClass"],
source: "onClassMigrated: aClass from: oldClass\x0a\x09(self items includes: oldClass) ifFalse: [ ^ self ].\x0a\x0a\x09self model selectedClass = oldClass ifTrue: [\x0a\x09\x09self model selectedClass: aClass ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "includes:", "items", "ifTrue:", "selectedClass:", "model", "=", "selectedClass", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMoved:from:",
category: 'reactions',
fn: function (aClass,aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(aPackage).__eq(_st(_st(self)._model())._selectedPackage()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aClass)._package()).__eq(_st(_st(self)._model())._selectedPackage());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(aPackage).__eq(_st(_st(self)._model())._selectedPackage());
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMoved:from:",{aClass:aClass,aPackage:aPackage},smalltalk.HLClassesListWidget)})},
args: ["aClass", "aPackage"],
source: "onClassMoved: aClass from: aPackage\x0a\x09(aPackage = self model selectedPackage or: [\x0a\x09\x09aClass package = self model selectedPackage ])\x0a\x09\x09\x09ifFalse: [ ^ self ].\x0a\x09\x0a\x09aPackage = self model selectedPackage ifTrue: [ \x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09selectItem: nil ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "or:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectedItem:", "selectItem:", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRemoved:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(aClass)._package()).__eq(_st(_st(self)._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(aClass).__eq(_st(_st(self)._model())._selectedClass());
if(smalltalk.assert($3)){
_st(self)._selectItem_(nil);
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRemoved:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "onClassRemoved: aClass\x0a\x09aClass package = self model selectedPackage ifFalse: [ ^ self ].\x0a    aClass = self model selectedClass ifTrue: [ self selectItem: nil ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectItem:", "selectedClass", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRenamed:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._package()).__eq(_st(_st(self)._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRenamed:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "onClassRenamed: aClass\x0a\x09aClass package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "selectedPackage", "model", "package", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
var selectedClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
selectedClass=_st(aClass)._theNonMetaClass();
_st(self)._selectedItem_(selectedClass);
$3=_st(self)._hasFocus();
if(! smalltalk.assert($3)){
$4=self;
_st($4)._activateItem_(selectedClass);
$5=_st($4)._focus();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass,selectedClass:selectedClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09| selectedClass |\x0a\x09\x0a\x09aClass ifNil: [ ^ self ].\x0a\x09\x0a\x09selectedClass := aClass theNonMetaClass.\x0a\x09self selectedItem: selectedClass.\x0a\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: selectedClass;\x0a\x09\x09\x09focus ]",
messageSends: ["ifNil:", "theNonMetaClass", "selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassesFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassesFocusRequested",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onClassesFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage},smalltalk.HLClassesListWidget)})},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onShowCommentToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$2;
$1=_st(html)._div();
_st($1)._class_("btn-group");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$4=_st(self)._showInstance();
if(smalltalk.assert($4)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($3)._with_("Instance");
$5=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._showInstance_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$5;
$6=_st(html)._button();
_st($6)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$7=_st(self)._showClass();
if(smalltalk.assert($7)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($6)._with_("Class");
$8=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._showInstance_(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$10=_st(self)._showComment();
if(smalltalk.assert($10)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($9)._with_("Doc");
$11=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._showComment_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $11;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a        class: 'btn-group';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showInstance ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Instance';\x0a                onClick: [ self showInstance: true ].\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showClass ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Class';\x0a\x09\x09\x09\x09onClick: [ self showInstance: false ].\x0a\x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showComment ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Doc';\x0a\x09\x09\x09\x09onClick: [ self showComment: true ] ]",
messageSends: ["class:", "div", "with:", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "button", "onClick:", "showInstance:", "showClass", "showComment", "showComment:"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:level:on:",
category: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
li=_st(html)._li();
_st(self)._registerMappingFrom_to_(aClass,li);
$1=li;
_st($1)._at_put_("list-data",_st(_st(self)._items())._indexOf_(aClass));
_st($1)._class_(_st(self)._cssClassForItem_(aClass));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(_st(self)._iconForItem_(aClass));
return _st(self)._renderItemLabel_level_on_(aClass,anInteger,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderItem_level_on_(each,_st(anInteger).__plus((1)),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li},smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItem: aClass level: anInteger on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09self registerMappingFrom: aClass to: li.\x0a\x09\x0a    li\x0a    \x09at: 'list-data' put: (self items indexOf: aClass);\x0a    \x09class: (self cssClassForItem: aClass);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self iconForItem: aClass).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: aClass level: anInteger on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ].\x0a                    \x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: anInteger + 1 on: html ]",
messageSends: ["li", "registerMappingFrom:to:", "at:put:", "indexOf:", "items", "class:", "cssClassForItem:", "with:", "iconForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLToolListWidget.fn.prototype._renderItem_on_.apply(_st(self), [aClass,html]);
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderItem_level_on_(each,(1),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItem: aClass on: html\x0a\x09super renderItem: aClass on: html.\x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: 1 on: html ]",
messageSends: ["renderItem:on:", "do:", "renderItem:level:on:", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:level:on:",
category: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._span())._asJQuery())._html_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(str)._nextPutAll_(_st(aClass)._name());
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItemLabel: aClass level: anInteger on: html\x0a\x09html span asJQuery html: (String streamContents: [ :str |\x0a\x09\x09anInteger timesRepeat: [\x0a\x09\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09\x09\x09str nextPutAll: aClass name ])",
messageSends: ["html:", "streamContents:", "timesRepeat:", "nextPutAll:", "name", "asJQuery", "span"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderItemLabel_level_on_(aClass,(0),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09self renderItemLabel: aClass level: 0 on: html",
messageSends: ["renderItemLabel:level:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._getRootClassesOf_(_st(self)._items()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderListOn: html\x0a\x09(self getRootClassesOf: self items)\x0a    \x09do: [ :each | self renderItem: each on: html ]",
messageSends: ["do:", "renderItem:on:", "getRootClassesOf:", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "selectItem: aClass\x0a    self model selectedClass: aClass",
messageSends: ["selectedClass:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForPackage:",
category: 'private',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self;
$3=aPackage;
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet())._asArray())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForPackage:",{aPackage:aPackage},smalltalk.HLClassesListWidget)})},
args: ["aPackage"],
source: "setItemsForPackage: aPackage\x0a\x09self items: (aPackage \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ ((aPackage classes \x0a        \x09collect: [ :each | each theNonMetaClass ]) asSet asArray) \x0a            \x09sort: [:a :b | a name < b name ] ]).",
messageSends: ["items:", "ifNil:ifNotNil:", "sort:", "<", "name", "asArray", "asSet", "collect:", "theNonMetaClass", "classes"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedPackage",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._setItemsForPackage_(_st(_st(self)._model())._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedPackage",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "setItemsForSelectedPackage\x0a\x09self setItemsForPackage: self model selectedPackage",
messageSends: ["setItemsForPackage:", "selectedPackage", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._model())._showInstance())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._model())._showComment())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"showClass",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showClass\x0a\x09^ self model showInstance not and: [\x0a\x09\x09self model showComment not ]",
messageSends: ["and:", "not", "showComment", "model", "showInstance"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._showComment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showComment\x0a\x09^ self model showComment",
messageSends: ["showComment", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
category: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showComment_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self model showComment: aBoolean",
messageSends: ["showComment:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._showInstance())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._model())._showComment())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showInstance\x0a\x09^ self model showInstance and: [\x0a\x09\x09self model showComment not ]",
messageSends: ["and:", "not", "showComment", "model", "showInstance"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
category: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showInstance_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09self model showInstance: aBoolean",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLDocumentationWidget', smalltalk.HLFocusableWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultDocumentation",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#No documentation available. \x0a##That's bad. Seriously.";
}, function($ctx1) {$ctx1.fill(self,"defaultDocumentation",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "defaultDocumentation\x0a\x09^ '#No documentation available. \x0a##That''s bad. Seriously.'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st(_st(self)._model())._selectedClass())._theNonMetaClass())._comment();
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._defaultDocumentation();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "documentation\x0a\x09^ self model selectedClass theNonMetaClass comment ifNil: [ self defaultDocumentation ]",
messageSends: ["ifNil:", "defaultDocumentation", "comment", "theNonMetaClass", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

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
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLDocumentationWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $Showdown(){return smalltalk.Showdown||(typeof Showdown=="undefined"?nil:Showdown)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("markdown");
$2=_st($1)._asJQuery();
_st($2)._html_(_st(_st(_st($Showdown())._at_("converter"))._new())._makeHtml_(_st(self)._documentation()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLDocumentationWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09(html div \x0a\x09\x09class: 'markdown';\x0a\x09\x09asJQuery) html: ((Showdown at: 'converter') new makeHtml: self documentation)",
messageSends: ["html:", "makeHtml:", "documentation", "new", "at:", "class:", "div", "asJQuery"],
referencedClasses: ["Showdown"]
}),
smalltalk.HLDocumentationWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLToolListWidget, ['selectorsCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
fn: function (aSelector){
var self=this;
var override,overriden,method;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
method=_st(self)._methodForSelector_(aSelector);
override=_st(self)._isOverride_(method);
overriden=_st(self)._isOverridden_(method);
$2=override;
if(smalltalk.assert($2)){
$3=overriden;
if(smalltalk.assert($3)){
$1="icon-resize-vertical";
} else {
$1="icon-arrow-up";
};
} else {
$4=overriden;
if(smalltalk.assert($4)){
$1="icon-arrow-down";
} else {
$1="icon-none";
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aSelector:aSelector,override:override,overriden:overriden,method:method},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "iconForItem: aSelector\x0a\x09| override overriden method |\x0a    \x0a    method := self methodForSelector: aSelector.\x0a    override := self isOverride: method.\x0a    overriden := self isOverridden: method.\x0a    \x0a\x09^ override\x0a    \x09ifTrue: [ overriden\x0a\x09\x09\x09ifTrue: [ 'icon-resize-vertical' ]\x0a\x09\x09\x09ifFalse: [ 'icon-arrow-up' ] ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09overriden\x0a\x09\x09\x09ifTrue: [ 'icon-arrow-down' ]\x0a\x09\x09\x09ifFalse: [ 'icon-none' ] ]",
messageSends: ["methodForSelector:", "isOverride:", "isOverridden:", "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._selectorsCache())._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a   ^ self selectorsCache isOverridden: aMethod",
messageSends: ["isOverridden:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._selectorsCache())._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a   ^ self selectorsCache isOverride: aMethod",
messageSends: ["isOverride:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodForSelector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._model())._selectedClass())._methodDictionary())._at_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodForSelector:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "methodForSelector: aSelector\x0a\x09^ self model selectedClass\x0a    \x09methodDictionary at: aSelector",
messageSends: ["at:", "methodDictionary", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=_st(_st(self)._model())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$4=_st(aString).__eq(_st(self)._allProtocol());
if(smalltalk.assert($4)){
$3=_st(_st(_st(self)._model())._selectedClass())._methods();
} else {
$3=_st(_st(_st(self)._model())._selectedClass())._methodsInProtocol_(aString);
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09self model selectedClass ifNil: [ ^ #() ].\x0a    \x0a\x09^ aString = self allProtocol\x0a    \x09ifTrue: [ self model selectedClass methods ]\x0a      \x09ifFalse: [ self model selectedClass methodsInProtocol: aString ]",
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:ifFalse:", "methods", "methodsInProtocol:", "=", "allProtocol"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_($HLProtocolSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLShowInstanceToggled(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolSelected_(nil);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLMethodSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLMethodsFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodsFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLProtocolSelected \x0a\x09\x09do: [ :ann | self onProtocolSelected: ann item ];\x0a\x09\x09on: HLShowInstanceToggled \x0a\x09\x09do: [ :ann | self onProtocolSelected: nil ];\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09do: [ :ann | self onMethodSelected: ann item ];\x0a\x09\x09on: HLMethodsFocusRequested \x0a\x09\x09do: [ :ann | self onMethodsFocusRequested ]",
messageSends: ["on:do:", "onProtocolSelected:", "item", "announcer", "model", "onMethodSelected:", "onMethodsFocusRequested"],
referencedClasses: ["HLProtocolSelected", "HLShowInstanceToggled", "HLMethodSelected", "HLMethodsFocusRequested"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._systemAnnouncer();
_st($1)._on_do_($ProtocolAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolAdded_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($ProtocolRemoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolRemoved_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($MethodAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodAdded_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($MethodRemoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodRemoved_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($MethodMoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodMoved_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer \x0a    \x09on: ProtocolAdded\x0a        do: [ :ann | self onProtocolAdded: ann theClass ];\x0a    \x09on: ProtocolRemoved\x0a        do: [ :ann | self onProtocolRemoved: ann theClass ];\x0a    \x09on: MethodAdded \x0a        do: [ :ann | self onMethodAdded: ann method ];\x0a        on: MethodRemoved \x0a        do: [ :ann | self onMethodRemoved: ann method ];\x0a\x09\x09on: MethodMoved \x0a        do: [ :ann | self onMethodMoved: ann method ]",
messageSends: ["on:do:", "onProtocolAdded:", "theClass", "systemAnnouncer", "model", "onProtocolRemoved:", "onMethodAdded:", "method", "onMethodRemoved:", "onMethodMoved:"],
referencedClasses: ["ProtocolAdded", "ProtocolRemoved", "MethodAdded", "MethodRemoved", "MethodMoved"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(_st(aMethod)._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "onMethodAdded: aMethod\x0a\x09self model selectedClass = aMethod methodClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedProtocol.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "methodClass", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodMoved:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(_st(self)._model())._selectedMethod()).__eq(aMethod);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(_st(self)._model())._selectedProtocol()).__eq(_st(_st(self)._model())._allProtocol());
if(! smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
_st($4)._selectItem_(nil);
_st($4)._setItemsForSelectedProtocol();
$5=_st($4)._refresh();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMethodMoved:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "onMethodMoved: aMethod\x0a\x09self model selectedMethod = aMethod ifFalse: [ ^ self ].\x0a    \x0a\x09self model selectedProtocol = self model allProtocol ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil; \x0a\x09\x09\x09selectItem: nil;\x0a\x09\x09\x09setItemsForSelectedProtocol;\x0a    \x09\x09refresh ]",
messageSends: ["ifFalse:", "=", "selectedMethod", "model", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh", "allProtocol", "selectedProtocol"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
_st(_st(self)._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aMethod)._selector());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(self)._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
$3=_st(_st(_st(aMethod)._methodClass()).__eq(_st(_st(self)._model())._selectedClass()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aMethod)._selector()).__eq(_st(self)._selectedItem());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "onMethodRemoved: aMethod\x0a\x09self items detect: [ :each | each = aMethod selector ] ifNone: [ ^ self ].\x0a\x0a    self selectedItem ifNotNil: [\x0a      \x09(aMethod methodClass = self model selectedClass and: [ aMethod selector = self selectedItem ])\x0a  \x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self selectedItem: nil; \x0a\x09\x09\x09\x09selectItem: nil ] ].\x0a\x0a    self setItemsForSelectedProtocol.\x0a\x09self refresh",
messageSends: ["detect:ifNone:", "=", "selector", "items", "ifNotNil:", "ifTrue:", "selectedItem:", "selectItem:", "and:", "selectedItem", "selectedClass", "model", "methodClass", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (aMethod){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aMethod)._isCompiledMethod();
if(smalltalk.assert($1)){
selector=_st(aMethod)._selector();
} else {
selector=nil;
};
$2=self;
_st($2)._selectedItem_(selector);
$3=_st($2)._activateItem_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod,selector:selector},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "onMethodSelected: aMethod\x0a\x09| selector |\x0a\x09selector := aMethod isCompiledMethod \x0a\x09\x09ifTrue: [ aMethod selector ]\x0a\x09\x09ifFalse: [ nil ].\x0a\x09\x09\x0a\x09self \x0a\x09\x09selectedItem: selector;\x0a\x09\x09activateItem: selector",
messageSends: ["ifTrue:ifFalse:", "selector", "isCompiledMethod", "selectedItem:", "activateItem:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodsFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodsFocusRequested",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "onMethodsFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(aClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{aClass:aClass},smalltalk.HLMethodsListWidget)})},
args: ["aClass"],
source: "onProtocolAdded: aClass\x0a\x09self model selectedClass = aClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(aClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{aClass:aClass},smalltalk.HLMethodsListWidget)})},
args: ["aClass"],
source: "onProtocolRemoved: aClass\x0a\x09self model selectedClass = aClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a    self selectedItem: nil.\x0a    \x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSelectors",
category: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("override",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(self)._model())._selectedClass())._allSuperclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "overrideSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'override'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSuperclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSuperclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overridenSelectors",
category: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(self)._model())._selectedClass())._allSubclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "overridenSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'overriden'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSubclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSubclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLToolListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLMethodsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aSelector,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aSelector:aSelector,html:html},smalltalk.HLMethodsListWidget)})},
args: ["aSelector", "html"],
source: "renderItemLabel: aSelector on: html\x0a\x09html with: aSelector",
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aSelector;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(_st(self)._model())._selectedMethod_(nil);
return $2;
} else {
$1;
};
_st(_st(self)._model())._selectedMethod_(_st(self)._methodForSelector_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "selectItem: aSelector\x0a\x09aSelector ifNil: [ ^ self model selectedMethod: nil ].\x0a\x0a   \x09self model selectedMethod: (self methodForSelector: aSelector)\x0a    ",
messageSends: ["ifNil:", "selectedMethod:", "model", "methodForSelector:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._selectorsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "selectorsCache\x0a\x09^ self class selectorsCache",
messageSends: ["selectorsCache", "class"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._methodsInProtocol_(aString))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "selectorsInProtocol: aString\x0a\x09^ ((self methodsInProtocol: aString)\x0a    \x09collect: [ :each | each selector ]) sorted",
messageSends: ["sorted", "collect:", "selector", "methodsInProtocol:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForProtocol:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self;
$4=aString;
if(($receiver = $4) == nil || $receiver == undefined){
$3=[];
} else {
$3=_st(self)._selectorsInProtocol_(aString);
};
$1=_st($2)._items_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setItemsForProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "setItemsForProtocol: aString\x0a\x09^ self items: (aString\x0a    \x09ifNil: [ #() ]\x0a      \x09ifNotNil: [ self selectorsInProtocol: aString ])",
messageSends: ["items:", "ifNil:ifNotNil:", "selectorsInProtocol:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedProtocol",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._setItemsForProtocol_(_st(_st(self)._model())._selectedProtocol());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedProtocol",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "setItemsForSelectedProtocol\x0a\x09self setItemsForProtocol: self model selectedProtocol",
messageSends: ["setItemsForProtocol:", "selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);


smalltalk.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function (){
var self=this;
function $HLSelectorsCache(){return smalltalk.HLSelectorsCache||(typeof HLSelectorsCache=="undefined"?nil:HLSelectorsCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLSelectorsCache())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget.klass)})},
args: [],
source: "selectorsCache\x0a\x09^ HLSelectorsCache current",
messageSends: ["current"],
referencedClasses: ["HLSelectorsCache"]
}),
smalltalk.HLMethodsListWidget.klass);


smalltalk.addClass('HLPackagesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "commitPackage\x0a\x09self model commitPackage",
messageSends: ["commitPackage", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClassesListWidget",
category: 'actions',
fn: function (){
var self=this;
function $HLClassesListFocus(){return smalltalk.HLClassesListFocus||(typeof HLClassesListFocus=="undefined"?nil:HLClassesListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._announce_(_st($HLClassesListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "focusClassesListWidget\x0a\x09self model announcer announce: HLClassesListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLClassesListFocus"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeItems",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@items"]=_st(_st(_st(self)._model())._packages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "initializeItems\x0a\x09^ items := self model packages \x0a\x09\x09sort: [ :a :b | a name < b name ]",
messageSends: ["sort:", "<", "name", "packages", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

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
$1=_st(self)._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [self initializeItems]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_($HLPackageSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLPackagesFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onPackagesFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected \x0a\x09\x09do: [ :ann | self onPackageSelected: ann item ];\x0a\x09\x09on: HLPackagesFocusRequested \x0a\x09\x09do: [ :ann | self onPackagesFocusRequested ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onPackagesFocusRequested"],
referencedClasses: ["HLPackageSelected", "HLPackagesFocusRequested"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._systemAnnouncer())._on_do_($ClassAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassAdded_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "observeSystem\x0a    self model systemAnnouncer \x0a\x09\x09on: ClassAdded \x0a\x09\x09do: [ :ann | self onClassAdded: ann theClass ]",
messageSends: ["on:do:", "onClassAdded:", "theClass", "systemAnnouncer", "model"],
referencedClasses: ["ClassAdded"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._items())._includes_(_st(aClass)._package());
if(! smalltalk.assert($1)){
$2=self;
_st($2)._initializeItems();
$3=_st($2)._refresh();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{aClass:aClass},smalltalk.HLPackagesListWidget)})},
args: ["aClass"],
source: "onClassAdded: aClass\x0a\x09\x22Amber doesn't have yet a global organizer for packages\x22\x0a\x09\x0a\x09(self items includes: aClass package) ifFalse: [ \x0a\x09\x09self \x0a\x09\x09\x09initializeItems;\x0a\x09\x09\x09refresh ]",
messageSends: ["ifFalse:", "initializeItems", "refresh", "includes:", "package", "items"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self)._selectedItem_(aPackage);
$1=_st(self)._hasFocus();
if(! smalltalk.assert($1)){
$2=self;
_st($2)._activateItem_(aPackage);
$3=_st($2)._focus();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage},smalltalk.HLPackagesListWidget)})},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a\x09self selectedItem: aPackage.\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self\x0a\x09\x09\x09activateItem: aPackage;\x0a\x09\x09\x09focus ]",
messageSends: ["selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackagesFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackagesFocusRequested",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "onPackagesFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("buttons");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_("btn");
_st($3)._with_("Commit");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._commitPackage();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLPackagesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09with: 'Commit';\x0a\x09\x09\x09\x09onClick: [ self commitPackage ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "commitPackage"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aPackage,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(aPackage)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},smalltalk.HLPackagesListWidget)})},
args: ["aPackage", "html"],
source: "renderItemLabel: aPackage on: html\x0a\x09html with: aPackage name",
messageSends: ["with:", "name"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._selectedPackage_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage},smalltalk.HLPackagesListWidget)})},
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09self model selectedPackage: aPackage",
messageSends: ["selectedPackage:", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_($HLClassSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLShowInstanceToggled(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassSelected_(_st(_st(self)._model())._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLProtocolSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLProtocolsFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolsFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLClassSelected \x0a\x09\x09do: [ :ann | self onClassSelected: ann item ];\x0a    \x09on: HLShowInstanceToggled \x0a\x09\x09do: [ :ann | self onClassSelected: self model selectedClass ];\x0a    \x09on: HLProtocolSelected\x0a\x09\x09do: [ :ann | self onProtocolSelected: ann item ];\x0a\x09\x09on: HLProtocolsFocusRequested \x0a\x09\x09do: [ :ann | self onProtocolsFocusRequested ]",
messageSends: ["on:do:", "onClassSelected:", "item", "announcer", "model", "selectedClass", "onProtocolSelected:", "onProtocolsFocusRequested"],
referencedClasses: ["HLClassSelected", "HLShowInstanceToggled", "HLProtocolSelected", "HLProtocolsFocusRequested"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._model())._systemAnnouncer();
_st($1)._on_do_($ProtocolAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolAdded_to_(_st(ann)._protocol(),_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($ProtocolRemoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolRemoved_from_(_st(ann)._protocol(),_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a\x09\x09on: ProtocolAdded \x0a\x09    do: [ :ann | self onProtocolAdded: ann protocol to: ann theClass ];\x0a\x09    on: ProtocolRemoved\x0a\x09    do: [ :ann | self onProtocolRemoved: ann protocol from: ann theClass ]",
messageSends: ["on:do:", "onProtocolAdded:to:", "protocol", "theClass", "systemAnnouncer", "model", "onProtocolRemoved:from:"],
referencedClasses: ["ProtocolAdded", "ProtocolRemoved"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass},smalltalk.HLProtocolsListWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:to:",
category: 'reactions',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aClass).__eq(_st(_st(self)._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:to:",{aString:aString,aClass:aClass},smalltalk.HLProtocolsListWidget)})},
args: ["aString", "aClass"],
source: "onProtocolAdded: aString to: aClass\x0a\x09aClass = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:from:",
category: 'reactions',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(aClass).__eq(_st(_st(self)._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(_st(self)._model())._selectedProtocol()).__eq(aString);
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:from:",{aString:aString,aClass:aClass},smalltalk.HLProtocolsListWidget)})},
args: ["aString", "aClass"],
source: "onProtocolRemoved: aString from: aClass\x0a\x09aClass = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self model selectedProtocol = aString \x0a    \x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09\x09selectItem: nil ].\x0a        \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "ifTrue:", "selectedItem:", "selectItem:", "selectedProtocol", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(self)._selectedItem_(aString);
$1=aString;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
$3=_st(self)._hasFocus();
if(! smalltalk.assert($3)){
$4=self;
_st($4)._activateItem_(aString);
$5=_st($4)._focus();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString},smalltalk.HLProtocolsListWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self selectedItem: aString.\x0a\x09aString ifNil: [ ^ self ].\x0a    \x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: aString;\x0a\x09\x09\x09focus ]",
messageSends: ["selectedItem:", "ifNil:", "ifFalse:", "activateItem:", "focus", "hasFocus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolsFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolsFocusRequested",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "onProtocolsFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLToolListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLProtocolsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._selectedProtocol_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString},smalltalk.HLProtocolsListWidget)})},
args: ["aString"],
source: "selectItem: aString\x0a    self model selectedProtocol: aString",
messageSends: ["selectedProtocol:", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HLToolListWidget.fn.prototype._selectedItem.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "selectedItem\x0a\x09^ super selectedItem\x22 ifNil: [ self allProtocol ]\x22",
messageSends: ["selectedItem"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForClass:",
category: 'private',
fn: function (aClass){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=self;
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
$2=_st($Array())._with_(_st(self)._allProtocol());
} else {
$4=_st($Array())._with_(_st(self)._allProtocol());
_st($4)._addAll_(_st(aClass)._protocols());
$5=_st($4)._yourself();
$2=$5;
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForClass:",{aClass:aClass},smalltalk.HLProtocolsListWidget)})},
args: ["aClass"],
source: "setItemsForClass: aClass\x0a\x09self items: (aClass\x0a    \x09ifNil: [ Array with: self allProtocol ]\x0a      \x09ifNotNil: [ \x0a        \x09(Array with: self allProtocol) \x0a            \x09addAll: aClass protocols; \x0a                yourself ])",
messageSends: ["items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedClass",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._setItemsForClass_(_st(_st(self)._model())._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedClass",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "setItemsForSelectedClass\x0a\x09self setItemsForClass: self model selectedClass",
messageSends: ["setItemsForClass:", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLSelectorsCache', smalltalk.Object, ['classesCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "cacheFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
return nil;
} else {
$1;
};
$2=_st(_st(self)._classesCache())._at_ifAbsentPut_(_st(aClass)._name(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newCacheFor_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "cacheFor: aClass\x0a\x09aClass ifNil: [ ^ nil ].\x0a    \x0a\x09^ self classesCache\x0a    \x09at: aClass name\x0a        ifAbsentPut: [ self newCacheFor: aClass ]",
messageSends: ["ifNil:", "at:ifAbsentPut:", "name", "newCacheFor:", "classesCache"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "classesCache",
category: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesCache"]=_st($HashedCollection())._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesCache",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "classesCache\x0a\x09^ classesCache ifNil: [ classesCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self observeSystem",
messageSends: ["initialize", "observeSystem"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateCacheFor:",
category: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._invalidateSelector_(_st(aMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"invalidateCacheFor:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "invalidateCacheFor: aMethod\x0a\x09(self cacheFor: aMethod methodClass)\x0a    \x09invalidateSelector: aMethod selector",
messageSends: ["invalidateSelector:", "selector", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverridden: aMethod",
messageSends: ["isOverridden:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverride: aMethod",
messageSends: ["isOverride:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "newCacheFor:",
category: 'factory',
fn: function (aClass){
var self=this;
function $HLClassCache(){return smalltalk.HLClassCache||(typeof HLClassCache=="undefined"?nil:HLClassCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLClassCache())._on_selectorsCache_(aClass,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "newCacheFor: aClass\x0a\x09^ HLClassCache \x0a    \x09on: aClass\x0a        selectorsCache: self",
messageSends: ["on:selectorsCache:"],
referencedClasses: ["HLClassCache"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SystemAnnouncer())._current();
_st($1)._on_do_($MethodAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodAdded_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($MethodRemoved(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodRemoved_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "observeSystem\x0a\x09SystemAnnouncer current\x0a\x09\x09on: MethodAdded\x0a        do: [ :ann | self onMethodAdded: ann method ];\x0a        on: MethodRemoved\x0a        do: [ :ann | self onMethodRemoved: ann method ]",
messageSends: ["on:do:", "onMethodAdded:", "method", "current", "onMethodRemoved:"],
referencedClasses: ["MethodAdded", "SystemAnnouncer", "MethodRemoved"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._invalidateCacheFor_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "onMethodAdded: aMethod\x0a\x09self invalidateCacheFor: aMethod",
messageSends: ["invalidateCacheFor:"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._invalidateCacheFor_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "onMethodRemoved: aMethod\x0a\x09self invalidateCacheFor: aMethod",
messageSends: ["invalidateCacheFor:"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);


smalltalk.HLSelectorsCache.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "flush\x0a\x09current := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);


