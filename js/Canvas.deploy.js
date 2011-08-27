smalltalk.addClass('CanvasRenderingContext', smalltalk.Object, [], 'Canvas');
smalltalk.addMethod(
'_fillStyle_',
smalltalk.method({
selector: 'fillStyle:',
fn: function (aString){
var self=this;
self.fillStyle = String(aString);
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_beginPath',
smalltalk.method({
selector: 'beginPath',
fn: function (){
var self=this;
self.beginPath();
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_closePath',
smalltalk.method({
selector: 'closePath',
fn: function (){
var self=this;
self.closePath();
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_fill',
smalltalk.method({
selector: 'fill',
fn: function (){
var self=this;
self.fill();
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_stroke',
smalltalk.method({
selector: 'stroke',
fn: function (){
var self=this;
self.stroke();
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_moveTo_',
smalltalk.method({
selector: 'moveTo:',
fn: function (aPoint){
var self=this;
self.moveTo(aPoint._x(), aPoint._y());
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_lineTo_',
smalltalk.method({
selector: 'lineTo:',
fn: function (aPoint){
var self=this;
self.lineTo(aPoint._x(), aPoint._y());
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_arcTo_radius_startAngle_endAngle_anticlockwise_',
smalltalk.method({
selector: 'arcTo:radius:startAngle:endAngle:anticlockwise:',
fn: function (aPoint, aNumber, aNumber2, aNumber3, aBoolean){
var self=this;
self.arc(aPoint._x(), aPoint._y(), aNumber, aNumber2, aNumber3, aBoolean);
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_arcTo_radius_',
smalltalk.method({
selector: 'arcTo:radius:',
fn: function (aPoint, aNumber){
var self=this;
smalltalk.send(self, "_arcTo_radius_startAngle_endAngle_anticlockwise_", [aPoint, aNumber, (0), smalltalk.send(smalltalk.send(smalltalk.Number, "_pi", []), "__star", [(2)]), false]);
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_fillRectFrom_to_',
smalltalk.method({
selector: 'fillRectFrom:to:',
fn: function (aPoint, anotherPoint){
var self=this;
self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_strokeRectFrom_to_',
smalltalk.method({
selector: 'strokeRectFrom:to:',
fn: function (aPoint, anotherPoint){
var self=this;
self.strokeRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_clearRectFrom_to_',
smalltalk.method({
selector: 'clearRectFrom:to:',
fn: function (aPoint, anotherPoint){
var self=this;
self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_strokeStyle_',
smalltalk.method({
selector: 'strokeStyle:',
fn: function (aString){
var self=this;
self.strokeStyle = String(aString);
return self;}
]
}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_lineWidth_',
smalltalk.method({
selector: 'lineWidth:',
fn: function (aNumber){
var self=this;
self.lineWidth = aNumber;
return self;}
]
}),
smalltalk.CanvasRenderingContext);


smalltalk.addMethod(
'_tagBrush_',
smalltalk.method({
selector: 'tagBrush:',
fn: function (aTagBrush){
var self=this;
return aTagBrush._element().getContext('2d');
return self;}
]
}),
smalltalk.CanvasRenderingContext.klass);


smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
'_root_',
smalltalk.method({
selector: 'root:',
fn: function (aTagBrush){
var self=this;
self['@root']=aTagBrush;
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_root',
smalltalk.method({
selector: 'root',
fn: function (){
var self=this;
return self['@root'];
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send(self['@root'], "_ifNil_", [(function(){return self['@root']=smalltalk.send(smalltalk.TagBrush, "_fromString_canvas_", ["div", self]);})]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_root", []), "_with_", [anObject]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_newTag_',
smalltalk.method({
selector: 'newTag:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.TagBrush, "_fromString_canvas_", [aString, self]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tag_',
smalltalk.method({
selector: 'tag:',
fn: function (aString){
var self=this;
return smalltalk.send(self['@root'], "_addBrush_", [smalltalk.send(self, "_newTag_", [aString])]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h1',
smalltalk.method({
selector: 'h1',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h1"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h2',
smalltalk.method({
selector: 'h2',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h2"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h3',
smalltalk.method({
selector: 'h3',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h3"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h4',
smalltalk.method({
selector: 'h4',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h4"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h5',
smalltalk.method({
selector: 'h5',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h5"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h6',
smalltalk.method({
selector: 'h6',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h6"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_p',
smalltalk.method({
selector: 'p',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["p"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_div',
smalltalk.method({
selector: 'div',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["div"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_span',
smalltalk.method({
selector: 'span',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["span"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_img',
smalltalk.method({
selector: 'img',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["img"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ul',
smalltalk.method({
selector: 'ul',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ul"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ol',
smalltalk.method({
selector: 'ol',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ol"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_li',
smalltalk.method({
selector: 'li',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["li"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_table',
smalltalk.method({
selector: 'table',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["table"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tr',
smalltalk.method({
selector: 'tr',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["tr"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_td',
smalltalk.method({
selector: 'td',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["td"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_th',
smalltalk.method({
selector: 'th',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["th"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_form',
smalltalk.method({
selector: 'form',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["form"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_input',
smalltalk.method({
selector: 'input',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["input"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_button',
smalltalk.method({
selector: 'button',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["button"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_select',
smalltalk.method({
selector: 'select',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["select"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_option',
smalltalk.method({
selector: 'option',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["option"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_textarea',
smalltalk.method({
selector: 'textarea',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["textarea"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_a',
smalltalk.method({
selector: 'a',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["a"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_canvas',
smalltalk.method({
selector: 'canvas',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["canvas"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initializeFromJQuery_',
smalltalk.method({
selector: 'initializeFromJQuery:',
fn: function (aJQuery){
var self=this;
self['@root']=smalltalk.send(smalltalk.TagBrush, "_fromJQuery_canvas_", [aJQuery, self]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_pre',
smalltalk.method({
selector: 'pre',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["pre"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_code',
smalltalk.method({
selector: 'code',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["code"]);
return self;}
]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_br',
smalltalk.method({
selector: 'br',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["br"]);
return self;}
]
}),
smalltalk.HTMLCanvas);


smalltalk.addMethod(
'_onJQuery_',
smalltalk.method({
selector: 'onJQuery:',
fn: function (aJQuery){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_", [aJQuery]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
]
}),
smalltalk.HTMLCanvas.klass);


smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
smalltalk.send(self, "_append_", [anObject]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_addBrush_',
smalltalk.method({
selector: 'addBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(aTagBrush, "_element", [])]);
return aTagBrush;
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_append_", [anObject]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_append_',
smalltalk.method({
selector: 'append:',
fn: function (anObject){
var self=this;
smalltalk.send(anObject, "_appendToBrush_", [self]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_addBrush_", [self]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendBlock_',
smalltalk.method({
selector: 'appendBlock:',
fn: function (aBlock){
var self=this;
var root=nil;
root=smalltalk.send(self['@canvas'], "_root", []);
smalltalk.send(self['@canvas'], "_root_", [self]);
smalltalk.send(aBlock, "_value_", [self['@canvas']]);
smalltalk.send(self['@canvas'], "_root_", [root]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendChild_',
smalltalk.method({
selector: 'appendChild:',
fn: function (anElement){
var self=this;
self['@element'].appendChild(anElement);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendString_',
smalltalk.method({
selector: 'appendString:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(self, "_createTextNodeFor_", [aString])]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aString, aValue){
var self=this;
self['@element'].setAttribute(aString, aValue);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_removeAt_',
smalltalk.method({
selector: 'removeAt:',
fn: function (aString){
var self=this;
self['@element'].removeAttribute(aString);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["class", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["id", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_src_',
smalltalk.method({
selector: 'src:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["src", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_href_',
smalltalk.method({
selector: 'href:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["href", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_title_',
smalltalk.method({
selector: 'title:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["title", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_style_',
smalltalk.method({
selector: 'style:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["style", aString]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromString_canvas_',
smalltalk.method({
selector: 'initializeFromString:canvas:',
fn: function (aString, aCanvas){
var self=this;
self['@element']=smalltalk.send(self, "_createElementFor_", [aString]);
self['@canvas']=aCanvas;
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_element',
smalltalk.method({
selector: 'element',
fn: function (){
var self=this;
return self['@element'];
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
fn: function (){
var self=this;
return smalltalk.JQuery._from_(jQuery(self['@element']));
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQueryDo_',
smalltalk.method({
selector: 'asJQueryDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_asJQuery", [])]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyDown_',
smalltalk.method({
selector: 'onKeyDown:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keydown", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyPress_',
smalltalk.method({
selector: 'onKeyPress:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keypress", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyUp_',
smalltalk.method({
selector: 'onKeyUp:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keyup", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onFocus_',
smalltalk.method({
selector: 'onFocus:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["focus", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onBlur_',
smalltalk.method({
selector: 'onBlur:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["blur", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onChange_',
smalltalk.method({
selector: 'onChange:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["change", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onClick_',
smalltalk.method({
selector: 'onClick:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["click", aBlock]);
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createElementFor_',
smalltalk.method({
selector: 'createElementFor:',
fn: function (aString){
var self=this;
return document.createElement(String(aString));
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createTextNodeFor_',
smalltalk.method({
selector: 'createTextNodeFor:',
fn: function (aString){
var self=this;
return document.createTextNode(String(aString));
return self;}
]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromJQuery_canvas_',
smalltalk.method({
selector: 'initializeFromJQuery:canvas:',
fn: function (aJQuery, aCanvas){
var self=this;
self['@element']=smalltalk.send(smalltalk.send(aJQuery, "_jquery", []), "_get_", [(0)]);
self['@canvas']=aCanvas;
return self;}
]
}),
smalltalk.TagBrush);


smalltalk.addMethod(
'_fromString_canvas_',
smalltalk.method({
selector: 'fromString:canvas:',
fn: function (aString, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromString_canvas_", [aString, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
]
}),
smalltalk.TagBrush.klass);

smalltalk.addMethod(
'_fromJQuery_canvas_',
smalltalk.method({
selector: 'fromJQuery:canvas:',
fn: function (aJQuery, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_canvas_", [aJQuery, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
]
}),
smalltalk.TagBrush.klass);


smalltalk.addClass('Widget', smalltalk.Object, [], 'Canvas');
smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(aTagBrush, "_asJQuery", [])]);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send(smalltalk.HTMLCanvas, "_onJQuery_", [aJQuery])]);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_alert_',
smalltalk.method({
selector: 'alert:',
fn: function (aString){
var self=this;
alert(aString);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_confirm_',
smalltalk.method({
selector: 'confirm:',
fn: function (aString){
var self=this;
return window.confirm(aString);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_',
smalltalk.method({
selector: 'prompt:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_prompt_default_", [aString, ""]);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_default_',
smalltalk.method({
selector: 'prompt:default:',
fn: function (aString, anotherString){
var self=this;
return window.prompt(aString, anotherString);
return self;}
]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self;
return self;}
]
}),
smalltalk.Widget);



smalltalk.addClass('CanvasBrush', smalltalk.TagBrush, [], 'Canvas');
smalltalk.addMethod(
'_createElement',
smalltalk.method({
selector: 'createElement',
fn: function (){
var self=this;
return document.createElement('canvas');
return self;}
]
}),
smalltalk.CanvasBrush);

smalltalk.addMethod(
'_initializeWithCanvas_',
smalltalk.method({
selector: 'initializeWithCanvas:',
fn: function (aCanvas){
var self=this;
canvas=aCanvas;
return self;}
]
}),
smalltalk.CanvasBrush);


smalltalk.addMethod(
'_canvas_',
smalltalk.method({
selector: 'canvas:',
fn: function (aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeWithCanvas_", [aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
]
}),
smalltalk.CanvasBrush.klass);


smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;}
]
}),
smalltalk.Object);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendBlock_", [self]);
return self;}
]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendString_", [self]);
return self;}
]
}),
smalltalk.String);

