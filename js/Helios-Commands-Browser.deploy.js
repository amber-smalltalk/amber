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
"_activeBlock",
smalltalk.method({
selector: "activeBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._model())._selectedMethod())._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBlock",{},smalltalk.HLMoveMethodToCommand)})},
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


smalltalk.addClass('HLMethodMoveToClassSelectionCommand', smalltalk.HLMoveMethodToClassCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.HLBindingInput || HLBindingInput))._on_labelled_activeBlock_(_st(self)._key(),_st(self)._label(),_st(self)._activeBlock()))._callback_((function(ex){
return smalltalk.withContext(function($ctx2) {return _st(self)._execute_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},smalltalk.HLMethodMoveToClassSelectionCommand)})},
messageSends: ["callback:", "execute:", "on:labelled:activeBlock:", "key", "label", "activeBlock"]}),
smalltalk.HLMethodMoveToClassSelectionCommand);

smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._moveMethodToClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aClass:aClass},smalltalk.HLMethodMoveToClassSelectionCommand)})},
messageSends: ["moveMethodToClass:", "model"]}),
smalltalk.HLMethodMoveToClassSelectionCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (13);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMethodMoveToClassSelectionCommand.klass)})},
messageSends: []}),
smalltalk.HLMethodMoveToClassSelectionCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "select a class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMethodMoveToClassSelectionCommand.klass)})},
messageSends: []}),
smalltalk.HLMethodMoveToClassSelectionCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._moveMethodToProtocol();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["moveMethodToProtocol", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);


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


