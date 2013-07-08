smalltalk.addPackage('Helios-KeyBindings');
smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'actions',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBinding)})},
args: ["aKeyBinder"],
source: "applyOn: aKeyBinder",
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
source: "atKey: aKey\x0a\x09^ nil",
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
selector: "isFinal",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFinal",{},smalltalk.HLBinding)})},
args: [],
source: "isFinal\x0a\x09\x22 Answer true if the receiver is the final binding of a sequence \x22\x0a\x09\x0a\x09^ false",
messageSends: [],
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
selector: "renderActionFor:html:",
category: 'rendering',
fn: function (aBinder,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._span();
_st($1)._class_("command");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("label");
$4=_st($3)._with_(_st(self._shortcut())._asLowercase());
$4;
$5=_st(html)._a();
_st($5)._class_("action");
_st($5)._with_(self._displayLabel());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aBinder)._applyBinding_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderActionFor:html:",{aBinder:aBinder,html:html},smalltalk.HLBinding)})},
args: ["aBinder", "html"],
source: "renderActionFor: aBinder html: html\x0a\x09html span class: 'command'; with: [\x0a\x09\x09html span \x0a\x09\x09\x09class: 'label'; \x0a\x09\x09\x09with: self shortcut asLowercase.\x0a  \x09\x09html a \x0a        \x09class: 'action'; \x0a            with: self displayLabel;\x0a  \x09\x09\x09onClick: [ aBinder applyBinding: self ] ]",
messageSends: ["class:", "span", "with:", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:"],
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
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'actions',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isInputRequired();
if(smalltalk.assert($1)){
_st(aKeyBinder)._selectBinding_(self._inputBinding());
} else {
_st(self._command())._execute();
};
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBindingAction)})},
args: ["aKeyBinder"],
source: "applyOn: aKeyBinder\x0a\x09self command isInputRequired\x0a\x09\x09ifTrue: [ aKeyBinder selectBinding: self inputBinding ]\x0a\x09\x09ifFalse: [ self command execute ]",
messageSends: ["ifTrue:ifFalse:", "selectBinding:", "inputBinding", "execute", "command", "isInputRequired"],
referencedClasses: []
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
selector: "inputBinding",
category: 'accessing',
fn: function (){
var self=this;
function $HLBindingInput(){return smalltalk.HLBindingInput||(typeof HLBindingInput=="undefined"?nil:HLBindingInput)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($HLBindingInput())._new();
_st($2)._label_(_st(self._command())._inputLabel());
_st($2)._ghostText_(_st(self._command())._displayLabel());
_st($2)._defaultValue_(_st(self._command())._defaultInput());
_st($2)._inputCompletion_(_st(self._command())._inputCompletion());
_st($2)._callback_((function(val){
return smalltalk.withContext(function($ctx2) {
$3=self._command();
_st($3)._input_(val);
$4=_st($3)._execute();
return $4;
}, function($ctx2) {$ctx2.fillBlock({val:val},$ctx1)})}));
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputBinding",{},smalltalk.HLBindingAction)})},
args: [],
source: "inputBinding\x0a\x09^ HLBindingInput new\x0a\x09\x09label: self command inputLabel;\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :val | \x0a\x09\x09\x09self command \x0a\x09\x09\x09\x09input: val;\x0a\x09\x09\x09\x09execute ];\x0a\x09\x09yourself",
messageSends: ["label:", "inputLabel", "command", "new", "ghostText:", "displayLabel", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "execute", "yourself"],
referencedClasses: ["HLBindingInput"]
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

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._command())._isInputRequired())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFinal",{},smalltalk.HLBindingAction)})},
args: [],
source: "isFinal\x0a\x09^ self command isInputRequired not",
messageSends: ["not", "isInputRequired", "command"],
referencedClasses: []
}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBindings",{},smalltalk.HLBindingGroup)})},
args: [],
source: "activeBindings\x0a\x09^ self bindings select: [ :each | each isActive ]",
messageSends: ["select:", "isActive", "bindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.HLBindingGroup)})},
args: ["aString"],
source: "at: aString\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each label = aString ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "label", "bindings"],
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
var $1,$2;
binding=self._at_(aString);
$1=binding;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anInteger:anInteger},smalltalk.HLBindingGroup)})},
args: ["anInteger"],
source: "atKey: anInteger\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each key = anInteger ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "key", "bindings"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBindingGroup)})},
args: [],
source: "release\x0a\x09self bindings do: [ :each | each release ]",
messageSends: ["do:", "release", "bindings"],
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
messageSends: ["ifTrue:", "renderBindingGroup:on:", "isActive"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLBindingInput', smalltalk.HLBinding, ['input', 'callback', 'status', 'wrapper', 'binder', 'ghostText', 'isFinal', 'message', 'messageTag', 'inputCompletion', 'defaultValue'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'actions',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isFinal_(true);
self._evaluate_(_st(_st(self._input())._asJQuery())._val());
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBindingInput)})},
args: ["aKeyBinder"],
source: "applyOn: aKeyBinder\x0a\x09self isFinal: true.\x0a\x09self evaluate: self input asJQuery val",
messageSends: ["isFinal:", "evaluate:", "val", "asJQuery", "input"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aKey).__eq((13));
if(! smalltalk.assert($1)){
return nil;
};
return self}, function($ctx1) {$ctx1.fill(self,"atKey:",{aKey:aKey},smalltalk.HLBindingInput)})},
args: ["aKey"],
source: "atKey: aKey\x0a\x09aKey = 13 ifFalse: [ ^ nil ]",
messageSends: ["ifFalse:", "="],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@callback"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@callback"]=(function(value){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})});
$1=self["@callback"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.HLBindingInput)})},
args: [],
source: "callback\x0a\x09^ callback ifNil: [ callback := [ :value | ] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.HLBindingInput)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

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
return self}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},smalltalk.HLBindingInput)})},
args: [],
source: "clearStatus\x0a\x09self status: 'info'.\x0a\x09self message: ''.\x0a\x09self refresh",
messageSends: ["status:", "message:", "refresh"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultValue"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},smalltalk.HLBindingInput)})},
args: [],
source: "defaultValue\x0a\x09^ defaultValue ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultValue"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultValue:",{aString:aString},smalltalk.HLBindingInput)})},
args: ["aString"],
source: "defaultValue: aString\x0a\x09defaultValue := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "errorStatus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("error");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},smalltalk.HLBindingInput)})},
args: [],
source: "errorStatus\x0a\x09self status: 'error'.\x0a\x09self refresh",
messageSends: ["status:", "refresh"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
_st(_st(self._input())._asJQuery())._one_do_("keydown",(function(){
return smalltalk.withContext(function($ctx3) {
return self._clearStatus();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
self._message_(_st(ex)._messageText());
self._errorStatus();
return self._isFinal_(false);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.HLBindingInput)})},
args: ["aString"],
source: "evaluate: aString\x0a\x09\x0a\x09[ self callback value: aString ]\x0a\x09on: Error\x0a\x09do: [:ex |\x0a\x09\x09self input asJQuery \x0a\x09\x09\x09one: 'keydown' \x0a\x09\x09\x09do: [ self clearStatus ].\x0a\x09\x09self message: ex messageText.\x0a\x09\x09self errorStatus.\x0a\x09\x09self isFinal: false ].",
messageSends: ["on:do:", "one:do:", "clearStatus", "asJQuery", "input", "message:", "messageText", "errorStatus", "isFinal:", "value:", "callback"],
referencedClasses: ["Error"]
}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"ghostText",{},smalltalk.HLBindingInput)})},
args: [],
source: "ghostText\x0a\x09^ ghostText",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText:",
category: 'accessing',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ghostText"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"ghostText:",{aText:aText},smalltalk.HLBindingInput)})},
args: ["aText"],
source: "ghostText: aText\x0a\x09ghostText := aText",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLBindingInput)})},
args: [],
source: "input\x0a\x09^ input",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inputCompletion"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLBindingInput)})},
args: [],
source: "inputCompletion\x0a\x09^ inputCompletion ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inputCompletion"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"inputCompletion:",{aCollection:aCollection},smalltalk.HLBindingInput)})},
args: ["aCollection"],
source: "inputCompletion: aCollection\x0a\x09inputCompletion := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingInput)})},
args: [],
source: "isActive\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@isFinal"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@isFinal"]=smalltalk.HLBindingInput.superclass.fn.prototype._isFinal.apply(_st(self), []);
$1=self["@isFinal"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFinal",{},smalltalk.HLBindingInput)})},
args: [],
source: "isFinal\x0a\x09^ isFinal ifNil: [ isFinal := super isFinal ]",
messageSends: ["ifNil:", "isFinal"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal:",
category: 'testing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFinal"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isFinal:",{aBoolean:aBoolean},smalltalk.HLBindingInput)})},
args: ["aBoolean"],
source: "isFinal: aBoolean\x0a\x09isFinal := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@message"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@message"]="";
$1=self["@message"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLBindingInput)})},
args: [],
source: "message\x0a\x09^ message ifNil: [ message := '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLBindingInput)})},
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@wrapper"])._class_(self._status());
_st(self["@messageTag"])._contents_(self._message());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBindingInput)})},
args: [],
source: "refresh\x0a\x09wrapper ifNil: [ ^ self ].\x0a    \x0a\x09wrapper class: self status.\x0a\x09messageTag contents: self message",
messageSends: ["ifNil:", "class:", "status", "contents:", "message"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=nil;
self["@wrapper"]=nil;
self["@binder"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBindingInput)})},
args: [],
source: "release\x0a\x09status := nil.\x0a\x09wrapper := nil.\x0a\x09binder := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
category: 'rendering',
fn: function (aBinder,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$3;
self["@binder"]=aBinder;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@wrapper"]=_st(html)._span();
self["@wrapper"];
} else {
$1;
};
$2=self["@wrapper"];
_st($2)._class_(self._status());
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._input();
_st($4)._placeholder_(self._ghostText());
_st($4)._value_(self._defaultValue());
$5=_st($4)._yourself();
self["@input"]=$5;
self["@input"];
_st(_st(self["@input"])._asJQuery())._typeahead_(smalltalk.HashedCollection._from_(["source".__minus_gt(self._inputCompletion())]));
$6=_st(html)._span();
_st($6)._class_("help-inline");
_st($6)._with_(self._message());
$7=_st($6)._yourself();
self["@messageTag"]=$7;
return self["@messageTag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@input"])._asJQuery())._focus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBinder:aBinder,html:html},smalltalk.HLBindingInput)})},
args: ["aBinder", "html"],
source: "renderOn: aBinder html: html\x0a\x09binder := aBinder.\x0a\x09wrapper ifNil: [ wrapper := html span ].\x0a\x0a\x09wrapper \x0a\x09\x09class: self status;\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09placeholder: self ghostText;\x0a\x09\x09\x09\x09value: self defaultValue;\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input asJQuery \x0a\x09\x09\x09\x09typeahead: #{ 'source' -> self inputCompletion }.\x0a\x09\x09\x09messageTag := (html span\x0a\x09\x09\x09\x09class: 'help-inline';\x0a\x09\x09\x09\x09with: self message;\x0a\x09\x09\x09\x09yourself) ].\x0a\x09\x0a\x09\x22Evaluate with a timeout to ensure focus.\x0a\x09Commands can be executed from a menu, clicking on the menu to\x0a\x09evaluate the command would give it the focus otherwise\x22\x0a\x09\x0a\x09[ input asJQuery focus ] valueWithTimeout: 10",
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "ghostText", "input", "value:", "defaultValue", "yourself", "typeahead:", "->", "inputCompletion", "asJQuery", "message", "valueWithTimeout:", "focus"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@status"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@status"]="info";
$1=self["@status"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.HLBindingInput)})},
args: [],
source: "status\x0a\x09^ status ifNil: [ status := 'info' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
category: 'accessing',
fn: function (aStatus){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=aStatus;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{aStatus:aStatus},smalltalk.HLBindingInput)})},
args: ["aStatus"],
source: "status: aStatus\x0a\x09status := aStatus",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingInput);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
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
var $1,$2,$3;
$1=_st(aBinding)._isActive();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._selectBinding_(aBinding);
_st(aBinding)._applyOn_(self);
$3=_st(aBinding)._isFinal();
if(smalltalk.assert($3)){
self._deactivate();
};
return self}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding},smalltalk.HLKeyBinder)})},
args: ["aBinding"],
source: "applyBinding: aBinding\x0a\x09aBinding isActive ifFalse: [ ^ self ].\x0a\x09\x0a\x09self selectBinding: aBinding.\x0a    aBinding applyOn: self.\x0a\x09\x0a\x09aBinding isFinal ifTrue: [ self deactivate ]",
messageSends: ["ifFalse:", "isActive", "selectBinding:", "applyOn:", "ifTrue:", "deactivate", "isFinal"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
if(($receiver = $1) == nil || $receiver == undefined){
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
function $HLOpenCommand(){return smalltalk.HLOpenCommand||(typeof HLOpenCommand=="undefined"?nil:HLOpenCommand)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($HLBindingGroup())._new();
_st($1)._addGroupKey_labelled_((86),"View");
_st($1)._add_(_st(_st($HLCloseTabCommand())._new())._asBinding());
$2=_st($1)._yourself();
group=$2;
_st($HLOpenCommand())._registerConcreteClassesOn_(group);
$3=group;
return $3;
}, function($ctx1) {$ctx1.fill(self,"defaultBindings",{group:group},smalltalk.HLKeyBinder)})},
args: [],
source: "defaultBindings\x0a\x09| group |\x0a\x09\x0a\x09group := HLBindingGroup new\x0a\x09\x09addGroupKey: 86 labelled: 'View';\x0a\x09\x09add: HLCloseTabCommand new asBinding;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09HLOpenCommand registerConcreteClassesOn: group.\x0a\x09\x09\x09\x09\x0a\x09^ group",
messageSends: ["addGroupKey:labelled:", "new", "add:", "asBinding", "yourself", "registerConcreteClassesOn:"],
referencedClasses: ["HLBindingGroup", "HLCloseTabCommand", "HLOpenCommand"]
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
var $1,$2;
$1=_st(_st(_st(event)._which()).__eq(self._escapeKey()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(event)._which()).__eq((71)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(event)._ctrlKey();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._deactivate();
_st(event)._preventDefault();
return false;
};
$2=self._handleBindingFor_(event);
return $2;
}, function($ctx1) {$ctx1.fill(self,"handleActiveKeyDown:",{event:event},smalltalk.HLKeyBinder)})},
args: ["event"],
source: "handleActiveKeyDown: event\x0a\x0a\x09\x22ESC or ctrl+g deactivate the keyBinder\x22\x0a\x09(event which = self escapeKey or: [\x0a\x09\x09event which = 71 and: [ event ctrlKey ] ])\x0a        \x09ifTrue: [ \x0a            \x09self deactivate.\x0a\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09^ false ].\x0a            \x0a    \x22Handle the keybinding\x22\x0a    ^ self handleBindingFor: event",
messageSends: ["ifTrue:", "deactivate", "preventDefault", "or:", "and:", "ctrlKey", "=", "which", "escapeKey", "handleBindingFor:"],
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
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._applyBinding_(binding);
_st(anEvent)._preventDefault();
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"handleBindingFor:",{anEvent:anEvent,binding:binding},smalltalk.HLKeyBinder)})},
args: ["anEvent"],
source: "handleBindingFor: anEvent\x0a\x09| binding |\x0a    binding := self selectedBinding atKey: anEvent which.\x0a    \x0a    binding ifNotNil: [ \x0a    \x09self applyBinding: binding.\x0a\x09\x09anEvent preventDefault.\x0a\x09\x09^ false ]",
messageSends: ["atKey:", "which", "selectedBinding", "ifNotNil:", "applyBinding:", "preventDefault"],
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
messageSends: ["ifTrue:", "activate", "preventDefault", "ctrlKey", "=", "activationKey", "which"],
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
messageSends: ["ifTrue:ifFalse:", "handleActiveKeyDown:", "handleInactiveKeyDown:", "isActive"],
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
function $HLKeyBinderHelper(){return smalltalk.HLKeyBinderHelper||(typeof HLKeyBinderHelper=="undefined"?nil:HLKeyBinderHelper)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLKeyBinder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@helper"]=_st($HLKeyBinderHelper())._on_(self);
$1=self["@helper"];
_st($1)._renderStart();
$2=_st($1)._renderCog();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLKeyBinder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09helper := HLKeyBinderHelper on: self.\x0a\x09helper \x09\x0a\x09\x09renderStart;\x0a\x09\x09renderCog",
messageSends: ["initialize", "on:", "renderStart", "renderCog"],
referencedClasses: ["HLKeyBinderHelper"]
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
var $1,$2;
$1=_st(aBinding).__eq(self["@selectedBinding"]);
if(smalltalk.assert($1)){
$2=self;
return $2;
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
if(($receiver = $2) == nil || $receiver == undefined){
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
_st(_st(window)._jQuery_("body"))._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},smalltalk.HLKeyBinder)})},
args: [],
source: "setupEvents\x0a\x09(window jQuery: 'body') keydown: [ :event | self handleKeyDown: event ]",
messageSends: ["keydown:", "handleKeyDown:", "jQuery:"],
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



smalltalk.addClass('HLKeyBinderHelper', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "key_helper";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "cssClass\x0a\x09^ 'key_helper'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(".".__comma(self._cssClass()))._asJQuery())._remove();
self._showCog();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "hide\x0a\x09('.', self cssClass) asJQuery remove.\x0a\x09self showCog",
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "hideCog",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideCog",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "hideCog\x0a\x09'#cog-helper' asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

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
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "keyBinder\x0a\x09^ keyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder:",
category: 'accessing',
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyBinder"]=aKeyBinder;
return self}, function($ctx1) {$ctx1.fill(self,"keyBinder:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelper)})},
args: ["aKeyBinder"],
source: "keyBinder: aKeyBinder\x0a\x09keyBinder := aKeyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
category: 'keyBindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "registerBindings\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingGroup:on:",
category: 'rendering',
fn: function (aBindingGroup,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aBindingGroup)._activeBindings())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._key()).__lt(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderActionFor_html_(self._keyBinder(),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},smalltalk.HLKeyBinderHelper)})},
args: ["aBindingGroup", "html"],
source: "renderBindingGroup: aBindingGroup on: html\x0a\x09(aBindingGroup activeBindings \x0a    \x09sorted: [ :a :b | a key < b key ])\x0a        do: [ :each | each renderActionFor: self keyBinder html: html ]",
messageSends: ["do:", "renderActionFor:html:", "keyBinder", "sorted:", "<", "key", "activeBindings"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
args: ["html"],
source: "renderBindingOn: html\x0a\x09self selectedBinding renderOn: self html: html",
messageSends: ["renderOn:html:", "selectedBinding"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

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
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tag_("i"))._class_("icon-remove");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._keyBinder())._deactivate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
args: ["html"],
source: "renderCloseOn: html\x0a\x09html a\x0a\x09\x09class: 'close';\x0a\x09\x09with: [ (html tag: 'i') class: 'icon-remove' ];\x0a\x09\x09onClick: [ self keyBinder deactivate ]",
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

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
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self._keyBinder())._activate();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderCog",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "renderCog\x0a\x09[ :html |\x0a\x09\x09html \x0a\x09\x09\x09div id: 'cog-helper'; \x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09with: [ (html tag: 'i') class: 'icon-cog' ];\x0a\x09\x09\x09\x09\x09onClick: [ self keyBinder activate ] ] ]\x0a\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "id:", "div", "with:", "class:", "tag:", "a", "onClick:", "activate", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self;
_st($3)._renderSelectionOn_(html);
_st($3)._renderBindingOn_(html);
$4=_st($3)._renderCloseOn_(html);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: self cssClass; with: [\x0a      \x09self \x0a        \x09renderSelectionOn:html;\x0a          \x09renderBindingOn: html;\x0a\x09\x09\x09renderCloseOn: html ]",
messageSends: ["class:", "cssClass", "div", "with:", "renderSelectionOn:", "renderBindingOn:", "renderCloseOn:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectionOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
$1=_st(html)._span();
_st($1)._class_("selected");
$3=$1;
$5=_st(self._selectedBinding())._label();
if(($receiver = $5) == nil || $receiver == undefined){
$4="Action";
} else {
$4=$5;
};
$2=_st($3)._with_($4);
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectionOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
args: ["html"],
source: "renderSelectionOn: html\x0a\x09\x09html span \x0a        \x09class: 'selected'; \x0a            with: (self selectedBinding label ifNil: [ 'Action' ])",
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStart",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(window)._jQuery_("#helper"))._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._id_("helper");
$2=_st($1)._with_(_st("Press ".__comma(_st(self._keyBinder())._activationKeyLabel())).__comma(" to start"));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_("body"._asJQuery());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(window)._jQuery_("#helper"))._fadeOut_((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"renderStart",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "renderStart\x0a\x09(window jQuery: '#helper') remove.\x0a\x0a\x09[ :html |\x0a\x09\x09html div \x0a\x09\x09\x09id: 'helper';\x0a\x09\x09\x09with: 'Press ', self keyBinder activationKeyLabel, ' to start' ] appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09[ (window jQuery: '#helper') fadeOut: 1000 ] \x0a\x09\x09valueWithTimeout: 2000",
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery", "id:", "div", "with:", ",", "activationKeyLabel", "keyBinder", "valueWithTimeout:", "fadeOut:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

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
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "selectedBinding\x0a\x09^ self keyBinder selectedBinding",
messageSends: ["selectedBinding", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "show\x0a\x09self hideCog.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "showCog",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCog",{},smalltalk.HLKeyBinderHelper)})},
args: [],
source: "showCog\x0a\x09'#cog-helper' asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelper.klass)})},
args: ["aKeyBinder"],
source: "on: aKeyBinder\x0a\x09^ self new\x0a    \x09keyBinder: aKeyBinder;\x0a        yourself",
messageSends: ["keyBinder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper.klass);


smalltalk.addClass('HLRepeatingKeyBindingHandler', smalltalk.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'isKeyCurrentlyPressed'], 'Helios-KeyBindings');
smalltalk.HLRepeatingKeyBindingHandler.comment="##Usage\x0a\x0a    (HLRepeatingKeyBindingHandler forWidget: aWidget)\x0a        whileKeyPressed: keyCode do: [xxxx];\x0a        whileKeyPressed: anotherKey do: [yyy];\x0a        rebind\x0a\x0aPerforms an action on a key press, waits for 300 ms and then preforms the action every repeatInterval ms until the button is released";
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeys",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widget"])._bindKeyDown_up_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}),(function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyUp_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindKeys",{},smalltalk.HLRepeatingKeyBindingHandler)})},
args: [],
source: "bindKeys\x0a\x09widget bindKeyDown: [ :e | self handleKeyDown: e ] up: [ :e | self handleKeyUp: e ]",
messageSends: ["bindKeyDown:up:", "handleKeyDown:", "handleKeyUp:"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "delayBeforeStartingRepeatWithAction:",
category: 'actions',
fn: function (action){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@interval"]=self._startRepeatingAction_(action);
return self["@interval"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return $1;
}, function($ctx1) {$ctx1.fill(self,"delayBeforeStartingRepeatWithAction:",{action:action},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["action"],
source: "delayBeforeStartingRepeatWithAction: action\x0a\x09^ [ interval := self startRepeatingAction: action ] valueWithTimeout: 300",
messageSends: ["valueWithTimeout:", "startRepeatingAction:"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
category: 'events-processing',
fn: function (e){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keyBindings"])._keysAndValuesDo_((function(key,action){
return smalltalk.withContext(function($ctx2) {
return self._ifKey_wasPressedIn_thenDo_(key,e,action);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{e:e},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["e"],
source: "handleKeyDown: e\x0a\x09 keyBindings keysAndValuesDo: [ :key :action | \x0a\x09\x09self ifKey: key wasPressedIn: e thenDo: action ]",
messageSends: ["keysAndValuesDo:", "ifKey:wasPressedIn:thenDo:"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@isKeyCurrentlyPressed"]=false;
$1=self["@interval"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@interval"])._clearInterval();
};
$2=self["@delay"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@delay"])._clearTimeout();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp",{},smalltalk.HLRepeatingKeyBindingHandler)})},
args: [],
source: "handleKeyUp\x0a\x09isKeyCurrentlyPressed := false.\x0a\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09delay ifNotNil: [ delay clearTimeout ]",
messageSends: ["ifNotNil:", "clearInterval", "clearTimeout"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp:",
category: 'events-processing',
fn: function (e){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isKeyCurrentlyPressed"];
if(smalltalk.assert($1)){
self._handleKeyUp();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp:",{e:e},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["e"],
source: "handleKeyUp: e\x0a\x09isKeyCurrentlyPressed\x0a\x09\x09ifTrue: [ self handleKeyUp ] ",
messageSends: ["ifTrue:", "handleKeyUp"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "ifKey:wasPressedIn:thenDo:",
category: 'events-processing',
fn: function (key,e,action){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(e)._which()).__eq(key))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@isKeyCurrentlyPressed"]).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._whileTheKeyIsPressedDo_(action);
};
return self}, function($ctx1) {$ctx1.fill(self,"ifKey:wasPressedIn:thenDo:",{key:key,e:e,action:action},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["key", "e", "action"],
source: "ifKey: key wasPressedIn: e thenDo: action\x0a\x09(e which = key and: [ isKeyCurrentlyPressed = false ])\x0a\x09\x09ifTrue: [  self whileTheKeyIsPressedDo: action ]",
messageSends: ["ifTrue:", "whileTheKeyIsPressedDo:", "and:", "=", "which"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLRepeatingKeyBindingHandler.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@keyBindings"]=_st($Dictionary())._new();
self["@isKeyCurrentlyPressed"]=false;
self["@repeatInterval"]=(70);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLRepeatingKeyBindingHandler)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09keyBindings := Dictionary new.\x0a\x09isKeyCurrentlyPressed := false.\x0a\x09repeatInterval := 70.",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "rebindKeys",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._unbindKeys();
$2=_st($1)._bindKeys();
return self}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},smalltalk.HLRepeatingKeyBindingHandler)})},
args: [],
source: "rebindKeys\x0a\x09self unbindKeys;\x0a\x09\x09bindKeys",
messageSends: ["unbindKeys", "bindKeys"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
category: 'accessing',
fn: function (aMillisecondIntegerValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatInterval"]=aMillisecondIntegerValue;
return self}, function($ctx1) {$ctx1.fill(self,"repeatInterval:",{aMillisecondIntegerValue:aMillisecondIntegerValue},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["aMillisecondIntegerValue"],
source: "repeatInterval: aMillisecondIntegerValue \x0a\x09repeatInterval := aMillisecondIntegerValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "startRepeatingAction:",
category: 'actions',
fn: function (action){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(self["@widget"])._hasFocus();
if(smalltalk.assert($2)){
return _st(action)._value();
} else {
return self._handleKeyUp();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithInterval_(self["@repeatInterval"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startRepeatingAction:",{action:action},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["action"],
source: "startRepeatingAction: action\x0a\x09^ [ (widget hasFocus)\x0a\x09\x09ifTrue: [ action value ]\x0a\x09\x09ifFalse: [ self handleKeyUp ] ] valueWithInterval: repeatInterval",
messageSends: ["valueWithInterval:", "ifTrue:ifFalse:", "value", "handleKeyUp", "hasFocus"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeys",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widget"])._unbindKeyDownUp();
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},smalltalk.HLRepeatingKeyBindingHandler)})},
args: [],
source: "unbindKeys\x0a\x09widget unbindKeyDownUp",
messageSends: ["unbindKeyDownUp"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyPressed:do:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keyBindings"])._at_put_(aKey,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyPressed:do:",{aKey:aKey,aBlock:aBlock},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["aKey", "aBlock"],
source: "whileKeyPressed: aKey do: aBlock\x0a\x09keyBindings at: aKey put: aBlock",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTheKeyIsPressedDo:",
category: 'events-processing',
fn: function (action){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isKeyCurrentlyPressed"]=true;
_st(action)._value();
self["@delay"]=self._delayBeforeStartingRepeatWithAction_(action);
return self}, function($ctx1) {$ctx1.fill(self,"whileTheKeyIsPressedDo:",{action:action},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["action"],
source: "whileTheKeyIsPressedDo: action\x0a\x09isKeyCurrentlyPressed := true.\x0a\x09action value.\x0a\x09delay := self delayBeforeStartingRepeatWithAction: action",
messageSends: ["value", "delayBeforeStartingRepeatWithAction:"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLRepeatingKeyBindingHandler)})},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "forWidget:",
category: 'instance-creation',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._widget_(aWidget);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forWidget:",{aWidget:aWidget},smalltalk.HLRepeatingKeyBindingHandler.klass)})},
args: ["aWidget"],
source: "forWidget: aWidget\x0a\x09^self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLRepeatingKeyBindingHandler.klass);


