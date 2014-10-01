define("amber_core/Kernel-Infrastructure", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Kernel-Infrastructure');
smalltalk.packages["Kernel-Infrastructure"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ConsoleErrorHandler', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ConsoleErrorHandler.comment="I am manage Smalltalk errors, displaying the stack in the console.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=_st(anError)._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logErrorContext_(_st(anError)._context());
};
self._logError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09anError context ifNotNil: [ self logErrorContext: anError context ].\x0a\x09self logError: anError",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(console)._log_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["log:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "log: aString\x0a\x09console log: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logContext:",
protocol: 'private',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=_st(aContext)._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logContext_(_st(aContext)._home());
};
self._log_(_st(aContext)._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext},globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "home", "logContext:", "log:", "asString"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logContext: aContext\x0a\x09aContext home ifNotNil: [\x0a\x09\x09self logContext: aContext home ].\x0a\x09self log: aContext asString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logError:",
protocol: 'private',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._log_(_st(anError)._messageText());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError},globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["log:", "messageText"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "logError: anError\x0a\x09self log: anError messageText",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logErrorContext:",
protocol: 'private',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = aContext) == null || $receiver.isNil){
aContext;
} else {
$1=_st(aContext)._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._logContext_(_st(aContext)._home());
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext},globals.ConsoleErrorHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "home", "logContext:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logErrorContext: aContext\x0a\x09aContext ifNotNil: [\x0a\x09\x09aContext home ifNotNil: [\x0a\x09\x09\x09self logContext: aContext home ]]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler);


globals.ConsoleErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($ErrorHandler())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ConsoleErrorHandler.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["registerIfNone:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ErrorHandler registerIfNone: self new",
referencedClasses: ["ErrorHandler"]
//>>excludeEnd("ide");
}),
globals.ConsoleErrorHandler.klass);


smalltalk.addClass('InterfacingObject', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.InterfacingObject.comment="I am superclass of all object that interface with user or environment. `Widget` and a few other classes are subclasses of me. I delegate all of the above APIs to `PlatformInterface`.\x0a\x0a## API\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($PlatformInterface())._ajax_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
messageSends: ["ajax:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ PlatformInterface ajax: anObject",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($PlatformInterface())._alert_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
messageSends: ["alert:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ PlatformInterface alert: aString",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($PlatformInterface())._confirm_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
messageSends: ["confirm:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ PlatformInterface confirm: aString",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($PlatformInterface())._prompt_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
messageSends: ["prompt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ PlatformInterface prompt: aString",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($PlatformInterface())._prompt_default_(aString,defaultString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},globals.InterfacingObject)});
//>>excludeEnd("ctx");
},
messageSends: ["prompt:default:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ PlatformInterface prompt: aString default: defaultString",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.InterfacingObject);



smalltalk.addClass('Environment', globals.InterfacingObject, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Environment.comment="I provide an unified entry point to manipulate Amber packages, classes and methods.\x0a\x0aTypical use cases include IDEs, remote access and restricting browsing.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=self._classBuilder();
$2=_st(aClass)._superclass();
$3=_st(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$4=_st(_st(aClass)._instanceVariableNames())._copy();
_st($4)._add_(aString);
$5=_st($4)._yourself();
_st($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$5,_st(_st(aClass)._package())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "classBuilder", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($Smalltalk())._vm())._allSelectors();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["allSelectors", "vm"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ Smalltalk vm allSelectors",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($Smalltalk())._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["collect:", "classes", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk classes \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($Smalltalk())._packages())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["collect:", "packages", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk packages \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
var protocols;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
protocols=_st(aClass)._protocols();
$1=_st(aClass)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(protocols)._addAll_(self._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(_st(protocols)._asSet())._asArray())._sort();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["protocols", "ifNotNil:", "superclass", "addAll:", "availableProtocolsFor:", "sort", "asArray", "asSet"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray sort",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
protocol: 'accessing',
fn: function (){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($ClassBuilder())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
referencedClasses: ["ClassBuilder"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=_st(_st($Smalltalk())._globals())._at_(_st(aString)._asSymbol());
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:", "at:", "globals", "asSymbol", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk globals at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._classes();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["classes"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ Smalltalk classes",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:onSuccess:onError:",
protocol: 'actions',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(aPackage)._transport())._commitOnSuccess_onError_(aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["commitOnSuccess:onError:", "transport"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitPackage: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09aPackage transport\x0a\x09\x09commitOnSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["comment:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._evaluate_for_(aString,_st($DoIt())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._alert_(_st(error)._messageText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["on:do:", "evaluate:for:", "new", "alert:", "messageText"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09[ self evaluate: aString for: DoIt new ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error | self alert: error messageText ]",
referencedClasses: ["DoIt", "Error"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
protocol: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(class_)._compile_protocol_(sourceCode,protocol);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["compile:protocol:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09^ class\x0a\x09\x09compile: sourceCode\x0a\x09\x09protocol: protocol",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
protocol: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=_st(_st($Smalltalk())._globals())._at_(aClassName);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=_st("A class named ".__comma(aClassName)).__comma(" already exists");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($2);
};
_st(_st($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "copyClass:named:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "copyClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new copyClass: aClass named: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "doItReceiver",
protocol: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($DoIt())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doItReceiver",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doItReceiver\x0a\x09^ DoIt new",
referencedClasses: ["DoIt"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:for:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
function $Evaluator(){return globals.Evaluator||(typeof Evaluator=="undefined"?nil:Evaluator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Evaluator())._evaluate_for_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["evaluate:for:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ Evaluator evaluate: aString for: anObject",
referencedClasses: ["Evaluator"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:do:",
protocol: 'error handling',
fn: function (aBlock,anErrorClass,exceptionBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
_st(aBlock)._tryCatch_((function(exception){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=_st(exception)._isKindOf_(self._classNamed_(_st(anErrorClass)._name()));
if(smalltalk.assert($1)){
return _st(exceptionBlock)._value_(exception);
} else {
return _st(exception)._signal();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["tryCatch:", "ifTrue:ifFalse:", "isKindOf:", "classNamed:", "name", "value:", "signal"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anErrorClass", "exceptionBlock"],
source: "evaluate: aBlock on: anErrorClass do: exceptionBlock\x0a\x09\x22Evaluate a block and catch exceptions happening on the environment stack\x22\x0a\x09\x0a\x09aBlock tryCatch: [ :exception | \x0a\x09\x09(exception isKindOf: (self classNamed: anErrorClass name))\x0a\x09\x09\x09ifTrue: [ exceptionBlock value: exception ]\x0a \x09\x09\x09ifFalse: [ exception signal ] ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
function $Inspector(){return globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Inspector())._inspect_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["inspect:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09Inspector inspect: anObject",
referencedClasses: ["Inspector"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
protocol: 'actions',
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
package_=_st($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == null || $receiver.isNil){
self._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
return self;
};
_st(aClass)._package_(package_);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09aClass package: package",
referencedClasses: ["Package"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
protocol: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$4;
destinationClass=self._classNamed_(aClassName);
$2=destinationClass;
$3=_st(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$1=_st($2).__eq_eq($3);
if(smalltalk.assert($1)){
return self;
};
$5=_st(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=2;
//>>excludeEnd("ctx");
$4=_st($5)._isMetaclass();
if(smalltalk.assert($4)){
destinationClass=_st(destinationClass)._class();
destinationClass;
};
_st(destinationClass)._compile_protocol_(_st(aMethod)._source(),_st(aMethod)._protocol());
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["classNamed:", "ifTrue:", "==", "methodClass", "isMetaclass", "class", "compile:protocol:", "source", "protocol", "removeCompiledMethod:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := self classNamed: aClassName.\x0a\x09destinationClass == aMethod methodClass ifTrue: [ ^ self ].\x0a\x09\x0a\x09aMethod methodClass isMetaclass ifTrue: [ \x0a\x09\x09destinationClass := destinationClass class ].\x0a\x09\x0a\x09destinationClass \x0a\x09\x09compile: aMethod source\x0a\x09\x09protocol: aMethod protocol.\x0a\x09aMethod methodClass \x0a\x09\x09removeCompiledMethod: aMethod",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
protocol: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aMethod)._protocol_(aProtocol);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["protocol:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod protocol: aProtocol",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._packages();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["packages"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09^ Smalltalk packages",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
protocol: 'services',
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($ErrorHandler())._register_(anErrorHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09ErrorHandler register: anErrorHandler",
referencedClasses: ["ErrorHandler"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerFinder:",
protocol: 'services',
fn: function (aFinder){
var self=this;
function $Finder(){return globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Finder())._register_(aFinder);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerFinder:",{aFinder:aFinder},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFinder"],
source: "registerFinder: aFinder\x0a\x09Finder register: aFinder",
referencedClasses: ["Finder"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
protocol: 'services',
fn: function (anInspector){
var self=this;
function $Inspector(){return globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Inspector())._register_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09Inspector register: anInspector",
referencedClasses: ["Inspector"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
protocol: 'services',
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($ProgressHandler())._register_(aProgressHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09ProgressHandler register: aProgressHandler",
referencedClasses: ["ProgressHandler"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerTranscript:",
protocol: 'services',
fn: function (aTranscript){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Transcript())._register_(aTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerTranscript:",{aTranscript:aTranscript},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTranscript"],
source: "registerTranscript: aTranscript\x0a\x09Transcript register: aTranscript",
referencedClasses: ["Transcript"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($Smalltalk())._removeClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["removeClass:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk removeClass: aClass",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["removeCompiledMethod:", "methodClass"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod methodClass removeCompiledMethod: aMethod",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol:from:",
protocol: 'actions',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(aClass)._removeCompiledMethod_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["do:", "methodsInProtocol:", "removeCompiledMethod:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "removeProtocol: aString from: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | aClass removeCompiledMethod: each ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
protocol: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=_st(_st($Smalltalk())._globals())._at_(aClassName);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=_st("A class named ".__comma(aClassName)).__comma(" already exists");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($2);
};
_st(_st($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "renameClass:to:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "renameClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new renameClass: aClass to: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"]
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocol:to:in:",
protocol: 'actions',
fn: function (aString,anotherString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._protocol_(anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["do:", "methodsInProtocol:", "protocol:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString", "aClass"],
source: "renameProtocol: aString to: anotherString in: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | each protocol: anotherString ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassCommentOf:to:",
protocol: 'actions',
fn: function (aClass,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["comment:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "setClassCommentOf: aClass to: aString\x0a\x09aClass comment: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(_st($Smalltalk())._globals())._at_("SystemAnnouncer"))._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},globals.Environment)});
//>>excludeEnd("ctx");
},
messageSends: ["current", "at:", "globals"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "systemAnnouncer\x0a\x09^ (Smalltalk globals at: #SystemAnnouncer) current",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Environment);



smalltalk.addClass('JSObjectProxy', globals.ProtoObject, ['jsObject'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=_st(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=_st($2).__eq_eq(self._class());
if(! smalltalk.assert($1)){
return false;
};
$3=self._compareJSObjectWith_(_st(anObject)._jsObject());
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: ["ifFalse:", "==", "class", "compareJSObjectWith:", "jsObject"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09anObject class == self class ifFalse: [ ^ false ].\x0a\x09^ self compareJSObjectWith: anObject jsObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "addObjectVariablesTo:",
protocol: 'proxy',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:",{aDictionary:aDictionary},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "addObjectVariablesTo: aDictionary\x0a\x09<\x0a\x09\x09for(var i in self['@jsObject']) {\x0a\x09\x09\x09aDictionary._at_put_(i, self['@jsObject'][i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=self["@jsObject"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09\x22Answers the receiver in a stringyfy-friendly fashion\x22\x0a\x0a\x09^ jsObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self['@jsObject'][aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09<return self['@jsObject'][aString]>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self['@jsObject'][aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<return self['@jsObject'][aString] = anObject>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "compareJSObjectWith:",
protocol: 'private',
fn: function (aJSObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self["@jsObject"] === aJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compareJSObjectWith:",{aJSObject:aJSObject},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "compareJSObjectWith: aJSObject\x0a \x09<return self[\x22@jsObject\x22] === aJSObject>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
protocol: 'proxy',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._lookupProperty_(_st(_st(aMessage)._selector())._asJavaScriptPropertyName());
if(($receiver = $2) == null || $receiver.isNil){
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.JSObjectProxy.superclass.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
var jsSelector;
jsSelector=$receiver;
$1=self._forwardMessage_withArguments_(jsSelector,_st(aMessage)._arguments());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:ifNotNil:", "lookupProperty:", "asJavaScriptPropertyName", "selector", "doesNotUnderstand:", "forwardMessage:withArguments:", "arguments"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self lookupProperty: aMessage selector asJavaScriptPropertyName)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "forwardMessage:withArguments:",
protocol: 'proxy',
fn: function (aString,anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		return smalltalk.accessJavaScript(self._jsObject(), aString, anArray);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:",{aString:aString,anArray:anArray},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray"],
source: "forwardMessage: aString withArguments: anArray\x0a\x09<\x0a\x09\x09return smalltalk.accessJavaScript(self._jsObject(), aString, anArray);\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'proxy',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self._jsObject());
_st(anInspector)._setLabel_(self._printString());
self._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables",
referencedClasses: ["Dictionary"]
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@jsObject"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09^ jsObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject:",
protocol: 'accessing',
fn: function (aJSObject){
var self=this;
self["@jsObject"]=aJSObject;
return self;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<\x0a\x09\x09var o = self['@jsObject'];\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupProperty:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return aString in self._jsObject() ? aString : nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupProperty:",{aString:aString},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "lookupProperty: aString\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<return aString in self._jsObject() ? aString : nil>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aStream)._nextPutAll_(self._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: ["nextPutAll:", "printString"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self printString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var js = self['@jsObject'];
		return js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{},globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09<\x0a\x09\x09var js = self['@jsObject'];\x0a\x09\x09return js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aJSObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
_st($2)._jsObject_(aJSObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject},globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["jsObject:", "new", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^ self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.JSObjectProxy.klass);


smalltalk.addClass('NullProgressHandler', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.NullProgressHandler.comment="I am the default progress handler. I do not display any progress, and simply iterate over the collection.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aCollection)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},globals.NullProgressHandler)});
//>>excludeEnd("ctx");
},
messageSends: ["do:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09aCollection do: aBlock",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.NullProgressHandler);


globals.NullProgressHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $ProgressHandler(){return globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($ProgressHandler())._registerIfNone_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.NullProgressHandler.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["registerIfNone:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ProgressHandler registerIfNone: self new",
referencedClasses: ["ProgressHandler"]
//>>excludeEnd("ide");
}),
globals.NullProgressHandler.klass);


smalltalk.addClass('Organizer', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.elements.addElement(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},globals.Organizer)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addElement: anObject\x0a\x09<self.elements.addElement(anObject)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._basicAt_("elements"))._copy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"elements",{},globals.Organizer)});
//>>excludeEnd("ctx");
},
messageSends: ["copy", "basicAt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elements\x0a\x09^ (self basicAt: 'elements') copy",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.elements.removeElement(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},globals.Organizer)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "removeElement: anObject\x0a\x09<self.elements.removeElement(anObject)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Organizer);



smalltalk.addClass('ClassOrganizer', globals.Organizer, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolAdded(){return globals.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.ClassOrganizer.superclass.fn.prototype._addElement_.apply(_st(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=_st($ProtocolAdded())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
messageSends: ["addElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolAdded"]
//>>excludeEnd("ide");
}),
globals.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolRemoved(){return globals.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.ClassOrganizer.superclass.fn.prototype._removeElement_.apply(_st(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=_st($ProtocolRemoved())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
messageSends: ["removeElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolRemoved"]
//>>excludeEnd("ide");
}),
globals.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self.theClass ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theClass",{},globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09< return self.theClass >",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', globals.Organizer, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";
//>>excludeEnd("ide");


smalltalk.addClass('Package', globals.Object, ['transport', 'dirty'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "basicName:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.pkgName = aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicName:",{aString:aString},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicName: aString\x0a\x09<self.pkgName = aString>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTransport",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.transport;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTransport",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTransport\x0a\x09\x22Answer the transport literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09<return self.transport>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "beClean",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $PackageClean(){return globals.PackageClean||(typeof PackageClean=="undefined"?nil:PackageClean)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@dirty"]=false;
$1=_st($PackageClean())._new();
_st($1)._package_(self);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beClean",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["announce:", "current", "package:", "new", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beClean\x0a\x09dirty := false.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageClean new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageClean"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "beDirty",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $PackageDirty(){return globals.PackageDirty||(typeof PackageDirty=="undefined"?nil:PackageDirty)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@dirty"]=true;
$1=_st($PackageDirty())._new();
_st($1)._package_(self);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beDirty",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["announce:", "current", "package:", "new", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beDirty\x0a\x09dirty := true.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageDirty new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageDirty"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "classTemplate",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$5,$6,$7,$1;
$1=_st($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_("Object");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_(" subclass: #NameOfSubclass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$3=_st($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$4=_st($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$2=_st($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$5=_st(stream)._nextPutAll_("instanceVariableNames: ''");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$5;
$6=_st("'".__comma(_st($String())._lf())).__comma(_st($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$7=_st(stream)._nextPutAll_("'");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTemplate",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["streamContents:", "nextPutAll:", ",", "lf", "tab", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTemplate\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: 'Object';\x0a\x09\x09\x09nextPutAll: ' subclass: #NameOfSubclass';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''''.\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09\x09nextPutAll: self name;\x0a\x09\x09\x09nextPutAll: '''' ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._organization())._elements();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["elements", "organization"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self organization elements",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$5,$3,$7,$6,$8,$9,$1;
$1=_st($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=_st(self._class())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=_st($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$5=_st($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$3=_st($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_(" named: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$7="'".__comma(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=_st($7).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$8=_st(_st($String())._lf()).__comma(_st($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
_st(stream)._nextPutAll_(" transport: (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$9=_st(stream)._nextPutAll_(_st(_st(self._transport())._definition()).__comma(")"));
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "lf", "tab", "definition", "transport"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: ' named: ';\x0a\x09\x09\x09nextPutAll: '''', self name, '''';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll:  ' transport: (';\x0a\x09\x09\x09nextPutAll: self transport definition, ')' ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isDirty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@dirty"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDirty",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDirty\x0a\x09^ dirty ifNil: [ false ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPackage\x0a\x09^ true",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencies",
protocol: 'dependencies',
fn: function (){
var self=this;
var classes,packages;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
classes=self._loadDependencyClasses();
$2=_st(_st(classes)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
_st($2)._remove_ifAbsent_(self,(function(){

}));
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencies\x0a\x09\x22Returns list of packages that need to be loaded\x0a\x09before loading this package.\x22\x0a\x09\x0a\x09| classes packages |\x0a\x09classes := self loadDependencyClasses.\x0a\x09^ (classes collect: [ :each | each package ]) asSet\x0a\x09\x09remove: self ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencyClasses",
protocol: 'dependencies',
fn: function (){
var self=this;
var starCategoryName;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$6,$5,$7,$1;
starCategoryName="*".__comma(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=self._classes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classes"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=_st($3)._asSet();
_st($2)._remove_ifAbsent_(nil,(function(){

}));
_st($2)._addAll_(_st(_st($Smalltalk())._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=_st(each)._protocols();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocols"]=1;
//>>excludeEnd("ctx");
$5=_st($6).__comma(_st(_st(each)._class())._protocols());
return _st($5)._includes_(starCategoryName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
})));
$7=_st($2)._yourself();
$1=$7;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: [",", "name", "remove:ifAbsent:", "asSet", "collect:", "classes", "superclass", "addAll:", "select:", "includes:", "protocols", "class", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencyClasses\x0a\x09\x22Returns classes needed at the time of loading a package.\x0a\x09These are all that are used to subclass\x0a\x09and to define an extension method\x22\x0a\x09\x0a\x09| starCategoryName |\x0a\x09starCategoryName := '*', self name.\x0a\x09^ (self classes collect: [ :each | each superclass ]) asSet\x0a\x09\x09remove: nil ifAbsent: [];\x0a\x09\x09addAll: (Smalltalk classes select: [ :each | each protocols, each class protocols includes: starCategoryName ]);\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.pkgName;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09<return self.pkgName>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicName_(aString);
self._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["basicName:", "beDirty"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09self basicName: aString.\x0a\x09self beDirty",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("organization");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organization",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["basicAt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.Package.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
_st(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
_st(aStream)._nextPutAll_(self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=_st(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["printOn:", "nextPutAll:", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClasses",
protocol: 'classes',
fn: function (){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._classes();
_st($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(_st($ClassBuilder())._new())._setupClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$2=_st($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["do:", "classes", "setupClass:", "new", "initialize"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupClasses\x0a\x09self classes\x0a\x09\x09do: [ :each | ClassBuilder new setupClass: each ];\x0a\x09\x09do: [ :each | each initialize ]",
referencedClasses: ["ClassBuilder"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._class())._sortedClasses_(self._classes());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["sortedClasses:", "class", "classes"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^ self class sortedClasses: self classes",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport",
protocol: 'accessing',
fn: function (){
var self=this;
function $PackageTransport(){return globals.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@transport"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($PackageTransport())._fromJson_(self._basicTransport());
_st($3)._package_(self);
$4=_st($3)._yourself();
self["@transport"]=$4;
$1=self["@transport"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport",{},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:", "package:", "fromJson:", "basicTransport", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transport\x0a\x09^ transport ifNil: [ \x0a\x09\x09transport := (PackageTransport fromJson: self basicTransport)\x0a\x09\x09\x09package: self;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["PackageTransport"]
//>>excludeEnd("ide");
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport:",
protocol: 'accessing',
fn: function (aPackageTransport){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@transport"]=aPackageTransport;
_st(aPackageTransport)._package_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport:",{aPackageTransport:aPackageTransport},globals.Package)});
//>>excludeEnd("ctx");
},
messageSends: ["package:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageTransport"],
source: "transport: aPackageTransport\x0a\x09transport := aPackageTransport.\x0a\x09aPackageTransport package: self",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package);


globals.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "named:",
protocol: 'accessing',
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._packageAt_ifAbsent_(aPackageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st($Smalltalk())._createPackage_(aPackageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},globals.Package.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["packageAt:ifAbsent:", "createPackage:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "named: aPackageName\x0a\x09^ Smalltalk \x0a\x09\x09packageAt: aPackageName\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09Smalltalk createPackage: aPackageName ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:ifAbsent:",
protocol: 'accessing',
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},globals.Package.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["packageAt:ifAbsent:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x09^ Smalltalk packageAt: aPackageName ifAbsent: aBlock",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:transport:",
protocol: 'accessing',
fn: function (aPackageName,aTransport){
var self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
package_=self._named_(aPackageName);
_st(package_)._transport_(aTransport);
$1=package_;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:transport:",{aPackageName:aPackageName,aTransport:aTransport,package_:package_},globals.Package.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["named:", "transport:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aTransport"],
source: "named: aPackageName transport: aTransport\x0a\x09| package |\x0a\x09\x0a\x09package := self named: aPackageName.\x0a\x09package transport: aTransport.\x0a\x09\x0a\x09^ package",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses:",
protocol: 'sorting',
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return globals.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
children=[];
others=[];
_st(classes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
nodes=_st(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st($ClassSorterNode())._on_classes_level_(each,others,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
nodes=_st(nodes)._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=_st(a)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return _st($2).__lt_eq(_st(_st(b)._theClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)});
//>>excludeEnd("ctx");
}));
expandedClasses=_st($Array())._new();
_st(nodes)._do_((function(aNode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(aNode)._traverseClassesWith_(expandedClasses);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$4=expandedClasses;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},globals.Package.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [ :each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [ children add: each ]\x0a\x09\x09\x09ifTrue: [ others add: each ]].\x0a\x09nodes := children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0 ].\x0a\x09nodes := nodes sorted: [ :a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses ].\x0a\x09^ expandedClasses",
referencedClasses: ["ClassSorterNode", "Array"]
//>>excludeEnd("ide");
}),
globals.Package.klass);


smalltalk.addClass('PackageStateObserver', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.PackageStateObserver.comment="My current instance listens for any changes in the system that might affect the state of a package (being dirty).";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($SystemAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ SystemAnnouncer current",
referencedClasses: ["SystemAnnouncer"]
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $PackageAdded(){return globals.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $ClassAnnouncement(){return globals.ClassAnnouncement||(typeof ClassAnnouncement=="undefined"?nil:ClassAnnouncement)}
function $MethodAnnouncement(){return globals.MethodAnnouncement||(typeof MethodAnnouncement=="undefined"?nil:MethodAnnouncement)}
function $ProtocolAnnouncement(){return globals.ProtocolAnnouncement||(typeof ProtocolAnnouncement=="undefined"?nil:ProtocolAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._announcer();
_st($1)._on_send_to_($PackageAdded(),"onPackageAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
_st($1)._on_send_to_($ClassAnnouncement(),"onClassModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
_st($1)._on_send_to_($MethodAnnouncement(),"onMethodModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$2=_st($1)._on_send_to_($ProtocolAnnouncement(),"onProtocolModification:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["on:send:to:", "announcer"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self announcer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassAnnouncement\x0a\x09\x09send: #onClassModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodAnnouncement\x0a\x09\x09send: #onMethodModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolAnnouncement\x0a\x09\x09send: #onProtocolModification:\x0a\x09\x09to: self",
referencedClasses: ["PackageAdded", "ClassAnnouncement", "MethodAnnouncement", "ProtocolAnnouncement"]
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=_st(anAnnouncement)._theClass();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var theClass;
theClass=$receiver;
_st(_st(theClass)._package())._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassModification:",{anAnnouncement:anAnnouncement},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "theClass", "beDirty", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassModification: anAnnouncement\x0a\x09anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=_st(_st(anAnnouncement)._method())._package();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var package_;
package_=$receiver;
_st(package_)._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodModification:",{anAnnouncement:anAnnouncement},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "package", "method", "beDirty"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodModification: anAnnouncement\x0a\x09anAnnouncement method package ifNotNil: [ :package | package beDirty ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(anAnnouncement)._package())._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["beDirty", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09anAnnouncement package beDirty",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolModification:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=_st(anAnnouncement)._package();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var package_;
package_=$receiver;
_st(package_)._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolModification:",{anAnnouncement:anAnnouncement},globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:", "package", "beDirty"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolModification: anAnnouncement\x0a\x09anAnnouncement package ifNotNil: [ :package | package beDirty ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver);


globals.PackageStateObserver.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.PackageStateObserver.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._observeSystem();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PackageStateObserver.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["observeSystem", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self current observeSystem",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageStateObserver.klass);


smalltalk.addClass('PlatformInterface', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.PlatformInterface.comment="I am single entry point to UI and environment interface.\x0aMy `initialize` tries several options (for now, browser environment only) to set myself up.\x0a\x0a## API\x0a\x0a    PlatformInterface alert: 'Hey, there is a problem'.\x0a    PlatformInterface confirm: 'Affirmative?'.\x0a    PlatformInterface prompt: 'Your name:'.\x0a\x0a    PlatformInterface ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
//>>excludeEnd("ide");

globals.PlatformInterface.klass.iVarNames = ['worker'];
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@worker"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("ajax: not available");
} else {
$1=_st(self["@worker"])._ajax_(anObject);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:ifNil:", "ajax:", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker ajax: anObject ]\x0a\x09\x09ifNil: [ self error: 'ajax: not available' ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@worker"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("alert: not available");
} else {
$1=_st(self["@worker"])._alert_(aString);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:ifNil:", "alert:", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker alert: aString ]\x0a\x09\x09ifNil: [ self error: 'alert: not available' ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@worker"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("confirm: not available");
} else {
$1=_st(self["@worker"])._confirm_(aString);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:ifNil:", "confirm:", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker confirm: aString ]\x0a\x09\x09ifNil: [ self error: 'confirm: not available' ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "existsGlobal:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($PlatformInterface())._globals())._at_ifPresent_ifAbsent_(aString,(function(){
return true;

}),(function(){
return false;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"existsGlobal:",{aString:aString},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["at:ifPresent:ifAbsent:", "globals"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "existsGlobal: aString\x0a\x09^ PlatformInterface globals \x0a\x09\x09at: aString \x0a\x09\x09ifPresent: [ true ] \x0a\x09\x09ifAbsent: [ false ]",
referencedClasses: ["PlatformInterface"]
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return (new Function('return this'))();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09<return (new Function('return this'))();>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var candidate;
function $BrowserInterface(){return globals.BrowserInterface||(typeof BrowserInterface=="undefined"?nil:BrowserInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.PlatformInterface.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
if(($receiver = $BrowserInterface()) == null || $receiver.isNil){
$BrowserInterface();
} else {
candidate=_st($BrowserInterface())._new();
candidate;
$1=_st(candidate)._isAvailable();
if(smalltalk.assert($1)){
self._setWorker_(candidate);
return self;
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{candidate:candidate},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["initialize", "ifNotNil:", "new", "ifTrue:", "isAvailable", "setWorker:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| candidate |\x0a\x09\x0a\x09super initialize.\x0a\x09\x0a\x09BrowserInterface ifNotNil: [\x0a\x09\x09candidate := BrowserInterface new.\x0a\x09\x09candidate isAvailable ifTrue: [ self setWorker: candidate. ^ self ]\x0a\x09]",
referencedClasses: ["BrowserInterface"]
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@worker"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("prompt: not available");
} else {
$1=_st(self["@worker"])._prompt_(aString);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:ifNil:", "prompt:", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker prompt: aString ]\x0a\x09\x09ifNil: [ self error: 'prompt: not available' ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (aString,defaultString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@worker"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("prompt: not available");
} else {
$1=_st(self["@worker"])._prompt_default_(aString,defaultString);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString},globals.PlatformInterface.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNotNil:ifNil:", "prompt:default:", "error:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker prompt: aString default: defaultString ]\x0a\x09\x09ifNil: [ self error: 'prompt: not available' ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setWorker:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@worker"]=anObject;
return self;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setWorker: anObject\x0a\x09worker := anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PlatformInterface.klass);


smalltalk.addClass('Service', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Service.comment="I implement the basic behavior for class registration to a service.\x0a\x0aSee the `Transcript` class for a concrete service.\x0a\x0a## API\x0a\x0aUse class-side methods `#register:` and `#registerIfNone:` to register classes to a specific service.";
//>>excludeEnd("ide");

globals.Service.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@current"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Service.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.Service.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["shouldNotImplement"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Service.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
protocol: 'registration',
fn: function (anObject){
var self=this;
self["@current"]=anObject;
return self;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "register: anObject\x0a\x09current := anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Service.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerIfNone:",
protocol: 'registration',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
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
}, function($ctx1) {$ctx1.fill(self,"registerIfNone:",{anObject:anObject},globals.Service.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:", "current", "register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "registerIfNone: anObject\x0a\x09self current ifNil: [ self register: anObject ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Service.klass);


smalltalk.addClass('ErrorHandler', globals.Service, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ErrorHandler.comment="I am the service used to handle Smalltalk errors.\x0aSee `boot.js` `handleError()` function.\x0a\x0aRegistered service instances must implement `#handleError:` to perform an action on the thrown exception.";
//>>excludeEnd("ide");

smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._handleUnhandledError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.ErrorHandler.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["handleUnhandledError:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09self handleUnhandledError: anError",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "handleUnhandledError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=_st(anError)._wasHandled();
if(smalltalk.assert($1)){
return self;
};
$2=_st(self._current())._handleError_(anError);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleUnhandledError:",{anError:anError},globals.ErrorHandler.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifTrue:", "wasHandled", "handleError:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleUnhandledError: anError\x0a\x09anError wasHandled ifTrue: [ ^ self ].\x0a\x09\x0a\x09^ self current handleError: anError",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ErrorHandler.klass);


smalltalk.addClass('Finder', globals.Service, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Finder.comment="I am the service responsible for finding classes/methods.\x0a__There is no default finder.__\x0a\x0a## API\x0a\x0aUse `#browse` on an object to find it.";
//>>excludeEnd("ide");

smalltalk.addMethod(
smalltalk.method({
selector: "findClass:",
protocol: 'finding',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._current())._findClass_(aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findClass:",{aClass:aClass},globals.Finder.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["findClass:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "findClass: aClass\x0a\x09^ self current findClass: aClass",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Finder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "findMethod:",
protocol: 'finding',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._current())._findMethod_(aCompiledMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findMethod:",{aCompiledMethod:aCompiledMethod},globals.Finder.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["findMethod:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "findMethod: aCompiledMethod\x0a\x09^ self current findMethod: aCompiledMethod",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Finder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:",
protocol: 'finding',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._current())._findString_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findString:",{aString:aString},globals.Finder.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["findString:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "findString: aString\x0a\x09^ self current findString: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Finder.klass);


smalltalk.addClass('Inspector', globals.Service, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Inspector.comment="I am the service responsible for inspecting objects.\x0a\x0aThe default inspector object is the transcript.";
//>>excludeEnd("ide");

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'inspecting',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._current())._inspect_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.Inspector.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["inspect:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self current inspect: anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Inspector.klass);


smalltalk.addClass('ProgressHandler', globals.Service, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ProgressHandler.comment="I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.\x0a\x0aRegistered instances must implement `#do:on:displaying:`.\x0a\x0aThe default behavior is to simply iterate over the collection, using `NullProgressHandler`.";
//>>excludeEnd("ide");

smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._do_on_displaying_(aBlock,aCollection,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},globals.ProgressHandler.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["do:on:displaying:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09self current do: aBlock on: aCollection displaying: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ProgressHandler.klass);


smalltalk.addClass('Transcript', globals.Service, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Transcript.comment="I am a facade for Transcript actions.\x0a\x0aI delegate actions to the currently registered transcript.\x0a\x0a## API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.";
//>>excludeEnd("ide");

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._clear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["clear", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self current clear",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._show_(_st($String())._cr());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["show:", "current", "cr"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09self current show: String cr",
referencedClasses: ["String"]
//>>excludeEnd("ide");
}),
globals.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["show:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self show: anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["open", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self current open",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._current())._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},globals.Transcript.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["show:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x09self current show: anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Transcript.klass);


smalltalk.addClass('Setting', globals.Object, ['key', 'value', 'defaultValue'], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Setting.comment="I represent a setting accessible via `Smalltalk settings`.\x0a\x0a## API\x0a\x0aA `Setting` value can be read using `value` and set using `value:`.\x0a\x0aSettings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: 'defaultValue'`.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@defaultValue"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue\x0a\x09^ defaultValue",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@defaultValue"]=anObject;
return self;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "defaultValue: anObject\x0a\x09defaultValue := anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@key"]=anObject;
return self;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "key: anObject\x0a\x09key := anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($Smalltalk())._settings())._at_ifAbsent_(self._key(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._defaultValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.Setting)});
//>>excludeEnd("ctx");
},
messageSends: ["at:ifAbsent:", "settings", "key", "defaultValue"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Setting);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($Smalltalk())._settings())._at_put_(self._key(),aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},globals.Setting)});
//>>excludeEnd("ctx");
},
messageSends: ["at:put:", "settings", "key"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "value: aString\x0a\x09^ Smalltalk settings at: self key put: aString",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.Setting);


smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'instance creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.Setting.klass.superclass.fn.prototype._new.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
_st($2)._key_(aString);
_st($2)._defaultValue_(anotherString);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,anotherString:anotherString},globals.Setting.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["key:", "new", "defaultValue:", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "at: aString ifAbsent: anotherString\x0a\x09^ super new\x0a\x09\x09key: aString;\x0a\x09\x09defaultValue: anotherString;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.Setting.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["shouldNotImplement"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Setting.klass);


smalltalk.addClass('SmalltalkImage', globals.Object, [], 'Kernel-Infrastructure');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.SmalltalkImage.comment="I represent the Smalltalk system, wrapping\x0aoperations of variable `smalltalk` declared in `support/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with global variable `Smalltalk`.\x0a\x0aThe `smalltalk` object holds all class and packages defined in the system.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#at:` answers a specific class or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `support/parser.js` parser file in order to work.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "addGlobalJsVariable:",
protocol: 'globals',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._globalJsVariables())._add_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["add:", "globalJsVariables"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "amdRequire",
protocol: 'accessing amd',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._vm())._at_("amdRequire");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdRequire",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["at:", "vm"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amdRequire\x0a\x09^ self vm at: 'amdRequire'",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "asSmalltalkException:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $JavaScriptException(){return globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=_st(self._isSmalltalkObject_(anObject))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(anObject)._isKindOf_($Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st($JavaScriptException())._on_(anObject);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["ifTrue:ifFalse:", "and:", "isSmalltalkObject:", "isKindOf:", "on:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
referencedClasses: ["Error", "JavaScriptException"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=_st(self._globals())._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["deprecatedAPI", "at:", "globals"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09self deprecatedAPI.\x0a\x09^ self globals at: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=_st(self._globals())._at_ifAbsent_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["deprecatedAPI", "at:ifAbsent:", "globals"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09self deprecatedAPI.\x0a\x09^ self globals at: aKey ifAbsent: aBlock",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=_st(self._globals())._at_put_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["deprecatedAPI", "at:put:", "globals"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09self deprecatedAPI.\x0a\x09^ self globals at: aString put: anObject",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "basicCreatePackage:",
protocol: 'private',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.addPackage(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicCreatePackage:",{packageName:packageName},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "basicCreatePackage: packageName\x0a\x09\x22Create and bind a new bare package with given name and return it.\x22\x0a\x09<return smalltalk.addPackage(packageName)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "basicParse:",
protocol: 'private',
fn: function (aString){
var self=this;
function $SmalltalkParser(){return globals.SmalltalkParser||(typeof SmalltalkParser=="undefined"?nil:SmalltalkParser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($SmalltalkParser())._parse_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["parse:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicParse: aString\x0a\x09^ SmalltalkParser parse: aString",
referencedClasses: ["SmalltalkParser"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
protocol: 'classes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.classes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09<return smalltalk.classes()>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:",
protocol: 'packages',
fn: function (packageName){
var self=this;
var package_,announcement;
function $PackageAdded(){return globals.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
package_=self._basicCreatePackage_(packageName);
$1=_st($PackageAdded())._new();
_st($1)._package_(package_);
$2=_st($1)._yourself();
announcement=$2;
_st(_st($SystemAnnouncer())._current())._announce_(announcement);
$3=package_;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName,package_:package_,announcement:announcement},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["basicCreatePackage:", "package:", "new", "yourself", "announce:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "createPackage: packageName\x0a\x09| package announcement |\x0a\x09\x0a\x09package := self basicCreatePackage: packageName.\x0a\x09\x0a\x09announcement := PackageAdded new\x0a\x09\x09package: package;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09SystemAnnouncer current announce: announcement.\x0a\x09\x0a\x09^ package",
referencedClasses: ["PackageAdded", "SystemAnnouncer"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:properties:",
protocol: 'private',
fn: function (packageName,aDict){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._deprecatedAPI();
$1=_st(aDict)._isEmpty();
if(! smalltalk.assert($1)){
self._error_("createPackage:properties: called with nonempty properties");
};
$2=self._createPackage_(packageName);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPackage:properties:",{packageName:packageName,aDict:aDict},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["deprecatedAPI", "ifFalse:", "isEmpty", "error:", "createPackage:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aDict"],
source: "createPackage: packageName properties: aDict\x0a\x09\x22Needed to import .st files: they begin with this call.\x22\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].\x0a\x09^ self createPackage: packageName",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._deprecatedAPI();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["deprecatedAPI"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09\x22Backward compatibility for Smalltalk current ...\x22\x0a\x09self deprecatedAPI.\x0a\x09^ self",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAmdNamespace",
protocol: 'accessing amd',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="transport.defaultAmdNamespace"._settingValue();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["settingValue"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultAmdNamespace\x0a\x09^ 'transport.defaultAmdNamespace' settingValue",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAmdNamespace:",
protocol: 'accessing amd',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
"transport.defaultAmdNamespace"._settingValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace:",{aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["settingValue:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultAmdNamespace: aString\x0a\x09'transport.defaultAmdNamespace' settingValue: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
smalltalk.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<smalltalk.removeClass(aClass)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteGlobalJsVariable:",
protocol: 'globals',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["remove:ifAbsent:", "globalJsVariables"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "deletePackage:",
protocol: 'private',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
delete smalltalk.packages[packageName];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a\x09<delete smalltalk.packages[packageName]>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "globalJsVariables",
protocol: 'globals',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.globalJsVariables;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalJsVariables\x0a\x09\x22Array of global JavaScript variables\x22\x0a\x09<return smalltalk.globalJsVariables>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return globals;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09\x22Future compatibility to be able to use Smalltalk globals at: ...\x22\x0a\x09<return globals>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.hasOwnProperty(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return smalltalk.hasOwnProperty(aKey)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkObject:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return typeof anObject.klass !== 'undefined';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'klass' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<return typeof anObject.klass !== 'undefined'>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:",
protocol: 'packages',
fn: function (packageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.packages[packageName];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "packageAt: packageName\x0a\x09<return smalltalk.packages[packageName]>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:ifAbsent:",
protocol: 'packages',
fn: function (packageName,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:", "packageAt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^ (self packageAt: packageName) ifNil: aBlock",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
protocol: 'packages',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		return Object.keys(smalltalk.packages).map(function(k) {
			return smalltalk.packages[k];
		})
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<\x0a\x09\x09return Object.keys(smalltalk.packages).map(function(k) {\x0a\x09\x09\x09return smalltalk.packages[k];\x0a\x09\x09})\x0a\x09>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
_st((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=self._basicParse_(aString);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._parseError_parsing_(ex,aString))._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=result;
_st($2)._source_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["tryCatch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09[ result := self basicParse: aString ] \x0a\x09\x09tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "parseError:parsing:",
protocol: 'error handling',
fn: function (anException,aString){
var self=this;
function $ParseError(){return globals.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$8,$7,$6,$9,$5,$4,$3,$1;
$2=_st($ParseError())._new();
$8=_st(anException)._basicAt_("line");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$7="Parse error on line ".__comma($8);
$6=_st($7).__comma(" column ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$9=_st(anException)._basicAt_("column");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=2;
//>>excludeEnd("ctx");
$5=_st($6).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$4=_st($5).__comma(" : Unexpected character ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=_st($4).__comma(_st(anException)._basicAt_("found"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=_st($2)._messageText_($3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["messageText:", "new", ",", "basicAt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')",
referencedClasses: ["ParseError"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "readJSObject:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.readJSObject(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return smalltalk.readJSObject(anObject)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
protocol: 'classes',
fn: function (aClass){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRemoved(){return globals.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=_st(aClass)._isMetaclass();
if(smalltalk.assert($1)){
self._error_(_st(_st(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!"));
};
self._deleteClass_(aClass);
$2=_st($ClassRemoved())._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["ifTrue:", "isMetaclass", "error:", ",", "asString", "deleteClass:", "announce:", "current", "theClass:", "new", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!' ].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRemoved"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage:",
protocol: 'packages',
fn: function (packageName){
var self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
pkg=self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Missing package: ".__comma(packageName));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
_st(_st(pkg)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._removeClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._deletePackage_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "classes", "removeClass:", "deletePackage:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09pkg classes do: [ :each |\x0a\x09\x09\x09self removeClass: each ].\x0a\x09self deletePackage: packageName",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage:to:",
protocol: 'packages',
fn: function (packageName,newName){
var self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="Missing package: ".__comma(packageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self._error_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=self._packageAt_(newName);
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
_st(self._at_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
self._deletePackage_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "at:", "name:", "deletePackage:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09(self packageAt: newName) ifNotNil: [ self error: 'Already exists a package called: ', newName ].\x0a\x09(self at: 'packages') at: newName put: pkg.\x0a\x09pkg name: newName.\x0a\x09self deletePackage: packageName.",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "reservedWords",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.reservedWords;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return smalltalk.reservedWords>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "settings",
protocol: 'accessing',
fn: function (){
var self=this;
function $SmalltalkSettings(){return globals.SmalltalkSettings||(typeof SmalltalkSettings=="undefined"?nil:SmalltalkSettings)}
return $SmalltalkSettings();

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settings\x0a\x09^ SmalltalkSettings",
referencedClasses: ["SmalltalkSettings"]
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
protocol: 'accessing',
fn: function (){
var self=this;
return "0.13.0-pre";

},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.13.0-pre'",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);

smalltalk.addMethod(
smalltalk.method({
selector: "vm",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vm",{},globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vm\x0a\x09\x22Future compatibility to be able to use Smalltalk vm ...\x22\x0a\x09<return smalltalk>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage);


globals.SmalltalkImage.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.SmalltalkImage.klass.superclass.fn.prototype._new.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
self._deprecatedAPI();
$1=self["@current"];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["ifNil:ifNotNil:", "new", "deprecatedAPI"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(globals)._at_put_("Smalltalk",self._current());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["at:put:", "current"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09globals at: 'Smalltalk' put: self current",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.SmalltalkImage.klass)});
//>>excludeEnd("ctx");
},
messageSends: ["shouldNotImplement"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.SmalltalkImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "do:displayingProgress:",
protocol: '*Kernel-Infrastructure',
fn: function (aBlock,aString){
var self=this;
function $ProgressHandler(){return globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($ProgressHandler())._do_on_displaying_(aBlock,self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString},globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
messageSends: ["do:on:displaying:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aString"],
source: "do: aBlock displayingProgress: aString\x0a\x09ProgressHandler \x0a\x09\x09do: aBlock \x0a\x09\x09on: self \x0a\x09\x09displaying: aString",
referencedClasses: ["ProgressHandler"]
//>>excludeEnd("ide");
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptPropertyName",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return smalltalk.st2prop(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptPropertyName",{},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptPropertyName\x0a<return smalltalk.st2prop(self)>",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptSelector",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._asJavaScriptPropertyName();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["asJavaScriptPropertyName"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSelector\x0a\x09\x22Cannot add next line as it breaks commit:\x0a\x09self deprecatedAPI: 'Use #asJavaScriptPropertyName'.\x22\x0a\x0a\x09^ self asJavaScriptPropertyName",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSetting",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
function $Setting(){return globals.Setting||(typeof Setting=="undefined"?nil:Setting)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Setting())._at_ifAbsent_(self,nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSetting",{},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["at:ifAbsent:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSetting\x0a\x09^ Setting at: self ifAbsent: nil",
referencedClasses: ["Setting"]
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSettingIfAbsent:",
protocol: '*Kernel-Infrastructure',
fn: function (aString){
var self=this;
function $Setting(){return globals.Setting||(typeof Setting=="undefined"?nil:Setting)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Setting())._at_ifAbsent_(self,aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSettingIfAbsent:",{aString:aString},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["at:ifAbsent:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "asSettingIfAbsent: aString\x0a\x09^ Setting at: self ifAbsent: aString",
referencedClasses: ["Setting"]
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "settingValue",
protocol: '*Kernel-Infrastructure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._asSetting())._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue",{},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["value", "asSetting"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settingValue\x0a\x09^ self asSetting value",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "settingValue:",
protocol: '*Kernel-Infrastructure',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._asSetting())._value_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue:",{aString:aString},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["value:", "asSetting"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "settingValue: aString\x0a\x09^ self asSetting value: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "settingValueIfAbsent:",
protocol: '*Kernel-Infrastructure',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._asSettingIfAbsent_(aString))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValueIfAbsent:",{aString:aString},globals.String)});
//>>excludeEnd("ctx");
},
messageSends: ["value", "asSettingIfAbsent:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "settingValueIfAbsent: aString\x0a\x09^ (self asSettingIfAbsent: aString) value",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.String);

});
