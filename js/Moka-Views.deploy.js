(function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Views');

smalltalk.addClass('MKButtonView', smalltalk.MKAspectView, ['default', 'label'], 'Moka-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
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
messageSends: ["ifTrue:", "isDefault", "ifFalse:"]}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@default"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.MKButtonView)})},
messageSends: []}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"default:",{aBoolean:aBoolean},smalltalk.MKButtonView)})},
messageSends: []}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
fn: function (){
var self=this;
function $MKButtonController(){return smalltalk.MKButtonController||(typeof MKButtonController=="undefined"?nil:MKButtonController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$MKButtonController();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKButtonView)})},
messageSends: []}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "OK";
}, function($ctx1) {$ctx1.fill(self,"defaultLabel",{},smalltalk.MKButtonView)})},
messageSends: []}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "isDefault",
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
messageSends: ["ifNil:", "default"]}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
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
messageSends: ["ifNil:", "defaultLabel"]}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.MKButtonView)})},
messageSends: []}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "pressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onPressed();
return self}, function($ctx1) {$ctx1.fill(self,"pressed",{},smalltalk.MKButtonView)})},
messageSends: ["onPressed", "controller"]}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
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
messageSends: ["class:", "cssClass", "button", "with:", "label", "onClick:", "pressed"]}),
smalltalk.MKButtonView);



smalltalk.addClass('MKCheckboxView', smalltalk.MKAspectView, ['label'], 'Moka-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "checked",
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
messageSends: ["ifNil:", "aspectValue"]}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
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
messageSends: ["ifNil:"]}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.MKCheckboxView)})},
messageSends: []}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "pressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onToggled_(_st(self._checked())._not());
return self}, function($ctx1) {$ctx1.fill(self,"pressed",{},smalltalk.MKCheckboxView)})},
messageSends: ["onToggled:", "not", "checked", "controller"]}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
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
messageSends: ["type:", "input", "at:put:", "checked", "value:", "label", "onClick:", "pressed"]}),
smalltalk.MKCheckboxView);



smalltalk.addClass('MKInputView', smalltalk.MKAspectView, ['input'], 'Moka-Views');
smalltalk.addMethod(
smalltalk.method({
selector: "enterPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controller())._onEnterPressed_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"enterPressed",{},smalltalk.MKInputView)})},
messageSends: ["onEnterPressed:", "value", "controller"]}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "keyDown:",
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
messageSends: ["ifTrue:", "enterPressed", "=", "asciiValue", "cr", "which"]}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
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
messageSends: ["value:", "aspectValue", "input", "onKeyDown:", "keyDown:", "yourself"]}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@input"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MKInputView)})},
messageSends: ["val", "asJQuery"]}),
smalltalk.MKInputView);


})(global_smalltalk,global_nil,global__st);
