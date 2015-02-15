define("amber-contrib-jquery/Wrappers-JQuery", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "jquery"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,jQuery
//>>excludeEnd("imports");
){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Wrappers-JQuery');
$core.packages["Wrappers-JQuery"].innerEval = function (expr) { return eval(expr); };
$core.packages["Wrappers-JQuery"].imports = ["jQuery=jquery"];
$core.packages["Wrappers-JQuery"].transport = {"type":"amd","amdNamespace":"amber-contrib-jquery"};

$core.addClass('BrowserInterface', $globals.Object, [], 'Wrappers-JQuery');
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



$core.addClass('JQuery', $globals.Object, [], 'Wrappers-JQuery');

$core.addMethod(
$core.method({
selector: "current",
protocol: 'initialization',
fn: function (){
var self=this;
var $1;
$1=jQuery;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ jQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JQuery.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Smalltalk())._optOut_(jQuery);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.JQuery.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Allow JS method calls for the jQuery object.\x0a\x09See boot.js DNU handling.\x22\x0a\x09\x0a\x09Smalltalk optOut: jQuery",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["optOut:"]
}),
$globals.JQuery.klass);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: '*Wrappers-JQuery',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv([self])._asJQuery();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09^ {self} asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asJQueryInContext:",
protocol: '*Wrappers-JQuery',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv([self])._asJQueryInContext_(aContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09^ {self} asJQueryInContext: aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQueryInContext:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: '*Wrappers-JQuery',
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
protocol: '*Wrappers-JQuery',
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
selector: "asJQuery",
protocol: '*Wrappers-JQuery',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return jQuery(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09<return jQuery(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJQueryInContext:",
protocol: '*Wrappers-JQuery',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return jQuery(self, aContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQueryInContext:",{aContext:aContext},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "asJQueryInContext: aContext\x0a\x09<return jQuery(self, aContext)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: '*Wrappers-JQuery',
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
protocol: '*Wrappers-JQuery',
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
