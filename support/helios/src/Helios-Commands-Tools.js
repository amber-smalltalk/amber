define("helios/Helios-Commands-Tools", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Commands-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Commands-Tools');
smalltalk.packages["Helios-Commands-Tools"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLToolCommand', globals.HLModelCommand, [], 'Helios-Commands-Tools');
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
globals.HLToolCommand);


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
}, function($ctx1) {$ctx1.fill(self,"for:",{aToolModel:aToolModel},globals.HLToolCommand.klass)})},
args: ["aToolModel"],
source: "for: aToolModel\x0a\x09^ self new\x0a    \x09model: aToolModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
globals.HLToolCommand.klass);

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
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},globals.HLToolCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isToolModel",
messageSends: ["isToolModel"],
referencedClasses: []
}),
globals.HLToolCommand.klass);


smalltalk.addClass('HLBrowseMethodCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "browse method";
},
args: [],
source: "displayLabel\x0a\x09^ 'browse method'",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowseMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._openMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLBrowseMethodCommand)})},
args: [],
source: "execute\x0a\x09self model openMethod",
messageSends: ["openMethod", "model"],
referencedClasses: []
}),
globals.HLBrowseMethodCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aModel)._isReferencesModel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},globals.HLBrowseMethodCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isReferencesModel",
messageSends: ["isReferencesModel"],
referencedClasses: []
}),
globals.HLBrowseMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "b";
},
args: [],
source: "key\x0a\x09^ 'b'",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowseMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "browse method";
},
args: [],
source: "label\x0a\x09^ 'browse method'",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowseMethodCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');
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
globals.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._commitPackageOnSuccess_onError_((function(){
return smalltalk.withContext(function($ctx2) {
return self._informSuccess();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(error){
return smalltalk.withContext(function($ctx2) {
return self._onPackageCommitError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},globals.HLCommitPackageCommand)})},
args: [],
source: "commitPackage\x0a\x09self model \x0a\x09\x09commitPackageOnSuccess: [ self informSuccess ]\x0a\x09\x09onError: [ :error | self onPackageCommitError: error ]",
messageSends: ["commitPackageOnSuccess:onError:", "model", "informSuccess", "onPackageCommitError:"],
referencedClasses: []
}),
globals.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLCommitPackageCommand)})},
args: [],
source: "execute\x0a\x09self commitPackage",
messageSends: ["commitPackage"],
referencedClasses: []
}),
globals.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "informSuccess",
protocol: 'executing',
fn: function (){
var self=this;
function $HLInformationWidget(){return globals.HLInformationWidget||(typeof HLInformationWidget=="undefined"?nil:HLInformationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLInformationWidget())._new();
_st($1)._informationString_("Commit successful!");
$2=_st($1)._show();
return self}, function($ctx1) {$ctx1.fill(self,"informSuccess",{},globals.HLCommitPackageCommand)})},
args: [],
source: "informSuccess\x0a\x09HLInformationWidget new\x0a\x09\x09informationString: 'Commit successful!';\x0a\x09\x09show",
messageSends: ["informationString:", "new", "show"],
referencedClasses: ["HLInformationWidget"]
}),
globals.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^ true\x0a\x09\x22self model isPackageDirty\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageCommitError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLPackageCommitErrorHelper(){return globals.HLPackageCommitErrorHelper||(typeof HLPackageCommitErrorHelper=="undefined"?nil:HLPackageCommitErrorHelper)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLPackageCommitErrorHelper())._on_(self._model()))._showHelp();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageCommitError:",{anError:anError},globals.HLCommitPackageCommand)})},
args: ["anError"],
source: "onPackageCommitError: anError\x0a\x09(HLPackageCommitErrorHelper on: self model)\x0a\x09\x09showHelp",
messageSends: ["showHelp", "on:", "model"],
referencedClasses: ["HLPackageCommitErrorHelper"]
}),
globals.HLCommitPackageCommand);


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
globals.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Commit package";
},
args: [],
source: "label\x0a\x09^ 'Commit package'",
messageSends: [],
referencedClasses: []
}),
globals.HLCommitPackageCommand.klass);


smalltalk.addClass('HLCopyCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');

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
globals.HLCopyCommand.klass);

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
globals.HLCopyCommand.klass);


smalltalk.addClass('HLCopyClassCommand', globals.HLCopyCommand, [], 'Helios-Commands-Tools');
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
globals.HLCopyClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},globals.HLCopyClassCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass theNonMetaClass name",
messageSends: ["name", "theNonMetaClass", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLCopyClassCommand);

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
globals.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._copyClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLCopyClassCommand)})},
args: [],
source: "execute\x0a\x09self model copyClassTo: self input",
messageSends: ["copyClassTo:", "model", "input"],
referencedClasses: []
}),
globals.HLCopyClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLCopyClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLCopyClassCommand);

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
globals.HLCopyClassCommand);


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
globals.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy class";
},
args: [],
source: "label\x0a\x09^ 'Copy class'",
messageSends: [],
referencedClasses: []
}),
globals.HLCopyClassCommand.klass);

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
globals.HLCopyClassCommand.klass);


smalltalk.addClass('HLFindCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');

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
globals.HLFindCommand.klass);

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
globals.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', globals.HLFindCommand, [], 'Helios-Commands-Tools');
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
globals.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._openClassNamed_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLFindClassCommand)})},
args: [],
source: "execute\x0a\x09self model openClassNamed: self input",
messageSends: ["openClassNamed:", "model", "input"],
referencedClasses: []
}),
globals.HLFindClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLFindClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
globals.HLFindClassCommand);

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
globals.HLFindClassCommand);

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
globals.HLFindClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return true;
},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLFindClassCommand.klass);

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
globals.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find class";
},
args: [],
source: "label\x0a\x09^ 'Find class'",
messageSends: [],
referencedClasses: []
}),
globals.HLFindClassCommand.klass);


smalltalk.addClass('HLFindReferencesCommand', globals.HLFindCommand, [], 'Helios-Commands-Tools');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1,$receiver;
$3=self._model();
$ctx1.sendIdx["model"]=1;
$2=_st($3)._selectedMethod();
if(($receiver = $2) == null || $receiver.isNil){
$4=_st(self._model())._selectedClass();
if(($receiver = $4) == null || $receiver.isNil){
$1="";
} else {
var class_;
class_=$receiver;
$1=_st(_st(class_)._theNonMetaClass())._name();
};
} else {
var method;
method=$receiver;
$1=_st(method)._selector();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},globals.HLFindReferencesCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedMethod \x0a\x09\x09ifNil: [\x0a\x09\x09\x09self model selectedClass\x0a\x09\x09\x09\x09ifNil: [ '' ]\x0a\x09\x09\x09\x09ifNotNil: [ :class | class theNonMetaClass name ] ]\x0a\x09\x09ifNotNil: [ :method | method selector ]",
messageSends: ["ifNil:ifNotNil:", "selectedMethod", "model", "selectedClass", "name", "theNonMetaClass", "selector"],
referencedClasses: []
}),
globals.HLFindReferencesCommand);

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
globals.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLReferences(){return globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLReferences())._new();
_st($1)._openAsTab();
$2=_st($1)._search_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLFindReferencesCommand)})},
args: [],
source: "execute\x0a\x09HLReferences new \x0a\x09\x09openAsTab;\x0a\x09\x09search: self input",
messageSends: ["openAsTab", "new", "search:", "input"],
referencedClasses: ["HLReferences"]
}),
globals.HLFindReferencesCommand);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLFindReferencesCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames, self model allSelectors",
messageSends: [",", "availableClassNames", "model", "allSelectors"],
referencedClasses: []
}),
globals.HLFindReferencesCommand);

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
globals.HLFindReferencesCommand);

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
globals.HLFindReferencesCommand);


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
globals.HLFindReferencesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find references";
},
args: [],
source: "label\x0a\x09^ 'Find references'",
messageSends: [],
referencedClasses: []
}),
globals.HLFindReferencesCommand.klass);


smalltalk.addClass('HLMoveToCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');

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
globals.HLMoveToCommand.klass);

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
globals.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveClassToCommand', globals.HLMoveToCommand, [], 'Helios-Commands-Tools');
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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLMoveClassToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLMoveClassToCommand);


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
globals.HLMoveClassToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class";
},
args: [],
source: "label\x0a\x09^ 'Move class'",
messageSends: [],
referencedClasses: []
}),
globals.HLMoveClassToCommand.klass);


smalltalk.addClass('HLMoveClassToPackageCommand', globals.HLMoveClassToCommand, [], 'Helios-Commands-Tools');
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
globals.HLMoveClassToPackageCommand);

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
globals.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveClassToPackage_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLMoveClassToPackageCommand)})},
args: [],
source: "execute\x0a\x09self model moveClassToPackage: self input",
messageSends: ["moveClassToPackage:", "model", "input"],
referencedClasses: []
}),
globals.HLMoveClassToPackageCommand);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLMoveClassToPackageCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availablePackageNames",
messageSends: ["availablePackageNames", "model"],
referencedClasses: []
}),
globals.HLMoveClassToPackageCommand);

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
globals.HLMoveClassToPackageCommand);

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
globals.HLMoveClassToPackageCommand);


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
globals.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class to package";
},
args: [],
source: "label\x0a\x09^ 'Move class to package'",
messageSends: [],
referencedClasses: []
}),
globals.HLMoveClassToPackageCommand.klass);

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
globals.HLMoveClassToPackageCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', globals.HLMoveToCommand, [], 'Helios-Commands-Tools');
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
globals.HLMoveMethodToCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLMoveMethodToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
globals.HLMoveMethodToCommand);


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
globals.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method";
},
args: [],
source: "label\x0a\x09^ 'Move method'",
messageSends: [],
referencedClasses: []
}),
globals.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', globals.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
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
globals.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToClass_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLMoveMethodToClassCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToClass: self input",
messageSends: ["moveMethodToClass:", "model", "input"],
referencedClasses: []
}),
globals.HLMoveMethodToClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLMoveMethodToClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
globals.HLMoveMethodToClassCommand);

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
globals.HLMoveMethodToClassCommand);

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
globals.HLMoveMethodToClassCommand);


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
globals.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to class";
},
args: [],
source: "label\x09\x0a\x09^ 'Move method to class'",
messageSends: [],
referencedClasses: []
}),
globals.HLMoveMethodToClassCommand.klass);

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
globals.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', globals.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
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
globals.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._moveMethodToProtocol_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLMoveMethodToProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToProtocol: self input",
messageSends: ["moveMethodToProtocol:", "model", "input"],
referencedClasses: []
}),
globals.HLMoveMethodToProtocolCommand);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableProtocols",
messageSends: ["availableProtocols", "model"],
referencedClasses: []
}),
globals.HLMoveMethodToProtocolCommand);

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
globals.HLMoveMethodToProtocolCommand);

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
globals.HLMoveMethodToProtocolCommand);


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
globals.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to protocol";
},
args: [],
source: "label\x0a\x09^ 'Move method to protocol'",
messageSends: [],
referencedClasses: []
}),
globals.HLMoveMethodToProtocolCommand.klass);

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
globals.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');

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
globals.HLRemoveCommand.klass);

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
globals.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveClassCommand', globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
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
globals.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeClass();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLRemoveClassCommand)})},
args: [],
source: "execute\x0a\x09self model removeClass",
messageSends: ["removeClass", "model"],
referencedClasses: []
}),
globals.HLRemoveClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLRemoveClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLRemoveClassCommand);


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
globals.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove class";
},
args: [],
source: "label\x0a\x09^ 'Remove class'",
messageSends: [],
referencedClasses: []
}),
globals.HLRemoveClassCommand.klass);

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
globals.HLRemoveClassCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
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
globals.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLRemoveMethodCommand)})},
args: [],
source: "execute\x0a\x09self model removeMethod",
messageSends: ["removeMethod", "model"],
referencedClasses: []
}),
globals.HLRemoveMethodCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLRemoveMethodCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
globals.HLRemoveMethodCommand);


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
globals.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove method";
},
args: [],
source: "label\x0a\x09^ 'Remove method'",
messageSends: [],
referencedClasses: []
}),
globals.HLRemoveMethodCommand.klass);

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
globals.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLRemoveProtocolCommand', globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
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
globals.HLRemoveProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._removeProtocol();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLRemoveProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model removeProtocol",
messageSends: ["removeProtocol", "model"],
referencedClasses: []
}),
globals.HLRemoveProtocolCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLRemoveProtocolCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
messageSends: ["notNil", "selectedProtocol", "model"],
referencedClasses: []
}),
globals.HLRemoveProtocolCommand);


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
globals.HLRemoveProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove protocol";
},
args: [],
source: "label\x0a\x09^ 'Remove protocol'",
messageSends: [],
referencedClasses: []
}),
globals.HLRemoveProtocolCommand.klass);

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
globals.HLRemoveProtocolCommand.klass);


smalltalk.addClass('HLRenameCommand', globals.HLToolCommand, [], 'Helios-Commands-Tools');

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
globals.HLRenameCommand.klass);

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
globals.HLRenameCommand.klass);


smalltalk.addClass('HLRenameClassCommand', globals.HLRenameCommand, [], 'Helios-Commands-Tools');
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
globals.HLRenameClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},globals.HLRenameClassCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass theNonMetaClass name",
messageSends: ["name", "theNonMetaClass", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLRenameClassCommand);

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
globals.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameClassTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLRenameClassCommand)})},
args: [],
source: "execute\x0a\x09self model renameClassTo: self input",
messageSends: ["renameClassTo:", "model", "input"],
referencedClasses: []
}),
globals.HLRenameClassCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLRenameClassCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
messageSends: ["notNil", "selectedClass", "model"],
referencedClasses: []
}),
globals.HLRenameClassCommand);

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
globals.HLRenameClassCommand);


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
globals.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class";
},
args: [],
source: "label\x0a\x09^ 'Rename class'",
messageSends: [],
referencedClasses: []
}),
globals.HLRenameClassCommand.klass);

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
globals.HLRenameClassCommand.klass);


smalltalk.addClass('HLRenameProtocolCommand', globals.HLRenameCommand, [], 'Helios-Commands-Tools');
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
globals.HLRenameProtocolCommand);

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
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},globals.HLRenameProtocolCommand)})},
args: [],
source: "defaultInput\x0a\x09^ self model selectedProtocol",
messageSends: ["selectedProtocol", "model"],
referencedClasses: []
}),
globals.HLRenameProtocolCommand);

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
globals.HLRenameProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._renameProtocolTo_(self._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLRenameProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model renameProtocolTo: self input",
messageSends: ["renameProtocolTo:", "model", "input"],
referencedClasses: []
}),
globals.HLRenameProtocolCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLRenameProtocolCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
messageSends: ["notNil", "selectedProtocol", "model"],
referencedClasses: []
}),
globals.HLRenameProtocolCommand);

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
globals.HLRenameProtocolCommand);


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
globals.HLRenameProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol";
},
args: [],
source: "label\x0a\x09^ 'Rename protocol'",
messageSends: [],
referencedClasses: []
}),
globals.HLRenameProtocolCommand.klass);

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
globals.HLRenameProtocolCommand.klass);

});
