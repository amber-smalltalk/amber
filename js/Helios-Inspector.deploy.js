smalltalk.addPackage('Helios-Inspector', {});
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variables', 'display', 'code', 'label'], 'Helios-Inspector');
smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@code"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeCode",[]);
} else {
$1=self["@code"];
};
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_display",
smalltalk.method({
selector: "display",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@display"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeDisplay",[]);
} else {
$1=self["@display"];
};
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_ensureModel",
smalltalk.method({
selector: "ensureModel",
fn: function (){
var self=this;
smalltalk.send(self,"_observeVariables",[]);
if(($receiver = self["@model"]) == nil || $receiver == undefined){
smalltalk.send(self,"_model_",[smalltalk.send(self,"_model",[])]);
} else {
self["@model"];
};
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeCode",
smalltalk.method({
selector: "initializeCode",
fn: function (){
var self=this;
var $1;
self["@code"]=smalltalk.send(self,"_makeCode",[]);
$1=self["@code"];
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeDisplay",
smalltalk.method({
selector: "initializeDisplay",
fn: function (){
var self=this;
var $1;
self["@display"]=smalltalk.send(self,"_makeDisplay",[]);
$1=self["@display"];
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeLabel",
smalltalk.method({
selector: "initializeLabel",
fn: function (){
var self=this;
var $1;
self["@label"]=smalltalk.send(smalltalk.send(self["@model"],"_inspectee",[]),"_printString",[]);
$1=self["@label"];
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeModel",
smalltalk.method({
selector: "initializeModel",
fn: function (){
var self=this;
var $1;
self["@model"]=smalltalk.send((smalltalk.HLInspectorModel || HLInspectorModel),"_new",[]);
$1=self["@model"];
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_initializeVariables",
smalltalk.method({
selector: "initializeVariables",
fn: function (){
var self=this;
var $1;
self["@variables"]=smalltalk.send(self,"_makeVariables",[]);
$1=self["@variables"];
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_inspect_on_",[anObject,self]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_model",[]),"_inspectee",[]);
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_inspectee_",[anObject]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@label"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeLabel",[]);
} else {
$1=self["@label"];
};
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeCode",
smalltalk.method({
selector: "makeCode",
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
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeDisplay",
smalltalk.method({
selector: "makeDisplay",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.HLInspectorDisplay || HLInspectorDisplay),"_new",[]);
smalltalk.send($2,"_model_",[smalltalk.send(self,"_model",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_makeVariables",
smalltalk.method({
selector: "makeVariables",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.HLInspectorVariables || HLInspectorVariables),"_new",[]);
smalltalk.send($2,"_model_",[smalltalk.send(self,"_model",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@model"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeModel",[]);
} else {
$1=self["@model"];
};
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
self["@model"]=aModel;
smalltalk.send(smalltalk.send(self,"_code",[]),"_model_",[smalltalk.send(aModel,"_code",[])]);
smalltalk.send(self,"_observeCode",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeCode",
smalltalk.method({
selector: "observeCode",
fn: function (){
var self=this;
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeVariables",
smalltalk.method({
selector: "observeVariables",
fn: function (){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(smalltalk.send(self,"_variables",[]),"_announcer",[]);
smalltalk.send($1,"_on_do_",[(smalltalk.HLRefreshRequested || HLRefreshRequested),(function(ann){
return smalltalk.send(self,"_onRefresh",[]);
})]);
$2=smalltalk.send($1,"_yourself",[]);
$3=smalltalk.send(smalltalk.send(self,"_model",[]),"_announcer",[]);
smalltalk.send($3,"_on_do_",[(smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected),(function(ann){
return smalltalk.send(self,"_onInstanceVariableSelected",[]);
})]);
$4=smalltalk.send($3,"_yourself",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInstanceVariableSelected",
smalltalk.method({
selector: "onInstanceVariableSelected",
fn: function (){
var self=this;
smalltalk.send(self,"_refreshDisplay",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onRefresh",
smalltalk.method({
selector: "onRefresh",
fn: function (){
var self=this;
smalltalk.send(self,"_refresh",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.HLManager || HLManager),"_current",[]),"_addTab_",[smalltalk.send((smalltalk.HLTab || HLTab),"_on_labelled_",[self,smalltalk.send(self,"_tabLabel",[])])]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_inspect_",[smalltalk.send(self,"_inspectee",[])]);
smalltalk.send(self,"_refreshVariables",[]);
$1=smalltalk.send(self,"_refreshDisplay",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshDisplay",
smalltalk.method({
selector: "refreshDisplay",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_display",[]),"_refresh",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshVariables",
smalltalk.method({
selector: "refreshVariables",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_variables",[]),"_refresh",[]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
smalltalk.send(self,"_ensureModel",[]);
smalltalk.send(html,"_with_",[smalltalk.send((smalltalk.HLContainer || HLContainer),"_with_",[smalltalk.send((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter),"_with_with_",[smalltalk.send((smalltalk.HLVerticalSplitter || HLVerticalSplitter),"_with_with_",[smalltalk.send(self,"_variables",[]),smalltalk.send(self,"_display",[])]),smalltalk.send(self,"_code",[])])])]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString){
var self=this;
self["@label"]=aString;
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aDictionary){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_variables_",[aDictionary]);
return self}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_label",[]);
return $1;
}
}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@variables"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeVariables",[]);
} else {
$1=self["@variables"];
};
return $1;
}
}),
smalltalk.HLInspector);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return "Inspector";
}
}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return (10);
}
}),
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplay', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return self["@model"];
}
}),
smalltalk.HLInspectorDisplay);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self}
}),
smalltalk.HLInspectorDisplay);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[smalltalk.send(smalltalk.send(self["@model"],"_selectedInstVarObject",[]),"_printString",[])]);
return self}
}),
smalltalk.HLInspectorDisplay);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@announcer"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeAnnouncer",[]);
} else {
$1=self["@announcer"];
};
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_beLocal",
smalltalk.method({
selector: "beLocal",
fn: function (){
var self=this;
smalltalk.send(self,"_initializeEnvironment",[]);
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_beRemoteOn_port_",
smalltalk.method({
selector: "beRemoteOn:port:",
fn: function (anIPAddress,aPort){
var self=this;
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@code"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeCode",[]);
} else {
$1=self["@code"];
};
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@environment"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeEnvironment",[]);
} else {
$1=self["@environment"];
};
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeAnnouncer",
smalltalk.method({
selector: "initializeAnnouncer",
fn: function (){
var self=this;
var $1;
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
$1=self["@announcer"];
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeCode",
smalltalk.method({
selector: "initializeCode",
fn: function (){
var self=this;
var $1;
self["@code"]=smalltalk.send((smalltalk.HLCodeModel || HLCodeModel),"_on_",[smalltalk.send(self,"_environment",[])]);
$1=self["@code"];
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeEnvironment",
smalltalk.method({
selector: "initializeEnvironment",
fn: function (){
var self=this;
var $1;
self["@environment"]=smalltalk.send((smalltalk.HLLocalEnvironment || HLLocalEnvironment),"_new",[]);
$1=self["@environment"];
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_initializeSelection",
smalltalk.method({
selector: "initializeSelection",
fn: function (){
var self=this;
var $1;
self["@selection"]=smalltalk.send(self,"_inspectee",[]);
$1=self["@selection"];
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspect_on_",
smalltalk.method({
selector: "inspect:on:",
fn: function (anObject,anInspector){
var self=this;
self["@inspectee"]=anObject;
self["@variables"]=[];
smalltalk.send(self["@inspectee"],"_inspectOn_",[anInspector]);
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
return self["@inspectee"];
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
self["@inspectee"]=anObject;
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_instVarObjectAt_",
smalltalk.method({
selector: "instVarObjectAt:",
fn: function (anInstVarName){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_variables",[]),"_at_",[anInstVarName]);
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
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
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVar_",
smalltalk.method({
selector: "selectedInstVar:",
fn: function (anInstVarObject){
var self=this;
smalltalk.send(self,"_halt",[]);
smalltalk.send(self,"_selection_",[smalltalk.send(smalltalk.send(self,"_variables",[]),"_keyAtValue_",[anInstVarObject])]);
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVarObject",
smalltalk.method({
selector: "selectedInstVarObject",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_instVarObjectAt_",[smalltalk.send(self,"_selection",[])]);
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@selection"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeSelection",[]);
} else {
$1=self["@selection"];
};
return $1;
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection_",
smalltalk.method({
selector: "selection:",
fn: function (anObject){
var self=this;
self["@selection"]=anObject;
smalltalk.send(smalltalk.send(self,"_announcer",[]),"_announce_",[smalltalk.send((smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected),"_on_",[self["@selection"]])]);
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget){
var self=this;
smalltalk.send(aWidget,"_subscribeTo_",[smalltalk.send(self,"_announcer",[])]);
return self}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return self["@variables"];
}
}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables_",
smalltalk.method({
selector: "variables:",
fn: function (aCollection){
var self=this;
self["@variables"]=aCollection;
return self}
}),
smalltalk.HLInspectorModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_environment_",[anEnvironment]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariables', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@announcer"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_initializeAnnouncer",[]);
} else {
$1=self["@announcer"];
};
return $1;
}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_initializeAnnouncer",
smalltalk.method({
selector: "initializeAnnouncer",
fn: function (){
var self=this;
var $1;
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
$1=self["@announcer"];
return $1;
}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_initializeItems",
smalltalk.method({
selector: "initializeItems",
fn: function (){
var self=this;
var $1;
self["@items"]=smalltalk.send(smalltalk.send(smalltalk.send(self,"_model",[]),"_variables",[]),"_keys",[]);
$1=self["@items"];
return $1;
}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return self["@model"];
}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
smalltalk.send(self,"_resetItems",[]);
smalltalk.send(self,"_refresh",[],smalltalk.HLNavigationListWidget);
return self}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(html,"_button",[]);
smalltalk.send($1,"_class_",["btn"]);
smalltalk.send($1,"_with_",["Refresh"]);
$2=smalltalk.send($1,"_onClick_",[(function(){
return smalltalk.send(smalltalk.send(self,"_announcer",[]),"_announce_",[smalltalk.send((smalltalk.HLRefreshRequested || HLRefreshRequested),"_new",[])]);
})]);
$3=smalltalk.send(html,"_button",[]);
smalltalk.send($3,"_class_",["btn"]);
smalltalk.send($3,"_with_",["Dive"]);
$4=smalltalk.send($3,"_onClick_",[(function(){
return smalltalk.send(smalltalk.send(self,"_announcer",[]),"_announce_",[smalltalk.send((smalltalk.HLDiveRequested || HLDiveRequested),"_new",[])]);
})]);
self["@diveButton"]=$4;
return self}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_resetItems",
smalltalk.method({
selector: "resetItems",
fn: function (){
var self=this;
self["@items"]=nil;
return self}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_selectItem_",[anObject],smalltalk.HLNavigationListWidget);
smalltalk.send(smalltalk.send(self,"_model",[]),"_selectedInstVar_",[anObject]);
return self}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@model"],"_selection",[]);
return $1;
}
}),
smalltalk.HLInspectorVariables);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@model"],"_variables",[]);
return $1;
}
}),
smalltalk.HLInspectorVariables);



