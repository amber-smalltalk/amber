define("amber_core/Compiler-AST", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
$vm.addPackage('Compiler-AST');
$vm.packages["Compiler-AST"].transport = {"type":"amd","amdNamespace":"amber_core"};

$vm.addClass('Node', $globals.Object, ['parent', 'position', 'source', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Node.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aConcrete classes should implement `#accept:` to allow visiting.\x0a\x0a`position` holds a point containing line and column number of the symbol location in the original source file.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "addNode:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._nodes())._add_(aNode);
_st(aNode)._parent_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "addNode: aNode\x0a\x09self nodes add: aNode.\x0a\x09aNode parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "nodes", "parent:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "allNodes",
protocol: 'accessing',
fn: function (){
var self=this;
var allNodes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
allNodes=_st($1)._asSet();
_st(self._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(allNodes)._addAll_(_st(each)._allNodes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=allNodes;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allNodes",{allNodes:allNodes},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allNodes\x0a\x09| allNodes |\x0a\x09\x0a\x09allNodes := self nodes asSet.\x0a\x09self nodes do: [ :each | \x0a\x09\x09allNodes addAll: each allNodes ].\x0a\x09\x0a\x09^ allNodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSet", "nodes", "do:", "addAll:", "allNodes"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "inPosition:",
protocol: 'testing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(self._positionStart()).__lt_eq(aPoint))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._positionEnd()).__gt_eq(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inPosition:",{aPoint:aPoint},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "inPosition: aPoint\x0a\x09^ (self positionStart <= aPoint and: [\x0a\x09\x09self positionEnd >= aPoint ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "positionStart", ">=", "positionEnd"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignmentNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockSequenceNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isJSStatementNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isLastChild",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(_st(self._parent())._nodes())._last()).__eq(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLastChild",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLastChild\x0a\x09^ self parent nodes last = self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "last", "nodes", "parent"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09\x22Answer true if the node can be navigated to\x22\x0a\x09\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isReferenced",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=self._parent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parent"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._isSequenceNode();
$2=_st($3)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._parent())._isAssignmentNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=_st($2)._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isReferenced",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReferenced\x0a\x09\x22Answer true if the receiver is referenced by other nodes.\x0a\x09Do not take sequences or assignments into account\x22\x0a\x09\x0a\x09^ (self parent isSequenceNode or: [\x0a\x09\x09self parent isAssignmentNode ]) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "or:", "isSequenceNode", "parent", "isAssignmentNode"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSendNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isValueNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariableNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self parent ifNotNil: [ :node | node method ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "parent", "method"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "navigationNodeAt:ifAbsent:",
protocol: 'accessing',
fn: function (aPoint,aBlock){
var self=this;
var children;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
var $early={};
try {
children=_st(self._allNodes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(_st(each)._isNavigationNode())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return _st(each)._inPosition_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
_st(children)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=_st(aBlock)._value();
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$2=_st(_st(_st(children)._asArray())._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=_st(a)._positionStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["positionStart"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._dist_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dist:"]=1;
//>>excludeEnd("ctx");
return _st($3).__lt_eq(_st(_st(b)._positionStart())._dist_(aPoint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)});
//>>excludeEnd("ctx");
})))._first();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationNodeAt:ifAbsent:",{aPoint:aPoint,aBlock:aBlock,children:children},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aBlock"],
source: "navigationNodeAt: aPoint ifAbsent: aBlock\x0a\x09\x22Answer the navigation node in the receiver's tree at aPoint \x0a\x09or nil if no navigation node was found.\x0a\x09\x0a\x09See `node >> isNaviationNode`\x22\x0a\x09\x0a\x09| children |\x0a\x09\x0a\x09children := self allNodes select: [ :each | \x0a\x09\x09each isNavigationNode and: [ each inPosition: aPoint ] ].\x0a\x09\x0a\x09children ifEmpty: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (children asArray sort: [ :a :b | \x0a\x09\x09(a positionStart dist: aPoint) <= \x0a\x09\x09(b positionStart dist: aPoint) ]) first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "allNodes", "and:", "isNavigationNode", "inPosition:", "ifEmpty:", "value", "first", "sort:", "asArray", "<=", "dist:", "positionStart"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "nextChild",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._isEmpty();
if($vm.assert($2)){
$1=self;
} else {
$1=_st(_st(self._nodes())._first())._nextChild();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextChild",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChild\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the receiver to answer the next node to be evaluated\x22\x0a\x09\x0a\x09^ self nodes isEmpty\x0a\x09\x09ifTrue: [ self ]\x0a\x09\x09ifFalse: [ self nodes first nextChild ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isEmpty", "nodes", "nextChild", "first"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "nextNode",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextNode\x0a\x09^ self parent ifNotNil: [ :node |\x0a\x09\x09node nextNode: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "parent", "nextNode:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "nextNode:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
var next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=self._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
next=_st($1)._at_ifAbsent_(_st(_st(self._nodes())._indexOf_(aNode)).__plus((1)),(function(){
throw $early=[self];

}));
$2=_st(next)._nextChild();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode,next:next},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the next node after aNode.\x0a\x09Recurse into the possible children of the next node to answer the next node to be evaluated\x22\x0a\x09\x0a\x09| next |\x0a\x09\x0a\x09next := self nodes \x0a\x09\x09at: (self nodes indexOf: aNode) + 1\x0a\x09\x09ifAbsent: [ ^ self ].\x0a\x09\x0a\x09^ next nextChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "nodes", "+", "indexOf:", "nextChild"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@nodes"];
if(($receiver = $2) == null || $receiver.isNil){
self["@nodes"]=_st($Array())._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nodes",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ nodes ifNil: [ nodes := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "nodes:",
protocol: 'building',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@nodes"]=aCollection;
_st(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._parent_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nodes:",{aCollection:aCollection},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "parent:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@parent"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09\x22answer the line and column of the receiver in the source code\x22\x0a\x09\x0a\x09^ position ifNil: [ \x0a\x09\x09self parent ifNotNil: [ :node | node position ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifNotNil:", "parent", "position"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "position:",
protocol: 'accessing',
fn: function (aPosition){
var self=this;
self["@position"]=aPosition;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "positionEnd",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$7,$6,$5,$4,$3,$1;
$2=self._positionStart();
$7=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$6=_st($7)._lines();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lines"]=1;
//>>excludeEnd("ctx");
$5=_st($6)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=_st($5).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$3=_st($4).__at(_st(_st(_st(_st(self._source())._lines())._last())._size()).__minus((1)));
$1=_st($2).__plus($3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionEnd",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionEnd\x0a\x09^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "positionStart", "@", "-", "size", "lines", "source", "last"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "positionStart",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._position();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionStart",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionStart\x0a\x09^ self position",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "postCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Node.superclass.fn.prototype._postCopy.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
_st(self._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._parent_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postCopy",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09self nodes do: [ :each | each parent: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["postCopy", "do:", "nodes", "parent:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(self._nodes())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._requiresSmalltalkContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

})))._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09\x22Answer true if the receiver requires a smalltalk context.\x0a\x09Only send nodes require a context.\x0a\x09\x0a\x09If no node requires a context, the method will be compiled without one.\x0a\x09See `IRJSTranslator` and `JSStream` for context creation\x22\x0a\x09\x0a\x09^ (self nodes \x0a\x09\x09detect: [ :each | each requiresSmalltalkContext ]\x0a\x09\x09ifNone: [ nil ]) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "detect:ifNone:", "nodes", "requiresSmalltalkContext"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "shouldBeAliased",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "shouldBeAliased:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "shouldBeInlined",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "shouldBeInlined:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._source())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self source size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "source"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "stopOnStepping",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stopOnStepping\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$vm.addMethod(
$vm.method({
selector: "subtreeNeedsAliasing",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(self._shouldBeAliased())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._shouldBeInlined();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._nodes())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return _st(each)._subtreeNeedsAliasing();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ (self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a\x09\x09self nodes anySatisfy: [ :each | each subtreeNeedsAliasing ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined", "anySatisfy:", "nodes", "subtreeNeedsAliasing"]
}),
$globals.Node);



$vm.addClass('AssignmentNode', $globals.Node, ['left', 'right'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AssignmentNode.comment="I represent an assignment node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAssignmentNode:"]
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignmentNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@left"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ left",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "left:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@left"]=aNode;
_st(aNode)._parent_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left:",{aNode:aNode},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode.\x0a\x09aNode parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:"]
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Array())._with_with_(self._left(),self._right());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nodes",{},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ Array with: self left with: self right",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:with:", "left", "right"]
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@right"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ right",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "right:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@right"]=aNode;
_st(aNode)._parent_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right:",{aNode:aNode},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode.\x0a\x09aNode parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:"]
}),
$globals.AssignmentNode);

$vm.addMethod(
$vm.method({
selector: "shouldBeAliased",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssignmentNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=_st($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isReferenced();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeAliased\x0a\x09^ super shouldBeAliased or: [ self isReferenced ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "shouldBeAliased", "isReferenced"]
}),
$globals.AssignmentNode);



$vm.addClass('BlockNode', $globals.Node, ['parameters', 'scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockNode.comment="I represent an block closure node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockNode:"]
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "nextChild",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChild\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "nextNode:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextNode: aNode\x0a\x09\x22Answer the receiver as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "parameters",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@parameters"];
if(($receiver = $2) == null || $receiver.isNil){
self["@parameters"]=_st($Array())._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameters",{},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parameters\x0a\x09^ parameters ifNil: [ parameters := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "parameters:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$vm.addMethod(
$vm.method({
selector: "subtreeNeedsAliasing",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._shouldBeAliased())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._shouldBeInlined();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased or: [ self shouldBeInlined ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "shouldBeAliased", "shouldBeInlined"]
}),
$globals.BlockNode);



$vm.addClass('CascadeNode', $globals.Node, ['receiver'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CascadeNode.comment="I represent an cascade node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CascadeNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitCascadeNode:"]
}),
$globals.CascadeNode);

$vm.addMethod(
$vm.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);

$vm.addMethod(
$vm.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);

$vm.addMethod(
$vm.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);



$vm.addClass('DynamicArrayNode', $globals.Node, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicArrayNode.comment="I represent an dynamic array node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.DynamicArrayNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDynamicArrayNode:"]
}),
$globals.DynamicArrayNode);



$vm.addClass('DynamicDictionaryNode', $globals.Node, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicDictionaryNode.comment="I represent an dynamic dictionary node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.DynamicDictionaryNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDynamicDictionaryNode:"]
}),
$globals.DynamicDictionaryNode);



$vm.addClass('JSStatementNode', $globals.Node, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSStatementNode.comment="I represent an JavaScript statement node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.JSStatementNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitJSStatementNode:"]
}),
$globals.JSStatementNode);

$vm.addMethod(
$vm.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isJSStatementNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSStatementNode);

$vm.addMethod(
$vm.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSStatementNode);



$vm.addClass('MethodNode', $globals.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'sendIndexes', 'superSends'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodNode.comment="I represent an method node.\x0a\x0aA method node must be the root and only method node of a valid AST.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitMethodNode:"]
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@arguments"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "classReferences",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classReferences"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferences\x0a\x09^ classReferences",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "classReferences:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._sendIndexes())._keys();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "sendIndexes"]
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sendIndexes"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "sendIndexes:",
protocol: 'accessing',
fn: function (aDictionary){
var self=this;
self["@sendIndexes"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "sequenceNode",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
_st(self._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=_st(each)._isSequenceNode();
if($vm.assert($1)){
throw $early=[each];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sequenceNode",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequenceNode\x0a\x09self nodes do: [ :each |\x0a\x09\x09each isSequenceNode ifTrue: [ ^ each ] ].\x0a\x09\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "nodes", "ifTrue:", "isSequenceNode"]
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@source"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "superSends",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@superSends"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superSends\x0a\x09^ superSends",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$vm.addMethod(
$vm.method({
selector: "superSends:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@superSends"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);



$vm.addClass('ReturnNode', $globals.Node, ['scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ReturnNode.comment="I represent an return node. At the AST level, there is not difference between a local return or non-local return.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.ReturnNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitReturnNode:"]
}),
$globals.ReturnNode);

$vm.addMethod(
$vm.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);

$vm.addMethod(
$vm.method({
selector: "nonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(self._scope())._isMethodScope())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},$globals.ReturnNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isMethodScope", "scope"]
}),
$globals.ReturnNode);

$vm.addMethod(
$vm.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);

$vm.addMethod(
$vm.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);



$vm.addClass('SendNode', $globals.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SendNode.comment="I represent an message send node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSendNode:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@arguments"];
if(($receiver = $2) == null || $receiver.isNil){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ arguments := #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@arguments"]=aCollection;
_st(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(each)._parent_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection.\x0a\x09aCollection do: [ :each | each parent: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "parent:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "cascadeNodeWithMessages:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
var first;
function $SendNode(){return $globals.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
function $CascadeNode(){return $globals.CascadeNode||(typeof CascadeNode=="undefined"?nil:CascadeNode)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3;
$1=_st($SendNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($1)._selector_(self._selector());
_st($1)._arguments_(self._arguments());
$2=_st($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
first=$2;
$4=_st($CascadeNode())._new();
_st($4)._receiver_(self._receiver());
_st($4)._nodes_(_st(_st($Array())._with_(first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cascadeNodeWithMessages:",{aCollection:aCollection,first:first},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself.\x0a\x09^ CascadeNode new\x0a\x09\x09receiver: self receiver;\x0a\x09\x09nodes: (Array with: first), aCollection;\x0a\x09\x09yourself",
referencedClasses: ["SendNode", "CascadeNode", "Array"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "selector", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@index"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "index:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "isCascadeSendNode",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._parent())._isCascadeNode();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isCascadeSendNode",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeSendNode\x0a\x09^ self parent isCascadeNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isCascadeNode", "parent"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSendNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._selector();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$6,$4,$receiver;
$1=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$3=self._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arguments"]=1;
//>>excludeEnd("ctx");
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nodes",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09self receiver ifNil: [ ^ self arguments copy ].\x0a\x09\x0a\x09^ (Array with: self receiver)\x0a\x09\x09addAll: self arguments;\x0a\x09\x09yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "receiver", "copy", "arguments", "addAll:", "with:", "yourself"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@receiver"]=aNode;
$1=_st(aNode)._isNode();
if($vm.assert($1)){
_st(aNode)._parent_(self);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode.\x0a\x09aNode isNode ifTrue: [\x0a\x09\x09aNode parent: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isNode", "parent:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "shouldBeAliased",
protocol: 'testing',
fn: function (){
var self=this;
var sends;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
sends=_st(_st(_st(self._method())._sendIndexes())._at_(self._selector()))._size();
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SendNode.superclass.fn.prototype._shouldBeAliased.apply(_st(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=_st($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._isReferenced())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return _st(_st(_st(sends).__gt((1)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return _st(self._index()).__lt(sends);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
})))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._superSend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{sends:sends},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeAliased\x0a\x09\x22Because we keep track of send indexes, some send nodes need additional care for aliasing. \x0a\x09See IRJSVisitor >> visitIRSend:\x22\x0a\x09\x0a\x09| sends |\x0a\x09\x0a\x09sends := (self method sendIndexes at: self selector) size.\x0a\x09\x0a\x09^ (super shouldBeAliased or: [\x0a\x09\x09self isReferenced and: [\x0a\x09\x09\x09(sends > 1 and: [ self index < sends ])\x0a\x09\x09\x09\x09or: [ self superSend ] ] ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "or:", "shouldBeAliased", "and:", "isReferenced", ">", "<", "index", "superSend"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "stopOnStepping",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stopOnStepping\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "superSend",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@superSend"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superSend",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "superSend:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@superSend"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$vm.addMethod(
$vm.method({
selector: "valueForReceiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
function $SendNode(){return $globals.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$1,$receiver;
$2=_st($SendNode())._new();
_st($2)._position_(self._position());
_st($2)._source_(self._source());
$3=$2;
$5=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueForReceiver:",{anObject:anObject},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^ SendNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09receiver: (self receiver\x0a\x09\x09ifNil: [ anObject ] \x0a\x09\x09ifNotNil: [ self receiver valueForReceiver: anObject ]);\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself",
referencedClasses: ["SendNode"],
//>>excludeEnd("ide");
messageSends: ["position:", "new", "position", "source:", "source", "receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself"]
}),
$globals.SendNode);



$vm.addClass('SequenceNode', $globals.Node, ['temps', 'scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SequenceNode.comment="I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSequenceNode:"]
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "asBlockSequenceNode",
protocol: 'converting',
fn: function (){
var self=this;
function $BlockSequenceNode(){return $globals.BlockSequenceNode||(typeof BlockSequenceNode=="undefined"?nil:BlockSequenceNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($BlockSequenceNode())._new();
_st($2)._position_(self._position());
_st($2)._source_(self._source());
_st($2)._nodes_(self._nodes());
_st($2)._temps_(self._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBlockSequenceNode",{},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBlockSequenceNode\x0a\x09^ BlockSequenceNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09nodes: self nodes;\x0a\x09\x09temps: self temps;\x0a\x09\x09yourself",
referencedClasses: ["BlockSequenceNode"],
//>>excludeEnd("ide");
messageSends: ["position:", "new", "position", "source:", "source", "nodes:", "nodes", "temps:", "temps", "yourself"]
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scope"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@temps"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09^ temps ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SequenceNode);

$vm.addMethod(
$vm.method({
selector: "temps:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);



$vm.addClass('BlockSequenceNode', $globals.SequenceNode, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockSequenceNode.comment="I represent an special sequence node for block scopes.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.BlockSequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockSequenceNode:"]
}),
$globals.BlockSequenceNode);

$vm.addMethod(
$vm.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockSequenceNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockSequenceNode);



$vm.addClass('ValueNode', $globals.Node, ['value'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ValueNode.comment="I represent a value node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.ValueNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitValueNode:"]
}),
$globals.ValueNode);

$vm.addMethod(
$vm.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._value())._isImmutable();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},$globals.ValueNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self value isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isImmutable", "value"]
}),
$globals.ValueNode);

$vm.addMethod(
$vm.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isValueNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);

$vm.addMethod(
$vm.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);

$vm.addMethod(
$vm.method({
selector: "value:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);



$vm.addClass('VariableNode', $globals.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.VariableNode.comment="I represent an variable node.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitVariableNode:"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._binding())._alias();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self binding alias",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alias", "binding"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "assigned",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@assigned"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assigned",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assigned\x0a\x09^ assigned ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "assigned:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "beAssigned",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._binding())._validateAssignment();
self["@assigned"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["validateAssignment", "binding"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "binding",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@binding"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "binding\x0a\x09^ binding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "binding:",
protocol: 'accessing',
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "isArgument",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._binding())._isArgVar();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isArgument",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isArgument\x0a\x09^ self binding isArgVar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isArgVar", "binding"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._binding())._isImmutable();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self binding isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isImmutable", "binding"]
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariableNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$vm.addMethod(
$vm.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.VariableNode);


$vm.addMethod(
$vm.method({
selector: "ast",
protocol: '*Compiler-AST',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
_st($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Method source is empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=_st($Smalltalk())._parse_(self._source());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ast\x0a\x09self source ifEmpty: [ self error: 'Method source is empty' ].\x0a\x09\x0a\x09^ Smalltalk parse: self source",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "source", "error:", "parse:"]
}),
$globals.CompiledMethod);

$vm.addMethod(
$vm.method({
selector: "isNode",
protocol: '*Compiler-AST',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
