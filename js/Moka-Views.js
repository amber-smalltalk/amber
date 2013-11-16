define("amber_core/Moka-Views", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Views');
smalltalk.packages["Moka-Views"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKButtonView', smalltalk.MKAspectView, ['default', 'label'], 'Moka-Views');
smalltalk.MKButtonView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isDefault();
if(smalltalk.assert($2)){
$1="default";
} else {
$1="";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKButtonView)})},
args: [],
source: "cssClass\x0a\x09^ self isDefault \x0a\x09\x09ifTrue: [ 'default' ]\x0a\x09\x09ifFalse: [ '' ]",
messageSends: ["ifTrue:ifFalse:", "isDefault"],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@default"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.MKButtonView)})},
args: [],
source: "default\x0a\x09^ default",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"default:",{aBoolean:aBoolean},smalltalk.MKButtonView)})},
args: ["aBoolean"],
source: "default: aBoolean\x0a\x09default := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKButtonController(){return smalltalk.MKButtonController||(typeof MKButtonController=="undefined"?nil:MKButtonController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$MKButtonController();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKButtonView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKButtonController",
messageSends: [],
referencedClasses: ["MKButtonController"]
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLabel",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "OK";
}, function($ctx1) {$ctx1.fill(self,"defaultLabel",{},smalltalk.MKButtonView)})},
args: [],
source: "defaultLabel\x0a\x09^ 'OK'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "isDefault",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._default();
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDefault",{},smalltalk.MKButtonView)})},
args: [],
source: "isDefault\x0a\x09^ self default ifNil: [ false ]",
messageSends: ["ifNil:", "default"],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultLabel();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.MKButtonView)})},
args: [],
source: "label\x0a\x09^ label ifNil: [ self defaultLabel ]",
messageSends: ["ifNil:", "defaultLabel"],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.MKButtonView)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "pressed",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onPressed();
return self}, function($ctx1) {$ctx1.fill(self,"pressed",{},smalltalk.MKButtonView)})},
args: [],
source: "pressed\x0a\x09self controller onPressed",
messageSends: ["onPressed", "controller"],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_(self._cssClass());
_st($1)._with_(self._label());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._pressed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKButtonView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html button\x0a\x09\x09class: self cssClass;\x0a\x09\x09with: self label;\x0a\x09\x09onClick: [ self pressed ]",
messageSends: ["class:", "button", "cssClass", "with:", "label", "onClick:", "pressed"],
referencedClasses: []
}),
smalltalk.MKButtonView);



smalltalk.addClass('MKCheckboxView', smalltalk.MKAspectView, ['id'], 'Moka-Views');
smalltalk.MKCheckboxView.comment="I am a checkbox view. My default controller is `MKCheckboxController`.\x0a\x0aMy controller must answer to `#onToggled:`.\x0a\x0a##API\x0a\x0a- If no `aspect` is provided, the ckeckbox state will always be off.\x0a- use `#label:` to set the label string.";
smalltalk.addMethod(
smalltalk.method({
selector: "checked",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._aspectValue();
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"checked",{},smalltalk.MKCheckboxView)})},
args: [],
source: "checked\x0a\x09^ self aspectValue ifNil: [ false ]",
messageSends: ["ifNil:", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "mk_checkbox";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKCheckboxView)})},
args: [],
source: "cssClass\x0a\x09^ 'mk_checkbox'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKCheckboxController(){return smalltalk.MKCheckboxController||(typeof MKCheckboxController=="undefined"?nil:MKCheckboxController)}
return smalltalk.withContext(function($ctx1) { 
return $MKCheckboxController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKCheckboxView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKCheckboxController",
messageSends: [],
referencedClasses: ["MKCheckboxController"]
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@id"];
if(($receiver = $2) == nil || $receiver == null){
self["@id"]=_st((1000000)._atRandom())._asString();
$1=self["@id"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.MKCheckboxView)})},
args: [],
source: "id\x0a\x09^ id ifNil: [ id := 1000000 atRandom asString ]",
messageSends: ["ifNil:", "asString", "atRandom"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "pressed",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onToggled_(_st(self._checked())._not());
return self}, function($ctx1) {$ctx1.fill(self,"pressed",{},smalltalk.MKCheckboxView)})},
args: [],
source: "pressed\x0a\x09self controller onToggled: self checked not",
messageSends: ["onToggled:", "controller", "not", "checked"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
var checkbox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(html)._input();
_st($1)._type_("checkbox");
_st($1)._class_(self._cssClass());
$2=$1;
$3=self._id();
$ctx1.sendIdx["id"]=1;
_st($2)._id_($3);
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._pressed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
checkbox=$4;
$5=self._checked();
if(smalltalk.assert($5)){
_st(checkbox)._at_put_("checked","checked");
};
$6=_st(html)._label();
_st($6)._for_(self._id());
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(html)._entity_("nbsp");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,checkbox:checkbox},smalltalk.MKCheckboxView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| checkbox |\x0a\x09\x0a\x09checkbox := html input\x0a\x09\x09type: 'checkbox';\x0a\x09\x09class: self cssClass;\x0a\x09\x09id: self id;\x0a\x09\x09onClick: [ self pressed ].\x0a\x09\x09\x0a\x09self checked ifTrue: [ \x0a\x09\x09checkbox at: 'checked' put: 'checked' ].\x0a\x09\x09\x0a\x09html label\x0a\x09\x09for: self id;\x0a\x09\x09with: [ html entity: 'nbsp' ]",
messageSends: ["type:", "input", "class:", "cssClass", "id:", "id", "onClick:", "pressed", "ifTrue:", "checked", "at:put:", "for:", "label", "with:", "entity:"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'events',
fn: function (){
var self=this;
var checkbox;
return smalltalk.withContext(function($ctx1) { 
var $1;
checkbox=_st("#".__comma(self._id()))._asJQuery();
$1=self._checked();
if(smalltalk.assert($1)){
_st(checkbox)._attr_put_("checked","checked");
} else {
_st(checkbox)._removeAttr_("checked");
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{checkbox:checkbox},smalltalk.MKCheckboxView)})},
args: [],
source: "update\x0a\x09| checkbox |\x0a\x09checkbox := ('#', self id) asJQuery.\x0a\x09\x0a\x09self checked\x0a\x09\x09ifTrue: [ checkbox attr: 'checked' put: 'checked' ]\x0a\x09\x09ifFalse: [ checkbox removeAttr: 'checked' ]",
messageSends: ["asJQuery", ",", "id", "ifTrue:ifFalse:", "checked", "attr:put:", "removeAttr:"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);



smalltalk.addClass('MKSwitchView', smalltalk.MKCheckboxView, [], 'Moka-Views');
smalltalk.MKSwitchView.comment="I am a switch view, similar to a `MKCheckboxView` but displayed as a switch. \x0aMy default controller is `MKCheckboxController`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "mk_switch";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKSwitchView)})},
args: [],
source: "cssClass\x0a\x09^ 'mk_switch'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSwitchView);



smalltalk.addClass('MKLabelView', smalltalk.MKAspectView, ['input'], 'Moka-Views');
smalltalk.MKLabelView.comment="I am an label view. I display a `String`.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.MKLabelView.superclass.fn.prototype._defaultControllerClass.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKLabelView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ super defaultControllerClass",
messageSends: ["defaultControllerClass"],
referencedClasses: []
}),
smalltalk.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._span())._with_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKLabelView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html span with: self aspectValue",
messageSends: ["with:", "span", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKLabelView);



smalltalk.addClass('MKTextAreaView', smalltalk.MKAspectView, ['input'], 'Moka-Views');
smalltalk.MKTextAreaView.comment="I am an text area view. My default controller is `MKAnyKeyInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKAnyKeyInputController(){return smalltalk.MKAnyKeyInputController||(typeof MKAnyKeyInputController=="undefined"?nil:MKAnyKeyInputController)}
return smalltalk.withContext(function($ctx1) { 
return $MKAnyKeyInputController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKTextAreaView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKAnyKeyInputController",
messageSends: [],
referencedClasses: ["MKAnyKeyInputController"]
}),
smalltalk.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "keyUp:",
category: 'events',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onKeyPressed_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"keyUp:",{anEvent:anEvent},smalltalk.MKTextAreaView)})},
args: ["anEvent"],
source: "keyUp: anEvent\x0a\x09self controller onKeyPressed: anEvent",
messageSends: ["onKeyPressed:", "controller"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._textarea();
_st($1)._with_(self._aspectValue());
$2=_st($1)._onKeyUp_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._keyUp_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
self["@input"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKTextAreaView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09input := html textarea \x0a\x09\x09with: self aspectValue;\x0a\x09\x09onKeyUp: [ :event | self keyUp: event ]",
messageSends: ["with:", "textarea", "aspectValue", "onKeyUp:", "keyUp:"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@input"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@input"])._asJQuery())._val_(self._aspectValue());
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKTextAreaView)})},
args: [],
source: "update\x0a\x09input ifNotNil: [ input asJQuery val: self aspectValue ]",
messageSends: ["ifNotNil:", "val:", "asJQuery", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@input"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MKTextAreaView)})},
args: [],
source: "value\x0a\x09^ input asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);



smalltalk.addClass('MKInputView', smalltalk.MKTextAreaView, [], 'Moka-Views');
smalltalk.MKInputView.comment="I am an input view. My default controller is `MKEnterInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKEnterInputController(){return smalltalk.MKEnterInputController||(typeof MKEnterInputController=="undefined"?nil:MKEnterInputController)}
return smalltalk.withContext(function($ctx1) { 
return $MKEnterInputController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKInputView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKEnterInputController",
messageSends: [],
referencedClasses: ["MKEnterInputController"]
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._value_(self._aspectValue());
_st($1)._onKeyUp_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._keyUp_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$2=_st($1)._yourself();
self["@input"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKInputView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09input := html input\x0a\x09\x09value: self aspectValue;\x0a\x09\x09onKeyUp: [ :event |\x0a\x09\x09\x09self keyUp: event ];\x0a\x09\x09yourself",
messageSends: ["value:", "input", "aspectValue", "onKeyUp:", "keyUp:", "yourself"],
referencedClasses: []
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerChangeOnAnyKey",
category: 'settings',
fn: function (){
var self=this;
function $MKAnyKeyInputController(){return smalltalk.MKAnyKeyInputController||(typeof MKAnyKeyInputController=="undefined"?nil:MKAnyKeyInputController)}
return smalltalk.withContext(function($ctx1) { 
self._controller_(_st($MKAnyKeyInputController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"triggerChangeOnAnyKey",{},smalltalk.MKInputView)})},
args: [],
source: "triggerChangeOnAnyKey\x0a\x09self controller: MKAnyKeyInputController new",
messageSends: ["controller:", "new"],
referencedClasses: ["MKAnyKeyInputController"]
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerChangeOnEnter",
category: 'settings',
fn: function (){
var self=this;
function $MKEnterInputController(){return smalltalk.MKEnterInputController||(typeof MKEnterInputController=="undefined"?nil:MKEnterInputController)}
return smalltalk.withContext(function($ctx1) { 
self._controller_(_st($MKEnterInputController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"triggerChangeOnEnter",{},smalltalk.MKInputView)})},
args: [],
source: "triggerChangeOnEnter\x0a\x09self controller: MKEnterInputController new",
messageSends: ["controller:", "new"],
referencedClasses: ["MKEnterInputController"]
}),
smalltalk.MKInputView);


});
