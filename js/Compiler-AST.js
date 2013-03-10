smalltalk.addPackage('Compiler-AST');
smalltalk.addClass('Node', smalltalk.Object, ['position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.Node.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aposition: holds a point containing lline- and column number of the symbol location in the original source file"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_addNode_",
smalltalk.method({
selector: "addNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nodes())._add_(aNode);
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.Node)})},
args: [],
source: "isBlockSequenceNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Node)})},
args: [],
source: "isImmutable\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isNode",
smalltalk.method({
selector: "isNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Node)})},
args: [],
source: "isNode\x0a\x09^ true",
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@nodes"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nodes"]=_st((smalltalk.Array || Array))._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { self["@nodes"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{aCollection:aCollection},smalltalk.Node)})},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@position"]=_st((0)).__at((0));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.Node)})},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0@0]",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
category: 'building',
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.Node)})},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == nil || $receiver == undefined){
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
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeAliased"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased:",{aBoolean:aBoolean},smalltalk.Node)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == nil || $receiver == undefined){
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
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldBeInlined"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined:",{aBoolean:aBoolean},smalltalk.Node)})},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._nodes())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._subtreeNeedsAliasing();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return false;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))).__tild_eq(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.Node)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^(self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a\x09\x09(self nodes detect: [ :each | each subtreeNeedsAliasing ] ifNone: [ false ]) ~= false ]",
messageSends: ["or:", "~=", "detect:ifNone:", "subtreeNeedsAliasing", "nodes", "shouldBeInlined", "shouldBeAliased"],
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@left"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@left"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNode:aNode},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Array || Array))._with_with_(_st(self)._left(),_st(self)._right());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@right"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@right"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNode:aNode},smalltalk.AssignmentNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.BlockNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@parameters"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@parameters"]=_st((smalltalk.Array || Array))._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parameters",{},smalltalk.BlockNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@parameters"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"parameters:",{aCollection:aCollection},smalltalk.BlockNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.BlockNode)})},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.BlockNode)})},
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased or: [ self shouldBeInlined ]",
messageSends: ["or:", "shouldBeInlined", "shouldBeAliased"],
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.CascadeNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},smalltalk.CascadeNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.JSStatementNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.JSStatementNode)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends', 'superSends'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"classReferences:",{aCollection:aCollection},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"messageSends:",{aCollection:aCollection},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aMethodScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aMethodScope:aMethodScope},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.MethodNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.MethodNode)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_superSends_",
smalltalk.method({
selector: "superSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"superSends:",{aCollection:aCollection},smalltalk.MethodNode)})},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.ReturnNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._scope())._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},smalltalk.ReturnNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.ReturnNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.SendNode)})},
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
var first;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$3;
$1=_st((smalltalk.SendNode || SendNode))._new();
_st($1)._selector_(_st(self)._selector());
_st($1)._arguments_(_st(self)._arguments());
$2=_st($1)._yourself();
first=$2;
$4=_st((smalltalk.CascadeNode || CascadeNode))._new();
_st($4)._receiver_(_st(self)._receiver());
_st($4)._nodes_(_st(_st((smalltalk.Array || Array))._with_(first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"cascadeNodeWithMessages:",{aCollection:aCollection,first:first},smalltalk.SendNode)})},
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself.\x0a\x09^CascadeNode new\x0a\x09\x09receiver: self receiver;\x0a\x09\x09nodes: (Array with: first), aCollection;\x0a\x09\x09yourself",
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._withAll_(_st(self)._arguments());
_st($2)._add_(_st(self)._receiver());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@receiver"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@superSend"];
if(($receiver = $2) == nil || $receiver == undefined){
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
"_superSend_",
smalltalk.method({
selector: "superSend:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSend"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"superSend:",{aBoolean:aBoolean},smalltalk.SendNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$5,$4,$6,$1;
$2=_st((smalltalk.SendNode || SendNode))._new();
$3=$2;
$5=_st(self)._receiver();
if(($receiver = $5) == nil || $receiver == undefined){
$4=anObject;
} else {
$4=_st(_st(self)._receiver())._valueForReceiver_(anObject);
};
_st($3)._receiver_($4);
_st($2)._selector_(_st(self)._selector());
_st($2)._arguments_(_st(self)._arguments());
$6=_st($2)._yourself();
$1=$6;
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueForReceiver:",{anObject:anObject},smalltalk.SendNode)})},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^SendNode new\x0a\x09\x09receiver: (self receiver\x0a\x09\x09ifNil: [anObject]\x0a\x09\x09ifNotNil: [self receiver valueForReceiver: anObject]);\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself",
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.BlockSequenceNode || BlockSequenceNode))._new();
_st($2)._nodes_(_st(self)._nodes());
_st($2)._temps_(_st(self)._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBlockSequenceNode",{},smalltalk.SequenceNode)})},
args: [],
source: "asBlockSequenceNode\x0a\x09^BlockSequenceNode new\x0a\x09\x09nodes: self nodes;\x0a\x09\x09temps: self temps;\x0a\x09\x09yourself",
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.SequenceNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.SequenceNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@temps"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"temps:",{aCollection:aCollection},smalltalk.SequenceNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.BlockSequenceNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.ValueNode)})},
args: [],
source: "isImmutable\x0a\x09^true",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.ValueNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.ValueNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.ValueNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._binding())._alias();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.VariableNode)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@assigned"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assigned",{},smalltalk.VariableNode)})},
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
return smalltalk.withContext(function($ctx1) { self["@assigned"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"assigned:",{aBoolean:aBoolean},smalltalk.VariableNode)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._binding())._validateAssignment();
self["@assigned"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},smalltalk.VariableNode)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_binding_",
smalltalk.method({
selector: "binding:",
category: 'accessing',
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@binding"]=aScopeVar;
return self}, function($ctx1) {$ctx1.fill(self,"binding:",{aScopeVar:aScopeVar},smalltalk.VariableNode)})},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.VariableNode)})},
args: [],
source: "isImmutable\x0a\x09^false",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitClassReferenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ClassReferenceNode)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitClassReferenceNode: self",
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



smalltalk.addMethod(
"_isNode",
smalltalk.method({
selector: "isNode",
category: '*Compiler-AST',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Object)})},
args: [],
source: "isNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

