smalltalk.addPackage('Helios-Environments');
smalltalk.addClass('HLEnvironment', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLEnvironment.comment="Abstract class defining common behavior for local and remote environments"
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st(self)._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.HLEnvironment)})},
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLEnvironment)})},
args: [],
source: "availableClassNames\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.HLEnvironment)})},
args: [],
source: "availablePackageNames\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass},smalltalk.HLEnvironment)})},
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.HLEnvironment)})},
args: [],
source: "classBuilder\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.HLEnvironment)})},
args: ["aString"],
source: "classNamed: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.HLEnvironment)})},
args: ["aPackage"],
source: "commitPackage: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.HLEnvironment)})},
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
category: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.HLEnvironment)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self eval: aString on: DoIt new",
messageSends: ["eval:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
category: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(class_)._compile_category_(sourceCode,protocol);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.HLEnvironment)})},
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09class\x0a\x09\x09compile: sourceCode\x0a\x09\x09category: protocol",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver},smalltalk.HLEnvironment)})},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
category: 'actions',
fn: function (aClass,aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName},smalltalk.HLEnvironment)})},
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName},smalltalk.HLEnvironment)})},
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
category: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.HLEnvironment)})},
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLEnvironment)})},
args: [],
source: "packages\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._sublcassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.HLEnvironment)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09self sublcassResponsibility",
messageSends: ["sublcassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._sublcassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.HLEnvironment)})},
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09self sublcassResponsibility",
messageSends: ["sublcassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLEnvironment)})},
args: [],
source: "systemAnnouncer\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);



smalltalk.addClass('HLLocalEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLLocalEnvironment)})},
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk current classes \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "name", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.HLLocalEnvironment)})},
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk current packages \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "name", "packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

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
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(protocols)._addAll_(_st(self)._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.HLLocalEnvironment)})},
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray",
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"],
referencedClasses: []
}),
smalltalk.HLLocalEnvironment);

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
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.HLLocalEnvironment)})},
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.HLLocalEnvironment);

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
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.HLLocalEnvironment)})},
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk current at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
messageSends: ["ifNil:", "error:", "at:", "asSymbol", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.HLLocalEnvironment)})},
args: ["aPackage"],
source: "commitPackage: aPackage\x0a\x09aPackage commit",
messageSends: ["commit"],
referencedClasses: []
}),
smalltalk.HLLocalEnvironment);

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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler},smalltalk.HLLocalEnvironment)})},
args: ["aString", "aReceiver"],
source: "eval: aString on: aReceiver\x0a\x09| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex |\x0a\x09\x09^ window alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString on: aReceiver",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
category: 'actions',
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
package_=_st($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(package_)._addClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.HLLocalEnvironment)})},
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09package addClass: aClass",
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "addClass:"],
referencedClasses: ["Package"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
destinationClass=_st(_st($Smalltalk())._current())._at_(_st(aClassName)._asSymbol());
$1=destinationClass;
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._error_("Invalid class name");
} else {
$1;
};
$2=_st(destinationClass).__eq_eq(_st(aMethod)._methodClass());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(destinationClass)._adoptMethod_(aMethod);
_st(_st(aMethod)._methodClass())._forsakeMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.HLLocalEnvironment)})},
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := Smalltalk current at: aClassName asSymbol.\x0a\x09destinationClass ifNil: [ self error: 'Invalid class name' ].\x0a\x09destinationClass == aMethod methodClass ifTrue: [ ^ self ].\x0a\x09\x0a\x09destinationClass adoptMethod: aMethod.\x0a\x09aMethod methodClass forsakeMethod: aMethod.\x0a\x09",
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "adoptMethod:", "forsakeMethod:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
category: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.HLLocalEnvironment)})},
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod category: aProtocol",
messageSends: ["category:"],
referencedClasses: []
}),
smalltalk.HLLocalEnvironment);

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
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLLocalEnvironment)})},
args: [],
source: "packages\x0a\x09^ Smalltalk current packages",
messageSends: ["packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'actions',
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.HLLocalEnvironment)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk current removeClass: aClass",
messageSends: ["removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._forsakeMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.HLLocalEnvironment)})},
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod methodClass forsakeMethod: aMethod",
messageSends: ["forsakeMethod:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
category: 'accessing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SystemAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLLocalEnvironment)})},
args: [],
source: "systemAnnouncer\x0a\x09^ SystemAnnouncer current",
messageSends: ["current"],
referencedClasses: ["SystemAnnouncer"]
}),
smalltalk.HLLocalEnvironment);



smalltalk.addClass('HLRemoteEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._notYetImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver},smalltalk.HLRemoteEnvironment)})},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09\x22Note for future self and friends:\x0a    whatever way this compilation happens on the other side, \x0a    it should return a proxy to the remote resulting object\x22\x0a    \x0a    self notYetImplemented",
messageSends: ["notYetImplemented"],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLRemoteEnvironment)})},
args: [],
source: "packages\x0a\x09\x22Answer the remote environment's packages\x22\x0a  \x0a\x09\x22to-do\x22\x0a    \x0a    \x22Note for future self and friends:\x0a    the problem with remote stuff is that the answers shouldn't be expected to be\x0a    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);



smalltalk.addClass('HLRemoteObject', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLRemoteObject.comment="This is a local proxy to a remote object.\x0aTipically useful for evaluating and inspecting and interacting with instances of a remote VM.\x0a"
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'actions',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.HLRemoteObject)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x0a\x09\x22to-do\x0a\x0a\x09aham, blah blah\x0a\x0a\x09super doesNotUnderstand: aMessage\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'actions',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},smalltalk.HLRemoteObject)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x0a\x09\x22to-do\x22\x0a\x0a\x09\x22this is a source of so much fun...\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "this is a remote object";
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.HLRemoteObject)})},
args: [],
source: "printString\x0a\x09^ 'this is a remote object'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);



smalltalk.addMethod(
smalltalk.method({
selector: "adoptMethod:",
category: '*Helios-Environments',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
return self}, function($ctx1) {$ctx1.fill(self,"adoptMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "adoptMethod: aMethod\x0a\x09self \x0a\x09\x09compile: aMethod source\x0a\x09\x09category: aMethod protocol.",
messageSends: ["compile:category:", "source", "protocol"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "forsakeMethod:",
category: '*Helios-Environments',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"forsakeMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "forsakeMethod: aMethod\x0a\x09self removeCompiledMethod: aMethod",
messageSends: ["removeCompiledMethod:"],
referencedClasses: []
}),
smalltalk.Behavior);

