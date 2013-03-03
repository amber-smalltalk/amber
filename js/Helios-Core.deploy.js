smalltalk.addPackage('Helios-Core', {});
smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios-Core');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_manager", []), "_activate_", [self]);
    return self;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_add",
smalltalk.method({
selector: "add",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_manager", []), "_addTab_", [self]);
    return self;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_manager", []), "_activeTab", []), "__eq", [self]);
    return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@label']) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = self['@label'];
    }
    return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
fn: function (aString) {
    var self = this;
    self['@label'] = aString;
    return self;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLManager || HLManager, "_current", []);
    return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
fn: function () {
    var self = this;
    return self['@widget'];
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget) {
    var self = this;
    self['@widget'] = aWidget;
    return self;
}
}),
smalltalk.HLTab);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
fn: function (aWidget, aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_widget_", [aWidget]);
    smalltalk.send($2, "_label_", [aString]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLManager || HLManager, "_current", []);
    return $1;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
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
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
fn: function () {
    var self = this;
    smalltalk.send(self, "_registerBindingsOn_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_manager", []), "_keyBinder", []), "_bindings", [])]);
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup) {
    var self = this;
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(self,"_registerBindings",[]);
self["@wrapper"]=smalltalk.send(html,"_div",[]);
smalltalk.send((function(renderer){
return smalltalk.send(self,"_renderContentOn_",[renderer]);
}),"_appendToJQuery_",[smalltalk.send(self["@wrapper"],"_asJQuery",[])]);
return self}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_wrapper",
smalltalk.method({
selector: "wrapper",
fn: function () {
    var self = this;
    return self['@wrapper'];
}
}),
smalltalk.HLWidget);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_openAsTab",
smalltalk.method({
selector: "openAsTab",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [smalltalk.send(self, "_new", []), smalltalk.send(self, "_tabLabel", [])])]);
    return self;
}
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "Tab";
}
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 500;
}
}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Core');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, ['hiddenInput'], 'Helios-Core');
smalltalk.addMethod(
"_blur",
smalltalk.method({
selector: "blur",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_blur", []);
    return self;
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_focus", []);
    return self;
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focusClass",
smalltalk.method({
selector: "focusClass",
fn: function () {
    var self = this;
    return "focused";
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_hasFocus",
smalltalk.method({
selector: "hasFocus",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_notNil", []), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_hasClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    return $1;
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderHiddenInputOn_",
smalltalk.method({
selector: "renderHiddenInputOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_input", []);
    smalltalk.send($1, "_style_", ["position: absolute; left: -100000px;"]);
    smalltalk.send($1, "_onBlur_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_removeClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    $2 = smalltalk.send($1, "_onFocus_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_addClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    self['@hiddenInput'] = $2;
    return self;
}
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
}
}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Core');
smalltalk.addMethod(
"_activateFirstListItem",
smalltalk.method({
selector: "activateFirstListItem",
fn: function (){
var self=this;
smalltalk.send(self,"_activateListItem_",[smalltalk.send(window,"_jQuery_",[smalltalk.send(smalltalk.send(smalltalk.send(self["@wrapper"],"_asJQuery",[]),"_find_",["li"]),"_get_",[(0)])])]);
return self}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_activateListItem_",
smalltalk.method({
selector: "activateListItem:",
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
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_cssClassForItem_",
smalltalk.method({
selector: "cssClassForItem:",
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
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
fn: function () {
    var self = this;
    return [];
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
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
return self}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (anObject) {
    var self = this;
    return "";
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
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
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items_",
smalltalk.method({
selector: "items:",
fn: function (aCollection) {
    var self = this;
    self['@items'] = aCollection;
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
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
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
fn: function (anObject, html) {
    var self = this;
    var $2, $3, $1;
    var li;
    li = smalltalk.send(html, "_li", []);
    smalltalk.send(li, "_class_", [smalltalk.send(self, "_cssClassForItem_", [anObject])]);
    smalltalk.send(li, "_at_put_", ["list-data", smalltalk.send(smalltalk.send(smalltalk.send(self, "_items", []), "_indexOf_", [anObject]), "_asString", [])]);
    $1 = smalltalk.send(li, "_with_", [function () {$2 = smalltalk.send(html, "_a", []);smalltalk.send($2, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", [smalltalk.send(self, "_iconForItem_", [anObject])]);return smalltalk.send(self, "_renderItemLabel_on_", [anObject, html]);}]);$3 = smalltalk.send($2, "_onClick_", [function () {return smalltalk.send(self, "_activateListItem_", [smalltalk.send(li, "_asJQuery", [])]);}]);return $3;}]);
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (anObject, html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(anObject, "_asString", [])]);
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_items", []), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (anObject) {
    var self = this;
    smalltalk.send(self, "_selectedItem_", [anObject]);
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
fn: function () {
    var self = this;
    return self['@selectedItem'];
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem_",
smalltalk.method({
selector: "selectedItem:",
fn: function (anObject) {
    var self = this;
    self['@selectedItem'] = anObject;
    return self;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
fn: function () {
    var self = this;
    var $1, $2, $3;
    var next;
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_unbind_", ["keydown"]);
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_keydown_", [function (e) {var selected;selected = smalltalk.send(window, "_jQuery_", [".focused .nav-pills .active"]);$1 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [38]);if (smalltalk.assert($1)) {smalltalk.send(self, "_activateListItem_", [smalltalk.send(selected, "_prev", [])]);}$2 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [40]);if (smalltalk.assert($2)) {next = smalltalk.send(selected, "_next", []);next;$3 = smalltalk.send(next, "_get_", [0]);if (($receiver = $3) == nil || $receiver == undefined) {next = smalltalk.send(window, "_jQuery_", [".focused .nav-pills li:first-child"]);next;} else {$3;}return smalltalk.send(self, "_activateListItem_", [next]);}}]);
    return self;
}
}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
    var self = this;
    return self['@next'];
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (aWidget) {
    var self = this;
    var $1;
    self['@next'] = aWidget;
    $1 = smalltalk.send(smalltalk.send(aWidget, "_previous", []), "__eq", [self]);
    if (!smalltalk.assert($1)) {
        smalltalk.send(aWidget, "_previous_", [self]);
    }
    return self;
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_nextFocus",
smalltalk.method({
selector: "nextFocus",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_next", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(smalltalk.send(self, "_next", []), "_focus", []);
    }
    return self;
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function () {
    var self = this;
    return self['@previous'];
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous_",
smalltalk.method({
selector: "previous:",
fn: function (aWidget) {
    var self = this;
    var $1;
    self['@previous'] = aWidget;
    $1 = smalltalk.send(smalltalk.send(aWidget, "_next", []), "__eq", [self]);
    if (!smalltalk.assert($1)) {
        smalltalk.send(aWidget, "_next_", [self]);
    }
    return self;
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previousFocus",
smalltalk.method({
selector: "previousFocus",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_previous", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(smalltalk.send(self, "_previous", []), "_focus", []);
    }
    return self;
}
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
fn: function () {
    var self = this;
    var $1, $2;
    smalltalk.send(self, "_setupKeyBindings", [], smalltalk.HLListWidget);
    smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_keydown_", [function (e) {$1 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [39]);if (smalltalk.assert($1)) {smalltalk.send(self, "_nextFocus", []);}$2 = smalltalk.send(smalltalk.send(e, "_which", []), "__eq", [37]);if (smalltalk.assert($2)) {return smalltalk.send(self, "_previousFocus", []);}}]);
    return self;
}
}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment'], 'Helios-Core');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
fn: function (aTab) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(self, "_keyBinder", []), "_flushBindings", []);
    self['@activeTab'] = aTab;
    smalltalk.send(self, "_refresh", []);
    $1 = smalltalk.send(self, "_show_", [aTab]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
fn: function () {
    var self = this;
    return self['@activeTab'];
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aTab) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aTab]);
    smalltalk.send(self, "_activate_", [aTab]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_defaultEnvironment",
smalltalk.method({
selector: "defaultEnvironment",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLLocalEnvironment || HLLocalEnvironment, "_new", []);
    return $1;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
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
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment) {
    var self = this;
    self['@environment'] = anEnvironment;
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.HLWidget);
    smalltalk.send(smalltalk.send(self, "_keyBinder", []), "_setupEvents", []);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
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
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", [".navbar"]), "_remove", []);
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["#container"]), "_remove", []);
    smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
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
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderAddOn_",
smalltalk.method({
selector: "renderAddOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $7, $8, $6, $2;
    $1 = smalltalk.send(html, "_li", []);
    smalltalk.send($1, "_class_", ["dropdown"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_a", []);smalltalk.send($3, "_class_", ["dropdown-toggle"]);smalltalk.send($3, "_at_put_", ["data-toggle", "dropdown"]);$4 = smalltalk.send($3, "_with_", [function () {smalltalk.send(html, "_with_", ["Open..."]);return smalltalk.send(smalltalk.send(html, "_tag_", ["b"]), "_class_", ["caret"]);}]);$4;$5 = smalltalk.send(html, "_ul", []);smalltalk.send($5, "_class_", ["dropdown-menu"]);$6 = smalltalk.send($5, "_with_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.HLWidget || HLWidget, "_withAllSubclasses", []), "_select_", [function (each) {return smalltalk.send(each, "_canBeOpenAsTab", []);}]), "_sorted_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_tabPriority", []), "__lt", [smalltalk.send(b, "_tabPriority", [])]);}]), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [function () {$7 = smalltalk.send(html, "_a", []);smalltalk.send($7, "_with_", [smalltalk.send(each, "_tabLabel", [])]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(each, "_openAsTab", []);}]);return $8;}]);}]);}]);return $6;}]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["navbar navbar-fixed-top"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["navbar-inner"]);$4 = smalltalk.send($3, "_with_", [function () {return smalltalk.send(self, "_renderTabsOn_", [html]);}]);return $4;}]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["container"]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $5, $4, $7, $8, $6, $2;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["nav"]);
    $2 = smalltalk.send($1, "_with_", [function () {smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {$3 = smalltalk.send(html, "_li", []);$5 = smalltalk.send(each, "_isActive", []);if (smalltalk.assert($5)) {$4 = "active";} else {$4 = "inactive";}smalltalk.send($3, "_class_", [$4]);$6 = smalltalk.send($3, "_with_", [function () {$7 = smalltalk.send(html, "_a", []);smalltalk.send($7, "_with_", [function () {smalltalk.send(smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", ["icon-remove-circle"]), "_onClick_", [function () {return smalltalk.send(self, "_removeTab_", [each]);}]);return smalltalk.send(html, "_with_", [smalltalk.send(each, "_label", [])]);}]);$8 = smalltalk.send($7, "_onClick_", [function () {return smalltalk.send(each, "_activate", []);}]);return $8;}]);return $6;}]);return smalltalk.send(self, "_renderAddOn_", [html]);}]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (aTab) {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["#container"]), "_empty", []);
    smalltalk.send(smalltalk.send(aTab, "_widget", []), "_appendToJQuery_", [smalltalk.send("#container", "_asJQuery", [])]);
    return self;
}
}),
smalltalk.HLManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
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
}
}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
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
}
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_current", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    return self;
}
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
}
}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "SUnit";
}
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 1000;
}
}),
smalltalk.HLSUnit.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "Transcript";
}
}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 600;
}
}),
smalltalk.HLTranscript.klass);


