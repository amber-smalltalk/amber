smalltalk.addPackage('Helios-Inspector', {});
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget', 'label'], 'Helios-Inspector');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
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
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_displayWidget",
smalltalk.method({
selector: "displayWidget",
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
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
fn: function (anObject) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(self, "_model", []), "_inspect_on_", [anObject, self]);
    smalltalk.send(self, "_refreshVariablesWidget", []);
    $1 = smalltalk.send(self, "_refreshDisplayWidget", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_inspectee", []);
    return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_inspectee_", [anObject]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@label']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self['@model'], "_inspectee", []), "_printString", []);
    } else {
        $1 = self['@label'];
    }
    return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
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
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel) {
    var self = this;
    var $1;
    self['@model'] = aModel;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_model_", [smalltalk.send(aModel, "_code", [])]);
    smalltalk.send(self, "_observeCodeWidget", []);
    smalltalk.send(self, "_observeVariablesWidget", []);
    $1 = smalltalk.send(self, "_observeModel", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_announcer", []), "_on_do_", [smalltalk.HLDoItExecuted || HLDoItExecuted, function () {return smalltalk.send(self, "_onDoneIt", []);}]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_announcer", []), "_on_do_", [smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected, function (ann) {return smalltalk.send(self, "_onInstanceVariableSelected", []);}]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeVariablesWidget",
smalltalk.method({
selector: "observeVariablesWidget",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_variablesWidget", []), "_announcer", []);
    smalltalk.send($1, "_on_do_", [smalltalk.HLRefreshRequested || HLRefreshRequested, function (ann) {return smalltalk.send(self, "_onRefresh", []);}]);
    $2 = smalltalk.send($1, "_on_do_", [smalltalk.HLDiveRequested || HLDiveRequested, function () {return smalltalk.send(self, "_onDive", []);}]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDive",
smalltalk.method({
selector: "onDive",
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspect_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVarObject", [])]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDoneIt",
smalltalk.method({
selector: "onDoneIt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInstanceVariableSelected",
smalltalk.method({
selector: "onInstanceVariableSelected",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_receiver_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVarObject", [])]);
    smalltalk.send(self, "_refreshDisplayWidget", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onRefresh",
smalltalk.method({
selector: "onRefresh",
fn: function () {
    var self = this;
    smalltalk.send(self, "_refresh", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HLManager || HLManager, "_current", []), "_addTab_", [smalltalk.send(smalltalk.HLTab || HLTab, "_on_labelled_", [self, smalltalk.send(self, "_tabLabel", [])])]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspect_", [smalltalk.send(self, "_inspectee", [])]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshDisplayWidget",
smalltalk.method({
selector: "refreshDisplayWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_displayWidget", []), "_refresh", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshVariablesWidget",
smalltalk.method({
selector: "refreshVariablesWidget",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_variablesWidget", []), "_refresh", []);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.HLContainer || HLContainer, "_with_", [smalltalk.send(smalltalk.HLHorizontalSplitter || HLHorizontalSplitter, "_with_with_", [smalltalk.send(smalltalk.HLVerticalSplitter || HLVerticalSplitter, "_with_with_", [smalltalk.send(self, "_variablesWidget", []), smalltalk.send(self, "_displayWidget", [])]), smalltalk.send(self, "_codeWidget", [])])])]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString) {
    var self = this;
    self['@label'] = aString;
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aDictionary) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_variables_", [aDictionary]);
    return self;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_label", []);
    return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_variablesWidget",
smalltalk.method({
selector: "variablesWidget",
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
}
}),
smalltalk.HLInspector);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function () {
    var self = this;
    return "Inspector";
}
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function () {
    var self = this;
    return 10;
}
}),
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplayWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    return self['@model'];
}
}),
smalltalk.HLInspectorDisplayWidget);

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
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self, "_selectionDisplayString", [])]);
    return self;
}
}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_selectionDisplayString",
smalltalk.method({
selector: "selectionDisplayString",
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
}
}),
smalltalk.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
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
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
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
}
}),
smalltalk.HLInspectorModel);

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
smalltalk.HLInspectorModel);

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
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspect_on_",
smalltalk.method({
selector: "inspect:on:",
fn: function (anObject, anInspector) {
    var self = this;
    self['@inspectee'] = anObject;
    self['@variables'] = [];
    smalltalk.send(self['@inspectee'], "_inspectOn_", [anInspector]);
    return self;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function () {
    var self = this;
    return self['@inspectee'];
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject) {
    var self = this;
    self['@inspectee'] = anObject;
    return self;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_instVarObjectAt_",
smalltalk.method({
selector: "instVarObjectAt:",
fn: function (anInstVarName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [anInstVarName]);
    return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
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
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVar_",
smalltalk.method({
selector: "selectedInstVar:",
fn: function (anInstVarName) {
    var self = this;
    smalltalk.send(self, "_selection_", [anInstVarName]);
    return self;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVarObject",
smalltalk.method({
selector: "selectedInstVarObject",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_instVarObjectAt_", [smalltalk.send(self, "_selection", [])]);
    return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@selection']) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = self['@selection'];
    }
    return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection_",
smalltalk.method({
selector: "selection:",
fn: function (anObject) {
    var self = this;
    self['@selection'] = anObject;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected, "_on_", [self['@selection']])]);
    return self;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(aWidget, "_subscribeTo_", [smalltalk.send(self, "_announcer", [])]);
    return self;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function () {
    var self = this;
    return self['@variables'];
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables_",
smalltalk.method({
selector: "variables:",
fn: function (aCollection) {
    var self = this;
    self['@variables'] = aCollection;
    return self;
}
}),
smalltalk.HLInspectorModel);


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
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
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
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_model", []), "_variables", []), "_keys", []);
    return $1;
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    return self['@model'];
}
}),
smalltalk.HLInspectorVariablesWidget);

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
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function () {
    var self = this;
    smalltalk.send(self, "_resetItems", []);
    smalltalk.send(self, "_refresh", [], smalltalk.HLNavigationListWidget);
    return self;
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
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
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_resetItems",
smalltalk.method({
selector: "resetItems",
fn: function () {
    var self = this;
    self['@items'] = nil;
    return self;
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (anObject) {
    var self = this;
    smalltalk.send(self, "_selectItem_", [anObject], smalltalk.HLNavigationListWidget);
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedInstVar_", [anObject]);
    return self;
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@model'], "_selection", []);
    return $1;
}
}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@model'], "_variables", []);
    return $1;
}
}),
smalltalk.HLInspectorVariablesWidget);



