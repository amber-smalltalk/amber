smalltalk.addPackage('Helios-KeyBindings', {});
smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBindingAction\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBindingGroup\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return self["@key"];
},
args: [],
source: "key\x0a\x09^ key",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@key"]=anInteger;
return self},
args: ["anInteger"],
source: "key: anInteger\x0a\x09key := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return self["@label"];
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_shortcut",
smalltalk.method({
selector: "shortcut",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_fromCharCode_",[smalltalk.send(self,"_key",[])]);
return $1;
},
args: [],
source: "shortcut\x0a\x09^ String fromCharCode: self key",
messageSends: ["fromCharCode:", "key"],
referencedClasses: ["String"]
}),
smalltalk.HLBinding);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
category: 'instance creation',
fn: function (anInteger,aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_key_",[anInteger]);
smalltalk.send($2,"_label_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anInteger", "aString"],
source: "on: anInteger labelled: aString\x0a\x09^ self new\x0a    \x09key: anInteger;\x0a        label: aString;\x0a        yourself",
messageSends: ["key:", "new", "label:", "yourself"],
referencedClasses: []
}),
smalltalk.HLBinding.klass);


smalltalk.addClass('HLBindingAction', smalltalk.HLBinding, ['callback'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return self["@callback"];
},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBindingAction\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aBinding){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_add_",[aBinding]);
return $1;
},
args: ["aBinding"],
source: "add: aBinding\x0a\x09^ self bindings add: aBinding",
messageSends: ["add:", "bindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addActionKey_labelled_callback_",
smalltalk.method({
selector: "addActionKey:labelled:callback:",
category: 'accessing',
fn: function (anInteger,aString,aBlock){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.HLBindingAction || HLBindingAction),"_on_labelled_",[anInteger,aString]);
smalltalk.send($1,"_callback_",[aBlock]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self,"_add_",[$2]);
return self},
args: ["anInteger", "aString", "aBlock"],
source: "addActionKey: anInteger labelled: aString callback: aBlock\x0a\x09self add: ((HLBindingAction on: anInteger labelled: aString)\x0a    \x09callback: aBlock;\x0a        yourself)",
messageSends: ["add:", "callback:", "on:labelled:", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addGroupKey_labelled_",
smalltalk.method({
selector: "addGroupKey:labelled:",
category: 'accessing',
fn: function (anInteger,aString){
var self=this;
smalltalk.send(self,"_add_",[smalltalk.send((smalltalk.HLBindingGroup || HLBindingGroup),"_on_labelled_",[anInteger,aString])]);
return self},
args: ["anInteger", "aString"],
source: "addGroupKey: anInteger labelled: aString\x0a\x09self add: (HLBindingGroup on: anInteger labelled: aString)",
messageSends: ["add:", "on:labelled:"],
referencedClasses: ["HLBindingGroup"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_detect_ifNone_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_label",[]),"__eq",[aString]);
}),(function(){
return nil;
})]);
return $1;
},
args: ["aString"],
source: "at: aString\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each label = aString ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "label", "bindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_atkey_",
smalltalk.method({
selector: "atkey:",
category: 'accessing',
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_detect_ifNone_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_key",[]),"__eq",[anInteger]);
}),(function(){
return nil;
})]);
return $1;
},
args: ["anInteger"],
source: "atkey: anInteger\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each key = anInteger ]\x0a      \x09ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "key", "bindings"],
referencedClasses: []
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@bindings"]) == nil || $receiver == undefined){
self["@bindings"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
$1=self["@bindings"];
} else {
$1=self["@bindings"];
};
return $1;
},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBindingGroup\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'active', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
category: 'actions',
fn: function (){
var self=this;
self["@active"]=true;
smalltalk.send(smalltalk.send(self,"_helper",[]),"_show",[]);
return self},
args: [],
source: "activate\x0a\x09active := true.\x0a\x09self helper show",
messageSends: ["show", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_applyBinding_",
smalltalk.method({
selector: "applyBinding:",
category: 'actions',
fn: function (aBinding){
var self=this;
var $1;
$1=smalltalk.send(aBinding,"_isBindingGroup",[]);
if(smalltalk.assert($1)){
self["@selectedBinding"]=aBinding;
self["@selectedBinding"];
smalltalk.send(smalltalk.send(self,"_helper",[]),"_refresh",[]);
} else {
smalltalk.send(smalltalk.send(aBinding,"_callback",[]),"_value",[]);
smalltalk.send(self,"_deactivate",[]);
};
return self},
args: ["aBinding"],
source: "applyBinding: aBinding\x0a    aBinding isBindingGroup\x0a    \x09ifTrue: [\x0a\x09\x09\x09selectedBinding := aBinding.\x0a    \x09\x09self helper refresh ]\x0a        ifFalse: [ \x0a\x09\x09\x09aBinding callback value.\x0a\x09\x09\x09self deactivate ]",
messageSends: ["ifTrue:ifFalse:", "refresh", "helper", "value", "callback", "deactivate", "isBindingGroup"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@bindings"]) == nil || $receiver == undefined){
self["@bindings"]=smalltalk.send((smalltalk.HLBindingGroup || HLBindingGroup),"_new",[]);
$1=self["@bindings"];
} else {
$1=self["@bindings"];
};
return $1;
},
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := HLBindingGroup new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLBindingGroup"]
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_deactivate",
smalltalk.method({
selector: "deactivate",
category: 'actions',
fn: function (){
var self=this;
self["@active"]=false;
self["@selectedBinding"]=nil;
smalltalk.send(smalltalk.send(self,"_helper",[]),"_hide",[]);
return self},
args: [],
source: "deactivate\x0a\x09active := false.\x0a    selectedBinding := nil.\x0a\x09self helper hide",
messageSends: ["hide", "helper"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_flushBindings",
smalltalk.method({
selector: "flushBindings",
category: 'actions',
fn: function (){
var self=this;
self["@bindings"]=nil;
self["@helper"]=nil;
return self},
args: [],
source: "flushBindings\x0a\x09bindings := nil.\x0a    helper := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleBindingFor_",
smalltalk.method({
selector: "handleBindingFor:",
category: 'events',
fn: function (anEvent){
var self=this;
var binding;
binding=smalltalk.send(smalltalk.send(self,"_selectedBinding",[]),"_atKey_",[smalltalk.send(anEvent,"_which",[])]);
if(($receiver = binding) == nil || $receiver == undefined){
binding;
} else {
smalltalk.send(self,"_applyBinding_",[binding]);
smalltalk.send(anEvent,"_preventDefault",[]);
return false;
};
return self},
args: ["anEvent"],
source: "handleBindingFor: anEvent\x0a\x09| binding |\x0a    binding := self selectedBinding atKey: anEvent which.\x0a    \x0a    binding ifNotNil: [ \x0a    \x09self applyBinding: binding.\x0a\x09\x09anEvent preventDefault.\x0a\x09\x09^ false ]",
messageSends: ["atKey:", "which", "selectedBinding", "ifNotNil:", "applyBinding:", "preventDefault"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleBindingKey_",
smalltalk.method({
selector: "handleBindingKey:",
category: 'events',
fn: function (anInteger){
var self=this;
return self},
args: ["anInteger"],
source: "handleBindingKey: anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
category: 'events',
fn: function (event){
var self=this;
var $1,$2;
$1=smalltalk.send(self,"_isActive",[]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_handleBindingKey_",[smalltalk.send(event,"_which",[])]);
} else {
$2=smalltalk.send(smalltalk.send(event,"_which",[]),"__eq",[smalltalk.send(self,"_modifierKey",[])]);
if(smalltalk.assert($2)){
smalltalk.send(self,"_activate",[]);
smalltalk.send(event,"_preventDefault",[]);
return false;
};
};
return self},
args: ["event"],
source: "handleKeyDown: event\x0a\x09self isActive\x0a    \x09ifTrue: [ \x0a        \x09self handleBindingKey: event which ]\x0a      \x09ifFalse: [\x0a          \x09event which = self modifierKey ifTrue: [\x0a\x09\x09\x09\x09self activate. \x0a                event preventDefault. \x0a                ^ false ] ]",
messageSends: ["ifTrue:ifFalse:", "handleBindingKey:", "which", "ifTrue:", "activate", "preventDefault", "=", "modifierKey", "isActive"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleKeyUp_",
smalltalk.method({
selector: "handleKeyUp:",
category: 'events',
fn: function (event){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(event,"_which",[]),"__eq",[smalltalk.send(self,"_modifierKey",[])]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_deactivate",[]);
};
return self},
args: ["event"],
source: "handleKeyUp: event\x0a\x09event which = self modifierKey ifTrue: [\x0a      \x09self deactivate ]",
messageSends: ["ifTrue:", "deactivate", "=", "modifierKey", "which"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_helper",
smalltalk.method({
selector: "helper",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@helper"]) == nil || $receiver == undefined){
self["@helper"]=smalltalk.send((smalltalk.HLKeyBinderHelper || HLKeyBinderHelper),"_on_",[self]);
$1=self["@helper"];
} else {
$1=self["@helper"];
};
return $1;
},
args: [],
source: "helper\x0a\x09^ helper ifNil: [ helper := HLKeyBinderHelper on: self ]",
messageSends: ["ifNil:", "on:"],
referencedClasses: ["HLKeyBinderHelper"]
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@active"]=false;
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    active := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@active"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@active"];
};
return $1;
},
args: [],
source: "isActive\x0a\x09^ active ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_modifierKey",
smalltalk.method({
selector: "modifierKey",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
if(($receiver = self["@modifierKey"]) == nil || $receiver == undefined){
$2=smalltalk.send(self["@modifierKey"],"__eq",[smalltalk.send(smalltalk.send(navigator,"_platform",[]),"_match_",["Mac"])]);
if(smalltalk.assert($2)){
$1=(91);
} else {
$1=(17);
};
} else {
$1=self["@modifierKey"];
};
return $1;
},
args: [],
source: "modifierKey\x0a\x09^ modifierKey ifNil: [\x0a\x09\x09modifierKey = (navigator platform match: 'Mac')\x0a\x09\x09\x09ifTrue: [ 91 ]\x0a\x09\x09\x09ifFalse: [ 17 ] ]",
messageSends: ["ifNil:", "ifTrue:ifFalse:", "=", "match:", "platform"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@selectedBinding"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_bindings",[]);
} else {
$1=self["@selectedBinding"];
};
return $1;
},
args: [],
source: "selectedBinding\x0a\x09^ selectedBinding ifNil: [ self bindings ]",
messageSends: ["ifNil:", "bindings"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_setupEvents",
smalltalk.method({
selector: "setupEvents",
category: 'events',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",["body"]),"_keydown_",[(function(event){
return smalltalk.send(self,"_handleKeyDown_",[event]);
})]);
smalltalk.send(smalltalk.send(window,"_jQuery_",["body"]),"_keyup_",[(function(event){
return smalltalk.send(self,"_handleKeyUp_",[event]);
})]);
return self},
args: [],
source: "setupEvents\x0a\x09(window jQuery: 'body') keydown: [ :event | self handleKeyDown: event ].\x0a    (window jQuery: 'body') keyup: [ :event | self handleKeyUp: event ]",
messageSends: ["keydown:", "handleKeyDown:", "jQuery:", "keyup:", "handleKeyUp:"],
referencedClasses: []
}),
smalltalk.HLKeyBinder);



smalltalk.addClass('HLKeyBinderHelper', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",[".key_helper"]),"_remove",[]);
return self},
args: [],
source: "hide\x0a\x09(window jQuery: '.key_helper') remove",
messageSends: ["remove", "jQuery:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
category: 'accessing',
fn: function (){
var self=this;
return self["@keyBinder"];
},
args: [],
source: "keyBinder\x0a\x09^ keyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder_",
smalltalk.method({
selector: "keyBinder:",
category: 'accessing',
fn: function (aKeyBinder){
var self=this;
self["@keyBinder"]=aKeyBinder;
return self},
args: ["aKeyBinder"],
source: "keyBinder: aKeyBinder\x0a\x09keyBinder := aKeyBinder",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
category: 'keyBindings',
fn: function (){
var self=this;
return self},
args: [],
source: "registerBindings\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderBindingsOn_",
smalltalk.method({
selector: "renderBindingsOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$4,$5,$6,$2;
smalltalk.send(smalltalk.send(smalltalk.send(self,"_selectedBinding",[]),"_bindings",[]),"_do_",[(function(each){
$1=smalltalk.send(html,"_span",[]);
smalltalk.send($1,"_class_",["command"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_span",[]);
smalltalk.send($3,"_class_",["label"]);
$4=smalltalk.send($3,"_with_",[smalltalk.send(smalltalk.send(each,"_shortcut",[]),"_asLowercase",[])]);
$4;
$5=smalltalk.send(html,"_span",[]);
smalltalk.send($5,"_class_",["action"]);
$6=smalltalk.send($5,"_with_",[smalltalk.send(each,"_label",[])]);
return $6;
})]);
return $2;
})]);
return self},
args: ["html"],
source: "renderBindingsOn: html\x0a\x09self selectedBinding bindings do: [ :each |\x0a\x09\x09html span class: 'command'; with: [\x0a\x09\x09\x09html span class: 'label'; with: each shortcut asLowercase.\x0a  \x09\x09\x09html span class: 'action'; with: each label ] ]",
messageSends: ["do:", "class:", "span", "with:", "asLowercase", "shortcut", "label", "bindings", "selectedBinding"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["key_helper"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(self,"_renderBindingsOn_",[html]);
})]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'key_helper'; with: [\x0a      \x09self renderBindingsOn: html ]",
messageSends: ["class:", "div", "with:", "renderBindingsOn:"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keyBinder",[]),"_selectedBinding",[]);
return $1;
},
args: [],
source: "selectedBinding\x0a\x09^ self keyBinder selectedBinding",
messageSends: ["selectedBinding", "keyBinder"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self},
args: [],
source: "show\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aKeyBinder){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_keyBinder_",[aKeyBinder]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aKeyBinder"],
source: "on: aKeyBinder\x0a\x09^ self new\x0a    \x09keyBinder: aKeyBinder;\x0a        yourself",
messageSends: ["keyBinder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLKeyBinderHelper.klass);


