smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_blockValue_",
smalltalk.method({
selector: "blockValue:",
category: 'interpreting',
fn: function (anASTBlockClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(smalltalk.send(anASTBlockClosure,"_astNode",[]),"_nodes",[]),"_first",[])]);
return $1;
},
args: ["anASTBlockClosure"],
source: "blockValue: anASTBlockClosure\x0a\x09^ self interpret: anASTBlockClosure astNode nodes first",
messageSends: ["interpret:", "first", "nodes", "astNode"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return self["@context"];
},
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
self["@context"]=aMethodContext;
return self},
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
smalltalk.send(self,"_initialize",[],smalltalk.NodeVisitor);
self["@shouldReturn"]=false;
return self},
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
var $1;
self["@shouldReturn"]=false;
$1=smalltalk.send(self,"_interpretNode_",[aNode]);
return $1;
},
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
var $1;
self["@currentNode"]=aNode;
$1=smalltalk.send(self,"_visit_",[aNode]);
return $1;
},
args: ["aNode"],
source: "interpretNode: aNode\x0a\x09currentNode := aNode.\x0a    ^ self visit: aNode",
messageSends: ["visit:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
category: 'interpreting',
fn: function (aSelector,anObject,aCollection){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[aSelector,aCollection]);
return $1;
},
args: ["aSelector", "anObject", "aCollection"],
source: "send: aSelector to: anObject arguments: aCollection\x0a\x09^ anObject perform: aSelector withArguments: aCollection",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=(function(){
return _st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
});
return $1;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a    ^ [ self interpretNode: aNode nodes first ]",
messageSends: ["interpretNode:", "first", "nodes"],
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
var $1;
self["@shouldReturn"]=true;
$1=_st(self)._interpretNode_(_st(_st(aNode)._nodes())._first());
return $1;
},
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
var $1;
var receiver;
var arguments;
receiver=_st(self)._interpretNode_(_st(aNode)._receiver());
arguments=_st(_st(aNode)._arguments())._collect_((function(each){
return _st(self)._interpretNode_(each);
}));
$1=_st(self)._send_to_arguments_(_st(aNode)._selector(),receiver,arguments);
return $1;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09| receiver arguments |\x0a    \x0a    receiver := self interpretNode: aNode receiver.\x0a    arguments := aNode arguments collect: [ :each |\x0a\x09\x09self interpretNode: each ].\x0a    \x0a    ^ self send: aNode selector to: receiver arguments: arguments",
messageSends: ["interpretNode:", "receiver", "collect:", "arguments", "send:to:arguments:", "selector"],
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
var $1;
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
},
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
var $1;
$1=smalltalk.send(aNode,"_value",[]);
return $1;
},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ aNode value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTInterpretorTest', smalltalk.TestCase, [], 'Compiler-Interpreter');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
category: 'accessing',
fn: function (aNode,aClass){
var self=this;
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
return aNode;
},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a    ^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
$1=_st(_st((smalltalk.ASTInterpreter || ASTInterpreter))._new())._interpret_(_st(_st(_st(self)._parse_forClass_(aString,(smalltalk.Object || Object)))._nodes())._first());
return $1;
},
args: ["aString"],
source: "interpret: aString\x0a\x09\x22the food is a methodNode. Interpret the sequenceNode only\x22\x0a    ^ ASTInterpreter new\x0a    \x09interpret: (self parse: aString forClass: Object) \x0a        \x09nodes first",
messageSends: ["interpret:", "first", "nodes", "parse:forClass:", "new"],
referencedClasses: ["Object", "ASTInterpreter"]
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_parse_forClass_",
smalltalk.method({
selector: "parse:forClass:",
category: 'accessing',
fn: function (aString,aClass){
var self=this;
var $1;
$1=_st(self)._analyze_forClass_(_st(self)._parse_(aString),aClass);
return $1;
},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_testBinarySend",
smalltalk.method({
selector: "testBinarySend",
category: 'tests',
fn: function (){
var self=this;
_st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self},
args: [],
source: "testBinarySend\x0a\x09self assert: (self interpret: 'foo 2+3+4') equals: 9",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
category: 'tests',
fn: function (){
var self=this;
_st(self)._assert_(false);
return self},
args: [],
source: "testBlockLiteral\x0a\x09self assert: false",
messageSends: ["assert:"],
referencedClasses: []
}),
smalltalk.ASTInterpretorTest);



