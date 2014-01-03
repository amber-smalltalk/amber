define("amber_core/Helios-Commands-Tools", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Helios-Commands-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Commands-Tools');
smalltalk.packages["Helios-Commands-Tools"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLToolCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "category\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aToolModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aToolModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aToolModel:aToolModel},smalltalk.HLToolCommand.klass)})},
args: ["aToolModel"],
source: "for: aToolModel\x0a\x09^ self new\x0a    \x09model: aToolModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLToolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isToolModel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLToolCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isToolModel",
messageSends: ["isToolModel"],
referencedClasses: []
}),
smalltalk.HLToolCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "category\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommitPackageCommand)})},
args: [],
source: "execute\x0a\x09self model commitPackage",
messageSends: ["commitPackage", "model"],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^ true\x0a\x09\x22 slf model isPackageDirty\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "k";
},
args: [],
source: "key\x0a\x09^ 'k'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Commit";
},
args: [],
source: "label\x0a\x09^ 'Commit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommitPackageCommand.klass);


smalltalk.addClass('HLCopyCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

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
smalltalk.HLCopyCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy";
},
args: [],
source: "label\x0a\x09^ 'Copy'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyCommand.klass);


smalltalk.addClass('HLCopyClassCommand', smalltalk.HLCopyCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLCopyClassCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass name",
messageSends: ["name", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "New class name:";
},
args: [],
source: "displayLabel\x0a\x09^ 'New class name:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._copyClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCopyClassCommand)})},
args: [],
source: "execute\x0a\x09self model copyClassTo: self input",
messageSends: ["copyClassTo:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCopyClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand);


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
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class";
},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy class...";
},
args: [],
source: "menuLabel\x0a\x09^ 'Copy class...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCopyClassCommand.klass);


smalltalk.addClass('HLFindCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "f";
},
args: [],
source: "key\x0a\x09^ 'f'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find";
},
args: [],
source: "label\x0a\x09^ 'Find'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a class";
},
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._openClassNamed_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "execute\x0a\x09self model openClassNamed: self input",
messageSends: ["openClassNamed:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find a class";
},
args: [],
source: "inputLabel\x0a\x09^ 'Find a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isBrowserModel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLFindClassCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
messageSends: ["isBrowserModel"],
referencedClasses: []
}),
smalltalk.HLFindClassCommand.klass);

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
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class";
},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindClassCommand.klass);


smalltalk.addClass('HLFindReferencesCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1;
$3=self._model();
$ctx1.sendIdx["model"]=1;
$2=_st($3)._selectedMethod();
if(($receiver = $2) == nil || $receiver == null){
$4=_st(self._model())._selectedClass();
if(($receiver = $4) == nil || $receiver == null){
$1="";
} else {
var class_;
class_=$receiver;
$1=_st(class_)._name();
};
} else {
var method;
method=$receiver;
$1=_st(method)._selector();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLFindReferencesCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedMethod \x0a\x09\x09ifNil: [\x0a\x09\x09\x09self model selectedClass\x0a\x09\x09\x09\x09ifNil: [ '' ]\x0a\x09\x09\x09\x09ifNotNil: [ :class | class name ] ]\x0a\x09\x09ifNotNil: [ :method | method selector ]",
messageSends: ["ifNil:ifNotNil:", "selectedMethod", "model", "selectedClass", "name", "selector"],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "find references";
},
args: [],
source: "displayLabel\x0a\x09^ 'find references'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLReferences(){return smalltalk.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLReferences())._new();
_st($1)._openAsTab();
$2=_st($1)._search_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindReferencesCommand)})},
args: [],
source: "execute\x0a\x09HLReferences new \x0a\x09\x09openAsTab;\x0a\x09\x09search: self input",
messageSends: ["openAsTab", "new", "search:", "input"],
referencedClasses: ["HLReferences"]
}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._model();
$ctx1.sendIdx["model"]=1;
$2=_st($3)._availableClassNames();
$1=_st($2).__comma(_st(self._model())._allSelectors());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindReferencesCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames, self model allSelectors",
messageSends: [",", "availableClassNames", "model", "allSelectors"],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find references of";
},
args: [],
source: "inputLabel\x0a\x09^ 'Find references of'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "r";
},
args: [],
source: "key\x0a\x09^ 'r'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "References";
},
args: [],
source: "label\x0a\x09^ 'References'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFindReferencesCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";
},
args: [],
source: "key\x0a\x09^ 'm'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move";
},
args: [],
source: "label\x0a\x09^ 'Move'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveClassToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveClassToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLMoveClassToCommand);


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
smalltalk.HLMoveClassToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class";
},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToCommand.klass);


smalltalk.addClass('HLMoveClassToPackageCommand', smalltalk.HLMoveClassToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a package";
},
args: [],
source: "displayLabel\x0a\x09^ 'select a package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveClassToPackage_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveClassToPackageCommand)})},
args: [],
source: "execute\x0a\x09self model moveClassToPackage: self input",
messageSends: ["moveClassToPackage:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveClassToPackageCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availablePackageNames",
messageSends: ["availablePackageNames", "model"],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class to package:";
},
args: [],
source: "inputLabel\x0a\x09^ 'Move class to package:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand);


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
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "to package";
},
args: [],
source: "label\x0a\x09^ 'to package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to package...";
},
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to package...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveClassToPackageCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";
},
args: [],
source: "category\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";
},
args: [],
source: "key\x0a\x09^ 'm'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Method";
},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a class";
},
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToClass_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToClass: self input",
messageSends: ["moveMethodToClass:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to class:";
},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to class:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);


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
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "to class";
},
args: [],
source: "label\x09\x0a\x09^ 'to class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to class...";
},
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to class...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a protocol";
},
args: [],
source: "displayLabel\x0a\x09^ 'select a protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToProtocol_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToProtocol: self input",
messageSends: ["moveMethodToProtocol:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableProtocols",
messageSends: ["availableProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to a protocol:";
},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to a protocol:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";
},
args: [],
source: "key\x0a\x09^ 't'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "to protocol";
},
args: [],
source: "label\x0a\x09^ 'to protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to protocol...";
},
args: [],
source: "menuLabel\x0a\x09^ 'Move to protocol...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "x";
},
args: [],
source: "key\x0a\x09^ 'x'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove";
},
args: [],
source: "label\x0a\x09^ 'Remove'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveClassCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeClass();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveClassCommand)})},
args: [],
source: "execute\x0a\x09self model removeClass",
messageSends: ["removeClass", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand);


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
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class";
},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove class";
},
args: [],
source: "menuLabel\x0a\x09^ 'Remove class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveClassCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";
},
args: [],
source: "category\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "execute\x0a\x09self model removeMethod",
messageSends: ["removeMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";
},
args: [],
source: "key\x0a\x09^ 'm'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Method";
},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove method";
},
args: [],
source: "menuLabel\x0a\x09^ 'Remove method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLRemoveProtocolCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";
},
args: [],
source: "category\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeProtocol();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model removeProtocol",
messageSends: ["removeProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedProtocol())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveProtocolCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
messageSends: ["notNil", "selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";
},
args: [],
source: "key\x0a\x09^ 't'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocol";
},
args: [],
source: "label\x0a\x09^ 'Protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove protocol";
},
args: [],
source: "menuLabel\x0a\x09^ 'Remove protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveProtocolCommand.klass);


smalltalk.addClass('HLRenameCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "r";
},
args: [],
source: "key\x0a\x09^ 'r'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename";
},
args: [],
source: "label\x0a\x09^ 'Rename'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameCommand.klass);


smalltalk.addClass('HLRenameClassCommand', smalltalk.HLRenameCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "category\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._model())._selectedClass())._theNonMetaClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLRenameClassCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass theNonMetaClass name",
messageSends: ["name", "theNonMetaClass", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class to:";
},
args: [],
source: "displayLabel\x0a\x09^ 'Rename class to:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRenameClassCommand)})},
args: [],
source: "execute\x0a\x09self model renameClassTo: self input",
messageSends: ["renameClassTo:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRenameClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand);


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
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class";
},
args: [],
source: "label\x0a\x09^ 'Class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class...";
},
args: [],
source: "menuLabel\x0a\x09^ 'Rename class...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameClassCommand.klass);


smalltalk.addClass('HLRenameProtocolCommand', smalltalk.HLRenameCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";
},
args: [],
source: "category\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._selectedProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLRenameProtocolCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedProtocol",
messageSends: ["selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol to:";
},
args: [],
source: "displayLabel\x0a\x09^ 'Rename protocol to:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameProtocolTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRenameProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model renameProtocolTo: self input",
messageSends: ["renameProtocolTo:", "model", "input"],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedProtocol())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRenameProtocolCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
messageSends: ["notNil", "selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";
},
args: [],
source: "key\x0a\x09^ 't'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocol";
},
args: [],
source: "label\x0a\x09^ 'Protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol...";
},
args: [],
source: "menuLabel\x0a\x09^ 'Rename protocol...'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRenameProtocolCommand.klass);

});
