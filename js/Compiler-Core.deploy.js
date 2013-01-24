smalltalk.addPackage('Compiler-Core', {});
smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@codeGeneratorClass"]) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=self["@codeGeneratorClass"];
};
return $1;
}, self, "codeGeneratorClass", [], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_codeGeneratorClass_",
smalltalk.method({
selector: "codeGeneratorClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@codeGeneratorClass"]=aClass;
return self}, self, "codeGeneratorClass:", [aClass], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._compileNode_(_st(self)._parse_(aString));
return $1;
}, self, "compile:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_forClass_",
smalltalk.method({
selector: "compile:forClass:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._currentClass_(aClass);
_st(self)._source_(aString);
$1=_st(self)._compile_(aString);
return $1;
}, self, "compile:forClass:", [aString,aClass], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileExpression_",
smalltalk.method({
selector: "compileExpression:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._currentClass_((smalltalk.DoIt || DoIt));
_st(self)._source_(_st(_st("doIt ^[").__comma(aString)).__comma("] value"));
$1=_st(self)._compileNode_(_st(self)._parse_(_st(self)._source()));
return $1;
}, self, "compileExpression:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.generator=nil;
$ctx1.result=nil;
$ctx1.locals.generator=_st(_st(self)._codeGeneratorClass())._new();
_st($ctx1.locals.generator)._source_(_st(self)._source());
$1=_st($ctx1.locals.generator)._currentClass_(_st(self)._currentClass());
$ctx1.locals.result=_st($ctx1.locals.generator)._compileNode_(aNode);
_st(self)._unknownVariables_([]);
return $ctx1.locals.result;
}, self, "compileNode:", [aNode], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@currentClass"];
}, self, "currentClass", [], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
return self}, self, "currentClass:", [aClass], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval(aString);
;
return self}, self, "eval:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.result=nil;
_st((smalltalk.DoIt || DoIt))._addCompiledMethod_(_st(self)._eval_(_st(self)._compileExpression_(aString)));
$ctx1.locals.result=_st(_st((smalltalk.DoIt || DoIt))._new())._doIt();
_st((smalltalk.DoIt || DoIt))._removeCompiledMethod_(_st(_st((smalltalk.DoIt || DoIt))._methodDictionary())._at_("doIt"));
return $ctx1.locals.result;
}, self, "evaluateExpression:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString,aBehavior,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.compiled=nil;
$ctx1.locals.compiled=_st(self)._eval_(_st(self)._compile_forClass_(aString,aBehavior));
_st($ctx1.locals.compiled)._category_(anotherString);
_st(aBehavior)._addCompiledMethod_($ctx1.locals.compiled);
_st(self)._setupClass_(aBehavior);
return $ctx1.locals.compiled;
}, self, "install:forClass:category:", [aString,aBehavior,anotherString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}, self, "parse:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parseExpression_",
smalltalk.method({
selector: "parseExpression:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._parse_(_st(_st("doIt ^[").__comma(aString)).__comma("] value"));
return $1;
}, self, "parseExpression:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(aClass)._methodDictionary())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(console)._log_(_st(_st(_st(aClass)._name()).__comma(" >> ")).__comma(_st(each)._selector()));
return _st(self)._install_forClass_category_(_st(each)._source(),aClass,_st(each)._category());
})}));
_st(self)._setupClass_(aClass);
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._recompile_(_st(aClass)._class());
};
return self}, self, "recompile:", [aClass], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st((smalltalk.Transcript || Transcript))._show_(each);
$1=_st((smalltalk.Transcript || Transcript))._cr();
$1;
return _st((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._recompile_(each);
})}))._valueWithTimeout_((100));
})}));
return self}, self, "recompileAll", [], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.init(aClass);
;
return self}, self, "setupClass:", [aClass], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}, self, "source", [], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@unknownVariables"];
}, self, "unknownVariables", [], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@unknownVariables"]=aCollection;
return self}, self, "unknownVariables:", [aCollection], smalltalk.Compiler)}
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._recompile_(aClass);
return self}, self, "recompile:", [aClass], smalltalk.Compiler.klass)}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._recompile_(each);
})}));
return self}, self, "recompileAll", [], smalltalk.Compiler.klass)}
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler-Core');


smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler-Core');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aNode)._accept_(self);
return $1;
}, self, "visit:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAll_",
smalltalk.method({
selector: "visitAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
return $1;
}, self, "visitAll:", [aCollection], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitAssignmentNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitBlockNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitSequenceNode_(aNode);
return $1;
}, self, "visitBlockSequenceNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitCascadeNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitVariableNode_(aNode);
return $1;
}, self, "visitClassReferenceNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitDynamicArrayNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitDynamicDictionaryNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitJSStatementNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitMethodNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitNode_",
smalltalk.method({
selector: "visitNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitAll_(_st(aNode)._nodes());
return $1;
}, self, "visitNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitReturnNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitSendNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitSequenceNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitVariableNode:", [aNode], smalltalk.NodeVisitor)}
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
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
}, self, "classNameFor:", [aClass], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, self, "compileNode:", [aNode], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@currentClass"];
}, self, "currentClass", [], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
return self}, self, "currentClass:", [aClass], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["self", "super", "true", "false", "nil", "thisContext"];
}, self, "pseudoVariables", [], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_safeVariableNameFor_",
smalltalk.method({
selector: "safeVariableNameFor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._reservedWords())._includes_(aString);
if(smalltalk.assert($2)){
$1=_st(aString).__comma("_");
} else {
$1=aString;
};
return $1;
}, self, "safeVariableNameFor:", [aString], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}, self, "source", [], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.AbstractCodeGenerator)}
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$ctx1.ir=nil;
$ctx1.stream=nil;
_st(_st(self)._semanticAnalyzer())._visit_(aNode);
$ctx1.locals.ir=_st(_st(self)._translator())._visit_(aNode);
$2=_st(self)._irTranslator();
_st($2)._visit_($ctx1.locals.ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, self, "compileNode:", [aNode], smalltalk.CodeGenerator)}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRJSTranslator || IRJSTranslator))._new();
return $1;
}, self, "irTranslator", [], smalltalk.CodeGenerator)}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(_st(self)._currentClass());
return $1;
}, self, "semanticAnalyzer", [], smalltalk.CodeGenerator)}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRASTTranslator || IRASTTranslator))._new();
_st($2)._source_(_st(self)._source());
_st($2)._theClass_(_st(self)._currentClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "translator", [], smalltalk.CodeGenerator)}
}),
smalltalk.CodeGenerator);



