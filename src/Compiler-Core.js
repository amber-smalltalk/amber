define("amber_core/Compiler-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-Core');
smalltalk.packages["Compiler-Core"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AbstractCodeGenerator', globals.Object, ['currentClass', 'source'], 'Compiler-Core');
globals.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API.";
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$3=_st(_st(aClass)._instanceClass())._name();
$ctx1.sendIdx["name"]=1;
$1=_st($3).__comma(".klass");
} else {
$4=_st(aClass)._isNil();
if(smalltalk.assert($4)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},globals.AbstractCodeGenerator)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09ifFalse: [ aClass name ]]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
referencedClasses: []
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode},globals.AbstractCodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;
},
args: [],
source: "currentClass\x0a\x09^ currentClass",
messageSends: [],
referencedClasses: []
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._pseudoVariableNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{},globals.AbstractCodeGenerator)})},
args: [],
source: "pseudoVariables\x0a\x09^ Smalltalk pseudoVariableNames",
messageSends: ["pseudoVariableNames"],
referencedClasses: ["Smalltalk"]
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.AbstractCodeGenerator)})},
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
globals.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', globals.AbstractCodeGenerator, [], 'Compiler-Core');
globals.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
$ctx1.sendIdx["visit:"]=1;
ir=_st(self._translator())._visit_(aNode);
$ctx1.sendIdx["visit:"]=2;
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},globals.CodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "currentClass:", "irTranslator", "currentClass", "contents"],
referencedClasses: []
}),
globals.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRJSTranslator(){return globals.IRJSTranslator||(typeof IRJSTranslator=="undefined"?nil:IRJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},globals.CodeGenerator)})},
args: [],
source: "irTranslator\x0a\x09^ IRJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRJSTranslator"]
}),
globals.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "semanticAnalyzer",
protocol: 'compiling',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SemanticAnalyzer())._on_(self._currentClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{},globals.CodeGenerator)})},
args: [],
source: "semanticAnalyzer\x0a\x09^ SemanticAnalyzer on: self currentClass",
messageSends: ["on:", "currentClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
globals.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRASTTranslator(){return globals.IRASTTranslator||(typeof IRASTTranslator=="undefined"?nil:IRASTTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRASTTranslator())._new();
_st($2)._source_(self._source());
_st($2)._theClass_(self._currentClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},globals.CodeGenerator)})},
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
messageSends: ["source:", "new", "source", "theClass:", "currentClass", "yourself"],
referencedClasses: ["IRASTTranslator"]
}),
globals.CodeGenerator);



smalltalk.addClass('Compiler', globals.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
globals.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $InliningCodeGenerator(){return globals.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@codeGeneratorClass"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$InliningCodeGenerator();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},globals.Compiler)})},
args: [],
source: "codeGeneratorClass\x0a\x09^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]",
messageSends: ["ifNil:"],
referencedClasses: ["InliningCodeGenerator"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@codeGeneratorClass"]=aClass;
return self},
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._compileNode_(self._parse_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "compile: aString\x0a\x09^ self compileNode: (self parse: aString)",
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:forClass:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_(aClass);
self._source_(aString);
$1=self._compile_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:",{aString:aString,aClass:aClass},globals.Compiler)})},
args: ["aString", "aClass"],
source: "compile: aString forClass: aClass\x0a\x09self currentClass: aClass.\x0a\x09self source: aString.\x0a\x09^ self compile: aString",
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._currentClass_($DoIt());
$1=_st("doIt ^ [ ".__comma(aString)).__comma(" ] value");
$ctx1.sendIdx[","]=1;
self._source_($1);
$2=self._compileNode_(self._parse_(self._source()));
return $2;
}, function($ctx1) {$ctx1.fill(self,"compileExpression:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "compileExpression: aString\x0a\x09self currentClass: DoIt.\x0a\x09self source: 'doIt ^ [ ', aString, ' ] value'.\x0a\x09^ self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:on:",
protocol: 'compiling',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._currentClass_(_st(anObject)._class());
$1=_st("xxxDoIt ^ [ ".__comma(aString)).__comma(" ] value");
$ctx1.sendIdx[","]=1;
self._source_($1);
$2=self._compileNode_(self._parse_(self._source()));
return $2;
}, function($ctx1) {$ctx1.fill(self,"compileExpression:on:",{aString:aString,anObject:anObject},globals.Compiler)})},
args: ["aString", "anObject"],
source: "compileExpression: aString on: anObject\x0a\x09self currentClass: anObject class.\x0a\x09self source: 'xxxDoIt ^ [ ', aString, ' ] value'.\x0a\x09^ self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "class", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var generator,result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
generator=_st(self._codeGeneratorClass())._new();
$1=generator;
_st($1)._source_(self._source());
$2=_st($1)._currentClass_(self._currentClass());
result=_st(generator)._compileNode_(aNode);
self._unknownVariables_([]);
$3=result;
return $3;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,generator:generator,result:result},globals.Compiler)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| generator result |\x0a\x09generator := self codeGeneratorClass new.\x0a\x09generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass.\x0a\x09result := generator compileNode: aNode.\x0a\x09self unknownVariables: #().\x0a\x09^ result",
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;
},
args: [],
source: "currentClass\x0a\x09^ currentClass",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return eval(aString);
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "eval: aString\x0a\x09<return eval(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._evaluateExpression_on_(aString,_st($DoIt())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09^ self evaluateExpression: aString on: DoIt new",
messageSends: ["evaluateExpression:on:", "new"],
referencedClasses: ["DoIt"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:on:",
protocol: 'compiling',
fn: function (aString,anObject){
var self=this;
var result,method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
method=self._eval_(self._compileExpression_on_(aString,anObject));
_st(method)._protocol_("xxxDoIt");
$1=_st(anObject)._class();
$ctx1.sendIdx["class"]=1;
_st($1)._addCompiledMethod_(method);
result=_st(anObject)._xxxDoIt();
_st(_st(anObject)._class())._removeCompiledMethod_(method);
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:on:",{aString:aString,anObject:anObject,result:result,method:method},globals.Compiler)})},
args: ["aString", "anObject"],
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self eval: (self compileExpression: aString on: anObject).\x0a\x09method protocol: 'xxxDoIt'.\x0a\x09anObject class addCompiledMethod: method.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^ result",
messageSends: ["eval:", "compileExpression:on:", "protocol:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "install:forClass:protocol:",
protocol: 'compiling',
fn: function (aString,aBehavior,anotherString){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._installMethod_forClass_protocol_(self._eval_(self._compile_forClass_(aString,aBehavior)),aBehavior,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"install:forClass:protocol:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString},globals.Compiler)})},
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior protocol: anotherString\x0a\x09^ ClassBuilder new\x0a\x09\x09installMethod: (self eval: (self compile: aString forClass: aBehavior))\x0a\x09\x09forClass: aBehavior\x0a\x09\x09protocol: anotherString",
messageSends: ["installMethod:forClass:protocol:", "new", "eval:", "compile:forClass:"],
referencedClasses: ["ClassBuilder"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk parse: aString",
messageSends: ["parse:"],
referencedClasses: ["Smalltalk"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parseExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st("doIt ^ [ ".__comma(aString)).__comma(" ] value");
$ctx1.sendIdx[","]=1;
$1=self._parse_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString},globals.Compiler)})},
args: ["aString"],
source: "parseExpression: aString\x0a\x09^ self parse: 'doIt ^ [ ', aString, ' ] value'",
messageSends: ["parse:", ","],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
protocol: 'compiling',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(_st(aClass)._methodDictionary())._values())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._install_forClass_protocol_(_st(each)._source(),aClass,_st(each)._protocol());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),"Recompiling ".__comma(_st(aClass)._name()));
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
self._recompile_(_st(aClass)._class());
};
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},globals.Compiler)})},
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass methodDictionary values\x0a\x09\x09do: [ :each | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09install: each source \x0a\x09\x09\x09\x09forClass: aClass \x0a\x09\x09\x09\x09protocol: each protocol ]\x0a\x09\x09displayingProgress: 'Recompiling ', aClass name.\x0a\x09aClass isMetaclass ifFalse: [ self recompile: aClass class ]",
messageSends: ["do:displayingProgress:", "values", "methodDictionary", "install:forClass:protocol:", "source", "protocol", ",", "name", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
protocol: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._classes())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),"Compiling all classes...");
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},globals.Compiler)})},
args: [],
source: "recompileAll\x0a\x09Smalltalk classes \x0a\x09\x09do: [ :each | self recompile: each ]\x0a\x09\x09displayingProgress: 'Compiling all classes...'",
messageSends: ["do:displayingProgress:", "classes", "recompile:"],
referencedClasses: ["Smalltalk"]
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.Compiler)})},
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@unknownVariables"];
return $1;
},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@unknownVariables"]=aCollection;
return self},
args: ["aCollection"],
source: "unknownVariables: aCollection\x0a\x09unknownVariables := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.Compiler);


smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
protocol: 'compiling',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._recompile_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},globals.Compiler.klass)})},
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
messageSends: ["recompile:", "new"],
referencedClasses: []
}),
globals.Compiler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
protocol: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},globals.Compiler.klass)})},
args: [],
source: "recompileAll\x0a\x09Smalltalk classes do: [ :each |\x0a\x09\x09self recompile: each ]",
messageSends: ["do:", "classes", "recompile:"],
referencedClasses: ["Smalltalk"]
}),
globals.Compiler.klass);


smalltalk.addClass('DoIt', globals.Object, [], 'Compiler-Core');
globals.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "xxxDoIt",
protocol: 'xxxDoIt',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Smalltalk())._packages())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._commit();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xxxDoIt",{},globals.DoIt)})},
args: [],
source: "xxxDoIt ^ [ Smalltalk packages do: [ :each | each commit ] ] value",
messageSends: ["value", "do:", "packages", "commit"],
referencedClasses: ["Smalltalk"]
}),
globals.DoIt);



smalltalk.addClass('Evaluator', globals.InterfacingObject, [], 'Compiler-Core');
globals.Evaluator.comment="I evaluate code against a receiver, dispatching #evaluate:on: to the receiver.";
smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:context:",
protocol: 'evaluating',
fn: function (aString,aContext){
var self=this;
var compiler,ast;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $AISemanticAnalyzer(){return globals.AISemanticAnalyzer||(typeof AISemanticAnalyzer=="undefined"?nil:AISemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
ast=_st(compiler)._parseExpression_(aString);
return ast;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}));
$2=_st($AISemanticAnalyzer())._on_(_st(_st(aContext)._receiver())._class());
_st($2)._context_(aContext);
$3=_st($2)._visit_(ast);
$4=_st(aContext)._evaluateNode_(ast);
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"evaluate:context:",{aString:aString,aContext:aContext,compiler:compiler,ast:ast},globals.Evaluator)})},
args: ["aString", "aContext"],
source: "evaluate: aString context: aContext\x0a\x09\x22Similar to #evaluate:for:, with the following differences:\x0a\x09- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`\x0a\x09- instead of evaluating against a receiver, evaluate in the context of `aContext`\x22\x0a\x0a\x09| compiler ast |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ ast := compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ self alert: ex messageText ].\x0a\x09\x09\x0a\x09(AISemanticAnalyzer on: aContext receiver class)\x0a\x09\x09context: aContext;\x0a\x09\x09visit: ast.\x0a\x0a\x09^ aContext evaluateNode: ast",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "context:", "on:", "class", "receiver", "visit:", "evaluateNode:"],
referencedClasses: ["Compiler", "Error", "AISemanticAnalyzer"]
}),
globals.Evaluator);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:for:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._evaluate_on_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},globals.Evaluator)})},
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ anObject evaluate: aString on: self",
messageSends: ["evaluate:on:"],
referencedClasses: []
}),
globals.Evaluator);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:receiver:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
var compiler;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
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
$2=_st(compiler)._evaluateExpression_on_(aString,anObject);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"evaluate:receiver:",{aString:aString,anObject:anObject,compiler:compiler},globals.Evaluator)})},
args: ["aString", "anObject"],
source: "evaluate: aString receiver: anObject\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ self alert: ex messageText ].\x0a\x0a\x09^ compiler evaluateExpression: aString on: anObject",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:"],
referencedClasses: ["Compiler", "Error"]
}),
globals.Evaluator);


smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:for:",
protocol: 'instance creation',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._evaluate_for_(aString,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},globals.Evaluator.klass)})},
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ self new evaluate: aString for: anObject",
messageSends: ["evaluate:for:", "new"],
referencedClasses: []
}),
globals.Evaluator.klass);


smalltalk.addClass('NodeVisitor', globals.Object, [], 'Compiler-Core');
globals.NodeVisitor.comment="I am the abstract super class of all AST node visitors.";
smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aNode)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAll:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection},globals.NodeVisitor)})},
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection collect: [ :each | self visit: each ]",
messageSends: ["collect:", "visit:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitSequenceNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitAll_(_st(aNode)._nodes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09^ self visitAll: aNode nodes",
messageSends: ["visitAll:", "nodes"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},globals.NodeVisitor)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.NodeVisitor);


smalltalk.addMethod(
smalltalk.method({
selector: "asVariableName",
protocol: '*Compiler-Core',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st($Smalltalk())._reservedWords())._includes_(self);
if(smalltalk.assert($2)){
$1=self.__comma("_");
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asVariableName",{},globals.String)})},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", ","],
referencedClasses: ["Smalltalk"]
}),
globals.String);

});
