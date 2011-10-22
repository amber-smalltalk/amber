smalltalk.addPackage('Canvas', {});
smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
unescape('_root_'),
smalltalk.method({
selector: unescape('root%3A'),
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
unescape('_root'),
smalltalk.method({
selector: unescape('root'),
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
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
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
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(($receiver = self['@root']) == nil || $receiver == undefined) ? (function(){return self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", ["div", self]);})() : $receiver;
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20root%20ifNil%3A%20%5Broot%20%3A%3D%20TagBrush%20fromString%3A%20%27div%27%20canvas%3A%20self%5D'),
messageSends: ["initialize", "ifNil:", "fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_initializeFromJQuery_'),
smalltalk.method({
selector: unescape('initializeFromJQuery%3A'),
category: 'initialization',
fn: function (aJQuery){
var self=this;
self['@root']=smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromJQuery_canvas_", [aJQuery, self]);
return self;},
args: ["aJQuery"],
source: unescape('initializeFromJQuery%3A%20aJQuery%0A%20%20%20%20root%20%3A%3D%20TagBrush%20fromJQuery%3A%20aJQuery%20canvas%3A%20self'),
messageSends: ["fromJQuery:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_newTag_'),
smalltalk.method({
selector: unescape('newTag%3A'),
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.send((smalltalk.TagBrush || TagBrush), "_fromString_canvas_", [aString, self]);
return self;},
args: ["aString"],
source: unescape('newTag%3A%20aString%0A%20%20%20%20%5ETagBrush%20fromString%3A%20aString%20canvas%3A%20self'),
messageSends: ["fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_tag_'),
smalltalk.method({
selector: unescape('tag%3A'),
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
unescape('_h1'),
smalltalk.method({
selector: unescape('h1'),
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
unescape('_h2'),
smalltalk.method({
selector: unescape('h2'),
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
unescape('_h3'),
smalltalk.method({
selector: unescape('h3'),
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
unescape('_h4'),
smalltalk.method({
selector: unescape('h4'),
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
unescape('_h5'),
smalltalk.method({
selector: unescape('h5'),
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
unescape('_h6'),
smalltalk.method({
selector: unescape('h6'),
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
unescape('_p'),
smalltalk.method({
selector: unescape('p'),
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
unescape('_div'),
smalltalk.method({
selector: unescape('div'),
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
unescape('_span'),
smalltalk.method({
selector: unescape('span'),
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
unescape('_img'),
smalltalk.method({
selector: unescape('img'),
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
unescape('_ul'),
smalltalk.method({
selector: unescape('ul'),
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
unescape('_ol'),
smalltalk.method({
selector: unescape('ol'),
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
unescape('_li'),
smalltalk.method({
selector: unescape('li'),
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
unescape('_table'),
smalltalk.method({
selector: unescape('table'),
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
unescape('_tr'),
smalltalk.method({
selector: unescape('tr'),
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
unescape('_td'),
smalltalk.method({
selector: unescape('td'),
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
unescape('_th'),
smalltalk.method({
selector: unescape('th'),
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
unescape('_form'),
smalltalk.method({
selector: unescape('form'),
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
unescape('_input'),
smalltalk.method({
selector: unescape('input'),
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
unescape('_button'),
smalltalk.method({
selector: unescape('button'),
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
unescape('_select'),
smalltalk.method({
selector: unescape('select'),
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
unescape('_option'),
smalltalk.method({
selector: unescape('option'),
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
unescape('_textarea'),
smalltalk.method({
selector: unescape('textarea'),
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
unescape('_a'),
smalltalk.method({
selector: unescape('a'),
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
unescape('_canvas'),
smalltalk.method({
selector: unescape('canvas'),
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
unescape('_pre'),
smalltalk.method({
selector: unescape('pre'),
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
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
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
unescape('_br'),
smalltalk.method({
selector: unescape('br'),
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
unescape('_script'),
smalltalk.method({
selector: unescape('script'),
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
unescape('_link'),
smalltalk.method({
selector: unescape('link'),
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
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
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
unescape('_p_'),
smalltalk.method({
selector: unescape('p%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_p", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('p%3A%20anObject%0A%20%20%20%20%5Eself%20p%20with%3A%20anObject'),
messageSends: ["with:", "p"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h1_'),
smalltalk.method({
selector: unescape('h1%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h1", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h1%3A%20anObject%0A%20%20%20%20%5Eself%20h1%20with%3A%20anObject'),
messageSends: ["with:", "h1"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_iframe'),
smalltalk.method({
selector: unescape('iframe'),
category: 'tags',
fn: function (){
var self=this;
return smalltalk.send(self, "_tag_", ["iframe"]);
return self;},
args: [],
source: unescape('iframe%0A%20%20%20%20%5Eself%20tag%3A%20%27iframe%27'),
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_iframe_'),
smalltalk.method({
selector: unescape('iframe%3A'),
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_iframe", []), "_src_", [aString]);
return self;},
args: ["aString"],
source: unescape('iframe%3A%20aString%0A%20%20%20%20%5Eself%20iframe%20src%3A%20aString'),
messageSends: ["src:", "iframe"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h2_'),
smalltalk.method({
selector: unescape('h2%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h2", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h2%3A%20anObject%0A%20%20%20%20%5E%20self%20h2%20with%3A%20anObject'),
messageSends: ["with:", "h2"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h3_'),
smalltalk.method({
selector: unescape('h3%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h3", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h3%3A%20anObject%0A%20%20%20%20%5Eself%20h3%20with%3A%20anObject'),
messageSends: ["with:", "h3"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h4_'),
smalltalk.method({
selector: unescape('h4%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h4", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h4%3A%20anObject%0A%20%20%20%20%5Eself%20h4%20with%3A%20anObject'),
messageSends: ["with:", "h4"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h5_'),
smalltalk.method({
selector: unescape('h5%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h5", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h5%3A%20anObject%0A%20%20%20%20%5Eself%20h5%20with%3A%20anObject'),
messageSends: ["with:", "h5"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_h6_'),
smalltalk.method({
selector: unescape('h6%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_h6", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('h6%3A%20anObject%0A%20%20%20%20%5Eself%20h6%20with%3A%20anObject'),
messageSends: ["with:", "h6"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_img_'),
smalltalk.method({
selector: unescape('img%3A'),
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_img", []), "_src_", [aString]);
return self;},
args: ["aString"],
source: unescape('img%3A%20aString%0A%20%20%20%20%5Eself%20img%20src%3A%20aString'),
messageSends: ["src:", "img"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ol_'),
smalltalk.method({
selector: unescape('ol%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ol", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('ol%3A%20anObject%0A%20%20%20%20%5Eself%20ol%20with%3A%20anObject'),
messageSends: ["with:", "ol"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_li_'),
smalltalk.method({
selector: unescape('li%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_li", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('li%3A%20anObject%0A%20%20%20%20%5Eself%20li%20with%3A%20anObject'),
messageSends: ["with:", "li"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_ul_'),
smalltalk.method({
selector: unescape('ul%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_ul", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('ul%3A%20anObject%0A%20%20%20%20%5Eself%20ul%20with%3A%20anObject'),
messageSends: ["with:", "ul"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_span_'),
smalltalk.method({
selector: unescape('span%3A'),
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_span", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('span%3A%20anObject%0A%20%20%20%20%5Eself%20span%20with%3A%20anObject'),
messageSends: ["with:", "span"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
category: 'tags',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_with_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_style", []));
return self;},
args: ["aString"],
source: unescape('style%3A%20aString%0A%09%5E%20self%20style%20with%3A%20aString%3B%20yourself'),
messageSends: ["with:", "yourself", "style"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);


smalltalk.addMethod(
unescape('_onJQuery_'),
smalltalk.method({
selector: unescape('onJQuery%3A'),
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
unescape('_element'),
smalltalk.method({
selector: unescape('element'),
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
unescape('_contents_'),
smalltalk.method({
selector: unescape('contents%3A'),
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
unescape('_addBrush_'),
smalltalk.method({
selector: unescape('addBrush%3A'),
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
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
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
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
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
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
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
unescape('_appendBlock_'),
smalltalk.method({
selector: unescape('appendBlock%3A'),
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
unescape('_appendChild_'),
smalltalk.method({
selector: unescape('appendChild%3A'),
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
unescape('_appendString_'),
smalltalk.method({
selector: unescape('appendString%3A'),
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
unescape('_empty'),
smalltalk.method({
selector: unescape('empty'),
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
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
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
unescape('_removeAt_'),
smalltalk.method({
selector: unescape('removeAt%3A'),
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
unescape('_class_'),
smalltalk.method({
selector: unescape('class%3A'),
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
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
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
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
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
unescape('_href_'),
smalltalk.method({
selector: unescape('href%3A'),
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
unescape('_title_'),
smalltalk.method({
selector: unescape('title%3A'),
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
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
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
unescape('_type_'),
smalltalk.method({
selector: unescape('type%3A'),
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
unescape('_media_'),
smalltalk.method({
selector: unescape('media%3A'),
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
unescape('_rel_'),
smalltalk.method({
selector: unescape('rel%3A'),
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
unescape('_width_'),
smalltalk.method({
selector: unescape('width%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["width", aString]);
return self;},
args: ["aString"],
source: unescape('width%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27width%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["height", aString]);
return self;},
args: ["aString"],
source: unescape('height%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27height%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'attributes',
fn: function (aString){
var self=this;
smalltalk.send(self, "_at_put_", ["value", aString]);
return self;},
args: ["aString"],
source: unescape('value%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27value%27%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [smalltalk.send(self, "_element", [])]);
return self;},
args: [],
source: unescape('asJQuery%0A%20%20%20%20%5Ewindow%20jQuery%3A%20self%20element'),
messageSends: ["jQuery:", "element"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyDown_'),
smalltalk.method({
selector: unescape('onKeyDown%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keydown", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyDown%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27keydown%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyPress_'),
smalltalk.method({
selector: unescape('onKeyPress%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keypress", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyPress%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27keypress%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onKeyUp_'),
smalltalk.method({
selector: unescape('onKeyUp%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["keyup", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onKeyUp%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27keyup%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onFocus_'),
smalltalk.method({
selector: unescape('onFocus%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["focus", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onFocus%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27focus%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onBlur_'),
smalltalk.method({
selector: unescape('onBlur%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["blur", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onBlur%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27blur%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onChange_'),
smalltalk.method({
selector: unescape('onChange%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["change", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onChange%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27change%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_onClick_'),
smalltalk.method({
selector: unescape('onClick%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_bind_do_", ["click", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onClick%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20bind%3A%20%27click%27%20do%3A%20aBlock'),
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_initializeFromString_canvas_'),
smalltalk.method({
selector: unescape('initializeFromString%3Acanvas%3A'),
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
unescape('_initializeFromJQuery_canvas_'),
smalltalk.method({
selector: unescape('initializeFromJQuery%3Acanvas%3A'),
category: 'initialization',
fn: function (aJQuery, aCanvas){
var self=this;
self['@element']=smalltalk.send(aJQuery, "_get_", [(0)]);
self['@canvas']=aCanvas;
return self;},
args: ["aJQuery", "aCanvas"],
source: unescape('initializeFromJQuery%3A%20aJQuery%20canvas%3A%20aCanvas%0A%20%20%20%20element%20%3A%3D%20aJQuery%20get%3A%200.%0A%20%20%20%20canvas%20%3A%3D%20aCanvas'),
messageSends: ["get:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
unescape('_createElementFor_'),
smalltalk.method({
selector: unescape('createElementFor%3A'),
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
unescape('_createTextNodeFor_'),
smalltalk.method({
selector: unescape('createTextNodeFor%3A'),
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
unescape('_fromString_canvas_'),
smalltalk.method({
selector: unescape('fromString%3Acanvas%3A'),
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
unescape('_fromJQuery_canvas_'),
smalltalk.method({
selector: unescape('fromJQuery%3Acanvas%3A'),
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
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
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
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: 'adding',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20aJQuery%29'),
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Widget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
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
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*Canvas',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [smalltalk.send(self, "_asString", [])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20append%3A%20self%20asString'),
messageSends: ["append:", "asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
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
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*Canvas',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_value_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20self%20value%3A%20%28HTMLCanvas%20onJQuery%3A%20aJQuery%29'),
messageSends: ["value:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
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
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: '*Canvas',
fn: function (){
var self=this;
return jQuery(String(self));
return self;},
args: [],
source: unescape('asJQuery%0A%20%20%20%20%3Creturn%20jQuery%28String%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToJQuery_'),
smalltalk.method({
selector: unescape('appendToJQuery%3A'),
category: '*Canvas',
fn: function (aJQuery){
var self=this;
smalltalk.send(aJQuery, "_append_", [self]);
return self;},
args: ["aJQuery"],
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20append%3A%20self'),
messageSends: ["append:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_appendToBrush_'),
smalltalk.method({
selector: unescape('appendToBrush%3A'),
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

