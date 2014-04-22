define("helios/Helios-SUnit-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-SUnit-Tests');
smalltalk.packages["Helios-SUnit-Tests"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLSUnitModelTest', globals.TestCase, ['model'], 'Helios-SUnit-Tests');
globals.HLSUnitModelTest.comment="Test cases for the functionality of  `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'initializing',
fn: function (){
var self=this;
function $HLSUnitModel(){return globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLSUnitModelTest.superclass.fn.prototype._setUp.apply(_st(self), []));
$ctx1.supercall = false;
self["@model"]=_st($HLSUnitModel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.HLSUnitModelTest)})},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09model := HLSUnitModel new",
messageSends: ["setUp", "new"],
referencedClasses: ["HLSUnitModel"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassBecomesAvailable",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@model"])._testClasses();
$ctx1.sendIdx["testClasses"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
_st(self["@model"])._selectPackage_(self._thisPackage());
self._assert_(_st(_st(self["@model"])._testClasses())._includes_(self._class()));
return self}, function($ctx1) {$ctx1.fill(self,"testClassBecomesAvailable",{},globals.HLSUnitModelTest)})},
args: [],
source: "testClassBecomesAvailable\x0a\x09self assert: model testClasses isEmpty.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: (model testClasses includes: self class).\x0a\x09\x0a\x09",
messageSends: ["assert:", "isEmpty", "testClasses", "selectPackage:", "thisPackage", "includes:", "class"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEmptyTestResults",
protocol: 'tests',
fn: function (){
var self=this;
function $TestResult(){return globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@model"])._testResult())._isKindOf_($TestResult()));
return self}, function($ctx1) {$ctx1.fill(self,"testEmptyTestResults",{},globals.HLSUnitModelTest)})},
args: [],
source: "testEmptyTestResults\x0a\x09self assert: (model testResult isKindOf: TestResult)",
messageSends: ["assert:", "isKindOf:", "testResult"],
referencedClasses: ["TestResult"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInvertSelectedClasses",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5,$8,$7,$10,$9;
_st(self["@model"])._selectAllPackages();
_st(self["@model"])._selectAllClasses();
$1=self["@model"];
$2=self._class();
$ctx1.sendIdx["class"]=1;
_st($1)._unselectClass_($2);
$4=_st(self["@model"])._selectedClasses();
$ctx1.sendIdx["selectedClasses"]=1;
$3=_st($4)._notEmpty();
self._assert_($3);
$6=_st(self["@model"])._selectedClasses();
$ctx1.sendIdx["selectedClasses"]=2;
$5=_st($6)._size();
$ctx1.sendIdx["size"]=1;
$8=_st(_st(self["@model"])._testClasses())._size();
$ctx1.sendIdx["size"]=2;
$7=_st($8).__minus((1));
self._assert_equals_($5,$7);
$ctx1.sendIdx["assert:equals:"]=1;
_st(self["@model"])._invertSelectedClasses();
$10=_st(self["@model"])._selectedClasses();
$ctx1.sendIdx["selectedClasses"]=3;
$9=_st($10)._size();
self._assert_equals_($9,(1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(_st(self["@model"])._selectedClasses())._anyOne(),self._class());
return self}, function($ctx1) {$ctx1.fill(self,"testInvertSelectedClasses",{},globals.HLSUnitModelTest)})},
args: [],
source: "testInvertSelectedClasses\x0a\x09model selectAllPackages.\x0a\x09model selectAllClasses.\x0a\x09model unselectClass: self class.\x0a\x09self assert: model selectedClasses notEmpty.\x0a\x09self assert: model selectedClasses size equals: model testClasses size - 1.\x0a\x09model invertSelectedClasses.\x0a\x09self assert: model selectedClasses size equals: 1.\x0a\x09self assert: model selectedClasses anyOne equals: self class.",
messageSends: ["selectAllPackages", "selectAllClasses", "unselectClass:", "class", "assert:", "notEmpty", "selectedClasses", "assert:equals:", "size", "-", "testClasses", "invertSelectedClasses", "anyOne"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInvertSelectedPackages",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5,$8,$7,$10,$9;
_st(self["@model"])._selectAllPackages();
$1=self["@model"];
$2=self._thisPackage();
$ctx1.sendIdx["thisPackage"]=1;
_st($1)._unselectPackage_($2);
$4=_st(self["@model"])._selectedPackages();
$ctx1.sendIdx["selectedPackages"]=1;
$3=_st($4)._notEmpty();
self._assert_($3);
$6=_st(self["@model"])._selectedPackages();
$ctx1.sendIdx["selectedPackages"]=2;
$5=_st($6)._size();
$ctx1.sendIdx["size"]=1;
$8=_st(_st(self["@model"])._testPackages())._size();
$ctx1.sendIdx["size"]=2;
$7=_st($8).__minus((1));
self._assert_equals_($5,$7);
$ctx1.sendIdx["assert:equals:"]=1;
_st(self["@model"])._invertSelectedPackages();
$10=_st(self["@model"])._selectedPackages();
$ctx1.sendIdx["selectedPackages"]=3;
$9=_st($10)._size();
self._assert_equals_($9,(1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(_st(self["@model"])._selectedPackages())._anyOne(),self._thisPackage());
return self}, function($ctx1) {$ctx1.fill(self,"testInvertSelectedPackages",{},globals.HLSUnitModelTest)})},
args: [],
source: "testInvertSelectedPackages\x0a\x09model selectAllPackages.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages notEmpty.\x0a\x09self assert: model selectedPackages size equals: model testPackages size - 1.\x0a\x09model invertSelectedPackages.\x0a\x09self assert: model selectedPackages size equals: 1.\x0a\x09self assert: model selectedPackages anyOne equals: self thisPackage.",
messageSends: ["selectAllPackages", "unselectPackage:", "thisPackage", "assert:", "notEmpty", "selectedPackages", "assert:equals:", "size", "-", "testPackages", "invertSelectedPackages", "anyOne"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectAllClasses",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
_st(self["@model"])._selectAllPackages();
$2=_st(self["@model"])._testClasses();
$ctx1.sendIdx["testClasses"]=1;
$1=_st($2)._notEmpty();
self._assert_($1);
_st(self["@model"])._selectAllClasses();
$3=_st(_st(self["@model"])._selectedClasses())._size();
$ctx1.sendIdx["size"]=1;
self._assert_equals_($3,_st(_st(self["@model"])._testClasses())._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSelectAllClasses",{},globals.HLSUnitModelTest)})},
args: [],
source: "testSelectAllClasses\x0a\x09model selectAllPackages.\x0a\x09self assert: model testClasses notEmpty.\x0a\x09model selectAllClasses.\x0a\x09self assert: model selectedClasses size equals: model testClasses size",
messageSends: ["selectAllPackages", "assert:", "notEmpty", "testClasses", "selectAllClasses", "assert:equals:", "size", "selectedClasses"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectAllPackages",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st(self["@model"])._selectedPackages();
$ctx1.sendIdx["selectedPackages"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
_st(self["@model"])._selectAllPackages();
$3=_st(_st(self["@model"])._selectedPackages())._size();
$ctx1.sendIdx["size"]=1;
self._assert_equals_($3,_st(_st(self["@model"])._testPackages())._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSelectAllPackages",{},globals.HLSUnitModelTest)})},
args: [],
source: "testSelectAllPackages\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09model selectAllPackages.\x0a\x09self assert: model selectedPackages size equals: model testPackages size",
messageSends: ["assert:", "isEmpty", "selectedPackages", "selectAllPackages", "assert:equals:", "size", "testPackages"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectClass",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLClassSelected(){return globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
_st(self["@model"])._selectPackage_(self._thisPackage());
$2=_st(self["@model"])._selectedClasses();
$ctx1.sendIdx["selectedClasses"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
_st(_st(self["@model"])._announcer())._on_do_for_($HLClassSelected(),(function(){
announcementFired=true;
return announcementFired;
}),self);
$3=self["@model"];
$4=self._class();
$ctx1.sendIdx["class"]=1;
_st($3)._selectClass_($4);
self._assert_equals_(_st(_st(self["@model"])._selectedClasses())._anyOne(),self._class());
self._assert_(announcementFired);
return self}, function($ctx1) {$ctx1.fill(self,"testSelectClass",{announcementFired:announcementFired},globals.HLSUnitModelTest)})},
args: [],
source: "testSelectClass\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: model selectedClasses isEmpty.\x0a\x09model announcer on: HLClassSelected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model selectClass: self class.\x0a\x09self assert: model selectedClasses anyOne equals: self class.\x0a\x09self assert: announcementFired.\x0a\x09\x0a\x09",
messageSends: ["selectPackage:", "thisPackage", "assert:", "isEmpty", "selectedClasses", "on:do:for:", "announcer", "selectClass:", "class", "assert:equals:", "anyOne"],
referencedClasses: ["HLClassSelected"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectPackage",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=_st(self["@model"])._selectedPackages();
$ctx1.sendIdx["selectedPackages"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
_st(_st(self["@model"])._announcer())._on_do_for_($HLPackageSelected(),(function(){
announcementFired=true;
return announcementFired;
}),self);
$3=self["@model"];
$4=self._thisPackage();
$ctx1.sendIdx["thisPackage"]=1;
_st($3)._selectPackage_($4);
self._assert_equals_(_st(_st(self["@model"])._selectedPackages())._anyOne(),self._thisPackage());
self._assert_(announcementFired);
return self}, function($ctx1) {$ctx1.fill(self,"testSelectPackage",{announcementFired:announcementFired},globals.HLSUnitModelTest)})},
args: [],
source: "testSelectPackage\x0a\x09| announcementFired |\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09model announcer on: HLPackageSelected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages anyOne equals: self thisPackage.\x0a\x09self assert: announcementFired",
messageSends: ["assert:", "isEmpty", "selectedPackages", "on:do:for:", "announcer", "selectPackage:", "thisPackage", "assert:equals:", "anyOne"],
referencedClasses: ["HLPackageSelected"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectedClassNotListedIfPackageUnselected",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5;
$1=self["@model"];
$2=self._thisPackage();
$ctx1.sendIdx["thisPackage"]=1;
_st($1)._selectPackage_($2);
$3=self["@model"];
$4=self._class();
$ctx1.sendIdx["class"]=1;
_st($3)._selectClass_($4);
$6=_st(self["@model"])._selectedClasses();
$ctx1.sendIdx["selectedClasses"]=1;
$5=_st($6)._anyOne();
self._assert_equals_($5,self._class());
_st(self["@model"])._unselectPackage_(self._thisPackage());
self._assert_(_st(_st(self["@model"])._selectedClasses())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testSelectedClassNotListedIfPackageUnselected",{},globals.HLSUnitModelTest)})},
args: [],
source: "testSelectedClassNotListedIfPackageUnselected\x0a\x09model selectPackage: self thisPackage.\x0a\x09model selectClass: self class.\x0a\x09self assert: model selectedClasses anyOne equals: self class.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedClasses isEmpty.\x0a\x09",
messageSends: ["selectPackage:", "thisPackage", "selectClass:", "class", "assert:equals:", "anyOne", "selectedClasses", "unselectPackage:", "assert:", "isEmpty"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTestClassHasOnlyTestClasses",
protocol: 'tests',
fn: function (){
var self=this;
var notATestClass;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
notATestClass=_st($Object())._subclass_instanceVariableNames_package_("HLNotATestClass","",_st(self._class())._category());
_st(self["@model"])._selectPackage_(self._thisPackage());
self._deny_(_st(_st(self["@model"])._testClasses())._includes_(notATestClass));
_st($Smalltalk())._removeClass_(notATestClass);
return self}, function($ctx1) {$ctx1.fill(self,"testTestClassHasOnlyTestClasses",{notATestClass:notATestClass},globals.HLSUnitModelTest)})},
args: [],
source: "testTestClassHasOnlyTestClasses\x0a\x09| notATestClass |\x0a\x09notATestClass := Object subclass: #HLNotATestClass\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: self class category.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self deny: (model testClasses includes: notATestClass).\x0a\x09Smalltalk removeClass: notATestClass.\x0a\x09\x0a\x09",
messageSends: ["subclass:instanceVariableNames:package:", "category", "class", "selectPackage:", "thisPackage", "deny:", "includes:", "testClasses", "removeClass:"],
referencedClasses: ["Object", "Smalltalk"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTestPackages",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@model"])._testPackages();
$ctx1.sendIdx["testPackages"]=1;
$1=_st($2)._notEmpty();
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(self["@model"])._testPackages())._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(self._thisPackage());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testTestPackages",{},globals.HLSUnitModelTest)})},
args: [],
source: "testTestPackages\x0a\x09self assert: model testPackages notEmpty.\x0a\x09self assert: (model testPackages anySatisfy: [:each | each = self thisPackage]).",
messageSends: ["assert:", "notEmpty", "testPackages", "anySatisfy:", "=", "thisPackage"],
referencedClasses: []
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnselectClass",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLClassUnselected(){return globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@model"])._selectPackage_(self._thisPackage());
$1=self["@model"];
$2=self._class();
$ctx1.sendIdx["class"]=1;
_st($1)._selectClass_($2);
_st(_st(self["@model"])._announcer())._on_do_for_($HLClassUnselected(),(function(){
announcementFired=true;
return announcementFired;
}),self);
_st(self["@model"])._unselectClass_(self._class());
self._assert_(_st(_st(self["@model"])._selectedClasses())._isEmpty());
$ctx1.sendIdx["assert:"]=1;
self._assert_(announcementFired);
return self}, function($ctx1) {$ctx1.fill(self,"testUnselectClass",{announcementFired:announcementFired},globals.HLSUnitModelTest)})},
args: [],
source: "testUnselectClass\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09model selectClass: self class.\x0a\x09model announcer on: HLClassUnselected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model unselectClass: self class.\x0a\x09self assert: model selectedClasses isEmpty.\x0a\x09self assert: announcementFired\x0a\x09\x0a\x09",
messageSends: ["selectPackage:", "thisPackage", "selectClass:", "class", "on:do:for:", "announcer", "unselectClass:", "assert:", "isEmpty", "selectedClasses"],
referencedClasses: ["HLClassUnselected"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnselectPackage",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLPackageUnselected(){return globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@model"];
$2=self._thisPackage();
$ctx1.sendIdx["thisPackage"]=1;
_st($1)._selectPackage_($2);
_st(_st(self["@model"])._announcer())._on_do_for_($HLPackageUnselected(),(function(){
announcementFired=true;
return announcementFired;
}),self);
_st(self["@model"])._unselectPackage_(self._thisPackage());
self._assert_(_st(_st(self["@model"])._selectedPackages())._isEmpty());
$ctx1.sendIdx["assert:"]=1;
self._assert_(announcementFired);
return self}, function($ctx1) {$ctx1.fill(self,"testUnselectPackage",{announcementFired:announcementFired},globals.HLSUnitModelTest)})},
args: [],
source: "testUnselectPackage\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09model announcer on: HLPackageUnselected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09self assert: announcementFired.",
messageSends: ["selectPackage:", "thisPackage", "on:do:for:", "announcer", "unselectPackage:", "assert:", "isEmpty", "selectedPackages"],
referencedClasses: ["HLPackageUnselected"]
}),
globals.HLSUnitModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "thisPackage",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._package();
return $1;
}, function($ctx1) {$ctx1.fill(self,"thisPackage",{},globals.HLSUnitModelTest)})},
args: [],
source: "thisPackage\x0a\x09^self class package",
messageSends: ["package", "class"],
referencedClasses: []
}),
globals.HLSUnitModelTest);


});
