smalltalk.addPackage('Helios-Commands');
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_(_st(self)._key(),_st(self)._label()))._callback_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._execute();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{}, smalltalk.HLCommand)})},
args: [],
source: "asBinding\x0a\x09^ (HLBindingAction on: self key labelled: self label)\x0a    \x09callback: [ self execute ]",
messageSends: ["callback:", "execute", "on:labelled:", "key", "label"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand)})},
args: [],
source: "documentation\x0a\x09^ self class documentation",
messageSends: ["documentation", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCommand)})},
args: [],
source: "execute\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand)})},
args: [],
source: "key\x0a\x09^ self class key",
messageSends: ["key", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand)})},
args: [],
source: "label\x0a\x09^ self class label",
messageSends: ["label", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "bindingGroup\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "documentation\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "key\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand.klass)})},
args: [],
source: "label\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLBrowserCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserCommand)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aBrowserModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserCommand)})},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCommand);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserCommand.klass)})},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Go to";
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLGoToCommand.klass)})},
args: [],
source: "bindingGroup\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToClassesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnClasses",
messageSends: ["focusOnClasses", "model"],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToMethodsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnMethods",
messageSends: ["focusOnMethods", "model"],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (77);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22m\x22\x0a    \x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnPackages",
messageSends: ["focusOnPackages", "model"],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (80);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 80",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToProtocolsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
messageSends: ["focusOnProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToSourceCodeCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
messageSends: ["focusOnSourceCode", "model"],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (83);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "key\x0a\x09\x22s\x22\x0a    \x0a\x09^ 83",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Source code";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Source code'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Toggle";
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLToggleCommand.klass)})},
args: [],
source: "bindingGroup\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(false);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLToggleClassSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: false",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Class side";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLToggleInstanceSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: true",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (73);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22i\x22\x0a    \x0a\x09^ 73",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Instance side";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Instance side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.HLManager || HLManager))._current())._removeActiveTab();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCloseTabCommand)})},
args: [],
source: "execute\x0a\x09HLManager current removeActiveTab",
messageSends: ["removeActiveTab", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCloseTabCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Close";
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "bindingGroup\x0a\x09^ 'Close'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Close tab";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Close tab'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Open";
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLOpenCommand.klass)})},
args: [],
source: "bindingGroup\x0a\x09^ 'Open'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLBrowser || HLBrowser))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenBrowserCommand)})},
args: [],
source: "execute\x0a\x09^ HLBrowser openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLBrowser"]
}),
smalltalk.HLOpenBrowserCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (66);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "key\x0a\x09^ 66",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Browser";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenTranscriptCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLTranscript || HLTranscript))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenTranscriptCommand)})},
args: [],
source: "execute\x0a\x09^ HLTranscript openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLTranscript"]
}),
smalltalk.HLOpenTranscriptCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenTranscriptCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Transcript'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenTranscriptCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLWorkspace || HLWorkspace))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenWorkspaceCommand)})},
args: [],
source: "execute\x0a\x09^ HLWorkspace openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLWorkspace"]
}),
smalltalk.HLOpenWorkspaceCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (87);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "key\x0a\x09^ 87",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands');


