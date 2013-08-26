(function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Views');

smalltalk.addClass('MKButtonView', smalltalk.MKAspectView, ['default', 'label'], 'Moka-Views');
smalltalk.MKButtonView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._isDefault();
_st($2)._ifTrue_("default");
$3=_st($2)._ifFalse_("");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKButtonView)})},
args: [],
source: "cssClass\x0a\x09^ self isDefault \x0a\x09\x09ifTrue: 'default';\x0a\x09\x09ifFalse: ''",
messageSends: ["ifTrue:", "isDefault", "ifFalse:"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
if(($receiver = $2) == nil || $receiver == undefined){
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKButtonView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html button\x0a\x09\x09class: self cssClass;\x0a\x09\x09with: self label;\x0a\x09\x09onClick: [ self pressed ]",
messageSends: ["class:", "cssClass", "button", "with:", "label", "onClick:", "pressed"],
referencedClasses: []
}),
smalltalk.MKButtonView);



smalltalk.addClass('MKCheckboxView', smalltalk.MKAspectView, ['label'], 'Moka-Views');
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
if(($receiver = $2) == nil || $receiver == undefined){
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
selector: "label",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.MKCheckboxView)})},
args: [],
source: "label\x0a\x09^ label ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'rendering',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.MKCheckboxView)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
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
messageSends: ["onToggled:", "not", "checked", "controller"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._type_("checkbox");
_st($1)._at_put_("checked",self._checked());
_st($1)._value_(self._label());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._pressed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKCheckboxView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html input\x0a\x09\x09type: 'checkbox';\x0a\x09\x09at: 'checked' put: self checked;\x0a\x09\x09value: self label;\x0a\x09\x09onClick: [ self pressed ]",
messageSends: ["type:", "input", "at:put:", "checked", "value:", "label", "onClick:", "pressed"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);



smalltalk.addClass('MKInputView', smalltalk.MKAspectView, ['input'], 'Moka-Views');
smalltalk.MKInputView.comment="I am an input view. My default controller is `MKInputController`.\x0a\x0aMy controller must answer to `#onEnterPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "enterPressed",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onEnterPressed_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"enterPressed",{},smalltalk.MKInputView)})},
args: [],
source: "enterPressed\x0a\x09self controller onEnterPressed: self value",
messageSends: ["onEnterPressed:", "value", "controller"],
referencedClasses: []
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "keyDown:",
category: 'events',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._which()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
self._enterPressed();
};
return self}, function($ctx1) {$ctx1.fill(self,"keyDown:",{anEvent:anEvent},smalltalk.MKInputView)})},
args: ["anEvent"],
source: "keyDown: anEvent\x0a\x09anEvent which = String cr asciiValue ifTrue: [\x0a\x09\x09self enterPressed ]",
messageSends: ["ifTrue:", "enterPressed", "=", "asciiValue", "cr", "which"],
referencedClasses: ["String"]
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
_st($1)._onKeyDown_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._keyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
$2=_st($1)._yourself();
self["@input"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKInputView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09input := html input\x0a\x09\x09value: self aspectValue;\x0a\x09\x09onKeyDown: [ :event |\x0a\x09\x09\x09self keyDown: event ];\x0a\x09\x09yourself",
messageSends: ["value:", "aspectValue", "input", "onKeyDown:", "keyDown:", "yourself"],
referencedClasses: []
}),
smalltalk.MKInputView);

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
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MKInputView)})},
args: [],
source: "value\x0a\x09^ input asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKInputView);


})(global_smalltalk,global_nil,global__st);
