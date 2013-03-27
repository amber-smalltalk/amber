smalltalk.addPackage('Helios-Layout');
smalltalk.addClass('HLContainer', smalltalk.Widget, ['splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("tool_container");
$2=_st($1)._with_(_st(self)._splitter());
_st(_st(window)._jQuery_(window))._bind_do_("resize",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._splitter())._resize();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLContainer)})},
messageSends: ["class:", "div", "with:", "splitter", "bind:do:", "resize", "jQuery:"]}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter",
smalltalk.method({
selector: "splitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@splitter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"splitter",{}, smalltalk.HLContainer)})},
messageSends: []}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter_",
smalltalk.method({
selector: "splitter:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@splitter"]=aSplitter;
return self}, function($ctx1) {$ctx1.fill(self,"splitter:",{aSplitter:aSplitter}, smalltalk.HLContainer)})},
messageSends: []}),
smalltalk.HLContainer);


smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._splitter_(aSplitter);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{aSplitter:aSplitter}, smalltalk.HLContainer.klass)})},
messageSends: ["splitter:", "new", "yourself"]}),
smalltalk.HLContainer.klass);


smalltalk.addClass('HLSplitter', smalltalk.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "splitter";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget",
smalltalk.method({
selector: "firstWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@firstWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstWidget",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget_",
smalltalk.method({
selector: "firstWidget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@firstWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"firstWidget:",{aWidget:aWidget}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "panes";
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2,$7,$8;
$1=_st(html)._div();
_st($1)._class_(_st(self)._panesCssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._div();
_st($3)._class_("pane");
$4=_st($3)._with_(_st(self)._firstWidget());
self["@firstPane"]=$4;
self["@firstPane"];
self["@splitter"]=_st(_st(html)._div())._class_(_st(self)._cssClass());
self["@splitter"];
$5=_st(html)._div();
_st($5)._class_("pane");
$6=_st($5)._with_(_st(self)._secondWidget());
self["@secondPane"]=$6;
return self["@secondPane"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=self;
_st($7)._setupSplitter();
$8=_st($7)._resize();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.HLSplitter)})},
messageSends: ["class:", "panesCssClass", "div", "with:", "firstWidget", "cssClass", "secondWidget", "setupSplitter", "resize"]}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._firstWidget())._isHeliosSplitter();
if(smalltalk.assert($1)){
_st(_st(self)._firstWidget())._resize();
};
$2=_st(_st(self)._secondWidget())._isHeliosSplitter();
if(smalltalk.assert($2)){
_st(_st(self)._secondWidget())._resize();
};
return self}, function($ctx1) {$ctx1.fill(self,"resize",{}, smalltalk.HLSplitter)})},
messageSends: ["ifTrue:", "resize", "firstWidget", "isHeliosSplitter", "secondWidget"]}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget",
smalltalk.method({
selector: "secondWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@secondWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"secondWidget",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget_",
smalltalk.method({
selector: "secondWidget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@secondWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"secondWidget:",{aWidget:aWidget}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLSplitter)})},
messageSends: []}),
smalltalk.HLSplitter);


smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (aWidget,anotherWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._firstWidget_(aWidget);
_st($2)._secondWidget_(anotherWidget);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{aWidget:aWidget,anotherWidget:anotherWidget}, smalltalk.HLSplitter.klass)})},
messageSends: ["firstWidget:", "new", "secondWidget:", "yourself"]}),
smalltalk.HLSplitter.klass);


smalltalk.addClass('HLHorizontalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._cssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLHorizontalSplitter)})},
messageSends: [",", "cssClass"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLHorizontalSplitter)})},
messageSends: [",", "panesCssClass"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._resize_(_st(_st(_st(self["@splitter"])._asJQuery())._offset())._top());
return self}, function($ctx1) {$ctx1.fill(self,"resize",{}, smalltalk.HLHorizontalSplitter)})},
messageSends: ["resize:", "top", "offset", "asJQuery"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
fn: function (anInteger){
var self=this;
var container,position;
return smalltalk.withContext(function($ctx1) { 
container=_st(_st(self["@firstPane"])._asJQuery())._parent();
position=_st(anInteger).__minus(_st(_st(container)._offset())._top());
_st(_st(self["@firstPane"])._asJQuery())._height_(_st(_st(position)._min_(_st(_st(container)._height()).__minus((100))))._max_((100)));
_st(_st(self["@secondPane"])._asJQuery())._height_(_st(_st(_st(_st(_st(container)._height()).__minus(position))._min_(_st(_st(container)._height()).__minus((100))))._max_((100))).__minus((1)));
smalltalk.HLSplitter.fn.prototype._resize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,position:position},smalltalk.HLHorizontalSplitter)})},
messageSends: ["parent", "asJQuery", "-", "top", "offset", "height:", "max:", "min:", "height", "resize"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._fromPairs_([_st("axis").__minus_gt("y"),_st("containment").__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),_st("helper").__minus_gt("clone"),_st("start").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),_st("drag").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._resize_(_st(_st(ui)._offset())._top());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLHorizontalSplitter)})},
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "top", "offset"]}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aSplitter)._width_(_st(_st(self["@splitter"])._asJQuery())._width());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter}, smalltalk.HLHorizontalSplitter)})},
messageSends: ["width:", "width", "asJQuery"]}),
smalltalk.HLHorizontalSplitter);



smalltalk.addClass('HLVerticalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._cssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLVerticalSplitter)})},
messageSends: [",", "cssClass"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLVerticalSplitter)})},
messageSends: [",", "panesCssClass"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._resize_(_st(_st(_st(self["@splitter"])._asJQuery())._offset())._left());
return self}, function($ctx1) {$ctx1.fill(self,"resize",{}, smalltalk.HLVerticalSplitter)})},
messageSends: ["resize:", "left", "offset", "asJQuery"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
fn: function (anInteger){
var self=this;
var container,position;
return smalltalk.withContext(function($ctx1) { 
container=_st(_st(self["@firstPane"])._asJQuery())._parent();
position=_st(anInteger).__minus(_st(_st(container)._offset())._left());
_st(_st(self["@firstPane"])._asJQuery())._width_(_st(_st(position)._min_(_st(_st(container)._width()).__minus((100))))._max_((100)));
_st(_st(self["@secondPane"])._asJQuery())._width_(_st(_st(_st(_st(_st(container)._width()).__minus(position))._min_(_st(_st(container)._width()).__minus((100))))._max_((100))).__minus((1)));
smalltalk.HLSplitter.fn.prototype._resize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,position:position},smalltalk.HLVerticalSplitter)})},
messageSends: ["parent", "asJQuery", "-", "left", "offset", "width:", "max:", "min:", "width", "resize"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._fromPairs_([_st("axis").__minus_gt("x"),_st("containment").__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),_st("helper").__minus_gt("clone"),_st("start").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),_st("drag").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._resize_(_st(_st(ui)._offset())._left());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLVerticalSplitter)})},
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "left", "offset"]}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aSplitter)._height_(_st(_st(self["@splitter"])._asJQuery())._height());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter}, smalltalk.HLVerticalSplitter)})},
messageSends: ["height:", "height", "asJQuery"]}),
smalltalk.HLVerticalSplitter);



smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{}, smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

