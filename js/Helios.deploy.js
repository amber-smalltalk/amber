smalltalk.addPackage('Helios', {});
smalltalk.addClass('HLBrowser', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLDebugger', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLInspector', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLSUnit', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLTab', smalltalk.Object, ['widget', 'label'], 'Helios');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_manager",[]),"_activate_",[self]);
return self}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_add",
smalltalk.method({
selector: "add",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_manager",[]),"_addTab_",[self]);
return self}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_manager",[]),"_activeTab",[]),"__eq",[self]);
return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@label"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@label"];
};
return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
self["@label"]=aString;
return self}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.HLTabManager || HLTabManager),"_current",[]);
return $1;
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return self["@widget"];
}
}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self}
}),
smalltalk.HLTab);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
fn: function (aWidget,aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_widget_",[aWidget]);
smalltalk.send($2,"_label_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLTabManager', smalltalk.Widget, ['tabs', 'activeTab'], 'Helios');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
fn: function (aTab){
var self=this;
var $1;
self["@activeTab"]=aTab;
smalltalk.send(self,"_refresh",[]);
$1=smalltalk.send(self,"_show_",[aTab]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
fn: function (){
var self=this;
return self["@activeTab"];
}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aTab){
var self=this;
smalltalk.send(smalltalk.send(self,"_tabs",[]),"_add_",[aTab]);
smalltalk.send(self,"_refresh",[]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",[".navbar"]),"_remove",[]);
smalltalk.send(smalltalk.send(window,"_jQuery_",["#container"]),"_remove",[]);
smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aTab){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_tabs",[]),"_includes_",[aTab]);
if(! smalltalk.assert($1)){
return self;
};
smalltalk.send(smalltalk.send(self,"_tabs",[]),"_remove_",[aTab]);
smalltalk.send(self,"_refresh",[]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["navbar navbar-fixed-top"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["navbar-inner"]);
$4=smalltalk.send($3,"_with_",[(function(){
return smalltalk.send(self,"_renderTabsOn_",[html]);
})]);
return $4;
})]);
smalltalk.send(smalltalk.send(html,"_div",[]),"_id_",["container"]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
var $1,$3,$5,$4,$7,$8,$6,$2;
$1=smalltalk.send(html,"_ul",[]);
smalltalk.send($1,"_class_",["nav"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(smalltalk.send(self,"_tabs",[]),"_do_",[(function(each){
$3=smalltalk.send(html,"_li",[]);
$5=smalltalk.send(each,"_isActive",[]);
if(smalltalk.assert($5)){
$4="active";
} else {
$4="inactive";
};
smalltalk.send($3,"_class_",[$4]);
$6=smalltalk.send($3,"_with_",[(function(){
$7=smalltalk.send(html,"_a",[]);
smalltalk.send($7,"_with_",[smalltalk.send(each,"_label",[])]);
$8=smalltalk.send($7,"_onClick_",[(function(){
return smalltalk.send(each,"_activate",[]);
})]);
return $8;
})]);
return $6;
})]);
})]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (aTab){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",["#container"]),"_empty",[]);
smalltalk.send(smalltalk.send(aTab,"_widget",[]),"_appendToJQuery_",[smalltalk.send("#container","_asJQuery",[])]);
return self}
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@tabs"]) == nil || $receiver == undefined){
self["@tabs"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
$1=self["@tabs"];
} else {
$1=self["@tabs"];
};
return $1;
}
}),
smalltalk.HLTabManager);


smalltalk.HLTabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(smalltalk.send(self,"_basicNew",[]),"_initialize",[]);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}
}),
smalltalk.HLTabManager.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self}
}),
smalltalk.HLTabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.HLTabManager.klass);


smalltalk.addClass('HLTranscript', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLWorkspace', smalltalk.Widget, [], 'Helios');


