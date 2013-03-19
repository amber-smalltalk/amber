smalltalk.addPackage('Compiler-IR');
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
fn: function (aNode){
var self=this;
var variable;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=_st(aNode)._isImmutable();
if(smalltalk.assert($1)){
$2=_st(self)._visit_(aNode);
return $2;
};
$3=_st((smalltalk.IRVariable || IRVariable))._new();
_st($3)._variable_(_st(_st((smalltalk.AliasVar || AliasVar))._new())._name_(_st("$").__comma(_st(self)._nextAlias())));
$4=_st($3)._yourself();
variable=$4;
$5=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($5)._add_(variable);
_st($5)._add_(_st(self)._visit_(aNode));
$6=_st($5)._yourself();
_st(_st(self)._sequence())._add_($6);
_st(_st(_st(self)._method())._internalVariables())._add_(variable);
$7=variable;
return $7;
}, function($ctx1) {$ctx1.fill(self,"alias:",{aNode:aNode,variable:variable},smalltalk.IRASTTranslator)})},
messageSends: ["ifTrue:", "visit:", "isImmutable", "variable:", "name:", ",", "nextAlias", "new", "yourself", "add:", "sequence", "internalVariables", "method"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_aliasTemporally_",
smalltalk.method({
selector: "aliasTemporally:",
fn: function (aCollection){
var self=this;
var threshold,result;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3,$5;
threshold=(0);
_st(aCollection)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {$1=_st(each)._subtreeNeedsAliasing();
if(smalltalk.assert($1)){
threshold=i;
return threshold;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
result=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
_st(aCollection)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {$2=result;
$4=_st(i).__lt_eq(threshold);
if(smalltalk.assert($4)){
$3=_st(self)._alias_(each);
} else {
$3=_st(self)._visit_(each);
};
return _st($2)._add_($3);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$5=result;
return $5;
}, function($ctx1) {$ctx1.fill(self,"aliasTemporally:",{aCollection:aCollection,threshold:threshold,result:result},smalltalk.IRASTTranslator)})},
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "alias:", "visit:", "<="]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=anIRMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{anIRMethod:anIRMethod},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nextAlias"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
$1;
};
self["@nextAlias"]=_st(self["@nextAlias"]).__plus((1));
$2=_st(self["@nextAlias"])._asString();
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextAlias",{},smalltalk.IRASTTranslator)})},
messageSends: ["ifNil:", "+", "asString"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@sequence"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sequence",{},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sequence"]=anIRSequence;
return self}, function($ctx1) {$ctx1.fill(self,"sequence:",{anIRSequence:anIRSequence},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.IRASTTranslator)})},
messageSends: []}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
var left,right,assignment;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
right=_st(self)._visit_(_st(aNode)._right());
left=_st(self)._visit_(_st(aNode)._left());
$1=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($1)._add_(left);
_st($1)._add_(right);
$2=_st($1)._yourself();
_st(_st(self)._sequence())._add_($2);
$3=left;
return $3;
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,left:left,right:right,assignment:assignment},smalltalk.IRASTTranslator)})},
messageSends: ["visit:", "right", "left", "add:", "new", "yourself", "sequence"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
var closure;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st((smalltalk.IRClosure || IRClosure))._new();
_st($1)._arguments_(_st(aNode)._parameters());
_st($1)._scope_(_st(aNode)._scope());
$2=_st($1)._yourself();
closure=$2;
_st(_st(_st(aNode)._scope())._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$3=_st((smalltalk.IRTempDeclaration || IRTempDeclaration))._new();
_st($3)._name_(_st(each)._name());
_st($3)._scope_(_st(aNode)._scope());
$4=_st($3)._yourself();
return _st(closure)._add_($4);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(closure)._add_(_st(self)._visit_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$5=closure;
return $5;
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,closure:closure},smalltalk.IRASTTranslator)})},
messageSends: ["arguments:", "parameters", "new", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "temps", "visit:", "nodes"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$1;
$1=_st(self)._withSequence_do_(_st((smalltalk.IRBlockSequence || IRBlockSequence))._new(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(aNode)._nodes())._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(self)._sequence())._add_(_st(self)._visit_(each));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(_st(aNode)._nodes())._last())._isReturnNode();
if(smalltalk.assert($2)){
return _st(_st(self)._sequence())._add_(_st(self)._visit_(_st(_st(aNode)._nodes())._last()));
} else {
$3=_st((smalltalk.IRBlockReturn || IRBlockReturn))._new();
_st($3)._add_(_st(self)._visit_(_st(_st(aNode)._nodes())._last()));
$4=_st($3)._yourself();
return _st(_st(self)._sequence())._add_($4);
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "do:", "add:", "visit:", "sequence", "allButLast", "nodes", "ifFalse:ifTrue:", "last", "yourself", "isReturnNode"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
var alias;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aNode)._receiver())._isImmutable();
if(! smalltalk.assert($1)){
alias=_st(self)._alias_(_st(aNode)._receiver());
alias;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._receiver_(_st(_st((smalltalk.VariableNode || VariableNode))._new())._binding_(_st(alias)._variable()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
};
_st(_st(_st(aNode)._nodes())._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sequence())._add_(_st(self)._visit_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(self)._alias_(_st(_st(aNode)._nodes())._last());
return $2;
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode,alias:alias},smalltalk.IRASTTranslator)})},
messageSends: ["ifFalse:", "alias:", "receiver", "do:", "receiver:", "binding:", "variable", "new", "nodes", "isImmutable", "add:", "visit:", "sequence", "allButLast", "last"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { var $1;
array=_st((smalltalk.IRDynamicArray || IRDynamicArray))._new();
_st(_st(self)._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(array)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},smalltalk.IRASTTranslator)})},
messageSends: ["new", "do:", "add:", "aliasTemporally:", "nodes"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
var dictionary;
return smalltalk.withContext(function($ctx1) { var $1;
dictionary=_st((smalltalk.IRDynamicDictionary || IRDynamicDictionary))._new();
_st(_st(self)._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(dictionary)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,dictionary:dictionary},smalltalk.IRASTTranslator)})},
messageSends: ["new", "do:", "add:", "aliasTemporally:", "nodes"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVerbatim || IRVerbatim))._new();
_st($2)._source_(_st(aNode)._source());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["source:", "source", "new", "yourself"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st((smalltalk.IRMethod || IRMethod))._new();
_st($1)._source_(_st(self)._source());
_st($1)._theClass_(_st(self)._theClass());
_st($1)._arguments_(_st(aNode)._arguments());
_st($1)._selector_(_st(aNode)._selector());
_st($1)._messageSends_(_st(aNode)._messageSends());
_st($1)._superSends_(_st(aNode)._superSends());
_st($1)._classReferences_(_st(aNode)._classReferences());
_st($1)._scope_(_st(aNode)._scope());
$2=_st($1)._yourself();
_st(self)._method_($2);
_st(_st(_st(aNode)._scope())._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$3=_st((smalltalk.IRTempDeclaration || IRTempDeclaration))._new();
_st($3)._name_(_st(each)._name());
_st($3)._scope_(_st(aNode)._scope());
$4=_st($3)._yourself();
return _st(_st(self)._method())._add_($4);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._method())._add_(_st(self)._visit_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$5=_st(_st(aNode)._scope())._hasLocalReturn();
if(! smalltalk.assert($5)){
$6=_st((smalltalk.IRVariable || IRVariable))._new();
_st($6)._variable_(_st(_st(_st(aNode)._scope())._pseudoVars())._at_("self"));
$7=_st($6)._yourself();
_st(_st(_st(self)._method())._add_(_st((smalltalk.IRReturn || IRReturn))._new()))._add_($7);
};
$8=_st(self)._method();
return $8;
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["method:", "source:", "source", "new", "theClass:", "theClass", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "superSends:", "superSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "method", "temps", "visit:", "nodes", "ifFalse:", "variable:", "at:", "pseudoVars", "hasLocalReturn"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
var return_;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(aNode)._nonLocalReturn();
if(smalltalk.assert($1)){
return_=_st((smalltalk.IRNonLocalReturn || IRNonLocalReturn))._new();
} else {
return_=_st((smalltalk.IRReturn || IRReturn))._new();
};
_st(return_)._scope_(_st(aNode)._scope());
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(return_)._add_(_st(self)._alias_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=return_;
return $2;
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode,return_:return_},smalltalk.IRASTTranslator)})},
messageSends: ["ifTrue:ifFalse:", "new", "nonLocalReturn", "scope:", "scope", "do:", "add:", "alias:", "nodes"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
var send,all,receiver,arguments;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
send=_st((smalltalk.IRSend || IRSend))._new();
$1=send;
_st($1)._selector_(_st(aNode)._selector());
$2=_st($1)._index_(_st(aNode)._index());
$3=_st(aNode)._superSend();
if(smalltalk.assert($3)){
_st(send)._classSend_(_st(_st(self)._theClass())._superclass());
};
all=_st(self)._aliasTemporally_(_st([_st(aNode)._receiver()]).__comma(_st(aNode)._arguments()));
receiver=_st(all)._first();
arguments=_st(all)._allButFirst();
_st(send)._add_(receiver);
_st(arguments)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(send)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$4=send;
return $4;
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,send:send,all:all,receiver:receiver,arguments:arguments},smalltalk.IRASTTranslator)})},
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "classSend:", "superclass", "theClass", "superSend", "aliasTemporally:", ",", "arguments", "receiver", "first", "allButFirst", "add:", "do:"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st(self)._withSequence_do_(_st((smalltalk.IRSequence || IRSequence))._new(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(aNode)._nodes())._do_((function(each){
var instruction;
return smalltalk.withContext(function($ctx3) {instruction=_st(self)._visit_(each);
instruction;
$2=_st(instruction)._isVariable();
if(! smalltalk.assert($2)){
return _st(_st(self)._sequence())._add_(instruction);
};
}, function($ctx3) {$ctx3.fillBlock({each:each,instruction:instruction},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["withSequence:do:", "new", "do:", "visit:", "ifFalse:", "add:", "sequence", "isVariable", "nodes"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRValue || IRValue))._new();
_st($2)._value_(_st(aNode)._value());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["value:", "value", "new", "yourself"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRVariable || IRVariable))._new();
_st($2)._variable_(_st(aNode)._binding());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
messageSends: ["variable:", "binding", "new", "yourself"]}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
fn: function (aSequence,aBlock){
var self=this;
var outerSequence;
return smalltalk.withContext(function($ctx1) { var $1;
outerSequence=_st(self)._sequence();
_st(self)._sequence_(aSequence);
_st(aBlock)._value();
_st(self)._sequence_(outerSequence);
$1=aSequence;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSequence:do:",{aSequence:aSequence,aBlock:aBlock,outerSequence:outerSequence},smalltalk.IRASTTranslator)})},
messageSends: ["sequence", "sequence:", "value"]}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInstruction_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInstruction)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(anObject)._parent_(self);
$1=_st(_st(self)._instructions())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.IRInstruction)})},
messageSends: ["parent:", "add:", "instructions"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeAssigned",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@instructions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@instructions"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@instructions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instructions",{},smalltalk.IRInstruction)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isClosure",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isMethod",
smalltalk.method({
selector: "isMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isMethod",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isReturn",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSend",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSequence",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isTempDeclaration",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isVariable",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._parent())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRInstruction)})},
messageSends: ["method", "parent"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parent"]=anIRInstruction;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
messageSends: []}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._remove_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.IRInstruction)})},
messageSends: ["remove:", "parent"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._instructions())._remove_(anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
messageSends: ["remove:", "instructions"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anotherIRInstruction)._parent_(self);
_st(_st(self)._instructions())._at_put_(_st(_st(self)._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replace:with:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRInstruction)})},
messageSends: ["parent:", "at:put:", "indexOf:", "instructions"]}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._parent())._replace_with_(self,anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
messageSends: ["replace:with:", "parent"]}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder},smalltalk.IRInstruction.klass)})},
messageSends: ["builder:", "new", "yourself"]}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRAssignment)})},
messageSends: ["visitIRAssignment:"]}),
smalltalk.IRAssignment);



smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicArray_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRDynamicArray)})},
messageSends: ["visitIRDynamicArray:"]}),
smalltalk.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRDynamicDictionary)})},
messageSends: ["visitIRDynamicDictionary:"]}),
smalltalk.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.IRScopedInstruction)})},
messageSends: []}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},smalltalk.IRScopedInstruction)})},
messageSends: []}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosureInstruction', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
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
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.IRClosureInstruction)})},
messageSends: ["ifNil:"]}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.IRClosureInstruction)})},
messageSends: []}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(_st(self)._arguments())._copy();
_st($2)._addAll_(_st(_st(self)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.IRClosureInstruction)})},
messageSends: ["addAll:", "collect:", "name", "tempDeclarations", "copy", "arguments", "yourself"]}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRScopedInstruction.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},smalltalk.IRClosureInstruction)})},
messageSends: ["scope:", "instruction:"]}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
"_tempDeclarations",
smalltalk.method({
selector: "tempDeclarations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._instructions())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isTempDeclaration();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tempDeclarations",{},smalltalk.IRClosureInstruction)})},
messageSends: ["select:", "isTempDeclaration", "instructions"]}),
smalltalk.IRClosureInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRClosureInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRClosure_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRClosure)})},
messageSends: ["visitIRClosure:"]}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isClosure",{},smalltalk.IRClosure)})},
messageSends: []}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._instructions())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sequence",{},smalltalk.IRClosure)})},
messageSends: ["last", "instructions"]}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRClosureInstruction, ['theClass', 'source', 'selector', 'classReferences', 'messageSends', 'superSends', 'internalVariables'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRMethod_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRMethod)})},
messageSends: ["visitIRMethod:"]}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classReferences"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classReferences"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"classReferences:",{aCollection:aCollection},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@internalVariables"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@internalVariables"]=_st((smalltalk.Set || Set))._new();
$1=self["@internalVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},smalltalk.IRMethod)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_isMethod",
smalltalk.method({
selector: "isMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isMethod",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"messageSends:",{aCollection:aCollection},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@superSends"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@superSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"superSends:",{aCollection:aCollection},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.IRMethod)})},
messageSends: []}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRReturn)})},
messageSends: ["visitIRReturn:"]}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canBeAssigned",{},smalltalk.IRReturn)})},
messageSends: []}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockReturn",{},smalltalk.IRReturn)})},
messageSends: []}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRReturn)})},
messageSends: []}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isLocalReturn())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNonLocalReturn",{},smalltalk.IRReturn)})},
messageSends: ["not", "isLocalReturn"]}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isReturn",{},smalltalk.IRReturn)})},
messageSends: []}),
smalltalk.IRReturn);



smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRBlockReturn)})},
messageSends: ["visitIRBlockReturn:"]}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockReturn",{},smalltalk.IRBlockReturn)})},
messageSends: []}),
smalltalk.IRBlockReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRNonLocalReturn)})},
messageSends: ["visitIRNonLocalReturn:"]}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRNonLocalReturn)})},
messageSends: []}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRScopedInstruction, ['name'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRTempDeclaration_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRTempDeclaration)})},
messageSends: ["visitIRTempDeclaration:"]}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isTempDeclaration",{},smalltalk.IRTempDeclaration)})},
messageSends: []}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.IRTempDeclaration)})},
messageSends: []}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.IRTempDeclaration)})},
messageSends: []}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSend_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRSend)})},
messageSends: ["visitIRSend:"]}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@classSend"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"classSend",{},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classSend"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"classSend:",{aClass:aClass},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSend",{},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.IRSend)})},
messageSends: []}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRSequence)})},
messageSends: ["visitIRSequence:"]}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSequence",{},smalltalk.IRSequence)})},
messageSends: []}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRBlockSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRBlockSequence)})},
messageSends: ["visitIRBlockSequence:"]}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRValue_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRValue)})},
messageSends: ["visitIRValue:"]}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.IRValue)})},
messageSends: []}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},smalltalk.IRValue)})},
messageSends: []}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVariable_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRVariable)})},
messageSends: ["visitIRVariable:"]}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isVariable",{},smalltalk.IRVariable)})},
messageSends: []}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variable",{},smalltalk.IRVariable)})},
messageSends: []}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
fn: function (aScopeVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variable"]=aScopeVariable;
return self}, function($ctx1) {$ctx1.fill(self,"variable:",{aScopeVariable:aScopeVariable},smalltalk.IRVariable)})},
messageSends: []}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRVerbatim_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRVerbatim)})},
messageSends: ["visitIRVerbatim:"]}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRVerbatim)})},
messageSends: []}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRVerbatim)})},
messageSends: []}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anIRInstruction)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{anIRInstruction:anIRInstruction},smalltalk.IRVisitor)})},
messageSends: ["accept:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRAssignment);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockReturn_",
smalltalk.method({
selector: "visitIRBlockReturn:",
fn: function (anIRBlockReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRReturn_(anIRBlockReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockReturn:",{anIRBlockReturn:anIRBlockReturn},smalltalk.IRVisitor)})},
messageSends: ["visitIRReturn:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
fn: function (anIRBlockSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRBlockSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockSequence:",{anIRBlockSequence:anIRBlockSequence},smalltalk.IRVisitor)})},
messageSends: ["visitIRSequence:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRDynamicDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRClosure_(anIRInlinedClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRVisitor)})},
messageSends: ["visitIRClosure:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRSequence_(anIRInlinedSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRVisitor)})},
messageSends: ["visitIRSequence:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(anIRInstruction)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anIRInstruction;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInstruction:",{anIRInstruction:anIRInstruction},smalltalk.IRVisitor)})},
messageSends: ["do:", "visit:", "instructions"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
fn: function (anIRNonLocalReturnHandling){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturnHandling:",{anIRNonLocalReturnHandling:anIRNonLocalReturnHandling},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSend);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRTempDeclaration);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVariable);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._visitIRInstruction_(anIRVerbatim);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},smalltalk.IRVisitor)})},
messageSends: ["visitIRInstruction:"]}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._stream())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.IRJSTranslator)})},
messageSends: ["contents", "stream"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.IRVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st((smalltalk.JSStream || JSStream))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.IRJSTranslator)})},
messageSends: ["initialize", "new"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@stream"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.IRJSTranslator)})},
messageSends: []}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, function($ctx1) {$ctx1.fill(self,"stream:",{aStream:aStream},smalltalk.IRJSTranslator)})},
messageSends: []}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRAssignment)._instructions())._first());
_st(_st(self)._stream())._nextPutAssignment();
_st(self)._visit_(_st(_st(anIRAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRJSTranslator)})},
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutClosureWith_arguments_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutVars_(_st(_st(anIRClosure)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(_st(each)._name())._asVariableName();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})})));
return _st(_st(self)._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
return smalltalk.withContext(function($ctx3) {return smalltalk.IRVisitor.fn.prototype._visitIRClosure_.apply(_st(self), [anIRClosure]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),_st(anIRClosure)._arguments());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutClosureWith:arguments:", "nextPutVars:", "collect:", "asVariableName", "name", "tempDeclarations", "stream", "nextPutBlockContextFor:during:", "visitIRClosure:", "arguments"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("[");
_st(_st(anIRDynamicArray)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@stream"])._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_("smalltalk.HashedCollection._fromPairs_([");
_st(_st(anIRDynamicDictionary)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._stream())._nextPutAll_("])");
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._stream())._nextPutMethodDeclaration_with_(anIRMethod,(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutFunctionWith_arguments_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(self)._stream())._nextPutVars_(_st(_st(anIRMethod)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(each)._name())._asVariableName();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})})));
_st(_st(anIRMethod)._classReferences())._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(self)._stream())._nextPutClassRefFunction_(each);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
return _st(_st(self)._stream())._nextPutContextFor_during_(anIRMethod,(function(){
return smalltalk.withContext(function($ctx4) {$1=_st(_st(anIRMethod)._internalVariables())._notEmpty();
if(smalltalk.assert($1)){
_st(_st(self)._stream())._nextPutVars_(_st(_st(_st(anIRMethod)._internalVariables())._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx5) {return _st(_st(each)._variable())._alias();
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx1)})})));
};
$2=_st(_st(anIRMethod)._scope())._hasNonLocalReturn();
if(smalltalk.assert($2)){
return _st(_st(self)._stream())._nextPutNonLocalReturnHandlingWith_((function(){
return smalltalk.withContext(function($ctx5) {return smalltalk.IRVisitor.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
} else {
return smalltalk.IRVisitor.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
};
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),_st(anIRMethod)._arguments());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutMethodDeclaration:with:", "nextPutFunctionWith:arguments:", "nextPutVars:", "collect:", "asVariableName", "name", "tempDeclarations", "stream", "do:", "nextPutClassRefFunction:", "classReferences", "nextPutContextFor:during:", "ifTrue:", "alias", "variable", "asArray", "internalVariables", "notEmpty", "ifTrue:ifFalse:", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "hasNonLocalReturn", "scope", "arguments"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.IRVisitor.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutNonLocalReturnWith:", "visitIRNonLocalReturn:", "stream"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.IRVisitor.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutReturnWith:", "visitIRReturn:", "stream"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(anIRSend)._classSend();
if(($receiver = $1) == nil || $receiver == undefined){
_st(_st(self)._stream())._nextPutAll_("_st(");
_st(self)._visit_(_st(_st(anIRSend)._instructions())._first());
_st(_st(self)._stream())._nextPutAll_(_st(_st(").").__comma(_st(_st(anIRSend)._selector())._asSelector())).__comma("("));
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._stream())._nextPutAll_(")");
} else {
$2=_st(self)._stream();
_st($2)._nextPutAll_(_st(_st(_st(anIRSend)._classSend())._asJavascript()).__comma(".fn.prototype."));
_st($2)._nextPutAll_(_st(_st(_st(anIRSend)._selector())._asSelector()).__comma(".apply("));
$3=_st($2)._nextPutAll_("_st(");
$3;
_st(self)._visit_(_st(_st(anIRSend)._instructions())._first());
_st(_st(self)._stream())._nextPutAll_("), [");
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._stream())._nextPutAll_("])");
};
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},smalltalk.IRJSTranslator)})},
messageSends: ["ifNil:ifNotNil:", "nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "asJavascript", "classSend"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutSequenceWith_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(anIRSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._stream())._nextPutStatementWith_(_st(self)._visit_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutSequenceWith:", "do:", "nextPutStatementWith:", "visit:", "stream", "instructions"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},smalltalk.IRJSTranslator)})},
messageSends: []}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutAll_(_st(_st(anIRValue)._value())._asJavascript());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutAll:", "asJavascript", "value", "stream"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRVariable)._variable())._name()).__eq("thisContext");
if(smalltalk.assert($1)){
_st(_st(self)._stream())._nextPutAll_("smalltalk.getThisContext()");
} else {
_st(_st(self)._stream())._nextPutAll_(_st(_st(anIRVariable)._variable())._alias());
};
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},smalltalk.IRJSTranslator)})},
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "stream", "alias", "variable", "=", "name"]}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutAll_(_st(anIRVerbatim)._source());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},smalltalk.IRJSTranslator)})},
messageSends: ["nextPutStatementWith:", "nextPutAll:", "source", "stream"]}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@stream"])._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.JSStream)})},
messageSends: ["contents"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st("")._writeStream();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.JSStream)})},
messageSends: ["initialize", "writeStream"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._lf();
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.JSStream)})},
messageSends: ["lf"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.JSStream)})},
messageSends: ["nextPut:"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.JSStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("=");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAssignment",{},smalltalk.JSStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutBlockContextFor_during_",
smalltalk.method({
selector: "nextPutBlockContextFor:during:",
fn: function (anIRClosure,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._nextPutAll_(_st(_st("return smalltalk.withContext(function(").__comma(_st(_st(anIRClosure)._scope())._alias())).__comma(") {"));
$2=_st($1)._nextPutAll_(_st((smalltalk.String || String))._cr());
_st(aBlock)._value();
$3=self;
_st($3)._nextPutAll_(_st(_st("}, function(").__comma(_st(_st(anIRClosure)._scope())._alias())).__comma(") {"));
$4=_st($3)._nextPutAll_(_st(_st(_st(anIRClosure)._scope())._alias()).__comma(".fillBlock({"));
_st(_st(anIRClosure)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {$5=self;
_st($5)._nextPutAll_(_st(each)._asVariableName());
_st($5)._nextPutAll_(":");
$6=_st($5)._nextPutAll_(_st(each)._asVariableName());
return $6;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=self;
_st($7)._nextPutAll_("},");
$8=_st($7)._nextPutAll_(_st(_st(_st(_st(anIRClosure)._method())._scope())._alias()).__comma(")})"));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutBlockContextFor:during:",{anIRClosure:anIRClosure,aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", ",", "alias", "scope", "cr", "value", "do:separatedBy:", "asVariableName", "locals", "method"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClassRefFunction_",
smalltalk.method({
selector: "nextPutClassRefFunction:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@stream"];
_st($1)._nextPutAll_("function $");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_("(){return smalltalk.");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_("||(typeof ");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_("==\x22undefined\x22?nil:");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_(")}");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClassRefFunction:",{aString:aString},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@stream"])._nextPutAll_("(function(");
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPut_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClosureWith:arguments:",{aBlock:aBlock,anArray:anArray},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutContextFor_during_",
smalltalk.method({
selector: "nextPutContextFor:during:",
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._nextPutAll_(_st(_st("return smalltalk.withContext(function(").__comma(_st(_st(aMethod)._scope())._alias())).__comma(") { "));
$2=_st($1)._nextPutAll_(_st((smalltalk.String || String))._cr());
_st(aBlock)._value();
$3=self;
_st($3)._nextPutAll_(_st(_st(_st("}, function(").__comma(_st(_st(aMethod)._scope())._alias())).__comma(") {")).__comma(_st(_st(aMethod)._scope())._alias()));
$4=_st($3)._nextPutAll_(_st(_st(".fill(self,").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(",{"));
_st(_st(aMethod)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {$5=self;
_st($5)._nextPutAll_(_st(each)._asVariableName());
_st($5)._nextPutAll_(":");
$6=_st($5)._nextPutAll_(_st(each)._asVariableName());
return $6;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=self;
_st($7)._nextPutAll_("},");
_st($7)._nextPutAll_(_st(_st(aMethod)._theClass())._asJavascript());
$8=_st($7)._nextPutAll_(")})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutContextFor:during:",{aMethod:aMethod,aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", ",", "alias", "scope", "cr", "value", "asJavascript", "selector", "do:separatedBy:", "asVariableName", "locals", "theClass"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("fn: function(");
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPut_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
$3=self["@stream"];
_st($3)._nextPutAll_("var self=this;");
$4=_st($3)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutFunctionWith:arguments:",{aBlock:aBlock,anArray:anArray},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@stream"])._nextPutAll_("if(");
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(anotherBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIf:with:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "value", "lf"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("if(");
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$2=_st($1)._lf();
_st(ifBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_("} else {");
$4=_st($3)._lf();
_st(elseBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIfElse:with:with:",{aBlock:aBlock,ifBlock:ifBlock,elseBlock:elseBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "value", "lf"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=self["@stream"];
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: \x22").__comma(_st(aMethod)._selector())).__comma("\x22,"));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("source: ").__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
$2=_st($1)._lf();
_st(aBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_(_st(_st(",").__comma(_st((smalltalk.String || String))._lf())).__comma("messageSends: "));
_st($3)._nextPutAll_(_st(_st(_st(_st(aMethod)._messageSends())._asArray())._asJavascript()).__comma(","));
_st($3)._lf();
_st($3)._nextPutAll_(_st(_st("args: ").__comma(_st(_st(_st(_st(aMethod)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asArray())._asJavascript())).__comma(","));
_st($3)._lf();
$4=_st($3)._nextPutAll_("referencedClasses: [");
_st(_st(aMethod)._classReferences())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(_st(each)._asJavascript());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=self["@stream"];
_st($5)._nextPutAll_("]");
$6=_st($5)._nextPutAll_("})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutMethodDeclaration:with:",{aMethod:aMethod,aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "lf", ",", "selector", "asJavascript", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@stream"];
_st($1)._nextPutAll_("var $early={};");
_st($1)._lf();
_st($1)._nextPutAll_("try {");
$2=_st($1)._lf();
_st(aBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_("}");
_st($3)._lf();
_st($3)._nextPutAll_("catch(e) {if(e===$early)return e[0]; throw e}");
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnHandlingWith:",{aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "lf", "value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("throw $early=[");
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnWith:",{aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", "value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@stream"])._nextPutAll_("return ");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturn",{},smalltalk.JSStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._nextPutReturn();
_st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturnWith:",{aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutReturn", "value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutSequenceWith:",{aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["value"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
fn: function (anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@stream"];
_st($1)._nextPutAll_(_st(_st("case ").__comma(_st(anInteger)._asString())).__comma(":"));
$2=_st($1)._lf();
_st(self)._nextPutStatementWith_(aBlock);
$3=self["@stream"];
_st($3)._nextPutAll_(_st(_st("smalltalk.thisContext.pc=").__comma(_st(_st(anInteger).__plus((1)))._asString())).__comma(";"));
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutStatement:with:",{anInteger:anInteger,aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["nextPutAll:", ",", "asString", "lf", "nextPutStatementWith:", "+"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutStatementWith:",{aBlock:aBlock},smalltalk.JSStream)})},
messageSends: ["value", "nextPutAll:", "lf"]}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
var $early={};
try {
_st(aCollection)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@stream"])._nextPutAll_("var ");
_st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@stream"])._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=self["@stream"];
_st($2)._nextPutAll_(";");
$3=_st($2)._lf();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextPutVars:",{aCollection:aCollection},smalltalk.JSStream)})},
messageSends: ["ifEmpty:", "nextPutAll:", "do:separatedBy:", "lf"]}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anIRInstruction)._appendBlock_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToInstruction:",{anIRInstruction:anIRInstruction},smalltalk.BlockClosure)})},
messageSends: ["appendBlock:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._reservedWords())._includes_(self);
if(smalltalk.assert($2)){
$1=_st(self).__comma("_");
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asVariableName",{},smalltalk.String)})},
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"]}),
smalltalk.String);

