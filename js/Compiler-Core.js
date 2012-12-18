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
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@codeGeneratorClass"]) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=self["@codeGeneratorClass"];
};
return $1;
}, self, "codeGeneratorClass", [], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { self["@codeGeneratorClass"]=aClass;
return self}, self, "codeGeneratorClass:", [aClass], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._compileNode_(_st(self)._parse_(aString));
return $1;
}, self, "compile:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(self)._currentClass_(aClass);
_st(self)._source_(aString);
$1=_st(self)._compile_(aString);
return $1;
}, self, "compile:forClass:", [aString,aClass], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(self)._currentClass_((smalltalk.DoIt || DoIt));
_st(self)._source_(_st(_st("doIt ^[").__comma(aString)).__comma("] value"));
$1=_st(self)._compileNode_(_st(self)._parse_(_st(self)._source()));
return $1;
}, self, "compileExpression:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
var generator;
var result;
generator=_st(_st(self)._codeGeneratorClass())._new();
_st(generator)._source_(_st(self)._source());
$1=_st(generator)._currentClass_(_st(self)._currentClass());
result=_st(generator)._compileNode_(aNode);
_st(self)._unknownVariables_([]);
return result;
}, self, "compileNode:", [aNode], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { return self["@currentClass"];
}, self, "currentClass", [], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { self["@currentClass"]=aClass;
return self}, self, "currentClass:", [aClass], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { return eval(aString);
;
return self}, self, "eval:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var result;
_st((smalltalk.DoIt || DoIt))._addCompiledMethod_(_st(self)._eval_(_st(self)._compileExpression_(aString)));
result=_st(_st((smalltalk.DoIt || DoIt))._new())._doIt();
_st((smalltalk.DoIt || DoIt))._removeCompiledMethod_(_st(_st((smalltalk.DoIt || DoIt))._methodDictionary())._at_("doIt"));
return result;
}, self, "evaluateExpression:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var compiled;
compiled=_st(self)._eval_(_st(self)._compile_forClass_(aString,aBehavior));
_st(compiled)._category_(anotherString);
_st(aBehavior)._addCompiledMethod_(compiled);
_st(self)._setupClass_(aBehavior);
return compiled;
}, self, "install:forClass:category:", [aString,aBehavior,anotherString], smalltalk.Compiler)},
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior category: anotherString\x0a\x09| compiled |\x0a\x09compiled := self eval: (self compile: aString forClass: aBehavior).\x0a\x09compiled category: anotherString.\x0a\x09aBehavior addCompiledMethod: compiled.\x0a    self setupClass: aBehavior.\x0a\x09^compiled",
messageSends: ["eval:", "compile:forClass:", "category:", "addCompiledMethod:", "setupClass:"],
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}, self, "parse:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._parse_(_st(_st("doIt ^[").__comma(aString)).__comma("] value"));
return $1;
}, self, "parseExpression:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(_st(aClass)._methodDictionary())._do_((function(each){
_st(console)._log_(_st(_st(_st(aClass)._name()).__comma(" >> ")).__comma(_st(each)._selector()));
return _st(self)._install_forClass_category_(_st(each)._source(),aClass,_st(each)._category());
}));
_st(self)._setupClass_(aClass);
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._recompile_(_st(aClass)._class());
};
return self}, self, "recompile:", [aClass], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
_st((smalltalk.Transcript || Transcript))._show_(each);
$1=_st((smalltalk.Transcript || Transcript))._cr();
$1;
return _st((function(){
return _st(self)._recompile_(each);
}))._valueWithTimeout_((100));
}));
return self}, self, "recompileAll", [], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { smalltalk.init(aClass);
;
return self}, self, "setupClass:", [aClass], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}, self, "source", [], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { return self["@unknownVariables"];
}, self, "unknownVariables", [], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { self["@unknownVariables"]=aCollection;
return self}, self, "unknownVariables:", [aCollection], smalltalk.Compiler)},
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
return smalltalk.withContext(function($ctx) { _st(_st(self)._new())._recompile_(aClass);
return self}, self, "recompile:", [aClass], smalltalk.Compiler.klass)},
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
return smalltalk.withContext(function($ctx) { _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return _st(self)._recompile_(each);
}));
return self}, self, "recompileAll", [], smalltalk.Compiler.klass)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aNode)._accept_(self);
return $1;
}, self, "visit:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aCollection)._do_((function(each){
return _st(self)._visit_(each);
}));
return $1;
}, self, "visitAll:", [aCollection], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitAssignmentNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitBlockNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitSequenceNode_(aNode);
return $1;
}, self, "visitBlockSequenceNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitCascadeNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitVariableNode_(aNode);
return $1;
}, self, "visitClassReferenceNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitDynamicArrayNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitDynamicDictionaryNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitJSStatementNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitMethodNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitAll_(_st(aNode)._nodes());
return $1;
}, self, "visitNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitReturnNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitSendNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitSequenceNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitVariableNode:", [aNode], smalltalk.NodeVisitor)},
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
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
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
}, self, "classNameFor:", [aClass], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { _st(self)._subclassResponsibility();
return self}, self, "compileNode:", [aNode], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { return self["@currentClass"];
}, self, "currentClass", [], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { self["@currentClass"]=aClass;
return self}, self, "currentClass:", [aClass], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { return ["self", "super", "true", "false", "nil", "thisContext"];
}, self, "pseudoVariables", [], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._reservedWords())._includes_(aString);
if(smalltalk.assert($2)){
$1=_st(aString).__comma("_");
} else {
$1=aString;
};
return $1;
}, self, "safeVariableNameFor:", [aString], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}, self, "source", [], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.AbstractCodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
var ir;
var stream;
_st(_st(self)._semanticAnalyzer())._visit_(aNode);
ir=_st(_st(self)._translator())._visit_(aNode);
$2=_st(self)._irTranslator();
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, self, "compileNode:", [aNode], smalltalk.CodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.IRJSTranslator || IRJSTranslator))._new();
return $1;
}, self, "irTranslator", [], smalltalk.CodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(_st(self)._currentClass());
return $1;
}, self, "semanticAnalyzer", [], smalltalk.CodeGenerator)},
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
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st((smalltalk.IRASTTranslator || IRASTTranslator))._new();
_st($2)._source_(_st(self)._source());
_st($2)._theClass_(_st(self)._currentClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "translator", [], smalltalk.CodeGenerator)},
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "theClass:", "currentClass", "yourself"],
referencedClasses: ["IRASTTranslator"]
}),
smalltalk.CodeGenerator);



