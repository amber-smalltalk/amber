smalltalk.addPackage('Helios-Environments');
smalltalk.addClass('HLEnvironment', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLEnvironment.comment="Abstract class defining common behavior for local and remote environments"
smalltalk.addMethod(
"_addInstVarNamed_to_",
smalltalk.method({
selector: "addInstVarNamed:to:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st(self)._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass}, smalltalk.HLEnvironment)})},
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_availableClassNames",
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLEnvironment)})},
args: [],
source: "availableClassNames\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_availableProtocolsFor_",
smalltalk.method({
selector: "availableProtocolsFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass},smalltalk.HLEnvironment)})},
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_classBuilder",
smalltalk.method({
selector: "classBuilder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{}, smalltalk.HLEnvironment)})},
args: [],
source: "classBuilder\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileClassComment_for_",
smalltalk.method({
selector: "compileClassComment:for:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass}, smalltalk.HLEnvironment)})},
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileClassDefinition_",
smalltalk.method({
selector: "compileClassDefinition:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._eval_on_(aString,_st((smalltalk.DoIt || DoIt))._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString}, smalltalk.HLEnvironment)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self eval: aString on: DoIt new",
messageSends: ["eval:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileMethod_for_protocol_",
smalltalk.method({
selector: "compileMethod:for:protocol:",
category: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(class_)._compile_category_(sourceCode,protocol);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol}, smalltalk.HLEnvironment)})},
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09class\x0a\x09\x09compile: sourceCode\x0a\x09\x09category: protocol",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver}, smalltalk.HLEnvironment)})},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_moveMethod_toClass_",
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName},smalltalk.HLEnvironment)})},
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLEnvironment)})},
args: [],
source: "packages\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);



smalltalk.addClass('HLLocalEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_availableClassNames",
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._name();
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
"_availableProtocolsFor_",
smalltalk.method({
selector: "availableProtocolsFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
var protocols;
return smalltalk.withContext(function($ctx1) { var $1,$2;
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
"_classBuilder",
smalltalk.method({
selector: "classBuilder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.ClassBuilder || ClassBuilder))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{}, smalltalk.HLLocalEnvironment)})},
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (aString,aReceiver){
var self=this;
var compiler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
compiler=_st((smalltalk.Compiler || Compiler))._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler}, smalltalk.HLLocalEnvironment)})},
args: ["aString", "aReceiver"],
source: "eval: aString on: aReceiver\x0a\x09| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex |\x0a\x09\x09^ window alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString on: aReceiver",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_moveMethod_toClass_",
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
destinationClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aClassName)._asSymbol());
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
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLLocalEnvironment)})},
args: [],
source: "packages\x0a\x09^ Smalltalk current packages",
messageSends: ["packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);



smalltalk.addClass('HLRemoteEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._notYetImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver}, smalltalk.HLRemoteEnvironment)})},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09\x22Note for future self and friends:\x0a    whatever way this compilation happens on the other side, \x0a    it should return a proxy to the remote resulting object\x22\x0a    \x0a    self notYetImplemented",
messageSends: ["notYetImplemented"],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLRemoteEnvironment)})},
args: [],
source: "packages\x0a\x09\x22Answer the remote environment's packages\x22\x0a  \x0a\x09\x22to-do\x22\x0a    \x0a    \x22Note for future self and friends:\x0a    the problem with remote stuff is that the answers shouldn't be expected to be\x0a    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);



smalltalk.addClass('HLRemoteObject', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLRemoteObject.comment="This is a local proxy to a remote object.\x0aTipically useful for evaluating and inspecting and interacting with instances of a remote VM.\x0a"
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'actions',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage}, smalltalk.HLRemoteObject)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x0a\x09\x22to-do\x0a\x0a\x09aham, blah blah\x0a\x0a\x09super doesNotUnderstand: aMessage\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: 'actions',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector}, smalltalk.HLRemoteObject)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x0a\x09\x22to-do\x22\x0a\x0a\x09\x22this is a source of so much fun...\x22\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "this is a remote object";
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.HLRemoteObject)})},
args: [],
source: "printString\x0a\x09^ 'this is a remote object'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);



smalltalk.addMethod(
"_adoptMethod_",
smalltalk.method({
selector: "adoptMethod:",
category: '*Helios-Environments',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
return self}, function($ctx1) {$ctx1.fill(self,"adoptMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "adoptMethod: aMethod\x0a\x09self \x0a\x09\x09compile: aMethod source\x0a\x09\x09category: aMethod protocol.",
messageSends: ["compile:category:", "source", "protocol"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_forsakeMethod_",
smalltalk.method({
selector: "forsakeMethod:",
category: '*Helios-Environments',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"forsakeMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "forsakeMethod: aMethod\x0a\x09self removeCompiledMethod: aMethod",
messageSends: ["removeCompiledMethod:"],
referencedClasses: []
}),
smalltalk.Behavior);

