define("amber/jquery/Wrappers-JQuery", ["amber/boot"
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
$core.packages["Wrappers-JQuery"].transport = {"type":"amd","amdNamespace":"amber/jquery"};

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
