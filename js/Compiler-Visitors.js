smalltalk.addPackage('Compiler-Visitors', {});
smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Visitors');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: 'accessing',
fn: function (aClass) {
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, '.klass']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
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
fn: function () {
var self=this;
return self['@currentClass'];
return self;},
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
fn: function (aClass) {
var self=this;
(self['@currentClass']=aClass);
return self;},
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
fn: function () {
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;},
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
fn: function (aString) {
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aString, "__comma", ["_"]);})() : (function(){return aString;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aString, "__comma", ["_"]);}), (function(){return aString;})]));
return self;},
args: ["aString"],
source: "safeVariableNameFor: aString\x0a\x09^(Smalltalk current reservedWords includes: aString)\x0a\x09\x09ifTrue: [aString, '_']\x0a\x09\x09ifFalse: [aString]",
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", "current", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
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
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Visitors');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode) {
var self=this;
var ir=nil;
var stream=nil;
smalltalk.send(smalltalk.send(self, "_semanticAnalyzer", []), "_visit_", [aNode]);
(ir=(function($rec){smalltalk.send($rec, "_visit_", [aNode]);return smalltalk.send($rec, "_builder", []);})(smalltalk.send(self, "_translator", [])));
(stream=smalltalk.send((smalltalk.JSStream || JSStream), "_new", []));
smalltalk.send(ir, "_emitOn_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode; builder.\x0a\x09stream := JSStream new.\x0a\x09ir emitOn: stream.\x0a\x09^ stream contents",
messageSends: ["visit:", "semanticAnalyzer", "builder", "translator", "new", "emitOn:", "contents"],
referencedClasses: ["JSStream"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
category: 'compiling',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_on_", [smalltalk.send(self, "_currentClass", [])]);
return self;},
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
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRASTResolver || IRASTResolver), "_new", []));
return self;},
args: [],
source: "translator\x0a\x09^ IRASTResolver new\x0a\x09\x09source: self source;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "yourself", "new"],
referencedClasses: ["IRASTResolver"]
}),
smalltalk.CodeGenerator);



smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler-Visitors');
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


smalltalk.addClass('ImpCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables', 'mutables', 'target', 'lazyVars', 'realVarNames'], 'Compiler-Visitors');
smalltalk.addMethod(
"_aboutToModifyState",
smalltalk.method({
selector: "aboutToModifyState",
category: 'compilation DSL',
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
fn: function (aClassName, receiver, aBoolean) {
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
fn: function (aBlock) {
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
fn: function (node) {
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
fn: function (node) {
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
fn: function (aString, aBoolean) {
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
fn: function (aString) {
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
fn: function (aString) {
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
fn: function () {
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
fn: function () {
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
fn: function () {
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
fn: function (aClassName, receiver) {
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
fn: function (stmtString, preString, anObject, postString) {
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
fn: function (aString) {
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
fn: function (aSelector, aReceiver, aCollection, aBoolean) {
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
fn: function (nodes, temps) {
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
fn: function (aString) {
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
fn: function (key) {
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
fn: function (aNode, aString) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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
fn: function (aNode) {
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


smalltalk.addClass('ReturnNodeChecker', smalltalk.NodeVisitor, ['wasReturnNode'], 'Compiler-Visitors');
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



