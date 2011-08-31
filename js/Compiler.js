smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
'_nodes',
smalltalk.method({
selector: 'nodes',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@nodes'], "_ifNil_", [(function(){return self['@nodes']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;},
source: unescape('nodes%0A%09%5Enodes%20ifNil%3A%20%5Bnodes%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Node);

smalltalk.addMethod(
'_nodes_',
smalltalk.method({
selector: 'nodes:',
category: 'building',
fn: function (aCollection){
var self=this;
self['@nodes']=aCollection;
return self;},
source: unescape('nodes%3A%20aCollection%0A%09nodes%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
'_addNode_',
smalltalk.method({
selector: 'addNode:',
category: 'accessing',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self, "_nodes", []), "_add_", [aNode]);
return self;},
source: unescape('addNode%3A%20aNode%0A%09self%20nodes%20add%3A%20aNode'),
messageSends: ["add:", "nodes"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitNode%3A%20self'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
'_isValueNode',
smalltalk.method({
selector: 'isValueNode',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isValueNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
'_isBlockNode',
smalltalk.method({
selector: 'isBlockNode',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isBlockNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
'_isBlockSequenceNode',
smalltalk.method({
selector: 'isBlockSequenceNode',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isBlockSequenceNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@arguments'], "_ifNil_", [(function(){return [];})]);
return self;},
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
return self['@source'];
return self;},
source: unescape('source%0A%09%5Esource'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitMethodNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitMethodNode%3A%20self'),
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@arguments'], "_ifNil_", [(function(){return self['@arguments']=[];})]);
return self;},
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5Barguments%20%3A%3D%20%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_valueForReceiver_',
smalltalk.method({
selector: 'valueForReceiver:',
category: 'accessing',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(smalltalk.send(self, "_receiver", []), "_ifNil_ifNotNil_", [(function(){return anObject;}), (function(){return smalltalk.send(smalltalk.send(self, "_receiver", []), "_valueForReceiver_", [anObject]);})])]);smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.SendNode, "_new", []));
return self;},
source: unescape('valueForReceiver%3A%20anObject%0A%09%5ESendNode%20new%0A%09%20%20%20%20receiver%3A%20%28self%20receiver%20%0A%09%09ifNil%3A%20%5BanObject%5D%0A%09%09ifNotNil%3A%20%5Bself%20receiver%20valueForReceiver%3A%20anObject%5D%29%3B%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself'),
messageSends: ["receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself", "new"],
referencedClasses: [smalltalk.SendNode]
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_cascadeNodeWithMessages_',
smalltalk.method({
selector: 'cascadeNodeWithMessages:',
category: 'accessing',
fn: function (aCollection){
var self=this;
var first=nil;
first=(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.SendNode, "_new", []));
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(self, "_receiver", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(smalltalk.send(smalltalk.Array, "_with_", [first]), "__comma", [aCollection])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.CascadeNode, "_new", []));
return self;},
source: unescape('cascadeNodeWithMessages%3A%20aCollection%0A%09%7C%20first%20%7C%0A%09first%20%3A%3D%20SendNode%20new%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself.%0A%09%5ECascadeNode%20new%0A%09%20%20%20%20receiver%3A%20self%20receiver%3B%0A%09%20%20%20%20nodes%3A%20%28Array%20with%3A%20first%29%2C%20aCollection%3B%0A%09%20%20%20%20yourself'),
messageSends: ["selector:", "selector", "arguments:", "arguments", "yourself", "new", "receiver:", "receiver", "nodes:", unescape("%2C"), "with:"],
referencedClasses: [smalltalk.SendNode,smalltalk.Array,smalltalk.nil]
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSendNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSendNode%3A%20self'),
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitCascadeNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitCascadeNode%3A%20self'),
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
'_left',
smalltalk.method({
selector: 'left',
category: 'accessing',
fn: function (){
var self=this;
return self['@left'];
return self;},
source: unescape('left%0A%09%5Eleft'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_left_',
smalltalk.method({
selector: 'left:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@left']=aNode;
smalltalk.send(self['@left'], "_assigned_", [true]);
return self;},
source: unescape('left%3A%20aNode%0A%09left%20%3A%3D%20aNode.%0A%09left%20assigned%3A%20true'),
messageSends: ["assigned:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right',
smalltalk.method({
selector: 'right',
category: 'accessing',
fn: function (){
var self=this;
return self['@right'];
return self;},
source: unescape('right%0A%09%5Eright'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right_',
smalltalk.method({
selector: 'right:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@right']=aNode;
return self;},
source: unescape('right%3A%20aNode%0A%09right%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitAssignmentNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitAssignmentNode%3A%20self'),
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'inlined'], 'Compiler');
smalltalk.addMethod(
'_parameters',
smalltalk.method({
selector: 'parameters',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@parameters'], "_ifNil_", [(function(){return self['@parameters']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;},
source: unescape('parameters%0A%09%5Eparameters%20ifNil%3A%20%5Bparameters%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_parameters_',
smalltalk.method({
selector: 'parameters:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@parameters']=aCollection;
return self;},
source: unescape('parameters%3A%20aCollection%0A%09parameters%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockNode%3A%20self'),
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_isBlockNode',
smalltalk.method({
selector: 'isBlockNode',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isBlockNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_inlined',
smalltalk.method({
selector: 'inlined',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@inlined'], "_ifNil_", [(function(){return false;})]);
return self;},
source: unescape('inlined%0A%09%5Einlined%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_inlined_',
smalltalk.method({
selector: 'inlined:',
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@inlined']=aBoolean;
return self;},
source: unescape('inlined%3A%20aBoolean%0A%09inlined%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@temps'], "_ifNil_", [(function(){return [];})]);
return self;},
source: unescape('temps%0A%09%5Etemps%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_temps_',
smalltalk.method({
selector: 'temps:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@temps']=aCollection;
return self;},
source: unescape('temps%3A%20aCollection%0A%09temps%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_asBlockSequenceNode',
smalltalk.method({
selector: 'asBlockSequenceNode',
category: 'testing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(self, "_nodes", [])]);smalltalk.send($rec, "_temps_", [smalltalk.send(self, "_temps", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.BlockSequenceNode, "_new", []));
return self;},
source: unescape('asBlockSequenceNode%0A%09%5EBlockSequenceNode%20new%0A%09%20%20%20%20nodes%3A%20self%20nodes%3B%0A%09%20%20%20%20temps%3A%20self%20temps%3B%0A%09%20%20%20%20yourself'),
messageSends: ["nodes:", "nodes", "temps:", "temps", "yourself", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSequenceNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSequenceNode%3A%20self'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockSequenceNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockSequenceNode%3A%20self'),
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
'_isBlockSequenceNode',
smalltalk.method({
selector: 'isBlockSequenceNode',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isBlockSequenceNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitReturnNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitReturnNode%3A%20self'),
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'accessing',
fn: function (anObject){
var self=this;
self['@value']=anObject;
return self;},
source: unescape('value%3A%20anObject%0A%09value%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitValueNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitValueNode%3A%20self'),
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_isValueNode',
smalltalk.method({
selector: 'isValueNode',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isValueNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned'], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitVariableNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitVariableNode%3A%20self'),
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
'_assigned',
smalltalk.method({
selector: 'assigned',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@assigned']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
source: unescape('assigned%0A%09%5Eassigned%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
'_assigned_',
smalltalk.method({
selector: 'assigned:',
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@assigned']=aBoolean;
return self;},
source: unescape('assigned%3A%20aBoolean%0A%09assigned%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitClassReferenceNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitClassReferenceNode%3A%20self'),
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@source'], "_ifNil_", [(function(){return "";})]);
return self;},
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitJSStatementNode_", [self]);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitJSStatementNode%3A%20self'),
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitNode_',
smalltalk.method({
selector: 'visitNode:',
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
source: unescape('visitNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitMethodNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitSequenceNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitSequenceNode_", [aNode]);
return self;},
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09self%20visitSequenceNode%3A%20aNode'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitBlockNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitReturnNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitSendNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitCascadeNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitValueNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
source: unescape('visitVariableNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})(self);
return self;},
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20value'),
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("function%28%29%7B")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%28%29")]);})(self);
return self;},
source: unescape('visitJSStatementNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27function%28%29%7B%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20source%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%29%28%29%27'),
messageSends: ["nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('Compiler', smalltalk.NodeVisitor, ['stream', 'nestedBlocks', 'earlyReturn', 'currentClass', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced'], 'Compiler');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.NodeVisitor);
self['@stream']=smalltalk.send("", "_writeStream", []);
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@messageSends']=[];
self['@classReferenced']=[];
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%20%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09classReferenced%20%3A%3D%20%23%28%29'),
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.SmalltalkParser, "_new", []);
return self;},
source: unescape('parser%0A%09%5ESmalltalkParser%20new'),
messageSends: ["new"],
referencedClasses: [smalltalk.SmalltalkParser]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass',
smalltalk.method({
selector: 'currentClass',
category: 'accessing',
fn: function (){
var self=this;
return self['@currentClass'];
return self;},
source: unescape('currentClass%0A%09%5EcurrentClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass_',
smalltalk.method({
selector: 'currentClass:',
category: 'accessing',
fn: function (aClass){
var self=this;
self['@currentClass']=aClass;
return self;},
source: unescape('currentClass%3A%20aClass%0A%09currentClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_loadExpression_',
smalltalk.method({
selector: 'loadExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.DoIt, "_addCompiledMethod_", [smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compileExpression_", [aString])])]);
return smalltalk.send(smalltalk.send(smalltalk.DoIt, "_new", []), "_doIt", []);
return self;},
source: unescape('loadExpression%3A%20aString%0A%09DoIt%20addCompiledMethod%3A%20%28self%20eval%3A%20%28self%20compileExpression%3A%20aString%29%29.%0A%09%5EDoIt%20new%20doIt'),
messageSends: ["addCompiledMethod:", "eval:", "compileExpression:", "doIt", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_load_forClass_',
smalltalk.method({
selector: 'load:forClass:',
category: 'compiling',
fn: function (aString, aClass){
var self=this;
var compiled=nil;
compiled=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compile_forClass_", [aString, aClass])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return compiled;
return self;},
source: unescape('load%3A%20aString%20forClass%3A%20aClass%0A%09%7C%20compiled%20%7C%0A%09compiled%20%3A%3D%20self%20eval%3A%20%28self%20compile%3A%20aString%20forClass%3A%20aClass%29.%0A%09self%20setupClass%3A%20aClass.%0A%09%5Ecompiled'),
messageSends: ["eval:", "compile:forClass:", "setupClass:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_forClass_',
smalltalk.method({
selector: 'compile:forClass:',
category: 'compiling',
fn: function (aString, aClass){
var self=this;
smalltalk.send(self, "_currentClass_", [aClass]);
return smalltalk.send(self, "_compile_", [aString]);
return self;},
source: unescape('compile%3A%20aString%20forClass%3A%20aClass%0A%09self%20currentClass%3A%20aClass.%0A%09%5Eself%20compile%3A%20aString'),
messageSends: ["currentClass:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileExpression_',
smalltalk.method({
selector: 'compileExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self, "_currentClass_", [smalltalk.DoIt]);
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parseExpression_", [aString])]);
return self;},
source: unescape('compileExpression%3A%20aString%0A%09self%20currentClass%3A%20DoIt.%0A%09%5Eself%20compileNode%3A%20%28self%20parseExpression%3A%20aString%29'),
messageSends: ["currentClass:", "compileNode:", "parseExpression:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_eval_',
smalltalk.method({
selector: 'eval:',
category: 'compiling',
fn: function (aString){
var self=this;
return eval(aString);
return self;},
source: unescape('eval%3A%20aString%0A%09%3Creturn%20eval%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [aString])]);
return self;},
source: unescape('compile%3A%20aString%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20aString%29'),
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileNode_',
smalltalk.method({
selector: 'compileNode:',
category: 'compiling',
fn: function (aNode){
var self=this;
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
source: unescape('compileNode%3A%20aNode%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20visit%3A%20aNode.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var currentSelector=nil;
self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []);
self['@nestedBlocks']=(0);
self['@earlyReturn']=false;
self['@messageSends']=[];
self['@referencedClasses']=[];
self['@unknownVariables']=[];
self['@tempVariables']=[];
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%22"), "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", [unescape("%22%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%22"), "__comma", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_escaped", [])]), "__comma", [unescape("%22%29%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("fn%3A%20function%28")]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%29%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("var%20self%3Dthis%3B")]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
str=self['@stream'];
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})]);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
self['@stream']=str;
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("return%20self%3B")]);})(self['@stream']);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D")]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C"), "__comma", [smalltalk.send(smalltalk.String, "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
source: unescape('visitMethodNode%3A%20aNode%0A%09%7C%20str%20currentSelector%20%7C%0A%09currentSelector%20%3A%3D%20aNode%20selector%20asSelector.%0A%09nestedBlocks%20%3A%3D%200.%0A%09earlyReturn%20%3A%3D%20false.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09referencedClasses%20%3A%3D%20%23%28%29.%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.method%28%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27selector%3A%20%22%27%2C%20aNode%20selector%2C%20%27%22%2C%27%3B%20lf.%0A%09stream%20nextPutAll%3A%20%27source%3A%20unescape%28%22%27%2C%20aNode%20source%20escaped%2C%20%27%22%29%2C%27%3Blf.%0A%09stream%20nextPutAll%3A%20%27fn%3A%20function%28%27.%0A%09aNode%20arguments%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09tempVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27%29%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27var%20self%3Dthis%3B%27%3B%20lf.%0A%09str%20%3A%3D%20stream.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20str%20nextPutAll%3A%20%27try%7B%27%5D.%0A%09str%20nextPutAll%3A%20stream%20contents.%0A%09stream%20%3A%3D%20str.%0A%09stream%20%0A%09%20%20%20%20lf%3B%20%0A%09%20%20%20%20nextPutAll%3A%20%27return%20self%3B%27.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20lf%3B%20nextPutAll%3A%20%27%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27%27stReturn%27%27%20%26%26%20e.selector%20%3D%3D%3D%20%27%2C%20currentSelector%20printString%2C%20%27%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%27.%0A%09stream%20%0A%09%09nextPutAll%3A%20%27%2C%27%2C%20String%20lf%2C%20%27messageSends%3A%20%27%3B%0A%09%09nextPutAll%3A%20messageSends%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%5B%27.%0A%09referencedClasses%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%0A%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09stream%20nextPutAll%3A%20%27%5D%27.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["asSelector", "selector", "nextPutAll:", "lf", unescape("%2C"), "escaped", "source", "do:separatedBy:", "arguments", "add:", "writeStream", "do:", "nodes", "visit:", "ifTrue:", "contents", "printString", "asJavascript"],
referencedClasses: [smalltalk.String]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28")]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
source: unescape('visitBlockNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%28function%28%27.%0A%09aNode%20parameters%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%0A%09%09tempVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "parameters", "add:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [each]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;},
source: unescape('visitSequenceNode%3A%20aNode%0A%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20tempVariables%20add%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20each%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20lf%5D'),
messageSends: ["do:", "temps", "add:", "nextPutAll:", unescape("%2C"), "lf", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
self['@nestedBlocks']=smalltalk.send(self['@nestedBlocks'], "__plus", [(1)]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", []), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [each]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=smalltalk.send(index, "__plus", [(1)]);smalltalk.send(smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])]), "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})]);
self['@nestedBlocks']=smalltalk.send(self['@nestedBlocks'], "__minus", [(1)]);
return self;},
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20+%201.%0A%09aNode%20nodes%20isEmpty%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20nil%3B%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20tempVariables%20add%3A%20each.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20each%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09%09index%20%3A%3D%200.%0A%09%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%09%20%20%20%20self%20visit%3A%20each.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%5D.%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20-%201'),
messageSends: [unescape("+"), "ifTrue:ifFalse:", "isEmpty", "nodes", "nextPutAll:", "do:", "temps", "add:", unescape("%2C"), "lf", "ifTrue:", unescape("%3D"), "size", "visit:", unescape("-")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self['@nestedBlocks'], "__gt", [(0)]), "_ifTrue_", [(function(){return self['@earlyReturn']=true;})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})]);
return self;},
source: unescape('visitReturnNode%3A%20aNode%0A%09nestedBlocks%20%3E%200%20ifTrue%3A%20%5B%0A%09%20%20%20%20earlyReturn%20%3A%3D%20true%5D.%0A%09earlyReturn%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%0A%09%09%20%20%20%20nextPutAll%3A%20%27%28function%28%29%7Bthrow%28%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%7Bname%3A%20%27%27stReturn%27%27%2C%20selector%3A%20%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20currentSelector%20printString%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%2C%20fn%3A%20function%28%29%7Breturn%20%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%7D%7D%29%7D%29%28%29%27%5D'),
messageSends: ["ifTrue:", unescape("%3E"), "ifTrue:ifFalse:", "nextPutAll:", "printString", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
str=self['@stream'];
(($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]);
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
superSend=(($receiver = smalltalk.send(self['@stream'], "_contents", [])).klass === smalltalk.Number) ? $receiver =="super" : smalltalk.send($receiver, "__eq", ["super"]);
receiver=(($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})]);
self['@stream']=str;
(($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);
return self;},
source: unescape('visitSendNode%3A%20aNode%0A%20%20%20%20%20%20%20%20%7C%20str%20receiver%20superSend%20inlined%20%7C%0A%20%20%20%20%20%20%20%20str%20%3A%3D%20stream.%0A%20%20%20%20%20%20%20%20%28messageSends%20includes%3A%20aNode%20selector%29%20ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messageSends%20add%3A%20aNode%20selector%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20%20%20%20%20self%20visit%3A%20aNode%20receiver.%0A%20%20%20%20%20%20%20%20superSend%20%3A%3D%20stream%20contents%20%3D%20%27super%27.%0A%20%20%20%20%20%20%20%20receiver%20%3A%3D%20superSend%20ifTrue%3A%20%5B%27self%27%5D%20ifFalse%3A%20%5Bstream%20contents%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%0A%09self%20performOptimizations%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09%28self%20inlineLiteral%3A%20aNode%20selector%20receiverNode%3A%20aNode%20receiver%20argumentNodes%3A%20aNode%20arguments%29%20ifFalse%3A%20%5B%0A%09%09%09%09%28self%20inline%3A%20aNode%20selector%20receiver%3A%20receiver%20argumentNodes%3A%20aNode%20arguments%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%20%3A%20%27%2C%20%28self%20send%3A%20aNode%20selector%20to%3A%20%27%24receiver%27%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D%5D%5D%0A%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D'),
messageSends: ["ifFalse:", "includes:", "selector", "add:", "writeStream", "visit:", "receiver", unescape("%3D"), "contents", "ifTrue:ifFalse:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "arguments", "inline:receiver:argumentNodes:", "nextPutAll:", unescape("%2C"), "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
index=(0);
smalltalk.send(smalltalk.send(self['@tempVariables'], "_includes_", ["$rec"]), "_ifFalse_", [(function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%24rec%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=smalltalk.send(index, "__plus", [(1)]);smalltalk.send(smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])]), "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send(smalltalk.VariableNode, "_new", []), "_value_", ["$rec"])]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29%28")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29")]);
return self;},
source: unescape('visitCascadeNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09index%20%3A%3D%200.%0A%09%28tempVariables%20includes%3A%20%27%24rec%27%29%20ifFalse%3A%20%5B%0A%09%09tempVariables%20add%3A%20%27%24rec%27%5D.%0A%09stream%20nextPutAll%3A%20%27%28function%28%24rec%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%20%20%20%20each%20receiver%3A%20%28VariableNode%20new%20value%3A%20%27%24rec%27%29.%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%28%27.%0A%09self%20visit%3A%20aNode%20receiver.%0A%09stream%20nextPutAll%3A%20%27%29%27'),
messageSends: ["ifFalse:", "includes:", "add:", "nextPutAll:", "do:", "nodes", unescape("+"), "ifTrue:", unescape("%3D"), "size", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: [smalltalk.VariableNode]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
source: unescape('visitValueNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20aNode%20value%20asJavascript'),
messageSends: ["nextPutAll:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3D")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
return self;},
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visit%3A%20aNode%20left.%0A%09stream%20nextPutAll%3A%20%27%3D%27.%0A%09self%20visit%3A%20aNode%20right'),
messageSends: ["visit:", "left", "nextPutAll:", "right"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var klass=nil;
klass=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28smalltalk."), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%7C%7C%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")]);
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_at_", [smalltalk.send(aNode, "_value", [])]), "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [klass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [klass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [klass]);
return self;},
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09%7C%20klass%20%7C%0A%09klass%20%3A%3D%20%27%28smalltalk.%27%2C%20aNode%20value%2C%20%27%20%7C%7C%20%27%2C%20aNode%20value%2C%20%27%29%27.%0A%09%28Smalltalk%20current%20at%3A%20aNode%20value%29%20isClass%20ifTrue%3A%20%5B%0A%09%09%28referencedClasses%20includes%3A%20klass%29%0A%09%09%09ifFalse%3A%20%5BreferencedClasses%20add%3A%20klass%5D%5D.%0A%09stream%20nextPutAll%3A%20klass'),
messageSends: [unescape("%2C"), "value", "ifTrue:", "isClass", "at:", "current", "ifFalse:", "includes:", "add:", "nextPutAll:"],
referencedClasses: [smalltalk.Smalltalk]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);})() : (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);}), (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})]);})]);
return self;},
source: unescape('visitVariableNode%3A%20aNode%0A%09%28self%20currentClass%20allInstanceVariableNames%20includes%3A%20aNode%20value%29%20%0A%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27self%5B%27%27@%27%2C%20aNode%20value%2C%20%27%27%27%5D%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%28self%20knownVariables%20includes%3A%20aNode%20value%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09unknownVariables%20add%3A%20aNode%20value.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aNode%20assigned%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20aNode%20value%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27%28typeof%20%27%2C%20aNode%20value%2C%20%27%20%3D%3D%20%27%27undefined%27%27%20%3F%20nil%20%3A%20%27%2C%20aNode%20value%2C%20%27%29%27%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09stream%20nextPutAll%3AaNode%20value%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "nextPutAll:", unescape("%2C"), "ifFalse:ifTrue:", "knownVariables", "add:", "assigned"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [unescape("%3E%3E"), unescape("%3E")])]);
return self;},
source: unescape('visitJSStatementNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%28aNode%20source%20replace%3A%20%27%3E%3E%27%20with%3A%20%27%3E%27%29'),
messageSends: ["nextPutAll:", "replace:with:", "source"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_parse_", [smalltalk.send(aString, "_readStream", [])]);
return self;},
source: unescape('parse%3A%20aString%0A%20%20%20%20%5Eself%20parser%20parse%3A%20aString%20readStream'),
messageSends: ["parse:", "parser", "readStream"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parseExpression_',
smalltalk.method({
selector: 'parseExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_parse_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return self;},
source: unescape('parseExpression%3A%20aString%0A%20%20%20%20%5Eself%20parse%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27'),
messageSends: ["parse:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_unknownVariables',
smalltalk.method({
selector: 'unknownVariables',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;},
source: unescape('unknownVariables%0A%09%5EunknownVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_pseudoVariables',
smalltalk.method({
selector: 'pseudoVariables',
category: 'accessing',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;},
source: unescape('pseudoVariables%0A%09%5E%23%28%27self%27%20%27super%27%20%27true%27%20%27false%27%20%27nil%27%20%27thisContext%27%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_tempVariables',
smalltalk.method({
selector: 'tempVariables',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;},
source: unescape('tempVariables%0A%09%5EtempVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_knownVariables',
smalltalk.method({
selector: 'knownVariables',
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;},
source: unescape('knownVariables%0A%09%5Eself%20pseudoVariables%20%0A%09%09addAll%3A%20self%20tempVariables%3B%0A%09%09yourself'),
messageSends: ["addAll:", "tempVariables", "yourself", "pseudoVariables"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_recompile_',
smalltalk.method({
selector: 'recompile:',
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(self, "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]);
return self;},
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_recompileAll',
smalltalk.method({
selector: 'recompileAll',
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_classes", []), "_do_", [(function(each){(function($rec){smalltalk.send($rec, "_show_", [each]);return smalltalk.send($rec, "_cr", []);})(smalltalk.Transcript);return smalltalk.send((function(){return smalltalk.send(self, "_recompile_", [each]);}), "_valueWithTimeout_", [(100)]);})]);
return self;},
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09Transcript%20show%3A%20each%3B%20cr.%0A%09%09%5Bself%20recompile%3A%20each%5D%20valueWithTimeout%3A%20100%5D'),
messageSends: ["do:", "classes", "current", "show:", "cr", "valueWithTimeout:", "recompile:"],
referencedClasses: [smalltalk.Smalltalk,smalltalk.nil]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return smalltalk.send(smalltalk.send(aClass, "_isNil", []), "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;},
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitFailure_',
smalltalk.method({
selector: 'visitFailure:',
category: 'visiting',
fn: function (aFailure){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;},
source: unescape('visitFailure%3A%20aFailure%0A%09self%20error%3A%20aFailure%20asString'),
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_setupClass_',
smalltalk.method({
selector: 'setupClass:',
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
return self;},
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_send_to_arguments_superSend_',
smalltalk.method({
selector: 'send:to:arguments:superSend:',
category: 'visiting',
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
return smalltalk.send(smalltalk.String, "_streamContents_", [(function(str){var tmp=nil;
tmp=self['@stream'];smalltalk.send(str, "_nextPutAll_", [unescape("smalltalk.send%28")]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C%20%22"), "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", [unescape("%22%2C%20%5B")])]);self['@stream']=str;smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);self['@stream']=tmp;smalltalk.send(str, "_nextPutAll_", [unescape("%5D")]);smalltalk.send(aBoolean, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]);return smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
source: unescape('send%3A%20aSelector%20to%3A%20aReceiver%20arguments%3A%20aCollection%20superSend%3A%20aBoolean%0A%09%5EString%20streamContents%3A%20%5B%3Astr%20%7C%7C%20tmp%20%7C%0A%20%20%20%20%20%20%20%20%09tmp%20%3A%3D%20stream.%0A%09%09str%20nextPutAll%3A%20%27smalltalk.send%28%27.%0A%09%09str%20nextPutAll%3A%20aReceiver.%0A%09%09str%20nextPutAll%3A%20%27%2C%20%22%27%2C%20aSelector%20asSelector%2C%20%27%22%2C%20%5B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%09aCollection%0A%09%20%20%20%20%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%20%20%20%20%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20tmp.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20nextPutAll%3A%20%27%5D%27.%0A%09%09aBoolean%20ifTrue%3A%20%5B%0A%09%09%09str%20nextPutAll%3A%20%27%2C%20smalltalk.%27%2C%20%28self%20classNameFor%3A%20self%20currentClass%20superclass%29%5D.%0A%09%09str%20nextPutAll%3A%20%27%29%27%5D'),
messageSends: ["streamContents:", "nextPutAll:", unescape("%2C"), "asSelector", "do:separatedBy:", "visit:", "ifTrue:", "classNameFor:", "superclass", "currentClass"],
referencedClasses: [smalltalk.String]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_checkClass_for_',
smalltalk.method({
selector: 'checkClass:for:',
category: 'optimizations',
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%28%24receiver%20%3D%20"), "__comma", [receiver]), "__comma", [unescape("%29.klass%20%3D%3D%3D%20smalltalk.")]), "__comma", [aClassName]), "__comma", [unescape("%29%20%3F%20")])]);
return self;},
source: unescape('checkClass%3A%20aClassName%20for%3A%20receiver%0A%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27%2C%20receiver%2C%20%27%29.klass%20%3D%3D%3D%20smalltalk.%27%2C%20aClassName%2C%20%27%29%20%3F%20%27'),
messageSends: ["nextPutAll:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_inlineLiteral_receiverNode_argumentNodes_',
smalltalk.method({
selector: 'inlineLiteral:receiverNode:argumentNodes:',
category: 'optimizations',
fn: function (aSelector, anObject, aCollection){
var self=this;
var inlined=nil;
inlined=false;
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileTrue:" : smalltalk.send($receiver, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileFalse:" : smalltalk.send($receiver, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileTrue" : smalltalk.send($receiver, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileFalse" : smalltalk.send($receiver, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("+") : smalltalk.send($receiver, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("-") : smalltalk.send($receiver, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("*") : smalltalk.send($receiver, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("/") : smalltalk.send($receiver, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C") : smalltalk.send($receiver, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C%3D") : smalltalk.send($receiver, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3D") : smalltalk.send($receiver, "__eq", [unescape("%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E") : smalltalk.send($receiver, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E%3D") : smalltalk.send($receiver, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNil:" : smalltalk.send($receiver, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNotNil:" : smalltalk.send($receiver, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNil:ifNotNil:" : smalltalk.send($receiver, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNotNil:ifNil:" : smalltalk.send($receiver, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})]);
return inlined;
return self;},
source: unescape('inlineLiteral%3A%20aSelector%20receiverNode%3A%20anObject%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%0A%09%22--%20BlockClosures%20--%22%0A%0A%09%28aSelector%20%3D%20%27whileTrue%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileTrue%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20+%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20-%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20*%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20/%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3D%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20%20%20%0A%09%22--%20UndefinedObject%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%24receiver%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNil%3AifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3AifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "and:", "isBlockNode", "first", "nextPutAll:", "visit:", "isNode:ofClass:", "second"],
referencedClasses: [smalltalk.Number]
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_isNode_ofClass_',
smalltalk.method({
selector: 'isNode:ofClass:',
category: 'optimizations',
fn: function (aNode, aClass){
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;},
source: unescape('isNode%3A%20aNode%20ofClass%3A%20aClass%0A%09%5EaNode%20isValueNode%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09aNode%20value%20class%20%3D%20aClass%20or%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09aNode%20value%20%3D%20%27self%27%20and%3A%20%5Bself%20currentClass%20%3D%20aClass%5D%5D%5D'),
messageSends: ["and:", "isValueNode", "or:", unescape("%3D"), "class", "value", "currentClass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_inline_receiver_argumentNodes_',
smalltalk.method({
selector: 'inline:receiver:argumentNodes:',
category: 'optimizations',
fn: function (aSelector, receiver, aCollection){
var self=this;
var inlined=nil;
inlined=false;
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifFalse:" : smalltalk.send($receiver, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifTrue:" : smalltalk.send($receiver, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifTrue:ifFalse:" : smalltalk.send($receiver, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifFalse:ifTrue:" : smalltalk.send($receiver, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C") : smalltalk.send($receiver, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C%3D") : smalltalk.send($receiver, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E") : smalltalk.send($receiver, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E%3D") : smalltalk.send($receiver, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("+") : smalltalk.send($receiver, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("-") : smalltalk.send($receiver, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("*") : smalltalk.send($receiver, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("/") : smalltalk.send($receiver, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
return inlined;
return self;},
source: unescape('inline%3A%20aSelector%20receiver%3A%20receiver%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%0A%09%22--%20Booleans%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3AifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3AifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20+%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20-%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20*%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20/%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "isBlockNode", "first", "checkClass:for:", "nextPutAll:", "visit:", "and:", "second"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_performOptimizations',
smalltalk.method({
selector: 'performOptimizations',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;},
source: unescape('performOptimizations%0A%09%5Eself%20class%20performOptimizations'),
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.Compiler);


smalltalk.Compiler.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
'_recompile_',
smalltalk.method({
selector: 'recompile:',
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(smalltalk.send(self, "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]);
return self;},
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20new%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "new", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_recompileAll',
smalltalk.method({
selector: 'recompileAll',
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_recompile_", [each]);})]);
return self;},
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20recompile%3A%20each%5D'),
messageSends: ["do:", "classes", "current", "recompile:"],
referencedClasses: [smalltalk.Smalltalk]
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_performOptimizations',
smalltalk.method({
selector: 'performOptimizations',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;},
source: unescape('performOptimizations%0A%09%5EperformOptimizations%20ifNil%3A%20%5Btrue%5D%20'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_performOptimizations_',
smalltalk.method({
selector: 'performOptimizations:',
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@performOptimizations']=aBoolean;
return self;},
source: unescape('performOptimizations%3A%20aBoolean%0A%09performOptimizations%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
category: '',
fn: function (){
var self=this;
return smalltalk.send((function(){return (($receiver = (typeof a == 'undefined' ? nil : a)).klass === smalltalk.Number) ? $receiver <(3) : smalltalk.send($receiver, "__lt", [(3)]);}), "_value", []);
return self;},
source: unescape('doIt%20%5E%5Ba%20%3C%203%5D%20value'),
messageSends: ["value", unescape("%3C")],
referencedClasses: []
}),
smalltalk.DoIt);



