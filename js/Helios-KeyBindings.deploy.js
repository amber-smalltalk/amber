smalltalk.addPackage('Helios-KeyBindings');
smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBinding)})},
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
selector: "isFinal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFinal",{},smalltalk.HLBinding)})},
messageSends: []}),
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
selector: "renderActionFor:html:",
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
messageSends: ["class:", "span", "with:", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:"]}),
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
selector: "applyOn:",
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
messageSends: ["ifTrue:ifFalse:", "selectBinding:", "inputBinding", "execute", "command", "isInputRequired"]}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._command())._isInputRequired())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFinal",{},smalltalk.HLBindingAction)})},
messageSends: ["not", "isInputRequired", "command"]}),
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



smalltalk.addClass('HLBindingInput', smalltalk.HLBinding, ['input', 'callback', 'status', 'wrapper', 'binder', 'ghostText', 'isFinal', 'message', 'messageTag', 'inputCompletion', 'defaultValue'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isFinal_(true);
self._evaluate_(_st(_st(self._input())._asJQuery())._val());
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBindingInput)})},
messageSends: ["isFinal:", "evaluate:", "val", "asJQuery", "input"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aKey).__eq((13));
if(! smalltalk.assert($1)){
return nil;
};
return self}, function($ctx1) {$ctx1.fill(self,"atKey:",{aKey:aKey},smalltalk.HLBindingInput)})},
messageSends: ["ifFalse:", "="]}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "clearStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("info");
self._message_("");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},smalltalk.HLBindingInput)})},
messageSends: ["status:", "message:", "refresh"]}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultValue"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultValue:",{aString:aString},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "errorStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._status_("error");
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},smalltalk.HLBindingInput)})},
messageSends: ["status:", "refresh"]}),
smalltalk.HLBindingInput);

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
self._errorStatus();
return self._isFinal_(false);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.HLBindingInput)})},
messageSends: ["on:do:", "one:do:", "clearStatus", "asJQuery", "input", "message:", "messageText", "errorStatus", "isFinal:", "value:", "callback"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ghostText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ghostText",{},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "ghostText:",
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ghostText"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"ghostText:",{aText:aText},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inputCompletion"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"inputCompletion:",{aCollection:aCollection},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal",
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
messageSends: ["ifNil:", "isFinal"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "isFinal:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isFinal"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"isFinal:",{aBoolean:aBoolean},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

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
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:", "class:", "status", "contents:", "message"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=nil;
self["@wrapper"]=nil;
self["@binder"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:html:",
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
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "ghostText", "input", "value:", "defaultValue", "yourself", "typeahead:", "->", "inputCompletion", "asJQuery", "message", "valueWithTimeout:", "focus"]}),
smalltalk.HLBindingInput);

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
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.HLBindingInput)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingInput);

smalltalk.addMethod(
smalltalk.method({
selector: "status:",
fn: function (aStatus){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@status"]=aStatus;
return self}, function($ctx1) {$ctx1.fill(self,"status:",{aStatus:aStatus},smalltalk.HLBindingInput)})},
messageSends: []}),
smalltalk.HLBindingInput);



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
messageSends: ["ifFalse:", "isActive", "selectBinding:", "applyOn:", "ifTrue:", "deactivate", "isFinal"]}),
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
messageSends: ["addGroupKey:labelled:", "new", "add:", "asBinding", "yourself", "registerConcreteClassesOn:"]}),
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
function $HLKeyBinderHelper(){return smalltalk.HLKeyBinderHelper||(typeof HLKeyBinderHelper=="undefined"?nil:HLKeyBinderHelper)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLKeyBinder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@helper"]=_st($HLKeyBinderHelper())._on_(self);
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
_st(_st(window)._jQuery_("body"))._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},smalltalk.HLKeyBinder)})},
messageSends: ["keydown:", "handleKeyDown:", "jQuery:"]}),
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



smalltalk.addClass('HLKeyBinderHelper', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "key_helper";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(".".__comma(self._cssClass()))._asJQuery())._remove();
self._showCog();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "hideCog",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideCog",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["hide", "asJQuery"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keyBinder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyBinder"]=aKeyBinder;
return self}, function($ctx1) {$ctx1.fill(self,"keyBinder:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

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
return _st(each)._renderActionFor_html_(self._keyBinder(),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},smalltalk.HLKeyBinderHelper)})},
messageSends: ["do:", "renderActionFor:html:", "keyBinder", "sorted:", "<", "key", "activeBindings"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBindingOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
messageSends: ["renderOn:html:", "selectedBinding"]}),
smalltalk.HLKeyBinderHelper);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"]}),
smalltalk.HLKeyBinderHelper);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderCog",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["appendToJQuery:", "asJQuery", "id:", "div", "with:", "class:", "tag:", "a", "onClick:", "activate", "keyBinder"]}),
smalltalk.HLKeyBinderHelper);

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
$3=self;
_st($3)._renderSelectionOn_(html);
_st($3)._renderBindingOn_(html);
$4=_st($3)._renderCloseOn_(html);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLKeyBinderHelper)})},
messageSends: ["class:", "cssClass", "div", "with:", "renderSelectionOn:", "renderBindingOn:", "renderCloseOn:"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectionOn:",
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
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStart",
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
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery", "id:", "div", "with:", ",", "activationKeyLabel", "keyBinder", "valueWithTimeout:", "fadeOut:"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keyBinder())._selectedBinding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["selectedBinding", "keyBinder"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
smalltalk.method({
selector: "showCog",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#cog-helper"._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCog",{},smalltalk.HLKeyBinderHelper)})},
messageSends: ["show", "asJQuery"]}),
smalltalk.HLKeyBinderHelper);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder},smalltalk.HLKeyBinderHelper.klass)})},
messageSends: ["keyBinder:", "new", "yourself"]}),
smalltalk.HLKeyBinderHelper.klass);


smalltalk.addClass('HLRepeatingKeyBindingHandler', smalltalk.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'isKeyCurrentlyPressed'], 'Helios-KeyBindings');
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeys",
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
messageSends: ["bindKeyDown:up:", "handleKeyDown:", "handleKeyUp:"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "delayBeforeStartingRepeatWithAction:",
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
messageSends: ["valueWithTimeout:", "startRepeatingAction:"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
fn: function (e){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keyBindings"])._keysAndValuesDo_((function(key,action){
return smalltalk.withContext(function($ctx2) {
return self._ifKey_wasPressedIn_thenDo_(key,e,action);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{e:e},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["keysAndValuesDo:", "ifKey:wasPressedIn:thenDo:"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp",
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
messageSends: ["ifNotNil:", "clearInterval", "clearTimeout"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp:",
fn: function (e){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isKeyCurrentlyPressed"];
if(smalltalk.assert($1)){
self._handleKeyUp();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp:",{e:e},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["ifTrue:", "handleKeyUp"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "ifKey:wasPressedIn:thenDo:",
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
messageSends: ["ifTrue:", "whileTheKeyIsPressedDo:", "and:", "=", "which"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLRepeatingKeyBindingHandler.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@keyBindings"]=_st($Dictionary())._new();
self["@isKeyCurrentlyPressed"]=false;
self["@repeatInterval"]=(70);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["initialize", "new"]}),
smalltalk.HLRepeatingKeyBindingHandler);

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
return self}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["unbindKeys", "bindKeys"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
fn: function (aMillisecondIntegerValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatInterval"]=aMillisecondIntegerValue;
return self}, function($ctx1) {$ctx1.fill(self,"repeatInterval:",{aMillisecondIntegerValue:aMillisecondIntegerValue},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: []}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "startRepeatingAction:",
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
messageSends: ["valueWithInterval:", "ifTrue:ifFalse:", "value", "handleKeyUp", "hasFocus"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widget"])._unbindKeyDownUp();
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["unbindKeyDownUp"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileKeyPressed:do:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keyBindings"])._at_put_(aKey,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whileKeyPressed:do:",{aKey:aKey,aBlock:aBlock},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["at:put:"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTheKeyIsPressedDo:",
fn: function (action){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isKeyCurrentlyPressed"]=true;
_st(action)._value();
self["@delay"]=self._delayBeforeStartingRepeatWithAction_(action);
return self}, function($ctx1) {$ctx1.fill(self,"whileTheKeyIsPressedDo:",{action:action},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: ["value", "delayBeforeStartingRepeatWithAction:"]}),
smalltalk.HLRepeatingKeyBindingHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLRepeatingKeyBindingHandler)})},
messageSends: []}),
smalltalk.HLRepeatingKeyBindingHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "forWidget:",
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
messageSends: ["widget:", "new", "yourself"]}),
smalltalk.HLRepeatingKeyBindingHandler.klass);


