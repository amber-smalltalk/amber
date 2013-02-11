smalltalk.addPackage('Compiler', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Compiler');


smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler');
smalltalk.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`. \x0aThe default code generator is an instance of `InlinedCodeGenerator`"


smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler');
smalltalk.CompilerError.comment="I am the common superclass of all compiling errors."


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler');
smalltalk.ParseError.comment="Instance of ParseError are signaled on any parsing error. \x0aSee `Smalltalk >> #parse:`"


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler');
smalltalk.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling"


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler');
smalltalk.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`."


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler');
smalltalk.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned."


smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler');
smalltalk.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope."


smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler');
smalltalk.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects."


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');
smalltalk.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`."


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Compiler');


smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Compiler');


smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream."


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler');
smalltalk.IRInlinedAssignment.comment="I represent an inlined assignment instruction."


smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler');


smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler');


smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler');
smalltalk.IRInlinedClosure.comment="I represent an inlined closure instruction."


smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['theClass', 'source', 'selector', 'classReferences', 'messageSends', 'superSends', 'arguments', 'internalVariables'], 'Compiler');
smalltalk.IRMethod.comment="I am a method instruction"


smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler');
smalltalk.IRReturn.comment="I am a local return instruction."


smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler');
smalltalk.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction."


smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler');
smalltalk.IRInlinedReturn.comment="I represent an inlined local return instruction."


smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler');
smalltalk.IRInlinedNonLocalReturn.comment="I represent an inlined non local return instruction."


smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JS statement.\x0a\x0aSee IRNonLocalReturnHandling class"


smalltalk.addClass('IRTempDeclaration', smalltalk.IRScopedInstruction, ['name'], 'Compiler');


smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler');
smalltalk.IRSend.comment="I am a message send instruction."


smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler');
smalltalk.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions."


smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler');


smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler');


smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler');


smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler');
smalltalk.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`)."


smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler');
smalltalk.IRValue.comment="I am the simplest possible instruction. I represent a value."


smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler');
smalltalk.IRVariable.comment="I am a variable instruction."


smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler');


smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler');
smalltalk.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods."


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler');
smalltalk.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions. \x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};"


smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler');


smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler');
smalltalk.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction."


smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler');
smalltalk.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`"


smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler');


smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler');
smalltalk.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance)."


smalltalk.addClass('Importer', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler');


smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler');
smalltalk.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope."


smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler');
smalltalk.MethodLexicalScope.comment="I represent a method scope."


smalltalk.addClass('Node', smalltalk.Object, ['position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler');
smalltalk.Node.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aposition: holds a point containing lline- and column number of the symbol location in the original source file"


smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');


smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler');
smalltalk.addMethod(
"_inlined",
smalltalk.method({
selector: "inlined",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@inlined']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: "inlined\x0a\x09^inlined ifNil: [false]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_inlined_",
smalltalk.method({
selector: "inlined:",
category: 'accessing',
fn: function (aBoolean) {
var self=this;
(self['@inlined']=aBoolean);
return self;},
args: ["aBoolean"],
source: "inlined: aBoolean\x0a\x09inlined := aBoolean",
messageSends: [],
referencedClasses: []
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
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitVerbatimNode_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitVerbatimNode: self",
messageSends: ["visitVerbatimNode:"],
referencedClasses: []
}),
smalltalk.VerbatimNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function () {
var self=this;
return self['@value'];
return self;},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.VerbatimNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject) {
var self=this;
(self['@value']=anObject);
return self;},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.VerbatimNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.NodeVisitor.comment="I am the abstract super class of all AST node visitors."
smalltalk.addMethod(
"_visitVerbatimNode_",
smalltalk.method({
selector: "visitVerbatimNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: "visitVerbatimNode: aNode\x0a\x09self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler');


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler');


smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler');
smalltalk.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API."


smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler');
smalltalk.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation."


smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler');
smalltalk.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output"


smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler');
smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;},
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
fn: function (aClassName, receiver) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((($receiver = ", "__comma", [receiver]), "__comma", [").klass === smalltalk."]), "__comma", [aClassName]), "__comma", [") ? "])]);
return self;},
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
fn: function (aNode) {
var self=this;
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
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
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.FunCodeGenerator.superclass || nil);
(self['@stream']=smalltalk.send("", "_writeStream", []));
(self['@unknownVariables']=[]);
(self['@tempVariables']=[]);
(self['@argVariables']=[]);
(self['@messageSends']=[]);
(self['@classReferenced']=[]);
return self;},
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
return self;},
args: ["aSelector", "receiver", "aCollection"],
source: "inline: aSelector receiver: receiver argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a\x0a\x09\x22-- Booleans --\x22\x0a\x0a\x09(aSelector = 'ifFalse:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:ifFalse:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifFalse:ifTrue:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>') ifTrue: [ \x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '+') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver +'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '-') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver -'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '*') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver *'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '/') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver /'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        ^inlined",
messageSends: ["ifTrue:", "=", "isBlockNode", "first", "checkClass:for:", "nextPutAll:", "visit:", "and:", "second"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
category: 'optimizations',
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
return self;},
args: ["aSelector", "anObject", "aCollection"],
source: "inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a \x0a\x09\x22-- BlockClosures --\x22\x0a\x0a\x09(aSelector = 'whileTrue:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileTrue') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '+') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' + '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '-') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' - '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '*') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' * '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '/') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' / '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' < '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' <= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' > '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' >= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a                \x09   \x0a\x09\x22-- UndefinedObject --\x22\x0a\x0a\x09(aSelector = 'ifNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : $receiver'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') != nil && $receiver != undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : nil'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNil:ifNotNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:ifNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a                 \x0a        ^inlined",
messageSends: ["ifTrue:", "=", "and:", "isBlockNode", "first", "nextPutAll:", "visit:", "isNode:ofClass:", "second"],
referencedClasses: ["Number"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
category: 'optimizations',
fn: function (aNode, aClass) {
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;},
args: ["aNode", "aClass"],
source: "isNode: aNode ofClass: aClass\x0a\x09^aNode isValueNode and: [\x0a          \x09aNode value class = aClass or: [\x0a          \x09\x09aNode value = 'self' and: [self currentClass = aClass]]]",
messageSends: ["and:", "isValueNode", "or:", "=", "class", "value", "currentClass"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
category: 'accessing',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;},
args: [],
source: "knownVariables\x0a\x09^self pseudoVariables \x0a\x09\x09addAll: self tempVariables;\x0a\x09\x09addAll: self argVariables;\x0a\x09\x09yourself",
messageSends: ["addAll:", "tempVariables", "argVariables", "yourself", "pseudoVariables"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;},
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
fn: function (aSelector, aReceiver, aCollection, aBoolean) {
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){var tmp=nil;
(tmp=self['@stream']);smalltalk.send(str, "_nextPutAll_", ["smalltalk.send("]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", \x22", "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", ["\x22, ["])]);(self['@stream']=str);smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);(self['@stream']=tmp);smalltalk.send(str, "_nextPutAll_", ["]"]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(self, "_currentClass", [])])]), "__comma", [".superclass || nil"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(self, "_currentClass", [])])]), "__comma", [".superclass || nil"])]);})]));return smalltalk.send(str, "_nextPutAll_", [")"]);})]);
return self;},
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
fn: function () {
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;},
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
fn: function () {
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;},
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
fn: function (aNode) {
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
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
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["("]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["="]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [")"]);
return self;},
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
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function("]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["){"]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09stream nextPutAll: '(function('.\x0a\x09aNode parameters \x0a\x09    do: [:each |\x0a\x09\x09tempVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream nextPutAll: '){'.\x0a\x09aNode nodes do: [:each | self visit: each].\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "parameters", "add:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var index=nil;
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return nil;"]);})() : (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);(index=(0));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return nil;"]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);(index=(0));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);})]);})]));
(self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
return self;},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09| index |\x0a\x09nestedBlocks := nestedBlocks + 1.\x0a\x09aNode nodes isEmpty\x0a\x09    ifTrue: [\x0a\x09\x09stream nextPutAll: 'return nil;']\x0a\x09    ifFalse: [\x0a\x09\x09aNode temps do: [:each | | temp |\x0a                    temp := self safeVariableNameFor: each.\x0a\x09\x09    tempVariables add: temp.\x0a\x09\x09    stream nextPutAll: 'var ', temp, '=nil;'; lf].\x0a\x09\x09index := 0.\x0a\x09\x09aNode nodes do: [:each |\x0a\x09\x09    index := index + 1.\x0a\x09\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09\x09stream nextPutAll: 'return '].\x0a\x09\x09    self visit: each.\x0a\x09\x09    stream nextPutAll: ';']].\x0a\x09nestedBlocks := nestedBlocks - 1",
messageSends: ["+", "ifTrue:ifFalse:", "isEmpty", "nodes", "nextPutAll:", "do:", "temps", "safeVariableNameFor:", "add:", ",", "lf", "ifTrue:", "=", "size", "visit:", "-"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| index |\x0a\x09index := 0.\x0a\x09(tempVariables includes: '$rec') ifFalse: [\x0a\x09\x09tempVariables add: '$rec'].\x0a\x09stream nextPutAll: '(function($rec){'.\x0a\x09aNode nodes do: [:each |\x0a\x09    index := index + 1.\x0a\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09stream nextPutAll: 'return '].\x0a\x09    each receiver: (VariableNode new value: '$rec').\x0a\x09    self visit: each.\x0a\x09    stream nextPutAll: ';'].\x0a\x09stream nextPutAll: '})('.\x0a\x09self visit: aNode receiver.\x0a\x09stream nextPutAll: ')'",
messageSends: ["ifFalse:", "includes:", "add:", "nextPutAll:", "do:", "nodes", "+", "ifTrue:", "=", "size", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: ["VariableNode"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [")"])]);
return self;},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09(referencedClasses includes: aNode value) ifFalse: [\x0a\x09\x09referencedClasses add: aNode value].\x0a\x09stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'",
messageSends: ["ifFalse:", "includes:", "value", "add:", "nextPutAll:", ","],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["["]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
return self;},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09stream nextPutAll: '['.\x0a\x09aNode nodes \x0a\x09\x09do: [:each | self visit: each]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["])"]);
return self;},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09aNode nodes \x0a\x09\x09\x09do: [:each | self visit: each]\x0a\x09\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
category: 'visiting',
fn: function (aFailure) {
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;},
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
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);
return self;},
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


smalltalk.addClass('ImpCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables', 'mutables', 'target', 'lazyVars', 'realVarNames'], 'Compiler');
smalltalk.addMethod(
"_aboutToModifyState",
smalltalk.method({
selector: "aboutToModifyState",
category: 'compilation DSL',
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
return self;},
args: [],
source: "aboutToModifyState\x0a| list old |\x0a\x09list := mutables.\x0a\x09mutables := Set new.\x0a\x09old := self switchTarget: nil.\x0a\x09list do: [ :each | | value |\x0a\x09\x09self switchTarget: each.\x0a\x09\x09self realAssign: (lazyVars at: each)\x0a\x09].\x0a\x09self switchTarget: old",
messageSends: ["new", "switchTarget:", "do:", "realAssign:", "at:"],
referencedClasses: ["Set"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;},
args: [],
source: "argVariables\x0a\x09^argVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
category: 'testing',
fn: function (aBoolean) {
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["assertion failed"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["assertion failed"]);})]));
return self;},
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09aBoolean ifFalse: [ self error: 'assertion failed' ]",
messageSends: ["ifFalse:", "error:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
category: 'optimizations',
fn: function (aClassName, receiver) {
var self=this;
smalltalk.send(self, "_prvCheckClass_for_", [aClassName, receiver]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["{"]);
return self;},
args: ["aClassName", "receiver"],
source: "checkClass: aClassName for: receiver\x0a\x09self prvCheckClass: aClassName for: receiver.\x0a\x09stream nextPutAll: '{'",
messageSends: ["prvCheckClass:for:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_includeIf_",
smalltalk.method({
selector: "checkClass:for:includeIf:",
category: 'optimizations',
fn: function (aClassName, receiver, aBoolean){
var self=this;
smalltalk.send(self, "_prvCheckClass_for_", [aClassName, receiver]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "if((";})() : (function(){return "if(!(";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "if((";}), (function(){return "if(!(";})])), "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [")) {"])]);
return self;},
args: ["aClassName", "receiver", "aBoolean"],
source: "checkClass: aClassName for: receiver includeIf: aBoolean\x0a\x09self prvCheckClass: aClassName for: receiver.\x0a\x09stream nextPutAll: (aBoolean ifTrue: ['if(('] ifFalse: ['if(!(']), (self useValueNamed: receiver), ')) {'",
messageSends: ["prvCheckClass:for:", "nextPutAll:", ",", "ifTrue:ifFalse:", "useValueNamed:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode) {
var self=this;
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09stream := '' writeStream.\x0a\x09self visit: aNode.\x0a\x09^stream contents",
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_ifValueWanted_",
smalltalk.method({
selector: "ifValueWanted:",
category: 'compilation DSL',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@target'], "_ifNotNil_", [aBlock]);
return self;},
args: ["aBlock"],
source: "ifValueWanted: aBlock\x0a\x09target ifNotNil: aBlock",
messageSends: ["ifNotNil:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream. \x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09messageSends := #().\x0a\x09classReferenced := #().\x0a\x09mutables := Set new.\x0a\x09realVarNames := Set new.\x0a\x09lazyVars := HashedCollection new.\x0a\x09target := nil\x0a",
messageSends: ["initialize", "writeStream", "new"],
referencedClasses: ["Set", "HashedCollection"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
category: 'optimizations',
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
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aSelector", "receiver", "aCollection"],
source: "inline: aSelector receiver: receiver argumentNodes: aCollection\x0a\x0a\x09\x22-- Booleans --\x22\x0a\x0a\x09(aSelector = 'ifFalse:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a\x09\x09\x09self checkClass: 'Boolean' for: receiver includeIf: false.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndElse: [ self nilIfValueWanted ].\x0a\x09\x09\x09^true]].\x0a\x0a\x09(aSelector = 'ifTrue:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a\x09\x09\x09self checkClass: 'Boolean' for: receiver includeIf: true.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndElse: [ self nilIfValueWanted ].\x0a\x09\x09\x09^true]].\x0a\x0a\x09(aSelector = 'ifTrue:ifFalse:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a\x09\x09\x09self checkClass: 'Boolean' for: receiver includeIf: true.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection second nodes first ].\x0a\x09\x09\x09^true]].\x0a\x0a\x09(aSelector = 'ifFalse:ifTrue:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a\x09\x09\x09self checkClass: 'Boolean' for: receiver includeIf: false.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection second nodes first ].\x0a\x09\x09\x09^true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '<') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '<', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a\x09(aSelector = '<=') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '<=', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a\x09(aSelector = '>') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '>', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a\x09(aSelector = '>=') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '>=', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a        (aSelector = '+') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '+', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a        (aSelector = '-') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '-', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a        (aSelector = '*') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '*', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a        (aSelector = '/') ifTrue: [ | operand |\x0a\x09\x09operand := self isolatedUse: aCollection first.\x0a\x09\x09self checkClass: 'Number' for: receiver.\x0a\x09\x09self prvPutAndElse: [\x0a\x09\x09\x09self lazyAssignExpression: '(', (self useValueNamed: receiver), '/', operand, ')' ].\x0a\x09\x09^{ VerbatimNode new value: operand }].\x0a\x0a        ^nil",
messageSends: ["ifTrue:", "=", "isBlockNode", "first", "checkClass:for:includeIf:", "prvPutAndElse:", "visit:", "nodes", "nilIfValueWanted", "and:", "second", "isolatedUse:", "checkClass:for:", "lazyAssignExpression:", ",", "useValueNamed:", "value:", "new"],
referencedClasses: ["VerbatimNode"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
category: 'optimizations',
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
return self;},
args: ["aSelector", "anObject", "aCollection"],
source: "inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a \x0a\x09\x22-- BlockClosures --\x22\x0a\x0a\x09(aSelector = 'whileTrue:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [ | old |\x0a\x09\x09\x09self prvWhileConditionStatement: 'for(;;){' pre: 'if (!(' condition: anObject post: ')) {'.\x0a\x09\x09\x09stream nextPutAll: 'break}', self mylf.\x0a\x09\x09\x09self prvPutAndClose: [ self visit: aCollection first nodes first targetBeing: nil ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [ | old |\x0a\x09\x09\x09self prvWhileConditionStatement: 'for(;;){' pre: 'if ((' condition: anObject post: ')) {'.\x0a\x09\x09\x09stream nextPutAll: 'break}', self mylf.\x0a\x09\x09\x09self prvPutAndClose: [ self visit: aCollection first nodes first targetBeing: nil ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileTrue') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a\x09\x09\x09self prvWhileConditionStatement: 'do{' pre: '}while((' condition: anObject post: '));', self mylf.\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a\x09\x09\x09self prvWhileConditionStatement: 'do{' pre: '}while(!(' condition: anObject post: '));', self mylf.\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(#('+' '-' '*' '/' '<' '<=' '>=' '>') includes: aSelector) ifTrue: [\x0a\x09\x09(self prvInlineNumberOperator: aSelector on: anObject and: aCollection first) ifTrue: [\x0a\x09\x09\x09inlined := true]].\x0a                \x09   \x0a\x09\x22-- UndefinedObject --\x22\x0a\x0a\x09(aSelector = 'ifNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [ | rcv |\x0a\x09\x09\x09self aboutToModifyState.\x0a\x09\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09\x09self makeTargetRealVariable.\x0a\x09\x09\x09stream nextPutAll: 'if((', rcv, ') === nil || (', rcv, ') == null) {'.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndClose: [ self lazyAssignValue: rcv ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [ | rcv |\x0a\x09\x09\x09self aboutToModifyState.\x0a\x09\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09\x09self makeTargetRealVariable.\x0a\x09\x09\x09stream nextPutAll: 'if((', rcv, ') !== nil && (', rcv, ') != null) {'.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndClose: [ self lazyAssignValue: rcv ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNil:ifNotNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [ | rcv |\x0a\x09\x09\x09self aboutToModifyState.\x0a\x09\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09\x09self makeTargetRealVariable.\x0a\x09\x09\x09stream nextPutAll: 'if((', rcv, ') === nil || (', rcv, ') == null) {'.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndClose: [ self visit: aCollection second nodes first ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:ifNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [ | rcv |\x0a\x09\x09\x09self aboutToModifyState.\x0a\x09\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09\x09self makeTargetRealVariable.\x0a\x09\x09\x09stream nextPutAll: 'if((', rcv, ') !== nil && (', rcv, ') != null) {'.\x0a\x09\x09\x09self prvPutAndElse: [ self visit: aCollection first nodes first ].\x0a\x09\x09\x09self prvPutAndClose: [ self visit: aCollection second nodes first ].\x0a\x09\x09\x09inlined := true]].\x0a\x0a\x09(aSelector = 'isNil') ifTrue: [ | rcv |\x0a\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09self lazyAssignValue: '((', rcv, ') === nil || (', rcv, ') == null)'.\x0a\x09\x09inlined := true].\x0a\x0a\x09(aSelector = 'notNil') ifTrue: [ | rcv |\x0a\x09\x09rcv := self isolatedUse: anObject.\x0a\x09\x09rcv = 'super' ifTrue: [ rcv := 'self' ].\x0a\x09\x09self lazyAssignValue: '((', rcv, ') !== nil && (', rcv, ') != null)'.\x0a\x09\x09inlined := true].\x0a\x0a        ^inlined",
messageSends: ["ifTrue:", "=", "and:", "isBlockNode", "first", "prvWhileConditionStatement:pre:condition:post:", "nextPutAll:", ",", "mylf", "prvPutAndClose:", "visit:targetBeing:", "nodes", "includes:", "prvInlineNumberOperator:on:and:", "aboutToModifyState", "isolatedUse:", "makeTargetRealVariable", "prvPutAndElse:", "visit:", "lazyAssignValue:", "second"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
category: 'optimizations',
fn: function (aNode, aClass) {
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;},
args: ["aNode", "aClass"],
source: "isNode: aNode ofClass: aClass\x0a\x09^aNode isValueNode and: [\x0a          \x09aNode value class = aClass or: [\x0a          \x09\x09aNode value = 'self' and: [self currentClass = aClass]]]",
messageSends: ["and:", "isValueNode", "or:", "=", "class", "value", "currentClass"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isolated_",
smalltalk.method({
selector: "isolated:",
category: 'compilation DSL',
fn: function (node){
var self=this;
return smalltalk.send(self, "_visit_targetBeing_", [node, smalltalk.send(self, "_nextLazyvarName", [])]);
return self;},
args: ["node"],
source: "isolated: node\x0a \x09^ self visit: node targetBeing: self nextLazyvarName",
messageSends: ["visit:targetBeing:", "nextLazyvarName"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isolatedUse_",
smalltalk.method({
selector: "isolatedUse:",
category: 'compilation DSL',
fn: function (node){
var self=this;
var old=nil;
(old=smalltalk.send(self, "_switchTarget_", [smalltalk.send(self, "_nextLazyvarName", [])]));
smalltalk.send(self, "_visit_", [node]);
return smalltalk.send(self, "_useValueNamed_", [smalltalk.send(self, "_switchTarget_", [old])]);
return self;},
args: ["node"],
source: "isolatedUse: node\x0a| old |\x0a\x09old := self switchTarget: self nextLazyvarName.\x0a\x09self visit: node.\x0a\x09^self useValueNamed: (self switchTarget: old)",
messageSends: ["switchTarget:", "nextLazyvarName", "visit:", "useValueNamed:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
category: 'accessing',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;},
args: [],
source: "knownVariables\x0a\x09^self pseudoVariables \x0a\x09\x09addAll: self tempVariables;\x0a\x09\x09addAll: self argVariables;\x0a\x09\x09yourself",
messageSends: ["addAll:", "tempVariables", "argVariables", "yourself", "pseudoVariables"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssign_dependsOnState_",
smalltalk.method({
selector: "lazyAssign:dependsOnState:",
category: 'compilation DSL',
fn: function (aString, aBoolean){
var self=this;
((($receiver = smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));})() : (function(){return smalltalk.send(self, "_realAssign_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));}), (function(){return smalltalk.send(self, "_realAssign_", [aString]);})]));
return self;},
args: ["aString", "aBoolean"],
source: "lazyAssign: aString dependsOnState: aBoolean\x0a\x09(lazyVars includesKey: target)\x0a\x09\x09ifTrue: [ lazyVars at: target put: aString. aBoolean ifTrue: [ mutables add: target ] ]\x0a\x09\x09ifFalse: [ self realAssign: aString ]",
messageSends: ["ifTrue:ifFalse:", "includesKey:", "at:put:", "ifTrue:", "add:", "realAssign:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignExpression_",
smalltalk.method({
selector: "lazyAssignExpression:",
category: 'compilation DSL',
fn: function (aString){
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, true]);
return self;},
args: ["aString"],
source: "lazyAssignExpression: aString\x0a\x09self lazyAssign: aString dependsOnState: true",
messageSends: ["lazyAssign:dependsOnState:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignValue_",
smalltalk.method({
selector: "lazyAssignValue:",
category: 'compilation DSL',
fn: function (aString){
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, false]);
return self;},
args: ["aString"],
source: "lazyAssignValue: aString\x0a\x09self lazyAssign: aString dependsOnState: false",
messageSends: ["lazyAssign:dependsOnState:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_makeTargetRealVariable",
smalltalk.method({
selector: "makeTargetRealVariable",
category: 'compilation DSL',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@lazyVars'], "_removeKey_", [self['@target']]);smalltalk.send(self['@lazyVars'], "_at_put_", [smalltalk.send("assigned ", "__comma", [self['@target']]), nil]);return smalltalk.send(self['@realVarNames'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@lazyVars'], "_removeKey_", [self['@target']]);smalltalk.send(self['@lazyVars'], "_at_put_", [smalltalk.send("assigned ", "__comma", [self['@target']]), nil]);return smalltalk.send(self['@realVarNames'], "_add_", [self['@target']]);})]));
return self;},
args: [],
source: "makeTargetRealVariable\x0a\x09(lazyVars includesKey: target) ifTrue: [\x0a\x09\x09lazyVars removeKey: target.\x0a\x09\x09lazyVars at: 'assigned ',target put: nil. \x22<-- only to retain size, it is used in nextLazyvarName\x22\x0a\x09\x09realVarNames add: target ].",
messageSends: ["ifTrue:", "includesKey:", "removeKey:", "at:put:", ",", "add:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_mylf",
smalltalk.method({
selector: "mylf",
category: 'output',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.String || String), "_lf", []), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Array || Array), "_new_", [((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]))]), "_join_", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);
return self;},
args: [],
source: "mylf\x0a\x09^String lf, ((Array new: nestedBlocks+2)  join: String tab)",
messageSends: [",", "lf", "join:", "new:", "+", "tab"],
referencedClasses: ["String", "Array"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_nextLazyvarName",
smalltalk.method({
selector: "nextLazyvarName",
category: 'compilation DSL',
fn: function (){
var self=this;
var name=nil;
(name=smalltalk.send("$", "__comma", [smalltalk.send(smalltalk.send(self['@lazyVars'], "_size", []), "_asString", [])]));
smalltalk.send(self['@lazyVars'], "_at_put_", [name, name]);
return name;
return self;},
args: [],
source: "nextLazyvarName\x0a\x09| name |\x0a\x09name := '$', lazyVars size asString.\x0a\x09lazyVars at: name put: name.\x0a\x09^name",
messageSends: [",", "asString", "size", "at:put:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_nilIfValueWanted",
smalltalk.method({
selector: "nilIfValueWanted",
category: 'compilation DSL',
fn: function (){
var self=this;
(($receiver = self['@target']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_lazyAssignValue_", ["nil"]);})() : nil;
return self;},
args: [],
source: "nilIfValueWanted\x0a\x09target ifNotNil: [ self lazyAssignValue: 'nil' ]",
messageSends: ["ifNotNil:", "lazyAssignValue:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;},
args: [],
source: "performOptimizations\x0a\x09^self class performOptimizations",
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvCheckClass_for_",
smalltalk.method({
selector: "prvCheckClass:for:",
category: 'optimizations',
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self, "_makeTargetRealVariable", []);
smalltalk.send(self, "_aboutToModifyState", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("if((", "__comma", [smalltalk.send(self, "_useValueNamed_", [receiver])]), "__comma", [").klass === smalltalk."]), "__comma", [aClassName]), "__comma", [") "])]);
return self;},
args: ["aClassName", "receiver"],
source: "prvCheckClass: aClassName for: receiver\x0a\x09self makeTargetRealVariable.\x0a\x09self aboutToModifyState.\x0a        stream nextPutAll: 'if((', (self useValueNamed: receiver), ').klass === smalltalk.', aClassName, ') '",
messageSends: ["makeTargetRealVariable", "aboutToModifyState", "nextPutAll:", ",", "useValueNamed:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvInlineNumberOperator_on_and_",
smalltalk.method({
selector: "prvInlineNumberOperator:on:and:",
category: 'optimizations',
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
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aSelector", "receiverNode", "operandNode"],
source: "prvInlineNumberOperator: aSelector on: receiverNode and: operandNode\x0a\x09(aSelector = aSelector) ifTrue: [\x0a\x09\x09(self isNode: receiverNode ofClass: Number) ifTrue: [\x0a\x09\x09\x09| rcv operand |\x0a\x09\x09\x09rcv := self isolated: receiverNode.\x0a\x09\x09\x09operand := self isolated: operandNode.\x0a\x09\x09\x09self lazyAssignValue: ((self useValueNamed: rcv), aSelector, (self useValueNamed: operand)).\x0a\x09\x09\x09^true]].\x0a\x09^false\x0a",
messageSends: ["ifTrue:", "=", "isNode:ofClass:", "isolated:", "lazyAssignValue:", ",", "useValueNamed:"],
referencedClasses: ["Number"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvPutAndClose_",
smalltalk.method({
selector: "prvPutAndClose:",
category: 'output',
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send("}", "__comma", [smalltalk.send(self, "_mylf", [])])]);
return self;},
args: ["aBlock"],
source: "prvPutAndClose: aBlock\x0a\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}', self mylf\x0a",
messageSends: ["value", "nextPutAll:", ",", "mylf"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvPutAndElse_",
smalltalk.method({
selector: "prvPutAndElse:",
category: 'output',
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["} else {"]);
return self;},
args: ["aBlock"],
source: "prvPutAndElse: aBlock\x0a\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '} else {'\x0a",
messageSends: ["value", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_prvWhileConditionStatement_pre_condition_post_",
smalltalk.method({
selector: "prvWhileConditionStatement:pre:condition:post:",
category: 'optimizations',
fn: function (stmtString, preString, anObject, postString){
var self=this;
var x=nil;
smalltalk.send(self['@stream'], "_nextPutAll_", [stmtString]);
(x=smalltalk.send(self, "_isolatedUse_", [smalltalk.send(smalltalk.send(anObject, "_nodes", []), "_first", [])]));
smalltalk.send(x, "_ifEmpty_", [(function(){return (x="\x22should not reach - receiver includes ^\x22");})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(preString, "__comma", [x]), "__comma", [postString])]);
smalltalk.send(self, "_nilIfValueWanted", []);
return self;},
args: ["stmtString", "preString", "anObject", "postString"],
source: "prvWhileConditionStatement: stmtString pre: preString condition: anObject post: postString\x0a\x09| x |\x0a\x09stream nextPutAll: stmtString.\x0a\x09x := self isolatedUse: anObject nodes first.\x0a\x09x ifEmpty: [ x := '\x22should not reach - receiver includes ^\x22' ].\x0a\x09stream nextPutAll: preString, x, postString.\x0a\x09self nilIfValueWanted",
messageSends: ["nextPutAll:", "isolatedUse:", "first", "nodes", "ifEmpty:", ",", "nilIfValueWanted"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_putTemps_",
smalltalk.method({
selector: "putTemps:",
category: 'output',
fn: function (temps) {
var self=this;
smalltalk.send(temps, "_ifNotEmpty_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", ["var "]);smalltalk.send(temps, "_do_separatedBy_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(temp, "__comma", ["=nil"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(";", "__comma", [smalltalk.send(self, "_mylf", [])])]);})]);
return self;},
args: ["temps"],
source: "putTemps: temps\x0a    temps ifNotEmpty: [\x0a\x09stream nextPutAll: 'var '.\x0a\x09temps do: [:each | | temp |\x0a            temp := self safeVariableNameFor: each.\x0a\x09    tempVariables add: temp.\x0a\x09    stream nextPutAll: temp, '=nil'] separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';', self mylf\x0a    ]",
messageSends: ["ifNotEmpty:", "nextPutAll:", "do:separatedBy:", "safeVariableNameFor:", "add:", ",", "mylf"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_realAssign_",
smalltalk.method({
selector: "realAssign:",
category: 'compilation DSL',
fn: function (aString){
var self=this;
var closer=nil;
smalltalk.send(aString, "_ifNotEmpty_", [(function(){smalltalk.send(self, "_aboutToModifyState", []);(closer="");smalltalk.send(self, "_ifValueWanted_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [((($receiver = smalltalk.send(self['@target'], "__eq", ["^"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "return ";})() : (function(){return ((($receiver = smalltalk.send(self['@target'], "__eq", ["!"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(closer="]");return "throw $early=[";})() : (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(closer="]");return "throw $early=[";}), (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "return ";}), (function(){return ((($receiver = smalltalk.send(self['@target'], "__eq", ["!"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(closer="]");return "throw $early=[";})() : (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(closer="]");return "throw $early=[";}), (function(){return smalltalk.send(self['@target'], "__comma", ["="]);})]));})]))]);})]);smalltalk.send(self, "_makeTargetRealVariable", []);return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(aString, "__comma", [closer]), "__comma", [";"]), "__comma", [smalltalk.send(self, "_mylf", [])])]);})]);
return self;},
args: ["aString"],
source: "realAssign: aString\x0a\x09| closer |\x0a\x09aString ifNotEmpty: [\x0a\x09\x09self aboutToModifyState.\x0a\x09\x09closer := ''.\x0a\x09\x09self ifValueWanted: [ stream nextPutAll:\x0a\x09\x09\x09(target = '^' ifTrue: ['return '] ifFalse: [\x0a\x09\x09\x09\x09target = '!' ifTrue: [ closer := ']'. 'throw $early=['] ifFalse: [\x0a\x09\x09\x09\x09\x09target, '=']]) ].\x0a\x09\x09self makeTargetRealVariable.\x0a\x09\x09stream nextPutAll: aString, closer, ';', self mylf ]",
messageSends: ["ifNotEmpty:", "aboutToModifyState", "ifValueWanted:", "nextPutAll:", "ifTrue:ifFalse:", "=", ",", "makeTargetRealVariable", "mylf"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
category: 'visiting',
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
var args=nil;
(args=smalltalk.send(self, "_isolated_", [(function($rec){smalltalk.send($rec, "_nodes_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.DynamicArrayNode || DynamicArrayNode), "_new", []))]));
smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){smalltalk.send(str, "_nextPutAll_", ["smalltalk.send("]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [aReceiver])]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(", \x22", "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", ["\x22, "])]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [args])]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(", smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]));return smalltalk.send(str, "_nextPutAll_", [")"]);})])]);
return self;},
args: ["aSelector", "aReceiver", "aCollection", "aBoolean"],
source: "send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean\x0a\x09| args |\x0a\x09args := self isolated: (DynamicArrayNode new nodes: aCollection; yourself).\x0a\x09self lazyAssignExpression: (String streamContents: [ :str |\x0a\x09\x09str nextPutAll: 'smalltalk.send('.\x0a\x09\x09str nextPutAll: (self useValueNamed: aReceiver).\x0a\x09\x09str nextPutAll: ', \x22', aSelector asSelector, '\x22, '.\x0a\x09\x09str nextPutAll: (self useValueNamed: args).\x0a\x09\x09aBoolean ifTrue: [\x0a\x09\x09\x09str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass superclass)].\x0a\x09\x09str nextPutAll: ')'\x0a\x09])",
messageSends: ["isolated:", "nodes:", "yourself", "new", "lazyAssignExpression:", "streamContents:", "nextPutAll:", "useValueNamed:", ",", "asSelector", "ifTrue:", "classNameFor:", "superclass", "currentClass"],
referencedClasses: ["DynamicArrayNode", "String"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_sequenceOfNodes_temps_",
smalltalk.method({
selector: "sequenceOfNodes:temps:",
category: 'visiting',
fn: function (nodes, temps){
var self=this;
((($receiver = smalltalk.send(nodes, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){var old=nil;
var index=nil;
smalltalk.send(self, "_putTemps_", [temps]);(old=smalltalk.send(self, "_switchTarget_", [nil]));(index=(0));return smalltalk.send(nodes, "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(nodes, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchTarget_", [old]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_switchTarget_", [old]);})]));return smalltalk.send(self, "_visit_", [each]);})]);})() : (function(){return smalltalk.send(self, "_nilIfValueWanted", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){var old=nil;
var index=nil;
smalltalk.send(self, "_putTemps_", [temps]);(old=smalltalk.send(self, "_switchTarget_", [nil]));(index=(0));return smalltalk.send(nodes, "_do_", [(function(each){(index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(nodes, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_switchTarget_", [old]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_switchTarget_", [old]);})]));return smalltalk.send(self, "_visit_", [each]);})]);}), (function(){return smalltalk.send(self, "_nilIfValueWanted", []);})]));
return self;},
args: ["nodes", "temps"],
source: "sequenceOfNodes: nodes temps: temps\x0a\x09nodes isEmpty\x0a\x09\x09ifFalse: [ | old index |\x0a\x09\x09\x09self putTemps: temps.\x0a\x09\x09\x09old :=self switchTarget: nil.\x0a\x09\x09\x09index := 0.\x0a\x09\x09\x09nodes do: [:each |\x0a\x09\x09\x09\x09index := index + 1.\x0a\x09\x09\x09\x09index = nodes size ifTrue: [ self switchTarget: old ].\x0a\x09\x09\x09self visit: each ]]\x0a\x09\x09ifTrue: [ self nilIfValueWanted ]",
messageSends: ["ifFalse:ifTrue:", "isEmpty", "putTemps:", "switchTarget:", "do:", "+", "ifTrue:", "=", "size", "visit:", "nilIfValueWanted"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_switchTarget_",
smalltalk.method({
selector: "switchTarget:",
category: 'compilation DSL',
fn: function (aString){
var self=this;
var old=nil;
(old=self['@target']);
(self['@target']=aString);
return old;
return self;},
args: ["aString"],
source: "switchTarget: aString\x0a\x09| old |\x0a\x09old := target.\x0a\x09target := aString.\x0a\x09^old",
messageSends: [],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;},
args: [],
source: "tempVariables\x0a\x09^tempVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_useValueNamed_",
smalltalk.method({
selector: "useValueNamed:",
category: 'compilation DSL',
fn: function (key){
var self=this;
var $early={};
try{var val=nil;
((($receiver = smalltalk.send(self['@realVarNames'], "_includes_", [key])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[key]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[key]})();})]));
smalltalk.send(self['@mutables'], "_remove_", [key]);
return smalltalk.send(self['@lazyVars'], "_at_", [key]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["key"],
source: "useValueNamed: key\x0a\x09| val |\x0a\x09(realVarNames includes: key) ifTrue: [ ^key ].\x0a\x09mutables remove: key.\x0a\x09^lazyVars at: key",
messageSends: ["ifTrue:", "includes:", "remove:", "at:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
args: ["aNode"],
source: "visit: aNode\x0a\x09aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visit_targetBeing_",
smalltalk.method({
selector: "visit:targetBeing:",
category: 'compilation DSL',
fn: function (aNode, aString){
var self=this;
var old=nil;
(old=smalltalk.send(self, "_switchTarget_", [aString]));
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self, "_switchTarget_", [old]);
return self;},
args: ["aNode", "aString"],
source: "visit: aNode targetBeing: aString\x0a| old |\x0a\x09old := self switchTarget: aString.\x0a\x09self visit: aNode.\x0a\x09^ self switchTarget: old.\x0a",
messageSends: ["switchTarget:", "visit:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a| olds oldt |\x0a\x09olds := stream.\x0a\x09stream := '' writeStream.\x0a\x09oldt := self switchTarget: self nextLazyvarName.\x0a\x09self visit: aNode left.\x0a\x09self assert: (lazyVars at: target) ~= target.\x0a\x09self switchTarget: (self useValueNamed: (self switchTarget: nil)).\x0a\x09self assert: (lazyVars includesKey: target) not.\x0a\x09stream := olds.\x0a\x09self visit: aNode right.\x0a\x09olds := self switchTarget: oldt.\x0a\x09self ifValueWanted: [ self lazyAssignExpression: olds ]",
messageSends: ["writeStream", "switchTarget:", "nextLazyvarName", "visit:", "left", "assert:", "~=", "at:", "useValueNamed:", "not", "includesKey:", "right", "ifValueWanted:", "lazyAssignExpression:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a| oldt olds oldm |\x0a\x09self assert: aNode nodes size = 1.\x0a\x09oldt := self switchTarget: '^'.\x0a\x09olds := stream.\x0a\x09stream := '' writeStream.\x0a\x09stream nextPutAll: '(function('.\x0a\x09aNode parameters \x0a\x09    do: [:each |\x0a\x09\x09tempVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream nextPutAll: '){'.\x0a\x09nestedBlocks := nestedBlocks + 1.\x0a\x09oldm := mutables.\x0a\x09mutables := Set new.\x0a\x09self visit: aNode nodes first.\x0a\x09self assert: mutables isEmpty.\x0a\x09mutables := oldm.\x0a\x09nestedBlocks := nestedBlocks - 1.\x0a\x09stream nextPutAll: '})'.\x0a\x09self switchTarget: oldt.\x0a\x09oldt := stream contents.\x0a\x09stream := olds.\x0a\x09self lazyAssignExpression: oldt",
messageSends: ["assert:", "=", "size", "nodes", "switchTarget:", "writeStream", "nextPutAll:", "do:separatedBy:", "parameters", "add:", "+", "new", "visit:", "first", "isEmpty", "-", "contents", "lazyAssignExpression:"],
referencedClasses: ["Set"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);
return self;},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09self sequenceOfNodes: aNode nodes temps: aNode temps",
messageSends: ["sequenceOfNodes:temps:", "nodes", "temps"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var rcv=nil;
(rcv=smalltalk.send(self, "_isolated_", [smalltalk.send(aNode, "_receiver", [])]));
smalltalk.send(self, "_aboutToModifyState", []);
(rcv=smalltalk.send(self, "_useValueNamed_", [rcv]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VerbatimNode || VerbatimNode), "_new", []), "_value_", [rcv])]);})]);
smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), []]);
return self;},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| rcv |\x0a\x09rcv := self isolated: aNode receiver.\x0a\x09self aboutToModifyState.\x0a\x09rcv := self useValueNamed: rcv.\x0a\x09aNode nodes do: [:each |\x0a\x09\x09each receiver: (VerbatimNode new value: rcv) ].\x0a\x09self sequenceOfNodes: aNode nodes temps: #()",
messageSends: ["isolated:", "receiver", "aboutToModifyState", "useValueNamed:", "do:", "nodes", "receiver:", "value:", "new", "sequenceOfNodes:temps:"],
referencedClasses: ["VerbatimNode"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [")"])]);
return self;},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09(referencedClasses includes: aNode value) ifFalse: [\x0a\x09\x09referencedClasses add: aNode value].\x0a\x09self lazyAssignExpression: '(smalltalk.', aNode value, ' || ', aNode value, ')'",
messageSends: ["ifFalse:", "includes:", "value", "add:", "lazyAssignExpression:", ","],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var args=nil;
(args=smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_collect_", [(function(node){return smalltalk.send(self, "_isolated_", [node]);})]));
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){smalltalk.send(str, "_nextPutAll_", ["["]);smalltalk.send(args, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self, "_useValueNamed_", [each])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [", "]);})]);return smalltalk.send(str, "_nextPutAll_", ["]"]);})])]);
return self;},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| args |\x0a\x09args :=aNode nodes collect: [ :node | self isolated: node ].\x0a\x09self lazyAssignValue: (String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '['.\x0a\x09\x09args\x0a\x09    \x09\x09do: [:each | str nextPutAll: (self useValueNamed: each) ]\x0a\x09    \x09\x09separatedBy: [str nextPutAll: ', '].\x0a                str nextPutAll: ']'\x0a\x09])",
messageSends: ["collect:", "nodes", "isolated:", "lazyAssignValue:", "streamContents:", "nextPutAll:", "do:separatedBy:", "useValueNamed:"],
referencedClasses: ["String"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var elements=nil;
(elements=smalltalk.send(self, "_isolated_", [(function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(aNode, "_nodes", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.DynamicArrayNode || DynamicArrayNode), "_new", []))]));
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send("smalltalk.HashedCollection._fromPairs_(", "__comma", [smalltalk.send(self, "_useValueNamed_", [elements])]), "__comma", [")"])]);
return self;},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| elements |\x0a\x09elements := self isolated: (DynamicArrayNode new nodes: aNode nodes; yourself).\x0a\x09self lazyAssignValue: 'smalltalk.HashedCollection._fromPairs_(', (self useValueNamed: elements), ')'",
messageSends: ["isolated:", "nodes:", "nodes", "yourself", "new", "lazyAssignValue:", ",", "useValueNamed:"],
referencedClasses: ["DynamicArrayNode"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
category: 'visiting',
fn: function (aFailure) {
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;},
args: ["aFailure"],
source: "visitFailure: aFailure\x0a\x09self error: aFailure asString",
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_aboutToModifyState", []);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(";", "__comma", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [">>", ">"])]), "__comma", [";"]), "__comma", [smalltalk.send(self, "_mylf", [])])]);
return self;},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09self aboutToModifyState.\x0a\x09stream nextPutAll: ';', (aNode source replace: '>>' with: '>'), ';', self mylf",
messageSends: ["aboutToModifyState", "nextPutAll:", ",", "replace:with:", "source", "mylf"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09| str currentSelector | \x0a\x09currentSelector := aNode selector asSelector.\x0a\x09nestedBlocks := 0.\x0a\x09earlyReturn := false.\x0a\x09messageSends := #().\x0a\x09referencedClasses := #().\x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09lazyVars := HashedCollection new.\x0a\x09mutables := Set new.\x0a\x09realVarNames := Set new.\x0a\x09stream \x0a\x09    nextPutAll: 'smalltalk.method({'; lf;\x0a\x09    nextPutAll: 'selector: \x22', aNode selector, '\x22,'; lf.\x0a\x09stream nextPutAll: 'source: ', self source asJavascript, ',';lf.\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09aNode arguments \x0a\x09    do: [:each | \x0a\x09\x09argVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream \x0a\x09    nextPutAll: '){var self=this;', self mylf.\x0a\x09str := stream.\x0a\x09stream := '' writeStream.\x0a\x09self switchTarget: nil.\x0a\x09self assert: aNode nodes size = 1.\x0a\x09self visit: aNode nodes first.\x0a\x09realVarNames ifNotEmpty: [ str nextPutAll: 'var ', (realVarNames asArray join: ','), ';', self mylf ].\x0a\x09earlyReturn ifTrue: [\x0a\x09    str nextPutAll: 'var $early={}; try{', self mylf].\x0a\x09str nextPutAll: stream contents.\x0a\x09stream := str.\x0a\x09(aNode nodes first nodes notEmpty and: [ |checker|\x0a\x09    checker := ReturnNodeChecker new.\x0a\x09    checker visit: aNode nodes first nodes last.\x0a\x09    checker wasReturnNode]) ifFalse: [ self switchTarget: '^'. self lazyAssignValue: 'self'. self switchTarget: nil ].\x0a\x09earlyReturn ifTrue: [\x0a\x09    stream nextPutAll: '} catch(e) {if(e===$early) return e[0]; throw e}'].\x0a\x09stream nextPutAll: '}'.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: messageSends asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', argVariables asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09referencedClasses \x0a\x09\x09do: [:each | stream nextPutAll: each printString]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'.\x0a\x09stream nextPutAll: '})'.\x0a\x09self assert: mutables isEmpty",
messageSends: ["asSelector", "selector", "new", "nextPutAll:", "lf", ",", "asJavascript", "source", "do:separatedBy:", "arguments", "add:", "mylf", "writeStream", "switchTarget:", "assert:", "=", "size", "nodes", "visit:", "first", "ifNotEmpty:", "join:", "asArray", "ifTrue:", "contents", "ifFalse:", "and:", "notEmpty", "last", "wasReturnNode", "lazyAssignValue:", "printString", "isEmpty"],
referencedClasses: ["HashedCollection", "Set", "ReturnNodeChecker", "String"]
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", []), "__eq", [(1)])]);
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@earlyReturn']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@earlyReturn']=true);})]));
smalltalk.send(self, "_visit_targetBeing_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), ((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "!";})() : (function(){return "^";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "!";}), (function(){return "^";})]))]);
smalltalk.send(self, "_lazyAssignValue_", [""]);
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09self assert: aNode nodes size = 1.\x0a\x09nestedBlocks > 0 ifTrue: [\x0a\x09    earlyReturn := true].\x0a\x09self\x0a\x09\x09visit: aNode nodes first\x0a\x09\x09targetBeing: (nestedBlocks > 0 ifTrue: ['!'] ifFalse: ['^']).\x0a\x09self lazyAssignValue: ''",
messageSends: ["assert:", "=", "size", "nodes", "ifTrue:", ">", "visit:targetBeing:", "first", "ifTrue:ifFalse:", "lazyAssignValue:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
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
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aNode"],
source: "visitSendNode: aNode\x0a        | receiver superSend rcv |\x0a        (messageSends includes: aNode selector) ifFalse: [\x0a                messageSends add: aNode selector].\x0a\x09\x0a\x09self performOptimizations \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifTrue: [ ^self ].\x0a\x09\x09].\x0a\x0a\x09rcv := self isolated: aNode receiver.\x0a        superSend := (lazyVars at: rcv ifAbsent: []) = 'super'.\x0a        superSend ifTrue: [ mutables remove: rcv. lazyVars at: rcv put: 'self' ].\x0a\x0a\x09self performOptimizations \x0a\x09\x09ifTrue: [ | inline |\x0a\x09\x09\x09inline := self inline: aNode selector receiver: rcv argumentNodes: aNode arguments.\x0a\x09\x09\x09inline ifNotNil: [ | args |\x0a\x09\x09\x09\x09args := inline = true ifTrue: [ aNode arguments ] ifFalse: [ inline ].\x0a\x09\x09\x09\x09self prvPutAndClose: [ self send: aNode selector to: rcv arguments: args superSend: superSend ].\x0a\x09\x09\x09\x09^self ]].\x0a\x09self send: aNode selector to: rcv arguments: aNode arguments superSend: superSend",
messageSends: ["ifFalse:", "includes:", "selector", "add:", "ifTrue:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "receiver", "arguments", "isolated:", "=", "at:ifAbsent:", "remove:", "at:put:", "inline:receiver:argumentNodes:", "ifNotNil:", "ifTrue:ifFalse:", "prvPutAndClose:", "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_sequenceOfNodes_temps_", [smalltalk.send(aNode, "_nodes", []), smalltalk.send(aNode, "_temps", [])]);})]));
return self;},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode nodes isEmpty ifFalse: [\x0a\x09\x09self sequenceOfNodes: aNode nodes temps: aNode temps ]\x0a",
messageSends: ["ifFalse:", "isEmpty", "nodes", "sequenceOfNodes:temps:", "temps"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self lazyAssignValue: aNode value asJavascript",
messageSends: ["lazyAssignValue:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);})() : (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);}), (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignExpression_", ["(smalltalk.getThisContext())"]);}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);})() : (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_lazyAssignValue_", [varName]);}), (function(){return smalltalk.send(self, "_lazyAssignExpression_", [varName]);})]));})]));})]));})]));
return self;},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09| varName |\x0a\x09(self currentClass allInstanceVariableNames includes: aNode value) \x0a\x09\x09ifTrue: [self lazyAssignExpression: 'self[''@', aNode value, ''']']\x0a\x09\x09ifFalse: [\x0a                  \x09varName := self safeVariableNameFor: aNode value.\x0a\x09\x09\x09(self knownVariables includes: varName) \x0a                  \x09\x09ifFalse: [\x0a                                  \x09unknownVariables add: aNode value.\x0a                                  \x09aNode assigned \x0a                                  \x09\x09ifTrue: [self lazyAssignExpression: varName]\x0a                                  \x09\x09ifFalse: [self lazyAssignExpression: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]\x0a                  \x09\x09ifTrue: [\x0a                                  \x09aNode value = 'thisContext'\x0a                                  \x09\x09ifTrue: [self lazyAssignExpression: '(smalltalk.getThisContext())']\x0a                \x09\x09\x09\x09ifFalse: [(self pseudoVariables includes: varName)\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ self lazyAssignValue: varName ]\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ self lazyAssignExpression: varName]]]]",
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "lazyAssignExpression:", ",", "safeVariableNameFor:", "ifFalse:ifTrue:", "knownVariables", "add:", "assigned", "=", "pseudoVariables", "lazyAssignValue:"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitVerbatimNode_",
smalltalk.method({
selector: "visitVerbatimNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(aNode, "_value", [])]);
return self;},
args: ["aNode"],
source: "visitVerbatimNode: aNode\x0a\x09self lazyAssignValue: aNode value",
messageSends: ["lazyAssignValue:", "value"],
referencedClasses: []
}),
smalltalk.ImpCodeGenerator);


smalltalk.ImpCodeGenerator.klass.iVarNames = ['performOptimizations'];
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
smalltalk.ImpCodeGenerator.klass);

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
smalltalk.ImpCodeGenerator.klass);


smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder."


smalltalk.addClass('ReturnNodeChecker', smalltalk.NodeVisitor, ['wasReturnNode'], 'Compiler');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function () {
var self=this;
(self['@wasReturnNode']=false);
return self;},
args: [],
source: "initialize\x0a\x09wasReturnNode := false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNodeChecker);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
(self['@wasReturnNode']=true);
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09wasReturnNode := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNodeChecker);

smalltalk.addMethod(
"_wasReturnNode",
smalltalk.method({
selector: "wasReturnNode",
category: 'accessing',
fn: function () {
var self=this;
return self['@wasReturnNode'];
return self;},
args: [],
source: "wasReturnNode\x0a\x09^wasReturnNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNodeChecker);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler');
smalltalk.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes."


smalltalk.addClass('PackageLoader', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler');
smalltalk.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  \x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars."


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler');
smalltalk.AliasVar.comment="I am an internally defined variable by the compiler"


smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.ArgVar.comment="I am an argument of a method or block."


smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.ClassRefVar.comment="I am an class reference variable"


smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.InstanceVar.comment="I am an instance variable of a method or block."


smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'"


smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.TempVar.comment="I am an temporary variable of a method or block."


smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler');
smalltalk.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals"


smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anIRInstruction)._appendBlock_(self);
return self}, self, "appendToInstruction:", [anIRInstruction], smalltalk.BlockClosure)},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a    anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
category: '*Compiler',
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
}, self, "nextChunk", [], smalltalk.ChunkParser)},
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This metod returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a        [char := stream next.\x0a        char notNil] whileTrue: [\x0a                 char = '!' ifTrue: [\x0a                         stream peek = '!'\x0a                                ifTrue: [stream next \x22skipping the escape double\x22]\x0a                                ifFalse: [^result contents trimBoth  \x22chunk end marker found\x22]].\x0a                 result nextPut: char].\x0a\x09^nil \x22a chunk needs to end with !\x22",
messageSends: ["writeStream", "whileTrue:", "ifTrue:", "ifTrue:ifFalse:", "next", "trimBoth", "contents", "=", "peek", "nextPut:", "notNil"],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: '*Compiler',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.ChunkParser)},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: '*Compiler',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._stream_(aStream);
return $1;
}, self, "on:", [aStream], smalltalk.ChunkParser.klass)},
args: ["aStream"],
source: "on: aStream\x0a\x09^self new stream: aStream",
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
category: '*Compiler',
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
}, self, "asVariableName", [], smalltalk.String)},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk current reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.String);

smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: '*Compiler',
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
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@codeGeneratorClass"]=aClass;
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentClass"];
return $1;
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
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval(aString);
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.result=nil;
_st((smalltalk.DoIt || DoIt))._addCompiledMethod_(_st(self)._eval_(_st(self)._compileExpression_(aString)));
$ctx1.locals.result=_st(_st((smalltalk.DoIt || DoIt))._new())._doIt();
_st((smalltalk.DoIt || DoIt))._removeCompiledMethod_(_st(_st((smalltalk.DoIt || DoIt))._methodDictionary())._at_("doIt"));
$1=$ctx1.locals.result;
return $1;
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
category: '*Compiler',
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
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
category: '*Compiler',
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
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.init(aClass);
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
category: '*Compiler',
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@unknownVariables"];
return $1;
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
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@unknownVariables"]=aCollection;
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
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._recompile_(aClass);
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._recompile_(each);
})}));
return self}, self, "recompileAll", [], smalltalk.Compiler.klass)},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09self recompile: each]",
messageSends: ["do:", "recompile:", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(" Invalid assignment to variable: ").__comma(_st(self)._variableName());
return $1;
}, self, "messageText", [], smalltalk.InvalidAssignmentError)},
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.InvalidAssignmentError)},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.InvalidAssignmentError)},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Variable shadowing error: ").__comma(_st(self)._variableName())).__comma(" is already defined");
return $1;
}, self, "messageText", [], smalltalk.ShadowingVariableError)},
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.ShadowingVariableError)},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.ShadowingVariableError)},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, self, "variableName", [], smalltalk.UnknownVariableError)},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, self, "variableName:", [aString], smalltalk.UnknownVariableError)},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: '*Compiler',
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
}, self, "classNameFor:", [aClass], smalltalk.Exporter)},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, '.klass']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages())._do_((function(pkg){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(_st(self)._exportPackage_(_st(pkg)._name()));
})}));
})}));
return $1;
}, self, "exportAll", [], smalltalk.Exporter)},
args: [],
source: "exportAll\x0a    \x22Export all packages in the system.\x22\x0a\x0a    ^String streamContents: [:stream |\x0a    \x09Smalltalk current packages do: [:pkg |\x0a\x09\x09stream nextPutAll: (self exportPackage: pkg name)]]",
messageSends: ["streamContents:", "do:", "nextPutAll:", "exportPackage:", "name", "packages", "current"],
referencedClasses: ["Smalltalk", "String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
category: '*Compiler',
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
}, self, "exportClass:", [aClass], smalltalk.Exporter)},
args: ["aClass"],
source: "exportClass: aClass\x0a\x09\x22Export a single class. Subclasses override these methods.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09self exportDefinitionOf: aClass on: stream.\x0a\x09\x09self exportMethodsOf: aClass on: stream.\x0a\x09\x09self exportMetaDefinitionOf: aClass on: stream.\x0a\x09\x09self exportMethodsOf: aClass class on: stream]",
messageSends: ["streamContents:", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: '*Compiler',
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addClass(';\x0a\x09    nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09    nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames \x0a\x09    do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09    separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x09\x0a\x09    nextPutAll: '], ''';\x0a\x09    nextPutAll: aClass category, '''';\x0a\x09    nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09    aStream \x0a\x09    \x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "lf", "asJavascript", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: '*Compiler',
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
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09    aStream \x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09    aClass class instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ','].\x0a\x09    aStream nextPutAll: '];', String lf]",
messageSends: ["ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: '*Compiler',
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
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.Exporter)},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'category: ''', aMethod category, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
category: '*Compiler',
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
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.Exporter)},
args: ["aClass", "aStream"],
source: "exportMethodsOf: aClass on: aStream\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:each |\x0a\x09\x09(each category match: '^\x5c*') ifFalse: [\x0a\x09\x09\x09self exportMethod: each of: aClass on: aStream]].\x0a\x09aStream lf",
messageSends: ["do:", "ifFalse:", "exportMethod:of:on:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
category: '*Compiler',
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
}, self, "exportPackage:", [packageName], smalltalk.Exporter)},
args: ["packageName"],
source: "exportPackage: packageName\x0a\x09\x22Export a given package by name.\x22\x0a\x0a\x09| package |\x0a\x09^String streamContents: [:stream |\x0a                package := Smalltalk current packageAt: packageName.\x0a                self exportPackageDefinitionOf: package on: stream.\x0a\x0a\x09\x09\x22Export classes in dependency order.\x0a\x09\x09Update (issue #171): Remove duplicates for export\x22\x0a\x09    \x09package sortedClasses asSet do: [:each |\x0a                        stream nextPutAll: (self exportClass: each)].\x0a\x09\x09self exportPackageExtensionsOf: package on: stream]",
messageSends: ["streamContents:", "packageAt:", "current", "exportPackageDefinitionOf:on:", "do:", "nextPutAll:", "exportClass:", "asSet", "sortedClasses", "exportPackageExtensionsOf:on:"],
referencedClasses: ["Smalltalk", "String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: '*Compiler',
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
$2=_st($1)._nextPutAll_(_st(_st(_st(_st("'").__comma(_st(package_)._name())).__comma("', ")).__comma(_st(package_)._propertiesAsJSON())).__comma(");"));
_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package_,aStream], smalltalk.Exporter)},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addPackage(';\x0a\x09    nextPutAll: '''', package name, ''', ', package propertiesAsJSON , ');'.\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "propertiesAsJSON", "name", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
category: '*Compiler',
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
return self}, self, "exportPackageExtensionsOf:on:", [package_,aStream], smalltalk.Exporter)},
args: ["package", "aStream"],
source: "exportPackageExtensionsOf: package on: aStream\x0a\x09\x22Issue #143: sort classes and methods alphabetically\x22\x0a\x0a\x09| name |\x0a\x09name := package name.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass | \x0a\x09\x09\x09((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:method |\x0a\x09\x09\x09\x09(method category match: '^\x5c*', name) ifTrue: [\x0a\x09\x09\x09\x09\x09self exportMethod: method of: aClass on: aStream ]]]]",
messageSends: ["name", "do:", "ifTrue:", "exportMethod:of:on:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["Smalltalk", "Package"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, self, "chunkEscape:", [aString], smalltalk.ChunkExporter)},
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^(aString replace: '!' with: '!!') trimBoth",
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: '*Compiler',
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
}, self, "classNameFor:", [aClass], smalltalk.ChunkExporter)},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, ' class']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: '*Compiler',
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a    \x22Chunk format.\x22\x0a\x0a    aStream \x0a        nextPutAll: (self classNameFor: aClass superclass);\x0a        nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a        nextPutAll: '\x09instanceVariableNames: '''.\x0a    aClass instanceVariableNames \x0a        do: [:each | aStream nextPutAll: each]\x0a        separatedBy: [aStream nextPutAll: ' '].\x0a    aStream \x0a        nextPutAll: ''''; lf;\x0a        nextPutAll: '\x09package: ''', aClass category, '''!'; lf.\x0a    aClass comment notEmpty ifTrue: [\x0a        aStream \x0a        nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a        nextPutAll: (self chunkEscape: aClass comment), '!';lf].\x0a    aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: '*Compiler',
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
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream \x0a\x09\x09    nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09    nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames \x0a\x09\x09    do: [:each | aStream nextPutAll: each]\x0a\x09\x09    separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream\x09\x0a\x09\x09    nextPutAll: '''!'; lf; lf]",
messageSends: ["ifFalse:", "nextPutAll:", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: '*Compiler',
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._lf();
_st($1)._lf();
_st($1)._nextPutAll_(_st(self)._chunkEscape_(_st(aMethod)._source()));
_st($1)._lf();
$2=_st($1)._nextPutAll_("!");
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.ChunkExporter)},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
category: '*Compiler',
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
return self}, self, "exportMethods:category:of:on:", [methods,category,aClass,aStream], smalltalk.ChunkExporter)},
args: ["methods", "category", "aClass", "aStream"],
source: "exportMethods: methods category: category of: aClass on: aStream\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', category, '''!'.\x0a\x09\x09(methods sorted: [:a :b | a selector <= b selector]) do: [:each |\x0a\x09\x09\x09\x09self exportMethod: each of: aClass on: aStream].\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "do:", "exportMethod:of:on:", "sorted:", "<=", "selector", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
category: '*Compiler',
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
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
args: ["aClass", "aStream"],
source: "exportMethodsOf: aClass on: aStream\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [:category :methods | \x0a\x09\x09(category match: '^\x5c*') ifFalse: [ map at: category put: methods ]].\x0a\x09(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |\x0a\x09\x09methods := map at: category.\x0a\x09\x09self\x0a\x09\x09\x09exportMethods: methods\x0a\x09\x09\x09category: category\x0a\x09\x09\x09of: aClass\x0a\x09\x09\x09on: aStream ]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "do:", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: '*Compiler',
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(_st(_st("Smalltalk current createPackage: '").__comma(_st(package_)._name())).__comma("' properties: ")).__comma(_st(_st(package_)._properties())._storeString())).__comma("!"));
$2=_st($1)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package_,aStream], smalltalk.ChunkExporter)},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream \x0a\x09    nextPutAll: 'Smalltalk current createPackage: ''', package name,\x0a\x09\x09''' properties: ', package properties storeString, '!'; lf.",
messageSends: ["nextPutAll:", ",", "storeString", "properties", "name", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
category: '*Compiler',
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
return self}, self, "exportPackageExtensionsOf:on:", [package_,aStream], smalltalk.ChunkExporter)},
args: ["package", "aStream"],
source: "exportPackageExtensionsOf: package on: aStream\x0a\x09\x22We need to override this one too since we need to group\x0a\x09all methods in a given protocol under a leading methodsFor: chunk\x0a\x09for that class.\x22\x0a\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map |\x0a\x09name := package name.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [:category :methods | \x0a\x09\x09\x09\x09(category match: '^\x5c*', name) ifTrue: [ map at: category put: methods ]].\x0a\x09\x09\x09(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |\x0a\x09\x09\x09\x09methods := map at: category.\x09\x0a\x09\x09\x09\x09self exportMethods: methods category: category of: aClass on: aStream ]]]",
messageSends: ["name", "do:", "new", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["Dictionary", "Smalltalk", "Package"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: '*Compiler',
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.StrippedExporter)},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addClass(';\x0a\x09    nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09    nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames \x0a\x09    do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09    separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x09\x0a\x09    nextPutAll: '], ''';\x0a\x09    nextPutAll: aClass category, '''';\x0a\x09    nextPutAll: ');'.\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: '*Compiler',
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
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.StrippedExporter)},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource;lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "compiledSource", "fn", "classNameFor:"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInstruction_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInstruction)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: '*Compiler',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(anObject)._parent_(self);
$1=_st(_st(self)._instructions())._add_(anObject);
return $1;
}, self, "add:", [anObject], smalltalk.IRInstruction)},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeAssigned", [], smalltalk.IRInstruction)},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
category: '*Compiler',
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
}, self, "instructions", [], smalltalk.IRInstruction)},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClosure", [], smalltalk.IRInstruction)},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isInlined", [], smalltalk.IRInstruction)},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isLocalReturn", [], smalltalk.IRInstruction)},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isReturn", [], smalltalk.IRInstruction)},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSend", [], smalltalk.IRInstruction)},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSequence", [], smalltalk.IRInstruction)},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isTempDeclaration", [], smalltalk.IRInstruction)},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isVariable", [], smalltalk.IRInstruction)},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parent"];
return $1;
}, self, "parent", [], smalltalk.IRInstruction)},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parent"]=anIRInstruction;
return self}, self, "parent:", [anIRInstruction], smalltalk.IRInstruction)},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._remove_(self);
return self}, self, "remove", [], smalltalk.IRInstruction)},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._instructions())._remove_(anIRInstruction);
return self}, self, "remove:", [anIRInstruction], smalltalk.IRInstruction)},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: '*Compiler',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anotherIRInstruction)._parent_(self);
_st(_st(self)._instructions())._at_put_(_st(_st(self)._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self}, self, "replace:with:", [anIRInstruction,anotherIRInstruction], smalltalk.IRInstruction)},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions \x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "indexOf:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._replace_with_(self,anIRInstruction);
return self}, self, "replaceWith:", [anIRInstruction], smalltalk.IRInstruction)},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: '*Compiler',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aBuilder], smalltalk.IRInstruction.klass)},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.IRInstruction.klass);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRAssignment_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRAssignment)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedAssignment)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
messageSends: ["visitIRInlinedAssignment:"],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedAssignment)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicArray_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRDynamicArray)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
messageSends: ["visitIRDynamicArray:"],
referencedClasses: []
}),
smalltalk.IRDynamicArray);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRDynamicDictionary)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
messageSends: ["visitIRDynamicDictionary:"],
referencedClasses: []
}),
smalltalk.IRDynamicDictionary);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.IRScopedInstruction)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, self, "scope:", [aScope], smalltalk.IRScopedInstruction)},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRClosure_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRClosure)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: '*Compiler',
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
}, self, "arguments", [], smalltalk.IRClosure)},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.IRClosure)},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClosure", [], smalltalk.IRClosure)},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRScopedInstruction.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, self, "scope:", [aScope], smalltalk.IRClosure)},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._instructions())._last();
return $1;
}, self, "sequence", [], smalltalk.IRClosure)},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedClosure_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedClosure)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
messageSends: ["visitIRInlinedClosure:"],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedClosure)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRMethod_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRMethod)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@arguments"];
return $1;
}, self, "arguments", [], smalltalk.IRMethod)},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.IRMethod)},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classReferences"];
return $1;
}, self, "classReferences", [], smalltalk.IRMethod)},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, self, "classReferences:", [aCollection], smalltalk.IRMethod)},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
category: '*Compiler',
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
}, self, "internalVariables", [], smalltalk.IRMethod)},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, self, "messageSends", [], smalltalk.IRMethod)},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, self, "messageSends:", [aCollection], smalltalk.IRMethod)},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRScopedInstruction.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, self, "scope:", [aScope], smalltalk.IRMethod)},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.IRMethod)},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.IRMethod)},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRMethod)},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRMethod)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@superSends"];
return $1;
}, self, "superSends", [], smalltalk.IRMethod)},
args: [],
source: "superSends\x0a\x09^ superSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, self, "superSends:", [aCollection], smalltalk.IRMethod)},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.IRMethod)},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.IRMethod)},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRReturn)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "canBeAssigned", [], smalltalk.IRReturn)},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockReturn", [], smalltalk.IRReturn)},
args: [],
source: "isBlockReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isLocalReturn", [], smalltalk.IRReturn)},
args: [],
source: "isLocalReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isLocalReturn())._not();
return $1;
}, self, "isNonLocalReturn", [], smalltalk.IRReturn)},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isReturn", [], smalltalk.IRReturn)},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRBlockReturn)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
messageSends: ["visitIRBlockReturn:"],
referencedClasses: []
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockReturn", [], smalltalk.IRBlockReturn)},
args: [],
source: "isBlockReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedReturn)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
messageSends: ["visitIRInlinedReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedReturn)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedNonLocalReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRInlinedNonLocalReturn)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedNonLocalReturn: self",
messageSends: ["visitIRInlinedNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedNonLocalReturn)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRNonLocalReturn)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isLocalReturn", [], smalltalk.IRNonLocalReturn)},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRTempDeclaration_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRTempDeclaration)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, self, "name", [], smalltalk.IRTempDeclaration)},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, self, "name:", [aString], smalltalk.IRTempDeclaration)},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSend_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRSend)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classSend"];
return $1;
}, self, "classSend", [], smalltalk.IRSend)},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classSend"]=aClass;
return self}, self, "classSend:", [aClass], smalltalk.IRSend)},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@index"];
return $1;
}, self, "index", [], smalltalk.IRSend)},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: '*Compiler',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, self, "index:", [anInteger], smalltalk.IRSend)},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSend", [], smalltalk.IRSend)},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_javascriptSelector",
smalltalk.method({
selector: "javascriptSelector",
category: '*Compiler',
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
}, self, "javascriptSelector", [], smalltalk.IRSend)},
args: [],
source: "javascriptSelector\x0a\x09^ self classSend \x0a    \x09ifNil: [ self selector asSelector ]\x0a      \x09ifNotNil: [ self selector asSuperSelector ]",
messageSends: ["ifNil:ifNotNil:", "asSelector", "selector", "asSuperSelector", "classSend"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.IRSend)},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.IRSend)},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitInlinedSend_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedSend)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
messageSends: ["visitInlinedSend:"],
referencedClasses: []
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedSend)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfFalse)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfFalse);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfNilIfNotNil)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
messageSends: ["visitIRInlinedIfNilIfNotNil:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfNilIfNotNil);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfTrue)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrue);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedIfTrueIfFalse)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
messageSends: ["visitIRInlinedIfTrueIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrueIfFalse);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSequence_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRSequence)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSequence", [], smalltalk.IRSequence)},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockSequence_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRBlockSequence)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedSequence_(self);
return self}, self, "accept:", [aVisitor], smalltalk.IRInlinedSequence)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
messageSends: ["visitIRInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInlined", [], smalltalk.IRInlinedSequence)},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRValue_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRValue)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, self, "value", [], smalltalk.IRValue)},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=aString;
return self}, self, "value:", [aString], smalltalk.IRValue)},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVariable_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRVariable)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isVariable", [], smalltalk.IRVariable)},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variable"];
return $1;
}, self, "variable", [], smalltalk.IRVariable)},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
category: '*Compiler',
fn: function (aScopeVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variable"]=aScopeVariable;
return self}, self, "variable:", [aScopeVariable], smalltalk.IRVariable)},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVerbatim_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.IRVerbatim)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRVerbatim)},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRVerbatim)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse))._new(),anIRInstruction);
return $1;
}, self, "ifFalse:", [anIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: '*Compiler',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._perform_withArguments_(smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]);
return $1;
}, self, "ifFalse:ifTrue:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: '*Compiler',
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
}, self, "ifNil:", [anIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new \x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: '*Compiler',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, self, "ifNil:ifNotNil:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: '*Compiler',
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
}, self, "ifNotNil:", [anIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: '*Compiler',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, self, "ifNotNil:ifNil:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue))._new(),anIRInstruction);
return $1;
}, self, "ifTrue:", [anIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: '*Compiler',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, self, "ifTrue:ifFalse:", [anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfTrueIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: '*Compiler',
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
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRSendInliner)},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure instructions do: [ :each | \x0a\x09\x09each isSequence ifFalse: [\x0a\x09\x09\x09inlinedClosure add: each ]].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "ifFalse:", "add:", "isSequence", "instructions", "inlinedSequence", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "first", "and:", "isBlockReturn", "isReturn"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
category: '*Compiler',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._send_(anIRSend);
$1=_st(self)._perform_withArguments_(_st(_st(self)._send())._selector(),_st(_st(_st(self)._send())._instructions())._allButFirst());
return $1;
}, self, "inlineSend:", [anIRSend], smalltalk.IRSendInliner)},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self \x0a\x09\x09perform: self send selector \x0a\x09\x09withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedClosure || IRInlinedClosure))._new();
return $1;
}, self, "inlinedClosure", [], smalltalk.IRSendInliner)},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
category: '*Compiler',
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
}, self, "inlinedSend:with:", [inlinedSend,anIRInstruction], smalltalk.IRSendInliner)},
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
category: '*Compiler',
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
}, self, "inlinedSend:with:with:", [inlinedSend,anIRInstruction,anotherIRInstruction], smalltalk.IRSendInliner)},
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedSequence || IRInlinedSequence))._new();
return $1;
}, self, "inlinedSequence", [], smalltalk.IRSendInliner)},
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRInlinedSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.InliningError || InliningError))._signal_(aString);
return self}, self, "inliningError:", [aString], smalltalk.IRSendInliner)},
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["InliningError"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@send"];
return $1;
}, self, "send", [], smalltalk.IRSendInliner)},
args: [],
source: "send\x0a\x09^ send",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
category: '*Compiler',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@send"]=anIRSend;
return self}, self, "send:", [anIRSend], smalltalk.IRSendInliner)},
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@translator"];
return $1;
}, self, "translator", [], smalltalk.IRSendInliner)},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
category: '*Compiler',
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=anASTTranslator;
return self}, self, "translator:", [anASTTranslator], smalltalk.IRSendInliner)},
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
}, self, "inlinedSelectors", [], smalltalk.IRSendInliner.klass)},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil')",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
category: '*Compiler',
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
}, self, "shouldInline:", [anIRInstruction], smalltalk.IRSendInliner.klass)},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@assignment"];
return $1;
}, self, "assignment", [], smalltalk.IRAssignmentInliner)},
args: [],
source: "assignment\x0a\x09^ assignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assignment"]=aNode;
return self}, self, "assignment:", [aNode], smalltalk.IRAssignmentInliner)},
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
category: '*Compiler',
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
}, self, "inlineAssignment:", [anIRAssignment], smalltalk.IRAssignmentInliner)},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: '*Compiler',
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
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRAssignmentInliner)},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "replaceWith:", "add:", "first", "assignment", "new", "copy", "yourself", "canBeAssigned"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: '*Compiler',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.IRSendInliner.fn.prototype._inlineCLosure_.apply(_st(self), [anIRClosure]);
return $1;
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRNonLocalReturnInliner)},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09\x22| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last replaceWith: (IRNonLocalReturn new\x0a\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ inlinedClosure\x22\x0a\x0a\x09^ super inlineCLosure: anIRClosure",
messageSends: ["inlineCLosure:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn))._new();
return $1;
}, self, "inlinedReturn", [], smalltalk.IRNonLocalReturnInliner)},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedNonLocalReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedNonLocalReturn"]
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: '*Compiler',
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
}, self, "inlineClosure:", [anIRClosure], smalltalk.IRReturnInliner)},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "replaceWith:", "add:", "copy", "new", "yourself", "isReturn"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
category: '*Compiler',
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
}, self, "inlineReturn:", [anIRReturn], smalltalk.IRReturnInliner)},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedReturn || IRInlinedReturn))._new();
return $1;
}, self, "inlinedReturn", [], smalltalk.IRReturnInliner)},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anIRInstruction)._accept_(self);
return $1;
}, self, "visit:", [anIRInstruction], smalltalk.IRVisitor)},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: '*Compiler',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRAssignment);
return $1;
}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRVisitor)},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockReturn_",
smalltalk.method({
selector: "visitIRBlockReturn:",
category: '*Compiler',
fn: function (anIRBlockReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRReturn_(anIRBlockReturn);
return $1;
}, self, "visitIRBlockReturn:", [anIRBlockReturn], smalltalk.IRVisitor)},
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
category: '*Compiler',
fn: function (anIRBlockSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRBlockSequence);
return $1;
}, self, "visitIRBlockSequence:", [anIRBlockSequence], smalltalk.IRVisitor)},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: '*Compiler',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRClosure);
return $1;
}, self, "visitIRClosure:", [anIRClosure], smalltalk.IRVisitor)},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: '*Compiler',
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicArray);
return $1;
}, self, "visitIRDynamicArray:", [anIRDynamicArray], smalltalk.IRVisitor)},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: '*Compiler',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicDictionary);
return $1;
}, self, "visitIRDynamicDictionary:", [anIRDynamicDictionary], smalltalk.IRVisitor)},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: '*Compiler',
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRClosure_(anIRInlinedClosure);
return $1;
}, self, "visitIRInlinedClosure:", [anIRInlinedClosure], smalltalk.IRVisitor)},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: '*Compiler',
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRInlinedSequence);
return $1;
}, self, "visitIRInlinedSequence:", [anIRInlinedSequence], smalltalk.IRVisitor)},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(anIRInstruction)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
$1=anIRInstruction;
return $1;
}, self, "visitIRInstruction:", [anIRInstruction], smalltalk.IRVisitor)},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: '*Compiler',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRMethod);
return $1;
}, self, "visitIRMethod:", [anIRMethod], smalltalk.IRVisitor)},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: '*Compiler',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturn);
return $1;
}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRVisitor)},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: '*Compiler',
fn: function (anIRNonLocalReturnHandling){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
}, self, "visitIRNonLocalReturnHandling:", [anIRNonLocalReturnHandling], smalltalk.IRVisitor)},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: '*Compiler',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRReturn);
return $1;
}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRVisitor)},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: '*Compiler',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSend);
return $1;
}, self, "visitIRSend:", [anIRSend], smalltalk.IRVisitor)},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: '*Compiler',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSequence);
return $1;
}, self, "visitIRSequence:", [anIRSequence], smalltalk.IRVisitor)},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: '*Compiler',
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRTempDeclaration);
return $1;
}, self, "visitIRTempDeclaration:", [anIRTempDeclaration], smalltalk.IRVisitor)},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: '*Compiler',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRValue);
return $1;
}, self, "visitIRValue:", [anIRValue], smalltalk.IRVisitor)},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: '*Compiler',
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVariable);
return $1;
}, self, "visitIRVariable:", [anIRVariable], smalltalk.IRVisitor)},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: '*Compiler',
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVerbatim);
return $1;
}, self, "visitIRVerbatim:", [anIRVerbatim], smalltalk.IRVisitor)},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRAssignmentInliner || IRAssignmentInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "assignmentInliner", [], smalltalk.IRInliner)},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRAssignmentInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "nonLocalReturnInliner", [], smalltalk.IRInliner)},
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRNonLocalReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRReturnInliner || IRReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "returnInliner", [], smalltalk.IRInliner)},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRSendInliner || IRSendInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "sendInliner", [], smalltalk.IRInliner)},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
category: '*Compiler',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(_st(anIRAssignment)._instructions())._last())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
})}));
})}));
return $1;
}, self, "shouldInlineAssignment:", [anIRAssignment], smalltalk.IRInliner)},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [ \x0a\x09\x09anIRAssignment instructions last isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "shouldInlineSend:", "last", "instructions", "isSend", "not", "isInlined"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
category: '*Compiler',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(_st(anIRReturn)._instructions())._first())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
})}));
})}));
return $1;
}, self, "shouldInlineReturn:", [anIRReturn], smalltalk.IRInliner)},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [ \x0a\x09\x09anIRReturn instructions first isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "shouldInlineSend:", "first", "instructions", "isSend", "not", "isInlined"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
category: '*Compiler',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.IRSendInliner || IRSendInliner))._shouldInline_(anIRSend);
})}));
return $1;
}, self, "shouldInlineSend:", [anIRSend], smalltalk.IRInliner)},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "shouldInline:", "not", "isInlined"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
category: '*Compiler',
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
}, self, "transformNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRInliner)},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "removeNonLocalReturn:", "scope", "methodScope", "scope:", "new", "yourself", "do:", "add:", "instructions", "replaceWith:", "canInlineNonLocalReturns", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: '*Compiler',
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
}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRInliner)},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment) \x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:", "shouldInlineAssignment:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: '*Compiler',
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
}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRInliner)},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn) \x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "nonLocalReturnInliner", "transformNonLocalReturn:", "shouldInlineReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: '*Compiler',
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
}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRInliner)},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn) \x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "returnInliner", "visitIRReturn:", "shouldInlineReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: '*Compiler',
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
}, self, "visitIRSend:", [anIRSend], smalltalk.IRInliner)},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "inlineSend:", "sendInliner", "visitIRSend:", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._stream())._contents();
return $1;
}, self, "contents", [], smalltalk.IRJSTranslator)},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st((smalltalk.JSStream || JSStream))._new();
return self}, self, "initialize", [], smalltalk.IRJSTranslator)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@stream"];
return $1;
}, self, "stream", [], smalltalk.IRJSTranslator)},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: '*Compiler',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.IRJSTranslator)},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: '*Compiler',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRAssignment)._instructions())._first());
_st(_st(self)._stream())._nextPutAssignment();
_st(self)._visit_(_st(_st(anIRAssignment)._instructions())._last());
return self}, self, "visitIRAssignment:", [anIRAssignment], smalltalk.IRJSTranslator)},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: '*Compiler',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutClosureWith_arguments_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
return smalltalk.withContext(function($ctx3) { return smalltalk.IRVisitor.fn.prototype._visitIRClosure_.apply(_st(self), [anIRClosure]);
})}));
})}),_st(anIRClosure)._arguments());
return self}, self, "visitIRClosure:", [anIRClosure], smalltalk.IRJSTranslator)},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream \x0a\x09\x09nextPutClosureWith: [ \x0a        \x09self stream \x0a            \x09nextPutBlockContextFor: anIRClosure\x0a                during: [ super visitIRClosure: anIRClosure ] ]\x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "nextPutBlockContextFor:during:", "visitIRClosure:", "stream", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: '*Compiler',
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("[");
_st(_st(anIRDynamicArray)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(self["@stream"])._nextPutAll_("]");
return self}, self, "visitIRDynamicArray:", [anIRDynamicArray], smalltalk.IRJSTranslator)},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: '*Compiler',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("smalltalk.HashedCollection._fromPairs_([");
_st(_st(anIRDynamicDictionary)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(",");
})}));
_st(_st(self)._stream())._nextPutAll_("])");
return self}, self, "visitIRDynamicDictionary:", [anIRDynamicDictionary], smalltalk.IRJSTranslator)},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09anIRDynamicDictionary instructions \x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: '*Compiler',
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
return self}, self, "visitIRMethod:", [anIRMethod], smalltalk.IRJSTranslator)},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod \x0a\x09\x09with: [ self stream \x0a\x09\x09\x09nextPutFunctionWith: [ \x0a            \x09self stream nextPutContextFor: anIRMethod during: [\x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn \x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ]]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "nextPutFunctionWith:arguments:", "nextPutContextFor:during:", "ifTrue:", "nextPutVars:", "collect:", "alias", "variable", "asArray", "internalVariables", "stream", "notEmpty", "ifTrue:ifFalse:", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "hasNonLocalReturn", "scope", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: '*Compiler',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { return smalltalk.IRVisitor.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
})}));
return self}, self, "visitIRNonLocalReturn:", [anIRNonLocalReturn], smalltalk.IRJSTranslator)},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "visitIRNonLocalReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: '*Compiler',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { return smalltalk.IRVisitor.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
})}));
return self}, self, "visitIRReturn:", [anIRReturn], smalltalk.IRJSTranslator)},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "visitIRReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: '*Compiler',
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
return self}, self, "visitIRSend:", [anIRSend], smalltalk.IRJSTranslator)},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09anIRSend classSend \x0a    \x09ifNil: [\x0a\x09\x09\x09self stream nextPutAll: '_st('.\x0a\x09\x09\x09self visit: anIRSend instructions first.\x0a   \x09\x09 \x09self stream nextPutAll: ').', anIRSend selector asSelector, '('.\x0a\x09\x09\x09anIRSend instructions allButFirst\x0a\x09\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self stream \x0a            \x09nextPutAll: anIRSend classSend asJavascript, '.fn.prototype.';\x0a\x09\x09\x09\x09nextPutAll: anIRSend selector asSelector, '.apply(';\x0a\x09\x09\x09\x09nextPutAll: '_st('.\x0a\x09\x09\x09self visit: anIRSend instructions first.\x0a\x09\x09\x09self stream nextPutAll: '), ['.\x0a\x09\x09\x09anIRSend instructions allButFirst\x0a\x09\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09\x09\x09self stream nextPutAll: '])' ]",
messageSends: ["ifNil:ifNotNil:", "nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "asJavascript", "classSend"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: '*Compiler',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutSequenceWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(anIRSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(_st(self)._stream())._nextPutStatementWith_(_st(self)._visit_(each));
})}));
})}));
return self}, self, "visitIRSequence:", [anIRSequence], smalltalk.IRJSTranslator)},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ]]",
messageSends: ["nextPutSequenceWith:", "do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: '*Compiler',
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._stream();
_st($1)._nextPutAll_(_st(_st(_st(_st(_st(anIRTempDeclaration)._scope())._alias()).__comma(".locals.")).__comma(_st(anIRTempDeclaration)._name())).__comma("=nil;"));
$2=_st($1)._lf();
return self}, self, "visitIRTempDeclaration:", [anIRTempDeclaration], smalltalk.IRJSTranslator)},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09self stream \x0a    \x09nextPutAll: anIRTempDeclaration scope alias, '.locals.', anIRTempDeclaration name, '=nil;'; \x0a        lf",
messageSends: ["nextPutAll:", ",", "name", "alias", "scope", "stream", "lf"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: '*Compiler',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_(_st(_st(anIRValue)._value())._asJavascript());
return self}, self, "visitIRValue:", [anIRValue], smalltalk.IRJSTranslator)},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: '*Compiler',
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRVariable)._variable())._name()).__eq("thisContext");
if(smalltalk.assert($1)){
_st(_st(self)._stream())._nextPutAll_("smalltalk.getThisContext()");
} else {
_st(_st(self)._stream())._nextPutAll_(_st(_st(anIRVariable)._variable())._alias());
};
return self}, self, "visitIRVariable:", [anIRVariable], smalltalk.IRJSTranslator)},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a    \x09ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]\x0a      \x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "stream", "alias", "variable", "=", "name"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: '*Compiler',
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutAll_(_st(anIRVerbatim)._source());
})}));
return self}, self, "visitIRVerbatim:", [anIRVerbatim], smalltalk.IRJSTranslator)},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "nextPutAll:", "source", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: '*Compiler',
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, self, "visitIRInlinedAssignment:", [anIRInlinedAssignment], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: '*Compiler',
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
return self}, self, "visitIRInlinedClosure:", [anIRInlinedClosure], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
category: '*Compiler',
fn: function (anIRInlinedIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("! smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfFalse:", [anIRInlinedIfFalse], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
category: '*Compiler',
fn: function (anIRInlinedIfNil){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("($receiver = ");
_st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(") == nil || $receiver == undefined");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfNil:", [anIRInlinedIfNil], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedIfNil"],
source: "visitIRInlinedIfNil: anIRInlinedIfNil\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09self visit: anIRInlinedIfNil instructions first.\x0a\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNil instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
category: '*Compiler',
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
return self}, self, "visitIRInlinedIfNilIfNotNil:", [anIRInlinedIfNilIfNotNil], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: '*Compiler',
fn: function (anIRInlinedIfTrue){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._stream())._nextPutAll_("smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
})}));
return self}, self, "visitIRInlinedIfTrue:", [anIRInlinedIfTrue], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
category: '*Compiler',
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
return self}, self, "visitIRInlinedIfTrueIfFalse:", [anIRInlinedIfTrueIfFalse], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
category: '*Compiler',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
})}));
_st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "visitIRInlinedNonLocalReturn:", [anIRInlinedReturn], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "visit:", "last", "instructions", "stream", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
category: '*Compiler',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, self, "visitIRInlinedReturn:", [anIRInlinedReturn], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: '*Compiler',
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._visit_(each);
})}));
})}));
return self}, self, "visitIRInlinedSequence:", [anIRInlinedSequence], smalltalk.IRInliningJSTranslator)},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
category: '*Compiler',
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
return self}, self, "import:", [aStream], smalltalk.Importer)},
args: ["aStream"],
source: "import: aStream\x0a    | chunk result parser lastEmpty |\x0a    parser := ChunkParser on: aStream.\x0a    lastEmpty := false.\x0a    [chunk := parser nextChunk.\x0a     chunk isNil] whileFalse: [\x0a        chunk isEmpty\x0a       \x09\x09ifTrue: [lastEmpty := true]\x0a       \x09\x09ifFalse: [\x0a        \x09\x09result := Compiler new evaluateExpression: chunk.\x0a        \x09\x09lastEmpty \x0a            \x09\x09\x09ifTrue: [\x0a                                  \x09lastEmpty := false.\x0a                                  \x09result scanFrom: parser]]]",
messageSends: ["on:", "whileFalse:", "ifTrue:ifFalse:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "isEmpty", "nextChunk", "isNil"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@stream"])._contents();
return $1;
}, self, "contents", [], smalltalk.JSStream)},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st("")._writeStream();
return self}, self, "initialize", [], smalltalk.JSStream)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._lf();
return self}, self, "lf", [], smalltalk.JSStream)},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPut_(aString);
return self}, self, "nextPut:", [aString], smalltalk.JSStream)},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_(aString);
return self}, self, "nextPutAll:", [aString], smalltalk.JSStream)},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("=");
return self}, self, "nextPutAssignment", [], smalltalk.JSStream)},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutBlockContextFor_during_",
smalltalk.method({
selector: "nextPutBlockContextFor:during:",
category: '*Compiler',
fn: function (anIRClosure,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._nextPutAll_(_st(_st("return smalltalk.withContext(function(").__comma(_st(_st(anIRClosure)._scope())._alias())).__comma(") { "));
$2=_st($1)._nextPutAll_(_st((smalltalk.String || String))._cr());
_st(aBlock)._value();
_st(self)._nextPutAll_("})");
return self}, self, "nextPutBlockContextFor:during:", [anIRClosure,aBlock], smalltalk.JSStream)},
args: ["anIRClosure", "aBlock"],
source: "nextPutBlockContextFor: anIRClosure during: aBlock\x0a\x09self \x0a    \x09nextPutAll: 'return smalltalk.withContext(function(', anIRClosure scope alias, ') { '; \x0a        nextPutAll: String cr.\x0a    aBlock value.\x0a    self nextPutAll: '})'",
messageSends: ["nextPutAll:", ",", "alias", "scope", "cr", "value"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
category: '*Compiler',
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
return self}, self, "nextPutClosureWith:arguments:", [aBlock,anArray], smalltalk.JSStream)},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutContextFor_during_",
smalltalk.method({
selector: "nextPutContextFor:during:",
category: '*Compiler',
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
return self}, self, "nextPutContextFor:during:", [aMethod,aBlock], smalltalk.JSStream)},
args: ["aMethod", "aBlock"],
source: "nextPutContextFor: aMethod during: aBlock\x0a\x09self \x0a    \x09nextPutAll: 'return smalltalk.withContext(function(', aMethod scope alias, ') { '; \x0a        nextPutAll: String cr.\x0a    aBlock value.\x0a    self \x0a    \x09nextPutAll: '}, self, ';\x0a        nextPutAll: aMethod selector asJavascript, ', ['.\x0a    aMethod arguments \x0a    \x09do: [ :each | self nextPutAll: each asVariableName ]\x0a      \x09separatedBy: [ self nextPutAll: ','  ].\x0a    self nextPutAll: '], ';\x0a        nextPutAll: aMethod theClass asJavascript;\x0a        nextPutAll: ')'",
messageSends: ["nextPutAll:", ",", "alias", "scope", "cr", "value", "asJavascript", "selector", "do:separatedBy:", "asVariableName", "arguments", "theClass"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
category: '*Compiler',
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
return self}, self, "nextPutFunctionWith:arguments:", [aBlock,anArray], smalltalk.JSStream)},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
category: '*Compiler',
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
return self}, self, "nextPutIf:with:", [aBlock,anotherBlock], smalltalk.JSStream)},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
category: '*Compiler',
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
return self}, self, "nextPutIfElse:with:with:", [aBlock,ifBlock,elseBlock], smalltalk.JSStream)},
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
category: '*Compiler',
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
return self}, self, "nextPutMethodDeclaration:with:", [aMethod,aBlock], smalltalk.JSStream)},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: \x22', aMethod selector, '\x22,'; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf. \x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a        nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences \x0a\x09\x09do: [:each | stream nextPutAll: each asJavascript]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream \x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "selector", "asJavascript", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
category: '*Compiler',
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
return self}, self, "nextPutNonLocalReturnHandlingWith:", [aBlock], smalltalk.JSStream)},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
category: '*Compiler',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("throw $early=[");
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("]");
return self}, self, "nextPutNonLocalReturnWith:", [aBlock], smalltalk.JSStream)},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("return ");
return self}, self, "nextPutReturn", [], smalltalk.JSStream)},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
category: '*Compiler',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._nextPutReturn();
_st(aBlock)._value();
return self}, self, "nextPutReturnWith:", [aBlock], smalltalk.JSStream)},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
category: '*Compiler',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBlock)._value();
return self}, self, "nextPutSequenceWith:", [aBlock], smalltalk.JSStream)},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream \x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream \x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
category: '*Compiler',
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
return self}, self, "nextPutStatement:with:", [anInteger,aBlock], smalltalk.JSStream)},
args: ["anInteger", "aBlock"],
source: "nextPutStatement: anInteger with: aBlock\x0a\x09stream nextPutAll: 'case ', anInteger asString, ':'; lf.\x0a\x09self nextPutStatementWith: aBlock.\x0a\x09stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf",
messageSends: ["nextPutAll:", ",", "asString", "lf", "nextPutStatementWith:", "+"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
category: '*Compiler',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, self, "nextPutStatementWith:", [aBlock], smalltalk.JSStream)},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@stream"];
_st($1)._nextPutAll_(_st(_st("var ").__comma(aString)).__comma(";"));
$2=_st($1)._lf();
return self}, self, "nextPutVar:", [aString], smalltalk.JSStream)},
args: ["aString"],
source: "nextPutVar: aString\x0a\x09stream nextPutAll: 'var ', aString, ';'; lf",
messageSends: ["nextPutAll:", ",", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
category: '*Compiler',
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
return self}, self, "nextPutVars:", [aCollection], smalltalk.JSStream)},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection \x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._args())._at_put_(aString,_st((smalltalk.ArgVar || ArgVar))._on_(aString));
_st(_st(_st(self)._args())._at_(aString))._scope_(self);
return self}, self, "addArg:", [aString], smalltalk.LexicalScope)},
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
messageSends: ["at:put:", "on:", "args", "scope:", "at:"],
referencedClasses: ["ArgVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._temps())._at_put_(aString,_st((smalltalk.TempVar || TempVar))._on_(aString));
_st(_st(_st(self)._temps())._at_(aString))._scope_(self);
return self}, self, "addTemp:", [aString], smalltalk.LexicalScope)},
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
messageSends: ["at:put:", "on:", "temps", "scope:", "at:"],
referencedClasses: ["TempVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("$ctx").__comma(_st(_st(self)._scopeLevel())._asString());
return $1;
}, self, "alias", [], smalltalk.LexicalScope)},
args: [],
source: "alias\x0a\x09^ '$ctx', self scopeLevel asString",
messageSends: [",", "asString", "scopeLevel"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._args())._keys()).__comma(_st(_st(self)._temps())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.LexicalScope)},
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
messageSends: [",", "keys", "temps", "args"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
category: '*Compiler',
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
}, self, "args", [], smalltalk.LexicalScope)},
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: '*Compiler',
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
}, self, "bindingFor:", [aStringOrNode], smalltalk.LexicalScope)},
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [ \x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
messageSends: ["at:ifAbsent:", "value", "temps", "args", "pseudoVars"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._outerScope())._canInlineNonLocalReturns();
})}));
return $1;
}, self, "canInlineNonLocalReturns", [], smalltalk.LexicalScope)},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
messageSends: ["and:", "canInlineNonLocalReturns", "outerScope", "isInlined"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@instruction"];
return $1;
}, self, "instruction", [], smalltalk.LexicalScope)},
args: [],
source: "instruction\x0a\x09^ instruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
category: '*Compiler',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@instruction"]=anIRInstruction;
return self}, self, "instruction:", [anIRInstruction], smalltalk.LexicalScope)},
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isMethodScope())._not();
return $1;
}, self, "isBlockScope", [], smalltalk.LexicalScope)},
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
messageSends: ["not", "isMethodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instruction())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._instruction())._isInlined();
})}));
return $1;
}, self, "isInlined", [], smalltalk.LexicalScope)},
args: [],
source: "isInlined\x0a\x09^ self instruction notNil and: [\x0a      \x09self instruction isInlined ]",
messageSends: ["and:", "isInlined", "instruction", "notNil"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isMethodScope", [], smalltalk.LexicalScope)},
args: [],
source: "isMethodScope\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
category: '*Compiler',
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
}, self, "lookupVariable:", [aNode], smalltalk.LexicalScope)},
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [ \x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "lookupVariable:", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: '*Compiler',
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
}, self, "methodScope", [], smalltalk.LexicalScope)},
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
messageSends: ["ifNotNil:", "methodScope", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.LexicalScope)},
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.LexicalScope)},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerScope"];
return $1;
}, self, "outerScope", [], smalltalk.LexicalScope)},
args: [],
source: "outerScope\x0a\x09^ outerScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
category: '*Compiler',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerScope"]=aLexicalScope;
return self}, self, "outerScope:", [aLexicalScope], smalltalk.LexicalScope)},
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodScope())._pseudoVars();
return $1;
}, self, "pseudoVars", [], smalltalk.LexicalScope)},
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
messageSends: ["pseudoVars", "methodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
category: '*Compiler',
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
}, self, "scopeLevel", [], smalltalk.LexicalScope)},
args: [],
source: "scopeLevel\x0a\x09self outerScope ifNil: [ ^ 1 ].\x0a\x09self isInlined ifTrue: [ ^ self outerScope scopeLevel ].\x0a    \x0a\x09^ self outerScope scopeLevel + 1",
messageSends: ["ifNil:", "outerScope", "ifTrue:", "scopeLevel", "isInlined", "+"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: '*Compiler',
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
}, self, "temps", [], smalltalk.LexicalScope)},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._iVars())._at_put_(aString,_st((smalltalk.InstanceVar || InstanceVar))._on_(aString));
_st(_st(_st(self)._iVars())._at_(aString))._scope_(self);
return self}, self, "addIVar:", [aString], smalltalk.MethodLexicalScope)},
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
messageSends: ["at:put:", "on:", "iVars", "scope:", "at:"],
referencedClasses: ["InstanceVar"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._add_(aScope);
return self}, self, "addNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)},
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
messageSends: ["add:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.LexicalScope.fn.prototype._allVariableNames.apply(_st(self), [])).__comma(_st(_st(self)._iVars())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.MethodLexicalScope)},
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
messageSends: [",", "keys", "iVars", "allVariableNames"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: '*Compiler',
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
}, self, "bindingFor:", [aNode], smalltalk.MethodLexicalScope)},
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
messageSends: ["ifNil:", "at:ifAbsent:", "value", "iVars", "bindingFor:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canInlineNonLocalReturns", [], smalltalk.MethodLexicalScope)},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localReturn();
return $1;
}, self, "hasLocalReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
messageSends: ["localReturn"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._nonLocalReturns())._notEmpty();
return $1;
}, self, "hasNonLocalReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
messageSends: ["notEmpty", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
category: '*Compiler',
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
}, self, "iVars", [], smalltalk.MethodLexicalScope)},
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isMethodScope", [], smalltalk.MethodLexicalScope)},
args: [],
source: "isMethodScope\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
category: '*Compiler',
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
}, self, "localReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
category: '*Compiler',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@localReturn"]=aBoolean;
return self}, self, "localReturn:", [aBoolean], smalltalk.MethodLexicalScope)},
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, self, "methodScope", [], smalltalk.MethodLexicalScope)},
args: [],
source: "methodScope\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
category: '*Compiler',
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
}, self, "nonLocalReturns", [], smalltalk.MethodLexicalScope)},
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: '*Compiler',
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
}, self, "pseudoVars", [], smalltalk.MethodLexicalScope)},
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk current pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
messageSends: ["ifNil:", "new", "do:", "at:put:", "scope:", "methodScope", "on:", "yourself", "pseudoVariableNames", "current"],
referencedClasses: ["Dictionary", "PseudoVar", "Smalltalk"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "removeNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)},
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
messageSends: ["remove:ifAbsent:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: '*Compiler',
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
}, self, "unknownVariables", [], smalltalk.MethodLexicalScope)},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.Node)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitNode: self",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nodes())._add_(aNode);
return self}, self, "addNode:", [aNode], smalltalk.Node)},
args: ["aNode"],
source: "addNode: aNode\x0a\x09self nodes add: aNode",
messageSends: ["add:", "nodes"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isAssignmentNode", [], smalltalk.Node)},
args: [],
source: "isAssignmentNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockNode", [], smalltalk.Node)},
args: [],
source: "isBlockNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isBlockSequenceNode", [], smalltalk.Node)},
args: [],
source: "isBlockSequenceNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isImmutable", [], smalltalk.Node)},
args: [],
source: "isImmutable\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isReturnNode", [], smalltalk.Node)},
args: [],
source: "isReturnNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSendNode", [], smalltalk.Node)},
args: [],
source: "isSendNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isValueNode", [], smalltalk.Node)},
args: [],
source: "isValueNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: '*Compiler',
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
}, self, "nodes", [], smalltalk.Node)},
args: [],
source: "nodes\x0a\x09^nodes ifNil: [nodes := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=aCollection;
return self}, self, "nodes:", [aCollection], smalltalk.Node)},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: '*Compiler',
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
}, self, "position", [], smalltalk.Node)},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0@0]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
category: '*Compiler',
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPosition;
return self}, self, "position:", [aPosition], smalltalk.Node)},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
category: '*Compiler',
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
}, self, "shouldBeAliased", [], smalltalk.Node)},
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
category: '*Compiler',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeAliased"]=aBoolean;
return self}, self, "shouldBeAliased:", [aBoolean], smalltalk.Node)},
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined",
smalltalk.method({
selector: "shouldBeInlined",
category: '*Compiler',
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
}, self, "shouldBeInlined", [], smalltalk.Node)},
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
category: '*Compiler',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeInlined"]=aBoolean;
return self}, self, "shouldBeInlined:", [aBoolean], smalltalk.Node)},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: '*Compiler',
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
}, self, "subtreeNeedsAliasing", [], smalltalk.Node)},
args: [],
source: "subtreeNeedsAliasing\x0a    ^(self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a        (self nodes detect: [ :each | each subtreeNeedsAliasing ] ifNone: [ false ]) ~= false ]",
messageSends: ["or:", "~=", "detect:ifNone:", "subtreeNeedsAliasing", "nodes", "shouldBeInlined", "shouldBeAliased"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.AssignmentNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isAssignmentNode", [], smalltalk.AssignmentNode)},
args: [],
source: "isAssignmentNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@left"];
return $1;
}, self, "left", [], smalltalk.AssignmentNode)},
args: [],
source: "left\x0a\x09^left",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@left"]=aNode;
return self}, self, "left:", [aNode], smalltalk.AssignmentNode)},
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Array || Array))._with_with_(_st(self)._left(),_st(self)._right());
return $1;
}, self, "nodes", [], smalltalk.AssignmentNode)},
args: [],
source: "nodes\x0a\x09^ Array with: self left with: self right",
messageSends: ["with:with:", "left", "right"],
referencedClasses: ["Array"]
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@right"];
return $1;
}, self, "right", [], smalltalk.AssignmentNode)},
args: [],
source: "right\x0a\x09^right",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@right"]=aNode;
return self}, self, "right:", [aNode], smalltalk.AssignmentNode)},
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockNode", [], smalltalk.BlockNode)},
args: [],
source: "isBlockNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
category: '*Compiler',
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
}, self, "parameters", [], smalltalk.BlockNode)},
args: [],
source: "parameters\x0a\x09^parameters ifNil: [parameters := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parameters"]=aCollection;
return self}, self, "parameters:", [aCollection], smalltalk.BlockNode)},
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.BlockNode)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.BlockNode)},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.CascadeNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.CascadeNode)},
args: [],
source: "receiver\x0a\x09^receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.CascadeNode)},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicArrayNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicDictionaryNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.JSStatementNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: '*Compiler',
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
}, self, "source", [], smalltalk.JSStatementNode)},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.JSStatementNode)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.MethodNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: '*Compiler',
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
}, self, "arguments", [], smalltalk.MethodNode)},
args: [],
source: "arguments\x0a\x09^arguments ifNil: [#()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.MethodNode)},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classReferences"];
return $1;
}, self, "classReferences", [], smalltalk.MethodNode)},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, self, "classReferences:", [aCollection], smalltalk.MethodNode)},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, self, "messageSends", [], smalltalk.MethodNode)},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, self, "messageSends:", [aCollection], smalltalk.MethodNode)},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.MethodNode)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aMethodScope;
return self}, self, "scope:", [aMethodScope], smalltalk.MethodNode)},
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.MethodNode)},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.MethodNode)},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.MethodNode)},
args: [],
source: "source\x0a\x09^source",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.MethodNode)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@superSends"];
return $1;
}, self, "superSends", [], smalltalk.MethodNode)},
args: [],
source: "superSends\x0a\x09^ superSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, self, "superSends:", [aCollection], smalltalk.MethodNode)},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ReturnNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isReturnNode", [], smalltalk.ReturnNode)},
args: [],
source: "isReturnNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._scope())._isMethodScope())._not();
return $1;
}, self, "nonLocalReturn", [], smalltalk.ReturnNode)},
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
messageSends: ["not", "isMethodScope", "scope"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.ReturnNode)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.ReturnNode)},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SendNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: '*Compiler',
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
}, self, "arguments", [], smalltalk.SendNode)},
args: [],
source: "arguments\x0a\x09^arguments ifNil: [arguments := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.SendNode)},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
category: '*Compiler',
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
}, self, "cascadeNodeWithMessages:", [aCollection], smalltalk.SendNode)},
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09    selector: self selector;\x0a\x09    arguments: self arguments;\x0a\x09    yourself.\x0a\x09^CascadeNode new\x0a\x09    receiver: self receiver;\x0a\x09    nodes: (Array with: first), aCollection;\x0a\x09    yourself",
messageSends: ["selector:", "selector", "new", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"],
referencedClasses: ["SendNode", "CascadeNode", "Array"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@index"];
return $1;
}, self, "index", [], smalltalk.SendNode)},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: '*Compiler',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, self, "index:", [anInteger], smalltalk.SendNode)},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isSendNode", [], smalltalk.SendNode)},
args: [],
source: "isSendNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._withAll_(_st(self)._arguments());
_st($2)._add_(_st(self)._receiver());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "nodes", [], smalltalk.SendNode)},
args: [],
source: "nodes\x0a\x09^ (Array withAll: self arguments)\x0a\x09\x09add: self receiver;\x0a\x09\x09yourself",
messageSends: ["add:", "receiver", "withAll:", "arguments", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.SendNode)},
args: [],
source: "receiver\x0a\x09^receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.SendNode)},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.SendNode)},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.SendNode)},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
category: '*Compiler',
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
}, self, "superSend", [], smalltalk.SendNode)},
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
category: '*Compiler',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSend"]=aBoolean;
return self}, self, "superSend:", [aBoolean], smalltalk.SendNode)},
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
category: '*Compiler',
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
}, self, "valueForReceiver:", [anObject], smalltalk.SendNode)},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^SendNode new\x0a\x09    receiver: (self receiver \x0a\x09\x09ifNil: [anObject]\x0a\x09\x09ifNotNil: [self receiver valueForReceiver: anObject]);\x0a\x09    selector: self selector;\x0a\x09    arguments: self arguments;\x0a\x09    yourself",
messageSends: ["receiver:", "ifNil:ifNotNil:", "valueForReceiver:", "receiver", "new", "selector:", "selector", "arguments:", "arguments", "yourself"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SequenceNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.BlockSequenceNode || BlockSequenceNode))._new();
_st($2)._nodes_(_st(self)._nodes());
_st($2)._temps_(_st(self)._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "asBlockSequenceNode", [], smalltalk.SequenceNode)},
args: [],
source: "asBlockSequenceNode\x0a\x09^BlockSequenceNode new\x0a\x09    nodes: self nodes;\x0a\x09    temps: self temps;\x0a\x09    yourself",
messageSends: ["nodes:", "nodes", "new", "temps:", "temps", "yourself"],
referencedClasses: ["BlockSequenceNode"]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.SequenceNode)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.SequenceNode)},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: '*Compiler',
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
}, self, "temps", [], smalltalk.SequenceNode)},
args: [],
source: "temps\x0a\x09^temps ifNil: [#()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@temps"]=aCollection;
return self}, self, "temps:", [aCollection], smalltalk.SequenceNode)},
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockSequenceNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isBlockSequenceNode", [], smalltalk.BlockSequenceNode)},
args: [],
source: "isBlockSequenceNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ValueNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isImmutable", [], smalltalk.ValueNode)},
args: [],
source: "isImmutable\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isValueNode", [], smalltalk.ValueNode)},
args: [],
source: "isValueNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, self, "value", [], smalltalk.ValueNode)},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: '*Compiler',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=anObject;
return self}, self, "value:", [anObject], smalltalk.ValueNode)},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.VariableNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._binding())._alias();
return $1;
}, self, "alias", [], smalltalk.VariableNode)},
args: [],
source: "alias\x0a\x09^ self binding alias",
messageSends: ["alias", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
category: '*Compiler',
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
}, self, "assigned", [], smalltalk.VariableNode)},
args: [],
source: "assigned\x0a\x09^assigned ifNil: [false]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
category: '*Compiler',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assigned"]=aBoolean;
return self}, self, "assigned:", [aBoolean], smalltalk.VariableNode)},
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_beAssigned",
smalltalk.method({
selector: "beAssigned",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._binding())._validateAssignment();
self["@assigned"]=true;
return self}, self, "beAssigned", [], smalltalk.VariableNode)},
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
messageSends: ["validateAssignment", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding",
smalltalk.method({
selector: "binding",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@binding"];
return $1;
}, self, "binding", [], smalltalk.VariableNode)},
args: [],
source: "binding\x0a\x09^ binding",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding_",
smalltalk.method({
selector: "binding:",
category: '*Compiler',
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@binding"]=aScopeVar;
return self}, self, "binding:", [aScopeVar], smalltalk.VariableNode)},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isImmutable", [], smalltalk.VariableNode)},
args: [],
source: "isImmutable\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: '*Compiler',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitClassReferenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ClassReferenceNode)},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitClassReferenceNode: self",
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._visit_(each);
})}));
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitNode_(aNode);
return $1;
}, self, "visitVariableNode:", [aNode], smalltalk.NodeVisitor)},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
category: '*Compiler',
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
return self}, self, "initializeFromMethodContext:", [aMethodContext], smalltalk.AIContext)},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x09self pc: aMethodContext pc.\x0a    self receiver: aMethodContext receiver.\x0a    self selector: aMethodContext selector.\x0a    aMethodContext outerContext ifNotNil: [\x0a\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a    aMethodContext locals keysAndValuesDo: [ :key :value |\x0a    \x09self locals at: key put: value ]",
messageSends: ["pc:", "pc", "receiver:", "receiver", "selector:", "selector", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "keysAndValuesDo:", "at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
category: '*Compiler',
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
}, self, "locals", [], smalltalk.AIContext)},
args: [],
source: "locals\x0a\x09^ locals ifNil: [ locals := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerContext"];
return $1;
}, self, "outerContext", [], smalltalk.AIContext)},
args: [],
source: "outerContext\x0a\x09^ outerContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext_",
smalltalk.method({
selector: "outerContext:",
category: '*Compiler',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerContext"]=anAIContext;
return self}, self, "outerContext:", [anAIContext], smalltalk.AIContext)},
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
category: '*Compiler',
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
}, self, "pc", [], smalltalk.AIContext)},
args: [],
source: "pc\x0a\x09^ pc ifNil: [ pc := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc_",
smalltalk.method({
selector: "pc:",
category: '*Compiler',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pc"]=anInteger;
return self}, self, "pc:", [anInteger], smalltalk.AIContext)},
args: ["anInteger"],
source: "pc: anInteger\x0a\x09pc := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, self, "receiver", [], smalltalk.AIContext)},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: '*Compiler',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, self, "receiver:", [anObject], smalltalk.AIContext)},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, self, "selector", [], smalltalk.AIContext)},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.AIContext)},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_fromMethodContext_",
smalltalk.method({
selector: "fromMethodContext:",
category: '*Compiler',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "fromMethodContext:", [aMethodContext], smalltalk.AIContext.klass)},
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new \x0a    \x09initializeFromMethodContext: aMethodContext;\x0a        yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AIContext.klass);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@context"];
return $1;
}, self, "context", [], smalltalk.ASTInterpreter)},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: '*Compiler',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=anAIContext;
return self}, self, "context:", [anAIContext], smalltalk.ASTInterpreter)},
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, self, "initialize", [], smalltalk.ASTInterpreter)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    shouldReturn := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@shouldReturn"]=false;
$1=_st(self)._interpretNode_(aNode);
return $1;
}, self, "interpret:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "interpret: aNode\x0a\x09shouldReturn := false.\x0a    ^ self interpretNode: aNode",
messageSends: ["interpretNode:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretNode_",
smalltalk.method({
selector: "interpretNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@currentNode"]=aNode;
$1=_st(self)._visit_(aNode);
return $1;
}, self, "interpretNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "interpretNode: aNode\x0a\x09currentNode := aNode.\x0a    ^ self visit: aNode",
messageSends: ["visit:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_",
smalltalk.method({
selector: "messageFromSendNode:",
category: '*Compiler',
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
}, self, "messageFromSendNode:", [aSendNode], smalltalk.ASTInterpreter)},
args: ["aSendNode"],
source: "messageFromSendNode: aSendNode\x0a\x09^ Message new\x0a    \x09selector: aSendNode selector;\x0a        arguments: (aSendNode arguments collect: [ :each |\x0a        \x09self interpretNode: each ]);\x0a        yourself",
messageSends: ["selector:", "selector", "new", "arguments:", "collect:", "interpretNode:", "arguments", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
})});
return $1;
}, self, "visitBlockNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a    ^ [ self interpretNode: aNode nodes first ]",
messageSends: ["interpretNode:", "first", "nodes"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: '*Compiler',
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
}, self, "visitCascadeNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09| receiver |\x0a    \x0a    receiver := self interpretNode: aNode receiver.\x0a\x0a    aNode nodes allButLast\x0a    \x09do: [ :each | \x0a        \x09(self messageFromSendNode: each)\x0a            \x09sendTo: receiver ].\x0a\x0a    ^ (self messageFromSendNode: aNode nodes last)\x0a            \x09sendTo: receiver",
messageSends: ["interpretNode:", "receiver", "do:", "sendTo:", "messageFromSendNode:", "allButLast", "nodes", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aNode)._value());
return $1;
}, self, "visitClassReferenceNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09^ Smalltalk current at: aNode value",
messageSends: ["at:", "value", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._halt();
return self}, self, "visitJSStatementNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09self halt",
messageSends: ["halt"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@shouldReturn"]=true;
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
return $1;
}, self, "visitReturnNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09shouldReturn := true.\x0a    ^ self interpretNode: aNode nodes first",
messageSends: ["interpretNode:", "first", "nodes"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._messageFromSendNode_(aNode))._sendTo_(_st(self)._interpretNode_(_st(aNode)._receiver()));
return $1;
}, self, "visitSendNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a    \x0a    ^ (self messageFromSendNode: aNode)\x0a    \x09sendTo: (self interpretNode: aNode receiver)",
messageSends: ["sendTo:", "interpretNode:", "receiver", "messageFromSendNode:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: '*Compiler',
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
}, self, "visitSequenceNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode nodes allButLast do: [ :each | | value |\x0a        value := self interpretNode: each.\x0a\x09\x09shouldReturn ifTrue: [ ^ value ] ].\x0a    ^ self interpretNode: aNode nodes last",
messageSends: ["do:", "interpretNode:", "ifTrue:", "allButLast", "nodes", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aNode)._value();
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.ASTInterpreter)},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ aNode value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: '*Compiler',
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
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentClass"];
return $1;
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
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentClass"]=aClass;
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["self", "super", "true", "false", "nil", "thisContext"];
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
category: '*Compiler',
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
category: '*Compiler',
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
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.AbstractCodeGenerator)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: '*Compiler',
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
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

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: '*Compiler',
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
}, self, "compileNode:", [aNode], smalltalk.InliningCodeGenerator)},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "irTranslator", "contents"],
referencedClasses: []
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliner || IRInliner))._new();
return $1;
}, self, "inliner", [], smalltalk.InliningCodeGenerator)},
args: [],
source: "inliner\x0a\x09^ IRInliner new",
messageSends: ["new"],
referencedClasses: ["IRInliner"]
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator))._new();
return $1;
}, self, "irTranslator", [], smalltalk.InliningCodeGenerator)},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
category: '*Compiler',
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
}, self, "alias:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isImmutable ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new \x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias); \x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["ifTrue:", "visit:", "isImmutable", "variable:", "name:", ",", "nextAlias", "new", "yourself", "add:", "sequence", "internalVariables", "method"],
referencedClasses: ["AliasVar", "IRVariable", "IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_aliasTemporally_",
smalltalk.method({
selector: "aliasTemporally:",
category: '*Compiler',
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
}, self, "aliasTemporally:", [aCollection], smalltalk.IRASTTranslator)},
args: ["aCollection"],
source: "aliasTemporally: aCollection\x0a\x09\x22https://github.com/NicolasPetton/amber/issues/296\x0a    \x0a    If a node is aliased, all preceding ones are aliased as well.\x0a    The tree is iterated twice. First we get the aliasing dependency, \x0a    then the aliasing itself is done\x22\x0a\x0a\x09| threshold result |\x0a    threshold := 0.\x0a    \x0a    aCollection withIndexDo: [ :each :i |\x0a        each subtreeNeedsAliasing\x0a\x09\x09    ifTrue: [ threshold := i ]].\x0a\x0a\x09result := OrderedCollection new.\x0a\x09aCollection withIndexDo: [ :each :i | \x0a\x09\x09result add: (i <= threshold\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ])].\x0a\x0a    ^result",
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "alias:", "visit:", "<="],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, self, "method", [], smalltalk.IRASTTranslator)},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: '*Compiler',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=anIRMethod;
return self}, self, "method:", [anIRMethod], smalltalk.IRASTTranslator)},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
category: '*Compiler',
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
}, self, "nextAlias", [], smalltalk.IRASTTranslator)},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@sequence"];
return $1;
}, self, "sequence", [], smalltalk.IRASTTranslator)},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
category: '*Compiler',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sequence"]=anIRSequence;
return self}, self, "sequence:", [anIRSequence], smalltalk.IRASTTranslator)},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, self, "source", [], smalltalk.IRASTTranslator)},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.IRASTTranslator)},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.IRASTTranslator)},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.IRASTTranslator)},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: '*Compiler',
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
}, self, "visitAssignmentNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new \x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "new", "yourself", "sequence"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: '*Compiler',
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
}, self, "visitBlockNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new \x0a\x09\x09\x09name: each name;\x0a            scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "parameters", "new", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "temps", "visit:", "nodes"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: '*Compiler',
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
}, self, "visitBlockSequenceNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [ \x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each | \x0a\x09\x09\x09\x09\x09self sequence add: (self visit: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode \x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visit: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visit: aNode nodes last) ]]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "do:", "add:", "visit:", "sequence", "allButLast", "nodes", "ifFalse:ifTrue:", "last", "yourself", "isReturnNode"],
referencedClasses: ["IRBlockSequence", "IRBlockReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: '*Compiler',
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
}, self, "visitCascadeNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias |\x0a\x0a\x09aNode receiver isImmutable ifFalse: [ \x0a\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: (VariableNode new binding: alias variable) ]].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifFalse:", "alias:", "receiver", "do:", "receiver:", "binding:", "variable", "new", "nodes", "isImmutable", "add:", "visit:", "sequence", "allButLast", "last"],
referencedClasses: ["VariableNode"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: '*Compiler',
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
}, self, "visitDynamicArrayNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self aliasTemporally: aNode nodes) do: [:each | array add: each].\x0a\x09^ array",
messageSends: ["new", "do:", "add:", "aliasTemporally:", "nodes"],
referencedClasses: ["IRDynamicArray"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: '*Compiler',
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
}, self, "visitDynamicDictionaryNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a    (self aliasTemporally: aNode nodes) do: [:each | dictionary add: each].\x0a\x09^ dictionary",
messageSends: ["new", "do:", "add:", "aliasTemporally:", "nodes"],
referencedClasses: ["IRDynamicDictionary"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVerbatim || IRVerbatim))._new();
_st($2)._source_(_st(aNode)._source());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitJSStatementNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "yourself"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: '*Compiler',
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
}, self, "visitMethodNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source;\x0a        theClass: self theClass;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a        superSends: aNode superSends;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a            scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "source", "new", "theClass:", "theClass", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "superSends:", "superSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "method", "temps", "visit:", "nodes", "ifFalse:", "variable:", "at:", "pseudoVars", "hasLocalReturn"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRVariable", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: '*Compiler',
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
}, self, "visitReturnNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn \x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "new", "nonLocalReturn", "scope:", "scope", "do:", "add:", "alias:", "nodes"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: '*Compiler',
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
}, self, "visitSendNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send all receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send \x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a    \x0a    all := self aliasTemporally: { aNode receiver }, aNode arguments.\x0a\x09receiver := all first.\x0a\x09arguments := all allButFirst.\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "classSend:", "superclass", "theClass", "superSend", "aliasTemporally:", ",", "arguments", "receiver", "first", "allButFirst", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: '*Compiler',
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
}, self, "visitSequenceNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self \x0a\x09\x09withSequence: IRSequence new \x09\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visit: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ]]]",
messageSends: ["withSequence:do:", "new", "do:", "visit:", "ifFalse:", "add:", "sequence", "isVariable", "nodes"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRValue || IRValue))._new();
_st($2)._value_(_st(aNode)._value());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new \x0a\x09\x09value: aNode value; \x0a\x09\x09yourself",
messageSends: ["value:", "value", "new", "yourself"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVariable || IRVariable))._new();
_st($2)._variable_(_st(aNode)._binding());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "visitVariableNode:", [aNode], smalltalk.IRASTTranslator)},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new \x0a\x09\x09variable: aNode binding; \x0a\x09\x09yourself",
messageSends: ["variable:", "binding", "new", "yourself"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
category: '*Compiler',
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
}, self, "withSequence:do:", [aSequence,aBlock], smalltalk.IRASTTranslator)},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: '*Compiler',
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
}, self, "classReferences", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.ShadowingVariableError || ShadowingVariableError))._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, self, "errorShadowingVariable:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
messageSends: ["variableName:", "new", "signal"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
category: '*Compiler',
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
return self}, self, "errorUnknownVariable:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window)\x22\x0a\x0a\x09| identifier |\x0a    identifier := aNode value.\x0a\x09((#('jQuery' 'window' 'process' 'global') includes: identifier) not and: [ self isVariableGloballyUndefined: identifier ]) ifTrue: [\x0a\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09signal ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09currentScope methodScope unknownVariables add: aNode value. ]",
messageSends: ["value", "ifTrue:ifFalse:", "variableName:", "new", "signal", "add:", "unknownVariables", "methodScope", "and:", "isVariableGloballyUndefined:", "not", "includes:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_isVariableGloballyUndefined_",
smalltalk.method({
selector: "isVariableGloballyUndefined:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval('typeof ' + aString + ' == "undefined"');
return self}, self, "isVariableGloballyUndefined:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "isVariableGloballyUndefined: aString\x0a\x09<return eval('typeof ' + aString + ' == \x22undefined\x22')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: '*Compiler',
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
}, self, "messageSends", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.LexicalScope || LexicalScope));
return $1;
}, self, "newBlockScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["LexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.MethodLexicalScope || MethodLexicalScope));
return $1;
}, self, "newMethodScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["MethodLexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
category: '*Compiler',
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "newScopeOfClass:", [aLexicalScopeClass], smalltalk.SemanticAnalyzer)},
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new \x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
messageSends: ["outerScope:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
category: '*Compiler',
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
return self}, self, "popScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
messageSends: ["ifNotNil:", "outerScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, self, "pushScope:", [aScope], smalltalk.SemanticAnalyzer)},
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
messageSends: ["outerScope:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
category: '*Compiler',
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
}, self, "superSends", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "superSends\x0a\x09^ superSends ifNil: [ superSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.SemanticAnalyzer)},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._errorShadowingVariable_(aString);
};
return self}, self, "validateVariableScope:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
messageSends: ["ifNotNil:", "errorShadowingVariable:", "lookupVariable:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]);
_st(_st(aNode)._left())._beAssigned();
return self}, self, "visitAssignmentNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
messageSends: ["visitAssignmentNode:", "beAssigned", "left"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: '*Compiler',
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
return self}, self, "visitBlockNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09\x0a\x09aNode parameters do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "do:", "validateVariableScope:", "addArg:", "parameters", "visitBlockNode:", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: '*Compiler',
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
return self}, self, "visitCascadeNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22Populate the receiver into all children\x22\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09each receiver: aNode receiver ].\x0a\x09super visitCascadeNode: aNode.\x0a\x09aNode nodes first superSend ifTrue: [\x0a\x09\x09aNode nodes do: [ :each | each superSend: true ]]",
messageSends: ["do:", "receiver:", "receiver", "nodes", "visitCascadeNode:", "ifTrue:", "superSend:", "superSend", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classReferences())._add_(_st(aNode)._value());
$1=_st((smalltalk.ClassRefVar || ClassRefVar))._new();
_st($1)._name_(_st(aNode)._value());
$2=_st($1)._yourself();
_st(aNode)._binding_($2);
return self}, self, "visitClassReferenceNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self classReferences add: aNode value.\x0a\x09aNode binding: (ClassRefVar new name: aNode value; yourself)",
messageSends: ["add:", "value", "classReferences", "binding:", "name:", "new", "yourself"],
referencedClasses: ["ClassRefVar"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: '*Compiler',
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
return self}, self, "visitMethodNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [:each | \x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode \x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09messageSends: self messageSends keys;\x0a        superSends: self superSends keys.\x0a\x09self popScope",
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "addIVar:", "allInstanceVariableNames", "theClass", "validateVariableScope:", "addArg:", "arguments", "visitMethodNode:", "classReferences:", "classReferences", "messageSends:", "keys", "messageSends", "superSends:", "superSends", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: '*Compiler',
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
return self}, self, "visitReturnNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
messageSends: ["scope:", "ifTrue:ifFalse:", "localReturn:", "addNonLocalReturn:", "methodScope", "isMethodScope", "visitReturnNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: '*Compiler',
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
return self}, self, "visitSendNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super' \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aNode superSend: true.\x0a\x09\x09\x09aNode receiver value: 'self'.\x0a\x09\x09\x09self superSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09\x09\x09(self superSends at: aNode selector) add: aNode ]\x0a          \x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver shouldBeAliased: true ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
messageSends: ["ifTrue:ifFalse:", "superSend:", "value:", "receiver", "at:ifAbsentPut:", "selector", "new", "superSends", "add:", "at:", "ifTrue:", "shouldBeInlined:", "shouldBeAliased:", "includes:", "inlinedSelectors", "=", "value", "messageSends", "index:", "size", "visitSendNode:"],
referencedClasses: ["Set", "IRSendInliner"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]);
return self}, self, "visitSequenceNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
messageSends: ["do:", "validateVariableScope:", "addTemp:", "temps", "visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: '*Compiler',
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
return self}, self, "visitVariableNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error\x22\x0a\x0a\x09aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ \x0a\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09UnknownVar new name: aNode value; yourself ])",
messageSends: ["binding:", "ifNil:", "errorUnknownVariable:", "name:", "value", "new", "yourself", "lookupVariable:"],
referencedClasses: ["UnknownVar"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: '*Compiler',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aClass], smalltalk.SemanticAnalyzer.klass)},
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer.klass);

smalltalk.addMethod(
"_initializePackageNamed_prefix_",
smalltalk.method({
selector: "initializePackageNamed:prefix:",
category: '*Compiler',
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Package || Package))._named_(packageName);
_st($1)._setupClasses();
_st($1)._commitPathJs_(_st(_st("/").__comma(aString)).__comma("/js"));
$2=_st($1)._commitPathSt_(_st(_st("/").__comma(aString)).__comma("/st"));
return self}, self, "initializePackageNamed:prefix:", [packageName,aString], smalltalk.PackageLoader)},
args: ["packageName", "aString"],
source: "initializePackageNamed: packageName prefix: aString\x0a\x0a\x09(Package named: packageName) \x0a    \x09setupClasses;\x0a        commitPathJs: '/', aString, '/js';\x0a        commitPathSt: '/', aString, '/st'",
messageSends: ["setupClasses", "named:", "commitPathJs:", ",", "commitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackage_prefix_",
smalltalk.method({
selector: "loadPackage:prefix:",
category: '*Compiler',
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
return self}, self, "loadPackage:prefix:", [packageName,aString], smalltalk.PackageLoader)},
args: ["packageName", "aString"],
source: "loadPackage: packageName prefix: aString\x09\x0a\x09| url |\x0a    url := '/', aString, '/js/', packageName, '.js'.\x0a\x09jQuery \x0a\x09\x09ajax: url\x0a        options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'script'.\x0a    \x09\x09'complete' -> [ :jqXHR :textStatus | \x0a\x09\x09\x09\x09jqXHR readyState = 4 \x0a                \x09ifTrue: [ self initializePackageNamed: packageName prefix: aString ] ].\x0a\x09\x09\x09'error' -> [ window alert: 'Could not load package at:  ', url ]\x0a\x09\x09}",
messageSends: [",", "ajax:options:", "->", "ifTrue:", "initializePackageNamed:prefix:", "=", "readyState", "alert:"],
referencedClasses: []
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
category: '*Compiler',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._loadPackage_prefix_(each,aString);
})}));
return self}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader)},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09aCollection do: [ :each |\x0a    \x09self loadPackage: each prefix: aString ]",
messageSends: ["do:", "loadPackage:prefix:"],
referencedClasses: []
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
category: '*Compiler',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader.klass)},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09^ self new loadPackages: aCollection prefix: aString",
messageSends: ["loadPackages:prefix:", "new"],
referencedClasses: []
}),
smalltalk.PackageLoader.klass);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._name())._asVariableName();
return $1;
}, self, "alias", [], smalltalk.ScopeVar)},
args: [],
source: "alias\x0a\x09^ self name asVariableName",
messageSends: ["asVariableName", "name"],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isArgVar", [], smalltalk.ScopeVar)},
args: [],
source: "isArgVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClassRefVar", [], smalltalk.ScopeVar)},
args: [],
source: "isClassRefVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isInstanceVar", [], smalltalk.ScopeVar)},
args: [],
source: "isInstanceVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isPseudoVar", [], smalltalk.ScopeVar)},
args: [],
source: "isPseudoVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isTempVar", [], smalltalk.ScopeVar)},
args: [],
source: "isTempVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isUnknownVar", [], smalltalk.ScopeVar)},
args: [],
source: "isUnknownVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, self, "name", [], smalltalk.ScopeVar)},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, self, "name:", [aString], smalltalk.ScopeVar)},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, self, "scope", [], smalltalk.ScopeVar)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: '*Compiler',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, self, "scope:", [aScope], smalltalk.ScopeVar)},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
category: '*Compiler',
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
return self}, self, "validateAssignment", [], smalltalk.ScopeVar)},
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
messageSends: ["ifTrue:", "variableName:", "name", "new", "signal", "or:", "isPseudoVar", "isArgVar"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: '*Compiler',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aString], smalltalk.ScopeVar.klass)},
args: ["aString"],
source: "on: aString\x0a\x09^ self new \x0a\x09\x09name: aString;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ScopeVar.klass);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.AliasVar)},
args: [],
source: "node\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: '*Compiler',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.AliasVar)},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isArgVar", [], smalltalk.ArgVar)},
args: [],
source: "isArgVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ArgVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st("(smalltalk.").__comma(_st(self)._name())).__comma(" || ")).__comma(_st(self)._name())).__comma(")");
return $1;
}, self, "alias", [], smalltalk.ClassRefVar)},
args: [],
source: "alias\x0a\x09^ '(smalltalk.', self name, ' || ', self name, ')'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClassRefVar", [], smalltalk.ClassRefVar)},
args: [],
source: "isClassRefVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("self[\x22@").__comma(_st(self)._name())).__comma("\x22]");
return $1;
}, self, "alias", [], smalltalk.InstanceVar)},
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInstanceVar", [], smalltalk.InstanceVar)},
args: [],
source: "isInstanceVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, self, "alias", [], smalltalk.PseudoVar)},
args: [],
source: "alias\x0a\x09^ self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isPseudoVar", [], smalltalk.PseudoVar)},
args: [],
source: "isPseudoVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._scope())._alias()).__comma(".locals.")).__comma(smalltalk.ScopeVar.fn.prototype._alias.apply(_st(self), []));
return $1;
}, self, "alias", [], smalltalk.TempVar)},
args: [],
source: "alias\x0a\x09^ self scope alias, '.locals.', super alias",
messageSends: [",", "alias", "scope"],
referencedClasses: []
}),
smalltalk.TempVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isTempVar", [], smalltalk.TempVar)},
args: [],
source: "isTempVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TempVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: '*Compiler',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isUnknownVar", [], smalltalk.UnknownVar)},
args: [],
source: "isUnknownVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVar);

