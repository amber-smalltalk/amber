define("amber_core/Kernel-Infrastructure", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Infrastructure');
smalltalk.packages["Kernel-Infrastructure"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('InspectorHandler', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.InspectorHandler.comment="I am responsible for inspecting object.\x0a\x0aMy class-side `inspector` inst var holds the current inspector I'm delegating object inspection to.\x0a\x0aThe default inspector object is the transcript.";

smalltalk.InspectorHandler.klass.iVarNames = ['inspector'];
smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'registration',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._inspect_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.InspectorHandler.klass)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self inspector inspect: anObject",
messageSends: ["inspect:", "inspector"],
referencedClasses: []
}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
category: 'accessing',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspector"];
if(($receiver = $2) == nil || $receiver == null){
self["@inspector"]=$Transcript();
$1=self["@inspector"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspector",{},smalltalk.InspectorHandler.klass)})},
args: [],
source: "inspector\x0a\x09^ inspector ifNil: [ inspector := Transcript ]",
messageSends: ["ifNil:"],
referencedClasses: ["Transcript"]
}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'registration',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspector"]=anInspector;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},smalltalk.InspectorHandler.klass)})},
args: ["anInspector"],
source: "register: anInspector\x0a\x09inspector := anInspector",
messageSends: [],
referencedClasses: []
}),
smalltalk.InspectorHandler.klass);


smalltalk.addClass('InterfacingObject', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.InterfacingObject.comment="I am superclass of all object that interface with user or environment. `Widget` and a few other classes are subclasses of me. I delegate all of the above APIs to `PlatformInterface`.\x0a\x0a## API\x0a\x0a    self alert: 'Hey, there is a problem'.\x0a    self confirm: 'Affirmative?'.\x0a    self prompt: 'Your name:'.\x0a\x0a    self ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
category: 'actions',
fn: function (anObject){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._ajax_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},smalltalk.InterfacingObject)})},
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ PlatformInterface ajax: anObject",
messageSends: ["ajax:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
category: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._alert_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.InterfacingObject)})},
args: ["aString"],
source: "alert: aString\x0a\x09^ PlatformInterface alert: aString",
messageSends: ["alert:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
category: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._confirm_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},smalltalk.InterfacingObject)})},
args: ["aString"],
source: "confirm: aString\x0a\x09^ PlatformInterface confirm: aString",
messageSends: ["confirm:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
category: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._prompt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},smalltalk.InterfacingObject)})},
args: ["aString"],
source: "prompt: aString\x0a\x09^ PlatformInterface prompt: aString",
messageSends: ["prompt:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.InterfacingObject);



smalltalk.addClass('Environment', smalltalk.InterfacingObject, [], 'Kernel-Infrastructure');
smalltalk.Environment.comment="I provide an unified entry point to manipulate Amber packages, classes and methods.\x0a\x0aTypical use cases include IDEs, remote access and restricting browsing.";
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self._classBuilder();
$2=_st(aClass)._superclass();
$3=_st(aClass)._name();
$ctx1.sendIdx["name"]=1;
$4=_st(_st(aClass)._instanceVariableNames())._copy();
_st($4)._add_(aString);
$5=_st($4)._yourself();
_st($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$5,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "classBuilder", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Environment)})},
args: [],
source: "allSelectors\x0a\x09^ (Smalltalk current at: 'allSelectors') value",
messageSends: ["value", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.Environment)})},
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk current classes \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "classes", "current", "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._packages())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.Environment)})},
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk current packages \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "packages", "current", "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
var protocols;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
protocols=_st(aClass)._protocols();
$1=_st(aClass)._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(protocols)._addAll_(self._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.Environment)})},
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray",
messageSends: ["protocols", "ifNotNil:", "superclass", "addAll:", "availableProtocolsFor:", "asArray", "asSet"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
category: 'accessing',
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ClassBuilder())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.Environment)})},
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
category: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st($Smalltalk())._current())._at_(_st(aString)._asSymbol());
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.Environment)})},
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk current at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
messageSends: ["ifNil:", "at:", "current", "asSymbol", "error:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._classes();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Environment)})},
args: [],
source: "classes\x0a\x09^ Smalltalk current classes",
messageSends: ["classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.Environment)})},
args: ["aPackage"],
source: "commitPackage: aPackage\x0a\x09aPackage commit",
messageSends: ["commit"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
category: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
self._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.Environment)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self eval: aString on: DoIt new",
messageSends: ["eval:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
category: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(class_)._compile_category_(sourceCode,protocol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.Environment)})},
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09^ class\x0a\x09\x09compile: sourceCode\x0a\x09\x09category: protocol",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
category: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$2=_st("A class named ".__comma(aClassName)).__comma(" already exists");
$ctx1.sendIdx[","]=1;
self._error_($2);
};
_st(_st($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
args: ["aClass", "aClassName"],
source: "copyClass: aClass to: aClassName\x0a\x09(Smalltalk current at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new copyClass: aClass named: aClassName",
messageSends: ["ifNotNil:", "at:", "current", "error:", ",", "copyClass:named:", "new"],
referencedClasses: ["Smalltalk", "ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "doItReceiver",
category: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DoIt())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"doItReceiver",{},smalltalk.Environment)})},
args: [],
source: "doItReceiver\x0a\x09^ DoIt new",
messageSends: ["new"],
referencedClasses: ["DoIt"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (aString,aReceiver){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler},smalltalk.Environment)})},
args: ["aString", "aReceiver"],
source: "eval: aString on: aReceiver\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex |\x0a\x09\x09^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString on: aReceiver",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:do:",
category: 'error handling',
fn: function (aBlock,anErrorClass,exceptionBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._try_catch_(aBlock,(function(exception){
return smalltalk.withContext(function($ctx2) {
$1=_st(exception)._isKindOf_(self._classNamed_(_st(anErrorClass)._name()));
if(smalltalk.assert($1)){
return _st(exceptionBlock)._value_(exception);
} else {
return _st(exception)._signal();
};
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},smalltalk.Environment)})},
args: ["aBlock", "anErrorClass", "exceptionBlock"],
source: "evaluate: aBlock on: anErrorClass do: exceptionBlock\x0a\x09\x22Evaluate a block and catch exceptions happening on the environment stack\x22\x0a\x09\x0a\x09self try: aBlock catch: [ :exception | \x0a\x09\x09(exception isKindOf: (self classNamed: anErrorClass name))\x0a\x09\x09\x09ifTrue: [ exceptionBlock value: exception ]\x0a \x09\x09\x09ifFalse: [ exception signal ] ]",
messageSends: ["try:catch:", "ifTrue:ifFalse:", "isKindOf:", "classNamed:", "name", "value:", "signal"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($InspectorHandler())._inspector())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Environment)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09InspectorHandler inspector inspect: anObject",
messageSends: ["inspect:", "inspector"],
referencedClasses: ["InspectorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
category: 'actions',
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
package_=_st($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == nil || $receiver == null){
self._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
return self;
};
_st(aClass)._package_(package_);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.Environment)})},
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09aClass package: package",
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"],
referencedClasses: ["Package"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
destinationClass=_st(_st($Smalltalk())._current())._at_(_st(aClassName)._asSymbol());
$1=destinationClass;
if(($receiver = $1) == nil || $receiver == null){
self._error_("Invalid class name");
} else {
$1;
};
$3=destinationClass;
$4=_st(aMethod)._methodClass();
$ctx1.sendIdx["methodClass"]=1;
$2=_st($3).__eq_eq($4);
if(smalltalk.assert($2)){
return self;
};
_st(destinationClass)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.Environment)})},
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := Smalltalk current at: aClassName asSymbol.\x0a\x09destinationClass ifNil: [ self error: 'Invalid class name' ].\x0a\x09destinationClass == aMethod methodClass ifTrue: [ ^ self ].\x0a\x09\x0a\x09destinationClass \x0a\x09\x09compile: aMethod source\x0a\x09\x09category: aMethod protocol.\x0a\x09aMethod methodClass \x0a\x09\x09removeCompiledMethod: aMethod",
messageSends: ["at:", "current", "asSymbol", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "compile:category:", "source", "protocol", "removeCompiledMethod:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
category: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.Environment)})},
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod category: aProtocol",
messageSends: ["category:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Environment)})},
args: [],
source: "packages\x0a\x09^ Smalltalk current packages",
messageSends: ["packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
category: 'actions',
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ErrorHandler())._setCurrent_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.Environment)})},
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09ErrorHandler setCurrent: anErrorHandler",
messageSends: ["setCurrent:"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
category: 'actions',
fn: function (anInspector){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._register_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.Environment)})},
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09InspectorHandler register: anInspector",
messageSends: ["register:"],
referencedClasses: ["InspectorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
category: 'actions',
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.Environment)})},
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09ProgressHandler setCurrent: aProgressHandler",
messageSends: ["setCurrent:"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'actions',
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Environment)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk current removeClass: aClass",
messageSends: ["removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.Environment)})},
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod methodClass removeCompiledMethod: aMethod",
messageSends: ["removeCompiledMethod:", "methodClass"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol:from:",
category: 'actions',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._removeCompiledMethod_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "removeProtocol: aString from: aClass\x0a\x09(aClass methods\x0a\x09\x09select: [ :each | each protocol = aString ])\x0a\x09\x09do: [ :each | aClass removeCompiledMethod: each ]",
messageSends: ["do:", "select:", "methods", "=", "protocol", "removeCompiledMethod:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
category: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$2=_st("A class named ".__comma(aClassName)).__comma(" already exists");
$ctx1.sendIdx[","]=1;
self._error_($2);
};
_st(_st($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
args: ["aClass", "aClassName"],
source: "renameClass: aClass to: aClassName\x0a\x09(Smalltalk current at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new renameClass: aClass to: aClassName",
messageSends: ["ifNotNil:", "at:", "current", "error:", ",", "renameClass:to:", "new"],
referencedClasses: ["Smalltalk", "ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocol:to:in:",
category: 'actions',
fn: function (aString,anotherString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._protocol_(anotherString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "anotherString", "aClass"],
source: "renameProtocol: aString to: anotherString in: aClass\x0a\x09(aClass methods\x0a\x09\x09select: [ :each | each protocol = aString ])\x0a\x09\x09do: [ :each | each protocol: anotherString ]",
messageSends: ["do:", "select:", "methods", "=", "protocol", "protocol:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassCommentOf:to:",
category: 'actions',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},smalltalk.Environment)})},
args: ["aClass", "aString"],
source: "setClassCommentOf: aClass to: aString\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("SystemAnnouncer"))._current();
$ctx1.sendIdx["current"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.Environment)})},
args: [],
source: "systemAnnouncer\x0a\x09^ (Smalltalk current at: #SystemAnnouncer) current",
messageSends: ["current", "at:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);



smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Infrastructure');
smalltalk.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
smalltalk.addMethod(
smalltalk.method({
selector: "addObjectVariablesTo:",
category: 'proxy',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:",{aDictionary:aDictionary},smalltalk.JSObjectProxy)})},
args: ["aDictionary"],
source: "addObjectVariablesTo: aDictionary\x0a\x09<\x0a\x09\x09for(var i in self['@jsObject']) {\x0a\x09\x09\x09aDictionary._at_put_(i, self['@jsObject'][i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.JSObjectProxy)})},
args: [],
source: "asJSON\x0a\x09\x22Answers the receiver in a stringyfy-friendly fashion\x22\x0a\x0a\x09^ jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject'][aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.JSObjectProxy)})},
args: ["aString"],
source: "at: aString\x0a\x09<return self['@jsObject'][aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@jsObject'][aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},smalltalk.JSObjectProxy)})},
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<self['@jsObject'][aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'proxy',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._lookupProperty_(_st(_st(aMessage)._selector())._asJavaScriptSelector());
if(($receiver = $2) == nil || $receiver == null){
$1=smalltalk.JSObjectProxy.superclass.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
} else {
var jsSelector;
jsSelector=$receiver;
$1=self._forwardMessage_withArguments_(jsSelector,_st(aMessage)._arguments());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self lookupProperty: aMessage selector asJavaScriptSelector)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments ]",
messageSends: ["ifNil:ifNotNil:", "lookupProperty:", "asJavaScriptSelector", "selector", "doesNotUnderstand:", "forwardMessage:withArguments:", "arguments"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "forwardMessage:withArguments:",
category: 'proxy',
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return smalltalk.send(self._jsObject(), aString, anArray);
	;
return self}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:",{aString:aString,anArray:anArray},smalltalk.JSObjectProxy)})},
args: ["aString", "anArray"],
source: "forwardMessage: aString withArguments: anArray\x0a\x09<\x0a\x09\x09return smalltalk.send(self._jsObject(), aString, anArray);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'proxy',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self._jsObject());
_st(anInspector)._setLabel_(self._printString());
self._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.JSObjectProxy)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxy)})},
args: [],
source: "jsObject\x0a\x09^ jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject:",
category: 'accessing',
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsObject"]=aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsObject:",{aJSObject:aJSObject},smalltalk.JSObjectProxy)})},
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<\x0a\x09\x09var o = self['@jsObject'];\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupProperty:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aString in self._jsObject() ? aString : nil;
return self}, function($ctx1) {$ctx1.fill(self,"lookupProperty:",{aString:aString},smalltalk.JSObjectProxy)})},
args: ["aString"],
source: "lookupProperty: aString\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<return aString in self._jsObject() ? aString : nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._printString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.JSObjectProxy)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var js = self['@jsObject'];
		return js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	;
return self}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.JSObjectProxy)})},
args: [],
source: "printString\x0a\x09<\x0a\x09\x09var js = self['@jsObject'];\x0a\x09\x09return js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_("value",(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.JSObjectProxy.superclass.fn.prototype._value.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.JSObjectProxy)})},
args: [],
source: "value\x0a\x09\x22if attribute 'value' exists on the JS object return it,\x0a\x09otherwise return the result of Object>>value.\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09at: 'value' \x0a\x09\x09ifAbsent: [ super value ]",
messageSends: ["at:ifAbsent:", "value"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._jsObject_(aJSObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject},smalltalk.JSObjectProxy.klass)})},
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^ self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
messageSends: ["jsObject:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.addElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},smalltalk.Organizer)})},
args: ["anObject"],
source: "addElement: anObject\x0a\x09<self.elements.addElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicAt_("elements"))._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.Organizer)})},
args: [],
source: "elements\x0a\x09^ (self basicAt: 'elements') copy",
messageSends: ["copy", "basicAt:"],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.removeElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},smalltalk.Organizer)})},
args: ["anObject"],
source: "removeElement: anObject\x0a\x09<self.elements.removeElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);



smalltalk.addClass('ClassOrganizer', smalltalk.Organizer, [], 'Kernel-Infrastructure');
smalltalk.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.ClassOrganizer.superclass.fn.prototype._addElement_.apply(_st(self), [aString]);
$1=_st($ProtocolAdded())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},smalltalk.ClassOrganizer)})},
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
messageSends: ["addElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"],
referencedClasses: ["SystemAnnouncer", "ProtocolAdded"]
}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
category: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.ClassOrganizer.superclass.fn.prototype._removeElement_.apply(_st(self), [aString]);
$1=_st($ProtocolRemoved())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},smalltalk.ClassOrganizer)})},
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
messageSends: ["removeElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"],
referencedClasses: ["SystemAnnouncer", "ProtocolRemoved"]
}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.theClass ;
return self}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassOrganizer)})},
args: [],
source: "theClass\x0a\x09< return self.theClass >",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', smalltalk.Organizer, [], 'Kernel-Infrastructure');
smalltalk.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";


smalltalk.addClass('Package', smalltalk.Object, ['transport'], 'Kernel-Infrastructure');
smalltalk.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
smalltalk.addMethod(
smalltalk.method({
selector: "basicTransport",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.transport;
return self}, function($ctx1) {$ctx1.fill(self,"basicTransport",{},smalltalk.Package)})},
args: [],
source: "basicTransport\x0a\x09\x22Answer the transport literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09<return self.transport>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._organization())._elements())._asSet())._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Package)})},
args: [],
source: "classes\x0a\x09^ self organization elements asSet asArray",
messageSends: ["asArray", "asSet", "elements", "organization"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$7,$6,$8,$9,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=_st(self._class())._name();
$ctx2.sendIdx["name"]=1;
_st(stream)._nextPutAll_($2);
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st($String())._lf();
$ctx2.sendIdx["lf"]=1;
$5=_st($String())._tab();
$ctx2.sendIdx["tab"]=1;
$3=_st($4).__comma($5);
$ctx2.sendIdx[","]=1;
_st(stream)._nextPutAll_($3);
$ctx2.sendIdx["nextPutAll:"]=2;
_st(stream)._nextPutAll_(" named: ");
$ctx2.sendIdx["nextPutAll:"]=3;
$7="'".__comma(self._name());
$ctx2.sendIdx[","]=3;
$6=_st($7).__comma("'");
$ctx2.sendIdx[","]=2;
_st(stream)._nextPutAll_($6);
$ctx2.sendIdx["nextPutAll:"]=4;
$8=_st(_st($String())._lf()).__comma(_st($String())._tab());
$ctx2.sendIdx[","]=4;
_st(stream)._nextPutAll_($8);
$ctx2.sendIdx["nextPutAll:"]=5;
_st(stream)._nextPutAll_(" transport: (");
$ctx2.sendIdx["nextPutAll:"]=6;
$9=_st(stream)._nextPutAll_(_st(_st(self._transport())._definition()).__comma(")"));
return $9;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Package)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: ' named: ';\x0a\x09\x09\x09nextPutAll: '''', self name, '''';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll:  ' transport: (';\x0a\x09\x09\x09nextPutAll: self transport definition, ')' ]",
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "lf", "tab", "definition", "transport"],
referencedClasses: ["String"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Package)})},
args: [],
source: "isPackage\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencies",
category: 'dependencies',
fn: function (){
var self=this;
var classes,packages;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
classes=self._loadDependencyClasses();
$2=_st(_st(classes)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._package();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._asSet();
_st($2)._remove_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages},smalltalk.Package)})},
args: [],
source: "loadDependencies\x0a\x09\x22Returns list of packages that need to be loaded\x0a\x09before loading this package.\x22\x0a\x09\x0a\x09| classes packages |\x0a\x09classes := self loadDependencyClasses.\x0a\x09^ (classes collect: [ :each | each package ]) asSet\x0a\x09\x09remove: self ifAbsent: [];\x0a\x09\x09yourself",
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencyClasses",
category: 'dependencies',
fn: function (){
var self=this;
var starCategoryName;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$6,$5,$7,$1;
starCategoryName="*".__comma(self._name());
$ctx1.sendIdx[","]=1;
$4=self._classes();
$ctx1.sendIdx["classes"]=1;
$3=_st($4)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._superclass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=_st($3)._asSet();
_st($2)._remove_ifAbsent_(nil,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st($2)._addAll_(_st(_st(_st($Smalltalk())._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$6=_st(each)._protocols();
$ctx2.sendIdx["protocols"]=1;
$5=_st($6).__comma(_st(_st(each)._class())._protocols());
return _st($5)._includes_(starCategoryName);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})})));
$7=_st($2)._yourself();
$1=$7;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName},smalltalk.Package)})},
args: [],
source: "loadDependencyClasses\x0a\x09\x22Returns classes needed at the time of loading a package.\x0a\x09These are all that are used to subclass\x0a\x09and to define an extension method\x22\x0a\x09\x0a\x09| starCategoryName |\x0a\x09starCategoryName := '*', self name.\x0a\x09^ (self classes collect: [ :each | each superclass ]) asSet\x0a\x09\x09remove: nil ifAbsent: [];\x0a\x09\x09addAll: (Smalltalk current classes select: [ :each | each protocols, each class protocols includes: starCategoryName ]);\x0a\x09\x09yourself",
messageSends: [",", "name", "remove:ifAbsent:", "asSet", "collect:", "classes", "superclass", "addAll:", "select:", "current", "includes:", "protocols", "class", "yourself"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pkgName;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Package)})},
args: [],
source: "name\x0a\x09<return self.pkgName>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.pkgName = aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.Package)})},
args: ["aString"],
source: "name: aString\x0a\x09<self.pkgName = aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Package)})},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.Package.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._name());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Package)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClasses",
category: 'classes',
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._classes();
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ClassBuilder())._new())._setupClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._initialize();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},smalltalk.Package)})},
args: [],
source: "setupClasses\x0a\x09self classes\x0a\x09\x09do: [ :each | ClassBuilder new setupClass: each ];\x0a\x09\x09do: [ :each | each initialize ]",
messageSends: ["do:", "classes", "setupClass:", "new", "initialize"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._sortedClasses_(self._classes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},smalltalk.Package)})},
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^ self class sortedClasses: self classes",
messageSends: ["sortedClasses:", "class", "classes"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport",
category: 'accessing',
fn: function (){
var self=this;
function $PackageTransport(){return smalltalk.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@transport"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($PackageTransport())._fromJson_(self._basicTransport());
_st($3)._package_(self);
$4=_st($3)._yourself();
self["@transport"]=$4;
$1=self["@transport"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transport",{},smalltalk.Package)})},
args: [],
source: "transport\x0a\x09^ transport ifNil: [ \x0a\x09\x09transport := (PackageTransport fromJson: self basicTransport)\x0a\x09\x09\x09package: self;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "package:", "fromJson:", "basicTransport", "yourself"],
referencedClasses: ["PackageTransport"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport:",
category: 'accessing',
fn: function (aPackageTransport){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transport"]=aPackageTransport;
_st(aPackageTransport)._package_(self);
return self}, function($ctx1) {$ctx1.fill(self,"transport:",{aPackageTransport:aPackageTransport},smalltalk.Package)})},
args: ["aPackageTransport"],
source: "transport: aPackageTransport\x0a\x09transport := aPackageTransport.\x0a\x09aPackageTransport package: self",
messageSends: ["package:"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "named:",
category: 'accessing',
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st($Smalltalk())._current();
$ctx1.sendIdx["current"]=1;
$1=_st($2)._packageAt_ifAbsent_(aPackageName,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Smalltalk())._current())._createPackage_(aPackageName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
args: ["aPackageName"],
source: "named: aPackageName\x0a\x09^ Smalltalk current \x0a\x09\x09packageAt: aPackageName\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09Smalltalk current createPackage: aPackageName ]",
messageSends: ["packageAt:ifAbsent:", "current", "createPackage:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:ifAbsent:",
category: 'accessing',
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},smalltalk.Package.klass)})},
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x09^ Smalltalk current packageAt: aPackageName ifAbsent: aBlock",
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:transport:",
category: 'accessing',
fn: function (aPackageName,aTransport){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { 
var $1;
package_=self._named_(aPackageName);
_st(package_)._transport_(aTransport);
$1=package_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:transport:",{aPackageName:aPackageName,aTransport:aTransport,package_:package_},smalltalk.Package.klass)})},
args: ["aPackageName", "aTransport"],
source: "named: aPackageName transport: aTransport\x0a\x09| package |\x0a\x09\x0a\x09package := self named: aPackageName.\x0a\x09package transport: aTransport.\x0a\x09\x0a\x09^ package",
messageSends: ["named:", "transport:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses:",
category: 'sorting',
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return smalltalk.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
$ctx2.sendIdx["add:"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
nodes=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
nodes=_st(nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$3=_st(a)._theClass();
$ctx2.sendIdx["theClass"]=1;
$2=_st($3)._name();
$ctx2.sendIdx["name"]=1;
return _st($2).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)})}));
expandedClasses=_st($Array())._new();
_st(nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(expandedClasses);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,6)})}));
$4=expandedClasses;
return $4;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},smalltalk.Package.klass)})},
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [ :each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [ children add: each ]\x0a\x09\x09\x09ifTrue: [ others add: each ]].\x0a\x09nodes := children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0 ].\x0a\x09nodes := nodes sorted: [ :a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses ].\x0a\x09^ expandedClasses",
messageSends: ["do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"],
referencedClasses: ["ClassSorterNode", "Array"]
}),
smalltalk.Package.klass);


smalltalk.addClass('PlatformInterface', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.PlatformInterface.comment="I am single entry point to UI and environment interface.\x0aMy `initialize` tries several options (for now, browser environment only) to set myself up.\x0a\x0a## API\x0a\x0a    PlatformInterface alert: 'Hey, there is a problem'.\x0a    PlatformInterface confirm: 'Affirmative?'.\x0a    PlatformInterface prompt: 'Your name:'.\x0a\x0a    PlatformInterface ajax: #{\x0a        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'\x0a    }.";

smalltalk.PlatformInterface.klass.iVarNames = ['worker'];
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("ajax: not available");
} else {
$1=_st(self["@worker"])._ajax_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},smalltalk.PlatformInterface.klass)})},
args: ["anObject"],
source: "ajax: anObject\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker ajax: anObject ]\x0a\x09\x09ifNil: [ self error: 'ajax: not available' ]",
messageSends: ["ifNotNil:ifNil:", "ajax:", "error:"],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("alert: not available");
} else {
$1=_st(self["@worker"])._alert_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.PlatformInterface.klass)})},
args: ["aString"],
source: "alert: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker alert: aString ]\x0a\x09\x09ifNil: [ self error: 'alert: not available' ]",
messageSends: ["ifNotNil:ifNil:", "alert:", "error:"],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("confirm: not available");
} else {
$1=_st(self["@worker"])._confirm_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},smalltalk.PlatformInterface.klass)})},
args: ["aString"],
source: "confirm: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker confirm: aString ]\x0a\x09\x09ifNil: [ self error: 'confirm: not available' ]",
messageSends: ["ifNotNil:ifNil:", "confirm:", "error:"],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "existsGlobal:",
category: 'actions',
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($PlatformInterface())._globals())._at_ifPresent_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"existsGlobal:",{aString:aString},smalltalk.PlatformInterface.klass)})},
args: ["aString"],
source: "existsGlobal: aString\x0a\x09^ PlatformInterface globals \x0a\x09\x09at: aString \x0a\x09\x09ifPresent: [ true ] \x0a\x09\x09ifAbsent: [ false ]",
messageSends: ["at:ifPresent:ifAbsent:", "globals"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "globals",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (new Function('return this'))();;
return self}, function($ctx1) {$ctx1.fill(self,"globals",{},smalltalk.PlatformInterface.klass)})},
args: [],
source: "globals\x0a\x09<return (new Function('return this'))();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
var candidate;
function $BrowserInterface(){return smalltalk.BrowserInterface||(typeof BrowserInterface=="undefined"?nil:BrowserInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.PlatformInterface.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
if(($receiver = $BrowserInterface()) == nil || $receiver == null){
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{candidate:candidate},smalltalk.PlatformInterface.klass)})},
args: [],
source: "initialize\x0a\x09| candidate |\x0a\x09\x0a\x09super initialize.\x0a\x09\x0a\x09BrowserInterface ifNotNil: [\x0a\x09\x09candidate := BrowserInterface new.\x0a\x09\x09candidate isAvailable ifTrue: [ self setWorker: candidate. ^ self ]\x0a\x09]",
messageSends: ["initialize", "ifNotNil:", "new", "ifTrue:", "isAvailable", "setWorker:"],
referencedClasses: ["BrowserInterface"]
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("prompt: not available");
} else {
$1=_st(self["@worker"])._prompt_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},smalltalk.PlatformInterface.klass)})},
args: ["aString"],
source: "prompt: aString\x0a\x09^ worker\x0a\x09\x09ifNotNil: [ worker prompt: aString ]\x0a\x09\x09ifNil: [ self error: 'prompt: not available' ]",
messageSends: ["ifNotNil:ifNil:", "prompt:", "error:"],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setWorker:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@worker"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setWorker:",{anObject:anObject},smalltalk.PlatformInterface.klass)})},
args: ["anObject"],
source: "setWorker: anObject\x0a\x09worker := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.PlatformInterface.klass);


smalltalk.addClass('ProgressHandler', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.ProgressHandler.comment="I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.\x0a\x0aSubclasses of can register themselves as the current handler with\x0a`ProgressHandler class >> register`.\x0a\x0aThe default behavior is to simply iterate over the collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
category: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.ProgressHandler)})},
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09aCollection do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.ProgressHandler);


smalltalk.ProgressHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
category: 'initialization',
fn: function (){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "register\x0a\x09ProgressHandler setCurrent: self new",
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setCurrent:",
category: 'accessing',
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ProgressHandler.klass)})},
args: ["anHandler"],
source: "setCurrent: anHandler\x0a\x09current := anHandler",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.Smalltalk.comment="I represent the global JavaScript variable `smalltalk` declared in `js/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with class-side method `#current`.\x0a\x0aThe `smalltalk` object holds all class and packages defined in the system.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#at:` answers a specific class or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `js/parser.js` parser file in order to work.";
smalltalk.addMethod(
smalltalk.method({
selector: "addGlobalJsVariable:",
category: 'globals',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
messageSends: ["add:", "globalJsVariables"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "amdRequire",
category: 'accessing amd',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_("amdRequire");
return $1;
}, function($ctx1) {$ctx1.fill(self,"amdRequire",{},smalltalk.Smalltalk)})},
args: [],
source: "amdRequire\x0a\x09^ self at: 'amdRequire'",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "asSmalltalkException:",
category: 'error handling',
fn: function (anObject){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._isSmalltalkObject_(anObject))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anObject)._isKindOf_($Error());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st($JavaScriptException())._on_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
messageSends: ["ifTrue:ifFalse:", "and:", "isSmalltalkObject:", "isKindOf:", "on:"],
referencedClasses: ["Error", "JavaScriptException"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "at: aString\x0a\x09^ self basicAt: aString",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._at_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Smalltalk)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ self at: aKey ]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "includesKey:", "at:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_put_(aString,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},smalltalk.Smalltalk)})},
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09^ self basicAt: aString put: anObject",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "basicCreatePackage:",
category: 'private',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.addPackage(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"basicCreatePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "basicCreatePackage: packageName\x0a\x09\x22Create and bind a new bare package with given name and return it.\x22\x0a\x09<return smalltalk.addPackage(packageName)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "basicParse:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.parser.parse(aString);
return self}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "basicParse: aString\x0a\x09<return smalltalk.parser.parse(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.classes();
return self}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Smalltalk)})},
args: [],
source: "classes\x0a\x09<return self.classes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:",
category: 'packages',
fn: function (packageName){
var self=this;
var package_,announcement;
function $PackageAdded(){return smalltalk.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
package_=self._basicCreatePackage_(packageName);
$1=_st($PackageAdded())._new();
_st($1)._package_(package_);
$2=_st($1)._yourself();
announcement=$2;
_st(_st($SystemAnnouncer())._current())._announce_(announcement);
$3=package_;
return $3;
}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName,package_:package_,announcement:announcement},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "createPackage: packageName\x0a\x09| package announcement |\x0a\x09\x0a\x09package := self basicCreatePackage: packageName.\x0a\x09announcement := PackageAdded new\x0a\x09\x09package: package;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09SystemAnnouncer current announce: announcement.\x0a\x09\x0a\x09^ package",
messageSends: ["basicCreatePackage:", "package:", "new", "yourself", "announce:", "current"],
referencedClasses: ["PackageAdded", "SystemAnnouncer"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:properties:",
category: 'private',
fn: function (packageName,aDict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._deprecatedAPI();
$1=_st(aDict)._isEmpty();
if(! smalltalk.assert($1)){
self._error_("createPackage:properties: called with nonempty properties");
};
$2=self._createPackage_(packageName);
return $2;
}, function($ctx1) {$ctx1.fill(self,"createPackage:properties:",{packageName:packageName,aDict:aDict},smalltalk.Smalltalk)})},
args: ["packageName", "aDict"],
source: "createPackage: packageName properties: aDict\x0a\x09\x22Needed to import .st files: they begin with this call.\x22\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].\x0a\x09^ self createPackage: packageName",
messageSends: ["deprecatedAPI", "ifFalse:", "isEmpty", "error:", "createPackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAmdNamespace",
category: 'accessing amd',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_("defaultAmdNamespace");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace",{},smalltalk.Smalltalk)})},
args: [],
source: "defaultAmdNamespace\x0a\x09^ self at: 'defaultAmdNamespace'",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAmdNamespace:",
category: 'accessing amd',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("defaultAmdNamespace",aString);
return self}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "defaultAmdNamespace: aString\x0a\x09self at: 'defaultAmdNamespace' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteClass:",
category: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},smalltalk.Smalltalk)})},
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<self.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteGlobalJsVariable:",
category: 'globals',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
messageSends: ["remove:ifAbsent:", "globalJsVariables"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deletePackage:",
category: 'private',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete self.packages[ packageName];
return self}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a\x09<delete self.packages[ packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "globalJsVariables",
category: 'globals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.globalJsVariables;
return self}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},smalltalk.Smalltalk)})},
args: [],
source: "globalJsVariables\x0a\x09\x22Array of global JavaScript variables\x22\x0a\x09<return self.globalJsVariables>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.Smalltalk)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkObject:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof anObject.klass !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'klass' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<return typeof anObject.klass !== 'undefined'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:",
category: 'packages',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages[ packageName];
return self}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "packageAt: packageName\x0a\x09<return self.packages[ packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:ifAbsent:",
category: 'packages',
fn: function (packageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},smalltalk.Smalltalk)})},
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^ (self packageAt: packageName) ifNil: aBlock",
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'packages',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var packages = [];
		for(var key in self.packages) {
			packages.push(self.packages[key]);
		}
		return packages;
	;
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Smalltalk)})},
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<\x0a\x09\x09var packages = [];\x0a\x09\x09for(var key in self.packages) {\x0a\x09\x09\x09packages.push(self.packages[key]);\x0a\x09\x09}\x0a\x09\x09return packages;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=self._basicParse_(aString);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self._parseError_parsing_(ex,aString))._signal();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
$2=result;
_st($2)._source_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},smalltalk.Smalltalk)})},
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09self \x0a\x09\x09try: [ result := self basicParse: aString ] \x0a\x09\x09catch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parseError:parsing:",
category: 'error handling',
fn: function (anException,aString){
var self=this;
function $ParseError(){return smalltalk.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
return smalltalk.withContext(function($ctx1) { 
var $2,$8,$7,$6,$9,$5,$4,$3,$1;
$2=_st($ParseError())._new();
$8=_st(anException)._basicAt_("line");
$ctx1.sendIdx["basicAt:"]=1;
$7="Parse error on line ".__comma($8);
$6=_st($7).__comma(" column ");
$ctx1.sendIdx[","]=4;
$9=_st(anException)._basicAt_("column");
$ctx1.sendIdx["basicAt:"]=2;
$5=_st($6).__comma($9);
$ctx1.sendIdx[","]=3;
$4=_st($5).__comma(" : Unexpected character ");
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(_st(anException)._basicAt_("found"));
$ctx1.sendIdx[","]=1;
$1=_st($2)._messageText_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},smalltalk.Smalltalk)})},
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')",
messageSends: ["messageText:", "new", ",", "basicAt:"],
referencedClasses: ["ParseError"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{},smalltalk.Smalltalk)})},
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "readJSObject:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.readJSObject(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return self.readJSObject(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'classes',
fn: function (aClass){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
return smalltalk.withContext(function($ctx1) { 
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
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Smalltalk)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!' ].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["ifTrue:", "isMetaclass", "error:", ",", "asString", "deleteClass:", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassRemoved"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage:",
category: 'packages',
fn: function (packageName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09pkg classes do: [ :each |\x0a\x09\x09\x09self removeClass: each ].\x0a\x09self deletePackage: packageName",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "classes", "removeClass:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage:to:",
category: 'packages',
fn: function (packageName,newName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
$1="Missing package: ".__comma(packageName);
$ctx2.sendIdx[","]=1;
return self._error_($1);
$ctx2.sendIdx["error:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=self._packageAt_(newName);
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
_st(self._at_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},smalltalk.Smalltalk)})},
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09(self packageAt: newName) ifNotNil: [ self error: 'Already exists a package called: ', newName ].\x0a\x09(self at: 'packages') at: newName put: pkg.\x0a\x09pkg name: newName.\x0a\x09self deletePackage: packageName.",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "at:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "reservedWords",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.reservedWords;
return self}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},smalltalk.Smalltalk)})},
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return self.reservedWords>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0.12.2";
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.Smalltalk)})},
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.12.2'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk;
return self}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Smalltalk.klass)})},
args: [],
source: "current\x0a\x09<return smalltalk>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "do:displayingProgress:",
category: '*Kernel-Infrastructure',
fn: function (aBlock,aString){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ProgressHandler())._current())._do_on_displaying_(aBlock,self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString},smalltalk.SequenceableCollection)})},
args: ["aBlock", "aString"],
source: "do: aBlock displayingProgress: aString\x0a\x09ProgressHandler current\x0a\x09\x09do: aBlock on: self displaying: aString",
messageSends: ["do:on:displaying:", "current"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptSelector",
category: '*Kernel-Infrastructure',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replace_with_("^([a-zA-Z0-9]*).*$","$1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{},smalltalk.String)})},
args: [],
source: "asJavaScriptSelector\x0a\x09\x22Return first keyword of the selector, without trailing colon.\x22\x0a\x09^ self replace: '^([a-zA-Z0-9]*).*$' with: '$1'",
messageSends: ["replace:with:"],
referencedClasses: []
}),
smalltalk.String);

});
