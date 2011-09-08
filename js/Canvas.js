smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
'_root_',
smalltalk.method({
selector: 'root:',
category: 'accessing',
fn: function (aTagBrush){
var self=this;
self['@root']=aTagBrush;
return self;},
args: ["aTagBrush"],
source: unescape('root%3A%20aTagBrush%0A%20%20%20%20root%20%3A%3D%20aTagBrush'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_root',
smalltalk.method({
selector: 'root',
category: 'accessing',
fn: function (){
var self=this;
return self['@root'];
return self;},
args: [],
source: unescape('root%0A%20%20%20%20%5Eroot'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_root", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%20%20%20%20%5Eself%20root%20with%3A%20anObject'),
messageSends: ["with:", "root"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(($receiver = self['@root']) == nil || $receiver == undefined) ? (function(){return self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", ["div", self]);})() : $receiver;
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20root%20ifNil%3A%20%5Broot%20%3A%3D%20TagBrush%20fromString%3A%20%27div%27%20canvas%3A%20self%5D'),
messageSends: ["initialize", "ifNil:", "fromString:canvas:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initializeFromJQuery_',
smalltalk.method({
selector: 'initializeFromJQuery:',
category: 'initialization',
fn: function (aJQuery){
var self=this;
self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [aJQuery, self]);
return self;},
args: ["aJQuery"],
source: unescape('initializeFromJQuery%3A%20aJQuery%0A%20%20%20%20root%20%3A%3D%20TagBrush%20fromJQuery%3A%20aJQuery%20canvas%3A%20self'),
messageSends: ["fromJQuery:canvas:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_newTag_',
smalltalk.method({
selector: 'newTag:',
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", [aString, self]);
return self;},
args: ["aString"],
source: unescape('newTag%3A%20aString%0A%20%20%20%20%5ETagBrush%20fromString%3A%20aString%20canvas%3A%20self'),
messageSends: ["fromString:canvas:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tag_',
smalltalk.method({
selector: 'tag:',
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.send(self['@root'], "_addBrush_", [smalltalk.send(self, "_newTag_", [aString])]);
return self;},
args: ["aString"],
source: unescape('tag%3A%20aString%0A%20%20%20%20%5Eroot%20addBrush%3A%20%28self%20newTag%3A%20aString%29'),
messageSends: ["addBrush:", "newTag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h1',
smalltalk.method({
selector: 'h1',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h1"]);
return self;},
args: [],
source: unescape('h1%0A%20%20%20%20%5Eself%20tag%3A%20%27h1%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h2',
smalltalk.method({
selector: 'h2',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h2"]);
return self;},
args: [],
source: unescape('h2%0A%20%20%20%20%5Eself%20tag%3A%20%27h2%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h3',
smalltalk.method({
selector: 'h3',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h3"]);
return self;},
args: [],
source: unescape('h3%0A%20%20%20%20%5Eself%20tag%3A%20%27h3%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h4',
smalltalk.method({
selector: 'h4',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h4"]);
return self;},
args: [],
source: unescape('h4%0A%20%20%20%20%5Eself%20tag%3A%20%27h4%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h5',
smalltalk.method({
selector: 'h5',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h5"]);
return self;},
args: [],
source: unescape('h5%0A%20%20%20%20%5Eself%20tag%3A%20%27h5%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h6',
smalltalk.method({
selector: 'h6',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["h6"]);
return self;},
args: [],
source: unescape('h6%0A%20%20%20%20%5Eself%20tag%3A%20%27h6%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_p',
smalltalk.method({
selector: 'p',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["p"]);
return self;},
args: [],
source: unescape('p%0A%20%20%20%20%5Eself%20tag%3A%20%27p%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_div',
smalltalk.method({
selector: 'div',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["div"]);
return self;},
args: [],
source: unescape('div%0A%20%20%20%20%5Eself%20tag%3A%20%27div%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_span',
smalltalk.method({
selector: 'span',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["span"]);
return self;},
args: [],
source: unescape('span%0A%20%20%20%20%5Eself%20tag%3A%20%27span%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_img',
smalltalk.method({
selector: 'img',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["img"]);
return self;},
args: [],
source: unescape('img%0A%20%20%20%20%5Eself%20tag%3A%20%27img%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ul',
smalltalk.method({
selector: 'ul',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ul"]);
return self;},
args: [],
source: unescape('ul%0A%20%20%20%20%5Eself%20tag%3A%20%27ul%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ol',
smalltalk.method({
selector: 'ol',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["ol"]);
return self;},
args: [],
source: unescape('ol%0A%20%20%20%20%5Eself%20tag%3A%20%27ol%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_li',
smalltalk.method({
selector: 'li',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["li"]);
return self;},
args: [],
source: unescape('li%0A%20%20%20%20%5Eself%20tag%3A%20%27li%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_table',
smalltalk.method({
selector: 'table',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["table"]);
return self;},
args: [],
source: unescape('table%0A%20%20%20%20%5Eself%20tag%3A%20%27table%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tr',
smalltalk.method({
selector: 'tr',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["tr"]);
return self;},
args: [],
source: unescape('tr%0A%20%20%20%20%5Eself%20tag%3A%20%27tr%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_td',
smalltalk.method({
selector: 'td',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["td"]);
return self;},
args: [],
source: unescape('td%20%0A%20%20%20%20%5Eself%20tag%3A%20%27td%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_th',
smalltalk.method({
selector: 'th',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["th"]);
return self;},
args: [],
source: unescape('th%0A%20%20%20%20%5Eself%20tag%3A%20%27th%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_form',
smalltalk.method({
selector: 'form',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["form"]);
return self;},
args: [],
source: unescape('form%0A%20%20%20%20%5Eself%20tag%3A%20%27form%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_input',
smalltalk.method({
selector: 'input',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["input"]);
return self;},
args: [],
source: unescape('input%0A%20%20%20%20%5Eself%20tag%3A%20%27input%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_button',
smalltalk.method({
selector: 'button',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["button"]);
return self;},
args: [],
source: unescape('button%0A%20%20%20%20%5Eself%20tag%3A%20%27button%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_select',
smalltalk.method({
selector: 'select',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["select"]);
return self;},
args: [],
source: unescape('select%0A%20%20%20%20%5Eself%20tag%3A%20%27select%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_option',
smalltalk.method({
selector: 'option',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["option"]);
return self;},
args: [],
source: unescape('option%0A%20%20%20%20%5Eself%20tag%3A%20%27option%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_textarea',
smalltalk.method({
selector: 'textarea',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["textarea"]);
return self;},
args: [],
source: unescape('textarea%0A%20%20%20%20%5Eself%20tag%3A%20%27textarea%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_a',
smalltalk.method({
selector: 'a',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["a"]);
return self;},
args: [],
source: unescape('a%0A%20%20%20%20%5Eself%20tag%3A%20%27a%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_canvas',
smalltalk.method({
selector: 'canvas',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["canvas"]);
return self;},
args: [],
source: unescape('canvas%0A%09%5Eself%20tag%3A%20%27canvas%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_pre',
smalltalk.method({
selector: 'pre',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["pre"]);
return self;},
args: [],
source: unescape('pre%0A%20%20%20%20%5Eself%20tag%3A%20%27pre%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_code',
smalltalk.method({
selector: 'code',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["code"]);
return self;},
args: [],
source: unescape('code%0A%20%20%20%20%5Eself%20tag%3A%20%27code%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_br',
smalltalk.method({
selector: 'br',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["br"]);
return self;},
args: [],
source: unescape('br%0A%20%20%20%20%5Eself%20tag%3A%20%27br%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_script',
smalltalk.method({
selector: 'script',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["script"]);
return self;},
args: [],
source: unescape('script%0A%20%20%20%20%5Eself%20tag%3A%20%27script%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_link',
smalltalk.method({
selector: 'link',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["link"]);
return self;},
args: [],
source: unescape('link%0A%20%20%20%20%5Eself%20tag%3A%20%27link%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_style',
smalltalk.method({
selector: 'style',
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["style"]);
return self;},
args: [],
source: unescape('style%0A%09%5Eself%20tag%3A%20%27style%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);


smalltalk.addMethod(
'_onJQuery_',
smalltalk.method({
selector: 'onJQuery:',
category: 'instance creation',
fn: function (aJQuery){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_", [aJQuery]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["aJQuery"],
source: unescape('onJQuery%3A%20aJQuery%0A%09%5Eself%20basicNew%0A%09%09initializeFromJQuery%3A%20aJQuery%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["initializeFromJQuery:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);


smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
'_element',
smalltalk.method({
selector: 'element',
category: 'accessing',
fn: function (){
var self=this;
return self['@element'];
return self;},
args: [],
source: unescape('element%0A%20%20%20%20%5Eelement'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
category: 'adding',
fn: function (anObject){
var self=this;
(function($rec){smalltalk.send($rec, "_empty", []);return smalltalk.send($rec, "_append_", [anObject]);})(self);
return self;},
args: ["anObject"],
source: unescape('contents%3A%20anObject%0A%20%20%20%20self%20%0A%09empty%3B%0A%20%20%20%09append%3A%20anObject'),
messageSends: ["empty", "append:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_addBrush_',
smalltalk.method({
selector: 'addBrush:',
category: 'adding',
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(aTagBrush, "_element", [])]);
return aTagBrush;
return self;},
args: ["aTagBrush"],
source: unescape('addBrush%3A%20aTagBrush%0A%20%20%20%20self%20appendChild%3A%20aTagBrush%20element.%0A%20%20%20%20%5EaTagBrush'),
messageSends: ["appendChild:", "element"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_append_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%20%20%20%20self%20append%3A%20anObject'),
messageSends: ["append:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_append_',
smalltalk.method({
selector: 'append:',
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(anObject, "_appendToBrush_", [self]);
return self;},
args: ["anObject"],
source: unescape('append%3A%20anObject%0A%20%20%20%20anObject%20appendToBrush%3A%20self'),
messageSends: ["appendToBrush:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: 'adding',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_addBrush_", [self]);
return self;},
args: ["aTagBrush"],
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20addBrush%3A%20self'),
messageSends: ["addBrush:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendBlock_',
smalltalk.method({
selector: 'appendBlock:',
category: 'adding',
fn: function (aBlock){
var self=this;
var root=nil;
root=smalltalk.send(self['@canvas'], "_root", []);
smalltalk.send(self['@canvas'], "_root_", [self]);
smalltalk.send(aBlock, "_value_", [self['@canvas']]);
smalltalk.send(self['@canvas'], "_root_", [root]);
return self;},
args: ["aBlock"],
source: unescape('appendBlock%3A%20aBlock%0A%20%20%20%20%7C%20root%20%7C%0A%20%20%20%20root%20%3A%3D%20canvas%20root.%0A%20%20%20%20canvas%20root%3A%20self.%0A%20%20%20%20aBlock%20value%3A%20canvas.%0A%20%20%20%20canvas%20root%3A%20root'),
messageSends: ["root", "root:", "value:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendChild_',
smalltalk.method({
selector: 'appendChild:',
category: 'adding',
fn: function (anElement){
var self=this;
var element=self['@element'];
 	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
 	} else {
 		element.text = String(element.text) +  anElement.innerHTML;
 	} ;
return self;},
args: ["anElement"],
source: unescape('appendChild%3A%20anElement%0A%09%22In%20IE7%20and%20IE8%20appendChild%20fails%20on%20several%20node%20types.%20So%20we%20need%20to%20check%22%20%0A%20%09%3Cvar%20element%3Dself%5B%27@element%27%5D%3B%0A%20%09if%20%28null%20%3D%3D%20element.canHaveChildren%20%7C%7C%20element.canHaveChildren%29%20%7B%0A%09%09element.appendChild%28anElement%29%3B%0A%20%09%7D%20else%20%7B%0A%20%09%09element.text%20%3D%20String%28element.text%29%20+%20%20anElement.innerHTML%3B%0A%20%09%7D%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendString_',
smalltalk.method({
selector: 'appendString:',
category: 'adding',
fn: function (aString){
var self=this;
smalltalk.send(self, "_appendChild_", [smalltalk.send(self, "_createTextNodeFor_", [aString])]);
return self;},
args: ["aString"],
source: unescape('appendString%3A%20aString%0A%20%20%20%20self%20appendChild%3A%20%28self%20createTextNodeFor%3A%20aString%29'),
messageSends: ["appendChild:", "createTextNodeFor:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'attributes',
fn: function (aString, aValue){
var self=this;
self['@element'].setAttribute(aString, aValue);
return self;},
args: ["aString", "aValue"],
source: unescape('at%3A%20aString%20put%3A%20aValue%0A%20%20%20%20%3Cself%5B%27@element%27%5D.setAttribute%28aString%2C%20aValue%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_removeAt_',
smalltalk.method({
selector: 'removeAt:',
category: 'attributes',
fn: function (aString){
var self=this;
self['@element'].removeAttribute(aString);
return self;},
args: ["aString"],
source: unescape('removeAt%3A%20aString%0A%20%20%20%20%3Cself%5B%27@element%27%5D.removeAttribute%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["class", aString]);
return self;},
args: ["aString"],
source: unescape('class%3A%20aString%0A%20%20%20%20self%20at%3A%20%27class%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["id", aString]);
return self;},
args: ["aString"],
source: unescape('id%3A%20aString%0A%20%20%20%20self%20at%3A%20%27id%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_src_',
smalltalk.method({
selector: 'src:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["src", aString]);
return self;},
args: ["aString"],
source: unescape('src%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27src%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_href_',
smalltalk.method({
selector: 'href:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["href", aString]);
return self;},
args: ["aString"],
source: unescape('href%3A%20aString%0A%20%20%20%20self%20at%3A%20%27href%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_title_',
smalltalk.method({
selector: 'title:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["title", aString]);
return self;},
args: ["aString"],
source: unescape('title%3A%20aString%0A%20%20%20%20self%20at%3A%20%27title%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_style_',
smalltalk.method({
selector: 'style:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["style", aString]);
return self;},
args: ["aString"],
source: unescape('style%3A%20aString%0A%20%20%20%20self%20at%3A%20%27style%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_type_',
smalltalk.method({
selector: 'type:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["type", aString]);
return self;},
args: ["aString"],
source: unescape('type%3A%20aString%0A%20%20%20%20self%20at%3A%20%27type%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_media_',
smalltalk.method({
selector: 'media:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["media", aString]);
return self;},
args: ["aString"],
source: unescape('media%3A%20aString%0A%20%20%20%20self%20at%3A%20%27media%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_rel_',
smalltalk.method({
selector: 'rel:',
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["rel", aString]);
return self;},
args: ["aString"],
source: unescape('rel%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27rel%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.JQuery._from_(jQuery(self['@element']));
return self;},
args: [],
source: unescape('asJQuery%0A%09%3Creturn%20smalltalk.JQuery._from_%28jQuery%28self%5B%27@element%27%5D%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQueryDo_',
smalltalk.method({
selector: 'asJQueryDo:',
category: 'converting',
fn: function (aBlock){
var self=this;
smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_asJQuery", [])]);
return self;},
args: ["aBlock"],
source: unescape('asJQueryDo%3A%20aBlock%0A%20%20%20%20aBlock%20value%3A%20self%20asJQuery'),
messageSends: ["value:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyDown_',
smalltalk.method({
selector: 'onKeyDown:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keydown", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyDown%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keydown%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyPress_',
smalltalk.method({
selector: 'onKeyPress:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keypress", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyPress%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keypress%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyUp_',
smalltalk.method({
selector: 'onKeyUp:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["keyup", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyUp%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keyup%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onFocus_',
smalltalk.method({
selector: 'onFocus:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["focus", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onFocus%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27focus%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onBlur_',
smalltalk.method({
selector: 'onBlur:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["blur", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onBlur%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27blur%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onChange_',
smalltalk.method({
selector: 'onChange:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["change", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onChange%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27change%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onClick_',
smalltalk.method({
selector: 'onClick:',
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_on_do_", ["click", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onClick%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27click%27%20do%3A%20aBlock'),
messageSends: ["on:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromString_canvas_',
smalltalk.method({
selector: 'initializeFromString:canvas:',
category: 'initialization',
fn: function (aString, aCanvas){
var self=this;
self['@element']=smalltalk.send(self, "_createElementFor_", [aString]);
self['@canvas']=aCanvas;
return self;},
args: ["aString", "aCanvas"],
source: unescape('initializeFromString%3A%20aString%20canvas%3A%20aCanvas%0A%20%20%20%20element%20%3A%3D%20self%20createElementFor%3A%20aString.%0A%20%20%20%20canvas%20%3A%3D%20aCanvas'),
messageSends: ["createElementFor:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromJQuery_canvas_',
smalltalk.method({
selector: 'initializeFromJQuery:canvas:',
category: 'initialization',
fn: function (aJQuery, aCanvas){
var self=this;
self['@element']=smalltalk.send(smalltalk.send(aJQuery, "_jquery", []), "_get_", [(0)]);
self['@canvas']=aCanvas;
return self;},
args: ["aJQuery", "aCanvas"],
source: unescape('initializeFromJQuery%3A%20aJQuery%20canvas%3A%20aCanvas%0A%20%20%20%20element%20%3A%3D%20aJQuery%20jquery%20get%3A%200.%0A%20%20%20%20canvas%20%3A%3D%20aCanvas'),
messageSends: ["get:", "jquery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createElementFor_',
smalltalk.method({
selector: 'createElementFor:',
category: 'private',
fn: function (aString){
var self=this;
return document.createElement(String(aString));
return self;},
args: ["aString"],
source: unescape('createElementFor%3A%20aString%0A%09%3Creturn%20document.createElement%28String%28aString%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createTextNodeFor_',
smalltalk.method({
selector: 'createTextNodeFor:',
category: 'private',
fn: function (aString){
var self=this;
return document.createTextNode(String(aString));
return self;},
args: ["aString"],
source: unescape('createTextNodeFor%3A%20aString%0A%09%3Creturn%20document.createTextNode%28String%28aString%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_empty',
smalltalk.method({
selector: 'empty',
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: unescape('empty%0A%09self%20asJQuery%20empty'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);


smalltalk.addMethod(
'_fromString_canvas_',
smalltalk.method({
selector: 'fromString:canvas:',
category: 'instance creation',
fn: function (aString, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromString_canvas_", [aString, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString", "aCanvas"],
source: unescape('fromString%3A%20aString%20canvas%3A%20aCanvas%0A%20%20%20%20%5Eself%20new%0A%09initializeFromString%3A%20aString%20canvas%3A%20aCanvas%3B%0A%09yourself'),
messageSends: ["initializeFromString:canvas:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TagBrush.klass);

smalltalk.addMethod(
'_fromJQuery_canvas_',
smalltalk.method({
selector: 'fromJQuery:canvas:',
category: 'instance creation',
fn: function (aJQuery, aCanvas){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeFromJQuery_canvas_", [aJQuery, aCanvas]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aJQuery", "aCanvas"],
source: unescape('fromJQuery%3A%20aJQuery%20canvas%3A%20aCanvas%0A%20%20%20%20%5Eself%20new%0A%09initializeFromJQuery%3A%20aJQuery%20canvas%3A%20aCanvas%3B%0A%09yourself'),
messageSends: ["initializeFromJQuery:canvas:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TagBrush.klass);


smalltalk.addClass('Widget', smalltalk.Object, [], 'Canvas');
smalltalk.addMethod(
'_alert_',
smalltalk.method({
selector: 'alert:',
category: 'actions',
fn: function (aString){
var self=this;
alert(aString);
return self;},
args: ["aString"],
source: unescape('alert%3A%20aString%0A%20%20%20%20%3Calert%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
'_confirm_',
smalltalk.method({
selector: 'confirm:',
category: 'actions',
fn: function (aString){
var self=this;
return window.confirm(aString);
return self;},
args: ["aString"],
source: unescape('confirm%3A%20aString%0A%20%20%20%20%3Creturn%20window.confirm%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_',
smalltalk.method({
selector: 'prompt:',
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_prompt_default_", [aString, ""]);
return self;},
args: ["aString"],
source: unescape('prompt%3A%20aString%0A%20%20%20%20%5Eself%20prompt%3A%20aString%20default%3A%20%27%27'),
messageSends: ["prompt:default:"],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_default_',
smalltalk.method({
selector: 'prompt:default:',
category: 'actions',
fn: function (aString, anotherString){
var self=this;
return window.prompt(aString, anotherString);
return self;},
args: ["aString", "anotherString"],
source: unescape('prompt%3A%20aString%20default%3A%20anotherString%0A%20%20%20%20%3Creturn%20window.prompt%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: 'adding',
fn: function (aTagBrush){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(aTagBrush, "_asJQuery", [])]);
return self;},
args: ["aTagBrush"],
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20self%20appendToJQuery%3A%20aTagBrush%20asJQuery'),
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: 'adding',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20aJQuery%29'),
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: [smalltalk.HTMLCanvas]
}),
smalltalk.Widget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html){
var self=this;
self;
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%20%20%20%20self'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget);



smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;},
args: ["aTagBrush"],
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20append%3A%20self%20asString'),
messageSends: ["append:", "asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendBlock_", [self]);
return self;},
args: ["aTagBrush"],
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20appendBlock%3A%20self'),
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
smalltalk.send(aTagBrush, "_appendString_", [self]);
return self;},
args: ["aTagBrush"],
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20appendString%3A%20self'),
messageSends: ["appendString:"],
referencedClasses: []
}),
smalltalk.String);

