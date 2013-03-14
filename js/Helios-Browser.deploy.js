smalltalk.addPackage('Helios-Browser');
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLBrowser)})},
messageSends: ["announcer", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_canHaveFocus",
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLBrowser)})},
messageSends: []}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesListWidget"]=_st((smalltalk.HLClassesListWidget || HLClassesListWidget))._on_(_st(self)._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(_st(self)._protocolsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._environment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLBrowser)})},
messageSends: ["environment", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._packagesListWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowser)})},
messageSends: ["focus", "packagesListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_methodsListWidget",
smalltalk.method({
selector: "methodsListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@methodsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@methodsListWidget"]=_st((smalltalk.HLMethodsListWidget || HLMethodsListWidget))._on_(_st(self)._model());
$1=self["@methodsListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st((smalltalk.HLBrowserModel || HLBrowserModel))._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLBrowser)})},
messageSends: []}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_packagesListWidget",
smalltalk.method({
selector: "packagesListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@packagesListWidget"]=_st((smalltalk.HLPackagesListWidget || HLPackagesListWidget))._on_(_st(self)._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(_st(self)._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_protocolsListWidget",
smalltalk.method({
selector: "protocolsListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@protocolsListWidget"]=_st((smalltalk.HLProtocolsListWidget || HLProtocolsListWidget))._on_(_st(self)._model());
self["@protocolsListWidget"];
$1=_st(self["@protocolsListWidget"])._next_(_st(self)._methodsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.HLBrowserCommand || HLBrowserCommand))._registerConcreteClassesOn_for_(aBindingGroup,_st(self)._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLBrowser)})},
messageSends: ["registerConcreteClassesOn:for:", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st((smalltalk.HLContainer || HLContainer))._with_(_st((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._packagesListWidget(),_st(self)._classesListWidget()),_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._protocolsListWidget(),_st(self)._methodsListWidget())),_st(self)._sourceWidget())));
_st(_st(self)._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowser)})},
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget", "focus"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_sourceWidget",
smalltalk.method({
selector: "sourceWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@sourceWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sourceWidget"]=_st((smalltalk.HLBrowserSourceWidget || HLBrowserSourceWidget))._on_(_st(self)._model());
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{}, smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model"]}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2=_st("browser_").__comma(_st(_st(self["@nextId"]).__plus((1)))._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextId",{}, smalltalk.HLBrowser.klass)})},
messageSends: ["ifNil:", ",", "asString", "+"]}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Browser";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (0);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLNavigationListWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLBrowserListWidget)})},
messageSends: ["initialize", "observeSystem"]}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserListWidget)})},
messageSends: []}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aBrowserModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserListWidget)})},
messageSends: ["observeModel"]}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLBrowserListWidget)})},
messageSends: []}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{}, smalltalk.HLBrowserListWidget)})},
messageSends: []}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel}, smalltalk.HLBrowserListWidget.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusMethodsListWidget",
smalltalk.method({
selector: "focusMethodsListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLMethodsListFocus || HLMethodsListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_focusProtocolsListWidget",
smalltalk.method({
selector: "focusProtocolsListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLProtocolsListFocus || HLProtocolsListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getChildrenOf_",
smalltalk.method({
selector: "getChildrenOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._items())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._superclass()).__eq(aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["select:", "=", "superclass", "items"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getRootClassesOf_",
smalltalk.method({
selector: "getRootClassesOf:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(aCollection)._includes_(_st(each)._superclass()))._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection}, smalltalk.HLClassesListWidget)})},
messageSends: ["select:", "not", "includes:", "superclass"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st(aClass)._theNonMetaClass())._comment())._isEmpty();
if(smalltalk.assert($2)){
$1="icon-question-sign";
} else {
$1="icon-none";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["ifFalse:ifTrue:", "isEmpty", "comment", "theNonMetaClass"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLPackageSelected || HLPackageSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onShowInstanceToggled();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLClassesFocusRequested || HLClassesFocusRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassesFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onShowInstanceToggled", "onClassSelected:", "onClassesFocusRequested"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current();
_st($1)._on_do_((smalltalk.ClassAdded || ClassAdded),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassAdded_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.ClassRemoved || ClassRemoved),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassRemoved_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["on:do:", "onClassAdded:", "theClass", "current", "onClassRemoved:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassAdded_",
smalltalk.method({
selector: "onClassAdded:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aClass)._package()).__eq(_st(_st(self)._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["ifFalse:", "=", "selectedPackage", "model", "package", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassRemoved_",
smalltalk.method({
selector: "onClassRemoved:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
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
return self}, function($ctx1) {$ctx1.fill(self,"onClassRemoved:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["ifFalse:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectItem:", "selectedClass", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass){
var self=this;
var selectedClass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
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
messageSends: ["ifNil:", "theNonMetaClass", "selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassesFocusRequested",
smalltalk.method({
selector: "onClassesFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassesFocusRequested",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedPackage();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage}, smalltalk.HLClassesListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onShowInstanceToggled",
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$7,$8,$2,$9,$10;
$1=_st(html)._div();
_st($1)._class_("btn-group");
_st($1)._at_put_("data-toggle","buttons-radio");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._button();
_st($3)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {_st(str)._nextPutAll_("btn");
$4=_st(self)._showInstance();
if(smalltalk.assert($4)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($3)._with_("Instance");
$5=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._showInstance_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$5;
$6=_st(html)._button();
_st($6)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {_st(str)._nextPutAll_("btn");
$7=_st(_st(self)._model())._showInstance();
if(! smalltalk.assert($7)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($6)._with_("Class");
$8=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._model())._showInstance_(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._class_("btn");
_st($9)._at_put_("data-toggle","button");
$10=_st($9)._with_("Comment");
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLClassesListWidget)})},
messageSends: ["class:", "div", "at:put:", "with:", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "button", "onClick:", "showInstance:", "ifFalse:", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_level_on_",
smalltalk.method({
selector: "renderItem:level:on:",
fn: function (aClass,anInteger,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
li=_st(html)._li();
_st(self)._registerMappingFrom_to_(aClass,li);
$1=li;
_st($1)._at_put_("list-data",_st(_st(self)._items())._indexOf_(aClass));
_st($1)._class_(_st(self)._cssClassForItem_(aClass));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._tag_("i"))._class_(_st(self)._iconForItem_(aClass));
return _st(self)._renderItemLabel_level_on_(aClass,anInteger,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_level_on_(each,_st(anInteger).__plus((1)),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li},smalltalk.HLClassesListWidget)})},
messageSends: ["li", "registerMappingFrom:to:", "at:put:", "indexOf:", "items", "class:", "cssClassForItem:", "with:", "iconForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLBrowserListWidget.fn.prototype._renderItem_on_.apply(_st(self), [aClass,html]);
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_level_on_(each,(1),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html}, smalltalk.HLClassesListWidget)})},
messageSends: ["renderItem:on:", "do:", "renderItem:level:on:", "getChildrenOf:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_level_on_",
smalltalk.method({
selector: "renderItemLabel:level:on:",
fn: function (aClass,anInteger,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(html)._span())._asJQuery())._html_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(str)._nextPutAll_(_st(aClass)._name());
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html}, smalltalk.HLClassesListWidget)})},
messageSends: ["html:", "streamContents:", "timesRepeat:", "nextPutAll:", "name", "asJQuery", "span"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderItemLabel_level_on_(aClass,(0),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html}, smalltalk.HLClassesListWidget)})},
messageSends: ["renderItemLabel:level:on:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._getRootClassesOf_(_st(self)._items()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html}, smalltalk.HLClassesListWidget)})},
messageSends: ["do:", "renderItem:on:", "getRootClassesOf:", "items"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["selectedClass:", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_setItemsForPackage_",
smalltalk.method({
selector: "setItemsForPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=self;
$3=aPackage;
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet())._asArray())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForPackage:",{aPackage:aPackage}, smalltalk.HLClassesListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "sort:", "<", "name", "asArray", "asSet", "collect:", "theNonMetaClass", "classes"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_setItemsForSelectedPackage",
smalltalk.method({
selector: "setItemsForSelectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setItemsForPackage_(_st(_st(self)._model())._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedPackage",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["setItemsForPackage:", "selectedPackage", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._showInstance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["showInstance", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean}, smalltalk.HLClassesListWidget)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["allProtocol", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_flushSelectorsCache",
smalltalk.method({
selector: "flushSelectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectorsCache"]=_st((smalltalk.Dictionary || Dictionary))._new();
return self}, function($ctx1) {$ctx1.fill(self,"flushSelectorsCache",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["new"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (aSelector){
var self=this;
var override,overriden,method;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$1;
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
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aSelector:aSelector,override:override,overriden:overriden,method:method}, smalltalk.HLMethodsListWidget)})},
messageSends: ["methodForSelector:", "isOverride:", "isOverridden:", "ifTrue:ifFalse:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLBrowserListWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._flushSelectorsCache();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["initialize", "flushSelectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectorsCache())._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["isOverridden:", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectorsCache())._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["isOverride:", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_methodForSelector_",
smalltalk.method({
selector: "methodForSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._model())._selectedClass())._methodDictionary())._at_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodForSelector:",{aSelector:aSelector}, smalltalk.HLMethodsListWidget)})},
messageSends: ["at:", "methodDictionary", "selectedClass", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=_st(_st(self)._model())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
return [];
} else {
$1;
};
$3=_st(aString).__eq(_st(self)._allProtocol());
if(smalltalk.assert($3)){
$2=_st(_st(_st(self)._model())._selectedClass())._methods();
} else {
$2=_st(_st(_st(self)._model())._selectedClass())._methodsInProtocol_(aString);
};
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:ifFalse:", "methods", "methodsInProtocol:", "=", "allProtocol"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(nil);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLMethodsFocusRequested || HLMethodsFocusRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodsFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["on:do:", "onProtocolSelected:", "item", "announcer", "model", "onMethodSelected:", "onMethodsFocusRequested"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current();
_st($1)._on_do_((smalltalk.ProtocolAdded || ProtocolAdded),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolAdded_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.ProtocolRemoved || ProtocolRemoved),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolRemoved_(_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.MethodAdded || MethodAdded),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodAdded_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.MethodRemoved || MethodRemoved),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodRemoved_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["on:do:", "onProtocolAdded:", "theClass", "current", "onProtocolRemoved:", "onMethodAdded:", "method", "onMethodRemoved:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodAdded_",
smalltalk.method({
selector: "onMethodAdded:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(_st(aMethod)._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "methodClass", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodRemoved_",
smalltalk.method({
selector: "onMethodRemoved:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
var $early={};
try {
_st(_st(self)._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq(_st(aMethod)._selector());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(self)._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
$3=_st(_st(_st(aMethod)._methodClass()).__eq(_st(_st(self)._model())._selectedClass()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(aMethod)._selector()).__eq(_st(_st(self)._selectedItem())._selector());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(self)._selectItem_(nil);
};
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["detect:ifNone:", "=", "selector", "items", "ifNotNil:", "ifTrue:", "selectItem:", "and:", "selectedItem", "selectedClass", "model", "methodClass", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
_st(self)._selectedItem_(aMethod);
$1=aMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
$3=_st(self)._hasFocus();
if(! smalltalk.assert($3)){
$4=self;
_st($4)._activateItem_(aMethod);
$5=_st($4)._focus();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedItem:", "ifNil:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodsFocusRequested",
smalltalk.method({
selector: "onMethodsFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodsFocusRequested",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolAdded_",
smalltalk.method({
selector: "onProtocolAdded:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(aClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{aClass:aClass},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolRemoved_",
smalltalk.method({
selector: "onProtocolRemoved:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(aClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{aClass:aClass},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedProtocol();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overrideSelectors",
smalltalk.method({
selector: "overrideSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("override",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(self)._model())._selectedClass())._allSuperclasses())._inject_into_(_st((smalltalk.Set || Set))._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSuperclasses", "selectedClass", "model", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overridenSelectors",
smalltalk.method({
selector: "overridenSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(self)._model())._selectedClass())._allSubclasses())._inject_into_(_st((smalltalk.Set || Set))._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSubclasses", "selectedClass", "model", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aSelector,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aSelector:aSelector,html:html}, smalltalk.HLMethodsListWidget)})},
messageSends: ["with:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aSelector;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(_st(self)._model())._selectedMethod_(nil);
return $2;
} else {
$1;
};
_st(_st(self)._model())._selectedMethod_(_st(self)._methodForSelector_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aSelector:aSelector}, smalltalk.HLMethodsListWidget)})},
messageSends: ["ifNil:", "selectedMethod:", "model", "methodForSelector:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._selectorsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["selectorsCache", "class"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectorsInProtocol_",
smalltalk.method({
selector: "selectorsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodsInProtocol_(aString))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsInProtocol:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["collect:", "selector", "methodsInProtocol:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_setItemsForProtocol_",
smalltalk.method({
selector: "setItemsForProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$4,$3,$1;
$2=self;
$4=aString;
if(($receiver = $4) == nil || $receiver == undefined){
$3=[];
} else {
$3=_st(self)._selectorsInProtocol_(aString);
};
$1=_st($2)._items_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setItemsForProtocol:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "selectorsInProtocol:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_setItemsForSelectedProtocol",
smalltalk.method({
selector: "setItemsForSelectedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setItemsForProtocol_(_st(_st(self)._model())._selectedProtocol());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedProtocol",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["setItemsForProtocol:", "selectedProtocol", "model"]}),
smalltalk.HLMethodsListWidget);


smalltalk.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLSelectorsCache || HLSelectorsCache))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{}, smalltalk.HLMethodsListWidget.klass)})},
messageSends: ["current"]}),
smalltalk.HLMethodsListWidget.klass);


smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusClassesListWidget",
smalltalk.method({
selector: "focusClassesListWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLClassesListFocus || HLClassesListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_initializeItems",
smalltalk.method({
selector: "initializeItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@items"]=_st(_st(_st(self)._model())._packages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["sort:", "<", "name", "packages", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["ifNil:", "initializeItems"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLPackageSelected || HLPackageSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLPackagesFocusRequested || HLPackagesFocusRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackagesFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onPackagesFocusRequested"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self)._selectedItem_(aPackage);
$1=_st(self)._hasFocus();
if(! smalltalk.assert($1)){
$2=self;
_st($2)._activateItem_(aPackage);
$3=_st($2)._focus();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage},smalltalk.HLPackagesListWidget)})},
messageSends: ["selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackagesFocusRequested",
smalltalk.method({
selector: "onPackagesFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackagesFocusRequested",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$8,$4,$9,$10;
$1=_st(html)._span();
_st($1)._class_("info");
$2=_st($1)._with_("Auto commit");
$3=_st(html)._div();
_st($3)._class_("btn-group switch");
_st($3)._at_put_("data-toggle","buttons-radio");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {$5=_st(html)._button();
_st($5)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("btn");
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
$6=_st($5)._with_("On");
$6;
$7=_st(html)._button();
_st($7)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("btn active");
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
$8=_st($7)._with_("Off");
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._a();
_st($9)._class_("btn");
$10=_st($9)._with_("Commit");
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLPackagesListWidget)})},
messageSends: ["class:", "span", "with:", "div", "at:put:", "streamContents:", "nextPutAll:", "button", "a"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedPackage_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage}, smalltalk.HLPackagesListWidget)})},
messageSends: ["selectedPackage:", "model"]}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["allProtocol", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(_st(self)._model())._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLProtocolsFocusRequested || HLProtocolsFocusRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolsFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["on:do:", "onClassSelected:", "item", "announcer", "model", "selectedClass", "onProtocolSelected:", "onProtocolsFocusRequested"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current();
_st($1)._on_do_((smalltalk.ProtocolAdded || ProtocolAdded),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolAdded_to_(_st(ann)._protocol(),_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.ProtocolRemoved || ProtocolRemoved),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolRemoved_from_(_st(ann)._protocol(),_st(ann)._theClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["on:do:", "onProtocolAdded:to:", "protocol", "theClass", "current", "onProtocolRemoved:from:"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(nil);
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolAdded_to_",
smalltalk.method({
selector: "onProtocolAdded:to:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(aClass).__eq(_st(_st(self)._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:to:",{aString:aString,aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolRemoved_from_",
smalltalk.method({
selector: "onProtocolRemoved:from:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(aClass).__eq(_st(_st(self)._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(_st(self)._model())._selectedProtocol()).__eq(aString);
if(smalltalk.assert($3)){
_st(self)._selectItem_(nil);
};
_st(self)._setItemsForSelectedClass();
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:from:",{aString:aString,aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["ifFalse:", "=", "selectedClass", "model", "ifTrue:", "selectItem:", "selectedProtocol", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
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
messageSends: ["selectedItem:", "ifNil:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolsFocusRequested",
smalltalk.method({
selector: "onProtocolsFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolsFocusRequested",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedProtocol_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedProtocol:", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HLBrowserListWidget.fn.prototype._selectedItem.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_setItemsForClass_",
smalltalk.method({
selector: "setItemsForClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2;
$1=self;
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
$2=_st((smalltalk.Array || Array))._with_(_st(self)._allProtocol());
} else {
$4=_st((smalltalk.Array || Array))._with_(_st(self)._allProtocol());
_st($4)._addAll_(_st(aClass)._protocols());
$5=_st($4)._yourself();
$2=$5;
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForClass:",{aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_setItemsForSelectedClass",
smalltalk.method({
selector: "setItemsForSelectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setItemsForClass_(_st(_st(self)._model())._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedClass",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["setItemsForClass:", "selectedClass", "model"]}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.Object, ['announcer', 'environment', 'selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedSelector', 'showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
"_addInstVarNamed_",
smalltalk.method({
selector: "addInstVarNamed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._environment())._addInstVarNamed_to_(aString,_st(self)._selectedClass());
$1=_st((smalltalk.HLInstVarAdded || HLInstVarAdded))._new();
_st($1)._theClass_(_st(self)._selectedClass());
_st($1)._variableName_(aString);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:",{aString:aString}, smalltalk.HLBrowserModel)})},
messageSends: ["addInstVarNamed:to:", "selectedClass", "environment", "announce:", "theClass:", "new", "variableName:", "yourself", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "-- all --";
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_availableClassNames",
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLBrowserModel)})},
messageSends: ["availableClassNames", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_availableProtocols",
smalltalk.method({
selector: "availableProtocols",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._availableProtocolsFor_(_st(self)._selectedClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableProtocols",{},smalltalk.HLBrowserModel)})},
messageSends: ["availableProtocolsFor:", "selectedClass", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._environment())._commitPackage_(_st(self)._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLBrowserModel)})},
messageSends: ["commitPackage:", "selectedPackage", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_compilationProtocol",
smalltalk.method({
selector: "compilationProtocol",
fn: function (){
var self=this;
var currentProtocol;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
currentProtocol=_st(self)._selectedProtocol();
$1=currentProtocol;
if(($receiver = $1) == nil || $receiver == undefined){
currentProtocol=_st(self)._unclassifiedProtocol();
currentProtocol;
} else {
$1;
};
$2=_st(self)._selectedMethod();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
currentProtocol=_st(_st(self)._selectedMethod())._protocol();
currentProtocol;
};
$4=_st(currentProtocol).__eq(_st(self)._allProtocol());
if(smalltalk.assert($4)){
$3=_st(self)._unclassifiedProtocol();
} else {
$3=currentProtocol;
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"compilationProtocol",{currentProtocol:currentProtocol},smalltalk.HLBrowserModel)})},
messageSends: ["selectedProtocol", "ifNil:", "unclassifiedProtocol", "ifNotNil:", "protocol", "selectedMethod", "ifTrue:ifFalse:", "=", "allProtocol"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_compileClassComment_",
smalltalk.method({
selector: "compileClassComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._environment())._compileClassComment_for_(aString,_st(self)._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:",{aString:aString}, smalltalk.HLBrowserModel)})},
messageSends: ["compileClassComment:for:", "selectedClass", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_compileClassDefinition_",
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._environment())._compileClassDefinition_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString}, smalltalk.HLBrowserModel)})},
messageSends: ["compileClassDefinition:", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._withCompileErrorHandling_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._environment())._compileMethod_for_protocol_(aString,_st(self)._selectedClass(),_st(self)._compilationProtocol());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString}, smalltalk.HLBrowserModel)})},
messageSends: ["withCompileErrorHandling:", "compileMethod:for:protocol:", "selectedClass", "compilationProtocol", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st((smalltalk.HLManager || HLManager))._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_focusOnClasses",
smalltalk.method({
selector: "focusOnClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLClassesFocusRequested || HLClassesFocusRequested))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnClasses",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_focusOnMethods",
smalltalk.method({
selector: "focusOnMethods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLMethodsFocusRequested || HLMethodsFocusRequested))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnMethods",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_focusOnPackages",
smalltalk.method({
selector: "focusOnPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLPackagesFocusRequested || HLPackagesFocusRequested))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnPackages",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_focusOnProtocols",
smalltalk.method({
selector: "focusOnProtocols",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLProtocolsFocusRequested || HLProtocolsFocusRequested))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnProtocols",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_focusOnSourceCode",
smalltalk.method({
selector: "focusOnSourceCode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLSourceCodeFocusRequested || HLSourceCodeFocusRequested))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnSourceCode",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_handleCompileError_",
smalltalk.method({
selector: "handleCompileError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.HLCompileErrorRaised || HLCompileErrorRaised))._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleCompileError:",{anError:anError}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "error:", "new", "yourself", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_handleParseError_",
smalltalk.method({
selector: "handleParseError:",
fn: function (anError){
var self=this;
var split,line,column,messageToInsert;
return smalltalk.withContext(function($ctx1) { var $1,$2;
split=_st(_st(anError)._messageText())._tokenize_(" : ");
messageToInsert=_st(split)._second();
split=_st(_st(split)._first())._copyFrom_to_((21),_st(_st(split)._first())._size());
split=_st(split)._tokenize_(" column ");
line=_st(split)._first();
column=_st(split)._second();
$1=_st((smalltalk.HLParseErrorRaised || HLParseErrorRaised))._new();
_st($1)._line_(_st(line)._asNumber());
_st($1)._column_(_st(column)._asNumber());
_st($1)._message_(messageToInsert);
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleParseError:",{anError:anError,split:split,line:line,column:column,messageToInsert:messageToInsert}, smalltalk.HLBrowserModel)})},
messageSends: ["tokenize:", "messageText", "second", "copyFrom:to:", "size", "first", "announce:", "line:", "asNumber", "new", "column:", "message:", "error:", "yourself", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_handleUnkownVariableError_",
smalltalk.method({
selector: "handleUnkownVariableError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.HLUnknownVariableErrorRaised || HLUnknownVariableErrorRaised))._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleUnkownVariableError:",{anError:anError}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "error:", "new", "yourself", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLManager || HLManager))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLBrowserModel)})},
messageSends: ["current"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_moveMethodToClass_",
smalltalk.method({
selector: "moveMethodToClass:",
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._environment())._moveMethod_toClass_(_st(self)._selectedMethod(),aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToClass:",{aClassName:aClassName},smalltalk.HLBrowserModel)})},
messageSends: ["moveMethod:toClass:", "selectedMethod", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_moveMethodToProtocol_",
smalltalk.method({
selector: "moveMethodToProtocol:",
fn: function (aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._environment())._moveMethod_toProtocol_(_st(self)._selectedMethod(),aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToProtocol:",{aProtocol:aProtocol},smalltalk.HLBrowserModel)})},
messageSends: ["moveMethod:toProtocol:", "selectedMethod", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_openClassNamed_",
smalltalk.method({
selector: "openClassNamed:",
fn: function (aString){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { class_=_st(_st(self)._environment())._classNamed_(aString);
_st(self)._selectedPackage_(_st(class_)._package());
_st(self)._selectedClass_(class_);
return self}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,class_:class_},smalltalk.HLBrowserModel)})},
messageSends: ["classNamed:", "environment", "selectedPackage:", "package", "selectedClass:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLBrowserModel)})},
messageSends: ["packages", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._manager())._confirm_(_st(_st(_st("Do you REALLY want to remove method ").__comma(_st(_st(_st(self)._selectedMethod())._methodClass())._name())).__comma(" >> #")).__comma(_st(_st(self)._selectedMethod())._selector()));
if(smalltalk.assert($1)){
_st(_st(self)._environment())._removeMethod_(_st(self)._selectedMethod());
};
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "removeMethod:", "selectedMethod", "environment", "confirm:", ",", "selector", "name", "methodClass", "manager"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_save_",
smalltalk.method({
selector: "save:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._shouldCompileClassDefinition_(aString);
if(smalltalk.assert($1)){
_st(self)._compileClassDefinition_(aString);
} else {
_st(self)._compileMethod_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"save:",{aString:aString},smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:ifFalse:", "compileClassDefinition:", "compileMethod:", "shouldCompileClassDefinition:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_saveSourceCode",
smalltalk.method({
selector: "saveSourceCode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLSaveSourceCode || HLSaveSourceCode))._new());
return self}, function($ctx1) {$ctx1.fill(self,"saveSourceCode",{}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(self["@selectedClass"]).__eq(aClass);
if(smalltalk.assert($1)){
$2=aClass;
if(($receiver = $2) == nil || $receiver == undefined){
$3=self;
return $3;
} else {
$2;
};
_st(self)._selectedProtocol_(nil);
};
$4=aClass;
if(($receiver = $4) == nil || $receiver == undefined){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
$5=_st(self)._showInstance();
if(smalltalk.assert($5)){
self["@selectedClass"]=_st(aClass)._theNonMetaClass();
self["@selectedClass"];
} else {
self["@selectedClass"]=_st(aClass)._theMetaClass();
self["@selectedClass"];
};
};
_st(self)._selectedProtocol_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLClassSelected || HLClassSelected))._on_(_st(self)._selectedClass()));
return self}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass}, smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "ifNil:", "selectedProtocol:", "=", "ifNil:ifNotNil:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "showInstance", "announce:", "on:", "selectedClass", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod",
smalltalk.method({
selector: "selectedMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._selectedClass();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(_st(self)._selectedClass())._methodDictionary())._at_ifAbsent_(self["@selectedSelector"],(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{},smalltalk.HLBrowserModel)})},
messageSends: ["ifNotNil:", "at:ifAbsent:", "methodDictionary", "selectedClass"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod_",
smalltalk.method({
selector: "selectedMethod:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(self["@selectedSelector"]).__eq(aCompiledMethod);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=aCompiledMethod;
if(($receiver = $3) == nil || $receiver == undefined){
self["@selectedSelector"]=nil;
self["@selectedSelector"];
} else {
$4=_st(self["@selectedSelector"]).__eq(_st(aCompiledMethod)._selector());
if(smalltalk.assert($4)){
$5=self;
return $5;
};
self["@selectedSelector"]=_st(aCompiledMethod)._selector();
self["@selectedSelector"];
};
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLMethodSelected || HLMethodSelected))._on_(aCompiledMethod));
return self}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "=", "ifNil:ifNotNil:", "selector", "announce:", "on:", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage_",
smalltalk.method({
selector: "selectedPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedPackage"]).__eq(aPackage);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedPackage"]=aPackage;
_st(self)._selectedClass_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLPackageSelected || HLPackageSelected))._on_(aPackage));
return self}, function($ctx1) {$ctx1.fill(self,"selectedPackage:",{aPackage:aPackage}, smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "=", "selectedClass:", "announce:", "on:", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol",
smalltalk.method({
selector: "selectedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedProtocol",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol_",
smalltalk.method({
selector: "selectedProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedProtocol"]).__eq(aString);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedProtocol"]=aString;
_st(self)._selectedMethod_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLProtocolSelected || HLProtocolSelected))._on_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"selectedProtocol:",{aString:aString}, smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "=", "selectedMethod:", "announce:", "on:", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_shouldCompileClassDefinition_",
smalltalk.method({
selector: "shouldCompileClassDefinition:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._selectedClass())._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(aString)._first())._asUppercase()).__eq(_st(aString)._first());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldCompileClassDefinition:",{aString:aString},smalltalk.HLBrowserModel)})},
messageSends: ["or:", "=", "first", "asUppercase", "isNil", "selectedClass"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment",
smalltalk.method({
selector: "showComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@showComment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{}, smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment_",
smalltalk.method({
selector: "showComment:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@showComment"]=aBoolean;
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLShowCommentToggled || HLShowCommentToggled))._new());
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean}, smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@showInstance"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{}, smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
self["@showInstance"]=aBoolean;
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
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled))._new());
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean}, smalltalk.HLBrowserModel)})},
messageSends: ["ifNotNil:", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "selectedClass", "theMetaClass", "announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_unclassifiedProtocol",
smalltalk.method({
selector: "unclassifiedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"unclassifiedProtocol",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_withCompileErrorHandling_",
smalltalk.method({
selector: "withCompileErrorHandling:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(aBlock)._on_do_((smalltalk.ParseError || ParseError),(function(ex){
return smalltalk.withContext(function($ctx4) {return _st(self)._handleParseError_(ex);
}, function($ctx4) {$ctx4.fillBlock({ex:ex},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._on_do_((smalltalk.UnknownVariableError || UnknownVariableError),(function(ex){
return smalltalk.withContext(function($ctx3) {return _st(self)._handleUnkownVariableError_(ex);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.CompilerError || CompilerError),(function(ex){
return smalltalk.withContext(function($ctx2) {return _st(self)._handleCompileError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withCompileErrorHandling:",{aBlock:aBlock}, smalltalk.HLBrowserModel)})},
messageSends: ["on:do:", "handleCompileError:", "handleUnkownVariableError:", "handleParseError:"]}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLBrowserModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLBrowserSourceWidget', smalltalk.HLWidget, ['model', 'methodContents', 'codeWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@codeWidget"]=_st((smalltalk.HLSourceCodeWidget || HLSourceCodeWidget))._on_(_st(self)._model());
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:", "on:", "model"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._codeWidget())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["contents", "codeWidget"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._methodContents_(aString);
_st(_st(self)._codeWidget())._contents_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["methodContents:", "contents:", "codeWidget"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._codeWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["focus", "codeWidget"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_hasFocus",
smalltalk.method({
selector: "hasFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._codeWidget())._hasFocus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["hasFocus", "codeWidget"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_hasModification",
smalltalk.method({
selector: "hasModification",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._methodContents()).__eq(_st(self)._contents()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["not", "=", "contents", "methodContents"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["initialize", "observeSystem"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_methodContents",
smalltalk.method({
selector: "methodContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@methodContents"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@methodContents"]="";
$1=self["@methodContents"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_methodContents_",
smalltalk.method({
selector: "methodContents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@methodContents"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"methodContents:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
messageSends: []}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: []}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aBrowserModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["observeModel"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLSourceCodeFocusRequested || HLSourceCodeFocusRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onSourceCodeFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["on:do:", "onMethodSelected:", "item", "announcer", "model", "onClassSelected:", "onProtocolSelected:", "onSourceCodeFocusRequested"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._on_do_((smalltalk.MethodModified || MethodModified),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodModified_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["on:do:", "onMethodModified:", "method", "current"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aClass)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:", "contents:", "definition"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onMethodModified_",
smalltalk.method({
selector: "onMethodModified:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st(_st(_st(self)._model())._selectedClass()).__eq(_st(aMethod)._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self)._model())._selectedMethod();
if(($receiver = $3) == nil || $receiver == undefined){
$4=self;
return $4;
} else {
$3;
};
$5=_st(_st(_st(_st(self)._model())._selectedMethod())._selector()).__eq(_st(aMethod)._selector());
if(! smalltalk.assert($5)){
$6=self;
return $6;
};
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{aMethod:aMethod},smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifFalse:", "=", "methodClass", "selectedClass", "model", "ifNil:", "selectedMethod", "selector", "refresh"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aCompiledMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aCompiledMethod)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:", "contents:", "source"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(_st(_st(self)._model())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:", "contents:", "selectedClass", "model", "definition"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onSourceCodeFocusRequested",
smalltalk.method({
selector: "onSourceCodeFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["focus"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self)._hasModification();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self)._hasFocus();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
_st(self)._contents_(_st(_st(_st(self)._model())._selectedMethod())._source());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "model"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._codeWidget())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["renderOn:", "codeWidget"]}),
smalltalk.HLBrowserSourceWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserSourceWidget.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLBrowserSourceWidget.klass);


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'selectorsCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
smalltalk.addMethod(
"_invalidateChildrenSelector_",
smalltalk.method({
selector: "invalidateChildrenSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st(self)._theClass())._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(self)._selectorsCache())._cacheFor_(each);
_st($1)._removeSelector_(aSelector);
$2=_st($1)._invalidateChildrenSelector_(aSelector);
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"invalidateChildrenSelector:",{aSelector:aSelector}, smalltalk.HLClassCache)})},
messageSends: ["do:", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateChildrenSelector:", "subclasses", "theClass"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_invalidateParentSelector_",
smalltalk.method({
selector: "invalidateParentSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._theClass())._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(_st(self)._selectorsCache())._cacheFor_(_st(_st(self)._theClass())._superclass());
_st($2)._removeSelector_(aSelector);
$3=_st($2)._invalidateParentSelector_(aSelector);
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"invalidateParentSelector:",{aSelector:aSelector}, smalltalk.HLClassCache)})},
messageSends: ["ifNotNil:", "removeSelector:", "cacheFor:", "superclass", "theClass", "selectorsCache", "invalidateParentSelector:"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_invalidateSelector_",
smalltalk.method({
selector: "invalidateSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._invalidateParentSelector_(aSelector);
_st($1)._invalidateChildrenSelector_(aSelector);
$2=_st($1)._removeSelector_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"invalidateSelector:",{aSelector:aSelector}, smalltalk.HLClassCache)})},
messageSends: ["invalidateParentSelector:", "invalidateChildrenSelector:", "removeSelector:"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._overriddenCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aMethod)._isOverridden();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLClassCache)})},
messageSends: ["at:ifAbsentPut:", "selector", "isOverridden", "overriddenCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._overrideCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aMethod)._isOverride();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLClassCache)})},
messageSends: ["at:ifAbsentPut:", "selector", "isOverride", "overrideCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_overriddenCache",
smalltalk.method({
selector: "overriddenCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@overriddenCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overriddenCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{}, smalltalk.HLClassCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_overrideCache",
smalltalk.method({
selector: "overrideCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@overrideCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overrideCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{}, smalltalk.HLClassCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_removeSelector_",
smalltalk.method({
selector: "removeSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._overriddenCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._overrideCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aSelector:aSelector}, smalltalk.HLClassCache)})},
messageSends: ["removeKey:ifAbsent:", "overriddenCache", "overrideCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectorsCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{}, smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_selectorsCache_",
smalltalk.method({
selector: "selectorsCache:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectorsCache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"selectorsCache:",{aCache:aCache}, smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@class"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);


smalltalk.addMethod(
"_on_selectorsCache_",
smalltalk.method({
selector: "on:selectorsCache:",
fn: function (aClass,aSelectorsCache){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._selectorsCache_(aSelectorsCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:selectorsCache:",{aClass:aClass,aSelectorsCache:aSelectorsCache}, smalltalk.HLClassCache.klass)})},
messageSends: ["theClass:", "new", "selectorsCache:", "yourself"]}),
smalltalk.HLClassCache.klass);


smalltalk.addClass('HLSelectorsCache', smalltalk.Object, ['classesCache'], 'Helios-Browser');
smalltalk.addMethod(
"_cacheFor_",
smalltalk.method({
selector: "cacheFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
return nil;
} else {
$1;
};
$2=_st(_st(self)._classesCache())._at_ifAbsentPut_(_st(aClass)._name(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._newCacheFor_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass}, smalltalk.HLSelectorsCache)})},
messageSends: ["ifNil:", "at:ifAbsentPut:", "name", "newCacheFor:", "classesCache"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_classesCache",
smalltalk.method({
selector: "classesCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classesCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesCache",{}, smalltalk.HLSelectorsCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLSelectorsCache)})},
messageSends: ["initialize", "observeSystem"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_invalidateCacheFor_",
smalltalk.method({
selector: "invalidateCacheFor:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._invalidateSelector_(_st(aMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"invalidateCacheFor:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateSelector:", "selector", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
messageSends: ["isOverridden:", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
messageSends: ["isOverride:", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_newCacheFor_",
smalltalk.method({
selector: "newCacheFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLClassCache || HLClassCache))._on_selectorsCache_(aClass,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass}, smalltalk.HLSelectorsCache)})},
messageSends: ["on:selectorsCache:"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_observeSystem",
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current();
_st($1)._on_do_((smalltalk.MethodAdded || MethodAdded),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodAdded_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.MethodRemoved || MethodRemoved),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodRemoved_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{}, smalltalk.HLSelectorsCache)})},
messageSends: ["on:do:", "onMethodAdded:", "method", "current", "onMethodRemoved:"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_onMethodAdded_",
smalltalk.method({
selector: "onMethodAdded:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._invalidateCacheFor_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateCacheFor:"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_onMethodRemoved_",
smalltalk.method({
selector: "onMethodRemoved:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._invalidateCacheFor_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateCacheFor:"]}),
smalltalk.HLSelectorsCache);


smalltalk.HLSelectorsCache.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HLSelectorsCache.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flush",{}, smalltalk.HLSelectorsCache.klass)})},
messageSends: []}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.HLSelectorsCache.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLSelectorsCache.klass);


smalltalk.addMethod(
"_isOverridden",
smalltalk.method({
selector: "isOverridden",
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { var $1;
var $early={};
try {
selector=_st(self)._selector();
_st(_st(self)._methodClass())._allSubclassesDo_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(each)._includesSelector_(selector);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector}, smalltalk.CompiledMethod)})},
messageSends: ["selector", "allSubclassesDo:", "ifTrue:", "includesSelector:", "methodClass"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_isOverride",
smalltalk.method({
selector: "isOverride",
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { var $1,$2;
superclass=_st(_st(self)._methodClass())._superclass();
$1=superclass;
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(_st(_st(_st(self)._methodClass())._superclass())._lookupSelector_(_st(self)._selector()))._notNil();
return $2;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass}, smalltalk.CompiledMethod)})},
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"]}),
smalltalk.CompiledMethod);

