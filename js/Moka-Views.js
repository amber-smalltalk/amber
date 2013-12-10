define("amber_core/Moka-Views", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Views');
smalltalk.packages["Moka-Views"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKButtonView', smalltalk.MKSingleAspectView, ['default', 'label'], 'Moka-Views');
smalltalk.MKButtonView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=_st(stream).__lt_lt(smalltalk.MKButtonView.superclass.fn.prototype._cssClass.apply(_st(self), []));
$ctx2.sendIdx["<<"]=2;
_st($2).__lt_lt(" mk_button");
$ctx2.sendIdx["<<"]=1;
$3=self._isDefault();
if(smalltalk.assert($3)){
return _st(stream).__lt_lt(" default");
};
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKButtonView)})},
args: [],
source: "cssClass\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream << super cssClass << ' mk_button'.\x0a\x09\x09self isDefault \x0a\x09\x09\x09ifTrue: [ stream << ' default' ] ]",
messageSends: ["streamContents:", "<<", "cssClass", "ifTrue:", "isDefault"],
referencedClasses: ["String"]
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
return $MKButtonController();
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
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKButtonView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((80));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKButtonView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 80;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
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
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKButtonView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self label",
messageSends: ["with:", "label"],
referencedClasses: []
}),
smalltalk.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "button";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKButtonView)})},
args: [],
source: "tag\x0a\x09^ 'button'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKButtonView);



smalltalk.addClass('MKCheckboxView', smalltalk.MKSingleAspectView, ['id'], 'Moka-Views');
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
var $1;
$1=_st(smalltalk.MKCheckboxView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_checkbox");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKCheckboxView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_checkbox'",
messageSends: [",", "cssClass"],
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
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKCheckboxView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((16));
_st($2)._height_((16));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKCheckboxView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 16;\x0a\x09\x09height: 16;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
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
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._checked();
if(smalltalk.assert($1)){
_st(_st(self["@root"])._asJQuery())._addClass_("checked");
};
_st(self["@root"])._at_put_("tabindex","0");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKCheckboxView)})},
args: ["html"],
source: "renderContentOn: html\x09\x0a\x09self checked ifTrue: [ \x0a\x09\x09root asJQuery addClass: 'checked' ].\x0a\x09\x0a\x09root at: 'tabindex' put: '0'",
messageSends: ["ifTrue:", "checked", "addClass:", "asJQuery", "at:put:"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._checked();
if(smalltalk.assert($1)){
$2=_st(self["@root"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._addClass_("checked");
} else {
_st(_st(self["@root"])._asJQuery())._removeClass_("checked");
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKCheckboxView)})},
args: [],
source: "update\x0a\x09self checked\x0a\x09\x09ifTrue: [ root asJQuery addClass: 'checked' ]\x0a\x09\x09ifFalse: [ root asJQuery removeClass: 'checked' ]",
messageSends: ["ifTrue:ifFalse:", "checked", "addClass:", "asJQuery", "removeClass:"],
referencedClasses: []
}),
smalltalk.MKCheckboxView);



smalltalk.addClass('MKSwitchView', smalltalk.MKCheckboxView, [], 'Moka-Views');
smalltalk.MKSwitchView.comment="I am a switch view, similar to a `MKCheckboxView` but displayed as a switch. \x0aMy default controller is `MKCheckboxController`.";
smalltalk.addMethod(
smalltalk.method({
selector: "checkboxCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "mk_switch";
}, function($ctx1) {$ctx1.fill(self,"checkboxCssClass",{},smalltalk.MKSwitchView)})},
args: [],
source: "checkboxCssClass\x0a\x09^ 'mk_switch'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSwitchView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKSwitchView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_switch");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKSwitchView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_switch'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKSwitchView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKSwitchView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((48));
_st($2)._height_((20));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKSwitchView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 48;\x0a\x09\x09height: 20;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
smalltalk.MKSwitchView);



smalltalk.addClass('MKLabelView', smalltalk.MKSingleAspectView, [], 'Moka-Views');
smalltalk.MKLabelView.comment="I am an label view. I display a `String`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKLabelView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_label");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKLabelView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_label'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKLabelView);

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
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
function $MKLabelLayout(){return smalltalk.MKLabelLayout||(typeof MKLabelLayout=="undefined"?nil:MKLabelLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MKLabelLayout())._new();
_st($2)._height_((24));
_st($2)._top_((0));
_st($2)._left_((0));
_st($2)._right_((0));
_st($2)._textAlign_("left");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKLabelView)})},
args: [],
source: "defaultLayout\x0a\x09^ MKLabelLayout new\x0a\x09\x09height: 24;\x0a\x09\x09top: 0;\x0a\x09\x09left:0;\x0a\x09\x09right: 0;\x0a\x09\x09textAlign: 'left';\x0a\x09\x09yourself",
messageSends: ["height:", "new", "top:", "left:", "right:", "textAlign:", "yourself"],
referencedClasses: ["MKLabelLayout"]
}),
smalltalk.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKLabelView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self aspectValue",
messageSends: ["with:", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
category: 'layout',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._textAlign_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{aString:aString},smalltalk.MKLabelView)})},
args: ["aString"],
source: "textAlign: aString\x0a\x09self layout textAlign: aString",
messageSends: ["textAlign:", "layout"],
referencedClasses: []
}),
smalltalk.MKLabelView);



smalltalk.addClass('MKHeadingView', smalltalk.MKLabelView, ['level'], 'Moka-Views');
smalltalk.MKHeadingView.comment="I display a heading, with a `level` from 1 to 6.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(stream).__lt_lt(smalltalk.MKHeadingView.superclass.fn.prototype._cssClass.apply(_st(self), []))).__lt_lt(" mk_heading level");
$ctx2.sendIdx["<<"]=2;
return _st($2).__lt_lt(_st(self._level())._asString());
$ctx2.sendIdx["<<"]=1;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKHeadingView)})},
args: [],
source: "cssClass\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09<< super cssClass \x09\x0a\x09\x09\x09<< ' mk_heading level'\x0a\x09\x09\x09<< self level asString ]",
messageSends: ["streamContents:", "<<", "cssClass", "asString", "level"],
referencedClasses: ["String"]
}),
smalltalk.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@level"];
if(($receiver = $2) == nil || $receiver == null){
$1=(1);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},smalltalk.MKHeadingView)})},
args: [],
source: "level\x0a\x09^ level ifNil: [ 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{aNumber:aNumber},smalltalk.MKHeadingView)})},
args: ["aNumber"],
source: "level: aNumber\x0a\x09level := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="h".__comma(_st(self._level())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKHeadingView)})},
args: [],
source: "tag\x0a\x09^ 'h', self level asString",
messageSends: [",", "asString", "level"],
referencedClasses: []
}),
smalltalk.MKHeadingView);



smalltalk.addClass('MKOverlayView', smalltalk.MKLayoutView, ['childView'], 'Moka-Views');
smalltalk.MKOverlayView.comment="I display an transparent overlay, typically over other views, except my `childView`.\x0a\x0a## API\x0a\x0aCreate instances using the class-side `childView:` method.";
smalltalk.addMethod(
smalltalk.method({
selector: "childView",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@childView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"childView",{},smalltalk.MKOverlayView)})},
args: [],
source: "childView\x0a\x09^ childView",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "childView:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@childView"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"childView:",{aView:aView},smalltalk.MKOverlayView)})},
args: ["aView"],
source: "childView: aView\x0a\x09childView := aView",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self._childView()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.MKOverlayView)})},
args: [],
source: "children\x0a\x09^ { self childView }",
messageSends: ["childView"],
referencedClasses: []
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKOverlayView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_overlay");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKOverlayView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_overlay'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKOverlayController(){return smalltalk.MKOverlayController||(typeof MKOverlayController=="undefined"?nil:MKOverlayController)}
return smalltalk.withContext(function($ctx1) { 
return $MKOverlayController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKOverlayView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKOverlayController",
messageSends: [],
referencedClasses: ["MKOverlayController"]
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKOverlayView.superclass.fn.prototype._remove.apply(_st(self), []);
$ctx1.sendIdx["remove"]=1;
_st(self._childView())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.MKOverlayView)})},
args: [],
source: "remove\x0a\x09super remove.\x0a\x09self childView remove",
messageSends: ["remove", "childView"],
referencedClasses: []
}),
smalltalk.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'defaults',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKOverlayView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x22Left empty on purpose. \x0a\x09No Content is rendered, as the childView is actually displayed separately\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKOverlayView);


smalltalk.addMethod(
smalltalk.method({
selector: "childView:",
category: 'instance creation',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._childView_(aView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"childView:",{aView:aView},smalltalk.MKOverlayView.klass)})},
args: ["aView"],
source: "childView: aView\x0a\x09^ self new\x0a\x09\x09childView: aView;\x0a\x09\x09yourself",
messageSends: ["childView:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.MKOverlayView.klass);


smalltalk.addClass('MKPaneView', smalltalk.MKLayoutView, ['views'], 'Moka-Views');
smalltalk.MKPaneView.comment="I am a view containing other views.\x0a\x0a## API\x0a\x0aUse `#addView:` to add a view to the pane.";
smalltalk.addMethod(
smalltalk.method({
selector: "addView:",
category: 'adding',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._views())._add_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"addView:",{aView:aView},smalltalk.MKPaneView)})},
args: ["aView"],
source: "addView: aView\x0a\x09self views add: aView",
messageSends: ["add:", "views"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderBottom:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderBottom_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderBottom:",{aNumber:aNumber},smalltalk.MKPaneView)})},
args: ["aNumber"],
source: "borderBottom: aNumber\x0a\x09self layout borderBottom: aNumber",
messageSends: ["borderBottom:", "layout"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderLeft:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderLeft_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderLeft:",{aNumber:aNumber},smalltalk.MKPaneView)})},
args: ["aNumber"],
source: "borderLeft: aNumber\x0a\x09self layout borderLeft: aNumber",
messageSends: ["borderLeft:", "layout"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderRight:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderRight_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderRight:",{aNumber:aNumber},smalltalk.MKPaneView)})},
args: ["aNumber"],
source: "borderRight: aNumber\x0a\x09self layout borderRight: aNumber",
messageSends: ["borderRight:", "layout"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderTop:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderTop_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderTop:",{aNumber:aNumber},smalltalk.MKPaneView)})},
args: ["aNumber"],
source: "borderTop: aNumber\x0a\x09self layout borderTop: aNumber",
messageSends: ["borderTop:", "layout"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._views();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.MKPaneView)})},
args: [],
source: "children\x0a\x09^ self views",
messageSends: ["views"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKPaneView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_pane");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKPaneView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_pane'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
function $MKPaneLayout(){return smalltalk.MKPaneLayout||(typeof MKPaneLayout=="undefined"?nil:MKPaneLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MKPaneLayout())._new();
_st($2)._left_((0));
_st($2)._top_((0));
_st($2)._right_((0));
_st($2)._bottom_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKPaneView)})},
args: [],
source: "defaultLayout\x0a\x09^ MKPaneLayout new\x0a\x09\x09left: 0;\x0a\x09\x09top: 0;\x0a\x09\x09right: 0;\x0a\x09\x09bottom: 0;\x0a\x09\x09yourself",
messageSends: ["left:", "new", "top:", "right:", "bottom:", "yourself"],
referencedClasses: ["MKPaneLayout"]
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._views())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKPaneView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self views do: [ :each | \x0a\x09\x09html with: each ]",
messageSends: ["do:", "views", "with:"],
referencedClasses: []
}),
smalltalk.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "views",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@views"];
if(($receiver = $2) == nil || $receiver == null){
self["@views"]=_st($OrderedCollection())._new();
$1=self["@views"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"views",{},smalltalk.MKPaneView)})},
args: [],
source: "views\x0a\x09^ views ifNil: [ views := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MKPaneView);



smalltalk.addClass('MKPanelView', smalltalk.MKPaneView, [], 'Moka-Views');
smalltalk.MKPanelView.comment="I am similar to a `MKPaneView` but I am scrollable and display a light background.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKPanelView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_panel");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKPanelView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_panel'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKPanelView);



smalltalk.addClass('MKSelectionView', smalltalk.MKAspectsView, ['selectionAspect', 'collectionAspect', 'displayBlock'], 'Moka-Views');
smalltalk.MKSelectionView.comment="I an abstract selection view of a list of elements.";
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueForAspect_(self._collectionAspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.MKSelectionView)})},
args: [],
source: "collection\x0a\x09^ self valueForAspect: self collectionAspect",
messageSends: ["valueForAspect:", "collectionAspect"],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionAspect",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collectionAspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionAspect",{},smalltalk.MKSelectionView)})},
args: [],
source: "collectionAspect\x0a\x09^ collectionAspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionAspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collectionAspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"collectionAspect:",{aSelector:aSelector},smalltalk.MKSelectionView)})},
args: ["aSelector"],
source: "collectionAspect: aSelector\x0a\x09collectionAspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultDisplayBlock",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(function(item){
return smalltalk.withContext(function($ctx2) {
return _st(item)._asString();
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultDisplayBlock",{},smalltalk.MKSelectionView)})},
args: [],
source: "defaultDisplayBlock\x0a\x09^ [ :item | item asString ]",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "displayBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@displayBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultDisplayBlock();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayBlock",{},smalltalk.MKSelectionView)})},
args: [],
source: "displayBlock\x0a\x09^ displayBlock ifNil: [ self defaultDisplayBlock ]",
messageSends: ["ifNil:", "defaultDisplayBlock"],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "displayBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@displayBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"displayBlock:",{aBlock:aBlock},smalltalk.MKSelectionView)})},
args: ["aBlock"],
source: "displayBlock: aBlock\x0a\x09displayBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueForAspect_(self._selectionAspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.MKSelectionView)})},
args: [],
source: "selectedItem\x0a\x09^ self valueForAspect: self selectionAspect",
messageSends: ["valueForAspect:", "selectionAspect"],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionAspect",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectionAspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionAspect",{},smalltalk.MKSelectionView)})},
args: [],
source: "selectionAspect\x0a\x09^ selectionAspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionAspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectionAspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selectionAspect:",{aSelector:aSelector},smalltalk.MKSelectionView)})},
args: ["aSelector"],
source: "selectionAspect: aSelector\x0a\x09selectionAspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSelectionView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:collectionAspect:selectionAspect:",
category: 'instance creation',
fn: function (aModel,collectionSelector,selectionSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._collectionAspect_(collectionSelector);
_st($2)._selectionAspect_(selectionSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:collectionAspect:selectionAspect:",{aModel:aModel,collectionSelector:collectionSelector,selectionSelector:selectionSelector},smalltalk.MKSelectionView.klass)})},
args: ["aModel", "collectionSelector", "selectionSelector"],
source: "model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09collectionAspect: collectionSelector;\x0a\x09\x09selectionAspect: selectionSelector;\x0a\x09\x09yourself",
messageSends: ["collectionAspect:", "model:", "selectionAspect:", "yourself"],
referencedClasses: []
}),
smalltalk.MKSelectionView.klass);


smalltalk.addClass('MKDropdownView', smalltalk.MKSelectionView, ['modalPaneView', 'listView'], 'Moka-Views');
smalltalk.MKDropdownView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKDropdownView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_dropdown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKDropdownView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_dropdown'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKDropdownController(){return smalltalk.MKDropdownController||(typeof MKDropdownController=="undefined"?nil:MKDropdownController)}
return smalltalk.withContext(function($ctx1) { 
return $MKDropdownController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKDropdownView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKDropdownController",
messageSends: [],
referencedClasses: ["MKDropdownController"]
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKDropdownView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((120));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKDropdownView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 120;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "listView",
category: 'views',
fn: function (){
var self=this;
function $MKDropdownListView(){return smalltalk.MKDropdownListView||(typeof MKDropdownListView=="undefined"?nil:MKDropdownListView)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@listView"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($MKDropdownListView())._model_collectionAspect_selectionAspect_(self._model(),self._collectionAspect(),self._selectionAspect());
_st($3)._width_(self._width());
_st($3)._height_("auto");
$4=_st($3)._yourself();
self["@listView"]=$4;
$1=self["@listView"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"listView",{},smalltalk.MKDropdownView)})},
args: [],
source: "listView\x0a\x09^ listView ifNil: [\x0a\x09\x09listView := (MKDropdownListView \x09\x0a\x09\x09\x09model: self model\x0a\x09\x09\x09collectionAspect: self collectionAspect\x0a\x09\x09\x09selectionAspect: self selectionAspect)\x0a\x09\x09\x09\x09width: self width;\x0a\x09\x09\x09\x09height: 'auto';\x0a\x09\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "width:", "model:collectionAspect:selectionAspect:", "model", "collectionAspect", "selectionAspect", "width", "height:", "yourself"],
referencedClasses: ["MKDropdownListView"]
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "modalPaneView",
category: 'views',
fn: function (){
var self=this;
function $MKModalDecorator(){return smalltalk.MKModalDecorator||(typeof MKModalDecorator=="undefined"?nil:MKModalDecorator)}
function $MKViewRemoved(){return smalltalk.MKViewRemoved||(typeof MKViewRemoved=="undefined"?nil:MKViewRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@modalPaneView"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($MKModalDecorator())._decorate_(self._listView());
_st($3)._extraCssClass_("mk_dropdown_pane");
_st($3)._closeOnEnter_(true);
_st($3)._closeOnClick_(true);
$4=_st($3)._yourself();
self["@modalPaneView"]=$4;
self["@modalPaneView"];
_st(self["@modalPaneView"])._on_send_to_($MKViewRemoved(),"focus",self);
$1=self["@modalPaneView"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"modalPaneView",{},smalltalk.MKDropdownView)})},
args: [],
source: "modalPaneView\x0a\x09^ modalPaneView ifNil: [\x0a\x09\x09modalPaneView := (MKModalDecorator decorate: self listView)\x0a\x09\x09\x09extraCssClass: 'mk_dropdown_pane';\x0a\x09\x09\x09closeOnEnter: true;\x0a\x09\x09\x09closeOnClick: true;\x0a\x09\x09\x09yourself.\x0a\x09\x09modalPaneView \x0a\x09\x09\x09on: MKViewRemoved\x0a\x09\x09\x09send: #focus\x0a\x09\x09\x09to: self.\x0a\x09\x09modalPaneView ]",
messageSends: ["ifNil:", "extraCssClass:", "decorate:", "listView", "closeOnEnter:", "closeOnClick:", "yourself", "on:send:to:"],
referencedClasses: ["MKModalDecorator", "MKViewRemoved"]
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "popupList",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=self._modalPaneView();
$2=$1;
$4=self._domPosition();
$ctx1.sendIdx["domPosition"]=1;
$3=_st($4)._x();
_st($2)._left_($3);
_st($1)._top_(_st(self._domPosition())._y());
$5=_st($1)._render();
_st(self._listView())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"popupList",{},smalltalk.MKDropdownView)})},
args: [],
source: "popupList\x0a\x09\x22Show a new list view inside a modal pane\x22\x0a\x09self modalPaneView \x0a\x09\x09left: self domPosition x;\x0a\x09\x09top: self domPosition y;\x0a\x09\x09render.\x0a\x09self listView focus",
messageSends: ["left:", "modalPaneView", "x", "domPosition", "top:", "y", "render", "focus", "listView"],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._class_("mk_dropdown_arrows");
_st(html)._with_(_st(self._displayBlock())._value_(self._selectedItem()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKDropdownView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'mk_dropdown_arrows'.\x0a\x09html with: (self displayBlock value: self selectedItem)",
messageSends: ["class:", "div", "with:", "value:", "displayBlock", "selectedItem"],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedListItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@root"])._asJQuery())._find_(":selected"))._text();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedListItem",{},smalltalk.MKDropdownView)})},
args: [],
source: "selectedListItem\x0a\x09^ (root asJQuery find: ':selected') text",
messageSends: ["text", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "button";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKDropdownView)})},
args: [],
source: "tag\x0a\x09^ 'button'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'accessing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st([self._selectionAspect(),self._collectionAspect()])._includes_(_st(anAnnouncement)._aspect());
if(smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKDropdownView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09({self selectionAspect. self collectionAspect} \x0a\x09\x09includes: anAnnouncement aspect) ifTrue: [\x0a\x09\x09\x09self update ]",
messageSends: ["ifTrue:", "includes:", "selectionAspect", "collectionAspect", "aspect", "update"],
referencedClasses: []
}),
smalltalk.MKDropdownView);



smalltalk.addClass('MKListView', smalltalk.MKSelectionView, [], 'Moka-Views');
smalltalk.MKListView.comment="I display a list of elements in a list control field.";
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(self._findListItemFor_(anObject));
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},smalltalk.MKListView)})},
args: ["anObject"],
source: "activateItem: anObject\x0a\x09self activateListItem: (self findListItemFor: anObject)",
messageSends: ["activateListItem:", "findListItemFor:"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
category: 'actions',
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
$2=_st(_st(aListItem)._parent())._children();
$3=self._selectedCssClass();
$ctx1.sendIdx["selectedCssClass"]=1;
_st($2)._removeClass_($3);
_st(aListItem)._addClass_(self._selectedCssClass());
self._ensureVisible_(aListItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},smalltalk.MKListView)})},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09aListItem parent children removeClass: self selectedCssClass.\x0a\x09aListItem addClass: self selectedCssClass.\x0a    \x0a\x09self ensureVisible: aListItem",
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "selectedCssClass", "addClass:", "ensureVisible:"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "activeItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._findItemFor_(_st(_st(self["@root"])._asJQuery())._find_(".".__comma(self._selectedCssClass())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeItem",{},smalltalk.MKListView)})},
args: [],
source: "activeItem\x0a\x09^ self findItemFor: (root asJQuery find: '.', self selectedCssClass)",
messageSends: ["findItemFor:", "find:", "asJQuery", ",", "selectedCssClass"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_list");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_list'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKListController(){return smalltalk.MKListController||(typeof MKListController=="undefined"?nil:MKListController)}
return smalltalk.withContext(function($ctx1) { 
return $MKListController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKListView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKListController",
messageSends: [],
referencedClasses: ["MKListController"]
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
category: 'private',
fn: function (aListItem){
var self=this;
var parent,position;
function $MKViewScroll(){return smalltalk.MKViewScroll||(typeof MKViewScroll=="undefined"?nil:MKViewScroll)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$9,$8,$11,$10,$7,$6,$15,$14,$16,$13,$17,$12,$18,$22,$23,$21,$20,$19;
$1=_st(aListItem)._get_((0));
$ctx1.sendIdx["get:"]=1;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
position=self._positionOf_(aListItem);
parent=_st(aListItem)._parent();
$4=_st(aListItem)._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4)._top();
$ctx1.sendIdx["top"]=1;
$2=_st($3).__lt((0));
if(smalltalk.assert($2)){
$5=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=2;
$9=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=3;
$8=_st($9)._scrollTop();
$ctx1.sendIdx["scrollTop"]=1;
$11=_st(aListItem)._position();
$ctx1.sendIdx["position"]=2;
$10=_st($11)._top();
$ctx1.sendIdx["top"]=2;
$7=_st($8).__plus($10);
$ctx1.sendIdx["+"]=1;
$6=_st($7).__minus((10));
$ctx1.sendIdx["-"]=1;
_st($5)._scrollTop_($6);
$ctx1.sendIdx["scrollTop:"]=1;
};
$15=_st(aListItem)._position();
$ctx1.sendIdx["position"]=3;
$14=_st($15)._top();
$ctx1.sendIdx["top"]=3;
$16=_st(aListItem)._height();
$ctx1.sendIdx["height"]=1;
$13=_st($14).__plus($16);
$ctx1.sendIdx["+"]=2;
$17=_st(parent)._height();
$ctx1.sendIdx["height"]=2;
$12=_st($13).__gt($17);
if(smalltalk.assert($12)){
$18=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=4;
$22=_st(_st(parent)._get_((0)))._scrollTop();
$23=_st(aListItem)._height();
$ctx1.sendIdx["height"]=3;
$21=_st($22).__plus($23);
$20=_st($21).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()));
$ctx1.sendIdx["-"]=2;
$19=_st($20).__plus((10));
$ctx1.sendIdx["+"]=3;
_st($18)._scrollTop_($19);
};
self._announce_(_st($MKViewScroll())._view_(self));
return self}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,parent:parent,position:position},smalltalk.MKListView)})},
args: ["aListItem"],
source: "ensureVisible: aListItem\x09\x0a\x09\x22Move the scrollbar to show the active element\x22\x0a\x09\x0a\x09| parent position |\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09position := self positionOf: aListItem.\x0a\x09parent := aListItem parent.\x0a\x09\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].\x0a\x09\x0a\x09self announce: (MKViewScroll view: self)",
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "ifTrue:", "<", "top", "position", "scrollTop:", "-", "+", "scrollTop", ">", "height", "announce:", "view:"],
referencedClasses: ["MKViewScroll"]
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "findItemFor:",
category: 'accessing',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aListItem)._asJQuery())._data())._at_("item");
return $1;
}, function($ctx1) {$ctx1.fill(self,"findItemFor:",{aListItem:aListItem},smalltalk.MKListView)})},
args: ["aListItem"],
source: "findItemFor: aListItem\x0a\x09^ aListItem asJQuery data at: 'item'",
messageSends: ["at:", "data", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "findListItemFor:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(self["@root"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._find_("li");
$2=_st($3)._filter_(_st((function(thisArg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(thisArg)._asJQuery())._data_("item")).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({thisArg:thisArg},$ctx1,1)})}))._currySelf());
$1=_st($2)._eq_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"findListItemFor:",{anObject:anObject},smalltalk.MKListView)})},
args: ["anObject"],
source: "findListItemFor: anObject\x0a\x09^ (((root asJQuery find: 'li') \x0a\x09\x09filter: [ :thisArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)",
messageSends: ["eq:", "filter:", "find:", "asJQuery", "currySelf", "=", "data:"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
category: 'private',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},smalltalk.MKListView)})},
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09\x22TODO: rewrite in smalltalk\x22\x0a\x09<return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._collection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self["@root"])._at_put_("tabindex","0");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKListView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self collection do: [ :each  | \x0a    \x09self renderItem: each  on: html ].\x0a\x09\x0a\x09\x22make the list focusable\x22\x0a\x09root at: 'tabindex' put: '0'",
messageSends: ["do:", "collection", "renderItem:on:", "at:put:"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1;
li=_st(html)._li();
_st(_st(li)._asJQuery())._data_put_("item",anObject);
$1=_st(self._selectedItem()).__eq(anObject);
if(smalltalk.assert($1)){
_st(li)._class_(self._selectedCssClass());
};
_st(li)._with_(_st(self._displayBlock())._value_(anObject));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},smalltalk.MKListView)})},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a\x09\x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: anObject.\x0a\x09\x0a\x09self selectedItem = anObject ifTrue: [\x0a\x09\x09li class: self selectedCssClass ].\x09\x0a\x09li with: (self displayBlock value: anObject)",
messageSends: ["li", "data:put:", "asJQuery", "ifTrue:", "=", "selectedItem", "class:", "selectedCssClass", "with:", "value:", "displayBlock"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "selected";
}, function($ctx1) {$ctx1.fill(self,"selectedCssClass",{},smalltalk.MKListView)})},
args: [],
source: "selectedCssClass\x0a\x09^ 'selected'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ul";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKListView)})},
args: [],
source: "tag\x0a\x09^ 'ul'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'updating',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st(anAnnouncement)._aspect();
$ctx1.sendIdx["aspect"]=1;
$1=_st($2).__eq(self._selectionAspect());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
self._updateSelectedItem();
};
$3=_st(_st(anAnnouncement)._aspect()).__eq(self._collectionAspect());
if(smalltalk.assert($3)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKListView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09anAnnouncement aspect = self selectionAspect ifTrue: [\x0a\x09\x09self updateSelectedItem ].\x0a\x09\x09\x0a\x09anAnnouncement aspect = self collectionAspect ifTrue: [\x0a\x09\x09self update ]",
messageSends: ["ifTrue:", "=", "aspect", "selectionAspect", "updateSelectedItem", "collectionAspect", "update"],
referencedClasses: []
}),
smalltalk.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSelectedItem",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateItem_(self._selectedItem());
return self}, function($ctx1) {$ctx1.fill(self,"updateSelectedItem",{},smalltalk.MKListView)})},
args: [],
source: "updateSelectedItem\x0a\x09self activateItem: self selectedItem",
messageSends: ["activateItem:", "selectedItem"],
referencedClasses: []
}),
smalltalk.MKListView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:collectionAspect:selectionAspect:",
category: 'instance creation',
fn: function (aModel,collectionSelector,selectionSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._collectionAspect_(collectionSelector);
_st($2)._selectionAspect_(selectionSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:collectionAspect:selectionAspect:",{aModel:aModel,collectionSelector:collectionSelector,selectionSelector:selectionSelector},smalltalk.MKListView.klass)})},
args: ["aModel", "collectionSelector", "selectionSelector"],
source: "model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09collectionAspect: collectionSelector;\x0a\x09\x09selectionAspect: selectionSelector;\x0a\x09\x09yourself",
messageSends: ["collectionAspect:", "model:", "selectionAspect:", "yourself"],
referencedClasses: []
}),
smalltalk.MKListView.klass);


smalltalk.addClass('MKDropdownListView', smalltalk.MKListView, [], 'Moka-Views');
smalltalk.MKDropdownListView.comment="I am similar to a `MKListView`, but inside a `MKDropdownView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKDropdownListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_dropdown_list");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKDropdownListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_dropdown_list'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKDropdownListView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'accessing',
fn: function (){
var self=this;
function $MKDropdownListController(){return smalltalk.MKDropdownListController||(typeof MKDropdownListController=="undefined"?nil:MKDropdownListController)}
return smalltalk.withContext(function($ctx1) { 
return $MKDropdownListController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKDropdownListView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKDropdownListController",
messageSends: [],
referencedClasses: ["MKDropdownListController"]
}),
smalltalk.MKDropdownListView);



smalltalk.addClass('MKSourceListView', smalltalk.MKListView, [], 'Moka-Views');
smalltalk.MKSourceListView.comment="I am similar to a `MKListView`, but displayed slightly differently, in a similar way as in the left-side the of Finder in OSX.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKSourceListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_sourcelist");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKSourceListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_sourcelist'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKSourceListView);



smalltalk.addClass('MKSplitView', smalltalk.MKLayoutView, ['firstView', 'secondView', 'splitter', 'thickness', 'minimumThickness'], 'Moka-Views');
smalltalk.MKSplitView.comment="I am the superclass of all split views. I arrange two child view with a splitter between them.\x0a\x0a## API\x0a\x0aCreate instances using the class-side method `firstView:secondView:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self._firstView(),self._secondView()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.MKSplitView)})},
args: [],
source: "children\x0a\x09^ { self firstView. self secondView }",
messageSends: ["firstView", "secondView"],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_split_view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_split_view'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMinimumThickness",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (50);
}, function($ctx1) {$ctx1.fill(self,"defaultMinimumThickness",{},smalltalk.MKSplitView)})},
args: [],
source: "defaultMinimumThickness\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultThickness",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (300);
}, function($ctx1) {$ctx1.fill(self,"defaultThickness",{},smalltalk.MKSplitView)})},
args: [],
source: "defaultThickness\x0a\x09^ 300",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "firstView",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@firstView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstView",{},smalltalk.MKSplitView)})},
args: [],
source: "firstView\x0a\x09^ firstView",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "firstView:",
category: 'accessing',
fn: function (aView){
var self=this;
function $MKDecorator(){return smalltalk.MKDecorator||(typeof MKDecorator=="undefined"?nil:MKDecorator)}
return smalltalk.withContext(function($ctx1) { 
self["@firstView"]=_st($MKDecorator())._decorate_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"firstView:",{aView:aView},smalltalk.MKSplitView)})},
args: ["aView"],
source: "firstView: aView\x0a\x09firstView := MKDecorator decorate: aView",
messageSends: ["decorate:"],
referencedClasses: ["MKDecorator"]
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumThickness",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@minimumThickness"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultMinimumThickness();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"minimumThickness",{},smalltalk.MKSplitView)})},
args: [],
source: "minimumThickness\x0a\x09^ minimumThickness ifNil: [ self defaultMinimumThickness ]",
messageSends: ["ifNil:", "defaultMinimumThickness"],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumThickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minimumThickness"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"minimumThickness:",{aNumber:aNumber},smalltalk.MKSplitView)})},
args: ["aNumber"],
source: "minimumThickness: aNumber\x0a\x09minimumThickness := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._firstView());
$ctx1.sendIdx["with:"]=1;
self["@splitter"]=_st(_st(html)._div())._class_(self._splitterCssClass());
_st(html)._with_(self._secondView());
_st(self._controller())._placeSplitter_(self._thickness());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKSplitView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self firstView.\x0a\x09splitter := html div class: self splitterCssClass.\x0a\x09html with: self secondView.\x0a\x09\x0a\x09self controller placeSplitter: self thickness",
messageSends: ["with:", "firstView", "class:", "div", "splitterCssClass", "secondView", "placeSplitter:", "controller", "thickness"],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@secondView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"secondView",{},smalltalk.MKSplitView)})},
args: [],
source: "secondView\x0a\x09^ secondView",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
category: 'accessing',
fn: function (aView){
var self=this;
function $MKDecorator(){return smalltalk.MKDecorator||(typeof MKDecorator=="undefined"?nil:MKDecorator)}
return smalltalk.withContext(function($ctx1) { 
self["@secondView"]=_st($MKDecorator())._decorate_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},smalltalk.MKSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09secondView := MKDecorator decorate: aView",
messageSends: ["decorate:"],
referencedClasses: ["MKDecorator"]
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "splitter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@splitter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"splitter",{},smalltalk.MKSplitView)})},
args: [],
source: "splitter\x0a\x09\x22Answer the `splitter` TagBrush\x22\x0a\x09\x0a\x09^ splitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "splitterCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "mk_splitter";
}, function($ctx1) {$ctx1.fill(self,"splitterCssClass",{},smalltalk.MKSplitView)})},
args: [],
source: "splitterCssClass\x0a\x09^ 'mk_splitter'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "thickness",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@thickness"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultThickness();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"thickness",{},smalltalk.MKSplitView)})},
args: [],
source: "thickness\x0a\x09^ thickness ifNil: [ self defaultThickness ]",
messageSends: ["ifNil:", "defaultThickness"],
referencedClasses: []
}),
smalltalk.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "thickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@thickness"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"thickness:",{aNumber:aNumber},smalltalk.MKSplitView)})},
args: ["aNumber"],
source: "thickness: aNumber\x0a\x09thickness := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSplitView);


smalltalk.addMethod(
smalltalk.method({
selector: "firstView:secondView:",
category: 'instance creation',
fn: function (aView,anotherView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._firstView_(aView);
_st($2)._secondView_(anotherView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstView:secondView:",{aView:aView,anotherView:anotherView},smalltalk.MKSplitView.klass)})},
args: ["aView", "anotherView"],
source: "firstView: aView secondView: anotherView\x0a\x09^ self new\x0a\x09\x09firstView: aView;\x0a\x09\x09secondView: anotherView;\x0a\x09\x09yourself",
messageSends: ["firstView:", "new", "secondView:", "yourself"],
referencedClasses: []
}),
smalltalk.MKSplitView.klass);


smalltalk.addClass('MKHorizontalSplitView', smalltalk.MKSplitView, [], 'Moka-Views');
smalltalk.MKHorizontalSplitView.comment="I split my child views vertically.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKHorizontalSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKHorizontalSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' horizontal'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKLeftFixedHorizontalSplitController(){return smalltalk.MKLeftFixedHorizontalSplitController||(typeof MKLeftFixedHorizontalSplitController=="undefined"?nil:MKLeftFixedHorizontalSplitController)}
return smalltalk.withContext(function($ctx1) { 
return $MKLeftFixedHorizontalSplitController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKHorizontalSplitView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKLeftFixedHorizontalSplitController",
messageSends: [],
referencedClasses: ["MKLeftFixedHorizontalSplitController"]
}),
smalltalk.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "leftThickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKLeftFixedHorizontalSplitController(){return smalltalk.MKLeftFixedHorizontalSplitController||(typeof MKLeftFixedHorizontalSplitController=="undefined"?nil:MKLeftFixedHorizontalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKLeftFixedHorizontalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"leftThickness:",{aNumber:aNumber},smalltalk.MKHorizontalSplitView)})},
args: ["aNumber"],
source: "leftThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKLeftFixedHorizontalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKLeftFixedHorizontalSplitController"]
}),
smalltalk.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "rightThickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKRightFixedHorizontalSplitController(){return smalltalk.MKRightFixedHorizontalSplitController||(typeof MKRightFixedHorizontalSplitController=="undefined"?nil:MKRightFixedHorizontalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKRightFixedHorizontalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"rightThickness:",{aNumber:aNumber},smalltalk.MKHorizontalSplitView)})},
args: ["aNumber"],
source: "rightThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKRightFixedHorizontalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKRightFixedHorizontalSplitController"]
}),
smalltalk.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.MKHorizontalSplitView.superclass.fn.prototype._secondView_.apply(_st(self), [aView]);
$1=self._secondView();
_st($1)._right_((0));
$2=_st($1)._left_("auto");
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},smalltalk.MKHorizontalSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09super secondView: aView.\x0a\x09self secondView \x0a\x09\x09right: 0;\x0a\x09\x09left: 'auto'",
messageSends: ["secondView:", "right:", "secondView", "left:"],
referencedClasses: []
}),
smalltalk.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(self["@splitter"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3="axis".__minus_gt("x");
$ctx1.sendIdx["->"]=1;
$4="containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent());
$ctx1.sendIdx["->"]=2;
$5="helper".__minus_gt("clone");
$ctx1.sendIdx["->"]=3;
$6="cursor".__minus_gt("ew-resize");
$ctx1.sendIdx["->"]=4;
$7="stop".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return self._resized();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["->"]=5;
$2=smalltalk.HashedCollection._from_([$3,$4,$5,$6,$7,"drag".__minus_gt((function(event,ui){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onResize_helper_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,2)})}))]);
_st($1)._draggable_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},smalltalk.MKHorizontalSplitView)})},
args: [],
source: "setupEventHandlers\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'x'. \x0a        'containment' -> splitter asJQuery parent.\x0a\x09\x09'helper' -> 'clone'.\x0a\x09\x09'cursor' -> 'ew-resize'.\x0a\x09\x09'stop' -> [ self resized ].\x0a        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }",
messageSends: ["draggable:", "asJQuery", "->", "parent", "resized", "onResize:helper:", "controller"],
referencedClasses: []
}),
smalltalk.MKHorizontalSplitView);



smalltalk.addClass('MKVerticalSplitView', smalltalk.MKSplitView, [], 'Moka-Views');
smalltalk.MKVerticalSplitView.comment="I split my child views horizontally.";
smalltalk.addMethod(
smalltalk.method({
selector: "bottomThickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKBottomFixedVerticalSplitController(){return smalltalk.MKBottomFixedVerticalSplitController||(typeof MKBottomFixedVerticalSplitController=="undefined"?nil:MKBottomFixedVerticalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKBottomFixedVerticalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"bottomThickness:",{aNumber:aNumber},smalltalk.MKVerticalSplitView)})},
args: ["aNumber"],
source: "bottomThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKBottomFixedVerticalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKBottomFixedVerticalSplitController"]
}),
smalltalk.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKVerticalSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKVerticalSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' vertical'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKTopFixedVerticalSplitController(){return smalltalk.MKTopFixedVerticalSplitController||(typeof MKTopFixedVerticalSplitController=="undefined"?nil:MKTopFixedVerticalSplitController)}
return smalltalk.withContext(function($ctx1) { 
return $MKTopFixedVerticalSplitController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKVerticalSplitView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKTopFixedVerticalSplitController",
messageSends: [],
referencedClasses: ["MKTopFixedVerticalSplitController"]
}),
smalltalk.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.MKVerticalSplitView.superclass.fn.prototype._secondView_.apply(_st(self), [aView]);
$1=self._secondView();
_st($1)._bottom_((0));
$2=_st($1)._top_("auto");
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},smalltalk.MKVerticalSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09super secondView: aView.\x0a\x09self secondView \x0a\x09\x09bottom: 0;\x0a\x09\x09top: 'auto'",
messageSends: ["secondView:", "bottom:", "secondView", "top:"],
referencedClasses: []
}),
smalltalk.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(self["@splitter"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3="axis".__minus_gt("y");
$ctx1.sendIdx["->"]=1;
$4="containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent());
$ctx1.sendIdx["->"]=2;
$5="cursor".__minus_gt("ns-resize");
$ctx1.sendIdx["->"]=3;
$6="helper".__minus_gt("clone");
$ctx1.sendIdx["->"]=4;
$7="stop".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return self._resized();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["->"]=5;
$2=smalltalk.HashedCollection._from_([$3,$4,$5,$6,$7,"drag".__minus_gt((function(event,ui){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onResize_helper_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,2)})}))]);
_st($1)._draggable_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},smalltalk.MKVerticalSplitView)})},
args: [],
source: "setupEventHandlers\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'y'. \x0a        'containment' -> splitter asJQuery parent.\x0a\x09\x09'cursor' -> 'ns-resize'.\x0a\x09\x09'helper' -> 'clone'.\x0a\x09\x09'stop' -> [ self resized ].\x0a        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }",
messageSends: ["draggable:", "asJQuery", "->", "parent", "resized", "onResize:helper:", "controller"],
referencedClasses: []
}),
smalltalk.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "topThickness:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKTopFixedVerticalSplitController(){return smalltalk.MKTopFixedVerticalSplitController||(typeof MKTopFixedVerticalSplitController=="undefined"?nil:MKTopFixedVerticalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKTopFixedVerticalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"topThickness:",{aNumber:aNumber},smalltalk.MKVerticalSplitView)})},
args: ["aNumber"],
source: "topThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKTopFixedVerticalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKTopFixedVerticalSplitController"]
}),
smalltalk.MKVerticalSplitView);



smalltalk.addClass('MKTextAreaView', smalltalk.MKSingleAspectView, [], 'Moka-Views');
smalltalk.MKTextAreaView.comment="I am an text area view. My default controller is `MKAnyKeyInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKTextAreaView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_textarea");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKTextAreaView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_textarea'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);

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
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKTextAreaView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((160));
_st($2)._height_((80));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKTextAreaView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 160;\x0a\x09\x09height: 80;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
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
_st(self["@root"])._with_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKTextAreaView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09root with: self aspectValue",
messageSends: ["with:", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "textarea";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKTextAreaView)})},
args: [],
source: "tag\x0a\x09^ 'textarea'",
messageSends: [],
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
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._val_(self._aspectValue());
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKTextAreaView)})},
args: [],
source: "update\x0a\x09root ifNotNil: [ root asJQuery val: self aspectValue ]",
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
$1=_st(_st(self["@root"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MKTextAreaView)})},
args: [],
source: "value\x0a\x09^ root asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKTextAreaView);



smalltalk.addClass('MKInputView', smalltalk.MKTextAreaView, [], 'Moka-Views');
smalltalk.MKInputView.comment="I am an input view. My default controller is `MKEnterInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "moka_view mk_input";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKInputView)})},
args: [],
source: "cssClass\x0a\x09^ 'moka_view mk_input'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKInputView);

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
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.MKInputView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((160));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKInputView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 160;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@root"])._value_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKInputView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09root value: self aspectValue",
messageSends: ["value:", "aspectValue"],
referencedClasses: []
}),
smalltalk.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "input";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKInputView)})},
args: [],
source: "tag\x0a\x09^ 'input'",
messageSends: [],
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
