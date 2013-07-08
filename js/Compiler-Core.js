smalltalk.addPackage('Compiler-Core');
smalltalk.addClass('AbstractCodeGenerator', smalltalk.Object, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API.";
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$1=_st(_st(_st(aClass)._instanceClass())._name()).__comma(".klass");
} else {
$3=_st(aClass)._isNil();
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.AbstractCodeGenerator)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09\x09ifTrue: [aClass instanceClass name, '.klass']\x0a\x09\x09ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09\x09ifTrue: ['nil']\x0a\x09\x09\x09ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode},smalltalk.AbstractCodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{},smalltalk.AbstractCodeGenerator)})},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass},smalltalk.AbstractCodeGenerator)})},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariables",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._pseudoVariableNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{},smalltalk.AbstractCodeGenerator)})},
args: [],
source: "pseudoVariables\x0a\x09^ Smalltalk current pseudoVariableNames",
messageSends: ["pseudoVariableNames", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "safeVariableNameFor:",
category: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st($Smalltalk())._current())._reservedWords())._includes_(aString);
if(smalltalk.assert($2)){
$1=_st(aString).__comma("_");
} else {
$1=aString;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"safeVariableNameFor:",{aString:aString},smalltalk.AbstractCodeGenerator)})},
args: ["aString"],
source: "safeVariableNameFor: aString\x0a\x09^(Smalltalk current reservedWords includes: aString)\x0a\x09\x09ifTrue: [aString, '_']\x0a\x09\x09ifFalse: [aString]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.AbstractCodeGenerator)})},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.AbstractCodeGenerator)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
ir=_st(self._translator())._visit_(aNode);
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},smalltalk.CodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "currentClass:", "currentClass", "irTranslator", "contents"],
referencedClasses: []
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function (){
var self=this;
function $IRJSTranslator(){return smalltalk.IRJSTranslator||(typeof IRJSTranslator=="undefined"?nil:IRJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.CodeGenerator)})},
args: [],
source: "irTranslator\x0a\x09^ IRJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRJSTranslator"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "semanticAnalyzer",
category: 'compiling',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SemanticAnalyzer())._on_(self._currentClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{},smalltalk.CodeGenerator)})},
args: [],
source: "semanticAnalyzer\x0a\x09^ SemanticAnalyzer on: self currentClass",
messageSends: ["on:", "currentClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
category: 'compiling',
fn: function (){
var self=this;
function $IRASTTranslator(){return smalltalk.IRASTTranslator||(typeof IRASTTranslator=="undefined"?nil:IRASTTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRASTTranslator())._new();
_st($2)._source_(self._source());
_st($2)._theClass_(self._currentClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.CodeGenerator)})},
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "theClass:", "currentClass", "yourself"],
referencedClasses: ["IRASTTranslator"]
}),
smalltalk.CodeGenerator);



smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
function $InliningCodeGenerator(){return smalltalk.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@codeGeneratorClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=$InliningCodeGenerator();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.Compiler)})},
args: [],
source: "codeGeneratorClass\x0a\x09^codeGeneratorClass ifNil: [InliningCodeGenerator]",
messageSends: ["ifNil:"],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeGeneratorClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass:",{aClass:aClass},smalltalk.Compiler)})},
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._compileNode_(self._parse_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "compile: aString\x0a\x09^self compileNode: (self parse: aString)",
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:forClass:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_(aClass);
self._source_(aString);
$1=self._compile_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:",{aString:aString,aClass:aClass},smalltalk.Compiler)})},
args: ["aString", "aClass"],
source: "compile: aString forClass: aClass\x0a\x09self currentClass: aClass.\x0a\x09self source: aString.\x0a\x09^self compile: aString",
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_($DoIt());
self._source_(_st("doIt ^[".__comma(aString)).__comma("] value"));
$1=self._compileNode_(self._parse_(self._source()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileExpression:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "compileExpression: aString\x0a\x09self currentClass: DoIt.\x0a\x09self source: 'doIt ^[', aString, '] value'.\x0a\x09^self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:on:",
category: 'compiling',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_(_st(anObject)._class());
self._source_(_st("xxxDoIt ^[".__comma(aString)).__comma("] value"));
$1=self._compileNode_(self._parse_(self._source()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileExpression:on:",{aString:aString,anObject:anObject},smalltalk.Compiler)})},
args: ["aString", "anObject"],
source: "compileExpression: aString on: anObject\x0a\x09self currentClass: anObject class.\x0a\x09self source: 'xxxDoIt ^[', aString, '] value'.\x0a\x09^self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "class", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
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
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,generator:generator,result:result},smalltalk.Compiler)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| generator result |\x0a\x09generator := self codeGeneratorClass new.\x0a\x09generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass.\x0a\x09result := generator compileNode: aNode.\x0a\x09self unknownVariables: #().\x0a\x09^result",
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{},smalltalk.Compiler)})},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass},smalltalk.Compiler)})},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return eval(aString);
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "eval: aString\x0a\x09<return eval(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._evaluateExpression_on_(aString,_st($DoIt())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09^ self evaluateExpression: aString on: DoIt new",
messageSends: ["evaluateExpression:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:on:",
category: 'compiling',
fn: function (aString,anObject){
var self=this;
var result,method;
return smalltalk.withContext(function($ctx1) { 
var $1;
method=self._eval_(self._compileExpression_on_(aString,anObject));
_st(method)._category_("xxxDoIt");
_st(_st(anObject)._class())._addCompiledMethod_(method);
result=_st(anObject)._xxxDoIt();
_st(_st(anObject)._class())._removeCompiledMethod_(method);
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:on:",{aString:aString,anObject:anObject,result:result,method:method},smalltalk.Compiler)})},
args: ["aString", "anObject"],
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self eval: (self compileExpression: aString on: anObject).\x0a\x09method category: 'xxxDoIt'.\x0a\x09anObject class addCompiledMethod: method.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^result",
messageSends: ["eval:", "compileExpression:on:", "category:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "install:forClass:category:",
category: 'compiling',
fn: function (aString,aBehavior,anotherString){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._installMethod_forClass_category_(self._eval_(self._compile_forClass_(aString,aBehavior)),aBehavior,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"install:forClass:category:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString},smalltalk.Compiler)})},
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior category: anotherString\x0a\x09^ ClassBuilder new\x0a\x09\x09installMethod: (self eval: (self compile: aString forClass: aBehavior))\x0a\x09\x09forClass: aBehavior\x0a\x09\x09category: anotherString",
messageSends: ["installMethod:forClass:category:", "eval:", "compile:forClass:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'compiling',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "parse: aString\x0a\x09^Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parseExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._parse_(_st("doIt ^[".__comma(aString)).__comma("] value"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "parseExpression: aString\x0a\x09^self parse: 'doIt ^[', aString, '] value'",
messageSends: ["parse:", ","],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
category: 'compiling',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(_st(aClass)._methodDictionary())._values())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._install_forClass_category_(_st(each)._source(),aClass,_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),"Recompiling ".__comma(_st(aClass)._name()));
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
self._recompile_(_st(aClass)._class());
};
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},smalltalk.Compiler)})},
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass methodDictionary values\x0a\x09\x09do: [ :each | self install: each source forClass: aClass category: each category ]\x0a\x09\x09displayingProgress: 'Recompiling ', aClass name.\x0a\x09\x22self setupClass: aClass.\x22\x0a\x09aClass isMetaclass ifFalse: [ self recompile: aClass class ]",
messageSends: ["do:displayingProgress:", "install:forClass:category:", "source", "category", ",", "name", "values", "methodDictionary", "ifFalse:", "recompile:", "class", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st($Smalltalk())._current())._classes())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),"Compiling all classes...");
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},smalltalk.Compiler)})},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes \x0a\x09\x09do: [:each | self recompile: each ]\x0a\x09\x09displayingProgress: 'Compiling all classes...'",
messageSends: ["do:displayingProgress:", "recompile:", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.Compiler)})},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.Compiler)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@unknownVariables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{},smalltalk.Compiler)})},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@unknownVariables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"unknownVariables:",{aCollection:aCollection},smalltalk.Compiler)})},
args: ["aCollection"],
source: "unknownVariables: aCollection\x0a\x09unknownVariables := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);


smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
category: 'compiling',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._recompile_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},smalltalk.Compiler.klass)})},
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
messageSends: ["recompile:", "new"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st($Smalltalk())._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},smalltalk.Compiler.klass)})},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09self recompile: each]",
messageSends: ["do:", "recompile:", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler-Core');
smalltalk.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.";


smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler-Core');
smalltalk.NodeVisitor.comment="I am the abstract super class of all AST node visitors.";
smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aNode)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAll:",
category: 'visiting',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection},smalltalk.NodeVisitor)})},
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection collect: [ :each | self visit: each ]",
messageSends: ["collect:", "visit:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitSequenceNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitVariableNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09^ self visitVariableNode: aNode",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitAll_(_st(aNode)._nodes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09^ self visitAll: aNode nodes",
messageSends: ["visitAll:", "nodes"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



