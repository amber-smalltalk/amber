smalltalk.addPackage('Compiler-Core', {});
smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@codeGeneratorClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_codeGeneratorClass_",
smalltalk.method({
selector: "codeGeneratorClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@codeGeneratorClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass:",{aClass:aClass}, smalltalk.Compiler)})}
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
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString}, smalltalk.Compiler)})}
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
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:",{aString:aString,aClass:aClass}, smalltalk.Compiler)})}
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
}, function($ctx1) {$ctx1.fill(self,"compileExpression:",{aString:aString}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var generator,result;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
generator=_st(_st(self)._codeGeneratorClass())._new();
$1=generator;
_st($1)._source_(_st(self)._source());
$2=_st($1)._currentClass_(_st(self)._currentClass());
result=_st(generator)._compileNode_(aNode);
_st(self)._unknownVariables_([]);
$3=result;
return $3;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,generator:generator,result:result}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval(aString);
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
_st((smalltalk.DoIt || DoIt))._addCompiledMethod_(_st(self)._eval_(_st(self)._compileExpression_(aString)));
result=_st(_st((smalltalk.DoIt || DoIt))._new())._doIt();
_st((smalltalk.DoIt || DoIt))._removeCompiledMethod_(_st(_st((smalltalk.DoIt || DoIt))._methodDictionary())._at_("doIt"));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString,result:result}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString,aBehavior,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._installCompiled_forClass_category_(_st(self)._eval_(_st(self)._compile_forClass_(aString,aBehavior)),aBehavior,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"install:forClass:category:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString}, smalltalk.Compiler)})}
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
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString}, smalltalk.Compiler)})}
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
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString}, smalltalk.Compiler)})}
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
return smalltalk.withContext(function($ctx2) {_st(console)._log_(_st(_st(_st(aClass)._name()).__comma(" >> ")).__comma(_st(each)._selector()));
return _st(self)._install_forClass_category_(_st(each)._source(),aClass,_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._recompile_(_st(aClass)._class());
};
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=(smalltalk.Transcript || Transcript);
_st($1)._show_(each);
$2=_st($1)._cr();
$2;
return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._recompile_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((100));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@unknownVariables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@unknownVariables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"unknownVariables:",{aCollection:aCollection}, smalltalk.Compiler)})}
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._recompile_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass}, smalltalk.Compiler.klass)})}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._recompile_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"recompileAll",{}, smalltalk.Compiler.klass)})}
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
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode}, smalltalk.NodeVisitor)})}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAll_",
smalltalk.method({
selector: "visitAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
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
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode}, smalltalk.NodeVisitor)})}
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$1;
$2=_st(aClass)._isMetaclass();
$3=(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(aClass)._instanceClass())._name()).__comma(".klass");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$4=(function(){
return smalltalk.withContext(function($ctx2) {$5=_st(aClass)._isNil();
if(smalltalk.assert($5)){
return "nil";
} else {
return _st(aClass)._name();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$1=_st($2)._ifTrue_ifFalse_($3,$4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["self", "super", "true", "false", "nil", "thisContext"];
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{}, smalltalk.AbstractCodeGenerator)})}
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
}, function($ctx1) {$ctx1.fill(self,"safeVariableNameFor:",{aString:aString}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString}, smalltalk.AbstractCodeGenerator)})}
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
_st(_st(self)._semanticAnalyzer())._visit_(aNode);
ir=_st(_st(self)._translator())._visit_(aNode);
$2=_st(self)._irTranslator();
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream}, smalltalk.CodeGenerator)})}
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
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{}, smalltalk.CodeGenerator)})}
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
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{}, smalltalk.CodeGenerator)})}
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
}, function($ctx1) {$ctx1.fill(self,"translator",{}, smalltalk.CodeGenerator)})}
}),
smalltalk.CodeGenerator);



