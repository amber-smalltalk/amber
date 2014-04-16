define("amber_core/Compiler-AST", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-AST');
smalltalk.packages["Compiler-AST"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Node', globals.Object, ['parent', 'position', 'source', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
globals.Node.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aConcrete classes should implement `#accept:` to allow visiting.\x0a\x0a`position` holds a point containing line and column number of the symbol location in the original source file.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.Node)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitNode: self",
messageSends: ["visitNode:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "addNode:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nodes())._add_(aNode);
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},globals.Node)})},
args: ["aNode"],
source: "addNode: aNode\x0a\x09self nodes add: aNode.\x0a\x09aNode parent: self",
messageSends: ["add:", "nodes", "parent:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "allNodes",
protocol: 'accessing',
fn: function (){
var self=this;
var allNodes;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._nodes();
$ctx1.sendIdx["nodes"]=1;
allNodes=_st($1)._asSet();
_st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(allNodes)._addAll_(_st(each)._allNodes());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=allNodes;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allNodes",{allNodes:allNodes},globals.Node)})},
args: [],
source: "allNodes\x0a\x09| allNodes |\x0a\x09\x0a\x09allNodes := self nodes asSet.\x0a\x09self nodes do: [ :each | \x0a\x09\x09allNodes addAll: each allNodes ].\x0a\x09\x0a\x09^ allNodes",
messageSends: ["asSet", "nodes", "do:", "addAll:", "allNodes"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "inPosition:",
protocol: 'testing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._positionStart()).__lt_eq(aPoint))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._positionEnd()).__gt_eq(aPoint);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"inPosition:",{aPoint:aPoint},globals.Node)})},
args: ["aPoint"],
source: "inPosition: aPoint\x0a\x09^ (self positionStart <= aPoint and: [\x0a\x09\x09self positionEnd >= aPoint ])",
messageSends: ["and:", "<=", "positionStart", ">=", "positionEnd"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isAssignmentNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isCascadeNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isImmutable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isJSStatementNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isLastChild",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._parent())._nodes())._last()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLastChild",{},globals.Node)})},
args: [],
source: "isLastChild\x0a\x09^ self parent nodes last = self",
messageSends: ["=", "last", "nodes", "parent"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isNavigationNode\x0a\x09\x22Answer true if the node can be navigated to\x22\x0a\x09\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferenced",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"isReferenced",{},globals.Node)})},
args: [],
source: "isReferenced\x0a\x09\x22Answer true if the receiver is referenced by other nodes.\x0a\x09Do not take sequences or assignments into account\x22\x0a\x09\x0a\x09^ (self parent isSequenceNode or: [\x0a\x09\x09self parent isAssignmentNode ]) not",
messageSends: ["not", "or:", "isSequenceNode", "parent", "isAssignmentNode"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReturnNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSendNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSequenceNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isValueNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isVariableNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._parent();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var node;
node=$receiver;
$1=_st(node)._method();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},globals.Node)})},
args: [],
source: "method\x0a\x09^ self parent ifNotNil: [ :node | node method ]",
messageSends: ["ifNotNil:", "parent", "method"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "navigationNodeAt:ifAbsent:",
protocol: 'accessing',
fn: function (aPoint,aBlock){
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
var $early={};
try {
children=_st(self._allNodes())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isNavigationNode())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(each)._inPosition_(aPoint);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(children)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value();
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$2=_st(_st(_st(children)._asArray())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$4=_st(a)._positionStart();
$ctx2.sendIdx["positionStart"]=1;
$3=_st($4)._dist_(aPoint);
$ctx2.sendIdx["dist:"]=1;
return _st($3).__lt_eq(_st(_st(b)._positionStart())._dist_(aPoint));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)})})))._first();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"navigationNodeAt:ifAbsent:",{aPoint:aPoint,aBlock:aBlock,children:children},globals.Node)})},
args: ["aPoint", "aBlock"],
source: "navigationNodeAt: aPoint ifAbsent: aBlock\x0a\x09\x22Answer the navigation node in the receiver's tree at aPoint \x0a\x09or nil if no navigation node was found.\x0a\x09\x0a\x09See `node >> isNaviationNode`\x22\x0a\x09\x0a\x09| children |\x0a\x09\x0a\x09children := self allNodes select: [ :each | \x0a\x09\x09each isNavigationNode and: [ each inPosition: aPoint ] ].\x0a\x09\x0a\x09children ifEmpty: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (children asArray sort: [ :a :b | \x0a\x09\x09(a positionStart dist: aPoint) <= \x0a\x09\x09(b positionStart dist: aPoint) ]) first",
messageSends: ["select:", "allNodes", "and:", "isNavigationNode", "inPosition:", "ifEmpty:", "value", "first", "sort:", "asArray", "<=", "dist:", "positionStart"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextChild",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"nextChild",{},globals.Node)})},
args: [],
source: "nextChild\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the receiver to answer the next node to be evaluated\x22\x0a\x09\x0a\x09^ self nodes isEmpty\x0a\x09\x09ifTrue: [ self ]\x0a\x09\x09ifFalse: [ self nodes first nextChild ]",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "nodes", "nextChild", "first"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._parent();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var node;
node=$receiver;
$1=_st(node)._nextNode_(self);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},globals.Node)})},
args: [],
source: "nextNode\x0a\x09^ self parent ifNotNil: [ :node |\x0a\x09\x09node nextNode: self ]",
messageSends: ["ifNotNil:", "parent", "nextNode:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
protocol: 'accessing',
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
throw $early=[self];
}));
$2=_st(next)._nextChild();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode,next:next},globals.Node)})},
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the next node to answer the next node to be evaluated\x22\x0a\x09\x0a\x09| next |\x0a\x09\x0a\x09next := self nodes \x0a\x09\x09at: (self nodes indexOf: aNode) + 1\x0a\x09\x09ifAbsent: [ ^ self ].\x0a\x09\x0a\x09^ next nextChild",
messageSends: ["at:ifAbsent:", "nodes", "+", "indexOf:", "nextChild"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@nodes"];
if(($receiver = $2) == null || $receiver.isNil){
self["@nodes"]=_st($Array())._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},globals.Node)})},
args: [],
source: "nodes\x0a\x09^ nodes ifNil: [ nodes := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes:",
protocol: 'building',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{aCollection:aCollection},globals.Node)})},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
messageSends: ["do:", "parent:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;
},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@parent"]=aNode;
return self},
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
$3=self._parent();
if(($receiver = $3) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"position",{},globals.Node)})},
args: [],
source: "position\x0a\x09\x22answer the line and column of the receiver in the source code\x22\x0a\x09\x0a\x09^ position ifNil: [ \x0a\x09\x09self parent ifNotNil: [ :node | node position ] ]",
messageSends: ["ifNil:", "ifNotNil:", "parent", "position"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
protocol: 'accessing',
fn: function (aPosition){
var self=this;
self["@position"]=aPosition;
return self},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "positionEnd",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$7,$6,$5,$4,$3,$1;
$2=self._positionStart();
$7=self._source();
$ctx1.sendIdx["source"]=1;
$6=_st($7)._lines();
$ctx1.sendIdx["lines"]=1;
$5=_st($6)._size();
$ctx1.sendIdx["size"]=1;
$4=_st($5).__minus((1));
$ctx1.sendIdx["-"]=1;
$3=_st($4).__at(_st(_st(_st(_st(self._source())._lines())._last())._size()).__minus((1)));
$1=_st($2).__plus($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionEnd",{},globals.Node)})},
args: [],
source: "positionEnd\x0a\x09^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))",
messageSends: ["+", "positionStart", "@", "-", "size", "lines", "source", "last"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "positionStart",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionStart",{},globals.Node)})},
args: [],
source: "positionStart\x0a\x09^ self position",
messageSends: ["position"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
protocol: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Node.superclass.fn.prototype._postCopy.apply(_st(self), []));
$ctx1.supercall = false;
_st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},globals.Node)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09self nodes do: [ :each | each parent: self ]",
messageSends: ["postCopy", "do:", "nodes", "parent:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._nodes())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._requiresSmalltalkContext();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return nil;
})))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{},globals.Node)})},
args: [],
source: "requiresSmalltalkContext\x0a\x09\x22Answer true if the receiver requires a smalltalk context.\x0a\x09Only send nodes require a context.\x0a\x09\x0a\x09If no node requires a context, the method will be compiled without one.\x0a\x09See `IRJSTranslator` and `JSStream` for context creation\x22\x0a\x09\x0a\x09^ (self nodes \x0a\x09\x09detect: [ :each | each requiresSmalltalkContext ]\x0a\x09\x09ifNone: [ nil ]) notNil",
messageSends: ["notNil", "detect:ifNone:", "nodes", "requiresSmalltalkContext"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},globals.Node)})},
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined",{},globals.Node)})},
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._source())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Node)})},
args: [],
source: "size\x0a\x09^ self source size",
messageSends: ["size", "source"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.Node)})},
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "stopOnStepping\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},globals.Node)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ (self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a\x09\x09self nodes anySatisfy: [ :each | each subtreeNeedsAliasing ] ]",
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined", "anySatisfy:", "nodes", "subtreeNeedsAliasing"],
referencedClasses: []
}),
globals.Node);



smalltalk.addClass('AssignmentNode', globals.Node, ['left', 'right'], 'Compiler-AST');
globals.AssignmentNode.comment="I represent an assignment node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.AssignmentNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isAssignmentNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@left"];
return $1;
},
args: [],
source: "left\x0a\x09^ left",
messageSends: [],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@left"]=aNode;
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNode:aNode},globals.AssignmentNode)})},
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode.\x0a\x09aNode parent: self",
messageSends: ["parent:"],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_(self._left(),self._right());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},globals.AssignmentNode)})},
args: [],
source: "nodes\x0a\x09^ Array with: self left with: self right",
messageSends: ["with:with:", "left", "right"],
referencedClasses: ["Array"]
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@right"];
return $1;
},
args: [],
source: "right\x0a\x09^ right",
messageSends: [],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@right"]=aNode;
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNode:aNode},globals.AssignmentNode)})},
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode.\x0a\x09aNode parent: self",
messageSends: ["parent:"],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.AssignmentNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isReferenced();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},globals.AssignmentNode)})},
args: [],
source: "shouldBeAliased\x0a\x09^ super shouldBeAliased or: [ self isReferenced ]",
messageSends: ["or:", "shouldBeAliased", "isReferenced"],
referencedClasses: []
}),
globals.AssignmentNode);



smalltalk.addClass('BlockNode', globals.Node, ['parameters', 'scope'], 'Compiler-AST');
globals.BlockNode.comment="I represent an block closure node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.BlockNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nextChild",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "nextChild\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return self;
},
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@parameters"];
if(($receiver = $2) == null || $receiver.isNil){
self["@parameters"]=_st($Array())._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parameters",{},globals.BlockNode)})},
args: [],
source: "parameters\x0a\x09^ parameters ifNil: [ parameters := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self},
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},globals.BlockNode)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased or: [ self shouldBeInlined ]",
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined"],
referencedClasses: []
}),
globals.BlockNode);



smalltalk.addClass('CascadeNode', globals.Node, ['receiver'], 'Compiler-AST');
globals.CascadeNode.comment="I represent an cascade node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.CascadeNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
globals.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isCascadeNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
globals.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
globals.CascadeNode);



smalltalk.addClass('DynamicArrayNode', globals.Node, [], 'Compiler-AST');
globals.DynamicArrayNode.comment="I represent an dynamic array node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.DynamicArrayNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
globals.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', globals.Node, [], 'Compiler-AST');
globals.DynamicDictionaryNode.comment="I represent an dynamic dictionary node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.DynamicDictionaryNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
globals.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', globals.Node, [], 'Compiler-AST');
globals.JSStatementNode.comment="I represent an JavaScript statement node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.JSStatementNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
globals.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isJSStatementNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.JSStatementNode);



smalltalk.addClass('MethodNode', globals.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'sendIndexes', 'superSends'], 'Compiler-AST');
globals.MethodNode.comment="I represent an method node.\x0a\x0aA method node must be the root and only method node of a valid AST.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.MethodNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@arguments"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.MethodNode)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classReferences"];
return $1;
},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sendIndexes())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},globals.MethodNode)})},
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
messageSends: ["keys", "sendIndexes"],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "method\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self},
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sendIndexes"];
return $1;
},
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes:",
protocol: 'accessing',
fn: function (aDictionary){
var self=this;
self["@sendIndexes"]=aDictionary;
return self},
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "sequenceNode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._isSequenceNode();
if(smalltalk.assert($1)){
throw $early=[each];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sequenceNode",{},globals.MethodNode)})},
args: [],
source: "sequenceNode\x0a\x09self nodes do: [ :each |\x0a\x09\x09each isSequenceNode ifTrue: [ ^ each ] ].\x0a\x09\x09\x0a\x09^ nil",
messageSends: ["do:", "nodes", "ifTrue:", "isSequenceNode"],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@source"];
return $1;
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@superSends"];
return $1;
},
args: [],
source: "superSends\x0a\x09^ superSends",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@superSends"]=aCollection;
return self},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.MethodNode);



smalltalk.addClass('ReturnNode', globals.Node, ['scope'], 'Compiler-AST');
globals.ReturnNode.comment="I represent an return node. At the AST level, there is not difference between a local return or non-local return.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.ReturnNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
globals.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReturnNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._scope())._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},globals.ReturnNode)})},
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
messageSends: ["not", "isMethodScope", "scope"],
referencedClasses: []
}),
globals.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
globals.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
globals.ReturnNode);



smalltalk.addClass('SendNode', globals.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
globals.SendNode.comment="I represent an message send node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.SendNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@arguments"];
if(($receiver = $2) == null || $receiver.isNil){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.SendNode)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ arguments := #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},globals.SendNode)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
messageSends: ["do:", "parent:"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "cascadeNodeWithMessages:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
var first;
function $SendNode(){return globals.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
function $CascadeNode(){return globals.CascadeNode||(typeof CascadeNode=="undefined"?nil:CascadeNode)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
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
}, function($ctx1) {$ctx1.fill(self,"cascadeNodeWithMessages:",{aCollection:aCollection,first:first},globals.SendNode)})},
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself.\x0a\x09^ CascadeNode new\x0a\x09\x09receiver: self receiver;\x0a\x09\x09nodes: (Array with: first), aCollection;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "selector", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"],
referencedClasses: ["SendNode", "CascadeNode", "Array"]
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@index"];
return $1;
},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isCascadeSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._parent())._isCascadeNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCascadeSendNode",{},globals.SendNode)})},
args: [],
source: "isCascadeSendNode\x0a\x09^ self parent isCascadeNode",
messageSends: ["isCascadeNode", "parent"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isNavigationNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSendNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._selector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},globals.SendNode)})},
args: [],
source: "navigationLink\x0a\x09^ self selector",
messageSends: ["selector"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$6,$4,$receiver;
$1=self._receiver();
$ctx1.sendIdx["receiver"]=1;
if(($receiver = $1) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"nodes",{},globals.SendNode)})},
args: [],
source: "nodes\x0a\x09self receiver ifNil: [ ^ self arguments copy ].\x0a\x09\x0a\x09^ (Array with: self receiver)\x0a\x09\x09addAll: self arguments;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "receiver", "copy", "arguments", "addAll:", "with:", "yourself"],
referencedClasses: ["Array"]
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@receiver"]=aNode;
$1=_st(aNode)._isNode();
if(smalltalk.assert($1)){
_st(aNode)._parent_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},globals.SendNode)})},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode.\x0a\x09aNode isNode ifTrue: [\x0a\x09\x09aNode parent: self ]",
messageSends: ["ifTrue:", "isNode", "parent:"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
protocol: 'testing',
fn: function (){
var self=this;
var sends;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
sends=_st(_st(_st(self._method())._sendIndexes())._at_(self._selector()))._size();
$2=($ctx1.supercall = true, globals.SendNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._isReferenced())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(sends).__gt((1)))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self._index()).__lt(sends);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})})))._or_((function(){
return smalltalk.withContext(function($ctx4) {
return self._superSend();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["and:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["or:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{sends:sends},globals.SendNode)})},
args: [],
source: "shouldBeAliased\x0a\x09\x22Because we keep track of send indexes, some send nodes need additional care for aliasing. \x0a\x09See IRJSVisitor >> visitIRSend:\x22\x0a\x09\x0a\x09| sends |\x0a\x09\x0a\x09sends := (self method sendIndexes at: self selector) size.\x0a\x09\x0a\x09^ (super shouldBeAliased or: [\x0a\x09\x09self isReferenced and: [\x0a\x09\x09\x09(sends > 1 and: [ self index < sends ])\x0a\x09\x09\x09\x09or: [ self superSend ] ] ])",
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "or:", "shouldBeAliased", "and:", "isReferenced", ">", "<", "index", "superSend"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "stopOnStepping\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@superSend"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSend",{},globals.SendNode)})},
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@superSend"]=aBoolean;
return self},
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "valueForReceiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
function $SendNode(){return globals.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1,$receiver;
$2=_st($SendNode())._new();
_st($2)._position_(self._position());
_st($2)._source_(self._source());
$3=$2;
$5=self._receiver();
$ctx1.sendIdx["receiver"]=1;
if(($receiver = $5) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"valueForReceiver:",{anObject:anObject},globals.SendNode)})},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^ SendNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09receiver: (self receiver\x0a\x09\x09ifNil: [ anObject ] \x0a\x09\x09ifNotNil: [ self receiver valueForReceiver: anObject ]);\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself",
messageSends: ["position:", "new", "position", "source:", "source", "receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself"],
referencedClasses: ["SendNode"]
}),
globals.SendNode);



smalltalk.addClass('SequenceNode', globals.Node, ['temps', 'scope'], 'Compiler-AST');
globals.SequenceNode.comment="I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.SequenceNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "asBlockSequenceNode",
protocol: 'converting',
fn: function (){
var self=this;
function $BlockSequenceNode(){return globals.BlockSequenceNode||(typeof BlockSequenceNode=="undefined"?nil:BlockSequenceNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($BlockSequenceNode())._new();
_st($2)._position_(self._position());
_st($2)._source_(self._source());
_st($2)._nodes_(self._nodes());
_st($2)._temps_(self._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBlockSequenceNode",{},globals.SequenceNode)})},
args: [],
source: "asBlockSequenceNode\x0a\x09^ BlockSequenceNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09nodes: self nodes;\x0a\x09\x09temps: self temps;\x0a\x09\x09yourself",
messageSends: ["position:", "new", "position", "source:", "source", "nodes:", "nodes", "temps:", "temps", "yourself"],
referencedClasses: ["BlockSequenceNode"]
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSequenceNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@temps"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},globals.SequenceNode)})},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self},
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.SequenceNode);



smalltalk.addClass('BlockSequenceNode', globals.SequenceNode, [], 'Compiler-AST');
globals.BlockSequenceNode.comment="I represent an special sequence node for block scopes.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.BlockSequenceNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
globals.BlockSequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.BlockSequenceNode);



smalltalk.addClass('ValueNode', globals.Node, ['value'], 'Compiler-AST');
globals.ValueNode.comment="I represent a value node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.ValueNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
globals.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._value())._isImmutable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},globals.ValueNode)})},
args: [],
source: "isImmutable\x0a\x09^ self value isImmutable",
messageSends: ["isImmutable", "value"],
referencedClasses: []
}),
globals.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isValueNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;
},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
globals.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ValueNode);



smalltalk.addClass('VariableNode', globals.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
globals.VariableNode.comment="I represent an variable node.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.VariableNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._alias();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.VariableNode)})},
args: [],
source: "alias\x0a\x09^ self binding alias",
messageSends: ["alias", "binding"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@assigned"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assigned",{},globals.VariableNode)})},
args: [],
source: "assigned\x0a\x09^ assigned ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self},
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "beAssigned",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._binding())._validateAssignment();
self["@assigned"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},globals.VariableNode)})},
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
messageSends: ["validateAssignment", "binding"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@binding"];
return $1;
},
args: [],
source: "binding\x0a\x09^ binding",
messageSends: [],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding:",
protocol: 'accessing',
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isArgument",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._isArgVar();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isArgument",{},globals.VariableNode)})},
args: [],
source: "isArgument\x0a\x09^ self binding isArgVar",
messageSends: ["isArgVar", "binding"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._isImmutable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},globals.VariableNode)})},
args: [],
source: "isImmutable\x0a\x09^ self binding isImmutable",
messageSends: ["isImmutable", "binding"],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isNavigationNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isVariableNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},globals.VariableNode)})},
args: [],
source: "navigationLink\x0a\x09^ self value",
messageSends: ["value"],
referencedClasses: []
}),
globals.VariableNode);


smalltalk.addMethod(
smalltalk.method({
selector: "ast",
protocol: '*Compiler-AST',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._source();
$ctx1.sendIdx["source"]=1;
_st($1)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Method source is empty");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($Smalltalk())._parse_(self._source());
return $2;
}, function($ctx1) {$ctx1.fill(self,"ast",{},globals.CompiledMethod)})},
args: [],
source: "ast\x0a\x09self source ifEmpty: [ self error: 'Method source is empty' ].\x0a\x09\x0a\x09^ Smalltalk parse: self source",
messageSends: ["ifEmpty:", "source", "error:", "parse:"],
referencedClasses: ["Smalltalk"]
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
protocol: '*Compiler-AST',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Object);

});
