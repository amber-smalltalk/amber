define("amber_core/Moka-Decorators", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Decorators');
smalltalk.packages["Moka-Decorators"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKScrollDecorator', smalltalk.MKDecorator, ['verticalScrollbar', 'horizontalScrollbar'], 'Moka-Decorators');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MKScrollDecorator.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_scroll");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_scroll'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKScrollController(){return smalltalk.MKScrollController||(typeof MKScrollController=="undefined"?nil:MKScrollController)}
return smalltalk.withContext(function($ctx1) { 
return $MKScrollController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKScrollController",
messageSends: [],
referencedClasses: ["MKScrollController"]
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domDecoratedSize",
category: 'dom',
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $1;
element=_st(_st(self._decorated())._asJQuery())._get_((0));
$1=_st(_st(element)._scrollWidth()).__at(_st(element)._scrollHeight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domDecoratedSize",{element:element},smalltalk.MKScrollDecorator)})},
args: [],
source: "domDecoratedSize\x0a\x09| element |\x0a\x09element := self decorated asJQuery get: 0.\x0a\x09^ element scrollWidth @ element scrollHeight",
messageSends: ["get:", "asJQuery", "decorated", "@", "scrollWidth", "scrollHeight"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domOverflow",
category: 'dom',
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
element=_st(_st(self._decorated())._asJQuery())._get_((0));
$2=_st(_st(element)._scrollWidth()).__minus(_st(element)._clientWidth());
$ctx1.sendIdx["-"]=1;
$1=_st($2).__at(_st(_st(element)._scrollHeight()).__minus(_st(element)._clientHeight()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"domOverflow",{element:element},smalltalk.MKScrollDecorator)})},
args: [],
source: "domOverflow\x0a\x09| element |\x0a\x09element := self decorated asJQuery get: 0.\x0a\x09^ (element scrollWidth - element clientWidth) @ (element scrollHeight - element clientHeight)",
messageSends: ["get:", "asJQuery", "decorated", "@", "-", "scrollWidth", "clientWidth", "scrollHeight", "clientHeight"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollPosition",
category: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(self["@horizontalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._position();
$ctx1.sendIdx["position"]=1;
$2=_st($3)._left();
$1=_st($2).__at(_st(_st(_st(self["@verticalScrollbar"])._asJQuery())._position())._top());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domScrollPosition",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "domScrollPosition\x0a\x09^ horizontalScrollbar asJQuery position left @ verticalScrollbar asJQuery position top",
messageSends: ["@", "left", "position", "asJQuery", "top"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollbarSize",
category: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(self["@horizontalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._width();
$1=_st($2).__at(_st(_st(self["@verticalScrollbar"])._asJQuery())._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domScrollbarSize",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "domScrollbarSize\x0a\x09^ horizontalScrollbar asJQuery width @ verticalScrollbar asJQuery height",
messageSends: ["@", "width", "asJQuery", "height"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "hasHorizontalOverflow",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._domOverflow())._x()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasHorizontalOverflow",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "hasHorizontalOverflow\x0a\x09^ self domOverflow x > 0",
messageSends: [">", "x", "domOverflow"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "hasVerticalOverflow",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._domOverflow())._y()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasVerticalOverflow",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "hasVerticalOverflow\x0a\x09^ self domOverflow y > 0",
messageSends: [">", "y", "domOverflow"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4,$7,$9,$10,$8;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("mk_scroll_container");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.MKScrollDecorator.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
$ctx1.sendIdx["div"]=2;
_st($3)._class_("mk_scroll_rail vertical");
$ctx1.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($5)._class_("mk_scrollbar");
$ctx2.sendIdx["class:"]=3;
$6=_st($5)._yourself();
$ctx2.sendIdx["yourself"]=1;
self["@verticalScrollbar"]=$6;
return self["@verticalScrollbar"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=2;
$7=_st(html)._div();
$ctx1.sendIdx["div"]=4;
_st($7)._class_("mk_scroll_rail horizontal");
$ctx1.sendIdx["class:"]=4;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(html)._div();
_st($9)._class_("mk_scrollbar");
$10=_st($9)._yourself();
self["@horizontalScrollbar"]=$10;
return self["@horizontalScrollbar"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
self._setupScrollbars();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKScrollDecorator)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_container';\x0a\x09\x09with: [ super renderContentOn: html ].\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_rail vertical';\x0a\x09\x09with: [\x0a\x09\x09\x09verticalScrollbar := html div\x0a\x09\x09\x09\x09class: 'mk_scrollbar';\x0a\x09\x09\x09\x09yourself ].\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_rail horizontal';\x0a\x09\x09with: [\x0a\x09\x09\x09horizontalScrollbar := html div\x0a\x09\x09\x09\x09class: 'mk_scrollbar';\x0a\x09\x09\x09\x09yourself ].\x0a\x09\x0a\x09self setupScrollbars",
messageSends: ["class:", "div", "with:", "renderContentOn:", "yourself", "setupScrollbars"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollbarSize",
category: 'accessing',
fn: function (){
var self=this;
var domSize,overflow;
return smalltalk.withContext(function($ctx1) { 
var $4,$6,$5,$3,$2,$9,$11,$10,$8,$7,$1;
domSize=self._domSize();
overflow=self._domOverflow();
$4=_st(domSize)._x();
$ctx1.sendIdx["x"]=1;
$6=_st(overflow)._x();
$ctx1.sendIdx["x"]=2;
$5=_st($6).__plus(_st(domSize)._x());
$ctx1.sendIdx["+"]=1;
$3=_st($4).__slash($5);
$ctx1.sendIdx["/"]=1;
$2=_st($3).__star((100));
$ctx1.sendIdx["*"]=1;
$9=_st(domSize)._y();
$ctx1.sendIdx["y"]=1;
$11=_st(overflow)._y();
$ctx1.sendIdx["y"]=2;
$10=_st($11).__plus(_st(domSize)._y());
$8=_st($9).__slash($10);
$7=_st($8).__star((100));
$1=_st($2).__at($7);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scrollbarSize",{domSize:domSize,overflow:overflow},smalltalk.MKScrollDecorator)})},
args: [],
source: "scrollbarSize\x0a\x09| domSize overflow |\x0a\x09\x0a\x09domSize := self domSize.\x0a\x09overflow := self domOverflow.\x0a\x09^ ((domSize x / (overflow x + domSize x)) * 100) @ ((domSize y / (overflow y + domSize y) * 100))",
messageSends: ["domSize", "domOverflow", "@", "*", "/", "x", "+", "y"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "setupScrollbars",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$5,$2,$7,$9,$10,$8;
$1=_st(self["@verticalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3="containment".__minus_gt("parent");
$ctx1.sendIdx["->"]=1;
$4="axis".__minus_gt("y");
$ctx1.sendIdx["->"]=2;
$5="drag".__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {
$6=self._controller();
$ctx2.sendIdx["controller"]=1;
return _st($6)._onVerticalDrag_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$ctx1.sendIdx["->"]=3;
$2=smalltalk.HashedCollection._from_([$3,$4,$5]);
_st($1)._draggable_($2);
$ctx1.sendIdx["draggable:"]=1;
$7=_st(self["@horizontalScrollbar"])._asJQuery();
$9="containment".__minus_gt("parent");
$ctx1.sendIdx["->"]=4;
$10="axis".__minus_gt("x");
$ctx1.sendIdx["->"]=5;
$8=smalltalk.HashedCollection._from_([$9,$10,"drag".__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onHorizontalDrag_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}))]);
_st($7)._draggable_($8);
self._updateScrollbars();
return self}, function($ctx1) {$ctx1.fill(self,"setupScrollbars",{},smalltalk.MKScrollDecorator)})},
args: [],
source: "setupScrollbars\x0a\x09verticalScrollbar asJQuery draggable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'axis' -> 'y'.\x0a\x09\x09'drag' -> [ :event | self controller onVerticalDrag: event ]\x0a\x09}.\x0a\x09horizontalScrollbar asJQuery draggable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'axis' -> 'x'.\x0a\x09\x09'drag' -> [ :event | self controller onHorizontalDrag: event ]\x0a\x09}.\x0a\x09\x0a\x09self updateScrollbars",
messageSends: ["draggable:", "asJQuery", "->", "onVerticalDrag:", "controller", "onHorizontalDrag:", "updateScrollbars"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateScrollbars",
category: 'updating',
fn: function (){
var self=this;
var width,height;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$7,$6;
$1=self._hasHorizontalOverflow();
if(smalltalk.assert($1)){
$3=self._scrollbarSize();
$ctx1.sendIdx["scrollbarSize"]=1;
$2=_st($3)._x();
width=_st($2)._max_((10));
$ctx1.sendIdx["max:"]=1;
} else {
width=(0);
};
$4=self._hasVerticalOverflow();
if(smalltalk.assert($4)){
height=_st(_st(self._scrollbarSize())._y())._max_((10));
} else {
height=(0);
};
$5=_st(self["@horizontalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$7=_st(width)._asString();
$ctx1.sendIdx["asString"]=1;
$6=_st($7).__comma("%");
$ctx1.sendIdx[","]=1;
_st($5)._width_($6);
_st(_st(self["@verticalScrollbar"])._asJQuery())._height_(_st(_st(height)._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"updateScrollbars",{width:width,height:height},smalltalk.MKScrollDecorator)})},
args: [],
source: "updateScrollbars\x0a\x09| width height |\x0a\x09\x0a\x09width := self hasHorizontalOverflow\x0a\x09\x09ifTrue: [ self scrollbarSize x max: 10 ]\x0a\x09\x09ifFalse: [ 0 ].\x0a\x09height := self hasVerticalOverflow\x0a\x09\x09ifTrue: [ self scrollbarSize y max: 10 ]\x0a\x09\x09ifFalse: [ 0 ].\x0a\x09\x0a\x09horizontalScrollbar asJQuery width: width asString, '%'.\x0a\x09verticalScrollbar asJQuery height: height asString, '%'",
messageSends: ["ifTrue:ifFalse:", "hasHorizontalOverflow", "max:", "x", "scrollbarSize", "hasVerticalOverflow", "y", "width:", "asJQuery", ",", "asString", "height:"],
referencedClasses: []
}),
smalltalk.MKScrollDecorator);


});
