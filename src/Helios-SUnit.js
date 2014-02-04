define("helios/Helios-SUnit", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-SUnit');
smalltalk.packages["Helios-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLSUnit', globals.HLWidget, ['model', 'packagesListWidget', 'resultWidget'], 'Helios-SUnit');
globals.HLSUnit.comment="I am the main widget for running unit tests in Helios.\x0a\x0aI provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.";
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSUnitModel(){return globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == null){
self["@model"]=_st($HLSUnitModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLSUnit)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLSUnitModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLSUnitModel"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitPackagesListWidget(){return globals.HLSUnitPackagesListWidget||(typeof HLSUnitPackagesListWidget=="undefined"?nil:HLSUnitPackagesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@packagesListWidget"]=_st($HLSUnitPackagesListWidget())._on_(self._model());
$1=self["@packagesListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},globals.HLSUnit)})},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [ \x0a\x09\x09packagesListWidget := HLSUnitPackagesListWidget on: self model ]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLSUnitPackagesListWidget"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._packagesListWidget();
$ctx1.sendIdx["packagesListWidget"]=1;
$1=_st($HLVerticalSplitter())._with_with_($2,self._resultWidget());
_st(html)._with_($1);
_st(self._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLSUnit)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLVerticalSplitter\x0a        with: self packagesListWidget \x0a        with: self resultWidget).\x0a\x09\x0a\x09self packagesListWidget focus",
messageSends: ["with:", "with:with:", "packagesListWidget", "resultWidget", "focus"],
referencedClasses: ["HLVerticalSplitter"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "resultWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLWidget(){return globals.HLWidget||(typeof HLWidget=="undefined"?nil:HLWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@resultWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@resultWidget"]=_st($HLWidget())._new();
$1=self["@resultWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"resultWidget",{},globals.HLSUnit)})},
args: [],
source: "resultWidget\x0a\x09^ resultWidget ifNil: [\x0a\x09\x09resultWidget := HLWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLWidget"]
}),
globals.HLSUnit);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "sunit";
},
args: [],
source: "tabClass\x0a\x09^ 'sunit'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";
},
args: [],
source: "tabLabel\x0a\x09^ 'SUnit'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (1000);
},
args: [],
source: "tabPriority\x0a\x09^ 1000",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);


smalltalk.addClass('HLSUnitModel', globals.HLModel, ['selectedPackages'], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "selectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._packages())._add_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectPackage:",{aPackage:aPackage},globals.HLSUnitModel)})},
args: ["aPackage"],
source: "selectPackage: aPackage\x0a\x09self packages add: aPackage",
messageSends: ["add:", "packages"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackages",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedPackages"];
if(($receiver = $2) == nil || $receiver == null){
self["@selectedPackages"]=_st($Set())._new();
$1=self["@selectedPackages"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackages",{},globals.HLSUnitModel)})},
args: [],
source: "selectedPackages\x0a\x09^ selectedPackages ifNil: [ selectedPackages := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "testPackages",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._environment())._packages())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isTestPackage();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"testPackages",{},globals.HLSUnitModel)})},
args: [],
source: "testPackages\x0a\x09\x22Answer all packages containing concrete subclasses of TestCase\x22\x0a\x09\x0a\x09^ self environment packages \x0a\x09\x09select: [ :each | each isTestPackage ]",
messageSends: ["select:", "packages", "environment", "isTestPackage"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unselectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._packages())._remove_ifAbsent_(aPackage,(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"unselectPackage:",{aPackage:aPackage},globals.HLSUnitModel)})},
args: ["aPackage"],
source: "unselectPackage: aPackage\x0a\x09self packages remove: aPackage ifAbsent: []",
messageSends: ["remove:ifAbsent:", "packages"],
referencedClasses: []
}),
globals.HLSUnitModel);



smalltalk.addClass('HLSUnitPackagesListWidget', globals.HLWidget, ['model'], 'Helios-SUnit');
globals.HLSUnitPackagesListWidget.comment="I display a list of packages for which unit tests are associated (packages containing subclasses of `TestCase`).";
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@model"]=anObject;
return self},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aSUnitModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aSUnitModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aSUnitModel:aSUnitModel},globals.HLSUnitPackagesListWidget.klass)})},
args: ["aSUnitModel"],
source: "on: aSUnitModel\x0a\x09^ self new\x0a\x09\x09model: aSUnitModel;\x0a\x09\x09yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget.klass);

});
