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
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_manager",[]),"_activate_",[self]);
return self},
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
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_manager",[]),"_addTab_",[self]);
return self},
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
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_manager",[]),"_activeTab",[]),"__eq",[self]);
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
fn: function (){
var self=this;
var $1;
if(($receiver = self["@label"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@label"];
};
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
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
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
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.HLTabManager || HLTabManager),"_current",[]);
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
fn: function (){
var self=this;
return self["@widget"];
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
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self},
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
fn: function (aWidget,aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_widget_",[aWidget]);
smalltalk.send($2,"_label_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aWidget", "aString"],
source: "on: aWidget labelled: aString\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09label: aString;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "label:", "yourself"],
referencedClasses: []
}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLTabManager', smalltalk.Widget, ['tabs', 'activeTab'], 'Helios');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
category: 'accessing',
fn: function (aTab){
var self=this;
var $1;
self["@activeTab"]=aTab;
smalltalk.send(self,"_refresh",[]);
$1=smalltalk.send(self,"_show_",[aTab]);
return self},
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
fn: function (){
var self=this;
return self["@activeTab"];
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
fn: function (aTab){
var self=this;
smalltalk.send(smalltalk.send(self,"_tabs",[]),"_add_",[aTab]);
smalltalk.send(self,"_refresh",[]);
return self},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a\x09self refresh",
messageSends: ["add:", "tabs", "refresh"],
referencedClasses: []
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",[".navbar"]),"_remove",[]);
smalltalk.send(smalltalk.send(window,"_jQuery_",["#container"]),"_remove",[]);
smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self},
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
fn: function (aTab){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_tabs",[]),"_includes_",[aTab]);
if(! smalltalk.assert($1)){
return self;
};
smalltalk.send(smalltalk.send(self,"_tabs",[]),"_remove_",[aTab]);
smalltalk.send(self,"_refresh",[]);
return self},
args: ["aTab"],
source: "removeTab: aTab\x0a\x09\x22Todo: activate the previously activated tab. Keep a history of tabs selection\x22\x0a\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self tabs remove: aTab.\x0a\x09self refresh",
messageSends: ["ifFalse:", "includes:", "tabs", "remove:", "refresh"],
referencedClasses: []
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'navbar navbar-fixed-top';\x0a\x09\x09with: [ html div \x0a\x09\x09\x09class: 'navbar-inner';\x0a\x09\x09\x09with: [ self renderTabsOn: html ] ].\x0a\x09html div id: 'container'",
messageSends: ["class:", "div", "with:", "renderTabsOn:", "id:"],
referencedClasses: []
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
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
return self},
args: ["html"],
source: "renderTabsOn: html\x0a\x09html ul \x0a\x09\x09class: 'nav';\x0a\x09\x09with: [ self tabs do: [ :each |\x0a\x09\x09\x09html li \x0a\x09\x09\x09\x09class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09with: each label;\x0a\x09\x09\x09\x09\x09\x09onClick: [ each activate ] ] ] ]",
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "label", "a", "onClick:", "activate", "tabs"],
referencedClasses: []
}),
smalltalk.HLTabManager);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'rendering',
fn: function (aTab){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",["#container"]),"_empty",[]);
smalltalk.send(smalltalk.send(aTab,"_widget",[]),"_appendToJQuery_",[smalltalk.send("#container","_asJQuery",[])]);
return self},
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
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self},
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
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "new\x0a\x09\x22Use current instead\x22\x0a\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLTabManager.klass);


smalltalk.addClass('HLTranscript', smalltalk.Widget, [], 'Helios');


smalltalk.addClass('HLWorkspace', smalltalk.Widget, [], 'Helios');


