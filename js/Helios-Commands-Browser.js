define("amber_core/Helios-Commands-Browser", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Helios-Commands-Tools"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.packages["Helios-Commands-Browser"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLBrowserCommand', smalltalk.HLToolCommand, [], 'Helios-Commands-Browser');

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
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLBrowserCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
messageSends: ["isBrowserModel"],
referencedClasses: []
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

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
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLBrowserGoToCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
messageSends: ["isBrowserModel"],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "g";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLBrowserGoToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'g'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Go to";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLBrowserGoToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToClassesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnClasses",
messageSends: ["focusOnClasses", "model"],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'c'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToMethodsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnMethods",
messageSends: ["focusOnMethods", "model"],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'm'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnPackages",
messageSends: ["focusOnPackages", "model"],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "p";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'p'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToProtocolsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
messageSends: ["focusOnProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "key\x0a\x09^ 't'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToSourceCodeCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
messageSends: ["focusOnSourceCode", "model"],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "s";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "key\x0a\x09^ 's'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Source code";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Source code'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLEditCommentCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._editComment();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLEditCommentCommand)})},
args: [],
source: "execute\x0a\x09self model editComment",
messageSends: ["editComment", "model"],
referencedClasses: []
}),
smalltalk.HLEditCommentCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._model();
$ctx1.sendIdx["model"]=1;
$2=_st($3)._showComment();
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._model())._selectedClass())._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLEditCommentCommand)})},
args: [],
source: "isActive\x0a\x09^ self model showComment and: [ self model selectedClass notNil ]",
messageSends: ["and:", "showComment", "model", "notNil", "selectedClass"],
referencedClasses: []
}),
smalltalk.HLEditCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "d";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLEditCommentCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'd'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLEditCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Edit documentation";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLEditCommentCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Edit documentation'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLEditCommentCommand.klass);


smalltalk.addClass('HLGenerateCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.HLGenerateCommand.comment="I am a group command used to gather all the commands generating code (`accessors`, `initialize`, etc)";

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "h";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGenerateCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'h'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Generate";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGenerateCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Generate'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateCommand.klass);


smalltalk.addClass('HLGenerateAccessorsCommand', smalltalk.HLGenerateCommand, [], 'Helios-Commands-Browser');
smalltalk.HLGenerateAccessorsCommand.comment="I am the command used to generate the `getter` and the `setter` methods depending of the selected class";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output,first;
function $HLInitializeGenerator(){return smalltalk.HLInitializeGenerator||(typeof HLInitializeGenerator=="undefined"?nil:HLInitializeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self._model();
$ctx1.sendIdx["model"]=1;
targetClass=_st($1)._selectedClass();
$2=_st($HLInitializeGenerator())._new();
_st($2)._class_(targetClass);
_st($2)._generate();
$3=_st($2)._output();
output=$3;
_st(output)._compile();
first=_st(_st(output)._sourceCodes())._first();
$4=self._model();
_st($4)._selectedProtocol_(_st(output)._protocol());
_st($4)._selectedMethod_(_st(targetClass).__gt_gt(_st(first)._selector()));
$5=_st($4)._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output,first:first},smalltalk.HLGenerateAccessorsCommand)})},
args: [],
source: "execute\x0a\x09| targetClass output first |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLInitializeGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09first := output sourceCodes first.\x0a\x09self model\x0a\x09\x09selectedProtocol: output protocol;\x0a\x09\x09selectedMethod:(targetClass>>first selector);\x0a\x09\x09focusOnSourceCode",
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "first", "sourceCodes", "selectedProtocol:", "protocol", "selectedMethod:", ">>", "selector", "focusOnSourceCode"],
referencedClasses: ["HLInitializeGenerator"]
}),
smalltalk.HLGenerateAccessorsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "i";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGenerateAccessorsCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'i'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateAccessorsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Initialize";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGenerateAccessorsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Initialize'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateAccessorsCommand.klass);


smalltalk.addClass('HLGenerateInitializeCommand', smalltalk.HLGenerateCommand, [], 'Helios-Commands-Browser');
smalltalk.HLGenerateInitializeCommand.comment="I am the command used to generate the `initialize` method depending of the selected class";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output;
function $HLAccessorsGenerator(){return smalltalk.HLAccessorsGenerator||(typeof HLAccessorsGenerator=="undefined"?nil:HLAccessorsGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._model();
$ctx1.sendIdx["model"]=1;
targetClass=_st($1)._selectedClass();
$2=_st($HLAccessorsGenerator())._new();
_st($2)._class_(targetClass);
_st($2)._generate();
$3=_st($2)._output();
output=$3;
_st(output)._compile();
_st(self._model())._selectedProtocol_(_st(output)._protocol());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output},smalltalk.HLGenerateInitializeCommand)})},
args: [],
source: "execute\x0a\x09| targetClass output |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLAccessorsGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09self model selectedProtocol: output protocol",
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "selectedProtocol:", "protocol"],
referencedClasses: ["HLAccessorsGenerator"]
}),
smalltalk.HLGenerateInitializeCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "a";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGenerateInitializeCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateInitializeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Accessors";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGenerateInitializeCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Accessors'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerateInitializeCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "key\x0a\x09^ 't'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Toggle";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassCommentCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._model();
$ctx1.sendIdx["model"]=1;
_st($1)._showComment_(_st(_st(self._model())._showComment())._not());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassCommentCommand)})},
args: [],
source: "execute\x0a\x09self model showComment: self model showComment not",
messageSends: ["showComment:", "model", "not", "showComment"],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "d";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassCommentCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'd'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Documentation";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassCommentCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Documentation'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassCommentCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showInstance_(false);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: false",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'c'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showInstance_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleInstanceSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: true",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "i";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'i'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Instance side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Instance side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

});
