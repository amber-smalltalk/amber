define("helios/Helios-Commands-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Commands-Core');
smalltalk.packages["Helios-Commands-Core"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLCommand', globals.Object, ['input'], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asActionBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingAction(){return globals.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($HLBindingAction())._on_labelled_(self._keyCode(),self._label());
_st($2)._command_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},globals.HLCommand)})},
args: [],
source: "asActionBinding\x0a\x09^ (HLBindingAction on: self keyCode labelled: self label)\x0a    \x09command: self;\x0a\x09\x09yourself",
messageSends: ["command:", "on:labelled:", "keyCode", "label", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "asBinding",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isBindingGroup();
if(smalltalk.assert($2)){
$1=self._asGroupBinding();
} else {
$1=self._asActionBinding();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},globals.HLCommand)})},
args: [],
source: "asBinding\x0a\x09^ self isBindingGroup\x0a\x09\x09ifTrue: [ self asGroupBinding ]\x0a\x09\x09ifFalse: [ self asActionBinding ]",
messageSends: ["ifTrue:ifFalse:", "isBindingGroup", "asGroupBinding", "asActionBinding"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "asGroupBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingGroup(){return globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLBindingGroup())._on_labelled_(self._keyCode(),self._label());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},globals.HLCommand)})},
args: [],
source: "asGroupBinding\x0a\x09^ HLBindingGroup \x0a\x09\x09on: self keyCode\x0a\x09\x09labelled: self label",
messageSends: ["on:labelled:", "keyCode", "label"],
referencedClasses: ["HLBindingGroup"]
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "commandError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"commandError:",{aString:aString},globals.HLCommand)})},
args: ["aString"],
source: "commandError: aString\x0a\x09self error: aString",
messageSends: ["error:"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return "";
},
args: [],
source: "defaultInput\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{},globals.HLCommand)})},
args: [],
source: "documentation\x0a\x09^ self class documentation",
messageSends: ["documentation", "class"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return self},
args: [],
source: "execute",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@input"];
return $1;
},
args: [],
source: "input\x0a\x09^ input",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@input"]=aString;
$1=self["@input"];
return $1;
},
args: ["aString"],
source: "input: aString\x0a\x09^ input := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "inputCompletion\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},globals.HLCommand)})},
args: [],
source: "inputLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isAction",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isBindingGroup())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAction",{},globals.HLCommand)})},
args: [],
source: "isAction\x0a\x09^ self isBindingGroup not",
messageSends: ["not", "isBindingGroup"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isActive\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isBindingGroup",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},globals.HLCommand)})},
args: [],
source: "isBindingGroup\x0a\x09^ (self class methodDictionary includesKey: 'execute') not",
messageSends: ["not", "includesKey:", "methodDictionary", "class"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isInputRequired\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},globals.HLCommand)})},
args: [],
source: "key\x0a\x09^ self class key",
messageSends: ["key", "class"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "keyCode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._key())._asUppercase())._charCodeAt_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyCode",{},globals.HLCommand)})},
args: [],
source: "keyCode\x0a\x09^ self key asUppercase charCodeAt: 1",
messageSends: ["charCodeAt:", "asUppercase", "key"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HLCommand)})},
args: [],
source: "label\x0a\x09^ self class label",
messageSends: ["label", "class"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._menuLabel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},globals.HLCommand)})},
args: [],
source: "menuLabel\x0a\x09^ self class menuLabel",
messageSends: ["menuLabel", "class"],
referencedClasses: []
}),
globals.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBinding)._add_(self._asBinding());
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},globals.HLCommand)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ aBinding add: self asBinding",
messageSends: ["add:", "asBinding"],
referencedClasses: []
}),
globals.HLCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "concreteClasses",
protocol: 'registration',
fn: function (){
var self=this;
var classes;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
classes=_st($OrderedCollection())._new();
$1=self._isConcrete();
if(smalltalk.assert($1)){
_st(classes)._add_(self);
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(classes)._addAll_(_st(each)._concreteClasses());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$2=classes;
return $2;
}, function($ctx1) {$ctx1.fill(self,"concreteClasses",{classes:classes},globals.HLCommand.klass)})},
args: [],
source: "concreteClasses\x0a\x09| classes |\x0a\x09\x0a\x09classes := OrderedCollection new.\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ classes add: self ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | \x0a\x09\x09classes addAll: each concreteClasses ].\x0a\x09\x09\x0a\x09^ classes",
messageSends: ["new", "ifTrue:", "isConcrete", "add:", "do:", "subclasses", "addAll:", "concreteClasses"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "documentation\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._key())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},globals.HLCommand.klass)})},
args: [],
source: "isConcrete\x0a\x09^ self key notNil",
messageSends: ["notNil", "key"],
referencedClasses: []
}),
globals.HLCommand.klass);

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
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "key\x0a\x09\x22Answer a single character string or nil if no key\x22\x0a\x09\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "label\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},globals.HLCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerConcreteClassesOn:",
protocol: 'accessing',
fn: function (aBinding){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isConcrete();
if(smalltalk.assert($1)){
newBinding=self._registerOn_(aBinding);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._registerConcreteClassesOn_(newBinding);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:",{aBinding:aBinding,newBinding:newBinding},globals.HLCommand.klass)})},
args: ["aBinding"],
source: "registerConcreteClassesOn: aBinding\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]",
messageSends: ["ifTrue:ifFalse:", "isConcrete", "registerOn:", "do:", "subclasses", "registerConcreteClassesOn:"],
referencedClasses: []
}),
globals.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},globals.HLCommand.klass)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ self new registerOn: aBinding",
messageSends: ["registerOn:", "new"],
referencedClasses: []
}),
globals.HLCommand.klass);


smalltalk.addClass('HLCloseTabCommand', globals.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._removeActiveTab();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLCloseTabCommand)})},
args: [],
source: "execute\x0a\x09HLManager current removeActiveTab",
messageSends: ["removeActiveTab", "current"],
referencedClasses: ["HLManager"]
}),
globals.HLCloseTabCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "w";
},
args: [],
source: "key\x0a\x09^ 'w'",
messageSends: [],
referencedClasses: []
}),
globals.HLCloseTabCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Close tab";
},
args: [],
source: "label\x0a\x09^ 'Close tab'",
messageSends: [],
referencedClasses: []
}),
globals.HLCloseTabCommand.klass);


smalltalk.addClass('HLModelCommand', globals.HLCommand, ['model'], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.HLModelCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
globals.HLModelCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},globals.HLModelCommand.klass)})},
args: ["aModel"],
source: "for: aModel\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
globals.HLModelCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerConcreteClassesOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isConcrete())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isValidFor_(aModel);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
newBinding=self._registerOn_for_(aBinding,aModel);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._registerConcreteClassesOn_for_(newBinding,aModel);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:for:",{aBinding:aBinding,aModel:aModel,newBinding:newBinding},globals.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerConcreteClassesOn: aBinding for: aModel\x0a\x09| newBinding |\x0a\x09\x0a\x09(self isConcrete and: [ self isValidFor: aModel ])\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding for: aModel ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each |\x0a\x09\x09each registerConcreteClassesOn: newBinding for: aModel ]",
messageSends: ["ifTrue:ifFalse:", "and:", "isConcrete", "isValidFor:", "registerOn:for:", "do:", "subclasses", "registerConcreteClassesOn:for:"],
referencedClasses: []
}),
globals.HLModelCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._for_(aModel))._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},globals.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerOn: aBinding for: aModel\x0a\x09^ (self for: aModel) registerOn: aBinding",
messageSends: ["registerOn:", "for:"],
referencedClasses: []
}),
globals.HLModelCommand.klass);


smalltalk.addClass('HLOpenCommand', globals.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "o";
},
args: [],
source: "key\x0a\x09^ 'o'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Open";
},
args: [],
source: "label\x0a\x09^ 'Open'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', globals.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLBrowser())._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLOpenBrowserCommand)})},
args: [],
source: "execute\x0a\x09^ HLBrowser openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLBrowser"]
}),
globals.HLOpenBrowserCommand);


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
globals.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Browser";
},
args: [],
source: "label\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenSUnitCommand', globals.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLSUnit(){return globals.HLSUnit||(typeof HLSUnit=="undefined"?nil:HLSUnit)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLSUnit())._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLOpenSUnitCommand)})},
args: [],
source: "execute\x0a\x09^ HLSUnit openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLSUnit"]
}),
globals.HLOpenSUnitCommand);


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
globals.HLOpenSUnitCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";
},
args: [],
source: "label\x0a\x09^ 'SUnit'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenSUnitCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', globals.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLWorkspace(){return globals.HLWorkspace||(typeof HLWorkspace=="undefined"?nil:HLWorkspace)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLWorkspace())._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},globals.HLOpenWorkspaceCommand)})},
args: [],
source: "execute\x0a\x09^ HLWorkspace openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLWorkspace"]
}),
globals.HLOpenWorkspaceCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "w";
},
args: [],
source: "key\x0a\x09^ 'w'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Workspace";
},
args: [],
source: "label\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
globals.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLSwitchTabCommand', globals.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var activeTab;
function $HLTabSelectionWidget(){return globals.HLTabSelectionWidget||(typeof HLTabSelectionWidget=="undefined"?nil:HLTabSelectionWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
activeTab=self._selectedTab();
$ctx1.sendIdx["selectedTab"]=1;
$2=_st($HLTabSelectionWidget())._new();
_st($2)._tabs_(self._tabs());
_st($2)._selectedTab_(self._selectedTab());
_st($2)._selectCallback_((function(tab){
return smalltalk.withContext(function($ctx2) {
return _st(tab)._activate();
$ctx2.sendIdx["activate"]=1;
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,1)})}));
_st($2)._confirmCallback_((function(tab){
return smalltalk.withContext(function($ctx2) {
return _st(tab)._focus();
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,2)})}));
_st($2)._cancelCallback_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(activeTab)._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$3=_st($2)._show();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{activeTab:activeTab},globals.HLSwitchTabCommand)})},
args: [],
source: "execute\x0a\x09| activeTab |\x0a\x09\x0a\x09activeTab := self selectedTab.\x0a\x09\x0a\x09^ HLTabSelectionWidget new\x0a\x09\x09tabs: self tabs;\x0a\x09\x09selectedTab: self selectedTab;\x0a\x09\x09selectCallback: [ :tab | tab activate ];\x0a\x09\x09confirmCallback: [ :tab | tab focus ];\x0a\x09\x09cancelCallback: [ activeTab activate ];\x0a\x09\x09show",
messageSends: ["selectedTab", "tabs:", "new", "tabs", "selectedTab:", "selectCallback:", "activate", "confirmCallback:", "focus", "cancelCallback:", "show"],
referencedClasses: ["HLTabSelectionWidget"]
}),
globals.HLSwitchTabCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedTab",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HLManager())._current())._activeTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedTab",{},globals.HLSwitchTabCommand)})},
args: [],
source: "selectedTab\x0a\x09^ HLManager current activeTab",
messageSends: ["activeTab", "current"],
referencedClasses: ["HLManager"]
}),
globals.HLSwitchTabCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HLManager())._current())._tabs();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},globals.HLSwitchTabCommand)})},
args: [],
source: "tabs\x0a\x09^ HLManager current tabs",
messageSends: ["tabs", "current"],
referencedClasses: ["HLManager"]
}),
globals.HLSwitchTabCommand);


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
globals.HLSwitchTabCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Switch tab";
},
args: [],
source: "label\x0a\x09^ 'Switch tab'",
messageSends: [],
referencedClasses: []
}),
globals.HLSwitchTabCommand.klass);


smalltalk.addClass('HLViewCommand', globals.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "View";
},
args: [],
source: "label\x0a\x09^ 'View'",
messageSends: [],
referencedClasses: []
}),
globals.HLViewCommand.klass);

});
