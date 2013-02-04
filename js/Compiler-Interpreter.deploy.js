smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler-Interpreter');
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


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@context"];
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



smalltalk.addClass('ASTInterpreterTest', smalltalk.TestCase, [], 'Compiler-Interpreter');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
fn: function (aNode,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
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
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self}, self, "testBinarySend", [], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, self, "testBlockLiteral", [], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testCascade",
smalltalk.method({
selector: "testCascade",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ OrderedCollection new add: 2; add: 3; yourself"),_st((smalltalk.OrderedCollection || OrderedCollection))._with_with_((2),(3)));
return self}, self, "testCascade", [], smalltalk.ASTInterpreterTest)}
}),
smalltalk.ASTInterpreterTest);



