smalltalk.addPackage('Canvas', {});
smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
'_root_',
smalltalk.method({
selector: 'root:',
fn: function (aTagBrush){
var self=this;
self['@root']=aTagBrush;
return self;}
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
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(($receiver = self['@root']) == nil || $receiver == undefined) ? (function(){return self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", ["div", self]);})() : $receiver;
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initializeFromJQuery_',
smalltalk.method({
selector: 'initializeFromJQuery:',
fn: function (aJQuery){
var self=this;
self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [aJQuery, self]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_newTag_',
smalltalk.method({
selector: 'newTag:',
fn: function (aString){
var self=this;
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", [aString, self]);
return self;}
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
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_script',
smalltalk.method({
selector: 'script',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["script"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_link',
smalltalk.method({
selector: 'link',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["link"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_style',
smalltalk.method({
selector: 'style',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["style"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_p_',
smalltalk.method({
selector: 'p:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_p", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h1_',
smalltalk.method({
selector: 'h1:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h1", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_iframe',
smalltalk.method({
selector: 'iframe',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["iframe"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_iframe_',
smalltalk.method({
selector: 'iframe:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_iframe", []), "_src_", [aString]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h2_',
smalltalk.method({
selector: 'h2:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h2", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h3_',
smalltalk.method({
selector: 'h3:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h3", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h4_',
smalltalk.method({
selector: 'h4:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h4", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h5_',
smalltalk.method({
selector: 'h5:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h5", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h6_',
smalltalk.method({
selector: 'h6:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h6", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_img_',
smalltalk.method({
selector: 'img:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_img", []), "_src_", [aString]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ol_',
smalltalk.method({
selector: 'ol:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ol", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_li_',
smalltalk.method({
selector: 'li:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_li", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ul_',
smalltalk.method({
selector: 'ul:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ul", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_span_',
smalltalk.method({
selector: 'span:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_span", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_style_',
smalltalk.method({
selector: 'style:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_with_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_style", []));
return self;}
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
}),
smalltalk.HTMLCanvas.klass);


smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
'_element',
smalltalk.method({
selector: 'element',
fn: function (){
var self=this;
return self['@element'];
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (anObject){
var self=this;
(function($rec){smalltalk.send($rec, "_empty", []);return smalltalk.send($rec, "_append_", [anObject]);})(self);
return self;}
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
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendChild_',
smalltalk.method({
selector: 'appendChild:',
fn: function (anElement){
var self=this;
var element=self['@element'];
 	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
 	} else {
 		element.text = String(element.text) +  anElement.innerHTML;
 	} ;
return self;}
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
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_empty',
smalltalk.method({
selector: 'empty',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
return self;}
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
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_type_',
smalltalk.method({
selector: 'type:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["type", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_media_',
smalltalk.method({
selector: 'media:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["media", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_rel_',
smalltalk.method({
selector: 'rel:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["rel", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_width_',
smalltalk.method({
selector: 'width:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["width", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_height_',
smalltalk.method({
selector: 'height:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["height", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["value", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
fn: function (){
var self=this;
return smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(self, "_element", [])]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyDown_',
smalltalk.method({
selector: 'onKeyDown:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keydown", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyPress_',
smalltalk.method({
selector: 'onKeyPress:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keypress", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyUp_',
smalltalk.method({
selector: 'onKeyUp:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keyup", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onFocus_',
smalltalk.method({
selector: 'onFocus:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["focus", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onBlur_',
smalltalk.method({
selector: 'onBlur:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["blur", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onChange_',
smalltalk.method({
selector: 'onChange:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["change", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onClick_',
smalltalk.method({
selector: 'onClick:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["click", aBlock]);
return self;}
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
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromJQuery_canvas_',
smalltalk.method({
selector: 'initializeFromJQuery:canvas:',
fn: function (aJQuery, aCanvas){
var self=this;
self['@element']=smalltalk.send(aJQuery, "_get_", [(0)]);
self['@canvas']=aCanvas;
return self;}
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
}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;}
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
}),
smalltalk.Widget);



smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_value_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendBlock_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
fn: function (){
var self=this;
return jQuery(String(self));
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendString_", [self]);
return self;}
}),
smalltalk.String);

