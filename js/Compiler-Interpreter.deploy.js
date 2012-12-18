smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_blockValue_",
smalltalk.method({
selector: "blockValue:",
fn: function (anASTBlockClosure){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._interpret_(_st(_st(_st(anASTBlockClosure)._astNode())._nodes())._first());
return $1;
}, self, "blockValue:", [anASTBlockClosure], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@context"];
}, self, "context", [], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx) { self["@context"]=aMethodContext;
return self}, self, "context:", [aMethodContext], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.NodeVisitor.fn.prototype._initialize.apply(_st(self), []);
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
return smalltalk.withContext(function($ctx) { var $1;
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
return smalltalk.withContext(function($ctx) { var $1;
self["@currentNode"]=aNode;
$1=_st(self)._visit_(aNode);
return $1;
}, self, "interpretNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
fn: function (aSelector,anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(anObject)._perform_withArguments_(aSelector,aCollection);
return $1;
}, self, "send:to:arguments:", [aSelector,anObject,aCollection], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=(function(){
return _st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
});
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
return smalltalk.withContext(function($ctx) { var $1;
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
_st(each)._receiver_(_st(aNode)._receiver());
return _st(self)._interpretNode_(each);
}));
_st(_st(_st(aNode)._nodes())._last())._receiver_(_st(aNode)._receiver());
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._last());
return $1;
}, self, "visitCascadeNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._halt();
return self}, self, "visitJSStatementNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
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
return smalltalk.withContext(function($ctx) { var $1;
var receiver;
var arguments;
receiver=_st(self)._interpretNode_(_st(aNode)._receiver());
arguments=_st(_st(aNode)._arguments())._collect_((function(each){
return _st(self)._interpretNode_(each);
}));
$1=_st(self)._send_to_arguments_(_st(aNode)._selector(),receiver,arguments);
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
return smalltalk.withContext(function($ctx) { var $1;
var $early={};
try {
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
var value;
value=_st(self)._interpretNode_(each);
value;
if(smalltalk.assert(self["@shouldReturn"])){
throw $early=[value];
};
}));
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._last());
return $1;
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aNode)._value();
return $1;
}, self, "visitValueNode:", [aNode], smalltalk.ASTInterpreter)}
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTInterpreterTest', smalltalk.TestCase, [], 'Compiler-Interpreter');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
fn: function (aNode,aClass){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
return aNode;
}, self, "analyze:forClass:", [aNode,aClass], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st((smalltalk.ASTInterpreter || ASTInterpreter))._new())._interpret_(_st(_st(_st(self)._parse_forClass_(aString,(smalltalk.Object || Object)))._nodes())._first());
return $1;
}, self, "interpret:", [aString], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}, self, "parse:", [aString], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_parse_forClass_",
smalltalk.method({
selector: "parse:forClass:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._analyze_forClass_(_st(self)._parse_(aString),aClass);
return $1;
}, self, "parse:forClass:", [aString,aClass], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBinarySend",
smalltalk.method({
selector: "testBinarySend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self}, self, "testBinarySend", [], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, self, "testBlockLiteral", [], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);



