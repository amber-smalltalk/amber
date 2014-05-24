define("helios/Helios-Commands-SUnit", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Commands-Tools"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Commands-SUnit');
smalltalk.packages["Helios-Commands-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLSUnitCommand', globals.HLToolCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitCommand.comment="I group the commands pertaining to Helios-SUnit (`HLSUnitModel`)";

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
function $HLSUnitModel(){return globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isKindOf_($HLSUnitModel());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},globals.HLSUnitCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isKindOf: HLSUnitModel",
messageSends: ["isKindOf:"],
referencedClasses: ["HLSUnitModel"]
}),
globals.HLSUnitCommand.klass);


smalltalk.addClass('HLSUnitInvertSelectedCommand', globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitInvertSelectedCommand.comment="I group the commands that invert selections";

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "i";
},
args: [],
source: "key\x0a\x09^ 'i'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selection";
},
args: [],
source: "label\x0a\x09^'Invert selection'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedCommand.klass);


smalltalk.addClass('HLSUnitInvertSelectedClassesCommand', globals.HLSUnitInvertSelectedCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitInvertSelectedClassesCommand.comment="Invert the currently selected classes on a `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^'Classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedClassesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._invertSelectedClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLSUnitInvertSelectedClassesCommand)})},
args: [],
source: "execute\x0a\x09self model invertSelectedClasses",
messageSends: ["invertSelectedClasses", "model"],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedClassesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@model"])._selectedPackages())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLSUnitInvertSelectedClassesCommand)})},
args: [],
source: "isActive\x0a\x09^model selectedPackages notEmpty",
messageSends: ["notEmpty", "selectedPackages"],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedClassesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";
},
args: [],
source: "key\x0a\x09^ 'c'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selected classes";
},
args: [],
source: "label\x0a\x09^ 'Invert selected classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedClassesCommand.klass);


smalltalk.addClass('HLSUnitInvertSelectedPackagesCommand', globals.HLSUnitInvertSelectedCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitInvertSelectedPackagesCommand.comment="Invert the currently selected packages on a `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "category\x0a\x09^'Packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedPackagesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._invertSelectedPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLSUnitInvertSelectedPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model invertSelectedPackages",
messageSends: ["invertSelectedPackages", "model"],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedPackagesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedPackagesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "p";
},
args: [],
source: "key\x0a\x09^ 'p'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selected packages";
},
args: [],
source: "label\x0a\x09^ 'Invert selected packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitInvertSelectedPackagesCommand.klass);


smalltalk.addClass('HLSUnitRunTests', globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitRunTests.comment="Run the test cases in the currently selected classes on a `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._runTests();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLSUnitRunTests)})},
args: [],
source: "execute\x0a\x09self model runTests",
messageSends: ["runTests", "model"],
referencedClasses: []
}),
globals.HLSUnitRunTests);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitRunTests);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "r";
},
args: [],
source: "key\x0a\x09^'r'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitRunTests.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Run Tests";
},
args: [],
source: "label\x0a\x09^'Run Tests'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitRunTests.klass);


smalltalk.addClass('HLSUnitSelectAllCommand', globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitSelectAllCommand.comment="I group the select all commands";

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "a";
},
args: [],
source: "key\x0a\x09^ 'a'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all";
},
args: [],
source: "label\x0a\x09^ 'Select all'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllCommand.klass);


smalltalk.addClass('HLSUnitSelectAllClassesCommand', globals.HLSUnitSelectAllCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitSelectAllClassesCommand.comment="Select all available test classes based on what packages are selected on a `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^'Classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllClassesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectAllClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLSUnitSelectAllClassesCommand)})},
args: [],
source: "execute\x0a\x09self model selectAllClasses",
messageSends: ["selectAllClasses", "model"],
referencedClasses: []
}),
globals.HLSUnitSelectAllClassesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@model"])._selectedPackages())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLSUnitSelectAllClassesCommand)})},
args: [],
source: "isActive\x0a\x09^model selectedPackages notEmpty",
messageSends: ["notEmpty", "selectedPackages"],
referencedClasses: []
}),
globals.HLSUnitSelectAllClassesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";
},
args: [],
source: "key\x0a\x09^ 'c'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all classes";
},
args: [],
source: "label\x0a\x09^ 'Select all classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllClassesCommand.klass);


smalltalk.addClass('HLSUnitSelectAllPackagesCommand', globals.HLSUnitSelectAllCommand, [], 'Helios-Commands-SUnit');
globals.HLSUnitSelectAllPackagesCommand.comment="Select all packages with test cases on a `HLSUnitModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "category\x0a\x09^'Packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllPackagesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectAllPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLSUnitSelectAllPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model selectAllPackages",
messageSends: ["selectAllPackages", "model"],
referencedClasses: []
}),
globals.HLSUnitSelectAllPackagesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllPackagesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "p";
},
args: [],
source: "key\x0a\x09^ 'p'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all packages";
},
args: [],
source: "label\x0a\x09^ 'Select all packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitSelectAllPackagesCommand.klass);

});
