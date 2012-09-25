smalltalk.addPackage('Compiler-Core', {});
smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`. \x0aThe default code generator is an instance of `InlinedCodeGenerator`"
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@codeGeneratorClass"]) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=self["@codeGeneratorClass"];
};
return $1;
},
args: [],
source: "codeGeneratorClass\x0a\x09^codeGeneratorClass ifNil: [InliningCodeGenerator]",
messageSends: ["ifNil:"],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_codeGeneratorClass_",
smalltalk.method({
selector: "codeGeneratorClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@codeGeneratorClass"]=aClass;
return self},
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[aString])]);
return $1;
},
args: ["aString"],
source: "compile: aString\x0a\x09^self compileNode: (self parse: aString)",
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_forClass_",
smalltalk.method({
selector: "compile:forClass:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[aClass]);
smalltalk.send(self,"_source_",[aString]);
$1=smalltalk.send(self,"_compile_",[aString]);
return $1;
},
args: ["aString", "aClass"],
source: "compile: aString forClass: aClass\x0a\x09self currentClass: aClass.\x0a\x09self source: aString.\x0a\x09^self compile: aString",
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileExpression_",
smalltalk.method({
selector: "compileExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[(smalltalk.DoIt || DoIt)]);
smalltalk.send(self,"_source_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[smalltalk.send(self,"_source",[])])]);
return $1;
},
args: ["aString"],
source: "compileExpression: aString\x0a\x09self currentClass: DoIt.\x0a\x09self source: 'doIt ^[', aString, '] value'.\x0a\x09^self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
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
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| generator result |\x0a\x09generator := self codeGeneratorClass new.\x0a\x09generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass.\x0a\x09result := generator compileNode: aNode.\x0a\x09self unknownVariables: #().\x0a\x09^result",
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@currentClass"];
},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'compiling',
fn: function (aString){
var self=this;
return eval(aString);
;
return self},
args: ["aString"],
source: "eval: aString\x0a\x09<return eval(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var result;
smalltalk.send((smalltalk.DoIt || DoIt),"_addCompiledMethod_",[smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compileExpression_",[aString])])]);
result=smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_new",[]),"_doIt",[]);
smalltalk.send((smalltalk.DoIt || DoIt),"_removeCompiledMethod_",[smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_methodDictionary",[]),"_at_",["doIt"])]);
return result;
},
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09| result |\x0a\x09DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).\x0a\x09result := DoIt new doIt.\x0a\x09DoIt removeCompiledMethod: (DoIt methodDictionary at: 'doIt').\x0a\x09^result",
messageSends: ["addCompiledMethod:", "eval:", "compileExpression:", "doIt", "new", "removeCompiledMethod:", "at:", "methodDictionary"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
category: 'compiling',
fn: function (aString,aBehavior,anotherString){
var self=this;
var compiled;
compiled=smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compile_forClass_",[aString,aBehavior])]);
smalltalk.send(compiled,"_category_",[anotherString]);
smalltalk.send(aBehavior,"_addCompiledMethod_",[compiled]);
return compiled;
},
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior category: anotherString\x0a\x09| compiled |\x0a\x09compiled := self eval: (self compile: aString forClass: aBehavior).\x0a\x09compiled category: anotherString.\x0a\x09aBehavior addCompiledMethod: compiled.\x0a\x09^compiled",
messageSends: ["eval:", "compile:forClass:", "category:", "addCompiledMethod:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_parse_",[aString]);
return $1;
},
args: ["aString"],
source: "parse: aString\x0a    ^Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parseExpression_",
smalltalk.method({
selector: "parseExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_parse_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
return $1;
},
args: ["aString"],
source: "parseExpression: aString\x0a    ^self parse: 'doIt ^[', aString, '] value'",
messageSends: ["parse:", ","],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
category: 'compiling',
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
return self},
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass methodDictionary do: [:each |\x0a\x09\x09console log: aClass name, ' >> ', each selector.\x0a\x09\x09self install: each source forClass: aClass category: each category].\x0a\x09self setupClass: aClass.\x0a\x09aClass isMetaclass ifFalse: [self recompile: aClass class]",
messageSends: ["do:", "log:", ",", "selector", "name", "install:forClass:category:", "source", "category", "methodDictionary", "setupClass:", "ifFalse:", "recompile:", "class", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
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
return self},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09Transcript show: each; cr.\x0a\x09\x09[self recompile: each] valueWithTimeout: 100]",
messageSends: ["do:", "show:", "cr", "valueWithTimeout:", "recompile:", "classes", "current"],
referencedClasses: ["Transcript", "Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
;
return self},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
return self["@unknownVariables"];
},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@unknownVariables"]=aCollection;
return self},
args: ["aCollection"],
source: "unknownVariables: aCollection\x0a\x09unknownVariables := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_recompile_",[aClass]);
return self},
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
messageSends: ["recompile:", "new"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[]),"_do_",[(function(each){
return smalltalk.send(self,"_recompile_",[each]);
})]);
return self},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09self recompile: each]",
messageSends: ["do:", "recompile:", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler-Core');
smalltalk.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`."


smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler-Core');
smalltalk.NodeVisitor.comment="I am the abstract super class of all AST node visitors."
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(aNode,"_accept_",[self]);
return $1;
},
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAll_",
smalltalk.method({
selector: "visitAll:",
category: 'visiting',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return $1;
},
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection do: [ :each | self visit: each ]",
messageSends: ["do:", "visit:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitSequenceNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitVariableNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09^ self visitVariableNode: aNode",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitNode_",
smalltalk.method({
selector: "visitNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitAll_",[smalltalk.send(aNode,"_nodes",[])]);
return $1;
},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09^ self visitAll: aNode nodes",
messageSends: ["visitAll:", "nodes"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API."
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: 'accessing',
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
},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, '.klass']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@currentClass"];
},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
category: 'accessing',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
},
args: [],
source: "pseudoVariables\x0a\x09^#('self' 'super' 'true' 'false' 'nil' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_safeVariableNameFor_",
smalltalk.method({
selector: "safeVariableNameFor:",
category: 'accessing',
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
},
args: ["aString"],
source: "safeVariableNameFor: aString\x0a\x09^(Smalltalk current reservedWords includes: aString)\x0a\x09\x09ifTrue: [aString, '_']\x0a\x09\x09ifFalse: [aString]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation."
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
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
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "irTranslator", "contents"],
referencedClasses: []
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRJSTranslator || IRJSTranslator),"_new",[]);
return $1;
},
args: [],
source: "irTranslator\x0a\x09^ IRJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRJSTranslator"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer),"_on_",[smalltalk.send(self,"_currentClass",[])]);
return $1;
},
args: [],
source: "semanticAnalyzer\x0a\x09^ SemanticAnalyzer on: self currentClass",
messageSends: ["on:", "currentClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
category: 'compiling',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRASTTranslator || IRASTTranslator),"_new",[]);
smalltalk.send($2,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($2,"_theClass_",[smalltalk.send(self,"_currentClass",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "theClass:", "currentClass", "yourself"],
referencedClasses: ["IRASTTranslator"]
}),
smalltalk.CodeGenerator);



smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler-Core');
smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@argVariables"],"_copy",[]);
return $1;
},
args: [],
source: "argVariables\x0a\x09^argVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
category: 'optimizations',
fn: function (aClassName,receiver){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((($receiver = ","__comma",[receiver]),"__comma",[").klass === smalltalk."]),"__comma",[aClassName]),"__comma",[") ? "])]);
return self},
args: ["aClassName", "receiver"],
source: "checkClass: aClassName for: receiver\x0a        stream nextPutAll: '((($receiver = ', receiver, ').klass === smalltalk.', aClassName, ') ? '",
messageSends: ["nextPutAll:", ","],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var $1;
self["@stream"]=smalltalk.send("","_writeStream",[]);
smalltalk.send(self,"_visit_",[aNode]);
$1=smalltalk.send(self["@stream"],"_contents",[]);
return $1;
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09stream := '' writeStream.\x0a\x09self visit: aNode.\x0a\x09^stream contents",
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.AbstractCodeGenerator);
self["@stream"]=smalltalk.send("","_writeStream",[]);
self["@unknownVariables"]=[];
self["@tempVariables"]=[];
self["@argVariables"]=[];
self["@messageSends"]=[];
self["@classReferenced"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream. \x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09messageSends := #().\x0a\x09classReferenced := #()",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
category: 'optimizations',
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
},
args: ["aSelector", "receiver", "aCollection"],
source: "inline: aSelector receiver: receiver argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a\x0a\x09\x22-- Booleans --\x22\x0a\x0a\x09(aSelector = 'ifFalse:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:ifFalse:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifFalse:ifTrue:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>') ifTrue: [ \x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '+') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver +'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '-') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver -'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '*') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver *'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '/') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver /'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        ^inlined",
messageSends: ["ifTrue:", "checkClass:for:", "nextPutAll:", "visit:", "first", "isBlockNode", "=", "second", "and:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
category: 'optimizations',
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
},
args: ["aSelector", "anObject", "aCollection"],
source: "inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a \x0a\x09\x22-- BlockClosures --\x22\x0a\x0a\x09(aSelector = 'whileTrue:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileTrue') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '+') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' + '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '-') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' - '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '*') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' * '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '/') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' / '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' < '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' <= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' > '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' >= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a                \x09   \x0a\x09\x22-- UndefinedObject --\x22\x0a\x0a\x09(aSelector = 'ifNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : $receiver'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') != nil && $receiver != undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : nil'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNil:ifNotNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:ifNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a                 \x0a        ^inlined",
messageSends: ["ifTrue:", "nextPutAll:", "visit:", "first", "and:", "isBlockNode", "=", "isNode:ofClass:", "second"],
referencedClasses: ["Number"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
category: 'optimizations',
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
},
args: ["aNode", "aClass"],
source: "isNode: aNode ofClass: aClass\x0a\x09^aNode isValueNode and: [\x0a          \x09aNode value class = aClass or: [\x0a          \x09\x09aNode value = 'self' and: [self currentClass = aClass]]]",
messageSends: ["and:", "or:", "=", "currentClass", "value", "class", "isValueNode"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_pseudoVariables",[]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_tempVariables",[])]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_argVariables",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "knownVariables\x0a\x09^self pseudoVariables \x0a\x09\x09addAll: self tempVariables;\x0a\x09\x09addAll: self argVariables;\x0a\x09\x09yourself",
messageSends: ["addAll:", "tempVariables", "pseudoVariables", "argVariables", "yourself"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_performOptimizations",[]);
return $1;
},
args: [],
source: "performOptimizations\x0a\x09^self class performOptimizations",
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
category: 'visiting',
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
},
args: ["aSelector", "aReceiver", "aCollection", "aBoolean"],
source: "send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean\x0a\x09^String streamContents: [:str || tmp |\x0a        \x09tmp := stream.\x0a\x09\x09str nextPutAll: 'smalltalk.send('.\x0a\x09\x09str nextPutAll: aReceiver.\x0a\x09\x09str nextPutAll: ', \x22', aSelector asSelector, '\x22, ['.\x0a                stream := str.\x0a\x09\x09aCollection\x0a\x09    \x09\x09do: [:each | self visit: each]\x0a\x09    \x09\x09separatedBy: [stream nextPutAll: ', '].\x0a                stream := tmp.\x0a                str nextPutAll: ']'.\x0a\x09\x09aBoolean ifTrue: [\x0a\x09\x09\x09str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass), '.superclass || nil'].\x0a\x09\x09str nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "asSelector", "do:separatedBy:", "visit:", "ifTrue:", "classNameFor:", "currentClass"],
referencedClasses: ["String"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@tempVariables"],"_copy",[]);
return $1;
},
args: [],
source: "tempVariables\x0a\x09^tempVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@unknownVariables"],"_copy",[]);
return $1;
},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode,"_accept_",[self]);
return self},
args: ["aNode"],
source: "visit: aNode\x0a\x09aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["("]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[")"]);
return self},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09stream nextPutAll: '('.\x0a\x09self visit: aNode left.\x0a\x09stream nextPutAll: '='.\x0a\x09self visit: aNode right.\x0a\x09stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "visit:", "left", "right"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
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
return self},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09stream nextPutAll: '(function('.\x0a\x09aNode parameters \x0a\x09    do: [:each |\x0a\x09\x09tempVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream nextPutAll: '){'.\x0a\x09aNode nodes do: [:each | self visit: each].\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "add:", "parameters", "do:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
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
return self},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09| index |\x0a\x09nestedBlocks := nestedBlocks + 1.\x0a\x09aNode nodes isEmpty\x0a\x09    ifTrue: [\x0a\x09\x09stream nextPutAll: 'return nil;']\x0a\x09    ifFalse: [\x0a\x09\x09aNode temps do: [:each | | temp |\x0a                    temp := self safeVariableNameFor: each.\x0a\x09\x09    tempVariables add: temp.\x0a\x09\x09    stream nextPutAll: 'var ', temp, '=nil;'; lf].\x0a\x09\x09index := 0.\x0a\x09\x09aNode nodes do: [:each |\x0a\x09\x09    index := index + 1.\x0a\x09\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09\x09stream nextPutAll: 'return '].\x0a\x09\x09    self visit: each.\x0a\x09\x09    stream nextPutAll: ';']].\x0a\x09nestedBlocks := nestedBlocks - 1",
messageSends: ["+", "ifTrue:ifFalse:", "nextPutAll:", "do:", "safeVariableNameFor:", "add:", ",", "lf", "temps", "ifTrue:", "=", "size", "nodes", "visit:", "isEmpty", "-"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
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
return self},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| index |\x0a\x09index := 0.\x0a\x09(tempVariables includes: '$rec') ifFalse: [\x0a\x09\x09tempVariables add: '$rec'].\x0a\x09stream nextPutAll: '(function($rec){'.\x0a\x09aNode nodes do: [:each |\x0a\x09    index := index + 1.\x0a\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09stream nextPutAll: 'return '].\x0a\x09    each receiver: (VariableNode new value: '$rec').\x0a\x09    self visit: each.\x0a\x09    stream nextPutAll: ';'].\x0a\x09stream nextPutAll: '})('.\x0a\x09self visit: aNode receiver.\x0a\x09stream nextPutAll: ')'",
messageSends: ["ifFalse:", "add:", "includes:", "nextPutAll:", "do:", "+", "ifTrue:", "=", "size", "nodes", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: ["VariableNode"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self["@referencedClasses"],"_includes_",[smalltalk.send(aNode,"_value",[])]);
if(! smalltalk.assert($1)){
smalltalk.send(self["@referencedClasses"],"_add_",[smalltalk.send(aNode,"_value",[])]);
};
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.","__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[" || "]),"__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[")"])]);
return self},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09(referencedClasses includes: aNode value) ifFalse: [\x0a\x09\x09referencedClasses add: aNode value].\x0a\x09stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'",
messageSends: ["ifFalse:", "add:", "value", "includes:", "nextPutAll:", ","],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09stream nextPutAll: '['.\x0a\x09aNode nodes \x0a\x09\x09do: [:each | self visit: each]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "do:separatedBy:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09aNode nodes \x0a\x09\x09\x09do: [:each | self visit: each]\x0a\x09\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "do:separatedBy:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
category: 'visiting',
fn: function (aFailure){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(aFailure,"_asString",[])]);
return self},
args: ["aFailure"],
source: "visitFailure: aFailure\x0a\x09self error: aFailure asString",
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(aNode,"_source",[])]);
return self},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09stream nextPutAll: aNode source",
messageSends: ["nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09| str currentSelector | \x0a\x09currentSelector := aNode selector asSelector.\x0a\x09nestedBlocks := 0.\x0a\x09earlyReturn := false.\x0a\x09messageSends := #().\x0a\x09referencedClasses := #().\x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09stream \x0a\x09    nextPutAll: 'smalltalk.method({'; lf;\x0a\x09    nextPutAll: 'selector: \x22', aNode selector, '\x22,'; lf.\x0a\x09stream nextPutAll: 'source: ', self source asJavascript, ',';lf.\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09aNode arguments \x0a\x09    do: [:each | \x0a\x09\x09argVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream \x0a\x09    nextPutAll: '){'; lf;\x0a\x09    nextPutAll: 'var self=this;'; lf.\x0a\x09str := stream.\x0a\x09stream := '' writeStream.\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each].\x0a\x09earlyReturn ifTrue: [\x0a\x09    str nextPutAll: 'var $early={};'; lf; nextPutAll: 'try{'].\x0a\x09str nextPutAll: stream contents.\x0a\x09stream := str.\x0a\x09stream \x0a\x09    lf; \x0a\x09    nextPutAll: 'return self;'.\x0a\x09earlyReturn ifTrue: [\x0a\x09    stream lf; nextPutAll: '} catch(e) {if(e===$early)return e[0]; throw e}'].\x0a\x09stream nextPutAll: '}'.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: messageSends asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', argVariables asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09referencedClasses \x0a\x09\x09do: [:each | stream nextPutAll: each printString]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'.\x0a\x09stream nextPutAll: '})'",
messageSends: ["asSelector", "selector", "nextPutAll:", "lf", ",", "asJavascript", "source", "do:separatedBy:", "arguments", "add:", "writeStream", "do:", "nodes", "visit:", "ifTrue:", "contents", "printString"],
referencedClasses: ["String"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@earlyReturn']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@earlyReturn']=true);})]));
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})]));
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09nestedBlocks > 0 ifTrue: [\x0a\x09    earlyReturn := true].\x0a\x09nestedBlocks > 0\x0a\x09    ifTrue: [\x0a\x09\x09stream\x0a\x09\x09    nextPutAll: '(function(){throw $early=[']\x0a\x09    ifFalse: [stream nextPutAll: 'return '].\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each].\x0a\x09nestedBlocks > 0 ifTrue: [\x0a\x09    stream nextPutAll: ']})()']",
messageSends: ["ifTrue:", ">", "ifTrue:ifFalse:", "nextPutAll:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a        | str receiver superSend inlined |\x0a        str := stream.\x0a        (messageSends includes: aNode selector) ifFalse: [\x0a                messageSends add: aNode selector].\x0a        stream := '' writeStream.\x0a        self visit: aNode receiver.\x0a        superSend := stream contents = 'super'.\x0a        receiver := superSend ifTrue: ['self'] ifFalse: [stream contents].\x0a        stream := str.\x0a\x09\x0a\x09self performOptimizations \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifFalse: [\x0a\x09\x09\x09\x09(self inline: aNode selector receiver: receiver argumentNodes: aNode arguments)\x0a                \x09\x09\x09ifTrue: [stream nextPutAll: ' : ', (self send: aNode selector to: '$receiver' arguments: aNode arguments superSend: superSend), ')']\x0a                \x09\x09\x09ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]]]\x0a\x09\x09ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]",
messageSends: ["ifFalse:", "includes:", "selector", "add:", "writeStream", "visit:", "receiver", "=", "contents", "ifTrue:ifFalse:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "arguments", "inline:receiver:argumentNodes:", "nextPutAll:", ",", "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [:each || temp |\x0a            temp := self safeVariableNameFor: each.\x0a\x09    tempVariables add: temp.\x0a\x09    stream nextPutAll: 'var ', temp, '=nil;'; lf].\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each.\x0a\x09    stream nextPutAll: ';']\x0a\x09    separatedBy: [stream lf]",
messageSends: ["do:", "temps", "safeVariableNameFor:", "add:", "nextPutAll:", ",", "lf", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09stream nextPutAll: aNode value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);})() : (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);}), (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})]));
return self;},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09| varName |\x0a\x09(self currentClass allInstanceVariableNames includes: aNode value) \x0a\x09\x09ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']\x0a\x09\x09ifFalse: [\x0a                  \x09varName := self safeVariableNameFor: aNode value.\x0a\x09\x09\x09(self knownVariables includes: varName) \x0a                  \x09\x09ifFalse: [\x0a                                  \x09unknownVariables add: aNode value.\x0a                                  \x09aNode assigned \x0a                                  \x09\x09ifTrue: [stream nextPutAll: varName]\x0a                                  \x09\x09ifFalse: [stream nextPutAll: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]\x0a                  \x09\x09ifTrue: [\x0a                                  \x09aNode value = 'thisContext'\x0a                                  \x09\x09ifTrue: [stream nextPutAll: '(smalltalk.getThisContext())']\x0a                \x09\x09\x09\x09ifFalse: [stream nextPutAll: varName]]]",
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "nextPutAll:", ",", "safeVariableNameFor:", "ifFalse:ifTrue:", "knownVariables", "add:", "assigned", "="],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);


smalltalk.FunCodeGenerator.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;},
args: [],
source: "performOptimizations\x0a\x09^performOptimizations ifNil: [true]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator.klass);

smalltalk.addMethod(
"_performOptimizations_",
smalltalk.method({
selector: "performOptimizations:",
category: 'accessing',
fn: function (aBoolean) {
var self=this;
(self['@performOptimizations']=aBoolean);
return self;},
args: ["aBoolean"],
source: "performOptimizations: aBoolean\x0a\x09performOptimizations := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.FunCodeGenerator.klass);


