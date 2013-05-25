smalltalk.addPackage('Compiler-AST');
smalltalk.addClass('Node', smalltalk.Object, ['parent', 'position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.Node)})},
messageSends: ["visitNode:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nodes())._add_(aNode);
_st(aNode)._parent_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.Node)})},
messageSends: ["add:", "nodes", "parent:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._nextNode();
if(($receiver = $2) == nil || $receiver == undefined){
$3=self._parent();
if(($receiver = $3) == nil || $receiver == undefined){
$1=$3;
} else {
var node;
node=$receiver;
$1=_st(node)._extent();
};
} else {
var node;
node=$receiver;
$1=_st(node)._position();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.Node)})},
messageSends: ["ifNil:ifNotNil:", "ifNotNil:", "extent", "parent", "position", "nextNode"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isJSStatementNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._parent();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
var node;
node=$receiver;
$1=_st(node)._nextNode_(self);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.Node)})},
messageSends: ["ifNotNil:", "nextNode:", "parent"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._nodes())._at_ifAbsent_(_st(_st(self._nodes())._indexOf_(aNode)).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode},smalltalk.Node)})},
messageSends: ["at:ifAbsent:", "+", "indexOf:", "nodes"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@nodes"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nodes"]=_st($Array())._new();
$1=self["@nodes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.Node)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{aCollection:aCollection},smalltalk.Node)})},
messageSends: ["do:", "parent:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{aNode:aNode},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=self._parent();
if(($receiver = $3) == nil || $receiver == undefined){
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
messageSends: ["ifNil:", "ifNotNil:", "position", "parent"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@shouldBeAliased"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},smalltalk.Node)})},
messageSends: ["ifNil:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeAliased:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldBeAliased"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased:",{aBoolean:aBoolean},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@shouldBeInlined"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined",{},smalltalk.Node)})},
messageSends: ["ifNil:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeInlined:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldBeInlined"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined:",{aBoolean:aBoolean},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"stopOnStepping",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._nodes())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._subtreeNeedsAliasing();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return false;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))).__tild_eq(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.Node)})},
messageSends: ["or:", "~=", "detect:ifNone:", "subtreeNeedsAliasing", "nodes", "shouldBeInlined", "shouldBeAliased"]}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.AssignmentNode)})},
messageSends: ["visitAssignmentNode:"]}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isAssignmentNode",{},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@left"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@left"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNode:aNode},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_(self._left(),self._right());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.AssignmentNode)})},
messageSends: ["with:with:", "left", "right"]}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@right"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@right"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNode:aNode},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.BlockNode)})},
messageSends: ["visitBlockNode:"]}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockNode",{},smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@parameters"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@parameters"]=_st($Array())._new();
$1=self["@parameters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"parameters",{},smalltalk.BlockNode)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "parameters:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parameters"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"parameters:",{aCollection:aCollection},smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "subtreeNeedsAliasing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shouldBeAliased())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._shouldBeInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{},smalltalk.BlockNode)})},
messageSends: ["or:", "shouldBeInlined", "shouldBeAliased"]}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CascadeNode)})},
messageSends: ["visitCascadeNode:"]}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.CascadeNode)})},
messageSends: []}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{aNode:aNode},smalltalk.CascadeNode)})},
messageSends: []}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.DynamicArrayNode)})},
messageSends: ["visitDynamicArrayNode:"]}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.DynamicDictionaryNode)})},
messageSends: ["visitDynamicDictionaryNode:"]}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.JSStatementNode)})},
messageSends: ["visitJSStatementNode:"]}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isJSStatementNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isJSStatementNode",{},smalltalk.JSStatementNode)})},
messageSends: []}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@source"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.JSStatementNode)})},
messageSends: ["ifNil:"]}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.JSStatementNode)})},
messageSends: []}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends', 'superSends'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.MethodNode)})},
messageSends: ["visitMethodNode:"]}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.MethodNode)})},
messageSends: ["ifNil:"]}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@classReferences"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@classReferences"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"classReferences:",{aCollection:aCollection},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._source())._lines())._size()).__at(_st(_st(_st(_st(self._source())._lines())._last())._size()).__plus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.MethodNode)})},
messageSends: ["@", "+", "size", "last", "lines", "source"]}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@messageSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@messageSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"messageSends:",{aCollection:aCollection},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aMethodScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aMethodScope:aMethodScope},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@superSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@superSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"superSends:",{aCollection:aCollection},smalltalk.MethodNode)})},
messageSends: []}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ReturnNode)})},
messageSends: ["visitReturnNode:"]}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isReturnNode",{},smalltalk.ReturnNode)})},
messageSends: []}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._scope())._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},smalltalk.ReturnNode)})},
messageSends: ["not", "isMethodScope", "scope"]}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.ReturnNode)})},
messageSends: []}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.ReturnNode)})},
messageSends: []}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.SendNode)})},
messageSends: ["visitSendNode:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@arguments"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.SendNode)})},
messageSends: ["ifNil:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._parent_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.SendNode)})},
messageSends: ["do:", "parent:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "cascadeNodeWithMessages:",
fn: function (aCollection){
var self=this;
var first;
function $SendNode(){return smalltalk.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
function $CascadeNode(){return smalltalk.CascadeNode||(typeof CascadeNode=="undefined"?nil:CascadeNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st($SendNode())._new();
_st($1)._selector_(self._selector());
_st($1)._arguments_(self._arguments());
$2=_st($1)._yourself();
first=$2;
$4=_st($CascadeNode())._new();
_st($4)._receiver_(self._receiver());
_st($4)._nodes_(_st(_st($Array())._with_(first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"cascadeNodeWithMessages:",{aCollection:aCollection,first:first},smalltalk.SendNode)})},
messageSends: ["selector:", "selector", "new", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSendNode",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._withAll_(self._arguments());
_st($2)._add_(self._receiver());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.SendNode)})},
messageSends: ["add:", "receiver", "withAll:", "arguments", "yourself"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
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
messageSends: ["ifTrue:", "parent:", "isNode"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "stopOnStepping",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"stopOnStepping",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@superSend"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSend",{},smalltalk.SendNode)})},
messageSends: ["ifNil:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "superSend:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@superSend"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"superSend:",{aBoolean:aBoolean},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "valueForReceiver:",
fn: function (anObject){
var self=this;
function $SendNode(){return smalltalk.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1;
$2=_st($SendNode())._new();
_st($2)._position_(self._position());
$3=$2;
$5=self._receiver();
if(($receiver = $5) == nil || $receiver == undefined){
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
messageSends: ["position:", "position", "new", "receiver:", "ifNil:ifNotNil:", "valueForReceiver:", "receiver", "selector:", "selector", "arguments:", "arguments", "yourself"]}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.SequenceNode)})},
messageSends: ["visitSequenceNode:"]}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "asBlockSequenceNode",
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
messageSends: ["position:", "position", "new", "nodes:", "nodes", "temps:", "temps", "yourself"]}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.SequenceNode)})},
messageSends: []}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aLexicalScope:aLexicalScope},smalltalk.SequenceNode)})},
messageSends: []}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.SequenceNode)})},
messageSends: ["ifNil:"]}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "temps:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@temps"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"temps:",{aCollection:aCollection},smalltalk.SequenceNode)})},
messageSends: []}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.BlockSequenceNode)})},
messageSends: ["visitBlockSequenceNode:"]}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockSequenceNode",{},smalltalk.BlockSequenceNode)})},
messageSends: []}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ValueNode)})},
messageSends: ["visitValueNode:"]}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._value())._isImmutable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.ValueNode)})},
messageSends: ["isImmutable", "value"]}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isValueNode",{},smalltalk.ValueNode)})},
messageSends: []}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.ValueNode)})},
messageSends: []}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.ValueNode)})},
messageSends: []}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.VariableNode)})},
messageSends: ["visitVariableNode:"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._binding())._alias();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.VariableNode)})},
messageSends: ["alias", "binding"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@assigned"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assigned",{},smalltalk.VariableNode)})},
messageSends: ["ifNil:"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "assigned:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@assigned"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"assigned:",{aBoolean:aBoolean},smalltalk.VariableNode)})},
messageSends: []}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "beAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._binding())._validateAssignment();
self["@assigned"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},smalltalk.VariableNode)})},
messageSends: ["validateAssignment", "binding"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@binding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"binding",{},smalltalk.VariableNode)})},
messageSends: []}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "binding:",
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@binding"]=aScopeVar;
return self}, function($ctx1) {$ctx1.fill(self,"binding:",{aScopeVar:aScopeVar},smalltalk.VariableNode)})},
messageSends: []}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.VariableNode)})},
messageSends: []}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler-AST');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitClassReferenceNode_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.ClassReferenceNode)})},
messageSends: ["visitClassReferenceNode:"]}),
smalltalk.ClassReferenceNode);



smalltalk.addMethod(
smalltalk.method({
selector: "isNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNode",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ast",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._source())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Method source is empty");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st($Smalltalk())._current())._parse_(self._source());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ast",{},smalltalk.CompiledMethod)})},
messageSends: ["ifEmpty:", "error:", "source", "parse:", "current"]}),
smalltalk.CompiledMethod);

