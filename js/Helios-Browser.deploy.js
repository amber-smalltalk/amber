smalltalk.addPackage('Helios-Browser', {});
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []);
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@classesListWidget']) == nil ||
        $receiver == undefined) {
        self['@classesListWidget'] = smalltalk.send(smalltalk.HLClassesListWidget || HLClassesListWidget, "_on_", [smalltalk.send(self, "_model", [])]);
        self['@classesListWidget'];
        $1 = smalltalk.send(self['@classesListWidget'], "_next_", [smalltalk.send(self, "_protocolsListWidget", [])]);
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
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_environment", []);
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_methodsListWidget",
smalltalk.method({
selector: "methodsListWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@methodsListWidget']) == nil ||
        $receiver == undefined) {
        self['@methodsListWidget'] = smalltalk.send(smalltalk.HLMethodsListWidget || HLMethodsListWidget, "_on_", [smalltalk.send(self, "_model", [])]);
        $1 = self['@methodsListWidget'];
    } else {
        $1 = self['@methodsListWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@model']) == nil || $receiver == undefined) {
        self['@model'] = smalltalk.send(smalltalk.HLBrowserModel || HLBrowserModel, "_new", []);
        $1 = self['@model'];
    } else {
        $1 = self['@model'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel) {
    var self = this;
    self['@model'] = aModel;
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
        self['@packagesListWidget'] = smalltalk.send(smalltalk.HLPackagesListWidget || HLPackagesListWidget, "_on_", [smalltalk.send(self, "_model", [])]);
        self['@packagesListWidget'];
        $1 = smalltalk.send(self['@packagesListWidget'], "_next_", [smalltalk.send(self, "_classesListWidget", [])]);
    } else {
        $1 = self['@packagesListWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_protocolsListWidget",
smalltalk.method({
selector: "protocolsListWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@protocolsListWidget']) == nil ||
        $receiver == undefined) {
        self['@protocolsListWidget'] = smalltalk.send(smalltalk.HLProtocolsListWidget || HLProtocolsListWidget, "_on_", [smalltalk.send(self, "_model", [])]);
        self['@protocolsListWidget'];
        $1 = smalltalk.send(self['@protocolsListWidget'], "_next_", [smalltalk.send(self, "_methodsListWidget", [])]);
    } else {
        $1 = self['@protocolsListWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup) {
    var self = this;
    var $1, $2;
    smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [66, "Browse"]);
    smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [71, "Go to"]);
    $1 = smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [84, "Toggle"]);
    smalltalk.send(smalltalk.send(smalltalk.HLBrowserCommand || HLBrowserCommand, "_withAllSubclasses", []), "_do_", [function (each) {$2 = smalltalk.send(each, "_key", []);if (($receiver = $2) == nil || $receiver == undefined) {return $2;} else {return smalltalk.send(smalltalk.send(aBindingGroup, "_at_", [smalltalk.send(each, "_bindingGroup", [])]), "_add_", [smalltalk.send(smalltalk.send(each, "_on_", [smalltalk.send(self, "_model", [])]), "_asBinding", [])]);}}]);
    return self;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.HLContainer || HLContainer, "_with_", [smalltalk.send(smalltalk.HLHorizontalSplitter || HLHorizontalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_packagesListWidget", []), smalltalk.send(self, "_classesListWidget", [])]), smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_protocolsListWidget", []), smalltalk.send(self, "_methodsListWidget", [])])]), smalltalk.send(self, "_sourceWidget", [])])])]);
    return self;
}
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_sourceWidget",
smalltalk.method({
selector: "sourceWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@sourceWidget']) == nil ||
        $receiver == undefined) {
        self['@sourceWidget'] = smalltalk.send(smalltalk.HLBrowserSourceWidget || HLBrowserSourceWidget, "_on_", [smalltalk.send(self, "_model", [])]);
        $1 = self['@sourceWidget'];
    } else {
        $1 = self['@sourceWidget'];
    }
    return $1;
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


smalltalk.addClass('HLBrowserListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    return self['@model'];
}
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    smalltalk.send(self, "_observeModel", []);
    return self;
}
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusMethodsListWidget",
smalltalk.method({
selector: "focusMethodsListWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLMethodsListFocus || HLMethodsListFocus, "_new", [])]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_focusProtocolsListWidget",
smalltalk.method({
selector: "focusProtocolsListWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLProtocolsListFocus || HLProtocolsListFocus, "_new", [])]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getChildrenOf_",
smalltalk.method({
selector: "getChildrenOf:",
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_items", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [aClass]);}]);
    return $1;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getRootClassesOf_",
smalltalk.method({
selector: "getRootClassesOf:",
fn: function (aCollection) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aCollection, "_select_", [function (each) {return smalltalk.send(smalltalk.send(smalltalk.send(each, "_allSuperclasses", []), "_intersection_", [aCollection]), "_isEmpty", []);}]);
    return $1;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (aClass) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_theNonMetaClass", []), "_comment", []), "_isEmpty", []);
    if (smalltalk.assert($2)) {
        $1 = "icon-question-sign";
    } else {
        $1 = "icon-none";
    }
    return $1;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []);
    smalltalk.send($1, "_on_do_", [smalltalk.HLPackageSelected || HLPackageSelected, function (ann) {return smalltalk.send(self, "_onPackageSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send($1, "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onShowInstanceToggled", []);}]);
    $2 = smalltalk.send($1, "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage) {
    var self = this;
    var $1;
    smalltalk.send(self, "_selectedItem_", [nil]);
    if (($receiver = aPackage) == nil || $receiver == undefined) {
        $1 = [];
    } else {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aPackage, "_classes", []), "_collect_", [function (each) {return smalltalk.send(each, "_theNonMetaClass", []);}]), "_asSet", []), "_asArray", []);
    }
    smalltalk.send(self, "_items_", [$1]);
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onShowInstanceToggled",
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $6, $7, $8, $2, $9, $10;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["btn-group"]);
    smalltalk.send($1, "_at_put_", ["data-toggle", "buttons-radio"]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_button", []);smalltalk.send($3, "_class_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {smalltalk.send(str, "_nextPutAll_", ["btn"]);$4 = smalltalk.send(self, "_showInstance", []);if (smalltalk.assert($4)) {return smalltalk.send(str, "_nextPutAll_", [" active"]);}}])]);smalltalk.send($3, "_with_", ["Instance"]);$5 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(self, "_showInstance_", [true]);}]);$5;$6 = smalltalk.send(html, "_button", []);smalltalk.send($6, "_class_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {smalltalk.send(str, "_nextPutAll_", ["btn"]);$7 = smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance", []);if (!smalltalk.assert($7)) {return smalltalk.send(str, "_nextPutAll_", [" active"]);}}])]);smalltalk.send($6, "_with_", ["Class"]);$8 = smalltalk.send($6, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [false]);}]);return $8;}]);
    $9 = smalltalk.send(html, "_button", []);
    smalltalk.send($9, "_class_", ["btn"]);
    smalltalk.send($9, "_at_put_", ["data-toggle", "button"]);
    $10 = smalltalk.send($9, "_with_", ["Comment"]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_level_on_",
smalltalk.method({
selector: "renderItem:level:on:",
fn: function (aClass, anInteger, html) {
    var self = this;
    var $2, $3, $1;
    var li;
    li = smalltalk.send(html, "_li", []);
    smalltalk.send(li, "_at_put_", ["list-data", smalltalk.send(smalltalk.send(self, "_items", []), "_indexOf_", [aClass])]);
    smalltalk.send(li, "_class_", [smalltalk.send(self, "_cssClassForItem_", [aClass])]);
    $1 = smalltalk.send(li, "_with_", [function () {$2 = smalltalk.send(html, "_a", []);smalltalk.send($2, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", [smalltalk.send(self, "_iconForItem_", [aClass])]);return smalltalk.send(self, "_renderItemLabel_level_on_", [aClass, anInteger, html]);}]);$3 = smalltalk.send($2, "_onClick_", [function () {return smalltalk.send(self, "_activateListItem_", [smalltalk.send(li, "_asJQuery", [])]);}]);return $3;}]);
    smalltalk.send(smalltalk.send(self, "_getChildrenOf_", [aClass]), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_level_on_", [each, smalltalk.send(anInteger, "__plus", [1]), html]);}]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
fn: function (aClass, html) {
    var self = this;
    smalltalk.send(self, "_renderItem_on_", [aClass, html], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_getChildrenOf_", [aClass]), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_level_on_", [each, 1, html]);}]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_level_on_",
smalltalk.method({
selector: "renderItemLabel:level:on:",
fn: function (aClass, anInteger, html) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(html, "_span", []), "_asJQuery", []), "_html_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {smalltalk.send(anInteger, "_timesRepeat_", [function () {return smalltalk.send(str, "_nextPutAll_", ["&nbsp;&nbsp;&nbsp;&nbsp;"]);}]);return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(aClass, "_name", [])]);}])]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aClass, html) {
    var self = this;
    smalltalk.send(self, "_renderItemLabel_level_on_", [aClass, 0, html]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_getRootClassesOf_", [smalltalk.send(self, "_items", [])]), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aClass], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass_", [aClass]);
    return self;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance", []);
    return $1;
}
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [aBoolean]);
    return self;
}
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLBrowserListWidget, ['selectorsCache'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_allProtocol", []);
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_flushSelectorsCache",
smalltalk.method({
selector: "flushSelectorsCache",
fn: function () {
    var self = this;
    self['@selectorsCache'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (aCompiledMethod) {
    var self = this;
    var $1;
    var override;
    var overriden;
    override = smalltalk.send(self, "_isOverride_", [aCompiledMethod]);
    overriden = smalltalk.send(self, "_isOverriden_", [aCompiledMethod]);
    if (smalltalk.assert(override)) {
        if (smalltalk.assert(overriden)) {
            $1 = "icon-resize-vertical";
        } else {
            $1 = "icon-arrow-up";
        }
    } else {
        if (smalltalk.assert(overriden)) {
            $1 = "icon-arrow-down";
        } else {
            $1 = "icon-none";
        }
    }
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.HLBrowserListWidget);
    smalltalk.send(self, "_flushSelectorsCache", []);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_overrideSelectors", []), "_includes_", [smalltalk.send(aMethod, "_selector", [])]);
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverriden_",
smalltalk.method({
selector: "isOverriden:",
fn: function (aMethod) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_overridenSelectors", []), "_includes_", [smalltalk.send(aMethod, "_selector", [])]);
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(aString, "__eq", [smalltalk.send(self, "_allProtocol", [])]);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_methods", []);
    } else {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_methodsInProtocol_", [aString]);
    }
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [nil]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLMethodSelected || HLMethodSelected, function (ann) {return smalltalk.send(self, "_onMethodSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aMethod) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString) {
    var self = this;
    var $2, $1;
    smalltalk.send(self, "_selectedItem_", [nil]);
    $2 = smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = [];
    } else {
        if (($receiver = aString) == nil || $receiver == undefined) {
            $1 = [];
        } else {
            $1 = smalltalk.send(self, "_methodsInProtocol_", [aString]);
        }
    }
    smalltalk.send(self, "_items_", [$1]);
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overrideSelectors",
smalltalk.method({
selector: "overrideSelectors",
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectorsCache", []), "_at_ifAbsentPut_", ["override", function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_allSuperclasses", []), "_inject_into_", [smalltalk.send(smalltalk.Set || Set, "_new", []), function (acc, each) {smalltalk.send(acc, "_addAll_", [smalltalk.send(each, "_selectors", [])]);$2 = smalltalk.send(acc, "_yourself", []);return $2;}]);}]);
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overridenSelectors",
smalltalk.method({
selector: "overridenSelectors",
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectorsCache", []), "_at_ifAbsentPut_", ["overriden", function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_allSubclasses", []), "_inject_into_", [smalltalk.send(smalltalk.Set || Set, "_new", []), function (acc, each) {smalltalk.send(acc, "_addAll_", [smalltalk.send(each, "_selectors", [])]);$2 = smalltalk.send(acc, "_yourself", []);return $2;}]);}]);
    return $1;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_renderContentOn_", [html], smalltalk.HLBrowserListWidget);
    } else {
        $2 = smalltalk.send(html, "_div", []);
        smalltalk.send($2, "_class_", ["class_side"]);
        $3 = smalltalk.send($2, "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html], smalltalk.HLBrowserListWidget);}]);
    }
    smalltalk.send(self, "_flushSelectorsCache", []);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aCompiledMethod, html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(aCompiledMethod, "_selector", [])]);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aCompiledMethod) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aCompiledMethod], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod_", [aCompiledMethod]);
    return self;
}
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
fn: function () {
    var self = this;
    return self['@selectorsCache'];
}
}),
smalltalk.HLMethodsListWidget);



smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusClassesListWidget",
smalltalk.method({
selector: "focusClassesListWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLClassesListFocus || HLClassesListFocus, "_new", [])]);
    return self;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_initializeItems",
smalltalk.method({
selector: "initializeItems",
fn: function () {
    var self = this;
    var $1;
    self['@items'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_packages", []), "_sort_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_name", []), "__lt", [smalltalk.send(b, "_name", [])]);}]);
    $1 = self['@items'];
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
    if (($receiver = self['@items']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_initializeItems", []);
    } else {
        $1 = self['@items'];
    }
    return $1;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLPackageSelected || HLPackageSelected, function (ann) {return smalltalk.send(self, "_onPackageSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
fn: function (aPackage) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
}
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3, $5, $6, $7, $8, $4, $9, $10;
    $1 = smalltalk.send(html, "_span", []);
    smalltalk.send($1, "_class_", ["info"]);
    $2 = smalltalk.send($1, "_with_", ["Auto commit"]);
    $3 = smalltalk.send(html, "_div", []);
    smalltalk.send($3, "_class_", ["btn-group switch"]);
    smalltalk.send($3, "_at_put_", ["data-toggle", "buttons-radio"]);
    $4 = smalltalk.send($3, "_with_", [function () {$5 = smalltalk.send(html, "_button", []);smalltalk.send($5, "_class_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {return smalltalk.send(str, "_nextPutAll_", ["btn"]);}])]);$6 = smalltalk.send($5, "_with_", ["On"]);$6;$7 = smalltalk.send(html, "_button", []);smalltalk.send($7, "_class_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {return smalltalk.send(str, "_nextPutAll_", ["btn active"]);}])]);$8 = smalltalk.send($7, "_with_", ["Off"]);return $8;}]);
    $9 = smalltalk.send(html, "_a", []);
    smalltalk.send($9, "_class_", ["btn"]);
    $10 = smalltalk.send($9, "_with_", ["Commit"]);
    return self;
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
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage_", [aPackage]);
    return self;
}
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_allProtocol", []);
    return $1;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass) {
    var self = this;
    var $2, $3, $1;
    smalltalk.send(self, "_selectedItem_", [nil]);
    if (($receiver = aClass) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.Array || Array, "_with_", [smalltalk.send(self, "_allProtocol", [])]);
    } else {
        $2 = smalltalk.send(smalltalk.Array || Array, "_with_", [smalltalk.send(self, "_allProtocol", [])]);
        smalltalk.send($2, "_addAll_", [smalltalk.send(aClass, "_protocols", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        $1 = $3;
    }
    smalltalk.send(self, "_items_", [$1]);
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_renderContentOn_", [html], smalltalk.HLBrowserListWidget);
    } else {
        $2 = smalltalk.send(html, "_div", []);
        smalltalk.send($2, "_class_", ["class_side"]);
        $3 = smalltalk.send($2, "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html], smalltalk.HLBrowserListWidget);}]);
    }
    return self;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aString], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol_", [aString]);
    return self;
}
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_selectedItem", [], smalltalk.HLBrowserListWidget);
    return $1;
}
}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.Object, ['announcer', 'environment', 'selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
fn: function () {
    var self = this;
    return "-- All --";
}
}),
smalltalk.HLBrowserModel);

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
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@environment']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_environment", []);
    } else {
        $1 = self['@environment'];
    }
    return $1;
}
}),
smalltalk.HLBrowserModel);

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
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_packages", []);
    return $1;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function () {
    var self = this;
    return self['@selectedClass'];
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
fn: function (aClass) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(self['@selectedClass'], "__eq", [aClass]);
    if (!smalltalk.assert($1)) {
        if (($receiver = aClass) == nil || $receiver == undefined) {
            self['@selectedClass'] = nil;
            self['@selectedClass'];
        } else {
            $2 = smalltalk.send(self, "_showInstance", []);
            if (smalltalk.assert($2)) {
                self['@selectedClass'] = smalltalk.send(aClass, "_theNonMetaClass", []);
                self['@selectedClass'];
            } else {
                self['@selectedClass'] = smalltalk.send(aClass, "_theMetaClass", []);
                self['@selectedClass'];
            }
        }
        smalltalk.send(self, "_selectedMethod_", [nil]);
        $3 = smalltalk.send(self, "_selectedProtocol_", [nil]);
    }
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLClassSelected || HLClassSelected, "_on_", [smalltalk.send(self, "_selectedClass", [])])]);
    return self;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod",
smalltalk.method({
selector: "selectedMethod",
fn: function () {
    var self = this;
    return self['@selectedMethod'];
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod_",
smalltalk.method({
selector: "selectedMethod:",
fn: function (aCompiledMethod) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedMethod'], "__eq", [aCompiledMethod]);
    if (!smalltalk.assert($1)) {
        self['@selectedMethod'] = aCompiledMethod;
        self['@selectedMethod'];
    }
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLMethodSelected || HLMethodSelected, "_on_", [aCompiledMethod])]);
    return self;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function () {
    var self = this;
    return self['@selectedPackage'];
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage_",
smalltalk.method({
selector: "selectedPackage:",
fn: function (aPackage) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedPackage'], "__eq", [aPackage]);
    if (!smalltalk.assert($1)) {
        self['@selectedPackage'] = aPackage;
        self['@selectedPackage'];
        smalltalk.send(self, "_selectedClass_", [nil]);
    }
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLPackageSelected || HLPackageSelected, "_on_", [aPackage])]);
    return self;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol",
smalltalk.method({
selector: "selectedProtocol",
fn: function () {
    var self = this;
    return self['@selectedProtocol'];
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol_",
smalltalk.method({
selector: "selectedProtocol:",
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@selectedProtocol'], "__eq", [aString]);
    if (!smalltalk.assert($1)) {
        self['@selectedProtocol'] = aString;
        self['@selectedProtocol'];
        smalltalk.send(self, "_selectedMethod_", [nil]);
    }
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLProtocolSelected || HLProtocolSelected, "_on_", [aString])]);
    return self;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment",
smalltalk.method({
selector: "showComment",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@showComment']) == nil || $receiver == undefined) {
        $1 = false;
    } else {
        $1 = self['@showComment'];
    }
    return $1;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment_",
smalltalk.method({
selector: "showComment:",
fn: function (aBoolean) {
    var self = this;
    self['@showComment'] = aBoolean;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLShowCommentToggled || HLShowCommentToggled, "_new", [])]);
    return self;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@showInstance']) == nil ||
        $receiver == undefined) {
        $1 = true;
    } else {
        $1 = self['@showInstance'];
    }
    return $1;
}
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean) {
    var self = this;
    var $1, $2;
    self['@showInstance'] = aBoolean;
    $1 = smalltalk.send(self, "_selectedClass", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        if (smalltalk.assert(aBoolean)) {
            $2 = smalltalk.send(smalltalk.send(self, "_selectedClass", []), "_theNonMetaClass", []);
        } else {
            $2 = smalltalk.send(smalltalk.send(self, "_selectedClass", []), "_theMetaClass", []);
        }
        smalltalk.send(self, "_selectedClass_", [$2]);
    }
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, "_new", [])]);
    return self;
}
}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_environment_", [anEnvironment]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLBrowserSourceWidget', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@codeWidget']) == nil || $receiver == undefined) {
        self['@codeWidget'] = smalltalk.send(smalltalk.HLCodeWidget || HLCodeWidget, "_new", []);
        $1 = self['@codeWidget'];
    } else {
        $1 = self['@codeWidget'];
    }
    return $1;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_contents", []);
    return $1;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_contents_", [aString]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    return self['@model'];
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    smalltalk.send(self, "_observeModel", []);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLMethodSelected || HLMethodSelected, function (ann) {return smalltalk.send(self, "_onMethodSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
fn: function (aClass) {
    var self = this;
    var $1;
    if (($receiver = aClass) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_contents_", [""]);
        return $1;
    } else {
    }
    smalltalk.send(self, "_contents_", [smalltalk.send(aClass, "_definition", [])]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aCompiledMethod) {
    var self = this;
    var $1;
    if (($receiver = aCompiledMethod) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_contents_", [""]);
        return $1;
    } else {
    }
    smalltalk.send(self, "_contents_", [smalltalk.send(aCompiledMethod, "_source", [])]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []);
    if (($receiver = $1) == nil || $receiver == undefined) {
        $2 = smalltalk.send(self, "_contents_", [""]);
        return $2;
    } else {
    }
    smalltalk.send(self, "_contents_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_definition", [])]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_renderOn_", [html]);
    return self;
}
}),
smalltalk.HLBrowserSourceWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aBrowserModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLBrowserSourceWidget.klass);


