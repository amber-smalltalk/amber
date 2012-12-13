smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('ASTBlockClosure', smalltalk.BlockClosure, ['astNode'], 'Compiler-Interpreter');
smalltalk.ASTBlockClosure.comment="ASTBlockClosure is polymorph with BlockClosure. \x0aAn ASTBlockClosure is used to interpret a BlockNode, and override all \x22primitive\x22 methods (#value and co)."
smalltalk.addMethod(
"_astNode",
smalltalk.method({
selector: "astNode",
category: 'accessing',
fn: function (){
var self=this;
return self["@astNode"];
},
args: [],
source: "astNode\x0a\x09^ astNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTBlockClosure);

smalltalk.addMethod(
"_astNode_",
smalltalk.method({
selector: "astNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@astNode"]=aNode;
return self},
args: ["aNode"],
source: "astNode: aNode\x0a\x09astNode := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTBlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.ASTInterpreter || ASTInterpreter),"_current",[]),"_blockValue_",[self]);
return $1;
},
args: [],
source: "value\x0a\x09^ ASTInterpreter current blockValue: self",
messageSends: ["blockValue:", "current"],
referencedClasses: ["ASTInterpreter"]
}),
smalltalk.ASTBlockClosure);



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
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ASTBlockClosure || ASTBlockClosure),"_new",[]);
smalltalk.send($2,"_astNode_",[aNode]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ ASTBlockClosure new\x0a    \x09astNode: aNode;\x0a        yourself",
messageSends: ["astNode:", "new", "yourself"],
referencedClasses: ["ASTBlockClosure"]
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
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_first",[])]);
return $1;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09shouldReturn := true.\x0a    ^ self interpret: aNode nodes first",
messageSends: ["interpret:", "first", "nodes"],
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
receiver=smalltalk.send(self,"_interpret_",[smalltalk.send(aNode,"_receiver",[])]);
arguments=smalltalk.send(smalltalk.send(aNode,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_interpret_",[each]);
})]);
$1=smalltalk.send(self,"_send_to_arguments_",[smalltalk.send(aNode,"_selector",[]),receiver,arguments]);
return $1;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09| receiver arguments |\x0a    \x0a    receiver := self interpret: aNode receiver.\x0a    arguments := aNode arguments collect: [ :each |\x0a\x09\x09self interpret: each ].\x0a    \x0a    ^ self send: aNode selector to: receiver arguments: arguments",
messageSends: ["interpret:", "receiver", "collect:", "arguments", "send:to:arguments:", "selector"],
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
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
var value;
value=smalltalk.send(self,"_interpret_",[each]);
value;
if(smalltalk.assert(self["@shouldReturn"])){
throw $early=[value];
};
})]);
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])]);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode nodes allButLast do: [ :each | | value |\x0a        value := self interpret: each.\x0a\x09\x09shouldReturn ifTrue: [ ^ value ] ].\x0a    ^ self interpret: aNode nodes last",
messageSends: ["do:", "interpret:", "ifTrue:", "allButLast", "nodes", "last"],
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


smalltalk.ASTInterpreter.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[],smalltalk.NodeVisitor.klass);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ASTInterpreter.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.ASTInterpreter.klass);


