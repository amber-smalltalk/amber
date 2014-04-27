define("helios/Helios-KeyBindings", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-KeyBindings');
smalltalk.packages["Helios-KeyBindings"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLBinding', globals.Object, ['key', 'label'], 'Helios-KeyBindings');
globals.HLBinding.comment="I am the abstract representation of a keybinding in Helios. My instances hold a key (integer value) and a label. \x0a\x0aBindings are built into a tree of keys, so pressing a key may result in more key choices (for example, to open a workspace, 'o' is pressed first then 'w' is pressed).\x0a\x0aBinding action handling and selection is handled by the `current` instance of `HLKeyBinder`.\x0a\x0aSubclasses implement specific behavior like evaluating actions or (sub-)grouping other bindings.";
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "apply",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
return nil;
},
args: ["aKey"],
source: "atKey: aKey\x0a\x09\x22Answer the sub-binding at key aKey.\x0a\x09Always answer nil here. See HLBindingGroup for more.\x22\x0a\x09\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},globals.HLBinding)})},
args: [],
source: "displayLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLBinding)})},
args: [],
source: "isActive\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;
},
args: [],
source: "key\x0a\x09^ key",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@key"]=anInteger;
return self},
args: ["anInteger"],
source: "key: anInteger\x0a\x09key := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "release",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
protocol: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
return self},
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html",
messageSends: [],
referencedClasses: []
}),
globals.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "shortcut",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._fromCharCode_(self._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shortcut",{},globals.HLBinding)})},
args: [],
source: "shortcut\x0a\x09^ String fromCharCode: self key",
messageSends: ["fromCharCode:", "key"],
referencedClasses: ["String"]
}),
globals.HLBinding);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{anInteger:anInteger,aString:aString},globals.HLBinding.klass)})},
args: ["anInteger", "aString"],
source: "on: anInteger labelled: aString\x0a\x09^ self new\x0a    \x09key: anInteger;\x0a        label: aString;\x0a        yourself",
messageSends: ["key:", "new", "label:", "yourself"],
referencedClasses: []
}),
globals.HLBinding.klass);


smalltalk.addClass('HLBindingAction', globals.HLBinding, ['command'], 'Helios-KeyBindings');
globals.HLBindingAction.comment="My instances are the leafs of the binding tree. They evaluate actions through commands, instances of concrete subclasses of `HLCommand`.\x0a\x0aThe `#apply` methods is used to evaluate the `command`. If the command requires user input, an `inputWidget` will be displayed to the user.";
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
protocol: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isInputRequired();
if(smalltalk.assert($1)){
_st(_st(_st($HLKeyBinder())._current())._helper())._showWidget_(self._inputWidget());
} else {
self._executeCommand();
};
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},globals.HLBindingAction)})},
args: [],
source: "apply\x0a\x09self command isInputRequired\x0a\x09\x09ifTrue: [ HLKeyBinder current helper showWidget: self inputWidget ]\x0a\x09\x09ifFalse: [ self executeCommand ]",
messageSends: ["ifTrue:ifFalse:", "isInputRequired", "command", "showWidget:", "helper", "current", "inputWidget", "executeCommand"],
referencedClasses: ["HLKeyBinder"]
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@command"];
return $1;
},
args: [],
source: "command\x0a\x09^ command",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
protocol: 'accessing',
fn: function (aCommand){
var self=this;
self["@command"]=aCommand;
return self},
args: ["aCommand"],
source: "command: aCommand\x0a\x09command := aCommand",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "executeCommand",
protocol: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._execute();
_st(_st($HLKeyBinder())._current())._deactivate();
return self}, function($ctx1) {$ctx1.fill(self,"executeCommand",{},globals.HLBindingAction)})},
args: [],
source: "executeCommand\x0a\x09self command execute.\x0a\x09HLKeyBinder current deactivate",
messageSends: ["execute", "command", "deactivate", "current"],
referencedClasses: ["HLKeyBinder"]
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._input_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},globals.HLBindingAction)})},
args: ["aString"],
source: "input: aString\x0a\x09self command input: aString",
messageSends: ["input:", "command"],
referencedClasses: []
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputBinding",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBindingInput(){return globals.HLBindingInput||(typeof HLBindingInput=="undefined"?nil:HLBindingInput)}
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
}, function($ctx1) {$ctx1.fill(self,"inputBinding",{},globals.HLBindingAction)})},
args: [],
source: "inputBinding\x0a\x09^ HLBindingInput new\x0a\x09\x09label: self command inputLabel;\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :val | \x0a\x09\x09\x09self command \x0a\x09\x09\x09\x09input: val;\x0a\x09\x09\x09\x09execute ];\x0a\x09\x09yourself",
messageSends: ["label:", "new", "inputLabel", "command", "ghostText:", "displayLabel", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "execute", "yourself"],
referencedClasses: ["HLBindingInput"]
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBindingActionInputWidget(){return globals.HLBindingActionInputWidget||(typeof HLBindingActionInputWidget=="undefined"?nil:HLBindingActionInputWidget)}
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
}, function($ctx1) {$ctx1.fill(self,"inputWidget",{},globals.HLBindingAction)})},
args: [],
source: "inputWidget\x0a\x09^ HLBindingActionInputWidget new\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :value | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09input: value;\x0a\x09\x09\x09\x09executeCommand ];\x0a\x09\x09yourself",
messageSends: ["ghostText:", "new", "displayLabel", "command", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "executeCommand", "yourself"],
referencedClasses: ["HLBindingActionInputWidget"]
}),
globals.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isActive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLBindingAction)})},
args: [],
source: "isActive\x0a\x09^ self command isActive",
messageSends: ["isActive", "command"],
referencedClasses: []
}),
globals.HLBindingAction);



smalltalk.addClass('HLBindingGroup', globals.HLBinding, ['bindings'], 'Helios-KeyBindings');
globals.HLBindingGroup.comment="My instances hold other bindings, either actions or groups, and do not have actions by themselves.\x0a\x0aChildren are accessed with `atKey:` and added with the `add*` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "activeBindings",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isActive();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBindings",{},globals.HLBindingGroup)})},
args: [],
source: "activeBindings\x0a\x09^ self bindings select: [ :each | each isActive ]",
messageSends: ["select:", "bindings", "isActive"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._add_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{aBinding:aBinding},globals.HLBindingGroup)})},
args: ["aBinding"],
source: "add: aBinding\x0a\x09^ self bindings add: aBinding",
messageSends: ["add:", "bindings"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addActionKey:labelled:callback:",
protocol: 'adding',
fn: function (anInteger,aString,aBlock){
var self=this;
function $HLBindingAction(){return globals.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLBindingAction())._on_labelled_(anInteger,aString);
_st($1)._callback_(aBlock);
$2=_st($1)._yourself();
self._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addActionKey:labelled:callback:",{anInteger:anInteger,aString:aString,aBlock:aBlock},globals.HLBindingGroup)})},
args: ["anInteger", "aString", "aBlock"],
source: "addActionKey: anInteger labelled: aString callback: aBlock\x0a\x09self add: ((HLBindingAction on: anInteger labelled: aString)\x0a    \x09callback: aBlock;\x0a        yourself)",
messageSends: ["add:", "callback:", "on:labelled:", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addGroupKey:labelled:",
protocol: 'add',
fn: function (anInteger,aString){
var self=this;
function $HLBindingGroup(){return globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
return smalltalk.withContext(function($ctx1) { 
self._add_(_st($HLBindingGroup())._on_labelled_(anInteger,aString));
return self}, function($ctx1) {$ctx1.fill(self,"addGroupKey:labelled:",{anInteger:anInteger,aString:aString},globals.HLBindingGroup)})},
args: ["anInteger", "aString"],
source: "addGroupKey: anInteger labelled: aString\x0a\x09self add: (HLBindingGroup on: anInteger labelled: aString)",
messageSends: ["add:", "on:labelled:"],
referencedClasses: ["HLBindingGroup"]
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._label()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},globals.HLBindingGroup)})},
args: ["aString"],
source: "at: aString\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each label = aString ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "bindings", "=", "label"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:add:",
protocol: 'accessing',
fn: function (aString,aBinding){
var self=this;
var binding;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
binding=self._at_(aString);
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
_st(binding)._add_(aBinding);
return self}, function($ctx1) {$ctx1.fill(self,"at:add:",{aString:aString,aBinding:aBinding,binding:binding},globals.HLBindingGroup)})},
args: ["aString", "aBinding"],
source: "at: aString add: aBinding\x0a\x09| binding |\x0a\x09\x0a\x09binding := self at: aString.\x0a\x09binding ifNil: [ ^ self ].\x0a\x09\x09\x0a\x09binding add: aBinding",
messageSends: ["at:", "ifNil:", "add:"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._key()).__eq(anInteger);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anInteger:anInteger},globals.HLBindingGroup)})},
args: ["anInteger"],
source: "atKey: anInteger\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each key = anInteger ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "bindings", "=", "key"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@bindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bindings"]=_st($OrderedCollection())._new();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{},globals.HLBindingGroup)})},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.HLBindingGroup.superclass.fn.prototype._displayLabel.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2).__comma("...");
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},globals.HLBindingGroup)})},
args: [],
source: "displayLabel\x0a\x09^ super displayLabel, '...'",
messageSends: [",", "displayLabel"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._activeBindings())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLBindingGroup)})},
args: [],
source: "isActive\x0a\x09^ self activeBindings notEmpty",
messageSends: ["notEmpty", "activeBindings"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bindings())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._release();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"release",{},globals.HLBindingGroup)})},
args: [],
source: "release\x0a\x09self bindings do: [ :each | each release ]",
messageSends: ["do:", "bindings", "release"],
referencedClasses: []
}),
globals.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
protocol: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isActive();
if(smalltalk.assert($1)){
_st(aBindingHelper)._renderBindingGroup_on_(self,html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},globals.HLBindingGroup)})},
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html\x0a\x09self isActive ifTrue: [\x0a\x09\x09aBindingHelper renderBindingGroup: self on: html ]",
messageSends: ["ifTrue:", "isActive", "renderBindingGroup:on:"],
referencedClasses: []
}),
globals.HLBindingGroup);



smalltalk.addClass('HLBindingActionInputWidget', globals.HLWidget, ['input', 'callback', 'status', 'wrapper', 'ghostText', 'message', 'inputCompletion', 'defaultValue', 'messageTag'], 'Helios-KeyBindings');
globals.HLBindingActionInputWidget.comment="My instances are built when a `HLBindingAction` that requires user input is applied.";
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@callback"];
if(($receiver = $2) == null || $receiver.isNil){
self["@callback"]=(function(value){
});
$1=self["@callback"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "callback\x0a\x09^ callback ifNil: [ callback := [ :value | ] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearStatus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("info");
self._message_("");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "clearStatus\x0a\x09self status: 'info'.\x0a\x09self message: ''.\x0a\x09self refresh",
messageSends: ["status:", "message:", "refresh"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@defaultValue"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "defaultValue\x0a\x09^ defaultValue ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@defaultValue"]=aString;
return self},
args: ["aString"],
source: "defaultValue: aString\x0a\x09defaultValue := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "errorStatus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("error");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "errorStatus\x0a\x09self status: 'error'.\x0a\x09self refresh",
messageSends: ["status:", "refresh"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
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
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},globals.HLBindingActionInputWidget)})},
args: ["aString"],
source: "evaluate: aString\x09\x0a\x09[ self callback value: aString ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex |\x0a\x09\x09\x09self input asJQuery \x0a\x09\x09\x09\x09one: 'keydown' \x0a\x09\x09\x09\x09do: [ self clearStatus ].\x0a\x09\x09\x09self message: ex messageText.\x0a\x09\x09\x09self errorStatus ]",
messageSends: ["on:do:", "value:", "callback", "one:do:", "asJQuery", "input", "clearStatus", "message:", "messageText", "errorStatus"],
referencedClasses: ["Error"]
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@ghostText"];
return $1;
},
args: [],
source: "ghostText\x0a\x09^ ghostText",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText:",
protocol: 'accessing',
fn: function (aText){
var self=this;
self["@ghostText"]=aText;
return self},
args: ["aText"],
source: "ghostText: aText\x0a\x09ghostText := aText",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

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
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@inputCompletion"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "inputCompletion\x0a\x09^ inputCompletion ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@inputCompletion"]=aCollection;
return self},
args: ["aCollection"],
source: "inputCompletion: aCollection\x0a\x09inputCompletion := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@message"];
if(($receiver = $2) == null || $receiver.isNil){
self["@message"]="";
$1=self["@message"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "message\x0a\x09^ message ifNil: [ message := '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@message"]=aString;
return self},
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@wrapper"];
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
_st(self["@wrapper"])._class_(self._status());
_st(self["@messageTag"])._contents_(self._message());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "refresh\x0a\x09wrapper ifNil: [ ^ self ].\x0a    \x0a\x09wrapper class: self status.\x0a\x09messageTag contents: self message",
messageSends: ["ifNil:", "class:", "status", "contents:", "message"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$6,$8,$10,$9,$7,$5,$11,$12,$13,$3,$14,$15,$receiver;
$1=self["@wrapper"];
if(($receiver = $1) == null || $receiver.isNil){
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
_st($11)._typeahead_(globals.HashedCollection._newFromPairs_(["source",self._inputCompletion()]));
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
$14=_st(self["@input"])._asJQuery();
_st($14)._focus();
$15=_st($14)._select();
return $15;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLBindingActionInputWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper ifNil: [ wrapper := html span ].\x0a\x0a\x09wrapper \x0a\x09\x09class: self status;\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09placeholder: self ghostText;\x0a\x09\x09\x09\x09value: self defaultValue;\x0a\x09\x09\x09\x09onKeyDown: [ :event | \x0a\x09\x09\x09\x09\x09event which = 13 ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self evaluate: input asJQuery val ] ]\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input asJQuery \x0a\x09\x09\x09\x09typeahead: #{ 'source' -> self inputCompletion }.\x0a\x09\x09\x09messageTag := (html span\x0a\x09\x09\x09\x09class: 'help-inline';\x0a\x09\x09\x09\x09with: self message;\x0a\x09\x09\x09\x09yourself) ].\x0a\x09\x0a\x09\x22Evaluate with a timeout to ensure focus.\x0a\x09Commands can be executed from a menu, clicking on the menu to\x0a\x09evaluate the command would give it the focus otherwise\x22\x0a\x09\x0a\x09[ input asJQuery focus; select ] valueWithTimeout: 10",
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "input", "ghostText", "value:", "defaultValue", "onKeyDown:", "yourself", "ifTrue:", "=", "which", "evaluate:", "val", "asJQuery", "typeahead:", "inputCompletion", "message", "valueWithTimeout:", "focus", "select"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@status"];
if(($receiver = $2) == null || $receiver.isNil){
self["@status"]="info";
$1=self["@status"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},globals.HLBindingActionInputWidget)})},
args: [],
source: "status\x0a\x09^ status ifNil: [ status := 'info' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
protocol: 'accessing',
fn: function (aStatus){
var self=this;
self["@status"]=aStatus;
return self},
args: ["aStatus"],
source: "status: aStatus\x0a\x09status := aStatus",
messageSends: [],
referencedClasses: []
}),
globals.HLBindingActionInputWidget);



smalltalk.addClass('HLKeyBinder', globals.Object, ['modifierKey', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
globals.HLKeyBinder.comment="My `current` instance holds keybindings for Helios actions and evaluate them.\x0a\x0aBindings can be nested by groups. The `bindings` instance variable holds the root of the key bindings tree.\x0a\x0aBindings are instances of a concrete subclass of `HLBinding`.\x0a\x0aI am always either in 'active' or 'inactive' state. In active state I capture key down events and my `helper` widget is displayed at the bottom of the window. My `selectedBinding`, if any, is displayed by the helper.\x0a\x0aBindings are evaluated through `applyBinding:`. If a binding is final (not a group of other bindings), evaluating it will result in deactivating the binder, and hiding the `helper` widget.";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._helper())._show();
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},globals.HLKeyBinder)})},
args: [],
source: "activate\x0a\x09self helper show",
messageSends: ["show", "helper"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKey",
protocol: 'accessing',
fn: function (){
var self=this;
return (32);
},
args: [],
source: "activationKey\x0a\x09\x22SPACE\x22\x0a\x09^ 32",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKeyLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "ctrl + space";
},
args: [],
source: "activationKeyLabel\x0a\x09^ 'ctrl + space'",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "applyBinding:",
protocol: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding},globals.HLKeyBinder)})},
args: ["aBinding"],
source: "applyBinding: aBinding\x0a\x09aBinding isActive ifFalse: [ ^ self ].\x0a\x09\x0a\x09self selectBinding: aBinding.\x0a    aBinding apply",
messageSends: ["ifFalse:", "isActive", "selectBinding:", "apply"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@bindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bindings"]=self._defaultBindings();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{},globals.HLKeyBinder)})},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := self defaultBindings ]",
messageSends: ["ifNil:", "defaultBindings"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "deactivate",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@selectedBinding"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(self["@selectedBinding"])._release();
};
self["@selectedBinding"]=nil;
_st(self._helper())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"deactivate",{},globals.HLKeyBinder)})},
args: [],
source: "deactivate\x0a\x09selectedBinding ifNotNil: [ selectedBinding release ].\x0a    selectedBinding := nil.\x0a\x09self helper hide",
messageSends: ["ifNotNil:", "release", "hide", "helper"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBindings",
protocol: 'defaults',
fn: function (){
var self=this;
var group;
function $HLBindingGroup(){return globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
function $HLCloseTabCommand(){return globals.HLCloseTabCommand||(typeof HLCloseTabCommand=="undefined"?nil:HLCloseTabCommand)}
function $HLSwitchTabCommand(){return globals.HLSwitchTabCommand||(typeof HLSwitchTabCommand=="undefined"?nil:HLSwitchTabCommand)}
function $HLOpenCommand(){return globals.HLOpenCommand||(typeof HLOpenCommand=="undefined"?nil:HLOpenCommand)}
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
}, function($ctx1) {$ctx1.fill(self,"defaultBindings",{group:group},globals.HLKeyBinder)})},
args: [],
source: "defaultBindings\x0a\x09| group |\x0a\x09\x0a\x09group := HLBindingGroup new\x0a\x09\x09add: HLCloseTabCommand new asBinding;\x0a\x09\x09add: HLSwitchTabCommand new asBinding;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09HLOpenCommand registerConcreteClassesOn: group.\x0a\x09\x09\x09\x09\x0a\x09^ group",
messageSends: ["add:", "new", "asBinding", "yourself", "registerConcreteClassesOn:"],
referencedClasses: ["HLBindingGroup", "HLCloseTabCommand", "HLSwitchTabCommand", "HLOpenCommand"]
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "escapeKey",
protocol: 'accessing',
fn: function (){
var self=this;
return (27);
},
args: [],
source: "escapeKey\x0a\x09\x22ESC\x22\x0a\x09^ 27",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "flushBindings",
protocol: 'actions',
fn: function (){
var self=this;
self["@bindings"]=nil;
return self},
args: [],
source: "flushBindings\x0a\x09bindings := nil",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleActiveKeyDown:",
protocol: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$6,$5,$4,$1,$7;
$3=_st(event)._which();
$ctx1.sendIdx["which"]=1;
$2=_st($3).__eq(self._escapeKey());
$ctx1.sendIdx["="]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(event)._which();
$ctx2.sendIdx["which"]=2;
$5=_st($6).__eq((71));
$ctx2.sendIdx["="]=2;
$4=_st($5)._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(event)._which()).__eq(self._activationKey());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return _st($4)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(event)._ctrlKey();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["or:"]=1;
if(smalltalk.assert($1)){
self._deactivate();
_st(event)._preventDefault();
return false;
};
$7=self._handleBindingFor_(event);
return $7;
}, function($ctx1) {$ctx1.fill(self,"handleActiveKeyDown:",{event:event},globals.HLKeyBinder)})},
args: ["event"],
source: "handleActiveKeyDown: event\x0a\x0a\x09\x22ESC, ctrl+g ctrl+space deactivate the keyBinder\x22\x0a\x09(event which = self escapeKey or: [\x0a\x09\x09(event which = 71 or: [ event which = self activationKey ]) \x0a\x09\x09\x09and: [ event ctrlKey ] ])\x0a        \x09\x09ifTrue: [ \x0a           \x09\x09\x09self deactivate.\x0a\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09^ false ].\x0a            \x0a    \x22Handle the keybinding\x22\x0a    ^ self handleBindingFor: event",
messageSends: ["ifTrue:", "or:", "=", "which", "escapeKey", "and:", "activationKey", "ctrlKey", "deactivate", "preventDefault", "handleBindingFor:"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleBindingFor:",
protocol: 'events',
fn: function (anEvent){
var self=this;
var binding;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
binding=_st(self._selectedBinding())._atKey_(_st(anEvent)._which());
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._applyBinding_(binding);
_st(anEvent)._preventDefault();
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"handleBindingFor:",{anEvent:anEvent,binding:binding},globals.HLKeyBinder)})},
args: ["anEvent"],
source: "handleBindingFor: anEvent\x0a\x09| binding |\x0a    binding := self selectedBinding atKey: anEvent which.\x0a    \x0a    binding ifNotNil: [ \x0a    \x09self applyBinding: binding.\x0a\x09\x09anEvent preventDefault.\x0a\x09\x09^ false ]",
messageSends: ["atKey:", "selectedBinding", "which", "ifNotNil:", "applyBinding:", "preventDefault"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInactiveKeyDown:",
protocol: 'events',
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
return self}, function($ctx1) {$ctx1.fill(self,"handleInactiveKeyDown:",{event:event},globals.HLKeyBinder)})},
args: ["event"],
source: "handleInactiveKeyDown: event\x0a\x09event which = self activationKey ifTrue: [\x0a    \x09event ctrlKey ifTrue: [\x0a\x09\x09\x09self activate. \x0a            event preventDefault. \x0a            ^ false ] ]",
messageSends: ["ifTrue:", "=", "which", "activationKey", "ctrlKey", "activate", "preventDefault"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
protocol: 'events',
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
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{event:event},globals.HLKeyBinder)})},
args: ["event"],
source: "handleKeyDown: event\x0a\x09^ self isActive\x0a    \x09ifTrue: [ self handleActiveKeyDown: event ]\x0a      \x09ifFalse: [ self handleInactiveKeyDown: event ]",
messageSends: ["ifTrue:ifFalse:", "isActive", "handleActiveKeyDown:", "handleInactiveKeyDown:"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "helper",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@helper"];
return $1;
},
args: [],
source: "helper\x0a\x09^ helper",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLKeyBinderHelperWidget(){return globals.HLKeyBinderHelperWidget||(typeof HLKeyBinderHelperWidget=="undefined"?nil:HLKeyBinderHelperWidget)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLKeyBinder.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@helper"]=_st($HLKeyBinderHelperWidget())._on_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HLKeyBinder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09helper := HLKeyBinderHelperWidget on: self",
messageSends: ["initialize", "on:"],
referencedClasses: ["HLKeyBinderHelperWidget"]
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(".".__comma(_st(self._helper())._cssClass()))._asJQuery())._is_(":visible");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLKeyBinder)})},
args: [],
source: "isActive\x0a\x09^ ('.', self helper cssClass) asJQuery is: ':visible'",
messageSends: ["is:", "asJQuery", ",", "cssClass", "helper"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectBinding:",
protocol: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"selectBinding:",{aBinding:aBinding},globals.HLKeyBinder)})},
args: ["aBinding"],
source: "selectBinding: aBinding\x0a\x09aBinding = selectedBinding ifTrue: [ ^ self ].\x0a\x09\x0a\x09selectedBinding := aBinding.\x0a\x09self helper refresh",
messageSends: ["ifTrue:", "=", "refresh", "helper"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@selectedBinding"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._bindings();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},globals.HLKeyBinder)})},
args: [],
source: "selectedBinding\x0a\x09^ selectedBinding ifNil: [ self bindings ]",
messageSends: ["ifNil:", "bindings"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEvents",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("body"._asJQuery())._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},globals.HLKeyBinder)})},
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event | self handleKeyDown: event ]",
messageSends: ["keydown:", "asJQuery", "handleKeyDown:"],
referencedClasses: []
}),
globals.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "systemIsMac",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(navigator)._platform())._match_("Mac");
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemIsMac",{},globals.HLKeyBinder)})},
args: [],
source: "systemIsMac\x0a\x09^ navigator platform match: 'Mac'",
messageSends: ["match:", "platform"],
referencedClasses: []
}),
globals.HLKeyBinder);


globals.HLKeyBinder.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=($ctx1.supercall = true, globals.HLKeyBinder.klass.superclass.fn.prototype._new.apply(_st(self), []));
$ctx1.supercall = false;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.HLKeyBinder.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.HLKeyBinder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.HLKeyBinder.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.HLKeyBinder.klass);


smalltalk.addClass('HLKeyBinderHelperWidget', globals.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
globals.HLKeyBinderHelperWidget.comment="I am the widget responsible for displaying active keybindings in a bar at the bottom of the window. Each keybinding is an instance of `HLBinding`. \x0a\x0aRendering is done through a double dispatch, see `#renderSelectedBindingOn:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "key_helper";
},
args: [],
source: "cssClass\x0a\x09^ 'key_helper'",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "deactivate",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBinder())._deactivate();
return self}, function($ctx1) {$ctx1.fill(self,"deactivate",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "deactivate\x0a\x09self keyBinder deactivate",
messageSends: ["deactivate", "keyBinder"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(".".__comma(self._cssClass()))._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
$ctx1.sendIdx["remove"]=1;
_st(".helper_overlay"._asJQuery())._remove();
self._showCog();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "hide\x0a\x09('.', self cssClass) asJQuery remove.\x0a\x09'.helper_overlay' asJQuery remove.\x0a\x09self showCog",
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hideCog",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideCog",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "hideCog\x0a\x09'#cog-helper' asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@keyBinder"];
return $1;
},
args: [],
source: "keyBinder\x0a\x09^ keyBinder",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder:",
protocol: 'accessing',
fn: function (aKeyBinder){
var self=this;
self["@keyBinder"]=aKeyBinder;
return self},
args: ["aKeyBinder"],
source: "keyBinder: aKeyBinder\x0a\x09keyBinder := aKeyBinder",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "mainId",
protocol: 'accessing',
fn: function (){
var self=this;
return "binding-helper-main";
},
args: [],
source: "mainId\x0a\x09^ 'binding-helper-main'",
messageSends: [],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingActionFor:on:",
protocol: 'rendering',
fn: function (aBinding,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._span();
_st($1)._class_("command");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._strong();
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
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingActionFor:on:",{aBinding:aBinding,html:html},globals.HLKeyBinderHelperWidget)})},
args: ["aBinding", "html"],
source: "renderBindingActionFor: aBinding on: html\x0a\x09html span class: 'command'; with: [\x0a\x09\x09html strong \x0a\x09\x09\x09class: 'label'; \x0a\x09\x09\x09with: aBinding shortcut asLowercase.\x0a  \x09\x09html a \x0a        \x09class: 'action'; \x0a            with: aBinding displayLabel;\x0a  \x09\x09\x09onClick: [ self keyBinder applyBinding: aBinding ] ]",
messageSends: ["class:", "span", "with:", "strong", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:", "keyBinder"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingGroup:on:",
protocol: 'rendering',
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
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},globals.HLKeyBinderHelperWidget)})},
args: ["aBindingGroup", "html"],
source: "renderBindingGroup: aBindingGroup on: html\x0a\x09(aBindingGroup activeBindings \x0a    \x09sorted: [ :a :b | a key < b key ])\x0a        do: [ :each | self renderBindingActionFor: each on: html ]",
messageSends: ["do:", "sorted:", "activeBindings", "<", "key", "renderBindingActionFor:on:"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCloseOn:",
protocol: 'rendering',
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
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},globals.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderCloseOn: html\x0a\x09html a\x0a\x09\x09class: 'close';\x0a\x09\x09with: [ (html tag: 'i') class: 'icon-remove' ];\x0a\x09\x09onClick: [ self keyBinder deactivate ]",
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._id_("overlay");
$ctx1.sendIdx["id:"]=1;
_st($1)._class_("helper_overlay");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._deactivate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$3=_st(html)._div();
$ctx1.sendIdx["div"]=2;
_st($3)._class_(self._cssClass());
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLabelOn_(html);
$5=_st(html)._div();
_st($5)._id_(self._mainId());
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderSelectedBindingOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$6;
return self._renderCloseOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
_st(":focus"._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09id: 'overlay';\x0a\x09\x09class: 'helper_overlay';\x0a\x09\x09onClick: [ self deactivate ].\x0a\x09\x0a\x09html div class: self cssClass; with: [\x0a      \x09self renderLabelOn: html.\x0a\x09\x09html div\x0a\x09\x09\x09id: self mainId;\x0a\x09\x09\x09with: [ self renderSelectedBindingOn: html ].\x0a\x09\x09self renderCloseOn: html ].\x0a\x09\x09\x0a\x09':focus' asJQuery blur",
messageSends: ["id:", "div", "class:", "onClick:", "deactivate", "cssClass", "with:", "renderLabelOn:", "mainId", "renderSelectedBindingOn:", "renderCloseOn:", "blur", "asJQuery"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLabelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2,$receiver;
$1=_st(html)._span();
_st($1)._class_("selected");
$3=$1;
$5=_st(self._selectedBinding())._label();
if(($receiver = $5) == null || $receiver.isNil){
$4="Action";
} else {
$4=$5;
};
$2=_st($3)._with_($4);
return self}, function($ctx1) {$ctx1.fill(self,"renderLabelOn:",{html:html},globals.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderLabelOn: html\x0a\x09\x09html span \x0a        \x09class: 'selected'; \x0a            with: (self selectedBinding label ifNil: [ 'Action' ])",
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectedBindingOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectedBindingOn:",{html:html},globals.HLKeyBinderHelperWidget)})},
args: ["html"],
source: "renderSelectedBindingOn: html\x0a\x09self selectedBinding renderOn: self html: html",
messageSends: ["renderOn:html:", "selectedBinding"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keyBinder())._selectedBinding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "selectedBinding\x0a\x09^ self keyBinder selectedBinding",
messageSends: ["selectedBinding", "keyBinder"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "show\x0a\x09self hideCog.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showCog",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCog",{},globals.HLKeyBinderHelperWidget)})},
args: [],
source: "showCog\x0a\x09'#cog-helper' asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showWidget:",
protocol: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"showWidget:",{aWidget:aWidget},globals.HLKeyBinderHelperWidget)})},
args: ["aWidget"],
source: "showWidget: aWidget\x0a\x09\x22Some actions need to display more info to the user or request input.\x0a\x09This method is the right place for that\x22\x0a\x09\x0a\x09('#', self mainId) asJQuery empty.\x0a\x09aWidget appendToJQuery: ('#', self mainId) asJQuery",
messageSends: ["empty", "asJQuery", ",", "mainId", "appendToJQuery:"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._keyBinder_(aKeyBinder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder},globals.HLKeyBinderHelperWidget.klass)})},
args: ["aKeyBinder"],
source: "on: aKeyBinder\x0a\x09^ self new\x0a    \x09keyBinder: aKeyBinder;\x0a        yourself",
messageSends: ["keyBinder:", "new", "yourself"],
referencedClasses: []
}),
globals.HLKeyBinderHelperWidget.klass);


smalltalk.addClass('HLRepeatedKeyDownHandler', globals.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'keyDown'], 'Helios-KeyBindings');
globals.HLRepeatedKeyDownHandler.comment="I am responsible for handling repeated key down actions for widgets.\x0a\x0a##Usage\x0a\x0a    (self on: aWidget)\x0a        whileKeyDown: 38 do: aBlock;\x0a        whileKeyDown: 40 do: anotherBlock;\x0a        bindKeys\x0a\x0aI perform an action block on a key press, wait for 300 ms and then preform the same action block every `repeatInterval` milliseconds until the key is released.";
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeys",
protocol: 'binding',
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
return self}, function($ctx1) {$ctx1.fill(self,"bindKeys",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "bindKeys\x0a\x09self widget \x0a\x09\x09bindKeyDown: [ :e | self handleKeyDown: e ] \x0a\x09\x09keyUp: [ :e | self handleKeyUp ]",
messageSends: ["bindKeyDown:keyUp:", "widget", "handleKeyDown:", "handleKeyUp"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRepeatInterval",
protocol: 'defaults',
fn: function (){
var self=this;
return (70);
},
args: [],
source: "defaultRepeatInterval\x0a\x09^ 70",
messageSends: [],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:forKey:action:",
protocol: 'events handling',
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
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:forKey:action:",{anEvent:anEvent,anInteger:anInteger,aBlock:aBlock},globals.HLRepeatedKeyDownHandler)})},
args: ["anEvent", "anInteger", "aBlock"],
source: "handleEvent: anEvent forKey: anInteger action: aBlock\x0a\x09(anEvent which = anInteger and: [ self isKeyDown not ])\x0a\x09\x09ifTrue: [ self whileKeyDownDo: aBlock ]",
messageSends: ["ifTrue:", "and:", "=", "which", "not", "isKeyDown", "whileKeyDownDo:"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
protocol: 'events handling',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._keysAndValuesDo_((function(key,action){
return smalltalk.withContext(function($ctx2) {
return self._handleEvent_forKey_action_(anEvent,key,action);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},globals.HLRepeatedKeyDownHandler)})},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09self keyBindings keysAndValuesDo: [ :key :action | \x0a\x09\x09self handleEvent: anEvent forKey: key action: action ]",
messageSends: ["keysAndValuesDo:", "keyBindings", "handleEvent:forKey:action:"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp",
protocol: 'events handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
$1=self._isKeyDown();
if(smalltalk.assert($1)){
self["@keyDown"]=false;
self["@keyDown"];
$2=self["@interval"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
_st(self["@interval"])._clearInterval();
};
$3=self["@delay"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
_st(self["@delay"])._clearTimeout();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "handleKeyUp\x0a\x09self isKeyDown ifTrue: [\x0a\x09\x09keyDown := false.\x0a\x09\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09\x09delay ifNotNil: [ delay clearTimeout ] ]",
messageSends: ["ifTrue:", "isKeyDown", "ifNotNil:", "clearInterval", "clearTimeout"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "isKeyDown",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@keyDown"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKeyDown",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "isKeyDown\x0a\x09^ keyDown ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBindings",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@keyBindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@keyBindings"]=_st($Dictionary())._new();
$1=self["@keyBindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBindings",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "keyBindings\x0a\x09^ keyBindings ifNil: [ keyBindings := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "rebindKeys",
protocol: 'binding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._unbindKeys();
$1=self._bindKeys();
return self}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "rebindKeys\x0a\x09self \x0a\x09\x09unbindKeys;\x0a\x09\x09bindKeys",
messageSends: ["unbindKeys", "bindKeys"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@repeatInterval"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultRepeatInterval();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "repeatInterval\x0a\x09^ repeatInterval ifNil: [ self defaultRepeatInterval ]",
messageSends: ["ifNil:", "defaultRepeatInterval"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@repeatInterval"]=anInteger;
return self},
args: ["anInteger"],
source: "repeatInterval: anInteger\x0a\x09repeatInterval := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "startRepeatingAction:",
protocol: 'actions',
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
}, function($ctx1) {$ctx1.fill(self,"startRepeatingAction:",{aBlock:aBlock},globals.HLRepeatedKeyDownHandler)})},
args: ["aBlock"],
source: "startRepeatingAction: aBlock\x0a\x09^ [ (self widget hasFocus)\x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self handleKeyUp ] ] valueWithInterval: self repeatInterval",
messageSends: ["valueWithInterval:", "ifTrue:ifFalse:", "hasFocus", "widget", "value", "handleKeyUp", "repeatInterval"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeys",
protocol: 'binding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._unbindKeyDownKeyUp();
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},globals.HLRepeatedKeyDownHandler)})},
args: [],
source: "unbindKeys\x0a\x09self widget unbindKeyDownKeyUp",
messageSends: ["unbindKeyDownKeyUp", "widget"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDown:do:",
protocol: 'actions',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._at_put_(aKey,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDown:do:",{aKey:aKey,aBlock:aBlock},globals.HLRepeatedKeyDownHandler)})},
args: ["aKey", "aBlock"],
source: "whileKeyDown: aKey do: aBlock\x0a\x09self keyBindings at: aKey put: aBlock",
messageSends: ["at:put:", "keyBindings"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDownDo:",
protocol: 'events handling',
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
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDownDo:",{aBlock:aBlock},globals.HLRepeatedKeyDownHandler)})},
args: ["aBlock"],
source: "whileKeyDownDo: aBlock\x0a\x09keyDown := true.\x0a\x09aBlock value.\x0a\x09delay := [ interval := self startRepeatingAction: aBlock ] \x0a\x09\x09valueWithTimeout: 300",
messageSends: ["value", "valueWithTimeout:", "startRepeatingAction:"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._widget_(aWidget);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aWidget:aWidget},globals.HLRepeatedKeyDownHandler.klass)})},
args: ["aWidget"],
source: "on: aWidget\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "yourself"],
referencedClasses: []
}),
globals.HLRepeatedKeyDownHandler.klass);

});
