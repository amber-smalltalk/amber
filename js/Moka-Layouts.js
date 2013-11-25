define("amber_core/Moka-Layouts", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Layouts');
smalltalk.packages["Moka-Layouts"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKLayout', smalltalk.Object, ['properties'], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "asCssString",
category: 'converting',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self["@properties"])._valuesDo_((function(each){
return smalltalk.withContext(function($ctx3) {
_st(each)._printCssOn_(stream);
return _st(stream).__lt_lt(";");
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asCssString",{},smalltalk.MKLayout)})},
args: [],
source: "asCssString\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09properties valuesDo: [ :each | \x0a\x09\x09\x09each printCssOn: stream.\x0a\x09\x09\x09stream << ';' ] ]",
messageSends: ["streamContents:", "valuesDo:", "printCssOn:", "<<"],
referencedClasses: ["String"]
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("bottom",self._propertyLabelled_value_("bottom",aNumber));
$1=self._hasProperty_("top");
if(smalltalk.assert($1)){
self._removeProperty_("height");
$ctx1.sendIdx["removeProperty:"]=1;
};
self._removeProperty_("centerY");
return self}, function($ctx1) {$ctx1.fill(self,"bottom:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "bottom: aNumber\x0a\x09properties \x0a\x09\x09at: 'bottom' \x0a\x09\x09put: (self propertyLabelled: 'bottom' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'top') ifTrue: [\x0a\x09\x09self removeProperty: 'height' ].\x0a\x09self removeProperty: 'centerY'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "centerX:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKHorizontalCenteringLayoutProperty(){return smalltalk.MKHorizontalCenteringLayoutProperty||(typeof MKHorizontalCenteringLayoutProperty=="undefined"?nil:MKHorizontalCenteringLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("centerX",_st($MKHorizontalCenteringLayoutProperty())._layout_value_(self,aNumber));
self._removeProperty_("left");
$ctx1.sendIdx["removeProperty:"]=1;
$1=self._removeProperty_("right");
return self}, function($ctx1) {$ctx1.fill(self,"centerX:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "centerX: aNumber\x0a\x09properties\x0a\x09\x09at: 'centerX'\x0a\x09\x09put: (MKHorizontalCenteringLayoutProperty layout: self value: aNumber).\x0a\x09\x0a\x09self \x0a\x09\x09removeProperty: 'left';\x0a\x09\x09removeProperty: 'right'",
messageSends: ["at:put:", "layout:value:", "removeProperty:"],
referencedClasses: ["MKHorizontalCenteringLayoutProperty"]
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "centerY:",
category: 'accessing',
fn: function (aNumber){
var self=this;
function $MKVerticalCenteringLayoutProperty(){return smalltalk.MKVerticalCenteringLayoutProperty||(typeof MKVerticalCenteringLayoutProperty=="undefined"?nil:MKVerticalCenteringLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("centerY",_st($MKVerticalCenteringLayoutProperty())._layout_value_(self,aNumber));
self._removeProperty_("top");
$ctx1.sendIdx["removeProperty:"]=1;
$1=self._removeProperty_("bottom");
return self}, function($ctx1) {$ctx1.fill(self,"centerY:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "centerY: aNumber\x0a\x09properties\x0a\x09\x09at: 'centerY'\x0a\x09\x09put: (MKVerticalCenteringLayoutProperty layout: self value: aNumber).\x0a\x09\x09\x0a\x09self \x0a\x09\x09removeProperty: 'top';\x0a\x09\x09removeProperty: 'bottom'",
messageSends: ["at:put:", "layout:value:", "removeProperty:"],
referencedClasses: ["MKVerticalCenteringLayoutProperty"]
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "hasProperty:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@properties"])._includesKey_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasProperty:",{aString:aString},smalltalk.MKLayout)})},
args: ["aString"],
source: "hasProperty: aString\x0a\x09^ properties includesKey: aString",
messageSends: ["includesKey:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@properties"])._at_ifPresent_ifAbsent_("height",(function(property){
return smalltalk.withContext(function($ctx2) {
return _st(property)._value();
}, function($ctx2) {$ctx2.fillBlock({property:property},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.MKLayout)})},
args: [],
source: "height\x0a\x09^ properties \x0a\x09\x09at: 'height' \x0a\x09\x09ifPresent: [ :property | property value ]\x0a\x09\x09ifAbsent: [ 1 ]",
messageSends: ["at:ifPresent:ifAbsent:", "value"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("height",self._propertyLabelled_value_("height",aNumber));
$1=self._hasProperty_("top");
if(smalltalk.assert($1)){
self._removeProperty_("bottom");
};
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09properties \x0a\x09\x09at: 'height' \x0a\x09\x09put: (self propertyLabelled: 'height' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'top') ifTrue: [\x0a\x09\x09self removeProperty: 'bottom' ]",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@properties"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09properties := Dictionary new",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("left",self._propertyLabelled_value_("left",aNumber));
$1=self._hasProperty_("width");
if(smalltalk.assert($1)){
self._removeProperty_("right");
$ctx1.sendIdx["removeProperty:"]=1;
};
self._removeProperty_("centerX");
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "left: aNumber\x0a\x09properties \x0a\x09\x09at: 'left' \x0a\x09\x09put: (self propertyLabelled: 'left' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'width') ifTrue: [\x0a\x09\x09self removeProperty: 'right' ].\x0a\x09self removeProperty: 'centerX'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "propertyLabelled:value:",
category: 'factory',
fn: function (aString,aValue){
var self=this;
function $MKLabelledLayoutProperty(){return smalltalk.MKLabelledLayoutProperty||(typeof MKLabelledLayoutProperty=="undefined"?nil:MKLabelledLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MKLabelledLayoutProperty())._layout_label_value_(self,aString,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"propertyLabelled:value:",{aString:aString,aValue:aValue},smalltalk.MKLayout)})},
args: ["aString", "aValue"],
source: "propertyLabelled: aString value: aValue\x0a\x09^ MKLabelledLayoutProperty layout: self label: aString value: aValue",
messageSends: ["layout:label:value:"],
referencedClasses: ["MKLabelledLayoutProperty"]
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProperty:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProperty:",{aString:aString},smalltalk.MKLayout)})},
args: ["aString"],
source: "removeProperty: aString\x0a\x09properties remove: aString ifAbsent: []",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("right",self._propertyLabelled_value_("right",aNumber));
$1=self._hasProperty_("width");
if(smalltalk.assert($1)){
self._removeProperty_("left");
$ctx1.sendIdx["removeProperty:"]=1;
};
self._removeProperty_("centerX");
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "right: aNumber\x0a\x09properties \x0a\x09\x09at: 'right' \x0a\x09\x09put: (self propertyLabelled: 'right' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'width') ifTrue: [\x0a\x09\x09self removeProperty: 'left' ].\x0a\x09self removeProperty: 'centerX'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("top",self._propertyLabelled_value_("top",aNumber));
$1=self._hasProperty_("height");
if(smalltalk.assert($1)){
self._removeProperty_("bottom");
$ctx1.sendIdx["removeProperty:"]=1;
};
self._removeProperty_("centerY");
return self}, function($ctx1) {$ctx1.fill(self,"top:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "top: aNumber\x0a\x09properties \x0a\x09\x09at: 'top' \x0a\x09\x09put: (self propertyLabelled: 'top' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'height') ifTrue: [\x0a\x09\x09self removeProperty: 'bottom' ].\x0a\x09self removeProperty: 'centerY'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@properties"])._at_ifPresent_ifAbsent_("width",(function(property){
return smalltalk.withContext(function($ctx2) {
return _st(property)._value();
}, function($ctx2) {$ctx2.fillBlock({property:property},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.MKLayout)})},
args: [],
source: "width\x0a\x09^ properties \x0a\x09\x09at: 'width' \x0a\x09\x09ifPresent: [ :property | property value ]\x0a\x09\x09ifAbsent: [ 1 ]",
messageSends: ["at:ifPresent:ifAbsent:", "value"],
referencedClasses: []
}),
smalltalk.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("width",self._propertyLabelled_value_("width",aNumber));
$1=self._hasProperty_("left");
if(smalltalk.assert($1)){
self._removeProperty_("right");
};
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.MKLayout)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09properties \x0a\x09\x09at: 'width' \x0a\x09\x09put: (self propertyLabelled: 'width' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'left') ifTrue: [\x0a\x09\x09self removeProperty: 'right' ]",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
smalltalk.MKLayout);



smalltalk.addClass('MKLabelLayout', smalltalk.MKLayout, [], 'Moka-Layouts');
smalltalk.MKLabelLayout.comment="I am a specialized layout for label views. I can set a `textAlign` property, taking a string argument, `'left'`, `'center'` or `'right'`.";
smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("text-align",self._propertyLabelled_value_("text-align",aString));
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{aString:aString},smalltalk.MKLabelLayout)})},
args: ["aString"],
source: "textAlign: aString\x0a\x09\x22Map to CSS' text-align property. Possible values are `'left'`, `'center'` and `'right'`\x22\x0a\x09\x0a\x09properties \x0a\x09\x09at: 'text-align' \x0a\x09\x09put: (self propertyLabelled: 'text-align' value: aString)",
messageSends: ["at:put:", "propertyLabelled:value:"],
referencedClasses: []
}),
smalltalk.MKLabelLayout);



smalltalk.addClass('MKPaneLayout', smalltalk.MKLayout, [], 'Moka-Layouts');
smalltalk.MKPaneLayout.comment="I am a specialized layout for pane views. I can set border widths to my views.";
smalltalk.addMethod(
smalltalk.method({
selector: "borderBottom:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-bottom",self._propertyLabelled_value_("border-bottom-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderBottom:",{aNumber:aNumber},smalltalk.MKPaneLayout)})},
args: ["aNumber"],
source: "borderBottom: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-bottom' \x0a\x09\x09put: (self propertyLabelled: 'border-bottom-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
smalltalk.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderLeft:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-left",self._propertyLabelled_value_("border-left-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderLeft:",{aNumber:aNumber},smalltalk.MKPaneLayout)})},
args: ["aNumber"],
source: "borderLeft: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-left' \x0a\x09\x09put: (self propertyLabelled: 'border-left-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
smalltalk.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderRight:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-right",self._propertyLabelled_value_("border-right-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderRight:",{aNumber:aNumber},smalltalk.MKPaneLayout)})},
args: ["aNumber"],
source: "borderRight: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-right' \x0a\x09\x09put: (self propertyLabelled: 'border-right-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
smalltalk.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderTop:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-top",self._propertyLabelled_value_("border-top-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderTop:",{aNumber:aNumber},smalltalk.MKPaneLayout)})},
args: ["aNumber"],
source: "borderTop: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-top' \x0a\x09\x09put: (self propertyLabelled: 'border-top-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
smalltalk.MKPaneLayout);



smalltalk.addClass('MKLayoutProperty', smalltalk.Object, ['layout', 'value'], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "asCssString",
category: 'converting',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return self._printCssOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asCssString",{},smalltalk.MKLayoutProperty)})},
args: [],
source: "asCssString\x0a\x09^ String streamContents: [ :stream | \x0a\x09\x09self printCssOn: stream ]",
messageSends: ["streamContents:", "printCssOn:"],
referencedClasses: ["String"]
}),
smalltalk.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "layout",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@layout"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout",{},smalltalk.MKLayoutProperty)})},
args: [],
source: "layout\x0a\x09^ layout",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:",
category: 'accessing',
fn: function (aLayout){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@layout"]=aLayout;
return self}, function($ctx1) {$ctx1.fill(self,"layout:",{aLayout:aLayout},smalltalk.MKLayoutProperty)})},
args: ["aLayout"],
source: "layout: aLayout\x0a\x09layout := aLayout",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},smalltalk.MKLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MKLayoutProperty)})},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue},smalltalk.MKLayoutProperty)})},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "layout:value:",
category: 'instance creation',
fn: function (aLayout,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._layout_(aLayout);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout:value:",{aLayout:aLayout,aValue:aValue},smalltalk.MKLayoutProperty.klass)})},
args: ["aLayout", "aValue"],
source: "layout: aLayout value: aValue\x0a\x09^ self new\x0a\x09\x09layout: aLayout;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["layout:", "new", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.MKLayoutProperty.klass);


smalltalk.addClass('MKHorizontalCenteringLayoutProperty', smalltalk.MKLayoutProperty, [], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "marginLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(_st(_st(_st(self._layout())._width()).__slash((2))).__plus(self._value()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"marginLeft",{},smalltalk.MKHorizontalCenteringLayoutProperty)})},
args: [],
source: "marginLeft\x0a\x09^ 0 - ((self layout width / 2) + self value)",
messageSends: ["-", "+", "/", "width", "layout", "value"],
referencedClasses: []
}),
smalltalk.MKHorizontalCenteringLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream).__lt_lt("left:50%;");
$ctx1.sendIdx["<<"]=1;
_st(_st(aStream).__lt_lt("margin-left:")).__lt_lt(_st(self._marginLeft())._asMokaCssString());
$ctx1.sendIdx["<<"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},smalltalk.MKHorizontalCenteringLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << 'left:50%;'.\x0a\x09aStream << 'margin-left:' << self marginLeft asMokaCssString",
messageSends: ["<<", "asMokaCssString", "marginLeft"],
referencedClasses: []
}),
smalltalk.MKHorizontalCenteringLayoutProperty);



smalltalk.addClass('MKLabelledLayoutProperty', smalltalk.MKLayoutProperty, ['label'], 'Moka-Layouts');
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
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.MKLabelledLayoutProperty)})},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLabelledLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.MKLabelledLayoutProperty)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKLabelledLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aStream).__lt_lt(self._label())).__lt_lt(":");
$ctx1.sendIdx["<<"]=2;
_st($1).__lt_lt(_st(self._value())._asMokaCssString());
$ctx1.sendIdx["<<"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},smalltalk.MKLabelledLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << self label << ':' << self value asMokaCssString",
messageSends: ["<<", "label", "asMokaCssString", "value"],
referencedClasses: []
}),
smalltalk.MKLabelledLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "layout:label:value:",
category: 'instance creation',
fn: function (aLayout,aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._layout_(aLayout);
_st($2)._label_(aString);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout:label:value:",{aLayout:aLayout,aString:aString,aValue:aValue},smalltalk.MKLabelledLayoutProperty.klass)})},
args: ["aLayout", "aString", "aValue"],
source: "layout: aLayout label: aString value: aValue\x0a\x09^ self new\x0a\x09\x09layout: aLayout;\x0a\x09\x09label: aString;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["layout:", "new", "label:", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.MKLabelledLayoutProperty.klass);


smalltalk.addClass('MKVerticalCenteringLayoutProperty', smalltalk.MKLayoutProperty, [], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "marginTop",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(_st(_st(_st(self._layout())._height()).__slash((2))).__plus(self._value()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"marginTop",{},smalltalk.MKVerticalCenteringLayoutProperty)})},
args: [],
source: "marginTop\x0a\x09^ 0 - ((self layout height / 2) + self value)",
messageSends: ["-", "+", "/", "height", "layout", "value"],
referencedClasses: []
}),
smalltalk.MKVerticalCenteringLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream).__lt_lt("top:50%;");
$ctx1.sendIdx["<<"]=1;
_st(_st(aStream).__lt_lt("margin-top:")).__lt_lt(_st(self._marginTop())._asMokaCssString());
$ctx1.sendIdx["<<"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},smalltalk.MKVerticalCenteringLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << 'top:50%;'.\x0a\x09aStream << 'margin-top:' << self marginTop asMokaCssString",
messageSends: ["<<", "asMokaCssString", "marginTop"],
referencedClasses: []
}),
smalltalk.MKVerticalCenteringLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "asMokaCssString",
category: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._abs()).__gt((1));
if(smalltalk.assert($2)){
$1=self._asMokaPixelString();
} else {
$1=self._asMokaPercentString();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMokaCssString",{},smalltalk.Number)})},
args: [],
source: "asMokaCssString\x0a\x09^ self abs > 1 \x09\x0a\x09\x09ifTrue: [ self asMokaPixelString ]\x0a\x09\x09ifFalse: [ self asMokaPercentString ]",
messageSends: ["ifTrue:ifFalse:", ">", "abs", "asMokaPixelString", "asMokaPercentString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaPercentString",
category: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self.__star((100)))._asString()).__comma("%");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMokaPercentString",{},smalltalk.Number)})},
args: [],
source: "asMokaPercentString\x0a\x09^ (self * 100) asString, '%'",
messageSends: [",", "asString", "*"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaPixelString",
category: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma("px");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMokaPixelString",{},smalltalk.Number)})},
args: [],
source: "asMokaPixelString\x0a\x09^ self asString, 'px'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaCssString",
category: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"asMokaCssString",{},smalltalk.String)})},
args: [],
source: "asMokaCssString\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

});
