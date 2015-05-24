define("amber_core/Platform-Services", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Kernel-Methods", "amber_core/Kernel-Infrastructure"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Platform-Services');
$core.packages["Platform-Services"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-Services"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ConsoleErrorHandler', $globals.Object, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConsoleErrorHandler.comment="I am manage Smalltalk errors, displaying the stack in the console.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anError)._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logErrorContext_($recv(anError)._context());
};
self._logError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09anError context ifNotNil: [ self logErrorContext: anError context ].\x0a\x09self logError: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"]
}),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "log:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},$globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "log: aString\x0a\x09console log: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:"]
}),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logContext:",
protocol: 'private',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(aContext)._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logContext_($recv(aContext)._home());
};
self._log_($recv(aContext)._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext},$globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logContext: aContext\x0a\x09aContext home ifNotNil: [\x0a\x09\x09self logContext: aContext home ].\x0a\x09self log: aContext asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "home", "logContext:", "log:", "asString"]
}),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logError:",
protocol: 'private',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._log_($recv(anError)._messageText());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError},$globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "logError: anError\x0a\x09self log: anError messageText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "messageText"]
}),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logErrorContext:",
protocol: 'private',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = aContext) == null || $receiver.isNil){
aContext;
} else {
$1=$recv(aContext)._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logContext_($recv(aContext)._home());
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext},$globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logErrorContext: aContext\x0a\x09aContext ifNotNil: [\x0a\x09\x09aContext home ifNotNil: [\x0a\x09\x09\x09self logContext: aContext home ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "home", "logContext:"]
}),
$globals.ConsoleErrorHandler);


$globals.ConsoleErrorHandler.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ErrorHandler())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ConsoleErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ErrorHandler registerIfNone: self new",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["registerIfNone:", "new"]
}),
$globals.ConsoleErrorHandler.klass);


$core.addClass('ConsoleTranscript', $globals.Object, ['textarea'], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConsoleTranscript.comment="I am a specific transcript emitting to the JavaScript console.\x0a\x0aIf no other transcript is registered, I am the default.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
console.log(String($recv(anObject)._asString()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},$globals.ConsoleTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x22Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy.\x22\x0a<console.log(String($recv(anObject)._asString()))>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ConsoleTranscript);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Transcript())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ConsoleTranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09Transcript registerIfNone: self new",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["registerIfNone:", "new"]
}),
$globals.ConsoleTranscript.klass);


$core.addClass('InterfacingObject', $globals.Object, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InterfacingObject.comment="I am superclass of all object that interface with user or environment. `Widget` and a few other classes are subclasses of me. I delegate all of the above APIs to `PlatformInterface`.\x0a\x0a## API\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
function $PlatformInterface(){return $globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=$recv($PlatformInterface())._ajax_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},$globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09self deprecatedAPI.\x0a\x09^ PlatformInterface ajax: anObject",
referencedClasses: ["PlatformInterface"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI", "ajax:"]
}),
$globals.InterfacingObject);

$core.addMethod(
$core.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Terminal())._alert_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},$globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ Terminal alert: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.InterfacingObject);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Terminal())._confirm_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},$globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ Terminal confirm: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["confirm:"]
}),
$globals.InterfacingObject);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Terminal())._prompt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},$globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ Terminal prompt: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["prompt:"]
}),
$globals.InterfacingObject);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Terminal())._prompt_default_(aString,defaultString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},$globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ Terminal prompt: aString default: defaultString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["prompt:default:"]
}),
$globals.InterfacingObject);



$core.addClass('Environment', $globals.InterfacingObject, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Environment.comment="I provide an unified entry point to manipulate Amber packages, classes and methods.\x0a\x0aTypical use cases include IDEs, remote access and restricting browsing.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addInstVarNamed:to:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=self._classBuilder();
$2=$recv(aClass)._superclass();
$3=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$4=$recv($recv(aClass)._instanceVariableNames())._copy();
$recv($4)._add_(aString);
$5=$recv($4)._yourself();
$recv($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$5,$recv($recv(aClass)._package())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "classBuilder", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Smalltalk())._core())._allSelectors();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ Smalltalk core allSelectors",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["allSelectors", "core"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availableClassNames",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Smalltalk())._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk classes \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["collect:", "classes", "name"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availablePackageNames",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Smalltalk())._packages())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk packages \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["collect:", "packages", "name"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availableProtocolsFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
var protocols;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
protocols=$recv(aClass)._protocols();
$1=$recv(aClass)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(protocols)._addAll_(self._availableProtocolsFor_($recv(aClass)._superclass()));
};
$2=$recv($recv($recv(protocols)._asSet())._asArray())._sort();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray sort",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocols", "ifNotNil:", "superclass", "addAll:", "availableProtocolsFor:", "sort", "asArray", "asSet"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classBuilder",
protocol: 'accessing',
fn: function (){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ClassBuilder())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classNamed:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=$recv($recv($Smalltalk())._globals())._at_($recv(aString)._asSymbol());
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk globals at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "at:", "globals", "asSymbol", "error:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._classes();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ Smalltalk classes",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["classes"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "commitPackage:onSuccess:onError:",
protocol: 'actions',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._transport())._commitOnSuccess_onError_(aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitPackage: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09aPackage transport\x0a\x09\x09commitOnSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitOnSuccess:onError:", "transport"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileClassComment:for:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileClassDefinition:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._evaluate_for_(aString,$recv($DoIt())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._alert_($recv(error)._messageText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09[ self evaluate: aString for: DoIt new ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error | self alert: error messageText ]",
referencedClasses: ["DoIt", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "evaluate:for:", "new", "alert:", "messageText"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileMethod:for:protocol:",
protocol: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(class_)._compile_protocol_(sourceCode,protocol);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09^ class\x0a\x09\x09compile: sourceCode\x0a\x09\x09protocol: protocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["compile:protocol:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "copyClass:to:",
protocol: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($recv($Smalltalk())._globals())._at_(aClassName);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv("A class named ".__comma(aClassName)).__comma(" already exists");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($2);
};
$recv($recv($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "copyClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new copyClass: aClass named: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "copyClass:named:", "new"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "doItReceiver",
protocol: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($DoIt())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doItReceiver",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doItReceiver\x0a\x09^ DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
function $Evaluator(){return $globals.Evaluator||(typeof Evaluator=="undefined"?nil:Evaluator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Evaluator())._evaluate_for_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ Evaluator evaluate: aString for: anObject",
referencedClasses: ["Evaluator"],
//>>excludeEnd("ide");
messageSends: ["evaluate:for:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "evaluate:on:do:",
protocol: 'error handling',
fn: function (aBlock,anErrorClass,exceptionBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aBlock)._tryCatch_((function(exception){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(exception)._isKindOf_(self._classNamed_($recv(anErrorClass)._name()));
if($core.assert($1)){
return $recv(exceptionBlock)._value_(exception);
} else {
return $recv(exception)._resignal();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anErrorClass", "exceptionBlock"],
source: "evaluate: aBlock on: anErrorClass do: exceptionBlock\x0a\x09\x22Evaluate a block and catch exceptions happening on the environment stack\x22\x0a\x09\x0a\x09aBlock tryCatch: [ :exception | \x0a\x09\x09(exception isKindOf: (self classNamed: anErrorClass name))\x0a\x09\x09\x09ifTrue: [ exceptionBlock value: exception ]\x0a \x09\x09\x09ifFalse: [ exception resignal ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "ifTrue:ifFalse:", "isKindOf:", "classNamed:", "name", "value:", "resignal"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
function $Inspector(){return $globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Inspector())._inspect_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09Inspector inspect: anObject",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
messageSends: ["inspect:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveClass:toPackage:",
protocol: 'actions',
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
package_=$recv($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == null || $receiver.isNil){
self._error_("Invalid package name");
} else {
$1;
};
$2=$recv(package_).__eq_eq($recv(aClass)._package());
if($core.assert($2)){
return self;
};
$recv(aClass)._package_(package_);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09aClass package: package",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveMethod:toClass:",
protocol: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$4;
destinationClass=self._classNamed_(aClassName);
$2=destinationClass;
$3=$recv(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($3);
if($core.assert($1)){
return self;
};
$5=$recv(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._isMetaclass();
if($core.assert($4)){
destinationClass=$recv(destinationClass)._class();
destinationClass;
};
$recv(destinationClass)._compile_protocol_($recv(aMethod)._source(),$recv(aMethod)._protocol());
$recv($recv(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := self classNamed: aClassName.\x0a\x09destinationClass == aMethod methodClass ifTrue: [ ^ self ].\x0a\x09\x0a\x09aMethod methodClass isMetaclass ifTrue: [ \x0a\x09\x09destinationClass := destinationClass class ].\x0a\x09\x0a\x09destinationClass \x0a\x09\x09compile: aMethod source\x0a\x09\x09protocol: aMethod protocol.\x0a\x09aMethod methodClass \x0a\x09\x09removeCompiledMethod: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["classNamed:", "ifTrue:", "==", "methodClass", "isMetaclass", "class", "compile:protocol:", "source", "protocol", "removeCompiledMethod:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveMethod:toProtocol:",
protocol: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aMethod)._protocol_(aProtocol);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod protocol: aProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._packages();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09^ Smalltalk packages",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["packages"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerErrorHandler:",
protocol: 'services',
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ErrorHandler())._register_(anErrorHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09ErrorHandler register: anErrorHandler",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerFinder:",
protocol: 'services',
fn: function (aFinder){
var self=this;
function $Finder(){return $globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Finder())._register_(aFinder);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerFinder:",{aFinder:aFinder},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFinder"],
source: "registerFinder: aFinder\x0a\x09Finder register: aFinder",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerInspector:",
protocol: 'services',
fn: function (anInspector){
var self=this;
function $Inspector(){return $globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Inspector())._register_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09Inspector register: anInspector",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerProgressHandler:",
protocol: 'services',
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return $globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ProgressHandler())._register_(aProgressHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09ProgressHandler register: aProgressHandler",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerTranscript:",
protocol: 'services',
fn: function (aTranscript){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Transcript())._register_(aTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerTranscript:",{aTranscript:aTranscript},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTranscript"],
source: "registerTranscript: aTranscript\x0a\x09Transcript register: aTranscript",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Smalltalk())._removeClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk removeClass: aClass",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["removeClass:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeMethod:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod methodClass removeCompiledMethod: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeCompiledMethod:", "methodClass"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeProtocol:from:",
protocol: 'actions',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aClass)._removeCompiledMethod_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "removeProtocol: aString from: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | aClass removeCompiledMethod: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "methodsInProtocol:", "removeCompiledMethod:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renameClass:to:",
protocol: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($recv($Smalltalk())._globals())._at_(aClassName);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv("A class named ".__comma(aClassName)).__comma(" already exists");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($2);
};
$recv($recv($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "renameClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new renameClass: aClass to: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "renameClass:to:", "new"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renamePackage:to:",
protocol: 'actions',
fn: function (aPackageName,aNewPackageName){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($recv($Smalltalk())._globals())._at_(aNewPackageName);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv("A package named ".__comma(aNewPackageName)).__comma(" already exists");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($2);
};
$recv($Smalltalk())._renamePackage_to_(aPackageName,aNewPackageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{aPackageName:aPackageName,aNewPackageName:aNewPackageName},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aNewPackageName"],
source: "renamePackage: aPackageName to: aNewPackageName\x0a        (Smalltalk globals at: aNewPackageName)\x0a                ifNotNil: [ self error: 'A package named ', aNewPackageName, ' already exists' ].\x0a\x0a        Smalltalk renamePackage: aPackageName to: aNewPackageName",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "renamePackage:to:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renameProtocol:to:in:",
protocol: 'actions',
fn: function (aString,anotherString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._protocol_(anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString", "aClass"],
source: "renameProtocol: aString to: anotherString in: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | each protocol: anotherString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "methodsInProtocol:", "protocol:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "setClassCommentOf:to:",
protocol: 'actions',
fn: function (aClass,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "setClassCommentOf: aClass to: aString\x0a\x09aClass comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment:"]
}),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "systemAnnouncer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($Smalltalk())._globals())._at_("SystemAnnouncer"))._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},$globals.Environment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "systemAnnouncer\x0a\x09^ (Smalltalk globals at: #SystemAnnouncer) current",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["current", "at:", "globals"]
}),
$globals.Environment);



$core.addClass('NullProgressHandler', $globals.Object, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NullProgressHandler.comment="I am the default progress handler. I do not display any progress, and simply iterate over the collection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},$globals.NullProgressHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09aCollection do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.NullProgressHandler);


$globals.NullProgressHandler.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $ProgressHandler(){return $globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ProgressHandler())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.NullProgressHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ProgressHandler registerIfNone: self new",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
messageSends: ["registerIfNone:", "new"]
}),
$globals.NullProgressHandler.klass);


$core.addClass('PlatformInterface', $globals.Object, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PlatformInterface.comment="Deprecated. Use `Platform` or `Terminal`.";
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
self._deprecatedAPI_("Use Platform newXhr or dedicated library.");
if(($receiver = $JQuery()) == null || $receiver.isNil){
$1=self._error_("JQuery wrapper not loaded, cannot do AJAX.");
} else {
$1=$recv($recv($JQuery())._current())._ajax_(anObject);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09self deprecatedAPI: 'Use Platform newXhr or dedicated library.'.\x0a\x09^ JQuery\x0a\x09\x09ifNotNil: [ JQuery current ajax: anObject ]\x0a\x09\x09ifNil: [ self error: 'JQuery wrapper not loaded, cannot do AJAX.' ]",
referencedClasses: ["JQuery"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "ifNotNil:ifNil:", "ajax:", "current", "error:"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Terminal alert:");
$1=$recv($Terminal())._alert_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09self deprecatedAPI: 'Use Terminal alert:'.\x0a\x09^ Terminal alert: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "alert:"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Terminal confirm:");
$1=$recv($Terminal())._confirm_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09self deprecatedAPI: 'Use Terminal confirm:'.\x0a\x09^ Terminal confirm: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "confirm:"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "existsGlobal:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return $globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Smalltalk existsJsGlobal:");
$1=$recv($recv($PlatformInterface())._globals())._at_ifPresent_ifAbsent_(aString,(function(){
return true;

}),(function(){
return false;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"existsGlobal:",{aString:aString},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "existsGlobal: aString\x0a\x09self deprecatedAPI: 'Use Smalltalk existsJsGlobal:'.\x0a\x09^ PlatformInterface globals \x0a\x09\x09at: aString \x0a\x09\x09ifPresent: [ true ] \x0a\x09\x09ifAbsent: [ false ]",
referencedClasses: ["PlatformInterface"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "at:ifPresent:ifAbsent:", "globals"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Platform globals");
$1=$recv($Platform())._globals();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09self deprecatedAPI: 'Use Platform globals'.\x0a\x09^ Platform globals",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "globals"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: 'actions',
fn: function (){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Platform newXhr");
$1=$recv($Platform())._newXhr();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09self deprecatedAPI: 'Use Platform newXhr'.\x0a\x09^ Platform newXhr",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "newXhr"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Terminal prompt:");
$1=$recv($Terminal())._prompt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09self deprecatedAPI: 'Use Terminal prompt:'.\x0a\x09^ Terminal prompt: aString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "prompt:"]
}),
$globals.PlatformInterface.klass);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI_("Use Terminal prompt:default:");
$1=$recv($Terminal())._prompt_default_(aString,defaultString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},$globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09self deprecatedAPI: 'Use Terminal prompt:default:'.\x0a\x09^ Terminal prompt: aString default: defaultString",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "prompt:default:"]
}),
$globals.PlatformInterface.klass);


$core.addClass('Service', $globals.Object, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Service.comment="I implement the basic behavior for class registration to a service.\x0a\x0aSee the `Transcript` class for a concrete service.\x0a\x0a## API\x0a\x0aUse class-side methods `#register:` and `#registerIfNone:` to register classes to a specific service.";
//>>excludeEnd("ide");

$globals.Service.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
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
$globals.Service.klass);

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
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Service.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Service.klass);

$core.addMethod(
$core.method({
selector: "register:",
protocol: 'registration',
fn: function (anObject){
var self=this;
self["@current"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "register: anObject\x0a\x09current := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Service.klass);

$core.addMethod(
$core.method({
selector: "registerIfNone:",
protocol: 'registration',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._current();
if(($receiver = $1) == null || $receiver.isNil){
self._register_(anObject);
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerIfNone:",{anObject:anObject},$globals.Service.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "registerIfNone: anObject\x0a\x09self current ifNil: [ self register: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "current", "register:"]
}),
$globals.Service.klass);


$core.addClass('ErrorHandler', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ErrorHandler.comment="I am the service used to handle Smalltalk errors.\x0aSee `boot.js` `handleError()` function.\x0a\x0aRegistered service instances must implement `#handleError:` to perform an action on the thrown exception.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._handleUnhandledError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.ErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09self handleUnhandledError: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["handleUnhandledError:"]
}),
$globals.ErrorHandler.klass);

$core.addMethod(
$core.method({
selector: "handleUnhandledError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(anError)._wasHandled();
if($core.assert($1)){
return self;
};
$2=$recv(self._current())._handleError_(anError);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleUnhandledError:",{anError:anError},$globals.ErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleUnhandledError: anError\x0a\x09anError wasHandled ifTrue: [ ^ self ].\x0a\x09\x0a\x09^ self current handleError: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "wasHandled", "handleError:", "current"]
}),
$globals.ErrorHandler.klass);


$core.addClass('Finder', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Finder.comment="I am the service responsible for finding classes/methods.\x0a__There is no default finder.__\x0a\x0a## API\x0a\x0aUse `#browse` on an object to find it.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "findClass:",
protocol: 'finding',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._findClass_(aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findClass:",{aClass:aClass},$globals.Finder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "findClass: aClass\x0a\x09^ self current findClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findClass:", "current"]
}),
$globals.Finder.klass);

$core.addMethod(
$core.method({
selector: "findMethod:",
protocol: 'finding',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._findMethod_(aCompiledMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findMethod:",{aCompiledMethod:aCompiledMethod},$globals.Finder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "findMethod: aCompiledMethod\x0a\x09^ self current findMethod: aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findMethod:", "current"]
}),
$globals.Finder.klass);

$core.addMethod(
$core.method({
selector: "findString:",
protocol: 'finding',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._findString_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findString:",{aString:aString},$globals.Finder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "findString: aString\x0a\x09^ self current findString: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findString:", "current"]
}),
$globals.Finder.klass);


$core.addClass('Inspector', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Inspector.comment="I am the service responsible for inspecting objects.\x0a\x0aThe default inspector object is the transcript.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'inspecting',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._inspect_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.Inspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self current inspect: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "current"]
}),
$globals.Inspector.klass);


$core.addClass('Platform', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Platform.comment="I am bridge to JS environment.\x0a\x0a## API\x0a\x0a    Platform globals. \x22JS global object\x22\x0a    Platform newXHR \x22new XMLHttpRequest() or its shim\x22";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._globals();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},$globals.Platform.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ self current globals",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globals", "current"]
}),
$globals.Platform.klass);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._newXhr();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{},$globals.Platform.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09^ self current newXhr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newXhr", "current"]
}),
$globals.Platform.klass);


$core.addClass('ProgressHandler', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProgressHandler.comment="I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.\x0a\x0aRegistered instances must implement `#do:on:displaying:`.\x0a\x0aThe default behavior is to simply iterate over the collection, using `NullProgressHandler`.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._do_on_displaying_(aBlock,aCollection,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},$globals.ProgressHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09self current do: aBlock on: aCollection displaying: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:on:displaying:", "current"]
}),
$globals.ProgressHandler.klass);


$core.addClass('Terminal', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Terminal.comment="I am UI interface service.\x0a\x0a## API\x0a\x0a    Terminal alert: 'Hey, there is a problem'.\x0a    Terminal confirm: 'Affirmative?'.\x0a    Terminal prompt: 'Your name:'.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "alert:",
protocol: 'dialogs',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._alert_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},$globals.Terminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ self current alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:", "current"]
}),
$globals.Terminal.klass);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: 'dialogs',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._confirm_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},$globals.Terminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ self current confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:", "current"]
}),
$globals.Terminal.klass);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: 'dialogs',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._prompt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},$globals.Terminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ self current prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:", "current"]
}),
$globals.Terminal.klass);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: 'dialogs',
fn: function (aString,defaultString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._current())._prompt_default_(aString,defaultString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},$globals.Terminal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ self current prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:default:", "current"]
}),
$globals.Terminal.klass);


$core.addClass('Transcript', $globals.Service, [], 'Platform-Services');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Transcript.comment="I am a facade for Transcript actions.\x0a\x0aI delegate actions to the currently registered transcript.\x0a\x0a## API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._clear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self current clear",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clear", "current"]
}),
$globals.Transcript.klass);

$core.addMethod(
$core.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._show_($recv($String())._cr());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09self current show: String cr",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["show:", "current", "cr"]
}),
$globals.Transcript.klass);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self show: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show:"]
}),
$globals.Transcript.klass);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self current open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "current"]
}),
$globals.Transcript.klass);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},$globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x09self current show: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show:", "current"]
}),
$globals.Transcript.klass);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#keys",self._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#keys' put: self keys.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09variables at: key put: value ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
self._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(i,each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self withIndexDo: [ :each :i |\x0a\x09\x09variables at: i put: each ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#year",self._year());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#month",self._month());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#day",self._day());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#hours",self._hours());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#minutes",self._minutes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#seconds",self._seconds());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#milliseconds",self._milliseconds());
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#year' put: self year.\x0a\x09variables at: '#month' put: self month.\x0a\x09variables at: '#day' put: self day.\x0a\x09variables at: '#hours' put: self hours.\x0a\x09variables at: '#minutes' put: self minutes.\x0a\x09variables at: '#seconds' put: self seconds.\x0a\x09variables at: '#milliseconds' put: self milliseconds.\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self._jsObject());
$recv(anInspector)._setLabel_(self._printString());
$recv($JSObjectProxy())._addObjectVariablesTo_ofProxy_(variables,self);
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09JSObjectProxy addObjectVariablesTo: variables ofProxy: self.\x0a\x09anInspector setVariables: variables",
referencedClasses: ["Dictionary", "JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:ofProxy:", "setVariables:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#home",self._home());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#receiver",self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#selector",self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#locals",self._locals());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($recv(self._class())._instanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#home' put: self home.\x0a\x09variables at: '#receiver' put: self receiver.\x0a\x09variables at: '#selector' put: self selector.\x0a\x09variables at: '#locals' put: self locals.\x0a\x09self class instanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "home", "receiver", "selector", "locals", "do:", "instanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "do:", "allInstanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "do:displayingProgress:",
protocol: '*Platform-Services',
fn: function (aBlock,aString){
var self=this;
function $ProgressHandler(){return $globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ProgressHandler())._do_on_displaying_(aBlock,self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aString"],
source: "do: aBlock displayingProgress: aString\x0a\x09ProgressHandler \x0a\x09\x09do: aBlock \x0a\x09\x09on: self \x0a\x09\x09displaying: aString",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
messageSends: ["do:on:displaying:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var variables,i;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
i=(1);
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(variables)._at_put_(i,each);
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,i:i},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables i |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09i := 1.\x0a\x09self do: [ :each |\x0a\x09\x09variables at: i put: each.\x0a\x09\x09i := i + 1 ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "do:", "+", "setLabel:", "printString", "setVariables:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*Platform-Services',
fn: function (anInspector){
var self=this;
var label;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.String.superclass.fn.prototype._inspectOn_.apply($recv(self), [anInspector]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$3=self._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
$1=$recv($2).__gt((30));
if($core.assert($1)){
$5=self._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._copyFrom_to_((1),(30));
label=$recv($4).__comma("...'");
label;
} else {
label=self._printString();
label;
};
$recv(anInspector)._setLabel_(label);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,label:label},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| label |\x0a\x09super inspectOn: anInspector.\x0a\x09self printString size > 30\x0a\x09\x09ifTrue: [ label := (self printString copyFrom: 1 to: 30), '...''' ]\x0a\x09\x09ifFalse: [ label := self printString ].\x0a\x09anInspector setLabel: label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectOn:", "ifTrue:ifFalse:", ">", "size", "printString", ",", "copyFrom:to:", "setLabel:"]
}),
$globals.String);

});
