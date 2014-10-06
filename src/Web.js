define("amber_core/Web", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Web');
$core.packages["Web"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('BrowserInterface', $globals.Object, [], 'Web');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserInterface.comment="I am platform interface class that tries to use window and jQuery; that is, one for browser environment.\x0a\x0a## API\x0a\x0a    self isAvailable. \x22true if window and jQuery exist\x22.\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(jQuery)._ajax_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ jQuery ajax: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:"]
}),
$globals.BrowserInterface);

$core.addMethod(
$core.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(window)._alert_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ window alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.BrowserInterface);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(window)._confirm_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ window confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:"]
}),
$globals.BrowserInterface);

$core.addMethod(
$core.method({
selector: "isAvailable",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return typeof window !== "undefined" && typeof jQuery !== "undefined";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAvailable",{},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAvailable\x0a<return typeof window !== \x22undefined\x22 && typeof jQuery !== \x22undefined\x22>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BrowserInterface);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(window)._prompt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ window prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:"]
}),
$globals.BrowserInterface);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(window)._prompt_default_(aString,defaultString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ window prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:default:"]
}),
$globals.BrowserInterface);



$core.addClass('HTMLCanvas', $globals.Object, ['root'], 'Web');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HTMLCanvas.comment="I am a canvas for building HTML.\x0a\x0aI provide the `#tag:` method to create a `TagBrush` (wrapping a DOM element) and convenience methods in the `tags` protocol.\x0a\x0a## API\x0a\x0aMy instances are used as the argument of the `#renderOn:` method of `Widget` objects.\x0a\x0aThe `#with:` method is used to compose HTML, nesting tags. `#with:` can take a `TagBrush`, a `String`, a `BlockClosure` or a `Widget` as argument.\x0a\x0a## Usage example:\x0a\x0a    aCanvas a \x0a        with: [ aCanvas span with: 'click me' ];\x0a        onClick: [ window alert: 'clicked!' ]";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "a",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("a");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"a",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "a\x0a\x09^ self tag: 'a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "abbr",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("abbr");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"abbr",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "abbr\x0a\x09^ self tag: 'abbr'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "address",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("address");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"address",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "address\x0a\x09^ self tag: 'address'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "area",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("area");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"area",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "area\x0a\x09^ self tag: 'area'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "article",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("article");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"article",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "article\x0a\x09^ self tag: 'article'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "aside",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("aside");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aside",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aside\x0a\x09^ self tag: 'aside'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "audio",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("audio");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"audio",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "audio\x0a\x09^ self tag: 'audio'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "base",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("base");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"base",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base\x0a\x09^ self tag: 'base'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "blockquote",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("blockquote");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blockquote",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blockquote\x0a\x09^ self tag: 'blockquote'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "body",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("body");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"body",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "body\x0a\x09^ self tag: 'body'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "br",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("br");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"br",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "br\x0a\x09^ self tag: 'br'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "button",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("button");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"button",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "button\x0a\x09^ self tag: 'button'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "canvas",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("canvas");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canvas",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvas\x0a\x09^ self tag: 'canvas'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "caption",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("caption");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"caption",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "caption\x0a\x09^ self tag: 'caption'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "cite",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("cite");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cite",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cite\x0a\x09^ self tag: 'cite'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "code",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("code");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09^ self tag: 'code'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "col",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("col");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"col",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "col\x0a\x09^ self tag: 'col'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "colgroup",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("colgroup");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colgroup",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colgroup\x0a\x09^ self tag: 'colgroup'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "command",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("command");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"command",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "command\x0a\x09^ self tag: 'command'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "datalist",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("datalist");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"datalist",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "datalist\x0a\x09^ self tag: 'datalist'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "dd",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("dd");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dd",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dd\x0a\x09^ self tag: 'dd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "del",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("del");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"del",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "del\x0a\x09^ self tag: 'del'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "details",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("details");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"details",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "details\x0a\x09^ self tag: 'details'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "div",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("div");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"div",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "div\x0a\x09^ self tag: 'div'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "div:",
protocol: 'tags',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._div())._with_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"div:",{aBlock:aBlock},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "div: aBlock\x0a\x09^ self div with: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "dl",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("dl");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dl",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dl\x0a\x09^ self tag: 'dl'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "dt",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("dt");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dt",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dt\x0a\x09^ self tag: 'dt'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "em",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("em");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"em",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "em\x0a\x09^ self tag: 'em'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "embed",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("embed");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"embed",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "embed\x0a\x09^ self tag: 'embed'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "entity:",
protocol: 'adding',
fn: function (aString){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5;
$2="<span />"._asJQuery();
$4="&".__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(";");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._html_($3);
result=$recv($1)._text();
$5=$recv($recv(result)._size()).__eq((1));
if(!$core.assert($5)){
self._error_("Not an HTML entity: ".__comma(aString));
};
self._with_(result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"entity:",{aString:aString,result:result},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "entity: aString\x0a\x09\x22Adds a character representing html entity, eg.\x0a\x09html entity: 'copy'\x0a\x09adds a copyright sign.\x0a\x09If a name does not represent valid HTML entity, error is raised.\x22\x0a\x09| result |\x0a\x09result := ('<span />' asJQuery html: '&', aString, ';') text.\x0a\x09result size = 1 ifFalse: [ self error: 'Not an HTML entity: ', aString ].\x0a\x09self with: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text", "html:", "asJQuery", ",", "ifFalse:", "=", "size", "error:", "with:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "fieldset",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("fieldset");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fieldset",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fieldset\x0a\x09^ self tag: 'fieldset'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "figcaption",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("figcaption");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"figcaption",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "figcaption\x0a\x09^ self tag: 'figcaption'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "figure",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("figure");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"figure",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "figure\x0a\x09^ self tag: 'figure'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "footer",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("footer");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"footer",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "footer\x0a\x09^ self tag: 'footer'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "form",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("form");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"form",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "form\x0a\x09^ self tag: 'form'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h1",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h1");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h1",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h1\x0a\x09^ self tag: 'h1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h1:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h1())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h1:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h1: anObject\x0a\x09^ self h1 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h2",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h2");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h2",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h2\x0a\x09^ self tag: 'h2'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h2:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h2())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h2:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h2: anObject\x0a\x09^ self h2 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h2"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h3",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h3");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h3",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h3\x0a\x09^ self tag: 'h3'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h3:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h3())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h3:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h3: anObject\x0a\x09^ self h3 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h3"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h4",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h4");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h4",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h4\x0a\x09^ self tag: 'h4'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h4:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h4())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h4:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h4: anObject\x0a\x09^ self h4 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h4"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h5",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h5");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h5",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h5\x0a\x09^ self tag: 'h5'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h5:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h5())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h5:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h5: anObject\x0a\x09^ self h5 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h5"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h6",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("h6");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h6",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "h6\x0a\x09^ self tag: 'h6'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "h6:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._h6())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h6:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "h6: anObject\x0a\x09^ self h6 with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h6"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "head",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("head");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"head",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "head\x0a\x09^ self tag: 'head'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "header",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("header");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"header",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x09^ self tag: 'header'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "hgroup",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("hgroup");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hgroup",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hgroup\x0a\x09^ self tag: 'hgroup'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "hr",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("hr");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hr",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hr\x0a\x09^ self tag: 'hr'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "html",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("html");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"html",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "html\x0a\x09^ self tag: 'html'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "iframe",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("iframe");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iframe",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iframe\x0a\x09^ self tag: 'iframe'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "iframe:",
protocol: 'tags',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._iframe())._src_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iframe:",{aString:aString},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "iframe: aString\x0a\x09^ self iframe src: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["src:", "iframe"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "img",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("img");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"img",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "img\x0a\x09^ self tag: 'img'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "img:",
protocol: 'tags',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._img())._src_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"img:",{aString:aString},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "img: aString\x0a\x09^ self img src: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["src:", "img"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HTMLCanvas.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
self["@root"]=$recv($TagBrush())._fromString_canvas_("div",self);
self["@root"];
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09root ifNil: [ root := TagBrush fromString: 'div' canvas: self ]",
referencedClasses: ["TagBrush"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "fromString:canvas:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "initializeFromJQuery:",
protocol: 'initialization',
fn: function (aJQuery){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@root"]=$recv($TagBrush())._fromJQuery_canvas_(aJQuery,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09root := TagBrush fromJQuery: aJQuery canvas: self",
referencedClasses: ["TagBrush"],
//>>excludeEnd("ide");
messageSends: ["fromJQuery:canvas:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "input",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("input");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"input",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "input\x0a\x09^ self tag: 'input'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("label");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ self tag: 'label'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "legend",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("legend");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"legend",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "legend\x0a\x09^ self tag: 'legend'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "li",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("li");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"li",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "li\x0a\x09^ self tag: 'li'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "li:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._li())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"li:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "li: anObject\x0a\x09^ self li with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "link",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("link");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"link",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "link\x0a\x09^ self tag: 'link'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "map",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("map");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"map",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "map\x0a\x09^ self tag: 'map'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "mark",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("mark");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mark",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mark\x0a\x09^ self tag: 'mark'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "menu",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("menu");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menu",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menu\x0a\x09^ self tag: 'menu'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "meta",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("meta");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"meta",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "meta\x0a\x09^ self tag: 'meta'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "nav",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("nav");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nav",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nav\x0a\x09^ self tag: 'nav'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "newTag:",
protocol: 'tags',
fn: function (aString){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($TagBrush())._fromString_canvas_(aString,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTag:",{aString:aString},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newTag: aString\x0a\x09^ TagBrush fromString: aString canvas: self",
referencedClasses: ["TagBrush"],
//>>excludeEnd("ide");
messageSends: ["fromString:canvas:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "noscript",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("noscript");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noscript",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noscript\x0a\x09^ self tag: 'noscript'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "object",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("object");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"object",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "object\x0a\x09^ self tag: 'object'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "ol",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("ol");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ol",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ol\x0a\x09^ self tag: 'ol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "ol:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._ol())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ol:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ol: anObject\x0a\x09^ self ol with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "ol"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "optgroup",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("optgroup");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"optgroup",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "optgroup\x0a\x09^ self tag: 'optgroup'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "option",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("option");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"option",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "option\x0a\x09^ self tag: 'option'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "output",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("output");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"output",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "output\x0a\x09^ self tag: 'output'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "p",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("p");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"p",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "p\x0a\x09^ self tag: 'p'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "p:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._p())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"p:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "p: anObject\x0a\x09^ self p with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "p"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "param",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("param");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"param",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "param\x0a\x09^ self tag: 'param'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "pre",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("pre");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pre",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pre\x0a\x09^ self tag: 'pre'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "progress",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("progress");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"progress",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "progress\x0a\x09^ self tag: 'progress'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x09^ root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@root"]=aTagBrush;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "root: aTagBrush\x0a\x09root := aTagBrush",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "script",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("script");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"script",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "script\x0a\x09^ self tag: 'script'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "section",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("section");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"section",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "section\x0a\x09^ self tag: 'section'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "select",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("select");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "select\x0a\x09^ self tag: 'select'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "small",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("small");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"small",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "small\x0a\x09^ self tag: 'small'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "snippet:",
protocol: 'accessing',
fn: function (anElement){
var self=this;
var clone,caret;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
clone=$recv($recv(anElement)._asJQuery())._clone();
$1=$recv($TagBrush())._fromJQuery_canvas_(clone,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromJQuery:canvas:"]=1;
//>>excludeEnd("ctx");
self._with_($1);
caret=$recv(clone)._find_("[data-snippet=\x22*\x22]");
$2=$recv($recv(caret)._toArray())._isEmpty();
if($core.assert($2)){
caret=clone;
caret;
};
$3=$recv($TagBrush())._fromJQuery_canvas_($recv(caret)._removeAttr_("data-snippet"),self);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippet:",{anElement:anElement,clone:clone,caret:caret},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "snippet: anElement\x0a\x09\x22Adds clone of anElement, finds [data-snippet=\x22\x22*\x22\x22] subelement\x0a\x09and returns TagBrush as if that subelement was just added.\x0a\x09\x0a\x09Rarely needed to use directly, use `html foo` dynamically installed method\x0a\x09for a snippet named foo.\x22\x0a\x09\x0a\x09| clone caret |\x0a\x09\x0a\x09clone := anElement asJQuery clone.\x0a\x09self with: (TagBrush fromJQuery: clone canvas: self).\x0a\x09caret := clone find: '[data-snippet=\x22*\x22]'.\x0a\x09caret toArray isEmpty ifTrue: [ caret := clone ].\x0a\x09^ TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self",
referencedClasses: ["TagBrush"],
//>>excludeEnd("ide");
messageSends: ["clone", "asJQuery", "with:", "fromJQuery:canvas:", "find:", "ifTrue:", "isEmpty", "toArray", "removeAttr:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("source");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ self tag: 'source'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "span",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("span");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"span",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "span\x0a\x09^ self tag: 'span'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "span:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._span())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"span:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "span: anObject\x0a\x09^ self span with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "span"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "strong",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("strong");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strong",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "strong\x0a\x09^ self tag: 'strong'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "strong:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._strong())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strong:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "strong: anObject\x0a\x09^ self strong with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "strong"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("style");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"style",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^ self tag: 'style'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "style:",
protocol: 'tags',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._style();
$recv($2)._with_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "style: aString\x0a\x09^ self style with: aString; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "style", "yourself"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "sub",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("sub");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sub",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sub\x0a\x09^ self tag: 'sub'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "summary",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("summary");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"summary",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "summary\x0a\x09^ self tag: 'summary'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "sup",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("sup");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sup",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sup\x0a\x09^ self tag: 'sup'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "table",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("table");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"table",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "table\x0a\x09^ self tag: 'table'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "tag:",
protocol: 'tags',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@root"])._addBrush_(self._newTag_(aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tag:",{aString:aString},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "tag: aString\x0a\x09^ root addBrush: (self newTag: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addBrush:", "newTag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "tbody",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("tbody");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tbody",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tbody\x0a\x09^ self tag: 'tbody'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "td",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("td");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"td",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "td\x0a\x09^ self tag: 'td'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "textarea",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("textarea");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textarea",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textarea\x0a\x09^ self tag: 'textarea'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "tfoot",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("tfoot");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tfoot",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tfoot\x0a\x09^ self tag: 'tfoot'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "th",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("th");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"th",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "th\x0a\x09^ self tag: 'th'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "thead",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("thead");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"thead",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thead\x0a\x09^ self tag: 'thead'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "time",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("time");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09^ self tag: 'time'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("title");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ self tag: 'title'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "tr",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("tr");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tr",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tr\x0a\x09^ self tag: 'tr'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "ul",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("ul");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ul",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ul\x0a\x09^ self tag: 'ul'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "ul:",
protocol: 'tags',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._ul())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ul:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ul: anObject\x0a\x09^ self ul with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "ul"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "video",
protocol: 'tags',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._tag_("video");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"video",{},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "video\x0a\x09^ self tag: 'video'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "with:",
protocol: 'adding',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._root())._with_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09^ self root with: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "root"]
}),
$globals.HTMLCanvas);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(jQuery)._basicAt_put_("allowJavaScriptCalls",true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HTMLCanvas.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Allow JS method calls for the jQuery object.\x0a\x09See boot.js DNU handling.\x22\x0a\x09\x0a\x09jQuery basicAt: 'allowJavaScriptCalls' put: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.HTMLCanvas.klass);

$core.addMethod(
$core.method({
selector: "onJQuery:",
protocol: 'instance creation',
fn: function (aJQuery){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._initializeFromJQuery_(aJQuery);
$recv($2)._initialize();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onJQuery:",{aJQuery:aJQuery},$globals.HTMLCanvas.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "onJQuery: aJQuery\x0a\x09^ self basicNew\x0a\x09\x09initializeFromJQuery: aJQuery;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromJQuery:", "basicNew", "initialize", "yourself"]
}),
$globals.HTMLCanvas.klass);


$core.addClass('HTMLSnippet', $globals.Object, ['snippets'], 'Web');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HTMLSnippet.comment="My sole instance is the registry of html snippets.\x0a`HTMLSnippet current` is the public singleton instance.\x0a\x0aOn startup, it scans the document for any html elements\x0awith `'data-snippet=\x22foo\x22'` attribute and takes them off the document,\x0aremembering them in the store under the specified name.\x0aIt also install method #foo into HTMLCanvas dynamically.\x0a\x0aEvery html snippet should mark a 'caret', a place where contents\x0acan be inserted, by 'data-snippet=\x22*\x22' (a special name for caret).\x0aFor example:\x0a\x0a`<li data-snippet='menuelement' class='...'><a data-snippet='*'></a></li>`\x0a\x0adefines a list element with a link inside; the link itself is marked as a caret.\x0a\x0aYou can later issue\x0a\x0a`html menuelement href: '/foo'; with: 'A foo'`\x0a\x0ato insert the whole snippet and directly manipulate the caret, so it renders:\x0a\x0a`<li class='...'><a href='/foo'>A foo</a></li>`\x0a\x0aFor a self-careting tags (not very useful, but you do not need to fill class etc.\x0ayou can use\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two' data-snippet='*bar'></div>`\x0a\x0aand in code later do:\x0a\x0a`html bar with: [ xxx ]`\x0a\x0ato render\x0a\x0a`<div class='lots of classes' attr1='one' attr2='two'>...added by xxx...</div>`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initializeFromJQuery:",
protocol: 'initialization',
fn: function (aJQuery){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._snippetsFromJQuery_(aJQuery))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._installSnippetFromJQuery_($recv(each)._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:",{aJQuery:aJQuery},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "initializeFromJQuery: aJQuery\x0a\x09\x22Finds and takes out all snippets out of aJQuery.\x0a\x09Installs it into self.\x22\x0a\x09\x0a\x09(self snippetsFromJQuery: aJQuery) do: [ :each |\x0a\x09\x09self installSnippetFromJQuery: each asJQuery ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "snippetsFromJQuery:", "installSnippetFromJQuery:", "asJQuery"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "installSnippetFromJQuery:",
protocol: 'snippet installation',
fn: function (element){
var self=this;
var name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
name=$recv(element)._attr_("data-snippet");
$1=$recv(name).__eq("*");
if(!$core.assert($1)){
$2=$recv("^\x5c*"._asRegexp())._test_(name);
if($core.assert($2)){
name=$recv(name)._allButFirst();
name;
$recv(element)._attr_put_("data-snippet","*");
} else {
$recv(element)._removeAttr_("data-snippet");
};
self._snippetAt_install_(name,$recv($recv(element)._detach())._get_((0)));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installSnippetFromJQuery:",{element:element,name:name},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["element"],
source: "installSnippetFromJQuery: element\x0a\x09| name |\x0a\x09name := element attr: 'data-snippet'.\x0a\x09name = '*' ifFalse: [\x0a\x09\x09('^\x5c*' asRegexp test: name)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09name := name allButFirst.\x0a\x09\x09\x09\x09element attr: 'data-snippet' put: '*' ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09element removeAttr: 'data-snippet' ].\x0a\x09\x09self snippetAt: name install: (element detach get: 0) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attr:", "ifFalse:", "=", "ifTrue:ifFalse:", "test:", "asRegexp", "allButFirst", "attr:put:", "removeAttr:", "snippetAt:install:", "get:", "detach"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "snippetAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._snippets())._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippetAt:",{aString:aString},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "snippetAt: aString\x0a\x09^ self snippets at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "snippets"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "snippetAt:compile:",
protocol: 'method generation',
fn: function (aString,anElement){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_($recv($recv((function(htmlReceiver){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(htmlReceiver)._snippet_(anElement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({htmlReceiver:htmlReceiver},$ctx1,1)});
//>>excludeEnd("ctx");
}))._currySelf())._asCompiledMethod_(aString),$HTMLCanvas(),"**snippets");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippetAt:compile:",{aString:aString,anElement:anElement},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anElement"],
source: "snippetAt: aString compile: anElement\x0a\x09\x22Method generation for the snippet.\x0a\x09The selector is aString, the method block uses anElement\x22\x0a\x09\x0a\x09ClassBuilder new\x0a\x09\x09installMethod: ([ :htmlReceiver | htmlReceiver snippet: anElement ]\x0a\x09\x09\x09currySelf asCompiledMethod: aString)\x0a\x09\x09forClass: HTMLCanvas\x0a\x09\x09protocol: '**snippets'",
referencedClasses: ["ClassBuilder", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["installMethod:forClass:protocol:", "new", "asCompiledMethod:", "currySelf", "snippet:"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "snippetAt:install:",
protocol: 'snippet installation',
fn: function (aString,anElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._snippets())._at_put_(aString,anElement);
self._snippetAt_compile_(aString,anElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippetAt:install:",{aString:aString,anElement:anElement},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anElement"],
source: "snippetAt: aString install: anElement\x0a\x09self snippets at: aString put: anElement.\x0a\x09self snippetAt: aString compile: anElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "snippets", "snippetAt:compile:"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "snippets",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@snippets"];
if(($receiver = $2) == null || $receiver.isNil){
self["@snippets"]=$globals.HashedCollection._newFromPairs_([]);
$1=self["@snippets"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippets",{},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "snippets\x0a\x09^ snippets ifNil: [ snippets := #{} ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HTMLSnippet);

$core.addMethod(
$core.method({
selector: "snippetsFromJQuery:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aJQuery)._find_("[data-snippet]"))._toArray();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"snippetsFromJQuery:",{aJQuery:aJQuery},$globals.HTMLSnippet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "snippetsFromJQuery: aJQuery\x0a\x09^ (aJQuery find: '[data-snippet]') toArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toArray", "find:"]
}),
$globals.HTMLSnippet);


$globals.HTMLSnippet.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
var $1;
$1=self["@current"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HTMLSnippet.klass);

$core.addMethod(
$core.method({
selector: "ensureCurrent",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self["@current"];
if(($receiver = $1) == null || $receiver.isNil){
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HTMLSnippet.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._initializeFromJQuery_($recv(document)._asJQuery());
$3=$recv($2)._yourself();
self["@current"]=$3;
self["@current"];
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureCurrent",{},$globals.HTMLSnippet.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureCurrent\x0a\x09current ifNil: [\x0a\x09\x09current := super new\x0a\x09\x09\x09initializeFromJQuery: document asJQuery;\x0a\x09\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeFromJQuery:", "new", "asJQuery", "yourself"]
}),
$globals.HTMLSnippet.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HTMLSnippet.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._isDOMAvailable();
if($core.assert($1)){
self._ensureCurrent();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HTMLSnippet.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self isDOMAvailable ifTrue: [\x0a\x09\x09self ensureCurrent ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:", "isDOMAvailable", "ensureCurrent"]
}),
$globals.HTMLSnippet.klass);

$core.addMethod(
$core.method({
selector: "isDOMAvailable",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return typeof document !== 'undefined' ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDOMAvailable",{},$globals.HTMLSnippet.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDOMAvailable\x0a\x09< return typeof document !== 'undefined' >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HTMLSnippet.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.HTMLSnippet.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.HTMLSnippet.klass);


$core.addClass('TagBrush', $globals.Object, ['canvas', 'element'], 'Web');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TagBrush.comment="I am a brush for building a single DOM element (which I hold onto).\x0a\x0aAll tags but `<style>` are instances of me (see the `StyleBrush` class).\x0a\x0a## API\x0a\x0a1. Nesting\x0a\x0a    Use `#with:` to nest tags. `#with:` can take aString, `TagBrush` instance, a `Widget` or block closure as parameter.\x0a\x0a    Example: `aTag with: aString with: aCanvas div`\x0a\x0a2. Events\x0a\x0a    The `events` protocol contains all methods related to events (delegating event handling to jQuery).\x0a\x0a    Example: `aTag onClick: [ window alert: 'clicked' ]`\x0a\x0a3. Attributes\x0a\x0a    The `attribute` protocol contains methods for attribute manipulation (delegating to jQuery too).\x0a\x0a    Example: `aTag at: 'value' put: 'hello world'`\x0a\x0a4. Raw access and jQuery\x0a\x0a    The `#element` method can be used to access to JavaScript DOM element object.\x0a\x0a    Example: `aTag element cssStyle`\x0a\x0a    Use `#asJQuery` to access to the receiver converted into a jQuery object.\x0a\x0a    Example: `aTag asJQuery css: 'color' value: 'red'`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accesskey:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("accesskey",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accesskey:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "accesskey: aString\x0a\x09self at: 'accesskey' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "action:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("action",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"action:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "action: aString\x0a\x09self at: 'action' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "addBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendChild_($recv(aTagBrush)._element());
return aTagBrush;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addBrush:",{aTagBrush:aTagBrush},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "addBrush: aTagBrush\x0a\x09self appendChild: aTagBrush element.\x0a\x09^ aTagBrush",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendChild:", "element"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "align:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("align",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"align:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "align: aString\x0a\x09self at: 'align' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "alt:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("alt",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alt:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alt: aString\x0a\x09self at: 'alt' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "append:",
protocol: 'adding',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anObject)._appendToBrush_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"append:",{anObject:anObject},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "append: anObject\x0a\x09anObject appendToBrush: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToBrush:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "appendBlock:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
var root;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
root=$recv(self["@canvas"])._root();
$recv(self["@canvas"])._root_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["root:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_(self["@canvas"]);
$recv(self["@canvas"])._root_(root);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendBlock:",{aBlock:aBlock,root:root},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "appendBlock: aBlock\x0a\x09| root |\x0a\x09root := canvas root.\x0a\x09canvas root: self.\x0a\x09aBlock value: canvas.\x0a\x09canvas root: root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["root", "root:", "value:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "appendChild:",
protocol: 'adding',
fn: function (anElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var element=self['@element'];
	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
	} else {
		element.text = String(element.text) + anElement.innerHTML;
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendChild:",{anElement:anElement},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "appendChild: anElement\x0a\x09\x22In IE7 and IE8 appendChild fails on several node types. So we need to check\x22\x0a\x09<var element=self['@element'];\x0a\x09if (null == element.canHaveChildren || element.canHaveChildren) {\x0a\x09\x09element.appendChild(anElement);\x0a\x09} else {\x0a\x09\x09element.text = String(element.text) + anElement.innerHTML;\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "appendDocumentFragment:",
protocol: 'private',
fn: function (anElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var element=self['@element'].appendChild(anElement["@element"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendDocumentFragment:",{anElement:anElement},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "appendDocumentFragment: anElement\x0a\x09<var element=self['@element'].appendChild(anElement[\x22@element\x22])>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "appendString:",
protocol: 'adding',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendChild_(self._createTextNodeFor_(aString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendString:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "appendString: aString\x0a\x09self appendChild: (self createTextNodeFor: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendChild:", "createTextNodeFor:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTagBrush)._addBrush_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush addBrush: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addBrush:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._element())._asJQuery();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09^ self element asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "element"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "asJQueryInContext:",
protocol: 'converting',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._element())._asJQueryInContext_(aContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09^ self element asJQueryInContext: aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQueryInContext:", "element"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'attributes',
fn: function (aString){
var self=this;
function $Collection(){return $globals.Collection||(typeof Collection=="undefined"?nil:Collection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._at_ifAbsent_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Collection())._new())._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09^ self at: aString ifAbsent: [ Collection new errorNotFound ]",
referencedClasses: ["Collection"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "errorNotFound", "new"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'attributes',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self['@element'].hasAttribute(aString) ? self['@element'].getAttribute(aString) : aBlock._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09<return self['@element'].hasAttribute(aString) ? self['@element'].getAttribute(aString) : aBlock._value()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'attributes',
fn: function (aString,aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self['@element'].setAttribute(aString, aValue); return aValue;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,aValue:aValue},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aValue"],
source: "at: aString put: aValue\x0a\x09<self['@element'].setAttribute(aString, aValue); return aValue>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "class:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self['@element'].className = aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "class: aString\x0a\x09<self['@element'].className = aString>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "cols:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("cols",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cols:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "cols: aString\x0a\x09self at: 'cols' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "contenteditable:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("contenteditable",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contenteditable:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contenteditable: aString\x0a\x09self at: 'contenteditable' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'adding',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._empty();
$1=self._append_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents:",{anObject:anObject},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "contents: anObject\x0a\x09self\x0a\x09empty;\x0a\x09append: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "append:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "contextmenu:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("contextmenu",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contextmenu:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contextmenu: aString\x0a\x09self at: 'contextmenu' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "createElementFor:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return document.createElement(String(aString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "createElementFor: aString\x0a\x09<return document.createElement(String(aString))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "createTextNodeFor:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return document.createTextNode(String(aString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createTextNodeFor:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "createTextNodeFor: aString\x0a\x09<return document.createTextNode(String(aString))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "draggable:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("draggable",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draggable:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "draggable: aString\x0a\x09self at: 'draggable' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "element",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@element"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "element\x0a\x09^ element",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "empty",
protocol: 'adding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._empty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"empty",{},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "empty\x0a\x09self asJQuery empty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "for:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("for",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09self at: 'for' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "height:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("height",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "height: aString\x0a\x09self at: 'height' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "hidden",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("hidden","hidden");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hidden",{},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hidden\x0a\x09self at: 'hidden' put: 'hidden'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "href:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("href",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"href:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "href: aString\x0a\x09self at: 'href' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "id:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("id",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "id: aString\x0a\x09self at: 'id' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "initializeFromJQuery:canvas:",
protocol: 'initialization',
fn: function (aJQuery,aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@element"]=$recv(aJQuery)._get_((0));
self["@canvas"]=aCanvas;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery", "aCanvas"],
source: "initializeFromJQuery: aJQuery canvas: aCanvas\x0a\x09element := aJQuery get: 0.\x0a\x09canvas := aCanvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "initializeFromString:canvas:",
protocol: 'initialization',
fn: function (aString,aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@element"]=self._createElementFor_(aString);
self["@canvas"]=aCanvas;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromString:canvas:",{aString:aString,aCanvas:aCanvas},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCanvas"],
source: "initializeFromString: aString canvas: aCanvas\x0a\x09element := self createElementFor: aString.\x0a\x09canvas := aCanvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElementFor:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "media:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("media",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"media:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "media: aString\x0a\x09self at: 'media' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("method",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "method: aString\x0a\x09self at: 'method' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("name",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09self at: 'name' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onBlur:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("blur",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onBlur:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onBlur: aBlock\x0a\x09self asJQuery bind: 'blur' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onChange:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("change",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onChange:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onChange: aBlock\x0a\x09self asJQuery bind: 'change' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onClick:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("click",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClick:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onClick: aBlock\x0a\x09self asJQuery bind: 'click' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onDblClick:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("dblclick",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDblClick:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onDblClick: aBlock\x0a\x09self asJQuery bind: 'dblclick' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onFocus:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("focus",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onFocus:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onFocus: aBlock\x0a\x09self asJQuery bind: 'focus' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onFocusIn:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("focusin",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onFocusIn:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onFocusIn: aBlock\x0a\x09self asJQuery bind: 'focusin' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onFocusOut:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("focusout",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onFocusOut:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onFocusOut: aBlock\x0a\x09self asJQuery bind: 'focusout' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onHover:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("hover",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onHover:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onHover: aBlock\x0a\x09self asJQuery bind: 'hover' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onKeyDown:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("keydown",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09self asJQuery bind: 'keydown' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onKeyPress:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("keypress",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onKeyPress: aBlock\x0a\x09self asJQuery bind: 'keypress' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onKeyUp:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("keyup",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09self asJQuery bind: 'keyup' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseDown:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mousedown",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseDown:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseDown: aBlock\x0a\x09self asJQuery bind: 'mousedown' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseEnter:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mouseenter",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseEnter: aBlock\x0a\x09self asJQuery bind: 'mouseenter' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseLeave:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mouseleave",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseLeave: aBlock\x0a\x09self asJQuery bind: 'mouseleave' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseMove:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mousemove",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseMove: aBlock\x0a\x09self asJQuery bind: 'mousemove' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseOut:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mouseout",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseOut:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseOut: aBlock\x0a\x09self asJQuery bind: 'mouseout' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseOver:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mouseover",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseOver:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseOver: aBlock\x0a\x09self asJQuery bind: 'mouseover' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onMouseUp:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("mouseup",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseUp:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseUp: aBlock\x0a\x09self asJQuery bind: 'mouseup' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onSelect:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("select",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSelect:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onSelect: aBlock\x0a\x09self asJQuery bind: 'select' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onSubmit:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("submit",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSubmit:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onSubmit: aBlock\x0a\x09self asJQuery bind: 'submit' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "onUnload:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._asJQuery())._bind_do_("unload",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onUnload:",{aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onUnload: aBlock\x0a\x09self asJQuery bind: 'unload' do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "asJQuery"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "placeholder:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("placeholder",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"placeholder:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "placeholder: aString\x0a\x09self at: 'placeholder' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "rel:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("rel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rel:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rel: aString\x0a\x09self at: 'rel' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "removeAt:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self['@element'].removeAttribute(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAt:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeAt: aString\x0a\x09<self['@element'].removeAttribute(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "rows:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("rows",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rows:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rows: aString\x0a\x09self at: 'rows' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "src:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("src",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"src:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "src: aString\x0a\x09self at: 'src' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "style:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("style",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "style: aString\x0a\x09self at: 'style' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "tabindex:",
protocol: 'attributes',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("tabindex",aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabindex:",{aNumber:aNumber},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "tabindex: aNumber\x0a\x09self at: 'tabindex' put: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "target:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("target",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"target:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "target: aString\x0a\x09self at: 'target' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("title",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x09self at: 'title' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("type",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "type: aString\x0a\x09self at: 'type' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "valign:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("valign",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valign:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "valign: aString\x0a\x09self at: 'valign' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("value",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "value: aString\x0a\x09self at: 'value' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'attributes',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._at_put_("width",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:",{aString:aString},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "width: aString\x0a\x09self at: 'width' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "with:",
protocol: 'adding',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._append_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09self append: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:"]
}),
$globals.TagBrush);


$core.addMethod(
$core.method({
selector: "fromJQuery:canvas:",
protocol: 'instance creation',
fn: function (aJQuery,aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromJQuery_canvas_(aJQuery,aCanvas);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJQuery:canvas:",{aJQuery:aJQuery,aCanvas:aCanvas},$globals.TagBrush.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery", "aCanvas"],
source: "fromJQuery: aJQuery canvas: aCanvas\x0a\x09^ self new\x0a\x09\x09initializeFromJQuery: aJQuery canvas: aCanvas;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromJQuery:canvas:", "new", "yourself"]
}),
$globals.TagBrush.klass);

$core.addMethod(
$core.method({
selector: "fromString:canvas:",
protocol: 'instance creation',
fn: function (aString,aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromString_canvas_(aString,aCanvas);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:canvas:",{aString:aString,aCanvas:aCanvas},$globals.TagBrush.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCanvas"],
source: "fromString: aString canvas: aCanvas\x0a\x09^ self new\x0a\x09initializeFromString: aString canvas: aCanvas;\x0a\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromString:canvas:", "new", "yourself"]
}),
$globals.TagBrush.klass);


$core.addClass('Widget', $globals.InterfacingObject, [], 'Web');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Widget.comment="I am a presenter building HTML. Subclasses are typically reusable components.\x0a\x0a## API\x0a\x0aUse `#renderContentOn:` to build HTML. (See `HTMLCanvas` and `TagBrush` classes for more about building HTML).\x0a\x0aTo add a widget to the page, the convenience method `#appendToJQuery:` is very useful.\x0a\x0aExemple: \x0a\x0a    Counter new appendToJQuery: 'body' asJQuery";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: 'adding',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendToJQuery_($recv(aTagBrush)._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.Widget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.Widget);

$core.addMethod(
$core.method({
selector: "appendToJQuery:",
protocol: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderOn_($recv($HTMLCanvas())._onJQuery_(aJQuery));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},$globals.Widget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "onJQuery:"]
}),
$globals.Widget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Widget);


$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "widget";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'widget'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Widget.klass);

$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTagBrush)._appendBlock_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendBlock: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendBlock:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._value_($recv($HTMLCanvas())._onJQuery_(aJQuery));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self value: (HTMLCanvas onJQuery: aJQuery)",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["value:", "onJQuery:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asSnippet",
protocol: '*Web',
fn: function (){
var self=this;
function $HTMLSnippet(){return $globals.HTMLSnippet||(typeof HTMLSnippet=="undefined"?nil:HTMLSnippet)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($HTMLSnippet())._current())._snippetAt_(self._asString());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSnippet",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSnippet\x0a\x09^ HTMLSnippet current snippetAt: self asString",
referencedClasses: ["HTMLSnippet"],
//>>excludeEnd("ide");
messageSends: ["snippetAt:", "current", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: '*Web',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return jQuery(self['@jsObject']);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09<return jQuery(self['@jsObject'])>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asJQueryInContext:",
protocol: '*Web',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return jQuery(self['@jsObject'], aContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09<return jQuery(self['@jsObject'], aContext)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTagBrush)._append_(self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush append: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asString"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aJQuery)._append_(self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asString"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postMessageTo:",
protocol: '*Web',
fn: function (aFrame){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._postMessageTo_origin_(aFrame,"*");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postMessageTo:",{aFrame:aFrame},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame"],
source: "postMessageTo: aFrame\x0a^ self postMessageTo: aFrame origin: '*'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["postMessageTo:origin:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postMessageTo:origin:",
protocol: '*Web',
fn: function (aFrame,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return aFrame.postMessage(self, aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postMessageTo:origin:",{aFrame:aFrame,aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame", "aString"],
source: "postMessageTo: aFrame origin: aString\x0a<return aFrame.postMessage(self, aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "appendToBrush:",
protocol: '*Web',
fn: function (aTagBrush){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTagBrush)._appendString_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09aTagBrush appendString: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendString:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "appendToJQuery:",
protocol: '*Web',
fn: function (aJQuery){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aJQuery)._append_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09aJQuery append: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: '*Web',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return jQuery(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09<return jQuery(String(self))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJQueryInContext:",
protocol: '*Web',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return jQuery(String(self), aContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09<return jQuery(String(self), aContext)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

});
