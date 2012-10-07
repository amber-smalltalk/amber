smalltalk.addPackage('Helios-KeyBindings', {});
smalltalk.addClass('HLBinding', smalltalk.Object, ['key', 'label'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return self["@key"];
}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function (anInteger){
var self=this;
self["@key"]=anInteger;
return self}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return self["@label"];
}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
self["@label"]=aString;
return self}
}),
smalltalk.HLBinding);

smalltalk.addMethod(
"_shortcut",
smalltalk.method({
selector: "shortcut",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_fromCharCode_",[smalltalk.send(self,"_key",[])]);
return $1;
}
}),
smalltalk.HLBinding);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
fn: function (anInteger,aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_key_",[anInteger]);
smalltalk.send($2,"_label_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLBinding.klass);


smalltalk.addClass('HLBindingAction', smalltalk.HLBinding, ['callback'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
fn: function (){
var self=this;
return self["@callback"];
}
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self}
}),
smalltalk.HLBindingAction);

smalltalk.addMethod(
"_isBindingAction",
smalltalk.method({
selector: "isBindingAction",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.HLBindingAction);



smalltalk.addClass('HLBindingGroup', smalltalk.HLBinding, ['bindings'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aBinding){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_add_",[aBinding]);
return $1;
}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addActionKey_labelled_callback_",
smalltalk.method({
selector: "addActionKey:labelled:callback:",
fn: function (anInteger,aString,aBlock){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.HLBindingAction || HLBindingAction),"_on_labelled_",[anInteger,aString]);
smalltalk.send($1,"_callback_",[aBlock]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self,"_add_",[$2]);
return self}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_addGroupKey_labelled_",
smalltalk.method({
selector: "addGroupKey:labelled:",
fn: function (anInteger,aString){
var self=this;
smalltalk.send(self,"_add_",[smalltalk.send((smalltalk.HLBindingGroup || HLBindingGroup),"_on_labelled_",[anInteger,aString])]);
return self}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_detect_ifNone_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_label",[]),"__eq",[aString]);
}),(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_atkey_",
smalltalk.method({
selector: "atkey:",
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_bindings",[]),"_detect_ifNone_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_key",[]),"__eq",[anInteger]);
}),(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
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
}
}),
smalltalk.HLBindingGroup);

smalltalk.addMethod(
"_isBindingGroup",
smalltalk.method({
selector: "isBindingGroup",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.HLBindingGroup);



smalltalk.addClass('HLKeyBinder', smalltalk.Object, ['modifierKey', 'active', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
self["@active"]=true;
smalltalk.send(smalltalk.send(self,"_helper",[]),"_show",[]);
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_applyBinding_",
smalltalk.method({
selector: "applyBinding:",
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
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_bindings",
smalltalk.method({
selector: "bindings",
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
}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_deactivate",
smalltalk.method({
selector: "deactivate",
fn: function (){
var self=this;
self["@active"]=false;
self["@selectedBinding"]=nil;
smalltalk.send(smalltalk.send(self,"_helper",[]),"_hide",[]);
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_flushBindings",
smalltalk.method({
selector: "flushBindings",
fn: function (){
var self=this;
self["@bindings"]=nil;
self["@helper"]=nil;
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleBindingFor_",
smalltalk.method({
selector: "handleBindingFor:",
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
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleBindingKey_",
smalltalk.method({
selector: "handleBindingKey:",
fn: function (anInteger){
var self=this;
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
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
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_handleKeyUp_",
smalltalk.method({
selector: "handleKeyUp:",
fn: function (event){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(event,"_which",[]),"__eq",[smalltalk.send(self,"_modifierKey",[])]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_deactivate",[]);
};
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_helper",
smalltalk.method({
selector: "helper",
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
}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@active"]=false;
return self}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@active"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@active"];
};
return $1;
}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_modifierKey",
smalltalk.method({
selector: "modifierKey",
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
}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@selectedBinding"]) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_bindings",[]);
} else {
$1=self["@selectedBinding"];
};
return $1;
}
}),
smalltalk.HLKeyBinder);

smalltalk.addMethod(
"_setupEvents",
smalltalk.method({
selector: "setupEvents",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",["body"]),"_keydown_",[(function(event){
return smalltalk.send(self,"_handleKeyDown_",[event]);
})]);
smalltalk.send(smalltalk.send(window,"_jQuery_",["body"]),"_keyup_",[(function(event){
return smalltalk.send(self,"_handleKeyUp_",[event]);
})]);
return self}
}),
smalltalk.HLKeyBinder);



smalltalk.addClass('HLKeyBinderHelper', smalltalk.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(window,"_jQuery_",[".key_helper"]),"_remove",[]);
return self}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
return self["@keyBinder"];
}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_keyBinder_",
smalltalk.method({
selector: "keyBinder:",
fn: function (aKeyBinder){
var self=this;
self["@keyBinder"]=aKeyBinder;
return self}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return self}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderBindingsOn_",
smalltalk.method({
selector: "renderBindingsOn:",
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
return self}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["key_helper"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(self,"_renderBindingsOn_",[html]);
})]);
return self}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_selectedBinding",
smalltalk.method({
selector: "selectedBinding",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keyBinder",[]),"_selectedBinding",[]);
return $1;
}
}),
smalltalk.HLKeyBinderHelper);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self}
}),
smalltalk.HLKeyBinderHelper);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aKeyBinder){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_keyBinder_",[aKeyBinder]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.HLKeyBinderHelper.klass);


