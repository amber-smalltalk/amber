smalltalk.addPackage('Helios-Layout');
smalltalk.addClass('HLContainer', smalltalk.Widget, ['splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: 'tool_container'; \x0a        with: self splitter.\x0a        \x0a   (window jQuery: window) bind: 'resize' do: [ self splitter resize ]",
messageSends: ["class:", "div", "with:", "splitter", "bind:do:", "resize", "jQuery:"],
referencedClasses: []
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter",
smalltalk.method({
selector: "splitter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@splitter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"splitter",{}, smalltalk.HLContainer)})},
args: [],
source: "splitter\x0a\x09^ splitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter_",
smalltalk.method({
selector: "splitter:",
category: 'accessing',
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@splitter"]=aSplitter;
return self}, function($ctx1) {$ctx1.fill(self,"splitter:",{aSplitter:aSplitter}, smalltalk.HLContainer)})},
args: ["aSplitter"],
source: "splitter: aSplitter\x0a\x09splitter := aSplitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContainer);


smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._splitter_(aSplitter);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{aSplitter:aSplitter}, smalltalk.HLContainer.klass)})},
args: ["aSplitter"],
source: "with: aSplitter\x0a\x09^ self new \x0a    \x09splitter: aSplitter; \x0a        yourself",
messageSends: ["splitter:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLContainer.klass);


smalltalk.addClass('HLSplitter', smalltalk.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "splitter";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLSplitter)})},
args: [],
source: "cssClass\x0a\x09^ 'splitter'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget",
smalltalk.method({
selector: "firstWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@firstWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstWidget",{}, smalltalk.HLSplitter)})},
args: [],
source: "firstWidget\x0a\x09^ firstWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget_",
smalltalk.method({
selector: "firstWidget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@firstWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"firstWidget:",{aWidget:aWidget}, smalltalk.HLSplitter)})},
args: ["aWidget"],
source: "firstWidget: aWidget\x0a\x09firstWidget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{}, smalltalk.HLSplitter)})},
args: [],
source: "isHeliosSplitter\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "panes";
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLSplitter)})},
args: [],
source: "panesCssClass\x0a\x09^ 'panes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self panesCssClass; with: [\x0a\x09\x09firstPane := html div class: 'pane'; with: self firstWidget.\x0a    \x09splitter := html div class: self cssClass.\x0a    \x09secondPane := html div class: 'pane'; with: self secondWidget ].\x0a        \x0a\x09self \x0a    \x09setupSplitter;\x0a        resize",
messageSends: ["class:", "panesCssClass", "div", "with:", "firstWidget", "cssClass", "secondWidget", "setupSplitter", "resize"],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'rendering',
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
args: [],
source: "resize\x0a\x09self firstWidget isHeliosSplitter ifTrue: [ self firstWidget resize ].\x0a    self secondWidget isHeliosSplitter ifTrue: [ self secondWidget resize ]",
messageSends: ["ifTrue:", "resize", "firstWidget", "isHeliosSplitter", "secondWidget"],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget",
smalltalk.method({
selector: "secondWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@secondWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"secondWidget",{}, smalltalk.HLSplitter)})},
args: [],
source: "secondWidget\x0a\x09^ secondWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget_",
smalltalk.method({
selector: "secondWidget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@secondWidget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"secondWidget:",{aWidget:aWidget}, smalltalk.HLSplitter)})},
args: ["aWidget"],
source: "secondWidget: aWidget\x0a\x09secondWidget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLSplitter)})},
args: [],
source: "setupSplitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);


smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
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
args: ["aWidget", "anotherWidget"],
source: "with: aWidget with: anotherWidget\x0a\x09^ self new\x0a    \x09\x09firstWidget: aWidget;\x0a            secondWidget: anotherWidget;\x0a            yourself",
messageSends: ["firstWidget:", "new", "secondWidget:", "yourself"],
referencedClasses: []
}),
smalltalk.HLSplitter.klass);


smalltalk.addClass('HLHorizontalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._cssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLHorizontalSplitter)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' horizontal'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLHorizontalSplitter)})},
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' horizontal'",
messageSends: [",", "panesCssClass"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._resize_(_st(_st(_st(self["@splitter"])._asJQuery())._offset())._top());
return self}, function($ctx1) {$ctx1.fill(self,"resize",{}, smalltalk.HLHorizontalSplitter)})},
args: [],
source: "resize\x0a\x09self resize: splitter asJQuery offset top",
messageSends: ["resize:", "top", "offset", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
category: 'actions',
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
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container position |\x0a    \x0a    container := firstPane asJQuery parent.\x0a    position := anInteger - container offset top.\x0a    \x0a\x09firstPane asJQuery height: ((position min: container height - 100) max: 100).\x0a    secondPane asJQuery height: (((container height - position) min: container height - 100) max: 100) - 1.\x0a    \x0a    super resize",
messageSends: ["parent", "asJQuery", "-", "top", "offset", "height:", "max:", "min:", "height", "resize"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._fromPairs_([_st("axis").__minus_gt("y"),_st("containment").__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),_st("helper").__minus_gt("clone"),_st("start").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),_st("drag").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._resize_(_st(_st(ui)._offset())._top());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLHorizontalSplitter)})},
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'y'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: ui offset top ] }",
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "top", "offset"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
category: 'actions',
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aSplitter)._width_(_st(_st(self["@splitter"])._asJQuery())._width());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter}, smalltalk.HLHorizontalSplitter)})},
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter width: splitter asJQuery width",
messageSends: ["width:", "width", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);



smalltalk.addClass('HLVerticalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._cssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.HLVerticalSplitter)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' vertical'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.HLSplitter.fn.prototype._panesCssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{}, smalltalk.HLVerticalSplitter)})},
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' vertical'",
messageSends: [",", "panesCssClass"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._resize_(_st(_st(_st(self["@splitter"])._asJQuery())._offset())._left());
return self}, function($ctx1) {$ctx1.fill(self,"resize",{}, smalltalk.HLVerticalSplitter)})},
args: [],
source: "resize\x0a\x09self resize: splitter asJQuery offset left",
messageSends: ["resize:", "left", "offset", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
category: 'actions',
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
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container position |\x0a    \x0a    container := firstPane asJQuery parent.\x0a    position := anInteger - container offset left.\x0a    \x0a\x09firstPane asJQuery width: ((position min: container width - 100) max: 100).\x0a    secondPane asJQuery width: (((container width - position) min: container width - 100) max: 100) - 1.\x0a    \x0a    super resize",
messageSends: ["parent", "asJQuery", "-", "left", "offset", "width:", "max:", "min:", "width", "resize"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@splitter"])._asJQuery())._draggable_(smalltalk.HashedCollection._fromPairs_([_st("axis").__minus_gt("x"),_st("containment").__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent()),_st("helper").__minus_gt("clone"),_st("start").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._startResizing_(_st(ui)._helper());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})})),_st("drag").__minus_gt((function(e,ui){
return smalltalk.withContext(function($ctx2) {return _st(self)._resize_(_st(_st(ui)._offset())._left());
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{}, smalltalk.HLVerticalSplitter)})},
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'x'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: ui offset left ] }",
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "left", "offset"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
category: 'actions',
fn: function (aSplitter){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aSplitter)._height_(_st(_st(self["@splitter"])._asJQuery())._height());
return self}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter}, smalltalk.HLVerticalSplitter)})},
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter height: splitter asJQuery height",
messageSends: ["height:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);



smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
category: '*Helios-Layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isHeliosSplitter",{}, smalltalk.Object)})},
args: [],
source: "isHeliosSplitter\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

