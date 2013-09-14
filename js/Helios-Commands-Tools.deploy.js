smalltalk.addPackage('Helios-Commands-Tools');
smalltalk.addClass('HLToolCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLToolCommand)})},
messageSends: []}),
smalltalk.HLToolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
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
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLToolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isToolModel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLToolCommand.klass)})},
messageSends: ["isToolModel"]}),
smalltalk.HLToolCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLCommitPackageCommand)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommitPackageCommand)})},
messageSends: ["commitPackage", "model"]}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommitPackageCommand)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "k";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Commit";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);


smalltalk.addClass('HLCopyCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCopyCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Copy";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCopyCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyCommand.klass);


smalltalk.addClass('HLCopyClassCommand', smalltalk.HLCopyCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLCopyClassCommand)})},
messageSends: ["name", "selectedClass", "model"]}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "New class name:";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._copyClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCopyClassCommand)})},
messageSends: ["copyClassTo:", "input", "model"]}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCopyClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Copy class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);


smalltalk.addClass('HLFindCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "f";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._openClassNamed_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindClassCommand)})},
messageSends: ["openClassNamed:", "input", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find a class";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isBrowserModel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLFindClassCommand.klass)})},
messageSends: ["isBrowserModel"]}),
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);


smalltalk.addClass('HLFindReferencesCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._model())._selectedMethod();
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st(self._model())._selectedClass();
if(($receiver = $3) == nil || $receiver == undefined){
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
messageSends: ["ifNil:ifNotNil:", "name", "selectedClass", "model", "selector", "selectedMethod"]}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "find references";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
function $HLReferences(){return smalltalk.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLReferences())._new();
_st($1)._openAsTab();
$2=_st($1)._search_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindReferencesCommand)})},
messageSends: ["openAsTab", "new", "search:", "input"]}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._availableClassNames()).__comma(_st(self._model())._allSelectors());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindReferencesCommand)})},
messageSends: [",", "allSelectors", "model", "availableClassNames"]}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find references of";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "r";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindReferencesCommand.klass)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "References";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindReferencesCommand.klass)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveClassToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveClassToCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLMoveClassToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToCommand.klass);


smalltalk.addClass('HLMoveClassToPackageCommand', smalltalk.HLMoveClassToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a package";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveClassToPackage_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: ["moveClassToPackage:", "input", "model"]}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: ["availablePackageNames", "model"]}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move class to package:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "p";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassToPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to package";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassToPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to package...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveClassToPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLMoveMethodToCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToClass_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["moveMethodToClass:", "input", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to class:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a protocol";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToProtocol_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["moveMethodToProtocol:", "input", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["availableProtocols", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to a protocol:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to protocol...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "x";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveClassCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRemoveClassCommand)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeClass();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveClassCommand)})},
messageSends: ["removeClass", "model"]}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLRemoveClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove class";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["removeMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove method";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLRemoveProtocolCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRemoveProtocolCommand)})},
messageSends: []}),
smalltalk.HLRemoveProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeProtocol();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveProtocolCommand)})},
messageSends: ["removeProtocol", "model"]}),
smalltalk.HLRemoveProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedProtocol())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveProtocolCommand)})},
messageSends: ["notNil", "selectedProtocol", "model"]}),
smalltalk.HLRemoveProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove protocol";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveProtocolCommand.klass);


smalltalk.addClass('HLRenameCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Tools');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "r";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRenameCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRenameCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameCommand.klass);


smalltalk.addClass('HLRenameClassCommand', smalltalk.HLRenameCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLRenameClassCommand)})},
messageSends: ["name", "selectedClass", "model"]}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename class to:";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRenameClassCommand)})},
messageSends: ["renameClassTo:", "input", "model"]}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRenameClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);


smalltalk.addClass('HLRenameProtocolCommand', smalltalk.HLRenameCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._selectedProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: ["selectedProtocol", "model"]}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename protocol to:";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameProtocolTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: ["renameProtocolTo:", "input", "model"]}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedProtocol())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: ["notNil", "selectedProtocol", "model"]}),
smalltalk.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLRenameProtocolCommand)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRenameProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRenameProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename protocol...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRenameProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameProtocolCommand.klass);


