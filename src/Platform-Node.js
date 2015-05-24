define("amber_core/Platform-Node", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Platform-Node');
$core.packages["Platform-Node"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-Node"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('NodePlatform', $globals.Object, [], 'Platform-Node');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodePlatform.comment="I am `Platform` service implementation for node-like environment.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=global;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ global",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: 'accessing',
fn: function (){
var self=this;
function $XMLHttpRequest(){return $globals.XMLHttpRequest||(typeof XMLHttpRequest=="undefined"?nil:XMLHttpRequest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = $XMLHttpRequest()) == null || $receiver.isNil){
self._error_("XMLHttpRequest not available.");
} else {
$1=$recv($XMLHttpRequest())._new();
return $1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{},$globals.NodePlatform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ XMLHttpRequest new ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "new", "error:"]
}),
$globals.NodePlatform);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'testing',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._isFeasible();
if($core.assert($1)){
$recv($Platform())._registerIfNone_(self._new());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.NodePlatform.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Platform registerIfNone: self new ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}),
$globals.NodePlatform.klass);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof global !== "undefined";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{},$globals.NodePlatform.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<return typeof global !== \x22undefined\x22>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodePlatform.klass);

});
