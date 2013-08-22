define("amber/Helios-KeyBindings", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber/Kernel-Objects", "amber/Helios-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-KeyBindings');
smalltalk.packages["Helios-KeyBindings"].transport = {"type":"amd","amdNamespace":"amber"};

smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"apply",{},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{aKey:aKey},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLBinding)})},
messageSends: ["label"]}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBinding)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{anInteger:anInteger},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
smalltalk.method({
selector: "shortcut",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._fromCharCode_(self._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shortcut",{},smalltalk.HLBinding)})},
messageSends: ["fromCharCode:", "key"]}),
smalltalk.HLBinding);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
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
messageSends: ["key:", "new", "label:", "yourself"]}),
smalltalk.HLBinding.klass);


smalltalk.addClass('HLBindingAction', smalltalk.HLBinding, ['command'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "apply",
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
messageSends: ["ifTrue:ifFalse:", "showWidget:", "inputWidget", "helper", "current", "executeCommand", "isInputRequired", "command"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@command"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
fn: function (aCommand){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]=aCommand;
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aCommand:aCommand},smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "executeCommand",
fn: function (){
var self=this;
function $HLKeyBinder(){return smalltalk.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._execute();
_st(_st($HLKeyBinder())._current())._deactivate();
return self}, function($ctx1) {$ctx1.fill(self,"executeCommand",{},smalltalk.HLBindingAction)})},
messageSends: ["execute", "command", "deactivate", "current"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._command())._input_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},smalltalk.HLBindingAction)})},
messageSends: ["input:", "command"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputBinding",
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
messageSends: ["label:", "inputLabel", "command", "new", "ghostText:", "displayLabel", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "execute", "yourself"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "inputWidget",
fn: function (){
var self=this;
function $HLBindingActionInputWidget(){return smalltalk.HLBindingActionInputWidget||(typeof HLBindingActionInputWidget=="undefined"?nil:HLBindingActionInputWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($HLBindingActionInputWidget())._new();
_st($2)._ghostText_(_st(self._command())._displayLabel());
_st($2)._defaultValue_(_st(self._command())._defaultInput());
_st($2)._inputCompletion_(_st(self._command())._inputCompletion());
_st($2)._callback_((function(value){
return smalltalk.withContext(function($ctx2) {
$3=self;
_st($3)._input_(value);
$4=_st($3)._executeCommand();
return $4;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputWidget",{},smalltalk.HLBindingAction)})},
messageSends: ["ghostText:", "displayLabel", "command", "new", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "executeCommand", "yourself"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._command())._isActive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingAction)})},
messageSends: ["isActive", "command"]}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "activeBindings",
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
messageSends: ["select:", "isActive", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._bindings())._add_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{aBinding:aBinding},smalltalk.HLBindingGroup)})},
messageSends: ["add:", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addActionKey:labelled:callback:",
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
messageSends: ["add:", "callback:", "on:labelled:", "yourself"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addGroupKey:labelled:",
fn: function (anInteger,aString){
var self=this;
function $HLBindingGroup(){return smalltalk.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
return smalltalk.withContext(function($ctx1) { 
self._add_(_st($HLBindingGroup())._on_labelled_(anInteger,aString));
return self}, function($ctx1) {$ctx1.fill(self,"addGroupKey:labelled:",{anInteger:anInteger,aString:aString},smalltalk.HLBindingGroup)})},
messageSends: ["add:", "on:labelled:"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
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
messageSends: ["detect:ifNone:", "=", "label", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "at:add:",
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
messageSends: ["at:", "ifNil:", "add:"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
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
messageSends: ["detect:ifNone:", "=", "key", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLBindingGroup.superclass.fn.prototype._displayLabel.apply(_st(self), [])).__comma("...");
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLBindingGroup)})},
messageSends: [",", "displayLabel"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._activeBindings())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingGroup)})},
messageSends: ["notEmpty", "activeBindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bindings())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._release();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBindingGroup)})},
messageSends: ["do:", "release", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isActive();
if(smalltalk.assert($1)){
_st(aBindingHelper)._renderBindingGroup_on_(self,html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},smalltalk.HLBindingGroup)})},
messageSends: ["ifTrue:", "renderBindingGroup:on:", "isActive"]}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLBindingActionInputWidget', smalltalk.HLWidget, ['input', 'callback', 'status', 'wrapper', 'ghostText', 'message', 'inputCompletion', 'defaultValue', 'messageTag'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
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
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clearStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("info");
self._message_("");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["status:", "message:", "refresh"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
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
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultValue"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultValue:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "errorStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("error");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["status:", "refresh"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
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
return self._errorStatus();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["on:do:", "one:do:", "clearStatus", "asJQuery", "input", "message:", "messageText", "errorStatus", "value:", "callback"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ghostText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ghostText",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText:",
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ghostText"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"ghostText:",{aText:aText},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inputCompletion"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"inputCompletion:",{aCollection:aCollection},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
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
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
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
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:", "class:", "status", "contents:", "message"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$6,$5,$7,$8,$3;
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
$5=_st($4)._onKeyDown_(_st((function(event){
return smalltalk.withContext(function($ctx3) {
$6=_st(_st(event)._which()).__eq((13));
if(smalltalk.assert($6)){
return self._evaluate_(_st(_st(self["@input"])._asJQuery())._val());
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2)})}))._yourself());
self["@input"]=$5;
self["@input"];
_st(_st(self["@input"])._asJQuery())._typeahead_(smalltalk.HashedCollection._from_(["source".__minus_gt(self._inputCompletion())]));
$7=_st(html)._span();
_st($7)._class_("help-inline");
_st($7)._with_(self._message());
$8=_st($7)._yourself();
self["@messageTag"]=$8;
return self["@messageTag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@input"])._asJQuery())._focus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "ghostText", "input", "value:", "defaultValue", "onKeyDown:", "yourself", "ifTrue:", "evaluate:", "val", "asJQuery", "=", "which", "typeahead:", "->", "inputCompletion", "message", "valueWithTimeout:", "focus"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
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
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.HLBindingActionInputWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingActionInputWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
fn: function (aStatus){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=aStatus;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{aStatus:aStatus},smalltalk.HLBindingActionInputWidget)})},
messageSends: []}),
smalltalk.HLBindingActionInputWidget);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._helper())._show();
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLKeyBinder)})},
messageSends: ["show", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (32);
}, function($ctx1) {$ctx1.fill(self,"activationKey",{},smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "activationKeyLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ctrl + space";
}, function($ctx1) {$ctx1.fill(self,"activationKeyLabel",{},smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "applyBinding:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aBinding)._isActive();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._selectBinding_(aBinding);
_st(aBinding)._apply();
return self}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding},smalltalk.HLKeyBinder)})},
messageSends: ["ifFalse:", "isActive", "selectBinding:", "apply"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "bindings",
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
messageSends: ["ifNil:", "defaultBindings"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "deactivate",
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
messageSends: ["ifNotNil:", "release", "hide", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBindings",
fn: function (){
var self=this;
var group;
function $HLCloseTabCommand(){return smalltalk.HLCloseTabCommand||(typeof HLCloseTabCommand=="undefined"?nil:HLCloseTabCommand)}
function $HLBindingGroup(){return smalltalk.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
function $HLSwitchTabCommand(){return smalltalk.HLSwitchTabCommand||(typeof HLSwitchTabCommand=="undefined"?nil:HLSwitchTabCommand)}
function $HLOpenCommand(){return smalltalk.HLOpenCommand||(typeof HLOpenCommand=="undefined"?nil:HLOpenCommand)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($HLBindingGroup())._new();
_st($1)._add_(_st(_st($HLCloseTabCommand())._new())._asBinding());
_st($1)._add_(_st(_st($HLSwitchTabCommand())._new())._asBinding());
$2=_st($1)._yourself();
group=$2;
_st($HLOpenCommand())._registerConcreteClassesOn_(group);
$3=group;
return $3;
}, function($ctx1) {$ctx1.fill(self,"defaultBindings",{group:group},smalltalk.HLKeyBinder)})},
messageSends: ["add:", "asBinding", "new", "yourself", "registerConcreteClassesOn:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "escapeKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (27);
}, function($ctx1) {$ctx1.fill(self,"escapeKey",{},smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "flushBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bindings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushBindings",{},smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleActiveKeyDown:",
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
messageSends: ["ifTrue:", "deactivate", "preventDefault", "or:", "and:", "ctrlKey", "=", "which", "escapeKey", "handleBindingFor:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleBindingFor:",
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
messageSends: ["atKey:", "which", "selectedBinding", "ifNotNil:", "applyBinding:", "preventDefault"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInactiveKeyDown:",
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
messageSends: ["ifTrue:", "activate", "preventDefault", "ctrlKey", "=", "activationKey", "which"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
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
messageSends: ["ifTrue:ifFalse:", "handleActiveKeyDown:", "handleInactiveKeyDown:", "isActive"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "helper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@helper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"helper",{},smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "on:", "renderStart", "renderCog"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(".".__comma(_st(self._helper())._cssClass()))._asJQuery())._is_(":visible");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLKeyBinder)})},
messageSends: ["is:", "asJQuery", ",", "cssClass", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectBinding:",
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
messageSends: ["ifTrue:", "=", "refresh", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
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
messageSends: ["ifNil:", "bindings"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEvents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("body"._asJQuery())._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},smalltalk.HLKeyBinder)})},
messageSends: ["keydown:", "handleKeyDown:", "asJQuery"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "systemIsMac",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(navigator)._platform())._match_("Mac");
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemIsMac",{},smalltalk.HLKeyBinder)})},
messageSends: ["match:", "platform"]}),
smalltalk.HLKeyBinder);


smalltalk.HLKeyBinder.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.HLKeyBinder.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLKeyBinder.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLKeyBinder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLKeyBinder.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLKeyBinder.klass);


smalltalk.addClass('HLKeyBinderHelperWidget', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "key_helper";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: []}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(".".__comma(self._cssClass()))._asJQuery())._remove();
self._showCog();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hideCog",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideCog",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["hide", "asJQuery"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keyBinder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: []}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyBinder"]=aKeyBinder;
return self}, function($ctx1) {$ctx1.fill(self,"keyBinder:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: []}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "mainId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "binding-helper-main";
}, function($ctx1) {$ctx1.fill(self,"mainId",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: []}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingActionFor:on:",
fn: function (aBinding,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._span();
_st($1)._class_("command");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("label");
$4=_st($3)._with_(_st(_st(aBinding)._shortcut())._asLowercase());
$4;
$5=_st(html)._a();
_st($5)._class_("action");
_st($5)._with_(_st(aBinding)._displayLabel());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._keyBinder())._applyBinding_(aBinding);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingActionFor:on:",{aBinding:aBinding,html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["class:", "span", "with:", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:", "keyBinder"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingGroup:on:",
fn: function (aBindingGroup,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aBindingGroup)._activeBindings())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._key()).__lt(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderBindingActionFor_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["do:", "renderBindingActionFor:on:", "sorted:", "<", "key", "activeBindings"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCloseOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCog",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderCog",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["appendToJQuery:", "asJQuery", "id:", "div", "with:", "class:", "tag:", "a", "onClick:", "activate", "keyBinder"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLabelOn_(html);
$3=_st(html)._div();
_st($3)._id_(self._mainId());
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderSelectedBindingOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
return self._renderCloseOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["class:", "cssClass", "div", "with:", "renderLabelOn:", "id:", "mainId", "renderSelectedBindingOn:", "renderCloseOn:"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLabelOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderLabelOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectedBindingOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectedBindingOn:",{html:html},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["renderOn:html:", "selectedBinding"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st("#helper"._asJQuery())._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._id_("helper");
$2=_st($1)._with_(_st("Press ".__comma(_st(self._keyBinder())._activationKeyLabel())).__comma(" to start"));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_("body"._asJQuery());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st("#helper"._asJQuery())._fadeOut_((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"renderStart",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["remove", "asJQuery", "appendToJQuery:", "id:", "div", "with:", ",", "activationKeyLabel", "keyBinder", "valueWithTimeout:", "fadeOut:"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keyBinder())._selectedBinding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["selectedBinding", "keyBinder"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showCog",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCog",{},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["show", "asJQuery"]}),
smalltalk.HLKeyBinderHelperWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showWidget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st("#".__comma(self._mainId()))._asJQuery())._empty();
_st(aWidget)._appendToJQuery_(_st("#".__comma(self._mainId()))._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"showWidget:",{aWidget:aWidget},smalltalk.HLKeyBinderHelperWidget)})},
messageSends: ["empty", "asJQuery", ",", "mainId", "appendToJQuery:"]}),
smalltalk.HLKeyBinderHelperWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["keyBinder:", "new", "yourself"]}),
smalltalk.HLKeyBinderHelperWidget.klass);


smalltalk.addClass('HLRepeatedKeyDownHandler', smalltalk.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'keyDown'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._bindKeyDown_keyUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}),(function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyUp();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"bindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["bindKeyDown:keyUp:", "handleKeyDown:", "handleKeyUp", "widget"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRepeatInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (70);
}, function($ctx1) {$ctx1.fill(self,"defaultRepeatInterval",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: []}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:forKey:action:",
fn: function (anEvent,anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEvent)._which()).__eq(anInteger))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._isKeyDown())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._whileKeyDownDo_(aBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:forKey:action:",{anEvent:anEvent,anInteger:anInteger,aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["ifTrue:", "whileKeyDownDo:", "and:", "not", "isKeyDown", "=", "which"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._keysAndValuesDo_((function(key,action){
return smalltalk.withContext(function($ctx2) {
return self._handleEvent_forKey_action_(anEvent,key,action);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["keysAndValuesDo:", "handleEvent:forKey:action:", "keyBindings"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isKeyDown();
if(smalltalk.assert($1)){
self["@keyDown"]=false;
self["@keyDown"];
$2=self["@interval"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@interval"])._clearInterval();
};
$3=self["@delay"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self["@delay"])._clearTimeout();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["ifTrue:", "ifNotNil:", "clearInterval", "clearTimeout", "isKeyDown"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "isKeyDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyDown"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKeyDown",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["ifNil:"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBindings",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyBindings"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyBindings"]=_st($Dictionary())._new();
$1=self["@keyBindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBindings",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "rebindKeys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._unbindKeys();
$2=_st($1)._bindKeys();
return self}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["unbindKeys", "bindKeys"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@repeatInterval"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._defaultRepeatInterval();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["ifNil:", "defaultRepeatInterval"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatInterval"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"repeatInterval:",{anInteger:anInteger},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: []}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "startRepeatingAction:",
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithInterval_(self._repeatInterval());
return $1;
}, function($ctx1) {$ctx1.fill(self,"startRepeatingAction:",{aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["valueWithInterval:", "repeatInterval", "ifTrue:ifFalse:", "value", "handleKeyUp", "hasFocus", "widget"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._unbindKeyDownKeyUp();
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["unbindKeyDownKeyUp", "widget"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDown:do:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keyBindings())._at_put_(aKey,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDown:do:",{aKey:aKey,aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["at:put:", "keyBindings"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyDownDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyDown"]=true;
_st(aBlock)._value();
self["@delay"]=_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@interval"]=self._startRepeatingAction_(aBlock);
return self["@interval"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyDownDo:",{aBlock:aBlock},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: ["value", "valueWithTimeout:", "startRepeatingAction:"]}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: []}),
smalltalk.HLRepeatedKeyDownHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLRepeatedKeyDownHandler)})},
messageSends: []}),
smalltalk.HLRepeatedKeyDownHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["widget:", "new", "yourself"]}),
smalltalk.HLRepeatedKeyDownHandler.klass);

});
