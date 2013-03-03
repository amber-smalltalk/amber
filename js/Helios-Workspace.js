smalltalk.addPackage('Helios-Workspace', {});
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
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
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_defaultReceiver",
smalltalk.method({
selector: "defaultReceiver",
category: 'defaults',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.DoIt || DoIt, "_new", []);
    return $1;
},
args: [],
source: "defaultReceiver\x0a\x09^ DoIt new",
messageSends: ["new"],
referencedClasses: ["DoIt"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
category: 'actions',
fn: function (someCode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_environment", []), "_eval_on_", [someCode, smalltalk.send(self, "_receiver", [])]);
    return $1;
},
args: ["someCode"],
source: "doIt: someCode\x0a\x0a\x09^ self environment eval: someCode on: self receiver",
messageSends: ["eval:on:", "receiver", "environment"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
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
},
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
messageSends: ["ifNil:", "defaultReceiver"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@receiver'] = anObject;
    return self;
},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

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
smalltalk.HLCodeModel);


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
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor'], 'Helios-Workspace');
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
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_contents_", [""]);
    return self;
},
args: [],
source: "clear\x0a      self contents: ''",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@editor"],"_getValue",[]);
return $1;
},
args: [],
source: "contents\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self["@editor"],"_setValue_",[aString]);
return self},
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
    return $1;
},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
category: 'accessing',
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
},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [self currentLine]\x0a\x09\x09ifTrue: [self selection]",
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function () {
    var self = this;
    var result;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLDoItRequested || HLDoItRequested, "_on_", [self['@model']])]);
    result = smalltalk.send(self['@model'], "_doIt_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLDoItExecuted || HLDoItExecuted, "_on_", [self['@model']])]);
    return result;
},
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09self announcer announce: (HLDoItRequested on: model).\x0a\x0a\x09result:=  model doIt: self currentLineOrSelection.\x0a\x0a\x09self announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result        ",
messageSends: ["announce:", "on:", "announcer", "doIt:", "currentLineOrSelection"],
referencedClasses: ["HLDoItRequested", "HLDoItExecuted"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
category: 'actions',
fn: function () {
    var self = this;
    return self['@editor'];
},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_editor", []), "_focus", []);
    return self;
},
args: [],
source: "focus\x0a      self editor focus",
messageSends: ["focus", "editor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function () {
    var self = this;
    var newInspector;
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLInspectItRequested || HLInspectItRequested, "_on_", [self['@model']])]);
    newInspector = smalltalk.send(self, "_makeInspectorOn_", [smalltalk.send(self, "_doIt", [])]);
    smalltalk.send(newInspector, "_open", []);
    return self;
},
args: [],
source: "inspectIt\x0a\x0a\x09| newInspector |\x0a       \x0a\x09self announcer announce: (HLInspectItRequested on: model).\x0a\x09newInspector := self makeInspectorOn: self doIt.\x0a\x09newInspector open",
messageSends: ["announce:", "on:", "announcer", "makeInspectorOn:", "doIt", "open"],
referencedClasses: ["HLInspectItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_makeInspectorOn_",
smalltalk.method({
selector: "makeInspectorOn:",
category: 'actions',
fn: function (anObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.HLInspector || HLInspector, "_new", []);
    smalltalk.send($2, "_inspect_", [anObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["anObject"],
source: "makeInspectorOn: anObject\x0a\x0a\x09^ HLInspector new \x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: ["HLInspector"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
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
},
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLCodeModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_observeWrapper",
smalltalk.method({
selector: "observeWrapper",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self['@wrapper'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_onKeyDown_", [e]);}]);
    return self;
},
args: [],
source: "observeWrapper\x0a\x0a    wrapper onKeyDown: [ :e | self onKeyDown: e ]\x0a",
messageSends: ["onKeyDown:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_doIt", []);
    return self;
},
args: [],
source: "onDoIt\x0a\x09\x0a    self doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_inspectIt", []);
    return self;
},
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
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
},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x0a    <if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._onPrintIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._onDoIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._onInspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_printIt", []);
    return self;
},
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
category: 'actions',
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
},
args: ["aString"],
source: "print: aString\x0a\x09| start stop |\x0a\x09start := HashedCollection new.\x0a\x09stop := HashedCollection new.\x0a\x09start at: 'line' put: (editor getCursor: false) line.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a\x09stop at: 'line' put: (start at: 'line').\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["new", "at:put:", "line", "getCursor:", "ch", "at:", "+", "size", "replaceSelection:", ",", "getSelection", "setCursor:", "setSelection:end:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function () {
    var self = this;
    var result;
    result = smalltalk.send(self, "_doIt", []);
    smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [smalltalk.send(smalltalk.HLPrintItRequested || HLPrintItRequested, "_on_", [self['@model']])]);
    smalltalk.send(self, "_print_", [smalltalk.send(result, "_printString", [])]);
    smalltalk.send(self, "_focus", []);
    return self;
},
args: [],
source: "printIt\x0a\x0a\x09| result |\x0a\x0a\x09result:=  self doIt.\x0a       \x0a\x09self announcer announce: (HLPrintItRequested on: model).\x0a\x0a    self print: result printString.\x0a\x09self focus.",
messageSends: ["doIt", "announce:", "on:", "announcer", "print:", "printString", "focus"],
referencedClasses: ["HLPrintItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_model", []), "_receiver", []);
    return $1;
},
args: [],
source: "receiver\x0a\x09^ self model receiver",
messageSends: ["receiver", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_receiver_", [anObject]);
    return self;
},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
messageSends: ["receiver:", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
self["@code"]=smalltalk.send(html,"_textarea",[]);
smalltalk.send(self,"_setEditorOn_",[smalltalk.send(self["@code"],"_element",[])]);
smalltalk.send(self,"_observeWrapper",[]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a    code := html textarea.\x0a    self setEditorOn: code element.\x0a    \x0a    self observeWrapper",
messageSends: ["textarea", "setEditorOn:", "element", "observeWrapper"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getSelection", []);
    return $1;
},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionEnd", []);
    return $1;
},
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionEnd_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionStart", []);
    return $1;
},
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@code'], "_element", []), "_selectionStart_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
category: 'actions',
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a                lineNumbers: true,\x0a                enterMode: 'flat',\x0a                matchBrackets: true,\x0a                electricChars: false\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);



smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Workspace');
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
        smalltalk.send($2, "_model_", [smalltalk.send(smalltalk.send(self, "_model", []), "_code", [])]);
        $3 = smalltalk.send($2, "_yourself", []);
        self['@codeWidget'] = $3;
        $1 = self['@codeWidget'];
    } else {
        $1 = self['@codeWidget'];
    }
    return $1;
},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := HLCodeWidget new\x0a    \x09\x09model: self model code;\x0a        \x09yourself ]",
messageSends: ["ifNil:", "model:", "code", "model", "new", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
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
},
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLWorkspaceModel new.\x0a\x09\x09model ]",
messageSends: ["ifNil:", "model:", "new"],
referencedClasses: ["HLWorkspaceModel"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel) {
    var self = this;
    self['@model'] = aModel;
    smalltalk.send(smalltalk.send(self, "_codeWidget", []), "_model_", [smalltalk.send(aModel, "_code", [])]);
    smalltalk.send(self, "_observeCodeWidget", []);
    return self;
},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a     \x0a    self codeWidget model: aModel code.\x0a    self observeCodeWidget.\x0a    ",
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
category: 'actions',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "observeCodeWidget\x0a\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

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
smalltalk.HLWorkspace);

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
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_with_", [smalltalk.send(self, "_codeWidget", [])]);
    return self;
},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self codeWidget\x0a    ",
messageSends: ["with:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);


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


smalltalk.addClass('HLWorkspaceModel', smalltalk.Object, ['announcer', 'environment', 'code'], 'Helios-Workspace');
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
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@code']) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.HLCodeModel || HLCodeModel, "_on_", [smalltalk.send(self, "_environment", [])]);
    } else {
        $1 = self['@code'];
    }
    return $1;
},
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ HLCodeModel on: self environment ]",
messageSends: ["ifNil:", "on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);

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
smalltalk.HLWorkspaceModel);


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
smalltalk.HLWorkspaceModel.klass);


