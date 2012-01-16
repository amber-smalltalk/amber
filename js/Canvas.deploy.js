smalltalk.addPackage('Canvas', {});
smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
unescape('_root_'),
smalltalk.method({
selector: unescape('root%3A'),
fn: function (aTagBrush){
var self=this;
(self['@root']=aTagBrush);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_root'),
smalltalk.method({
selector: unescape('root'),
fn: function (){
var self=this;
return self['@root'];
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_root", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(($receiver = self['@root']) == nil || $receiver == undefined) ? (function(){return (self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", ["div", self]));})() : $receiver;
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_initializeFromJQuery_'),
smalltalk.method({
selector: unescape('initializeFromJQuery%3A'),
fn: function (aJQuery){
var self=this;
(self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [aJQuery, self]));
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_newTag_'),
smalltalk.method({
selector: unescape('newTag%3A'),
fn: function (aString){
var self=this;
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", [aString, self]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_tag_'),
smalltalk.method({
selector: unescape('tag%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(self['@root'], "_addBrush_", [smalltalk.send(self, "_newTag_", [aString])]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h1'),
smalltalk.method({
selector: unescape('h1'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h1"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h2'),
smalltalk.method({
selector: unescape('h2'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h2"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h3'),
smalltalk.method({
selector: unescape('h3'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h3"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h4'),
smalltalk.method({
selector: unescape('h4'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h4"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h5'),
smalltalk.method({
selector: unescape('h5'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h5"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h6'),
smalltalk.method({
selector: unescape('h6'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h6"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_p'),
smalltalk.method({
selector: unescape('p'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["p"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_div'),
smalltalk.method({
selector: unescape('div'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["div"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_span'),
smalltalk.method({
selector: unescape('span'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["span"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_img'),
smalltalk.method({
selector: unescape('img'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["img"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ul'),
smalltalk.method({
selector: unescape('ul'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ul"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ol'),
smalltalk.method({
selector: unescape('ol'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ol"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_li'),
smalltalk.method({
selector: unescape('li'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["li"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_table'),
smalltalk.method({
selector: unescape('table'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["table"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_tr'),
smalltalk.method({
selector: unescape('tr'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["tr"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_td'),
smalltalk.method({
selector: unescape('td'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["td"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_th'),
smalltalk.method({
selector: unescape('th'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["th"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_form'),
smalltalk.method({
selector: unescape('form'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["form"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_input'),
smalltalk.method({
selector: unescape('input'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["input"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_button'),
smalltalk.method({
selector: unescape('button'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["button"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_select'),
smalltalk.method({
selector: unescape('select'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["select"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_option'),
smalltalk.method({
selector: unescape('option'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["option"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_textarea'),
smalltalk.method({
selector: unescape('textarea'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["textarea"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_a'),
smalltalk.method({
selector: unescape('a'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["a"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_canvas'),
smalltalk.method({
selector: unescape('canvas'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["canvas"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_pre'),
smalltalk.method({
selector: unescape('pre'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["pre"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["code"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_br'),
smalltalk.method({
selector: unescape('br'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["br"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_script'),
smalltalk.method({
selector: unescape('script'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["script"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_link'),
smalltalk.method({
selector: unescape('link'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["link"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
fn: function (){
var self=this;
return smalltalk.send(self['@root'], "_addBrush_", [smalltalk.send((smalltalk.StyleTag || StyleTag), "_canvas_", [self])]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_p_'),
smalltalk.method({
selector: unescape('p%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_p", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h1_'),
smalltalk.method({
selector: unescape('h1%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h1", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_iframe'),
smalltalk.method({
selector: unescape('iframe'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["iframe"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_iframe_'),
smalltalk.method({
selector: unescape('iframe%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_iframe", []), "_src_", [aString]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h2_'),
smalltalk.method({
selector: unescape('h2%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h2", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h3_'),
smalltalk.method({
selector: unescape('h3%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h3", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h4_'),
smalltalk.method({
selector: unescape('h4%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h4", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h5_'),
smalltalk.method({
selector: unescape('h5%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h5", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h6_'),
smalltalk.method({
selector: unescape('h6%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h6", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_img_'),
smalltalk.method({
selector: unescape('img%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_img", []), "_src_", [aString]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ol_'),
smalltalk.method({
selector: unescape('ol%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ol", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_li_'),
smalltalk.method({
selector: unescape('li%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_li", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ul_'),
smalltalk.method({
selector: unescape('ul%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ul", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_span_'),
smalltalk.method({
selector: unescape('span%3A'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_span", []), "_with_", [anObject]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_with_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_style", []));
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_articles'),
smalltalk.method({
selector: unescape('articles'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["articles"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_audio'),
smalltalk.method({
selector: unescape('audio'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["audio"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_fieldset'),
smalltalk.method({
selector: unescape('fieldset'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["fieldset"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_footer'),
smalltalk.method({
selector: unescape('footer'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["footer"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_header'),
smalltalk.method({
selector: unescape('header'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["header"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_hr'),
smalltalk.method({
selector: unescape('hr'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["hr"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_section'),
smalltalk.method({
selector: unescape('section'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["section"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_tbody'),
smalltalk.method({
selector: unescape('tbody'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["tbody"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_tfoot'),
smalltalk.method({
selector: unescape('tfoot'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["tfoot"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_thead'),
smalltalk.method({
selector: unescape('thead'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["thead"]);
return self;}
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_video'),
smalltalk.method({
selector: unescape('video'),
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["video"]);
return self;}
}),
smalltalk.HTMLCanvas);


smalltalk.addMethod(
unescape('_onJQuery_'),
smalltalk.method({
selector: unescape('onJQuery%3A'),
fn: function (aJQuery){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_", [aJQuery]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
unescape('_isMSIE'),
smalltalk.method({
selector: unescape('isMSIE'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_at_", [smalltalk.symbolFor("browser")]), "_at_", [smalltalk.symbolFor("msie")]), "_notNil", []);
return self;}
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
unescape('_isOpera'),
smalltalk.method({
selector: unescape('isOpera'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_at_", [smalltalk.symbolFor("browser")]), "_at_", [smalltalk.symbolFor("opera")]), "_notNil", []);
return self;}
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
unescape('_isMozilla'),
smalltalk.method({
selector: unescape('isMozilla'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_at_", [smalltalk.symbolFor("browser")]), "_at_", [smalltalk.symbolFor("mozilla")]), "_notNil", []);
return self;}
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
unescape('_isWebkit'),
smalltalk.method({
selector: unescape('isWebkit'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_at_", [smalltalk.symbolFor("browser")]), "_at_", [smalltalk.symbolFor("webkit")]), "_notNil", []);
return self;}
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
unescape('_browserVersion'),
smalltalk.method({
selector: unescape('browserVersion'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_at_", [smalltalk.symbolFor("browser")]), "_version", []);
return self;}
}),
smalltalk.HTMLCanvas.klass);


smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
unescape('_element'),
smalltalk.method({
selector: unescape('element'),
fn: function (){
var self=this;
return self['@element'];
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_contents_'),
smalltalk.method({
selector: unescape('contents%3A'),
fn: function (anObject){
var self=this;
(function($rec){smalltalk.send($rec, "_empty", []);return smalltalk.send($rec, "_append_", [anObject]);})(self);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_addBrush_'),
smalltalk.method({
selector: unescape('addBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(aTagBrush, "_element", [])]);
return aTagBrush;
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject){
var self=this;
smalltalk.send(self, "_append_", [anObject]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
fn: function (anObject){
var self=this;
smalltalk.send(anObject, "_appendToBrush_", [self]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_addBrush_", [self]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_appendBlock_'),
smalltalk.method({
selector: unescape('appendBlock%3A'),
fn: function (aBlock){
var self=this;
var root=nil;
(root=smalltalk.send(self['@canvas'], "_root", []));
smalltalk.send(self['@canvas'], "_root_", [self]);
smalltalk.send(aBlock, "_value_", [self['@canvas']]);
smalltalk.send(self['@canvas'], "_root_", [root]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_appendChild_'),
smalltalk.method({
selector: unescape('appendChild%3A'),
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
unescape('_appendString_'),
smalltalk.method({
selector: unescape('appendString%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(self, "_createTextNodeFor_", [aString])]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_empty'),
smalltalk.method({
selector: unescape('empty'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aString, aValue){
var self=this;
self['@element'].setAttribute(aString, aValue);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_removeAt_'),
smalltalk.method({
selector: unescape('removeAt%3A'),
fn: function (aString){
var self=this;
self['@element'].removeAttribute(aString);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_class_'),
smalltalk.method({
selector: unescape('class%3A'),
fn: function (aString){
var self=this;
self['@element'].className = aString;
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["id", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["src", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_href_'),
smalltalk.method({
selector: unescape('href%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["href", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_title_'),
smalltalk.method({
selector: unescape('title%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["title", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["style", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_type_'),
smalltalk.method({
selector: unescape('type%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["type", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_media_'),
smalltalk.method({
selector: unescape('media%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["media", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_rel_'),
smalltalk.method({
selector: unescape('rel%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["rel", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_width_'),
smalltalk.method({
selector: unescape('width%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["width", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["height", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["value", aString]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(self, "_element", [])]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyDown_'),
smalltalk.method({
selector: unescape('onKeyDown%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keydown", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyPress_'),
smalltalk.method({
selector: unescape('onKeyPress%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keypress", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyUp_'),
smalltalk.method({
selector: unescape('onKeyUp%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keyup", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onFocus_'),
smalltalk.method({
selector: unescape('onFocus%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["focus", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onBlur_'),
smalltalk.method({
selector: unescape('onBlur%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["blur", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onChange_'),
smalltalk.method({
selector: unescape('onChange%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["change", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onClick_'),
smalltalk.method({
selector: unescape('onClick%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["click", aBlock]);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_initializeFromString_canvas_'),
smalltalk.method({
selector: unescape('initializeFromString%3Acanvas%3A'),
fn: function (aString, aCanvas){
var self=this;
(self['@element']=smalltalk.send(self, "_createElementFor_", [aString]));
(self['@canvas']=aCanvas);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_initializeFromJQuery_canvas_'),
smalltalk.method({
selector: unescape('initializeFromJQuery%3Acanvas%3A'),
fn: function (aJQuery, aCanvas){
var self=this;
(self['@element']=smalltalk.send(aJQuery, "_get_", [(0)]));
(self['@canvas']=aCanvas);
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_createElementFor_'),
smalltalk.method({
selector: unescape('createElementFor%3A'),
fn: function (aString){
var self=this;
return document.createElement(String(aString));
return self;}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_createTextNodeFor_'),
smalltalk.method({
selector: unescape('createTextNodeFor%3A'),
fn: function (aString){
var self=this;
return document.createTextNode(String(aString));
return self;}
}),
smalltalk.TagBrush);


smalltalk.addMethod(
unescape('_fromString_canvas_'),
smalltalk.method({
selector: unescape('fromString%3Acanvas%3A'),
fn: function (aString, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromString_canvas_", [aString, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TagBrush.klass);

smalltalk.addMethod(
unescape('_fromJQuery_canvas_'),
smalltalk.method({
selector: unescape('fromJQuery%3Acanvas%3A'),
fn: function (aJQuery, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_canvas_", [aJQuery, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TagBrush.klass);


smalltalk.addClass('Widget', smalltalk.Object, [], 'Canvas');
smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(aTagBrush, "_asJQuery", [])]);
return self;}
}),
smalltalk.Widget);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;}
}),
smalltalk.Widget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
self;
return self;}
}),
smalltalk.Widget);



smalltalk.addClass('StyleTag', smalltalk.TagBrush, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (aString){
var self=this;
((($receiver = smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_isMSIE", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_element", []), "_styleSheet", []), "_cssText_", [aString]);})() : (function(){return smalltalk.send(self, "_with_", [aString], smalltalk.TagBrush);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_element", []), "_styleSheet", []), "_cssText_", [aString]);}), (function(){return smalltalk.send(self, "_with_", [aString], smalltalk.TagBrush);})]));
return self;}
}),
smalltalk.StyleTag);


smalltalk.addMethod(
unescape('_canvas_'),
smalltalk.method({
selector: unescape('canvas%3A'),
fn: function (aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromString_canvas_", ["style", aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.StyleTag.klass);


smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_value_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendBlock_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return jQuery(String(self));
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendString_", [self]);
return self;}
}),
smalltalk.String);

