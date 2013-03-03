smalltalk.addPackage('Helios-Core', {});
smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios-Core');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_manager", []), "_activate_", [self]);
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_manager", []), "_addTab_", [self]);
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_manager", []), "_activeTab", []), "__eq", [self]);
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@label']) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = self['@label'];
    }
    return $1;
},
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
fn: function (aString) {
    var self = this;
    self['@label'] = aString;
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLManager || HLManager, "_current", []);
    return $1;
},
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
fn: function () {
    var self = this;
    return self['@widget'];
},
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
fn: function (aWidget) {
    var self = this;
    self['@widget'] = aWidget;
    return self;
},
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
fn: function (aWidget, aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_widget_", [aWidget]);
    smalltalk.send($2, "_label_", [aString]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLManager || HLManager, "_current", []);
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_wrapper", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
        return self;
    } else {
    }
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_empty", []);
    smalltalk.send(function (html) {return smalltalk.send(self, "_renderContentOn_", [html]);}, "_appendToJQuery_", [smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", [])]);
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(self, "_registerBindingsOn_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_manager", []), "_keyBinder", []), "_bindings", [])]);
    return self;
},
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
fn: function (aBindingGroup) {
    var self = this;
    return self;
},
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
fn: function (html) {
    var self = this;
    return self;
},
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
smalltalk.send(self,"_registerBindings",[]);
self["@wrapper"]=smalltalk.send(html,"_div",[]);
smalltalk.send((function(renderer){
return smalltalk.send(self,"_renderContentOn_",[renderer]);
}),"_appendToJQuery_",[smalltalk.send(self["@wrapper"],"_asJQuery",[])]);
return self},
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
fn: function () {
    var self = this;
    return self['@wrapper'];
},
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
fn: function () {
    var self = this;
    return false;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [smalltalk.send(self, "_new", []), smalltalk.send(self, "_tabLabel", [])])]);
    return self;
},
args: [],
source: "openAsTab\x0a\x09HLManager current addTab: (HLTab on: self new labelled: self tabLabel)",
messageSends: ["addTab:", "on:labelled:", "new", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function () {
    var self = this;
    return "Tab";
},
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
fn: function () {
    var self = this;
    return 500;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_blur", []);
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_focus", []);
    return self;
},
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
fn: function () {
    var self = this;
    return "focused";
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_notNil", []), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_hasClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    return $1;
},
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
fn: function (html) {
    var self = this;
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_input", []);
    smalltalk.send($1, "_style_", ["position: absolute; left: -100000px;"]);
    smalltalk.send($1, "_onBlur_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_removeClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    $2 = smalltalk.send($1, "_onFocus_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_addClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    self['@hiddenInput'] = $2;
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(self, "_registerBindings", []);
    smalltalk.send(self, "_renderHiddenInputOn_", [html]);
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["hl_widget"]);
    smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_focus", []);}]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html]);}]);
    self['@wrapper'] = $2;
    return self;
},
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
smalltalk.send(self,"_activateListItem_",[smalltalk.send(window,"_jQuery_",[smalltalk.send(smalltalk.send(smalltalk.send(self["@wrapper"],"_asJQuery",[]),"_find_",["li"]),"_get_",[(0)])])]);
return self},
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
fn: function (aListItem) {
    var self = this;
    var $1, $2, $3;
    var parent;
    var position;
    $1 = smalltalk.send(aListItem, "_get_", [0]);
    if (($receiver = $1) == nil || $receiver == undefined) {
        return self;
    } else {
    }
    position = aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1;
    parent = smalltalk.send(aListItem, "_parent", []);
    smalltalk.send(smalltalk.send(parent, "_children", []), "_removeClass_", ["active"]);
    smalltalk.send(aListItem, "_addClass_", ["active"]);
    $2 = smalltalk.send(smalltalk.send(smalltalk.send(aListItem, "_position", []), "_top", []), "__lt", [0]);
    if (smalltalk.assert($2)) {
        smalltalk.send(smalltalk.send(parent, "_get_", [0]), "_scrollTop_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(parent, "_get_", [0]), "_scrollTop", []), "__plus", [smalltalk.send(smalltalk.send(aListItem, "_position", []), "_top", [])]), "__minus", [10])]);
    }
    $3 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aListItem, "_position", []), "_top", []), "__plus", [smalltalk.send(aListItem, "_height", [])]), "__gt", [smalltalk.send(parent, "_height", [])]);
    if (smalltalk.assert($3)) {
        smalltalk.send(smalltalk.send(parent, "_get_", [0]), "_scrollTop_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(parent, "_get_", [0]), "_scrollTop", []), "__plus", [smalltalk.send(aListItem, "_height", [])]), "__minus", [smalltalk.send(smalltalk.send(parent, "_height", []), "__minus", [smalltalk.send(smalltalk.send(aListItem, "_position", []), "_top", [])])]), "__plus", [10])]);
    }
    smalltalk.send(self, "_selectItem_", [smalltalk.send(smalltalk.send(self, "_items", []), "_at_", [smalltalk.send(smalltalk.send(aListItem, "_attr_", ["list-data"]), "_asNumber", [])])]);
    return self;
},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| parent position |\x0a    \x0a\x09(aListItem get: 0) ifNil: [ ^self ].\x0a\x0a\x09<position = aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1>.\x0a\x0a    parent := aListItem parent.\x0a\x09parent children removeClass: 'active'.\x0a\x09aListItem addClass: 'active'.\x0a    \x0a    \x22Move the scrollbar to show the active element\x22\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].\x0a        \x0a   \x22Activate the corresponding item\x22\x0a   self selectItem: (self items at: (aListItem attr: 'list-data') asNumber)",
messageSends: ["ifNil:", "get:", "parent", "removeClass:", "children", "addClass:", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "<", "height", ">", "selectItem:", "at:", "asNumber", "attr:", "items"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_cssClassForItem_",
smalltalk.method({
selector: "cssClassForItem:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(smalltalk.send(self, "_selectedItem", []), "__eq", [anObject]);
    if (smalltalk.assert($2)) {
        $1 = "active";
    } else {
        $1 = "inactive";
    }
    return $1;
},
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
fn: function () {
    var self = this;
    return [];
},
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
var $1,$2;
smalltalk.send(self,"_focus",[],smalltalk.HLFocusableWidget);
$1=smalltalk.send(smalltalk.send(self,"_items",[]),"_isEmpty",[]);
if(! smalltalk.assert($1)){
$2=smalltalk.send(self,"_selectedItem",[]);
if(($receiver = $2) == nil || $receiver == undefined){
smalltalk.send(self,"_activateFirstListItem",[]);
} else {
$2;
};
};
return self},
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
fn: function (anObject) {
    var self = this;
    return "";
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@items']) == nil || $receiver == undefined) {
        self['@items'] = smalltalk.send(self, "_defaultItems", []);
        $1 = self['@items'];
    } else {
        $1 = self['@items'];
    }
    return $1;
},
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
fn: function (aCollection) {
    var self = this;
    self['@items'] = aCollection;
    return self;
},
args: ["aCollection"],
source: "items: aCollection\x0a\x09items := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["nav nav-pills nav-stacked"]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(self, "_renderListOn_", [html]);}]);
    $3 = smalltalk.send(html, "_div", []);
    smalltalk.send($3, "_class_", ["pane_actions form-actions"]);
    $4 = smalltalk.send($3, "_with_", [function () {return smalltalk.send(self, "_renderButtonsOn_", [html]);}]);
    smalltalk.send(self, "_setupKeyBindings", []);
    return self;
},
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
fn: function (anObject, html) {
    var self = this;
    var $2, $3, $1;
    var li;
    li = smalltalk.send(html, "_li", []);
    smalltalk.send(li, "_class_", [smalltalk.send(self, "_cssClassForItem_", [anObject])]);
    smalltalk.send(li, "_at_put_", ["list-data", smalltalk.send(smalltalk.send(smalltalk.send(self, "_items", []), "_indexOf_", [anObject]), "_asString", [])]);
    $1 = smalltalk.send(li, "_with_", [function () {$2 = smalltalk.send(html, "_a", []);smalltalk.send($2, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", [smalltalk.send(self, "_iconForItem_", [anObject])]);return smalltalk.send(self, "_renderItemLabel_on_", [anObject, html]);}]);$3 = smalltalk.send($2, "_onClick_", [function () {return smalltalk.send(self, "_activateListItem_", [smalltalk.send(li, "_asJQuery", [])]);}]);return $3;}]);
    return self;
},
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
fn: function (anObject, html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(anObject, "_asString", [])]);
    return self;
},
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
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_items", []), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);
    return self;
},
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
fn: function (anObject) {
    var self = this;
    smalltalk.send(self, "_selectedItem_", [anObject]);
    return self;
},
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
fn: function () {
    var self = this;
    return self['@selectedItem'];
},
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
fn: function (anObject) {
    var self = this;
    self['@selectedItem'] = anObject;
    return self;
},
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
fn: function () {
    var self = this;
    var $1, $2, $3;
    var next;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_unbind_", ["keydown"]);
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_keydown_", [function (e) {var selected;selected = smalltalk.send(window, "_jQuery_", [".focused .nav-pills .active"]);$1 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [38]);if (smalltalk.assert($1)) {smalltalk.send(self, "_activateListItem_", [smalltalk.send(selected, "_prev", [])]);}$2 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [40]);if (smalltalk.assert($2)) {next = smalltalk.send(selected, "_next", []);next;$3 = smalltalk.send(next, "_get_", [0]);if (($receiver = $3) == nil || $receiver == undefined) {next = smalltalk.send(window, "_jQuery_", [".focused .nav-pills li:first-child"]);next;} else {$3;}return smalltalk.send(self, "_activateListItem_", [next]);}}]);
    return self;
},
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
fn: function () {
    var self = this;
    return self['@next'];
},
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
fn: function (aWidget) {
    var self = this;
    var $1;
    self['@next'] = aWidget;
    $1 = smalltalk.send(smalltalk.send(aWidget, "_previous", []), "__eq", [self]);
    if (!smalltalk.assert($1)) {
        smalltalk.send(aWidget, "_previous_", [self]);
    }
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_next", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(smalltalk.send(self, "_next", []), "_focus", []);
    }
    return self;
},
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
fn: function () {
    var self = this;
    return self['@previous'];
},
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
fn: function (aWidget) {
    var self = this;
    var $1;
    self['@previous'] = aWidget;
    $1 = smalltalk.send(smalltalk.send(aWidget, "_next", []), "__eq", [self]);
    if (!smalltalk.assert($1)) {
        smalltalk.send(aWidget, "_next_", [self]);
    }
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_previous", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(smalltalk.send(self, "_previous", []), "_focus", []);
    }
    return self;
},
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
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self, "_setupKeyBindings", [], smalltalk.HLListWidget);
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_keydown_", [function (e) {$1 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [39]);if (smalltalk.assert($1)) {smalltalk.send(self, "_nextFocus", []);}$2 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [37]);if (smalltalk.assert($2)) {return smalltalk.send(self, "_previousFocus", []);}}]);
    return self;
},
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x0a\x09hiddenInput asJQuery keydown: [ :e |\x0a        e which = 39 ifTrue: [ \x0a        \x09self nextFocus ].\x0a\x09\x09e which = 37 ifTrue: [ \x0a        \x09self previousFocus ] ]",
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment'], 'Helios-Core');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
category: 'actions',
fn: function (aTab) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(self, "_keyBinder", []), "_flushBindings", []);
    self['@activeTab'] = aTab;
    smalltalk.send(self, "_refresh", []);
    $1 = smalltalk.send(self, "_show_", [aTab]);
    return self;
},
args: ["aTab"],
source: "activate: aTab\x0a\x09self keyBinder flushBindings.\x0a\x09activeTab := aTab.\x0a    \x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09show: aTab",
messageSends: ["flushBindings", "keyBinder", "refresh", "show:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@activeTab'];
},
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
fn: function (aTab) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aTab]);
    smalltalk.send(self, "_activate_", [aTab]);
    return self;
},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a    self activate: aTab",
messageSends: ["add:", "tabs", "activate:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_defaultEnvironment",
smalltalk.method({
selector: "defaultEnvironment",
category: 'defaults',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLLocalEnvironment || HLLocalEnvironment, "_new", []);
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@environment']) == nil || $receiver == undefined) {
        self['@environment'] = smalltalk.send(self, "_defaultEnvironment", []);
        $1 = self['@environment'];
    } else {
        $1 = self['@environment'];
    }
    return $1;
},
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
fn: function (anEnvironment) {
    var self = this;
    self['@environment'] = anEnvironment;
    return self;
},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.HLWidget);
    smalltalk.send(smalltalk.send(self, "_keyBinder", []), "_setupEvents", []);
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@keyBinder']) == nil || $receiver == undefined) {
        self['@keyBinder'] = smalltalk.send(smalltalk.HLKeyBinder || HLKeyBinder, "_new", []);
        $1 = self['@keyBinder'];
    } else {
        $1 = self['@keyBinder'];
    }
    return $1;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", [".navbar"]), "_remove", []);
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["#container"]), "_remove", []);
    smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
},
args: [],
source: "refresh\x0a\x09(window jQuery: '.navbar') remove.\x0a\x09(window jQuery: '#container') remove.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
category: 'actions',
fn: function (aTab) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_tabs", []), "_includes_", [aTab]);
    if (!smalltalk.assert($1)) {
        return self;
    }
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aTab]);
    smalltalk.send(self, "_refresh", []);
    return self;
},
args: ["aTab"],
source: "removeTab: aTab\x0a\x09\x22Todo: activate the previously activated tab. Keep a history of tabs selection\x22\x0a\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self tabs remove: aTab.\x0a\x09self refresh",
messageSends: ["ifFalse:", "includes:", "tabs", "remove:", "refresh"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderAddOn_",
smalltalk.method({
selector: "renderAddOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $7, $8, $6, $2;
    $1 = smalltalk.send(html, "_li", []);
    smalltalk.send($1, "_class_", ["dropdown"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_a", []);smalltalk.send($3, "_class_", ["dropdown-toggle"]);smalltalk.send($3, "_at_put_", ["data-toggle", "dropdown"]);$4 = smalltalk.send($3, "_with_", [function () {smalltalk.send(html, "_with_", ["Open..."]);return smalltalk.send(smalltalk.send(html, "_tag_", ["b"]), "_class_", ["caret"]);}]);$4;$5 = smalltalk.send(html, "_ul", []);smalltalk.send($5, "_class_", ["dropdown-menu"]);$6 = smalltalk.send($5, "_with_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.HLWidget || HLWidget, "_withAllSubclasses", []), "_select_", [function (each) {return smalltalk.send(each, "_canBeOpenAsTab", []);}]), "_sorted_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_tabPriority", []), "__lt", [smalltalk.send(b, "_tabPriority", [])]);}]), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [function () {$7 = smalltalk.send(html, "_a", []);smalltalk.send($7, "_with_", [smalltalk.send(each, "_tabLabel", [])]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(each, "_openAsTab", []);}]);return $8;}]);}]);}]);return $6;}]);
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $3, $4, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["navbar navbar-fixed-top"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["navbar-inner"]);$4 = smalltalk.send($3, "_with_", [function () {return smalltalk.send(self, "_renderTabsOn_", [html]);}]);return $4;}]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["container"]);
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $3, $5, $4, $7, $8, $6, $2;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["nav"]);
    $2 = smalltalk.send($1, "_with_", [function () {smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {$3 = smalltalk.send(html, "_li", []);$5 = smalltalk.send(each, "_isActive", []);if (smalltalk.assert($5)) {$4 = "active";} else {$4 = "inactive";}smalltalk.send($3, "_class_", [$4]);$6 = smalltalk.send($3, "_with_", [function () {$7 = smalltalk.send(html, "_a", []);smalltalk.send($7, "_with_", [function () {smalltalk.send(smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", ["icon-remove-circle"]), "_onClick_", [function () {return smalltalk.send(self, "_removeTab_", [each]);}]);return smalltalk.send(html, "_with_", [smalltalk.send(each, "_label", [])]);}]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(each, "_activate", []);}]);return $8;}]);return $6;}]);return smalltalk.send(self, "_renderAddOn_", [html]);}]);
    return self;
},
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
fn: function (aTab) {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["#container"]), "_empty", []);
    smalltalk.send(smalltalk.send(aTab, "_widget", []), "_appendToJQuery_", [smalltalk.send("#container", "_asJQuery", [])]);
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@tabs']) == nil || $receiver == undefined) {
        self['@tabs'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
        $1 = self['@tabs'];
    } else {
        $1 = self['@tabs'];
    }
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@current']) == nil || $receiver == undefined) {
        self['@current'] = smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
        $1 = self['@current'];
    } else {
        $1 = self['@current'];
    }
    return $1;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_current", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
},
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
fn: function () {
    var self = this;
    return true;
},
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
fn: function () {
    var self = this;
    return "SUnit";
},
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
fn: function () {
    var self = this;
    return 1000;
},
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
fn: function () {
    var self = this;
    return true;
},
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
fn: function () {
    var self = this;
    return "Transcript";
},
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
fn: function () {
    var self = this;
    return 600;
},
args: [],
source: "tabPriority\x0a\x09^ 600",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTranscript.klass);


