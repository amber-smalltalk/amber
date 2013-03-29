smalltalk.addPackage('Helios-Environments');
smalltalk.addClass('HLEnvironment', smalltalk.Object, [], 'Helios-Environments');
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st(self)._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.HLEnvironment)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.HLEnvironment)})},
messageSends: ["comment:"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.HLEnvironment)})},
messageSends: ["eval:on:", "new"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(class_)._compile_category_(sourceCode,protocol);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.HLEnvironment)})},
messageSends: ["compile:category:"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
fn: function (aClass,aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
fn: function (aMethod,aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._sublcassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.HLEnvironment)})},
messageSends: ["sublcassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._sublcassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.HLEnvironment)})},
messageSends: ["sublcassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);



smalltalk.addClass('HLLocalEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
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
messageSends: ["collect:", "name", "classes", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
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
messageSends: ["collect:", "name", "packages", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
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
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ClassBuilder())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.HLLocalEnvironment)})},
messageSends: ["new"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
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
messageSends: ["ifNil:", "error:", "at:", "asSymbol", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.HLLocalEnvironment)})},
messageSends: ["commit"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
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
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
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
_st(aClass)._package_(package_);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.HLLocalEnvironment)})},
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
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
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "adoptMethod:", "forsakeMethod:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.HLLocalEnvironment)})},
messageSends: ["category:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLLocalEnvironment)})},
messageSends: ["packages", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.HLLocalEnvironment)})},
messageSends: ["removeClass:", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._forsakeMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.HLLocalEnvironment)})},
messageSends: ["forsakeMethod:", "methodClass"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SystemAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLLocalEnvironment)})},
messageSends: ["current"]}),
smalltalk.HLLocalEnvironment);



smalltalk.addClass('HLRemoteEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._notYetImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver},smalltalk.HLRemoteEnvironment)})},
messageSends: ["notYetImplemented"]}),
smalltalk.HLRemoteEnvironment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLRemoteEnvironment)})},
messageSends: []}),
smalltalk.HLRemoteEnvironment);



smalltalk.addClass('HLRemoteObject', smalltalk.Object, [], 'Helios-Environments');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.HLRemoteObject)})},
messageSends: []}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},smalltalk.HLRemoteObject)})},
messageSends: []}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "this is a remote object";
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.HLRemoteObject)})},
messageSends: []}),
smalltalk.HLRemoteObject);



smalltalk.addMethod(
smalltalk.method({
selector: "adoptMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
return self}, function($ctx1) {$ctx1.fill(self,"adoptMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: ["compile:category:", "source", "protocol"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "forsakeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"forsakeMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: ["removeCompiledMethod:"]}),
smalltalk.Behavior);

