smalltalk.addPackage('Compiler-Visitors', {});
smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Visitors');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass) {
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function () {
var self=this;
return self['@currentClass'];
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass) {
var self=this;
(self['@currentClass']=aClass);
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
fn: function () {
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_safeVariableNameFor_",
smalltalk.method({
selector: "safeVariableNameFor:",
fn: function (aString) {
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aString, "__comma", ["_"]);})() : (function(){return aString;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aString, "__comma", ["_"]);}), (function(){return aString;})]));
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;}
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Visitors');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
var self=this;
var ir=nil;
var stream=nil;
smalltalk.send(smalltalk.send(self, "_semanticAnalyzer", []), "_visit_", [aNode]);
(ir=(function($rec){smalltalk.send($rec, "_visit_", [aNode]);return smalltalk.send($rec, "_builder", []);})(smalltalk.send(self, "_translator", [])));
(stream=smalltalk.send((smalltalk.JSStream || JSStream), "_new", []));
smalltalk.send(ir, "_emitOn_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_on_", [smalltalk.send(self, "_currentClass", [])]);
return self;}
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRASTResolver || IRASTResolver), "_new", []));
return self;}
}),
smalltalk.CodeGenerator);



smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler-Visitors');
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


smalltalk.addClass('ImpCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables', 'mutables', 'target', 'lazyVars', 'realVarNames'], 'Compiler-Visitors');
smalltalk.addMethod(
"_aboutToModifyState",
smalltalk.method({
selector: "aboutToModifyState",
fn: function () {
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
fn: function (aClassName, receiver, aBoolean) {
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
fn: function (aBlock) {
var self=this;
smalltalk.send(self['@target'], "_ifNotNil_", [aBlock]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
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
fn: function (aSelector, receiver, aCollection) {
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
fn: function (aSelector, anObject, aCollection) {
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
fn: function (node) {
var self=this;
return smalltalk.send(self, "_visit_targetBeing_", [node, smalltalk.send(self, "_nextLazyvarName", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_isolatedUse_",
smalltalk.method({
selector: "isolatedUse:",
fn: function (node) {
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
fn: function (aString, aBoolean) {
var self=this;
((($receiver = smalltalk.send(self['@lazyVars'], "_includesKey_", [self['@target']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));})() : (function(){return smalltalk.send(self, "_realAssign_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@lazyVars'], "_at_put_", [self['@target'], aString]);return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@mutables'], "_add_", [self['@target']]);})]));}), (function(){return smalltalk.send(self, "_realAssign_", [aString]);})]));
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignExpression_",
smalltalk.method({
selector: "lazyAssignExpression:",
fn: function (aString) {
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, true]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_lazyAssignValue_",
smalltalk.method({
selector: "lazyAssignValue:",
fn: function (aString) {
var self=this;
smalltalk.send(self, "_lazyAssign_dependsOnState_", [aString, false]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_makeTargetRealVariable",
smalltalk.method({
selector: "makeTargetRealVariable",
fn: function () {
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
fn: function () {
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
fn: function () {
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
fn: function (aClassName, receiver) {
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
fn: function (aSelector, receiverNode, operandNode) {
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
fn: function (stmtString, preString, anObject, postString) {
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
fn: function (aString) {
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
fn: function (aSelector, aReceiver, aCollection, aBoolean) {
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
fn: function (nodes, temps) {
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
fn: function (aString) {
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
fn: function (key) {
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
fn: function (aNode, aString) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_lazyAssignValue_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;}
}),
smalltalk.ImpCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
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
fn: function (aNode) {
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


smalltalk.addClass('ReturnNodeChecker', smalltalk.NodeVisitor, ['wasReturnNode'], 'Compiler-Visitors');
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



