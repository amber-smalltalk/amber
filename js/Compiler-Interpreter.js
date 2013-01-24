smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@context"];
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
category: 'accessing',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=aMethodContext;
return self}, self, "context:", [aMethodContext], smalltalk.ASTInterpreter)},
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09context := aMethodContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
category: 'interpreting',
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
category: 'interpreting',
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
category: 'interpreting',
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
category: 'visiting',
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
category: 'visiting',
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
category: 'visiting',
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
category: 'visiting',
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
category: 'visiting',
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
category: 'visiting',
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
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
var $early={};
try {
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $ctx2.value=nil;
$ctx2.locals.value=_st(self)._interpretNode_(each);
$ctx2.locals.value;
if(smalltalk.assert(self["@shouldReturn"])){
throw $early=[$ctx2.locals.value];
};
})}));
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._last());
return $1;
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
category: 'visiting',
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



smalltalk.addClass('ASTInterpreterTest', smalltalk.TestCase, [], 'Compiler-Interpreter');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
category: 'accessing',
fn: function (aNode,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
return aNode;
}, self, "analyze:forClass:", [aNode,aClass], smalltalk.ASTInterpreterTest)},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a    ^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ASTInterpreter || ASTInterpreter))._new())._interpret_(_st(_st(_st(self)._parse_forClass_(aString,(smalltalk.Object || Object)))._nodes())._first());
return $1;
}, self, "interpret:", [aString], smalltalk.ASTInterpreterTest)},
args: ["aString"],
source: "interpret: aString\x0a\x09\x22the food is a methodNode. Interpret the sequenceNode only\x22\x0a    ^ ASTInterpreter new\x0a    \x09interpret: (self parse: aString forClass: Object) \x0a        \x09nodes first",
messageSends: ["interpret:", "first", "nodes", "parse:forClass:", "new"],
referencedClasses: ["Object", "ASTInterpreter"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}, self, "parse:", [aString], smalltalk.ASTInterpreterTest)},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_parse_forClass_",
smalltalk.method({
selector: "parse:forClass:",
category: 'accessing',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._analyze_forClass_(_st(self)._parse_(aString),aClass);
return $1;
}, self, "parse:forClass:", [aString,aClass], smalltalk.ASTInterpreterTest)},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBinarySend",
smalltalk.method({
selector: "testBinarySend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self}, self, "testBinarySend", [], smalltalk.ASTInterpreterTest)},
args: [],
source: "testBinarySend\x0a\x09self assert: (self interpret: 'foo 2+3+4') equals: 9",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, self, "testBlockLiteral", [], smalltalk.ASTInterpreterTest)},
args: [],
source: "testBlockLiteral\x0a\x09self assert: (self interpret: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a    self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a    self assert: (self interpret: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 2",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testCascade",
smalltalk.method({
selector: "testCascade",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ OrderedCollection new add: 2; add: 3; yourself"),_st((smalltalk.OrderedCollection || OrderedCollection))._with_with_((2),(3)));
return self}, self, "testCascade", [], smalltalk.ASTInterpreterTest)},
args: [],
source: "testCascade\x0a\x09self assert: (self interpret: 'foo ^ OrderedCollection new add: 2; add: 3; yourself') equals: (OrderedCollection with: 2 with: 3)",
messageSends: ["assert:equals:", "interpret:", "with:with:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreterTest);



