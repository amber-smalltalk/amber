smalltalk.addPackage('Helios-Core');
smalltalk.addClass('HLModel', smalltalk.Object, ['announcer', 'environment'], 'Helios-Core');
smalltalk.HLModel.comment="I am the abstract superclass of all models of Helios.\x0aI am the \x22Model\x22 part of the MVC pattern implementation in Helios.\x0a\x0aI provide access to an `Environment` object and both a local (model-specific) and global (system-specific) announcer.\x0a\x0aThe `#withChangesDo:` method is handy for performing model changes ensuring that all widgets are aware of the change and can prevent it from happening.\x0a\x0aModifications of the system should be done via commands (see `HLCommand` and subclasses).\x0a\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
category: 'accessing',
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
args: [],
source: "environment\x0a\x09^ environment ifNil: [ self manager environment ]",
messageSends: ["ifNil:", "environment", "manager"],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBrowserModel",{},smalltalk.HLModel)})},
args: [],
source: "isBrowserModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferencesModel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isReferencesModel",{},smalltalk.HLModel)})},
args: [],
source: "isReferencesModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isToolModel",{},smalltalk.HLModel)})},
args: [],
source: "isToolModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLModel)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._systemAnnouncer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLModel)})},
args: [],
source: "systemAnnouncer\x0a\x09^ self environment systemAnnouncer",
messageSends: ["systemAnnouncer", "environment"],
referencedClasses: []
}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withChangesDo:",
category: 'error handling',
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
args: ["aBlock"],
source: "withChangesDo: aBlock\x0a\x09[ \x0a\x09\x09self announcer announce: (HLAboutToChange new\x0a\x09\x09\x09actionBlock: aBlock).\x0a\x09\x09aBlock value.\x0a\x09]\x0a\x09\x09on: HLChangeForbidden \x0a\x09\x09do: [ :ex | ]",
messageSends: ["on:do:", "announce:", "actionBlock:", "new", "announcer", "value"],
referencedClasses: ["HLChangeForbidden", "HLAboutToChange"]
}),
smalltalk.HLModel);



smalltalk.addClass('HLToolModel', smalltalk.HLModel, ['selectedClass', 'selectedPackage', 'selectedProtocol', 'selectedSelector'], 'Helios-Core');
smalltalk.HLToolModel.comment="I am a model specific to package and class manipulation. All browsers should either use me or a subclass as their model.\x0a\x0aI provide methods for package, class, protocol and method manipulation and access, forwarding to my environment.\x0a\x0aI also handle compilation of classes and methods as well as compilation and parsing errors.";
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:",
category: 'actions',
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
args: ["aString"],
source: "addInstVarNamed: aString\x0a\x09self environment addInstVarNamed: aString to: self selectedClass.\x0a\x09self announcer announce: (HLInstVarAdded new\x0a\x09\x09theClass: self selectedClass;\x0a\x09\x09variableName: aString;\x0a\x09\x09yourself)",
messageSends: ["addInstVarNamed:to:", "selectedClass", "environment", "announce:", "theClass:", "new", "variableName:", "yourself", "announcer"],
referencedClasses: ["HLInstVarAdded"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "-- all --";
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLToolModel)})},
args: [],
source: "allProtocol\x0a\x09^ '-- all --'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._allSelectors();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.HLToolModel)})},
args: [],
source: "allSelectors\x0a\x09^ self environment allSelectors",
messageSends: ["allSelectors", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLToolModel)})},
args: [],
source: "availableClassNames\x0a\x09^ self environment availableClassNames",
messageSends: ["availableClassNames", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.HLToolModel)})},
args: [],
source: "availablePackageNames\x0a\x09^ self environment availablePackageNames",
messageSends: ["availablePackageNames", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackages",{},smalltalk.HLToolModel)})},
args: [],
source: "availablePackages\x0a\x09^ self environment availablePackageNames",
messageSends: ["availablePackageNames", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocols",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableProtocolsFor_(self._selectedClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableProtocols",{},smalltalk.HLToolModel)})},
args: [],
source: "availableProtocols\x0a\x09^ self environment availableProtocolsFor: self selectedClass",
messageSends: ["availableProtocolsFor:", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
category: 'commands actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._commitPackage_(self._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLToolModel)})},
args: [],
source: "commitPackage\x0a\x09\x22self \x0a\x09\x09withHelperLabelled: 'Committing package ', self selectedPackage name, '...'\x0a\x09\x09do: [ \x22self environment commitPackage: self selectedPackage\x22 ]\x22",
messageSends: ["commitPackage:", "selectedPackage", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compilationProtocol",
category: 'private',
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
args: [],
source: "compilationProtocol\x0a\x09| currentProtocol |\x0a\x09\x0a\x09currentProtocol := self selectedProtocol.\x0a\x09currentProtocol ifNil: [ currentProtocol := self unclassifiedProtocol ].\x0a\x09self selectedMethod ifNotNil: [ currentProtocol := self selectedMethod protocol ].\x0a\x0a\x09^ currentProtocol = self allProtocol\x0a\x09\x09ifTrue: [ self unclassifiedProtocol ]\x0a\x09\x09ifFalse: [ currentProtocol ]",
messageSends: ["selectedProtocol", "ifNil:", "unclassifiedProtocol", "ifNotNil:", "protocol", "selectedMethod", "ifTrue:ifFalse:", "=", "allProtocol"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassComment_for_(aString,self._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:",{aString:aString},smalltalk.HLToolModel)})},
args: ["aString"],
source: "compileClassComment: aString\x0a\x09self environment \x0a\x09\x09compileClassComment: aString \x0a\x09\x09for: self selectedClass",
messageSends: ["compileClassComment:for:", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassDefinition_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.HLToolModel)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self environment compileClassDefinition: aString",
messageSends: ["compileClassDefinition:", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
category: 'compiling',
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
args: ["aString"],
source: "compileMethod: aString\x0a\x09| method |\x0a\x09\x0a\x09self withCompileErrorHandling: [ \x0a\x09\x09method := self environment \x0a\x09\x09\x09compileMethod: aString \x0a\x09\x09\x09for: self selectedClass\x0a\x09\x09\x09protocol: self compilationProtocol.\x0a\x0a\x09\x09self selectedMethod: method ]",
messageSends: ["withCompileErrorHandling:", "compileMethod:for:protocol:", "selectedClass", "compilationProtocol", "environment", "selectedMethod:"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClassTo:",
category: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._copyClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"copyClassTo:",{aClassName:aClassName},smalltalk.HLToolModel)})},
args: ["aClassName"],
source: "copyClassTo: aClassName\x0a\x09self withChangesDo: [ \x0a\x09\x09self environment \x0a\x09\x09\x09copyClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
messageSends: ["withChangesDo:", "copyClass:to:", "theNonMetaClass", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleCompileError:",
category: 'error handling',
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
args: ["anError"],
source: "handleCompileError: anError\x0a\x09self announcer announce: (HLCompileErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["announce:", "error:", "new", "yourself", "announcer"],
referencedClasses: ["HLCompileErrorRaised"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleParseError:",
category: 'error handling',
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
args: ["anError"],
source: "handleParseError: anError\x0a\x09| split line column messageToInsert |\x0a\x09\x0a\x09split := anError messageText tokenize: ' : '.\x0a\x09messageToInsert := split second.\x0a\x0a\x09\x2221 = 'Parse error on line ' size + 1\x22\x0a\x09split := split first copyFrom: 21 to: split first size.\x0a\x09\x0a\x09split := split tokenize: ' column '.\x0a\x09line := split first.\x0a\x09column := split second.\x0a\x09\x0a\x09self announcer announce: (HLParseErrorRaised new\x0a\x09\x09line: line asNumber;\x0a\x09\x09column: column asNumber;\x0a\x09\x09message: messageToInsert;\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["tokenize:", "messageText", "second", "copyFrom:to:", "size", "first", "announce:", "line:", "asNumber", "new", "column:", "message:", "error:", "yourself", "announcer"],
referencedClasses: ["HLParseErrorRaised"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleUnkownVariableError:",
category: 'error handling',
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
args: ["anError"],
source: "handleUnkownVariableError: anError\x0a\x09self announcer announce: (HLUnknownVariableErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["announce:", "error:", "new", "yourself", "announcer"],
referencedClasses: ["HLUnknownVariableErrorRaised"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isToolModel",{},smalltalk.HLToolModel)})},
args: [],
source: "isToolModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClassToPackage:",
category: 'commands actions',
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveClass_toPackage_(_st(self._selectedClass())._theNonMetaClass(),aPackageName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveClassToPackage:",{aPackageName:aPackageName},smalltalk.HLToolModel)})},
args: ["aPackageName"],
source: "moveClassToPackage: aPackageName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09toPackage: aPackageName ]",
messageSends: ["withChangesDo:", "moveClass:toPackage:", "theNonMetaClass", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToClass:",
category: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toClass_(self._selectedMethod(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToClass:",{aClassName:aClassName},smalltalk.HLToolModel)})},
args: ["aClassName"],
source: "moveMethodToClass: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toClass: aClassName ]",
messageSends: ["withChangesDo:", "moveMethod:toClass:", "selectedMethod", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToProtocol:",
category: 'commands actions',
fn: function (aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toProtocol_(self._selectedMethod(),aProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToProtocol:",{aProtocol:aProtocol},smalltalk.HLToolModel)})},
args: ["aProtocol"],
source: "moveMethodToProtocol: aProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toProtocol: aProtocol ]",
messageSends: ["withChangesDo:", "moveMethod:toProtocol:", "selectedMethod", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "openClassNamed:",
category: 'commands actions',
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
args: ["aString"],
source: "openClassNamed: aString\x0a\x09| class |\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09class := self environment classNamed: aString.\x0a\x09\x09self selectedPackage: class package.\x0a\x09\x09self selectedClass: class ]",
messageSends: ["withChangesDo:", "classNamed:", "environment", "selectedPackage:", "package", "selectedClass:"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.HLToolModel)})},
args: [],
source: "packages\x0a\x09^ self environment packages",
messageSends: ["packages", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass",
category: 'commands actions',
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
args: [],
source: "removeClass\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove class ', self selectedClass name\x0a\x09\x09\x09ifTrue: [ self environment removeClass: self selectedClass ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "name", "selectedClass", "removeClass:", "environment", "manager"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod",
category: 'commands actions',
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
args: [],
source: "removeMethod\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector\x0a\x09\x09\x09ifTrue: [ self environment removeMethod: self selectedMethod ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "selector", "selectedMethod", "name", "methodClass", "removeMethod:", "environment", "manager"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol",
category: 'commands actions',
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
args: [],
source: "removeProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove protocol ', self selectedProtocol\x0a\x09\x09\x09ifTrue: [ self environment \x0a\x09\x09\x09\x09removeProtocol: self selectedProtocol \x0a\x09\x09\x09\x09from: self selectedClass ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", ",", "selectedProtocol", "removeProtocol:from:", "selectedClass", "environment", "manager"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClassTo:",
category: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameClassTo:",{aClassName:aClassName},smalltalk.HLToolModel)})},
args: ["aClassName"],
source: "renameClassTo: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
messageSends: ["withChangesDo:", "renameClass:to:", "theNonMetaClass", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocolTo:",
category: 'commands actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameProtocol_to_in_(self._selectedProtocol(),aString,self._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocolTo:",{aString:aString},smalltalk.HLToolModel)})},
args: ["aString"],
source: "renameProtocolTo: aString\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameProtocol: self selectedProtocol\x0a\x09\x09\x09to: aString\x0a\x09\x09\x09in: self selectedClass ]",
messageSends: ["withChangesDo:", "renameProtocol:to:in:", "selectedProtocol", "selectedClass", "environment"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "save:",
category: 'actions',
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
args: ["aString"],
source: "save: aString\x0a\x09self announcer announce: HLSourceCodeSaved new.\x0a\x09\x0a\x09(self shouldCompileClassDefinition: aString)\x0a\x09\x09ifTrue: [ self compileClassDefinition: aString ]\x0a\x09\x09ifFalse: [ self compileMethod: aString ]",
messageSends: ["announce:", "new", "announcer", "ifTrue:ifFalse:", "compileClassDefinition:", "compileMethod:", "shouldCompileClassDefinition:"],
referencedClasses: ["HLSourceCodeSaved"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "saveSourceCode",
category: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return smalltalk.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLSaveSourceCode())._new());
return self}, function($ctx1) {$ctx1.fill(self,"saveSourceCode",{},smalltalk.HLToolModel)})},
args: [],
source: "saveSourceCode\x0a\x09self announcer announce: HLSaveSourceCode new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLSaveSourceCode"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{},smalltalk.HLToolModel)})},
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass:",
category: 'accessing',
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
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09(self selectedClass = aClass and: [ aClass isNil ]) \x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09selectedClass = aClass ifTrue: [ \x0a\x09\x09\x09self selectedProtocol: nil ].\x0a    \x0a\x09\x09aClass \x0a   \x09\x09\x09ifNil: [ selectedClass := nil ]\x0a    \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09self selectedPackage: aClass theNonMetaClass package.\x0a\x09\x09\x09\x09self showInstance \x0a   \x09\x09\x09\x09\x09ifTrue: [ selectedClass := aClass theNonMetaClass ]\x0a     \x09\x09\x09\x09ifFalse: [ selectedClass := aClass theMetaClass ] ].\x0a\x09\x09self selectedProtocol: nil.\x0a\x09\x09self announcer announce: (HLClassSelected on: self selectedClass) ]",
messageSends: ["ifTrue:", "and:", "isNil", "=", "selectedClass", "withChangesDo:", "selectedProtocol:", "ifNil:ifNotNil:", "selectedPackage:", "package", "theNonMetaClass", "ifTrue:ifFalse:", "theMetaClass", "showInstance", "announce:", "on:", "announcer"],
referencedClasses: ["HLClassSelected"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod",
category: 'accessing',
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
args: [],
source: "selectedMethod\x0a\x09^ self selectedClass ifNotNil: [ \x0a\x09\x09self selectedClass methodDictionary \x0a\x09\x09\x09at: selectedSelector \x0a\x09\x09\x09ifAbsent: [ nil ] ]",
messageSends: ["ifNotNil:", "at:ifAbsent:", "methodDictionary", "selectedClass"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod:",
category: 'accessing',
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
args: ["aCompiledMethod"],
source: "selectedMethod: aCompiledMethod\x0a\x09selectedSelector = aCompiledMethod ifTrue: [ ^ self ].\x0a    \x0a    self withChangesDo: [\x0a\x09\x09aCompiledMethod\x0a    \x09\x09ifNil: [ selectedSelector := nil ]\x0a      \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09selectedClass := aCompiledMethod methodClass.\x0a\x09\x09\x09\x09selectedPackage := selectedClass theNonMetaClass package.\x0a\x09\x09\x09\x09selectedSelector := aCompiledMethod selector ].\x0a\x0a\x09\x09self announcer announce: (HLMethodSelected on: aCompiledMethod) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "ifNil:ifNotNil:", "methodClass", "package", "theNonMetaClass", "selector", "announce:", "on:", "announcer"],
referencedClasses: ["HLMethodSelected"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{},smalltalk.HLToolModel)})},
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage:",
category: 'accessing',
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
args: ["aPackage"],
source: "selectedPackage: aPackage\x0a\x09selectedPackage = aPackage ifTrue: [ ^ self ].\x0a    \x0a\x09self withChangesDo: [\x0a\x09\x09selectedPackage := aPackage.\x0a\x09\x09self selectedClass: nil.\x0a\x09\x09self announcer announce: (HLPackageSelected on: aPackage) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedClass:", "announce:", "on:", "announcer"],
referencedClasses: ["HLPackageSelected"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedProtocol",{},smalltalk.HLToolModel)})},
args: [],
source: "selectedProtocol\x0a\x09^ selectedProtocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol:",
category: 'accessing',
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
args: ["aString"],
source: "selectedProtocol: aString\x0a\x09selectedProtocol = aString ifTrue: [ ^ self ].\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09self selectedMethod: nil.\x0a\x09\x09self announcer announce: (HLProtocolSelected on: aString) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedMethod:", "announce:", "on:", "announcer"],
referencedClasses: ["HLProtocolSelected"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldCompileClassDefinition:",
category: 'testing',
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
args: ["aString"],
source: "shouldCompileClassDefinition: aString\x0a\x09^ self selectedClass isNil or: [\x0a\x09\x09aString match: '^[A-Z]' ]",
messageSends: ["or:", "match:", "isNil", "selectedClass"],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unclassifiedProtocol",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"unclassifiedProtocol",{},smalltalk.HLToolModel)})},
args: [],
source: "unclassifiedProtocol\x0a\x09^ 'as yet unclassified'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withCompileErrorHandling:",
category: 'error handling',
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
args: ["aBlock"],
source: "withCompileErrorHandling: aBlock\x0a\x09self environment\x0a\x09\x09evaluate: [\x0a\x09\x09\x09self environment \x0a\x09\x09\x09evaluate: [\x0a\x09\x09\x09\x09self environment \x0a\x09\x09\x09\x09\x09evaluate: aBlock\x0a\x09\x09\x09\x09\x09on: ParseError\x0a\x09\x09\x09\x09\x09do: [:ex | self handleParseError: ex ] ]\x0a\x09\x09\x09on: UnknownVariableError\x0a\x09\x09\x09do: [ :ex | self handleUnkownVariableError: ex ] ]\x0a\x09\x09on: CompilerError\x0a\x09\x09do: [ :ex | self handleCompileError: ex ]",
messageSends: ["evaluate:on:do:", "handleParseError:", "environment", "handleUnkownVariableError:", "handleCompileError:"],
referencedClasses: ["ParseError", "UnknownVariableError", "CompilerError"]
}),
smalltalk.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withHelperLabelled:do:",
category: 'private',
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
args: ["aString", "aBlock"],
source: "withHelperLabelled: aString do: aBlock\x0a\x09\x22TODO: doesn't belong here\x22\x0a\x0a\x09(window jQuery: '#helper') remove.\x0a\x0a\x09[ :html |\x0a\x09\x09html div \x0a\x09\x09\x09id: 'helper';\x0a\x09\x09\x09with: aString ] appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09[\x0a\x09\x09aBlock value.\x0a\x09\x09(window jQuery: '#helper') remove\x0a\x09] \x0a\x09\x09valueWithTimeout: 10",
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery", "id:", "div", "with:", "valueWithTimeout:", "value"],
referencedClasses: []
}),
smalltalk.HLToolModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'actions',
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
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLToolModel.klass);


smalltalk.addClass('HLProgressHandler', smalltalk.ProgressHandler, [], 'Helios-Core');
smalltalk.HLProgressHandler.comment="I am a specific progress handler for Helios, displaying progresses in a modal window.";
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
category: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
function $HLProgressWidget(){return smalltalk.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLProgressWidget())._default())._do_on_displaying_(aBlock,aCollection,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.HLProgressHandler)})},
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09HLProgressWidget default\x0a\x09\x09do: aBlock \x0a\x09\x09on: aCollection \x0a\x09\x09displaying: aString",
messageSends: ["do:on:displaying:", "default"],
referencedClasses: ["HLProgressWidget"]
}),
smalltalk.HLProgressHandler);



smalltalk.addClass('HLTabWidget', smalltalk.Widget, ['widget', 'label', 'root'], 'Helios-Core');
smalltalk.HLTabWidget.comment="I am a widget specialized into building another widget as an Helios tab.\x0a\x0aI should not be used directly, `HLWidget class >> #openAsTab` should be used instead.\x0a\x0a## Example\x0a\x0a    HLWorkspace openAsTab";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLTabWidget)})},
args: [],
source: "activate\x0a\x09self manager activate: self",
messageSends: ["activate:", "manager"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "add",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._addTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.HLTabWidget)})},
args: [],
source: "add\x0a\x09self manager addTab: self",
messageSends: ["addTab:", "manager"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._widget())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLTabWidget)})},
args: [],
source: "cssClass\x0a\x09^ self widget tabClass",
messageSends: ["tabClass", "widget"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
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
args: [],
source: "displayLabel\x0a\x09^ self label size > 20 \x0a\x09\x09ifTrue: [ (self label first: 20), '...' ]\x0a\x09\x09ifFalse: [ self label ]",
messageSends: ["ifTrue:ifFalse:", ",", "first:", "label", ">", "size"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._widget())._canHaveFocus();
if(smalltalk.assert($1)){
_st(self._widget())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLTabWidget)})},
args: [],
source: "focus\x0a\x09self widget canHaveFocus ifTrue: [\x0a\x09\x09self widget focus ]",
messageSends: ["ifTrue:", "focus", "widget", "canHaveFocus"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'actions',
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
args: [],
source: "hide\x0a\x09root ifNotNil: [ root asJQuery css: 'visibility' put: 'hidden' ]",
messageSends: ["ifNotNil:", "css:put:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLTabWidget)})},
args: [],
source: "isActive\x0a\x09^ self manager activeTab = self",
messageSends: ["=", "activeTab", "manager"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
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
args: [],
source: "label\x0a\x09^ label ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLTabWidget)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLTabWidget)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._registerBindings();
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLTabWidget)})},
args: [],
source: "registerBindings\x0a\x09self widget registerBindings",
messageSends: ["registerBindings", "widget"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09self widget unregister.\x0a\x09root ifNotNil: [ root asJQuery remove ]",
messageSends: ["unregister", "widget", "ifNotNil:", "remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a\x09root := html div\x0a\x09\x09class: 'tab';\x0a\x09\x09yourself.\x0a\x09self renderTab",
messageSends: ["class:", "div", "yourself", "renderTab"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab",
category: 'rendering',
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
args: [],
source: "renderTab\x0a\x09root contents: [ :html |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'amber_box';\x0a\x09\x09\x09with: [ self widget renderOn: html ] ]",
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
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
args: [],
source: "show\x0a\x09root\x0a\x09\x09ifNil: [ self appendToJQuery: 'body' asJQuery ]\x0a\x09\x09ifNotNil: [ root asJQuery css: 'visibility' put: 'visible' ]",
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "css:put:"],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLTabWidget)})},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLTabWidget)})},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLTabWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
category: 'instance creation',
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
args: ["aWidget", "aString"],
source: "on: aWidget labelled: aString\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09label: aString;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "label:", "yourself"],
referencedClasses: []
}),
smalltalk.HLTabWidget.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.HLWidget.comment="I am the abstract superclass of all Helios widgets.\x0a\x0aI provide common methods, additional behavior to widgets useful for Helios, like dialog creation, command execution and tab creation.\x0a\x0a## API\x0a\x0a1. Rendering\x0a\x0a    Instead of overriding `#renderOn:` as with other Widget subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0a2. Refreshing\x0a\x0a    To re-render a widget, use `#refresh`.\x0a\x0a3. Key bindings registration and tabs\x0a\x0a    When displayed as a tab, the widget has a chance to register keybindings with the `#registerBindingsOn:` hook method.\x0a    \x0a4. Unregistration\x0a\x0a    When a widget has subscribed to announcements or other actions that need to be cleared when closing the tab, the hook method `#unregister` will be called by helios.\x0a\x0a5. Tabs\x0a\x0a   To enable a widget class to be open as a tab, override the class-side `#canBeOpenAsTab` method to answer `true`. `#tabClass` and `#tabPriority` can be overridden too to respectively change the css class of the tab and the order of tabs in the main menu.\x0a\x0a6. Command execution\x0a\x0a    An helios command (instance of `HLCommand` or one of its subclass) can be executed with `#execute:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.HLWidget)})},
args: ["aString"],
source: "alert: aString\x0a\x09window alert: aString",
messageSends: ["alert:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "bindKeyDown:up:",
category: 'keybindings',
fn: function (keyDownBlock,keyUpBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._keydown_(keyDownBlock);
$2=_st($1)._keyup_(keyUpBlock);
return self}, function($ctx1) {$ctx1.fill(self,"bindKeyDown:up:",{keyDownBlock:keyDownBlock,keyUpBlock:keyUpBlock},smalltalk.HLWidget)})},
args: ["keyDownBlock", "keyUpBlock"],
source: "bindKeyDown: keyDownBlock up: keyUpBlock\x0a\x09self wrapper asJQuery\x0a\x09\x09keydown: keyDownBlock;\x0a\x09\x09keyup: keyUpBlock ",
messageSends: ["keydown:", "asJQuery", "wrapper", "keyup:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWidget)})},
args: [],
source: "canHaveFocus\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
category: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._confirm_ifTrue_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},smalltalk.HLWidget)})},
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self manager confirm: aString ifTrue: aBlock",
messageSends: ["confirm:ifTrue:", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
category: 'actions',
fn: function (aCommand){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($HLManager())._current())._keyBinder();
_st($1)._activate();
$2=_st($1)._applyBinding_(_st(aCommand)._asBinding());
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aCommand:aCommand},smalltalk.HLWidget)})},
args: ["aCommand"],
source: "execute: aCommand\x0a\x09HLManager current keyBinder\x0a\x09\x09activate;\x0a\x09\x09applyBinding: aCommand asBinding",
messageSends: ["activate", "keyBinder", "current", "applyBinding:", "asBinding"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLWidget)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
category: 'actions',
fn: function (){
var self=this;
function $HLTabWidget(){return smalltalk.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTabWidget())._on_labelled_(self,_st(self._class())._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},smalltalk.HLWidget)})},
args: [],
source: "openAsTab\x0a\x09HLManager current addTab: (HLTabWidget on: self labelled: self class tabLabel)",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "class", "current"],
referencedClasses: ["HLTabWidget", "HLManager"]
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'updating',
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
args: [],
source: "refresh\x0a\x09self wrapper ifNil: [ ^ self ].\x0a    \x0a\x09self wrapper asJQuery empty.\x0a    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery",
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
category: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._registerBindingsOn_(_st(_st(self._manager())._keyBinder())._bindings());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLWidget)})},
args: [],
source: "registerBindings\x0a\x09self registerBindingsOn: self manager keyBinder bindings",
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLWidget)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWidget)})},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=_st(html)._div();
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(renderer);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper := html div.\x0a    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery",
messageSends: ["div", "appendToJQuery:", "asJQuery", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
category: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_do_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},smalltalk.HLWidget)})},
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self manager request: aString do: aBlock",
messageSends: ["request:do:", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
category: 'actions',
fn: function (aString,valueString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_value_do_(aString,valueString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},smalltalk.HLWidget)})},
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09self manager \x0a\x09\x09request: aString \x0a\x09\x09value: valueString\x0a\x09\x09do: aBlock",
messageSends: ["request:value:do:", "manager"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWidget)})},
args: [],
source: "tabClass\x0a\x09^ self class tabClass",
messageSends: ["tabClass", "class"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeyDownUp",
category: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._unbind_("keydown");
$2=_st($1)._unbind_("keyup");
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeyDownUp",{},smalltalk.HLWidget)})},
args: [],
source: "unbindKeyDownUp\x0a\x09self wrapper asJQuery\x0a\x09\x09unbind: 'keydown';\x0a\x09\x09unbind: 'keyup'",
messageSends: ["unbind:", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLWidget)})},
args: [],
source: "unregister\x0a\x09\x22This method is called whenever the receiver is closed (as a tab).\x0a\x09Widgets subscribing to announcements should unregister there\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.HLWidget)})},
args: [],
source: "wrapper\x0a\x09^ wrapper",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWidget.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
category: 'accessing',
fn: function (){
var self=this;
function $HLTabWidget(){return smalltalk.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTabWidget())._on_labelled_(self._new(),self._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},smalltalk.HLWidget.klass)})},
args: [],
source: "openAsTab\x0a\x09HLManager current addTab: (HLTabWidget on: self new labelled: self tabLabel)",
messageSends: ["addTab:", "on:labelled:", "new", "tabLabel", "current"],
referencedClasses: ["HLTabWidget", "HLManager"]
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWidget.klass)})},
args: [],
source: "tabClass\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Tab";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWidget.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Tab'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (500);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWidget.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 500",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, [], 'Helios-Core');
smalltalk.HLFocusableWidget.comment="I am a widget that can be focused.\x0a\x0a## API \x0a\x0aInstead of overriding `#renderOn:` as with other `Widget` subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0aTo bring the focus to the widget, use the `#focus` method.";
smalltalk.addMethod(
smalltalk.method({
selector: "blur",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"blur",{},smalltalk.HLFocusableWidget)})},
args: [],
source: "blur\x0a\x09self wrapper asJQuery blur",
messageSends: ["blur", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLFocusableWidget)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLFocusableWidget)})},
args: [],
source: "focus\x0a\x09self wrapper asJQuery focus",
messageSends: ["focus", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "focused";
}, function($ctx1) {$ctx1.fill(self,"focusClass",{},smalltalk.HLFocusableWidget)})},
args: [],
source: "focusClass\x0a\x09^ 'focused'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
category: 'testing',
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
args: [],
source: "hasFocus\x0a\x09^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]",
messageSends: ["and:", "hasClass:", "focusClass", "asJQuery", "wrapper", "notNil"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLFocusableWidget)})},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a    wrapper := html div \x0a    \x09class: 'hl_widget';\x0a\x09\x09yourself.\x0a\x09\x09\x0a       wrapper with: [ self renderContentOn: html ].\x0a\x09\x0a\x09wrapper\x0a\x09\x09at: 'tabindex' put: '0';\x0a\x09\x09onBlur: [ self wrapper asJQuery removeClass: self focusClass ];\x0a        onFocus: [ self wrapper asJQuery addClass: self focusClass ]",
messageSends: ["class:", "div", "yourself", "with:", "renderContentOn:", "at:put:", "onBlur:", "removeClass:", "focusClass", "asJQuery", "wrapper", "onFocus:", "addClass:"],
referencedClasses: []
}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem', 'mapping'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFirstListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(window)._jQuery_(_st(_st(_st(self["@wrapper"])._asJQuery())._find_("li.inactive"))._get_((0))));
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{},smalltalk.HLListWidget)})},
args: [],
source: "activateFirstListItem\x0a\x09self activateListItem: (window jQuery: ((wrapper asJQuery find: 'li.inactive') get: 0))",
messageSends: ["activateListItem:", "jQuery:", "get:", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
category: 'actions',
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
args: ["anObject"],
source: "activateItem: anObject\x0a\x09self activateListItem: (mapping \x0a\x09\x09at: anObject\x0a\x09\x09ifAbsent: [ ^ self ]) asJQuery",
messageSends: ["activateListItem:", "asJQuery", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
category: 'actions',
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
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^self ].\x0a\x09aListItem parent children removeClass: 'active'.\x0a\x09aListItem addClass: 'active'.\x0a    \x0a\x09self ensureVisible: aListItem.\x0a    \x0a   \x22Activate the corresponding item\x22\x0a   item := (self items at: (aListItem attr: 'list-data') asNumber).\x0a   self selectedItem == item ifFalse: [\x0a\x09   self selectItem: item ]",
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "addClass:", "ensureVisible:", "at:", "asNumber", "attr:", "items", "ifFalse:", "selectItem:", "==", "selectedItem"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self._wrapper())._asJQuery())._find_("li.active"))._next());
_st(_st(_st(_st(self._wrapper())._asJQuery())._find_(" .active"))._get())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._activateFirstListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},smalltalk.HLListWidget)})},
args: [],
source: "activateNextListItem\x0a\x09self activateListItem: (self wrapper asJQuery find: 'li.active') next.\x0a\x09\x0a\x09\x22select the first item if none is selected\x22\x0a\x09(self wrapper asJQuery find: ' .active') get ifEmpty: [\x0a\x09\x09self activateFirstListItem ]",
messageSends: ["activateListItem:", "next", "find:", "asJQuery", "wrapper", "ifEmpty:", "activateFirstListItem", "get"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self._wrapper())._asJQuery())._find_("li.active"))._prev());
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},smalltalk.HLListWidget)})},
args: [],
source: "activatePreviousListItem\x0a\x09self activateListItem: (self wrapper asJQuery find: 'li.active') prev",
messageSends: ["activateListItem:", "prev", "find:", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anObject:anObject},smalltalk.HLListWidget)})},
args: ["anObject"],
source: "cssClassForItem: anObject\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},smalltalk.HLListWidget)})},
args: [],
source: "defaultItems\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
category: 'actions',
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
args: ["aListItem"],
source: "ensureVisible: aListItem\x09\x0a\x09\x22Move the scrollbar to show the active element\x22\x0a\x09\x0a\x09| perent position |\x0a\x09\x0a\x09position := self positionOf: aListItem.\x0a\x09parent := aListItem parent.\x0a\x09\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]",
messageSends: ["positionOf:", "parent", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "get:", "<", "height", ">"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
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
args: [],
source: "focus\x0a\x09super focus.\x0a    self items isEmpty ifFalse: [ \x0a\x09\x09self selectedItem ifNil: [ self activateFirstListItem ] ]",
messageSends: ["focus", "ifFalse:", "ifNil:", "activateFirstListItem", "selectedItem", "isEmpty", "items"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLListWidget.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@mapping"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLListWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09mapping := Dictionary new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
category: 'accessing',
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
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self defaultItems ]",
messageSends: ["ifNil:", "defaultItems"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"items:",{aCollection:aCollection},smalltalk.HLListWidget)})},
args: ["aCollection"],
source: "items: aCollection\x0a\x09items := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "listCssClassForItem:",
category: 'accessing',
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
args: ["anObject"],
source: "listCssClassForItem: anObject\x0a\x09^ self selectedItem = anObject\x0a\x09\x09ifTrue: [ 'active' ]\x0a\x09\x09ifFalse: [ 'inactive' ]",
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
category: 'accessing',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},smalltalk.HLListWidget)})},
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09<\x0a    \x09return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
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
args: [],
source: "refresh\x0a\x09super refresh.\x0a\x09\x0a\x09self ensureVisible: (mapping \x0a\x09\x09at: self selectedItem\x0a\x09\x09ifAbsent: [ ^ self ]) asJQuery",
messageSends: ["refresh", "ensureVisible:", "asJQuery", "at:ifAbsent:", "selectedItem"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerMappingFrom:to:",
category: 'private',
fn: function (anObject,aTag){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@mapping"])._at_put_(anObject,aTag);
return self}, function($ctx1) {$ctx1.fill(self,"registerMappingFrom:to:",{anObject:anObject,aTag:aTag},smalltalk.HLListWidget)})},
args: ["anObject", "aTag"],
source: "registerMappingFrom: anObject to: aTag\x0a\x09mapping at: anObject put: aTag",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLListWidget)})},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul \x0a    \x09class: 'nav nav-pills nav-stacked';\x0a        with: [ self renderListOn: html ].\x0a    html div class: 'pane_actions form-actions'; with: [\x0a      \x09self renderButtonsOn: html ].\x0a        \x0a   self setupKeyBindings",
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
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
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09self registerMappingFrom: anObject to: li.\x0a\x09\x0a    li\x0a        at: 'list-data' put: (self items indexOf: anObject) asString;\x0a\x09\x09class: (self listCssClassForItem: anObject);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: anObject).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ]",
messageSends: ["li", "registerMappingFrom:to:", "at:put:", "asString", "indexOf:", "items", "class:", "listCssClassForItem:", "with:", "cssClassForItem:", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(anObject)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},smalltalk.HLListWidget)})},
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html with: anObject asString",
messageSends: ["with:", "asString"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
category: 'rendering',
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
args: ["html"],
source: "renderListOn: html\x0a\x09mapping := Dictionary new.\x0a\x09\x0a\x09self items do: [ :each | \x0a    \x09self renderItem: each on: html ]",
messageSends: ["new", "do:", "renderItem:on:", "items"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},smalltalk.HLListWidget)})},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09self selectedItem: anObject",
messageSends: ["selectedItem:"],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLListWidget)})},
args: [],
source: "selectedItem\x0a\x09^ selectedItem",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedItem"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anObject:anObject},smalltalk.HLListWidget)})},
args: ["anObject"],
source: "selectedItem: anObject\x0a\x09selectedItem := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
category: 'events',
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
args: [],
source: "setupKeyBindings \x0a\x09(HLRepeatingKeyBindingHandler forWidget: self)\x0a\x09\x09whileKeyPressed: 38 do: [ self activatePreviousListItem ];\x0a\x09\x09whileKeyPressed: 40 do: [ self activateNextListItem ];\x0a\x09\x09rebindKeys",
messageSends: ["whileKeyPressed:do:", "activatePreviousListItem", "forWidget:", "activateNextListItem", "rebindKeys"],
referencedClasses: ["HLRepeatingKeyBindingHandler"]
}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.HLNavigationListWidget)})},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'accessing',
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
args: ["aWidget"],
source: "next: aWidget\x0a\x09next := aWidget.\x0a    aWidget previous = self ifFalse: [ aWidget previous: self ]",
messageSends: ["ifFalse:", "previous:", "=", "previous"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFocus",
category: 'actions',
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
args: [],
source: "nextFocus\x0a\x09self next ifNotNil: [ self next focus ]",
messageSends: ["ifNotNil:", "focus", "next"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLNavigationListWidget)})},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
category: 'accessing',
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
args: ["aWidget"],
source: "previous: aWidget\x0a\x09previous := aWidget.\x0a    aWidget next = self ifFalse: [ aWidget next: self ]",
messageSends: ["ifFalse:", "next:", "=", "next"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousFocus",
category: 'actions',
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
args: [],
source: "previousFocus\x0a\x09self previous ifNotNil: [ self previous focus ]",
messageSends: ["ifNotNil:", "focus", "previous"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
category: 'events',
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
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x0a\x09self wrapper asJQuery keydown: [ :e |\x0a        e which = 39 ifTrue: [ \x0a        \x09self nextFocus ].\x0a\x09\x09e which = 37 ifTrue: [ \x0a        \x09self previousFocus ] ]",
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLToolListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
category: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activateListItem_.apply(_st(self), [anItem]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},smalltalk.HLToolListWidget)})},
args: ["anItem"],
source: "activateListItem: anItem\x0a\x09self model withChangesDo: [ super activateListItem: anItem ]",
messageSends: ["withChangesDo:", "activateListItem:", "model"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activateNextListItem.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},smalltalk.HLToolListWidget)})},
args: [],
source: "activateNextListItem\x0a\x09self model withChangesDo: [ super activateNextListItem ]",
messageSends: ["withChangesDo:", "activateNextListItem", "model"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLToolListWidget.superclass.fn.prototype._activatePreviousListItem.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},smalltalk.HLToolListWidget)})},
args: [],
source: "activatePreviousListItem\x0a\x09self model withChangesDo: [ super activatePreviousListItem ]",
messageSends: ["withChangesDo:", "activatePreviousListItem", "model"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "commandCategory",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandCategory",{},smalltalk.HLToolListWidget)})},
args: [],
source: "commandCategory\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "List";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToolListWidget)})},
args: [],
source: "label\x0a\x09^ 'List'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "menuCommands",
category: 'accessing',
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
args: [],
source: "menuCommands\x0a\x09\x22Answer a collection of commands to be put in the cog menu\x22\x0a\x09\x0a\x09^ ((HLToolCommand concreteClasses\x0a\x09\x09select: [ :each | each isValidFor: self model ])\x0a\x09\x09\x09collect: [ :each | each for: self model ])\x0a\x09\x09\x09select: [ :each | \x0a\x09\x09\x09\x09each category = self commandCategory and: [ \x0a\x09\x09\x09\x09\x09each isAction and: [ each isActive ] ] ]",
messageSends: ["select:", "and:", "isActive", "isAction", "=", "commandCategory", "category", "collect:", "for:", "model", "isValidFor:", "concreteClasses"],
referencedClasses: ["HLToolCommand"]
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLToolListWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@model"]=aBrowserModel;
$1=self;
_st($1)._observeSystem();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel},smalltalk.HLToolListWidget)})},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self \x0a\x09\x09observeSystem;\x0a\x09\x09observeModel",
messageSends: ["observeSystem", "observeModel"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLToolListWidget)})},
args: [],
source: "observeModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLToolListWidget)})},
args: [],
source: "observeSystem",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeadOn_(html);
smalltalk.HLToolListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLToolListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x09\x0a\x09super renderContentOn: html",
messageSends: ["renderHeadOn:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
category: 'rendering',
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
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self label.\x0a\x09\x09\x09self renderMenuOn: html ]",
messageSends: ["class:", "div", "with:", "label", "renderMenuOn:"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuOn:",
category: 'rendering',
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
args: ["html"],
source: "renderMenuOn: html\x0a\x09| commands |\x0a\x09\x0a\x09commands := self menuCommands.\x0a\x09commands isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'btn-group cog';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn dropdown-toggle';\x0a\x09\x09\x09\x09at: 'data-toggle' put: 'dropdown';\x0a\x09\x09\x09\x09with: [ (html tag: 'i') class: 'icon-cog' ].\x0a\x09\x09html ul \x0a\x09\x09\x09class: 'dropdown-menu pull-right';\x0a\x09\x09\x09with: [ \x0a\x09\x09\x09\x09self menuCommands do: [ :each | \x0a\x09\x09\x09\x09\x09html li with: [ html a \x0a\x09\x09\x09\x09\x09\x09with: each menuLabel;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self execute: each ] ] ] ] ]",
messageSends: ["menuCommands", "ifTrue:", "isEmpty", "class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "menuLabel", "onClick:", "execute:", "li"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
category: 'accessing',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLToolListWidget.superclass.fn.prototype._selectedItem_.apply(_st(self), [anItem]);
self._updateMenu();
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},smalltalk.HLToolListWidget)})},
args: ["anItem"],
source: "selectedItem: anItem\x0a\x09\x22Selection changed, update the cog menu\x22\x0a\x09\x0a\x09super selectedItem: anItem.\x0a\x09self updateMenu",
messageSends: ["selectedItem:", "updateMenu"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLToolListWidget.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(_st(self._model())._announcer())._unsubscribe_(self);
_st(_st(self._model())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLToolListWidget)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09\x0a\x09self model announcer unsubscribe: self.\x0a\x09self model systemAnnouncer unsubscribe: self",
messageSends: ["unregister", "unsubscribe:", "announcer", "model", "systemAnnouncer"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMenu",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self._wrapper())._asJQuery())._find_(".cog"))._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderMenuOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".list-label"));
return self}, function($ctx1) {$ctx1.fill(self,"updateMenu",{},smalltalk.HLToolListWidget)})},
args: [],
source: "updateMenu\x0a\x09(self wrapper asJQuery find: '.cog') remove.\x0a\x09\x0a\x09[ :html | self renderMenuOn: html ] \x0a\x09\x09appendToJQuery: (self wrapper asJQuery find: '.list-label')",
messageSends: ["remove", "find:", "asJQuery", "wrapper", "appendToJQuery:", "renderMenuOn:"],
referencedClasses: []
}),
smalltalk.HLToolListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a    \x09model: aModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLToolListWidget.klass);


smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment', 'history'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
category: 'actions',
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
args: ["aTab"],
source: "activate: aTab\x0a\x09self keyBinder flushBindings.\x0a\x09aTab registerBindings.\x0a\x09activeTab := aTab.\x0a\x09\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09addToHistory: aTab;\x0a\x09\x09show: aTab",
messageSends: ["flushBindings", "keyBinder", "registerBindings", "refresh", "addToHistory:", "show:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "activeTab",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeTab"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{},smalltalk.HLManager)})},
args: [],
source: "activeTab\x0a\x09^ activeTab",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabs())._add_(aTab);
self._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},smalltalk.HLManager)})},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a    self activate: aTab",
messageSends: ["add:", "tabs", "activate:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addToHistory:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeFromHistory_(aTab);
_st(self._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab},smalltalk.HLManager)})},
args: ["aTab"],
source: "addToHistory: aTab\x0a\x09self removeFromHistory: aTab.\x0a\x09self history add: aTab",
messageSends: ["removeFromHistory:", "add:", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifFalse:",
category: 'actions',
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
args: ["aString", "aBlock"],
source: "confirm: aString ifFalse: aBlock\x0a\x09(HLConfirmationWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09cancelBlock: aBlock;\x0a\x09\x09yourself)\x0a\x09\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "cancelBlock:", "yourself"],
referencedClasses: ["HLConfirmationWidget"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
category: 'actions',
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
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09(HLConfirmationWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09yourself)\x0a\x09\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "actionBlock:", "yourself"],
referencedClasses: ["HLConfirmationWidget"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultEnvironment",
category: 'defaults',
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
args: [],
source: "defaultEnvironment\x0a\x09\x22If helios is loaded from within a frame, answer the parent window environment\x22\x0a\x09\x0a\x09| parent |\x0a\x09\x0a\x09parent := window opener ifNil: [ window parent ].\x0a\x09parent ifNil: [ ^ Environment new ].\x0a\x09\x0a\x09^ ((parent at: 'smalltalk')\x0a\x09\x09at: 'Environment') new",
messageSends: ["ifNil:", "parent", "opener", "new", "at:"],
referencedClasses: ["Environment"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
category: 'accessing',
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
args: [],
source: "environment\x0a\x09\x22The default environment used by all Helios objects\x22\x0a    \x0a\x09^ environment ifNil: [ environment := self defaultEnvironment ]",
messageSends: ["ifNil:", "defaultEnvironment"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLManager)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
category: 'accessing',
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
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@history"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{aCollection:aCollection},smalltalk.HLManager)})},
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09HLErrorHandler register.\x0a\x09HLProgressHandler register.\x0a\x09\x0a\x09self registerInspector: HLInspector.\x0a\x09self registerErrorHandler: ErrorHandler current.\x0a\x09self registerProgressHandler: ProgressHandler current.\x0a    self keyBinder setupEvents",
messageSends: ["initialize", "register", "registerInspector:", "registerErrorHandler:", "current", "registerProgressHandler:", "setupEvents", "keyBinder"],
referencedClasses: ["HLErrorHandler", "HLProgressHandler", "HLInspector", "ErrorHandler", "ProgressHandler"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
category: 'accessing',
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
args: [],
source: "keyBinder\x0a\x09^ keyBinder ifNil: [ keyBinder := HLKeyBinder new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLKeyBinder"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".navbar"))._remove();
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLManager)})},
args: [],
source: "refresh\x0a\x09(window jQuery: '.navbar') remove.\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
category: 'actions',
fn: function (anErrorHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerErrorHandler_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.HLManager)})},
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09self environment registerErrorHandler: anErrorHandler",
messageSends: ["registerErrorHandler:", "environment"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
category: 'actions',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerInspector_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.HLManager)})},
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09self environment registerInspector: anInspector",
messageSends: ["registerInspector:", "environment"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
category: 'actions',
fn: function (aProgressHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerProgressHandler_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.HLManager)})},
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09self environment registerProgressHandler: aProgressHandler",
messageSends: ["registerProgressHandler:", "environment"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeActiveTab",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeTab_(self._activeTab());
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},smalltalk.HLManager)})},
args: [],
source: "removeActiveTab\x0a\x09self removeTab: self activeTab",
messageSends: ["removeTab:", "activeTab"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromHistory:",
category: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._history_(_st(self._history())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq_eq(aTab);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab},smalltalk.HLManager)})},
args: ["aTab"],
source: "removeFromHistory: aTab\x0a\x09self history: (self history reject: [ :each | each == aTab ])",
messageSends: ["history:", "reject:", "==", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab:",
category: 'actions',
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
args: ["aTab"],
source: "removeTab: aTab\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self removeFromHistory: aTab.\x0a\x09self tabs remove: aTab.\x0a\x09self keyBinder flushBindings.\x0a\x09aTab remove.\x0a\x09self refresh.\x0a\x09self history ifNotEmpty: [\x0a\x09\x09self history last activate ]",
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "remove", "refresh", "ifNotEmpty:", "activate", "last", "history"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddOn:",
category: 'rendering',
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
args: ["html"],
source: "renderAddOn: html\x0a    html li \x0a    \x09class: 'dropdown';\x0a        with: [ \x0a\x09\x09\x09html a \x0a        \x09\x09class: 'dropdown-toggle';\x0a           \x09 \x09at: 'data-toggle' put: 'dropdown';\x0a            \x09with: [ \x0a            \x09\x09html with: 'Open...'.\x0a  \x09\x09\x09\x09\x09(html tag: 'b') class: 'caret' ].\x0a           html ul \x0a           \x09\x09class: 'dropdown-menu';\x0a                with: [\x0a                  \x09((HLWidget withAllSubclasses\x0a                    \x09select: [ :each | each canBeOpenAsTab ])\x0a                        sorted: [ :a :b | a tabPriority < b tabPriority ])\x0a                        do: [ :each |\x0a  \x09\x09\x09\x09\x09\x09\x09html li with: [\x0a                      \x09\x09\x09html a \x0a                                \x09with: each tabLabel;\x0a      \x09\x09\x09\x09\x09\x09\x09\x09onClick: [ each openAsTab ] ] ] ] ]",
messageSends: ["class:", "li", "with:", "a", "at:put:", "tag:", "ul", "do:", "tabLabel", "onClick:", "openAsTab", "sorted:", "<", "tabPriority", "select:", "canBeOpenAsTab", "withAllSubclasses"],
referencedClasses: ["HLWidget"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'navbar navbar-fixed-top';\x0a\x09\x09with: [ html div \x0a\x09\x09\x09class: 'navbar-inner';\x0a\x09\x09\x09with: [ self renderTabsOn: html ] ]",
messageSends: ["class:", "div", "with:", "renderTabsOn:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
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
args: ["html"],
source: "renderTabsOn: html\x0a\x09html ul \x0a\x09\x09class: 'nav';\x0a\x09\x09with: [ \x0a        \x09self tabs do: [ :each |\x0a\x09\x09\x09\x09html li \x0a\x09\x09\x09\x09\x09class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09with: [\x0a      \x09\x09\x09\x09\x09\x09\x09((html tag: 'i') class: 'close')\x0a  \x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self removeTab: each ].\x0a                              \x09html span \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09class: each cssClass;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09with: each displayLabel ];\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ each activate ] ] ].\x0a\x09\x09\x09self renderAddOn: html ]",
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "onClick:", "removeTab:", "tag:", "cssClass", "span", "displayLabel", "a", "activate", "tabs", "renderAddOn:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
category: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_value_do_(aString,"",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self \x0a\x09\x09request: aString\x0a\x09\x09value: ''\x0a\x09\x09do: aBlock",
messageSends: ["request:value:do:"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
category: 'actions',
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
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09(HLRequestWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09value: valueString;\x0a\x09\x09yourself)\x0a\x09\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "actionBlock:", "value:", "yourself"],
referencedClasses: ["HLRequestWidget"]
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'rendering',
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
args: ["aTab"],
source: "show: aTab\x0a\x09self tabs do: [ :each | each hide ].\x0a\x09aTab show; focus",
messageSends: ["do:", "hide", "tabs", "show", "focus"],
referencedClasses: []
}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
category: 'accessing',
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
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ tabs := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "clearKeydownEvent",
category: 'private',
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
args: [],
source: "clearKeydownEvent\x0a\x09\x22Prevent default keydown event with arrow key from scrolling the parent page\x0a\x09when helios is run inside a frame.\x22\x0a\x09\x0a\x09(window jQuery: 'body') keydown: [ :e | \x0a\x09\x09(e keyCode >= 37 and: [ e keyCode <= 40 ])\x0a\x09\x09\x09ifTrue: [ false ] ]",
messageSends: ["keydown:", "ifTrue:", "and:", "<=", "keyCode", ">=", "jQuery:"],
referencedClasses: []
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
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
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self basicNew initialize ]",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._appendToJQuery_("body"._asJQuery());
self._clearKeydownEvent();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLManager.klass)})},
args: [],
source: "initialize\x0a\x09self current appendToJQuery: 'body' asJQuery.\x0a\x09self clearKeydownEvent",
messageSends: ["appendToJQuery:", "asJQuery", "current", "clearKeydownEvent"],
referencedClasses: []
}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLManager.klass)})},
args: [],
source: "new\x0a\x09\x22Use current instead\x22\x0a\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLModalWidget', smalltalk.HLWidget, [], 'Helios-Core');
smalltalk.HLModalWidget.comment="I implement an abstract modal widget.";
smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},smalltalk.HLModalWidget)})},
args: [],
source: "cancel\x0a\x09self remove",
messageSends: ["remove"],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLModalWidget)})},
args: [],
source: "cssClass\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09(window jQuery: '.dialog') removeClass: 'active'.\x0a\x09[ \x0a\x09\x09(window jQuery: '#overlay') remove.\x0a\x09\x09(window jQuery: '.dialog') remove\x0a\x09] valueWithTimeout: 300",
messageSends: ["removeClass:", "jQuery:", "valueWithTimeout:", "remove"],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLModalWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
args: ["html"],
source: "renderContentOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div id: 'overlay'.\x0a\x09html div \x0a\x09\x09class: 'dialog ', self cssClass;\x0a\x09\x09with: [\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09renderMainOn: html;\x0a\x09\x09\x09\x09renderButtonsOn: html ].\x0a\x0a\x09(window jQuery: '.dialog') addClass: 'active'.\x0a\x09self setupKeyBindings",
messageSends: ["id:", "div", "class:", ",", "cssClass", "with:", "renderMainOn:", "renderButtonsOn:", "addClass:", "jQuery:", "setupKeyBindings"],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLModalWidget)})},
args: ["html"],
source: "renderMainOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
category: 'rendering',
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
args: [],
source: "setupKeyBindings\x0a\x09(window jQuery: '.dialog') keyup: [ :e |\x0a\x09\x09e keyCode = 27 ifTrue: [ self cancel ] ]",
messageSends: ["keyup:", "ifTrue:", "cancel", "=", "keyCode", "jQuery:"],
referencedClasses: []
}),
smalltalk.HLModalWidget);



smalltalk.addClass('HLConfirmationWidget', smalltalk.HLModalWidget, ['confirmationString', 'actionBlock', 'cancelBlock'], 'Helios-Core');
smalltalk.HLConfirmationWidget.comment="I display confirmation messages. \x0a\x0aInstead of creating an instance directly, use `HLWidget >> #confirm:ifTrue:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
category: 'accessing',
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
args: [],
source: "actionBlock\x0a\x09^ actionBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"actionBlock:",{aBlock:aBlock},smalltalk.HLConfirmationWidget)})},
args: ["aBlock"],
source: "actionBlock: aBlock\x0a\x09actionBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cancelBlock())._value();
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},smalltalk.HLConfirmationWidget)})},
args: [],
source: "cancel\x0a\x09self cancelBlock value.\x0a\x09self remove",
messageSends: ["value", "cancelBlock", "remove"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
category: 'accessing',
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
args: [],
source: "cancelBlock\x0a\x09^ cancelBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cancelBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"cancelBlock:",{aBlock:aBlock},smalltalk.HLConfirmationWidget)})},
args: ["aBlock"],
source: "cancelBlock: aBlock\x0a\x09cancelBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._actionBlock())._value();
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},smalltalk.HLConfirmationWidget)})},
args: [],
source: "confirm\x0a\x09self actionBlock value.\x0a\x09self remove",
messageSends: ["value", "actionBlock", "remove"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString",
category: 'accessing',
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
args: [],
source: "confirmationString\x0a\x09^ confirmationString ifNil: [ 'Confirm' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@confirmationString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"confirmationString:",{aString:aString},smalltalk.HLConfirmationWidget)})},
args: ["aString"],
source: "confirmationString: aString\x0a\x09confirmationString := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09(window jQuery: '.dialog') removeClass: 'active'.\x0a\x09[ \x0a\x09\x09(window jQuery: '#overlay') remove.\x0a\x09\x09(window jQuery: '.dialog') remove\x0a\x09] valueWithTimeout: 300",
messageSends: ["removeClass:", "jQuery:", "valueWithTimeout:", "remove"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
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
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'button';\x0a\x09\x09\x09\x09with: 'Cancel';\x0a\x09\x09\x09\x09onClick: [ self cancel ].\x0a\x09\x09\x09confirmButton := html button\x0a\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09with: 'Confirm';\x0a\x09\x09\x09\x09onClick: [ self confirm ] ].\x0a\x0a\x09confirmButton asJQuery focus",
messageSends: ["class:", "div", "with:", "button", "onClick:", "cancel", "confirm", "focus", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._span())._with_(self._confirmationString());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLConfirmationWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09html span with: self confirmationString",
messageSends: ["with:", "confirmationString", "span"],
referencedClasses: []
}),
smalltalk.HLConfirmationWidget);



smalltalk.addClass('HLRequestWidget', smalltalk.HLConfirmationWidget, ['input', 'value'], 'Helios-Core');
smalltalk.HLRequestWidget.comment="I display a modal window requesting user input.\x0a\x0aInstead of creating instances manually, use `HLWidget >> #request:do:` and `#request:value:do:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._actionBlock())._value_(_st(_st(self["@input"])._asJQuery())._val());
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},smalltalk.HLRequestWidget)})},
args: [],
source: "confirm\x0a\x09self actionBlock value: input asJQuery val.\x0a\x09self remove",
messageSends: ["value:", "val", "asJQuery", "actionBlock", "remove"],
referencedClasses: []
}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "large";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.HLRequestWidget)})},
args: [],
source: "cssClass\x0a\x09^ 'large'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLRequestWidget.superclass.fn.prototype._renderMainOn_.apply(_st(self), [html]);
self["@input"]=_st(html)._textarea();
_st(_st(self["@input"])._asJQuery())._val_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLRequestWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09super renderMainOn: html.\x0a\x09input := html textarea.\x0a\x09input asJQuery val: self value",
messageSends: ["renderMainOn:", "textarea", "val:", "value", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
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
args: [],
source: "value\x0a\x09^ value ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},smalltalk.HLRequestWidget)})},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRequestWidget);



smalltalk.addClass('HLProgressWidget', smalltalk.HLModalWidget, ['progressBars', 'visible'], 'Helios-Core');
smalltalk.HLProgressWidget.comment="I am a widget used to display progress modal dialogs.\x0a\x0aMy default instance is accessed with `HLProgressWidget class >> #default`.\x0a\x0aSee `HLProgressHandler` for usage.";
smalltalk.addMethod(
smalltalk.method({
selector: "addProgressBar:",
category: 'actions',
fn: function (aProgressBar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show();
_st(self._progressBars())._add_(aProgressBar);
_st(aProgressBar)._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".dialog"));
return self}, function($ctx1) {$ctx1.fill(self,"addProgressBar:",{aProgressBar:aProgressBar},smalltalk.HLProgressWidget)})},
args: ["aProgressBar"],
source: "addProgressBar: aProgressBar\x0a\x09self show.\x0a\x09self progressBars add: aProgressBar.\x0a\x09aProgressBar appendToJQuery: (self wrapper asJQuery find: '.dialog')",
messageSends: ["show", "add:", "progressBars", "appendToJQuery:", "find:", "asJQuery", "wrapper"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
category: 'actions',
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
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09| progressBar |\x0a\x09\x0a\x09progressBar := HLProgressBarWidget new\x0a\x09\x09parent: self;\x0a\x09\x09label: aString;\x0a\x09\x09workBlock: aBlock;\x0a\x09\x09collection: aCollection;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self addProgressBar: progressBar.\x0a\x09progressBar start",
messageSends: ["parent:", "new", "label:", "workBlock:", "collection:", "yourself", "addProgressBar:", "start"],
referencedClasses: ["HLProgressBarWidget"]
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeProgressBar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.HLProgressWidget)})},
args: [],
source: "flush\x0a\x09self progressBars do: [ :each |\x0a\x09\x09self removeProgressBar: each ]",
messageSends: ["do:", "removeProgressBar:", "progressBars"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
category: 'testing',
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
args: [],
source: "isVisible\x0a\x09^ visible ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "progressBars",
category: 'accessing',
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
args: [],
source: "progressBars\x0a\x09^ progressBars ifNil: [ progressBars := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09self isVisible ifTrue: [\x0a\x09\x09visible := false.\x0a\x09\x09super remove ]",
messageSends: ["ifTrue:", "remove", "isVisible"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProgressBar:",
category: 'actions',
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
args: ["aProgressBar"],
source: "removeProgressBar: aProgressBar\x0a\x09self progressBars remove: aProgressBar ifAbsent: [].\x0a\x09aProgressBar wrapper asJQuery remove.\x0a\x09\x0a\x09self progressBars ifEmpty: [ self remove ]",
messageSends: ["remove:ifAbsent:", "progressBars", "remove", "asJQuery", "wrapper", "ifEmpty:"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLProgressWidget)})},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},smalltalk.HLProgressWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09self progressBars do: [ :each |\x0a\x09\x09html with: each ]",
messageSends: ["do:", "with:", "progressBars"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
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
args: [],
source: "show\x0a\x09self isVisible ifFalse: [\x0a\x09\x09visible := true.\x0a\x09\x09self appendToJQuery: 'body' asJQuery ]",
messageSends: ["ifFalse:", "appendToJQuery:", "asJQuery", "isVisible"],
referencedClasses: []
}),
smalltalk.HLProgressWidget);


smalltalk.HLProgressWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
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
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLProgressWidget.klass);


smalltalk.addClass('HLProgressBarWidget', smalltalk.HLWidget, ['label', 'parent', 'workBlock', 'collection', 'bar'], 'Helios-Core');
smalltalk.HLProgressBarWidget.comment="I am a widget used to display a progress bar while iterating over a collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "collection\x0a\x09^ collection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "collection:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"collection:",{aCollection:aCollection},smalltalk.HLProgressBarWidget)})},
args: ["aCollection"],
source: "collection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateAt:",
category: 'actions',
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
args: ["anInteger"],
source: "evaluateAt: anInteger\x0a\x09self updateProgress: (anInteger / self collection size) * 100.\x0a\x09anInteger <= self collection size\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09[ \x0a\x09\x09\x09\x09self workBlock value: (self collection at: anInteger).\x0a\x09\x09\x09\x09self evaluateAt: anInteger + 1 ] valueWithTimeout: 10 ]\x0a\x09\x09ifFalse: [ [ self remove ] valueWithTimeout: 500 ]",
messageSends: ["updateProgress:", "*", "/", "size", "collection", "ifTrue:ifFalse:", "valueWithTimeout:", "value:", "at:", "workBlock", "evaluateAt:", "+", "remove", "<="],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLProgressBarWidget)})},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (aProgress){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aProgress;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aProgress:aProgress},smalltalk.HLProgressBarWidget)})},
args: ["aProgress"],
source: "parent: aProgress\x0a\x09parent := aProgress",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._removeProgressBar_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "remove\x0a\x09self parent removeProgressBar: self",
messageSends: ["removeProgressBar:", "parent"],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
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
args: ["html"],
source: "renderContentOn: html\x0a\x09html span with: self label.\x0a\x09html div \x0a\x09\x09class: 'progress';\x0a\x09\x09with: [\x0a\x09\x09\x09bar := html div \x0a\x09\x09\x09\x09class: 'bar';\x0a\x09\x09\x09\x09style: 'width: 0%' ]",
messageSends: ["with:", "label", "span", "class:", "div", "style:"],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._evaluateAt_((1));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "start\x0a\x09\x22Make sure the UI has some time to update itself between each iteration\x22\x0a\x09\x0a\x09self evaluateAt: 1",
messageSends: ["evaluateAt:"],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateProgress:",
category: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@bar"])._asJQuery())._css_put_("width",_st(_st(anInteger)._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"updateProgress:",{anInteger:anInteger},smalltalk.HLProgressBarWidget)})},
args: ["anInteger"],
source: "updateProgress: anInteger\x0a\x09bar asJQuery css: 'width' put: anInteger asString, '%'",
messageSends: ["css:put:", ",", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@workBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"workBlock",{},smalltalk.HLProgressBarWidget)})},
args: [],
source: "workBlock\x0a\x09^ workBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@workBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"workBlock:",{aBlock:aBlock},smalltalk.HLProgressBarWidget)})},
args: ["aBlock"],
source: "workBlock: aBlock\x0a\x09workBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget);


smalltalk.HLProgressBarWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
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
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLProgressBarWidget.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLSUnit.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "sunit";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLSUnit.klass)})},
args: [],
source: "tabClass\x0a\x09^ 'sunit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLSUnit.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'SUnit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1000);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLSUnit.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 1000",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSUnit.klass);


