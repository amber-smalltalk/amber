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
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=aBindingGroup;
_st($1)._addGroupKey_labelled_((66),"Browse");
_st($1)._addGroupKey_labelled_((71),"Go to");
$2=_st($1)._addGroupKey_labelled_((84),"Toggle");
_st(_st((smalltalk.HLBrowserCommand || HLBrowserCommand))._withAllSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(each)._key();
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(_st(aBindingGroup)._at_(_st(each)._bindingGroup()))._add_(_st(_st(each)._on_(_st(self)._model()))._asBinding());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup}, smalltalk.HLBrowser)})},
messageSends: ["addGroupKey:labelled:", "do:", "ifNotNil:", "add:", "asBinding", "on:", "model", "at:", "bindingGroup", "key", "withAllSubclasses"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st((smalltalk.HLContainer || HLContainer))._with_(_st((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._packagesListWidget(),_st(self)._classesListWidget()),_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._protocolsListWidget(),_st(self)._methodsListWidget())),_st(self)._sourceWidget())));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLBrowser)})},
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"]}),
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
$2=_st($1)._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLClassesListWidget)})},
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onShowInstanceToggled", "onClassSelected:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aClass);
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
messageSends: ["selectedItem:", "ifNil:", "focus"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
_st(self)._selectedItem_(nil);
$1=self;
$3=aPackage;
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet())._asArray();
};
_st($1)._items_($2);
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage}, smalltalk.HLClassesListWidget)})},
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "asArray", "asSet", "collect:", "theNonMetaClass", "classes", "refresh"]}),
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
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li}, smalltalk.HLClassesListWidget)})},
messageSends: ["li", "at:put:", "indexOf:", "items", "class:", "cssClassForItem:", "with:", "iconForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"]}),
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
fn: function (aCompiledMethod){
var self=this;
var override,overriden;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$1;
override=_st(self)._isOverride_(aCompiledMethod);
overriden=_st(self)._isOverridden_(aCompiledMethod);
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
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aCompiledMethod:aCompiledMethod,override:override,overriden:overriden}, smalltalk.HLMethodsListWidget)})},
messageSends: ["isOverride:", "isOverridden:", "ifTrue:ifFalse:"]}),
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
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(aString).__eq(_st(self)._allProtocol());
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._model())._selectedClass())._methods();
} else {
$1=_st(_st(_st(self)._model())._selectedClass())._methodsInProtocol_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["ifTrue:ifFalse:", "methods", "selectedClass", "model", "methodsInProtocol:", "=", "allProtocol"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(nil);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLMethodsListWidget)})},
messageSends: ["on:do:", "onProtocolSelected:", "item", "announcer", "model", "onMethodSelected:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aMethod);
$1=aMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedItem:", "ifNil:", "focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
_st(self)._selectedItem_(nil);
$1=self;
$3=_st(_st(self)._model())._selectedClass();
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$4=aString;
if(($receiver = $4) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(self)._methodsInProtocol_(aString);
};
};
_st($1)._items_($2);
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "methodsInProtocol:", "selectedClass", "model", "refresh"]}),
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
fn: function (aCompiledMethod,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st(aCompiledMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aCompiledMethod:aCompiledMethod,html:html}, smalltalk.HLMethodsListWidget)})},
messageSends: ["with:", "selector"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedMethod_(aCompiledMethod);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedMethod:", "model"]}),
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
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLPackageSelected || HLPackageSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLPackagesListWidget)})},
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(aPackage);
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage}, smalltalk.HLPackagesListWidget)})},
messageSends: ["selectedItem:", "focus"]}),
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
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(_st(self)._model())._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["on:do:", "onClassSelected:", "item", "announcer", "model", "selectedClass", "onProtocolSelected:"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2;
_st(self)._selectedItem_(nil);
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
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aString);
$1=aString;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem:", "ifNil:", "focus"]}),
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



smalltalk.addClass('HLBrowserModel', smalltalk.Object, ['announcer', 'environment', 'selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "-- All --";
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
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self["@selectedClass"]).__eq(aClass);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
$4=_st(self)._showInstance();
if(smalltalk.assert($4)){
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
messageSends: ["ifTrue:", "=", "ifNil:ifNotNil:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "showInstance", "selectedProtocol:", "announce:", "on:", "selectedClass", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod",
smalltalk.method({
selector: "selectedMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{}, smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod_",
smalltalk.method({
selector: "selectedMethod:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedMethod"]).__eq(aCompiledMethod);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedMethod"]=aCompiledMethod;
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLMethodSelected || HLMethodSelected))._on_(aCompiledMethod));
return self}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLBrowserModel)})},
messageSends: ["ifTrue:", "=", "announce:", "on:", "announcer"]}),
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


smalltalk.addClass('HLBrowserSourceWidget', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@codeWidget"]=_st((smalltalk.HLCodeWidget || HLCodeWidget))._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._sourceArea())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["contents", "sourceArea"]}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._codeWidget())._contents_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["contents:", "codeWidget"]}),
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
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLBrowserSourceWidget)})},
messageSends: ["on:do:", "onMethodSelected:", "item", "announcer", "model", "onClassSelected:", "onProtocolSelected:"]}),
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


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'parentCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
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
"_parentCache",
smalltalk.method({
selector: "parentCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parentCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentCache",{}, smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_parentCache_",
smalltalk.method({
selector: "parentCache:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parentCache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"parentCache:",{aCache:aCache}, smalltalk.HLClassCache)})},
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
"_on_parentCache_",
smalltalk.method({
selector: "on:parentCache:",
fn: function (aClass,aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._parentCache_(aCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:parentCache:",{aClass:aClass,aCache:aCache}, smalltalk.HLClassCache.klass)})},
messageSends: ["theClass:", "new", "parentCache:", "yourself"]}),
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
$1=_st((smalltalk.HLClassCache || HLClassCache))._on_parentCache_(aClass,_st(self)._cacheFor_(_st(aClass)._superclass()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass}, smalltalk.HLSelectorsCache)})},
messageSends: ["on:parentCache:", "cacheFor:", "superclass"]}),
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
$2=_st(_st(_st(_st(self)._methodClass())._superclass())._lookupSelector_(_st(self)._selector()))._isNil();
return $2;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass}, smalltalk.CompiledMethod)})},
messageSends: ["superclass", "methodClass", "ifNil:", "isNil", "lookupSelector:", "selector"]}),
smalltalk.CompiledMethod);

