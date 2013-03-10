smalltalk.addPackage('Helios-Core');
smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios-Core');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._manager())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{}, smalltalk.HLTab)})},
args: [],
source: "activate\x0a\x09self manager activate: self",
messageSends: ["activate:", "manager"],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_add",
smalltalk.method({
selector: "add",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._manager())._addTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add",{}, smalltalk.HLTab)})},
args: [],
source: "add\x0a\x09self manager addTab: self",
messageSends: ["addTab:", "manager"],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{}, smalltalk.HLTab)})},
args: [],
source: "isActive\x0a\x09^ self manager activeTab = self",
messageSends: ["=", "activeTab", "manager"],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLTab)})},
args: [],
source: "label\x0a\x09^ label ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString}, smalltalk.HLTab)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLManager || HLManager))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{}, smalltalk.HLTab)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{}, smalltalk.HLTab)})},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget}, smalltalk.HLTab)})},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTab);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
category: 'instance creation',
fn: function (aWidget,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._widget_(aWidget);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString}, smalltalk.HLTab.klass)})},
args: ["aWidget", "aString"],
source: "on: aWidget labelled: aString\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09label: aString;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "label:", "yourself"],
referencedClasses: []
}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLManager || HLManager))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{}, smalltalk.HLWidget)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._wrapper();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(_st(self)._wrapper())._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(_st(self)._wrapper())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLWidget)})},
args: [],
source: "refresh\x0a\x09self wrapper ifNil: [ ^ self ].\x0a    \x0a\x09self wrapper asJQuery empty.\x0a    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery",
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
category: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._registerBindingsOn_(_st(_st(_st(self)._manager())._keyBinder())._bindings());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{}, smalltalk.HLWidget)})},
args: [],
source: "registerBindings\x0a\x09self registerBindingsOn: self manager keyBinder bindings",
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup}, smalltalk.HLWidget)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._registerBindings();
self["@wrapper"]=_st(html)._div();
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContentOn_(renderer);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.HLWidget)})},
args: ["html"],
source: "renderOn: html\x0a    self registerBindings.\x0a\x0a\x09wrapper := html div.\x0a    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery",
messageSends: ["registerBindings", "div", "appendToJQuery:", "asJQuery", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_wrapper",
smalltalk.method({
selector: "wrapper",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{}, smalltalk.HLWidget)})},
args: [],
source: "wrapper\x0a\x09^ wrapper",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLWidget.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_openAsTab",
smalltalk.method({
selector: "openAsTab",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._canBeOpenAsTab();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st((smalltalk.HLManager || HLManager))._current())._addTab_(_st((smalltalk.HLTab || HLTab))._on_labelled_(_st(self)._new(),_st(self)._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{}, smalltalk.HLWidget.klass)})},
args: [],
source: "openAsTab\x0a\x09self canBeOpenAsTab ifFalse: [ ^ self ].\x0a\x09HLManager current addTab: (HLTab on: self new labelled: self tabLabel)",
messageSends: ["ifFalse:", "canBeOpenAsTab", "addTab:", "on:labelled:", "new", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Tab";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLWidget.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Tab'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (500);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLWidget.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 500",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Core');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, ['hiddenInput'], 'Helios-Core');
smalltalk.addMethod(
"_blur",
smalltalk.method({
selector: "blur",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@hiddenInput"])._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"blur",{}, smalltalk.HLFocusableWidget)})},
args: [],
source: "blur\x0a\x09hiddenInput asJQuery blur",
messageSends: ["blur", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@hiddenInput"])._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLFocusableWidget)})},
args: [],
source: "focus\x0a\x09hiddenInput asJQuery focus",
messageSends: ["focus", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focusClass",
smalltalk.method({
selector: "focusClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "focused";
}, function($ctx1) {$ctx1.fill(self,"focusClass",{}, smalltalk.HLFocusableWidget)})},
args: [],
source: "focusClass\x0a\x09^ 'focused'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_hasFocus",
smalltalk.method({
selector: "hasFocus",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._wrapper())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._wrapper())._asJQuery())._hasClass_(_st(self)._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{}, smalltalk.HLFocusableWidget)})},
args: [],
source: "hasFocus\x0a\x09^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]",
messageSends: ["and:", "hasClass:", "focusClass", "asJQuery", "wrapper", "notNil"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLFocusableWidget)})},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderHiddenInputOn_",
smalltalk.method({
selector: "renderHiddenInputOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._input();
_st($1)._style_("position: absolute; left: -100000px;");
_st($1)._onBlur_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._wrapper())._asJQuery())._removeClass_(_st(self)._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._wrapper())._asJQuery())._addClass_(_st(self)._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@hiddenInput"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderHiddenInputOn:",{html:html}, smalltalk.HLFocusableWidget)})},
args: ["html"],
source: "renderHiddenInputOn: html\x0a\x09hiddenInput := html input\x0a    \x09style: 'position: absolute; left: -100000px;';\x0a    \x09onBlur: [ self wrapper asJQuery removeClass: self focusClass ];\x0a        onFocus: [ self wrapper asJQuery addClass: self focusClass ]",
messageSends: ["style:", "input", "onBlur:", "removeClass:", "focusClass", "asJQuery", "wrapper", "onFocus:", "addClass:"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._registerBindings();
_st(self)._renderHiddenInputOn_(html);
$1=_st(html)._div();
_st($1)._class_("hl_widget");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self["@hiddenInput"])._asJQuery())._focus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@wrapper"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.HLFocusableWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09self registerBindings.\x0a\x09self renderHiddenInputOn: html.\x0a    \x0a    wrapper := html div \x0a    \x09class: 'hl_widget'; \x0a        onClick: [ hiddenInput asJQuery focus ];\x0a        with: [\x0a\x09\x09\x09self renderContentOn: html ]",
messageSends: ["registerBindings", "renderHiddenInputOn:", "class:", "div", "onClick:", "focus", "asJQuery", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Core');
smalltalk.addMethod(
"_activateFirstListItem",
smalltalk.method({
selector: "activateFirstListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._activateListItem_(_st(window)._jQuery_(_st(_st(_st(self["@wrapper"])._asJQuery())._find_("li"))._get_((0))));
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{}, smalltalk.HLListWidget)})},
args: [],
source: "activateFirstListItem\x0a\x09self activateListItem: (window jQuery: ((wrapper asJQuery find: 'li') get: 0))",
messageSends: ["activateListItem:", "jQuery:", "get:", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_activateListItem_",
smalltalk.method({
selector: "activateListItem:",
category: 'actions',
fn: function (aListItem){
var self=this;
var parent,position;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
position=_st(self)._positionOf_(aListItem);
parent=_st(aListItem)._parent();
_st(_st(parent)._children())._removeClass_("active");
_st(aListItem)._addClass_("active");
$3=_st(_st(_st(aListItem)._position())._top()).__lt((0));
if(smalltalk.assert($3)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(_st(aListItem)._position())._top())).__minus((10)));
};
$4=_st(_st(_st(_st(aListItem)._position())._top()).__plus(_st(aListItem)._height())).__gt(_st(parent)._height());
if(smalltalk.assert($4)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(aListItem)._height())).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()))).__plus((10)));
};
_st(self)._selectItem_(_st(_st(self)._items())._at_(_st(_st(aListItem)._attr_("list-data"))._asNumber()));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,parent:parent,position:position}, smalltalk.HLListWidget)})},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| parent position |\x0a    \x0a\x09(aListItem get: 0) ifNil: [ ^self ].\x0a\x0a\x09position := self positionOf: aListItem.\x0a\x0a    parent := aListItem parent.\x0a\x09parent children removeClass: 'active'.\x0a\x09aListItem addClass: 'active'.\x0a    \x0a    \x22Move the scrollbar to show the active element\x22\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].\x0a        \x0a   \x22Activate the corresponding item\x22\x0a   self selectItem: (self items at: (aListItem attr: 'list-data') asNumber)",
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "removeClass:", "children", "addClass:", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "<", "height", ">", "selectItem:", "at:", "asNumber", "attr:", "items"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_cssClassForItem_",
smalltalk.method({
selector: "cssClassForItem:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._selectedItem()).__eq(anObject);
if(smalltalk.assert($2)){
$1="active";
} else {
$1="inactive";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
args: ["anObject"],
source: "cssClassForItem: anObject\x0a\x09^ self selectedItem = anObject\x0a\x09\x09\x09ifTrue: [ 'active' ]\x0a\x09\x09\x09ifFalse: [ 'inactive' ]",
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return [];
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{}, smalltalk.HLListWidget)})},
args: [],
source: "defaultItems\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.HLFocusableWidget.fn.prototype._focus.apply(_st(self), []);
$1=_st(_st(self)._items())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(self)._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._activateFirstListItem();
} else {
$2;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLListWidget)})},
args: [],
source: "focus\x0a\x09super focus.\x0a    self items isEmpty ifFalse: [ \x0a\x09\x09self selectedItem ifNil: [ self activateFirstListItem ] ]",
messageSends: ["focus", "ifFalse:", "ifNil:", "activateFirstListItem", "selectedItem", "isEmpty", "items"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
args: ["anObject"],
source: "iconForItem: anObject\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=_st(self)._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{}, smalltalk.HLListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self defaultItems ]",
messageSends: ["ifNil:", "defaultItems"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items_",
smalltalk.method({
selector: "items:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@items"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"items:",{aCollection:aCollection}, smalltalk.HLListWidget)})},
args: ["aCollection"],
source: "items: aCollection\x0a\x09items := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_positionOf_",
smalltalk.method({
selector: "positionOf:",
category: 'accessing',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem}, smalltalk.HLListWidget)})},
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09<\x0a    \x09return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLListWidget)})},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderListOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._div();
_st($3)._class_("pane_actions form-actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul \x0a    \x09class: 'nav nav-pills nav-stacked';\x0a        with: [ self renderListOn: html ].\x0a    html div class: 'pane_actions form-actions'; with: [\x0a      \x09self renderButtonsOn: html ].\x0a        \x0a   self setupKeyBindings",
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
li=_st(html)._li();
$1=li;
_st($1)._class_(_st(self)._cssClassForItem_(anObject));
_st($1)._at_put_("list-data",_st(_st(_st(self)._items())._indexOf_(anObject))._asString());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._tag_("i"))._class_(_st(self)._iconForItem_(anObject));
return _st(self)._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li}, smalltalk.HLListWidget)})},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a    li\x0a    \x09class: (self cssClassForItem: anObject);\x0a        at: 'list-data' put: (self items indexOf: anObject) asString;\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self iconForItem: anObject).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ]",
messageSends: ["li", "class:", "cssClassForItem:", "at:put:", "asString", "indexOf:", "items", "with:", "iconForItem:", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st(anObject)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html}, smalltalk.HLListWidget)})},
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html with: anObject asString",
messageSends: ["with:", "asString"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._items())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html}, smalltalk.HLListWidget)})},
args: ["html"],
source: "renderListOn: html\x0a\x09self items do: [ :each | \x0a    \x09self renderItem: each on: html ]",
messageSends: ["do:", "renderItem:on:", "items"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09self selectedItem: anObject",
messageSends: ["selectedItem:"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{}, smalltalk.HLListWidget)})},
args: [],
source: "selectedItem\x0a\x09^ selectedItem",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem_",
smalltalk.method({
selector: "selectedItem:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedItem"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
args: ["anObject"],
source: "selectedItem: anObject\x0a\x09selectedItem := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
category: 'events',
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(_st(self["@hiddenInput"])._asJQuery())._unbind_("keydown");
_st(_st(self["@hiddenInput"])._asJQuery())._keydown_((function(e){
var selected;
return smalltalk.withContext(function($ctx2) {selected=_st(window)._jQuery_(".focused .nav-pills .active");
selected;
$1=_st(_st(e)._which()).__eq((38));
if(smalltalk.assert($1)){
_st(self)._activateListItem_(_st(selected)._prev());
};
$2=_st(_st(e)._which()).__eq((40));
if(smalltalk.assert($2)){
next=_st(selected)._next();
next;
$3=_st(next)._get_((0));
if(($receiver = $3) == nil || $receiver == undefined){
next=_st(window)._jQuery_(".focused .nav-pills li:first-child");
next;
} else {
$3;
};
return _st(self)._activateListItem_(next);
};
}, function($ctx2) {$ctx2.fillBlock({e:e,selected:selected},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{next:next}, smalltalk.HLListWidget)})},
args: [],
source: "setupKeyBindings\x0a\x09| next |\x0a\x09hiddenInput asJQuery unbind: 'keydown'.\x0a\x0a\x09hiddenInput asJQuery keydown: [ :e | | selected |\x0a    \x09selected := window jQuery: '.focused .nav-pills .active'.\x0a        e which = 38 ifTrue: [ \x0a        \x09self activateListItem: selected prev ].\x0a      \x09e which = 40 ifTrue: [\x0a          \x09next := selected next.\x0a            (next get: 0) ifNil: [ next := window jQuery: '.focused .nav-pills li:first-child' ].\x0a\x09\x09\x09self activateListItem: next ] ]",
messageSends: ["unbind:", "asJQuery", "keydown:", "jQuery:", "ifTrue:", "activateListItem:", "prev", "=", "which", "next", "ifNil:", "get:"],
referencedClasses: []
}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{}, smalltalk.HLNavigationListWidget)})},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@next"]=aWidget;
$1=_st(_st(aWidget)._previous()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._previous_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget}, smalltalk.HLNavigationListWidget)})},
args: ["aWidget"],
source: "next: aWidget\x0a\x09next := aWidget.\x0a    aWidget previous = self ifFalse: [ aWidget previous: self ]",
messageSends: ["ifFalse:", "previous:", "=", "previous"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_nextFocus",
smalltalk.method({
selector: "nextFocus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._next();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._next())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFocus",{}, smalltalk.HLNavigationListWidget)})},
args: [],
source: "nextFocus\x0a\x09self next ifNotNil: [ self next focus ]",
messageSends: ["ifNotNil:", "focus", "next"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{}, smalltalk.HLNavigationListWidget)})},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous_",
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@previous"]=aWidget;
$1=_st(_st(aWidget)._next()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._next_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget}, smalltalk.HLNavigationListWidget)})},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09previous := aWidget.\x0a    aWidget next = self ifFalse: [ aWidget next: self ]",
messageSends: ["ifFalse:", "next:", "=", "next"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previousFocus",
smalltalk.method({
selector: "previousFocus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._previous();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._previous())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"previousFocus",{}, smalltalk.HLNavigationListWidget)})},
args: [],
source: "previousFocus\x0a\x09self previous ifNotNil: [ self previous focus ]",
messageSends: ["ifNotNil:", "focus", "previous"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.HLListWidget.fn.prototype._setupKeyBindings.apply(_st(self), []);
_st(_st(self["@hiddenInput"])._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(e)._which()).__eq((39));
if(smalltalk.assert($1)){
_st(self)._nextFocus();
};
$2=_st(_st(e)._which()).__eq((37));
if(smalltalk.assert($2)){
return _st(self)._previousFocus();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{}, smalltalk.HLNavigationListWidget)})},
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x0a\x09hiddenInput asJQuery keydown: [ :e |\x0a        e which = 39 ifTrue: [ \x0a        \x09self nextFocus ].\x0a\x09\x09e which = 37 ifTrue: [ \x0a        \x09self previousFocus ] ]",
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment', 'history'], 'Helios-Core');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._keyBinder())._flushBindings();
self["@activeTab"]=aTab;
$1=self;
_st($1)._refresh();
_st($1)._addToHistory_(aTab);
$2=_st($1)._show_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "activate: aTab\x0a\x09self keyBinder flushBindings.\x0a\x09activeTab := aTab.\x0a\x09\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09addToHistory: aTab;\x0a\x09\x09show: aTab",
messageSends: ["flushBindings", "keyBinder", "refresh", "addToHistory:", "show:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@activeTab"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{}, smalltalk.HLManager)})},
args: [],
source: "activeTab\x0a\x09^ activeTab",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._add_(aTab);
_st(self)._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a    self activate: aTab",
messageSends: ["add:", "tabs", "activate:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_addToHistory_",
smalltalk.method({
selector: "addToHistory:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._removeFromHistory_(aTab);
_st(_st(self)._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "addToHistory: aTab\x0a\x09self removeFromHistory: aTab.\x0a\x09self history add: aTab",
messageSends: ["removeFromHistory:", "add:", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_defaultEnvironment",
smalltalk.method({
selector: "defaultEnvironment",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLLocalEnvironment || HLLocalEnvironment))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{}, smalltalk.HLManager)})},
args: [],
source: "defaultEnvironment\x0a\x09^ HLLocalEnvironment new",
messageSends: ["new"],
referencedClasses: ["HLLocalEnvironment"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@environment"]=_st(self)._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLManager)})},
args: [],
source: "environment\x0a\x09\x22The default environment used by all Helios objects\x22\x0a    \x0a\x09^ environment ifNil: [ environment := self defaultEnvironment ]",
messageSends: ["ifNil:", "defaultEnvironment"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLManager)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_history",
smalltalk.method({
selector: "history",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@history"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@history"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{}, smalltalk.HLManager)})},
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_history_",
smalltalk.method({
selector: "history:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@history"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{aCollection:aCollection}, smalltalk.HLManager)})},
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLWidget.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._keyBinder())._setupEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLManager)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self keyBinder setupEvents",
messageSends: ["initialize", "setupEvents", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@keyBinder"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyBinder"]=_st((smalltalk.HLKeyBinder || HLKeyBinder))._new();
$1=self["@keyBinder"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{}, smalltalk.HLManager)})},
args: [],
source: "keyBinder\x0a\x09^ keyBinder ifNil: [ keyBinder := HLKeyBinder new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLKeyBinder"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_(".navbar"))._remove();
_st(_st(window)._jQuery_("#container"))._remove();
_st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLManager)})},
args: [],
source: "refresh\x0a\x09(window jQuery: '.navbar') remove.\x0a\x09(window jQuery: '#container') remove.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeActiveTab",
smalltalk.method({
selector: "removeActiveTab",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._removeTab_(_st(self)._activeTab());
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{}, smalltalk.HLManager)})},
args: [],
source: "removeActiveTab\x0a\x09self removeTab: self activeTab",
messageSends: ["removeTab:", "activeTab"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeFromHistory_",
smalltalk.method({
selector: "removeFromHistory:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._history_(_st(_st(self)._history())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq_eq(aTab);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "removeFromHistory: aTab\x0a\x09self history: (self history reject: [ :each | each == aTab ])",
messageSends: ["history:", "reject:", "==", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._tabs())._includes_(aTab);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._removeFromHistory_(aTab);
_st(_st(self)._tabs())._remove_(aTab);
_st(self)._refresh();
_st(_st(self)._history())._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._history())._last())._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "removeTab: aTab\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self removeFromHistory: aTab.\x0a\x09self tabs remove: aTab.\x0a\x09self refresh.\x0a\x09self history ifNotEmpty: [\x0a\x09\x09self history last activate ]",
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "refresh", "ifNotEmpty:", "activate", "last", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderAddOn_",
smalltalk.method({
selector: "renderAddOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$7,$8,$6,$2;
$1=_st(html)._li();
_st($1)._class_("dropdown");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._a();
_st($3)._class_("dropdown-toggle");
_st($3)._at_put_("data-toggle","dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(html)._with_("Open...");
return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._ul();
_st($5)._class_("dropdown-menu");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(_st((smalltalk.HLWidget || HLWidget))._withAllSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(each)._canBeOpenAsTab();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {return _st(_st(a)._tabPriority()).__lt(_st(b)._tabPriority());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {$7=_st(html)._a();
_st($7)._with_(_st(each)._tabLabel());
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {return _st(each)._openAsTab();
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html}, smalltalk.HLManager)})},
args: ["html"],
source: "renderAddOn: html\x0a    html li \x0a    \x09class: 'dropdown';\x0a        with: [ \x0a\x09\x09\x09html a \x0a        \x09\x09class: 'dropdown-toggle';\x0a           \x09 \x09at: 'data-toggle' put: 'dropdown';\x0a            \x09with: [ \x0a            \x09\x09html with: 'Open...'.\x0a  \x09\x09\x09\x09\x09(html tag: 'b') class: 'caret' ].\x0a           html ul \x0a           \x09\x09class: 'dropdown-menu';\x0a                with: [\x0a                  \x09((HLWidget withAllSubclasses\x0a                    \x09select: [ :each | each canBeOpenAsTab ])\x0a                        sorted: [ :a :b | a tabPriority < b tabPriority ])\x0a                        do: [ :each |\x0a  \x09\x09\x09\x09\x09\x09\x09html li with: [\x0a                      \x09\x09\x09html a \x0a                                \x09with: each tabLabel;\x0a      \x09\x09\x09\x09\x09\x09\x09\x09onClick: [ each openAsTab ] ] ] ] ]",
messageSends: ["class:", "li", "with:", "a", "at:put:", "tag:", "ul", "do:", "tabLabel", "onClick:", "openAsTab", "sorted:", "<", "tabPriority", "select:", "canBeOpenAsTab", "withAllSubclasses"],
referencedClasses: ["HLWidget"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("navbar navbar-fixed-top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._div();
_st($3)._class_("navbar-inner");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderTabsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._div())._id_("container");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLManager)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'navbar navbar-fixed-top';\x0a\x09\x09with: [ html div \x0a\x09\x09\x09class: 'navbar-inner';\x0a\x09\x09\x09with: [ self renderTabsOn: html ] ].\x0a\x09html div id: 'container'",
messageSends: ["class:", "div", "with:", "renderTabsOn:", "id:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$6,$5,$8,$9,$7,$2;
$1=_st(html)._ul();
_st($1)._class_("nav");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {$3=_st(html)._li();
$4=$3;
$6=_st(each)._isActive();
if(smalltalk.assert($6)){
$5="active";
} else {
$5="inactive";
};
_st($4)._class_($5);
$7=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {$8=_st(html)._a();
_st($8)._with_((function(){
return smalltalk.withContext(function($ctx5) {_st(_st(_st(html)._tag_("i"))._class_("icon-remove-circle"))._onClick_((function(){
return smalltalk.withContext(function($ctx6) {return _st(self)._removeTab_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return _st(html)._with_(_st(each)._label());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {return _st(each)._activate();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._renderAddOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html}, smalltalk.HLManager)})},
args: ["html"],
source: "renderTabsOn: html\x0a\x09html ul \x0a\x09\x09class: 'nav';\x0a\x09\x09with: [ \x0a        \x09self tabs do: [ :each |\x0a\x09\x09\x09\x09html li \x0a\x09\x09\x09\x09\x09class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09with: [\x0a      \x09\x09\x09\x09\x09\x09\x09((html tag: 'i') class: 'icon-remove-circle')\x0a  \x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self removeTab: each ].\x0a                              \x09html with: each label ];\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ each activate ] ] ].\x0a\x09\x09\x09self renderAddOn: html ]",
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "onClick:", "removeTab:", "tag:", "label", "a", "activate", "tabs", "renderAddOn:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'rendering',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_("#container"))._empty();
_st(_st(aTab)._widget())._appendToJQuery_(_st("#container")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab}, smalltalk.HLManager)})},
args: ["aTab"],
source: "show: aTab\x0a\x09(window jQuery: '#container') empty.\x0a\x09aTab widget appendToJQuery: '#container' asJQuery",
messageSends: ["empty", "jQuery:", "appendToJQuery:", "asJQuery", "widget"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{}, smalltalk.HLManager)})},
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ tabs := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(_st(self)._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HLManager.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self basicNew initialize ]",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLManager.klass)})},
args: [],
source: "initialize\x0a\x09self current appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "current"],
referencedClasses: []
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.HLManager.klass)})},
args: [],
source: "new\x0a\x09\x22Use current instead\x22\x0a\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLSUnit.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLSUnit.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'SUnit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (1000);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLSUnit.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 1000",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLTranscript.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLTranscript.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Transcript'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (600);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLTranscript.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 600",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTranscript.klass);


