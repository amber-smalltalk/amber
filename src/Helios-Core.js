define("helios/Helios-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Core');
smalltalk.packages["Helios-Core"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLModel', globals.InterfacingObject, ['announcer', 'environment'], 'Helios-Core');
globals.HLModel.comment="I am the abstract superclass of all models of Helios.\x0aI am the \x22Model\x22 part of the MVC pattern implementation in Helios.\x0a\x0aI provide access to an `Environment` object and both a local (model-specific) and global (system-specific) announcer.\x0a\x0aThe `#withChangesDo:` method is handy for performing model changes ensuring that all widgets are aware of the change and can prevent it from happening.\x0a\x0aModifications of the system should be done via commands (see `HLCommand` and subclasses).";
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@announcer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.HLModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._manager())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},globals.HLModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ self manager environment ]",
messageSends: ["ifNil:", "environment", "manager"],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
protocol: 'accessing',
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBrowserModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferencesModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReferencesModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isToolModel\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},globals.HLModel)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._systemAnnouncer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},globals.HLModel)})},
args: [],
source: "systemAnnouncer\x0a\x09^ self environment systemAnnouncer",
messageSends: ["systemAnnouncer", "environment"],
referencedClasses: []
}),
globals.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withChangesDo:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
function $HLAboutToChange(){return globals.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
function $HLChangeForbidden(){return globals.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($HLAboutToChange())._new();
_st($1)._actionBlock_(aBlock);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($HLChangeForbidden(),(function(ex){
}));
return self}, function($ctx1) {$ctx1.fill(self,"withChangesDo:",{aBlock:aBlock},globals.HLModel)})},
args: ["aBlock"],
source: "withChangesDo: aBlock\x0a\x09[ \x0a\x09\x09self announcer announce: (HLAboutToChange new\x0a\x09\x09\x09actionBlock: aBlock;\x0a\x09\x09\x09yourself).\x0a\x09\x09aBlock value.\x0a\x09]\x0a\x09\x09on: HLChangeForbidden \x0a\x09\x09do: [ :ex | ]",
messageSends: ["on:do:", "announce:", "announcer", "actionBlock:", "new", "yourself", "value"],
referencedClasses: ["HLAboutToChange", "HLChangeForbidden"]
}),
globals.HLModel);



smalltalk.addClass('HLFinder', globals.HLModel, [], 'Helios-Core');
globals.HLFinder.comment="I am the `Finder` service handler of Helios.\x0a\x0aFinding a class will open a new class browser, while finding a method will open a references browser.";
smalltalk.addMethod(
smalltalk.method({
selector: "findClass:",
protocol: 'finding',
fn: function (aClass){
var self=this;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLBrowser())._openAsTab())._openClassNamed_(_st(aClass)._name());
return self}, function($ctx1) {$ctx1.fill(self,"findClass:",{aClass:aClass},globals.HLFinder)})},
args: ["aClass"],
source: "findClass: aClass\x0a\x09HLBrowser openAsTab openClassNamed: aClass name",
messageSends: ["openClassNamed:", "openAsTab", "name"],
referencedClasses: ["HLBrowser"]
}),
globals.HLFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "findMethod:",
protocol: 'finding',
fn: function (aCompiledMethod){
var self=this;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLBrowser())._openAsTab())._openMethod_(aCompiledMethod);
return self}, function($ctx1) {$ctx1.fill(self,"findMethod:",{aCompiledMethod:aCompiledMethod},globals.HLFinder)})},
args: ["aCompiledMethod"],
source: "findMethod: aCompiledMethod\x0a\x09HLBrowser openAsTab openMethod: aCompiledMethod",
messageSends: ["openMethod:", "openAsTab"],
referencedClasses: ["HLBrowser"]
}),
globals.HLFinder);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:",
protocol: 'finding',
fn: function (aString){
var self=this;
var foundClass;
function $HLReferences(){return globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
foundClass=_st(_st(self._environment())._classes())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._name()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
}));
$1=foundClass;
if(($receiver = $1) == null || $receiver.isNil){
_st(_st($HLReferences())._openAsTab())._search_(aString);
} else {
self._findClass_(foundClass);
};
return self}, function($ctx1) {$ctx1.fill(self,"findString:",{aString:aString,foundClass:foundClass},globals.HLFinder)})},
args: ["aString"],
source: "findString: aString\x0a\x09| foundClass |\x0a\x09\x0a\x09foundClass := self environment classes \x0a\x09\x09detect: [ :each | each name = aString ]\x0a\x09\x09ifNone: [ nil ].\x0a\x09\x0a\x09foundClass \x0a\x09\x09ifNil: [ HLReferences openAsTab search: aString ]\x0a\x09\x09ifNotNil: [ self findClass: foundClass ]",
messageSends: ["detect:ifNone:", "classes", "environment", "=", "name", "ifNil:ifNotNil:", "search:", "openAsTab", "findClass:"],
referencedClasses: ["HLReferences"]
}),
globals.HLFinder);



smalltalk.addClass('HLToolModel', globals.HLModel, ['selectedClass', 'selectedPackage', 'selectedProtocol', 'selectedSelector'], 'Helios-Core');
globals.HLToolModel.comment="I am a model specific to package and class manipulation. All browsers should either use me or a subclass as their model.\x0a\x0aI provide methods for package, class, protocol and method manipulation and access, forwarding to my environment.\x0a\x0aI also handle compilation of classes and methods as well as compilation and parsing errors.";
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLInstVarAdded(){return globals.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._environment();
$2=self._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
_st($1)._addInstVarNamed_to_(aString,$2);
$3=_st($HLInstVarAdded())._new();
_st($3)._theClass_(self._selectedClass());
_st($3)._variableName_(aString);
$4=_st($3)._yourself();
_st(self._announcer())._announce_($4);
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "addInstVarNamed: aString\x0a\x09self environment addInstVarNamed: aString to: self selectedClass.\x0a\x09self announcer announce: (HLInstVarAdded new\x0a\x09\x09theClass: self selectedClass;\x0a\x09\x09variableName: aString;\x0a\x09\x09yourself)",
messageSends: ["addInstVarNamed:to:", "environment", "selectedClass", "announce:", "announcer", "theClass:", "new", "variableName:", "yourself"],
referencedClasses: ["HLInstVarAdded"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "-- all --";
},
args: [],
source: "allProtocol\x0a\x09^ '-- all --'",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._allSelectors();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},globals.HLToolModel)})},
args: [],
source: "allSelectors\x0a\x09^ self environment allSelectors",
messageSends: ["allSelectors", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},globals.HLToolModel)})},
args: [],
source: "availableClassNames\x0a\x09^ self environment availableClassNames",
messageSends: ["availableClassNames", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},globals.HLToolModel)})},
args: [],
source: "availablePackageNames\x0a\x09^ self environment availablePackageNames",
messageSends: ["availablePackageNames", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackages",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackages",{},globals.HLToolModel)})},
args: [],
source: "availablePackages\x0a\x09^ self environment availablePackageNames",
messageSends: ["availablePackageNames", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocols",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._availableProtocolsFor_(self._selectedClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableProtocols",{},globals.HLToolModel)})},
args: [],
source: "availableProtocols\x0a\x09^ self environment availableProtocolsFor: self selectedClass",
messageSends: ["availableProtocolsFor:", "environment", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackageOnSuccess:onError:",
protocol: 'commands actions',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._commitPackage_onSuccess_onError_(self._packageToCommit(),aBlock,anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commitPackageOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.HLToolModel)})},
args: ["aBlock", "anotherBlock"],
source: "commitPackageOnSuccess: aBlock onError: anotherBlock\x0a\x09self environment \x0a\x09\x09commitPackage: self packageToCommit\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
messageSends: ["commitPackage:onSuccess:onError:", "environment", "packageToCommit"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compilationProtocol",
protocol: 'private',
fn: function (){
var self=this;
var currentProtocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$receiver;
currentProtocol=self._selectedProtocol();
$1=currentProtocol;
if(($receiver = $1) == null || $receiver.isNil){
currentProtocol=self._unclassifiedProtocol();
$ctx1.sendIdx["unclassifiedProtocol"]=1;
currentProtocol;
} else {
$1;
};
$2=self._selectedMethod();
$ctx1.sendIdx["selectedMethod"]=1;
if(($receiver = $2) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"compilationProtocol",{currentProtocol:currentProtocol},globals.HLToolModel)})},
args: [],
source: "compilationProtocol\x0a\x09| currentProtocol |\x0a\x09\x0a\x09currentProtocol := self selectedProtocol.\x0a\x09currentProtocol ifNil: [ currentProtocol := self unclassifiedProtocol ].\x0a\x09self selectedMethod ifNotNil: [ currentProtocol := self selectedMethod protocol ].\x0a\x0a\x09^ currentProtocol = self allProtocol\x0a\x09\x09ifTrue: [ self unclassifiedProtocol ]\x0a\x09\x09ifFalse: [ currentProtocol ]",
messageSends: ["selectedProtocol", "ifNil:", "unclassifiedProtocol", "ifNotNil:", "selectedMethod", "protocol", "ifTrue:ifFalse:", "=", "allProtocol"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassComment_for_(aString,self._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "compileClassComment: aString\x0a\x09self environment \x0a\x09\x09compileClassComment: aString \x0a\x09\x09for: self selectedClass",
messageSends: ["compileClassComment:for:", "environment", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._compileClassDefinition_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self environment compileClassDefinition: aString",
messageSends: ["compileClassDefinition:", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
protocol: 'compiling',
fn: function (aString){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
self._withCompileErrorHandling_((function(){
return smalltalk.withContext(function($ctx2) {
method=_st(self._environment())._compileMethod_for_protocol_(aString,self._selectedClass(),self._compilationProtocol());
method;
return self._selectedMethod_(method);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString,method:method},globals.HLToolModel)})},
args: ["aString"],
source: "compileMethod: aString\x0a\x09| method |\x0a\x09\x0a\x09self withCompileErrorHandling: [ \x0a\x09\x09method := self environment \x0a\x09\x09\x09compileMethod: aString \x0a\x09\x09\x09for: self selectedClass\x0a\x09\x09\x09protocol: self compilationProtocol.\x0a\x0a\x09\x09self selectedMethod: method ]",
messageSends: ["withCompileErrorHandling:", "compileMethod:for:protocol:", "environment", "selectedClass", "compilationProtocol", "selectedMethod:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClassTo:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._copyClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"copyClassTo:",{aClassName:aClassName},globals.HLToolModel)})},
args: ["aClassName"],
source: "copyClassTo: aClassName\x0a\x09self withChangesDo: [ \x0a\x09\x09self environment \x0a\x09\x09\x09copyClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
messageSends: ["withChangesDo:", "copyClass:to:", "environment", "theNonMetaClass", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "forceSelectedClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedClass_(nil);
$ctx2.sendIdx["selectedClass:"]=1;
$1=self._selectedClass_(aClass);
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"forceSelectedClass:",{aClass:aClass},globals.HLToolModel)})},
args: ["aClass"],
source: "forceSelectedClass: aClass\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedClass: nil;\x0a\x09\x09\x09selectedClass: aClass ]",
messageSends: ["withChangesDo:", "selectedClass:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "forceSelectedMethod:",
protocol: 'accessing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedMethod_(nil);
$ctx2.sendIdx["selectedMethod:"]=1;
$1=self._selectedMethod_(aMethod);
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"forceSelectedMethod:",{aMethod:aMethod},globals.HLToolModel)})},
args: ["aMethod"],
source: "forceSelectedMethod: aMethod\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedMethod: nil;\x0a\x09\x09\x09selectedMethod: aMethod ]",
messageSends: ["withChangesDo:", "selectedMethod:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "forceSelectedPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedPackage_(nil);
$ctx2.sendIdx["selectedPackage:"]=1;
$1=self._selectedPackage_(aPackage);
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"forceSelectedPackage:",{aPackage:aPackage},globals.HLToolModel)})},
args: ["aPackage"],
source: "forceSelectedPackage: aPackage\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedPackage: nil;\x0a\x09\x09\x09selectedPackage: aPackage ]",
messageSends: ["withChangesDo:", "selectedPackage:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "forceSelectedProtocol:",
protocol: 'accessing',
fn: function (aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self._selectedProtocol_(nil);
$ctx2.sendIdx["selectedProtocol:"]=1;
$1=self._selectedProtocol_(aProtocol);
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"forceSelectedProtocol:",{aProtocol:aProtocol},globals.HLToolModel)})},
args: ["aProtocol"],
source: "forceSelectedProtocol: aProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedProtocol: nil;\x0a\x09\x09\x09selectedProtocol: aProtocol ]",
messageSends: ["withChangesDo:", "selectedProtocol:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleCompileError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLCompileErrorRaised(){return globals.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLCompileErrorRaised())._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleCompileError:",{anError:anError},globals.HLToolModel)})},
args: ["anError"],
source: "handleCompileError: anError\x0a\x09self announcer announce: (HLCompileErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["announce:", "announcer", "error:", "new", "yourself"],
referencedClasses: ["HLCompileErrorRaised"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleParseError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
var split,line,column,messageToInsert;
function $HLParseErrorRaised(){return globals.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$7,$8,$9,$5;
split=_st(_st(anError)._messageText())._tokenize_(" : ");
$ctx1.sendIdx["tokenize:"]=1;
messageToInsert=_st(split)._second();
$ctx1.sendIdx["second"]=1;
$1=_st(split)._first();
$ctx1.sendIdx["first"]=1;
$3=_st(split)._first();
$ctx1.sendIdx["first"]=2;
$2=_st($3)._size();
split=_st($1)._copyFrom_to_((21),$2);
split=_st(split)._tokenize_(" column ");
line=_st(split)._first();
column=_st(split)._second();
$4=self._announcer();
$6=_st($HLParseErrorRaised())._new();
$7=$6;
$8=_st(line)._asNumber();
$ctx1.sendIdx["asNumber"]=1;
_st($7)._line_($8);
_st($6)._column_(_st(column)._asNumber());
_st($6)._message_(messageToInsert);
_st($6)._error_(anError);
$9=_st($6)._yourself();
$5=$9;
_st($4)._announce_($5);
return self}, function($ctx1) {$ctx1.fill(self,"handleParseError:",{anError:anError,split:split,line:line,column:column,messageToInsert:messageToInsert},globals.HLToolModel)})},
args: ["anError"],
source: "handleParseError: anError\x0a\x09| split line column messageToInsert |\x0a\x09\x0a\x09split := anError messageText tokenize: ' : '.\x0a\x09messageToInsert := split second.\x0a\x0a\x09\x2221 = 'Parse error on line ' size + 1\x22\x0a\x09split := split first copyFrom: 21 to: split first size.\x0a\x09\x0a\x09split := split tokenize: ' column '.\x0a\x09line := split first.\x0a\x09column := split second.\x0a\x09\x0a\x09self announcer announce: (HLParseErrorRaised new\x0a\x09\x09line: line asNumber;\x0a\x09\x09column: column asNumber;\x0a\x09\x09message: messageToInsert;\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["tokenize:", "messageText", "second", "copyFrom:to:", "first", "size", "announce:", "announcer", "line:", "new", "asNumber", "column:", "message:", "error:", "yourself"],
referencedClasses: ["HLParseErrorRaised"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "handleUnkownVariableError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLUnknownVariableErrorRaised(){return globals.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLUnknownVariableErrorRaised())._new();
_st($1)._error_(anError);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"handleUnkownVariableError:",{anError:anError},globals.HLToolModel)})},
args: ["anError"],
source: "handleUnkownVariableError: anError\x0a\x09self announcer announce: (HLUnknownVariableErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
messageSends: ["announce:", "announcer", "error:", "new", "yourself"],
referencedClasses: ["HLUnknownVariableErrorRaised"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isToolModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isToolModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClassToPackage:",
protocol: 'commands actions',
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveClass_toPackage_(_st(self._selectedClass())._theNonMetaClass(),aPackageName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveClassToPackage:",{aPackageName:aPackageName},globals.HLToolModel)})},
args: ["aPackageName"],
source: "moveClassToPackage: aPackageName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09toPackage: aPackageName ]",
messageSends: ["withChangesDo:", "moveClass:toPackage:", "environment", "theNonMetaClass", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToClass:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toClass_(self._selectedMethod(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToClass:",{aClassName:aClassName},globals.HLToolModel)})},
args: ["aClassName"],
source: "moveMethodToClass: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toClass: aClassName ]",
messageSends: ["withChangesDo:", "moveMethod:toClass:", "environment", "selectedMethod"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethodToProtocol:",
protocol: 'commands actions',
fn: function (aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._moveMethod_toProtocol_(self._selectedMethod(),aProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveMethodToProtocol:",{aProtocol:aProtocol},globals.HLToolModel)})},
args: ["aProtocol"],
source: "moveMethodToProtocol: aProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toProtocol: aProtocol ]",
messageSends: ["withChangesDo:", "moveMethod:toProtocol:", "environment", "selectedMethod"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "openClassNamed:",
protocol: 'commands actions',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,class_:class_},globals.HLToolModel)})},
args: ["aString"],
source: "openClassNamed: aString\x0a\x09| class |\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09class := self environment classNamed: aString.\x0a\x09\x09self selectedPackage: class package.\x0a\x09\x09self selectedClass: class ]",
messageSends: ["withChangesDo:", "classNamed:", "environment", "selectedPackage:", "package", "selectedClass:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "packageToCommit",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._selectedMethod();
if(($receiver = $2) == null || $receiver.isNil){
$1=self._selectedPackage();
} else {
var method;
method=$receiver;
$1=_st(method)._package();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageToCommit",{},globals.HLToolModel)})},
args: [],
source: "packageToCommit\x0a\x09\x22Answer the package to commit depending on the context:\x0a\x09- if a Method is selected, answer its package\x0a\x09- else answer the `selectedPackage`\x22\x0a\x09\x0a\x09^ self selectedMethod \x0a\x09\x09ifNil: [ self selectedPackage ]\x0a\x09\x09ifNotNil: [ :method | method package ]",
messageSends: ["ifNil:ifNotNil:", "selectedMethod", "selectedPackage", "package"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},globals.HLToolModel)})},
args: [],
source: "packages\x0a\x09^ self environment packages",
messageSends: ["packages", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass",
protocol: 'commands actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._manager();
$5=self._selectedClass();
$ctx2.sendIdx["selectedClass"]=1;
$4=_st($5)._theNonMetaClass();
$ctx2.sendIdx["theNonMetaClass"]=1;
$3=_st($4)._name();
$2="Do you REALLY want to remove class ".__comma($3);
return _st($1)._confirm_ifTrue_($2,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeClass_(_st(self._selectedClass())._theNonMetaClass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeClass",{},globals.HLToolModel)})},
args: [],
source: "removeClass\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove class ', self selectedClass theNonMetaClass name\x0a\x09\x09\x09ifTrue: [ self environment removeClass: self selectedClass theNonMetaClass ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "name", "theNonMetaClass", "selectedClass", "removeClass:", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod",
protocol: 'commands actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$7,$6,$5,$4,$3,$9,$8,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._manager();
$7=self._selectedMethod();
$ctx2.sendIdx["selectedMethod"]=1;
$6=_st($7)._methodClass();
$5=_st($6)._name();
$4="Do you REALLY want to remove method ".__comma($5);
$3=_st($4).__comma(" >> #");
$ctx2.sendIdx[","]=2;
$9=self._selectedMethod();
$ctx2.sendIdx["selectedMethod"]=2;
$8=_st($9)._selector();
$2=_st($3).__comma($8);
$ctx2.sendIdx[","]=1;
return _st($1)._confirm_ifTrue_($2,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeMethod_(self._selectedMethod());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},globals.HLToolModel)})},
args: [],
source: "removeMethod\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector\x0a\x09\x09\x09ifTrue: [ self environment removeMethod: self selectedMethod ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "name", "methodClass", "selectedMethod", "selector", "removeMethod:", "environment"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol",
protocol: 'commands actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._manager();
$3=self._selectedProtocol();
$ctx2.sendIdx["selectedProtocol"]=1;
$2="Do you REALLY want to remove protocol ".__comma($3);
return _st($1)._confirm_ifTrue_($2,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._removeProtocol_from_(self._selectedProtocol(),self._selectedClass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol",{},globals.HLToolModel)})},
args: [],
source: "removeProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove protocol ', self selectedProtocol\x0a\x09\x09\x09ifTrue: [ self environment \x0a\x09\x09\x09\x09removeProtocol: self selectedProtocol \x0a\x09\x09\x09\x09from: self selectedClass ] ]",
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "selectedProtocol", "removeProtocol:from:", "environment", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClassTo:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameClass_to_(_st(self._selectedClass())._theNonMetaClass(),aClassName);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameClassTo:",{aClassName:aClassName},globals.HLToolModel)})},
args: ["aClassName"],
source: "renameClassTo: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
messageSends: ["withChangesDo:", "renameClass:to:", "environment", "theNonMetaClass", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocolTo:",
protocol: 'commands actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._environment())._renameProtocol_to_in_(self._selectedProtocol(),aString,self._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocolTo:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "renameProtocolTo: aString\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameProtocol: self selectedProtocol\x0a\x09\x09\x09to: aString\x0a\x09\x09\x09in: self selectedClass ]",
messageSends: ["withChangesDo:", "renameProtocol:to:in:", "environment", "selectedProtocol", "selectedClass"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "save:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLSourceCodeSaved(){return globals.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._announcer())._announce_(_st($HLSourceCodeSaved())._new());
$1=self._shouldCompileClassDefinition_(aString);
if(smalltalk.assert($1)){
self._compileClassDefinition_(aString);
} else {
self._compileMethod_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"save:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "save: aString\x0a\x09self announcer announce: HLSourceCodeSaved new.\x0a\x09\x0a\x09(self shouldCompileClassDefinition: aString)\x0a\x09\x09ifTrue: [ self compileClassDefinition: aString ]\x0a\x09\x09ifFalse: [ self compileMethod: aString ]",
messageSends: ["announce:", "announcer", "new", "ifTrue:ifFalse:", "shouldCompileClassDefinition:", "compileClassDefinition:", "compileMethod:"],
referencedClasses: ["HLSourceCodeSaved"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "saveSourceCode",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return globals.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLSaveSourceCode())._new());
return self}, function($ctx1) {$ctx1.fill(self,"saveSourceCode",{},globals.HLToolModel)})},
args: [],
source: "saveSourceCode\x0a\x09self announcer announce: HLSaveSourceCode new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLSaveSourceCode"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedClass"];
return $1;
},
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
function $HLClassSelected(){return globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$6,$5,$7,$receiver;
$3=self._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
$2=_st($3).__eq(aClass);
$ctx1.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
return self;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(self["@selectedClass"]).__eq(aClass);
if(smalltalk.assert($4)){
self._selectedProtocol_(nil);
$ctx2.sendIdx["selectedProtocol:"]=1;
};
if(($receiver = aClass) == null || $receiver.isNil){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
$6=_st(aClass)._theNonMetaClass();
$ctx2.sendIdx["theNonMetaClass"]=1;
$5=_st($6)._package();
self._selectedPackage_($5);
$7=self._showInstance();
if(smalltalk.assert($7)){
self["@selectedClass"]=_st(aClass)._theNonMetaClass();
self["@selectedClass"];
} else {
self["@selectedClass"]=_st(aClass)._theMetaClass();
self["@selectedClass"];
};
};
self._selectedProtocol_(nil);
return _st(self._announcer())._announce_(_st($HLClassSelected())._on_(self._selectedClass()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass},globals.HLToolModel)})},
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09(self selectedClass = aClass and: [ aClass isNil ]) \x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09selectedClass = aClass ifTrue: [ \x0a\x09\x09\x09self selectedProtocol: nil ].\x0a    \x0a\x09\x09aClass \x0a   \x09\x09\x09ifNil: [ selectedClass := nil ]\x0a    \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09self selectedPackage: aClass theNonMetaClass package.\x0a\x09\x09\x09\x09self showInstance \x0a   \x09\x09\x09\x09\x09ifTrue: [ selectedClass := aClass theNonMetaClass ]\x0a     \x09\x09\x09\x09ifFalse: [ selectedClass := aClass theMetaClass ] ].\x0a\x09\x09self selectedProtocol: nil.\x0a\x09\x09self announcer announce: (HLClassSelected on: self selectedClass) ]",
messageSends: ["ifTrue:", "and:", "=", "selectedClass", "isNil", "withChangesDo:", "selectedProtocol:", "ifNil:ifNotNil:", "selectedPackage:", "package", "theNonMetaClass", "ifTrue:ifFalse:", "showInstance", "theMetaClass", "announce:", "announcer", "on:"],
referencedClasses: ["HLClassSelected"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
$1=_st(_st(self._selectedClass())._methodDictionary())._at_ifAbsent_(self["@selectedSelector"],(function(){
return nil;
}));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{},globals.HLToolModel)})},
args: [],
source: "selectedMethod\x0a\x09^ self selectedClass ifNotNil: [ \x0a\x09\x09self selectedClass methodDictionary \x0a\x09\x09\x09at: selectedSelector \x0a\x09\x09\x09ifAbsent: [ nil ] ]",
messageSends: ["ifNotNil:", "selectedClass", "at:ifAbsent:", "methodDictionary"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedMethod:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
function $HLMethodSelected(){return globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=_st(self["@selectedSelector"]).__eq(aCompiledMethod);
if(smalltalk.assert($1)){
return self;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
if(($receiver = aCompiledMethod) == null || $receiver.isNil){
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod},globals.HLToolModel)})},
args: ["aCompiledMethod"],
source: "selectedMethod: aCompiledMethod\x0a\x09selectedSelector = aCompiledMethod ifTrue: [ ^ self ].\x0a    \x0a    self withChangesDo: [\x0a\x09\x09aCompiledMethod\x0a    \x09\x09ifNil: [ selectedSelector := nil ]\x0a      \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09selectedClass := aCompiledMethod methodClass.\x0a\x09\x09\x09\x09selectedPackage := selectedClass theNonMetaClass package.\x0a\x09\x09\x09\x09selectedSelector := aCompiledMethod selector ].\x0a\x0a\x09\x09self announcer announce: (HLMethodSelected on: aCompiledMethod) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "ifNil:ifNotNil:", "methodClass", "package", "theNonMetaClass", "selector", "announce:", "announcer", "on:"],
referencedClasses: ["HLMethodSelected"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedPackage"];
return $1;
},
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedPackage"]).__eq(aPackage);
if(smalltalk.assert($1)){
return self;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@selectedPackage"]=aPackage;
self["@selectedPackage"];
self._selectedClass_(nil);
return _st(self._announcer())._announce_(_st($HLPackageSelected())._on_(aPackage));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedPackage:",{aPackage:aPackage},globals.HLToolModel)})},
args: ["aPackage"],
source: "selectedPackage: aPackage\x0a\x09selectedPackage = aPackage ifTrue: [ ^ self ].\x0a    \x0a\x09self withChangesDo: [\x0a\x09\x09selectedPackage := aPackage.\x0a\x09\x09self selectedClass: nil.\x0a\x09\x09self announcer announce: (HLPackageSelected on: aPackage) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedClass:", "announce:", "announcer", "on:"],
referencedClasses: ["HLPackageSelected"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedProtocol"];
return $1;
},
args: [],
source: "selectedProtocol\x0a\x09^ selectedProtocol",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $HLProtocolSelected(){return globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedProtocol"]).__eq(aString);
if(smalltalk.assert($1)){
return self;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self._selectedMethod_(nil);
return _st(self._announcer())._announce_(_st($HLProtocolSelected())._on_(aString));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectedProtocol:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "selectedProtocol: aString\x0a\x09selectedProtocol = aString ifTrue: [ ^ self ].\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09self selectedMethod: nil.\x0a\x09\x09self announcer announce: (HLProtocolSelected on: aString) ]",
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedMethod:", "announce:", "announcer", "on:"],
referencedClasses: ["HLProtocolSelected"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldCompileClassDefinition:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._selectedClass())._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aString)._match_("^\x5cs*[A-Z]");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldCompileClassDefinition:",{aString:aString},globals.HLToolModel)})},
args: ["aString"],
source: "shouldCompileClassDefinition: aString\x0a\x09^ self selectedClass isNil or: [\x0a\x09\x09aString match: '^\x5cs*[A-Z]' ]",
messageSends: ["or:", "isNil", "selectedClass", "match:"],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unclassifiedProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "as yet unclassified";
},
args: [],
source: "unclassifiedProtocol\x0a\x09^ 'as yet unclassified'",
messageSends: [],
referencedClasses: []
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withCompileErrorHandling:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
function $ParseError(){return globals.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
function $UnknownVariableError(){return globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
function $CompilerError(){return globals.CompilerError||(typeof CompilerError=="undefined"?nil:CompilerError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._environment();
$ctx1.sendIdx["environment"]=1;
_st($1)._evaluate_on_do_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._environment();
$ctx2.sendIdx["environment"]=2;
return _st($2)._evaluate_on_do_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._environment())._evaluate_on_do_(aBlock,$ParseError(),(function(ex){
return smalltalk.withContext(function($ctx4) {
return self._handleParseError_(ex);
}, function($ctx4) {$ctx4.fillBlock({ex:ex},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),$UnknownVariableError(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return self._handleUnkownVariableError_(ex);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,4)})}));
$ctx2.sendIdx["evaluate:on:do:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$CompilerError(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return self._handleCompileError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,5)})}));
$ctx1.sendIdx["evaluate:on:do:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"withCompileErrorHandling:",{aBlock:aBlock},globals.HLToolModel)})},
args: ["aBlock"],
source: "withCompileErrorHandling: aBlock\x0a\x09self environment\x0a\x09\x09evaluate: [\x0a\x09\x09\x09self environment \x0a\x09\x09\x09evaluate: [\x0a\x09\x09\x09\x09self environment \x0a\x09\x09\x09\x09\x09evaluate: aBlock\x0a\x09\x09\x09\x09\x09on: ParseError\x0a\x09\x09\x09\x09\x09do: [ :ex | self handleParseError: ex ] ]\x0a\x09\x09\x09on: UnknownVariableError\x0a\x09\x09\x09do: [ :ex | self handleUnkownVariableError: ex ] ]\x0a\x09\x09on: CompilerError\x0a\x09\x09do: [ :ex | self handleCompileError: ex ]",
messageSends: ["evaluate:on:do:", "environment", "handleParseError:", "handleUnkownVariableError:", "handleCompileError:"],
referencedClasses: ["ParseError", "UnknownVariableError", "CompilerError"]
}),
globals.HLToolModel);

smalltalk.addMethod(
smalltalk.method({
selector: "withHelperLabelled:do:",
protocol: 'private',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5;
$1="#helper"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
$ctx1.sendIdx["remove"]=1;
$2=(function(html){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._id_("helper");
$4=_st($3)._with_(aString);
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})});
$5="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._appendToJQuery_($5);
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
return _st("#helper"._asJQuery())._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"withHelperLabelled:do:",{aString:aString,aBlock:aBlock},globals.HLToolModel)})},
args: ["aString", "aBlock"],
source: "withHelperLabelled: aString do: aBlock\x0a\x09\x22TODO: doesn't belong here\x22\x0a\x0a\x09'#helper' asJQuery remove.\x0a\x0a\x09[ :html |\x0a\x09\x09html div \x0a\x09\x09\x09id: 'helper';\x0a\x09\x09\x09with: aString ] appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09[\x0a\x09\x09aBlock value.\x0a\x09\x09'#helper' asJQuery remove\x0a\x09] \x0a\x09\x09valueWithTimeout: 10",
messageSends: ["remove", "asJQuery", "appendToJQuery:", "id:", "div", "with:", "valueWithTimeout:", "value"],
referencedClasses: []
}),
globals.HLToolModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},globals.HLToolModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
globals.HLToolModel.klass);


smalltalk.addClass('HLProgressHandler', globals.Object, [], 'Helios-Core');
globals.HLProgressHandler.comment="I am a specific progress handler for Helios, displaying progresses in a modal window.";
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
function $HLProgressWidget(){return globals.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLProgressWidget())._default())._do_on_displaying_(aBlock,aCollection,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},globals.HLProgressHandler)})},
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09HLProgressWidget default\x0a\x09\x09do: aBlock \x0a\x09\x09on: aCollection \x0a\x09\x09displaying: aString",
messageSends: ["do:on:displaying:", "default"],
referencedClasses: ["HLProgressWidget"]
}),
globals.HLProgressHandler);



smalltalk.addClass('HLWidget', globals.Widget, ['wrapper'], 'Helios-Core');
globals.HLWidget.comment="I am the abstract superclass of all Helios widgets.\x0a\x0aI provide common methods, additional behavior to widgets useful for Helios, like dialog creation, command execution and tab creation.\x0a\x0a## API\x0a\x0a1. Rendering\x0a\x0a    Instead of overriding `#renderOn:` as with other Widget subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0a2. Refreshing\x0a\x0a    To re-render a widget, use `#refresh`.\x0a\x0a3. Key bindings registration and tabs\x0a\x0a    When displayed as a tab, the widget has a chance to register keybindings with the `#registerBindingsOn:` hook method.\x0a    \x0a4. Unregistration\x0a\x0a    When a widget has subscribed to announcements or other actions that need to be cleared when closing the tab, the hook method `#unregister` will be called by helios.\x0a\x0a5. Tabs\x0a\x0a   To enable a widget class to be open as a tab, override the class-side `#canBeOpenAsTab` method to answer `true`. `#tabClass` and `#tabPriority` can be overridden too to respectively change the css class of the tab and the order of tabs in the main menu.\x0a\x0a6. Command execution\x0a\x0a    An helios command (instance of `HLCommand` or one of its subclass) can be executed with `#execute:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "bindKeyDown:keyUp:",
protocol: 'keybindings',
fn: function (keyDownBlock,keyUpBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._keydown_(keyDownBlock);
$2=_st($1)._keyup_(keyUpBlock);
return self}, function($ctx1) {$ctx1.fill(self,"bindKeyDown:keyUp:",{keyDownBlock:keyDownBlock,keyUpBlock:keyUpBlock},globals.HLWidget)})},
args: ["keyDownBlock", "keyUpBlock"],
source: "bindKeyDown: keyDownBlock keyUp: keyUpBlock\x0a\x09self wrapper asJQuery\x0a\x09\x09keydown: keyDownBlock;\x0a\x09\x09keyup: keyUpBlock",
messageSends: ["keydown:", "asJQuery", "wrapper", "keyup:"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canHaveFocus\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._confirm_ifTrue_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},globals.HLWidget)})},
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self manager confirm: aString ifTrue: aBlock",
messageSends: ["confirm:ifTrue:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._confirm_ifTrue_ifFalse_(aString,aBlock,anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:ifFalse:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.HLWidget)})},
args: ["aString", "aBlock", "anotherBlock"],
source: "confirm: aString ifTrue: aBlock ifFalse: anotherBlock\x0a\x09self manager \x0a\x09\x09confirm: aString \x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["confirm:ifTrue:ifFalse:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "hl_widget";
},
args: [],
source: "cssClass\x0a\x09^ 'hl_widget'",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTabLabel",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._tabLabel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultTabLabel",{},globals.HLWidget)})},
args: [],
source: "defaultTabLabel\x0a\x09^ self class tabLabel",
messageSends: ["tabLabel", "class"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
protocol: 'actions',
fn: function (aCommand){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($HLManager())._current())._keyBinder();
_st($1)._activate();
$2=_st($1)._applyBinding_(_st(aCommand)._asBinding());
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aCommand:aCommand},globals.HLWidget)})},
args: ["aCommand"],
source: "execute: aCommand\x0a\x09HLManager current keyBinder\x0a\x09\x09activate;\x0a\x09\x09applyBinding: aCommand asBinding",
messageSends: ["activate", "keyBinder", "current", "applyBinding:", "asBinding"],
referencedClasses: ["HLManager"]
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inform:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._inform_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inform:",{aString:aString},globals.HLWidget)})},
args: ["aString"],
source: "inform: aString\x0a\x09self manager inform: aString",
messageSends: ["inform:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},globals.HLWidget)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
protocol: 'actions',
fn: function (){
var self=this;
function $HLTabWidget(){return globals.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLTabWidget())._on_labelled_(self,self._defaultTabLabel()))._add();
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},globals.HLWidget)})},
args: [],
source: "openAsTab\x0a\x09(HLTabWidget on: self labelled: self defaultTabLabel)\x0a\x09\x09add",
messageSends: ["add", "on:labelled:", "defaultTabLabel"],
referencedClasses: ["HLTabWidget"]
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$receiver;
$1=self._wrapper();
$ctx1.sendIdx["wrapper"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$3=self._wrapper();
$ctx1.sendIdx["wrapper"]=2;
$2=_st($3)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,2)})}))._appendToJQuery_(_st(self._wrapper())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLWidget)})},
args: [],
source: "refresh\x0a\x09self wrapper ifNil: [ ^ self ].\x0a    \x0a\x09self wrapper asJQuery empty.\x0a    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery",
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
protocol: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._registerBindingsOn_(_st(_st(self._manager())._keyBinder())._bindings());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},globals.HLWidget)})},
args: [],
source: "registerBindings\x0a\x09self registerBindingsOn: self manager keyBinder bindings",
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
return self},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._removeTabForWidget_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeTab",{},globals.HLWidget)})},
args: [],
source: "removeTab\x0a\x09self manager removeTabForWidget: self",
messageSends: ["removeTabForWidget:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
$2=_st($1)._yourself();
self["@wrapper"]=$2;
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(renderer);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1,1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper := html div\x0a\x09\x09class: self cssClass;\x0a\x09\x09yourself.\x0a    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery",
messageSends: ["class:", "div", "cssClass", "yourself", "appendToJQuery:", "renderContentOn:", "asJQuery"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_do_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},globals.HLWidget)})},
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self manager request: aString do: aBlock",
messageSends: ["request:do:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
protocol: 'actions',
fn: function (aString,valueString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._request_value_do_(aString,valueString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},globals.HLWidget)})},
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09self manager \x0a\x09\x09request: aString \x0a\x09\x09value: valueString\x0a\x09\x09do: aBlock",
messageSends: ["request:value:do:", "manager"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setTabLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $HLTabLabelChanged(){return globals.HLTabLabelChanged||(typeof HLTabLabelChanged=="undefined"?nil:HLTabLabelChanged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLTabLabelChanged())._new();
_st($1)._widget_(self);
_st($1)._label_(aString);
$2=_st($1)._yourself();
_st(_st(self._manager())._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setTabLabel:",{aString:aString},globals.HLWidget)})},
args: ["aString"],
source: "setTabLabel: aString\x0a\x09self manager announcer announce: (HLTabLabelChanged new\x0a\x09\x09widget: self;\x0a\x09\x09label: aString;\x0a\x09\x09yourself)",
messageSends: ["announce:", "announcer", "manager", "widget:", "new", "label:", "yourself"],
referencedClasses: ["HLTabLabelChanged"]
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},globals.HLWidget)})},
args: [],
source: "tabClass\x0a\x09^ self class tabClass",
messageSends: ["tabClass", "class"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unbindKeyDownKeyUp",
protocol: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._wrapper())._asJQuery();
_st($1)._unbind_("keydown");
$ctx1.sendIdx["unbind:"]=1;
$2=_st($1)._unbind_("keyup");
return self}, function($ctx1) {$ctx1.fill(self,"unbindKeyDownKeyUp",{},globals.HLWidget)})},
args: [],
source: "unbindKeyDownKeyUp\x0a\x09self wrapper asJQuery\x0a\x09\x09unbind: 'keydown';\x0a\x09\x09unbind: 'keyup'",
messageSends: ["unbind:", "asJQuery", "wrapper"],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "unregister\x0a\x09\x22This method is called whenever the receiver is closed (as a tab).\x0a\x09Widgets subscribing to announcements should unregister there\x22",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@wrapper"];
return $1;
},
args: [],
source: "wrapper\x0a\x09^ wrapper",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
protocol: 'accessing',
fn: function (){
var self=this;
var instance;
function $HLTabWidget(){return globals.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
instance=self._new();
_st(_st($HLTabWidget())._on_labelled_(instance,_st(instance)._defaultTabLabel()))._add();
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openAsTab",{instance:instance},globals.HLWidget.klass)})},
args: [],
source: "openAsTab\x0a\x09| instance |\x0a\x09\x0a\x09instance := self new.\x0a\x09(HLTabWidget \x0a\x09\x09on: instance \x0a\x09\x09labelled: instance defaultTabLabel) add.\x0a\x09^ instance",
messageSends: ["new", "add", "on:labelled:", "defaultTabLabel"],
referencedClasses: ["HLTabWidget"]
}),
globals.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "tabClass\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Tab";
},
args: [],
source: "tabLabel\x0a\x09^ 'Tab'",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (500);
},
args: [],
source: "tabPriority\x0a\x09^ 500",
messageSends: [],
referencedClasses: []
}),
globals.HLWidget.klass);


smalltalk.addClass('HLFocusableWidget', globals.HLWidget, [], 'Helios-Core');
globals.HLFocusableWidget.comment="I am a widget that can be focused.\x0a\x0a## API \x0a\x0aInstead of overriding `#renderOn:` as with other `Widget` subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0aTo bring the focus to the widget, use the `#focus` method.";
smalltalk.addMethod(
smalltalk.method({
selector: "blur",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"blur",{},globals.HLFocusableWidget)})},
args: [],
source: "blur\x0a\x09self wrapper asJQuery blur",
messageSends: ["blur", "asJQuery", "wrapper"],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._wrapper())._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLFocusableWidget)})},
args: [],
source: "focus\x0a\x09self wrapper asJQuery focus",
messageSends: ["focus", "asJQuery", "wrapper"],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "focused";
},
args: [],
source: "focusClass\x0a\x09^ 'focused'",
messageSends: [],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._wrapper();
$ctx1.sendIdx["wrapper"]=1;
$2=_st($3)._notNil();
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._wrapper())._asJQuery())._hasClass_(self._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},globals.HLFocusableWidget)})},
args: [],
source: "hasFocus\x0a\x09^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]",
messageSends: ["and:", "notNil", "wrapper", "hasClass:", "asJQuery", "focusClass"],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
$2=_st($1)._yourself();
self["@wrapper"]=$2;
_st(self["@wrapper"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$3=self["@wrapper"];
_st($3)._at_put_("tabindex","0");
_st($3)._onBlur_((function(){
return smalltalk.withContext(function($ctx2) {
$5=self._wrapper();
$ctx2.sendIdx["wrapper"]=1;
$4=_st($5)._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
$6=self._focusClass();
$ctx2.sendIdx["focusClass"]=1;
return _st($4)._removeClass_($6);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$7=_st($3)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._wrapper())._asJQuery())._addClass_(self._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLFocusableWidget)})},
args: ["html"],
source: "renderOn: html\x0a    wrapper := html div \x0a    \x09class: self cssClass;\x0a\x09\x09yourself.\x0a\x09\x09\x0a       wrapper with: [ self renderContentOn: html ].\x0a\x09\x0a\x09wrapper\x0a\x09\x09at: 'tabindex' put: '0';\x0a\x09\x09onBlur: [ self wrapper asJQuery removeClass: self focusClass ];\x0a        onFocus: [ self wrapper asJQuery addClass: self focusClass ]",
messageSends: ["class:", "div", "cssClass", "yourself", "with:", "renderContentOn:", "at:put:", "onBlur:", "removeClass:", "asJQuery", "wrapper", "focusClass", "onFocus:", "addClass:"],
referencedClasses: []
}),
globals.HLFocusableWidget);



smalltalk.addClass('HLListWidget', globals.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFirstListItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self["@wrapper"])._asJQuery())._find_("li.inactive"))._eq_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{},globals.HLListWidget)})},
args: [],
source: "activateFirstListItem\x0a\x09self activateListItem: ((wrapper asJQuery find: 'li.inactive') eq: 0)",
messageSends: ["activateListItem:", "eq:", "find:", "asJQuery"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(self._findListItemFor_(anObject));
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},globals.HLListWidget)})},
args: ["anObject"],
source: "activateItem: anObject\x0a\x09self activateListItem: (self findListItemFor: anObject)",
messageSends: ["activateListItem:", "findListItemFor:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
_st(_st(_st(aListItem)._parent())._children())._removeClass_("active");
_st(aListItem)._addClass_("active");
self._ensureVisible_(aListItem);
item=_st(aListItem)._data_("item");
$2=_st(self._selectedItem()).__eq_eq(item);
if(! smalltalk.assert($2)){
self._selectItem_(item);
};
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},globals.HLListWidget)})},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09aListItem parent children removeClass: 'active'.\x0a\x09aListItem addClass: 'active'.\x0a    \x0a\x09self ensureVisible: aListItem.\x0a    \x0a   \x22Activate the corresponding item\x22\x0a   item := aListItem data: 'item'.\x0a   self selectedItem == item ifFalse: [\x0a\x09   self selectItem: item ]",
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "addClass:", "ensureVisible:", "data:", "ifFalse:", "==", "selectedItem", "selectItem:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._wrapper();
$ctx1.sendIdx["wrapper"]=1;
$3=_st($4)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._find_("li.active");
$ctx1.sendIdx["find:"]=1;
$1=_st($2)._next();
self._activateListItem_($1);
_st(_st(_st(_st(self._wrapper())._asJQuery())._find_(" .active"))._get())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._activateFirstListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},globals.HLListWidget)})},
args: [],
source: "activateNextListItem\x0a\x09self activateListItem: (self wrapper asJQuery find: 'li.active') next.\x0a\x09\x0a\x09\x22select the first item if none is selected\x22\x0a\x09(self wrapper asJQuery find: ' .active') get ifEmpty: [\x0a\x09\x09self activateFirstListItem ]",
messageSends: ["activateListItem:", "next", "find:", "asJQuery", "wrapper", "ifEmpty:", "get", "activateFirstListItem"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(_st(_st(_st(self._wrapper())._asJQuery())._find_("li.active"))._prev());
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},globals.HLListWidget)})},
args: [],
source: "activatePreviousListItem\x0a\x09self activateListItem: (self wrapper asJQuery find: 'li.active') prev",
messageSends: ["activateListItem:", "prev", "find:", "asJQuery", "wrapper"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return "";
},
args: ["anObject"],
source: "cssClassForItem: anObject\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
protocol: 'defaults',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "defaultItems\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var parent,position;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$9,$8,$11,$10,$7,$6,$15,$14,$16,$13,$17,$12,$18,$22,$23,$21,$20,$19,$receiver;
$1=_st(aListItem)._get_((0));
$ctx1.sendIdx["get:"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
position=self._positionOf_(aListItem);
parent=_st(aListItem)._parent();
$4=_st(aListItem)._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4)._top();
$ctx1.sendIdx["top"]=1;
$2=_st($3).__lt((0));
if(smalltalk.assert($2)){
$5=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=2;
$9=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=3;
$8=_st($9)._scrollTop();
$ctx1.sendIdx["scrollTop"]=1;
$11=_st(aListItem)._position();
$ctx1.sendIdx["position"]=2;
$10=_st($11)._top();
$ctx1.sendIdx["top"]=2;
$7=_st($8).__plus($10);
$ctx1.sendIdx["+"]=1;
$6=_st($7).__minus((10));
$ctx1.sendIdx["-"]=1;
_st($5)._scrollTop_($6);
$ctx1.sendIdx["scrollTop:"]=1;
};
$15=_st(aListItem)._position();
$ctx1.sendIdx["position"]=3;
$14=_st($15)._top();
$ctx1.sendIdx["top"]=3;
$16=_st(aListItem)._height();
$ctx1.sendIdx["height"]=1;
$13=_st($14).__plus($16);
$ctx1.sendIdx["+"]=2;
$17=_st(parent)._height();
$ctx1.sendIdx["height"]=2;
$12=_st($13).__gt($17);
if(smalltalk.assert($12)){
$18=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=4;
$22=_st(_st(parent)._get_((0)))._scrollTop();
$23=_st(aListItem)._height();
$ctx1.sendIdx["height"]=3;
$21=_st($22).__plus($23);
$20=_st($21).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()));
$ctx1.sendIdx["-"]=2;
$19=_st($20).__plus((10));
$ctx1.sendIdx["+"]=3;
_st($18)._scrollTop_($19);
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,parent:parent,position:position},globals.HLListWidget)})},
args: ["aListItem"],
source: "ensureVisible: aListItem\x09\x0a\x09\x22Move the scrollbar to show the active element\x22\x0a\x09\x0a\x09| parent position |\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09position := self positionOf: aListItem.\x0a\x09parent := aListItem parent.\x0a\x09\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]",
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "ifTrue:", "<", "top", "position", "scrollTop:", "-", "+", "scrollTop", ">", "height"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "findListItemFor:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(self["@wrapper"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._find_("li");
$2=_st($3)._filter_(_st((function(thisArg,otherArg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(thisArg)._asJQuery())._data_("item")).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({thisArg:thisArg,otherArg:otherArg},$ctx1,1)})}))._currySelf());
$1=_st($2)._eq_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"findListItemFor:",{anObject:anObject},globals.HLListWidget)})},
args: ["anObject"],
source: "findListItemFor: anObject\x0a\x09^ (((wrapper asJQuery find: 'li') \x0a\x09\x09filter: [ :thisArg :otherArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)",
messageSends: ["eq:", "filter:", "find:", "asJQuery", "currySelf", "=", "data:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
($ctx1.supercall = true, globals.HLListWidget.superclass.fn.prototype._focus.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st(self._items())._isEmpty();
if(! smalltalk.assert($1)){
$2=self._selectedItem();
if(($receiver = $2) == null || $receiver.isNil){
self._activateFirstListItem();
} else {
$2;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLListWidget)})},
args: [],
source: "focus\x0a\x09super focus.\x0a    self items isEmpty ifFalse: [ \x0a\x09\x09self selectedItem ifNil: [ self activateFirstListItem ] ]",
messageSends: ["focus", "ifFalse:", "isEmpty", "items", "ifNil:", "selectedItem", "activateFirstListItem"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@items"];
if(($receiver = $2) == null || $receiver.isNil){
self["@items"]=self._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self defaultItems ]",
messageSends: ["ifNil:", "defaultItems"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@items"]=aCollection;
return self},
args: ["aCollection"],
source: "items: aCollection\x0a\x09items := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "listCssClassForItem:",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"listCssClassForItem:",{anObject:anObject},globals.HLListWidget)})},
args: ["anObject"],
source: "listCssClassForItem: anObject\x0a\x09^ self selectedItem = anObject\x0a\x09\x09ifTrue: [ 'active' ]\x0a\x09\x09ifFalse: [ 'inactive' ]",
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
protocol: 'accessing',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},globals.HLListWidget)})},
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09<\x0a    \x09return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivateListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(aListItem);
self._reselectItem_(self._selectedItem());
return self}, function($ctx1) {$ctx1.fill(self,"reactivateListItem:",{aListItem:aListItem},globals.HLListWidget)})},
args: ["aListItem"],
source: "reactivateListItem: aListItem\x0a\x09self activateListItem: aListItem.\x0a\x09self reselectItem: self selectedItem",
messageSends: ["activateListItem:", "reselectItem:", "selectedItem"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
($ctx1.supercall = true, globals.HLListWidget.superclass.fn.prototype._refresh.apply(_st(self), []));
$ctx1.supercall = false;
$1=self._selectedItem();
$ctx1.sendIdx["selectedItem"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._ensureVisible_(self._findListItemFor_(self._selectedItem()));
};
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.HLListWidget)})},
args: [],
source: "refresh\x0a\x09super refresh.\x0a\x09self selectedItem ifNotNil: [self ensureVisible: (self findListItemFor: self selectedItem)].",
messageSends: ["refresh", "ifNotNil:", "selectedItem", "ensureVisible:", "findListItemFor:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderListOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
_st($3)._class_("pane_actions form-actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul \x0a    \x09class: 'nav nav-pills nav-stacked';\x0a        with: [ self renderListOn: html ].\x0a    html div class: 'pane_actions form-actions'; with: [\x0a      \x09self renderButtonsOn: html ].\x0a        \x0a   self setupKeyBindings",
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
li=_st(html)._li();
$1=_st(li)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._data_put_("item",anObject);
$2=li;
_st($2)._class_(self._listCssClassForItem_(anObject));
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(self._cssClassForItem_(anObject));
return self._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._reactivateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},globals.HLListWidget)})},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: anObject.\x0a    li\x0a\x09\x09class: (self listCssClassForItem: anObject);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: anObject).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self reactivateListItem: li asJQuery ] ]",
messageSends: ["li", "data:put:", "asJQuery", "class:", "listCssClassForItem:", "with:", "a", "tag:", "cssClassForItem:", "renderItemLabel:on:", "onClick:", "reactivateListItem:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(anObject)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},globals.HLListWidget)})},
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html with: anObject asString",
messageSends: ["with:", "asString"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._items())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},globals.HLListWidget)})},
args: ["html"],
source: "renderListOn: html\x0a\x09self items do: [ :each  | \x0a    \x09self renderItem: each  on: html ]",
messageSends: ["do:", "items", "renderItem:on:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return self},
args: ["anObject"],
source: "reselectItem: anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},globals.HLListWidget)})},
args: ["anObject"],
source: "selectItem: anObject\x0a\x09self selectedItem: anObject",
messageSends: ["selectedItem:"],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedItem"];
return $1;
},
args: [],
source: "selectedItem\x0a\x09^ selectedItem",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selectedItem"]=anObject;
return self},
args: ["anObject"],
source: "selectedItem: anObject\x0a\x09selectedItem := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
protocol: 'events',
fn: function (){
var self=this;
function $HLRepeatedKeyDownHandler(){return globals.HLRepeatedKeyDownHandler||(typeof HLRepeatedKeyDownHandler=="undefined"?nil:HLRepeatedKeyDownHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($HLRepeatedKeyDownHandler())._on_(self);
_st($1)._whileKeyDown_do_((38),(function(){
return smalltalk.withContext(function($ctx2) {
return self._activatePreviousListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["whileKeyDown:do:"]=1;
_st($1)._whileKeyDown_do_((40),(function(){
return smalltalk.withContext(function($ctx2) {
return self._activateNextListItem();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$2=_st($1)._rebindKeys();
_st(_st(self._wrapper())._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(e)._which()).__eq((13));
if(smalltalk.assert($3)){
return self._reselectItem_(self._selectedItem());
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},globals.HLListWidget)})},
args: [],
source: "setupKeyBindings \x0a\x09(HLRepeatedKeyDownHandler on: self)\x0a\x09\x09whileKeyDown: 38 do: [ self activatePreviousListItem ];\x0a\x09\x09whileKeyDown: 40 do: [ self activateNextListItem ];\x0a\x09\x09rebindKeys.\x0a\x09\x09\x0a\x09self wrapper asJQuery keydown: [ :e |\x0a        e which = 13 ifTrue: [ \x0a        \x09self reselectItem: self selectedItem ] ]",
messageSends: ["whileKeyDown:do:", "on:", "activatePreviousListItem", "activateNextListItem", "rebindKeys", "keydown:", "asJQuery", "wrapper", "ifTrue:", "=", "which", "reselectItem:", "selectedItem"],
referencedClasses: ["HLRepeatedKeyDownHandler"]
}),
globals.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', globals.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@next"];
return $1;
},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@next"]=aWidget;
$1=_st(_st(aWidget)._previous()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._previous_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget},globals.HLNavigationListWidget)})},
args: ["aWidget"],
source: "next: aWidget\x0a\x09next := aWidget.\x0a    aWidget previous = self ifFalse: [ aWidget previous: self ]",
messageSends: ["ifFalse:", "=", "previous", "previous:"],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFocus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._next();
$ctx1.sendIdx["next"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(self._next())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFocus",{},globals.HLNavigationListWidget)})},
args: [],
source: "nextFocus\x0a\x09self next ifNotNil: [ self next focus ]",
messageSends: ["ifNotNil:", "next", "focus"],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@previous"];
return $1;
},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@previous"]=aWidget;
$1=_st(_st(aWidget)._next()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._next_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},globals.HLNavigationListWidget)})},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09previous := aWidget.\x0a    aWidget next = self ifFalse: [ aWidget next: self ]",
messageSends: ["ifFalse:", "=", "next", "next:"],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousFocus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._previous();
$ctx1.sendIdx["previous"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(self._previous())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"previousFocus",{},globals.HLNavigationListWidget)})},
args: [],
source: "previousFocus\x0a\x09self previous ifNotNil: [ self previous focus ]",
messageSends: ["ifNotNil:", "previous", "focus"],
referencedClasses: []
}),
globals.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
($ctx1.supercall = true, globals.HLNavigationListWidget.superclass.fn.prototype._setupKeyBindings.apply(_st(self), []));
$ctx1.supercall = false;
_st(_st(self._wrapper())._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$2=_st(e)._which();
$ctx2.sendIdx["which"]=1;
$1=_st($2).__eq((39));
$ctx2.sendIdx["="]=1;
if(smalltalk.assert($1)){
self._nextFocus();
};
$3=_st(_st(e)._which()).__eq((37));
if(smalltalk.assert($3)){
return self._previousFocus();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},globals.HLNavigationListWidget)})},
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x0a\x09self wrapper asJQuery keydown: [ :e |\x0a        e which = 39 ifTrue: [ \x0a        \x09self nextFocus ].\x0a\x09\x09e which = 37 ifTrue: [ \x0a        \x09self previousFocus ] ]",
messageSends: ["setupKeyBindings", "keydown:", "asJQuery", "wrapper", "ifTrue:", "=", "which", "nextFocus", "previousFocus"],
referencedClasses: []
}),
globals.HLNavigationListWidget);



smalltalk.addClass('HLToolListWidget', globals.HLNavigationListWidget, ['model'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._activateListItem_.apply(_st(self), [anItem]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},globals.HLToolListWidget)})},
args: ["anItem"],
source: "activateListItem: anItem\x0a\x09self model withChangesDo: [ super activateListItem: anItem ]",
messageSends: ["withChangesDo:", "model", "activateListItem:"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._activateNextListItem.apply(_st(self), []));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},globals.HLToolListWidget)})},
args: [],
source: "activateNextListItem\x0a\x09self model withChangesDo: [ super activateNextListItem ]",
messageSends: ["withChangesDo:", "model", "activateNextListItem"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._activatePreviousListItem.apply(_st(self), []));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},globals.HLToolListWidget)})},
args: [],
source: "activatePreviousListItem\x0a\x09self model withChangesDo: [ super activatePreviousListItem ]",
messageSends: ["withChangesDo:", "model", "activatePreviousListItem"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "commandCategory",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandCategory",{},globals.HLToolListWidget)})},
args: [],
source: "commandCategory\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "List";
},
args: [],
source: "label\x0a\x09^ 'List'",
messageSends: [],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "menuCommands",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLToolCommand(){return globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(_st(_st($HLToolCommand())._concreteClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=self._model();
$ctx2.sendIdx["model"]=1;
return _st(each)._isValidFor_($2);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._for_(self._model());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})))._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._category()).__eq(self._commandCategory()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._isAction())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(each)._isActive();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["and:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$ctx1.sendIdx["select:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuCommands",{},globals.HLToolListWidget)})},
args: [],
source: "menuCommands\x0a\x09\x22Answer a collection of commands to be put in the cog menu\x22\x0a\x09\x0a\x09^ ((HLToolCommand concreteClasses\x0a\x09\x09select: [ :each | each isValidFor: self model ])\x0a\x09\x09\x09collect: [ :each | each for: self model ])\x0a\x09\x09\x09select: [ :each | \x0a\x09\x09\x09\x09each category = self commandCategory and: [ \x0a\x09\x09\x09\x09\x09each isAction and: [ each isActive ] ] ]",
messageSends: ["select:", "collect:", "concreteClasses", "isValidFor:", "model", "for:", "and:", "=", "category", "commandCategory", "isAction", "isActive"],
referencedClasses: ["HLToolCommand"]
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@model"]=aBrowserModel;
self._observeSystem();
$1=self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel},globals.HLToolListWidget)})},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self \x0a\x09\x09observeSystem;\x0a\x09\x09observeModel",
messageSends: ["observeSystem", "observeModel"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "observeModel",
messageSends: [],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "observeSystem",
messageSends: [],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "reactivateListItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._reactivateListItem_.apply(_st(self), [anItem]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reactivateListItem:",{anItem:anItem},globals.HLToolListWidget)})},
args: ["anItem"],
source: "reactivateListItem: anItem\x0a\x09self model withChangesDo: [ super reactivateListItem: anItem ]",
messageSends: ["withChangesDo:", "model", "reactivateListItem:"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeadOn_(html);
($ctx1.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLToolListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x09\x0a\x09super renderContentOn: html",
messageSends: ["renderHeadOn:", "renderContentOn:"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
protocol: 'rendering',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},globals.HLToolListWidget)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self label.\x0a\x09\x09\x09self renderMenuOn: html ]",
messageSends: ["class:", "div", "with:", "label", "renderMenuOn:"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var commands;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$8,$9,$7,$3;
commands=self._menuCommands();
$ctx1.sendIdx["menuCommands"]=1;
$1=_st(commands)._isEmpty();
if(smalltalk.assert($1)){
return self;
};
$2=_st(html)._div();
_st($2)._class_("btn-group cog");
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($4)._class_("btn dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
_st($4)._at_put_("data-toggle","dropdown");
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tag_("i"))._class_("icon-chevron-down");
$ctx3.sendIdx["class:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=2;
$5;
$6=_st(html)._ul();
_st($6)._class_("dropdown-menu pull-right");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._menuCommands())._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$8=_st(html)._a();
_st($8)._with_(_st(each)._menuLabel());
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return self._execute_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
return $9;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["with:"]=4;
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=3;
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html,commands:commands},globals.HLToolListWidget)})},
args: ["html"],
source: "renderMenuOn: html\x0a\x09| commands |\x0a\x09\x0a\x09commands := self menuCommands.\x0a\x09commands isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'btn-group cog';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn dropdown-toggle';\x0a\x09\x09\x09\x09at: 'data-toggle' put: 'dropdown';\x0a\x09\x09\x09\x09with: [ (html tag: 'i') class: 'icon-chevron-down' ].\x0a\x09\x09html ul \x0a\x09\x09\x09class: 'dropdown-menu pull-right';\x0a\x09\x09\x09with: [ \x0a\x09\x09\x09\x09self menuCommands do: [ :each | \x0a\x09\x09\x09\x09\x09html li with: [ html a \x0a\x09\x09\x09\x09\x09\x09with: each menuLabel;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self execute: each ] ] ] ] ]",
messageSends: ["menuCommands", "ifTrue:", "isEmpty", "class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "li", "menuLabel", "onClick:", "execute:"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._selectedItem_.apply(_st(self), [anItem]));
$ctx1.supercall = false;
self._updateMenu();
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},globals.HLToolListWidget)})},
args: ["anItem"],
source: "selectedItem: anItem\x0a\x09\x22Selection changed, update the cog menu\x22\x0a\x09\x0a\x09super selectedItem: anItem.\x0a\x09self updateMenu",
messageSends: ["selectedItem:", "updateMenu"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.HLToolListWidget.superclass.fn.prototype._unregister.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._announcer();
_st($1)._unsubscribe_(self);
$ctx1.sendIdx["unsubscribe:"]=1;
_st(_st(self._model())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLToolListWidget)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09\x0a\x09self model announcer unsubscribe: self.\x0a\x09self model systemAnnouncer unsubscribe: self",
messageSends: ["unregister", "unsubscribe:", "announcer", "model", "systemAnnouncer"],
referencedClasses: []
}),
globals.HLToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMenu",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._wrapper();
$ctx1.sendIdx["wrapper"]=1;
$2=_st($3)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._find_(".cog");
$ctx1.sendIdx["find:"]=1;
_st($1)._remove();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderMenuOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}))._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".list-label"));
return self}, function($ctx1) {$ctx1.fill(self,"updateMenu",{},globals.HLToolListWidget)})},
args: [],
source: "updateMenu\x0a\x09(self wrapper asJQuery find: '.cog') remove.\x0a\x09\x0a\x09[ :html | self renderMenuOn: html ] \x0a\x09\x09appendToJQuery: (self wrapper asJQuery find: '.list-label')",
messageSends: ["remove", "find:", "asJQuery", "wrapper", "appendToJQuery:", "renderMenuOn:"],
referencedClasses: []
}),
globals.HLToolListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},globals.HLToolListWidget.klass)})},
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a    \x09model: aModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
globals.HLToolListWidget.klass);


smalltalk.addClass('HLTabListWidget', globals.HLListWidget, ['callback'], 'Helios-Core');
globals.HLTabListWidget.comment="I am a widget used to display a list of helios tabs.\x0a\x0aWhen a tab is selected, `callback` is evaluated with the selected tab as argument.";
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@callback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},globals.HLTabListWidget)})},
args: [],
source: "callback\x0a\x09^ callback ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLTabListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._class_(_st(aTab)._cssClass());
$2=_st($1)._with_(_st(aTab)._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aTab:aTab,html:html},globals.HLTabListWidget)})},
args: ["aTab", "html"],
source: "renderItemLabel: aTab on: html\x0a\x09html span\x0a\x09\x09class: aTab cssClass;\x0a\x09\x09with: aTab label",
messageSends: ["class:", "span", "cssClass", "with:", "label"],
referencedClasses: []
}),
globals.HLTabListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLTabListWidget.superclass.fn.prototype._selectItem_.apply(_st(self), [aTab]));
$ctx1.supercall = false;
_st(self._callback())._value_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aTab:aTab},globals.HLTabListWidget)})},
args: ["aTab"],
source: "selectItem: aTab\x0a\x09super selectItem: aTab.\x0a\x09self callback value: aTab",
messageSends: ["selectItem:", "value:", "callback"],
referencedClasses: []
}),
globals.HLTabListWidget);



smalltalk.addClass('HLInformationWidget', globals.HLWidget, ['informationString'], 'Helios-Core');
globals.HLInformationWidget.comment="I display an information dialog.\x0a\x0a## API\x0a\x0a`HLWidget >> #inform:` is a convenience method for creating information dialogs.";
smalltalk.addMethod(
smalltalk.method({
selector: "informationString",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@informationString"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"informationString",{},globals.HLInformationWidget)})},
args: [],
source: "informationString\x0a\x09^ informationString ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLInformationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "informationString:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@informationString"]=anObject;
return self},
args: ["anObject"],
source: "informationString: anObject\x0a\x09informationString := anObject",
messageSends: [],
referencedClasses: []
}),
globals.HLInformationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._wrapper();
$ctx2.sendIdx["wrapper"]=1;
$1=_st($2)._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
_st($1)._fadeOut_((100));
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self._wrapper())._asJQuery())._remove();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._valueWithTimeout_((400));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._valueWithTimeout_((1500));
$ctx1.sendIdx["valueWithTimeout:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.HLInformationWidget)})},
args: [],
source: "remove\x0a\x09[ \x0a\x09\x09self wrapper asJQuery fadeOut: 100.\x0a\x09\x09[ self wrapper asJQuery remove ]\x0a\x09\x09\x09valueWithTimeout: 400.\x0a\x09]\x0a\x09\x09valueWithTimeout: 1500",
messageSends: ["valueWithTimeout:", "fadeOut:", "asJQuery", "wrapper", "remove"],
referencedClasses: []
}),
globals.HLInformationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("growl");
$2=_st($1)._with_(self._informationString());
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLInformationWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'growl'; \x0a\x09\x09with: self informationString.\x0a\x09\x09\x0a\x09self remove",
messageSends: ["class:", "div", "with:", "informationString", "remove"],
referencedClasses: []
}),
globals.HLInformationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.HLInformationWidget)})},
args: [],
source: "show\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.HLInformationWidget);



smalltalk.addClass('HLManager', globals.HLWidget, ['tabsWidget', 'environment', 'history', 'announcer'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabsWidget())._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},globals.HLManager)})},
args: ["aTab"],
source: "activate: aTab\x0a\x09self tabsWidget activate: aTab",
messageSends: ["activate:", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "activeTab",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tabsWidget())._activeTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{},globals.HLManager)})},
args: [],
source: "activeTab\x0a\x09^ self tabsWidget activeTab",
messageSends: ["activeTab", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabsWidget())._addTab_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},globals.HLManager)})},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabsWidget addTab: aTab",
messageSends: ["addTab:", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@announcer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.HLManager)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._confirm_ifTrue_ifFalse_(aString,(function(){
}),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifFalse:",{aString:aString,aBlock:aBlock},globals.HLManager)})},
args: ["aString", "aBlock"],
source: "confirm: aString ifFalse: aBlock\x0a\x09self \x0a\x09\x09confirm: aString\x0a\x09\x09ifTrue: []\x0a\x09\x09ifFalse: aBlock",
messageSends: ["confirm:ifTrue:ifFalse:"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._confirm_ifTrue_ifFalse_(aString,aBlock,(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},globals.HLManager)})},
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self \x0a\x09\x09confirm: aString\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: []",
messageSends: ["confirm:ifTrue:ifFalse:"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock,anotherBlock){
var self=this;
function $HLConfirmationWidget(){return globals.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmationWidget())._new();
_st($1)._confirmationString_(aString);
_st($1)._actionBlock_(aBlock);
_st($1)._cancelBlock_(anotherBlock);
$2=_st($1)._show();
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:ifFalse:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.HLManager)})},
args: ["aString", "aBlock", "anotherBlock"],
source: "confirm: aString ifTrue: aBlock ifFalse: anotherBlock\x0a\x09HLConfirmationWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09cancelBlock: anotherBlock;\x0a\x09\x09show",
messageSends: ["confirmationString:", "new", "actionBlock:", "cancelBlock:", "show"],
referencedClasses: ["HLConfirmationWidget"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultEnvironment",
protocol: 'defaults',
fn: function (){
var self=this;
var parent,parentSmalltalkGlobals;
function $Environment(){return globals.Environment||(typeof Environment=="undefined"?nil:Environment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$receiver;
$1=_st(window)._opener();
if(($receiver = $1) == null || $receiver.isNil){
parent=_st(window)._parent();
} else {
parent=$1;
};
$2=parent;
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($Environment())._new();
$ctx1.sendIdx["new"]=1;
return $3;
} else {
$2;
};
$4=_st(parent)._at_("requirejs");
$ctx1.sendIdx["at:"]=1;
parentSmalltalkGlobals=_st($4)._value_("amber_vm/globals");
$5=parentSmalltalkGlobals;
if(($receiver = $5) == null || $receiver.isNil){
$6=_st($Environment())._new();
$ctx1.sendIdx["new"]=2;
return $6;
} else {
$5;
};
$7=_st(_st(parentSmalltalkGlobals)._at_("Environment"))._new();
return $7;
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{parent:parent,parentSmalltalkGlobals:parentSmalltalkGlobals},globals.HLManager)})},
args: [],
source: "defaultEnvironment\x0a\x09\x22If helios is loaded from within a frame, answer the parent window environment\x22\x0a\x09\x0a\x09| parent parentSmalltalkGlobals |\x0a\x09\x0a\x09parent := window opener ifNil: [ window parent ].\x0a\x09parent ifNil: [ ^ Environment new ].\x0a\x09\x0a\x09parentSmalltalkGlobals := (parent at: 'requirejs') value: 'amber_vm/globals'.\x0a\x09parentSmalltalkGlobals ifNil: [ ^ Environment new ].\x0a\x09\x0a\x09^ (parentSmalltalkGlobals at: 'Environment') new",
messageSends: ["ifNil:", "opener", "parent", "new", "value:", "at:"],
referencedClasses: ["Environment"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
self["@environment"]=self._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},globals.HLManager)})},
args: [],
source: "environment\x0a\x09\x22The default environment used by all Helios objects\x22\x0a    \x0a\x09^ environment ifNil: [ environment := self defaultEnvironment ]",
messageSends: ["ifNil:", "defaultEnvironment"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
protocol: 'accessing',
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@history"];
if(($receiver = $2) == null || $receiver.isNil){
self["@history"]=_st($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{},globals.HLManager)})},
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@history"]=aCollection;
return self},
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "inform:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLInformationWidget(){return globals.HLInformationWidget||(typeof HLInformationWidget=="undefined"?nil:HLInformationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLInformationWidget())._new();
_st($1)._informationString_(aString);
$2=_st($1)._show();
return self}, function($ctx1) {$ctx1.fill(self,"inform:",{aString:aString},globals.HLManager)})},
args: ["aString"],
source: "inform: aString\x0a\x09HLInformationWidget new\x0a\x09\x09informationString: aString;\x0a\x09\x09show",
messageSends: ["informationString:", "new", "show"],
referencedClasses: ["HLInformationWidget"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLKeyBinder(){return globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLKeyBinder())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},globals.HLManager)})},
args: [],
source: "keyBinder\x0a\x09^ HLKeyBinder current",
messageSends: ["current"],
referencedClasses: ["HLKeyBinder"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler",
protocol: 'services',
fn: function (){
var self=this;
function $HLErrorHandler(){return globals.HLErrorHandler||(typeof HLErrorHandler=="undefined"?nil:HLErrorHandler)}
function $ErrorHandler(){return globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._environment();
$2=_st($HLErrorHandler())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._registerErrorHandler_($2);
_st($ErrorHandler())._register_(_st($HLErrorHandler())._new());
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler",{},globals.HLManager)})},
args: [],
source: "registerErrorHandler\x0a\x09self environment registerErrorHandler: HLErrorHandler new.\x0a\x09ErrorHandler register: HLErrorHandler new",
messageSends: ["registerErrorHandler:", "environment", "new", "register:"],
referencedClasses: ["HLErrorHandler", "ErrorHandler"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerFinder",
protocol: 'services',
fn: function (){
var self=this;
function $HLFinder(){return globals.HLFinder||(typeof HLFinder=="undefined"?nil:HLFinder)}
function $Finder(){return globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._environment();
$2=_st($HLFinder())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._registerFinder_($2);
_st($Finder())._register_(_st($HLFinder())._new());
return self}, function($ctx1) {$ctx1.fill(self,"registerFinder",{},globals.HLManager)})},
args: [],
source: "registerFinder\x0a\x09self environment registerFinder: HLFinder new.\x0a\x09Finder register: HLFinder new",
messageSends: ["registerFinder:", "environment", "new", "register:"],
referencedClasses: ["HLFinder", "Finder"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector",
protocol: 'services',
fn: function (){
var self=this;
function $HLInspector(){return globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
function $Inspector(){return globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerInspector_($HLInspector());
_st($Inspector())._register_($HLInspector());
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector",{},globals.HLManager)})},
args: [],
source: "registerInspector\x0a\x09self environment registerInspector: HLInspector.\x0a\x09Inspector register: HLInspector",
messageSends: ["registerInspector:", "environment", "register:"],
referencedClasses: ["HLInspector", "Inspector"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler",
protocol: 'services',
fn: function (){
var self=this;
function $HLProgressHandler(){return globals.HLProgressHandler||(typeof HLProgressHandler=="undefined"?nil:HLProgressHandler)}
function $ProgressHandler(){return globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._environment();
$2=_st($HLProgressHandler())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._registerProgressHandler_($2);
_st($ProgressHandler())._register_(_st($HLProgressHandler())._new());
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler",{},globals.HLManager)})},
args: [],
source: "registerProgressHandler\x0a\x09self environment registerProgressHandler: HLProgressHandler new.\x0a\x09ProgressHandler register: HLProgressHandler new",
messageSends: ["registerProgressHandler:", "environment", "new", "register:"],
referencedClasses: ["HLProgressHandler", "ProgressHandler"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerServices",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._registerInspector();
self._registerErrorHandler();
self._registerProgressHandler();
self._registerTranscript();
$1=self._registerFinder();
return self}, function($ctx1) {$ctx1.fill(self,"registerServices",{},globals.HLManager)})},
args: [],
source: "registerServices\x0a\x09self\x0a\x09\x09registerInspector;\x0a\x09\x09registerErrorHandler;\x0a\x09\x09registerProgressHandler;\x0a\x09\x09registerTranscript;\x0a\x09\x09registerFinder",
messageSends: ["registerInspector", "registerErrorHandler", "registerProgressHandler", "registerTranscript", "registerFinder"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "registerTranscript",
protocol: 'services',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._registerTranscript_($HLTranscriptHandler());
return self}, function($ctx1) {$ctx1.fill(self,"registerTranscript",{},globals.HLManager)})},
args: [],
source: "registerTranscript\x0a\x09self environment registerTranscript: HLTranscriptHandler",
messageSends: ["registerTranscript:", "environment"],
referencedClasses: ["HLTranscriptHandler"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeActiveTab",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabsWidget())._removeActiveTab();
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},globals.HLManager)})},
args: [],
source: "removeActiveTab\x0a\x09self tabsWidget removeActiveTab",
messageSends: ["removeActiveTab", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTabForWidget:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabsWidget())._removeTabForWidget_(aWidget);
return self}, function($ctx1) {$ctx1.fill(self,"removeTabForWidget:",{aWidget:aWidget},globals.HLManager)})},
args: ["aWidget"],
source: "removeTabForWidget: aWidget\x0a\x09self tabsWidget removeTabForWidget: aWidget",
messageSends: ["removeTabForWidget:", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLWelcomeWidget(){return globals.HLWelcomeWidget||(typeof HLWelcomeWidget=="undefined"?nil:HLWelcomeWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._tabsWidget());
$ctx1.sendIdx["with:"]=1;
_st(html)._with_(_st($HLWelcomeWidget())._new());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLManager)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self tabsWidget.\x0a\x09html with: HLWelcomeWidget new",
messageSends: ["with:", "tabsWidget", "new"],
referencedClasses: ["HLWelcomeWidget"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:do:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_value_do_(aString,"",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},globals.HLManager)})},
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self \x0a\x09\x09request: aString\x0a\x09\x09value: ''\x0a\x09\x09do: aBlock",
messageSends: ["request:value:do:"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "request:value:do:",
protocol: 'actions',
fn: function (aString,valueString,aBlock){
var self=this;
function $HLRequestWidget(){return globals.HLRequestWidget||(typeof HLRequestWidget=="undefined"?nil:HLRequestWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLRequestWidget())._new();
_st($1)._confirmationString_(aString);
_st($1)._actionBlock_(aBlock);
_st($1)._value_(valueString);
$2=_st($1)._show();
return self}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},globals.HLManager)})},
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09HLRequestWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09value: valueString;\x0a\x09\x09show",
messageSends: ["confirmationString:", "new", "actionBlock:", "value:", "show"],
referencedClasses: ["HLRequestWidget"]
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorTheme:",
protocol: 'accessing',
fn: function (aTheme){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("helios.editorTheme"._asSetting())._value_(aTheme);
return self}, function($ctx1) {$ctx1.fill(self,"setEditorTheme:",{aTheme:aTheme},globals.HLManager)})},
args: ["aTheme"],
source: "setEditorTheme: aTheme\x0a\x0a\x09'helios.editorTheme' asSetting value: aTheme",
messageSends: ["value:", "asSetting"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setTheme:",
protocol: 'accessing',
fn: function (aTheme){
var self=this;
var currentTheme;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
currentTheme="helios.theme"._asSettingIfAbsent_("default");
$1="body"._asJQuery();
_st($1)._removeClass_(_st(currentTheme)._value());
$2=_st($1)._addClass_(aTheme);
_st("helios.theme"._asSetting())._value_(aTheme);
return self}, function($ctx1) {$ctx1.fill(self,"setTheme:",{aTheme:aTheme,currentTheme:currentTheme},globals.HLManager)})},
args: ["aTheme"],
source: "setTheme: aTheme\x0a\x09| currentTheme |\x0a\x0a\x09currentTheme := 'helios.theme' asSettingIfAbsent: 'default'.\x0a\x09\x0a\x09'body' asJQuery\x0a\x09\x09removeClass: currentTheme value;\x0a\x09\x09addClass: aTheme.\x0a\x09\x09\x0a\x09\x0a\x09'helios.theme' asSetting value: aTheme",
messageSends: ["asSettingIfAbsent:", "removeClass:", "asJQuery", "value", "addClass:", "value:", "asSetting"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._registerServices();
$1=self._setupEvents();
$ctx1.sendIdx["setupEvents"]=1;
_st(self._keyBinder())._setupEvents();
$ctx1.sendIdx["setupEvents"]=2;
_st(self._tabsWidget())._setupEvents();
self._setupTheme();
_st("#helper"._asJQuery())._fadeOut();
return self}, function($ctx1) {$ctx1.fill(self,"setup",{},globals.HLManager)})},
args: [],
source: "setup\x0a\x09self \x0a\x09\x09registerServices;\x0a\x09\x09setupEvents.\x0a    self keyBinder setupEvents.\x0a\x09self tabsWidget setupEvents.\x0a\x09self setupTheme.\x0a\x09\x0a\x09\x0a\x09'#helper' asJQuery fadeOut",
messageSends: ["registerServices", "setupEvents", "keyBinder", "tabsWidget", "setupTheme", "fadeOut", "asJQuery"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEvents",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
$2=_st(event)._ctrlKey();
if(smalltalk.assert($2)){
$3="body"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
return _st($3)._addClass_("navigation");
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$4="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=3;
_st($4)._keyup_((function(event){
return smalltalk.withContext(function($ctx2) {
$5="body"._asJQuery();
$ctx2.sendIdx["asJQuery"]=4;
return _st($5)._removeClass_("navigation");
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
_st(_st(window)._asJQuery())._resize_((function(event){
return smalltalk.withContext(function($ctx2) {
return self._refresh();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},globals.HLManager)})},
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event |\x0a\x09\x09\x09\x0a\x09\x09\x22On ctrl keydown, adds a 'navigation' css class to <body>\x0a\x09\x09for the CodeMirror navigation links. See `HLCodeWidget`.\x22\x0a\x09\x09event ctrlKey ifTrue: [\x0a\x09\x09\x09'body' asJQuery addClass: 'navigation' ] ].\x0a\x09\x09\x09\x0a\x09'body' asJQuery keyup: [ :event |\x0a\x09\x09'body' asJQuery removeClass: 'navigation' ].\x0a\x09\x09\x0a\x09window asJQuery resize: [ :event |\x0a\x09\x09self refresh ]",
messageSends: ["keydown:", "asJQuery", "ifTrue:", "ctrlKey", "addClass:", "keyup:", "removeClass:", "resize:", "refresh"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setupTheme",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._setTheme_("default");
$1=self._setEditorTheme_("default");
return self}, function($ctx1) {$ctx1.fill(self,"setupTheme",{},globals.HLManager)})},
args: [],
source: "setupTheme\x0a\x09\x22self \x0a\x09\x09setTheme: 'niflheim';\x0a\x09\x09setEditorTheme: 'niflheim'.\x22\x0a\x09\x09\x0a\x09self \x0a\x09\x09setTheme: 'default';\x0a\x09\x09setEditorTheme: 'default'.",
messageSends: ["setTheme:", "setEditorTheme:"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabWidth",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(window)._asJQuery())._width()).__minus((90))).__slash(_st(self._tabs())._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabWidth",{},globals.HLManager)})},
args: [],
source: "tabWidth\x0a\x09^ (window asJQuery width - 90) / self tabs size",
messageSends: ["/", "-", "width", "asJQuery", "size", "tabs"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tabsWidget())._tabs();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},globals.HLManager)})},
args: [],
source: "tabs\x0a\x09^ self tabsWidget tabs",
messageSends: ["tabs", "tabsWidget"],
referencedClasses: []
}),
globals.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabsWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLTabsWidget(){return globals.HLTabsWidget||(typeof HLTabsWidget=="undefined"?nil:HLTabsWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tabsWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tabsWidget"]=_st($HLTabsWidget())._new();
$1=self["@tabsWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabsWidget",{},globals.HLManager)})},
args: [],
source: "tabsWidget\x0a\x09^ tabsWidget ifNil: [ tabsWidget := HLTabsWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLTabsWidget"]
}),
globals.HLManager);


globals.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=_st(self._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.HLManager.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self basicNew initialize ]",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
globals.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.HLManager.klass)})},
args: [],
source: "new\x0a\x09\x22Use current instead\x22\x0a\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._current();
_st($1)._setup();
$2=_st($1)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"setup",{},globals.HLManager.klass)})},
args: [],
source: "setup\x0a\x09self current \x0a\x09\x09setup;\x0a\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["setup", "current", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.HLManager.klass);


smalltalk.addClass('HLModalWidget', globals.HLWidget, [], 'Helios-Core');
globals.HLModalWidget.comment="I implement an abstract modal widget.";
smalltalk.addMethod(
smalltalk.method({
selector: "giveFocusToButton:",
protocol: 'private',
fn: function (aButton){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aButton)._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"giveFocusToButton:",{aButton:aButton},globals.HLModalWidget)})},
args: ["aButton"],
source: "giveFocusToButton: aButton\x0a\x09aButton asJQuery focus",
messageSends: ["focus", "asJQuery"],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasButtons",
protocol: 'rendering',
fn: function (){
var self=this;
return true;
},
args: [],
source: "hasButtons\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=".dialog"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._removeClass_("active");
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2="#overlay"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
_st($2)._remove();
$ctx2.sendIdx["remove"]=1;
return _st(_st(self["@wrapper"])._asJQuery())._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.HLModalWidget)})},
args: [],
source: "remove\x0a\x09'.dialog' asJQuery removeClass: 'active'.\x0a\x09[ \x0a\x09\x09'#overlay' asJQuery remove.\x0a\x09\x09wrapper asJQuery remove\x0a\x09] valueWithTimeout: 300",
messageSends: ["removeClass:", "asJQuery", "valueWithTimeout:", "remove"],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._id_("overlay");
$2=_st(html)._div();
_st($2)._class_("dialog ".__comma(self._cssClass()));
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderMainOn_(html);
$4=self._hasButtons();
if(smalltalk.assert($4)){
return self._renderButtonsOn_(html);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(".dialog"._asJQuery())._addClass_("active");
self._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,confirmButton:confirmButton},globals.HLModalWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div id: 'overlay'.\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'dialog ', self cssClass;\x0a\x09\x09with: [\x0a\x09\x09\x09self renderMainOn: html.\x0a\x09\x09\x09self hasButtons ifTrue: [ \x0a\x09\x09\x09\x09self renderButtonsOn: html ] ].\x0a\x0a\x09'.dialog' asJQuery addClass: 'active'.\x0a\x09self setupKeyBindings",
messageSends: ["id:", "div", "class:", ",", "cssClass", "with:", "renderMainOn:", "ifTrue:", "hasButtons", "renderButtonsOn:", "addClass:", "asJQuery", "setupKeyBindings"],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderMainOn: html",
messageSends: [],
referencedClasses: []
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
protocol: 'rendering',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(".dialog"._asJQuery())._keyup_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._keyCode()).__eq(_st(_st($String())._esc())._asciiValue());
if(smalltalk.assert($1)){
return self._cancel();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},globals.HLModalWidget)})},
args: [],
source: "setupKeyBindings\x0a\x09'.dialog' asJQuery keyup: [ :e |\x0a\x09\x09e keyCode = String esc asciiValue ifTrue: [ self cancel ] ]",
messageSends: ["keyup:", "asJQuery", "ifTrue:", "=", "keyCode", "asciiValue", "esc", "cancel"],
referencedClasses: ["String"]
}),
globals.HLModalWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.HLModalWidget)})},
args: [],
source: "show\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.HLModalWidget);



smalltalk.addClass('HLConfirmationWidget', globals.HLModalWidget, ['cancelButtonLabel', 'confirmButtonLabel', 'confirmationString', 'actionBlock', 'cancelBlock'], 'Helios-Core');
globals.HLConfirmationWidget.comment="I display confirmation dialog. \x0a\x0a## API\x0a\x0aHLWidget contains convenience methods like `HLWidget >> #confirm:ifTrue:` for creating confirmation dialogs.";
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@actionBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionBlock",{},globals.HLConfirmationWidget)})},
args: [],
source: "actionBlock\x0a\x09^ actionBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@actionBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "actionBlock: aBlock\x0a\x09actionBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cancelBlock())._value();
self._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},globals.HLConfirmationWidget)})},
args: [],
source: "cancel\x0a\x09self cancelBlock value.\x0a\x09self remove",
messageSends: ["value", "cancelBlock", "remove"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelBlock",{},globals.HLConfirmationWidget)})},
args: [],
source: "cancelBlock\x0a\x09^ cancelBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "cancelBlock: aBlock\x0a\x09cancelBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelButtonLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelButtonLabel"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Cancel";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelButtonLabel",{},globals.HLConfirmationWidget)})},
args: [],
source: "cancelButtonLabel\x0a\x09^ cancelButtonLabel ifNil: [ 'Cancel' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@cancelButtonLabel"]=aString;
$1=self["@cancelButtonLabel"];
return $1;
},
args: ["aString"],
source: "cancelButtonLabel: aString\x0a\x09^ cancelButtonLabel := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove();
_st(self._actionBlock())._value();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},globals.HLConfirmationWidget)})},
args: [],
source: "confirm\x0a\x09self remove.\x0a\x09self actionBlock value",
messageSends: ["remove", "value", "actionBlock"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmButtonLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@confirmButtonLabel"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Confirm";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirmButtonLabel",{},globals.HLConfirmationWidget)})},
args: [],
source: "confirmButtonLabel\x0a\x09^ confirmButtonLabel ifNil: [ 'Confirm' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@confirmButtonLabel"]=aString;
$1=self["@confirmButtonLabel"];
return $1;
},
args: ["aString"],
source: "confirmButtonLabel: aString\x0a\x09^ confirmButtonLabel := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@confirmationString"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Confirm";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirmationString",{},globals.HLConfirmationWidget)})},
args: [],
source: "confirmationString\x0a\x09^ confirmationString ifNil: [ 'Confirm' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@confirmationString"]=aString;
return self},
args: ["aString"],
source: "confirmationString: aString\x0a\x09confirmationString := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("buttons");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._class_("button");
$ctx2.sendIdx["class:"]=2;
_st($3)._with_(self._cancelButtonLabel());
$ctx2.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._cancel();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
_st($5)._class_("button default");
_st($5)._with_(self._confirmButtonLabel());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._confirm();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
confirmButton=$6;
return confirmButton;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._giveFocusToButton_(confirmButton);
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,confirmButton:confirmButton},globals.HLConfirmationWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'button';\x0a\x09\x09\x09\x09with: self cancelButtonLabel;\x0a\x09\x09\x09\x09onClick: [ self cancel ].\x0a\x09\x09\x09confirmButton := html button\x0a\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09with: self confirmButtonLabel;\x0a\x09\x09\x09\x09onClick: [ self confirm ] ].\x0a\x0a\x09self giveFocusToButton:confirmButton",
messageSends: ["class:", "div", "with:", "button", "cancelButtonLabel", "onClick:", "cancel", "confirmButtonLabel", "confirm", "giveFocusToButton:"],
referencedClasses: []
}),
globals.HLConfirmationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._class_("head");
$2=_st($1)._with_(self._confirmationString());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},globals.HLConfirmationWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09html span \x0a\x09\x09class: 'head'; \x0a\x09\x09with: self confirmationString",
messageSends: ["class:", "span", "with:", "confirmationString"],
referencedClasses: []
}),
globals.HLConfirmationWidget);



smalltalk.addClass('HLRequestWidget', globals.HLConfirmationWidget, ['input', 'multiline', 'value'], 'Helios-Core');
globals.HLRequestWidget.comment="I display a modal window requesting user input.\x0a\x0a## API\x0a\x0a`HLWidget >> #request:do:` and `#request:value:do:` are convenience methods for creating modal request dialogs.";
smalltalk.addMethod(
smalltalk.method({
selector: "beMultiline",
protocol: 'accessing',
fn: function (){
var self=this;
self["@multiline"]=true;
return self},
args: [],
source: "beMultiline\x0a\x09multiline := true",
messageSends: [],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "beSingleline",
protocol: 'accessing',
fn: function (){
var self=this;
self["@multiline"]=false;
return self},
args: [],
source: "beSingleline\x0a\x09multiline := false",
messageSends: [],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
var val;
return smalltalk.withContext(function($ctx1) { 
val=_st(_st(self["@input"])._asJQuery())._val();
self._remove();
_st(self._actionBlock())._value_(val);
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{val:val},globals.HLRequestWidget)})},
args: [],
source: "confirm\x0a\x09| val |\x0a\x09val := input asJQuery val.\x0a\x09self remove.\x0a\x09self actionBlock value: val",
messageSends: ["val", "asJQuery", "remove", "value:", "actionBlock"],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "large";
},
args: [],
source: "cssClass\x0a\x09^ 'large'",
messageSends: [],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "giveFocusToButton:",
protocol: 'private',
fn: function (aButton){
var self=this;
return self},
args: ["aButton"],
source: "giveFocusToButton: aButton",
messageSends: [],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isMultiline",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@multiline"];
if(($receiver = $2) == null || $receiver.isNil){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMultiline",{},globals.HLRequestWidget)})},
args: [],
source: "isMultiline\x0a\x09^ multiline ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
($ctx1.supercall = true, globals.HLRequestWidget.superclass.fn.prototype._renderMainOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
$1=self._isMultiline();
if(smalltalk.assert($1)){
self["@input"]=_st(html)._textarea();
self["@input"];
} else {
$2=_st(html)._input();
_st($2)._type_("text");
_st($2)._onKeyDown_((function(event){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($3)){
return self._confirm();
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
$4=_st($2)._yourself();
self["@input"]=$4;
self["@input"];
};
$5=_st(self["@input"])._asJQuery();
_st($5)._val_(self._value());
$6=_st($5)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},globals.HLRequestWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09super renderMainOn: html.\x0a\x09self isMultiline\x0a\x09\x09ifTrue: [ input := html textarea ]\x0a\x09\x09ifFalse: [ input := html input \x0a\x09\x09\x09type: 'text';\x0a\x09\x09\x09onKeyDown: [ :event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09\x09self confirm ] ];\x0a\x09\x09\x09yourself ].\x0a\x09input asJQuery \x0a\x09\x09val: self value;\x0a\x09\x09focus",
messageSends: ["renderMainOn:", "ifTrue:ifFalse:", "isMultiline", "textarea", "type:", "input", "onKeyDown:", "ifTrue:", "=", "keyCode", "confirm", "yourself", "val:", "asJQuery", "value", "focus"],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@value"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.HLRequestWidget)})},
args: [],
source: "value\x0a\x09^ value ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLRequestWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLRequestWidget);



smalltalk.addClass('HLProgressWidget', globals.HLModalWidget, ['progressBars', 'visible'], 'Helios-Core');
globals.HLProgressWidget.comment="I am a widget used to display progress modal dialogs.\x0a\x0aMy default instance is accessed with `HLProgressWidget class >> #default`.\x0a\x0aSee `HLProgressHandler` for usage.";
smalltalk.addMethod(
smalltalk.method({
selector: "addProgressBar:",
protocol: 'actions',
fn: function (aProgressBar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show();
_st(self._progressBars())._add_(aProgressBar);
_st(aProgressBar)._appendToJQuery_(_st(_st(self._wrapper())._asJQuery())._find_(".dialog"));
return self}, function($ctx1) {$ctx1.fill(self,"addProgressBar:",{aProgressBar:aProgressBar},globals.HLProgressWidget)})},
args: ["aProgressBar"],
source: "addProgressBar: aProgressBar\x0a\x09self show.\x0a\x09self progressBars add: aProgressBar.\x0a\x09aProgressBar appendToJQuery: (self wrapper asJQuery find: '.dialog')",
messageSends: ["show", "add:", "progressBars", "appendToJQuery:", "find:", "asJQuery", "wrapper"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
protocol: 'actions',
fn: function (aBlock,aCollection,aString){
var self=this;
var progressBar;
function $HLProgressBarWidget(){return globals.HLProgressBarWidget||(typeof HLProgressBarWidget=="undefined"?nil:HLProgressBarWidget)}
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
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString,progressBar:progressBar},globals.HLProgressWidget)})},
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09| progressBar |\x0a\x09\x0a\x09progressBar := HLProgressBarWidget new\x0a\x09\x09parent: self;\x0a\x09\x09label: aString;\x0a\x09\x09workBlock: aBlock;\x0a\x09\x09collection: aCollection;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self addProgressBar: progressBar.\x0a\x09progressBar start",
messageSends: ["parent:", "new", "label:", "workBlock:", "collection:", "yourself", "addProgressBar:", "start"],
referencedClasses: ["HLProgressBarWidget"]
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeProgressBar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},globals.HLProgressWidget)})},
args: [],
source: "flush\x0a\x09self progressBars do: [ :each |\x0a\x09\x09self removeProgressBar: each ]",
messageSends: ["do:", "progressBars", "removeProgressBar:"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasButtons",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasButtons\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isVisible",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@visible"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},globals.HLProgressWidget)})},
args: [],
source: "isVisible\x0a\x09^ visible ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "progressBars",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@progressBars"];
if(($receiver = $2) == null || $receiver.isNil){
self["@progressBars"]=_st($OrderedCollection())._new();
$1=self["@progressBars"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"progressBars",{},globals.HLProgressWidget)})},
args: [],
source: "progressBars\x0a\x09^ progressBars ifNil: [ progressBars := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isVisible();
if(smalltalk.assert($1)){
self["@visible"]=false;
self["@visible"];
($ctx1.supercall = true, globals.HLProgressWidget.superclass.fn.prototype._remove.apply(_st(self), []));
$ctx1.supercall = false;
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.HLProgressWidget)})},
args: [],
source: "remove\x0a\x09self isVisible ifTrue: [\x0a\x09\x09visible := false.\x0a\x09\x09super remove ]",
messageSends: ["ifTrue:", "isVisible", "remove"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProgressBar:",
protocol: 'actions',
fn: function (aProgressBar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._progressBars();
$ctx1.sendIdx["progressBars"]=1;
_st($1)._remove_ifAbsent_(aProgressBar,(function(){
}));
_st(_st(_st(aProgressBar)._wrapper())._asJQuery())._remove();
$ctx1.sendIdx["remove"]=1;
_st(self._progressBars())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProgressBar:",{aProgressBar:aProgressBar},globals.HLProgressWidget)})},
args: ["aProgressBar"],
source: "removeProgressBar: aProgressBar\x0a\x09self progressBars remove: aProgressBar ifAbsent: [].\x0a\x09aProgressBar wrapper asJQuery remove.\x0a\x09\x0a\x09self progressBars ifEmpty: [ self remove ]",
messageSends: ["remove:ifAbsent:", "progressBars", "remove", "asJQuery", "wrapper", "ifEmpty:"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._progressBars())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},globals.HLProgressWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09self progressBars do: [ :each |\x0a\x09\x09html with: each ]",
messageSends: ["do:", "progressBars", "with:"],
referencedClasses: []
}),
globals.HLProgressWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isVisible();
if(! smalltalk.assert($1)){
self["@visible"]=true;
self["@visible"];
($ctx1.supercall = true, globals.HLProgressWidget.superclass.fn.prototype._show.apply(_st(self), []));
$ctx1.supercall = false;
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.HLProgressWidget)})},
args: [],
source: "show\x0a\x09self isVisible ifFalse: [\x0a\x09\x09visible := true.\x0a\x09\x09super show ]",
messageSends: ["ifFalse:", "isVisible", "show"],
referencedClasses: []
}),
globals.HLProgressWidget);


globals.HLProgressWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},globals.HLProgressWidget.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.HLProgressWidget.klass);


smalltalk.addClass('HLTabSelectionWidget', globals.HLModalWidget, ['tabs', 'tabList', 'selectedTab', 'selectCallback', 'cancelCallback', 'confirmCallback'], 'Helios-Core');
globals.HLTabSelectionWidget.comment="I am a modal window used to select or create tabs.";
smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove();
_st(self._cancelCallback())._value();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},globals.HLTabSelectionWidget)})},
args: [],
source: "cancel\x0a\x09self remove.\x0a\x09self cancelCallback value",
messageSends: ["remove", "value", "cancelCallback"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelCallback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelCallback",{},globals.HLTabSelectionWidget)})},
args: [],
source: "cancelCallback\x0a\x09^ cancelCallback ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelCallback"]=aBlock;
return self},
args: ["aBlock"],
source: "cancelCallback: aBlock\x0a\x09cancelCallback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove();
_st(self._confirmCallback())._value_(self._selectedTab());
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},globals.HLTabSelectionWidget)})},
args: [],
source: "confirm\x0a\x09self remove.\x0a\x09self confirmCallback value: self selectedTab",
messageSends: ["remove", "value:", "confirmCallback", "selectedTab"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmCallback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@confirmCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirmCallback",{},globals.HLTabSelectionWidget)})},
args: [],
source: "confirmCallback\x0a\x09^ confirmCallback ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@confirmCallback"]=aBlock;
return self},
args: ["aBlock"],
source: "confirmCallback: aBlock\x0a\x09confirmCallback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("buttons");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._class_("button");
$ctx2.sendIdx["class:"]=2;
_st($3)._with_("Cancel");
$ctx2.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._cancel();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
_st($5)._class_("button default");
_st($5)._with_("Select tab");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._confirm();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
confirmButton=$6;
return confirmButton;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._giveFocusToButton_(confirmButton);
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,confirmButton:confirmButton},globals.HLTabSelectionWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'button';\x0a\x09\x09\x09\x09with: 'Cancel';\x0a\x09\x09\x09\x09onClick: [ self cancel ].\x0a\x09\x09\x09confirmButton := html button\x0a\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09with: 'Select tab';\x0a\x09\x09\x09\x09onClick: [ self confirm ] ].\x0a\x0a\x09self giveFocusToButton:confirmButton",
messageSends: ["class:", "div", "with:", "button", "onClick:", "cancel", "confirm", "giveFocusToButton:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLTabSelectionWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self._tabList())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLTabSelectionWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09super renderContentOn: html.\x0a\x09self tabList focus",
messageSends: ["renderContentOn:", "focus", "tabList"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("title");
$2=_st($1)._with_("Tab selection");
$ctx1.sendIdx["with:"]=1;
_st(html)._with_(self._tabList());
return self}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},globals.HLTabSelectionWidget)})},
args: ["html"],
source: "renderMainOn: html\x0a\x09html div \x0a\x09\x09class: 'title'; \x0a\x09\x09with: 'Tab selection'.\x0a\x09\x0a\x09html with: self tabList",
messageSends: ["class:", "div", "with:", "tabList"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._span();
_st($1)._class_(_st(aTab)._cssClass());
$2=_st($1)._with_(_st(aTab)._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderTab:on:",{aTab:aTab,html:html},globals.HLTabSelectionWidget)})},
args: ["aTab", "html"],
source: "renderTab: aTab on: html\x0a\x09html \x0a\x09\x09span \x0a\x09\x09\x09class: aTab cssClass;\x0a\x09\x09\x09with: aTab label",
messageSends: ["class:", "span", "cssClass", "with:", "label"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(html)._a();
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderTab_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectTab_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
return $2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},globals.HLTabSelectionWidget)})},
args: ["html"],
source: "renderTabsOn: html\x0a\x09self tabs do: [ :each |\x0a\x09\x09html li with: [ \x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09self renderTab: each on: html ];\x0a\x09\x09\x09\x09onClick: [ self selectTab: each ] ] ]",
messageSends: ["do:", "tabs", "with:", "li", "a", "renderTab:on:", "onClick:", "selectTab:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectCallback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@selectCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectCallback",{},globals.HLTabSelectionWidget)})},
args: [],
source: "selectCallback\x0a\x09^ selectCallback ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@selectCallback"]=aBlock;
return self},
args: ["aBlock"],
source: "selectCallback: aBlock\x0a\x09selectCallback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedTab_(aTab);
_st(self._selectCallback())._value_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aTab:aTab},globals.HLTabSelectionWidget)})},
args: ["aTab"],
source: "selectTab: aTab\x0a\x09self selectedTab: aTab.\x0a\x09self selectCallback value: aTab",
messageSends: ["selectedTab:", "value:", "selectCallback"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedTab",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedTab"];
return $1;
},
args: [],
source: "selectedTab\x0a\x09^ selectedTab",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedTab:",
protocol: 'accessing',
fn: function (aTab){
var self=this;
self["@selectedTab"]=aTab;
return self},
args: ["aTab"],
source: "selectedTab: aTab\x0a\x09selectedTab := aTab",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
protocol: 'actions',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.HLTabSelectionWidget.superclass.fn.prototype._setupKeyBindings.apply(_st(self), []));
$ctx1.supercall = false;
_st(".dialog"._asJQuery())._keyup_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
return self._confirm();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},globals.HLTabSelectionWidget)})},
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x09'.dialog' asJQuery keyup: [ :e |\x0a\x09\x09e keyCode = String cr asciiValue ifTrue: [ self confirm ] ]",
messageSends: ["setupKeyBindings", "keyup:", "asJQuery", "ifTrue:", "=", "keyCode", "asciiValue", "cr", "confirm"],
referencedClasses: ["String"]
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabList",
protocol: 'rendering',
fn: function (){
var self=this;
function $HLTabListWidget(){return globals.HLTabListWidget||(typeof HLTabListWidget=="undefined"?nil:HLTabListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
$1=self["@tabList"];
if(($receiver = $1) == null || $receiver.isNil){
self["@tabList"]=_st($HLTabListWidget())._new();
self["@tabList"];
$2=self["@tabList"];
_st($2)._callback_((function(tab){
return smalltalk.withContext(function($ctx2) {
self._selectTab_(tab);
return _st(self["@tabList"])._focus();
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,2)})}));
_st($2)._selectedItem_(self._selectedTab());
$3=_st($2)._items_(self._tabs());
$3;
} else {
$1;
};
$4=self["@tabList"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"tabList",{},globals.HLTabSelectionWidget)})},
args: [],
source: "tabList\x0a\x09tabList ifNil: [ \x0a\x09\x09tabList := HLTabListWidget new.\x0a\x09\x09tabList\x0a\x09\x09\x09callback: [ :tab | self selectTab: tab. tabList focus ];\x0a\x09\x09\x09selectedItem: self selectedTab;\x0a\x09\x09\x09items: self tabs ].\x0a\x09\x0a\x09^ tabList",
messageSends: ["ifNil:", "new", "callback:", "selectTab:", "focus", "selectedItem:", "selectedTab", "items:", "tabs"],
referencedClasses: ["HLTabListWidget"]
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tabs"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},globals.HLTabSelectionWidget)})},
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabSelectionWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@tabs"]=aCollection;
return self},
args: ["aCollection"],
source: "tabs: aCollection\x0a\x09tabs := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLTabSelectionWidget);



smalltalk.addClass('HLProgressBarWidget', globals.HLWidget, ['label', 'parent', 'workBlock', 'collection', 'bar'], 'Helios-Core');
globals.HLProgressBarWidget.comment="I am a widget used to display a progress bar while iterating over a collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collection"];
return $1;
},
args: [],
source: "collection\x0a\x09^ collection",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "collection:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self},
args: ["aCollection"],
source: "collection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$7,$6,$5;
$4=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=_st($4)._size();
$ctx1.sendIdx["size"]=1;
$2=_st(anInteger).__slash($3);
$1=_st($2).__star((100));
self._updateProgress_($1);
$7=self._collection();
$ctx1.sendIdx["collection"]=2;
$6=_st($7)._size();
$5=_st(anInteger).__lt_eq($6);
if(smalltalk.assert($5)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._workBlock())._value_(_st(self._collection())._at_(anInteger));
return self._evaluateAt_(_st(anInteger).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((10));
$ctx1.sendIdx["valueWithTimeout:"]=1;
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}))._valueWithTimeout_((500));
};
return self}, function($ctx1) {$ctx1.fill(self,"evaluateAt:",{anInteger:anInteger},globals.HLProgressBarWidget)})},
args: ["anInteger"],
source: "evaluateAt: anInteger\x0a\x09self updateProgress: (anInteger / self collection size) * 100.\x0a\x09anInteger <= self collection size\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09[ \x0a\x09\x09\x09\x09self workBlock value: (self collection at: anInteger).\x0a\x09\x09\x09\x09self evaluateAt: anInteger + 1 ] valueWithTimeout: 10 ]\x0a\x09\x09ifFalse: [ [ self remove ] valueWithTimeout: 500 ]",
messageSends: ["updateProgress:", "*", "/", "size", "collection", "ifTrue:ifFalse:", "<=", "valueWithTimeout:", "value:", "workBlock", "at:", "evaluateAt:", "+", "remove"],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;
},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aProgress){
var self=this;
self["@parent"]=aProgress;
return self},
args: ["aProgress"],
source: "parent: aProgress\x0a\x09parent := aProgress",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._removeProgressBar_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.HLProgressBarWidget)})},
args: [],
source: "remove\x0a\x09self parent removeProgressBar: self",
messageSends: ["removeProgressBar:", "parent"],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(_st(html)._span())._with_(self._label());
$ctx1.sendIdx["with:"]=1;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("progress");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("bar");
$4=_st($3)._style_("width: 0%");
self["@bar"]=$4;
return self["@bar"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLProgressBarWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html span with: self label.\x0a\x09html div \x0a\x09\x09class: 'progress';\x0a\x09\x09with: [\x0a\x09\x09\x09bar := html div \x0a\x09\x09\x09\x09class: 'bar';\x0a\x09\x09\x09\x09style: 'width: 0%' ]",
messageSends: ["with:", "span", "label", "class:", "div", "style:"],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._evaluateAt_((1));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.HLProgressBarWidget)})},
args: [],
source: "start\x0a\x09\x22Make sure the UI has some time to update itself between each iteration\x22\x0a\x09\x0a\x09self evaluateAt: 1",
messageSends: ["evaluateAt:"],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateProgress:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@bar"])._asJQuery())._css_put_("width",_st(_st(anInteger)._asString()).__comma("%"));
return self}, function($ctx1) {$ctx1.fill(self,"updateProgress:",{anInteger:anInteger},globals.HLProgressBarWidget)})},
args: ["anInteger"],
source: "updateProgress: anInteger\x0a\x09bar asJQuery css: 'width' put: anInteger asString, '%'",
messageSends: ["css:put:", "asJQuery", ",", "asString"],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@workBlock"];
return $1;
},
args: [],
source: "workBlock\x0a\x09^ workBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@workBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "workBlock: aBlock\x0a\x09workBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.HLProgressBarWidget);


globals.HLProgressBarWidget.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},globals.HLProgressBarWidget.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.HLProgressBarWidget.klass);


smalltalk.addClass('HLTabWidget', globals.HLWidget, ['widget', 'label', 'root'], 'Helios-Core');
globals.HLTabWidget.comment="I am a widget specialized into building another widget as an Helios tab.\x0a\x0aI should not be used directly, `HLWidget class >> #openAsTab` should be used instead.\x0a\x0a## Example\x0a\x0a    HLWorkspace openAsTab";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},globals.HLTabWidget)})},
args: [],
source: "activate\x0a\x09self manager activate: self",
messageSends: ["activate:", "manager"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "add",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._manager())._addTab_(self);
self._observeManager();
return self}, function($ctx1) {$ctx1.fill(self,"add",{},globals.HLTabWidget)})},
args: [],
source: "add\x0a\x09self manager addTab: self.\x0a\x09self observeManager",
messageSends: ["addTab:", "manager", "observeManager"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._widget())._tabClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.HLTabWidget)})},
args: [],
source: "cssClass\x0a\x09^ self widget tabClass",
messageSends: ["tabClass", "widget"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._widget();
$ctx1.sendIdx["widget"]=1;
$1=_st($2)._canHaveFocus();
if(smalltalk.assert($1)){
_st(self._widget())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.HLTabWidget)})},
args: [],
source: "focus\x0a\x09self widget canHaveFocus ifTrue: [\x0a\x09\x09self widget focus ]",
messageSends: ["ifTrue:", "canHaveFocus", "widget", "focus"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","hidden");
};
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.HLTabWidget)})},
args: [],
source: "hide\x0a\x09root ifNotNil: [ root asJQuery css: 'visibility' put: 'hidden' ]",
messageSends: ["ifNotNil:", "css:put:", "asJQuery"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},globals.HLTabWidget)})},
args: [],
source: "isActive\x0a\x09^ self manager activeTab = self",
messageSends: ["=", "activeTab", "manager"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@label"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.HLTabWidget)})},
args: [],
source: "label\x0a\x09^ label ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},globals.HLTabWidget)})},
args: [],
source: "manager\x0a\x09^ HLManager current",
messageSends: ["current"],
referencedClasses: ["HLManager"]
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeManager",
protocol: 'actions',
fn: function (){
var self=this;
function $HLTabLabelChanged(){return globals.HLTabLabelChanged||(typeof HLTabLabelChanged=="undefined"?nil:HLTabLabelChanged)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._manager())._announcer())._on_send_to_($HLTabLabelChanged(),"onTabLabelChanged:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeManager",{},globals.HLTabWidget)})},
args: [],
source: "observeManager\x0a\x09self manager announcer \x0a\x09\x09on: HLTabLabelChanged\x0a\x09\x09send: #onTabLabelChanged:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "manager"],
referencedClasses: ["HLTabLabelChanged"]
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onTabLabelChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3;
$2=_st(anAnnouncement)._widget();
$ctx1.sendIdx["widget"]=1;
$1=_st($2).__eq(self._widget());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
$4=self._label();
$ctx1.sendIdx["label"]=1;
$5=_st(anAnnouncement)._label();
$ctx1.sendIdx["label"]=2;
$3=_st($4).__eq($5);
if(! smalltalk.assert($3)){
self._label_(_st(anAnnouncement)._label());
_st(self._manager())._refresh();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"onTabLabelChanged:",{anAnnouncement:anAnnouncement},globals.HLTabWidget)})},
args: ["anAnnouncement"],
source: "onTabLabelChanged: anAnnouncement\x0a\x09anAnnouncement widget = self widget ifTrue: [\x0a\x09\x09self label = anAnnouncement label ifFalse: [\x0a\x09\x09\x09self label: anAnnouncement label.\x0a\x09\x09\x09self manager refresh ] ]",
messageSends: ["ifTrue:", "=", "widget", "ifFalse:", "label", "label:", "refresh", "manager"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._widget())._registerBindings();
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},globals.HLTabWidget)})},
args: [],
source: "registerBindings\x0a\x09self widget registerBindings",
messageSends: ["registerBindings", "widget"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
self._unregister();
$ctx1.sendIdx["unregister"]=1;
_st(self._widget())._unregister();
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.HLTabWidget)})},
args: [],
source: "remove\x0a\x09self unregister.\x0a\x09self widget unregister.\x0a\x09root ifNotNil: [ root asJQuery remove ]",
messageSends: ["unregister", "widget", "ifNotNil:", "remove", "asJQuery"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("tab");
$2=_st($1)._yourself();
self["@root"]=$2;
self._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLTabWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09root := html div\x0a\x09\x09class: 'tab';\x0a\x09\x09yourself.\x0a\x09self renderTab",
messageSends: ["class:", "div", "yourself", "renderTab"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab",
protocol: 'rendering',
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},globals.HLTabWidget)})},
args: [],
source: "renderTab\x0a\x09root contents: [ :html |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'amber_box';\x0a\x09\x09\x09with: [ self widget renderOn: html ] ]",
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$2="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
self._appendToJQuery_($2);
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","visible");
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.HLTabWidget)})},
args: [],
source: "show\x0a\x09root\x0a\x09\x09ifNil: [ self appendToJQuery: 'body' asJQuery ]\x0a\x09\x09ifNotNil: [ root asJQuery css: 'visibility' put: 'visible' ]",
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "css:put:"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._manager())._announcer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLTabWidget)})},
args: [],
source: "unregister\x0a\x09self manager announcer unsubscribe: self",
messageSends: ["unsubscribe:", "announcer", "manager"],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.HLTabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
globals.HLTabWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString},globals.HLTabWidget.klass)})},
args: ["aWidget", "aString"],
source: "on: aWidget labelled: aString\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09label: aString;\x0a\x09\x09yourself",
messageSends: ["widget:", "new", "label:", "yourself"],
referencedClasses: []
}),
globals.HLTabWidget.klass);


smalltalk.addClass('HLTabsWidget', globals.HLWidget, ['tabs', 'activeTab', 'history', 'selectionDisabled'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._isSelectionDisabled();
if(smalltalk.assert($1)){
return self;
};
_st(_st(self._manager())._keyBinder())._flushBindings();
_st(aTab)._registerBindings();
self["@activeTab"]=aTab;
self._refresh();
self._addToHistory_(aTab);
$2=self._show_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "activate: aTab\x0a\x09self isSelectionDisabled ifTrue: [ ^ self ].\x0a\x0a\x09self manager keyBinder flushBindings.\x0a\x09aTab registerBindings.\x0a\x09activeTab := aTab.\x0a\x09\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09addToHistory: aTab;\x0a\x09\x09show: aTab",
messageSends: ["ifTrue:", "isSelectionDisabled", "flushBindings", "keyBinder", "manager", "registerBindings", "refresh", "addToHistory:", "show:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextTab",
protocol: 'actions',
fn: function (){
var self=this;
var nextTab;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
var $early={};
try {
$1=self._tabs();
$ctx1.sendIdx["tabs"]=1;
_st($1)._ifEmpty_((function(){
throw $early=[self];
}));
$2=self._tabs();
$ctx1.sendIdx["tabs"]=2;
$5=self._tabs();
$ctx1.sendIdx["tabs"]=3;
$4=_st($5)._indexOf_(self._activeTab());
$3=_st($4).__plus((1));
nextTab=_st($2)._at_ifAbsent_($3,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._tabs())._first();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._activate_(nextTab);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"activateNextTab",{nextTab:nextTab},globals.HLTabsWidget)})},
args: [],
source: "activateNextTab\x0a\x09| nextTab |\x0a\x09\x0a\x09self tabs ifEmpty: [ ^ self ].\x0a\x09\x0a\x09nextTab := self tabs \x0a\x09\x09at: (self tabs indexOf: self activeTab) + 1 \x0a\x09\x09ifAbsent: [ self tabs first ].\x0a\x09\x09\x0a\x09self activate: nextTab",
messageSends: ["ifEmpty:", "tabs", "at:ifAbsent:", "+", "indexOf:", "activeTab", "first", "activate:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousTab",
protocol: 'actions',
fn: function (){
var self=this;
var previousTab;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
var $early={};
try {
$1=self._tabs();
$ctx1.sendIdx["tabs"]=1;
_st($1)._ifEmpty_((function(){
throw $early=[self];
}));
$2=self._tabs();
$ctx1.sendIdx["tabs"]=2;
$5=self._tabs();
$ctx1.sendIdx["tabs"]=3;
$4=_st($5)._indexOf_(self._activeTab());
$3=_st($4).__minus((1));
previousTab=_st($2)._at_ifAbsent_($3,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._tabs())._last();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._activate_(previousTab);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"activatePreviousTab",{previousTab:previousTab},globals.HLTabsWidget)})},
args: [],
source: "activatePreviousTab\x0a\x09| previousTab |\x0a\x09\x0a\x09self tabs ifEmpty: [ ^ self ].\x0a\x09\x0a\x09previousTab := self tabs \x0a\x09\x09at: (self tabs indexOf: self activeTab) - 1 \x0a\x09\x09ifAbsent: [ self tabs last ].\x0a\x09\x09\x0a\x09self activate: previousTab",
messageSends: ["ifEmpty:", "tabs", "at:ifAbsent:", "-", "indexOf:", "activeTab", "last", "activate:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activeTab",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@activeTab"];
return $1;
},
args: [],
source: "activeTab\x0a\x09^ activeTab",
messageSends: [],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabs())._add_(aTab);
self._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a    self activate: aTab",
messageSends: ["add:", "tabs", "activate:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addToHistory:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeFromHistory_(aTab);
_st(self._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "addToHistory: aTab\x0a\x09self removeFromHistory: aTab.\x0a\x09self history add: aTab",
messageSends: ["removeFromHistory:", "add:", "history"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "disableSelection",
protocol: 'actions',
fn: function (){
var self=this;
self["@selectionDisabled"]=true;
return self},
args: [],
source: "disableSelection\x0a\x09selectionDisabled := true",
messageSends: [],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "enableSelection",
protocol: 'actions',
fn: function (){
var self=this;
self["@selectionDisabled"]=false;
return self},
args: [],
source: "enableSelection\x0a\x09selectionDisabled := false",
messageSends: [],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@history"];
if(($receiver = $2) == null || $receiver.isNil){
self["@history"]=_st($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{},globals.HLTabsWidget)})},
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@history"]=aCollection;
return self},
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelectionDisabled",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@selectionDisabled"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelectionDisabled",{},globals.HLTabsWidget)})},
args: [],
source: "isSelectionDisabled\x0a\x09^ selectionDisabled ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeActiveTab",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeTab_(self._activeTab());
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},globals.HLTabsWidget)})},
args: [],
source: "removeActiveTab\x0a\x09self removeTab: self activeTab",
messageSends: ["removeTab:", "activeTab"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromHistory:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._history_(_st(self._history())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq_eq(aTab);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "removeFromHistory: aTab\x0a\x09self history: (self history reject: [ :each | each == aTab ])",
messageSends: ["history:", "reject:", "history", "=="],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=self._tabs();
$ctx1.sendIdx["tabs"]=1;
$1=_st($2)._includes_(aTab);
if(! smalltalk.assert($1)){
return self;
};
self._removeFromHistory_(aTab);
_st(self._tabs())._remove_(aTab);
_st(_st(self._manager())._keyBinder())._flushBindings();
_st(aTab)._remove();
self._refresh();
$3=self._history();
$ctx1.sendIdx["history"]=1;
_st($3)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._history())._last())._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "removeTab: aTab\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self removeFromHistory: aTab.\x0a\x09self tabs remove: aTab.\x0a\x09self manager keyBinder flushBindings.\x0a\x09aTab remove.\x0a\x09self refresh.\x0a\x09self history ifNotEmpty: [\x0a\x09\x09self history last activate ]",
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "manager", "remove", "refresh", "ifNotEmpty:", "history", "activate", "last"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTabForWidget:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
self._removeTab_(_st(self._tabs())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._widget()).__eq(aWidget);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
throw $early=[self];
})));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"removeTabForWidget:",{aWidget:aWidget},globals.HLTabsWidget)})},
args: ["aWidget"],
source: "removeTabForWidget: aWidget\x0a\x09self removeTab: (self tabs \x0a\x09\x09detect: [ :each | each widget = aWidget ]\x0a\x09\x09ifNone: [ ^ self ])",
messageSends: ["removeTab:", "detect:ifNone:", "tabs", "=", "widget"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLWidget(){return globals.HLWidget||(typeof HLWidget=="undefined"?nil:HLWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$8,$9,$6,$2;
$1=_st(html)._div();
_st($1)._class_("dropdown new_tab");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($3)._class_("dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
_st($3)._at_put_("data-toggle","dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tag_("b"))._class_("caret");
$ctx3.sendIdx["class:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._ul();
_st($5)._class_("dropdown-menu");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st($HLWidget())._withAllSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(each)._canBeOpenAsTab();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
$7=_st(a)._tabPriority();
$ctx4.sendIdx["tabPriority"]=1;
return _st($7).__lt(_st(b)._tabPriority());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$8=_st(html)._a();
_st($8)._with_(_st(each)._tabLabel());
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(each)._openAsTab();
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}));
return $9;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}));
$ctx4.sendIdx["with:"]=4;
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,6)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=3;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html},globals.HLTabsWidget)})},
args: ["html"],
source: "renderAddOn: html\x0a    html div \x0a    \x09class: 'dropdown new_tab';\x0a        with: [ \x0a\x09\x09\x09html a \x0a        \x09\x09class: 'dropdown-toggle';\x0a           \x09 \x09at: 'data-toggle' put: 'dropdown';\x0a            \x09with: [\x0a  \x09\x09\x09\x09\x09(html tag: 'b') class: 'caret' ].\x0a           html ul \x0a           \x09\x09class: 'dropdown-menu';\x0a                with: [\x0a                  \x09((HLWidget withAllSubclasses\x0a                    \x09select: [ :each | each canBeOpenAsTab ])\x0a                        sorted: [ :a :b | a tabPriority < b tabPriority ])\x0a                        do: [ :each |\x0a  \x09\x09\x09\x09\x09\x09\x09html li with: [\x0a                      \x09\x09\x09html a \x0a                                \x09with: each tabLabel;\x0a      \x09\x09\x09\x09\x09\x09\x09\x09onClick: [ each openAsTab ] ] ] ] ]",
messageSends: ["class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "sorted:", "select:", "withAllSubclasses", "canBeOpenAsTab", "<", "tabPriority", "li", "tabLabel", "onClick:", "openAsTab"],
referencedClasses: ["HLWidget"]
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("navbar navbar-fixed-top");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("navbar-inner");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderTabsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._renderAddOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLTabsWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'navbar navbar-fixed-top';\x0a\x09\x09with: [ html div \x0a\x09\x09\x09class: 'navbar-inner';\x0a\x09\x09\x09with: [ self renderTabsOn: html ] ].\x0a\x09\x09\x09\x0a\x09self renderAddOn: html",
messageSends: ["class:", "div", "with:", "renderTabsOn:", "renderAddOn:"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9,$10,$11,$12;
$1=_st(html)._li();
$2=$1;
$3=_st("width: ".__comma(_st(self._tabWidth())._asString())).__comma("px");
$ctx1.sendIdx[","]=1;
_st($2)._style_($3);
$4=$1;
$6=_st(aTab)._isActive();
if(smalltalk.assert($6)){
$5="tab active";
} else {
$5="tab inactive";
};
_st($4)._class_($5);
$ctx1.sendIdx["class:"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._a())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(_st(html)._tag_("i"))._class_("close");
$ctx3.sendIdx["class:"]=2;
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeTab_(aTab);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$ctx3.sendIdx["onClick:"]=1;
$8=_st(html)._span();
_st($8)._class_(_st(aTab)._cssClass());
$9=$8;
$10=_st(aTab)._label();
$ctx3.sendIdx["label"]=1;
_st($9)._title_($10);
$11=_st($8)._with_(_st(aTab)._label());
return $11;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
$12=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aTab)._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
li=$12;
_st(_st(_st(li)._asJQuery())._get_((0)))._at_put_("tab-data",aTab);
return self}, function($ctx1) {$ctx1.fill(self,"renderTab:on:",{aTab:aTab,html:html,li:li},globals.HLTabsWidget)})},
args: ["aTab", "html"],
source: "renderTab: aTab on: html\x0a\x09| li |\x0a\x09li := html li \x0a\x09\x09style: 'width: ', self tabWidth asString, 'px';\x0a\x09\x09class: (aTab isActive ifTrue: [ 'tab active' ] ifFalse: [ 'tab inactive' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09((html tag: 'i') class: 'close')\x0a\x09\x09\x09\x09\x09onClick: [ self removeTab: aTab ].\x0a\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09class: aTab cssClass;\x0a\x09\x09\x09\x09\x09title: aTab label;\x0a\x09\x09\x09\x09\x09with: aTab label ] ];\x0a\x09\x09onClick: [ aTab activate ].\x0a\x09\x0a\x09(li asJQuery get: 0) at: 'tab-data' put: aTab",
messageSends: ["style:", "li", ",", "asString", "tabWidth", "class:", "ifTrue:ifFalse:", "isActive", "with:", "a", "onClick:", "tag:", "removeTab:", "span", "cssClass", "title:", "label", "activate", "at:put:", "get:", "asJQuery"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var ul;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("nav main-tabs");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return self._renderTab_on_(each,html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
ul=$2;
_st(_st(ul)._asJQuery())._sortable_(globals.HashedCollection._newFromPairs_(["containment","parent","start",(function(){
return smalltalk.withContext(function($ctx2) {
return self._disableSelection();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}),"stop",(function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return self._enableSelection();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}))._valueWithTimeout_((300));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}),"update",(function(){
return smalltalk.withContext(function($ctx2) {
return self._updateTabsOrder();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html,ul:ul},globals.HLTabsWidget)})},
args: ["html"],
source: "renderTabsOn: html\x0a\x09| ul |\x0a\x09ul := html ul \x0a\x09\x09class: 'nav main-tabs';\x0a\x09\x09with: [ \x0a        \x09self tabs do: [ :each |\x0a\x09\x09\x09\x09self renderTab: each on: html ] ].\x0a\x09\x09\x0a\x09ul asJQuery sortable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'start' -> [ self disableSelection ].\x0a\x09\x09'stop' -> [ [ self enableSelection] valueWithTimeout: 300 ].\x0a\x09\x09'update' -> [ self updateTabsOrder ]\x0a\x09}",
messageSends: ["class:", "ul", "with:", "do:", "tabs", "renderTab:on:", "sortable:", "asJQuery", "disableSelection", "valueWithTimeout:", "enableSelection", "updateTabsOrder"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEvents",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4;
_st("body"._asJQuery())._keydown_((function(event){
return smalltalk.withContext(function($ctx2) {
$2=_st(event)._ctrlKey();
$ctx2.sendIdx["ctrlKey"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(event)._which();
$ctx3.sendIdx["which"]=1;
return _st($3).__eq((188));
$ctx3.sendIdx["="]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
self._activatePreviousTab();
_st(event)._preventDefault();
$ctx2.sendIdx["preventDefault"]=1;
};
$4=_st(_st(event)._ctrlKey())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(event)._which()).__eq((190));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
if(smalltalk.assert($4)){
self._activateNextTab();
return _st(event)._preventDefault();
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},globals.HLTabsWidget)})},
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event |\x0a\x09\x0a\x09\x09\x22ctrl+> and ctrl+<\x22\x0a\x09\x09(event ctrlKey and: [ event which = 188 ]) ifTrue: [\x0a\x09\x09\x09self activatePreviousTab.\x0a\x09\x09\x09event preventDefault ].\x0a\x09\x09(event ctrlKey and: [ event which = 190 ]) ifTrue: [\x0a\x09\x09\x09self activateNextTab.\x0a\x09\x09\x09event preventDefault ] ]",
messageSends: ["keydown:", "asJQuery", "ifTrue:", "and:", "ctrlKey", "=", "which", "activatePreviousTab", "preventDefault", "activateNextTab"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'rendering',
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(aTab)._show();
$1=_st(aTab)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab},globals.HLTabsWidget)})},
args: ["aTab"],
source: "show: aTab\x0a\x09self tabs do: [ :each | each hide ].\x0a\x09aTab show; focus",
messageSends: ["do:", "tabs", "hide", "show", "focus"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabWidth",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(window)._asJQuery())._width()).__minus((90))).__slash(_st(self._tabs())._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabWidth",{},globals.HLTabsWidget)})},
args: [],
source: "tabWidth\x0a\x09^ (window asJQuery width - 90) / self tabs size",
messageSends: ["/", "-", "width", "asJQuery", "size", "tabs"],
referencedClasses: []
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@tabs"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tabs"]=_st($OrderedCollection())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},globals.HLTabsWidget)})},
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ tabs := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLTabsWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTabsOrder",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tabs"]=_st(_st(".main-tabs li"._asJQuery())._toArray())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._at_("tab-data");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTabsOrder",{},globals.HLTabsWidget)})},
args: [],
source: "updateTabsOrder\x0a\x09tabs := '.main-tabs li' asJQuery toArray \x0a\x09\x09collect: [ :each | each at: 'tab-data' ]",
messageSends: ["collect:", "toArray", "asJQuery", "at:"],
referencedClasses: []
}),
globals.HLTabsWidget);


globals.HLTabsWidget.klass.iVarNames = ['current'];

smalltalk.addClass('HLWelcomeWidget', globals.HLWidget, [], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "welcome";
},
args: [],
source: "cssClass\x0a\x09^ 'welcome'",
messageSends: [],
referencedClasses: []
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openClassBrowser",
protocol: 'actions',
fn: function (){
var self=this;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
_st($HLBrowser())._openAsTab();
return self}, function($ctx1) {$ctx1.fill(self,"openClassBrowser",{},globals.HLWelcomeWidget)})},
args: [],
source: "openClassBrowser\x0a\x09HLBrowser openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLBrowser"]
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openHelp",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "openHelp",
messageSends: [],
referencedClasses: []
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openTestRunner",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "openTestRunner",
messageSends: [],
referencedClasses: []
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openWorkspace",
protocol: 'actions',
fn: function (){
var self=this;
function $HLWorkspace(){return globals.HLWorkspace||(typeof HLWorkspace=="undefined"?nil:HLWorkspace)}
return smalltalk.withContext(function($ctx1) { 
_st($HLWorkspace())._openAsTab();
return self}, function($ctx1) {$ctx1.fill(self,"openWorkspace",{},globals.HLWelcomeWidget)})},
args: [],
source: "openWorkspace\x0a\x09HLWorkspace openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLWorkspace"]
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(html)._button();
$ctx1.sendIdx["button"]=1;
_st($1)._class_("button");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_("Class Browser");
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._openClassBrowser();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$3=_st(html)._button();
$ctx1.sendIdx["button"]=2;
_st($3)._class_("button");
$ctx1.sendIdx["class:"]=2;
_st($3)._with_("Workspace");
$ctx1.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._openWorkspace();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["onClick:"]=2;
$5=_st(html)._button();
$ctx1.sendIdx["button"]=3;
_st($5)._class_("button");
$ctx1.sendIdx["class:"]=3;
_st($5)._with_("Test Runner");
$ctx1.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._openTestRunner();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onClick:"]=3;
$7=_st(html)._button();
_st($7)._class_("button");
_st($7)._with_("Help");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._openHelp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLWelcomeWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Class Browser';\x0a\x09\x09onClick: [ self openClassBrowser ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Workspace';\x0a\x09\x09onClick: [ self openWorkspace ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Test Runner';\x0a\x09\x09onClick: [ self openTestRunner ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Help';\x0a\x09\x09onClick: [ self openHelp ]",
messageSends: ["class:", "button", "with:", "onClick:", "openClassBrowser", "openWorkspace", "openTestRunner", "openHelp"],
referencedClasses: []
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._renderHelpOn_(html);
$1=self._renderButtonsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLWelcomeWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self\x0a\x09\x09renderHelpOn: html;\x0a\x09\x09renderButtonsOn: html",
messageSends: ["renderHelpOn:", "renderButtonsOn:"],
referencedClasses: []
}),
globals.HLWelcomeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHelpOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(html)._h2())._with_("No tools are open");
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($1)._with_("Perform actions with  ctrl + space");
$ctx2.sendIdx["with:"]=3;
return _st(_st(html)._li())._with_("Open one of the common tools:");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"renderHelpOn:",{html:html},globals.HLWelcomeWidget)})},
args: ["html"],
source: "renderHelpOn: html\x0a\x09html h2 with: 'No tools are open'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Perform actions with  ctrl + space'.\x0a\x09\x09html li with: 'Open one of the common tools:' ]",
messageSends: ["with:", "h2", "ul", "li"],
referencedClasses: []
}),
globals.HLWelcomeWidget);


});
