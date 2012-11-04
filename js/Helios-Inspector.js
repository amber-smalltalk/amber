smalltalk.addPackage('Helios-Inspector', {});
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variables', 'display', 'code'], 'Helios-Inspector');
smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@code"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeCode",[]);
} else {
$1=self["@code"];
};
return $1;
},
args: [],
source: "code\x0a\x0a\x09^ code ifNil:[self initializeCode]",
messageSends: ["ifNil:", "initializeCode"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_display",
smalltalk.method({
selector: "display",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@display"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeDisplay",[]);
} else {
$1=self["@display"];
};
return $1;
},
args: [],
source: "display\x0a\x0a\x09^ display ifNil:[self initializeDisplay]",
messageSends: ["ifNil:", "initializeDisplay"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_ensureModel",
smalltalk.method({
selector: "ensureModel",
category: 'actions',
fn: function (){
var self=this;
if(($receiver = self["@model"]) == nil || $receiver == undefined){
smalltalk.send(self,"_model_",[smalltalk.send(self,"_model",[])]);
} else {
self["@model"];
};
return self},
args: [],
source: "ensureModel\x0a\x09\x22Sends the #model: initialization message if needed.\x22\x0a\x0a\x09model ifNil:[\x0a\x09\x09self model: self model]\x0a\x09",
messageSends: ["ifNil:", "model:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeCode",
smalltalk.method({
selector: "initializeCode",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@code"]=smalltalk.send(self,"_makeCode",[]);
$1=self["@code"];
return $1;
},
args: [],
source: "initializeCode\x0a\x0a\x09^ code := self makeCode.",
messageSends: ["makeCode"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeDisplay",
smalltalk.method({
selector: "initializeDisplay",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@display"]=smalltalk.send(self,"_makeDisplay",[]);
$1=self["@display"];
return $1;
},
args: [],
source: "initializeDisplay\x0a\x09^ display := self makeDisplay",
messageSends: ["makeDisplay"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeModel",
smalltalk.method({
selector: "initializeModel",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@model"]=smalltalk.send((smalltalk.HLInspectorModel || HLInspectorModel),"_new",[]);
$1=self["@model"];
return $1;
},
args: [],
source: "initializeModel\x0a\x0a\x09^ model := HLInspectorModel new",
messageSends: ["new"],
referencedClasses: ["HLInspectorModel"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeVariables",
smalltalk.method({
selector: "initializeVariables",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@variables"]=smalltalk.send(self,"_makeVariables",[]);
$1=self["@variables"];
return $1;
},
args: [],
source: "initializeVariables\x0a\x09^ variables := self makeVariables",
messageSends: ["makeVariables"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_inspectee_",[anObject]);
return self},
args: ["anObject"],
source: "inspect: anObject\x0a\x0a\x09self model inspectee: anObject",
messageSends: ["inspectee:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_model",[]),"_inspectee",[]);
return $1;
},
args: [],
source: "inspectee\x0a\x0a\x09^ self model inspectee",
messageSends: ["inspectee", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_inspectee_",[anObject]);
return self},
args: ["anObject"],
source: "inspectee: anObject\x0a\x0a\x09self model inspectee: anObject",
messageSends: ["inspectee:", "model"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeCode",
smalltalk.method({
selector: "makeCode",
category: 'actions',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.HLCodeWidget || HLCodeWidget),"_new",[]);
smalltalk.send($2,"_model_",[smalltalk.send(self["@model"],"_code",[])]);
smalltalk.send($2,"_doItReaction_",[(function(){
return smalltalk.send(self,"_refresh",[]);
})]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "makeCode\x0a\x0a\x09^ HLCodeWidget new\x0a    \x09model: model code;\x0a\x09\x09doItReaction: [self refresh];\x0a        yourself.\x0a        \x0a",
messageSends: ["model:", "code", "new", "doItReaction:", "refresh", "yourself"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeDisplay",
smalltalk.method({
selector: "makeDisplay",
category: 'actions',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.HLInspectorDisplay || HLInspectorDisplay),"_new",[]);
smalltalk.send($2,"_model_",[smalltalk.send(self,"_model",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "makeDisplay\x0a\x0a\x09^ HLInspectorDisplay new\x0a    \x09model: self model;\x0a        yourself\x0a",
messageSends: ["model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorDisplay"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeVariables",
smalltalk.method({
selector: "makeVariables",
category: 'actions',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.HLInspectorVariables || HLInspectorVariables),"_new",[]);
smalltalk.send($2,"_model_",[smalltalk.send(self,"_model",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "makeVariables\x0a\x0a\x09^ HLInspectorVariables new\x0a    \x09model: self model;\x0a        yourself\x0a",
messageSends: ["model:", "model", "new", "yourself"],
referencedClasses: ["HLInspectorVariables"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@model"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeModel",[]);
} else {
$1=self["@model"];
};
return $1;
},
args: [],
source: "model\x0a\x0a\x09^ model ifNil:[self initializeModel]",
messageSends: ["ifNil:", "initializeModel"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
smalltalk.send(smalltalk.send(self,"_code",[]),"_model_",[smalltalk.send(aModel,"_code",[])]);
smalltalk.send(self,"_observeCode",[]);
return self},
args: ["aModel"],
source: "model: aModel\x0a\x0a\x09model := aModel.\x0a     \x0a    self code model: aModel code.\x0a    self observeCode.\x0a    ",
messageSends: ["model:", "code", "observeCode"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeCode",
smalltalk.method({
selector: "observeCode",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "observeCode\x0a\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onInspectIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onPrintIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.HLManager || HLManager),"_current",[]),"_addTab_",[smalltalk.send((smalltalk.HLTab || HLTab),"_on_labelled_",[self,smalltalk.send(self,"_tabLabel",[])])]);
return self},
args: [],
source: "open\x0a\x0a\x09HLManager current addTab: (HLTab on: self labelled: self tabLabel)\x0a",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_inspect_",[smalltalk.send(self,"_inspectee",[])]);
smalltalk.send(self,"_updateVariablesList",[]);
$1=smalltalk.send(self,"_updateValueTextarea",[]);
return self},
args: [],
source: "refresh\x0a\x0a\x09self \x0a\x09\x09inspect: self inspectee; \x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea",
messageSends: ["inspect:", "inspectee", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self,"_ensureModel",[]);
smalltalk.send(html,"_with_",[smalltalk.send((smalltalk.HLContainer || HLContainer),"_with_",[smalltalk.send((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send(self,"_variables",[]),smalltalk.send(self,"_display",[])]),smalltalk.send(self,"_code",[])])])]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09self ensureModel.\x0a    \x0a   \x09html with: (HLContainer with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            \x09\x09with: self variables\x0a            \x09    with: self display)\x0a        with: self code))\x0a ",
messageSends: ["ensureModel", "with:", "with:with:", "variables", "display", "code"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self["@model"],"_inspectee",[]),"_printString",[]);
return $1;
},
args: [],
source: "tabLabel\x0a\x09\x0a    ^ model inspectee printString",
messageSends: ["printString", "inspectee"],
referencedClasses: []
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@variables"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeVariables",[]);
} else {
$1=self["@variables"];
};
return $1;
},
args: [],
source: "variables\x0a\x0a\x09^ variables ifNil:[self initializeVariables]",
messageSends: ["ifNil:", "initializeVariables"],
referencedClasses: []
}),
smalltalk.HLInspector);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
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
fn: function (){
var self=this;
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
fn: function (){
var self=this;
return (10);
},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplay', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return self["@model"];
},
args: [],
source: "model\x0a\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplay);

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
source: "model: aModel\x0a\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorDisplay);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",["display"]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: 'display'\x0a    ",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.HLInspectorDisplay);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@announcer"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeAnnouncer",[]);
} else {
$1=self["@announcer"];
};
return $1;
},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ self initializeAnnouncer ]",
messageSends: ["ifNil:", "initializeAnnouncer"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_beLocal",
smalltalk.method({
selector: "beLocal",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_initializeEnvironment",[]);
return self},
args: [],
source: "beLocal\x0a\x0a\x09self initializeEnvironment\x0a",
messageSends: ["initializeEnvironment"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_beRemoteOn_port_",
smalltalk.method({
selector: "beRemoteOn:port:",
category: 'actions',
fn: function (anIPAddress,aPort){
var self=this;
return self},
args: ["anIPAddress", "aPort"],
source: "beRemoteOn: anIPAddress port: aPort\x0a\x0a\x09\x22to-do\x22\x0a    \x0a    \x22environment := HLRemoteEnvironment on: anIPAddress port: aPort\x0a    \x0a    ...kind of stuff\x22\x0a    \x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@code"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeCode",[]);
} else {
$1=self["@code"];
};
return $1;
},
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[self initializeCode]",
messageSends: ["ifNil:", "initializeCode"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@environment"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeEnvironment",[]);
} else {
$1=self["@environment"];
};
return $1;
},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ self initializeEnvironment]",
messageSends: ["ifNil:", "initializeEnvironment"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeAnnouncer",
smalltalk.method({
selector: "initializeAnnouncer",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
$1=self["@announcer"];
return $1;
},
args: [],
source: "initializeAnnouncer\x0a\x09^ announcer := Announcer new",
messageSends: ["new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeCode",
smalltalk.method({
selector: "initializeCode",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@code"]=smalltalk.send((smalltalk.HLCodeModel || HLCodeModel),"_on_",[smalltalk.send(self,"_environment",[])]);
$1=self["@code"];
return $1;
},
args: [],
source: "initializeCode\x0a\x0a\x09^ code := HLCodeModel on: self environment",
messageSends: ["on:", "environment"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeEnvironment",
smalltalk.method({
selector: "initializeEnvironment",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@environment"]=smalltalk.send((smalltalk.HLLocalEnvironment || HLLocalEnvironment),"_new",[]);
$1=self["@environment"];
return $1;
},
args: [],
source: "initializeEnvironment\x0a\x09^ environment := HLLocalEnvironment new",
messageSends: ["new"],
referencedClasses: ["HLLocalEnvironment"]
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeSelection",
smalltalk.method({
selector: "initializeSelection",
category: 'initialization',
fn: function (){
var self=this;
var $1;
self["@selection"]=smalltalk.send(self,"_inspectee",[]);
$1=self["@selection"];
return $1;
},
args: [],
source: "initializeSelection\x0a\x0a\x09^ selection := self inspectee",
messageSends: ["inspectee"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
category: 'accessing',
fn: function (){
var self=this;
return self["@inspectee"];
},
args: [],
source: "inspectee \x0a\x0a\x09^ inspectee ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@inspectee"]=anObject;
return self},
args: ["anObject"],
source: "inspectee: anObject \x0a\x0a\x09inspectee := anObject\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'reactions',
fn: function (anEvent){
var self=this;
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	};
;
return self},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@selection"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeSelection",[]);
} else {
$1=self["@selection"];
};
return $1;
},
args: [],
source: "selection\x0a\x0a\x09^ selection ifNil:[self initializeSelection] ",
messageSends: ["ifNil:", "initializeSelection"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection_",
smalltalk.method({
selector: "selection:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@selection"]=anObject;
return self},
args: ["anObject"],
source: "selection: anObject\x0a\x0a\x09selection := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
category: 'actions',
fn: function (aWidget){
var self=this;
smalltalk.send(aWidget,"_subscribeTo_",[smalltalk.send(self,"_announcer",[])]);
return self},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
smalltalk.HLInspectorModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_environment_",[anEnvironment]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariables', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return self["@model"];
},
args: [],
source: "model\x0a\x09\x0a    ^ model\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariables);

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
source: "model: aModel\x0a\x09\x0a    model := aModel\x0a        ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",["variables"]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: 'variables'\x0a    ",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.HLInspectorVariables);



