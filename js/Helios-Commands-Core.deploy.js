smalltalk.addPackage('Helios-Commands-Core');
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_activeBlock",
smalltalk.method({
selector: "activeBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBlock",{},smalltalk.HLCommand)})},
messageSends: []}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asActionBinding",
smalltalk.method({
selector: "asActionBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_activeBlock_(_st(self)._key(),_st(self)._label(),_st(self)._activeBlock()))._callback_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._execute();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},smalltalk.HLCommand)})},
messageSends: ["callback:", "execute", "on:labelled:activeBlock:", "key", "label", "activeBlock"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._isBindingGroup();
if(smalltalk.assert($2)){
$1=_st(self)._asGroupBinding();
} else {
$1=_st(self)._asActionBinding();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},smalltalk.HLCommand)})},
messageSends: ["ifTrue:ifFalse:", "asGroupBinding", "asActionBinding", "isBindingGroup"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asGroupBinding",
smalltalk.method({
selector: "asGroupBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLBindingGroup || HLBindingGroup))._on_labelled_(_st(self)._key(),_st(self)._label());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},smalltalk.HLCommand)})},
messageSends: ["on:labelled:", "key", "label"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand)})},
messageSends: ["documentation", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCommand)})},
messageSends: []}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},smalltalk.HLCommand)})},
messageSends: ["not", "includesKey:", "methodDictionary", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand)})},
messageSends: ["key", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand)})},
messageSends: ["label", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aBinding)._add_(_st(self)._asBinding());
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand)})},
messageSends: ["add:", "asBinding"]}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_asBindingOn_",
smalltalk.method({
selector: "asBindingOn:",
fn: function (aBinding){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { var $1;
instance=_st(_st(self)._new())._asBinding();
_st(aBinding)._add_(instance);
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBindingOn:",{aBinding:aBinding,instance:instance},smalltalk.HLCommand.klass)})},
messageSends: ["asBinding", "new", "add:"]}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_concreteSubclasses",
smalltalk.method({
selector: "concreteSubclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._subclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isConcrete();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"concreteSubclasses",{},smalltalk.HLCommand.klass)})},
messageSends: ["select:", "isConcrete", "subclasses"]}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_isConcrete",
smalltalk.method({
selector: "isConcrete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._key())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.HLCommand.klass)})},
messageSends: ["notNil", "key"]}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_registerConcreteClassesOn_",
smalltalk.method({
selector: "registerConcreteClassesOn:",
fn: function (aBinding){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isConcrete();
if(smalltalk.assert($1)){
newBinding=_st(self)._asBindingOn_(aBinding);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._registerConcreteClassesOn_(newBinding);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:",{aBinding:aBinding,newBinding:newBinding},smalltalk.HLCommand.klass)})},
messageSends: ["ifTrue:ifFalse:", "asBindingOn:", "isConcrete", "do:", "registerConcreteClassesOn:", "subclasses"]}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand.klass)})},
messageSends: ["registerOn:", "new"]}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.HLManager || HLManager))._current())._removeActiveTab();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCloseTabCommand)})},
messageSends: ["removeActiveTab", "current"]}),
smalltalk.HLCloseTabCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (87);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCloseTabCommand.klass)})},
messageSends: []}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Close tab";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCloseTabCommand.klass)})},
messageSends: []}),
smalltalk.HLCloseTabCommand.klass);


smalltalk.addClass('HLModelCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands-Core');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLModelCommand)})},
messageSends: []}),
smalltalk.HLModelCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLModelCommand)})},
messageSends: []}),
smalltalk.HLModelCommand);


smalltalk.addMethod(
"_for_",
smalltalk.method({
selector: "for:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},smalltalk.HLModelCommand.klass)})},
messageSends: ["new"]}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerConcreteClassesOn_for_",
smalltalk.method({
selector: "registerConcreteClassesOn:for:",
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._concreteSubclasses())._do_((function(each){
var binding;
return smalltalk.withContext(function($ctx2) {binding=_st(each)._registerOn_for_(aBinding,aModel);
binding;
$1=_st(binding)._isBindingGroup();
if(smalltalk.assert($1)){
return _st(each)._registerConcreteClassesOn_for_(binding,aModel);
};
}, function($ctx2) {$ctx2.fillBlock({each:each,binding:binding},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:for:",{aBinding:aBinding,aModel:aModel},smalltalk.HLModelCommand.klass)})},
messageSends: ["do:", "registerOn:for:", "ifTrue:", "registerConcreteClassesOn:for:", "isBindingGroup", "concreteSubclasses"]}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerOn_for_",
smalltalk.method({
selector: "registerOn:for:",
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._for_(aModel))._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},smalltalk.HLModelCommand.klass)})},
messageSends: ["registerOn:", "for:"]}),
smalltalk.HLModelCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (79);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Open";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLBrowser || HLBrowser))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenBrowserCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenBrowserCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (66);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenBrowserCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Browser";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenBrowserCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenTranscriptCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLTranscript || HLTranscript))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenTranscriptCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenTranscriptCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (84);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenTranscriptCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenTranscriptCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLCodeWidget || HLCodeWidget))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLOpenWorkspaceCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenWorkspaceCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (87);
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "View";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLViewCommand.klass)})},
messageSends: []}),
smalltalk.HLViewCommand.klass);


