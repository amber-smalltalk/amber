smalltalk.addPackage('Canvas');
smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.HTMLCanvas.comment="I am a canvas for building HTML.\x0a\x0aI provide the `#tag:` method to create a `TagBrush` (wrapping a DOM element) and convenience methods in the `tags` protocol.\x0a\x0a## API\x0a\x0aMy instances are used as the argument of the `#renderOn:` method of `Widget` objects.\x0a\x0aThe `#with:` method is used to compose HTML, nesting tags. `#with:` can take a `TagBrush`, a `String`, a `BlockClosure` or a `Widget` as argument.\x0a\x0a## Usage example:\x0a\x0a    aCanvas a \x0a        with: [ aCanvas span with: 'click me' ];\x0a        onClick: [ window alert: 'clicked!' ]";
smalltalk.addMethod(
smalltalk.method({
selector: "a",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("a");
return $1;
}, function($ctx1) {$ctx1.fill(self,"a",{},smalltalk.HTMLCanvas)})},
args: [],
source: "a\x0a\x09^self tag: 'a'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "abbr",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("abbr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"abbr",{},smalltalk.HTMLCanvas)})},
args: [],
source: "abbr\x0a\x09^self tag: 'abbr'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "address",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("address");
return $1;
}, function($ctx1) {$ctx1.fill(self,"address",{},smalltalk.HTMLCanvas)})},
args: [],
source: "address\x0a\x09^self tag: 'address'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "area",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("area");
return $1;
}, function($ctx1) {$ctx1.fill(self,"area",{},smalltalk.HTMLCanvas)})},
args: [],
source: "area\x0a\x09^self tag: 'area'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "article",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("article");
return $1;
}, function($ctx1) {$ctx1.fill(self,"article",{},smalltalk.HTMLCanvas)})},
args: [],
source: "article\x0a\x09^self tag: 'article'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "aside",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("aside");
return $1;
}, function($ctx1) {$ctx1.fill(self,"aside",{},smalltalk.HTMLCanvas)})},
args: [],
source: "aside\x0a\x09^self tag: 'aside'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "audio",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("audio");
return $1;
}, function($ctx1) {$ctx1.fill(self,"audio",{},smalltalk.HTMLCanvas)})},
args: [],
source: "audio\x0a\x09^self tag: 'audio'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "base",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("base");
return $1;
}, function($ctx1) {$ctx1.fill(self,"base",{},smalltalk.HTMLCanvas)})},
args: [],
source: "base\x0a\x09^self tag: 'base'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "blockquote",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("blockquote");
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockquote",{},smalltalk.HTMLCanvas)})},
args: [],
source: "blockquote\x0a\x09^self tag: 'blockquote'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "body",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("body");
return $1;
}, function($ctx1) {$ctx1.fill(self,"body",{},smalltalk.HTMLCanvas)})},
args: [],
source: "body\x0a\x09^self tag: 'body'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "br",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("br");
return $1;
}, function($ctx1) {$ctx1.fill(self,"br",{},smalltalk.HTMLCanvas)})},
args: [],
source: "br\x0a\x09^self tag: 'br'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "button",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("button");
return $1;
}, function($ctx1) {$ctx1.fill(self,"button",{},smalltalk.HTMLCanvas)})},
args: [],
source: "button\x0a\x09^self tag: 'button'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("canvas");
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.HTMLCanvas)})},
args: [],
source: "canvas\x0a\x09^self tag: 'canvas'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "caption",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("caption");
return $1;
}, function($ctx1) {$ctx1.fill(self,"caption",{},smalltalk.HTMLCanvas)})},
args: [],
source: "caption\x0a\x09^self tag: 'caption'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "cite",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("cite");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cite",{},smalltalk.HTMLCanvas)})},
args: [],
source: "cite\x0a\x09^self tag: 'cite'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "code",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("code");
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},smalltalk.HTMLCanvas)})},
args: [],
source: "code\x0a\x09^self tag: 'code'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "col",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("col");
return $1;
}, function($ctx1) {$ctx1.fill(self,"col",{},smalltalk.HTMLCanvas)})},
args: [],
source: "col\x0a\x09^self tag: 'col'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "colgroup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("colgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"colgroup",{},smalltalk.HTMLCanvas)})},
args: [],
source: "colgroup\x0a\x09^self tag: 'colgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "command",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("command");
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.HTMLCanvas)})},
args: [],
source: "command\x0a\x09^self tag: 'command'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "datalist",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("datalist");
return $1;
}, function($ctx1) {$ctx1.fill(self,"datalist",{},smalltalk.HTMLCanvas)})},
args: [],
source: "datalist\x0a\x09^self tag: 'datalist'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dd",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dd");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dd",{},smalltalk.HTMLCanvas)})},
args: [],
source: "dd\x0a\x09^self tag: 'dd'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "del",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("del");
return $1;
}, function($ctx1) {$ctx1.fill(self,"del",{},smalltalk.HTMLCanvas)})},
args: [],
source: "del\x0a\x09^self tag: 'del'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "details",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("details");
return $1;
}, function($ctx1) {$ctx1.fill(self,"details",{},smalltalk.HTMLCanvas)})},
args: [],
source: "details\x0a\x09^self tag: 'details'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "div",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("div");
return $1;
}, function($ctx1) {$ctx1.fill(self,"div",{},smalltalk.HTMLCanvas)})},
args: [],
source: "div\x0a\x09^self tag: 'div'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "div:",
category: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._div())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"div:",{aBlock:aBlock},smalltalk.HTMLCanvas)})},
args: ["aBlock"],
source: "div: aBlock\x0a\x09^self div with: aBlock",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dl",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dl");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dl",{},smalltalk.HTMLCanvas)})},
args: [],
source: "dl\x0a\x09^self tag: 'dl'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dt",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dt");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dt",{},smalltalk.HTMLCanvas)})},
args: [],
source: "dt\x0a\x09^self tag: 'dt'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "em",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("em");
return $1;
}, function($ctx1) {$ctx1.fill(self,"em",{},smalltalk.HTMLCanvas)})},
args: [],
source: "em\x0a\x09^self tag: 'em'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "embed",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("embed");
return $1;
}, function($ctx1) {$ctx1.fill(self,"embed",{},smalltalk.HTMLCanvas)})},
args: [],
source: "embed\x0a\x09^self tag: 'embed'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "entity:",
category: 'adding',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st(_st("<span />"._asJQuery())._html_(_st("&".__comma(aString)).__comma(";")))._text();
$1=_st(_st(result)._size()).__eq((1));
if(! smalltalk.assert($1)){
self._error_("Not an HTML entity: ".__comma(aString));
};
self._with_(result);
return self}, function($ctx1) {$ctx1.fill(self,"entity:",{aString:aString,result:result},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "entity: aString\x0a\x09\x22Adds a character representing html entity, eg.\x0a\x09html entity: 'copy'\x0a\x09adds a copyright sign.\x0a\x09If a name does not represent valid HTML entity, error is raised.\x22\x0a\x09| result |\x0a\x09result := ('<span />' asJQuery html: '&', aString, ';') text.\x0a\x09result size = 1 ifFalse: [ self error: 'Not an HTML entity: ', aString ].\x0a\x09self with: result",
messageSends: ["text", "html:", ",", "asJQuery", "ifFalse:", "error:", "=", "size", "with:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldset",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("fieldset");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldset",{},smalltalk.HTMLCanvas)})},
args: [],
source: "fieldset\x0a\x09^self tag: 'fieldset'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "figcaption",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("figcaption");
return $1;
}, function($ctx1) {$ctx1.fill(self,"figcaption",{},smalltalk.HTMLCanvas)})},
args: [],
source: "figcaption\x0a\x09^self tag: 'figcaption'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "figure",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("figure");
return $1;
}, function($ctx1) {$ctx1.fill(self,"figure",{},smalltalk.HTMLCanvas)})},
args: [],
source: "figure\x0a\x09^self tag: 'figure'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("footer");
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer",{},smalltalk.HTMLCanvas)})},
args: [],
source: "footer\x0a\x09^self tag: 'footer'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "form",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("form");
return $1;
}, function($ctx1) {$ctx1.fill(self,"form",{},smalltalk.HTMLCanvas)})},
args: [],
source: "form\x0a\x09^self tag: 'form'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h1",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h1",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h1\x0a\x09^self tag: 'h1'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h1:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h1())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h1:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h1: anObject\x0a\x09^self h1 with: anObject",
messageSends: ["with:", "h1"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h2",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h2");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h2",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h2\x0a\x09^self tag: 'h2'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h2:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h2())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h2:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h2: anObject\x0a\x09^ self h2 with: anObject",
messageSends: ["with:", "h2"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h3",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h3");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h3",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h3\x0a\x09^self tag: 'h3'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h3:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h3())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h3:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h3: anObject\x0a\x09^self h3 with: anObject",
messageSends: ["with:", "h3"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h4",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h4");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h4",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h4\x0a\x09^self tag: 'h4'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h4:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h4())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h4:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h4: anObject\x0a\x09^self h4 with: anObject",
messageSends: ["with:", "h4"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h5",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h5");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h5",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h5\x0a\x09^self tag: 'h5'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h5:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h5())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h5:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h5: anObject\x0a\x09^self h5 with: anObject",
messageSends: ["with:", "h5"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h6",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h6");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h6",{},smalltalk.HTMLCanvas)})},
args: [],
source: "h6\x0a\x09^self tag: 'h6'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h6:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h6())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h6:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "h6: anObject\x0a\x09^self h6 with: anObject",
messageSends: ["with:", "h6"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "head",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("head");
return $1;
}, function($ctx1) {$ctx1.fill(self,"head",{},smalltalk.HTMLCanvas)})},
args: [],
source: "head\x0a\x09^self tag: 'head'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("header");
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},smalltalk.HTMLCanvas)})},
args: [],
source: "header\x0a\x09^self tag: 'header'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hgroup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("hgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hgroup",{},smalltalk.HTMLCanvas)})},
args: [],
source: "hgroup\x0a\x09^self tag: 'hgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hr",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("hr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hr",{},smalltalk.HTMLCanvas)})},
args: [],
source: "hr\x0a\x09^self tag: 'hr'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "html",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("html");
return $1;
}, function($ctx1) {$ctx1.fill(self,"html",{},smalltalk.HTMLCanvas)})},
args: [],
source: "html\x0a\x09^self tag: 'html'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "iframe",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("iframe");
return $1;
}, function($ctx1) {$ctx1.fill(self,"iframe",{},smalltalk.HTMLCanvas)})},
args: [],
source: "iframe\x0a\x09^self tag: 'iframe'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "iframe:",
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._iframe())._src_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"iframe:",{aString:aString},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "iframe: aString\x0a\x09^self iframe src: aString",
messageSends: ["src:", "iframe"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "img",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"img",{},smalltalk.HTMLCanvas)})},
args: [],
source: "img\x0a\x09^self tag: 'img'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "img:",
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._img())._src_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"img:",{aString:aString},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "img: aString\x0a\x09^self img src: aString",
messageSends: ["src:", "img"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.HTMLCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@root"]=_st($TagBrush())._fromString_canvas_("div",self);
self["@root"];
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HTMLCanvas)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09root ifNil: [root := TagBrush fromString: 'div' canvas: self]",
messageSends: ["initialize", "ifNil:", "fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:",
category: 'initialization',
fn: function (aJQuery){
var self=this;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
self["@root"]=_st($TagBrush())._fromJQuery_canvas_(aJQuery,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},smalltalk.HTMLCanvas)})},
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09root := TagBrush fromJQuery: aJQuery canvas: self",
messageSends: ["fromJQuery:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("input");
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HTMLCanvas)})},
args: [],
source: "input\x0a\x09^self tag: 'input'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("label");
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HTMLCanvas)})},
args: [],
source: "label\x0a\x09^self tag: 'label'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "legend",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("legend");
return $1;
}, function($ctx1) {$ctx1.fill(self,"legend",{},smalltalk.HTMLCanvas)})},
args: [],
source: "legend\x0a\x09^self tag: 'legend'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "li",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("li");
return $1;
}, function($ctx1) {$ctx1.fill(self,"li",{},smalltalk.HTMLCanvas)})},
args: [],
source: "li\x0a\x09^self tag: 'li'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "li:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._li())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"li:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "li: anObject\x0a\x09^self li with: anObject",
messageSends: ["with:", "li"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "link",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("link");
return $1;
}, function($ctx1) {$ctx1.fill(self,"link",{},smalltalk.HTMLCanvas)})},
args: [],
source: "link\x0a\x09^self tag: 'link'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "map",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("map");
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{},smalltalk.HTMLCanvas)})},
args: [],
source: "map\x0a\x09^self tag: 'map'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("mark");
return $1;
}, function($ctx1) {$ctx1.fill(self,"mark",{},smalltalk.HTMLCanvas)})},
args: [],
source: "mark\x0a\x09^self tag: 'mark'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "menu",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("menu");
return $1;
}, function($ctx1) {$ctx1.fill(self,"menu",{},smalltalk.HTMLCanvas)})},
args: [],
source: "menu\x0a\x09^self tag: 'menu'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "meta",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("meta");
return $1;
}, function($ctx1) {$ctx1.fill(self,"meta",{},smalltalk.HTMLCanvas)})},
args: [],
source: "meta\x0a\x09^self tag: 'meta'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "nav",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("nav");
return $1;
}, function($ctx1) {$ctx1.fill(self,"nav",{},smalltalk.HTMLCanvas)})},
args: [],
source: "nav\x0a\x09^self tag: 'nav'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newTag:",
category: 'tags',
fn: function (aString){
var self=this;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TagBrush())._fromString_canvas_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTag:",{aString:aString},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "newTag: aString\x0a\x09^TagBrush fromString: aString canvas: self",
messageSends: ["fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "noscript",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("noscript");
return $1;
}, function($ctx1) {$ctx1.fill(self,"noscript",{},smalltalk.HTMLCanvas)})},
args: [],
source: "noscript\x0a\x09^self tag: 'noscript'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("object");
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.HTMLCanvas)})},
args: [],
source: "object\x0a\x09^self tag: 'object'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("ol");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol",{},smalltalk.HTMLCanvas)})},
args: [],
source: "ol\x0a\x09^self tag: 'ol'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._ol())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "ol: anObject\x0a\x09^self ol with: anObject",
messageSends: ["with:", "ol"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "optgroup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("optgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"optgroup",{},smalltalk.HTMLCanvas)})},
args: [],
source: "optgroup\x0a\x09^self tag: 'optgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "option",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("option");
return $1;
}, function($ctx1) {$ctx1.fill(self,"option",{},smalltalk.HTMLCanvas)})},
args: [],
source: "option\x0a\x09^self tag: 'option'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "output",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("output");
return $1;
}, function($ctx1) {$ctx1.fill(self,"output",{},smalltalk.HTMLCanvas)})},
args: [],
source: "output\x0a\x09^self tag: 'output'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "p",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("p");
return $1;
}, function($ctx1) {$ctx1.fill(self,"p",{},smalltalk.HTMLCanvas)})},
args: [],
source: "p\x0a\x09^self tag: 'p'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "p:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._p())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"p:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "p: anObject\x0a\x09^self p with: anObject",
messageSends: ["with:", "p"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "param",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("param");
return $1;
}, function($ctx1) {$ctx1.fill(self,"param",{},smalltalk.HTMLCanvas)})},
args: [],
source: "param\x0a\x09^self tag: 'param'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pre",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("pre");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pre",{},smalltalk.HTMLCanvas)})},
args: [],
source: "pre\x0a\x09^self tag: 'pre'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "progress",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("progress");
return $1;
}, function($ctx1) {$ctx1.fill(self,"progress",{},smalltalk.HTMLCanvas)})},
args: [],
source: "progress\x0a\x09^self tag: 'progress'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.HTMLCanvas)})},
args: [],
source: "root\x0a\x09^root",
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
category: 'accessing',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{aTagBrush:aTagBrush},smalltalk.HTMLCanvas)})},
args: ["aTagBrush"],
source: "root: aTagBrush\x0a\x09root := aTagBrush",
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "script",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("script");
return $1;
}, function($ctx1) {$ctx1.fill(self,"script",{},smalltalk.HTMLCanvas)})},
args: [],
source: "script\x0a\x09^self tag: 'script'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "section",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("section");
return $1;
}, function($ctx1) {$ctx1.fill(self,"section",{},smalltalk.HTMLCanvas)})},
args: [],
source: "section\x0a\x09^self tag: 'section'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("select");
return $1;
}, function($ctx1) {$ctx1.fill(self,"select",{},smalltalk.HTMLCanvas)})},
args: [],
source: "select\x0a\x09^self tag: 'select'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "small",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("small");
return $1;
}, function($ctx1) {$ctx1.fill(self,"small",{},smalltalk.HTMLCanvas)})},
args: [],
source: "small\x0a\x09^self tag: 'small'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "snippet:",
category: 'accessing',
fn: function (anElement){
var self=this;
var clone,caret;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
clone=_st(_st(anElement)._asJQuery())._clone();
self._with_(_st($TagBrush())._fromJQuery_canvas_(clone,self));
caret=_st(clone)._find_("[data-snippet=\x22*\x22]");
$1=_st(_st(caret)._toArray())._isEmpty();
if(smalltalk.assert($1)){
caret=clone;
caret;
};
$2=_st($TagBrush())._fromJQuery_canvas_(_st(caret)._removeAttr_("data-snippet"),self);
return $2;
}, function($ctx1) {$ctx1.fill(self,"snippet:",{anElement:anElement,clone:clone,caret:caret},smalltalk.HTMLCanvas)})},
args: ["anElement"],
source: "snippet: anElement\x0a\x09\x22Adds clone of anElement, finds [data-snippet=\x22\x22*\x22\x22] subelement\x0a\x09and returns TagBrush as if that subelement was just added.\x0a\x09\x0a\x09Rarely needed to use directly, use `html foo` dynamically installed method\x0a\x09for a snippet named foo.\x22\x0a\x09\x0a\x09| clone caret |\x0a\x09\x0a\x09clone := anElement asJQuery clone.\x0a\x09self with: (TagBrush fromJQuery: clone canvas: self).\x0a\x09caret := clone find: '[data-snippet=\x22*\x22]'.\x0a\x09caret toArray isEmpty ifTrue: [ caret := clone ].\x0a\x09^TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self",
messageSends: ["clone", "asJQuery", "with:", "fromJQuery:canvas:", "find:", "ifTrue:", "isEmpty", "toArray", "removeAttr:"],
referencedClasses: ["TagBrush"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("source");
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.HTMLCanvas)})},
args: [],
source: "source\x0a\x09^self tag: 'source'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "span",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("span");
return $1;
}, function($ctx1) {$ctx1.fill(self,"span",{},smalltalk.HTMLCanvas)})},
args: [],
source: "span\x0a\x09^self tag: 'span'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "span:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._span())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"span:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "span: anObject\x0a\x09^self span with: anObject",
messageSends: ["with:", "span"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "strong",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("strong");
return $1;
}, function($ctx1) {$ctx1.fill(self,"strong",{},smalltalk.HTMLCanvas)})},
args: [],
source: "strong\x0a\x09^self tag: 'strong'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "strong:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strong())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"strong:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "strong: anObject\x0a\x09^self strong with: anObject",
messageSends: ["with:", "strong"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'tags',
fn: function (){
var self=this;
function $StyleTag(){return smalltalk.StyleTag||(typeof StyleTag=="undefined"?nil:StyleTag)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@root"])._addBrush_(_st($StyleTag())._canvas_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.HTMLCanvas)})},
args: [],
source: "style\x0a\x09^ root addBrush: (StyleTag canvas: self)",
messageSends: ["addBrush:", "canvas:"],
referencedClasses: ["StyleTag"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "style:",
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._style();
_st($2)._with_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "style: aString\x0a\x09^ self style with: aString; yourself",
messageSends: ["with:", "style", "yourself"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "sub",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("sub");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sub",{},smalltalk.HTMLCanvas)})},
args: [],
source: "sub\x0a\x09^self tag: 'sub'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "summary",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("summary");
return $1;
}, function($ctx1) {$ctx1.fill(self,"summary",{},smalltalk.HTMLCanvas)})},
args: [],
source: "summary\x0a\x09^self tag: 'summary'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "sup",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("sup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sup",{},smalltalk.HTMLCanvas)})},
args: [],
source: "sup\x0a\x09^self tag: 'sup'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "table",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("table");
return $1;
}, function($ctx1) {$ctx1.fill(self,"table",{},smalltalk.HTMLCanvas)})},
args: [],
source: "table\x0a\x09^self tag: 'table'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tag:",
category: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@root"])._addBrush_(self._newTag_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tag:",{aString:aString},smalltalk.HTMLCanvas)})},
args: ["aString"],
source: "tag: aString\x0a\x09^root addBrush: (self newTag: aString)",
messageSends: ["addBrush:", "newTag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tbody",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tbody");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tbody",{},smalltalk.HTMLCanvas)})},
args: [],
source: "tbody\x0a\x09^self tag: 'tbody'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "td",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("td");
return $1;
}, function($ctx1) {$ctx1.fill(self,"td",{},smalltalk.HTMLCanvas)})},
args: [],
source: "td\x0a\x09^self tag: 'td'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "textarea",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("textarea");
return $1;
}, function($ctx1) {$ctx1.fill(self,"textarea",{},smalltalk.HTMLCanvas)})},
args: [],
source: "textarea\x0a\x09^self tag: 'textarea'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tfoot",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tfoot");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tfoot",{},smalltalk.HTMLCanvas)})},
args: [],
source: "tfoot\x0a\x09^self tag: 'tfoot'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "th",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("th");
return $1;
}, function($ctx1) {$ctx1.fill(self,"th",{},smalltalk.HTMLCanvas)})},
args: [],
source: "th\x0a\x09^self tag: 'th'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "thead",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("thead");
return $1;
}, function($ctx1) {$ctx1.fill(self,"thead",{},smalltalk.HTMLCanvas)})},
args: [],
source: "thead\x0a\x09^self tag: 'thead'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("time");
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.HTMLCanvas)})},
args: [],
source: "time\x0a\x09^self tag: 'time'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("title");
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.HTMLCanvas)})},
args: [],
source: "title\x0a\x09^self tag: 'title'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tr",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tr",{},smalltalk.HTMLCanvas)})},
args: [],
source: "tr\x0a\x09^self tag: 'tr'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("ul");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul",{},smalltalk.HTMLCanvas)})},
args: [],
source: "ul\x0a\x09^self tag: 'ul'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul:",
category: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._ul())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "ul: anObject\x0a\x09^self ul with: anObject",
messageSends: ["with:", "ul"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "video",
category: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("video");
return $1;
}, function($ctx1) {$ctx1.fill(self,"video",{},smalltalk.HTMLCanvas)})},
args: [],
source: "video\x0a\x09^self tag: 'video'",
messageSends: ["tag:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._root())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.HTMLCanvas)})},
args: ["anObject"],
source: "with: anObject\x0a\x09^self root with: anObject",
messageSends: ["with:", "root"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "browserVersion",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(jQuery)._at_("browser"))._version();
return $1;
}, function($ctx1) {$ctx1.fill(self,"browserVersion",{},smalltalk.HTMLCanvas.klass)})},
args: [],
source: "browserVersion\x0a\x09^(jQuery at: #browser) version",
messageSends: ["version", "at:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMSIE",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(jQuery)._at_("browser"))._at_("msie"))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMSIE",{},smalltalk.HTMLCanvas.klass)})},
args: [],
source: "isMSIE\x0a\x09^((jQuery at: #browser) at: #msie) notNil",
messageSends: ["notNil", "at:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMozilla",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(jQuery)._at_("browser"))._at_("mozilla"))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMozilla",{},smalltalk.HTMLCanvas.klass)})},
args: [],
source: "isMozilla\x0a\x09^((jQuery at: #browser) at: #mozilla) notNil",
messageSends: ["notNil", "at:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isOpera",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(jQuery)._at_("browser"))._at_("opera"))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOpera",{},smalltalk.HTMLCanvas.klass)})},
args: [],
source: "isOpera\x0a\x09^((jQuery at: #browser) at: #opera) notNil",
messageSends: ["notNil", "at:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isWebkit",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(jQuery)._at_("browser"))._at_("webkit"))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isWebkit",{},smalltalk.HTMLCanvas.klass)})},
args: [],
source: "isWebkit\x0a\x09^((jQuery at: #browser) at: #webkit) notNil",
messageSends: ["notNil", "at:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onJQuery:",
category: 'instance creation',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._initializeFromJQuery_(aJQuery);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"onJQuery:",{aJQuery:aJQuery},smalltalk.HTMLCanvas.klass)})},
args: ["aJQuery"],
source: "onJQuery: aJQuery\x0a\x09^self basicNew\x0a\x09\x09initializeFromJQuery: aJQuery;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["initializeFromJQuery:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.HTMLCanvas.klass);


smalltalk.addClass('HTMLSnippet', smalltalk.Object, ['snippets'], 'Canvas');
smalltalk.HTMLSnippet.comment="My sole instance is the registry of html snippets.\x0a`HTMLSnippet current` is the public singleton instance.\x0a\x0aOn startup, it scans the document for any html elements\x0awith `'data-snippet=\x22foo\x22'` attribute and takes them off the document,\x0aremembering them in the store under the specified name.\x0aIt also install method #foo into HTMLCanvas dynamically.\x0a\x0aEvery html snippet should mark a 'caret', a place where contents\x0acan be inserted, by 'data-snippet=\x22*\x22' (a special name for caret).\x0aFor example:\x0a\x0a`<li data-snippet='menuelement' class='...'><a data-snippet='*'></a></li>`\x0a\x0adefines a list element with a link inside; the link itself is marked as a caret.\x0a\x0aYou can later issue\x0a\x0a`html menuelement href: '/foo'; with: 'A foo'`\x0a\x0ato insert the whole snippet and directly manipulate the caret, so it renders:\x0a\x0a`<li class='...'><a href='/foo'>A foo</a></li>`\x0a\x0aFor a self-careting tags (not very useful, but you do not need to fill class etc.\x0ayou can use\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two' data-snippet='*bar'></div>`\x0a\x0aand in code later do:\x0a\x0a`html bar with: [ xxx ]`\x0a\x0ato render\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two'>...added by xxx...</div>`";
smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:",
category: 'initialization',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._snippetsFromJQuery_(aJQuery))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._installSnippetFromJQuery_(_st(each)._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},smalltalk.HTMLSnippet)})},
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09\x22Finds and takes out all snippets out of aJQuery.\x0a\x09Installs it into self.\x22\x0a\x09\x0a\x09(self snippetsFromJQuery: aJQuery) do: [ :each |\x0a\x09\x09self installSnippetFromJQuery: each asJQuery ]",
messageSends: ["do:", "installSnippetFromJQuery:", "asJQuery", "snippetsFromJQuery:"],
referencedClasses: []
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "installSnippetFromJQuery:",
category: 'snippet installation',
fn: function (element){
var self=this;
var name;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(element)._attr_("data-snippet");
$1=_st(name).__eq("*");
if(! smalltalk.assert($1)){
$2=_st("^\x5c*"._asRegexp())._test_(name);
if(smalltalk.assert($2)){
name=_st(name)._allButFirst();
name;
_st(element)._attr_put_("data-snippet","*");
} else {
_st(element)._removeAttr_("data-snippet");
};
self._snippetAt_install_(name,_st(_st(element)._detach())._get_((0)));
};
return self}, function($ctx1) {$ctx1.fill(self,"installSnippetFromJQuery:",{element:element,name:name},smalltalk.HTMLSnippet)})},
args: ["element"],
source: "installSnippetFromJQuery: element\x0a\x09| name |\x0a\x09name := element attr: 'data-snippet'.\x0a\x09name = '*' ifFalse: [\x0a\x09\x09('^\x5c*' asRegexp test: name)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09name := name allButFirst.\x0a\x09\x09\x09\x09element attr: 'data-snippet' put: '*' ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09element removeAttr: 'data-snippet' ].\x0a\x09\x09self snippetAt: name install: (element detach get: 0) ]",
messageSends: ["attr:", "ifFalse:", "ifTrue:ifFalse:", "allButFirst", "attr:put:", "removeAttr:", "test:", "asRegexp", "snippetAt:install:", "get:", "detach", "="],
referencedClasses: []
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._snippets())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippetAt:",{aString:aString},smalltalk.HTMLSnippet)})},
args: ["aString"],
source: "snippetAt: aString\x0a\x09^ self snippets at: aString",
messageSends: ["at:", "snippets"],
referencedClasses: []
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:compile:",
category: 'method generation',
fn: function (aString,anElement){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._installMethod_forClass_category_(_st(_st((function(htmlReceiver){
return smalltalk.withContext(function($ctx2) {
return _st(htmlReceiver)._snippet_(anElement);
}, function($ctx2) {$ctx2.fillBlock({htmlReceiver:htmlReceiver},$ctx1)})}))._currySelf())._asCompiledMethod_(aString),$HTMLCanvas(),"**snippets");
return self}, function($ctx1) {$ctx1.fill(self,"snippetAt:compile:",{aString:aString,anElement:anElement},smalltalk.HTMLSnippet)})},
args: ["aString", "anElement"],
source: "snippetAt: aString compile: anElement\x0a\x09\x22Method generation for the snippet.\x0a\x09The selector is aString, the method block uses anElement\x22\x0a\x09\x0a\x09ClassBuilder new\x0a\x09\x09installMethod: ([ :htmlReceiver | htmlReceiver snippet: anElement ]\x0a\x09\x09\x09currySelf asCompiledMethod: aString)\x0a\x09\x09forClass: HTMLCanvas\x0a\x09\x09category: '**snippets'",
messageSends: ["installMethod:forClass:category:", "asCompiledMethod:", "currySelf", "snippet:", "new"],
referencedClasses: ["HTMLCanvas", "ClassBuilder"]
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:install:",
category: 'snippet installation',
fn: function (aString,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._snippets())._at_put_(aString,anElement);
self._snippetAt_compile_(aString,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"snippetAt:install:",{aString:aString,anElement:anElement},smalltalk.HTMLSnippet)})},
args: ["aString", "anElement"],
source: "snippetAt: aString install: anElement\x0a\x09self snippets at: aString put: anElement.\x0a\x09self snippetAt: aString compile: anElement",
messageSends: ["at:put:", "snippets", "snippetAt:compile:"],
referencedClasses: []
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippets",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@snippets"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@snippets"]=smalltalk.HashedCollection._from_([]);
$1=self["@snippets"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippets",{},smalltalk.HTMLSnippet)})},
args: [],
source: "snippets\x0a\x09^snippets ifNil: [ snippets := #{} ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetsFromJQuery:",
category: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aJQuery)._find_("[data-snippet]"))._toArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippetsFromJQuery:",{aJQuery:aJQuery},smalltalk.HTMLSnippet)})},
args: ["aJQuery"],
source: "snippetsFromJQuery: aJQuery\x0a\x09^ (aJQuery find: '[data-snippet]') toArray",
messageSends: ["toArray", "find:"],
referencedClasses: []
}),
smalltalk.HTMLSnippet);


smalltalk.HTMLSnippet.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@current"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HTMLSnippet.klass)})},
args: [],
source: "current\x0a\x09^ current",
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureCurrent",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@current"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=smalltalk.HTMLSnippet.klass.superclass.fn.prototype._new.apply(_st(self), []);
_st($2)._initializeFromJQuery_(_st(document)._asJQuery());
$3=_st($2)._yourself();
self["@current"]=$3;
self["@current"];
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureCurrent",{},smalltalk.HTMLSnippet.klass)})},
args: [],
source: "ensureCurrent\x0a\x09current ifNil: [\x0a\x09\x09current := super new\x0a\x09\x09\x09initializeFromJQuery: document asJQuery;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "initializeFromJQuery:", "asJQuery", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.HTMLSnippet.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=self._isDOMAvailable();
if(smalltalk.assert($1)){
self._ensureCurrent();
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HTMLSnippet.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self isDOMAvailable ifTrue: [\x0a\x09\x09self ensureCurrent ]",
messageSends: ["initialize", "ifTrue:", "ensureCurrent", "isDOMAvailable"],
referencedClasses: []
}),
smalltalk.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isDOMAvailable",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return typeof document !== 'undefined' ;
return self}, function($ctx1) {$ctx1.fill(self,"isDOMAvailable",{},smalltalk.HTMLSnippet.klass)})},
args: [],
source: "isDOMAvailable\x0a\x09< return typeof document !== 'undefined' >",
messageSends: [],
referencedClasses: []
}),
smalltalk.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HTMLSnippet.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HTMLSnippet.klass);


smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.TagBrush.comment="I am a brush for building a single DOM element (which I hold onto).\x0a\x0aAll tags but `<style>` are instances of me (see the `StyleBrush` class).\x0a\x0a## API\x0a\x0a1. Nesting\x0a\x0a    Use `#with:` to nest tags. `#with:` can take aString, `TagBrush` instance, a `Widget` or block closure as parameter.\x0a\x0a    Example: `aTag with: aString with: aCanvas div`\x0a\x0a2. Events\x0a\x0a    The `events` protocol contains all methods related to events (delegating event handling to jQuery).\x0a\x0a    Example: `aTag onClick: [ window alert: 'clicked' ]`\x0a\x0a3. Attributes\x0a\x0a    The `attribute` protocol contains methods for attribute manipulation (delegating to jQuery too).\x0a\x0a    Example: `aTag at: 'value' put: 'hello world'`\x0a\x0a4. Raw access and jQuery\x0a\x0a    The `#element` method can be used to access to JavaScript DOM element object.\x0a\x0a    Example: `aTag element cssStyle`\x0a\x0a    Use `#asJQuery` to access to the receiver converted into a jQuery object.\x0a\x0a    Example: `aTag asJQuery css: 'color' value: 'red'`";
smalltalk.addMethod(
smalltalk.method({
selector: "accesskey:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("accesskey",aString);
return self}, function($ctx1) {$ctx1.fill(self,"accesskey:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "accesskey: aString\x0a\x09self at: 'accesskey' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "action:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("action",aString);
return self}, function($ctx1) {$ctx1.fill(self,"action:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "action: aString\x0a\x09self at: 'action' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "addBrush:",
category: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._appendChild_(_st(aTagBrush)._element());
$1=aTagBrush;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addBrush:",{aTagBrush:aTagBrush},smalltalk.TagBrush)})},
args: ["aTagBrush"],
source: "addBrush: aTagBrush\x0a\x09self appendChild: aTagBrush element.\x0a\x09^aTagBrush",
messageSends: ["appendChild:", "element"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "align:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("align",aString);
return self}, function($ctx1) {$ctx1.fill(self,"align:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "align: aString\x0a\x09self at: 'align' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "alt:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("alt",aString);
return self}, function($ctx1) {$ctx1.fill(self,"alt:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "alt: aString\x0a\x09self at: 'alt' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "append:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._appendToBrush_(self);
return self}, function($ctx1) {$ctx1.fill(self,"append:",{anObject:anObject},smalltalk.TagBrush)})},
args: ["anObject"],
source: "append: anObject\x0a\x09anObject appendToBrush: self",
messageSends: ["appendToBrush:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendBlock:",
category: 'adding',
fn: function (aBlock){
var self=this;
var root;
return smalltalk.withContext(function($ctx1) { 
root=_st(self["@canvas"])._root();
_st(self["@canvas"])._root_(self);
_st(aBlock)._value_(self["@canvas"]);
_st(self["@canvas"])._root_(root);
return self}, function($ctx1) {$ctx1.fill(self,"appendBlock:",{aBlock:aBlock,root:root},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "appendBlock: aBlock\x0a\x09| root |\x0a\x09root := canvas root.\x0a\x09canvas root: self.\x0a\x09aBlock value: canvas.\x0a\x09canvas root: root",
messageSends: ["root", "root:", "value:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendChild:",
category: 'adding',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var element=self['@element'];
	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
	} else {
		element.text = String(element.text) + anElement.innerHTML;
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"appendChild:",{anElement:anElement},smalltalk.TagBrush)})},
args: ["anElement"],
source: "appendChild: anElement\x0a\x09\x22In IE7 and IE8 appendChild fails on several node types. So we need to check\x22\x0a\x09<var element=self['@element'];\x0a\x09if (null == element.canHaveChildren || element.canHaveChildren) {\x0a\x09\x09element.appendChild(anElement);\x0a\x09} else {\x0a\x09\x09element.text = String(element.text) + anElement.innerHTML;\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendString:",
category: 'adding',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendChild_(self._createTextNodeFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"appendString:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "appendString: aString\x0a\x09self appendChild: (self createTextNodeFor: aString)",
messageSends: ["appendChild:", "createTextNodeFor:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._addBrush_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.TagBrush)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush addBrush: self",
messageSends: ["addBrush:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._jQuery_(self._element());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},smalltalk.TagBrush)})},
args: [],
source: "asJQuery\x0a\x09^window jQuery: self element",
messageSends: ["jQuery:", "element"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'attributes',
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].setAttribute(aString, aValue);
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,aValue:aValue},smalltalk.TagBrush)})},
args: ["aString", "aValue"],
source: "at: aString put: aValue\x0a\x09<self['@element'].setAttribute(aString, aValue)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "class:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].className = aString;
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "class: aString\x0a\x09<self['@element'].className = aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cols:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("cols",aString);
return self}, function($ctx1) {$ctx1.fill(self,"cols:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "cols: aString\x0a\x09self at: 'cols' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contenteditable:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("contenteditable",aString);
return self}, function($ctx1) {$ctx1.fill(self,"contenteditable:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "contenteditable: aString\x0a\x09self at: 'contenteditable' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._empty();
$2=_st($1)._append_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{anObject:anObject},smalltalk.TagBrush)})},
args: ["anObject"],
source: "contents: anObject\x0a\x09self\x0a\x09empty;\x0a\x09append: anObject",
messageSends: ["empty", "append:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contextmenu:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("contextmenu",aString);
return self}, function($ctx1) {$ctx1.fill(self,"contextmenu:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "contextmenu: aString\x0a\x09self at: 'contextmenu' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return document.createElement(String(aString));
return self}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "createElementFor: aString\x0a\x09<return document.createElement(String(aString))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "createTextNodeFor:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return document.createTextNode(String(aString));
return self}, function($ctx1) {$ctx1.fill(self,"createTextNodeFor:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "createTextNodeFor: aString\x0a\x09<return document.createTextNode(String(aString))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "draggable:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("draggable",aString);
return self}, function($ctx1) {$ctx1.fill(self,"draggable:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "draggable: aString\x0a\x09self at: 'draggable' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TagBrush)})},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "empty",
category: 'adding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._empty();
return self}, function($ctx1) {$ctx1.fill(self,"empty",{},smalltalk.TagBrush)})},
args: [],
source: "empty\x0a\x09self asJQuery empty",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("for",aString);
return self}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "for: aString\x0a\x09self at: 'for' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("height",aString);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "height: aString\x0a\x09self at: 'height' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "hidden",
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("hidden","hidden");
return self}, function($ctx1) {$ctx1.fill(self,"hidden",{},smalltalk.TagBrush)})},
args: [],
source: "hidden\x0a\x09self at: 'hidden' put: 'hidden'",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "href:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("href",aString);
return self}, function($ctx1) {$ctx1.fill(self,"href:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "href: aString\x0a\x09self at: 'href' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("id",aString);
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "id: aString\x0a\x09self at: 'id' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:canvas:",
category: 'initialization',
fn: function (aJQuery,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=_st(aJQuery)._get_((0));
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},smalltalk.TagBrush)})},
args: ["aJQuery", "aCanvas"],
source: "initializeFromJQuery: aJQuery canvas: aCanvas\x0a\x09element := aJQuery get: 0.\x0a\x09canvas := aCanvas",
messageSends: ["get:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromString:canvas:",
category: 'initialization',
fn: function (aString,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=self._createElementFor_(aString);
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromString:canvas:",{aString:aString,aCanvas:aCanvas},smalltalk.TagBrush)})},
args: ["aString", "aCanvas"],
source: "initializeFromString: aString canvas: aCanvas\x0a\x09element := self createElementFor: aString.\x0a\x09canvas := aCanvas",
messageSends: ["createElementFor:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "media:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("media",aString);
return self}, function($ctx1) {$ctx1.fill(self,"media:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "media: aString\x0a\x09self at: 'media' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("method",aString);
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "method: aString\x0a\x09self at: 'method' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("name",aString);
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "name: aString\x0a\x09self at: 'name' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onBlur:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("blur",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBlur:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onBlur: aBlock\x0a\x09self asJQuery bind: 'blur' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("change",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onChange:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onChange: aBlock\x0a\x09self asJQuery bind: 'change' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("click",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onClick: aBlock\x0a\x09self asJQuery bind: 'click' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onDblClick:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("dblclick",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDblClick:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onDblClick: aBlock\x0a\x09self asJQuery bind: 'dblclick' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocus:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focus",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocus:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onFocus: aBlock\x0a\x09self asJQuery bind: 'focus' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocusIn:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focusin",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocusIn:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onFocusIn: aBlock\x0a\x09self asJQuery bind: 'focusin' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocusOut:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focusout",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocusOut:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onFocusOut: aBlock\x0a\x09self asJQuery bind: 'focusout' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onHover:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("hover",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onHover:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onHover: aBlock\x0a\x09self asJQuery bind: 'hover' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keydown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09self asJQuery bind: 'keydown' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keypress",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onKeyPress: aBlock\x0a\x09self asJQuery bind: 'keypress' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keyup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09self asJQuery bind: 'keyup' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mousedown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseDown: aBlock\x0a\x09self asJQuery bind: 'mousedown' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseenter",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseEnter: aBlock\x0a\x09self asJQuery bind: 'mouseenter' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseleave",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseLeave: aBlock\x0a\x09self asJQuery bind: 'mouseleave' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mousemove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseMove: aBlock\x0a\x09self asJQuery bind: 'mousemove' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOut:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseout",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOut:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseOut: aBlock\x0a\x09self asJQuery bind: 'mouseout' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOver:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseover",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOver:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseOver: aBlock\x0a\x09self asJQuery bind: 'mouseover' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onMouseUp: aBlock\x0a\x09self asJQuery bind: 'mouseup' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onSelect:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("select",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSelect:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onSelect: aBlock\x0a\x09self asJQuery bind: 'select' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onSubmit:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("submit",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSubmit:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onSubmit: aBlock\x0a\x09self asJQuery bind: 'submit' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnload:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("unload",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUnload:",{aBlock:aBlock},smalltalk.TagBrush)})},
args: ["aBlock"],
source: "onUnload: aBlock\x0a\x09self asJQuery bind: 'unload' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "placeholder:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("placeholder",aString);
return self}, function($ctx1) {$ctx1.fill(self,"placeholder:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "placeholder: aString\x0a\x09self at: 'placeholder' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rel:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rel",aString);
return self}, function($ctx1) {$ctx1.fill(self,"rel:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "rel: aString\x0a\x09self at: 'rel' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].removeAttribute(aString);
return self}, function($ctx1) {$ctx1.fill(self,"removeAt:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "removeAt: aString\x0a\x09<self['@element'].removeAttribute(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rows:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rows",aString);
return self}, function($ctx1) {$ctx1.fill(self,"rows:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "rows: aString\x0a\x09self at: 'rows' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "src:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("src",aString);
return self}, function($ctx1) {$ctx1.fill(self,"src:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "src: aString\x0a\x09self at: 'src' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "style:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("style",aString);
return self}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "style: aString\x0a\x09self at: 'style' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "tabindex:",
category: 'attributes',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("tabindex",aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"tabindex:",{aNumber:aNumber},smalltalk.TagBrush)})},
args: ["aNumber"],
source: "tabindex: aNumber\x0a\x09self at: 'tabindex' put: aNumber",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("target",aString);
return self}, function($ctx1) {$ctx1.fill(self,"target:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "target: aString\x0a\x09self at: 'target' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("title",aString);
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "title: aString\x0a\x09self at: 'title' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("type",aString);
return self}, function($ctx1) {$ctx1.fill(self,"type:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "type: aString\x0a\x09self at: 'type' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "valign:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("valign",aString);
return self}, function($ctx1) {$ctx1.fill(self,"valign:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "valign: aString\x0a\x09self at: 'valign' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("value",aString);
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "value: aString\x0a\x09self at: 'value' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("width",aString);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aString:aString},smalltalk.TagBrush)})},
args: ["aString"],
source: "width: aString\x0a\x09self at: 'width' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._append_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.TagBrush)})},
args: ["anObject"],
source: "with: anObject\x0a\x09self append: anObject",
messageSends: ["append:"],
referencedClasses: []
}),
smalltalk.TagBrush);


smalltalk.addMethod(
smalltalk.method({
selector: "fromJQuery:canvas:",
category: 'instance creation',
fn: function (aJQuery,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromJQuery_canvas_(aJQuery,aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},smalltalk.TagBrush.klass)})},
args: ["aJQuery", "aCanvas"],
source: "fromJQuery: aJQuery canvas: aCanvas\x0a\x09^self new\x0a\x09initializeFromJQuery: aJQuery canvas: aCanvas;\x0a\x09yourself",
messageSends: ["initializeFromJQuery:canvas:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TagBrush.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:canvas:",
category: 'instance creation',
fn: function (aString,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromString_canvas_(aString,aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:canvas:",{aString:aString,aCanvas:aCanvas},smalltalk.TagBrush.klass)})},
args: ["aString", "aCanvas"],
source: "fromString: aString canvas: aCanvas\x0a\x09^self new\x0a\x09initializeFromString: aString canvas: aCanvas;\x0a\x09yourself",
messageSends: ["initializeFromString:canvas:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TagBrush.klass);


smalltalk.addClass('StyleTag', smalltalk.TagBrush, ['canvas', 'element'], 'Canvas');
smalltalk.StyleTag.comment="I'm a `<style>` tag use to inline CSS or load a stylesheet.\x0a\x0a## Motivation\x0a\x0aThe need for a specific class comes from Internet Explorer compatibility issues.";
smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'adding',
fn: function (aString){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HTMLCanvas())._isMSIE();
if(smalltalk.assert($1)){
_st(_st(self._element())._styleSheet())._cssText_(aString);
} else {
smalltalk.StyleTag.superclass.fn.prototype._with_.apply(_st(self), [aString]);
};
return self}, function($ctx1) {$ctx1.fill(self,"with:",{aString:aString},smalltalk.StyleTag)})},
args: ["aString"],
source: "with: aString\x0a\x09HTMLCanvas isMSIE\x0a\x09\x09ifTrue: [self element styleSheet cssText: aString ]\x0a\x09\x09ifFalse: [super with: aString ].",
messageSends: ["ifTrue:ifFalse:", "cssText:", "styleSheet", "element", "with:", "isMSIE"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.StyleTag);


smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'instance creation',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromString_canvas_("style",aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.StyleTag.klass)})},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09^self new\x0a\x09initializeFromString: 'style' canvas: aCanvas;\x0a\x09yourself",
messageSends: ["initializeFromString:canvas:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.StyleTag.klass);


smalltalk.addClass('Widget', smalltalk.Object, [], 'Canvas');
smalltalk.Widget.comment="I am a presenter building HTML. Subclasses are typically reusable components.\x0a\x0a## API\x0a\x0aUse `#renderContentOn:` to build HTML. (See `HTMLCanvas` and `TagBrush` classes for more about building HTML).\x0a\x0aTo add a widget to the page, the convenience method `#appendToJQuery:` is very useful.\x0a\x0aExemple: \x0a\x0a    Counter new appendToJQuery: 'body' asJQuery";
smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_(_st(aTagBrush)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.Widget)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Widget);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.Widget)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Widget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Widget)})},
args: ["html"],
source: "renderOn: html\x0a\x09self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "widget";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Widget.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'widget'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Widget.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._append_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.Object)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush append: self asString",
messageSends: ["append:", "asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: '*Canvas',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aJQuery)._append_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.Object)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self asString",
messageSends: ["append:", "asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._appendBlock_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.BlockClosure)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: '*Canvas',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._value_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.BlockClosure)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self value: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["value:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asSnippet",
category: '*Canvas',
fn: function (){
var self=this;
function $HTMLSnippet(){return smalltalk.HTMLSnippet||(typeof HTMLSnippet=="undefined"?nil:HTMLSnippet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HTMLSnippet())._current())._snippetAt_(self._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSnippet",{},smalltalk.CharacterArray)})},
args: [],
source: "asSnippet\x0a\x09^ HTMLSnippet current snippetAt: self asString",
messageSends: ["snippetAt:", "asString", "current"],
referencedClasses: ["HTMLSnippet"]
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: '*Canvas',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._appendString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.String)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendString: self",
messageSends: ["appendString:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: '*Canvas',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aJQuery)._append_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.String)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self",
messageSends: ["append:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
category: '*Canvas',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(String(self));
return self}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},smalltalk.String)})},
args: [],
source: "asJQuery\x0a\x09<return jQuery(String(self))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
category: '*Canvas',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(self['@jsObject']);
return self}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},smalltalk.JSObjectProxy)})},
args: [],
source: "asJQuery\x0a\x09<return jQuery(self['@jsObject'])>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

