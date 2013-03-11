smalltalk.addPackage('Helios-Commands-Core');
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_activeBlock",
smalltalk.method({
selector: "activeBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBlock",{},smalltalk.HLCommand)})},
args: [],
source: "activeBlock\x0a\x09^ [ true ]",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asActionBinding",
smalltalk.method({
selector: "asActionBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_activeBlock_(_st(self)._key(),_st(self)._label(),_st(self)._activeBlock()))._callback_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._execute();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asActionBinding\x0a\x09^ (HLBindingAction on: self key labelled: self label activeBlock: self activeBlock)\x0a    \x09callback: [ self execute ]",
messageSends: ["callback:", "execute", "on:labelled:activeBlock:", "key", "label", "activeBlock"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
category: 'converting',
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
args: [],
source: "asBinding\x0a\x09^ self isBindingGroup\x0a\x09\x09ifTrue: [ self asGroupBinding ]\x0a\x09\x09ifFalse: [ self asActionBinding ]",
messageSends: ["ifTrue:ifFalse:", "asGroupBinding", "asActionBinding", "isBindingGroup"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_asGroupBinding",
smalltalk.method({
selector: "asGroupBinding",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLBindingGroup || HLBindingGroup))._on_labelled_(_st(self)._key(),_st(self)._label());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asGroupBinding\x0a\x09^ HLBindingGroup \x0a\x09\x09on: self key \x0a\x09\x09labelled: self label",
messageSends: ["on:labelled:", "key", "label"],
referencedClasses: ["HLBindingGroup"]
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
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},smalltalk.HLCommand)})},
args: [],
source: "isBindingGroup\x0a\x09^ (self class methodDictionary includesKey: 'execute') not",
messageSends: ["not", "includesKey:", "methodDictionary", "class"],
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
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
category: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aBinding)._add_(_st(self)._asBinding());
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ aBinding add: self asBinding",
messageSends: ["add:", "asBinding"],
referencedClasses: []
}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_asBindingOn_",
smalltalk.method({
selector: "asBindingOn:",
category: 'converting',
fn: function (aBinding){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { var $1;
instance=_st(_st(self)._new())._asBinding();
_st(aBinding)._add_(instance);
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBindingOn:",{aBinding:aBinding,instance:instance},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "asBindingOn: aBinding\x0a\x09| instance |\x0a\x09\x0a\x09instance := self new asBinding.\x0a\x09aBinding add: instance.\x0a\x09^ instance",
messageSends: ["asBinding", "new", "add:"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_concreteSubclasses",
smalltalk.method({
selector: "concreteSubclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._subclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isConcrete();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"concreteSubclasses",{},smalltalk.HLCommand.klass)})},
args: [],
source: "concreteSubclasses\x0a\x09^ self subclasses select: [ :each |\x0a\x09\x09each isConcrete ]",
messageSends: ["select:", "isConcrete", "subclasses"],
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
"_isConcrete",
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._key())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.HLCommand.klass)})},
args: [],
source: "isConcrete\x0a\x09^ self key notNil",
messageSends: ["notNil", "key"],
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

smalltalk.addMethod(
"_registerConcreteClassesOn_",
smalltalk.method({
selector: "registerConcreteClassesOn:",
category: 'registration',
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
args: ["aBinding"],
source: "registerConcreteClassesOn: aBinding\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self asBindingOn: aBinding ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]",
messageSends: ["ifTrue:ifFalse:", "asBindingOn:", "isConcrete", "do:", "registerConcreteClassesOn:", "subclasses"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_registerOn_",
smalltalk.method({
selector: "registerOn:",
category: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ self new registerOn: aBinding",
messageSends: ["registerOn:", "new"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');
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
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (87);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "key\x0a\x09^ 87",
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


smalltalk.addClass('HLModelCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands-Core');
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
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLModelCommand)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLModelCommand)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);


smalltalk.addMethod(
"_for_",
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aModel"],
source: "for: aModel\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerConcreteClassesOn_for_",
smalltalk.method({
selector: "registerConcreteClassesOn:for:",
category: 'registration',
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
args: ["aBinding", "aModel"],
source: "registerConcreteClassesOn: aBinding for: aModel\x0a\x09self concreteSubclasses do: [ :each | | binding |\x0a\x09\x09binding := each registerOn: aBinding for: aModel.\x0a\x09\x09binding isBindingGroup ifTrue: [\x0a\x09\x09\x09each registerConcreteClassesOn: binding for: aModel ] ]",
messageSends: ["do:", "registerOn:for:", "ifTrue:", "registerConcreteClassesOn:for:", "isBindingGroup", "concreteSubclasses"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
"_registerOn_for_",
smalltalk.method({
selector: "registerOn:for:",
category: 'registration',
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._for_(aModel))._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerOn: aBinding for: aModel\x0a\x09^ (self for: aModel) registerOn: aBinding",
messageSends: ["registerOn:", "for:"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (79);
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "key\x0a\x09^ 79",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Open";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Open'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
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


smalltalk.addClass('HLOpenTranscriptCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
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


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLCodeWidget || HLCodeWidget))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLOpenWorkspaceCommand)})},
args: [],
source: "execute\x0a\x09^ HLCodeWidget openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLCodeWidget"]
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


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "View";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLViewCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'View'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLViewCommand.klass);


