define("amber_core/Compiler-AST", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-AST');
smalltalk.packages["Compiler-AST"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Node', smalltalk.Object, ['parent', 'position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.Node.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aConcrete classes should implement `#accept:` to allow visiting.\x0a\x0a`position` holds a point containing line and column number of the symbol location in the original source file.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.Node)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitNode: self",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "addNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nodes())._add_(aNode);
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.Node)})},
args: ["aNode"],
source: "addNode: aNode\x0a\x09self nodes add: aNode.\x0a\x09aNode parent: self",
messageSends: ["add:", "nodes", "parent:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.Node)})},
args: [],
source: "isAssignmentNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.Node)})},
args: [],
source: "isBlockNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.Node)})},
args: [],
source: "isBlockSequenceNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCascadeNode",{},smalltalk.Node)})},
args: [],
source: "isCascadeNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Node)})},
args: [],
source: "isImmutable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isJSStatementNode",{},smalltalk.Node)})},
args: [],
source: "isJSStatementNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isLastChild",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._parent())._nodes())._last()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLastChild",{},smalltalk.Node)})},
args: [],
source: "isLastChild\x0a\x09^ self parent nodes last = self",
messageSends: ["=", "last", "nodes", "parent"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Node)})},
args: [],
source: "isNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferenced",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._parent();
$ctx1.sendIdx["parent"]=1;
$3=_st($4)._isSequenceNode();
$2=_st($3)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._parent())._isAssignmentNode();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=_st($2)._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isReferenced",{},smalltalk.Node)})},
args: [],
source: "isReferenced\x0a\x09\x22Answer true if the receiver is referenced by other nodes.\x0a\x09Do not take sequences or assignments into account\x22\x0a\x09\x0a\x09^ (self parent isSequenceNode or: [\x0a\x09\x09self parent isAssignmentNode ]) not",
messageSends: ["not", "or:", "isSequenceNode", "parent", "isAssignmentNode"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.Node)})},
args: [],
source: "isReturnNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.Node)})},
args: [],
source: "isSendNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSequenceNode",{},smalltalk.Node)})},
args: [],
source: "isSequenceNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.Node)})},
args: [],
source: "isValueNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isVariableNode",{},smalltalk.Node)})},
args: [],
source: "isVariableNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._parent();
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
var node;
node=$receiver;
$1=_st(node)._method();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.Node)})},
args: [],
source: "method\x0a\x09^ self parent ifNotNil: [ :node | node method ]",
messageSends: ["ifNotNil:", "parent", "method"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextChild",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._nodes();
$ctx1.sendIdx["nodes"]=1;
$2=_st($3)._isEmpty();
if(smalltalk.assert($2)){
$1=self;
} else {
$1=_st(_st(self._nodes())._first())._nextChild();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextChild",{},smalltalk.Node)})},
args: [],
source: "nextChild\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the receiver to answer the next node to be evaluated\x22\x0a\x09\x0a\x09^ self nodes isEmpty\x0a\x09\x09ifTrue: [ self ]\x0a\x09\x09ifFalse: [ self nodes first nextChild ]",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "nodes", "nextChild", "first"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._parent();
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
var node;
node=$receiver;
$1=_st(node)._nextNode_(self);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.Node)})},
args: [],
source: "nextNode\x0a\x09^ self parent ifNotNil: [ :node |\x0a\x09\x09node nextNode: self ]",
messageSends: ["ifNotNil:", "parent", "nextNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=self._nodes();
$ctx1.sendIdx["nodes"]=1;
next=_st($1)._at_ifAbsent_(_st(_st(self._nodes())._indexOf_(aNode)).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[self];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st(next)._nextChild();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode,next:next},smalltalk.Node)})},
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the next node to answer the next node to be evaluated\x22\x0a\x09\x0a\x09| next |\x0a\x09\x0a\x09next := self nodes \x0a\x09\x09at: (self nodes indexOf: aNode) + 1\x0a\x09\x09ifAbsent: [ ^ self ].\x0a\x09\x0a\x09^ next nextChild",
messageSends: ["at:ifAbsent:", "nodes", "+", "indexOf:", "nextChild"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@nodes"];
if(($receiver = $2) == nil || $receiver == null){
self["@nodes"]=_st($Array())._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.Node)})},
args: [],
source: "nodes\x0a\x09^ nodes ifNil: [ nodes := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes:",
category: 'building',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{aCollection:aCollection},smalltalk.Node)})},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
messageSends: ["do:", "parent:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.Node)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aNode:aNode},smalltalk.Node)})},
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == null){
$3=self._parent();
if(($receiver = $3) == nil || $receiver == null){
$1=$3;
} else {
var node;
node=$receiver;
$1=_st(node)._position();
};
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.Node)})},
args: [],
source: "position\x0a\x09\x22answer the line and column of the receiver in the source code\x22\x0a\x09\x0a\x09^ position ifNil: [ \x0a\x09\x09self parent ifNotNil: [ :node | node position ] ]",
messageSends: ["ifNil:", "ifNotNil:", "parent", "position"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'building',
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.Node)})},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Node.superclass.fn.prototype._postCopy.apply(_st(self), []);
_st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Node)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09self nodes do: [ :each | each parent: self ]",
messageSends: ["postCopy", "do:", "nodes", "parent:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},smalltalk.Node)})},
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldBeAliased"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased:",{aBoolean:aBoolean},smalltalk.Node)})},
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined",{},smalltalk.Node)})},
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldBeInlined"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined:",{aBoolean:aBoolean},smalltalk.Node)})},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"stopOnStepping",{},smalltalk.Node)})},
args: [],
source: "stopOnStepping\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._nodes())._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._subtreeNeedsAliasing();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["or:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.Node)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ (self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a\x09\x09self nodes anySatisfy: [ :each | each subtreeNeedsAliasing ] ]",
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined", "anySatisfy:", "nodes", "subtreeNeedsAliasing"],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.AssignmentNode.comment="I represent an assignment node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AssignmentNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.AssignmentNode)})},
args: [],
source: "isAssignmentNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@left"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.AssignmentNode)})},
args: [],
source: "left\x0a\x09^ left",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@left"]=aNode;
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNode:aNode},smalltalk.AssignmentNode)})},
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode.\x0a\x09aNode parent: self",
messageSends: ["parent:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_(self._left(),self._right());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.AssignmentNode)})},
args: [],
source: "nodes\x0a\x09^ Array with: self left with: self right",
messageSends: ["with:with:", "left", "right"],
referencedClasses: ["Array"]
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@right"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.AssignmentNode)})},
args: [],
source: "right\x0a\x09^ right",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@right"]=aNode;
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNode:aNode},smalltalk.AssignmentNode)})},
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode.\x0a\x09aNode parent: self",
messageSends: ["parent:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.AssignmentNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isReferenced();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},smalltalk.AssignmentNode)})},
args: [],
source: "shouldBeAliased\x0a\x09^ super shouldBeAliased or: [ self isReferenced ]",
messageSends: ["or:", "shouldBeAliased", "isReferenced"],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.BlockNode.comment="I represent an block closure node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.BlockNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.BlockNode)})},
args: [],
source: "isBlockNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nextChild",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"nextChild",{},smalltalk.BlockNode)})},
args: [],
source: "nextChild\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode},smalltalk.BlockNode)})},
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@parameters"];
if(($receiver = $2) == nil || $receiver == null){
self["@parameters"]=_st($Array())._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parameters",{},smalltalk.BlockNode)})},
args: [],
source: "parameters\x0a\x09^ parameters ifNil: [ parameters := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parameters"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"parameters:",{aCollection:aCollection},smalltalk.BlockNode)})},
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.BlockNode)})},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.BlockNode)})},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.BlockNode)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased or: [ self shouldBeInlined ]",
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined"],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.CascadeNode.comment="I represent an cascade node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CascadeNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCascadeNode",{},smalltalk.CascadeNode)})},
args: [],
source: "isCascadeNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.CascadeNode)})},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},smalltalk.CascadeNode)})},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.DynamicArrayNode.comment="I represent an dynamic array node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.DynamicArrayNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.DynamicDictionaryNode.comment="I represent an dynamic dictionary node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.DynamicDictionaryNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.JSStatementNode.comment="I represent an JavaScript statement node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.JSStatementNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isJSStatementNode",{},smalltalk.JSStatementNode)})},
args: [],
source: "isJSStatementNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.JSStatementNode)})},
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.JSStatementNode)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'sendIndexes', 'superSends'], 'Compiler-AST');
smalltalk.MethodNode.comment="I represent an method node.\x0a\x0aA method node must be the root and only method node of a valid AST.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.MethodNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == null){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.MethodNode)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.MethodNode)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@classReferences"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},smalltalk.MethodNode)})},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@classReferences"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"classReferences:",{aCollection:aCollection},smalltalk.MethodNode)})},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._source();
$ctx1.sendIdx["source"]=1;
$3=_st($4)._lines();
$ctx1.sendIdx["lines"]=1;
$2=_st($3)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__at(_st(_st(_st(_st(self._source())._lines())._last())._size()).__plus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.MethodNode)})},
args: [],
source: "extent\x0a\x09^ self source lines size @ (self source lines last size + 1)",
messageSends: ["@", "size", "lines", "source", "+", "last"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sendIndexes())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.MethodNode)})},
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
messageSends: ["keys", "sendIndexes"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodNode)})},
args: [],
source: "method\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.MethodNode)})},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aMethodScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aMethodScope:aMethodScope},smalltalk.MethodNode)})},
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MethodNode)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.MethodNode)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sendIndexes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},smalltalk.MethodNode)})},
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes:",
category: 'accessing',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sendIndexes"]=aDictionary;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexes:",{aDictionary:aDictionary},smalltalk.MethodNode)})},
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.MethodNode)})},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.MethodNode)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@superSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{},smalltalk.MethodNode)})},
args: [],
source: "superSends\x0a\x09^ superSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@superSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"superSends:",{aCollection:aCollection},smalltalk.MethodNode)})},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.ReturnNode.comment="I represent an return node. At the AST level, there is not difference between a local return or non-local return.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ReturnNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.ReturnNode)})},
args: [],
source: "isReturnNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._scope())._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},smalltalk.ReturnNode)})},
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
messageSends: ["not", "isMethodScope", "scope"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.ReturnNode)})},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.ReturnNode)})},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.SendNode.comment="I represent an message send node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.SendNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == null){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.SendNode)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ arguments := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.SendNode)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
messageSends: ["do:", "parent:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "cascadeNodeWithMessages:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var first;
function $SendNode(){return smalltalk.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
function $CascadeNode(){return smalltalk.CascadeNode||(typeof CascadeNode=="undefined"?nil:CascadeNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st($SendNode())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._selector_(self._selector());
_st($1)._arguments_(self._arguments());
$2=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
first=$2;
$4=_st($CascadeNode())._new();
_st($4)._receiver_(self._receiver());
_st($4)._nodes_(_st(_st($Array())._with_(first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"cascadeNodeWithMessages:",{aCollection:aCollection,first:first},smalltalk.SendNode)})},
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself.\x0a\x09^ CascadeNode new\x0a\x09\x09receiver: self receiver;\x0a\x09\x09nodes: (Array with: first), aCollection;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "selector", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"],
referencedClasses: ["SendNode", "CascadeNode", "Array"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.SendNode)})},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.SendNode)})},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeSendNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._parent())._isCascadeNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCascadeSendNode",{},smalltalk.SendNode)})},
args: [],
source: "isCascadeSendNode\x0a\x09^ self parent isCascadeNode",
messageSends: ["isCascadeNode", "parent"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.SendNode)})},
args: [],
source: "isSendNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$6,$4;
$1=self._receiver();
$ctx1.sendIdx["receiver"]=1;
if(($receiver = $1) == nil || $receiver == null){
$3=self._arguments();
$ctx1.sendIdx["arguments"]=1;
$2=_st($3)._copy();
return $2;
} else {
$1;
};
$5=_st($Array())._with_(self._receiver());
_st($5)._addAll_(self._arguments());
$6=_st($5)._yourself();
$4=$6;
return $4;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.SendNode)})},
args: [],
source: "nodes\x0a\x09self receiver ifNil: [ ^ self arguments copy ].\x0a\x09\x0a\x09^ (Array with: self receiver)\x0a\x09\x09addAll: self arguments;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "receiver", "copy", "arguments", "addAll:", "with:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.SendNode)})},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@receiver"]=aNode;
$1=_st(aNode)._isNode();
if(smalltalk.assert($1)){
_st(aNode)._parent_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},smalltalk.SendNode)})},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode.\x0a\x09aNode isNode ifTrue: [\x0a\x09\x09aNode parent: self ]",
messageSends: ["ifTrue:", "isNode", "parent:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.SendNode)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.SendNode)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
category: 'testing',
fn: function (){
var self=this;
var sends;
return smalltalk.withContext(function($ctx1) { 
var $1;
sends=_st(_st(_st(self._method())._sendIndexes())._at_(self._selector()))._size();
$1=_st(smalltalk.SendNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(sends).__gt((1)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._index()).__lt(sends);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return self._isReferenced();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["and:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{sends:sends},smalltalk.SendNode)})},
args: [],
source: "shouldBeAliased\x0a\x09\x22Because we keep track of send indexes, some send nodes need additional care for aliasing. \x0a\x09See IRJSVisitor >> visitIRSend:\x22\x0a\x09\x0a\x09| sends |\x0a\x09\x0a\x09sends := (self method sendIndexes at: self selector) size.\x0a\x09\x0a\x09^ super shouldBeAliased or: [\x0a\x09\x09(sends > 1 and: [ self index < sends ]) and: [ self isReferenced ] ]",
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "or:", "shouldBeAliased", "and:", ">", "<", "index", "isReferenced"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"stopOnStepping",{},smalltalk.SendNode)})},
args: [],
source: "stopOnStepping\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@superSend"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSend",{},smalltalk.SendNode)})},
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@superSend"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"superSend:",{aBoolean:aBoolean},smalltalk.SendNode)})},
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "valueForReceiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
function $SendNode(){return smalltalk.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1;
$2=_st($SendNode())._new();
_st($2)._position_(self._position());
$3=$2;
$5=self._receiver();
$ctx1.sendIdx["receiver"]=1;
if(($receiver = $5) == nil || $receiver == null){
$4=anObject;
} else {
$4=_st(self._receiver())._valueForReceiver_(anObject);
};
_st($3)._receiver_($4);
_st($2)._selector_(self._selector());
_st($2)._arguments_(self._arguments());
$6=_st($2)._yourself();
$1=$6;
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueForReceiver:",{anObject:anObject},smalltalk.SendNode)})},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^ SendNode new\x0a\x09\x09position: self position;\x0a\x09\x09receiver: (self receiver\x0a\x09\x09ifNil: [ anObject ] \x0a\x09\x09ifNotNil: [ self receiver valueForReceiver: anObject ]);\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself",
messageSends: ["position:", "new", "position", "receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.SequenceNode.comment="I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.SequenceNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "asBlockSequenceNode",
category: 'converting',
fn: function (){
var self=this;
function $BlockSequenceNode(){return smalltalk.BlockSequenceNode||(typeof BlockSequenceNode=="undefined"?nil:BlockSequenceNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($BlockSequenceNode())._new();
_st($2)._position_(self._position());
_st($2)._nodes_(self._nodes());
_st($2)._temps_(self._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBlockSequenceNode",{},smalltalk.SequenceNode)})},
args: [],
source: "asBlockSequenceNode\x0a\x09^ BlockSequenceNode new\x0a\x09\x09position: self position;\x0a\x09\x09nodes: self nodes;\x0a\x09\x09temps: self temps;\x0a\x09\x09yourself",
messageSends: ["position:", "new", "position", "nodes:", "nodes", "temps:", "temps", "yourself"],
referencedClasses: ["BlockSequenceNode"]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSequenceNode",{},smalltalk.SequenceNode)})},
args: [],
source: "isSequenceNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.SequenceNode)})},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.SequenceNode)})},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == null){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.SequenceNode)})},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@temps"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"temps:",{aCollection:aCollection},smalltalk.SequenceNode)})},
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.BlockSequenceNode.comment="I represent an special sequence node for block scopes.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.BlockSequenceNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.BlockSequenceNode)})},
args: [],
source: "isBlockSequenceNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.ValueNode.comment="I represent a value node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ValueNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._value())._isImmutable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.ValueNode)})},
args: [],
source: "isImmutable\x0a\x09^ self value isImmutable",
messageSends: ["isImmutable", "value"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.ValueNode)})},
args: [],
source: "isValueNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.ValueNode)})},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.ValueNode)})},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.VariableNode.comment="I represent an variable node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.VariableNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._alias();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.VariableNode)})},
args: [],
source: "alias\x0a\x09^ self binding alias",
messageSends: ["alias", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@assigned"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assigned",{},smalltalk.VariableNode)})},
args: [],
source: "assigned\x0a\x09^ assigned ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@assigned"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"assigned:",{aBoolean:aBoolean},smalltalk.VariableNode)})},
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "beAssigned",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._binding())._validateAssignment();
self["@assigned"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},smalltalk.VariableNode)})},
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
messageSends: ["validateAssignment", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@binding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"binding",{},smalltalk.VariableNode)})},
args: [],
source: "binding\x0a\x09^ binding",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding:",
category: 'accessing',
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@binding"]=aScopeVar;
return self}, function($ctx1) {$ctx1.fill(self,"binding:",{aScopeVar:aScopeVar},smalltalk.VariableNode)})},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isArgument",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._isArgVar();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isArgument",{},smalltalk.VariableNode)})},
args: [],
source: "isArgument\x0a\x09^ self binding isArgVar",
messageSends: ["isArgVar", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._isImmutable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.VariableNode)})},
args: [],
source: "isImmutable\x0a\x09^ self binding isImmutable",
messageSends: ["isImmutable", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isVariableNode",{},smalltalk.VariableNode)})},
args: [],
source: "isVariableNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);


smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
category: '*Compiler-AST',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Object)})},
args: [],
source: "isNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ast",
category: '*Compiler-AST',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._source();
$ctx1.sendIdx["source"]=1;
_st($1)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Method source is empty");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st(_st($Smalltalk())._current())._parse_(self._source());
return $2;
}, function($ctx1) {$ctx1.fill(self,"ast",{},smalltalk.CompiledMethod)})},
args: [],
source: "ast\x0a\x09self source ifEmpty: [ self error: 'Method source is empty' ].\x0a\x09\x0a\x09^ Smalltalk current parse: self source",
messageSends: ["ifEmpty:", "source", "error:", "parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.CompiledMethod);

});
