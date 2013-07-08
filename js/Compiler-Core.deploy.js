smalltalk.addPackage('Compiler-Core');
smalltalk.addClass('AbstractCodeGenerator', smalltalk.Object, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
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
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"]}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode},smalltalk.AbstractCodeGenerator)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{},smalltalk.AbstractCodeGenerator)})},
messageSends: []}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass},smalltalk.AbstractCodeGenerator)})},
messageSends: []}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariables",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._pseudoVariableNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{},smalltalk.AbstractCodeGenerator)})},
messageSends: ["pseudoVariableNames", "current"]}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "safeVariableNameFor:",
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
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"]}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
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
messageSends: ["ifNil:"]}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.AbstractCodeGenerator)})},
messageSends: []}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
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
messageSends: ["visit:", "semanticAnalyzer", "translator", "currentClass:", "currentClass", "irTranslator", "contents"]}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
function $IRJSTranslator(){return smalltalk.IRJSTranslator||(typeof IRJSTranslator=="undefined"?nil:IRJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.CodeGenerator)})},
messageSends: ["new"]}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "semanticAnalyzer",
fn: function (){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($SemanticAnalyzer())._on_(self._currentClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{},smalltalk.CodeGenerator)})},
messageSends: ["on:", "currentClass"]}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
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
messageSends: ["source:", "source", "new", "theClass:", "currentClass", "yourself"]}),
smalltalk.CodeGenerator);



smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
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
messageSends: ["ifNil:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeGeneratorClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass:",{aClass:aClass},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._compileNode_(self._parse_(aString));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.Compiler)})},
messageSends: ["compileNode:", "parse:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:forClass:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_(aClass);
self._source_(aString);
$1=self._compile_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:",{aString:aString,aClass:aClass},smalltalk.Compiler)})},
messageSends: ["currentClass:", "source:", "compile:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:",
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
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileExpression:on:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._currentClass_(_st(anObject)._class());
self._source_(_st("xxxDoIt ^[".__comma(aString)).__comma("] value"));
$1=self._compileNode_(self._parse_(self._source()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileExpression:on:",{aString:aString,anObject:anObject},smalltalk.Compiler)})},
messageSends: ["currentClass:", "class", "source:", ",", "compileNode:", "parse:", "source"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
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
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return eval(aString);
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._evaluateExpression_on_(aString,_st($DoIt())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString},smalltalk.Compiler)})},
messageSends: ["evaluateExpression:on:", "new"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateExpression:on:",
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
messageSends: ["eval:", "compileExpression:on:", "category:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString,aBehavior,anotherString){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._installMethod_forClass_category_(self._eval_(self._compile_forClass_(aString,aBehavior)),aBehavior,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"install:forClass:category:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString},smalltalk.Compiler)})},
messageSends: ["installMethod:forClass:category:", "eval:", "compile:forClass:", "new"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.Compiler)})},
messageSends: ["parse:", "current"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "parseExpression:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._parse_(_st("doIt ^[".__comma(aString)).__comma("] value"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString},smalltalk.Compiler)})},
messageSends: ["parse:", ","]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
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
messageSends: ["do:displayingProgress:", "install:forClass:category:", "source", "category", ",", "name", "values", "methodDictionary", "ifFalse:", "recompile:", "class", "isMetaclass"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st($Smalltalk())._current())._classes())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),"Compiling all classes...");
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},smalltalk.Compiler)})},
messageSends: ["do:displayingProgress:", "recompile:", "classes", "current"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
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
messageSends: ["ifNil:"]}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@unknownVariables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@unknownVariables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"unknownVariables:",{aCollection:aCollection},smalltalk.Compiler)})},
messageSends: []}),
smalltalk.Compiler);


smalltalk.addMethod(
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._recompile_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},smalltalk.Compiler.klass)})},
messageSends: ["recompile:", "new"]}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st($Smalltalk())._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},smalltalk.Compiler.klass)})},
messageSends: ["do:", "recompile:", "classes", "current"]}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler-Core');


smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aNode)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["accept:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAll:",
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
messageSends: ["collect:", "visit:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitSequenceNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitSequenceNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitVariableNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitVariableNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitAll_(_st(aNode)._nodes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitAll:", "nodes"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitNode_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.NodeVisitor)})},
messageSends: ["visitNode:"]}),
smalltalk.NodeVisitor);



