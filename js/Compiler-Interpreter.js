smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'accessing',
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
source: "initializeFromMethodContext: aMethodContext\x0a\x09self pc: aMethodContext pc.\x0a    self receiver: aMethodContext receiver.\x0a    self selector: aMethodContext selector.\x0a    aMethodContext outerContext ifNotNil: [\x0a\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a    aMethodContext locals keysAndValuesDo: [ :key :value |\x0a    \x09self locals at: key put: value ]\x0a    ",
messageSends: ["pc:", "pc", "receiver:", "receiver", "selector:", "selector", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "keysAndValuesDo:", "at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'accessing',
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
category: 'instance creation',
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



