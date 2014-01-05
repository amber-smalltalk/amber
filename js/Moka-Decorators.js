define("amber_core/Moka-Decorators", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Moka-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Moka-Decorators');
smalltalk.packages["Moka-Decorators"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKDraggableDecorator', globals.MKDecorator, [], 'Moka-Decorators');


smalltalk.addClass('MKDroppableDecorator', globals.MKDecorator, ['droppableOptions'], 'Moka-Decorators');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultDroppableOptions",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["helper".__minus_gt("clone")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultDroppableOptions",{},globals.MKDroppableDecorator)})},
args: [],
source: "defaultDroppableOptions\x0a\x09^ { 'helper' -> 'clone' }",
messageSends: ["->"],
referencedClasses: []
}),
globals.MKDroppableDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "droppableOptions",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@droppableOptions"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultDroppableOptions();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"droppableOptions",{},globals.MKDroppableDecorator)})},
args: [],
source: "droppableOptions\x0a\x09^ droppableOptions ifNil: [ self defaultDroppableOptions ]",
messageSends: ["ifNil:", "defaultDroppableOptions"],
referencedClasses: []
}),
globals.MKDroppableDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "droppableOptions:",
protocol: 'accessing',
fn: function (aHashedCollection){
var self=this;
self["@droppableOptions"]=aHashedCollection;
return self},
args: ["aHashedCollection"],
source: "droppableOptions: aHashedCollection\x0a\x09droppableOptions := aHashedCollection",
messageSends: [],
referencedClasses: []
}),
globals.MKDroppableDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MKDroppableDecorator.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
_st(_st(self._decorated())._asJQuery())._droppable_(self._droppableOptions());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKDroppableDecorator)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09super renderContentOn: html.\x0a\x09self decorated asJQuery droppable: self droppableOptions",
messageSends: ["renderContentOn:", "droppable:", "asJQuery", "decorated", "droppableOptions"],
referencedClasses: []
}),
globals.MKDroppableDecorator);



smalltalk.addClass('MKModalDecorator', globals.MKDecorator, ['overlay', 'closeOnEnter', 'closeOnClick'], 'Moka-Decorators');
globals.MKModalDecorator.comment="I render my `decorated` view as a modal pane.";
smalltalk.addMethod(
smalltalk.method({
selector: "closeOnClick",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@closeOnClick"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"closeOnClick",{},globals.MKModalDecorator)})},
args: [],
source: "closeOnClick\x0a\x09^ closeOnClick ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "closeOnClick:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@closeOnClick"]=aBoolean;
return self},
args: ["aBoolean"],
source: "closeOnClick: aBoolean\x0a\x09closeOnClick := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "closeOnEnter",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@closeOnEnter"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"closeOnEnter",{},globals.MKModalDecorator)})},
args: [],
source: "closeOnEnter\x0a\x09^ closeOnEnter ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "closeOnEnter:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@closeOnEnter"]=aBoolean;
return self},
args: ["aBoolean"],
source: "closeOnEnter: aBoolean\x0a\x09closeOnEnter := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKModalDecorator.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_modal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKModalDecorator)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_modal'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKModalController(){return globals.MKModalController||(typeof MKModalController=="undefined"?nil:MKModalController)}
return $MKModalController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKModalController",
messageSends: [],
referencedClasses: ["MKModalController"]
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKModalDecorator.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._centerY_((0));
_st($2)._centerX_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKModalDecorator)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09centerY: 0;\x0a\x09\x09centerX: 0;\x22\x0a\x09\x09width: 300;\x0a\x09\x09height: 200;\x22\x0a\x09\x09yourself",
messageSends: ["centerY:", "defaultLayout", "centerX:", "yourself"],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "overlay",
protocol: 'accessing',
fn: function (){
var self=this;
function $MKOverlayView(){return globals.MKOverlayView||(typeof MKOverlayView=="undefined"?nil:MKOverlayView)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overlay"];
if(($receiver = $2) == nil || $receiver == null){
self["@overlay"]=_st($MKOverlayView())._childView_(self);
$1=self["@overlay"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overlay",{},globals.MKModalDecorator)})},
args: [],
source: "overlay\x0a\x09^ overlay ifNil: [ overlay := MKOverlayView childView: self ]",
messageSends: ["ifNil:", "childView:"],
referencedClasses: ["MKOverlayView"]
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MKModalDecorator.superclass.fn.prototype._renderOn_.apply(_st(self), [html]);
_st(self["@root"])._at_put_("tabindex","0");
_st(_st(self["@root"])._asJQuery())._focus();
_st(html)._with_(self._overlay());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MKModalDecorator)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09root at: 'tabindex' put: '0'.\x0a\x09root asJQuery focus.\x0a\x09html with: self overlay",
messageSends: ["renderOn:", "at:put:", "focus", "asJQuery", "with:", "overlay"],
referencedClasses: []
}),
globals.MKModalDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "zindex",
protocol: 'accessing',
fn: function (){
var self=this;
return (1001);
},
args: [],
source: "zindex\x0a\x09^ 1001",
messageSends: [],
referencedClasses: []
}),
globals.MKModalDecorator);



smalltalk.addClass('MKScrollDecorator', globals.MKDecorator, ['verticalScrollbar', 'horizontalScrollbar'], 'Moka-Decorators');
globals.MKScrollDecorator.comment="I decorate a view adding scrollbars around it.\x0a\x0aThe `decorated` view can send `MKViewScrolled` announcement to update the scrollbars position.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKScrollDecorator.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_scroll");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKScrollDecorator)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_scroll'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKScrollController(){return globals.MKScrollController||(typeof MKScrollController=="undefined"?nil:MKScrollController)}
return $MKScrollController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKScrollController",
messageSends: [],
referencedClasses: ["MKScrollController"]
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domDecoratedSize",
protocol: 'dom',
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $1;
element=_st(_st(self._decorated())._asJQuery())._get_((0));
$1=_st(_st(element)._scrollWidth()).__at(_st(element)._scrollHeight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domDecoratedSize",{element:element},globals.MKScrollDecorator)})},
args: [],
source: "domDecoratedSize\x0a\x09| element |\x0a\x09element := self decorated asJQuery get: 0.\x0a\x09^ element scrollWidth @ element scrollHeight",
messageSends: ["get:", "asJQuery", "decorated", "@", "scrollWidth", "scrollHeight"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domOverflow",
protocol: 'dom',
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
}, function($ctx1) {$ctx1.fill(self,"domOverflow",{element:element},globals.MKScrollDecorator)})},
args: [],
source: "domOverflow\x0a\x09| element |\x0a\x09element := self decorated asJQuery get: 0.\x0a\x09^ (element scrollWidth - element clientWidth) @ (element scrollHeight - element clientHeight)",
messageSends: ["get:", "asJQuery", "decorated", "@", "-", "scrollWidth", "clientWidth", "scrollHeight", "clientHeight"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollPercent",
protocol: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._domScrollbarPosition()).__slash(_st(self._domSize()).__minus(self._domScrollbarSize()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"domScrollPercent",{},globals.MKScrollDecorator)})},
args: [],
source: "domScrollPercent\x0a\x09^ self domScrollbarPosition / (self domSize - self domScrollbarSize)",
messageSends: ["/", "domScrollbarPosition", "-", "domSize", "domScrollbarSize"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollPosition",
protocol: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._domDecoratedSize()).__minus(self._domSize())).__star(self._domScrollPercent());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domScrollPosition",{},globals.MKScrollDecorator)})},
args: [],
source: "domScrollPosition\x0a\x09^ (self domDecoratedSize - self domSize) * self domScrollPercent",
messageSends: ["*", "-", "domDecoratedSize", "domSize", "domScrollPercent"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollbarPosition",
protocol: 'dom',
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
}, function($ctx1) {$ctx1.fill(self,"domScrollbarPosition",{},globals.MKScrollDecorator)})},
args: [],
source: "domScrollbarPosition\x0a\x09^ horizontalScrollbar asJQuery position left @ verticalScrollbar asJQuery position top",
messageSends: ["@", "left", "position", "asJQuery", "top"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "domScrollbarSize",
protocol: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(self["@horizontalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._width();
$1=_st($2).__at(_st(_st(self["@verticalScrollbar"])._asJQuery())._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domScrollbarSize",{},globals.MKScrollDecorator)})},
args: [],
source: "domScrollbarSize\x0a\x09^ horizontalScrollbar asJQuery width @ verticalScrollbar asJQuery height",
messageSends: ["@", "width", "asJQuery", "height"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "hasHorizontalOverflow",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._domOverflow())._x()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasHorizontalOverflow",{},globals.MKScrollDecorator)})},
args: [],
source: "hasHorizontalOverflow\x0a\x09^ self domOverflow x > 0",
messageSends: [">", "x", "domOverflow"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "hasVerticalOverflow",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._domOverflow())._y()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasVerticalOverflow",{},globals.MKScrollDecorator)})},
args: [],
source: "hasVerticalOverflow\x0a\x09^ self domOverflow y > 0",
messageSends: [">", "y", "domOverflow"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalScrollbar",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@horizontalScrollbar"];
return $1;
},
args: [],
source: "horizontalScrollbar\x0a\x09^ horizontalScrollbar",
messageSends: [],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "observeDecorated",
protocol: 'observing',
fn: function (){
var self=this;
function $MKViewScroll(){return globals.MKViewScroll||(typeof MKViewScroll=="undefined"?nil:MKViewScroll)}
return smalltalk.withContext(function($ctx1) { 
_st(self._decorated())._on_send_to_($MKViewScroll(),"onDecoratedScroll",self._controller());
return self}, function($ctx1) {$ctx1.fill(self,"observeDecorated",{},globals.MKScrollDecorator)})},
args: [],
source: "observeDecorated\x0a\x09self decorated \x0a\x09\x09on: MKViewScroll \x0a\x09\x09send: #onDecoratedScroll\x0a\x09\x09to: self controller",
messageSends: ["on:send:to:", "decorated", "controller"],
referencedClasses: ["MKViewScroll"]
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
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
return globals.MKScrollDecorator.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
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
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKScrollDecorator)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_container';\x0a\x09\x09with: [ super renderContentOn: html ].\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_rail vertical';\x0a\x09\x09with: [\x0a\x09\x09\x09verticalScrollbar := html div\x0a\x09\x09\x09\x09class: 'mk_scrollbar';\x0a\x09\x09\x09\x09yourself ].\x0a\x09html div \x0a\x09\x09class: 'mk_scroll_rail horizontal';\x0a\x09\x09with: [\x0a\x09\x09\x09horizontalScrollbar := html div\x0a\x09\x09\x09\x09class: 'mk_scrollbar';\x0a\x09\x09\x09\x09yourself ].\x0a\x09\x0a\x09self setupScrollbars",
messageSends: ["class:", "div", "with:", "renderContentOn:", "yourself", "setupScrollbars"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "resized",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MKScrollDecorator.superclass.fn.prototype._resized.apply(_st(self), []);
self._updateScrollbars();
return self}, function($ctx1) {$ctx1.fill(self,"resized",{},globals.MKScrollDecorator)})},
args: [],
source: "resized\x0a\x09super resized.\x0a\x09self updateScrollbars",
messageSends: ["resized", "updateScrollbars"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollDeltaX:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
var scrollbar,left,maxLeft;
return smalltalk.withContext(function($ctx1) { 
var $1;
scrollbar=_st(self._horizontalScrollbar())._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st(self._domSize())._x();
$ctx1.sendIdx["x"]=1;
maxLeft=_st($1).__minus(_st(scrollbar)._width());
left=_st(_st(_st(_st(_st(scrollbar)._position())._left()).__plus(aNumber))._max_((0)))._min_(maxLeft);
_st(scrollbar)._css_put_("left",left);
_st(_st(_st(self._decorated())._asJQuery())._get_((0)))._at_put_("scrollLeft",_st(self._domScrollPosition())._x());
return self}, function($ctx1) {$ctx1.fill(self,"scrollDeltaX:",{aNumber:aNumber,scrollbar:scrollbar,left:left,maxLeft:maxLeft},globals.MKScrollDecorator)})},
args: ["aNumber"],
source: "scrollDeltaX: aNumber\x0a\x09| scrollbar left maxLeft |\x0a\x09scrollbar := self horizontalScrollbar asJQuery.\x0a\x09maxLeft := self domSize x - scrollbar width.\x0a\x09left := ((scrollbar position left + aNumber) max: 0) min: maxLeft.\x0a\x09scrollbar css: 'left' put: left.\x0a\x09(self decorated asJQuery get: 0) at: 'scrollLeft' put: self domScrollPosition x",
messageSends: ["asJQuery", "horizontalScrollbar", "-", "x", "domSize", "width", "min:", "max:", "+", "left", "position", "css:put:", "at:put:", "get:", "decorated", "domScrollPosition"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollDeltaY:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
var scrollbar,top,maxTop;
return smalltalk.withContext(function($ctx1) { 
var $1;
scrollbar=_st(self._verticalScrollbar())._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st(self._domSize())._y();
$ctx1.sendIdx["y"]=1;
maxTop=_st($1).__minus(_st(scrollbar)._height());
$ctx1.sendIdx["-"]=1;
top=_st(_st(_st(_st(_st(scrollbar)._position())._top()).__minus(aNumber))._max_((0)))._min_(maxTop);
_st(scrollbar)._css_put_("top",top);
_st(_st(_st(self._decorated())._asJQuery())._get_((0)))._at_put_("scrollTop",_st(self._domScrollPosition())._y());
return self}, function($ctx1) {$ctx1.fill(self,"scrollDeltaY:",{aNumber:aNumber,scrollbar:scrollbar,top:top,maxTop:maxTop},globals.MKScrollDecorator)})},
args: ["aNumber"],
source: "scrollDeltaY: aNumber\x0a\x09| scrollbar top maxTop |\x0a\x09scrollbar := self verticalScrollbar asJQuery.\x0a\x09maxTop := self domSize y - scrollbar height.\x0a\x09top := ((scrollbar position top - aNumber) max: 0) min: maxTop.\x0a\x09scrollbar css: 'top' put: top.\x0a\x09(self decorated asJQuery get: 0) at: 'scrollTop' put: self domScrollPosition y",
messageSends: ["asJQuery", "verticalScrollbar", "-", "y", "domSize", "height", "min:", "max:", "top", "position", "css:put:", "at:put:", "get:", "decorated", "domScrollPosition"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollPercent",
protocol: 'accessing',
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
element=_st(_st(self._decorated())._asJQuery())._get_((0));
$2=_st(_st(element)._scrollLeft()).__slash(_st(element)._scrollWidth());
$ctx1.sendIdx["/"]=1;
$1=_st($2).__at(_st(_st(element)._scrollTop()).__slash(_st(element)._scrollHeight()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scrollPercent",{element:element},globals.MKScrollDecorator)})},
args: [],
source: "scrollPercent\x0a\x09| element |\x0a\x09element := self decorated asJQuery get: 0.\x0a\x09^ (element scrollLeft / element scrollWidth) @ (element scrollTop / element scrollHeight)",
messageSends: ["get:", "asJQuery", "decorated", "@", "/", "scrollLeft", "scrollWidth", "scrollTop", "scrollHeight"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollbarPosition",
protocol: 'accessing',
fn: function (){
var self=this;
var position;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
position=_st(self._scrollPercent()).__star(_st(self._domSize()).__minus(self._domScrollbarSize()));
$2=_st(_st(position)._x())._rounded();
$ctx1.sendIdx["rounded"]=1;
$1=_st($2).__at(_st(_st(position)._y())._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"scrollbarPosition",{position:position},globals.MKScrollDecorator)})},
args: [],
source: "scrollbarPosition\x0a\x09| position |\x0a\x09position := self scrollPercent * (self domSize - self domScrollbarSize).\x0a\x09^ position x rounded @ position y rounded",
messageSends: ["*", "scrollPercent", "-", "domSize", "domScrollbarSize", "@", "rounded", "x", "y"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollbarSize",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"scrollbarSize",{domSize:domSize,overflow:overflow},globals.MKScrollDecorator)})},
args: [],
source: "scrollbarSize\x0a\x09| domSize overflow |\x0a\x09\x0a\x09domSize := self domSize.\x0a\x09overflow := self domOverflow.\x0a\x09^ ((domSize x / (overflow x + domSize x)) * 100) @ ((domSize y / (overflow y + domSize y) * 100))",
messageSends: ["domSize", "domOverflow", "@", "*", "/", "x", "+", "y"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MKScrollDecorator.superclass.fn.prototype._setupEventHandlers.apply(_st(self), []);
_st(_st(self["@root"])._asJQuery())._mousewheel_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onMousewheel_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(_st(jQuery)._value_(window))._resize_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._resized();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},globals.MKScrollDecorator)})},
args: [],
source: "setupEventHandlers\x0a\x09super setupEventHandlers.\x0a\x09\x0a\x09root asJQuery mousewheel: [ :event | \x0a\x09\x09self controller onMousewheel: event ].\x0a\x09\x09\x0a\x09(jQuery value: window) resize: [ :event | \x0a\x09\x09self resized ]",
messageSends: ["setupEventHandlers", "mousewheel:", "asJQuery", "onMousewheel:", "controller", "resize:", "value:", "resized"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "setupScrollbars",
protocol: 'private',
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
$2=globals.HashedCollection._from_([$3,$4,$5]);
_st($1)._draggable_($2);
$ctx1.sendIdx["draggable:"]=1;
$7=_st(self["@horizontalScrollbar"])._asJQuery();
$9="containment".__minus_gt("parent");
$ctx1.sendIdx["->"]=4;
$10="axis".__minus_gt("x");
$ctx1.sendIdx["->"]=5;
$8=globals.HashedCollection._from_([$9,$10,"drag".__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onHorizontalDrag_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}))]);
_st($7)._draggable_($8);
self._updateScrollbars();
return self}, function($ctx1) {$ctx1.fill(self,"setupScrollbars",{},globals.MKScrollDecorator)})},
args: [],
source: "setupScrollbars\x0a\x09verticalScrollbar asJQuery draggable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'axis' -> 'y'.\x0a\x09\x09'drag' -> [ :event | self controller onVerticalDrag: event ]\x0a\x09}.\x0a\x09horizontalScrollbar asJQuery draggable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'axis' -> 'x'.\x0a\x09\x09'drag' -> [ :event | self controller onHorizontalDrag: event ]\x0a\x09}.\x0a\x09\x0a\x09self updateScrollbars",
messageSends: ["draggable:", "asJQuery", "->", "onVerticalDrag:", "controller", "onHorizontalDrag:", "updateScrollbars"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateScrollbars",
protocol: 'updating',
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
return self}, function($ctx1) {$ctx1.fill(self,"updateScrollbars",{width:width,height:height},globals.MKScrollDecorator)})},
args: [],
source: "updateScrollbars\x0a\x09| width height |\x0a\x09\x0a\x09width := self hasHorizontalOverflow\x0a\x09\x09ifTrue: [ self scrollbarSize x max: 10 ]\x0a\x09\x09ifFalse: [ 0 ].\x0a\x09height := self hasVerticalOverflow\x0a\x09\x09ifTrue: [ self scrollbarSize y max: 10 ]\x0a\x09\x09ifFalse: [ 0 ].\x0a\x09\x0a\x09horizontalScrollbar asJQuery \x0a\x09\x09width: width asString, '%'.\x0a\x09verticalScrollbar asJQuery \x0a\x09\x09height: height asString, '%'",
messageSends: ["ifTrue:ifFalse:", "hasHorizontalOverflow", "max:", "x", "scrollbarSize", "hasVerticalOverflow", "y", "width:", "asJQuery", ",", "asString", "height:"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateScrollbarsPosition",
protocol: 'updating',
fn: function (){
var self=this;
var position;
return smalltalk.withContext(function($ctx1) { 
var $1;
position=self._scrollbarPosition();
$1=_st(self["@horizontalScrollbar"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._css_put_("left",_st(position)._x());
$ctx1.sendIdx["css:put:"]=1;
_st(_st(self["@verticalScrollbar"])._asJQuery())._css_put_("top",_st(position)._y());
return self}, function($ctx1) {$ctx1.fill(self,"updateScrollbarsPosition",{position:position},globals.MKScrollDecorator)})},
args: [],
source: "updateScrollbarsPosition\x0a\x09| position |\x0a\x09position := self scrollbarPosition.\x0a\x09horizontalScrollbar asJQuery\x0a\x09\x09css: 'left' put: position x.\x0a\x09verticalScrollbar asJQuery\x0a\x09\x09css: 'top' put: position y",
messageSends: ["scrollbarPosition", "css:put:", "asJQuery", "x", "y"],
referencedClasses: []
}),
globals.MKScrollDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalScrollbar",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@verticalScrollbar"];
return $1;
},
args: [],
source: "verticalScrollbar\x0a\x09^ verticalScrollbar",
messageSends: [],
referencedClasses: []
}),
globals.MKScrollDecorator);


});
