smalltalk.addPackage('Helios-Browser', {});
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []);
    return $1;
},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
category: 'widgets',
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
},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self protocolsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"],
referencedClasses: ["HLClassesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_environment", []);
    return $1;
},
args: [],
source: "environment\x0a\x09^ self model environment",
messageSends: ["environment", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_methodsListWidget",
smalltalk.method({
selector: "methodsListWidget",
category: 'widgets',
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
},
args: [],
source: "methodsListWidget\x0a\x09^ methodsListWidget ifNil: [\x0a      \x09methodsListWidget := HLMethodsListWidget on: self model ]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLMethodsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
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
},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLBrowserModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLBrowserModel"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel) {
    var self = this;
    self['@model'] = aModel;
    return self;
},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_packagesListWidget",
smalltalk.method({
selector: "packagesListWidget",
category: 'widgets',
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
},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"],
referencedClasses: ["HLPackagesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_protocolsListWidget",
smalltalk.method({
selector: "protocolsListWidget",
category: 'widgets',
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
},
args: [],
source: "protocolsListWidget\x0a\x09^ protocolsListWidget ifNil: [\x0a      \x09protocolsListWidget := HLProtocolsListWidget on: self model.\x0a\x09\x09protocolsListWidget next: self methodsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"],
referencedClasses: ["HLProtocolsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup) {
    var self = this;
    var $1, $2;
    smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [66, "Browse"]);
    smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [71, "Go to"]);
    $1 = smalltalk.send(aBindingGroup, "_addGroupKey_labelled_", [84, "Toggle"]);
    smalltalk.send(smalltalk.send(smalltalk.HLBrowserCommand || HLBrowserCommand, "_withAllSubclasses", []), "_do_", [function (each) {$2 = smalltalk.send(each, "_key", []);if (($receiver = $2) == nil || $receiver == undefined) {return $2;} else {return smalltalk.send(smalltalk.send(aBindingGroup, "_at_", [smalltalk.send(each, "_bindingGroup", [])]), "_add_", [smalltalk.send(smalltalk.send(each, "_on_", [smalltalk.send(self, "_model", [])]), "_asBinding", [])]);}}]);
    return self;
},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09aBindingGroup \x0a    \x09addGroupKey: 66 labelled: 'Browse';\x0a        addGroupKey: 71 labelled: 'Go to';\x0a        addGroupKey: 84 labelled: 'Toggle'.\x0a        \x0a   \x09HLBrowserCommand withAllSubclasses do: [ :each |\x0a   \x09\x09each key ifNotNil: [\x0a  \x09\x09\x09(aBindingGroup at: each bindingGroup) \x0a  \x09\x09\x09\x09add: (each on: self model) asBinding ] ]",
messageSends: ["addGroupKey:labelled:", "do:", "ifNotNil:", "add:", "asBinding", "on:", "model", "at:", "bindingGroup", "key", "withAllSubclasses"],
referencedClasses: ["HLBrowserCommand"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.HLContainer || HLContainer, "_with_", [smalltalk.send(smalltalk.HLHorizontalSplitter || HLHorizontalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_packagesListWidget", []), smalltalk.send(self, "_classesListWidget", [])]), smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_protocolsListWidget", []), smalltalk.send(self, "_methodsListWidget", [])])]), smalltalk.send(self, "_sourceWidget", [])])])]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self protocolsListWidget\x0a                with: self methodsListWidget)) \x0a        with: self sourceWidget))",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_sourceWidget",
smalltalk.method({
selector: "sourceWidget",
category: 'widgets',
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
},
args: [],
source: "sourceWidget\x0a\x09^ sourceWidget ifNil: [\x0a      \x09sourceWidget := HLBrowserSourceWidget on: self model ]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLBrowserSourceWidget"]
}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
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
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
category: 'accessing',
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
},
args: [],
source: "nextId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a    ^ 'browser_', (nextId + 1) asString",
messageSends: ["ifNil:", ",", "asString", "+"],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function () {
    var self = this;
    return "Browser";
},
args: [],
source: "tabLabel\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function () {
    var self = this;
    return 0;
},
args: [],
source: "tabPriority\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@model'];
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    smalltalk.send(self, "_observeModel", []);
    return self;
},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "observeModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a    \x09model: aModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusMethodsListWidget",
smalltalk.method({
selector: "focusMethodsListWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLMethodsListFocus || HLMethodsListFocus, "_new", [])]);
    return self;
},
args: [],
source: "focusMethodsListWidget\x0a\x09self model announcer announce: HLMethodsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLMethodsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_focusProtocolsListWidget",
smalltalk.method({
selector: "focusProtocolsListWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLProtocolsListFocus || HLProtocolsListFocus, "_new", [])]);
    return self;
},
args: [],
source: "focusProtocolsListWidget\x0a\x09self model announcer announce: HLProtocolsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLProtocolsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getChildrenOf_",
smalltalk.method({
selector: "getChildrenOf:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_items", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [aClass]);}]);
    return $1;
},
args: ["aClass"],
source: "getChildrenOf: aClass\x0a\x09^ self items select: [ :each | each superclass = aClass ]",
messageSends: ["select:", "=", "superclass", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getRootClassesOf_",
smalltalk.method({
selector: "getRootClassesOf:",
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aCollection, "_select_", [function (each) {return smalltalk.send(smalltalk.send(smalltalk.send(each, "_allSuperclasses", []), "_intersection_", [aCollection]), "_isEmpty", []);}]);
    return $1;
},
args: ["aCollection"],
source: "getRootClassesOf: aCollection\x0a\x09^ aCollection select: [ :each |\x0a    \x09(each allSuperclasses intersection: aCollection) isEmpty ]",
messageSends: ["select:", "isEmpty", "intersection:", "allSuperclasses"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
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
},
args: ["aClass"],
source: "iconForItem: aClass\x0a\x09^ aClass theNonMetaClass comment isEmpty\x0a    \x09ifFalse: [ 'icon-none' ]\x0a      \x09ifTrue: [ 'icon-question-sign' ]",
messageSends: ["ifFalse:ifTrue:", "isEmpty", "comment", "theNonMetaClass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []);
    smalltalk.send($1, "_on_do_", [smalltalk.HLPackageSelected || HLPackageSelected, function (ann) {return smalltalk.send(self, "_onPackageSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send($1, "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onShowInstanceToggled", []);}]);
    $2 = smalltalk.send($1, "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a    \x09on: HLPackageSelected do: [ :ann | self onPackageSelected: ann item ];\x0a    \x09on: HLShowInstanceToggled do: [ :ann | self onShowInstanceToggled ];\x0a\x09\x09on: HLClassSelected do: [ :ann | self onClassSelected: ann item ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onShowInstanceToggled", "onClassSelected:"],
referencedClasses: ["HLPackageSelected", "HLShowInstanceToggled", "HLClassSelected"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
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
},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a    self selectedItem: nil.\x0a    \x0a    self items: (aPackage \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ (aPackage classes \x0a        \x09collect: [ :each | each theNonMetaClass ]) asSet asArray ]).\x0a\x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "asArray", "asSet", "collect:", "theNonMetaClass", "classes", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onShowInstanceToggled",
smalltalk.method({
selector: "onShowInstanceToggled",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
},
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
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
},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a        class: 'btn-group';\x0a\x09\x09at: 'data-toggle' put: 'buttons-radio';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showInstance ifTrue: [ \x0a                    \x09str nextPutAll: ' active'] ]);\x0a  \x09\x09\x09\x09with: 'Instance';\x0a                onClick: [ self showInstance: true ].\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self model showInstance ifFalse: [ \x0a                    \x09str nextPutAll: ' active'] ]);\x0a  \x09\x09\x09\x09with: 'Class';\x0a\x09\x09\x09\x09onClick: [ self model showInstance: false ] ].\x0a                 \x0a  \x09html button \x0a           \x09class: 'btn';\x0a            at: 'data-toggle' put: 'button';\x0a  \x09\x09\x09with: 'Comment'",
messageSends: ["class:", "div", "at:put:", "with:", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "button", "onClick:", "showInstance:", "ifFalse:", "model"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_level_on_",
smalltalk.method({
selector: "renderItem:level:on:",
category: 'rendering',
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
},
args: ["aClass", "anInteger", "html"],
source: "renderItem: aClass level: anInteger on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a    li\x0a    \x09at: 'list-data' put: (self items indexOf: aClass);\x0a    \x09class: (self cssClassForItem: aClass);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self iconForItem: aClass).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: aClass level: anInteger on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ].\x0a                    \x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: anInteger + 1 on: html ]",
messageSends: ["li", "at:put:", "indexOf:", "items", "class:", "cssClassForItem:", "with:", "iconForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
fn: function (aClass, html) {
    var self = this;
    smalltalk.send(self, "_renderItem_on_", [aClass, html], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_getChildrenOf_", [aClass]), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_level_on_", [each, 1, html]);}]);
    return self;
},
args: ["aClass", "html"],
source: "renderItem: aClass on: html\x0a\x09super renderItem: aClass on: html.\x0a    \x09(self getChildrenOf: aClass) do: [ :each |\x0a    \x09\x09self renderItem: each level: 1 on: html ]",
messageSends: ["renderItem:on:", "do:", "renderItem:level:on:", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_level_on_",
smalltalk.method({
selector: "renderItemLabel:level:on:",
category: 'rendering',
fn: function (aClass, anInteger, html) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(html, "_span", []), "_asJQuery", []), "_html_", [smalltalk.send(smalltalk.String || String, "_streamContents_", [function (str) {smalltalk.send(anInteger, "_timesRepeat_", [function () {return smalltalk.send(str, "_nextPutAll_", ["&nbsp;&nbsp;&nbsp;&nbsp;"]);}]);return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(aClass, "_name", [])]);}])]);
    return self;
},
args: ["aClass", "anInteger", "html"],
source: "renderItemLabel: aClass level: anInteger on: html\x0a\x09html span asJQuery html: (String streamContents: [ :str |\x0a\x09\x09anInteger timesRepeat: [\x0a\x09\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09\x09\x09str nextPutAll: aClass name ])",
messageSends: ["html:", "streamContents:", "timesRepeat:", "nextPutAll:", "name", "asJQuery", "span"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aClass, html) {
    var self = this;
    smalltalk.send(self, "_renderItemLabel_level_on_", [aClass, 0, html]);
    return self;
},
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09self renderItemLabel: aClass level: 0 on: html",
messageSends: ["renderItemLabel:level:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_getRootClassesOf_", [smalltalk.send(self, "_items", [])]), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);
    return self;
},
args: ["html"],
source: "renderListOn: html\x0a\x09(self getRootClassesOf: self items)\x0a    \x09do: [ :each | self renderItem: each on: html ]",
messageSends: ["do:", "renderItem:on:", "getRootClassesOf:", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aClass], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass_", [aClass]);
    return self;
},
args: ["aClass"],
source: "selectItem: aClass\x0a\x09super selectItem: aClass.\x0a    self model selectedClass: aClass",
messageSends: ["selectItem:", "selectedClass:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance", []);
    return $1;
},
args: [],
source: "showInstance\x0a\x09^ self model showInstance",
messageSends: ["showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
category: 'actions',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [aBoolean]);
    return self;
},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09self model showInstance: aBoolean",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLBrowserListWidget, ['selectorsCache'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_allProtocol", []);
    return $1;
},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_flushSelectorsCache",
smalltalk.method({
selector: "flushSelectorsCache",
category: 'cache',
fn: function () {
    var self = this;
    self['@selectorsCache'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    return self;
},
args: [],
source: "flushSelectorsCache\x0a\x09selectorsCache := Dictionary new",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
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
},
args: ["aCompiledMethod"],
source: "iconForItem: aCompiledMethod\x0a\x09| override overriden |\x0a    \x0a    override := self isOverride: aCompiledMethod.\x0a    overriden := self isOverriden: aCompiledMethod.\x0a    \x0a\x09^ override\x0a    \x09ifTrue: [ overriden\x0a\x09\x09\x09ifTrue: [ 'icon-resize-vertical' ]\x0a\x09\x09\x09ifFalse: [ 'icon-arrow-up' ] ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09overriden\x0a\x09\x09\x09ifTrue: [ 'icon-arrow-down' ]\x0a\x09\x09\x09ifFalse: [ 'icon-none' ] ]",
messageSends: ["isOverride:", "isOverriden:", "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.HLBrowserListWidget);
    smalltalk.send(self, "_flushSelectorsCache", []);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self flushSelectorsCache",
messageSends: ["initialize", "flushSelectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_overrideSelectors", []), "_includes_", [smalltalk.send(aMethod, "_selector", [])]);
    return $1;
},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x0a   ^ self overrideSelectors includes: aMethod selector",
messageSends: ["includes:", "selector", "overrideSelectors"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverriden_",
smalltalk.method({
selector: "isOverriden:",
category: 'testing',
fn: function (aMethod) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_overridenSelectors", []), "_includes_", [smalltalk.send(aMethod, "_selector", [])]);
    return $1;
},
args: ["aMethod"],
source: "isOverriden: aMethod\x0a\x0a   ^ self overridenSelectors includes: aMethod selector",
messageSends: ["includes:", "selector", "overridenSelectors"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
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
},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ aString = self allProtocol\x0a    \x09ifTrue: [ self model selectedClass methods ]\x0a      \x09ifFalse: [ self model selectedClass methodsInProtocol: aString ]",
messageSends: ["ifTrue:ifFalse:", "methods", "selectedClass", "model", "methodsInProtocol:", "=", "allProtocol"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [nil]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLMethodSelected || HLMethodSelected, function (ann) {return smalltalk.send(self, "_onMethodSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
},
args: [],
source: "observeModel\x0a\x09self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ].\x0a    self model announcer on: HLShowInstanceToggled do: [ :ann |\x0a    \x09self onProtocolSelected: nil ].\x0a    self model announcer on: HLMethodSelected do: [ :ann |\x0a    \x09self onMethodSelected: ann item ]",
messageSends: ["on:do:", "onProtocolSelected:", "item", "announcer", "model", "onMethodSelected:"],
referencedClasses: ["HLProtocolSelected", "HLShowInstanceToggled", "HLMethodSelected"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (aMethod) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
},
args: ["aMethod"],
source: "onMethodSelected: aMethod\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
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
},
args: ["aString"],
source: "onProtocolSelected: aString\x0a    self selectedItem: nil.\x0a    \x0a    self items: (self model selectedClass \x0a    \x09ifNil: [ #() ]\x0a      \x09ifNotNil: [ aString\x0a    \x09\x09ifNil: [ #() ]\x0a      \x09\x09ifNotNil: [ self methodsInProtocol: aString ] ]).\x0a        \x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "methodsInProtocol:", "selectedClass", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overrideSelectors",
smalltalk.method({
selector: "overrideSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectorsCache", []), "_at_ifAbsentPut_", ["override", function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_allSuperclasses", []), "_inject_into_", [smalltalk.send(smalltalk.Set || Set, "_new", []), function (acc, each) {smalltalk.send(acc, "_addAll_", [smalltalk.send(each, "_selectors", [])]);$2 = smalltalk.send(acc, "_yourself", []);return $2;}]);}]);
    return $1;
},
args: [],
source: "overrideSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'override'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSuperclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSuperclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overridenSelectors",
smalltalk.method({
selector: "overridenSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.send(self, "_selectorsCache", []), "_at_ifAbsentPut_", ["overriden", function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", []), "_allSubclasses", []), "_inject_into_", [smalltalk.send(smalltalk.Set || Set, "_new", []), function (acc, each) {smalltalk.send(acc, "_addAll_", [smalltalk.send(each, "_selectors", [])]);$2 = smalltalk.send(acc, "_yourself", []);return $2;}]);}]);
    return $1;
},
args: [],
source: "overridenSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'overriden'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSubclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSubclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ].\x0a        \x0a    self flushSelectorsCache",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model", "flushSelectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aCompiledMethod, html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(aCompiledMethod, "_selector", [])]);
    return self;
},
args: ["aCompiledMethod", "html"],
source: "renderItemLabel: aCompiledMethod on: html\x0a\x09html with: aCompiledMethod selector",
messageSends: ["with:", "selector"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aCompiledMethod) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aCompiledMethod], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod_", [aCompiledMethod]);
    return self;
},
args: ["aCompiledMethod"],
source: "selectItem: aCompiledMethod\x0a\x09super selectItem: aCompiledMethod.\x0a   \x09self model selectedMethod: aCompiledMethod",
messageSends: ["selectItem:", "selectedMethod:", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectorsCache'];
},
args: [],
source: "selectorsCache\x0a\x09^ selectorsCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);



smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusClassesListWidget",
smalltalk.method({
selector: "focusClassesListWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLClassesListFocus || HLClassesListFocus, "_new", [])]);
    return self;
},
args: [],
source: "focusClassesListWidget\x0a\x09self model announcer announce: HLClassesListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLClassesListFocus"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_initializeItems",
smalltalk.method({
selector: "initializeItems",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    self['@items'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_packages", []), "_sort_", [function (a, b) {return smalltalk.send(smalltalk.send(a, "_name", []), "__lt", [smalltalk.send(b, "_name", [])]);}]);
    $1 = self['@items'];
    return $1;
},
args: [],
source: "initializeItems\x0a\x09^ items := self model packages sort:[:a :b|\x0a\x09\x09\x09\x09\x09\x09a name < b name]",
messageSends: ["sort:", "<", "name", "packages", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@items']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_initializeItems", []);
    } else {
        $1 = self['@items'];
    }
    return $1;
},
args: [],
source: "items\x0a\x09^ items ifNil: [self initializeItems]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLPackageSelected || HLPackageSelected, function (ann) {return smalltalk.send(self, "_onPackageSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
},
args: [],
source: "observeModel\x0a    self model announcer on: HLPackageSelected do: [ :ann |\x0a    \x09self onPackageSelected: ann item ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model"],
referencedClasses: ["HLPackageSelected"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (aPackage) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
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
},
args: ["html"],
source: "renderButtonsOn: html\x0a\x0a\x09html span class: 'info'; with: 'Auto commit'.\x0a\x09html div \x0a        class: 'btn-group switch';\x0a\x09\x09at: 'data-toggle' put: 'buttons-radio';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn' ]);\x0a  \x09\x09\x09\x09with: 'On'.\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn active' ]);\x0a  \x09\x09\x09\x09with: 'Off' ].\x0a                \x0a    html a \x0a         \x09class: 'btn';\x0a\x09\x09\x09with: 'Commit'.",
messageSends: ["class:", "span", "with:", "div", "at:put:", "streamContents:", "nextPutAll:", "button", "a"],
referencedClasses: ["String"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aPackage) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aPackage], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage_", [aPackage]);
    return self;
},
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09super selectItem: aPackage.\x0a    self model selectedPackage: aPackage",
messageSends: ["selectItem:", "selectedPackage:", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_allProtocol", []);
    return $1;
},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLShowInstanceToggled || HLShowInstanceToggled, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
},
args: [],
source: "observeModel\x0a\x09self model announcer on: HLClassSelected do: [ :ann |\x0a    \x09self onClassSelected: ann item ].\x0a    self model announcer on: HLShowInstanceToggled do: [ :ann |\x0a    \x09self onClassSelected: self model selectedClass ].\x0a    self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ]",
messageSends: ["on:do:", "onClassSelected:", "item", "announcer", "model", "selectedClass", "onProtocolSelected:"],
referencedClasses: ["HLClassSelected", "HLShowInstanceToggled", "HLProtocolSelected"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
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
},
args: ["aClass"],
source: "onClassSelected: aClass\x0a    self selectedItem: nil.\x0a    \x0a    self items: (aClass\x0a    \x09ifNil: [ Array with: self allProtocol ]\x0a      \x09ifNotNil: [ \x0a        \x09(Array with: self allProtocol) \x0a            \x09addAll: aClass protocols; \x0a                yourself ]).\x0a\x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself", "refresh"],
referencedClasses: ["Array"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_focus", []);
    return self;
},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [aString], smalltalk.HLBrowserListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol_", [aString]);
    return self;
},
args: ["aString"],
source: "selectItem: aString\x0a\x09super selectItem: aString.\x0a    self model selectedProtocol: aString",
messageSends: ["selectItem:", "selectedProtocol:", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_selectedItem", [], smalltalk.HLBrowserListWidget);
    return $1;
},
args: [],
source: "selectedItem\x0a\x09^ super selectedItem\x22 ifNil: [ self allProtocol ]\x22",
messageSends: ["selectedItem"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.Object, ['announcer', 'environment', 'selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function () {
    var self = this;
    return "-- All --";
},
args: [],
source: "allProtocol\x0a\x09^ '-- All --'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@environment']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_environment", []);
    } else {
        $1 = self['@environment'];
    }
    return $1;
},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLBrowserModel);

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
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_packages", []);
    return $1;
},
args: [],
source: "packages\x0a\x09^ self environment packages",
messageSends: ["packages", "environment"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedClass'];
},
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
category: 'accessing',
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
},
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09selectedClass = aClass ifFalse: [\x0a\x09\x09aClass \x0a    \x09\x09ifNil: [ selectedClass := nil ]\x0a      \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09self showInstance \x0a    \x09\x09\x09\x09ifTrue: [ selectedClass := aClass theNonMetaClass ]\x0a      \x09\x09\x09\x09ifFalse: [ selectedClass := aClass theMetaClass ] ].\x0a    \x0a   \x09\x09self \x0a    \x09\x09selectedMethod: nil;\x0a       \x09 \x09selectedProtocol: nil ].\x0a        \x0a   self announcer announce: (HLClassSelected on: self selectedClass)",
messageSends: ["ifFalse:", "ifNil:ifNotNil:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "showInstance", "selectedMethod:", "selectedProtocol:", "=", "announce:", "on:", "selectedClass", "announcer"],
referencedClasses: ["HLClassSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod",
smalltalk.method({
selector: "selectedMethod",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedMethod'];
},
args: [],
source: "selectedMethod\x0a\x09^ selectedMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod_",
smalltalk.method({
selector: "selectedMethod:",
category: 'accessing',
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
},
args: ["aCompiledMethod"],
source: "selectedMethod: aCompiledMethod\x0a\x09selectedMethod = aCompiledMethod ifFalse: [\x0a\x09\x09selectedMethod := aCompiledMethod ].\x0a    \x0a    self announcer announce: (HLMethodSelected on: aCompiledMethod)",
messageSends: ["ifFalse:", "=", "announce:", "on:", "announcer"],
referencedClasses: ["HLMethodSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedPackage'];
},
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage_",
smalltalk.method({
selector: "selectedPackage:",
category: 'accessing',
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
},
args: ["aPackage"],
source: "selectedPackage: aPackage\x0a\x09selectedPackage = aPackage ifFalse: [\x0a\x09\x09selectedPackage := aPackage.\x0a    \x09self selectedClass: nil ].\x0a    \x0a    self announcer announce: (HLPackageSelected on: aPackage)",
messageSends: ["ifFalse:", "selectedClass:", "=", "announce:", "on:", "announcer"],
referencedClasses: ["HLPackageSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol",
smalltalk.method({
selector: "selectedProtocol",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedProtocol'];
},
args: [],
source: "selectedProtocol\x0a\x09^ selectedProtocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol_",
smalltalk.method({
selector: "selectedProtocol:",
category: 'accessing',
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
},
args: ["aString"],
source: "selectedProtocol: aString\x0a\x09selectedProtocol = aString ifFalse: [\x0a      \x09selectedProtocol := aString.\x0a    \x09self selectedMethod: nil ].\x0a    \x0a    self announcer announce: (HLProtocolSelected on: aString)",
messageSends: ["ifFalse:", "selectedMethod:", "=", "announce:", "on:", "announcer"],
referencedClasses: ["HLProtocolSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment",
smalltalk.method({
selector: "showComment",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@showComment']) == nil || $receiver == undefined) {
        $1 = false;
    } else {
        $1 = self['@showComment'];
    }
    return $1;
},
args: [],
source: "showComment\x0a\x09^ showComment ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment_",
smalltalk.method({
selector: "showComment:",
category: 'accessing',
fn: function (aBoolean) {
    var self = this;
    self['@showComment'] = aBoolean;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLShowCommentToggled || HLShowCommentToggled, "_new", [])]);
    return self;
},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09showComment := aBoolean.\x0a    \x0a    self announcer announce: HLShowCommentToggled new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLShowCommentToggled"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
category: 'accessing',
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
},
args: [],
source: "showInstance\x0a\x09^ showInstance ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
category: 'accessing',
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
},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09showInstance := aBoolean.\x0a    \x0a    self selectedClass ifNotNil: [\x0a    \x09self selectedClass: (aBoolean\x0a    \x09\x09ifTrue: [self selectedClass theNonMetaClass ]\x0a    \x09  \x09ifFalse: [ self selectedClass theMetaClass ]) ].\x0a    \x0a    self announcer announce: HLShowInstanceToggled new",
messageSends: ["ifNotNil:", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "selectedClass", "theMetaClass", "announce:", "new", "announcer"],
referencedClasses: ["HLShowInstanceToggled"]
}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_environment_", [anEnvironment]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLBrowserSourceWidget', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
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
},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_contents", []);
    return $1;
},
args: [],
source: "contents\x0a\x09^ self sourceArea contents",
messageSends: ["contents", "sourceArea"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_contents_", [aString]);
    return self;
},
args: ["aString"],
source: "contents: aString\x0a\x09self codeWidget contents: aString",
messageSends: ["contents:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@model'];
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    smalltalk.send(self, "_observeModel", []);
    return self;
},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLMethodSelected || HLMethodSelected, function (ann) {return smalltalk.send(self, "_onMethodSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLClassSelected || HLClassSelected, function (ann) {return smalltalk.send(self, "_onClassSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLProtocolSelected || HLProtocolSelected, function (ann) {return smalltalk.send(self, "_onProtocolSelected_", [smalltalk.send(ann, "_item", [])]);}]);
    return self;
},
args: [],
source: "observeModel\x0a\x09self model announcer on: HLMethodSelected do: [ :ann |\x0a    \x09self onMethodSelected: ann item ].\x0a    self model announcer on: HLClassSelected do: [ :ann |\x0a    \x09self onClassSelected: ann item ].\x0a    self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ]",
messageSends: ["on:do:", "onMethodSelected:", "item", "announcer", "model", "onClassSelected:", "onProtocolSelected:"],
referencedClasses: ["HLMethodSelected", "HLClassSelected", "HLProtocolSelected"]
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
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
},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09aClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aClass definition",
messageSends: ["ifNil:", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
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
},
args: ["aCompiledMethod"],
source: "onMethodSelected: aCompiledMethod\x0a\x09aCompiledMethod ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aCompiledMethod source",
messageSends: ["ifNil:", "contents:", "source"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
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
},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self model selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: self model selectedClass definition",
messageSends: ["ifNil:", "contents:", "selectedClass", "model", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_renderOn_", [html]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a\x09self codeWidget renderOn: html",
messageSends: ["renderOn:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowserModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aBrowserModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget.klass);


