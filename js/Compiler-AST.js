smalltalk.addPackage('Compiler-AST', {});
smalltalk.addClass('Node', smalltalk.Object, ['nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.Node.comment="I am the abstract root class of the abstract syntax tree."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self,"_nodes",[]),"_add_",[aNode]);
return self},
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
category: 'testing',
fn: function (){
var self=this;
return false;
},
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
category: 'testing',
fn: function (){
var self=this;
return false;
},
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
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
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
category: 'testing',
fn: function (){
var self=this;
return false;
},
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
category: 'testing',
fn: function (){
var self=this;
return false;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@nodes"];
} else {
$1=self["@nodes"];
};
return $1;
},
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
category: 'building',
fn: function (aCollection){
var self=this;
self["@nodes"]=aCollection;
return self},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeAliased"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeAliased"];
};
return $1;
},
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
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeInlined"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeInlined"];
};
return $1;
},
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
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitAssignmentNode_",[self]);
return $1;
},
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
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@left"];
},
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
category: 'accessing',
fn: function (aNode){
var self=this;
self["@left"]=aNode;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_with_with_",[smalltalk.send(self,"_left",[]),smalltalk.send(self,"_right",[])]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@right"];
},
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
category: 'accessing',
fn: function (aNode){
var self=this;
self["@right"]=aNode;
return self},
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockNode_",[self]);
return $1;
},
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
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@parameters"]) == nil || $receiver == undefined){
self["@parameters"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@parameters"];
} else {
$1=self["@parameters"];
};
return $1;
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
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
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitCascadeNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@receiver"];
},
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
category: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicArrayNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicDictionaryNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitJSStatementNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
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
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitMethodNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@classReferences"];
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@messageSends"];
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@messageSends"]=aCollection;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
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
category: 'accessing',
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
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
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
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
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitReturnNode_",[self]);
return $1;
},
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
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_scope",[]),"_isMethodScope",[]),"_not",[]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
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
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSendNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=self["@arguments"];
};
return $1;
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
var $1,$2,$4,$5,$3;
var first;
$1=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
smalltalk.send($1,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$2=smalltalk.send($1,"_yourself",[]);
first=$2;
$4=smalltalk.send((smalltalk.CascadeNode || CascadeNode),"_new",[]);
smalltalk.send($4,"_receiver_",[smalltalk.send(self,"_receiver",[])]);
smalltalk.send($4,"_nodes_",[smalltalk.send(smalltalk.send((smalltalk.Array || Array),"_with_",[first]),"__comma",[aCollection])]);
$5=smalltalk.send($4,"_yourself",[]);
$3=$5;
return $3;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@index"];
},
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
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
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
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_withAll_",[smalltalk.send(self,"_arguments",[])]);
smalltalk.send($2,"_add_",[smalltalk.send(self,"_receiver",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@receiver"];
},
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
category: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
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
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@superSend"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@superSend"];
};
return $1;
},
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
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@superSend"]=aBoolean;
return self},
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
category: 'accessing',
fn: function (anObject){
var self=this;
var $2,$4,$3,$5,$1;
$2=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
$4=smalltalk.send(self,"_receiver",[]);
if(($receiver = $4) == nil || $receiver == undefined){
$3=anObject;
} else {
$3=smalltalk.send(smalltalk.send(self,"_receiver",[]),"_valueForReceiver_",[anObject]);
};
smalltalk.send($2,"_receiver_",[$3]);
smalltalk.send($2,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($2,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$5=smalltalk.send($2,"_yourself",[]);
$1=$5;
return $1;
},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^SendNode new\x0a\x09    receiver: (self receiver \x0a\x09\x09ifNil: [anObject]\x0a\x09\x09ifNotNil: [self receiver valueForReceiver: anObject]);\x0a\x09    selector: self selector;\x0a\x09    arguments: self arguments;\x0a\x09    yourself",
messageSends: ["receiver:", "ifNil:ifNotNil:", "valueForReceiver:", "receiver", "new", "selector:", "selector", "arguments:", "arguments", "yourself"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSequenceNode_",[self]);
return $1;
},
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
category: 'testing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.BlockSequenceNode || BlockSequenceNode),"_new",[]);
smalltalk.send($2,"_nodes_",[smalltalk.send(self,"_nodes",[])]);
smalltalk.send($2,"_temps_",[smalltalk.send(self,"_temps",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
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
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@temps"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@temps"];
};
return $1;
},
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
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self},
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockSequenceNode_",[self]);
return $1;
},
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
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitValueNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@value"];
},
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
category: 'accessing',
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitVariableNode_",[self]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_binding",[]),"_alias",[]);
return $1;
},
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
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@assigned"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@assigned"];
};
return $1;
},
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
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_binding",[]),"_validateAssignment",[]);
self["@assigned"]=true;
return self},
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
category: 'accessing',
fn: function (){
var self=this;
return self["@binding"];
},
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
category: 'accessing',
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitClassReferenceNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitClassReferenceNode: self",
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



