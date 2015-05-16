define("amber_core/Platform-Browser", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Platform-Browser');
$core.packages["Platform-Browser"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-Browser"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('BrowserInterface', $globals.Object, [], 'Platform-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserInterface.comment="I am platform interface class that tries to use window and jQuery; that is, one for browser environment.\x0a\x0a## API\x0a\x0a    self isAvailable. \x22true if window and jQuery exist\x22.\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
function $JQuery(){return $globals.JQuery||(typeof JQuery=="undefined"?nil:JQuery)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
self._deprecatedAPI_("Use newXhr or dedicated library.");
if(($receiver = $JQuery()) == null || $receiver.isNil){
$1=self._error_("JQuery wrapper not loaded, cannot do AJAX.");
} else {
$1=$recv($recv($JQuery())._current())._ajax_(anObject);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09self deprecatedAPI: 'Use newXhr or dedicated library.'.\x0a\x09^ JQuery\x0a\x09\x09ifNil: [ self error: 'JQuery wrapper not loaded, cannot do AJAX.' ]\x0a\x09\x09ifNotNil: [ JQuery current ajax: anObject ]",
referencedClasses: ["JQuery"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "ifNil:ifNotNil:", "error:", "ajax:", "current"]
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
selector: "newXhr",
protocol: 'actions',
fn: function (){
var self=this;
function $XMLHttpRequest(){return $globals.XMLHttpRequest||(typeof XMLHttpRequest=="undefined"?nil:XMLHttpRequest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($XMLHttpRequest())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{},$globals.BrowserInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09^ XMLHttpRequest new",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["new"]
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



$core.addClass('BrowserTerminal', $globals.Object, [], 'Platform-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserTerminal.comment="I am `Terminal` service implementation for browser.";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},$globals.BrowserTerminal)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ window alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.BrowserTerminal);

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
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},$globals.BrowserTerminal)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ window confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:"]
}),
$globals.BrowserTerminal);

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
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},$globals.BrowserTerminal)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ window prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:"]
}),
$globals.BrowserTerminal);

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
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},$globals.BrowserTerminal)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ window prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:default:"]
}),
$globals.BrowserTerminal);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'testing',
fn: function (){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._isFeasible();
if($core.assert($1)){
$recv($Terminal())._registerIfNone_(self._new());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BrowserTerminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Terminal registerIfNone: self new ]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}),
$globals.BrowserTerminal.klass);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof window !== "undefined";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{},$globals.BrowserTerminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<return typeof window !== \x22undefined\x22>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BrowserTerminal.klass);

$core.addMethod(
$core.method({
selector: "postMessageTo:",
protocol: '*Platform-Browser',
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
protocol: '*Platform-Browser',
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

});
