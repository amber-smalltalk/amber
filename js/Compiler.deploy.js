smalltalk.addPackage('Compiler', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Compiler');


smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler');


smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler');


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler');


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler');


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler');


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler');


smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler');


smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler');


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Compiler');


smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Compiler');


smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler');


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler');


smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler');


smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler');


smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler');


smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['theClass', 'source', 'selector', 'classReferences', 'messageSends', 'superSends', 'arguments', 'internalVariables'], 'Compiler');


smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler');


smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler');


smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler');


smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler');


smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler');


smalltalk.addClass('IRTempDeclaration', smalltalk.IRScopedInstruction, ['name'], 'Compiler');


smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler');


smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler');


smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler');


smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler');


smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler');


smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler');


smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler');


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler');


smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler');


smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler');


smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler');


smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler');


smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler');


smalltalk.addClass('Importer', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler');


smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler');


smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler');


smalltalk.addClass('Node', smalltalk.Object, ['position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler');


smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');


smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler');
smalltalk.addMethod(
"_inlined",
smalltalk.method({
selector: "inlined",
fn: function () {
var self=this;
return (($receiver = self['@inlined']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_inlined_",
smalltalk.method({
selector: "inlined:",
fn: function (aBoolean) {
var self=this;
(self['@inlined']=aBoolean);
return self;}
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');


smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler');


smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler');


smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');


smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends', 'superSends'], 'Compiler');


smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler');


smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler');


smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler');


smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');


smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');


smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler');


smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');


smalltalk.addClass('VerbatimNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitVerbatimNode_", [self]);
return self;}
}),
smalltalk.VerbatimNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
var self=this;
return self['@value'];
return self;}
}),
smalltalk.VerbatimNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject) {
var self=this;
(self['@value']=anObject);
return self;}
}),
smalltalk.VerbatimNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
"_visitVerbatimNode_",
smalltalk.method({
selector: "visitVerbatimNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler');


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler');


smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler');


smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler');


smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler');


smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler');
smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
fn: function (aClassName, receiver) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((($receiver = ", "__comma", [receiver]), "__comma", [").klass === smalltalk."]), "__comma", [aClassName]), "__comma", [") ? "])]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
var self=this;
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.FunCodeGenerator.superclass || nil);
(self['@stream']=smalltalk.send("", "_writeStream", []));
(self['@unknownVariables']=[]);
(self['@tempVariables']=[]);
(self['@argVariables']=[]);
(self['@messageSends']=[]);
(self['@classReferenced']=[]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
fn: function (aSelector, receiver, aCollection) {
var self=this;
var inlined=nil;
(inlined=false);
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil)"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["($receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["(! $receiver ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["())"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver <"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver <"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver <="]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver <="]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver >"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver >"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver >="]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver >="]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["+"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver +"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver +"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["-"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver -"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver -"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["*"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver *"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver *"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["/"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver /"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", ["$receiver /"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));
return inlined;
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
fn: function (aSelector, anObject, aCollection) {
var self=this;
var inlined=nil;
(inlined=false);
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {"]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()}})()"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while("]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){while(!"]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()) {}})()"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["+"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" + "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" + "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" + "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" + "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["-"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" - "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" - "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" - "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" - "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["*"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" * "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" * "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" * "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" * "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["/"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" / "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" / "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" / "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" / "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" < "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" < "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" < "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" < "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" <= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" <= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" <= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" <= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" > "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" > "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" > "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" > "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" >= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" >= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" >= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [" >= "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : $receiver"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : $receiver"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : $receiver"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : $receiver"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") != nil && $receiver != undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") != nil && $receiver != undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") != nil && $receiver != undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") != nil && $receiver != undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : nil"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["(($receiver = "]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [") == nil || $receiver == undefined) ? "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["() : "]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", ["()"]);return (inlined=true);})]));})]));
return inlined;
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
fn: function (aNode, aClass) {
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
fn: function (aSelector, aReceiver, aCollection, aBoolean) {
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){var tmp=nil;
(tmp=self['@stream']);smalltalk.send(str, "_nextPutAll_", ["smalltalk.send("]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", \x22", "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", ["\x22, ["])]);(self['@stream']=str);smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);(self['@stream']=tmp);smalltalk.send(str, "_nextPutAll_", ["]"]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(self, "_currentClass", [])])]), "__comma", [".superclass || nil"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(self, "_currentClass", [])])]), "__comma", [".superclass || nil"])]);})]));return smalltalk.send(str, "_nextPutAll_", [")"]);})]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode) {
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["("]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["="]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [")"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function("]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["){"]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode) {
var self=this;
var index=nil;
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return nil;"]);})() : (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);(index=(0));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return nil;"]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);(index=(0));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);})]);})]));
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode) {
var self=this;
var index=nil;
(index=(0));
((($receiver = smalltalk.send(self['@tempVariables'], "_includes_", ["$rec"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function($rec){"]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_value_", ["$rec"])]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})("]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [")"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [")"])]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["["]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["])"]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
fn: function (aFailure) {
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;}
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);
return self;}
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


smalltalk.addClass('ImpCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables', 'mutables', 'target', 'lazyVars', 'realVarNames'], 'Compiler');
smalltalk.addMethod(
"_aboutToModifyState",
smalltalk.method({
selector: "aboutToModifyState",
fn: function (){
var self=this;
var list=nil;
var old=nil;
(list=self['@mutables']);
(self['@mutables']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(old=smalltalk.send(self, "_switchTarget_", [nil]));
smalltalk.send(list, "_do_", [(function(each){var value=nil;
smalltalk.send(self, "_switchTarget_", [each]);return smalltalk.send(self, "_realAssign_", [smalltalk.send(self['@lazyVars'], "_at_", [each])]);})]);
smalltalk.send(self, "_switchTarget_", [old]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean) {
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["assertion failed"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["assertion failed"]);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
fn: function (aClassName, receiver) {
var self=this;
smalltalk.send(self, "_prvCheckClass_for_", [aClassName, receiver]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["{"]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_includeIf_",
smalltalk.method({
selector: "checkClass:for:includeIf:",
fn: function (aClassName, receiver, aBoolean){
var self=this;
smalltalk.send(self, "_prvCheckClass_for_", [aClassName, receiver]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "if((";})() : (function(){return "if(!(";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "if((";}), (function(){return "if(!(";})])), "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [")) {"])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
var self=this;
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_ifValueWanted_",
smalltalk.method({
selector: "ifValueWanted:",
fn: function (aBlock){
var self=this;
smalltalk.send(self['@target'], "_ifNotNil_", [aBlock]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.ImpCodeGenerator.superclass || nil);
(self['@stream']=smalltalk.send("", "_writeStream", []));
(self['@unknownVariables']=[]);
(self['@tempVariables']=[]);
(self['@argVariables']=[]);
(self['@messageSends']=[]);
(self['@classReferenced']=[]);
(self['@mutables']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(self['@realVarNames']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(self['@lazyVars']=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
(self['@target']=nil);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
fn: function (aSelector, receiver, aCollection){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]);return (function(){throw $early=[true]})();})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, true]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_includeIf_", ["Boolean", receiver, false]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (function(){throw $early=[true]})();})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["<"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["<"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["<="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["<="]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["<="]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [">"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [">"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", [">="])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [">="]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [">="]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["+"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["+"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["+"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["-"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["-"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["-"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["*"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["*"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["*"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["/"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["/"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var operand=nil;
(operand=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(aCollection, "_first", [])]));smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", ["/"]), "__comma", [operand]), "__comma", [")"])]);})]);return (function(){throw $early=[[smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [operand])]]})();})]));
return nil;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
fn: function (aSelector, anObject, aCollection){
var self=this;
var inlined=nil;
(inlined=false);
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if (!(", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if (!(", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if (!(", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if (!(", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if ((", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if ((", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if ((", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var old=nil;
smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["for(;;){", "if ((", anObject, ")) {"]);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("break}", "__comma", [smalltalk.send(self, "_mylf", [])])]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", []), nil]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while((", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while((", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while((", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while((", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while(!(", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while(!(", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while(!(", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_prvWhileConditionStatement_pre_condition_post_", ["do{", "}while(!(", anObject, smalltalk.send("));", "__comma", [smalltalk.send(self, "_mylf", [])])]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(["+", "-", "*", "/", "<", "<=", ">=", ">"], "_includes_", [aSelector])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_prvInlineNumberOperator_on_and_", [aSelector, anObject, smalltalk.send(aCollection, "_first", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_prvInlineNumberOperator_on_and_", [aSelector, anObject, smalltalk.send(aCollection, "_first", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [rcv]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
smalltalk.send(self, "_aboutToModifyState", []);(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_makeTargetRealVariable", []);smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null) {"])]);smalltalk.send(self, "_prvPutAndElse_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_nodes", []), "_first", [])]);})]);smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_second", []), "_nodes", []), "_first", [])]);})]);return (inlined=true);})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["isNil"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null)"])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((", "__comma", [rcv]), "__comma", [") === nil || ("]), "__comma", [rcv]), "__comma", [") == null)"])]);return (inlined=true);})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["notNil"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null)"])]);return (inlined=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
(rcv=smalltalk.send(self, "_isolatedUse_", [anObject]));((($receiver = smalltalk.send(rcv, "__eq", ["super"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (rcv="self");})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (rcv="self");})]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((", "__comma", [rcv]), "__comma", [") !== nil && ("]), "__comma", [rcv]), "__comma", [") != null)"])]);return (inlined=true);})]));
return inlined;
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
fn: function (aNode, aClass) {
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isolated_",
smalltalk.method({
selector: "isolated:",
fn: function (node){
var self=this;
return smalltalk.send(self, "_visit_targetBeing_", [node, smalltalk.send(self, "_nextLazyvarName", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isolatedUse_",
smalltalk.method({
selector: "isolatedUse:",
fn: function (node){
var self=this;
var old=nil;
(old=smalltalk.send(self, "_switchTarget_", [smalltalk.send(self, "_nextLazyvarName", [])]));
smalltalk.send(self, "_visit_", [node]);
return smalltalk.send(self, "_useValueNamed_", [smalltalk.send(self, "_switchTarget_", [old])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssign_dependsOnState_",
smalltalk.method({
selector: "lazyAssign:dependsOnState:",
fn: function (aString, aBoolean){
var self=this;
((($receiver = smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));})() : (function(){return smalltalk.send(self, "_realAssign_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));}), (function(){return smalltalk.send(self, "_realAssign_", [aString]);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignExpression_",
smalltalk.method({
selector: "lazyAssignExpression:",
fn: function (aString){
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, true]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignValue_",
smalltalk.method({
selector: "lazyAssignValue:",
fn: function (aString){
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, false]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_makeTargetRealVariable",
smalltalk.method({
selector: "makeTargetRealVariable",
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@lazyVars'], "_removeKey_", [self['@target']]);smalltalk.send(self['@lazyVars'], "_at_put_", [smalltalk.send("assigned ", "__comma", [self['@target']]), nil]);return smalltalk.send(self['@realVarNames'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@lazyVars'], "_removeKey_", [self['@target']]);smalltalk.send(self['@lazyVars'], "_at_put_", [smalltalk.send("assigned ", "__comma", [self['@target']]), nil]);return smalltalk.send(self['@realVarNames'], "_add_", [self['@target']]);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_mylf",
smalltalk.method({
selector: "mylf",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.String || String), "_lf", []), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Array || Array), "_new_", [((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]))]), "_join_", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_nextLazyvarName",
smalltalk.method({
selector: "nextLazyvarName",
fn: function (){
var self=this;
var name=nil;
(name=smalltalk.send("$", "__comma", [smalltalk.send(smalltalk.send(self['@lazyVars'], "_size", []), "_asString", [])]));
smalltalk.send(self['@lazyVars'], "_at_put_", [name, name]);
return name;
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_nilIfValueWanted",
smalltalk.method({
selector: "nilIfValueWanted",
fn: function (){
var self=this;
(($receiver = self['@target']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_lazyAssignValue_", ["nil"]);})() : nil;
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvCheckClass_for_",
smalltalk.method({
selector: "prvCheckClass:for:",
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self, "_makeTargetRealVariable", []);
smalltalk.send(self, "_aboutToModifyState", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [").klass === smalltalk."]), "__comma", [aClassName]), "__comma", [") "])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvInlineNumberOperator_on_and_",
smalltalk.method({
selector: "prvInlineNumberOperator:on:and:",
fn: function (aSelector, receiverNode, operandNode){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(aSelector, "__eq", [aSelector])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [receiverNode, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
var operand=nil;
(rcv=smalltalk.send(self, "_isolated_", [receiverNode]));(operand=smalltalk.send(self, "_isolated_", [operandNode]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_useValueNamed_", [rcv]), "__comma", [aSelector]), "__comma", [smalltalk.send(self, "_useValueNamed_", [operand])])]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
var operand=nil;
(rcv=smalltalk.send(self, "_isolated_", [receiverNode]));(operand=smalltalk.send(self, "_isolated_", [operandNode]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_useValueNamed_", [rcv]), "__comma", [aSelector]), "__comma", [smalltalk.send(self, "_useValueNamed_", [operand])])]);return (function(){throw $early=[true]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [receiverNode, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var rcv=nil;
var operand=nil;
(rcv=smalltalk.send(self, "_isolated_", [receiverNode]));(operand=smalltalk.send(self, "_isolated_", [operandNode]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_useValueNamed_", [rcv]), "__comma", [aSelector]), "__comma", [smalltalk.send(self, "_useValueNamed_", [operand])])]);return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var rcv=nil;
var operand=nil;
(rcv=smalltalk.send(self, "_isolated_", [receiverNode]));(operand=smalltalk.send(self, "_isolated_", [operandNode]));smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_useValueNamed_", [rcv]), "__comma", [aSelector]), "__comma", [smalltalk.send(self, "_useValueNamed_", [operand])])]);return (function(){throw $early=[true]})();})]));})]));
return false;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvPutAndClose_",
smalltalk.method({
selector: "prvPutAndClose:",
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("}", "__comma", [smalltalk.send(self, "_mylf", [])])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvPutAndElse_",
smalltalk.method({
selector: "prvPutAndElse:",
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["} else {"]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvWhileConditionStatement_pre_condition_post_",
smalltalk.method({
selector: "prvWhileConditionStatement:pre:condition:post:",
fn: function (stmtString, preString, anObject, postString){
var self=this;
var x=nil;
smalltalk.send(self['@stream'], "_nextPutAll_", [stmtString]);
(x=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(smalltalk.send(anObject, "_nodes", []), "_first", [])]));
smalltalk.send(x, "_ifEmpty_", [(function(){return (x="\x22should not reach - receiver includes ^\x22");})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(preString, "__comma", [x]), "__comma", [postString])]);
smalltalk.send(self, "_nilIfValueWanted", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_putTemps_",
smalltalk.method({
selector: "putTemps:",
fn: function (temps) {
var self=this;
smalltalk.send(temps, "_ifNotEmpty_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["var "]);smalltalk.send(temps, "_do_separatedBy_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(temp, "__comma", ["=nil"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(";", "__comma", [smalltalk.send(self, "_mylf", [])])]);})]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_realAssign_",
smalltalk.method({
selector: "realAssign:",
fn: function (aString){
var self=this;
var closer=nil;
smalltalk.send(aString, "_ifNotEmpty_", [(function(){smalltalk.send(self, "_aboutToModifyState", []);(closer="");smalltalk.send(self, "_ifValueWanted_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [((($receiver = smalltalk.send(self['@target'], "__eq", ["^"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "return ";})() : (function(){return ((($receiver = smalltalk.send(self['@target'], "__eq", ["!"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(closer="]");return "throw $early=[";})() : (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(closer="]");return "throw $early=[";}), (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "return ";}), (function(){return ((($receiver = smalltalk.send(self['@target'], "__eq", ["!"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(closer="]");return "throw $early=[";})() : (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(closer="]");return "throw $early=[";}), (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})]));})]))]);})]);smalltalk.send(self, "_makeTargetRealVariable", []);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(aString, "__comma", [closer]), "__comma", [";"]), "__comma", [smalltalk.send(self, "_mylf", [])])]);})]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
var args=nil;
(args=smalltalk.send(self, "_isolated_", [(function($rec){smalltalk.send($rec, "_nodes_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.DynamicArrayNode || DynamicArrayNode), "_new", []))]));
smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){smalltalk.send(str, "_nextPutAll_", ["smalltalk.send("]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [aReceiver])]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", \x22", "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", ["\x22, "])]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [args])]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]));return smalltalk.send(str, "_nextPutAll_", [")"]);})])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_sequenceOfNodes_temps_",
smalltalk.method({
selector: "sequenceOfNodes:temps:",
fn: function (nodes, temps){
var self=this;
((($receiver = smalltalk.send(nodes, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){var old=nil;
var index=nil;
smalltalk.send(self, "_putTemps_", [temps]);(old=smalltalk.send(self, "_switchTarget_", [nil]));(index=(0));return smalltalk.send(nodes, "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(nodes, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchTarget_", [old]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_switchTarget_", [old]);})]));return smalltalk.send(self, "_visit_", [each]);})]);})() : (function(){return smalltalk.send(self, "_nilIfValueWanted", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){var old=nil;
var index=nil;
smalltalk.send(self, "_putTemps_", [temps]);(old=smalltalk.send(self, "_switchTarget_", [nil]));(index=(0));return smalltalk.send(nodes, "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(nodes, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchTarget_", [old]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_switchTarget_", [old]);})]));return smalltalk.send(self, "_visit_", [each]);})]);}), (function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_switchTarget_",
smalltalk.method({
selector: "switchTarget:",
fn: function (aString){
var self=this;
var old=nil;
(old=self['@target']);
(self['@target']=aString);
return old;
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function () {
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_useValueNamed_",
smalltalk.method({
selector: "useValueNamed:",
fn: function (key){
var self=this;
var $early={};
try{var val=nil;
((($receiver = smalltalk.send(self['@realVarNames'], "_includes_", [key])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[key]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[key]})();})]));
smalltalk.send(self['@mutables'], "_remove_", [key]);
return smalltalk.send(self['@lazyVars'], "_at_", [key]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode) {
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visit_targetBeing_",
smalltalk.method({
selector: "visit:targetBeing:",
fn: function (aNode, aString){
var self=this;
var old=nil;
(old=smalltalk.send(self, "_switchTarget_", [aString]));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self, "_switchTarget_", [old]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
var olds=nil;
var oldt=nil;
(olds=self['@stream']);
(self['@stream']=smalltalk.send("", "_writeStream", []));
(oldt=smalltalk.send(self, "_switchTarget_", [smalltalk.send(self, "_nextLazyvarName", [])]));
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@lazyVars'], "_at_", [self['@target']]), "_~_eq", [self['@target']])]);
smalltalk.send(self, "_switchTarget_", [smalltalk.send(self, "_useValueNamed_", [smalltalk.send(self, "_switchTarget_", [nil])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']]), "_not", [])]);
(self['@stream']=olds);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
(olds=smalltalk.send(self, "_switchTarget_", [oldt]));
smalltalk.send(self, "_ifValueWanted_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [olds]);})]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
var oldt=nil;
var olds=nil;
var oldm=nil;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", []), "__eq", [(1)])]);
(oldt=smalltalk.send(self, "_switchTarget_", ["^"]));
(olds=self['@stream']);
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function("]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["){"]);
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(oldm=self['@mutables']);
(self['@mutables']=smalltalk.send((smalltalk.Set || Set), "_new", []));
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(self['@mutables'], "_isEmpty", [])]);
(self['@mutables']=oldm);
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
smalltalk.send(self, "_switchTarget_", [oldt]);
(oldt=smalltalk.send(self['@stream'], "_contents", []));
(self['@stream']=olds);
smalltalk.send(self, "_lazyAssignExpression_", [oldt]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
var rcv=nil;
(rcv=smalltalk.send(self, "_isolated_", [smalltalk.send(aNode, "_receiver", [])]));
smalltalk.send(self, "_aboutToModifyState", []);
(rcv=smalltalk.send(self, "_useValueNamed_", [rcv]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [rcv])]);})]);
smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), []]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [")"])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
var args=nil;
(args=smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_collect_", [(function(node){return smalltalk.send(self, "_isolated_", [node]);})]));
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){smalltalk.send(str, "_nextPutAll_", ["["]);smalltalk.send(args, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [each])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [", "]);})]);return smalltalk.send(str, "_nextPutAll_", ["]"]);})])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
var elements=nil;
(elements=smalltalk.send(self, "_isolated_", [(function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(aNode, "_nodes", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.DynamicArrayNode || DynamicArrayNode), "_new", []))]));
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send("smalltalk.HashedCollection._fromPairs_(", "__comma", [smalltalk.send(self, "_useValueNamed_", [elements])]), "__comma", [")"])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
fn: function (aFailure) {
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self, "_aboutToModifyState", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(";", "__comma", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [">>", ">"])]), "__comma", [";"]), "__comma", [smalltalk.send(self, "_mylf", [])])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
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
(self['@lazyVars']=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
(self['@mutables']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(self['@realVarNames']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: \x22", "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", ["\x22,"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(self, "_source", []), "_asJavascript", [])]), "__comma", [","])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", ["fn: function("]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@argVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("){var self=this;", "__comma", [smalltalk.send(self, "_mylf", [])])]);
(str=self['@stream']);
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_switchTarget_", [nil]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", []), "__eq", [(1)])]);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", [])]);
smalltalk.send(self['@realVarNames'], "_ifNotEmpty_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send("var ", "__comma", [smalltalk.send(smalltalk.send(self['@realVarNames'], "_asArray", []), "_join_", [","])]), "__comma", [";"]), "__comma", [smalltalk.send(self, "_mylf", [])])]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send("var $early={}; try{", "__comma", [smalltalk.send(self, "_mylf", [])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send("var $early={}; try{", "__comma", [smalltalk.send(self, "_mylf", [])])]);})]));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
(self['@stream']=str);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), "_nodes", []), "_notEmpty", []), "_and_", [(function(){var checker=nil;
(checker=smalltalk.send((smalltalk.ReturnNodeChecker || ReturnNodeChecker), "_new", []));smalltalk.send(checker, "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), "_nodes", []), "_last", [])]);return smalltalk.send(checker, "_wasReturnNode", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_switchTarget_", ["^"]);smalltalk.send(self, "_lazyAssignValue_", ["self"]);return smalltalk.send(self, "_switchTarget_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_switchTarget_", ["^"]);smalltalk.send(self, "_lazyAssignValue_", ["self"]);return smalltalk.send(self, "_switchTarget_", [nil]);})]));
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["} catch(e) {if(e===$early) return e[0]; throw e}"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["} catch(e) {if(e===$early) return e[0]; throw e}"]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(",", "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(self['@argVariables'], "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["referencedClasses: ["]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
smalltalk.send(self, "_assert_", [smalltalk.send(self['@mutables'], "_isEmpty", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", []), "__eq", [(1)])]);
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@earlyReturn']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@earlyReturn']=true);})]));
smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), ((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "!";})() : (function(){return "^";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "!";}), (function(){return "^";})]))]);
smalltalk.send(self, "_lazyAssignValue_", [""]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
var $early={};
try{var receiver=nil;
var superSend=nil;
var rcv=nil;
((($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]));
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[self]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[self]})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[self]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[self]})();})]));})]));
(rcv=smalltalk.send(self, "_isolated_", [smalltalk.send(aNode, "_receiver", [])]));
(superSend=smalltalk.send(smalltalk.send(self['@lazyVars'], "_at_ifAbsent_", [rcv, (function(){return nil;})]), "__eq", ["super"]));
((($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@mutables'], "_remove_", [rcv]);return smalltalk.send(self['@lazyVars'], "_at_put_", [rcv, "self"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@mutables'], "_remove_", [rcv]);return smalltalk.send(self['@lazyVars'], "_at_put_", [rcv, "self"]);})]));
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var inline=nil;
(inline=smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), rcv, smalltalk.send(aNode, "_arguments", [])]));return (($receiver = inline) != nil && $receiver != undefined) ? (function(){var args=nil;
(args=((($receiver = smalltalk.send(inline, "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aNode, "_arguments", []);})() : (function(){return inline;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aNode, "_arguments", []);}), (function(){return inline;})])));smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), rcv, args, superSend]);})]);return (function(){throw $early=[self]})();})() : nil;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var inline=nil;
(inline=smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), rcv, smalltalk.send(aNode, "_arguments", [])]));return (($receiver = inline) != nil && $receiver != undefined) ? (function(){var args=nil;
(args=((($receiver = smalltalk.send(inline, "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aNode, "_arguments", []);})() : (function(){return inline;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aNode, "_arguments", []);}), (function(){return inline;})])));smalltalk.send(self, "_prvPutAndClose_", [(function(){return smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), rcv, args, superSend]);})]);return (function(){throw $early=[self]})();})() : nil;})]));
smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), rcv, smalltalk.send(aNode, "_arguments", []), superSend]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);})() : (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);}), (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})]));})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitVerbatimNode_",
smalltalk.method({
selector: "visitVerbatimNode:",
fn: function (aNode){
var self=this;
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(aNode, "_value", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);


smalltalk.ImpCodeGenerator.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
fn: function () {
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;}
}),
smalltalk.ImpCodeGenerator.klass);

smalltalk.addMethod(
"_performOptimizations_",
smalltalk.method({
selector: "performOptimizations:",
fn: function (aBoolean) {
var self=this;
(self['@performOptimizations']=aBoolean);
return self;}
}),
smalltalk.ImpCodeGenerator.klass);


smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler');


smalltalk.addClass('ReturnNodeChecker', smalltalk.NodeVisitor, ['wasReturnNode'], 'Compiler');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
(self['@wasReturnNode']=false);
return self;}
}),
smalltalk.ReturnNodeChecker);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
var self=this;
(self['@wasReturnNode']=true);
return self;}
}),
smalltalk.ReturnNodeChecker);

smalltalk.addMethod(
"_wasReturnNode",
smalltalk.method({
selector: "wasReturnNode",
fn: function () {
var self=this;
return self['@wasReturnNode'];
return self;}
}),
smalltalk.ReturnNodeChecker);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler');


smalltalk.addClass('PackageLoader', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler');


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler');


smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler');


smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anIRInstruction)._appendBlock_(self);
return self}, self, "appendToInstruction:", [anIRInstruction], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$6,$4,$2;
var $early={};
try {
$ctx1.locals.char=nil;
$ctx1.locals.result=nil;
$ctx1.locals.chunk=nil;
$ctx1.locals.result=_st("")._writeStream();
$1=(function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.char=_st(self["@stream"])._next();
$ctx1.locals.char;
return _st($ctx1.locals.char)._notNil();
})});
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st($ctx1.locals.char).__eq("!");
$4=(function(){
return smalltalk.withContext(function($ctx3) { $5=_st(_st(self["@stream"])._peek()).__eq("!");
if(smalltalk.assert($5)){
return _st(self["@stream"])._next();
} else {
$6=_st(_st($ctx1.locals.result)._contents())._trimBoth();
throw $early=[$6];
};
})});
_st($3)._ifTrue_($4);
return _st($ctx1.locals.result)._nextPut_($ctx1.locals.char);
})});
_st($1)._whileTrue_($2);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "nextChunk", [], smalltalk.ChunkParser)}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.ChunkParser)}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._stream_(aStream);
return $1;
}, self, "on:", [aStream], smalltalk.ChunkParser.klass)}
}),
smalltalk.ChunkParser.klass);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._reservedWords())._includes_(self);
if(smalltalk.assert($2)){
$1=_st(self).__comma("_");
} else {
$1=self;
};
return $1;
}, self, "asVariableName", [], smalltalk.String)}
}),
smalltalk.String);

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
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.locals.generator=nil;
$ctx1.locals.result=nil;
$ctx1.locals.generator=_st(_st(self)._codeGeneratorClass())._new();
$1=$ctx1.locals.generator;
_st($1)._source_(_st(self)._source());
$2=_st($1)._currentClass_(_st(self)._currentClass());
$ctx1.locals.result=_st($ctx1.locals.generator)._compileNode_(aNode);
_st(self)._unknownVariables_([]);
$3=$ctx1.locals.result;
return $3;
}, self, "compileNode:", [aNode], smalltalk.Compiler)}
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
return self}, self, "eval:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.result=nil;
_st((smalltalk.DoIt || DoIt))._addCompiledMethod_(_st(self)._eval_(_st(self)._compileExpression_(aString)));
$ctx1.locals.result=_st(_st((smalltalk.DoIt || DoIt))._new())._doIt();
_st((smalltalk.DoIt || DoIt))._removeCompiledMethod_(_st(_st((smalltalk.DoIt || DoIt))._methodDictionary())._at_("doIt"));
$1=$ctx1.locals.result;
return $1;
}, self, "evaluateExpression:", [aString], smalltalk.Compiler)}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString,aBehavior,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.compiled=nil;
$ctx1.locals.compiled=_st(self)._eval_(_st(self)._compile_forClass_(aString,aBehavior));
_st($ctx1.locals.compiled)._category_(anotherString);
_st(aBehavior)._addCompiledMethod_($ctx1.locals.compiled);
_st(self)._setupClass_(aBehavior);
$1=$ctx1.locals.compiled;
return $1;
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
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=(smalltalk.Transcript || Transcript);
_st($1)._show_(each);
$2=_st($1)._cr();
$2;
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
return self}, self, "setupClass:", [aClass], smalltalk.Compiler)}
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@unknownVariables"];
return $1;
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

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(" Invalid assignment to variable: ").__comma(_st(self)._variableName());
return $1;
}, self, "messageText", [], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.InvalidAssignmentError)}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Variable shadowing error: ").__comma(_st(self)._variableName())).__comma(" is already defined");
return $1;
}, self, "messageText", [], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.ShadowingVariableError)}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.UnknownVariableError)}
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.UnknownVariableError)}
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$1;
$2=_st(aClass)._isMetaclass();
$3=(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(aClass)._instanceClass())._name()).__comma(".klass");
})});
$4=(function(){
return smalltalk.withContext(function($ctx2) { $5=_st(aClass)._isNil();
if(smalltalk.assert($5)){
return "nil";
} else {
return _st(aClass)._name();
};
})});
$1=_st($2)._ifTrue_ifFalse_($3,$4);
return $1;
}, self, "classNameFor:", [aClass], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages())._do_((function(pkg){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(_st(self)._exportPackage_(_st(pkg)._name()));
})}));
})}));
return $1;
}, self, "exportAll", [], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { _st(self)._exportDefinitionOf_on_(aClass,stream);
_st(self)._exportMethodsOf_on_(aClass,stream);
_st(self)._exportMetaDefinitionOf_on_(aClass,stream);
return _st(self)._exportMethodsOf_on_(_st(aClass)._class(),stream);
})}));
return $1;
}, self, "exportClass:", [aClass], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(", ");
})}));
$3=aStream;
_st($3)._nextPutAll_("], '");
_st($3)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$4=_st($3)._nextPutAll_(");");
$5=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($5)){
$6=aStream;
_st($6)._lf();
_st($6)._nextPutAll_("smalltalk.");
_st($6)._nextPutAll_(_st(self)._classNameFor_(aClass));
_st($6)._nextPutAll_(".comment=");
$7=_st($6)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$7;
};
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._class())));
$3=_st($2)._nextPutAll_(".iVarNames = [");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(",");
})}));
_st(aStream)._nextPutAll_(_st("];").__comma(_st((smalltalk.String || String))._lf()));
};
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("category: '").__comma(_st(aMethod)._category())).__comma("',"));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("args: ").__comma(_st(_st(aMethod)._arguments())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("source: ").__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("messageSends: ").__comma(_st(_st(aMethod)._messageSends())._asJavascript())).__comma(","));
_st($1)._lf();
$2=_st($1)._nextPutAll_(_st("referencedClasses: ").__comma(_st(_st(aMethod)._referencedClasses())._asJavascript()));
$3=aStream;
_st($3)._lf();
_st($3)._nextPutAll_("}),");
_st($3)._lf();
_st($3)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st($3)._nextPutAll_(");");
_st($3)._lf();
$4=_st($3)._lf();
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})}));
$2=(function(each){
return smalltalk.withContext(function($ctx2) { $3=_st(_st(each)._category())._match_("^\x5c*");
if(! smalltalk.assert($3)){
return _st(self)._exportMethod_of_on_(each,aClass,aStream);
};
})});
_st($1)._do_($2);
_st(aStream)._lf();
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.package=nil;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.package_=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packageAt_(packageName);
$ctx1.locals.package_;
_st(self)._exportPackageDefinitionOf_on_($ctx1.locals.package_,stream);
_st(_st(_st($ctx1.locals.package_)._sortedClasses())._asSet())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(_st(self)._exportClass_(each));
})}));
return _st(self)._exportPackageExtensionsOf_on_($ctx1.locals.package_,stream);
})}));
return $1;
}, self, "exportPackage:", [packageName], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
$2=_st($1)._nextPutAll_(_st(_st(_st(_st("'").__comma(_st(package_)._name())).__comma("', ")).__comma(_st(package_)._propertiesAsJSON())).__comma(");"));
_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package_,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$7,$6,$4,$2;
$ctx1.locals.name=nil;
$ctx1.locals.name=_st(package_)._name();
$1=_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes());
$2=(function(each){
return smalltalk.withContext(function($ctx2) { $3=[each,_st(each)._class()];
$4=(function(aClass){
return smalltalk.withContext(function($ctx3) { $5=_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) { return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})}));
$6=(function(method){
return smalltalk.withContext(function($ctx4) { $7=_st(_st(method)._category())._match_(_st("^\x5c*").__comma($ctx1.locals.name));
if(smalltalk.assert($7)){
return _st(self)._exportMethod_of_on_(method,aClass,aStream);
};
})});
return _st($5)._do_($6);
})});
return _st($3)._do_($4);
})});
_st($1)._do_($2);
return self}, self, "exportPackageExtensionsOf:on:", [package_,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, self, "chunkEscape:", [aString], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$1;
$2=_st(aClass)._isMetaclass();
$3=(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(aClass)._instanceClass())._name()).__comma(" class");
})});
$4=(function(){
return smalltalk.withContext(function($ctx2) { $5=_st(aClass)._isNil();
if(smalltalk.assert($5)){
return "nil";
} else {
return _st(aClass)._name();
};
})});
$1=_st($2)._ifTrue_ifFalse_($3,$4);
return $1;
}, self, "classNameFor:", [aClass], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._superclass()));
_st($1)._nextPutAll_(_st(" subclass: #").__comma(_st(self)._classNameFor_(aClass)));
_st($1)._lf();
$2=_st($1)._nextPutAll_("\x09instanceVariableNames: '");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(" ");
})}));
$3=aStream;
_st($3)._nextPutAll_("'");
_st($3)._lf();
_st($3)._nextPutAll_(_st(_st("\x09package: '").__comma(_st(aClass)._category())).__comma("'!"));
$4=_st($3)._lf();
$5=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($5)){
$6=aStream;
_st($6)._nextPutAll_(_st(_st("!").__comma(_st(self)._classNameFor_(aClass))).__comma(" commentStamp!"));
_st($6)._lf();
_st($6)._nextPutAll_(_st(_st(self)._chunkEscape_(_st(aClass)._comment())).__comma("!"));
$7=_st($6)._lf();
$7;
};
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._class()));
$3=_st($2)._nextPutAll_(" instanceVariableNames: '");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(" ");
})}));
$4=aStream;
_st($4)._nextPutAll_("'!");
_st($4)._lf();
$5=_st($4)._lf();
$5;
};
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._lf();
_st($1)._lf();
_st($1)._nextPutAll_(_st(self)._chunkEscape_(_st(aMethod)._source()));
_st($1)._lf();
$2=_st($1)._nextPutAll_("!");
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
fn: function (methods,category,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_(_st("!").__comma(_st(self)._classNameFor_(aClass)));
$2=_st($1)._nextPutAll_(_st(_st(" methodsFor: '").__comma(category)).__comma("'!"));
_st(_st(methods)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._exportMethod_of_on_(each,aClass,aStream);
})}));
$3=aStream;
_st($3)._nextPutAll_(" !");
_st($3)._lf();
$4=_st($3)._lf();
return self}, self, "exportMethods:category:of:on:", [methods,category,aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$ctx1.locals.map=nil;
$ctx1.locals.map=_st((smalltalk.Dictionary || Dictionary))._new();
$1=aClass;
$2=(function(category,methods){
return smalltalk.withContext(function($ctx2) { $3=_st(category)._match_("^\x5c*");
if(! smalltalk.assert($3)){
return _st($ctx1.locals.map)._at_put_(category,methods);
};
})});
_st($1)._protocolsDo_($2);
_st(_st(_st($ctx1.locals.map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(a).__lt_eq(b);
})})))._do_((function(category){
return smalltalk.withContext(function($ctx2) { $ctx2.locals.methods=nil;
$ctx2.locals.methods=_st($ctx1.locals.map)._at_(category);
$ctx2.locals.methods;
return _st(self)._exportMethods_category_of_on_($ctx2.locals.methods,category,aClass,aStream);
})}));
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(_st(_st("Smalltalk current createPackage: '").__comma(_st(package_)._name())).__comma("' properties: ")).__comma(_st(_st(package_)._properties())._storeString())).__comma("!"));
$2=_st($1)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package_,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$7,$6,$4,$2;
$ctx1.locals.name=nil;
$ctx1.locals.map=nil;
$ctx1.locals.name=_st(package_)._name();
$1=_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes());
$2=(function(each){
return smalltalk.withContext(function($ctx2) { $3=[each,_st(each)._class()];
$4=(function(aClass){
return smalltalk.withContext(function($ctx3) { $ctx1.locals.map=_st((smalltalk.Dictionary || Dictionary))._new();
$ctx1.locals.map;
$5=aClass;
$6=(function(category,methods){
return smalltalk.withContext(function($ctx4) { $7=_st(category)._match_(_st("^\x5c*").__comma($ctx1.locals.name));
if(smalltalk.assert($7)){
return _st($ctx1.locals.map)._at_put_(category,methods);
};
})});
_st($5)._protocolsDo_($6);
return _st(_st(_st($ctx1.locals.map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) { return _st(a).__lt_eq(b);
})})))._do_((function(category){
return smalltalk.withContext(function($ctx4) { $ctx4.locals.methods=nil;
$ctx4.locals.methods=_st($ctx1.locals.map)._at_(category);
$ctx4.locals.methods;
return _st(self)._exportMethods_category_of_on_($ctx4.locals.methods,category,aClass,aStream);
})}));
})});
return _st($3)._do_($4);
})});
_st($1)._do_($2);
return self}, self, "exportPackageExtensionsOf:on:", [package_,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(aStream)._nextPutAll_(", ");
})}));
$3=aStream;
_st($3)._nextPutAll_("], '");
_st($3)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$4=_st($3)._nextPutAll_(");");
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.StrippedExporter)}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource()));
_st($1)._lf();
_st($1)._nextPutAll_("}),");
_st($1)._lf();
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st($1)._nextPutAll_(");");
_st($1)._lf();
$2=_st($1)._lf();
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.StrippedExporter)}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInstruction_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(anObject)._parent_(self);
$1=_st(_st(self)._instructions())._add_(anObject);
return $1;
}, self, "add:", [anObject], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeAssigned", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@instructions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@instructions"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@instructions"];
} else {
$1=$2;
};
return $1;
}, self, "instructions", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClosure", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isInlined", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isLocalReturn", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isReturn", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSend", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSequence", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isTempDeclaration", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isVariable", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parent"];
return $1;
}, self, "parent", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parent"]=anIRInstruction;
return self}, self, "parent:", [anIRInstruction], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._remove_(self);
return self}, self, "remove", [], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._instructions())._remove_(anIRInstruction);
return self}, self, "remove:", [anIRInstruction], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anotherIRInstruction)._parent_(self);
_st(_st(self)._instructions())._at_put_(_st(_st(self)._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self}, self, "replace:with:", [anIRInstruction,anotherIRInstruction], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._replace_with_(self,anIRInstruction);
return self}, self, "replaceWith:", [anIRInstruction], smalltalk.IRInstruction)}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aBuilder], smalltalk.IRInstruction.klass)}
}),
smalltalk.IRInstruction.klass);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRAssignment_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRAssignment)}
}),
smalltalk.IRAssignment);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedAssignment)}
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedAssignment)}
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicArray_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRDynamicArray)}
}),
smalltalk.IRDynamicArray);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRDynamicDictionary)}
}),
smalltalk.IRDynamicDictionary);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.IRScopedInstruction)}
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, self, "scope:", [aScope], smalltalk.IRScopedInstruction)}
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRClosure_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, self, "arguments", [], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClosure", [], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRScopedInstruction.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, self, "scope:", [aScope], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._instructions())._last();
return $1;
}, self, "sequence", [], smalltalk.IRClosure)}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedClosure_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedClosure)}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedClosure)}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRMethod_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@arguments"];
return $1;
}, self, "arguments", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classReferences"];
return $1;
}, self, "classReferences", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, self, "classReferences:", [aCollection], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@internalVariables"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@internalVariables"]=_st((smalltalk.Set || Set))._new();
$1=self["@internalVariables"];
} else {
$1=$2;
};
return $1;
}, self, "internalVariables", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, self, "messageSends", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, self, "messageSends:", [aCollection], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRScopedInstruction.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, self, "scope:", [aScope], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@superSends"];
return $1;
}, self, "superSends", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, self, "superSends:", [aCollection], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.IRMethod)}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "canBeAssigned", [], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockReturn", [], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isLocalReturn", [], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isLocalReturn())._not();
return $1;
}, self, "isNonLocalReturn", [], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isReturn", [], smalltalk.IRReturn)}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRBlockReturn)}
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockReturn", [], smalltalk.IRBlockReturn)}
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedReturn)}
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedReturn)}
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedNonLocalReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedNonLocalReturn)}
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedNonLocalReturn)}
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRNonLocalReturn)}
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isLocalReturn", [], smalltalk.IRNonLocalReturn)}
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRTempDeclaration_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRTempDeclaration)}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, self, "name", [], smalltalk.IRTempDeclaration)}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, self, "name:", [aString], smalltalk.IRTempDeclaration)}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSend_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classSend"];
return $1;
}, self, "classSend", [], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classSend"]=aClass;
return self}, self, "classSend:", [aClass], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@index"];
return $1;
}, self, "index", [], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, self, "index:", [anInteger], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSend", [], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_javascriptSelector",
smalltalk.method({
selector: "javascriptSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._classSend();
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._selector())._asSelector();
} else {
$1=_st(_st(self)._selector())._asSuperSelector();
};
return $1;
}, self, "javascriptSelector", [], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.IRSend)}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitInlinedSend_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedSend)}
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedSend)}
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfFalse)}
}),
smalltalk.IRInlinedIfFalse);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfNilIfNotNil)}
}),
smalltalk.IRInlinedIfNilIfNotNil);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfTrue)}
}),
smalltalk.IRInlinedIfTrue);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfTrueIfFalse)}
}),
smalltalk.IRInlinedIfTrueIfFalse);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSequence_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRSequence)}
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSequence", [], smalltalk.IRSequence)}
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockSequence_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRBlockSequence)}
}),
smalltalk.IRBlockSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedSequence_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedSequence)}
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedSequence)}
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRValue_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRValue)}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, self, "value", [], smalltalk.IRValue)}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=aString;
return self}, self, "value:", [aString], smalltalk.IRValue)}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVariable_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRVariable)}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isVariable", [], smalltalk.IRVariable)}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variable"];
return $1;
}, self, "variable", [], smalltalk.IRVariable)}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
fn: function (aScopeVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variable"]=aScopeVariable;
return self}, self, "variable:", [aScopeVariable], smalltalk.IRVariable)}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVerbatim_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRVerbatim)}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRVerbatim)}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRVerbatim)}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse))._new(),anIRInstruction);
return $1;
}, self, "ifFalse:", [anIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._perform_withArguments_(smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]);
return $1;
}, self, "ifFalse:ifTrue:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$5,$1;
$2=_st((smalltalk.IRClosure || IRClosure))._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st((smalltalk.IRBlockSequence || IRBlockSequence))._new();
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,$5);
return $1;
}, self, "ifNil:", [anIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, self, "ifNil:ifNotNil:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$5,$1;
$2=_st((smalltalk.IRClosure || IRClosure))._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st((smalltalk.IRBlockSequence || IRBlockSequence))._new();
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),$5,anIRInstruction);
return $1;
}, self, "ifNotNil:", [anIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, self, "ifNotNil:ifNil:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue))._new(),anIRInstruction);
return $1;
}, self, "ifTrue:", [anIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, self, "ifTrue:ifFalse:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4,$6,$5,$7;
$ctx1.locals.inlinedClosure=nil;
$ctx1.locals.sequence=nil;
$ctx1.locals.statements=nil;
$ctx1.locals.inlinedClosure=_st(self)._inlinedClosure();
_st($ctx1.locals.inlinedClosure)._scope_(_st(anIRClosure)._scope());
$1=_st(anIRClosure)._instructions();
$2=(function(each){
return smalltalk.withContext(function($ctx2) { $3=_st(each)._isSequence();
if(! smalltalk.assert($3)){
return _st($ctx1.locals.inlinedClosure)._add_(each);
};
})});
_st($1)._do_($2);
$ctx1.locals.sequence=_st(self)._inlinedSequence();
_st($ctx1.locals.inlinedClosure)._add_($ctx1.locals.sequence);
$ctx1.locals.statements=_st(_st(_st(anIRClosure)._instructions())._last())._instructions();
$4=$ctx1.locals.statements;
$5=(function(){
return smalltalk.withContext(function($ctx2) { _st(_st($ctx1.locals.statements)._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st($ctx1.locals.sequence)._add_(each);
})}));
$6=_st(_st(_st($ctx1.locals.statements)._last())._isReturn())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(_st($ctx1.locals.statements)._last())._isBlockReturn();
})}));
if(smalltalk.assert($6)){
return _st($ctx1.locals.sequence)._add_(_st(_st(_st($ctx1.locals.statements)._last())._instructions())._first());
} else {
return _st($ctx1.locals.sequence)._add_(_st($ctx1.locals.statements)._last());
};
})});
_st($4)._ifNotEmpty_($5);
$7=$ctx1.locals.inlinedClosure;
return $7;
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._send_(anIRSend);
$1=_st(self)._perform_withArguments_(_st(_st(self)._send())._selector(),_st(_st(_st(self)._send())._instructions())._allButFirst());
return $1;
}, self, "inlineSend:", [anIRSend], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedClosure || IRInlinedClosure))._new();
return $1;
}, self, "inlinedClosure", [], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
fn: function (inlinedSend,anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$ctx1.locals.inlinedClosure=nil;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
_st(self)._inliningError_("Message argument should be a block");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
$ctx1.locals.inlinedClosure=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anIRInstruction));
$3=inlinedSend;
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._add_($ctx1.locals.inlinedClosure);
_st(_st(self)._send())._replaceWith_(inlinedSend);
$5=inlinedSend;
return $5;
}, self, "inlinedSend:with:", [inlinedSend,anIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$ctx1.locals.inlinedClosure1=nil;
$ctx1.locals.inlinedClosure2=nil;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
_st(self)._inliningError_("Message argument should be a block");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
$3=_st(anotherIRInstruction)._isClosure();
if(! smalltalk.assert($3)){
_st(self)._inliningError_("Message argument should be a block");
};
$4=_st(_st(_st(anotherIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($4)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
$ctx1.locals.inlinedClosure1=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anIRInstruction));
$ctx1.locals.inlinedClosure2=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anotherIRInstruction));
$5=inlinedSend;
_st($5)._add_(_st(_st(_st(self)._send())._instructions())._first());
_st($5)._add_($ctx1.locals.inlinedClosure1);
$6=_st($5)._add_($ctx1.locals.inlinedClosure2);
_st(_st(self)._send())._replaceWith_(inlinedSend);
$7=inlinedSend;
return $7;
}, self, "inlinedSend:with:with:", [inlinedSend,anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedSequence || IRInlinedSequence))._new();
return $1;
}, self, "inlinedSequence", [], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.InliningError || InliningError))._signal_(aString);
return self}, self, "inliningError:", [aString], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@send"];
return $1;
}, self, "send", [], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@send"]=anIRSend;
return self}, self, "send:", [anIRSend], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@translator"];
return $1;
}, self, "translator", [], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=anASTTranslator;
return self}, self, "translator:", [anASTTranslator], smalltalk.IRSendInliner)}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
}, self, "inlinedSelectors", [], smalltalk.IRSendInliner.klass)}
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
var $early={};
try {
$1=_st(_st(self)._inlinedSelectors())._includes_(_st(anIRInstruction)._selector());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(anIRInstruction)._instructions())._allButFirst();
$3=(function(each){
return smalltalk.withContext(function($ctx2) { $4=_st(each)._isClosure();
if(! smalltalk.assert($4)){
throw $early=[false];
};
})});
_st($2)._do_($3);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "shouldInline:", [anIRInstruction], smalltalk.IRSendInliner.klass)}
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@assignment"];
return $1;
}, self, "assignment", [], smalltalk.IRAssignmentInliner)}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assignment"]=aNode;
return self}, self, "assignment:", [aNode], smalltalk.IRAssignmentInliner)}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.inlinedAssignment=nil;
_st(self)._assignment_(anIRAssignment);
$ctx1.locals.inlinedAssignment=_st((smalltalk.IRInlinedAssignment || IRInlinedAssignment))._new();
_st(_st(anIRAssignment)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.inlinedAssignment)._add_(each);
})}));
_st(anIRAssignment)._replaceWith_($ctx1.locals.inlinedAssignment);
_st(self)._inlineSend_(_st(_st($ctx1.locals.inlinedAssignment)._instructions())._last());
$1=$ctx1.locals.inlinedAssignment;
return $1;
}, self, "inlineAssignment:", [anIRAssignment], smalltalk.IRAssignmentInliner)}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2,$6;
$ctx1.locals.inlinedClosure=nil;
$ctx1.locals.statements=nil;
$ctx1.locals.inlinedClosure=smalltalk.IRSendInliner.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
$ctx1.locals.statements=_st(_st(_st($ctx1.locals.inlinedClosure)._instructions())._last())._instructions();
$1=$ctx1.locals.statements;
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st(_st($ctx1.locals.statements)._last())._canBeAssigned();
if(smalltalk.assert($3)){
$4=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($4)._add_(_st(_st(_st(self)._assignment())._instructions())._first());
_st($4)._add_(_st(_st($ctx1.locals.statements)._last())._copy());
$5=_st($4)._yourself();
return _st(_st($ctx1.locals.statements)._last())._replaceWith_($5);
};
})});
_st($1)._ifNotEmpty_($2);
$6=$ctx1.locals.inlinedClosure;
return $6;
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRAssignmentInliner)}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.IRSendInliner.fn.prototype._inlineCLosure_.apply(_st(self), [anIRClosure]);
return $1;
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRNonLocalReturnInliner)}
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn))._new();
return $1;
}, self, "inlinedReturn", [], smalltalk.IRNonLocalReturnInliner)}
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2,$6;
$ctx1.locals.closure=nil;
$ctx1.locals.statements=nil;
$ctx1.locals.closure=smalltalk.IRSendInliner.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
$ctx1.locals.statements=_st(_st(_st($ctx1.locals.closure)._instructions())._last())._instructions();
$1=$ctx1.locals.statements;
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st(_st($ctx1.locals.statements)._last())._isReturn();
if(! smalltalk.assert($3)){
$4=_st((smalltalk.IRReturn || IRReturn))._new();
_st($4)._add_(_st(_st($ctx1.locals.statements)._last())._copy());
$5=_st($4)._yourself();
return _st(_st($ctx1.locals.statements)._last())._replaceWith_($5);
};
})});
_st($1)._ifNotEmpty_($2);
$6=$ctx1.locals.closure;
return $6;
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRReturnInliner)}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.return=nil;
$ctx1.locals.return_=_st(self)._inlinedReturn();
_st(_st(anIRReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.return_)._add_(each);
})}));
_st(anIRReturn)._replaceWith_($ctx1.locals.return_);
_st(self)._inlineSend_(_st(_st($ctx1.locals.return_)._instructions())._last());
$1=$ctx1.locals.return_;
return $1;
}, self, "inlineReturn:", [anIRReturn], smalltalk.IRReturnInliner)}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedReturn || IRInlinedReturn))._new();
return $1;
}, self, "inlinedReturn", [], smalltalk.IRReturnInliner)}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anIRInstruction)._accept_(self);
return $1;
}, self, "visit:", [anIRInstruction], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRAssignment);
return $1;
}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockReturn_",
smalltalk.method({
selector: "visitIRBlockReturn:",
fn: function (anIRBlockReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRReturn_(anIRBlockReturn);
return $1;
}, self, "visitIRBlockReturn:", [anIRBlockReturn], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
fn: function (anIRBlockSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRBlockSequence);
return $1;
}, self, "visitIRBlockSequence:", [anIRBlockSequence], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRClosure);
return $1;
}, self, "visitIRClosure:", [anIRClosure], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicArray);
return $1;
}, self, "visitIRDynamicArray:", [anIRDynamicArray], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicDictionary);
return $1;
}, self, "visitIRDynamicDictionary:", [anIRDynamicDictionary], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRClosure_(anIRInlinedClosure);
return $1;
}, self, "visitIRInlinedClosure:", [anIRInlinedClosure], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRInlinedSequence);
return $1;
}, self, "visitIRInlinedSequence:", [anIRInlinedSequence], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(anIRInstruction)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
$1=anIRInstruction;
return $1;
}, self, "visitIRInstruction:", [anIRInstruction], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRMethod);
return $1;
}, self, "visitIRMethod:", [anIRMethod], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturn);
return $1;
}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
fn: function (anIRNonLocalReturnHandling){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
}, self, "visitIRNonLocalReturnHandling:", [anIRNonLocalReturnHandling], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRReturn);
return $1;
}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSend);
return $1;
}, self, "visitIRSend:", [anIRSend], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSequence);
return $1;
}, self, "visitIRSequence:", [anIRSequence], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRTempDeclaration);
return $1;
}, self, "visitIRTempDeclaration:", [anIRTempDeclaration], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRValue);
return $1;
}, self, "visitIRValue:", [anIRValue], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVariable);
return $1;
}, self, "visitIRVariable:", [anIRVariable], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVerbatim);
return $1;
}, self, "visitIRVerbatim:", [anIRVerbatim], smalltalk.IRVisitor)}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRAssignmentInliner || IRAssignmentInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "assignmentInliner", [], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "nonLocalReturnInliner", [], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRReturnInliner || IRReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "returnInliner", [], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRSendInliner || IRSendInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "sendInliner", [], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(_st(anIRAssignment)._instructions())._last())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
})}));
})}));
return $1;
}, self, "shouldInlineAssignment:", [anIRAssignment], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(_st(anIRReturn)._instructions())._first())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
})}));
})}));
return $1;
}, self, "shouldInlineReturn:", [anIRReturn], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.IRSendInliner || IRSendInliner))._shouldInline_(anIRSend);
})}));
return $1;
}, self, "shouldInlineSend:", [anIRSend], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$ctx1.locals.localReturn=nil;
$1=_st(_st(anIRNonLocalReturn)._scope())._canInlineNonLocalReturns();
if(smalltalk.assert($1)){
_st(_st(_st(anIRNonLocalReturn)._scope())._methodScope())._removeNonLocalReturn_(_st(anIRNonLocalReturn)._scope());
$2=_st((smalltalk.IRReturn || IRReturn))._new();
_st($2)._scope_(_st(anIRNonLocalReturn)._scope());
$3=_st($2)._yourself();
$ctx1.locals.localReturn=$3;
$ctx1.locals.localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.localReturn)._add_(each);
})}));
_st(anIRNonLocalReturn)._replaceWith_($ctx1.locals.localReturn);
$4=$ctx1.locals.localReturn;
return $4;
};
$5=smalltalk.IRVisitor.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
return $5;
}, self, "transformNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineAssignment_(anIRAssignment);
if(smalltalk.assert($2)){
$1=_st(_st(self)._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRAssignment_.apply(_st(self), [anIRAssignment]);
};
return $1;
}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineReturn_(anIRNonLocalReturn);
if(smalltalk.assert($2)){
$1=_st(_st(self)._nonLocalReturnInliner())._inlineReturn_(anIRNonLocalReturn);
} else {
$1=_st(self)._transformNonLocalReturn_(anIRNonLocalReturn);
};
return $1;
}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineReturn_(anIRReturn);
if(smalltalk.assert($2)){
$1=_st(_st(self)._returnInliner())._inlineReturn_(anIRReturn);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
};
return $1;
}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineSend_(anIRSend);
if(smalltalk.assert($2)){
$1=_st(_st(self)._sendInliner())._inlineSend_(anIRSend);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRSend_.apply(_st(self), [anIRSend]);
};
return $1;
}, self, "visitIRSend:", [anIRSend], smalltalk.IRInliner)}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._stream())._contents();
return $1;
}, self, "contents", [], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st((smalltalk.JSStream || JSStream))._new();
return self}, self, "initialize", [], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@stream"];
return $1;
}, self, "stream", [], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRAssignment)._instructions())._first());
_st(_st(self)._stream())._nextPutAssignment();
_st(self)._visit_(_st(_st(anIRAssignment)._instructions())._last());
return self}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutClosureWith_arguments_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
return smalltalk.withContext(function($ctx3) { return smalltalk.IRVisitor.fn.prototype._visitIRClosure_.apply(_st(self), [anIRClosure]);
})}));
})}),_st(anIRClosure)._arguments());
return self}, self, "visitIRClosure:", [anIRClosure], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("[");
_st(_st(anIRDynamicArray)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(self["@stream"])._nextPutAll_("]");
return self}, self, "visitIRDynamicArray:", [anIRDynamicArray], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("smalltalk.HashedCollection._fromPairs_([");
_st(_st(anIRDynamicDictionary)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(_st(self)._stream())._nextPutAll_("])");
return self}, self, "visitIRDynamicDictionary:", [anIRDynamicDictionary], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$6,$7,$9,$10,$8,$5,$3;
$1=_st(self)._stream();
$2=anIRMethod;
$3=(function(){
return smalltalk.withContext(function($ctx2) { $4=_st(self)._stream();
$5=(function(){
return smalltalk.withContext(function($ctx3) { $6=_st(self)._stream();
$7=anIRMethod;
$8=(function(){
return smalltalk.withContext(function($ctx4) { $9=_st(_st(anIRMethod)._internalVariables())._notEmpty();
if(smalltalk.assert($9)){
_st(_st(self)._stream())._nextPutVars_(_st(_st(_st(anIRMethod)._internalVariables())._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx5) { return _st(_st(each)._variable())._alias();
})})));
};
$10=_st(_st(anIRMethod)._scope())._hasNonLocalReturn();
if(smalltalk.assert($10)){
return _st(_st(self)._stream())._nextPutNonLocalReturnHandlingWith_((function(){
return smalltalk.withContext(function($ctx5) { return smalltalk.IRVisitor.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
})}));
} else {
return smalltalk.IRVisitor.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
};
})});
return _st($6)._nextPutContextFor_during_($7,$8);
})});
return _st($4)._nextPutFunctionWith_arguments_($5,_st(anIRMethod)._arguments());
})});
_st($1)._nextPutMethodDeclaration_with_($2,$3);
return self}, self, "visitIRMethod:", [anIRMethod], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { return smalltalk.IRVisitor.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
})}));
return self}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { return smalltalk.IRVisitor.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
})}));
return self}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(anIRSend)._classSend();
if(($receiver = $1) == nil || $receiver == undefined){
_st(_st(self)._stream())._nextPutAll_("_st(");
_st(self)._visit_(_st(_st(anIRSend)._instructions())._first());
_st(_st(self)._stream())._nextPutAll_(_st(_st(").").__comma(_st(_st(anIRSend)._selector())._asSelector())).__comma("("));
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(_st(self)._stream())._nextPutAll_(")");
} else {
$2=_st(self)._stream();
_st($2)._nextPutAll_(_st(_st(_st(anIRSend)._classSend())._asJavascript()).__comma(".fn.prototype."));
_st($2)._nextPutAll_(_st(_st(_st(anIRSend)._selector())._asSelector()).__comma(".apply("));
$3=_st($2)._nextPutAll_("_st(");
$3;
_st(self)._visit_(_st(_st(anIRSend)._instructions())._first());
_st(_st(self)._stream())._nextPutAll_("), [");
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(_st(self)._stream())._nextPutAll_("])");
};
return self}, self, "visitIRSend:", [anIRSend], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutSequenceWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(anIRSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(_st(self)._stream())._nextPutStatementWith_(_st(self)._visit_(each));
})}));
})}));
return self}, self, "visitIRSequence:", [anIRSequence], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._stream();
_st($1)._nextPutAll_(_st(_st(_st(_st(_st(anIRTempDeclaration)._scope())._alias()).__comma(".locals.")).__comma(_st(anIRTempDeclaration)._name())).__comma("=nil;"));
$2=_st($1)._lf();
return self}, self, "visitIRTempDeclaration:", [anIRTempDeclaration], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_(_st(_st(anIRValue)._value())._asJavascript());
return self}, self, "visitIRValue:", [anIRValue], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRVariable)._variable())._name()).__eq("thisContext");
if(smalltalk.assert($1)){
_st(_st(self)._stream())._nextPutAll_("smalltalk.getThisContext()");
} else {
_st(_st(self)._stream())._nextPutAll_(_st(_st(anIRVariable)._variable())._alias());
};
return self}, self, "visitIRVariable:", [anIRVariable], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(_st(anIRVerbatim)._source());
})}));
return self}, self, "visitIRVerbatim:", [anIRVerbatim], smalltalk.IRJSTranslator)}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, self, "visitIRInlinedAssignment:", [anIRInlinedAssignment], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
return self}, self, "visitIRInlinedClosure:", [anIRInlinedClosure], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
fn: function (anIRInlinedIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("! smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfFalse:", [anIRInlinedIfFalse], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
fn: function (anIRInlinedIfNil){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("($receiver = ");
_st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(") == nil || $receiver == undefined");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfNil:", [anIRInlinedIfNil], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("($receiver = ");
_st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(") == nil || $receiver == undefined");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._second());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._third());
})}));
return self}, self, "visitIRInlinedIfNilIfNotNil:", [anIRInlinedIfNilIfNotNil], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfTrue:", [anIRInlinedIfTrue], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._second());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._third());
})}));
return self}, self, "visitIRInlinedIfTrueIfFalse:", [anIRInlinedIfTrueIfFalse], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
})}));
_st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "visitIRInlinedNonLocalReturn:", [anIRInlinedReturn], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, self, "visitIRInlinedReturn:", [anIRInlinedReturn], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._visit_(each);
})}));
})}));
return self}, self, "visitIRInlinedSequence:", [anIRInlinedSequence], smalltalk.IRInliningJSTranslator)}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$6,$5,$2;
$ctx1.locals.chunk=nil;
$ctx1.locals.result=nil;
$ctx1.locals.parser=nil;
$ctx1.locals.lastEmpty=nil;
$ctx1.locals.parser=_st((smalltalk.ChunkParser || ChunkParser))._on_(aStream);
$ctx1.locals.lastEmpty=false;
$1=(function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.chunk=_st($ctx1.locals.parser)._nextChunk();
$ctx1.locals.chunk;
return _st($ctx1.locals.chunk)._isNil();
})});
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st($ctx1.locals.chunk)._isEmpty();
$4=(function(){
return smalltalk.withContext(function($ctx3) { $ctx1.locals.lastEmpty=true;
return $ctx1.locals.lastEmpty;
})});
$5=(function(){
return smalltalk.withContext(function($ctx3) { $ctx1.locals.result=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_($ctx1.locals.chunk);
$ctx1.locals.result;
$6=$ctx1.locals.lastEmpty;
if(smalltalk.assert($6)){
$ctx1.locals.lastEmpty=false;
$ctx1.locals.lastEmpty;
return _st($ctx1.locals.result)._scanFrom_($ctx1.locals.parser);
};
})});
return _st($3)._ifTrue_ifFalse_($4,$5);
})});
_st($1)._whileFalse_($2);
return self}, self, "import:", [aStream], smalltalk.Importer)}
}),
smalltalk.Importer);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@stream"])._contents();
return $1;
}, self, "contents", [], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st("")._writeStream();
return self}, self, "initialize", [], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._lf();
return self}, self, "lf", [], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPut_(aString);
return self}, self, "nextPut:", [aString], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_(aString);
return self}, self, "nextPutAll:", [aString], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("=");
return self}, self, "nextPutAssignment", [], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutBlockContextFor_during_",
smalltalk.method({
selector: "nextPutBlockContextFor:during:",
fn: function (anIRClosure,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._nextPutAll_(_st(_st("return smalltalk.withContext(function(").__comma(_st(_st(anIRClosure)._scope())._alias())).__comma(") { "));
$2=_st($1)._nextPutAll_(_st((smalltalk.String || String))._cr());
_st(aBlock)._value();
_st(self)._nextPutAll_("})");
return self}, self, "nextPutBlockContextFor:during:", [anIRClosure,aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@stream"])._nextPutAll_("(function(");
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPut_(",");
})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("})");
return self}, self, "nextPutClosureWith:arguments:", [aBlock,anArray], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutContextFor_during_",
smalltalk.method({
selector: "nextPutContextFor:during:",
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=self;
_st($1)._nextPutAll_(_st(_st("return smalltalk.withContext(function(").__comma(_st(_st(aMethod)._scope())._alias())).__comma(") { "));
$2=_st($1)._nextPutAll_(_st((smalltalk.String || String))._cr());
_st(aBlock)._value();
$3=self;
_st($3)._nextPutAll_("}, self, ");
$4=_st($3)._nextPutAll_(_st(_st(_st(aMethod)._selector())._asJavascript()).__comma(", ["));
_st(_st(aMethod)._arguments())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._nextPutAll_(_st(each)._asVariableName());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._nextPutAll_(",");
})}));
$5=self;
_st($5)._nextPutAll_("], ");
_st($5)._nextPutAll_(_st(_st(aMethod)._theClass())._asJavascript());
$6=_st($5)._nextPutAll_(")");
return self}, self, "nextPutContextFor:during:", [aMethod,aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("fn: function(");
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPut_(",");
})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
$3=self["@stream"];
_st($3)._nextPutAll_("var self=this;");
$4=_st($3)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, self, "nextPutFunctionWith:arguments:", [aBlock,anArray], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@stream"])._nextPutAll_("if(");
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(anotherBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, self, "nextPutIf:with:", [aBlock,anotherBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("if(");
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(ifBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_("} else {");
$4=_st($3)._lf();
_st(elseBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, self, "nextPutIfElse:with:with:", [aBlock,ifBlock,elseBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=self["@stream"];
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: \x22").__comma(_st(aMethod)._selector())).__comma("\x22,"));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("source: ").__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
$2=_st($1)._lf();
_st(aBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_(_st(_st(",").__comma(_st((smalltalk.String || String))._lf())).__comma("messageSends: "));
_st($3)._nextPutAll_(_st(_st(_st(_st(aMethod)._messageSends())._asArray())._asJavascript()).__comma(","));
_st($3)._lf();
_st($3)._nextPutAll_(_st(_st("args: ").__comma(_st(_st(_st(_st(aMethod)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._value();
})})))._asArray())._asJavascript())).__comma(","));
_st($3)._lf();
$4=_st($3)._nextPutAll_("referencedClasses: [");
_st(_st(aMethod)._classReferences())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(_st(each)._asJavascript());
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(",");
})}));
$5=self["@stream"];
_st($5)._nextPutAll_("]");
$6=_st($5)._nextPutAll_("})");
return self}, self, "nextPutMethodDeclaration:with:", [aMethod,aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@stream"];
_st($1)._nextPutAll_("var $early={};");
_st($1)._lf();
_st($1)._nextPutAll_("try {");
$2=_st($1)._lf();
_st(aBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_("}");
_st($3)._lf();
_st($3)._nextPutAll_("catch(e) {if(e===$early)return e[0]; throw e}");
$4=_st($3)._lf();
return self}, self, "nextPutNonLocalReturnHandlingWith:", [aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("throw $early=[");
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("]");
return self}, self, "nextPutNonLocalReturnWith:", [aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("return ");
return self}, self, "nextPutReturn", [], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._nextPutReturn();
_st(aBlock)._value();
return self}, self, "nextPutReturnWith:", [aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBlock)._value();
return self}, self, "nextPutSequenceWith:", [aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
fn: function (anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@stream"];
_st($1)._nextPutAll_(_st(_st("case ").__comma(_st(anInteger)._asString())).__comma(":"));
$2=_st($1)._lf();
_st(self)._nextPutStatementWith_(aBlock);
$3=self["@stream"];
_st($3)._nextPutAll_(_st(_st("smalltalk.thisContext.pc=").__comma(_st(_st(anInteger).__plus((1)))._asString())).__comma(";"));
$4=_st($3)._lf();
return self}, self, "nextPutStatement:with:", [anInteger,aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, self, "nextPutStatementWith:", [aBlock], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@stream"];
_st($1)._nextPutAll_(_st(_st("var ").__comma(aString)).__comma(";"));
$2=_st($1)._lf();
return self}, self, "nextPutVar:", [aString], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@stream"])._nextPutAll_("var ");
_st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@stream"])._nextPutAll_(",");
})}));
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, self, "nextPutVars:", [aCollection], smalltalk.JSStream)}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._args())._at_put_(aString,_st((smalltalk.ArgVar || ArgVar))._on_(aString));
_st(_st(_st(self)._args())._at_(aString))._scope_(self);
return self}, self, "addArg:", [aString], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._temps())._at_put_(aString,_st((smalltalk.TempVar || TempVar))._on_(aString));
_st(_st(_st(self)._temps())._at_(aString))._scope_(self);
return self}, self, "addTemp:", [aString], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("$ctx").__comma(_st(_st(self)._scopeLevel())._asString());
return $1;
}, self, "alias", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._args())._keys()).__comma(_st(_st(self)._temps())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@args"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@args"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@args"];
} else {
$1=$2;
};
return $1;
}, self, "args", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aStringOrNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._pseudoVars())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._args())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx3) { return _st(_st(self)._temps())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx4) { return nil;
})}));
})}));
})}));
return $1;
}, self, "bindingFor:", [aStringOrNode], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._outerScope())._canInlineNonLocalReturns();
})}));
return $1;
}, self, "canInlineNonLocalReturns", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@instruction"];
return $1;
}, self, "instruction", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@instruction"]=anIRInstruction;
return self}, self, "instruction:", [anIRInstruction], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isMethodScope())._not();
return $1;
}, self, "isBlockScope", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instruction())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._instruction())._isInlined();
})}));
return $1;
}, self, "isInlined", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isMethodScope", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
$ctx1.locals.lookup=nil;
$ctx1.locals.lookup=_st(self)._bindingFor_(aNode);
$1=$ctx1.locals.lookup;
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st(self)._outerScope();
if(($receiver = $3) == nil || $receiver == undefined){
$ctx1.locals.lookup=$3;
} else {
$ctx1.locals.lookup=_st(_st(self)._outerScope())._lookupVariable_(aNode);
};
return $ctx1.locals.lookup;
})});
_st($1)._ifNil_($2);
$4=$ctx1.locals.lookup;
return $4;
}, self, "lookupVariable:", [aNode], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._outerScope();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(self)._outerScope())._methodScope();
};
return $1;
}, self, "methodScope", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerScope"];
return $1;
}, self, "outerScope", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerScope"]=aLexicalScope;
return self}, self, "outerScope:", [aLexicalScope], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodScope())._pseudoVars();
return $1;
}, self, "pseudoVars", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self)._outerScope();
if(($receiver = $1) == nil || $receiver == undefined){
return (1);
} else {
$1;
};
$2=_st(self)._isInlined();
if(smalltalk.assert($2)){
$3=_st(_st(self)._outerScope())._scopeLevel();
return $3;
};
$4=_st(_st(_st(self)._outerScope())._scopeLevel()).__plus((1));
return $4;
}, self, "scopeLevel", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@temps"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@temps"];
} else {
$1=$2;
};
return $1;
}, self, "temps", [], smalltalk.LexicalScope)}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._iVars())._at_put_(aString,_st((smalltalk.InstanceVar || InstanceVar))._on_(aString));
_st(_st(_st(self)._iVars())._at_(aString))._scope_(self);
return self}, self, "addIVar:", [aString], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._add_(aScope);
return self}, self, "addNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.LexicalScope.fn.prototype._allVariableNames.apply(_st(self), [])).__comma(_st(_st(self)._iVars())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=smalltalk.LexicalScope.fn.prototype._bindingFor_.apply(_st(self), [aNode]);
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._iVars())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) { return nil;
})}));
} else {
$1=$2;
};
return $1;
}, self, "bindingFor:", [aNode], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canInlineNonLocalReturns", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localReturn();
return $1;
}, self, "hasLocalReturn", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._nonLocalReturns())._notEmpty();
return $1;
}, self, "hasNonLocalReturn", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@iVars"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@iVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@iVars"];
} else {
$1=$2;
};
return $1;
}, self, "iVars", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isMethodScope", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@localReturn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, self, "localReturn", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@localReturn"]=aBoolean;
return self}, self, "localReturn:", [aBoolean], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, self, "methodScope", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@nonLocalReturns"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nonLocalReturns"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@nonLocalReturns"];
} else {
$1=$2;
};
return $1;
}, self, "nonLocalReturns", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@pseudoVars"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@pseudoVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
self["@pseudoVars"];
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._pseudoVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $2=_st((smalltalk.PseudoVar || PseudoVar))._on_(each);
_st($2)._scope_(_st(self)._methodScope());
$3=_st($2)._yourself();
return _st(self["@pseudoVars"])._at_put_(each,$3);
})}));
} else {
$1;
};
$4=self["@pseudoVars"];
return $4;
}, self, "pseudoVars", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "removeNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@unknownVariables"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@unknownVariables"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@unknownVariables"];
} else {
$1=$2;
};
return $1;
}, self, "unknownVariables", [], smalltalk.MethodLexicalScope)}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nodes())._add_(aNode);
return self}, self, "addNode:", [aNode], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isAssignmentNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockSequenceNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isImmutable", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isReturnNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSendNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isValueNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@nodes"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nodes"]=_st((smalltalk.Array || Array))._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
}, self, "nodes", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=aCollection;
return self}, self, "nodes:", [aCollection], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@position"]=_st((0)).__at((0));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, self, "position", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPosition;
return self}, self, "position:", [aPosition], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, self, "shouldBeAliased", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeAliased"]=aBoolean;
return self}, self, "shouldBeAliased:", [aBoolean], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined",
smalltalk.method({
selector: "shouldBeInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, self, "shouldBeInlined", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeInlined"]=aBoolean;
return self}, self, "shouldBeInlined:", [aBoolean], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._shouldBeInlined();
})})))._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._nodes())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(each)._subtreeNeedsAliasing();
})}),(function(){
return smalltalk.withContext(function($ctx3) { return false;
})}))).__tild_eq(false);
})}));
return $1;
}, self, "subtreeNeedsAliasing", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isAssignmentNode", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@left"];
return $1;
}, self, "left", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@left"]=aNode;
return self}, self, "left:", [aNode], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Array || Array))._with_with_(_st(self)._left(),_st(self)._right());
return $1;
}, self, "nodes", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@right"];
return $1;
}, self, "right", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@right"]=aNode;
return self}, self, "right:", [aNode], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockNode", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@parameters"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@parameters"]=_st((smalltalk.Array || Array))._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
}, self, "parameters", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parameters"]=aCollection;
return self}, self, "parameters:", [aCollection], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicArrayNode)}
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicDictionaryNode)}
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);

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
}, self, "source", [], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, self, "arguments", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classReferences"];
return $1;
}, self, "classReferences", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, self, "classReferences:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, self, "messageSends", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, self, "messageSends:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aMethodScope;
return self}, self, "scope:", [aMethodScope], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@superSends"];
return $1;
}, self, "superSends", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, self, "superSends:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isReturnNode", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._scope())._isMethodScope())._not();
return $1;
}, self, "nonLocalReturn", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
}, self, "arguments", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$3;
$ctx1.locals.first=nil;
$1=_st((smalltalk.SendNode || SendNode))._new();
_st($1)._selector_(_st(self)._selector());
_st($1)._arguments_(_st(self)._arguments());
$2=_st($1)._yourself();
$ctx1.locals.first=$2;
$4=_st((smalltalk.CascadeNode || CascadeNode))._new();
_st($4)._receiver_(_st(self)._receiver());
_st($4)._nodes_(_st(_st((smalltalk.Array || Array))._with_($ctx1.locals.first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
}, self, "cascadeNodeWithMessages:", [aCollection], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@index"];
return $1;
}, self, "index", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, self, "index:", [anInteger], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSendNode", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._withAll_(_st(self)._arguments());
_st($2)._add_(_st(self)._receiver());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "nodes", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@superSend"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, self, "superSend", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSend"]=aBoolean;
return self}, self, "superSend:", [aBoolean], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$6,$1;
$2=_st((smalltalk.SendNode || SendNode))._new();
$3=$2;
$5=_st(self)._receiver();
if(($receiver = $5) == nil || $receiver == undefined){
$4=anObject;
} else {
$4=_st(_st(self)._receiver())._valueForReceiver_(anObject);
};
_st($3)._receiver_($4);
_st($2)._selector_(_st(self)._selector());
_st($2)._arguments_(_st(self)._arguments());
$6=_st($2)._yourself();
$1=$6;
return $1;
}, self, "valueForReceiver:", [anObject], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.BlockSequenceNode || BlockSequenceNode))._new();
_st($2)._nodes_(_st(self)._nodes());
_st($2)._temps_(_st(self)._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "asBlockSequenceNode", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, self, "temps", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@temps"]=aCollection;
return self}, self, "temps:", [aCollection], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockSequenceNode)}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockSequenceNode", [], smalltalk.BlockSequenceNode)}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isImmutable", [], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isValueNode", [], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, self, "value", [], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=anObject;
return self}, self, "value:", [anObject], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._binding())._alias();
return $1;
}, self, "alias", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@assigned"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, self, "assigned", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assigned"]=aBoolean;
return self}, self, "assigned:", [aBoolean], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_beAssigned",
smalltalk.method({
selector: "beAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._binding())._validateAssignment();
self["@assigned"]=true;
return self}, self, "beAssigned", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding",
smalltalk.method({
selector: "binding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@binding"];
return $1;
}, self, "binding", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding_",
smalltalk.method({
selector: "binding:",
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@binding"]=aScopeVar;
return self}, self, "binding:", [aScopeVar], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isImmutable", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitClassReferenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ClassReferenceNode)}
}),
smalltalk.ClassReferenceNode);

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

smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._pc_(_st(aMethodContext)._pc());
_st(self)._receiver_(_st(aMethodContext)._receiver());
_st(self)._selector_(_st(aMethodContext)._selector());
$1=_st(aMethodContext)._outerContext();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._outerContext_(_st(_st(self)._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
_st(_st(aMethodContext)._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._locals())._at_put_(key,value);
})}));
return self}, self, "initializeFromMethodContext:", [aMethodContext], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@locals"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@locals"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@locals"];
} else {
$1=$2;
};
return $1;
}, self, "locals", [], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerContext"];
return $1;
}, self, "outerContext", [], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext_",
smalltalk.method({
selector: "outerContext:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerContext"]=anAIContext;
return self}, self, "outerContext:", [anAIContext], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@pc"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@pc"]=(0);
$1=self["@pc"];
} else {
$1=$2;
};
return $1;
}, self, "pc", [], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc_",
smalltalk.method({
selector: "pc:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pc"]=anInteger;
return self}, self, "pc:", [anInteger], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, self, "receiver:", [anObject], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.AIContext)}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_fromMethodContext_",
smalltalk.method({
selector: "fromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "fromMethodContext:", [aMethodContext], smalltalk.AIContext.klass)}
}),
smalltalk.AIContext.klass);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@context"];
return $1;
}, self, "context", [], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=anAIContext;
return self}, self, "context:", [anAIContext], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, self, "initialize", [], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@shouldReturn"]=false;
$1=_st(self)._interpretNode_(aNode);
return $1;
}, self, "interpret:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretNode_",
smalltalk.method({
selector: "interpretNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@currentNode"]=aNode;
$1=_st(self)._visit_(aNode);
return $1;
}, self, "interpretNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_",
smalltalk.method({
selector: "messageFromSendNode:",
fn: function (aSendNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Message || Message))._new();
_st($2)._selector_(_st(aSendNode)._selector());
_st($2)._arguments_(_st(_st(aSendNode)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._interpretNode_(each);
})})));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "messageFromSendNode:", [aSendNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
})});
return $1;
}, self, "visitBlockNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.receiver=nil;
$ctx1.locals.receiver=_st(self)._interpretNode_(_st(aNode)._receiver());
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._messageFromSendNode_(each))._sendTo_($ctx1.locals.receiver);
})}));
$1=_st(_st(self)._messageFromSendNode_(_st(_st(aNode)._nodes())._last()))._sendTo_($ctx1.locals.receiver);
return $1;
}, self, "visitCascadeNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aNode)._value());
return $1;
}, self, "visitClassReferenceNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._halt();
return self}, self, "visitJSStatementNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@shouldReturn"]=true;
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
return $1;
}, self, "visitReturnNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._messageFromSendNode_(aNode))._sendTo_(_st(self)._interpretNode_(_st(aNode)._receiver()));
return $1;
}, self, "visitSendNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2,$5;
var $early={};
try {
$1=_st(_st(aNode)._nodes())._allButLast();
$2=(function(each){
return smalltalk.withContext(function($ctx2) { $ctx2.locals.value=nil;
$ctx2.locals.value=_st(self)._interpretNode_(each);
$ctx2.locals.value;
$3=self["@shouldReturn"];
if(smalltalk.assert($3)){
$4=$ctx2.locals.value;
throw $early=[$4];
};
})});
_st($1)._do_($2);
$5=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._last());
return $5;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "visitSequenceNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aNode)._value();
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$1;
$2=_st(aClass)._isMetaclass();
$3=(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(aClass)._instanceClass())._name()).__comma(".klass");
})});
$4=(function(){
return smalltalk.withContext(function($ctx2) { $5=_st(aClass)._isNil();
if(smalltalk.assert($5)){
return "nil";
} else {
return _st(aClass)._name();
};
})});
$1=_st($2)._ifTrue_ifFalse_($3,$4);
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentClass"];
return $1;
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
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

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$ctx1.locals.ir=nil;
$ctx1.locals.stream=nil;
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

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$ctx1.locals.ir=nil;
$ctx1.locals.stream=nil;
_st(_st(self)._semanticAnalyzer())._visit_(aNode);
$ctx1.locals.ir=_st(_st(self)._translator())._visit_(aNode);
_st(_st(self)._inliner())._visit_($ctx1.locals.ir);
$2=_st(self)._irTranslator();
_st($2)._visit_($ctx1.locals.ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, self, "compileNode:", [aNode], smalltalk.InliningCodeGenerator)}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliner || IRInliner))._new();
return $1;
}, self, "inliner", [], smalltalk.InliningCodeGenerator)}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator))._new();
return $1;
}, self, "irTranslator", [], smalltalk.InliningCodeGenerator)}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$ctx1.locals.variable=nil;
$1=_st(aNode)._isImmutable();
if(smalltalk.assert($1)){
$2=_st(self)._visit_(aNode);
return $2;
};
$3=_st((smalltalk.IRVariable || IRVariable))._new();
_st($3)._variable_(_st(_st((smalltalk.AliasVar || AliasVar))._new())._name_(_st("$").__comma(_st(self)._nextAlias())));
$4=_st($3)._yourself();
$ctx1.locals.variable=$4;
$5=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($5)._add_($ctx1.locals.variable);
_st($5)._add_(_st(self)._visit_(aNode));
$6=_st($5)._yourself();
_st(_st(self)._sequence())._add_($6);
_st(_st(_st(self)._method())._internalVariables())._add_($ctx1.locals.variable);
$7=$ctx1.locals.variable;
return $7;
}, self, "alias:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_aliasTemporally_",
smalltalk.method({
selector: "aliasTemporally:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4,$6,$8,$7,$5,$9;
$ctx1.locals.threshold=nil;
$ctx1.locals.result=nil;
$ctx1.locals.threshold=(0);
$1=aCollection;
$2=(function(each,i){
return smalltalk.withContext(function($ctx2) { $3=_st(each)._subtreeNeedsAliasing();
if(smalltalk.assert($3)){
$ctx1.locals.threshold=i;
return $ctx1.locals.threshold;
};
})});
_st($1)._withIndexDo_($2);
$ctx1.locals.result=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$4=aCollection;
$5=(function(each,i){
return smalltalk.withContext(function($ctx2) { $6=$ctx1.locals.result;
$8=_st(i).__lt_eq($ctx1.locals.threshold);
if(smalltalk.assert($8)){
$7=_st(self)._alias_(each);
} else {
$7=_st(self)._visit_(each);
};
return _st($6)._add_($7);
})});
_st($4)._withIndexDo_($5);
$9=$ctx1.locals.result;
return $9;
}, self, "aliasTemporally:", [aCollection], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, self, "method", [], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=anIRMethod;
return self}, self, "method:", [anIRMethod], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nextAlias"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
$1;
};
self["@nextAlias"]=_st(self["@nextAlias"]).__plus((1));
$2=_st(self["@nextAlias"])._asString();
return $2;
}, self, "nextAlias", [], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@sequence"];
return $1;
}, self, "sequence", [], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sequence"]=anIRSequence;
return self}, self, "sequence:", [anIRSequence], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.locals.left=nil;
$ctx1.locals.right=nil;
$ctx1.locals.assignment=nil;
$ctx1.locals.right=_st(self)._visit_(_st(aNode)._right());
$ctx1.locals.left=_st(self)._visit_(_st(aNode)._left());
$1=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($1)._add_($ctx1.locals.left);
_st($1)._add_($ctx1.locals.right);
$2=_st($1)._yourself();
_st(_st(self)._sequence())._add_($2);
$3=$ctx1.locals.left;
return $3;
}, self, "visitAssignmentNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$ctx1.locals.closure=nil;
$1=_st((smalltalk.IRClosure || IRClosure))._new();
_st($1)._arguments_(_st(aNode)._parameters());
_st($1)._scope_(_st(aNode)._scope());
$2=_st($1)._yourself();
$ctx1.locals.closure=$2;
_st(_st(_st(aNode)._scope())._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $3=_st((smalltalk.IRTempDeclaration || IRTempDeclaration))._new();
_st($3)._name_(_st(each)._name());
_st($3)._scope_(_st(aNode)._scope());
$4=_st($3)._yourself();
return _st($ctx1.locals.closure)._add_($4);
})}));
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.closure)._add_(_st(self)._visit_(each));
})}));
$5=$ctx1.locals.closure;
return $5;
}, self, "visitBlockNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$7,$8,$9,$6,$4,$1;
$2=self;
$3=_st((smalltalk.IRBlockSequence || IRBlockSequence))._new();
$4=(function(){
return smalltalk.withContext(function($ctx2) { $5=_st(aNode)._nodes();
$6=(function(){
return smalltalk.withContext(function($ctx3) { _st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx4) { return _st(_st(self)._sequence())._add_(_st(self)._visit_(each));
})}));
$7=_st(_st(_st(aNode)._nodes())._last())._isReturnNode();
if(smalltalk.assert($7)){
return _st(_st(self)._sequence())._add_(_st(self)._visit_(_st(_st(aNode)._nodes())._last()));
} else {
$8=_st((smalltalk.IRBlockReturn || IRBlockReturn))._new();
_st($8)._add_(_st(self)._visit_(_st(_st(aNode)._nodes())._last()));
$9=_st($8)._yourself();
return _st(_st(self)._sequence())._add_($9);
};
})});
return _st($5)._ifNotEmpty_($6);
})});
$1=_st($2)._withSequence_do_($3,$4);
return $1;
}, self, "visitBlockSequenceNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.locals.alias=nil;
$1=_st(_st(aNode)._receiver())._isImmutable();
if(! smalltalk.assert($1)){
$ctx1.locals.alias=_st(self)._alias_(_st(aNode)._receiver());
$ctx1.locals.alias;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._receiver_(_st(_st((smalltalk.VariableNode || VariableNode))._new())._binding_(_st($ctx1.locals.alias)._variable()));
})}));
};
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._sequence())._add_(_st(self)._visit_(each));
})}));
$2=_st(self)._alias_(_st(_st(aNode)._nodes())._last());
return $2;
}, self, "visitCascadeNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.array=nil;
$ctx1.locals.array=_st((smalltalk.IRDynamicArray || IRDynamicArray))._new();
_st(_st(self)._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.array)._add_(each);
})}));
$1=$ctx1.locals.array;
return $1;
}, self, "visitDynamicArrayNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.dictionary=nil;
$ctx1.locals.dictionary=_st((smalltalk.IRDynamicDictionary || IRDynamicDictionary))._new();
_st(_st(self)._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.dictionary)._add_(each);
})}));
$1=$ctx1.locals.dictionary;
return $1;
}, self, "visitDynamicDictionaryNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVerbatim || IRVerbatim))._new();
_st($2)._source_(_st(aNode)._source());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitJSStatementNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st((smalltalk.IRMethod || IRMethod))._new();
_st($1)._source_(_st(self)._source());
_st($1)._theClass_(_st(self)._theClass());
_st($1)._arguments_(_st(aNode)._arguments());
_st($1)._selector_(_st(aNode)._selector());
_st($1)._messageSends_(_st(aNode)._messageSends());
_st($1)._superSends_(_st(aNode)._superSends());
_st($1)._classReferences_(_st(aNode)._classReferences());
_st($1)._scope_(_st(aNode)._scope());
$2=_st($1)._yourself();
_st(self)._method_($2);
_st(_st(_st(aNode)._scope())._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $3=_st((smalltalk.IRTempDeclaration || IRTempDeclaration))._new();
_st($3)._name_(_st(each)._name());
_st($3)._scope_(_st(aNode)._scope());
$4=_st($3)._yourself();
return _st(_st(self)._method())._add_($4);
})}));
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._method())._add_(_st(self)._visit_(each));
})}));
$5=_st(_st(aNode)._scope())._hasLocalReturn();
if(! smalltalk.assert($5)){
$6=_st((smalltalk.IRVariable || IRVariable))._new();
_st($6)._variable_(_st(_st(_st(aNode)._scope())._pseudoVars())._at_("self"));
$7=_st($6)._yourself();
_st(_st(_st(self)._method())._add_(_st((smalltalk.IRReturn || IRReturn))._new()))._add_($7);
};
$8=_st(self)._method();
return $8;
}, self, "visitMethodNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.locals.return=nil;
$1=_st(aNode)._nonLocalReturn();
if(smalltalk.assert($1)){
$ctx1.locals.return_=_st((smalltalk.IRNonLocalReturn || IRNonLocalReturn))._new();
} else {
$ctx1.locals.return_=_st((smalltalk.IRReturn || IRReturn))._new();
};
_st($ctx1.locals.return_)._scope_(_st(aNode)._scope());
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.return_)._add_(_st(self)._alias_(each));
})}));
$2=$ctx1.locals.return_;
return $2;
}, self, "visitReturnNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$ctx1.locals.send=nil;
$ctx1.locals.all=nil;
$ctx1.locals.receiver=nil;
$ctx1.locals.arguments=nil;
$ctx1.locals.send=_st((smalltalk.IRSend || IRSend))._new();
$1=$ctx1.locals.send;
_st($1)._selector_(_st(aNode)._selector());
$2=_st($1)._index_(_st(aNode)._index());
$3=_st(aNode)._superSend();
if(smalltalk.assert($3)){
_st($ctx1.locals.send)._classSend_(_st(_st(self)._theClass())._superclass());
};
$ctx1.locals.all=_st(self)._aliasTemporally_(_st([_st(aNode)._receiver()]).__comma(_st(aNode)._arguments()));
$ctx1.locals.receiver=_st($ctx1.locals.all)._first();
$ctx1.locals.arguments=_st($ctx1.locals.all)._allButFirst();
_st($ctx1.locals.send)._add_($ctx1.locals.receiver);
_st($ctx1.locals.arguments)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.send)._add_(each);
})}));
$4=$ctx1.locals.send;
return $4;
}, self, "visitSendNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$7,$6,$4,$1;
$2=self;
$3=_st((smalltalk.IRSequence || IRSequence))._new();
$4=(function(){
return smalltalk.withContext(function($ctx2) { $5=_st(aNode)._nodes();
$6=(function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.locals.instruction=nil;
$ctx3.locals.instruction=_st(self)._visit_(each);
$ctx3.locals.instruction;
$7=_st($ctx3.locals.instruction)._isVariable();
if(! smalltalk.assert($7)){
return _st(_st(self)._sequence())._add_($ctx3.locals.instruction);
};
})});
return _st($5)._do_($6);
})});
$1=_st($2)._withSequence_do_($3,$4);
return $1;
}, self, "visitSequenceNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRValue || IRValue))._new();
_st($2)._value_(_st(aNode)._value());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVariable || IRVariable))._new();
_st($2)._variable_(_st(aNode)._binding());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitVariableNode:", [aNode], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
fn: function (aSequence,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.outerSequence=nil;
$ctx1.locals.outerSequence=_st(self)._sequence();
_st(self)._sequence_(aSequence);
_st(aBlock)._value();
_st(self)._sequence_($ctx1.locals.outerSequence);
$1=aSequence;
return $1;
}, self, "withSequence:do:", [aSequence,aBlock], smalltalk.IRASTTranslator)}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classReferences"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classReferences"]=_st((smalltalk.Set || Set))._new();
$1=self["@classReferences"];
} else {
$1=$2;
};
return $1;
}, self, "classReferences", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.ShadowingVariableError || ShadowingVariableError))._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, self, "errorShadowingVariable:", [aString], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.locals.identifier=nil;
$ctx1.locals.identifier=_st(aNode)._value();
$1=_st(_st(_st(["jQuery", "window", "process", "global"])._includes_($ctx1.locals.identifier))._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._isVariableGloballyUndefined_($ctx1.locals.identifier);
})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.UnknownVariableError || UnknownVariableError))._new();
_st($2)._variableName_(_st(aNode)._value());
$3=_st($2)._signal();
$3;
} else {
_st(_st(_st(self["@currentScope"])._methodScope())._unknownVariables())._add_(_st(aNode)._value());
};
return self}, self, "errorUnknownVariable:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_isVariableGloballyUndefined_",
smalltalk.method({
selector: "isVariableGloballyUndefined:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval('typeof ' + aString + ' == "undefined"');
return self}, self, "isVariableGloballyUndefined:", [aString], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@messageSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@messageSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@messageSends"];
} else {
$1=$2;
};
return $1;
}, self, "messageSends", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.LexicalScope || LexicalScope));
return $1;
}, self, "newBlockScope", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.MethodLexicalScope || MethodLexicalScope));
return $1;
}, self, "newMethodScope", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "newScopeOfClass:", [aLexicalScopeClass], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentScope"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self["@currentScope"]=_st(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self}, self, "popScope", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, self, "pushScope:", [aScope], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@superSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@superSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@superSends"];
} else {
$1=$2;
};
return $1;
}, self, "superSends", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._errorShadowingVariable_(aString);
};
return self}, self, "validateVariableScope:", [aString], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]);
_st(_st(aNode)._left())._beAssigned();
return self}, self, "visitAssignmentNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._pushScope_(_st(self)._newBlockScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(aNode)._parameters())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
_st(self)._popScope();
return self}, self, "visitBlockNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._receiver_(_st(aNode)._receiver());
})}));
smalltalk.NodeVisitor.fn.prototype._visitCascadeNode_.apply(_st(self), [aNode]);
$1=_st(_st(_st(aNode)._nodes())._first())._superSend();
if(smalltalk.assert($1)){
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._superSend_(true);
})}));
};
return self}, self, "visitCascadeNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classReferences())._add_(_st(aNode)._value());
$1=_st((smalltalk.ClassRefVar || ClassRefVar))._new();
_st($1)._name_(_st(aNode)._value());
$2=_st($1)._yourself();
_st(aNode)._binding_($2);
return self}, self, "visitClassReferenceNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._pushScope_(_st(self)._newMethodScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(_st(self)._theClass())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@currentScope"])._addIVar_(each);
})}));
_st(_st(aNode)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitMethodNode_.apply(_st(self), [aNode]);
$1=aNode;
_st($1)._classReferences_(_st(self)._classReferences());
_st($1)._messageSends_(_st(_st(self)._messageSends())._keys());
$2=_st($1)._superSends_(_st(_st(self)._superSends())._keys());
_st(self)._popScope();
return self}, self, "visitMethodNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(aNode)._scope_(self["@currentScope"]);
$1=_st(self["@currentScope"])._isMethodScope();
if(smalltalk.assert($1)){
_st(self["@currentScope"])._localReturn_(true);
} else {
_st(_st(self["@currentScope"])._methodScope())._addNonLocalReturn_(self["@currentScope"]);
};
smalltalk.NodeVisitor.fn.prototype._visitReturnNode_.apply(_st(self), [aNode]);
return self}, self, "visitReturnNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
$1=_st(_st(_st(aNode)._receiver())._value()).__eq("super");
$2=(function(){
return smalltalk.withContext(function($ctx2) { _st(aNode)._superSend_(true);
_st(_st(aNode)._receiver())._value_("self");
_st(_st(self)._superSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx3) { return _st((smalltalk.Set || Set))._new();
})}));
return _st(_st(_st(self)._superSends())._at_(_st(aNode)._selector()))._add_(aNode);
})});
$3=(function(){
return smalltalk.withContext(function($ctx2) { $4=_st(_st((smalltalk.IRSendInliner || IRSendInliner))._inlinedSelectors())._includes_(_st(aNode)._selector());
if(smalltalk.assert($4)){
_st(aNode)._shouldBeInlined_(true);
return _st(_st(aNode)._receiver())._shouldBeAliased_(true);
};
})});
_st($1)._ifTrue_ifFalse_($2,$3);
_st(_st(self)._messageSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.Set || Set))._new();
})}));
_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._add_(aNode);
_st(aNode)._index_(_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._size());
smalltalk.NodeVisitor.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
return self}, self, "visitSendNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]);
return self}, self, "visitSequenceNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2;
$1=aNode;
$3=_st(self["@currentScope"])._lookupVariable_(aNode);
if(($receiver = $3) == nil || $receiver == undefined){
_st(self)._errorUnknownVariable_(aNode);
$4=_st((smalltalk.UnknownVar || UnknownVar))._new();
_st($4)._name_(_st(aNode)._value());
$5=_st($4)._yourself();
$2=$5;
} else {
$2=$3;
};
_st($1)._binding_($2);
return self}, self, "visitVariableNode:", [aNode], smalltalk.SemanticAnalyzer)}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aClass], smalltalk.SemanticAnalyzer.klass)}
}),
smalltalk.SemanticAnalyzer.klass);

smalltalk.addMethod(
"_initializePackageNamed_prefix_",
smalltalk.method({
selector: "initializePackageNamed:prefix:",
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Package || Package))._named_(packageName);
_st($1)._setupClasses();
_st($1)._commitPathJs_(_st(_st("/").__comma(aString)).__comma("/js"));
$2=_st($1)._commitPathSt_(_st(_st("/").__comma(aString)).__comma("/st"));
return self}, self, "initializePackageNamed:prefix:", [packageName,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackage_prefix_",
smalltalk.method({
selector: "loadPackage:prefix:",
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$8,$7,$6,$3;
$ctx1.locals.url=nil;
$ctx1.locals.url=_st(_st(_st(_st("/").__comma(aString)).__comma("/js/")).__comma(packageName)).__comma(".js");
$1=jQuery;
$2=$ctx1.locals.url;
$4=_st("type").__minus_gt("GET");
$5=_st("dataType").__minus_gt("script");
$7=(function(jqXHR,textStatus){
return smalltalk.withContext(function($ctx2) { $8=_st(_st(jqXHR)._readyState()).__eq((4));
if(smalltalk.assert($8)){
return _st(self)._initializePackageNamed_prefix_(packageName,aString);
};
})});
$6=_st("complete").__minus_gt($7);
$3=smalltalk.HashedCollection._fromPairs_([$4,$5,$6,_st("error").__minus_gt((function(){
return smalltalk.withContext(function($ctx2) { return _st(window)._alert_(_st("Could not load package at:  ").__comma($ctx1.locals.url));
})}))]);
_st($1)._ajax_options_($2,$3);
return self}, self, "loadPackage:prefix:", [packageName,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._loadPackage_prefix_(each,aString);
})}));
return self}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader.klass)}
}),
smalltalk.PackageLoader.klass);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._name())._asVariableName();
return $1;
}, self, "alias", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isArgVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClassRefVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isInstanceVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isPseudoVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isTempVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isUnknownVar", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, self, "name", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, self, "name:", [aString], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, self, "scope:", [aScope], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._isArgVar())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._isPseudoVar();
})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.InvalidAssignmentError || InvalidAssignmentError))._new();
_st($2)._variableName_(_st(self)._name());
$3=_st($2)._signal();
$3;
};
return self}, self, "validateAssignment", [], smalltalk.ScopeVar)}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aString], smalltalk.ScopeVar.klass)}
}),
smalltalk.ScopeVar.klass);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.AliasVar)}
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.AliasVar)}
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isArgVar", [], smalltalk.ArgVar)}
}),
smalltalk.ArgVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st("(smalltalk.").__comma(_st(self)._name())).__comma(" || ")).__comma(_st(self)._name())).__comma(")");
return $1;
}, self, "alias", [], smalltalk.ClassRefVar)}
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClassRefVar", [], smalltalk.ClassRefVar)}
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("self[\x22@").__comma(_st(self)._name())).__comma("\x22]");
return $1;
}, self, "alias", [], smalltalk.InstanceVar)}
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInstanceVar", [], smalltalk.InstanceVar)}
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, self, "alias", [], smalltalk.PseudoVar)}
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isPseudoVar", [], smalltalk.PseudoVar)}
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._scope())._alias()).__comma(".locals.")).__comma(smalltalk.ScopeVar.fn.prototype._alias.apply(_st(self), []));
return $1;
}, self, "alias", [], smalltalk.TempVar)}
}),
smalltalk.TempVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isTempVar", [], smalltalk.TempVar)}
}),
smalltalk.TempVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isUnknownVar", [], smalltalk.UnknownVar)}
}),
smalltalk.UnknownVar);

