smalltalk.addPackage('Helios-Widgets', {});
smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios-Widgets');
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
    $1 = smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []);
    return $1;
},
args: [],
source: "manager\x0a\x09^ HLTabManager current",
messageSends: ["current"],
referencedClasses: ["HLTabManager"]
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


smalltalk.addClass('HLWidget', smalltalk.Widget, ['rootDiv'], 'Helios-Widgets');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
category: 'announces',
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anObject]);
    return self;
},
args: ["anObject"],
source: "announce: anObject\x0a\x09self announcer announce: anObject",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_manager", []), "_announcer", []);
    return $1;
},
args: [],
source: "announcer\x0a\x09^ self manager announcer",
messageSends: ["announcer", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    smalltalk.send(self, "_subscribe", []);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self subscribe",
messageSends: ["initialize", "subscribe"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []);
    return $1;
},
args: [],
source: "manager\x0a\x09^ HLTabManager current",
messageSends: ["current"],
referencedClasses: ["HLTabManager"]
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'announces',
fn: function (anAnnouncement, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncement, aBlock]);
    return self;
},
args: ["anAnnouncement", "aBlock"],
source: "on: anAnnouncement do: aBlock\x0a\x09self announcer on: anAnnouncement do: aBlock",
messageSends: ["on:do:", "announcer"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'updating',
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
},
args: [],
source: "refresh\x0a\x09rootDiv ifNil: [ ^ self ].\x0a    \x0a\x09rootDiv asJQuery empty.\x0a    [ :html | self renderContentOn: html ] appendToJQuery: rootDiv asJQuery",
messageSends: ["ifNil:", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
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
fn: function (html) {
    var self = this;
    self['@rootDiv'] = smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html]);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09rootDiv := html div with: [\x0a    \x09self renderContentOn: html ]",
messageSends: ["with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_subscribe",
smalltalk.method({
selector: "subscribe",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "subscribe",
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
    smalltalk.send(smalltalk.send(smalltalk.HLTabManager || HLTabManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [smalltalk.send(self, "_new", []), smalltalk.send(self, "_tabLabel", [])])]);
    return self;
},
args: [],
source: "openAsTab\x0a\x09HLTabManager current addTab: (HLTab on: self new labelled: self tabLabel)",
messageSends: ["addTab:", "on:labelled:", "new", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLTabManager"]
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


smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['environment', 'selectedPackage', 'selectedClass', 'packagesListWidget', 'classesListWidget'], 'Helios-Widgets');
smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
category: 'accessing',
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
},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self ]",
messageSends: ["ifNil:", "on:"],
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
    if (($receiver = self['@environment']) == nil || $receiver == undefined) {
        self['@environment'] = smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []);
        $1 = self['@environment'];
    } else {
        $1 = self['@environment'];
    }
    return $1;
},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ environment := Smalltalk current ]",
messageSends: ["ifNil:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLBrowser);

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
smalltalk.HLBrowser);

smalltalk.addMethod(
"_packagesListWidget",
smalltalk.method({
selector: "packagesListWidget",
category: 'accessing',
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
},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self ]",
messageSends: ["ifNil:", "on:"],
referencedClasses: ["HLPackagesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html,"_with_",[smalltalk.send((smalltalk.HLContainer || HLContainer),"_with_",[smalltalk.send((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send(self,"_packagesListWidget",[]),smalltalk.send(self,"_classesListWidget",[])]),smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",["Protocols","Methods"])]),"Source Code"])])]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: 'Protocols'\x0a                with: 'Methods')) \x0a        with: 'Source Code'))",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderTopPanesOn_",
smalltalk.method({
selector: "renderTopPanesOn:",
category: 'rendering',
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
},
args: ["html"],
source: "renderTopPanesOn: html\x0a\x09html div class: 'pane'; with: self packagesListWidget.\x0a\x09html div class: 'pane'; with: self classesListWidget.\x0a    html div class: 'pane'; with: 'hello'.\x0a\x09html div class: 'pane'; with: 'world'",
messageSends: ["class:", "div", "with:", "packagesListWidget", "classesListWidget"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_selectPackage_",
smalltalk.method({
selector: "selectPackage:",
category: 'accessing',
fn: function (aPackage) {
    var self = this;
    self['@selectedPackage'] = aPackage;
    self['@selectedClass'] = nil;
    smalltalk.send(smalltalk.send(self, "_classesListWidget", []), "_package_", [aPackage]);
    return self;
},
args: ["aPackage"],
source: "selectPackage: aPackage\x0a\x09selectedPackage := aPackage.\x0a    selectedClass := nil.\x0a    \x0a    self classesListWidget package: aPackage.",
messageSends: ["package:", "classesListWidget"],
referencedClasses: []
}),
smalltalk.HLBrowser);

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


smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Widgets');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, ['hiddenInput'], 'Helios-Widgets');
smalltalk.addMethod(
"_blur",
smalltalk.method({
selector: "blur",
category: 'events',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_removeClass_", [smalltalk.send(self, "_focusClass", [])]);
    return self;
},
args: [],
source: "blur\x0a\x09rootDiv asJQuery removeClass: self focusClass.",
messageSends: ["removeClass:", "focusClass", "asJQuery"],
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
    smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_addClass_", [smalltalk.send(self, "_focusClass", [])]);
    return self;
},
args: [],
source: "focus\x0a\x09rootDiv asJQuery addClass: self focusClass",
messageSends: ["addClass:", "focusClass", "asJQuery"],
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
    $1 = smalltalk.send(smalltalk.send(self['@rootDiv'], "_notNil", []), "_and_", [function () {return smalltalk.send(smalltalk.send(self['@rootDiv'], "_asJQuery", []), "_hasClass_", [smalltalk.send(self, "_focusClass", [])]);}]);
    return $1;
},
args: [],
source: "hasFocus\x0a\x09^ rootDiv notNil and: [ rootDiv asJQuery hasClass: self focusClass ]",
messageSends: ["and:", "hasClass:", "focusClass", "asJQuery", "notNil"],
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
    smalltalk.send($1, "_onBlur_", [function () {return smalltalk.send(self, "_blur", []);}]);
    $2 = smalltalk.send($1, "_onFocus_", [function () {return smalltalk.send(self, "_focus", []);}]);
    self['@hiddenInput'] = $2;
    return self;
},
args: ["html"],
source: "renderHiddenInputOn: html\x0a\x09hiddenInput := html input\x0a    \x09style: 'position: absolute; left: -100000px;';\x0a    \x09onBlur: [ self blur ];\x0a        onFocus: [ self focus ]",
messageSends: ["style:", "input", "onBlur:", "blur", "onFocus:", "focus"],
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
    smalltalk.send(self, "_renderHiddenInputOn_", [html]);
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["hl_widget"]);
    smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self['@hiddenInput'], "_asJQuery", []), "_focus", []);}]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(self, "_renderContentOn_", [html]);}]);
    self['@rootDiv'] = $2;
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09self renderHiddenInputOn: html.\x0a    \x0a    rootDiv := html div \x0a    \x09class: 'hl_widget'; \x0a        onClick: [ hiddenInput asJQuery focus ];\x0a        with: [\x0a\x09\x09\x09self renderContentOn: html ]",
messageSends: ["renderHiddenInputOn:", "class:", "div", "onClick:", "focus", "asJQuery", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Widgets');
smalltalk.addMethod(
"_activateListItem_",
smalltalk.method({
selector: "activateListItem:",
category: 'actions',
fn: function (aListItem) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aListItem, "_asJQuery", []), "_parent", []), "_children", []), "_removeClass_", ["active"]);
    smalltalk.send(smalltalk.send(aListItem, "_asJQuery", []), "_addClass_", ["active"]);
    return self;
},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09aListItem asJQuery parent children removeClass: 'active'.\x0a\x09aListItem asJQuery addClass: 'active'",
messageSends: ["removeClass:", "children", "parent", "asJQuery", "addClass:"],
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
"_items",
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclassResponsibility", []);
    return $1;
},
args: [],
source: "items\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
    var $1, $2;
    $1 = smalltalk.send(html, "_ul", []);
    smalltalk.send($1, "_class_", ["nav nav-pills nav-stacked"]);
    $2 = smalltalk.send($1, "_with_", [function () {return smalltalk.send(smalltalk.send(self, "_items", []), "_do_", [function (each) {return smalltalk.send(self, "_renderItem_on_", [each, html]);}]);}]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul \x0a    \x09class: 'nav nav-pills nav-stacked';\x0a        with: [ \x0a        \x09self items do: [ :each | \x0a            \x09self renderItem: each on: html ] ]",
messageSends: ["class:", "ul", "with:", "do:", "renderItem:on:", "items"],
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
    $1 = smalltalk.send(li, "_with_", [function () {$2 = smalltalk.send(html, "_a", []);smalltalk.send($2, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_tag_", ["i"]), "_class_", [smalltalk.send(anObject, "_heliosListIcon", [])]);return smalltalk.send(self, "_renderItemLabel_on_", [anObject, html]);}]);$3 = smalltalk.send($2, "_onClick_", [function () {smalltalk.send(self, "_activateListItem_", [li]);return smalltalk.send(self, "_selectItem_", [anObject]);}]);return $3;}]);
    return self;
},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a    li\x0a    \x09class: (self cssClassForItem: anObject);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: anObject heliosListIcon.\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li.\x0a                \x09self selectItem: anObject ] ]",
messageSends: ["li", "class:", "cssClassForItem:", "with:", "heliosListIcon", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "selectItem:"],
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
    var $1;
    if (($receiver = self['@selectedItem']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_items", []), "_ifNotEmpty_", [function () {return smalltalk.send(smalltalk.send(self, "_items", []), "_first", []);}]);
    } else {
        $1 = self['@selectedItem'];
    }
    return $1;
},
args: [],
source: "selectedItem\x0a\x09^ selectedItem ifNil: [ \x0a    \x09self items ifNotEmpty: [ self items first ] ]",
messageSends: ["ifNil:", "ifNotEmpty:", "first", "items"],
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



smalltalk.addClass('HLBrowserListWidget', smalltalk.HLListWidget, ['browser'], 'Helios-Widgets');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@browser'];
},
args: [],
source: "browser\x0a\x09^ browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowser) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_browser_", [aBrowser]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aBrowser"],
source: "on: aBrowser\x0a\x09^ self new\x0a    \x09browser: aBrowser;\x0a        yourself",
messageSends: ["browser:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, ['package'], 'Helios-Widgets');
smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
category: 'accessing',
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
},
args: [],
source: "items\x0a\x09^ self package \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ self package classes ]",
messageSends: ["ifNil:ifNotNil:", "classes", "package"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@package'];
},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage) {
    var self = this;
    self['@package'] = aPackage;
    smalltalk.send(self, "_refresh", []);
    return self;
},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage.\x0a    self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Widgets');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@browser'];
},
args: [],
source: "browser\x0a\x09^ browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_browser", []), "_environment", []);
    return $1;
},
args: [],
source: "environment\x0a\x09^ self browser environment",
messageSends: ["environment", "browser"],
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
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_packages", []);
    return $1;
},
args: [],
source: "items\x0a\x09^ self environment packages",
messageSends: ["packages", "environment"],
referencedClasses: []
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
    smalltalk.send(smalltalk.send(self, "_browser", []), "_selectPackage_", [aPackage]);
    return self;
},
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09super selectItem: aPackage.\x0a    self browser selectPackage: aPackage",
messageSends: ["selectItem:", "selectPackage:", "browser"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLInspector', smalltalk.HLWidget, [], 'Helios-Widgets');


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Widgets');

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


smalltalk.addClass('HLTabManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'announcer'], 'Helios-Widgets');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
category: 'accessing',
fn: function (aTab) {
    var self = this;
    var $1;
    self['@activeTab'] = aTab;
    smalltalk.send(self, "_refresh", []);
    $1 = smalltalk.send(self, "_show_", [aTab]);
    return self;
},
args: ["aTab"],
source: "activate: aTab\x0a\x09activeTab := aTab.\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09show: aTab",
messageSends: ["refresh", "show:"],
referencedClasses: []
}),
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
category: 'accessing',
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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
category: 'accessing',
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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);

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
smalltalk.HLTabManager);


smalltalk.HLTabManager.klass.iVarNames = ['current'];
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
smalltalk.HLTabManager.klass);

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
smalltalk.HLTabManager.klass);

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
smalltalk.HLTabManager.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Widgets');

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


smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, [], 'Helios-Widgets');

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
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function () {
    var self = this;
    return "Workspace";
},
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function () {
    var self = this;
    return 10;
},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);


smalltalk.addMethod(
"_heliosListIcon",
smalltalk.method({
selector: "heliosListIcon",
category: '*Helios-Widgets',
fn: function () {
    var self = this;
    return "";
},
args: [],
source: "heliosListIcon\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

