smalltalk.addPackage('Compiler-Core', {});
smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@codeGeneratorClass"]) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=self["@codeGeneratorClass"];
};
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_codeGeneratorClass_",
smalltalk.method({
selector: "codeGeneratorClass:",
fn: function (aClass){
var self=this;
self["@codeGeneratorClass"]=aClass;
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[aString])]);
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_forClass_",
smalltalk.method({
selector: "compile:forClass:",
fn: function (aString,aClass){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[aClass]);
smalltalk.send(self,"_source_",[aString]);
$1=smalltalk.send(self,"_compile_",[aString]);
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileExpression_",
smalltalk.method({
selector: "compileExpression:",
fn: function (aString){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[(smalltalk.DoIt || DoIt)]);
smalltalk.send(self,"_source_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[smalltalk.send(self,"_source",[])])]);
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var $1;
var generator;
var result;
generator=smalltalk.send(smalltalk.send(self,"_codeGeneratorClass",[]),"_new",[]);
smalltalk.send(generator,"_source_",[smalltalk.send(self,"_source",[])]);
$1=smalltalk.send(generator,"_currentClass_",[smalltalk.send(self,"_currentClass",[])]);
result=smalltalk.send(generator,"_compileNode_",[aNode]);
smalltalk.send(self,"_unknownVariables_",[[]]);
return result;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return self["@currentClass"];
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
return eval(aString);
;
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString){
var self=this;
var result;
smalltalk.send((smalltalk.DoIt || DoIt),"_addCompiledMethod_",[smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compileExpression_",[aString])])]);
result=smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_new",[]),"_doIt",[]);
smalltalk.send((smalltalk.DoIt || DoIt),"_removeCompiledMethod_",[smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_methodDictionary",[]),"_at_",["doIt"])]);
return result;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString,aBehavior,anotherString){
var self=this;
var compiled;
compiled=smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compile_forClass_",[aString,aBehavior])]);
smalltalk.send(compiled,"_category_",[anotherString]);
smalltalk.send(aBehavior,"_addCompiledMethod_",[compiled]);
return compiled;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_parse_",[aString]);
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parseExpression_",
smalltalk.method({
selector: "parseExpression:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_parse_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
var $1;
smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_do_",[(function(each){
smalltalk.send(console,"_log_",[smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_name",[]),"__comma",[" >> "]),"__comma",[smalltalk.send(each,"_selector",[])])]);
return smalltalk.send(self,"_install_forClass_category_",[smalltalk.send(each,"_source",[]),aClass,smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(self,"_setupClass_",[aClass]);
$1=smalltalk.send(aClass,"_isMetaclass",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_recompile_",[smalltalk.send(aClass,"_class",[])]);
};
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
var $1;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[]),"_do_",[(function(each){
smalltalk.send((smalltalk.Transcript || Transcript),"_show_",[each]);
$1=smalltalk.send((smalltalk.Transcript || Transcript),"_cr",[]);
$1;
return smalltalk.send((function(){
return smalltalk.send(self,"_recompile_",[each]);
}),"_valueWithTimeout_",[(100)]);
})]);
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
;
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
self["@source"]=aString;
return self}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return self["@unknownVariables"];
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
fn: function (aCollection){
var self=this;
self["@unknownVariables"]=aCollection;
return self}
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_recompile_",[aClass]);
return self}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[]),"_do_",[(function(each){
return smalltalk.send(self,"_recompile_",[each]);
})]);
return self}
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
var $1;
$1=smalltalk.send(aNode,"_accept_",[self]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAll_",
smalltalk.method({
selector: "visitAll:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitSequenceNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitVariableNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitNode_",
smalltalk.method({
selector: "visitNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitAll_",[smalltalk.send(aNode,"_nodes",[])]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
}
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(aClass,"_isMetaclass",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_instanceClass",[]),"_name",[]),"__comma",[".klass"]);
} else {
$3=smalltalk.send(aClass,"_isNil",[]);
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=smalltalk.send(aClass,"_name",[]);
};
};
return $1;
}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function (){
var self=this;
return self["@currentClass"];
}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_safeVariableNameFor_",
smalltalk.method({
selector: "safeVariableNameFor:",
fn: function (aString){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_reservedWords",[]),"_includes_",[aString]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aString,"__comma",["_"]);
} else {
$1=aString;
};
return $1;
}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
self["@source"]=aString;
return self}
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var $2,$3,$1;
var ir;
var stream;
smalltalk.send(smalltalk.send(self,"_semanticAnalyzer",[]),"_visit_",[aNode]);
ir=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[aNode]);
$2=smalltalk.send(self,"_irTranslator",[]);
smalltalk.send($2,"_visit_",[ir]);
$3=smalltalk.send($2,"_contents",[]);
$1=$3;
return $1;
}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRJSTranslator || IRJSTranslator),"_new",[]);
return $1;
}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer),"_on_",[smalltalk.send(self,"_currentClass",[])]);
return $1;
}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRASTTranslator || IRASTTranslator),"_new",[]);
smalltalk.send($2,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($2,"_theClass_",[smalltalk.send(self,"_currentClass",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.CodeGenerator);



smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler-Core');
smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@argVariables"],"_copy",[]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
fn: function (aClassName,receiver){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((($receiver = ","__comma",[receiver]),"__comma",[").klass === smalltalk."]),"__comma",[aClassName]),"__comma",[") ? "])]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var $1;
self["@stream"]=smalltalk.send("","_writeStream",[]);
smalltalk.send(self,"_visit_",[aNode]);
$1=smalltalk.send(self["@stream"],"_contents",[]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.AbstractCodeGenerator);
self["@stream"]=smalltalk.send("","_writeStream",[]);
self["@unknownVariables"]=[];
self["@tempVariables"]=[];
self["@argVariables"]=[];
self["@messageSends"]=[];
self["@classReferenced"]=[];
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
fn: function (aSelector,receiver,aCollection){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
var inlined;
inlined=false;
$1=smalltalk.send(aSelector,"__eq",["ifFalse:"]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($2)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["(! $receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil)"]);
inlined=true;
inlined;
};
};
$3=smalltalk.send(aSelector,"__eq",["ifTrue:"]);
if(smalltalk.assert($3)){
$4=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($4)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["($receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil)"]);
inlined=true;
inlined;
};
};
$5=smalltalk.send(aSelector,"__eq",["ifTrue:ifFalse:"]);
if(smalltalk.assert($5)){
$6=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($6)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["($receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["())"]);
inlined=true;
inlined;
};
};
$7=smalltalk.send(aSelector,"__eq",["ifFalse:ifTrue:"]);
if(smalltalk.assert($7)){
$8=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($8)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["(! $receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["())"]);
inlined=true;
inlined;
};
};
$9=smalltalk.send(aSelector,"__eq",["<"]);
if(smalltalk.assert($9)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver <"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$10=smalltalk.send(aSelector,"__eq",["<="]);
if(smalltalk.assert($10)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver <="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$11=smalltalk.send(aSelector,"__eq",[">"]);
if(smalltalk.assert($11)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver >"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$12=smalltalk.send(aSelector,"__eq",[">="]);
if(smalltalk.assert($12)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver >="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$13=smalltalk.send(aSelector,"__eq",["+"]);
if(smalltalk.assert($13)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver +"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$14=smalltalk.send(aSelector,"__eq",["-"]);
if(smalltalk.assert($14)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver -"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$15=smalltalk.send(aSelector,"__eq",["*"]);
if(smalltalk.assert($15)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver *"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$16=smalltalk.send(aSelector,"__eq",["/"]);
if(smalltalk.assert($16)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver /"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
return inlined;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
fn: function (aSelector,anObject,aCollection){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32;
var inlined;
inlined=false;
$1=smalltalk.send(aSelector,"__eq",["whileTrue:"]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(anObject,"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($2)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while("]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()}})()"]);
inlined=true;
inlined;
};
};
$3=smalltalk.send(aSelector,"__eq",["whileFalse:"]);
if(smalltalk.assert($3)){
$4=smalltalk.send(smalltalk.send(anObject,"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($4)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while(!"]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()}})()"]);
inlined=true;
inlined;
};
};
$5=smalltalk.send(aSelector,"__eq",["whileTrue"]);
if(smalltalk.assert($5)){
$6=smalltalk.send(anObject,"_isBlockNode",[]);
if(smalltalk.assert($6)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while("]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {}})()"]);
inlined=true;
inlined;
};
};
$7=smalltalk.send(aSelector,"__eq",["whileFalse"]);
if(smalltalk.assert($7)){
$8=smalltalk.send(anObject,"_isBlockNode",[]);
if(smalltalk.assert($8)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while(!"]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {}})()"]);
inlined=true;
inlined;
};
};
$9=smalltalk.send(aSelector,"__eq",["+"]);
if(smalltalk.assert($9)){
$10=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($10)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" + "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$11=smalltalk.send(aSelector,"__eq",["-"]);
if(smalltalk.assert($11)){
$12=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($12)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" - "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$13=smalltalk.send(aSelector,"__eq",["*"]);
if(smalltalk.assert($13)){
$14=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($14)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" * "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$15=smalltalk.send(aSelector,"__eq",["/"]);
if(smalltalk.assert($15)){
$16=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($16)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" / "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$17=smalltalk.send(aSelector,"__eq",["<"]);
if(smalltalk.assert($17)){
$18=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($18)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" < "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$19=smalltalk.send(aSelector,"__eq",["<="]);
if(smalltalk.assert($19)){
$20=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($20)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" <= "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$21=smalltalk.send(aSelector,"__eq",[">"]);
if(smalltalk.assert($21)){
$22=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($22)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" > "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$23=smalltalk.send(aSelector,"__eq",[">="]);
if(smalltalk.assert($23)){
$24=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($24)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" >= "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$25=smalltalk.send(aSelector,"__eq",["ifNil:"]);
if(smalltalk.assert($25)){
$26=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($26)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : $receiver"]);
inlined=true;
inlined;
};
};
$27=smalltalk.send(aSelector,"__eq",["ifNotNil:"]);
if(smalltalk.assert($27)){
$28=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($28)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") != nil && $receiver != undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil"]);
inlined=true;
inlined;
};
};
$29=smalltalk.send(aSelector,"__eq",["ifNil:ifNotNil:"]);
if(smalltalk.assert($29)){
$30=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($30)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()"]);
inlined=true;
inlined;
};
};
$31=smalltalk.send(aSelector,"__eq",["ifNotNil:ifNil:"]);
if(smalltalk.assert($31)){
$32=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($32)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()"]);
inlined=true;
inlined;
};
};
return inlined;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
fn: function (aNode,aClass){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aNode,"_isValueNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_value",[]),"_class",[]),"__eq",[aClass]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_value",[]),"__eq",["self"]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_currentClass",[]),"__eq",[aClass]);
})]);
})]);
})]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_pseudoVariables",[]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_tempVariables",[])]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_argVariables",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_performOptimizations",[]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
fn: function (aSelector,aReceiver,aCollection,aBoolean){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(str){
var tmp;
tmp=self["@stream"];
tmp;
smalltalk.send(str,"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(str,"_nextPutAll_",[aReceiver]);
smalltalk.send(str,"_nextPutAll_",[smalltalk.send(smalltalk.send(", \x22","__comma",[smalltalk.send(aSelector,"_asSelector",[])]),"__comma",["\x22, ["])]);
self["@stream"]=str;
self["@stream"];
smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[", "]);
})]);
self["@stream"]=tmp;
self["@stream"];
smalltalk.send(str,"_nextPutAll_",["]"]);
if(smalltalk.assert(aBoolean)){
smalltalk.send(str,"_nextPutAll_",[smalltalk.send(smalltalk.send(", smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(self,"_currentClass",[])])]),"__comma",[".superclass || nil"])]);
};
return smalltalk.send(str,"_nextPutAll_",[")"]);
})]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@tempVariables"],"_copy",[]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@unknownVariables"],"_copy",[]);
return $1;
}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode){
var self=this;
smalltalk.send(aNode,"_accept_",[self]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["("]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[")"]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["(function("]);
smalltalk.send(smalltalk.send(aNode,"_parameters",[]),"_do_separatedBy_",[(function(each){
smalltalk.send(self["@tempVariables"],"_add_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[", "]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
var $1,$2,$3;
var index;
self["@nestedBlocks"]=smalltalk.send(self["@nestedBlocks"],"__plus",[(1)]);
$1=smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_isEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return nil;"]);
} else {
smalltalk.send(smalltalk.send(aNode,"_temps",[]),"_do_",[(function(each){
var temp;
temp=smalltalk.send(self,"_safeVariableNameFor_",[each]);
temp;
smalltalk.send(self["@tempVariables"],"_add_",[temp]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("var ","__comma",[temp]),"__comma",["=nil;"])]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return $2;
})]);
index=(0);
index;
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
index=smalltalk.send(index,"__plus",[(1)]);
index;
$3=smalltalk.send(index,"__eq",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_size",[])]);
if(smalltalk.assert($3)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
};
smalltalk.send(self,"_visit_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
})]);
};
self["@nestedBlocks"]=smalltalk.send(self["@nestedBlocks"],"__minus",[(1)]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
var $1,$2;
var index;
index=(0);
$1=smalltalk.send(self["@tempVariables"],"_includes_",["$rec"]);
if(! smalltalk.assert($1)){
smalltalk.send(self["@tempVariables"],"_add_",["$rec"]);
};
smalltalk.send(self["@stream"],"_nextPutAll_",["(function($rec){"]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
index=smalltalk.send(index,"__plus",[(1)]);
index;
$2=smalltalk.send(index,"__eq",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_size",[])]);
if(smalltalk.assert($2)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
};
smalltalk.send(each,"_receiver_",[smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode),"_new",[]),"_value_",["$rec"])]);
smalltalk.send(self,"_visit_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})("]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_receiver",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[")"]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self["@referencedClasses"],"_includes_",[smalltalk.send(aNode,"_value",[])]);
if(! smalltalk.assert($1)){
smalltalk.send(self["@referencedClasses"],"_add_",[smalltalk.send(aNode,"_value",[])]);
};
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.","__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[" || "]),"__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[")"])]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
fn: function (aFailure){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(aFailure,"_asString",[])]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(aNode,"_source",[])]);
return self}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode) {
var self=this;
var str=nil;
var currentSelector=nil;
(self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []));
(self['@nestedBlocks']=(0));
(self['@earlyReturn']=false);
(self['@messageSends']=[]);
(self['@referencedClasses']=[]);
(self['@unknownVariables']=[]);
(self['@tempVariables']=[]);
(self['@argVariables']=[]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: \x22", "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", ["\x22,"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(self, "_source", []), "_asJavascript", [])]), "__comma", [","])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", ["fn: function("]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@argVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["var self=this;"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(str=self['@stream']);
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["try{"]);})(str);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["try{"]);})(str);})]));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
(self['@stream']=str);
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["return self;"]);})(self['@stream']);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["} catch(e) {if(e===$early)return e[0]; throw e}"]);})(self['@stream']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["} catch(e) {if(e===$early)return e[0]; throw e}"]);})(self['@stream']);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(",", "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(self['@argVariables'], "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["referencedClasses: ["]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
var self=this;
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@earlyReturn']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@earlyReturn']=true);})]));
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})]));
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode) {
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
(str=self['@stream']);
((($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]));
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
(superSend=smalltalk.send(smalltalk.send(self['@stream'], "_contents", []), "__eq", ["super"]));
(receiver=((($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})])));
(self['@stream']=str);
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);})() : (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);}), (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})]));
return self;}
}),
smalltalk.FunCodeGenerator);


smalltalk.FunCodeGenerator.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
fn: function () {
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;}
}),
smalltalk.FunCodeGenerator.klass);

smalltalk.addMethod(
"_performOptimizations_",
smalltalk.method({
selector: "performOptimizations:",
fn: function (aBoolean) {
var self=this;
(self['@performOptimizations']=aBoolean);
return self;}
}),
smalltalk.FunCodeGenerator.klass);


