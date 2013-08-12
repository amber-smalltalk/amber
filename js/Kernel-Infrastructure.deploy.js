(function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Infrastructure');

smalltalk.addClass('InspectorHandler', smalltalk.Object, [], 'Kernel-Infrastructure');

smalltalk.InspectorHandler.klass.iVarNames = ['inspector'];
smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._inspect_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.InspectorHandler.klass)})},
messageSends: ["inspect:", "inspector"]}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspector"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@inspector"]=$Transcript();
$1=self["@inspector"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspector",{},smalltalk.InspectorHandler.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspector"]=anInspector;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},smalltalk.InspectorHandler.klass)})},
messageSends: []}),
smalltalk.InspectorHandler.klass);


smalltalk.addClass('InterfacingObject', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
fn: function (anObject){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._ajax_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},smalltalk.InterfacingObject)})},
messageSends: ["ajax:"]}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._alert_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.InterfacingObject)})},
messageSends: ["alert:"]}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._confirm_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},smalltalk.InterfacingObject)})},
messageSends: ["confirm:"]}),
smalltalk.InterfacingObject);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._prompt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},smalltalk.InterfacingObject)})},
messageSends: ["prompt:"]}),
smalltalk.InterfacingObject);



smalltalk.addClass('Environment', smalltalk.InterfacingObject, [], 'Kernel-Infrastructure');
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
_st(self._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Environment)})},
messageSends: ["value", "at:", "current"]}),
smalltalk.Environment);

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
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.Environment)})},
messageSends: ["collect:", "name", "classes", "current"]}),
smalltalk.Environment);

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
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.Environment)})},
messageSends: ["collect:", "name", "packages", "current"]}),
smalltalk.Environment);

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
_st(protocols)._addAll_(self._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.Environment)})},
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"]}),
smalltalk.Environment);

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
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.Environment)})},
messageSends: ["new"]}),
smalltalk.Environment);

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
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.Environment)})},
messageSends: ["ifNil:", "error:", "at:", "asSymbol", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._classes();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Environment)})},
messageSends: ["classes", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.Environment)})},
messageSends: ["commit"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["comment:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
self._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.Environment)})},
messageSends: ["eval:on:", "new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(class_)._compile_category_(sourceCode,protocol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.Environment)})},
messageSends: ["compile:category:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "copyClass:named:", "new"]}),
smalltalk.Environment);

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
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler},smalltalk.Environment)})},
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:do:",
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
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},smalltalk.Environment)})},
messageSends: ["try:catch:", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:", "classNamed:", "name"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($InspectorHandler())._inspector())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Environment)})},
messageSends: ["inspect:", "inspector"]}),
smalltalk.Environment);

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
self._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(aClass)._package_(package_);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.Environment)})},
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"]}),
smalltalk.Environment);

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
self._error_("Invalid class name");
} else {
$1;
};
$2=_st(destinationClass).__eq_eq(_st(aMethod)._methodClass());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(destinationClass)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.Environment)})},
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "compile:category:", "source", "protocol", "removeCompiledMethod:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.Environment)})},
messageSends: ["category:"]}),
smalltalk.Environment);

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
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Environment)})},
messageSends: ["packages", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ErrorHandler())._setCurrent_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.Environment)})},
messageSends: ["setCurrent:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
fn: function (anInspector){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._register_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.Environment)})},
messageSends: ["register:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.Environment)})},
messageSends: ["setCurrent:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Environment)})},
messageSends: ["removeClass:", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.Environment)})},
messageSends: ["removeCompiledMethod:", "methodClass"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol:from:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._removeCompiledMethod_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["do:", "removeCompiledMethod:", "select:", "=", "protocol", "methods"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "renameClass:to:", "new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocol:to:in:",
fn: function (aString,anotherString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._protocol_(anotherString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["do:", "protocol:", "select:", "=", "protocol", "methods"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassCommentOf:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},smalltalk.Environment)})},
messageSends: ["comment:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("SystemAnnouncer"))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.Environment)})},
messageSends: ["current", "at:"]}),
smalltalk.Environment);



smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "addObjectVariablesTo:",
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:",{aDictionary:aDictionary},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject'][aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@jsObject'][aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._lookupProperty_(_st(_st(aMessage)._selector())._asJavaScriptSelector());
if(($receiver = $2) == nil || $receiver == undefined){
$1=smalltalk.JSObjectProxy.superclass.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
} else {
var jsSelector;
jsSelector=$receiver;
$1=self._forwardMessage_withArguments_(jsSelector,_st(aMessage)._arguments());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
messageSends: ["ifNil:ifNotNil:", "doesNotUnderstand:", "forwardMessage:withArguments:", "arguments", "lookupProperty:", "asJavaScriptSelector", "selector"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "forwardMessage:withArguments:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return smalltalk.send(self._jsObject(), aString, anArray);
	;
return self}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:",{aString:aString,anArray:anArray},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
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
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsObject"]=aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsObject:",{aJSObject:aJSObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupProperty:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aString in self._jsObject() ? aString : nil;
return self}, function($ctx1) {$ctx1.fill(self,"lookupProperty:",{aString:aString},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(self._jsObject())._toString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.JSObjectProxy)})},
messageSends: ["nextPutAll:", "toString", "jsObject"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_("value",(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.JSObjectProxy.superclass.fn.prototype._value.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.JSObjectProxy)})},
messageSends: ["at:ifAbsent:", "value"]}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["jsObject:", "new", "yourself"]}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.addElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicAt_("elements"))._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.Organizer)})},
messageSends: ["copy", "basicAt:"]}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.removeElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);



smalltalk.addClass('ClassOrganizer', smalltalk.Organizer, [], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (aString){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.ClassOrganizer.superclass.fn.prototype._addElement_.apply(_st(self), [aString]);
$1=_st($ProtocolAdded())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["addElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
fn: function (aString){
var self=this;
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.ClassOrganizer.superclass.fn.prototype._removeElement_.apply(_st(self), [aString]);
$1=_st($ProtocolRemoved())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["removeElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.theClass ;
return self}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassOrganizer)})},
messageSends: []}),
smalltalk.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', smalltalk.Organizer, [], 'Kernel-Infrastructure');


smalltalk.addClass('Package', smalltalk.Object, ['extension'], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._organization())._elements();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Package)})},
messageSends: ["elements", "organization"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencies",
fn: function (){
var self=this;
var classes,packages;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
classes=self._loadDependencyClasses();
$2=_st(_st(classes)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._package();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
_st($2)._remove_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages},smalltalk.Package)})},
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadDependencyClasses",
fn: function (){
var self=this;
var starCategoryName;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
starCategoryName="*".__comma(self._name());
$2=_st(_st(self._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._superclass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
_st($2)._remove_ifAbsent_(nil,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._addAll_(_st(_st(_st($Smalltalk())._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocols())._includes_(starCategoryName);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName},smalltalk.Package)})},
messageSends: [",", "name", "remove:ifAbsent:", "asSet", "collect:", "superclass", "classes", "addAll:", "select:", "includes:", "protocols", "current", "yourself"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pkgName;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.pkgName = aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Package)})},
messageSends: ["basicAt:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Package.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_(" (");
_st($1)._nextPutAll_(self._name());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Package)})},
messageSends: ["printOn:", "nextPutAll:", "name"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClasses",
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._classes();
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ClassBuilder())._new())._setupClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._initialize();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},smalltalk.Package)})},
messageSends: ["do:", "setupClass:", "new", "classes", "initialize"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._sortedClasses_(self._classes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},smalltalk.Package)})},
messageSends: ["sortedClasses:", "classes", "class"]}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "load:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deprecatedAPI();
self._load_prefix_(aPackageName,_st(self._defaultCommitPathJs()).__comma("/"));
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["deprecatedAPI", "load:prefix:", ",", "defaultCommitPathJs"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:prefix:",
fn: function (aPackageName,aPrefix){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
self._deprecatedAPI();
_st($PlatformInterface())._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt(_st(_st(aPrefix).__comma(aPackageName)).__comma(".js")),"dataType".__minus_gt("script"),"success".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Package())._named_(aPackageName))._setupClasses();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"load:prefix:",{aPackageName:aPackageName,aPrefix:aPrefix},smalltalk.Package.klass)})},
messageSends: ["deprecatedAPI", "ajax:", "->", ",", "setupClasses", "named:"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:",
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_(aPackageName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["packageAt:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:ifAbsent:",
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},smalltalk.Package.klass)})},
messageSends: ["packageAt:ifAbsent:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses:",
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return smalltalk.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
expandedClasses=_st($Array())._new();
_st(nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(expandedClasses);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
$2=expandedClasses;
return $2;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},smalltalk.Package.klass)})},
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"]}),
smalltalk.Package.klass);


smalltalk.addClass('PlatformInterface', smalltalk.Object, [], 'Kernel-Infrastructure');

smalltalk.PlatformInterface.klass.iVarNames = ['worker'];
smalltalk.addMethod(
smalltalk.method({
selector: "ajax:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("ajax: not available");
} else {
$1=_st(self["@worker"])._ajax_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ajax:",{anObject:anObject},smalltalk.PlatformInterface.klass)})},
messageSends: ["ifNotNil:ifNil:", "ajax:", "error:"]}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("alert: not available");
} else {
$1=_st(self["@worker"])._alert_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.PlatformInterface.klass)})},
messageSends: ["ifNotNil:ifNil:", "alert:", "error:"]}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("confirm: not available");
} else {
$1=_st(self["@worker"])._confirm_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString},smalltalk.PlatformInterface.klass)})},
messageSends: ["ifNotNil:ifNil:", "confirm:", "error:"]}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "existsGlobal:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var f = new Function('aString',
	'if (/^[0-9]/.test(aString) || !/^[\\w_]+$/.test(aString))\n'+
	'	return false;\n'+
	'try { eval(aString); return true; } catch (ex) {}\n'+
	'return false;');
	return f(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"existsGlobal:",{aString:aString},smalltalk.PlatformInterface.klass)})},
messageSends: []}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
var candidate;
function $BrowserInterface(){return smalltalk.BrowserInterface||(typeof BrowserInterface=="undefined"?nil:BrowserInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
smalltalk.PlatformInterface.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=$BrowserInterface();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
candidate=_st($BrowserInterface())._new();
candidate;
$2=_st(candidate)._isAvailable();
if(smalltalk.assert($2)){
self._setWorker_(candidate);
$3=self;
return $3;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{candidate:candidate},smalltalk.PlatformInterface.klass)})},
messageSends: ["initialize", "ifNotNil:", "new", "ifTrue:", "setWorker:", "isAvailable"]}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@worker"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("prompt: not available");
} else {
$1=_st(self["@worker"])._prompt_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString},smalltalk.PlatformInterface.klass)})},
messageSends: ["ifNotNil:ifNil:", "prompt:", "error:"]}),
smalltalk.PlatformInterface.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setWorker:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@worker"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setWorker:",{anObject:anObject},smalltalk.PlatformInterface.klass)})},
messageSends: []}),
smalltalk.PlatformInterface.klass);


smalltalk.addClass('ProgressHandler', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
fn: function (aBlock,aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.ProgressHandler)})},
messageSends: ["do:"]}),
smalltalk.ProgressHandler);


smalltalk.ProgressHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["register"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["setCurrent:", "new"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setCurrent:",
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ProgressHandler.klass)})},
messageSends: []}),
smalltalk.ProgressHandler.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Infrastructure');
smalltalk.addMethod(
smalltalk.method({
selector: "addGlobalJsVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: ["add:", "globalJsVariables"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "asSmalltalkException:",
fn: function (anObject){
var self=this;
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._isSmalltalkObject_(anObject))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anObject)._isKindOf_($Error());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st($JavaScriptException())._on_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: ["ifTrue:ifFalse:", "on:", "and:", "isKindOf:", "isSmalltalkObject:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "basicParse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.parser.parse(aString);
return self}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.classes();
return self}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.addPackage(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:properties:",
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
messageSends: ["deprecatedAPI", "ifFalse:", "error:", "isEmpty", "createPackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteGlobalJsVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: ["remove:ifAbsent:", "globalJsVariables"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deletePackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete smalltalk.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "globalJsVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.globalJsVariables;
return self}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof anObject.klass !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:ifAbsent:",
fn: function (packageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},smalltalk.Smalltalk)})},
messageSends: ["ifNil:", "packageAt:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages.all();
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=self._basicParse_(aString);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self._parseError_parsing_(ex,aString))._signal();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=result;
_st($2)._source_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},smalltalk.Smalltalk)})},
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parseError:parsing:",
fn: function (anException,aString){
var self=this;
function $ParseError(){return smalltalk.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ParseError())._new())._messageText_(_st(_st(_st(_st("Parse error on line ".__comma(_st(anException)._basicAt_("line"))).__comma(" column ")).__comma(_st(anException)._basicAt_("column"))).__comma(" : Unexpected character ")).__comma(_st(anException)._basicAt_("found")));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},smalltalk.Smalltalk)})},
messageSends: ["messageText:", ",", "basicAt:", "new"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "readJSObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.readJSObject(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
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
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "deleteClass:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage:",
fn: function (packageName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage:to:",
fn: function (packageName,newName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
var $1;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self._packageAt_(newName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
_st(self._basicAt_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "basicAt:", "name:", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "reservedWords",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.reservedWords;
return self}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0.11.0";
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk;
return self}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Smalltalk.klass)})},
messageSends: []}),
smalltalk.Smalltalk.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replace_with_("^([a-zA-Z0-9]*).*$","$1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{},smalltalk.String)})},
messageSends: ["replace:with:"]}),
smalltalk.String);

})(global_smalltalk,global_nil,global__st);
