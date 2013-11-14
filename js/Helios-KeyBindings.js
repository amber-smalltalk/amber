define("amber_core/Helios-KeyBindings", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Helios-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-KeyBindings');
smalltalk.packages["Helios-KeyBindings"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.HLBinding.comment="I am the abstract representation of a keybinding in Helios. My instances hold a key (integer value) and a label. \x0a\x0aBindings are built into a tree of keys, so pressing a key may result in more key choices (for example, to open a workspace, 'o' is pressed first then 'w' is pressed).\x0a\x0aBinding action handling and selection is handled by the `current` instance of `HLKeyBinder`.\x0a\x0aSubclasses implement specific behavior like evaluating actions or (sub-)grouping other bindings.";
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.HLBinding)})},
args: [],
source: "apply",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{aKey:aKey},smalltalk.HLBinding)})},
args: ["aKey"],
source: "atKey: aKey\x0a\x09\x22Answer the sub-binding at key aKey.\x0a\x09Always answer nil here. See HLBindingGroup for more.\x22\x0a\x09\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLBinding)})},
args: [],
source: "displayLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBinding)})},
args: [],
source: "isActive\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLBinding)})},
args: [],
source: "key\x0a\x09^ key",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{anInteger:anInteger},smalltalk.HLBinding)})},
args: ["anInteger"],
source: "key: anInteger\x0a\x09key := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLBinding)})},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLBinding)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBinding)})},
args: [],
source: "release",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
category: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},smalltalk.HLBinding)})},
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "shortcut",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._fromCharCode_(self._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shortcut",{},smalltalk.HLBinding)})},
args: [],
source: "shortcut\x0a\x09^ String fromCharCode: self key",
messageSends: ["fromCharCode:", "key"],
referencedClasses: ["String"]
}),
smalltalk.HLBinding);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
category: 'instance creation',
fn: function (anInteger,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._key_(anInteger);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{anInteger:anInteger,aString:aString},smalltalk.HLBinding.klass)})},
args: ["anInteger", "aString"],
source: "on: anInteger labelled: aString\x0a\x09^ self new\x0a    \x09key: anInteger;\x0a        label: aString;\x0a        yourself",
messageSends: ["key:", "new", "label:", "yourself"],
referencedClasses: []
}),
smalltalk.HLBinding.klass);


smalltalk.addClass('HLBindingAction', smalltalk.HLBinding, ['command'], 'Helios-KeyBindings');
smalltalk.HLBindingAction.comment="My instances are the leafs of the binding tree. They evaluate actions through commands, instances of concrete subclasses of `HLCommand`.\x0a\x0aThe `#apply` methods is used to evaluate the `command`. If the command requires user input, an `inputWidget` will be displayed to the user.";
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
category: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return smalltalk.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isInputRequired();
if(smalltalk.assert($1)){
_st(_st(_st($HLKeyBinder())._current())._helper())._showWidget_(self._inputWidget());
} else {
self._executeCommand();
};
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.HLBindingAction)})},
args: [],
source: "apply\x0a\x09self command isInputRequired\x0a\x09\x09ifTrue: [ HLKeyBinder current helper showWidget: self inputWidget ]\x0a\x09\x09ifFalse: [ self executeCommand ]",
messageSends: ["ifTrue:ifFalse:", "isInputRequired", "command", "showWidget:", "helper", "current", "inputWidget", "executeCommand"],
referencedClasses: ["HLKeyBinder"]
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@command"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.HLBindingAction)})},
args: [],
source: "command\x0a\x09^ command",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
category: 'accessing',
fn: function (aCommand){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]=aCommand;
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aCommand:aCommand},smalltalk.HLBindingAction)})},
args: ["aCommand"],
source: "command: aCommand\x0a\x09command := aCommand",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "executeCommand",
category: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return smalltalk.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._execute();
_st(_st($HLKeyBinder())._current())._deactivate();
return self}, function($ctx1) {$ctx1.fill(self,"executeCommand",{},smalltalk.HLBindingAction)})},
args: [],
source: "executeCommand\x0a\x09self command execute.\x0a\x09HLKeyBinder current deactivate",
messageSends: ["execute", "command", "deactivate", "current"],
referencedClasses: ["HLKeyBinder"]
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._input_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},smalltalk.HLBindingAction)})},
args: ["aString"],
source: "input: aString\x0a\x09self command input: aString",
messageSends: ["input:", "command"],
referencedClasses: []
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputBinding",
category: 'accessing',
fn: function (){
var self=this;
function $HLBindingInput(){return smalltalk.HLBindingInput||(typeof HLBindingInput=="undefined"?nil:HLBindingInput)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$8,$7,$9,$11,$10,$12,$14,$13,$15,$16,$17,$1;
$2=_st($HLBindingInput())._new();
$3=$2;
$5=self._command();
$ctx1.sendIdx["command"]=1;
$4=_st($5)._inputLabel();
_st($3)._label_($4);
$6=$2;
$8=self._command();
$ctx1.sendIdx["command"]=2;
$7=_st($8)._displayLabel();
_st($6)._ghostText_($7);
$9=$2;
$11=self._command();
$ctx1.sendIdx["command"]=3;
$10=_st($11)._defaultInput();
_st($9)._defaultValue_($10);
$12=$2;
$14=self._command();
$ctx1.sendIdx["command"]=4;
$13=_st($14)._inputCompletion();
_st($12)._inputCompletion_($13);
_st($2)._callback_((function(val){
return smalltalk.withContext(function($ctx2) {
$15=self._command();
_st($15)._input_(val);
$16=_st($15)._execute();
return $16;
}, function($ctx2) {$ctx2.fillBlock({val:val},$ctx1,1)})}));
$17=_st($2)._yourself();
$1=$17;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputBinding",{},smalltalk.HLBindingAction)})},
args: [],
source: "inputBinding\x0a\x09^ HLBindingInput new\x0a\x09\x09label: self command inputLabel;\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :val | \x0a\x09\x09\x09self command \x0a\x09\x09\x09\x09input: val;\x0a\x09\x09\x09\x09execute ];\x0a\x09\x09yourself",
messageSends: ["label:", "new", "inputLabel", "command", "ghostText:", "displayLabel", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "execute", "yourself"],
referencedClasses: ["HLBindingInput"]
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLBindingActionInputWidget(){return smalltalk.HLBindingActionInputWidget||(typeof HLBindingActionInputWidget=="undefined"?nil:HLBindingActionInputWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$8,$7,$9,$10,$1;
$2=_st($HLBindingActionInputWidget())._new();
$3=$2;
$5=self._command();
$ctx1.sendIdx["command"]=1;
$4=_st($5)._displayLabel();
_st($3)._ghostText_($4);
$6=$2;
$8=self._command();
$ctx1.sendIdx["command"]=2;
$7=_st($8)._defaultInput();
_st($6)._defaultValue_($7);
_st($2)._inputCompletion_(_st(self._command())._inputCompletion());
_st($2)._callback_((function(value){
return smalltalk.withContext(function($ctx2) {
self._input_(value);
$9=self._executeCommand();
return $9;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,1)})}));
$10=_st($2)._yourself();
$1=$10;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputWidget",{},smalltalk.HLBindingAction)})},
args: [],
source: "inputWidget\x0a\x09^ HLBindingActionInputWidget new\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :value | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09input: value;\x0a\x09\x09\x09\x09executeCommand ];\x0a\x09\x09yourself",
messageSends: ["ghostText:", "new", "displayLabel", "command", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "executeCommand", "yourself"],
referencedClasses: ["HLBindingActionInputWidget"]
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isActive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingAction)})},
args: [],
source: "isActive\x0a\x09^ self command isActive",
messageSends: ["isActive", "command"],
referencedClasses: []
}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
smalltalk.HLBindingGroup.comment="My instances hold other bindings, either actions or groups, and do not have actions by themselves.\x0a\x0aChildren are accessed with `atKey:` and added with the `add*` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "activeBindings",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isActive();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBindings",{},smalltalk.HLBindingGroup)})},
args: [],
source: "activeBindings\x0a\x09^ self bindings select: [ :each | each isActive ]",
messageSends: ["select:", "bindings", "isActive"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._add_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{aBinding:aBinding},smalltalk.HLBindingGroup)})},
args: ["aBinding"],
source: "add: aBinding\x0a\x09^ self bindings add: aBinding",
messageSends: ["add:", "bindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addActionKey:labelled:callback:",
category: 'adding',
fn: function (anInteger,aString,aBlock){
var self=this;
function $HLBindingAction(){return smalltalk.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLBindingAction())._on_labelled_(anInteger,aString);
_st($1)._callback_(aBlock);
$2=_st($1)._yourself();
self._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addActionKey:labelled:callback:",{anInteger:anInteger,aString:aString,aBlock:aBlock},smalltalk.HLBindingGroup)})},
args: ["anInteger", "aString", "aBlock"],
source: "addActionKey: anInteger labelled: aString callback: aBlock\x0a\x09self add: ((HLBindingAction on: anInteger labelled: aString)\x0a    \x09callback: aBlock;\x0a        yourself)",
messageSends: ["add:", "callback:", "on:labelled:", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addGroupKey:labelled:",
category: 'add',
fn: function (anInteger,aString){
var self=this;
function $HLBindingGroup(){return smalltalk.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
return smalltalk.withContext(function($ctx1) { 
self._add_(_st($HLBindingGroup())._on_labelled_(anInteger,aString));
return self}, function($ctx1) {$ctx1.fill(self,"addGroupKey:labelled:",{anInteger:anInteger,aString:aString},smalltalk.HLBindingGroup)})},
args: ["anInteger", "aString"],
source: "addGroupKey: anInteger labelled: aString\x0a\x09self add: (HLBindingGroup on: anInteger labelled: aString)",
messageSends: ["add:", "on:labelled:"],
referencedClasses: ["HLBindingGroup"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._label()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.HLBindingGroup)})},
args: ["aString"],
source: "at: aString\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each label = aString ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "bindings", "=", "label"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:add:",
category: 'accessing',
fn: function (aString,aBinding){
var self=this;
var binding;
return smalltalk.withContext(function($ctx1) { 
var $1;
binding=self._at_(aString);
$1=binding;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
_st(binding)._add_(aBinding);
return self}, function($ctx1) {$ctx1.fill(self,"at:add:",{aString:aString,aBinding:aBinding,binding:binding},smalltalk.HLBindingGroup)})},
args: ["aString", "aBinding"],
source: "at: aString add: aBinding\x0a\x09| binding |\x0a\x09\x0a\x09binding := self at: aString.\x0a\x09binding ifNil: [ ^ self ].\x0a\x09\x09\x0a\x09binding add: aBinding",
messageSends: ["at:", "ifNil:", "add:"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._key()).__eq(anInteger);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anInteger:anInteger},smalltalk.HLBindingGroup)})},
args: ["anInteger"],
source: "atKey: anInteger\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each key = anInteger ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "bindings", "=", "key"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@bindings"];
if(($receiver = $2) == nil || $receiver == null){
self["@bindings"]=_st($OrderedCollection())._new();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{},smalltalk.HLBindingGroup)})},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLBindingGroup.superclass.fn.prototype._displayLabel.apply(_st(self), [])).__comma("...");
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLBindingGroup)})},
args: [],
source: "displayLabel\x0a\x09^ super displayLabel, '...'",
messageSends: [",", "displayLabel"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._activeBindings())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingGroup)})},
args: [],
source: "isActive\x0a\x09^ self activeBindings notEmpty",
messageSends: ["notEmpty", "activeBindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bindings())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._release();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBindingGroup)})},
args: [],
source: "release\x0a\x09self bindings do: [ :each | each release ]",
messageSends: ["do:", "bindings", "release"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
category: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isActive();
if(smalltalk.assert($1)){
_st(aBindingHelper)._renderBindingGroup_on_(self,html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},smalltalk.HLBindingGroup)})},
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html\x0a\x09self isActive ifTrue: [\x0a\x09\x09aBindingHelper renderBindingGroup: self on: html ]",
messageSends: ["ifTrue:", "isActive", "renderBindingGroup:on:"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLBindingActionInputWidget', smalltalk.HLWidget, ['input', 'callback', 'status', 'wrapper', 'ghostText', 'message', 'inputCompletion', 'defaultValue', 'messageTag'], 'Helios-KeyBindings');
smalltalk.HLBindingActionInputWidget.comment="My instances are built when a `HLBindingAction` that requires user input is applied.";
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@callback"];
if(($receiver = $2) == nil || $receiver == null){
self["@callback"]=(function(value){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,2)})});
$1=self["@callback"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "callback\x0a\x09^ callback ifNil: [ callback := [ :value | ] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.HLBindingActionInputWidget)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearStatus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("info");
self._message_("");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "clearStatus\x0a\x09self status: 'info'.\x0a\x09self message: ''.\x0a\x09self refresh",
messageSends: ["status:", "message:", "refresh"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultValue"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "defaultValue\x0a\x09^ defaultValue ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultValue"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultValue:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
args: ["aString"],
source: "defaultValue: aString\x0a\x09defaultValue := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "errorStatus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("error");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "errorStatus\x0a\x09self status: 'error'.\x0a\x09self refresh",
messageSends: ["status:", "refresh"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
category: 'actions',
fn: function (aString){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._callback())._value_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
_st(_st(self._input())._asJQuery())._one_do_("keydown",(function(){
return smalltalk.withContext(function($ctx3) {
return self._clearStatus();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
self._message_(_st(ex)._messageText());
return self._errorStatus();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
args: ["aString"],
source: "evaluate: aString\x09\x0a\x09[ self callback value: aString ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex |\x0a\x09\x09\x09self input asJQuery \x0a\x09\x09\x09\x09one: 'keydown' \x0a\x09\x09\x09\x09do: [ self clearStatus ].\x0a\x09\x09\x09self message: ex messageText.\x0a\x09\x09\x09self errorStatus ]",
messageSends: ["on:do:", "value:", "callback", "one:do:", "asJQuery", "input", "clearStatus", "message:", "messageText", "errorStatus"],
referencedClasses: ["Error"]
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ghostText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ghostText",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "ghostText\x0a\x09^ ghostText",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText:",
category: 'accessing',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ghostText"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"ghostText:",{aText:aText},smalltalk.HLBindingActionInputWidget)})},
args: ["aText"],
source: "ghostText: aText\x0a\x09ghostText := aText",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "input\x0a\x09^ input",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inputCompletion"];
if(($receiver = $2) == nil || $receiver == null){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "inputCompletion\x0a\x09^ inputCompletion ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inputCompletion"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"inputCompletion:",{aCollection:aCollection},smalltalk.HLBindingActionInputWidget)})},
args: ["aCollection"],
source: "inputCompletion: aCollection\x0a\x09inputCompletion := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@message"];
if(($receiver = $2) == nil || $receiver == null){
self["@message"]="";
$1=self["@message"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "message\x0a\x09^ message ifNil: [ message := '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
_st(self["@wrapper"])._class_(self._status());
_st(self["@messageTag"])._contents_(self._message());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "refresh\x0a\x09wrapper ifNil: [ ^ self ].\x0a    \x0a\x09wrapper class: self status.\x0a\x09messageTag contents: self message",
messageSends: ["ifNil:", "class:", "status", "contents:", "message"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$6,$8,$10,$9,$7,$5,$11,$12,$13,$3;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == null){
self["@wrapper"]=_st(html)._span();
$ctx1.sendIdx["span"]=1;
self["@wrapper"];
} else {
$1;
};
$2=self["@wrapper"];
_st($2)._class_(self._status());
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._input();
_st($4)._placeholder_(self._ghostText());
_st($4)._value_(self._defaultValue());
$6=$4;
$7=_st((function(event){
return smalltalk.withContext(function($ctx3) {
$8=_st(_st(event)._which()).__eq((13));
if(smalltalk.assert($8)){
$10=_st(self["@input"])._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
$9=_st($10)._val();
return self._evaluate_($9);
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,3)})}))._yourself();
$ctx2.sendIdx["yourself"]=1;
$5=_st($6)._onKeyDown_($7);
self["@input"]=$5;
self["@input"];
$11=_st(self["@input"])._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
_st($11)._typeahead_(smalltalk.HashedCollection._from_(["source".__minus_gt(self._inputCompletion())]));
$12=_st(html)._span();
_st($12)._class_("help-inline");
_st($12)._with_(self._message());
$13=_st($12)._yourself();
self["@messageTag"]=$13;
return self["@messageTag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@input"])._asJQuery())._focus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLBindingActionInputWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper ifNil: [ wrapper := html span ].\x0a\x0a\x09wrapper \x0a\x09\x09class: self status;\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09placeholder: self ghostText;\x0a\x09\x09\x09\x09value: self defaultValue;\x0a\x09\x09\x09\x09onKeyDown: [ :event | \x0a\x09\x09\x09\x09\x09event which = 13 ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self evaluate: input asJQuery val ] ]\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input asJQuery \x0a\x09\x09\x09\x09typeahead: #{ 'source' -> self inputCompletion }.\x0a\x09\x09\x09messageTag := (html span\x0a\x09\x09\x09\x09class: 'help-inline';\x0a\x09\x09\x09\x09with: self message;\x0a\x09\x09\x09\x09yourself) ].\x0a\x09\x0a\x09\x22Evaluate with a timeout to ensure focus.\x0a\x09Commands can be executed from a menu, clicking on the menu to\x0a\x09evaluate the command would give it the focus otherwise\x22\x0a\x09\x0a\x09[ input asJQuery focus ] valueWithTimeout: 10",
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "input", "ghostText", "value:", "defaultValue", "onKeyDown:", "yourself", "ifTrue:", "=", "which", "evaluate:", "val", "asJQuery", "typeahead:", "->", "inputCompletion", "message", "valueWithTimeout:", "focus"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@status"];
if(($receiver = $2) == nil || $receiver == null){
self["@status"]="info";
$1=self["@status"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.HLBindingActionInputWidget)})},
args: [],
source: "status\x0a\x09^ status ifNil: [ status := 'info' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
category: 'accessing',
fn: function (aStatus){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=aStatus;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{aStatus:aStatus},smalltalk.HLBindingActionInputWidget)})},
args: ["aStatus"],
source: "status: aStatus\x0a\x09status := aStatus",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingActionInputWidget);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
smalltalk.HLKeyBinder.comment="My `current` instance holds keybindings for Helios actions and evaluate them.\x0a\x0aBindings can be nested by groups. The `bindings` instance variable holds the root of the key bindings tree.\x0a\x0aBindings are instances of a concrete subclass of `HLBinding`.\x0a\x0aI am always either in 'active' or 'inactive' state. In active state I capture key down events and my `helper` widget is displayed at the bottom of the window. My `selectedBinding`, if any, is displayed by the helper.\x0a\x0aBindings are evaluated through `applyBinding:`. If a binding is final (not a group of other bindings), evaluating it will result in deactivating the binder, and hiding the `helper` widget.";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._helper())._show();
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLKeyBinder)})},
args: [],
source: "activate\x0a\x09self helper show",
messageSends: ["show", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKey",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (32);
}, function($ctx1) {$ctx1.fill(self,"activationKey",{},smalltalk.HLKeyBinder)})},
args: [],
source: "activationKey\x0a\x09\x22SPACE\x22\x0a\x09^ 32",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKeyLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ctrl + space";
}, function($ctx1) {$ctx1.fill(self,"activationKeyLabel",{},smalltalk.HLKeyBinder)})},
args: [],
source: "activationKeyLabel\x0a\x09^ 'ctrl + space'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "applyBinding:",
category: 'actions',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBinding)._isActive();
if(! smalltalk.assert($1)){
return self;
};
self._selectBinding_(aBinding);
_st(aBinding)._apply();
return self}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding},smalltalk.HLKeyBinder)})},
args: ["aBinding"],
source: "applyBinding: aBinding\x0a\x09aBinding isActive ifFalse: [ ^ self ].\x0a\x09\x0a\x09self selectBinding: aBinding.\x0a    aBinding apply",
messageSends: ["ifFalse:", "isActive", "selectBinding:", "apply"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@bindings"];
if(($receiver = $2) == nil || $receiver == null){
self["@bindings"]=self._defaultBindings();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{},smalltalk.HLKeyBinder)})},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := self defaultBindings ]",
messageSends: ["ifNil:", "defaultBindings"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "deactivate",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedBinding"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@selectedBinding"])._release();
};
self["@selectedBinding"]=nil;
_st(self._helper())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"deactivate",{},smalltalk.HLKeyBinder)})},
args: [],
source: "deactivate\x0a\x09selectedBinding ifNotNil: [ selectedBinding release ].\x0a    selectedBinding := nil.\x0a\x09self helper hide",
messageSends: ["ifNotNil:", "release", "hide", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBindings",
category: 'defaults',
fn: function (){
var self=this;
var group;
function $HLBindingGroup(){return smalltalk.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
function $HLCloseTabCommand(){return smalltalk.HLCloseTabCommand||(typeof HLCloseTabCommand=="undefined"?nil:HLCloseTabCommand)}
function $HLSwitchTabCommand(){return smalltalk.HLSwitchTabCommand||(typeof HLSwitchTabCommand=="undefined"?nil:HLSwitchTabCommand)}
function $HLOpenCommand(){return smalltalk.HLOpenCommand||(typeof HLOpenCommand=="undefined"?nil:HLOpenCommand)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6;
$1=_st($HLBindingGroup())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$4=_st($HLCloseTabCommand())._new();
$ctx1.sendIdx["new"]=2;
$3=_st($4)._asBinding();
$ctx1.sendIdx["asBinding"]=1;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
_st($1)._add_(_st(_st($HLSwitchTabCommand())._new())._asBinding());
$5=_st($1)._yourself();
group=$5;
_st($HLOpenCommand())._registerConcreteClassesOn_(group);
$6=group;
return $6;
}, function($ctx1) {$ctx1.fill(self,"defaultBindings",{group:group},smalltalk.HLKeyBinder)})},
args: [],
source: "defaultBindings\x0a\x09| group |\x0a\x09\x0a\x09group := HLBindingGroup new\x0a\x09\x09add: HLCloseTabCommand new asBinding;\x0a\x09\x09add: HLSwitchTabCommand new asBinding;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09HLOpenCommand registerConcreteClassesOn: group.\x0a\x09\x09\x09\x09\x0a\x09^ group",
messageSends: ["add:", "new", "asBinding", "yourself", "registerConcreteClassesOn:"],
referencedClasses: ["HLBindingGroup", "HLCloseTabCommand", "HLSwitchTabCommand", "HLOpenCommand"]
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "escapeKey",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (27);
}, function($ctx1) {$ctx1.fill(self,"escapeKey",{},smalltalk.HLKeyBinder)})},
args: [],
source: "escapeKey\x0a\x09\x22ESC\x22\x0a\x09^ 27",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "flushBindings",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bindings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushBindings",{},smalltalk.HLKeyBinder)})},
args: [],
source: "flushBindings\x0a\x09bindings := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleActiveKeyDown:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=_st(event)._which();
$ctx1.sendIdx["which"]=1;
$2=_st($3).__eq(self._escapeKey());
$ctx1.sendIdx["="]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(event)._which()).__eq((71)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(event)._ctrlKey();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
self._deactivate();
_st(event)._preventDefault();
return false;
};
$4=self._handleBindingFor_(event);
return $4;
}, function($ctx1) {$ctx1.fill(self,"handleActiveKeyDown:",{event:event},smalltalk.HLKeyBinder)})},
args: ["event"],
source: "handleActiveKeyDown: event\x0a\x0a\x09\x22ESC or ctrl+g deactivate the keyBinder\x22\x0a\x09(event which = self escapeKey or: [\x0a\x09\x09event which = 71 and: [ event ctrlKey ] ])\x0a        \x09ifTrue: [ \x0a            \x09self deactivate.\x0a\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09^ false ].\x0a            \x0a    \x22Handle the keybinding\x22\x0a    ^ self handleBindingFor: event",
messageSends: ["ifTrue:", "or:", "=", "which", "escapeKey", "and:", "ctrlKey", "deactivate", "preventDefault", "handleBindingFor:"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleBindingFor:",
category: 'events',
fn: function (anEvent){
var self=this;
var binding;
return smalltalk.withContext(function($ctx1) { 
var $1;
binding=_st(self._selectedBinding())._atKey_(_st(anEvent)._which());
$1=binding;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self._applyBinding_(binding);
_st(anEvent)._preventDefault();
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"handleBindingFor:",{anEvent:anEvent,binding:binding},smalltalk.HLKeyBinder)})},
args: ["anEvent"],
source: "handleBindingFor: anEvent\x0a\x09| binding |\x0a    binding := self selectedBinding atKey: anEvent which.\x0a    \x0a    binding ifNotNil: [ \x0a    \x09self applyBinding: binding.\x0a\x09\x09anEvent preventDefault.\x0a\x09\x09^ false ]",
messageSends: ["atKey:", "selectedBinding", "which", "ifNotNil:", "applyBinding:", "preventDefault"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInactiveKeyDown:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(event)._which()).__eq(self._activationKey());
if(smalltalk.assert($1)){
$2=_st(event)._ctrlKey();
if(smalltalk.assert($2)){
self._activate();
_st(event)._preventDefault();
return false;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleInactiveKeyDown:",{event:event},smalltalk.HLKeyBinder)})},
args: ["event"],
source: "handleInactiveKeyDown: event\x0a\x09event which = self activationKey ifTrue: [\x0a    \x09event ctrlKey ifTrue: [\x0a\x09\x09\x09self activate. \x0a            event preventDefault. \x0a            ^ false ] ]",
messageSends: ["ifTrue:", "=", "which", "activationKey", "ctrlKey", "activate", "preventDefault"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isActive();
if(smalltalk.assert($2)){
$1=self._handleActiveKeyDown_(event);
} else {
$1=self._handleInactiveKeyDown_(event);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{event:event},smalltalk.HLKeyBinder)})},
args: ["event"],
source: "handleKeyDown: event\x0a\x09^ self isActive\x0a    \x09ifTrue: [ self handleActiveKeyDown: event ]\x0a      \x09ifFalse: [ self handleInactiveKeyDown: event ]",
messageSends: ["ifTrue:ifFalse:", "isActive", "handleActiveKeyDown:", "handleInactiveKeyDown:"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "helper",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@helper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"helper",{},smalltalk.HLKeyBinder)})},
args: [],
source: "helper\x0a\x09^ helper",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $HLKeyBinderHelperWidget(){return smalltalk.HLKeyBinderHelperWidget||(typeof HLKeyBinderHelperWidget=="undefined"?nil:HLKeyBinderHelperWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLKeyBinder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@helper"]=_st($HLKeyBinderHelperWidget())._on_(self);
$1=self["@helper"];
_st($1)._renderStart();
$2=_st($1)._renderCog();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLKeyBinder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09helper := HLKeyBinderHelperWidget on: self.\x0a\x09helper \x09\x0a\x09\x09renderStart;\x0a\x09\x09renderCog",
messageSends: ["initialize", "on:", "renderStart", "renderCog"],
referencedClasses: ["HLKeyBinderHelperWidget"]
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(".".__comma(_st(self._helper())._cssClass()))._asJQuery())._is_(":visible");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLKeyBinder)})},
args: [],
source: "isActive\x0a\x09^ ('.', self helper cssClass) asJQuery is: ':visible'",
messageSends: ["is:", "asJQuery", ",", "cssClass", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectBinding:",
category: 'actions',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBinding).__eq(self["@selectedBinding"]);
if(smalltalk.assert($1)){
return self;
};
self["@selectedBinding"]=aBinding;
_st(self._helper())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"selectBinding:",{aBinding:aBinding},smalltalk.HLKeyBinder)})},
args: ["aBinding"],
source: "selectBinding: aBinding\x0a\x09aBinding = selectedBinding ifTrue: [ ^ self ].\x0a\x09\x0a\x09selectedBinding := aBinding.\x0a\x09self helper refresh",
messageSends: ["ifTrue:", "=", "refresh", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedBinding"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._bindings();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},smalltalk.HLKeyBinder)})},
args: [],
source: "selectedBinding\x0a\x09^ selectedBinding ifNil: [ self bindings ]",
messageSends: ["ifNil:", "bindings"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEvents",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("body"._asJQuery())._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},smalltalk.HLKeyBinder)})},
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event | self handleKeyDown: event ]",
messageSends: ["keydown:", "asJQuery", "handleKeyDown:"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "systemIsMac",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(navigator)._platform())._match_("Mac");
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemIsMac",{},smalltalk.HLKeyBinder)})},
args: [],
source: "systemIsMac\x0a\x09^ navigator platform match: 'Mac'",
messageSends: ["match:", "platform"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);


smalltalk.HLKeyBinder.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=smalltalk.HLKeyBinder.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLKeyBinder.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLKeyBinder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLKeyBinder.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLKeyBinder.klass);


smalltalk.addClass('HLKeyBinderHelperWidget', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.HLKeyBinderHelperWidget.comment="I am the widget responsible for displaying active keybindings in a bar at the bottom of the window. Each keybinding is an instance of `HLBinding`. \x0a\x0aRendering is done through a double dispatch, see `#renderSelectedBindingOn:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "key_helper";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "cssClass\x0a\x09^ 'key_helper'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(".".__comma(self._cssClass()))._asJQuery())._remove();
self._showCog();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "hide\x0a\x09('.', self cssClass) asJQuery remove.\x0a\x09self showCog",
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hideCog",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideCog",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "hideCog\x0a\x09'#cog-helper' asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keyBinder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "keyBinder\x0a\x09^ keyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder:",
category: 'accessing',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyBinder"]=aKeyBinder;
return self}, function($ctx1) {$ctx1.fill(self,"keyBinder:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelperWidget)})},
args: ["aKeyBinder"],
source: "keyBinder: aKeyBinder\x0a\x09keyBinder := aKeyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "mainId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "binding-helper-main";
}, function($ctx1) {$ctx1.fill(self,"mainId",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "mainId\x0a\x09^ 'binding-helper-main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingActionFor:on:",
category: 'rendering',
fn: function (aBinding,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._class_("command");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("label");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_(_st(_st(aBinding)._shortcut())._asLowercase());
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._a();
_st($5)._class_("action");
_st($5)._with_(_st(aBinding)._displayLabel());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._keyBinder())._applyBinding_(aBinding);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingActionFor:on:",{aBinding:aBinding,html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["aBinding", "html"],
source: "renderBindingActionFor: aBinding on: html\x0a\x09html span class: 'command'; with: [\x0a\x09\x09html span \x0a\x09\x09\x09class: 'label'; \x0a\x09\x09\x09with: aBinding shortcut asLowercase.\x0a  \x09\x09html a \x0a        \x09class: 'action'; \x0a            with: aBinding displayLabel;\x0a  \x09\x09\x09onClick: [ self keyBinder applyBinding: aBinding ] ]",
messageSends: ["class:", "span", "with:", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingGroup:on:",
category: 'rendering',
fn: function (aBindingGroup,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(_st(aBindingGroup)._activeBindings())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$1=_st(a)._key();
$ctx2.sendIdx["key"]=1;
return _st($1).__lt(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderBindingActionFor_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["aBindingGroup", "html"],
source: "renderBindingGroup: aBindingGroup on: html\x0a\x09(aBindingGroup activeBindings \x0a    \x09sorted: [ :a :b | a key < b key ])\x0a        do: [ :each | self renderBindingActionFor: each on: html ]",
messageSends: ["do:", "sorted:", "activeBindings", "<", "key", "renderBindingActionFor:on:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCloseOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._class_("close");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tag_("i"))._class_("icon-remove");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._keyBinder())._deactivate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderCloseOn: html\x0a\x09html a\x0a\x09\x09class: 'close';\x0a\x09\x09with: [ (html tag: 'i') class: 'icon-remove' ];\x0a\x09\x09onClick: [ self keyBinder deactivate ]",
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCog",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._id_("cog-helper");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._tag_("i"))._class_("icon-cog");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self._keyBinder())._activate();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}))._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderCog",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "renderCog\x0a\x09[ :html |\x0a\x09\x09html \x0a\x09\x09\x09div id: 'cog-helper'; \x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09with: [ (html tag: 'i') class: 'icon-cog' ];\x0a\x09\x09\x09\x09\x09onClick: [ self keyBinder activate ] ] ]\x0a\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "id:", "div", "with:", "a", "class:", "tag:", "onClick:", "activate", "keyBinder", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_(self._cssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLabelOn_(html);
$3=_st(html)._div();
_st($3)._id_(self._mainId());
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderSelectedBindingOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$4;
return self._renderCloseOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: self cssClass; with: [\x0a      \x09self renderLabelOn:html.\x0a\x09\x09html div\x0a\x09\x09\x09id: self mainId;\x0a\x09\x09\x09with: [ self renderSelectedBindingOn: html ].\x0a\x09\x09self renderCloseOn: html ]",
messageSends: ["class:", "div", "cssClass", "with:", "renderLabelOn:", "id:", "mainId", "renderSelectedBindingOn:", "renderCloseOn:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLabelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
$1=_st(html)._span();
_st($1)._class_("selected");
$3=$1;
$5=_st(self._selectedBinding())._label();
if(($receiver = $5) == nil || $receiver == null){
$4="Action";
} else {
$4=$5;
};
$2=_st($3)._with_($4);
return self}, function($ctx1) {$ctx1.fill(self,"renderLabelOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderLabelOn: html\x0a\x09\x09html span \x0a        \x09class: 'selected'; \x0a            with: (self selectedBinding label ifNil: [ 'Action' ])",
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectedBindingOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectedBindingOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderSelectedBindingOn: html\x0a\x09self selectedBinding renderOn: self html: html",
messageSends: ["renderOn:html:", "selectedBinding"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStart",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$4,$2,$7;
$1="#helper"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
$2=(function(html){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._id_("helper");
$5=$3;
$6=_st("Press ".__comma(_st(self._keyBinder())._activationKeyLabel())).__comma(" to start");
$ctx2.sendIdx[","]=1;
$4=_st($5)._with_($6);
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})});
$7="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._appendToJQuery_($7);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st("#helper"._asJQuery())._fadeOut_((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"renderStart",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "renderStart\x0a\x09'#helper' asJQuery remove.\x0a\x0a\x09[ :html |\x0a\x09\x09html div \x0a\x09\x09\x09id: 'helper';\x0a\x09\x09\x09with: 'Press ', self keyBinder activationKeyLabel, ' to start' ] appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09[ '#helper' asJQuery fadeOut: 1000 ] \x0a\x09\x09valueWithTimeout: 2000",
messageSends: ["remove", "asJQuery", "appendToJQuery:", "id:", "div", "with:", ",", "activationKeyLabel", "keyBinder", "valueWithTimeout:", "fadeOut:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keyBinder())._selectedBinding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "selectedBinding\x0a\x09^ self keyBinder selectedBinding",
messageSends: ["selectedBinding", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "show\x0a\x09self hideCog.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showCog",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCog",{},smalltalk.HLKeyBinderHelperWidget)})},
args: [],
source: "showCog\x0a\x09'#cog-helper' asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showWidget:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._mainId();
$ctx1.sendIdx["mainId"]=1;
$2="#".__comma($3);
$ctx1.sendIdx[","]=1;
$1=_st($2)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st(aWidget)._appendToJQuery_(_st("#".__comma(self._mainId()))._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"showWidget:",{aWidget:aWidget},smalltalk.HLKeyBinderHelperWidget)})},
args: ["aWidget"],
source: "showWidget: aWidget\x0a\x09\x22Some actions need to display more info to the user or request input.\x0a\x09This method is the right place for that\x22\x0a\x09\x0a\x09('#', self mainId) asJQuery empty.\x0a\x09aWidget appendToJQuery: ('#', self mainId) asJQuery",
messageSends: ["empty", "asJQuery", ",", "mainId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._keyBinder_(aKeyBinder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelperWidget.klass)})},
args: ["aKeyBinder"],
source: "on: aKeyBinder\x0a\x09^ self new\x0a    \x09keyBinder: aKeyBinder;\x0a        yourself",
messageSends: ["keyBinder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelperWidget.klass);


smalltalk.addClass('HLRepeatedKeyDownHandler', smalltalk.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'keyDown'], 'Helios-KeyBindings');
smalltalk.HLRepeatedKeyDownHandler.comment="I am responsible for handling repeated key down actions for widgets.\x0a\x0a##Usage\x0a\x0a    (self on: aWidget)\x0a        whileKeyDown: 38 do: aBlock;\x0a        whileKeyDown: 40 do: anotherBlock;\x0a        bindKeys\x0a\x0aI perform an action block on a key press, wait for 300 ms and then preform the same action block every `repeatInterval` milliseconds until the key is released.";
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeys",
category: 'binding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._bindKeyDown_keyUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}),(function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyUp();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "bindKeys\x0a\x09self widget \x0a\x09\x09bindKeyDown: [ :e | self handleKeyDown: e ] \x0a\x09\x09keyUp: [ :e | self handleKeyUp ]",
messageSends: ["bindKeyDown:keyUp:", "widget", "handleKeyDown:", "handleKeyUp"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRepeatInterval",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (70);
}, function($ctx1) {$ctx1.fill(self,"defaultRepeatInterval",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "defaultRepeatInterval\x0a\x09^ 70",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:forKey:action:",
category: 'events handling',
fn: function (anEvent,anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEvent)._which()).__eq(anInteger))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._isKeyDown())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
self._whileKeyDownDo_(aBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:forKey:action:",{anEvent:anEvent,anInteger:anInteger,aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["anEvent", "anInteger", "aBlock"],
source: "handleEvent: anEvent forKey: anInteger action: aBlock\x0a\x09(anEvent which = anInteger and: [ self isKeyDown not ])\x0a\x09\x09ifTrue: [ self whileKeyDownDo: aBlock ]",
messageSends: ["ifTrue:", "and:", "=", "which", "not", "isKeyDown", "whileKeyDownDo:"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
category: 'events handling',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._keysAndValuesDo_((function(key,action){
return smalltalk.withContext(function($ctx2) {
return self._handleEvent_forKey_action_(anEvent,key,action);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09self keyBindings keysAndValuesDo: [ :key :action | \x0a\x09\x09self handleEvent: anEvent forKey: key action: action ]",
messageSends: ["keysAndValuesDo:", "keyBindings", "handleEvent:forKey:action:"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp",
category: 'events handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isKeyDown();
if(smalltalk.assert($1)){
self["@keyDown"]=false;
self["@keyDown"];
$2=self["@interval"];
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
_st(self["@interval"])._clearInterval();
};
$3=self["@delay"];
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
_st(self["@delay"])._clearTimeout();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "handleKeyUp\x0a\x09self isKeyDown ifTrue: [\x0a\x09\x09keyDown := false.\x0a\x09\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09\x09delay ifNotNil: [ delay clearTimeout ] ]",
messageSends: ["ifTrue:", "isKeyDown", "ifNotNil:", "clearInterval", "clearTimeout"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "isKeyDown",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyDown"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKeyDown",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "isKeyDown\x0a\x09^ keyDown ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBindings",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyBindings"];
if(($receiver = $2) == nil || $receiver == null){
self["@keyBindings"]=_st($Dictionary())._new();
$1=self["@keyBindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBindings",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "keyBindings\x0a\x09^ keyBindings ifNil: [ keyBindings := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "rebindKeys",
category: 'binding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._unbindKeys();
$1=self._bindKeys();
return self}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "rebindKeys\x0a\x09self \x0a\x09\x09unbindKeys;\x0a\x09\x09bindKeys",
messageSends: ["unbindKeys", "bindKeys"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@repeatInterval"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultRepeatInterval();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "repeatInterval\x0a\x09^ repeatInterval ifNil: [ self defaultRepeatInterval ]",
messageSends: ["ifNil:", "defaultRepeatInterval"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatInterval"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"repeatInterval:",{anInteger:anInteger},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["anInteger"],
source: "repeatInterval: anInteger\x0a\x09repeatInterval := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "startRepeatingAction:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(self._widget())._hasFocus();
if(smalltalk.assert($2)){
return _st(aBlock)._value();
} else {
return self._handleKeyUp();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._valueWithInterval_(self._repeatInterval());
return $1;
}, function($ctx1) {$ctx1.fill(self,"startRepeatingAction:",{aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["aBlock"],
source: "startRepeatingAction: aBlock\x0a\x09^ [ (self widget hasFocus)\x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self handleKeyUp ] ] valueWithInterval: self repeatInterval",
messageSends: ["valueWithInterval:", "ifTrue:ifFalse:", "hasFocus", "widget", "value", "handleKeyUp", "repeatInterval"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeys",
category: 'binding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._unbindKeyDownKeyUp();
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "unbindKeys\x0a\x09self widget unbindKeyDownKeyUp",
messageSends: ["unbindKeyDownKeyUp", "widget"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDown:do:",
category: 'actions',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._at_put_(aKey,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDown:do:",{aKey:aKey,aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["aKey", "aBlock"],
source: "whileKeyDown: aKey do: aBlock\x0a\x09self keyBindings at: aKey put: aBlock",
messageSends: ["at:put:", "keyBindings"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDownDo:",
category: 'events handling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyDown"]=true;
_st(aBlock)._value();
self["@delay"]=_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@interval"]=self._startRepeatingAction_(aBlock);
return self["@interval"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDownDo:",{aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["aBlock"],
source: "whileKeyDownDo: aBlock\x0a\x09keyDown := true.\x0a\x09aBlock value.\x0a\x09delay := [ interval := self startRepeatingAction: aBlock ] \x0a\x09\x09valueWithTimeout: 300",
messageSends: ["value", "valueWithTimeout:", "startRepeatingAction:"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLRepeatedKeyDownHandler)})},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLRepeatedKeyDownHandler)})},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._widget_(aWidget);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aWidget:aWidget},smalltalk.HLRepeatedKeyDownHandler.klass)})},
args: ["aWidget"],
source: "on: aWidget\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLRepeatedKeyDownHandler.klass);

});
