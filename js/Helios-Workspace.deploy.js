smalltalk.addPackage('Helios-Workspace', {});
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
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
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_defaultReceiver",
smalltalk.method({
selector: "defaultReceiver",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.DoIt || DoIt, "_new", []);
    return $1;
}
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
fn: function (someCode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_eval_on_", [someCode, smalltalk.send(self, "_receiver", [])]);
    return $1;
}
}),
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@receiver']) == nil || $receiver == undefined) {
        self['@receiver'] = smalltalk.send(self, "_defaultReceiver", []);
        $1 = self['@receiver'];
    } else {
        $1 = self['@receiver'];
    }
    return $1;
}
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject) {
    var self = this;
    self['@receiver'] = anObject;
    return self;
}
}),
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);


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
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor'], 'Helios-Workspace');
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
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function () {
    var self = this;
    smalltalk.send(self, "_contents_", [""]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@editor"],"_getValue",[]);
return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
smalltalk.send(self["@editor"],"_setValue_",[aString]);
return self}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self['@editor'], "_somethingSelected", []);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(self, "_selection", []);
    } else {
        $1 = smalltalk.send(self, "_currentLine", []);
    }
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function () {
    var self = this;
    var result;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLDoItRequested || HLDoItRequested, "_on_", [self['@model']])]);
    result = smalltalk.send(self['@model'], "_doIt_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLDoItExecuted || HLDoItExecuted, "_on_", [self['@model']])]);
    return result;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function () {
    var self = this;
    return self['@editor'];
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_editor", []), "_focus", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function () {
    var self = this;
    var newInspector;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLInspectItRequested || HLInspectItRequested, "_on_", [self['@model']])]);
    newInspector = smalltalk.send(self, "_makeInspectorOn_", [smalltalk.send(self, "_doIt", [])]);
    smalltalk.send(newInspector, "_open", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_makeInspectorOn_",
smalltalk.method({
selector: "makeInspectorOn:",
fn: function (anObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.HLInspector || HLInspector, "_new", []);
    smalltalk.send($2, "_inspect_", [anObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@model']) == nil || $receiver == undefined) {
        smalltalk.send(self, "_model_", [smalltalk.send(smalltalk.HLCodeModel || HLCodeModel, "_new", [])]);
        $1 = self['@model'];
    } else {
        $1 = self['@model'];
    }
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_observeWrapper",
smalltalk.method({
selector: "observeWrapper",
fn: function () {
    var self = this;
    smalltalk.send(self['@wrapper'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_onKeyDown_", [e]);}]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_doIt", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspectIt", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 80) {
            self._onPrintIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 68) {
            self._onDoIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 73) {
            self._onInspectIt();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_printIt", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
fn: function (aString) {
    var self = this;
    var start;
    var stop;
    start = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    stop = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
    smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
    smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
    smalltalk.send(stop, "_at_put_", ["ch", smalltalk.send(smalltalk.send(smalltalk.send(start, "_at_", ["ch"]), "__plus", [smalltalk.send(aString, "_size", [])]), "__plus", [2])]);
    smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
    smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
    smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function () {
    var self = this;
    var result;
    result = smalltalk.send(self, "_doIt", []);
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLPrintItRequested || HLPrintItRequested, "_on_", [self['@model']])]);
    smalltalk.send(self, "_print_", [smalltalk.send(result, "_printString", [])]);
    smalltalk.send(self, "_focus", []);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_receiver", []);
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_receiver_", [anObject]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
self["@code"]=smalltalk.send(html,"_textarea",[]);
smalltalk.send(self,"_setEditorOn_",[smalltalk.send(self["@code"],"_element",[])]);
smalltalk.send(self,"_observeWrapper",[]);
return self}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getSelection", []);
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionEnd", []);
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionEnd_", [anInteger]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionStart", []);
    return $1;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionStart_", [anInteger]);
    return self;
}
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
}
}),
smalltalk.HLCodeWidget);



smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Workspace');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function () {
    var self = this;
    var $2, $3, $1;
    if (($receiver = self['@codeWidget']) == nil || $receiver == undefined) {
        $2 = smalltalk.send(smalltalk.HLCodeWidget || HLCodeWidget, "_new", []);
        smalltalk.send($2, "_model_", [smalltalk.send(smalltalk.send(self, "_model", []), "_code", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        self['@codeWidget'] = $3;
        $1 = self['@codeWidget'];
    } else {
        $1 = self['@codeWidget'];
    }
    return $1;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@model']) == nil || $receiver == undefined) {
        smalltalk.send(self, "_model_", [smalltalk.send(smalltalk.HLWorkspaceModel || HLWorkspaceModel, "_new", [])]);
        $1 = self['@model'];
    } else {
        $1 = self['@model'];
    }
    return $1;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel) {
    var self = this;
    self['@model'] = aModel;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_model_", [smalltalk.send(aModel, "_code", [])]);
    smalltalk.send(self, "_observeCodeWidget", []);
    return self;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(self, "_codeWidget", [])]);
    return self;
}
}),
smalltalk.HLWorkspace);


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


smalltalk.addClass('HLWorkspaceModel', smalltalk.Object, ['announcer', 'environment', 'code'], 'Helios-Workspace');
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
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@code']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.HLCodeModel || HLCodeModel, "_on_", [smalltalk.send(self, "_environment", [])]);
    } else {
        $1 = self['@code'];
    }
    return $1;
}
}),
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);


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
smalltalk.HLWorkspaceModel.klass);


