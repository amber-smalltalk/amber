smalltalk.addPackage('Helios-Layout');
smalltalk.addClass('HLContainer', smalltalk.HLWidget, ['splitter'], 'Helios-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("tool_container");
$2=_st($1)._with_(self._splitter());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLContainer)})},
messageSends: ["class:", "div", "with:", "splitter"]}),
smalltalk.HLContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "splitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@splitter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"splitter",{},smalltalk.HLContainer)})},
messageSends: []}),
smalltalk.HLContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "splitter:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@splitter"]=aSplitter;
return self}, function($ctx1) {$ctx1.fill(self,"splitter:",{aSplitter:aSplitter},smalltalk.HLContainer)})},
messageSends: []}),
smalltalk.HLContainer);


smalltalk.addMethod(
smalltalk.method({
selector: "with:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._splitter_(aSplitter);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{aSplitter:aSplitter},smalltalk.HLContainer.klass)})},
messageSends: ["splitter:", "new", "yourself"]}),
smalltalk.HLContainer.klass);


smalltalk.addClass('HLSplitter', smalltalk.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "splitter";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "firstWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@firstWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstWidget",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "firstWidget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"firstWidget:",{aWidget:aWidget},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeliosSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "panes";
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_(self._panesCssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("pane");
$4=_st($3)._with_(self._firstWidget());
self["@firstPane"]=$4;
self["@firstPane"];
self["@splitter"]=_st(_st(html)._div())._class_(self._cssClass());
self["@splitter"];
$5=_st(html)._div();
_st($5)._class_("pane");
$6=_st($5)._with_(self._secondWidget());
self["@secondPane"]=$6;
return self["@secondPane"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._setupSplitter();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLSplitter)})},
messageSends: ["class:", "panesCssClass", "div", "with:", "firstWidget", "cssClass", "secondWidget", "setupSplitter"]}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"resize",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "secondWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@secondWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"secondWidget",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "secondWidget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@secondWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"secondWidget:",{aWidget:aWidget},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{},smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);


smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
fn: function (aWidget,anotherWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._firstWidget_(aWidget);
_st($2)._secondWidget_(anotherWidget);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{aWidget:aWidget,anotherWidget:anotherWidget},smalltalk.HLSplitter.klass)})},
messageSends: ["firstWidget:", "new", "secondWidget:", "yourself"]}),
smalltalk.HLSplitter.klass);


smalltalk.addClass('HLHorizontalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLHorizontalSplitter.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLHorizontalSplitter)})},
messageSends: [",", "cssClass"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLHorizontalSplitter.superclass.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{},smalltalk.HLHorizontalSplitter)})},
messageSends: [",", "panesCssClass"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resize_(_st(_st(self["@splitter"])._asJQuery())._css_("top"));
return self}, function($ctx1) {$ctx1.fill(self,"resize",{},smalltalk.HLHorizontalSplitter)})},
messageSends: ["resize:", "css:", "asJQuery"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "resize:",
fn: function (anInteger){
var self=this;
var container,size,offset,percentage;
return smalltalk.withContext(function($ctx1) { 
container=_st(_st(self["@firstPane"])._asJQuery())._parent();
offset=_st(_st(_st(self["@firstPane"])._asJQuery())._offset())._top();
size=_st(container)._height();
percentage=_st(_st(_st(size).__minus(_st(anInteger).__minus(offset))).__slash(size)).__star((100));
percentage=(80)._min_(_st(percentage)._max_((20)));
_st(_st(self["@firstPane"])._asJQuery())._css_put_("bottom",_st(_st(percentage)._asString()).__comma("%"));
_st(_st(self["@splitter"])._asJQuery())._css_put_("top",_st(_st((100).__minus(percentage))._asString()).__comma("%"));
_st(_st(self["@secondPane"])._asJQuery())._css_put_("top",_st(_st((100).__minus(percentage))._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,size:size,offset:offset,percentage:percentage},smalltalk.HLHorizontalSplitter)})},
messageSends: ["parent", "asJQuery", "top", "offset", "height", "*", "/", "-", "min:", "max:", "css:put:", ",", "asString"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._from_(["axis".__minus_gt("y"),"containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),"helper".__minus_gt("clone"),"start".__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {
return self._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),"drag".__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {
return self._resize_(_st(_st(ui)._offset())._top());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{},smalltalk.HLHorizontalSplitter)})},
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "top", "offset"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSplitter)._width_(_st(_st(self["@splitter"])._asJQuery())._width());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter},smalltalk.HLHorizontalSplitter)})},
messageSends: ["width:", "width", "asJQuery"]}),
smalltalk.HLHorizontalSplitter);



smalltalk.addClass('HLVerticalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLVerticalSplitter.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLVerticalSplitter)})},
messageSends: [",", "cssClass"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.HLVerticalSplitter.superclass.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{},smalltalk.HLVerticalSplitter)})},
messageSends: [",", "panesCssClass"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resize_(_st(_st(self["@splitter"])._asJQuery())._css_("left"));
return self}, function($ctx1) {$ctx1.fill(self,"resize",{},smalltalk.HLVerticalSplitter)})},
messageSends: ["resize:", "css:", "asJQuery"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "resize:",
fn: function (anInteger){
var self=this;
var container,size,offset,percentage;
return smalltalk.withContext(function($ctx1) { 
container=_st(_st(self["@firstPane"])._asJQuery())._parent();
offset=_st(_st(_st(self["@firstPane"])._asJQuery())._offset())._left();
size=_st(container)._width();
percentage=_st(_st(_st(size).__minus(_st(anInteger).__minus(offset))).__slash(size)).__star((100));
percentage=(80)._min_(_st(percentage)._max_((20)));
_st(_st(self["@firstPane"])._asJQuery())._css_put_("right",_st(_st(percentage)._asString()).__comma("%"));
_st(_st(self["@splitter"])._asJQuery())._css_put_("left",_st(_st((100).__minus(percentage))._asString()).__comma("%"));
_st(_st(self["@secondPane"])._asJQuery())._css_put_("left",_st(_st((100).__minus(percentage))._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,size:size,offset:offset,percentage:percentage},smalltalk.HLVerticalSplitter)})},
messageSends: ["parent", "asJQuery", "left", "offset", "width", "*", "/", "-", "min:", "max:", "css:put:", ",", "asString"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._from_(["axis".__minus_gt("x"),"containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),"helper".__minus_gt("clone"),"start".__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {
return self._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),"drag".__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {
return self._resize_(_st(_st(ui)._offset())._left());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{},smalltalk.HLVerticalSplitter)})},
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "left", "offset"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSplitter)._height_(_st(_st(self["@splitter"])._asJQuery())._height());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter},smalltalk.HLVerticalSplitter)})},
messageSends: ["height:", "height", "asJQuery"]}),
smalltalk.HLVerticalSplitter);



smalltalk.addMethod(
smalltalk.method({
selector: "isHeliosSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

