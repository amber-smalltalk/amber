define("helios/Helios-Commands-SUnit", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Commands-Tools"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Commands-SUnit');
smalltalk.packages["Helios-Commands-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLSUnitCommand', globals.HLToolCommand, [], 'Helios-Commands-SUnit');

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


smalltalk.addClass('HLSUnitRunTests', globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
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


smalltalk.addClass('HLSUnitSelectAllPackagesCommand', globals.HLSUnitSelectAllCommand, [], 'Helios-Commands-SUnit');
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
