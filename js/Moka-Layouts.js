define("amber_core/Moka-Layouts", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Moka-Layouts');
smalltalk.packages["Moka-Layouts"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKLayout', globals.Object, ['properties'], 'Moka-Layouts');
globals.MKLayout.comment="I am responsible for the layout of a `MKLayoutView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asCssString",
protocol: 'converting',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
}, function($ctx1) {$ctx1.fill(self,"asCssString",{},globals.MKLayout)})},
args: [],
source: "asCssString\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09properties valuesDo: [ :each | \x0a\x09\x09\x09each printCssOn: stream.\x0a\x09\x09\x09stream << ';' ] ]",
messageSends: ["streamContents:", "valuesDo:", "printCssOn:", "<<"],
referencedClasses: ["String"]
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"bottom:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "bottom: aNumber\x0a\x09properties \x0a\x09\x09at: 'bottom' \x0a\x09\x09put: (self propertyLabelled: 'bottom' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'top') ifTrue: [\x0a\x09\x09self removeProperty: 'height' ].\x0a\x09self removeProperty: 'centerY'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "centerX:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKHorizontalCenteringLayoutProperty(){return globals.MKHorizontalCenteringLayoutProperty||(typeof MKHorizontalCenteringLayoutProperty=="undefined"?nil:MKHorizontalCenteringLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("centerX",_st($MKHorizontalCenteringLayoutProperty())._layout_value_(self,aNumber));
self._removeProperty_("left");
$ctx1.sendIdx["removeProperty:"]=1;
$1=self._removeProperty_("right");
return self}, function($ctx1) {$ctx1.fill(self,"centerX:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "centerX: aNumber\x0a\x09properties\x0a\x09\x09at: 'centerX'\x0a\x09\x09put: (MKHorizontalCenteringLayoutProperty layout: self value: aNumber).\x0a\x09\x0a\x09self \x0a\x09\x09removeProperty: 'left';\x0a\x09\x09removeProperty: 'right'",
messageSends: ["at:put:", "layout:value:", "removeProperty:"],
referencedClasses: ["MKHorizontalCenteringLayoutProperty"]
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "centerY:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKVerticalCenteringLayoutProperty(){return globals.MKVerticalCenteringLayoutProperty||(typeof MKVerticalCenteringLayoutProperty=="undefined"?nil:MKVerticalCenteringLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("centerY",_st($MKVerticalCenteringLayoutProperty())._layout_value_(self,aNumber));
self._removeProperty_("top");
$ctx1.sendIdx["removeProperty:"]=1;
$1=self._removeProperty_("bottom");
return self}, function($ctx1) {$ctx1.fill(self,"centerY:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "centerY: aNumber\x0a\x09properties\x0a\x09\x09at: 'centerY'\x0a\x09\x09put: (MKVerticalCenteringLayoutProperty layout: self value: aNumber).\x0a\x09\x09\x0a\x09self \x0a\x09\x09removeProperty: 'top';\x0a\x09\x09removeProperty: 'bottom'",
messageSends: ["at:put:", "layout:value:", "removeProperty:"],
referencedClasses: ["MKVerticalCenteringLayoutProperty"]
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "hasProperty:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@properties"])._includesKey_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasProperty:",{aString:aString},globals.MKLayout)})},
args: ["aString"],
source: "hasProperty: aString\x0a\x09^ properties includesKey: aString",
messageSends: ["includesKey:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.MKLayout)})},
args: [],
source: "height\x0a\x09^ properties \x0a\x09\x09at: 'height' \x0a\x09\x09ifPresent: [ :property | property value ]\x0a\x09\x09ifAbsent: [ 1 ]",
messageSends: ["at:ifPresent:ifAbsent:", "value"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("height",self._propertyLabelled_value_("height",aNumber));
$1=self._hasProperty_("top");
if(smalltalk.assert($1)){
self._removeProperty_("bottom");
};
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09properties \x0a\x09\x09at: 'height' \x0a\x09\x09put: (self propertyLabelled: 'height' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'top') ifTrue: [\x0a\x09\x09self removeProperty: 'bottom' ]",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
globals.MKLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@properties"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MKLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09properties := Dictionary new",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "left: aNumber\x0a\x09properties \x0a\x09\x09at: 'left' \x0a\x09\x09put: (self propertyLabelled: 'left' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'width') ifTrue: [\x0a\x09\x09self removeProperty: 'right' ].\x0a\x09self removeProperty: 'centerX'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "propertyLabelled:value:",
protocol: 'factory',
fn: function (aString,aValue){
var self=this;
function $MKLabelledLayoutProperty(){return globals.MKLabelledLayoutProperty||(typeof MKLabelledLayoutProperty=="undefined"?nil:MKLabelledLayoutProperty)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MKLabelledLayoutProperty())._layout_label_value_(self,aString,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"propertyLabelled:value:",{aString:aString,aValue:aValue},globals.MKLayout)})},
args: ["aString", "aValue"],
source: "propertyLabelled: aString value: aValue\x0a\x09^ MKLabelledLayoutProperty layout: self label: aString value: aValue",
messageSends: ["layout:label:value:"],
referencedClasses: ["MKLabelledLayoutProperty"]
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProperty:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProperty:",{aString:aString},globals.MKLayout)})},
args: ["aString"],
source: "removeProperty: aString\x0a\x09properties remove: aString ifAbsent: []",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "right: aNumber\x0a\x09properties \x0a\x09\x09at: 'right' \x0a\x09\x09put: (self propertyLabelled: 'right' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'width') ifTrue: [\x0a\x09\x09self removeProperty: 'left' ].\x0a\x09self removeProperty: 'centerX'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"top:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "top: aNumber\x0a\x09properties \x0a\x09\x09at: 'top' \x0a\x09\x09put: (self propertyLabelled: 'top' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'height') ifTrue: [\x0a\x09\x09self removeProperty: 'bottom' ].\x0a\x09self removeProperty: 'centerY'",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"width",{},globals.MKLayout)})},
args: [],
source: "width\x0a\x09^ properties \x0a\x09\x09at: 'width' \x0a\x09\x09ifPresent: [ :property | property value ]\x0a\x09\x09ifAbsent: [ 1 ]",
messageSends: ["at:ifPresent:ifAbsent:", "value"],
referencedClasses: []
}),
globals.MKLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@properties"])._at_put_("width",self._propertyLabelled_value_("width",aNumber));
$1=self._hasProperty_("left");
if(smalltalk.assert($1)){
self._removeProperty_("right");
};
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},globals.MKLayout)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09properties \x0a\x09\x09at: 'width' \x0a\x09\x09put: (self propertyLabelled: 'width' value: aNumber).\x0a\x09\x0a\x09(self hasProperty: 'left') ifTrue: [\x0a\x09\x09self removeProperty: 'right' ]",
messageSends: ["at:put:", "propertyLabelled:value:", "ifTrue:", "hasProperty:", "removeProperty:"],
referencedClasses: []
}),
globals.MKLayout);



smalltalk.addClass('MKLabelLayout', globals.MKLayout, [], 'Moka-Layouts');
globals.MKLabelLayout.comment="I am a specialized layout for label views. I can set a `textAlign` property, taking a string argument, `'left'`, `'center'` or `'right'`.";
smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("text-align",self._propertyLabelled_value_("text-align",aString));
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{aString:aString},globals.MKLabelLayout)})},
args: ["aString"],
source: "textAlign: aString\x0a\x09\x22Map to CSS' text-align property. Possible values are `'left'`, `'center'` and `'right'`\x22\x0a\x09\x0a\x09properties \x0a\x09\x09at: 'text-align' \x0a\x09\x09put: (self propertyLabelled: 'text-align' value: aString)",
messageSends: ["at:put:", "propertyLabelled:value:"],
referencedClasses: []
}),
globals.MKLabelLayout);



smalltalk.addClass('MKPaneLayout', globals.MKLayout, [], 'Moka-Layouts');
globals.MKPaneLayout.comment="I am a specialized layout for pane views. I can set border widths to my views.";
smalltalk.addMethod(
smalltalk.method({
selector: "borderBottom:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-bottom",self._propertyLabelled_value_("border-bottom-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderBottom:",{aNumber:aNumber},globals.MKPaneLayout)})},
args: ["aNumber"],
source: "borderBottom: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-bottom' \x0a\x09\x09put: (self propertyLabelled: 'border-bottom-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
globals.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderLeft:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-left",self._propertyLabelled_value_("border-left-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderLeft:",{aNumber:aNumber},globals.MKPaneLayout)})},
args: ["aNumber"],
source: "borderLeft: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-left' \x0a\x09\x09put: (self propertyLabelled: 'border-left-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
globals.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderRight:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-right",self._propertyLabelled_value_("border-right-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderRight:",{aNumber:aNumber},globals.MKPaneLayout)})},
args: ["aNumber"],
source: "borderRight: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-right' \x0a\x09\x09put: (self propertyLabelled: 'border-right-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
globals.MKPaneLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "borderTop:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@properties"])._at_put_("border-top",self._propertyLabelled_value_("border-top-width",_st(aNumber)._asMokaPixelString()));
return self}, function($ctx1) {$ctx1.fill(self,"borderTop:",{aNumber:aNumber},globals.MKPaneLayout)})},
args: ["aNumber"],
source: "borderTop: aNumber\x0a\x09properties \x0a\x09\x09at: 'border-top' \x0a\x09\x09put: (self propertyLabelled: 'border-top-width' value: aNumber asMokaPixelString)",
messageSends: ["at:put:", "propertyLabelled:value:", "asMokaPixelString"],
referencedClasses: []
}),
globals.MKPaneLayout);



smalltalk.addClass('MKLayoutProperty', globals.Object, ['layout', 'value'], 'Moka-Layouts');
globals.MKLayoutProperty.comment="I represent a single layout property.";
smalltalk.addMethod(
smalltalk.method({
selector: "asCssString",
protocol: 'converting',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return self._printCssOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asCssString",{},globals.MKLayoutProperty)})},
args: [],
source: "asCssString\x0a\x09^ String streamContents: [ :stream | \x0a\x09\x09self printCssOn: stream ]",
messageSends: ["streamContents:", "printCssOn:"],
referencedClasses: ["String"]
}),
globals.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "layout",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@layout"];
return $1;
},
args: [],
source: "layout\x0a\x09^ layout",
messageSends: [],
referencedClasses: []
}),
globals.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:",
protocol: 'accessing',
fn: function (aLayout){
var self=this;
self["@layout"]=aLayout;
return self},
args: ["aLayout"],
source: "layout: aLayout\x0a\x09layout := aLayout",
messageSends: [],
referencedClasses: []
}),
globals.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},globals.MKLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;
},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
globals.MKLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
globals.MKLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "layout:value:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"layout:value:",{aLayout:aLayout,aValue:aValue},globals.MKLayoutProperty.klass)})},
args: ["aLayout", "aValue"],
source: "layout: aLayout value: aValue\x0a\x09^ self new\x0a\x09\x09layout: aLayout;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["layout:", "new", "value:", "yourself"],
referencedClasses: []
}),
globals.MKLayoutProperty.klass);


smalltalk.addClass('MKHorizontalCenteringLayoutProperty', globals.MKLayoutProperty, [], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "marginLeft",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(_st(_st(_st(self._layout())._width()).__slash((2))).__plus(self._value()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"marginLeft",{},globals.MKHorizontalCenteringLayoutProperty)})},
args: [],
source: "marginLeft\x0a\x09^ 0 - ((self layout width / 2) + self value)",
messageSends: ["-", "+", "/", "width", "layout", "value"],
referencedClasses: []
}),
globals.MKHorizontalCenteringLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream).__lt_lt("left:50%;");
$ctx1.sendIdx["<<"]=1;
_st(_st(aStream).__lt_lt("margin-left:")).__lt_lt(_st(self._marginLeft())._asMokaCssString());
$ctx1.sendIdx["<<"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},globals.MKHorizontalCenteringLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << 'left:50%;'.\x0a\x09aStream << 'margin-left:' << self marginLeft asMokaCssString",
messageSends: ["<<", "asMokaCssString", "marginLeft"],
referencedClasses: []
}),
globals.MKHorizontalCenteringLayoutProperty);



smalltalk.addClass('MKLabelledLayoutProperty', globals.MKLayoutProperty, ['label'], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
globals.MKLabelledLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.MKLabelledLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aStream).__lt_lt(self._label())).__lt_lt(":");
$ctx1.sendIdx["<<"]=2;
_st($1).__lt_lt(_st(self._value())._asMokaCssString());
$ctx1.sendIdx["<<"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},globals.MKLabelledLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << self label << ':' << self value asMokaCssString",
messageSends: ["<<", "label", "asMokaCssString", "value"],
referencedClasses: []
}),
globals.MKLabelledLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "layout:label:value:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"layout:label:value:",{aLayout:aLayout,aString:aString,aValue:aValue},globals.MKLabelledLayoutProperty.klass)})},
args: ["aLayout", "aString", "aValue"],
source: "layout: aLayout label: aString value: aValue\x0a\x09^ self new\x0a\x09\x09layout: aLayout;\x0a\x09\x09label: aString;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["layout:", "new", "label:", "value:", "yourself"],
referencedClasses: []
}),
globals.MKLabelledLayoutProperty.klass);


smalltalk.addClass('MKVerticalCenteringLayoutProperty', globals.MKLayoutProperty, [], 'Moka-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "marginTop",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(_st(_st(_st(self._layout())._height()).__slash((2))).__plus(self._value()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"marginTop",{},globals.MKVerticalCenteringLayoutProperty)})},
args: [],
source: "marginTop\x0a\x09^ 0 - ((self layout height / 2) + self value)",
messageSends: ["-", "+", "/", "height", "layout", "value"],
referencedClasses: []
}),
globals.MKVerticalCenteringLayoutProperty);

smalltalk.addMethod(
smalltalk.method({
selector: "printCssOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream).__lt_lt("top:50%;");
$ctx1.sendIdx["<<"]=1;
_st(_st(aStream).__lt_lt("margin-top:")).__lt_lt(_st(self._marginTop())._asMokaCssString());
$ctx1.sendIdx["<<"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"printCssOn:",{aStream:aStream},globals.MKVerticalCenteringLayoutProperty)})},
args: ["aStream"],
source: "printCssOn: aStream\x0a\x09aStream << 'top:50%;'.\x0a\x09aStream << 'margin-top:' << self marginTop asMokaCssString",
messageSends: ["<<", "asMokaCssString", "marginTop"],
referencedClasses: []
}),
globals.MKVerticalCenteringLayoutProperty);


smalltalk.addMethod(
smalltalk.method({
selector: "asMokaCssString",
protocol: '*Moka-Layouts',
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
}, function($ctx1) {$ctx1.fill(self,"asMokaCssString",{},globals.Number)})},
args: [],
source: "asMokaCssString\x0a\x09^ self abs > 1 \x09\x0a\x09\x09ifTrue: [ self asMokaPixelString ]\x0a\x09\x09ifFalse: [ self asMokaPercentString ]",
messageSends: ["ifTrue:ifFalse:", ">", "abs", "asMokaPixelString", "asMokaPercentString"],
referencedClasses: []
}),
globals.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaPercentString",
protocol: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self.__star((100)))._asString()).__comma("%");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMokaPercentString",{},globals.Number)})},
args: [],
source: "asMokaPercentString\x0a\x09^ (self * 100) asString, '%'",
messageSends: [",", "asString", "*"],
referencedClasses: []
}),
globals.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaPixelString",
protocol: '*Moka-Layouts',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma("px");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMokaPixelString",{},globals.Number)})},
args: [],
source: "asMokaPixelString\x0a\x09^ self asString, 'px'",
messageSends: [",", "asString"],
referencedClasses: []
}),
globals.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asMokaCssString",
protocol: '*Moka-Layouts',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asMokaCssString\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.String);

});
