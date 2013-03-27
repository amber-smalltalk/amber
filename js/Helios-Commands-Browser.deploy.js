smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.addClass('HLBrowserCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_for_",
smalltalk.method({
selector: "for:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCommand.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (71);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToCommand.klass)})},
messageSends: []}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Go to";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToCommand.klass)})},
messageSends: []}),
smalltalk.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToClassesCommand)})},
messageSends: ["focusOnClasses", "model"]}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToMethodsCommand)})},
messageSends: ["focusOnMethods", "model"]}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (77);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToPackagesCommand)})},
messageSends: ["focusOnPackages", "model"]}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (80);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToProtocolsCommand)})},
messageSends: ["focusOnProtocols", "model"]}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToSourceCodeCommand)})},
messageSends: ["focusOnSourceCode", "model"]}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (83);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Source code";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommitPackageCommand)})},
messageSends: ["commitPackage", "model"]}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommitPackageCommand)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand);


smalltalk.addMethod(
"_isValidFor_",
smalltalk.method({
selector: "isValidFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isPackage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: ["isPackage"]}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (75);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Commit package";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);


smalltalk.addClass('HLFindCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (70);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Find";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._openClassNamed_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindClassCommand)})},
messageSends: ["openClassNamed:", "input", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Find a class";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (77);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Move";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (77);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._moveMethodToClass_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["moveMethodToClass:", "input", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Move method to class:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);


smalltalk.addMethod(
"_isValidFor_",
smalltalk.method({
selector: "isValidFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: ["isCompiledMethod"]}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "to class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
"_menuLabel",
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "select a protocol";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._moveMethodToProtocol_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["moveMethodToProtocol:", "input", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["availableProtocols", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Move method to a protocol:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
"_isValidFor_",
smalltalk.method({
selector: "isValidFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: ["isCompiledMethod"]}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "to protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
"_menuLabel",
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to protocol...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (88);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Remove";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["removeMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
"_isValidFor_",
smalltalk.method({
selector: "isValidFor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isCompiledMethod();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anObject:anObject},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: ["isCompiledMethod"]}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (77);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
"_menuLabel",
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove method";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Toggle";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(false);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (67);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Class side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleInstanceSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (73);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Instance side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);


