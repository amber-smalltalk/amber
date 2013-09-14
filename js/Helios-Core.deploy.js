smalltalk.addPackage('Helios-Core');
smalltalk.addClass('HLModel', smalltalk.Object, ['announcer', 'environment'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._manager())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLModel)})},
messageSends: ["ifNil:", "environment", "manager"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLModel)})},
messageSends: []}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBrowserModel",{},smalltalk.HLModel)})},
messageSends: []}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferencesModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isReferencesModel",{},smalltalk.HLModel)})},
messageSends: []}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isToolModel",{},smalltalk.HLModel)})},
messageSends: []}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLModel)})},
messageSends: ["current"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._systemAnnouncer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLModel)})},
messageSends: ["systemAnnouncer", "environment"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withChangesDo:",
fn: function (aBlock){
var self=this;
function $HLChangeForbidden(){return smalltalk.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
function $HLAboutToChange(){return smalltalk.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._announcer())._announce_(_st(_st($HLAboutToChange())._new())._actionBlock_(aBlock));
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($HLChangeForbidden(),(function(ex){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withChangesDo:",{aBlock:aBlock},smalltalk.HLModel)})},
messageSends: ["on:do:", "announce:", "actionBlock:", "new", "announcer", "value"]}),
smalltalk.HLModel);



smalltalk.addClass('HLToolModel', smalltalk.HLModel, ['selectedClass', 'selectedPackage', 'selectedProtocol', 'selectedSelector'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:",
fn: function (aString){
var self=this;
function $HLInstVarAdded(){return smalltalk.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._environment())._addInstVarNamed_to_(aString,self._selectedClass());
$1=_st($HLInstVarAdded())._new();
_st($1)._theClass_(self._selectedClass());
_st($1)._variableName_(aString);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["addInstVarNamed:to:", "selectedClass", "environment", "announce:", "theClass:", "new", "variableName:", "yourself", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "-- all --";
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._allSelectors();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.HLToolModel)})},
messageSends: ["allSelectors", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLToolModel)})},
messageSends: ["availableClassNames", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.HLToolModel)})},
messageSends: ["availablePackageNames", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackages",{},smalltalk.HLToolModel)})},
messageSends: ["availablePackageNames", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocols",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableProtocolsFor_(self._selectedClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableProtocols",{},smalltalk.HLToolModel)})},
messageSends: ["availableProtocolsFor:", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._commitPackage_(self._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLToolModel)})},
messageSends: ["commitPackage:", "selectedPackage", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compilationProtocol",
fn: function (){
var self=this;
var currentProtocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
currentProtocol=self._selectedProtocol();
$1=currentProtocol;
if(($receiver = $1) == nil || $receiver == undefined){
currentProtocol=self._unclassifiedProtocol();
currentProtocol;
} else {
$1;
};
$2=self._selectedMethod();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
currentProtocol=_st(self._selectedMethod())._protocol();
currentProtocol;
};
$4=_st(currentProtocol).__eq(self._allProtocol());
if(smalltalk.assert($4)){
$3=self._unclassifiedProtocol();
} else {
$3=currentProtocol;
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"compilationProtocol",{currentProtocol:currentProtocol},smalltalk.HLToolModel)})},
messageSends: ["selectedProtocol", "ifNil:", "unclassifiedProtocol", "ifNotNil:", "protocol", "selectedMethod", "ifTrue:ifFalse:", "=", "allProtocol"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassComment_for_(aString,self._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["compileClassComment:for:", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassDefinition_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["compileClassDefinition:", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
fn: function (aString){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
self._withCompileErrorHandling_((function(){
return smalltalk.withContext(function($ctx2) {
method=_st(self._environment())._compileMethod_for_protocol_(aString,self._selectedClass(),self._compilationProtocol());
method;
return self._selectedMethod_(method);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString,method:method},smalltalk.HLToolModel)})},
messageSends: ["withCompileErrorHandling:", "compileMethod:for:protocol:", "selectedClass", "compilationProtocol", "environment", "selectedMethod:"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClassTo:",
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._copyClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"copyClassTo:",{aClassName:aClassName},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "copyClass:to:", "theNonMetaClass", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleCompileError:",
fn: function (anError){
var self=this;
function $HLCompileErrorRaised(){return smalltalk.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLCompileErrorRaised())._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleCompileError:",{anError:anError},smalltalk.HLToolModel)})},
messageSends: ["announce:", "error:", "new", "yourself", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleParseError:",
fn: function (anError){
var self=this;
var split,line,column,messageToInsert;
function $HLParseErrorRaised(){return smalltalk.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
split=_st(_st(anError)._messageText())._tokenize_(" : ");
messageToInsert=_st(split)._second();
split=_st(_st(split)._first())._copyFrom_to_((21),_st(_st(split)._first())._size());
split=_st(split)._tokenize_(" column ");
line=_st(split)._first();
column=_st(split)._second();
$1=_st($HLParseErrorRaised())._new();
_st($1)._line_(_st(line)._asNumber());
_st($1)._column_(_st(column)._asNumber());
_st($1)._message_(messageToInsert);
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleParseError:",{anError:anError,split:split,line:line,column:column,messageToInsert:messageToInsert},smalltalk.HLToolModel)})},
messageSends: ["tokenize:", "messageText", "second", "copyFrom:to:", "size", "first", "announce:", "line:", "asNumber", "new", "column:", "message:", "error:", "yourself", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleUnkownVariableError:",
fn: function (anError){
var self=this;
function $HLUnknownVariableErrorRaised(){return smalltalk.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLUnknownVariableErrorRaised())._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleUnkownVariableError:",{anError:anError},smalltalk.HLToolModel)})},
messageSends: ["announce:", "error:", "new", "yourself", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isToolModel",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClassToPackage:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveClass_toPackage_(_st(self._selectedClass())._theNonMetaClass(),aPackageName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveClassToPackage:",{aPackageName:aPackageName},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "moveClass:toPackage:", "theNonMetaClass", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToClass:",
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toClass_(self._selectedMethod(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToClass:",{aClassName:aClassName},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "moveMethod:toClass:", "selectedMethod", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToProtocol:",
fn: function (aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toProtocol_(self._selectedMethod(),aProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToProtocol:",{aProtocol:aProtocol},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "moveMethod:toProtocol:", "selectedMethod", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "openClassNamed:",
fn: function (aString){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
class_=_st(self._environment())._classNamed_(aString);
class_;
self._selectedPackage_(_st(class_)._package());
return self._selectedClass_(class_);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,class_:class_},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "classNamed:", "environment", "selectedPackage:", "package", "selectedClass:"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLToolModel)})},
messageSends: ["packages", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._manager())._confirm_ifTrue_("Do you REALLY want to remove class ".__comma(_st(self._selectedClass())._name()),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeClass_(self._selectedClass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeClass",{},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "name", "selectedClass", "removeClass:", "environment", "manager"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._manager())._confirm_ifTrue_(_st(_st("Do you REALLY want to remove method ".__comma(_st(_st(self._selectedMethod())._methodClass())._name())).__comma(" >> #")).__comma(_st(self._selectedMethod())._selector()),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeMethod_(self._selectedMethod());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "selector", "selectedMethod", "name", "methodClass", "removeMethod:", "environment", "manager"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._manager())._confirm_ifTrue_("Do you REALLY want to remove protocol ".__comma(self._selectedProtocol()),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeProtocol_from_(self._selectedProtocol(),self._selectedClass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol",{},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "selectedProtocol", "removeProtocol:from:", "selectedClass", "environment", "manager"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClassTo:",
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameClassTo:",{aClassName:aClassName},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "renameClass:to:", "theNonMetaClass", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocolTo:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameProtocol_to_in_(self._selectedProtocol(),aString,self._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocolTo:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["withChangesDo:", "renameProtocol:to:in:", "selectedProtocol", "selectedClass", "environment"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "save:",
fn: function (aString){
var self=this;
function $HLSourceCodeSaved(){return smalltalk.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._announcer())._announce_(_st($HLSourceCodeSaved())._new());
$1=self._shouldCompileClassDefinition_(aString);
if(smalltalk.assert($1)){
self._compileClassDefinition_(aString);
} else {
self._compileMethod_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"save:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["announce:", "new", "announcer", "ifTrue:ifFalse:", "compileClassDefinition:", "compileMethod:", "shouldCompileClassDefinition:"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "saveSourceCode",
fn: function (){
var self=this;
function $HLSaveSourceCode(){return smalltalk.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLSaveSourceCode())._new());
return self}, function($ctx1) {$ctx1.fill(self,"saveSourceCode",{},smalltalk.HLToolModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass:",
fn: function (aClass){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(self._selectedClass()).__eq(aClass))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(self["@selectedClass"]).__eq(aClass);
if(smalltalk.assert($3)){
self._selectedProtocol_(nil);
};
$4=aClass;
if(($receiver = $4) == nil || $receiver == undefined){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
self._selectedPackage_(_st(_st(aClass)._theNonMetaClass())._package());
$5=self._showInstance();
if(smalltalk.assert($5)){
self["@selectedClass"]=_st(aClass)._theNonMetaClass();
self["@selectedClass"];
} else {
self["@selectedClass"]=_st(aClass)._theMetaClass();
self["@selectedClass"];
};
};
self._selectedProtocol_(nil);
return _st(self._announcer())._announce_(_st($HLClassSelected())._on_(self._selectedClass()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass},smalltalk.HLToolModel)})},
messageSends: ["ifTrue:", "and:", "isNil", "=", "selectedClass", "withChangesDo:", "selectedProtocol:", "ifNil:ifNotNil:", "selectedPackage:", "package", "theNonMetaClass", "ifTrue:ifFalse:", "theMetaClass", "showInstance", "announce:", "on:", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._selectedClass();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(self._selectedClass())._methodDictionary())._at_ifAbsent_(self["@selectedSelector"],(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{},smalltalk.HLToolModel)})},
messageSends: ["ifNotNil:", "at:ifAbsent:", "methodDictionary", "selectedClass"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod:",
fn: function (aCompiledMethod){
var self=this;
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@selectedSelector"]).__eq(aCompiledMethod);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$3=aCompiledMethod;
if(($receiver = $3) == nil || $receiver == undefined){
self["@selectedSelector"]=nil;
self["@selectedSelector"];
} else {
self["@selectedClass"]=_st(aCompiledMethod)._methodClass();
self["@selectedClass"];
self["@selectedPackage"]=_st(_st(self["@selectedClass"])._theNonMetaClass())._package();
self["@selectedPackage"];
self["@selectedSelector"]=_st(aCompiledMethod)._selector();
self["@selectedSelector"];
};
return _st(self._announcer())._announce_(_st($HLMethodSelected())._on_(aCompiledMethod));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod},smalltalk.HLToolModel)})},
messageSends: ["ifTrue:", "=", "withChangesDo:", "ifNil:ifNotNil:", "methodClass", "package", "theNonMetaClass", "selector", "announce:", "on:", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage:",
fn: function (aPackage){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@selectedPackage"]).__eq(aPackage);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@selectedPackage"]=aPackage;
self["@selectedPackage"];
self._selectedClass_(nil);
return _st(self._announcer())._announce_(_st($HLPackageSelected())._on_(aPackage));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedPackage:",{aPackage:aPackage},smalltalk.HLToolModel)})},
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedClass:", "announce:", "on:", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedProtocol",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol:",
fn: function (aString){
var self=this;
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@selectedProtocol"]).__eq(aString);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self._selectedMethod_(nil);
return _st(self._announcer())._announce_(_st($HLProtocolSelected())._on_(aString));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedProtocol:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedMethod:", "announce:", "on:", "announcer"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldCompileClassDefinition:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._selectedClass())._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aString)._match_("^[A-Z]");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldCompileClassDefinition:",{aString:aString},smalltalk.HLToolModel)})},
messageSends: ["or:", "match:", "isNil", "selectedClass"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unclassifiedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"unclassifiedProtocol",{},smalltalk.HLToolModel)})},
messageSends: []}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withCompileErrorHandling:",
fn: function (aBlock){
var self=this;
function $ParseError(){return smalltalk.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
function $UnknownVariableError(){return smalltalk.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
function $CompilerError(){return smalltalk.CompilerError||(typeof CompilerError=="undefined"?nil:CompilerError)}
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._evaluate_on_do_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._evaluate_on_do_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._evaluate_on_do_(aBlock,$ParseError(),(function(ex){
return smalltalk.withContext(function($ctx4) {
return self._handleParseError_(ex);
}, function($ctx4) {$ctx4.fillBlock({ex:ex},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),$UnknownVariableError(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return self._handleUnkownVariableError_(ex);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$CompilerError(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return self._handleCompileError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withCompileErrorHandling:",{aBlock:aBlock},smalltalk.HLToolModel)})},
messageSends: ["evaluate:on:do:", "handleParseError:", "environment", "handleUnkownVariableError:", "handleCompileError:"]}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withHelperLabelled:do:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(window)._jQuery_("#helper"))._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._id_("helper");
$2=_st($1)._with_(aString);
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_("body"._asJQuery());
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
return _st(_st(window)._jQuery_("#helper"))._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"withHelperLabelled:do:",{aString:aString,aBlock:aBlock},smalltalk.HLToolModel)})},
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery", "id:", "div", "with:", "valueWithTimeout:", "value"]}),
smalltalk.HLToolModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLToolModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLToolModel.klass);


smalltalk.addClass('HLProgressHandler', smalltalk.ProgressHandler, [], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
fn: function (aBlock,aCollection,aString){
var self=this;
function $HLProgressWidget(){return smalltalk.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLProgressWidget())._default())._do_on_displaying_(aBlock,aCollection,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.HLProgressHandler)})},
messageSends: ["do:on:displaying:", "default"]}),
smalltalk.HLProgressHandler);



smalltalk.addClass('HLTabWidget', smalltalk.Widget, ['widget', 'label', 'root'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLTabWidget)})},
messageSends: ["activate:", "manager"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "add",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._addTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.HLTabWidget)})},
messageSends: ["addTab:", "manager"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._widget())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLTabWidget)})},
messageSends: ["tabClass", "widget"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._label())._size()).__gt((20));
if(smalltalk.assert($2)){
$1=_st(_st(self._label())._first_((20))).__comma("...");
} else {
$1=self._label();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLTabWidget)})},
messageSends: ["ifTrue:ifFalse:", ",", "first:", "label", ">", "size"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._widget())._canHaveFocus();
if(smalltalk.assert($1)){
_st(self._widget())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLTabWidget)})},
messageSends: ["ifTrue:", "focus", "widget", "canHaveFocus"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","hidden");
};
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLTabWidget)})},
messageSends: ["ifNotNil:", "css:put:", "asJQuery"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLTabWidget)})},
messageSends: ["=", "activeTab", "manager"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLTabWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLTabWidget)})},
messageSends: []}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLTabWidget)})},
messageSends: ["current"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._registerBindings();
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLTabWidget)})},
messageSends: ["registerBindings", "widget"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._widget())._unregister();
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLTabWidget)})},
messageSends: ["unregister", "widget", "ifNotNil:", "remove", "asJQuery"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("tab");
$2=_st($1)._yourself();
self["@root"]=$2;
self._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLTabWidget)})},
messageSends: ["class:", "div", "yourself", "renderTab"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@root"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._widget())._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},smalltalk.HLTabWidget)})},
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
self._appendToJQuery_("body"._asJQuery());
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","visible");
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLTabWidget)})},
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "css:put:"]}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLTabWidget)})},
messageSends: []}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLTabWidget)})},
messageSends: []}),
smalltalk.HLTabWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
fn: function (aWidget,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._widget_(aWidget);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString},smalltalk.HLTabWidget.klass)})},
messageSends: ["widget:", "new", "label:", "yourself"]}),
smalltalk.HLTabWidget.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.HLWidget)})},
messageSends: ["alert:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "bindKeyDown:up:",
fn: function (keyDownBlock,keyUpBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._keydown_(keyDownBlock);
$2=_st($1)._keyup_(keyUpBlock);
return self}, function($ctx1) {$ctx1.fill(self,"bindKeyDown:up:",{keyDownBlock:keyDownBlock,keyUpBlock:keyUpBlock},smalltalk.HLWidget)})},
messageSends: ["keydown:", "asJQuery", "wrapper", "keyup:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._confirm_ifTrue_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},smalltalk.HLWidget)})},
messageSends: ["confirm:ifTrue:", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
fn: function (aCommand){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($HLManager())._current())._keyBinder();
_st($1)._activate();
$2=_st($1)._applyBinding_(_st(aCommand)._asBinding());
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aCommand:aCommand},smalltalk.HLWidget)})},
messageSends: ["activate", "keyBinder", "current", "applyBinding:", "asBinding"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLWidget)})},
messageSends: ["current"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
fn: function (){
var self=this;
function $HLTabWidget(){return smalltalk.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTabWidget())._on_labelled_(self,_st(self._class())._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},smalltalk.HLWidget)})},
messageSends: ["addTab:", "on:labelled:", "tabLabel", "class", "current"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._wrapper();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(self._wrapper())._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(self._wrapper())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLWidget)})},
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._registerBindingsOn_(_st(_st(self._manager())._keyBinder())._bindings());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLWidget)})},
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=_st(html)._div();
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(renderer);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLWidget)})},
messageSends: ["div", "appendToJQuery:", "asJQuery", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_do_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},smalltalk.HLWidget)})},
messageSends: ["request:do:", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
fn: function (aString,valueString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_value_do_(aString,valueString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},smalltalk.HLWidget)})},
messageSends: ["request:value:do:", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWidget)})},
messageSends: ["tabClass", "class"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeyDownUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._unbind_("keydown");
$2=_st($1)._unbind_("keyup");
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeyDownUp",{},smalltalk.HLWidget)})},
messageSends: ["unbind:", "asJQuery", "wrapper"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
fn: function (){
var self=this;
function $HLTabWidget(){return smalltalk.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTabWidget())._on_labelled_(self._new(),self._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},smalltalk.HLWidget.klass)})},
messageSends: ["addTab:", "on:labelled:", "new", "tabLabel", "current"]}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Tab";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (500);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, [], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "blur",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"blur",{},smalltalk.HLFocusableWidget)})},
messageSends: ["blur", "asJQuery", "wrapper"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLFocusableWidget)})},
messageSends: ["focus", "asJQuery", "wrapper"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "focused";
}, function($ctx1) {$ctx1.fill(self,"focusClass",{},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._wrapper())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._wrapper())._asJQuery())._hasClass_(self._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},smalltalk.HLFocusableWidget)})},
messageSends: ["and:", "hasClass:", "focusClass", "asJQuery", "wrapper", "notNil"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._div();
_st($1)._class_("hl_widget");
$2=_st($1)._yourself();
self["@wrapper"]=$2;
_st(self["@wrapper"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=self["@wrapper"];
_st($3)._at_put_("tabindex","0");
_st($3)._onBlur_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._wrapper())._asJQuery())._removeClass_(self._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._wrapper())._asJQuery())._addClass_(self._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLFocusableWidget)})},
messageSends: ["class:", "div", "yourself", "with:", "renderContentOn:", "at:put:", "onBlur:", "removeClass:", "focusClass", "asJQuery", "wrapper", "onFocus:", "addClass:"]}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem', 'mapping'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFirstListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(window)._jQuery_(_st(_st(_st(self["@wrapper"])._asJQuery())._find_("li.inactive"))._get_((0))));
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "jQuery:", "get:", "find:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._activateListItem_(_st(_st(self["@mapping"])._at_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._asJQuery());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "asJQuery", "at:ifAbsent:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(_st(aListItem)._parent())._children())._removeClass_("active");
_st(aListItem)._addClass_("active");
self._ensureVisible_(aListItem);
item=_st(self._items())._at_(_st(_st(aListItem)._attr_("list-data"))._asNumber());
$3=_st(self._selectedItem()).__eq_eq(item);
if(! smalltalk.assert($3)){
self._selectItem_(item);
};
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "addClass:", "ensureVisible:", "at:", "asNumber", "attr:", "items", "ifFalse:", "selectItem:", "==", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self._wrapper())._asJQuery())._find_("li.active"))._next());
_st(_st(_st(_st(self._wrapper())._asJQuery())._find_(" .active"))._get())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._activateFirstListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "next", "find:", "asJQuery", "wrapper", "ifEmpty:", "activateFirstListItem", "get"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self._wrapper())._asJQuery())._find_("li.active"))._prev());
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "prev", "find:", "asJQuery", "wrapper"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
fn: function (aListItem){
var self=this;
var perent,position;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
position=self._positionOf_(aListItem);
parent=_st(aListItem)._parent();
$1=_st(_st(_st(aListItem)._position())._top()).__lt((0));
if(smalltalk.assert($1)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(_st(aListItem)._position())._top())).__minus((10)));
};
$2=_st(_st(_st(_st(aListItem)._position())._top()).__plus(_st(aListItem)._height())).__gt(_st(parent)._height());
if(smalltalk.assert($2)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(aListItem)._height())).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()))).__plus((10)));
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,perent:perent,position:position},smalltalk.HLListWidget)})},
messageSends: ["positionOf:", "parent", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "get:", "<", "height", ">"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLListWidget.superclass.fn.prototype._focus.apply(_st(self), []);
$1=_st(self._items())._isEmpty();
if(! smalltalk.assert($1)){
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
self._activateFirstListItem();
} else {
$2;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLListWidget)})},
messageSends: ["focus", "ifFalse:", "ifNil:", "activateFirstListItem", "selectedItem", "isEmpty", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLListWidget.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@mapping"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLListWidget)})},
messageSends: ["initialize", "new"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=self._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "defaultItems"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"items:",{aCollection:aCollection},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "listCssClassForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._selectedItem()).__eq(anObject);
if(smalltalk.assert($2)){
$1="active";
} else {
$1="inactive";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"listCssClassForItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
smalltalk.HLListWidget.superclass.fn.prototype._refresh.apply(_st(self), []);
self._ensureVisible_(_st(_st(self["@mapping"])._at_ifAbsent_(self._selectedItem(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._asJQuery());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLListWidget)})},
messageSends: ["refresh", "ensureVisible:", "asJQuery", "at:ifAbsent:", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerMappingFrom:to:",
fn: function (anObject,aTag){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@mapping"])._at_put_(anObject,aTag);
return self}, function($ctx1) {$ctx1.fill(self,"registerMappingFrom:to:",{anObject:anObject,aTag:aTag},smalltalk.HLListWidget)})},
messageSends: ["at:put:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderListOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._div();
_st($3)._class_("pane_actions form-actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
li=_st(html)._li();
self._registerMappingFrom_to_(anObject,li);
$1=li;
_st($1)._at_put_("list-data",_st(_st(self._items())._indexOf_(anObject))._asString());
_st($1)._class_(self._listCssClassForItem_(anObject));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(self._cssClassForItem_(anObject));
return self._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},smalltalk.HLListWidget)})},
messageSends: ["li", "registerMappingFrom:to:", "at:put:", "asString", "indexOf:", "items", "class:", "listCssClassForItem:", "with:", "cssClassForItem:", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(anObject)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},smalltalk.HLListWidget)})},
messageSends: ["with:", "asString"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
fn: function (html){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@mapping"]=_st($Dictionary())._new();
_st(self._items())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: ["new", "do:", "renderItem:on:", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["selectedItem:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedItem"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
function $HLRepeatingKeyBindingHandler(){return smalltalk.HLRepeatingKeyBindingHandler||(typeof HLRepeatingKeyBindingHandler=="undefined"?nil:HLRepeatingKeyBindingHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLRepeatingKeyBindingHandler())._forWidget_(self);
_st($1)._whileKeyPressed_do_((38),(function(){
return smalltalk.withContext(function($ctx2) {
return self._activatePreviousListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($1)._whileKeyPressed_do_((40),(function(){
return smalltalk.withContext(function($ctx2) {
return self._activateNextListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._rebindKeys();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},smalltalk.HLListWidget)})},
messageSends: ["whileKeyPressed:do:", "activatePreviousListItem", "forWidget:", "activateNextListItem", "rebindKeys"]}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@next"]=aWidget;
$1=_st(_st(aWidget)._previous()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._previous_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "previous:", "=", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._next();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._next())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFocus",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@previous"]=aWidget;
$1=_st(_st(aWidget)._next()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._next_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "next:", "=", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._previous();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._previous())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"previousFocus",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLNavigationListWidget.superclass.fn.prototype._setupKeyBindings.apply(_st(self), []);
_st(_st(self._wrapper())._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._which()).__eq((39));
if(smalltalk.assert($1)){
self._nextFocus();
};
$2=_st(_st(e)._which()).__eq((37));
if(smalltalk.assert($2)){
return self._previousFocus();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery", "wrapper"]}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLToolListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activateListItem_.apply(_st(self), [anItem]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},smalltalk.HLToolListWidget)})},
messageSends: ["withChangesDo:", "activateListItem:", "model"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activateNextListItem.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},smalltalk.HLToolListWidget)})},
messageSends: ["withChangesDo:", "activateNextListItem", "model"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activatePreviousListItem.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},smalltalk.HLToolListWidget)})},
messageSends: ["withChangesDo:", "activatePreviousListItem", "model"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "commandCategory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandCategory",{},smalltalk.HLToolListWidget)})},
messageSends: ["label"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "List";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToolListWidget)})},
messageSends: []}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "menuCommands",
fn: function (){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st($HLToolCommand())._concreteClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isValidFor_(self._model());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._for_(self._model());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._category()).__eq(self._commandCategory()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._isAction())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(each)._isActive();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuCommands",{},smalltalk.HLToolListWidget)})},
messageSends: ["select:", "and:", "isActive", "isAction", "=", "commandCategory", "category", "collect:", "for:", "model", "isValidFor:", "concreteClasses"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLToolListWidget)})},
messageSends: []}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@model"]=aBrowserModel;
$1=self;
_st($1)._observeSystem();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel},smalltalk.HLToolListWidget)})},
messageSends: ["observeSystem", "observeModel"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLToolListWidget)})},
messageSends: []}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLToolListWidget)})},
messageSends: []}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeadOn_(html);
smalltalk.HLToolListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLToolListWidget)})},
messageSends: ["renderHeadOn:", "renderContentOn:"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-label");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(self._label());
return self._renderMenuOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLToolListWidget)})},
messageSends: ["class:", "div", "with:", "label", "renderMenuOn:"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuOn:",
fn: function (html){
var self=this;
var commands;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$9,$10,$8,$4;
commands=self._menuCommands();
$1=_st(commands)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(html)._div();
_st($3)._class_("btn-group cog");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._a();
_st($5)._class_("btn dropdown-toggle");
_st($5)._at_put_("data-toggle","dropdown");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tag_("i"))._class_("icon-cog");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6;
$7=_st(html)._ul();
_st($7)._class_("dropdown-menu pull-right");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._menuCommands())._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$9=_st(html)._a();
_st($9)._with_(_st(each)._menuLabel());
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return self._execute_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5)})}));
return $10;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html,commands:commands},smalltalk.HLToolListWidget)})},
messageSends: ["menuCommands", "ifTrue:", "isEmpty", "class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "menuLabel", "onClick:", "execute:", "li"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLToolListWidget.superclass.fn.prototype._selectedItem_.apply(_st(self), [anItem]);
self._updateMenu();
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},smalltalk.HLToolListWidget)})},
messageSends: ["selectedItem:", "updateMenu"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLToolListWidget.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(_st(self._model())._announcer())._unsubscribe_(self);
_st(_st(self._model())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLToolListWidget)})},
messageSends: ["unregister", "unsubscribe:", "announcer", "model", "systemAnnouncer"]}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMenu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self._wrapper())._asJQuery())._find_(".cog"))._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderMenuOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".list-label"));
return self}, function($ctx1) {$ctx1.fill(self,"updateMenu",{},smalltalk.HLToolListWidget)})},
messageSends: ["remove", "find:", "asJQuery", "wrapper", "appendToJQuery:", "renderMenuOn:"]}),
smalltalk.HLToolListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},smalltalk.HLToolListWidget.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLToolListWidget.klass);


smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment', 'history'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._keyBinder())._flushBindings();
_st(aTab)._registerBindings();
self["@activeTab"]=aTab;
$1=self;
_st($1)._refresh();
_st($1)._addToHistory_(aTab);
$2=_st($1)._show_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["flushBindings", "keyBinder", "registerBindings", "refresh", "addToHistory:", "show:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "activeTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeTab"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabs())._add_(aTab);
self._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["add:", "tabs", "activate:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addToHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeFromHistory_(aTab);
_st(self._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["removeFromHistory:", "add:", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifFalse:",
fn: function (aString,aBlock){
var self=this;
function $HLConfirmationWidget(){return smalltalk.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmationWidget())._new();
_st($1)._confirmationString_(aString);
_st($1)._cancelBlock_(aBlock);
$2=_st($1)._yourself();
_st($2)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifFalse:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "cancelBlock:", "yourself"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
fn: function (aString,aBlock){
var self=this;
function $HLConfirmationWidget(){return smalltalk.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmationWidget())._new();
_st($1)._confirmationString_(aString);
_st($1)._actionBlock_(aBlock);
$2=_st($1)._yourself();
_st($2)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "actionBlock:", "yourself"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultEnvironment",
fn: function (){
var self=this;
var parent;
function $Environment(){return smalltalk.Environment||(typeof Environment=="undefined"?nil:Environment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(window)._opener();
if(($receiver = $1) == nil || $receiver == undefined){
parent=_st(window)._parent();
} else {
parent=$1;
};
$2=parent;
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($Environment())._new();
return $3;
} else {
$2;
};
$4=_st(_st(_st(parent)._at_("smalltalk"))._at_("Environment"))._new();
return $4;
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{parent:parent},smalltalk.HLManager)})},
messageSends: ["ifNil:", "parent", "opener", "new", "at:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@environment"]=self._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "defaultEnvironment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@history"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@history"]=_st($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@history"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{aCollection:aCollection},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $HLErrorHandler(){return smalltalk.HLErrorHandler||(typeof HLErrorHandler=="undefined"?nil:HLErrorHandler)}
function $HLProgressHandler(){return smalltalk.HLProgressHandler||(typeof HLProgressHandler=="undefined"?nil:HLProgressHandler)}
function $HLInspector(){return smalltalk.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLManager.superclass.fn.prototype._initialize.apply(_st(self), []);
_st($HLErrorHandler())._register();
_st($HLProgressHandler())._register();
self._registerInspector_($HLInspector());
self._registerErrorHandler_(_st($ErrorHandler())._current());
self._registerProgressHandler_(_st($ProgressHandler())._current());
_st(self._keyBinder())._setupEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLManager)})},
messageSends: ["initialize", "register", "registerInspector:", "registerErrorHandler:", "current", "registerProgressHandler:", "setupEvents", "keyBinder"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
function $HLKeyBinder(){return smalltalk.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyBinder"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyBinder"]=_st($HLKeyBinder())._new();
$1=self["@keyBinder"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".navbar"))._remove();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLManager)})},
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
fn: function (anErrorHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerErrorHandler_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.HLManager)})},
messageSends: ["registerErrorHandler:", "environment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerInspector_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.HLManager)})},
messageSends: ["registerInspector:", "environment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
fn: function (aProgressHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerProgressHandler_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.HLManager)})},
messageSends: ["registerProgressHandler:", "environment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeActiveTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeTab_(self._activeTab());
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},smalltalk.HLManager)})},
messageSends: ["removeTab:", "activeTab"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._history_(_st(self._history())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq_eq(aTab);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["history:", "reject:", "==", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._tabs())._includes_(aTab);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._removeFromHistory_(aTab);
_st(self._tabs())._remove_(aTab);
_st(self._keyBinder())._flushBindings();
_st(aTab)._remove();
self._refresh();
_st(self._history())._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._history())._last())._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "remove", "refresh", "ifNotEmpty:", "activate", "last", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddOn:",
fn: function (html){
var self=this;
function $HLWidget(){return smalltalk.HLWidget||(typeof HLWidget=="undefined"?nil:HLWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$8,$6,$2;
$1=_st(html)._li();
_st($1)._class_("dropdown");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._class_("dropdown-toggle");
_st($3)._at_put_("data-toggle","dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open...");
return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
$5=_st(html)._ul();
_st($5)._class_("dropdown-menu");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st($HLWidget())._withAllSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(each)._canBeOpenAsTab();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(_st(a)._tabPriority()).__lt(_st(b)._tabPriority());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$7=_st(html)._a();
_st($7)._with_(_st(each)._tabLabel());
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(each)._openAsTab();
}, function($ctx6) {$ctx6.fillBlock({},$ctx5)})}));
return $8;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "li", "with:", "a", "at:put:", "tag:", "ul", "do:", "tabLabel", "onClick:", "openAsTab", "sorted:", "<", "tabPriority", "select:", "canBeOpenAsTab", "withAllSubclasses"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("navbar navbar-fixed-top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("navbar-inner");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderTabsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "div", "with:", "renderTabsOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$5,$8,$9,$10,$11,$7,$2;
$1=_st(html)._ul();
_st($1)._class_("nav");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._li();
$4=$3;
$6=_st(each)._isActive();
if(smalltalk.assert($6)){
$5="active";
} else {
$5="inactive";
};
_st($4)._class_($5);
$7=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$8=_st(html)._a();
_st($8)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(_st(html)._tag_("i"))._class_("close"))._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return self._removeTab_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5)})}));
$9=_st(html)._span();
_st($9)._class_(_st(each)._cssClass());
$10=_st($9)._with_(_st(each)._displayLabel());
return $10;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
$11=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(each)._activate();
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
return $11;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
return self._renderAddOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "onClick:", "removeTab:", "tag:", "cssClass", "span", "displayLabel", "a", "activate", "tabs", "renderAddOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_value_do_(aString,"",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["request:value:do:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
fn: function (aString,valueString,aBlock){
var self=this;
function $HLRequestWidget(){return smalltalk.HLRequestWidget||(typeof HLRequestWidget=="undefined"?nil:HLRequestWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLRequestWidget())._new();
_st($1)._confirmationString_(aString);
_st($1)._actionBlock_(aBlock);
_st($1)._value_(valueString);
$2=_st($1)._yourself();
_st($2)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "actionBlock:", "value:", "yourself"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aTab;
_st($1)._show();
$2=_st($1)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["do:", "hide", "tabs", "show", "focus"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st($OrderedCollection())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "clearKeydownEvent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(window)._jQuery_("body"))._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(e)._keyCode()).__gt_eq((37)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(e)._keyCode()).__lt_eq((40));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
return false;
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clearKeydownEvent",{},smalltalk.HLManager.klass)})},
messageSends: ["keydown:", "ifTrue:", "and:", "<=", "keyCode", ">=", "jQuery:"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(self._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLManager.klass)})},
messageSends: ["ifNil:", "initialize", "basicNew"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._appendToJQuery_("body"._asJQuery());
self._clearKeydownEvent();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLManager.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "current", "clearKeydownEvent"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLManager.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLModalWidget', smalltalk.HLWidget, [], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},smalltalk.HLModalWidget)})},
messageSends: ["remove"]}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLModalWidget)})},
messageSends: []}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".dialog"))._removeClass_("active");
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(window)._jQuery_("#overlay"))._remove();
return _st(_st(window)._jQuery_(".dialog"))._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLModalWidget)})},
messageSends: ["removeClass:", "jQuery:", "valueWithTimeout:", "remove"]}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLModalWidget)})},
messageSends: []}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(_st(html)._div())._id_("overlay");
$1=_st(html)._div();
_st($1)._class_("dialog ".__comma(self._cssClass()));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self;
_st($3)._renderMainOn_(html);
$4=_st($3)._renderButtonsOn_(html);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(window)._jQuery_(".dialog"))._addClass_("active");
self._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,confirmButton:confirmButton},smalltalk.HLModalWidget)})},
messageSends: ["id:", "div", "class:", ",", "cssClass", "with:", "renderMainOn:", "renderButtonsOn:", "addClass:", "jQuery:", "setupKeyBindings"]}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLModalWidget)})},
messageSends: []}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(window)._jQuery_(".dialog"))._keyup_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._keyCode()).__eq((27));
if(smalltalk.assert($1)){
return self._cancel();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},smalltalk.HLModalWidget)})},
messageSends: ["keyup:", "ifTrue:", "cancel", "=", "keyCode", "jQuery:"]}),
smalltalk.HLModalWidget);



smalltalk.addClass('HLConfirmationWidget', smalltalk.HLModalWidget, ['confirmationString', 'actionBlock', 'cancelBlock'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@actionBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionBlock",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"actionBlock:",{aBlock:aBlock},smalltalk.HLConfirmationWidget)})},
messageSends: []}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cancelBlock())._value();
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["value", "cancelBlock", "remove"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@cancelBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelBlock",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cancelBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"cancelBlock:",{aBlock:aBlock},smalltalk.HLConfirmationWidget)})},
messageSends: []}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._actionBlock())._value();
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["value", "actionBlock", "remove"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@confirmationString"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Confirm";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirmationString",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@confirmationString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"confirmationString:",{aString:aString},smalltalk.HLConfirmationWidget)})},
messageSends: []}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".dialog"))._removeClass_("active");
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(window)._jQuery_("#overlay"))._remove();
return _st(_st(window)._jQuery_(".dialog"))._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLConfirmationWidget)})},
messageSends: ["removeClass:", "jQuery:", "valueWithTimeout:", "remove"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("buttons");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_("button");
_st($3)._with_("Cancel");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._cancel();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
$5=_st(html)._button();
_st($5)._class_("button default");
_st($5)._with_("Confirm");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._confirm();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
confirmButton=$6;
return confirmButton;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(confirmButton)._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,confirmButton:confirmButton},smalltalk.HLConfirmationWidget)})},
messageSends: ["class:", "div", "with:", "button", "onClick:", "cancel", "confirm", "focus", "asJQuery"]}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._span())._with_(self._confirmationString());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLConfirmationWidget)})},
messageSends: ["with:", "confirmationString", "span"]}),
smalltalk.HLConfirmationWidget);



smalltalk.addClass('HLRequestWidget', smalltalk.HLConfirmationWidget, ['input', 'value'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._actionBlock())._value_(_st(_st(self["@input"])._asJQuery())._val());
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},smalltalk.HLRequestWidget)})},
messageSends: ["value:", "val", "asJQuery", "actionBlock", "remove"]}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "large";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLRequestWidget)})},
messageSends: []}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLRequestWidget.superclass.fn.prototype._renderMainOn_.apply(_st(self), [html]);
self["@input"]=_st(html)._textarea();
_st(_st(self["@input"])._asJQuery())._val_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLRequestWidget)})},
messageSends: ["renderMainOn:", "textarea", "val:", "value", "asJQuery"]}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@value"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.HLRequestWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},smalltalk.HLRequestWidget)})},
messageSends: []}),
smalltalk.HLRequestWidget);



smalltalk.addClass('HLProgressWidget', smalltalk.HLModalWidget, ['progressBars', 'visible'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addProgressBar:",
fn: function (aProgressBar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show();
_st(self._progressBars())._add_(aProgressBar);
_st(aProgressBar)._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".dialog"));
return self}, function($ctx1) {$ctx1.fill(self,"addProgressBar:",{aProgressBar:aProgressBar},smalltalk.HLProgressWidget)})},
messageSends: ["show", "add:", "progressBars", "appendToJQuery:", "find:", "asJQuery", "wrapper"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
fn: function (aBlock,aCollection,aString){
var self=this;
var progressBar;
function $HLProgressBarWidget(){return smalltalk.HLProgressBarWidget||(typeof HLProgressBarWidget=="undefined"?nil:HLProgressBarWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLProgressBarWidget())._new();
_st($1)._parent_(self);
_st($1)._label_(aString);
_st($1)._workBlock_(aBlock);
_st($1)._collection_(aCollection);
$2=_st($1)._yourself();
progressBar=$2;
self._addProgressBar_(progressBar);
_st(progressBar)._start();
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString,progressBar:progressBar},smalltalk.HLProgressWidget)})},
messageSends: ["parent:", "new", "label:", "workBlock:", "collection:", "yourself", "addProgressBar:", "start"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeProgressBar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.HLProgressWidget)})},
messageSends: ["do:", "removeProgressBar:", "progressBars"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@visible"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},smalltalk.HLProgressWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "progressBars",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@progressBars"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@progressBars"]=_st($OrderedCollection())._new();
$1=self["@progressBars"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"progressBars",{},smalltalk.HLProgressWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isVisible();
if(smalltalk.assert($1)){
self["@visible"]=false;
self["@visible"];
smalltalk.HLProgressWidget.superclass.fn.prototype._remove.apply(_st(self), []);
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLProgressWidget)})},
messageSends: ["ifTrue:", "remove", "isVisible"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProgressBar:",
fn: function (aProgressBar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._remove_ifAbsent_(aProgressBar,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(aProgressBar)._wrapper())._asJQuery())._remove();
_st(self._progressBars())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProgressBar:",{aProgressBar:aProgressBar},smalltalk.HLProgressWidget)})},
messageSends: ["remove:ifAbsent:", "progressBars", "remove", "asJQuery", "wrapper", "ifEmpty:"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLProgressWidget)})},
messageSends: []}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLProgressWidget)})},
messageSends: ["do:", "with:", "progressBars"]}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isVisible();
if(! smalltalk.assert($1)){
self["@visible"]=true;
self["@visible"];
self._appendToJQuery_("body"._asJQuery());
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLProgressWidget)})},
messageSends: ["ifFalse:", "appendToJQuery:", "asJQuery", "isVisible"]}),
smalltalk.HLProgressWidget);


smalltalk.HLProgressWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.HLProgressWidget.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLProgressWidget.klass);


smalltalk.addClass('HLProgressBarWidget', smalltalk.HLWidget, ['label', 'parent', 'workBlock', 'collection', 'bar'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "collection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"collection:",{aCollection:aCollection},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._updateProgress_(_st(_st(anInteger).__slash(_st(self._collection())._size())).__star((100)));
$1=_st(anInteger).__lt_eq(_st(self._collection())._size());
if(smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._workBlock())._value_(_st(self._collection())._at_(anInteger));
return self._evaluateAt_(_st(anInteger).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((10));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((500));
};
return self}, function($ctx1) {$ctx1.fill(self,"evaluateAt:",{anInteger:anInteger},smalltalk.HLProgressBarWidget)})},
messageSends: ["updateProgress:", "*", "/", "size", "collection", "ifTrue:ifFalse:", "valueWithTimeout:", "value:", "at:", "workBlock", "evaluateAt:", "+", "remove", "<="]}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (aProgress){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aProgress;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aProgress:aProgress},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._removeProgressBar_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLProgressBarWidget)})},
messageSends: ["removeProgressBar:", "parent"]}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(_st(html)._span())._with_(self._label());
$1=_st(html)._div();
_st($1)._class_("progress");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("bar");
$4=_st($3)._style_("width: 0%");
self["@bar"]=$4;
return self["@bar"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLProgressBarWidget)})},
messageSends: ["with:", "label", "span", "class:", "div", "style:"]}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._evaluateAt_((1));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.HLProgressBarWidget)})},
messageSends: ["evaluateAt:"]}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateProgress:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@bar"])._asJQuery())._css_put_("width",_st(_st(anInteger)._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"updateProgress:",{anInteger:anInteger},smalltalk.HLProgressBarWidget)})},
messageSends: ["css:put:", ",", "asString", "asJQuery"]}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@workBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"workBlock",{},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@workBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"workBlock:",{aBlock:aBlock},smalltalk.HLProgressBarWidget)})},
messageSends: []}),
smalltalk.HLProgressBarWidget);


smalltalk.HLProgressBarWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.HLProgressBarWidget.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLProgressBarWidget.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "sunit";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1000);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);


