smalltalk.addPackage('Helios-Widgets', {});
smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios-Widgets');
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
    $1 = smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []);
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


smalltalk.addClass('HLWidget', smalltalk.Widget, ['rootDiv'], 'Helios-Widgets');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anObject]);
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_manager", []), "_announcer", []);
    return $1;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    smalltalk.send(self, "_subscribe", []);
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []);
    return $1;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (anAnnouncement, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncement, aBlock]);
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function () {
    var self = this;
    if (($receiver = self['@rootDiv']) == nil || $receiver == undefined) {
        return self;
    } else {
        self['@rootDiv'];
    }
    smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_empty", []);
    smalltalk.send(function (html) {return smalltalk.send(self, "_renderContentOn_", [html]);}, "_appendToJQuery_", [smalltalk.send(self['@rootDiv'], "_asJQuery", [])]);
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
fn: function (html) {
    var self = this;
    self['@rootDiv'] = smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html]);}]);
    return self;
}
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
fn: function () {
    var self = this;
    return self;
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
    smalltalk.send(smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [smalltalk.send(self, "_new", []), smalltalk.send(self, "_tabLabel", [])])]);
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


smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['environment', 'selectedPackage', 'selectedClass', 'packagesListWidget', 'classesListWidget'], 'Helios-Widgets');
smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@classesListWidget']) == nil ||
        $receiver == undefined) {
        self['@classesListWidget'] = smalltalk.send(smalltalk.HLClassesListWidget || HLClassesListWidget, "_on_", [self]);
        $1 = self['@classesListWidget'];
    } else {
        $1 = self['@classesListWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@environment']) == nil || $receiver == undefined) {
        self['@environment'] = smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []);
        $1 = self['@environment'];
    } else {
        $1 = self['@environment'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

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
smalltalk.HLBrowser);

smalltalk.addMethod(
"_packagesListWidget",
smalltalk.method({
selector: "packagesListWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@packagesListWidget']) == nil ||
        $receiver == undefined) {
        self['@packagesListWidget'] = smalltalk.send(smalltalk.HLPackagesListWidget || HLPackagesListWidget, "_on_", [self]);
        $1 = self['@packagesListWidget'];
    } else {
        $1 = self['@packagesListWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
smalltalk.send(html,"_with_",[smalltalk.send((smalltalk.HLContainer || HLContainer),"_with_",[smalltalk.send((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send(self,"_packagesListWidget",[]),smalltalk.send(self,"_classesListWidget",[])]),smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",["Protocols","Methods"])]),"Source Code"])])]);
return self}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderTopPanesOn_",
smalltalk.method({
selector: "renderTopPanesOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["pane"]);
    $2 = smalltalk.send($1, "_with_", [smalltalk.send(self, "_packagesListWidget", [])]);
    $3 = smalltalk.send(html, "_div", []);
    smalltalk.send($3, "_class_", ["pane"]);
    $4 = smalltalk.send($3, "_with_", [smalltalk.send(self, "_classesListWidget", [])]);
    $5 = smalltalk.send(html, "_div", []);
    smalltalk.send($5, "_class_", ["pane"]);
    $6 = smalltalk.send($5, "_with_", ["hello"]);
    $7 = smalltalk.send(html, "_div", []);
    smalltalk.send($7, "_class_", ["pane"]);
    $8 = smalltalk.send($7, "_with_", ["world"]);
    return self;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_selectPackage_",
smalltalk.method({
selector: "selectPackage:",
fn: function (aPackage) {
    var self = this;
    self['@selectedPackage'] = aPackage;
    self['@selectedClass'] = nil;
    smalltalk.send(smalltalk.send(self, "_classesListWidget", []), "_package_", [aPackage]);
    return self;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function () {
    var self = this;
    return self['@selectedPackage'];
}
}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@nextId']) == nil || $receiver == undefined) {
        self['@nextId'] = 0;
        self['@nextId'];
    } else {
        self['@nextId'];
    }
    $1 = smalltalk.send("browser_", "__comma", [smalltalk.send(smalltalk.send(self['@nextId'], "__plus", [1]), "_asString", [])]);
    return $1;
}
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "Browser";
}
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 0;
}
}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Widgets');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, ['hiddenInput'], 'Helios-Widgets');
smalltalk.addMethod(
"_blur",
smalltalk.method({
selector: "blur",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_removeClass_", [smalltalk.send(self, "_focusClass", [])]);
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
    smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_addClass_", [smalltalk.send(self, "_focusClass", [])]);
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
    $1 = smalltalk.send(smalltalk.send(self['@rootDiv'], "_notNil", []), "_and_", [function () {return smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_hasClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
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
    smalltalk.send($1, "_onBlur_", [function () {return smalltalk.send(self, "_blur", []);}]);
    $2 = smalltalk.send($1, "_onFocus_", [function () {return smalltalk.send(self, "_focus", []);}]);
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
    smalltalk.send(self, "_renderHiddenInputOn_", [html]);
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["hl_widget"]);
    smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_focus", []);}]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html]);}]);
    self['@rootDiv'] = $2;
    return self;
}
}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Widgets');
smalltalk.addMethod(
"_activateListItem_",
smalltalk.method({
selector: "activateListItem:",
fn: function (aListItem) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aListItem, "_asJQuery", []), "_parent", []), "_children", []), "_removeClass_", ["active"]);
    smalltalk.send(smalltalk.send(aListItem, "_asJQuery", []), "_addClass_", ["active"]);
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
"_items",
smalltalk.method({
selector: "items",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclassResponsibility", []);
    return $1;
}
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["nav nav-pills nav-stacked"]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(smalltalk.send(self, "_items", []), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);}]);
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
    $1 = smalltalk.send(li, "_with_", [function () {$2 = smalltalk.send(html, "_a", []);smalltalk.send($2, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", [smalltalk.send(anObject, "_heliosListIcon", [])]);return smalltalk.send(self, "_renderItemLabel_on_", [anObject, html]);}]);$3 = smalltalk.send($2, "_onClick_", [function () {smalltalk.send(self, "_activateListItem_", [li]);return smalltalk.send(self, "_selectItem_", [anObject]);}]);return $3;}]);
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
    var $1;
    if (($receiver = self['@selectedItem']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_items", []), "_ifNotEmpty_", [function () {return smalltalk.send(smalltalk.send(self, "_items", []), "_first", []);}]);
    } else {
        $1 = self['@selectedItem'];
    }
    return $1;
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



smalltalk.addClass('HLBrowserListWidget', smalltalk.HLListWidget, ['browser'], 'Helios-Widgets');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
}
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowser) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_browser_", [aBrowser]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, ['package'], 'Helios-Widgets');
smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_package", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = [];
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_package", []), "_classes", []);
    }
    return $1;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function () {
    var self = this;
    return self['@package'];
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
fn: function (aPackage) {
    var self = this;
    self['@package'] = aPackage;
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Widgets');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_browser", []), "_environment", []);
    return $1;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_packages", []);
    return $1;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aPackage) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aPackage], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_browser", []), "_selectPackage_", [aPackage]);
    return self;
}
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLInspector', smalltalk.HLWidget, [], 'Helios-Widgets');


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Widgets');

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


smalltalk.addClass('HLTabManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'announcer'], 'Helios-Widgets');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
fn: function (aTab) {
    var self = this;
    var $1;
    self['@activeTab'] = aTab;
    smalltalk.send(self, "_refresh", []);
    $1 = smalltalk.send(self, "_show_", [aTab]);
    return self;
}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
fn: function () {
    var self = this;
    return self['@activeTab'];
}
}),
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@announcer']) == nil || $receiver == undefined) {
        self['@announcer'] = smalltalk.send(smalltalk.Announcer || Announcer, "_new", []);
        $1 = self['@announcer'];
    } else {
        $1 = self['@announcer'];
    }
    return $1;
}
}),
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);


smalltalk.HLTabManager.klass.iVarNames = ['current'];
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
smalltalk.HLTabManager.klass);

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
smalltalk.HLTabManager.klass);

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
smalltalk.HLTabManager.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Widgets');

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


smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, [], 'Helios-Widgets');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "Workspace";
}
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 10;
}
}),
smalltalk.HLWorkspace.klass);


smalltalk.addMethod(
"_heliosListIcon",
smalltalk.method({
selector: "heliosListIcon",
fn: function () {
    var self = this;
    return "";
}
}),
smalltalk.Object);

