define("helios/Helios-Commands-Browser", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Commands-Tools"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.packages["Helios-Commands-Browser"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLBrowserCommand', globals.HLToolCommand, [], 'Helios-Commands-Browser');

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
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},globals.HLBrowserCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
messageSends: ["isBrowserModel"],
referencedClasses: []
}),
globals.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', globals.HLBrowserCommand, [], 'Helios-Commands-Browser');

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
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},globals.HLBrowserGoToCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
messageSends: ["isBrowserModel"],
referencedClasses: []
}),
globals.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "g";
},
args: [],
source: "key\x0a\x09^ 'g'",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Go to";
},
args: [],
source: "label\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
globals.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToClassesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnClasses",
messageSends: ["focusOnClasses", "model"],
referencedClasses: []
}),
globals.HLGoToClassesCommand);


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
globals.HLGoToClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToDocumentationCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnDocumentation();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToDocumentationCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnDocumentation",
messageSends: ["focusOnDocumentation", "model"],
referencedClasses: []
}),
globals.HLGoToDocumentationCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";
},
args: [],
source: "key\x0a\x09^ 'd'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToDocumentationCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Documentation";
},
args: [],
source: "label\x0a\x09^ 'Documentation'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToDocumentationCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToMethodsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnMethods",
messageSends: ["focusOnMethods", "model"],
referencedClasses: []
}),
globals.HLGoToMethodsCommand);


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
globals.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";
},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnPackages",
messageSends: ["focusOnPackages", "model"],
referencedClasses: []
}),
globals.HLGoToPackagesCommand);


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
globals.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToProtocolsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
messageSends: ["focusOnProtocols", "model"],
referencedClasses: []
}),
globals.HLGoToProtocolsCommand);


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
globals.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";
},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLGoToSourceCodeCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
messageSends: ["focusOnSourceCode", "model"],
referencedClasses: []
}),
globals.HLGoToSourceCodeCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "s";
},
args: [],
source: "key\x0a\x09^ 's'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Source code";
},
args: [],
source: "label\x0a\x09^ 'Source code'",
messageSends: [],
referencedClasses: []
}),
globals.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLEditCommentCommand', globals.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._editComment();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLEditCommentCommand)})},
args: [],
source: "execute\x0a\x09self model editComment",
messageSends: ["editComment", "model"],
referencedClasses: []
}),
globals.HLEditCommentCommand);

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
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLEditCommentCommand)})},
args: [],
source: "isActive\x0a\x09^ self model showComment and: [ self model selectedClass notNil ]",
messageSends: ["and:", "showComment", "model", "notNil", "selectedClass"],
referencedClasses: []
}),
globals.HLEditCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";
},
args: [],
source: "key\x0a\x09^ 'd'",
messageSends: [],
referencedClasses: []
}),
globals.HLEditCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Edit documentation";
},
args: [],
source: "label\x0a\x09^ 'Edit documentation'",
messageSends: [],
referencedClasses: []
}),
globals.HLEditCommentCommand.klass);


smalltalk.addClass('HLGenerateCommand', globals.HLBrowserCommand, [], 'Helios-Commands-Browser');
globals.HLGenerateCommand.comment="I am a group command used to gather all the commands generating code (`accessors`, `initialize`, etc)";

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "h";
},
args: [],
source: "key\x0a\x09^ 'h'",
messageSends: [],
referencedClasses: []
}),
globals.HLGenerateCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Generate";
},
args: [],
source: "label\x0a\x09^ 'Generate'",
messageSends: [],
referencedClasses: []
}),
globals.HLGenerateCommand.klass);


smalltalk.addClass('HLCategorizeUnclassifiedCommand', globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
globals.HLCategorizeUnclassifiedCommand.comment="I am the command used to categorize unclassified methods";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,unclassified;
function $HLMethodClassifier(){return globals.HLMethodClassifier||(typeof HLMethodClassifier=="undefined"?nil:HLMethodClassifier)}
return smalltalk.withContext(function($ctx1) { 
targetClass=_st(self._model())._selectedClass();
unclassified=_st(_st(targetClass)._methods())._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._protocol()).__eq("as yet unclassified");
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
_st(_st($HLMethodClassifier())._new())._classifyAll_(unclassified);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,unclassified:unclassified},globals.HLCategorizeUnclassifiedCommand)})},
args: [],
source: "execute\x0a\x09| targetClass unclassified |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09unclassified := targetClass methods select:[ :e | e protocol = 'as yet unclassified' ].\x0a\x09\x09\x0a\x09HLMethodClassifier new\x0a\x09\x09classifyAll: unclassified",
messageSends: ["selectedClass", "model", "select:", "methods", "=", "protocol", "classifyAll:", "new"],
referencedClasses: ["HLMethodClassifier"]
}),
globals.HLCategorizeUnclassifiedCommand);


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
globals.HLCategorizeUnclassifiedCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Categorize";
},
args: [],
source: "label\x0a\x09^ 'Categorize'",
messageSends: [],
referencedClasses: []
}),
globals.HLCategorizeUnclassifiedCommand.klass);


smalltalk.addClass('HLGenerateAccessorsCommand', globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
globals.HLGenerateAccessorsCommand.comment="I am the command used to generate the `getter` and the `setter` methods depending of the selected class";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output,first;
function $HLInitializeGenerator(){return globals.HLInitializeGenerator||(typeof HLInitializeGenerator=="undefined"?nil:HLInitializeGenerator)}
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
return self}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output,first:first},globals.HLGenerateAccessorsCommand)})},
args: [],
source: "execute\x0a\x09| targetClass output first |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLInitializeGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09first := output sourceCodes first.\x0a\x09self model\x0a\x09\x09selectedProtocol: output protocol;\x0a\x09\x09selectedMethod:(targetClass>>first selector);\x0a\x09\x09focusOnSourceCode",
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "first", "sourceCodes", "selectedProtocol:", "protocol", "selectedMethod:", ">>", "selector", "focusOnSourceCode"],
referencedClasses: ["HLInitializeGenerator"]
}),
globals.HLGenerateAccessorsCommand);


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
globals.HLGenerateAccessorsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Initialize";
},
args: [],
source: "label\x0a\x09^ 'Initialize'",
messageSends: [],
referencedClasses: []
}),
globals.HLGenerateAccessorsCommand.klass);


smalltalk.addClass('HLGenerateInitializeCommand', globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
globals.HLGenerateInitializeCommand.comment="I am the command used to generate the `initialize` method depending of the selected class";
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output;
function $HLAccessorsGenerator(){return globals.HLAccessorsGenerator||(typeof HLAccessorsGenerator=="undefined"?nil:HLAccessorsGenerator)}
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
return self}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output},globals.HLGenerateInitializeCommand)})},
args: [],
source: "execute\x0a\x09| targetClass output |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLAccessorsGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09self model selectedProtocol: output protocol",
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "selectedProtocol:", "protocol"],
referencedClasses: ["HLAccessorsGenerator"]
}),
globals.HLGenerateInitializeCommand);


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
globals.HLGenerateInitializeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Accessors";
},
args: [],
source: "label\x0a\x09^ 'Accessors'",
messageSends: [],
referencedClasses: []
}),
globals.HLGenerateInitializeCommand.klass);


smalltalk.addClass('HLToggleCommand', globals.HLBrowserCommand, [], 'Helios-Commands-Browser');

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
globals.HLToggleCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Toggle";
},
args: [],
source: "label\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
globals.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassCommentCommand', globals.HLToggleCommand, [], 'Helios-Commands-Browser');
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
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLToggleClassCommentCommand)})},
args: [],
source: "execute\x0a\x09self model showComment: self model showComment not",
messageSends: ["showComment:", "model", "not", "showComment"],
referencedClasses: []
}),
globals.HLToggleClassCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";
},
args: [],
source: "key\x0a\x09^ 'd'",
messageSends: [],
referencedClasses: []
}),
globals.HLToggleClassCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Documentation";
},
args: [],
source: "label\x0a\x09^ 'Documentation'",
messageSends: [],
referencedClasses: []
}),
globals.HLToggleClassCommentCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', globals.HLToggleCommand, [], 'Helios-Commands-Browser');
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
_st($1)._showInstance_(_st(_st(self._model())._showInstance())._not());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLToggleClassSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: self model showInstance not",
messageSends: ["showInstance:", "model", "not", "showInstance"],
referencedClasses: []
}),
globals.HLToggleClassSideCommand);


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
globals.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class side";
},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
globals.HLToggleClassSideCommand.klass);

});
