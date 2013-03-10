smalltalk.addPackage('Helios-KeyBindings');
smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder}, smalltalk.HLBinding)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{}, smalltalk.HLBinding)})},
messageSends: ["label"]}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBinding)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBindingAction",{}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@key"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{anInteger:anInteger}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_renderOn_html_",
smalltalk.method({
selector: "renderOn:html:",
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html}, smalltalk.HLBinding)})},
messageSends: []}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_shortcut",
smalltalk.method({
selector: "shortcut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._fromCharCode_(_st(self)._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shortcut",{}, smalltalk.HLBinding)})},
messageSends: ["fromCharCode:", "key"]}),
smalltalk.HLBinding);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
fn: function (anInteger,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._key_(anInteger);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{anInteger:anInteger,aString:aString}, smalltalk.HLBinding.klass)})},
messageSends: ["key:", "new", "label:", "yourself"]}),
smalltalk.HLBinding.klass);


smalltalk.addClass('HLBindingAction', smalltalk.HLBinding, ['callback', 'activeBlock'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_activeBlock",
smalltalk.method({
selector: "activeBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@activeBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@activeBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$1=self["@activeBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBlock",{},smalltalk.HLBindingAction)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_activeBlock_",
smalltalk.method({
selector: "activeBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@activeBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"activeBlock:",{aBlock:aBlock},smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._isActive();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(aKeyBinder)._applyBindingAction_(self);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBindingAction)})},
messageSends: ["ifFalse:", "isActive", "applyBindingAction:"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{}, smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock}, smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._activeBlock())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingAction)})},
messageSends: ["value", "activeBlock"]}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBindingAction",{}, smalltalk.HLBindingAction)})},
messageSends: []}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_activeBindings",
smalltalk.method({
selector: "activeBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bindings())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isActive();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeBindings",{},smalltalk.HLBindingGroup)})},
messageSends: ["select:", "isActive", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bindings())._add_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{aBinding:aBinding}, smalltalk.HLBindingGroup)})},
messageSends: ["add:", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addActionKey_labelled_callback_",
smalltalk.method({
selector: "addActionKey:labelled:callback:",
fn: function (anInteger,aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_(anInteger,aString);
_st($1)._callback_(aBlock);
$2=_st($1)._yourself();
_st(self)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addActionKey:labelled:callback:",{anInteger:anInteger,aString:aString,aBlock:aBlock}, smalltalk.HLBindingGroup)})},
messageSends: ["add:", "callback:", "on:labelled:", "yourself"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addActionKey_labelled_command_",
smalltalk.method({
selector: "addActionKey:labelled:command:",
fn: function (anInteger,aString,aCommand){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_(anInteger,aString);
_st($1)._command_(aCommand);
$2=_st($1)._yourself();
_st(self)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addActionKey:labelled:command:",{anInteger:anInteger,aString:aString,aCommand:aCommand}, smalltalk.HLBindingGroup)})},
messageSends: ["add:", "command:", "on:labelled:", "yourself"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addGroupKey_labelled_",
smalltalk.method({
selector: "addGroupKey:labelled:",
fn: function (anInteger,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._add_(_st((smalltalk.HLBindingGroup || HLBindingGroup))._on_labelled_(anInteger,aString));
return self}, function($ctx1) {$ctx1.fill(self,"addGroupKey:labelled:",{anInteger:anInteger,aString:aString}, smalltalk.HLBindingGroup)})},
messageSends: ["add:", "on:labelled:"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._isActive();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(aKeyBinder)._applyBindingGroup_(self);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aKeyBinder:aKeyBinder},smalltalk.HLBindingGroup)})},
messageSends: ["ifFalse:", "isActive", "applyBindingGroup:"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._label()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString}, smalltalk.HLBindingGroup)})},
messageSends: ["detect:ifNone:", "=", "label", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_atKey_",
smalltalk.method({
selector: "atKey:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._bindings())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._key()).__eq(anInteger);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anInteger:anInteger}, smalltalk.HLBindingGroup)})},
messageSends: ["detect:ifNone:", "=", "key", "bindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@bindings"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@bindings"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{}, smalltalk.HLBindingGroup)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLBinding.fn.prototype._displayLabel.apply(_st(self), [])).__comma("...");
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{}, smalltalk.HLBindingGroup)})},
messageSends: [",", "displayLabel"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._activeBindings())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLBindingGroup)})},
messageSends: ["notEmpty", "activeBindings"]}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{}, smalltalk.HLBindingGroup)})},
messageSends: []}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_renderOn_html_",
smalltalk.method({
selector: "renderOn:html:",
fn: function (aBindingHelper,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isActive();
if(smalltalk.assert($1)){
_st(aBindingHelper)._renderBindingGroup_on_(self,html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},smalltalk.HLBindingGroup)})},
messageSends: ["ifTrue:", "renderBindingGroup:on:", "isActive"]}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'active', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@active"]=true;
_st(_st(self)._helper())._show();
return self}, function($ctx1) {$ctx1.fill(self,"activate",{}, smalltalk.HLKeyBinder)})},
messageSends: ["show", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_activationKey",
smalltalk.method({
selector: "activationKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (32);
}, function($ctx1) {$ctx1.fill(self,"activationKey",{}, smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_activationKeyLabel",
smalltalk.method({
selector: "activationKeyLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "ctrl + space";
}, function($ctx1) {$ctx1.fill(self,"activationKeyLabel",{}, smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_applyBinding_",
smalltalk.method({
selector: "applyBinding:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBinding)._applyOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding}, smalltalk.HLKeyBinder)})},
messageSends: ["applyOn:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_applyBindingAction_",
smalltalk.method({
selector: "applyBindingAction:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aBinding)._callback())._value();
_st(self)._deactivate();
return self}, function($ctx1) {$ctx1.fill(self,"applyBindingAction:",{aBinding:aBinding}, smalltalk.HLKeyBinder)})},
messageSends: ["value", "callback", "deactivate"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_applyBindingGroup_",
smalltalk.method({
selector: "applyBindingGroup:",
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedBinding"]=aBinding;
_st(_st(self)._helper())._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"applyBindingGroup:",{aBinding:aBinding}, smalltalk.HLKeyBinder)})},
messageSends: ["refresh", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@bindings"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@bindings"]=_st(self)._defaulBindings();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindings",{}, smalltalk.HLKeyBinder)})},
messageSends: ["ifNil:", "defaulBindings"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_deactivate",
smalltalk.method({
selector: "deactivate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@active"]=false;
self["@selectedBinding"]=nil;
_st(_st(self)._helper())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"deactivate",{}, smalltalk.HLKeyBinder)})},
messageSends: ["hide", "helper"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_defaulBindings",
smalltalk.method({
selector: "defaulBindings",
fn: function (){
var self=this;
var group;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st((smalltalk.HLBindingGroup || HLBindingGroup))._new();
_st($1)._addGroupKey_labelled_((79),"Open");
_st($1)._addGroupKey_labelled_((86),"View");
_st($1)._add_(_st(_st((smalltalk.HLCloseTabCommand || HLCloseTabCommand))._new())._asBinding());
$2=_st($1)._yourself();
group=$2;
_st(_st((smalltalk.HLOpenCommand || HLOpenCommand))._allSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(group)._at_(_st(each)._bindingGroup()))._add_(_st(_st(each)._new())._asBinding());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$3=group;
return $3;
}, function($ctx1) {$ctx1.fill(self,"defaulBindings",{group:group}, smalltalk.HLKeyBinder)})},
messageSends: ["addGroupKey:labelled:", "new", "add:", "asBinding", "yourself", "do:", "at:", "bindingGroup", "allSubclasses"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_escapeKey",
smalltalk.method({
selector: "escapeKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (27);
}, function($ctx1) {$ctx1.fill(self,"escapeKey",{}, smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_flushBindings",
smalltalk.method({
selector: "flushBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@bindings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushBindings",{}, smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleActiveKeyDown_",
smalltalk.method({
selector: "handleActiveKeyDown:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(event)._which()).__eq(_st(self)._escapeKey()))._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(event)._which()).__eq((71)))._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(event)._ctrlKey();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self)._deactivate();
_st(event)._preventDefault();
return false;
};
$2=_st(self)._handleBindingFor_(event);
return $2;
}, function($ctx1) {$ctx1.fill(self,"handleActiveKeyDown:",{event:event}, smalltalk.HLKeyBinder)})},
messageSends: ["ifTrue:", "deactivate", "preventDefault", "or:", "and:", "ctrlKey", "=", "which", "escapeKey", "handleBindingFor:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleBindingFor_",
smalltalk.method({
selector: "handleBindingFor:",
fn: function (anEvent){
var self=this;
var binding;
return smalltalk.withContext(function($ctx1) { var $1;
binding=_st(_st(self)._selectedBinding())._atKey_(_st(anEvent)._which());
$1=binding;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._applyBinding_(binding);
_st(anEvent)._preventDefault();
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"handleBindingFor:",{anEvent:anEvent,binding:binding}, smalltalk.HLKeyBinder)})},
messageSends: ["atKey:", "which", "selectedBinding", "ifNotNil:", "applyBinding:", "preventDefault"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleInactiveKeyDown_",
smalltalk.method({
selector: "handleInactiveKeyDown:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(event)._which()).__eq(_st(self)._activationKey());
if(smalltalk.assert($1)){
$2=_st(event)._ctrlKey();
if(smalltalk.assert($2)){
_st(self)._activate();
_st(event)._preventDefault();
return false;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleInactiveKeyDown:",{event:event}, smalltalk.HLKeyBinder)})},
messageSends: ["ifTrue:", "activate", "preventDefault", "ctrlKey", "=", "activationKey", "which"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._isActive();
if(smalltalk.assert($2)){
$1=_st(self)._handleActiveKeyDown_(event);
} else {
$1=_st(self)._handleInactiveKeyDown_(event);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{event:event}, smalltalk.HLKeyBinder)})},
messageSends: ["ifTrue:ifFalse:", "handleActiveKeyDown:", "handleInactiveKeyDown:", "isActive"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_helper",
smalltalk.method({
selector: "helper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@helper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"helper",{}, smalltalk.HLKeyBinder)})},
messageSends: []}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@helper"]=_st((smalltalk.HLKeyBinderHelper || HLKeyBinderHelper))._on_(self);
_st(self["@helper"])._renderStart();
self["@active"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLKeyBinder)})},
messageSends: ["initialize", "on:", "renderStart"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@active"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{}, smalltalk.HLKeyBinder)})},
messageSends: ["ifNil:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedBinding"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._bindings();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{}, smalltalk.HLKeyBinder)})},
messageSends: ["ifNil:", "bindings"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_setupEvents",
smalltalk.method({
selector: "setupEvents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_("body"))._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {return _st(self)._handleKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{}, smalltalk.HLKeyBinder)})},
messageSends: ["keydown:", "handleKeyDown:", "jQuery:"]}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_systemIsMac",
smalltalk.method({
selector: "systemIsMac",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(navigator)._platform())._match_("Mac");
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemIsMac",{}, smalltalk.HLKeyBinder)})},
messageSends: ["match:", "platform"]}),
smalltalk.HLKeyBinder);



smalltalk.addClass('HLKeyBinderHelper', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "key_helper";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(".").__comma(_st(self)._cssClass()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["remove", "asJQuery", ",", "cssClass"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@keyBinder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder_",
smalltalk.method({
selector: "keyBinder:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@keyBinder"]=aKeyBinder;
return self}, function($ctx1) {$ctx1.fill(self,"keyBinder:",{aKeyBinder:aKeyBinder}, smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: []}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderBindingGroup_on_",
smalltalk.method({
selector: "renderBindingGroup:on:",
fn: function (aBindingGroup,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
_st(_st(_st(aBindingGroup)._activeBindings())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._key()).__lt(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._span();
_st($1)._class_("command");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {$3=_st(html)._span();
_st($3)._class_("label");
$4=_st($3)._with_(_st(_st(each)._shortcut())._asLowercase());
$4;
$5=_st(html)._a();
_st($5)._class_("action");
_st($5)._with_(_st(each)._displayLabel());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(_st(self)._keyBinder())._applyBinding_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},smalltalk.HLKeyBinderHelper)})},
messageSends: ["do:", "class:", "span", "with:", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:", "keyBinder", "sorted:", "<", "key", "activeBindings"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderBindingOn_",
smalltalk.method({
selector: "renderBindingOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._selectedBinding())._renderOn_html_(self,html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBindingOn:",{html:html}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["renderOn:html:", "selectedBinding"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_(_st(self)._cssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=self;
_st($3)._renderSelectionOn_(html);
$4=_st($3)._renderBindingOn_(html);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["class:", "cssClass", "div", "with:", "renderSelectionOn:", "renderBindingOn:"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderSelectionOn_",
smalltalk.method({
selector: "renderSelectionOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$4,$2;
$1=_st(html)._span();
_st($1)._class_("selected");
$3=$1;
$5=_st(_st(self)._selectedBinding())._label();
if(($receiver = $5) == nil || $receiver == undefined){
$4="Action";
} else {
$4=$5;
};
$2=_st($3)._with_($4);
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectionOn:",{html:html}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderStart",
smalltalk.method({
selector: "renderStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._div();
_st($1)._id_("keybinding-start-helper");
$2=_st($1)._with_(_st(_st("Press ").__comma(_st(_st(self)._keyBinder())._activationKeyLabel())).__comma(" to start"));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st("body")._asJQuery());
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(window)._jQuery_("#keybinding-start-helper"))._fadeOut_((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"renderStart",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["appendToJQuery:", "asJQuery", "id:", "div", "with:", ",", "activationKeyLabel", "keyBinder", "valueWithTimeout:", "fadeOut:", "jQuery:"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._keyBinder())._selectedBinding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["selectedBinding", "keyBinder"]}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{}, smalltalk.HLKeyBinderHelper)})},
messageSends: ["appendToJQuery:", "asJQuery"]}),
smalltalk.HLKeyBinderHelper);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aKeyBinder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._keyBinder_(aKeyBinder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder}, smalltalk.HLKeyBinderHelper.klass)})},
messageSends: ["keyBinder:", "new", "yourself"]}),
smalltalk.HLKeyBinderHelper.klass);


