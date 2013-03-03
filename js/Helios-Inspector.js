smalltalk.addPackage('Helios-Inspector', {});
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget', 'label'], 'Helios-Inspector');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    if (($receiver = self['@codeWidget']) == nil || $receiver == undefined) {
        $2 = smalltalk.send(smalltalk.HLCodeWidget || HLCodeWidget, "_new", []);
        smalltalk.send($2, "_model_", [smalltalk.send(self['@model'], "_code", [])]);
        smalltalk.send($2, "_receiver_", [smalltalk.send(self['@model'], "_inspectee", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        self['@codeWidget'] = $3;
        $1 = self['@codeWidget'];
    } else {
        $1 = self['@codeWidget'];
    }
    return $1;
},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := HLCodeWidget new\x0a    \x09\x09model: model code;\x0a        \x09receiver: model inspectee;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "code", "new", "receiver:", "inspectee", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_displayWidget",
smalltalk.method({
selector: "displayWidget",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    if (($receiver = self['@displayWidget']) == nil ||
        $receiver == undefined) {
        $2 = smalltalk.send(smalltalk.HLInspectorDisplayWidget || HLInspectorDisplayWidget, "_new", []);
        smalltalk.send($2, "_model_", [smalltalk.send(self, "_model", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        self['@displayWidget'] = $3;
        $1 = self['@displayWidget'];
    } else {
        $1 = self['@displayWidget'];
    }
    return $1;
},
args: [],
source: "displayWidget\x0a\x09^ displayWidget ifNil: [\x0a\x09\x09displayWidget := HLInspectorDisplayWidget new\x0a    \x09\x09model: self model;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorDisplayWidget"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(self, "_model", []), "_inspect_on_", [anObject, self]);
    smalltalk.send(self, "_refreshVariablesWidget", []);
    $1 = smalltalk.send(self, "_refreshDisplayWidget", []);
    return self;
},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self model inspect: anObject on: self.\x0a    \x0a\x09self \x0a    \x09refreshVariablesWidget;\x0a\x09\x09refreshDisplayWidget",
messageSends: ["inspect:on:", "model", "refreshVariablesWidget", "refreshDisplayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_inspectee", []);
    return $1;
},
args: [],
source: "inspectee\x0a\x09^ self model inspectee",
messageSends: ["inspectee", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_inspectee_", [anObject]);
    return self;
},
args: ["anObject"],
source: "inspectee: anObject\x0a\x09self model inspectee: anObject",
messageSends: ["inspectee:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@label']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self['@model'], "_inspectee", []), "_printString", []);
    } else {
        $1 = self['@label'];
    }
    return $1;
},
args: [],
source: "label\x0a    ^ label ifNil: [ model inspectee printString ]",
messageSends: ["ifNil:", "printString", "inspectee"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@model']) == nil || $receiver == undefined) {
        smalltalk.send(self, "_model_", [smalltalk.send(smalltalk.HLInspectorModel || HLInspectorModel, "_new", [])]);
        $1 = self['@model'];
    } else {
        $1 = self['@model'];
    }
    return $1;
},
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLInspectorModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLInspectorModel"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel) {
    var self = this;
    var $1;
    self['@model'] = aModel;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_model_", [smalltalk.send(aModel, "_code", [])]);
    smalltalk.send(self, "_observeCodeWidget", []);
    smalltalk.send(self, "_observeVariablesWidget", []);
    $1 = smalltalk.send(self, "_observeModel", []);
    return self;
},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel. \x0a    self codeWidget model: aModel code.\x0a    \x0a    self \x0a        observeCodeWidget;\x0a    \x09observeVariablesWidget;\x0a        observeModel",
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget", "observeVariablesWidget", "observeModel"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_announcer", []), "_on_do_", [smalltalk.HLDoItExecuted || HLDoItExecuted, function () {return smalltalk.send(self, "_onDoneIt", []);}]);
    return self;
},
args: [],
source: "observeCodeWidget\x0a\x09self codeWidget announcer \x0a    \x09on: HLDoItExecuted \x0a        do: [ self onDoneIt ]\x0a",
messageSends: ["on:do:", "onDoneIt", "announcer", "codeWidget"],
referencedClasses: ["HLDoItExecuted"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected, function (ann) {return smalltalk.send(self, "_onInstanceVariableSelected", []);}]);
    return self;
},
args: [],
source: "observeModel\x0a\x09self model announcer\x0a        on: HLInstanceVariableSelected do: [ :ann | self onInstanceVariableSelected ]",
messageSends: ["on:do:", "onInstanceVariableSelected", "announcer", "model"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeVariablesWidget",
smalltalk.method({
selector: "observeVariablesWidget",
category: 'actions',
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_variablesWidget", []), "_announcer", []);
    smalltalk.send($1, "_on_do_", [smalltalk.HLRefreshRequested || HLRefreshRequested, function (ann) {return smalltalk.send(self, "_onRefresh", []);}]);
    $2 = smalltalk.send($1, "_on_do_", [smalltalk.HLDiveRequested || HLDiveRequested, function () {return smalltalk.send(self, "_onDive", []);}]);
    return self;
},
args: [],
source: "observeVariablesWidget\x0a\x09self variablesWidget announcer \x0a    \x09on: HLRefreshRequested do: [ :ann | self onRefresh ];\x0a        on: HLDiveRequested do:[ self onDive ]\x0a        ",
messageSends: ["on:do:", "onRefresh", "announcer", "variablesWidget", "onDive"],
referencedClasses: ["HLRefreshRequested", "HLDiveRequested"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDive",
smalltalk.method({
selector: "onDive",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspect_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVarObject", [])]);
    return self;
},
args: [],
source: "onDive\x0a\x0a\x09self inspect: self model selectedInstVarObject",
messageSends: ["inspect:", "selectedInstVarObject", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDoneIt",
smalltalk.method({
selector: "onDoneIt",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
},
args: [],
source: "onDoneIt\x0a\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "onInspectIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInstanceVariableSelected",
smalltalk.method({
selector: "onInstanceVariableSelected",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_receiver_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVarObject", [])]);
    smalltalk.send(self, "_refreshDisplayWidget", []);
    return self;
},
args: [],
source: "onInstanceVariableSelected\x0a\x09self codeWidget receiver: self model selectedInstVarObject.\x0a\x09self refreshDisplayWidget",
messageSends: ["receiver:", "selectedInstVarObject", "model", "codeWidget", "refreshDisplayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "onPrintIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onRefresh",
smalltalk.method({
selector: "onRefresh",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
},
args: [],
source: "onRefresh\x0a\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [self, smalltalk.send(self, "_tabLabel", [])])]);
    return self;
},
args: [],
source: "open\x0a\x09HLManager current addTab: (HLTab on: self labelled: self tabLabel)\x0a",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspect_", [smalltalk.send(self, "_inspectee", [])]);
    return self;
},
args: [],
source: "refresh\x0a\x09self inspect: self inspectee",
messageSends: ["inspect:", "inspectee"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshDisplayWidget",
smalltalk.method({
selector: "refreshDisplayWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_displayWidget", []), "_refresh", []);
    return self;
},
args: [],
source: "refreshDisplayWidget\x0a\x09self displayWidget refresh",
messageSends: ["refresh", "displayWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshVariablesWidget",
smalltalk.method({
selector: "refreshVariablesWidget",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_variablesWidget", []), "_refresh", []);
    return self;
},
args: [],
source: "refreshVariablesWidget\x0a\x09self variablesWidget refresh",
messageSends: ["refresh", "variablesWidget"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.HLContainer || HLContainer, "_with_", [smalltalk.send(smalltalk.HLHorizontalSplitter || HLHorizontalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_variablesWidget", []), smalltalk.send(self, "_displayWidget", [])]), smalltalk.send(self, "_codeWidget", [])])])]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLContainer with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            \x09\x09with: self variablesWidget\x0a            \x09    with: self displayWidget)\x0a        with: self codeWidget))\x0a ",
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
category: 'actions',
fn: function (aString) {
    var self = this;
    self['@label'] = aString;
    return self;
},
args: ["aString"],
source: "setLabel: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
category: 'actions',
fn: function (aDictionary) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_variables_", [aDictionary]);
    return self;
},
args: ["aDictionary"],
source: "setVariables: aDictionary\x0a\x09self model variables: aDictionary",
messageSends: ["variables:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_label", []);
    return $1;
},
args: [],
source: "tabLabel\x0a    ^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_variablesWidget",
smalltalk.method({
selector: "variablesWidget",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    if (($receiver = self['@variablesWidget']) == nil ||
        $receiver == undefined) {
        $2 = smalltalk.send(smalltalk.HLInspectorVariablesWidget ||
            HLInspectorVariablesWidget, "_new", []);
        smalltalk.send($2, "_model_", [smalltalk.send(self, "_model", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        self['@variablesWidget'] = $3;
        $1 = self['@variablesWidget'];
    } else {
        $1 = self['@variablesWidget'];
    }
    return $1;
},
args: [],
source: "variablesWidget\x0a\x09^ variablesWidget ifNil: [\x0a\x09\x09variablesWidget := HLInspectorVariablesWidget new\x0a    \x09\x09model: self model;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorVariablesWidget"]
}),
smalltalk.HLInspector);


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
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function () {
    var self = this;
    return "Inspector";
},
args: [],
source: "tabLabel\x0a\x09^ 'Inspector'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector.klass);

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
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplayWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
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
source: "model\x0a\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

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
source: "model: aModel\x0a\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self, "_selectionDisplayString", [])]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: self selectionDisplayString\x0a    ",
messageSends: ["with:", "selectionDisplayString", "div"],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_selectionDisplayString",
smalltalk.method({
selector: "selectionDisplayString",
category: 'rendering',
fn: function () {
    var self = this;
    var $2, $1;
    var selection;
    selection = smalltalk.send(self['@model'], "_selection", []);
    $2 = smalltalk.send(smalltalk.send(smalltalk.send(self['@model'], "_variables", []), "_keys", []), "_includes_", [selection]);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(smalltalk.send(self['@model'], "_instVarObjectAt_", [selection]), "_printString", []);
    } else {
        $1 = "";
    }
    return $1;
},
args: [],
source: "selectionDisplayString\x0a\x09|selection|\x0a\x09selection := model selection.\x0a    ^ (model variables keys includes: selection)\x0a    \x09ifTrue:[(model instVarObjectAt: selection) printString]\x0a      \x09ifFalse:['']",
messageSends: ["selection", "ifTrue:ifFalse:", "printString", "instVarObjectAt:", "includes:", "keys", "variables"],
referencedClasses: []
}),
smalltalk.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
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
source: "announcer\x0a\x09^ announcer ifNil: [announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@code']) == nil || $receiver == undefined) {
        self['@code'] = smalltalk.send(smalltalk.HLCodeModel || HLCodeModel, "_on_", [smalltalk.send(self, "_environment", [])]);
        $1 = self['@code'];
    } else {
        $1 = self['@code'];
    }
    return $1;
},
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ code := HLCodeModel on: self environment ]",
messageSends: ["ifNil:", "on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLInspectorModel);

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
smalltalk.HLInspectorModel);

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
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspect_on_",
smalltalk.method({
selector: "inspect:on:",
category: 'actions',
fn: function (anObject, anInspector) {
    var self = this;
    self['@inspectee'] = anObject;
    self['@variables'] = [];
    smalltalk.send(self['@inspectee'], "_inspectOn_", [anInspector]);
    return self;
},
args: ["anObject", "anInspector"],
source: "inspect: anObject on: anInspector\x0a\x09inspectee := anObject.\x0a\x09variables := #().\x0a\x09inspectee inspectOn: anInspector    \x0a",
messageSends: ["inspectOn:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@inspectee'];
},
args: [],
source: "inspectee \x0a\x09^ inspectee ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@inspectee'] = anObject;
    return self;
},
args: ["anObject"],
source: "inspectee: anObject \x0a\x09inspectee := anObject\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_instVarObjectAt_",
smalltalk.method({
selector: "instVarObjectAt:",
category: 'actions',
fn: function (anInstVarName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [anInstVarName]);
    return $1;
},
args: ["anInstVarName"],
source: "instVarObjectAt: anInstVarName\x0a\x09^ self variables at: anInstVarName",
messageSends: ["at:", "variables"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 80) {
            self._printIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 68) {
            self._doIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 73) {
            self._inspectIt();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVar_",
smalltalk.method({
selector: "selectedInstVar:",
category: 'actions',
fn: function (anInstVarName) {
    var self = this;
    smalltalk.send(self, "_selection_", [anInstVarName]);
    return self;
},
args: ["anInstVarName"],
source: "selectedInstVar: anInstVarName\x0a    self selection: anInstVarName",
messageSends: ["selection:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVarObject",
smalltalk.method({
selector: "selectedInstVarObject",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_instVarObjectAt_", [smalltalk.send(self, "_selection", [])]);
    return $1;
},
args: [],
source: "selectedInstVarObject\x0a\x09^ self instVarObjectAt: self selection\x0a    ",
messageSends: ["instVarObjectAt:", "selection"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selection']) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = self['@selection'];
    }
    return $1;
},
args: [],
source: "selection\x0a\x09^ selection ifNil:[ '' ] ",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection_",
smalltalk.method({
selector: "selection:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@selection'] = anObject;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected, "_on_", [self['@selection']])]);
    return self;
},
args: ["anObject"],
source: "selection: anObject\x0a\x09selection := anObject.\x0a\x0a\x09self announcer announce: (HLInstanceVariableSelected on: selection)\x0a    ",
messageSends: ["announce:", "on:", "announcer"],
referencedClasses: ["HLInstanceVariableSelected"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
category: 'actions',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(aWidget, "_subscribeTo_", [smalltalk.send(self, "_announcer", [])]);
    return self;
},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@variables'];
},
args: [],
source: "variables\x0a\x09^ variables",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables_",
smalltalk.method({
selector: "variables:",
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    self['@variables'] = aCollection;
    return self;
},
args: ["aCollection"],
source: "variables: aCollection\x0a\x09variables := aCollection\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);


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
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
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
source: "announcer\x0a\x09^ announcer ifNil:[ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
category: 'defaults',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_variables", []), "_keys", []);
    return $1;
},
args: [],
source: "defaultItems\x0a\x09^ self model variables keys",
messageSends: ["keys", "variables", "model"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

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
source: "model\x0a    ^ model\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

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
source: "model: aModel\x0a    model := aModel\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_resetItems", []);
    smalltalk.send(self, "_refresh", [], smalltalk.HLNavigationListWidget);
    return self;
},
args: [],
source: "refresh\x0a\x09self resetItems.\x0a    super refresh\x0a    ",
messageSends: ["resetItems", "refresh"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2, $3, $4;
    $1 = smalltalk.send(html, "_button", []);
    smalltalk.send($1, "_class_", ["btn"]);
    smalltalk.send($1, "_with_", ["Refresh"]);
    $2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLRefreshRequested || HLRefreshRequested, "_new", [])]);}]);
    $3 = smalltalk.send(html, "_button", []);
    smalltalk.send($3, "_class_", ["btn"]);
    smalltalk.send($3, "_with_", ["Dive"]);
    $4 = smalltalk.send($3, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLDiveRequested || HLDiveRequested, "_new", [])]);}]);
    self['@diveButton'] = $4;
    return self;
},
args: ["html"],
source: "renderButtonsOn: html\x0a\x0a\x09html button\x0a\x09\x09\x09class: 'btn';\x0a\x09\x09\x09with: 'Refresh';\x0a\x09\x09\x09onClick: [self announcer announce: HLRefreshRequested new].\x0a\x0a\x09diveButton := html button \x0a\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09with: 'Dive'; \x0a\x09\x09\x09\x09onClick: [self announcer announce: HLDiveRequested new]",
messageSends: ["class:", "button", "with:", "onClick:", "announce:", "new", "announcer"],
referencedClasses: ["HLRefreshRequested", "HLDiveRequested"]
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_resetItems",
smalltalk.method({
selector: "resetItems",
category: 'actions',
fn: function () {
    var self = this;
    self['@items'] = nil;
    return self;
},
args: [],
source: "resetItems\x0a\x09items := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'reactions',
fn: function (anObject) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [anObject], smalltalk.HLNavigationListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVar_", [anObject]);
    return self;
},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09super selectItem: anObject.\x0a    self model selectedInstVar: anObject",
messageSends: ["selectItem:", "selectedInstVar:", "model"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@model'], "_selection", []);
    return $1;
},
args: [],
source: "selection\x0a\x09^ model selection",
messageSends: ["selection"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@model'], "_variables", []);
    return $1;
},
args: [],
source: "variables\x0a\x09^ model variables",
messageSends: ["variables"],
referencedClasses: []
}),
smalltalk.HLInspectorVariablesWidget);



