define("amber_core/Web", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Web');
smalltalk.packages["Web"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('BrowserInterface', globals.Object, [], 'Web');
globals.BrowserInterface.comment="I am platform interface class that tries to use window and jQuery; that is, one for browser environment.\x0a\x0a## API\x0a\x0a    self isAvailable. \x22true if window and jQuery exist\x22.\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(jQuery)._ajax_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},globals.BrowserInterface)})},
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ jQuery ajax: anObject",
messageSends: ["ajax:"],
referencedClasses: []
}),
globals.BrowserInterface);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._alert_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},globals.BrowserInterface)})},
args: ["aString"],
source: "alert: aString\x0a\x09^ window alert: aString",
messageSends: ["alert:"],
referencedClasses: []
}),
globals.BrowserInterface);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._confirm_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},globals.BrowserInterface)})},
args: ["aString"],
source: "confirm: aString\x0a\x09^ window confirm: aString",
messageSends: ["confirm:"],
referencedClasses: []
}),
globals.BrowserInterface);

smalltalk.addMethod(
smalltalk.method({
selector: "isAvailable",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof window !== "undefined" && typeof jQuery !== "undefined";
return self}, function($ctx1) {$ctx1.fill(self,"isAvailable",{},globals.BrowserInterface)})},
args: [],
source: "isAvailable\x0a<return typeof window !== \x22undefined\x22 && typeof jQuery !== \x22undefined\x22>",
messageSends: [],
referencedClasses: []
}),
globals.BrowserInterface);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._prompt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},globals.BrowserInterface)})},
args: ["aString"],
source: "prompt: aString\x0a\x09^ window prompt: aString",
messageSends: ["prompt:"],
referencedClasses: []
}),
globals.BrowserInterface);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._prompt_default_(aString,defaultString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},globals.BrowserInterface)})},
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ window prompt: aString default: defaultString",
messageSends: ["prompt:default:"],
referencedClasses: []
}),
globals.BrowserInterface);



smalltalk.addClass('HTMLCanvas', globals.Object, ['root'], 'Web');
globals.HTMLCanvas.comment="I am a canvas for building HTML.\x0a\x0aI provide the `#tag:` method to create a `TagBrush` (wrapping a DOM element) and convenience methods in the `tags` protocol.\x0a\x0a## API\x0a\x0aMy instances are used as the argument of the `#renderOn:` method of `Widget` objects.\x0a\x0aThe `#with:` method is used to compose HTML, nesting tags. `#with:` can take a `TagBrush`, a `String`, a `BlockClosure` or a `Widget` as argument.\x0a\x0a## Usage example:\x0a\x0a    aCanvas a \x0a        with: [ aCanvas span with: 'click me' ];\x0a        onClick: [ window alert: 'clicked!' ]";
smalltalk.addMethod(
smalltalk.method({
selector: "a",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("a");
return $1;
}, function($ctx1) {$ctx1.fill(self,"a",{},globals.HTMLCanvas)})},
args: [],
source: "a\x0a\x09^ self tag: 'a'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "abbr",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("abbr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"abbr",{},globals.HTMLCanvas)})},
args: [],
source: "abbr\x0a\x09^ self tag: 'abbr'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "address",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("address");
return $1;
}, function($ctx1) {$ctx1.fill(self,"address",{},globals.HTMLCanvas)})},
args: [],
source: "address\x0a\x09^ self tag: 'address'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "area",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("area");
return $1;
}, function($ctx1) {$ctx1.fill(self,"area",{},globals.HTMLCanvas)})},
args: [],
source: "area\x0a\x09^ self tag: 'area'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "article",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("article");
return $1;
}, function($ctx1) {$ctx1.fill(self,"article",{},globals.HTMLCanvas)})},
args: [],
source: "article\x0a\x09^ self tag: 'article'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "aside",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("aside");
return $1;
}, function($ctx1) {$ctx1.fill(self,"aside",{},globals.HTMLCanvas)})},
args: [],
source: "aside\x0a\x09^ self tag: 'aside'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "audio",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("audio");
return $1;
}, function($ctx1) {$ctx1.fill(self,"audio",{},globals.HTMLCanvas)})},
args: [],
source: "audio\x0a\x09^ self tag: 'audio'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "base",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("base");
return $1;
}, function($ctx1) {$ctx1.fill(self,"base",{},globals.HTMLCanvas)})},
args: [],
source: "base\x0a\x09^ self tag: 'base'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "blockquote",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("blockquote");
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockquote",{},globals.HTMLCanvas)})},
args: [],
source: "blockquote\x0a\x09^ self tag: 'blockquote'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "body",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("body");
return $1;
}, function($ctx1) {$ctx1.fill(self,"body",{},globals.HTMLCanvas)})},
args: [],
source: "body\x0a\x09^ self tag: 'body'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "br",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("br");
return $1;
}, function($ctx1) {$ctx1.fill(self,"br",{},globals.HTMLCanvas)})},
args: [],
source: "br\x0a\x09^ self tag: 'br'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "button",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("button");
return $1;
}, function($ctx1) {$ctx1.fill(self,"button",{},globals.HTMLCanvas)})},
args: [],
source: "button\x0a\x09^ self tag: 'button'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("canvas");
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},globals.HTMLCanvas)})},
args: [],
source: "canvas\x0a\x09^ self tag: 'canvas'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "caption",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("caption");
return $1;
}, function($ctx1) {$ctx1.fill(self,"caption",{},globals.HTMLCanvas)})},
args: [],
source: "caption\x0a\x09^ self tag: 'caption'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "cite",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("cite");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cite",{},globals.HTMLCanvas)})},
args: [],
source: "cite\x0a\x09^ self tag: 'cite'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "code",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("code");
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},globals.HTMLCanvas)})},
args: [],
source: "code\x0a\x09^ self tag: 'code'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "col",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("col");
return $1;
}, function($ctx1) {$ctx1.fill(self,"col",{},globals.HTMLCanvas)})},
args: [],
source: "col\x0a\x09^ self tag: 'col'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "colgroup",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("colgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"colgroup",{},globals.HTMLCanvas)})},
args: [],
source: "colgroup\x0a\x09^ self tag: 'colgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "command",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("command");
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},globals.HTMLCanvas)})},
args: [],
source: "command\x0a\x09^ self tag: 'command'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "datalist",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("datalist");
return $1;
}, function($ctx1) {$ctx1.fill(self,"datalist",{},globals.HTMLCanvas)})},
args: [],
source: "datalist\x0a\x09^ self tag: 'datalist'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dd",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dd");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dd",{},globals.HTMLCanvas)})},
args: [],
source: "dd\x0a\x09^ self tag: 'dd'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "del",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("del");
return $1;
}, function($ctx1) {$ctx1.fill(self,"del",{},globals.HTMLCanvas)})},
args: [],
source: "del\x0a\x09^ self tag: 'del'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "details",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("details");
return $1;
}, function($ctx1) {$ctx1.fill(self,"details",{},globals.HTMLCanvas)})},
args: [],
source: "details\x0a\x09^ self tag: 'details'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "div",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("div");
return $1;
}, function($ctx1) {$ctx1.fill(self,"div",{},globals.HTMLCanvas)})},
args: [],
source: "div\x0a\x09^ self tag: 'div'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "div:",
protocol: 'tags',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._div())._with_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"div:",{aBlock:aBlock},globals.HTMLCanvas)})},
args: ["aBlock"],
source: "div: aBlock\x0a\x09^ self div with: aBlock",
messageSends: ["with:", "div"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dl",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dl");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dl",{},globals.HTMLCanvas)})},
args: [],
source: "dl\x0a\x09^ self tag: 'dl'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dt",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("dt");
return $1;
}, function($ctx1) {$ctx1.fill(self,"dt",{},globals.HTMLCanvas)})},
args: [],
source: "dt\x0a\x09^ self tag: 'dt'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "em",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("em");
return $1;
}, function($ctx1) {$ctx1.fill(self,"em",{},globals.HTMLCanvas)})},
args: [],
source: "em\x0a\x09^ self tag: 'em'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "embed",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("embed");
return $1;
}, function($ctx1) {$ctx1.fill(self,"embed",{},globals.HTMLCanvas)})},
args: [],
source: "embed\x0a\x09^ self tag: 'embed'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "entity:",
protocol: 'adding',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$5;
$2="<span />"._asJQuery();
$4="&".__comma(aString);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(";");
$ctx1.sendIdx[","]=1;
$1=_st($2)._html_($3);
result=_st($1)._text();
$5=_st(_st(result)._size()).__eq((1));
if(! smalltalk.assert($5)){
self._error_("Not an HTML entity: ".__comma(aString));
};
self._with_(result);
return self}, function($ctx1) {$ctx1.fill(self,"entity:",{aString:aString,result:result},globals.HTMLCanvas)})},
args: ["aString"],
source: "entity: aString\x0a\x09\x22Adds a character representing html entity, eg.\x0a\x09html entity: 'copy'\x0a\x09adds a copyright sign.\x0a\x09If a name does not represent valid HTML entity, error is raised.\x22\x0a\x09| result |\x0a\x09result := ('<span />' asJQuery html: '&', aString, ';') text.\x0a\x09result size = 1 ifFalse: [ self error: 'Not an HTML entity: ', aString ].\x0a\x09self with: result",
messageSends: ["text", "html:", "asJQuery", ",", "ifFalse:", "=", "size", "error:", "with:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fieldset",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("fieldset");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fieldset",{},globals.HTMLCanvas)})},
args: [],
source: "fieldset\x0a\x09^ self tag: 'fieldset'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "figcaption",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("figcaption");
return $1;
}, function($ctx1) {$ctx1.fill(self,"figcaption",{},globals.HTMLCanvas)})},
args: [],
source: "figcaption\x0a\x09^ self tag: 'figcaption'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "figure",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("figure");
return $1;
}, function($ctx1) {$ctx1.fill(self,"figure",{},globals.HTMLCanvas)})},
args: [],
source: "figure\x0a\x09^ self tag: 'figure'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "footer",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("footer");
return $1;
}, function($ctx1) {$ctx1.fill(self,"footer",{},globals.HTMLCanvas)})},
args: [],
source: "footer\x0a\x09^ self tag: 'footer'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "form",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("form");
return $1;
}, function($ctx1) {$ctx1.fill(self,"form",{},globals.HTMLCanvas)})},
args: [],
source: "form\x0a\x09^ self tag: 'form'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h1",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h1",{},globals.HTMLCanvas)})},
args: [],
source: "h1\x0a\x09^ self tag: 'h1'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h1:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h1())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h1:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h1: anObject\x0a\x09^ self h1 with: anObject",
messageSends: ["with:", "h1"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h2",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h2");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h2",{},globals.HTMLCanvas)})},
args: [],
source: "h2\x0a\x09^ self tag: 'h2'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h2:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h2())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h2:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h2: anObject\x0a\x09^ self h2 with: anObject",
messageSends: ["with:", "h2"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h3",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h3");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h3",{},globals.HTMLCanvas)})},
args: [],
source: "h3\x0a\x09^ self tag: 'h3'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h3:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h3())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h3:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h3: anObject\x0a\x09^ self h3 with: anObject",
messageSends: ["with:", "h3"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h4",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h4");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h4",{},globals.HTMLCanvas)})},
args: [],
source: "h4\x0a\x09^ self tag: 'h4'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h4:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h4())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h4:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h4: anObject\x0a\x09^ self h4 with: anObject",
messageSends: ["with:", "h4"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h5",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h5");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h5",{},globals.HTMLCanvas)})},
args: [],
source: "h5\x0a\x09^ self tag: 'h5'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h5:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h5())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h5:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h5: anObject\x0a\x09^ self h5 with: anObject",
messageSends: ["with:", "h5"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h6",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("h6");
return $1;
}, function($ctx1) {$ctx1.fill(self,"h6",{},globals.HTMLCanvas)})},
args: [],
source: "h6\x0a\x09^ self tag: 'h6'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "h6:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._h6())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h6:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "h6: anObject\x0a\x09^ self h6 with: anObject",
messageSends: ["with:", "h6"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "head",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("head");
return $1;
}, function($ctx1) {$ctx1.fill(self,"head",{},globals.HTMLCanvas)})},
args: [],
source: "head\x0a\x09^ self tag: 'head'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("header");
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},globals.HTMLCanvas)})},
args: [],
source: "header\x0a\x09^ self tag: 'header'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hgroup",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("hgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hgroup",{},globals.HTMLCanvas)})},
args: [],
source: "hgroup\x0a\x09^ self tag: 'hgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hr",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("hr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hr",{},globals.HTMLCanvas)})},
args: [],
source: "hr\x0a\x09^ self tag: 'hr'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "html",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("html");
return $1;
}, function($ctx1) {$ctx1.fill(self,"html",{},globals.HTMLCanvas)})},
args: [],
source: "html\x0a\x09^ self tag: 'html'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "iframe",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("iframe");
return $1;
}, function($ctx1) {$ctx1.fill(self,"iframe",{},globals.HTMLCanvas)})},
args: [],
source: "iframe\x0a\x09^ self tag: 'iframe'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "iframe:",
protocol: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._iframe())._src_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"iframe:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "iframe: aString\x0a\x09^ self iframe src: aString",
messageSends: ["src:", "iframe"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "img",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("img");
return $1;
}, function($ctx1) {$ctx1.fill(self,"img",{},globals.HTMLCanvas)})},
args: [],
source: "img\x0a\x09^ self tag: 'img'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "img:",
protocol: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._img())._src_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"img:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "img: aString\x0a\x09^ self img src: aString",
messageSends: ["src:", "img"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $TagBrush(){return globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
($ctx1.supercall = true, globals.HTMLCanvas.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
self["@root"]=_st($TagBrush())._fromString_canvas_("div",self);
self["@root"];
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HTMLCanvas)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09root ifNil: [ root := TagBrush fromString: 'div' canvas: self ]",
messageSends: ["initialize", "ifNil:", "fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:",
protocol: 'initialization',
fn: function (aJQuery){
var self=this;
function $TagBrush(){return globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
self["@root"]=_st($TagBrush())._fromJQuery_canvas_(aJQuery,self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},globals.HTMLCanvas)})},
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09root := TagBrush fromJQuery: aJQuery canvas: self",
messageSends: ["fromJQuery:canvas:"],
referencedClasses: ["TagBrush"]
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("input");
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},globals.HTMLCanvas)})},
args: [],
source: "input\x0a\x09^ self tag: 'input'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("label");
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HTMLCanvas)})},
args: [],
source: "label\x0a\x09^ self tag: 'label'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "legend",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("legend");
return $1;
}, function($ctx1) {$ctx1.fill(self,"legend",{},globals.HTMLCanvas)})},
args: [],
source: "legend\x0a\x09^ self tag: 'legend'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "li",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("li");
return $1;
}, function($ctx1) {$ctx1.fill(self,"li",{},globals.HTMLCanvas)})},
args: [],
source: "li\x0a\x09^ self tag: 'li'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "li:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._li())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"li:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "li: anObject\x0a\x09^ self li with: anObject",
messageSends: ["with:", "li"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "link",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("link");
return $1;
}, function($ctx1) {$ctx1.fill(self,"link",{},globals.HTMLCanvas)})},
args: [],
source: "link\x0a\x09^ self tag: 'link'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "map",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("map");
return $1;
}, function($ctx1) {$ctx1.fill(self,"map",{},globals.HTMLCanvas)})},
args: [],
source: "map\x0a\x09^ self tag: 'map'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("mark");
return $1;
}, function($ctx1) {$ctx1.fill(self,"mark",{},globals.HTMLCanvas)})},
args: [],
source: "mark\x0a\x09^ self tag: 'mark'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "menu",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("menu");
return $1;
}, function($ctx1) {$ctx1.fill(self,"menu",{},globals.HTMLCanvas)})},
args: [],
source: "menu\x0a\x09^ self tag: 'menu'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "meta",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("meta");
return $1;
}, function($ctx1) {$ctx1.fill(self,"meta",{},globals.HTMLCanvas)})},
args: [],
source: "meta\x0a\x09^ self tag: 'meta'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "nav",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("nav");
return $1;
}, function($ctx1) {$ctx1.fill(self,"nav",{},globals.HTMLCanvas)})},
args: [],
source: "nav\x0a\x09^ self tag: 'nav'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "newTag:",
protocol: 'tags',
fn: function (aString){
var self=this;
function $TagBrush(){return globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TagBrush())._fromString_canvas_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTag:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "newTag: aString\x0a\x09^ TagBrush fromString: aString canvas: self",
messageSends: ["fromString:canvas:"],
referencedClasses: ["TagBrush"]
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "noscript",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("noscript");
return $1;
}, function($ctx1) {$ctx1.fill(self,"noscript",{},globals.HTMLCanvas)})},
args: [],
source: "noscript\x0a\x09^ self tag: 'noscript'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("object");
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},globals.HTMLCanvas)})},
args: [],
source: "object\x0a\x09^ self tag: 'object'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("ol");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol",{},globals.HTMLCanvas)})},
args: [],
source: "ol\x0a\x09^ self tag: 'ol'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ol:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._ol())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ol:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "ol: anObject\x0a\x09^ self ol with: anObject",
messageSends: ["with:", "ol"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "optgroup",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("optgroup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"optgroup",{},globals.HTMLCanvas)})},
args: [],
source: "optgroup\x0a\x09^ self tag: 'optgroup'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "option",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("option");
return $1;
}, function($ctx1) {$ctx1.fill(self,"option",{},globals.HTMLCanvas)})},
args: [],
source: "option\x0a\x09^ self tag: 'option'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "output",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("output");
return $1;
}, function($ctx1) {$ctx1.fill(self,"output",{},globals.HTMLCanvas)})},
args: [],
source: "output\x0a\x09^ self tag: 'output'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "p",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("p");
return $1;
}, function($ctx1) {$ctx1.fill(self,"p",{},globals.HTMLCanvas)})},
args: [],
source: "p\x0a\x09^ self tag: 'p'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "p:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._p())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"p:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "p: anObject\x0a\x09^ self p with: anObject",
messageSends: ["with:", "p"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "param",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("param");
return $1;
}, function($ctx1) {$ctx1.fill(self,"param",{},globals.HTMLCanvas)})},
args: [],
source: "param\x0a\x09^ self tag: 'param'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pre",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("pre");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pre",{},globals.HTMLCanvas)})},
args: [],
source: "pre\x0a\x09^ self tag: 'pre'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "progress",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("progress");
return $1;
}, function($ctx1) {$ctx1.fill(self,"progress",{},globals.HTMLCanvas)})},
args: [],
source: "progress\x0a\x09^ self tag: 'progress'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@root"]=aTagBrush;
return self},
args: ["aTagBrush"],
source: "root: aTagBrush\x0a\x09root := aTagBrush",
messageSends: [],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "script",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("script");
return $1;
}, function($ctx1) {$ctx1.fill(self,"script",{},globals.HTMLCanvas)})},
args: [],
source: "script\x0a\x09^ self tag: 'script'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "section",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("section");
return $1;
}, function($ctx1) {$ctx1.fill(self,"section",{},globals.HTMLCanvas)})},
args: [],
source: "section\x0a\x09^ self tag: 'section'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "select",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("select");
return $1;
}, function($ctx1) {$ctx1.fill(self,"select",{},globals.HTMLCanvas)})},
args: [],
source: "select\x0a\x09^ self tag: 'select'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "small",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("small");
return $1;
}, function($ctx1) {$ctx1.fill(self,"small",{},globals.HTMLCanvas)})},
args: [],
source: "small\x0a\x09^ self tag: 'small'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "snippet:",
protocol: 'accessing',
fn: function (anElement){
var self=this;
var clone,caret;
function $TagBrush(){return globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
clone=_st(_st(anElement)._asJQuery())._clone();
$1=_st($TagBrush())._fromJQuery_canvas_(clone,self);
$ctx1.sendIdx["fromJQuery:canvas:"]=1;
self._with_($1);
caret=_st(clone)._find_("[data-snippet=\x22*\x22]");
$2=_st(_st(caret)._toArray())._isEmpty();
if(smalltalk.assert($2)){
caret=clone;
caret;
};
$3=_st($TagBrush())._fromJQuery_canvas_(_st(caret)._removeAttr_("data-snippet"),self);
return $3;
}, function($ctx1) {$ctx1.fill(self,"snippet:",{anElement:anElement,clone:clone,caret:caret},globals.HTMLCanvas)})},
args: ["anElement"],
source: "snippet: anElement\x0a\x09\x22Adds clone of anElement, finds [data-snippet=\x22\x22*\x22\x22] subelement\x0a\x09and returns TagBrush as if that subelement was just added.\x0a\x09\x0a\x09Rarely needed to use directly, use `html foo` dynamically installed method\x0a\x09for a snippet named foo.\x22\x0a\x09\x0a\x09| clone caret |\x0a\x09\x0a\x09clone := anElement asJQuery clone.\x0a\x09self with: (TagBrush fromJQuery: clone canvas: self).\x0a\x09caret := clone find: '[data-snippet=\x22*\x22]'.\x0a\x09caret toArray isEmpty ifTrue: [ caret := clone ].\x0a\x09^ TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self",
messageSends: ["clone", "asJQuery", "with:", "fromJQuery:canvas:", "find:", "ifTrue:", "isEmpty", "toArray", "removeAttr:"],
referencedClasses: ["TagBrush"]
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("source");
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.HTMLCanvas)})},
args: [],
source: "source\x0a\x09^ self tag: 'source'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "span",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("span");
return $1;
}, function($ctx1) {$ctx1.fill(self,"span",{},globals.HTMLCanvas)})},
args: [],
source: "span\x0a\x09^ self tag: 'span'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "span:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._span())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"span:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "span: anObject\x0a\x09^ self span with: anObject",
messageSends: ["with:", "span"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "strong",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("strong");
return $1;
}, function($ctx1) {$ctx1.fill(self,"strong",{},globals.HTMLCanvas)})},
args: [],
source: "strong\x0a\x09^ self tag: 'strong'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "strong:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strong())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"strong:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "strong: anObject\x0a\x09^ self strong with: anObject",
messageSends: ["with:", "strong"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("style");
return $1;
}, function($ctx1) {$ctx1.fill(self,"style",{},globals.HTMLCanvas)})},
args: [],
source: "style\x0a\x09^ self tag: 'style'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "style:",
protocol: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._style();
_st($2)._with_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "style: aString\x0a\x09^ self style with: aString; yourself",
messageSends: ["with:", "style", "yourself"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "sub",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("sub");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sub",{},globals.HTMLCanvas)})},
args: [],
source: "sub\x0a\x09^ self tag: 'sub'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "summary",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("summary");
return $1;
}, function($ctx1) {$ctx1.fill(self,"summary",{},globals.HTMLCanvas)})},
args: [],
source: "summary\x0a\x09^ self tag: 'summary'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "sup",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("sup");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sup",{},globals.HTMLCanvas)})},
args: [],
source: "sup\x0a\x09^ self tag: 'sup'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "table",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("table");
return $1;
}, function($ctx1) {$ctx1.fill(self,"table",{},globals.HTMLCanvas)})},
args: [],
source: "table\x0a\x09^ self tag: 'table'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tag:",
protocol: 'tags',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@root"])._addBrush_(self._newTag_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tag:",{aString:aString},globals.HTMLCanvas)})},
args: ["aString"],
source: "tag: aString\x0a\x09^ root addBrush: (self newTag: aString)",
messageSends: ["addBrush:", "newTag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tbody",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tbody");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tbody",{},globals.HTMLCanvas)})},
args: [],
source: "tbody\x0a\x09^ self tag: 'tbody'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "td",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("td");
return $1;
}, function($ctx1) {$ctx1.fill(self,"td",{},globals.HTMLCanvas)})},
args: [],
source: "td\x0a\x09^ self tag: 'td'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "textarea",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("textarea");
return $1;
}, function($ctx1) {$ctx1.fill(self,"textarea",{},globals.HTMLCanvas)})},
args: [],
source: "textarea\x0a\x09^ self tag: 'textarea'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tfoot",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tfoot");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tfoot",{},globals.HTMLCanvas)})},
args: [],
source: "tfoot\x0a\x09^ self tag: 'tfoot'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "th",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("th");
return $1;
}, function($ctx1) {$ctx1.fill(self,"th",{},globals.HTMLCanvas)})},
args: [],
source: "th\x0a\x09^ self tag: 'th'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "thead",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("thead");
return $1;
}, function($ctx1) {$ctx1.fill(self,"thead",{},globals.HTMLCanvas)})},
args: [],
source: "thead\x0a\x09^ self tag: 'thead'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("time");
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{},globals.HTMLCanvas)})},
args: [],
source: "time\x0a\x09^ self tag: 'time'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("title");
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.HTMLCanvas)})},
args: [],
source: "title\x0a\x09^ self tag: 'title'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "tr",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("tr");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tr",{},globals.HTMLCanvas)})},
args: [],
source: "tr\x0a\x09^ self tag: 'tr'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("ul");
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul",{},globals.HTMLCanvas)})},
args: [],
source: "ul\x0a\x09^ self tag: 'ul'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "ul:",
protocol: 'tags',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._ul())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ul:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "ul: anObject\x0a\x09^ self ul with: anObject",
messageSends: ["with:", "ul"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "video",
protocol: 'tags',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("video");
return $1;
}, function($ctx1) {$ctx1.fill(self,"video",{},globals.HTMLCanvas)})},
args: [],
source: "video\x0a\x09^ self tag: 'video'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._root())._with_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},globals.HTMLCanvas)})},
args: ["anObject"],
source: "with: anObject\x0a\x09^ self root with: anObject",
messageSends: ["with:", "root"],
referencedClasses: []
}),
globals.HTMLCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._basicAt_put_("allowJavaScriptCalls",true);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HTMLCanvas.klass)})},
args: [],
source: "initialize\x0a\x09\x22Allow JS method calls for the jQuery object.\x0a\x09See boot.js DNU handling.\x22\x0a\x09\x0a\x09jQuery basicAt: 'allowJavaScriptCalls' put: true",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
globals.HTMLCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onJQuery:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"onJQuery:",{aJQuery:aJQuery},globals.HTMLCanvas.klass)})},
args: ["aJQuery"],
source: "onJQuery: aJQuery\x0a\x09^ self basicNew\x0a\x09\x09initializeFromJQuery: aJQuery;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["initializeFromJQuery:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
globals.HTMLCanvas.klass);


smalltalk.addClass('HTMLSnippet', globals.Object, ['snippets'], 'Web');
globals.HTMLSnippet.comment="My sole instance is the registry of html snippets.\x0a`HTMLSnippet current` is the public singleton instance.\x0a\x0aOn startup, it scans the document for any html elements\x0awith `'data-snippet=\x22foo\x22'` attribute and takes them off the document,\x0aremembering them in the store under the specified name.\x0aIt also install method #foo into HTMLCanvas dynamically.\x0a\x0aEvery html snippet should mark a 'caret', a place where contents\x0acan be inserted, by 'data-snippet=\x22*\x22' (a special name for caret).\x0aFor example:\x0a\x0a`<li data-snippet='menuelement' class='...'><a data-snippet='*'></a></li>`\x0a\x0adefines a list element with a link inside; the link itself is marked as a caret.\x0a\x0aYou can later issue\x0a\x0a`html menuelement href: '/foo'; with: 'A foo'`\x0a\x0ato insert the whole snippet and directly manipulate the caret, so it renders:\x0a\x0a`<li class='...'><a href='/foo'>A foo</a></li>`\x0a\x0aFor a self-careting tags (not very useful, but you do not need to fill class etc.\x0ayou can use\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two' data-snippet='*bar'></div>`\x0a\x0aand in code later do:\x0a\x0a`html bar with: [ xxx ]`\x0a\x0ato render\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two'>...added by xxx...</div>`";
smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:",
protocol: 'initialization',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._snippetsFromJQuery_(aJQuery))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._installSnippetFromJQuery_(_st(each)._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},globals.HTMLSnippet)})},
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09\x22Finds and takes out all snippets out of aJQuery.\x0a\x09Installs it into self.\x22\x0a\x09\x0a\x09(self snippetsFromJQuery: aJQuery) do: [ :each |\x0a\x09\x09self installSnippetFromJQuery: each asJQuery ]",
messageSends: ["do:", "snippetsFromJQuery:", "installSnippetFromJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "installSnippetFromJQuery:",
protocol: 'snippet installation',
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
return self}, function($ctx1) {$ctx1.fill(self,"installSnippetFromJQuery:",{element:element,name:name},globals.HTMLSnippet)})},
args: ["element"],
source: "installSnippetFromJQuery: element\x0a\x09| name |\x0a\x09name := element attr: 'data-snippet'.\x0a\x09name = '*' ifFalse: [\x0a\x09\x09('^\x5c*' asRegexp test: name)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09name := name allButFirst.\x0a\x09\x09\x09\x09element attr: 'data-snippet' put: '*' ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09element removeAttr: 'data-snippet' ].\x0a\x09\x09self snippetAt: name install: (element detach get: 0) ]",
messageSends: ["attr:", "ifFalse:", "=", "ifTrue:ifFalse:", "test:", "asRegexp", "allButFirst", "attr:put:", "removeAttr:", "snippetAt:install:", "get:", "detach"],
referencedClasses: []
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._snippets())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippetAt:",{aString:aString},globals.HTMLSnippet)})},
args: ["aString"],
source: "snippetAt: aString\x0a\x09^ self snippets at: aString",
messageSends: ["at:", "snippets"],
referencedClasses: []
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:compile:",
protocol: 'method generation',
fn: function (aString,anElement){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._installMethod_forClass_protocol_(_st(_st((function(htmlReceiver){
return smalltalk.withContext(function($ctx2) {
return _st(htmlReceiver)._snippet_(anElement);
}, function($ctx2) {$ctx2.fillBlock({htmlReceiver:htmlReceiver},$ctx1,1)})}))._currySelf())._asCompiledMethod_(aString),$HTMLCanvas(),"**snippets");
return self}, function($ctx1) {$ctx1.fill(self,"snippetAt:compile:",{aString:aString,anElement:anElement},globals.HTMLSnippet)})},
args: ["aString", "anElement"],
source: "snippetAt: aString compile: anElement\x0a\x09\x22Method generation for the snippet.\x0a\x09The selector is aString, the method block uses anElement\x22\x0a\x09\x0a\x09ClassBuilder new\x0a\x09\x09installMethod: ([ :htmlReceiver | htmlReceiver snippet: anElement ]\x0a\x09\x09\x09currySelf asCompiledMethod: aString)\x0a\x09\x09forClass: HTMLCanvas\x0a\x09\x09protocol: '**snippets'",
messageSends: ["installMethod:forClass:protocol:", "new", "asCompiledMethod:", "currySelf", "snippet:"],
referencedClasses: ["ClassBuilder", "HTMLCanvas"]
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetAt:install:",
protocol: 'snippet installation',
fn: function (aString,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._snippets())._at_put_(aString,anElement);
self._snippetAt_compile_(aString,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"snippetAt:install:",{aString:aString,anElement:anElement},globals.HTMLSnippet)})},
args: ["aString", "anElement"],
source: "snippetAt: aString install: anElement\x0a\x09self snippets at: aString put: anElement.\x0a\x09self snippetAt: aString compile: anElement",
messageSends: ["at:put:", "snippets", "snippetAt:compile:"],
referencedClasses: []
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippets",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@snippets"];
if(($receiver = $2) == null || $receiver.isNil){
self["@snippets"]=globals.HashedCollection._newFromPairs_([]);
$1=self["@snippets"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippets",{},globals.HTMLSnippet)})},
args: [],
source: "snippets\x0a\x09^ snippets ifNil: [ snippets := #{} ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HTMLSnippet);

smalltalk.addMethod(
smalltalk.method({
selector: "snippetsFromJQuery:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aJQuery)._find_("[data-snippet]"))._toArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"snippetsFromJQuery:",{aJQuery:aJQuery},globals.HTMLSnippet)})},
args: ["aJQuery"],
source: "snippetsFromJQuery: aJQuery\x0a\x09^ (aJQuery find: '[data-snippet]') toArray",
messageSends: ["toArray", "find:"],
referencedClasses: []
}),
globals.HTMLSnippet);


globals.HTMLSnippet.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
var $1;
$1=self["@current"];
return $1;
},
args: [],
source: "current\x0a\x09^ current",
messageSends: [],
referencedClasses: []
}),
globals.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureCurrent",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
$1=self["@current"];
if(($receiver = $1) == null || $receiver.isNil){
$2=($ctx1.supercall = true, globals.HTMLSnippet.klass.superclass.fn.prototype._new.apply(_st(self), []));
$ctx1.supercall = false;
_st($2)._initializeFromJQuery_(_st(document)._asJQuery());
$3=_st($2)._yourself();
self["@current"]=$3;
self["@current"];
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureCurrent",{},globals.HTMLSnippet.klass)})},
args: [],
source: "ensureCurrent\x0a\x09current ifNil: [\x0a\x09\x09current := super new\x0a\x09\x09\x09initializeFromJQuery: document asJQuery;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "initializeFromJQuery:", "new", "asJQuery", "yourself"],
referencedClasses: []
}),
globals.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.HTMLSnippet.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
$1=self._isDOMAvailable();
if(smalltalk.assert($1)){
self._ensureCurrent();
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HTMLSnippet.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self isDOMAvailable ifTrue: [\x0a\x09\x09self ensureCurrent ]",
messageSends: ["initialize", "ifTrue:", "isDOMAvailable", "ensureCurrent"],
referencedClasses: []
}),
globals.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isDOMAvailable",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return typeof document !== 'undefined' ;
return self}, function($ctx1) {$ctx1.fill(self,"isDOMAvailable",{},globals.HTMLSnippet.klass)})},
args: [],
source: "isDOMAvailable\x0a\x09< return typeof document !== 'undefined' >",
messageSends: [],
referencedClasses: []
}),
globals.HTMLSnippet.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.HTMLSnippet.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.HTMLSnippet.klass);


smalltalk.addClass('TagBrush', globals.Object, ['canvas', 'element'], 'Web');
globals.TagBrush.comment="I am a brush for building a single DOM element (which I hold onto).\x0a\x0aAll tags but `<style>` are instances of me (see the `StyleBrush` class).\x0a\x0a## API\x0a\x0a1. Nesting\x0a\x0a    Use `#with:` to nest tags. `#with:` can take aString, `TagBrush` instance, a `Widget` or block closure as parameter.\x0a\x0a    Example: `aTag with: aString with: aCanvas div`\x0a\x0a2. Events\x0a\x0a    The `events` protocol contains all methods related to events (delegating event handling to jQuery).\x0a\x0a    Example: `aTag onClick: [ window alert: 'clicked' ]`\x0a\x0a3. Attributes\x0a\x0a    The `attribute` protocol contains methods for attribute manipulation (delegating to jQuery too).\x0a\x0a    Example: `aTag at: 'value' put: 'hello world'`\x0a\x0a4. Raw access and jQuery\x0a\x0a    The `#element` method can be used to access to JavaScript DOM element object.\x0a\x0a    Example: `aTag element cssStyle`\x0a\x0a    Use `#asJQuery` to access to the receiver converted into a jQuery object.\x0a\x0a    Example: `aTag asJQuery css: 'color' value: 'red'`";
smalltalk.addMethod(
smalltalk.method({
selector: "accesskey:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("accesskey",aString);
return self}, function($ctx1) {$ctx1.fill(self,"accesskey:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "accesskey: aString\x0a\x09self at: 'accesskey' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "action:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("action",aString);
return self}, function($ctx1) {$ctx1.fill(self,"action:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "action: aString\x0a\x09self at: 'action' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "addBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendChild_(_st(aTagBrush)._element());
return aTagBrush;
}, function($ctx1) {$ctx1.fill(self,"addBrush:",{aTagBrush:aTagBrush},globals.TagBrush)})},
args: ["aTagBrush"],
source: "addBrush: aTagBrush\x0a\x09self appendChild: aTagBrush element.\x0a\x09^ aTagBrush",
messageSends: ["appendChild:", "element"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "align:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("align",aString);
return self}, function($ctx1) {$ctx1.fill(self,"align:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "align: aString\x0a\x09self at: 'align' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "alt:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("alt",aString);
return self}, function($ctx1) {$ctx1.fill(self,"alt:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "alt: aString\x0a\x09self at: 'alt' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "append:",
protocol: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._appendToBrush_(self);
return self}, function($ctx1) {$ctx1.fill(self,"append:",{anObject:anObject},globals.TagBrush)})},
args: ["anObject"],
source: "append: anObject\x0a\x09anObject appendToBrush: self",
messageSends: ["appendToBrush:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendBlock:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
var root;
return smalltalk.withContext(function($ctx1) { 
root=_st(self["@canvas"])._root();
_st(self["@canvas"])._root_(self);
$ctx1.sendIdx["root:"]=1;
_st(aBlock)._value_(self["@canvas"]);
_st(self["@canvas"])._root_(root);
return self}, function($ctx1) {$ctx1.fill(self,"appendBlock:",{aBlock:aBlock,root:root},globals.TagBrush)})},
args: ["aBlock"],
source: "appendBlock: aBlock\x0a\x09| root |\x0a\x09root := canvas root.\x0a\x09canvas root: self.\x0a\x09aBlock value: canvas.\x0a\x09canvas root: root",
messageSends: ["root", "root:", "value:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendChild:",
protocol: 'adding',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var element=self['@element'];
	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
	} else {
		element.text = String(element.text) + anElement.innerHTML;
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"appendChild:",{anElement:anElement},globals.TagBrush)})},
args: ["anElement"],
source: "appendChild: anElement\x0a\x09\x22In IE7 and IE8 appendChild fails on several node types. So we need to check\x22\x0a\x09<var element=self['@element'];\x0a\x09if (null == element.canHaveChildren || element.canHaveChildren) {\x0a\x09\x09element.appendChild(anElement);\x0a\x09} else {\x0a\x09\x09element.text = String(element.text) + anElement.innerHTML;\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendDocumentFragment:",
protocol: 'private',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var element=self['@element'].appendChild(anElement["@element"]);
return self}, function($ctx1) {$ctx1.fill(self,"appendDocumentFragment:",{anElement:anElement},globals.TagBrush)})},
args: ["anElement"],
source: "appendDocumentFragment: anElement\x0a\x09<var element=self['@element'].appendChild(anElement[\x22@element\x22])>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendString:",
protocol: 'adding',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendChild_(self._createTextNodeFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"appendString:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "appendString: aString\x0a\x09self appendChild: (self createTextNodeFor: aString)",
messageSends: ["appendChild:", "createTextNodeFor:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._addBrush_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},globals.TagBrush)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush addBrush: self",
messageSends: ["addBrush:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._element())._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},globals.TagBrush)})},
args: [],
source: "asJQuery\x0a\x09^ self element asJQuery",
messageSends: ["asJQuery", "element"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQueryInContext:",
protocol: 'converting',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._element())._asJQueryInContext_(aContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},globals.TagBrush)})},
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09^ self element asJQueryInContext: aContext",
messageSends: ["asJQueryInContext:", "element"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'attributes',
fn: function (aString){
var self=this;
function $Collection(){return globals.Collection||(typeof Collection=="undefined"?nil:Collection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Collection())._new())._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "at: aString\x0a\x09^ self at: aString ifAbsent: [ Collection new errorNotFound ]",
messageSends: ["at:ifAbsent:", "errorNotFound", "new"],
referencedClasses: ["Collection"]
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'attributes',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@element'].hasAttribute(aString) ? self['@element'].getAttribute(aString) : aBlock._value();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},globals.TagBrush)})},
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09<return self['@element'].hasAttribute(aString) ? self['@element'].getAttribute(aString) : aBlock._value()>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'attributes',
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].setAttribute(aString, aValue); return aValue;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,aValue:aValue},globals.TagBrush)})},
args: ["aString", "aValue"],
source: "at: aString put: aValue\x0a\x09<self['@element'].setAttribute(aString, aValue); return aValue>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "class:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].className = aString;
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "class: aString\x0a\x09<self['@element'].className = aString>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "cols:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("cols",aString);
return self}, function($ctx1) {$ctx1.fill(self,"cols:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "cols: aString\x0a\x09self at: 'cols' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contenteditable:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("contenteditable",aString);
return self}, function($ctx1) {$ctx1.fill(self,"contenteditable:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "contenteditable: aString\x0a\x09self at: 'contenteditable' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._empty();
$1=self._append_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{anObject:anObject},globals.TagBrush)})},
args: ["anObject"],
source: "contents: anObject\x0a\x09self\x0a\x09empty;\x0a\x09append: anObject",
messageSends: ["empty", "append:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "contextmenu:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("contextmenu",aString);
return self}, function($ctx1) {$ctx1.fill(self,"contextmenu:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "contextmenu: aString\x0a\x09self at: 'contextmenu' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return document.createElement(String(aString));
return self}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "createElementFor: aString\x0a\x09<return document.createElement(String(aString))>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "createTextNodeFor:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return document.createTextNode(String(aString));
return self}, function($ctx1) {$ctx1.fill(self,"createTextNodeFor:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "createTextNodeFor: aString\x0a\x09<return document.createTextNode(String(aString))>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "draggable:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("draggable",aString);
return self}, function($ctx1) {$ctx1.fill(self,"draggable:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "draggable: aString\x0a\x09self at: 'draggable' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@element"];
return $1;
},
args: [],
source: "element\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "empty",
protocol: 'adding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._empty();
return self}, function($ctx1) {$ctx1.fill(self,"empty",{},globals.TagBrush)})},
args: [],
source: "empty\x0a\x09self asJQuery empty",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("for",aString);
return self}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "for: aString\x0a\x09self at: 'for' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("height",aString);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "height: aString\x0a\x09self at: 'height' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "hidden",
protocol: 'attributes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("hidden","hidden");
return self}, function($ctx1) {$ctx1.fill(self,"hidden",{},globals.TagBrush)})},
args: [],
source: "hidden\x0a\x09self at: 'hidden' put: 'hidden'",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "href:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("href",aString);
return self}, function($ctx1) {$ctx1.fill(self,"href:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "href: aString\x0a\x09self at: 'href' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("id",aString);
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "id: aString\x0a\x09self at: 'id' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJQuery:canvas:",
protocol: 'initialization',
fn: function (aJQuery,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=_st(aJQuery)._get_((0));
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},globals.TagBrush)})},
args: ["aJQuery", "aCanvas"],
source: "initializeFromJQuery: aJQuery canvas: aCanvas\x0a\x09element := aJQuery get: 0.\x0a\x09canvas := aCanvas",
messageSends: ["get:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromString:canvas:",
protocol: 'initialization',
fn: function (aString,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=self._createElementFor_(aString);
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromString:canvas:",{aString:aString,aCanvas:aCanvas},globals.TagBrush)})},
args: ["aString", "aCanvas"],
source: "initializeFromString: aString canvas: aCanvas\x0a\x09element := self createElementFor: aString.\x0a\x09canvas := aCanvas",
messageSends: ["createElementFor:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "media:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("media",aString);
return self}, function($ctx1) {$ctx1.fill(self,"media:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "media: aString\x0a\x09self at: 'media' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("method",aString);
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "method: aString\x0a\x09self at: 'method' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("name",aString);
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "name: aString\x0a\x09self at: 'name' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onBlur:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("blur",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onBlur:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onBlur: aBlock\x0a\x09self asJQuery bind: 'blur' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("change",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onChange:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onChange: aBlock\x0a\x09self asJQuery bind: 'change' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("click",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onClick: aBlock\x0a\x09self asJQuery bind: 'click' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onDblClick:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("dblclick",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onDblClick:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onDblClick: aBlock\x0a\x09self asJQuery bind: 'dblclick' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocus:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focus",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocus:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onFocus: aBlock\x0a\x09self asJQuery bind: 'focus' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocusIn:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focusin",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocusIn:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onFocusIn: aBlock\x0a\x09self asJQuery bind: 'focusin' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onFocusOut:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("focusout",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onFocusOut:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onFocusOut: aBlock\x0a\x09self asJQuery bind: 'focusout' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onHover:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("hover",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onHover:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onHover: aBlock\x0a\x09self asJQuery bind: 'hover' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keydown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09self asJQuery bind: 'keydown' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keypress",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onKeyPress: aBlock\x0a\x09self asJQuery bind: 'keypress' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("keyup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09self asJQuery bind: 'keyup' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseDown:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mousedown",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseDown: aBlock\x0a\x09self asJQuery bind: 'mousedown' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseenter",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseEnter: aBlock\x0a\x09self asJQuery bind: 'mouseenter' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseleave",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseLeave: aBlock\x0a\x09self asJQuery bind: 'mouseleave' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mousemove",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseMove: aBlock\x0a\x09self asJQuery bind: 'mousemove' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOut:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseout",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOut:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseOut: aBlock\x0a\x09self asJQuery bind: 'mouseout' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOver:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseover",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOver:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseOver: aBlock\x0a\x09self asJQuery bind: 'mouseover' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseUp:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("mouseup",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onMouseUp: aBlock\x0a\x09self asJQuery bind: 'mouseup' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onSelect:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("select",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSelect:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onSelect: aBlock\x0a\x09self asJQuery bind: 'select' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onSubmit:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("submit",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSubmit:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onSubmit: aBlock\x0a\x09self asJQuery bind: 'submit' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnload:",
protocol: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asJQuery())._bind_do_("unload",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onUnload:",{aBlock:aBlock},globals.TagBrush)})},
args: ["aBlock"],
source: "onUnload: aBlock\x0a\x09self asJQuery bind: 'unload' do: aBlock",
messageSends: ["bind:do:", "asJQuery"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "placeholder:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("placeholder",aString);
return self}, function($ctx1) {$ctx1.fill(self,"placeholder:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "placeholder: aString\x0a\x09self at: 'placeholder' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rel:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rel",aString);
return self}, function($ctx1) {$ctx1.fill(self,"rel:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "rel: aString\x0a\x09self at: 'rel' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAt:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@element'].removeAttribute(aString);
return self}, function($ctx1) {$ctx1.fill(self,"removeAt:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "removeAt: aString\x0a\x09<self['@element'].removeAttribute(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "rows:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("rows",aString);
return self}, function($ctx1) {$ctx1.fill(self,"rows:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "rows: aString\x0a\x09self at: 'rows' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "src:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("src",aString);
return self}, function($ctx1) {$ctx1.fill(self,"src:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "src: aString\x0a\x09self at: 'src' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "style:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("style",aString);
return self}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "style: aString\x0a\x09self at: 'style' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "tabindex:",
protocol: 'attributes',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("tabindex",aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"tabindex:",{aNumber:aNumber},globals.TagBrush)})},
args: ["aNumber"],
source: "tabindex: aNumber\x0a\x09self at: 'tabindex' put: aNumber",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("target",aString);
return self}, function($ctx1) {$ctx1.fill(self,"target:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "target: aString\x0a\x09self at: 'target' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("title",aString);
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "title: aString\x0a\x09self at: 'title' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("type",aString);
return self}, function($ctx1) {$ctx1.fill(self,"type:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "type: aString\x0a\x09self at: 'type' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "valign:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("valign",aString);
return self}, function($ctx1) {$ctx1.fill(self,"valign:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "valign: aString\x0a\x09self at: 'valign' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("value",aString);
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "value: aString\x0a\x09self at: 'value' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'attributes',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("width",aString);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "width: aString\x0a\x09self at: 'width' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._append_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},globals.TagBrush)})},
args: ["anObject"],
source: "with: anObject\x0a\x09self append: anObject",
messageSends: ["append:"],
referencedClasses: []
}),
globals.TagBrush);


smalltalk.addMethod(
smalltalk.method({
selector: "fromJQuery:canvas:",
protocol: 'instance creation',
fn: function (aJQuery,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromJQuery_canvas_(aJQuery,aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},globals.TagBrush.klass)})},
args: ["aJQuery", "aCanvas"],
source: "fromJQuery: aJQuery canvas: aCanvas\x0a\x09^ self new\x0a\x09\x09initializeFromJQuery: aJQuery canvas: aCanvas;\x0a\x09\x09yourself",
messageSends: ["initializeFromJQuery:canvas:", "new", "yourself"],
referencedClasses: []
}),
globals.TagBrush.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:canvas:",
protocol: 'instance creation',
fn: function (aString,aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromString_canvas_(aString,aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:canvas:",{aString:aString,aCanvas:aCanvas},globals.TagBrush.klass)})},
args: ["aString", "aCanvas"],
source: "fromString: aString canvas: aCanvas\x0a\x09^ self new\x0a\x09initializeFromString: aString canvas: aCanvas;\x0a\x09yourself",
messageSends: ["initializeFromString:canvas:", "new", "yourself"],
referencedClasses: []
}),
globals.TagBrush.klass);


smalltalk.addClass('Widget', globals.InterfacingObject, [], 'Web');
globals.Widget.comment="I am a presenter building HTML. Subclasses are typically reusable components.\x0a\x0a## API\x0a\x0aUse `#renderContentOn:` to build HTML. (See `HTMLCanvas` and `TagBrush` classes for more about building HTML).\x0a\x0aTo add a widget to the page, the convenience method `#appendToJQuery:` is very useful.\x0a\x0aExemple: \x0a\x0a    Counter new appendToJQuery: 'body' asJQuery";
smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_(_st(aTagBrush)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},globals.Widget)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.Widget);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
protocol: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},globals.Widget)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
globals.Widget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderOn: html\x0a\x09self",
messageSends: [],
referencedClasses: []
}),
globals.Widget);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "widget";
},
args: [],
source: "heliosClass\x0a\x09^ 'widget'",
messageSends: [],
referencedClasses: []
}),
globals.Widget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._appendBlock_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},globals.BlockClosure)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._value_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},globals.BlockClosure)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self value: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["value:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asSnippet",
protocol: '*Web',
fn: function (){
var self=this;
function $HTMLSnippet(){return globals.HTMLSnippet||(typeof HTMLSnippet=="undefined"?nil:HTMLSnippet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HTMLSnippet())._current())._snippetAt_(self._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSnippet",{},globals.CharacterArray)})},
args: [],
source: "asSnippet\x0a\x09^ HTMLSnippet current snippetAt: self asString",
messageSends: ["snippetAt:", "current", "asString"],
referencedClasses: ["HTMLSnippet"]
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
protocol: '*Web',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(self['@jsObject']);
return self}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},globals.JSObjectProxy)})},
args: [],
source: "asJQuery\x0a\x09<return jQuery(self['@jsObject'])>",
messageSends: [],
referencedClasses: []
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQueryInContext:",
protocol: '*Web',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(self['@jsObject'], aContext);
return self}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},globals.JSObjectProxy)})},
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09<return jQuery(self['@jsObject'], aContext)>",
messageSends: [],
referencedClasses: []
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._append_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},globals.Object)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush append: self asString",
messageSends: ["append:", "asString"],
referencedClasses: []
}),
globals.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aJQuery)._append_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},globals.Object)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self asString",
messageSends: ["append:", "asString"],
referencedClasses: []
}),
globals.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTagBrush)._appendString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},globals.String)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendString: self",
messageSends: ["appendString:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aJQuery)._append_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},globals.String)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self",
messageSends: ["append:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
protocol: '*Web',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(String(self));
return self}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},globals.String)})},
args: [],
source: "asJQuery\x0a\x09<return jQuery(String(self))>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQueryInContext:",
protocol: '*Web',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jQuery(String(self), aContext);
return self}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},globals.String)})},
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09<return jQuery(String(self), aContext)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

});
