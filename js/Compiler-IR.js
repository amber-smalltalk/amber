define("amber_core/Compiler-IR", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Compiler-Core", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-IR');
smalltalk.packages["Compiler-IR"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.";
smalltalk.addMethod(
smalltalk.method({
selector: "alias:",
category: 'visiting',
fn: function (aNode){
var self=this;
var variable;
function $IRVariable(){return smalltalk.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return smalltalk.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$10,$11,$9,$12;
$1=_st(aNode)._isImmutable();
if(smalltalk.assert($1)){
$2=self._visit_(aNode);
$ctx1.sendIdx["visit:"]=1;
return $2;
};
$3=_st($IRVariable())._new();
$ctx1.sendIdx["new"]=1;
$4=$3;
$6=_st($AliasVar())._new();
$ctx1.sendIdx["new"]=2;
$5=_st($6)._name_("$".__comma(self._nextAlias()));
_st($4)._variable_($5);
$7=_st($3)._yourself();
$ctx1.sendIdx["yourself"]=1;
variable=$7;
$8=self._sequence();
$10=_st($IRAssignment())._new();
_st($10)._add_(variable);
$ctx1.sendIdx["add:"]=2;
_st($10)._add_(self._visit_(aNode));
$ctx1.sendIdx["add:"]=3;
$11=_st($10)._yourself();
$9=$11;
_st($8)._add_($9);
$ctx1.sendIdx["add:"]=1;
_st(_st(self._method())._internalVariables())._add_(variable);
$12=variable;
return $12;
}, function($ctx1) {$ctx1.fill(self,"alias:",{aNode:aNode,variable:variable},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isImmutable ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new\x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias);\x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["ifTrue:", "isImmutable", "visit:", "variable:", "new", "name:", ",", "nextAlias", "yourself", "add:", "sequence", "internalVariables", "method"],
referencedClasses: ["IRVariable", "AliasVar", "IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "aliasTemporally:",
category: 'visiting',
fn: function (aCollection){
var self=this;
var threshold,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
threshold=(0);
_st(aCollection)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._subtreeNeedsAliasing();
if(smalltalk.assert($1)){
threshold=i;
return threshold;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)})}));
$ctx1.sendIdx["withIndexDo:"]=1;
result=_st($OrderedCollection())._new();
_st(aCollection)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$2=result;
$4=_st(i).__lt_eq(threshold);
if(smalltalk.assert($4)){
$3=self._alias_(each);
} else {
$3=self._visit_(each);
};
return _st($2)._add_($3);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,3)})}));
$5=result;
return $5;
}, function($ctx1) {$ctx1.fill(self,"aliasTemporally:",{aCollection:aCollection,threshold:threshold,result:result},smalltalk.IRASTTranslator)})},
args: ["aCollection"],
source: "aliasTemporally: aCollection\x0a\x09\x22https://github.com/NicolasPetton/amber/issues/296\x0a\x09\x0a\x09If a node is aliased, all preceding ones are aliased as well.\x0a\x09The tree is iterated twice. First we get the aliasing dependency,\x0a\x09then the aliasing itself is done\x22\x0a\x0a\x09| threshold result |\x0a\x09threshold := 0.\x0a\x09\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09each subtreeNeedsAliasing\x0a\x09\x09\x09ifTrue: [ threshold := i ] ].\x0a\x0a\x09result := OrderedCollection new.\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09result add: (i <= threshold\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ]) ].\x0a\x0a\x09^ result",
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "<=", "alias:", "visit:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRASTTranslator)})},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=anIRMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{anIRMethod:anIRMethod},smalltalk.IRASTTranslator)})},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAlias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@nextAlias"];
if(($receiver = $1) == nil || $receiver == null){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
$1;
};
self["@nextAlias"]=_st(self["@nextAlias"]).__plus((1));
$2=_st(self["@nextAlias"])._asString();
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextAlias",{},smalltalk.IRASTTranslator)})},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sequence"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sequence",{},smalltalk.IRASTTranslator)})},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence:",
category: 'accessing',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sequence"]=anIRSequence;
return self}, function($ctx1) {$ctx1.fill(self,"sequence:",{anIRSequence:anIRSequence},smalltalk.IRASTTranslator)})},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

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
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRASTTranslator)})},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRASTTranslator)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.IRASTTranslator)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.IRASTTranslator)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var left,right,assignment;
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5;
right=self._visit_(_st(aNode)._right());
$ctx1.sendIdx["visit:"]=1;
left=self._visit_(_st(aNode)._left());
$1=self._sequence();
$3=_st($IRAssignment())._new();
_st($3)._add_(left);
$ctx1.sendIdx["add:"]=2;
_st($3)._add_(right);
$4=_st($3)._yourself();
$2=$4;
_st($1)._add_($2);
$ctx1.sendIdx["add:"]=1;
$5=left;
return $5;
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,left:left,right:right,assignment:assignment},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "sequence", "new", "yourself"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var closure;
function $IRClosure(){return smalltalk.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRTempDeclaration(){return smalltalk.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=_st($IRClosure())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._arguments_(_st(aNode)._parameters());
$2=$1;
$3=_st(aNode)._scope();
$ctx1.sendIdx["scope"]=1;
_st($2)._scope_($3);
$ctx1.sendIdx["scope:"]=1;
$4=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
closure=$4;
$6=_st(aNode)._scope();
$ctx1.sendIdx["scope"]=2;
$5=_st($6)._temps();
_st($5)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$7=_st($IRTempDeclaration())._new();
_st($7)._name_(_st(each)._name());
_st($7)._scope_(_st(aNode)._scope());
$8=_st($7)._yourself();
return _st(closure)._add_($8);
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(closure)._add_(self._visit_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$9=closure;
return $9;
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,closure:closure},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "new", "parameters", "scope:", "scope", "yourself", "do:", "temps", "add:", "name:", "name", "nodes", "visit:"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRBlockSequence(){return smalltalk.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
function $IRBlockReturn(){return smalltalk.IRBlockReturn||(typeof IRBlockReturn=="undefined"?nil:IRBlockReturn)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$7,$10,$9,$8,$11,$13,$14,$17,$16,$15,$18,$12,$1;
$2=_st($IRBlockSequence())._new();
$ctx1.sendIdx["new"]=1;
$1=self._withSequence_do_($2,(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(aNode)._nodes();
$ctx2.sendIdx["nodes"]=1;
return _st($3)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(aNode)._nodes();
$ctx3.sendIdx["nodes"]=2;
$4=_st($5)._allButLast();
_st($4)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
$6=self._sequence();
$ctx4.sendIdx["sequence"]=1;
$7=self._visitOrAlias_(each);
$ctx4.sendIdx["visitOrAlias:"]=1;
return _st($6)._add_($7);
$ctx4.sendIdx["add:"]=1;
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)})}));
$10=_st(aNode)._nodes();
$ctx3.sendIdx["nodes"]=3;
$9=_st($10)._last();
$ctx3.sendIdx["last"]=1;
$8=_st($9)._isReturnNode();
if(smalltalk.assert($8)){
return _st(self._sequence())._add_(self._visitOrAlias_(_st(_st(aNode)._nodes())._last()));
} else {
$11=self._sequence();
$ctx3.sendIdx["sequence"]=2;
$13=_st($IRBlockReturn())._new();
$14=$13;
$17=_st(aNode)._nodes();
$ctx3.sendIdx["nodes"]=4;
$16=_st($17)._last();
$ctx3.sendIdx["last"]=2;
$15=self._visitOrAlias_($16);
$ctx3.sendIdx["visitOrAlias:"]=2;
_st($14)._add_($15);
$ctx3.sendIdx["add:"]=3;
$18=_st($13)._yourself();
$12=$18;
return _st($11)._add_($12);
$ctx3.sendIdx["add:"]=2;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09\x09\x09\x09self sequence add: (self visitOrAlias: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode\x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visitOrAlias: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visitOrAlias: aNode nodes last) ] ]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "nodes", "do:", "allButLast", "add:", "sequence", "visitOrAlias:", "ifFalse:ifTrue:", "isReturnNode", "last", "yourself"],
referencedClasses: ["IRBlockSequence", "IRBlockReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var alias,receiver;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$4,$6;
$2=_st(aNode)._receiver();
$ctx1.sendIdx["receiver"]=1;
$1=_st($2)._isImmutable();
if(smalltalk.assert($1)){
receiver=_st(aNode)._receiver();
$ctx1.sendIdx["receiver"]=2;
receiver;
} else {
alias=self._alias_(_st(aNode)._receiver());
$ctx1.sendIdx["alias:"]=1;
alias;
receiver=_st(_st($VariableNode())._new())._binding_(_st(alias)._variable());
receiver;
};
$3=_st(aNode)._nodes();
$ctx1.sendIdx["nodes"]=1;
_st($3)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._receiver_(receiver);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$ctx1.sendIdx["do:"]=1;
$5=_st(aNode)._nodes();
$ctx1.sendIdx["nodes"]=2;
$4=_st($5)._allButLast();
_st($4)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._sequence())._add_(self._visit_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
$6=self._alias_(_st(_st(aNode)._nodes())._last());
return $6;
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode,alias:alias,receiver:receiver},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias receiver |\x0a\x0a\x09aNode receiver isImmutable \x0a\x09\x09ifTrue: [ receiver := aNode receiver ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09\x09receiver := VariableNode new binding: alias variable ].\x0a\x09\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: receiver ].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifTrue:ifFalse:", "isImmutable", "receiver", "alias:", "binding:", "new", "variable", "do:", "nodes", "receiver:", "allButLast", "add:", "sequence", "visit:", "last"],
referencedClasses: ["VariableNode"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var array;
function $IRDynamicArray(){return smalltalk.IRDynamicArray||(typeof IRDynamicArray=="undefined"?nil:IRDynamicArray)}
return smalltalk.withContext(function($ctx1) { 
var $1;
array=_st($IRDynamicArray())._new();
_st(self._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(array)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | array add: each ].\x0a\x09^ array",
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"],
referencedClasses: ["IRDynamicArray"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var dictionary;
function $IRDynamicDictionary(){return smalltalk.IRDynamicDictionary||(typeof IRDynamicDictionary=="undefined"?nil:IRDynamicDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
dictionary=_st($IRDynamicDictionary())._new();
_st(self._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,dictionary:dictionary},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | dictionary add: each ].\x0a\x09^ dictionary",
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"],
referencedClasses: ["IRDynamicDictionary"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRVerbatim(){return smalltalk.IRVerbatim||(typeof IRVerbatim=="undefined"?nil:IRVerbatim)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRVerbatim())._new();
_st($2)._source_(_st(_st(aNode)._source())._crlfSanitized());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source crlfSanitized;\x0a\x09\x09yourself",
messageSends: ["source:", "new", "crlfSanitized", "source", "yourself"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRMethod(){return smalltalk.IRMethod||(typeof IRMethod=="undefined"?nil:IRMethod)}
function $IRTempDeclaration(){return smalltalk.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
function $IRVariable(){return smalltalk.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$7,$6,$8,$10,$11,$12,$13,$9,$14,$16,$15,$18,$19,$17,$20,$21,$22;
$2=_st($IRMethod())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._source_(_st(self._source())._crlfSanitized());
_st($2)._theClass_(self._theClass());
_st($2)._arguments_(_st(aNode)._arguments());
_st($2)._selector_(_st(aNode)._selector());
_st($2)._sendIndexes_(_st(aNode)._sendIndexes());
_st($2)._superSends_(_st(aNode)._superSends());
_st($2)._classReferences_(_st(aNode)._classReferences());
$3=$2;
$4=_st(aNode)._scope();
$ctx1.sendIdx["scope"]=1;
_st($3)._scope_($4);
$ctx1.sendIdx["scope:"]=1;
$5=_st($2)._yourself();
$ctx1.sendIdx["yourself"]=1;
$1=$5;
self._method_($1);
$7=_st(aNode)._scope();
$ctx1.sendIdx["scope"]=2;
$6=_st($7)._temps();
_st($6)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$8=self._method();
$ctx2.sendIdx["method"]=1;
$10=_st($IRTempDeclaration())._new();
$ctx2.sendIdx["new"]=2;
_st($10)._name_(_st(each)._name());
$11=$10;
$12=_st(aNode)._scope();
$ctx2.sendIdx["scope"]=3;
_st($11)._scope_($12);
$13=_st($10)._yourself();
$ctx2.sendIdx["yourself"]=2;
$9=$13;
return _st($8)._add_($9);
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$14=self._method();
$ctx2.sendIdx["method"]=2;
return _st($14)._add_(self._visit_(each));
$ctx2.sendIdx["add:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$16=_st(aNode)._scope();
$ctx1.sendIdx["scope"]=4;
$15=_st($16)._hasLocalReturn();
if(! smalltalk.assert($15)){
$18=self._method();
$ctx1.sendIdx["method"]=3;
$19=_st($IRReturn())._new();
$ctx1.sendIdx["new"]=3;
$17=_st($18)._add_($19);
$20=_st($IRVariable())._new();
_st($20)._variable_(_st(_st(_st(aNode)._scope())._pseudoVars())._at_("self"));
$21=_st($20)._yourself();
_st($17)._add_($21);
$ctx1.sendIdx["add:"]=3;
};
$22=self._method();
return $22;
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source crlfSanitized;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09sendIndexes: aNode sendIndexes;\x0a\x09\x09superSends: aNode superSends;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "new", "crlfSanitized", "source", "theClass:", "theClass", "arguments:", "arguments", "selector:", "selector", "sendIndexes:", "sendIndexes", "superSends:", "superSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "temps", "add:", "method", "name:", "name", "nodes", "visit:", "ifFalse:", "hasLocalReturn", "variable:", "at:", "pseudoVars"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRReturn", "IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOrAlias:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aNode)._shouldBeAliased();
if(smalltalk.assert($2)){
$1=self._alias_(aNode);
} else {
$1=self._visit_(aNode);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitOrAlias:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitOrAlias: aNode\x0a\x09^ aNode shouldBeAliased\x0a\x09\x09ifTrue: [ self alias: aNode ]\x0a\x09\x09ifFalse: [ self visit: aNode ]",
messageSends: ["ifTrue:ifFalse:", "shouldBeAliased", "alias:", "visit:"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var return_;
function $IRNonLocalReturn(){return smalltalk.IRNonLocalReturn||(typeof IRNonLocalReturn=="undefined"?nil:IRNonLocalReturn)}
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNode)._nonLocalReturn();
if(smalltalk.assert($1)){
return_=_st($IRNonLocalReturn())._new();
$ctx1.sendIdx["new"]=1;
} else {
return_=_st($IRReturn())._new();
};
_st(return_)._scope_(_st(aNode)._scope());
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(return_)._add_(self._alias_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$2=return_;
return $2;
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode,return_:return_},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn\x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "nonLocalReturn", "new", "scope:", "scope", "do:", "nodes", "add:", "alias:"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var send,all,receiver,arguments;
function $IRSend(){return smalltalk.IRSend||(typeof IRSend=="undefined"?nil:IRSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
send=_st($IRSend())._new();
$1=send;
_st($1)._selector_(_st(aNode)._selector());
$2=_st($1)._index_(_st(aNode)._index());
$3=_st(aNode)._superSend();
if(smalltalk.assert($3)){
_st(send)._classSend_(_st(self._theClass())._superclass());
};
all=self._aliasTemporally_(_st([_st(aNode)._receiver()]).__comma(_st(aNode)._arguments()));
receiver=_st(all)._first();
arguments=_st(all)._allButFirst();
_st(send)._add_(receiver);
$ctx1.sendIdx["add:"]=1;
_st(arguments)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(send)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$4=send;
return $4;
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,send:send,all:all,receiver:receiver,arguments:arguments},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send all receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send\x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x09\x0a\x09all := self aliasTemporally: { aNode receiver }, aNode arguments.\x0a\x09receiver := all first.\x0a\x09arguments := all allButFirst.\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "superSend", "classSend:", "superclass", "theClass", "aliasTemporally:", ",", "receiver", "arguments", "first", "allButFirst", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRSequence(){return smalltalk.IRSequence||(typeof IRSequence=="undefined"?nil:IRSequence)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=self._withSequence_do_(_st($IRSequence())._new(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aNode)._nodes())._do_((function(each){
var instruction;
return smalltalk.withContext(function($ctx3) {
instruction=self._visitOrAlias_(each);
instruction;
$2=_st(instruction)._isVariable();
if(! smalltalk.assert($2)){
return _st(self._sequence())._add_(instruction);
};
}, function($ctx3) {$ctx3.fillBlock({each:each,instruction:instruction},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visitOrAlias: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ] ]]",
messageSends: ["withSequence:do:", "new", "do:", "nodes", "visitOrAlias:", "ifFalse:", "isVariable", "add:", "sequence"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRValue(){return smalltalk.IRValue||(typeof IRValue=="undefined"?nil:IRValue)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRValue())._new();
_st($2)._value_(_st(aNode)._value());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new\x0a\x09\x09value: aNode value;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "value", "yourself"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $IRVariable(){return smalltalk.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRVariable())._new();
_st($2)._variable_(_st(aNode)._binding());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.IRASTTranslator)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new\x0a\x09\x09variable: aNode binding;\x0a\x09\x09yourself",
messageSends: ["variable:", "new", "binding", "yourself"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "withSequence:do:",
category: 'accessing',
fn: function (aSequence,aBlock){
var self=this;
var outerSequence;
return smalltalk.withContext(function($ctx1) { 
outerSequence=self._sequence();
self._sequence_(aSequence);
$ctx1.sendIdx["sequence:"]=1;
_st(aBlock)._value();
self._sequence_(outerSequence);
return aSequence;
}, function($ctx1) {$ctx1.fill(self,"withSequence:do:",{aSequence:aSequence,aBlock:aBlock,outerSequence:outerSequence},smalltalk.IRASTTranslator)})},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInstruction_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInstruction)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'building',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anObject)._parent_(self);
$1=_st(self._instructions())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.IRInstruction)})},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeAssigned",{},smalltalk.IRInstruction)})},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "instructions",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@instructions"];
if(($receiver = $2) == nil || $receiver == null){
self["@instructions"]=_st($OrderedCollection())._new();
$1=self["@instructions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instructions",{},smalltalk.IRInstruction)})},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isClosure",{},smalltalk.IRInstruction)})},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInstruction)})},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRInstruction)})},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethod",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMethod",{},smalltalk.IRInstruction)})},
args: [],
source: "isMethod\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isReturn",{},smalltalk.IRInstruction)})},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSend",{},smalltalk.IRInstruction)})},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSequence",{},smalltalk.IRInstruction)})},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempDeclaration",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isTempDeclaration",{},smalltalk.IRInstruction)})},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isVariable",{},smalltalk.IRInstruction)})},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._parent())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRInstruction)})},
args: [],
source: "method\x0a\x09^ self parent method",
messageSends: ["method", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{},smalltalk.IRInstruction)})},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

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
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.IRInstruction)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=anIRInstruction;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'building',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._remove_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.IRInstruction)})},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._instructions())._remove_(anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
category: 'building',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anotherIRInstruction)._parent_(self);
$1=self._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._at_put_(_st(self._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replace:with:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRInstruction)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions\x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "instructions", "indexOf:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceWith:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._replace_with_(self,anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{anIRInstruction:anIRInstruction},smalltalk.IRInstruction)})},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
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
$1=_st(node)._scope();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.IRInstruction)})},
args: [],
source: "scope\x0a\x09^ self parent ifNotNil: [ :node | \x0a\x09\x09node scope ]",
messageSends: ["ifNotNil:", "parent", "scope"],
referencedClasses: []
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder},smalltalk.IRInstruction.klass)})},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRAssignment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRDynamicArray_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRDynamicArray)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
messageSends: ["visitIRDynamicArray:"],
referencedClasses: []
}),
smalltalk.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRDynamicDictionary)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
messageSends: ["visitIRDynamicDictionary:"],
referencedClasses: []
}),
smalltalk.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
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
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.IRScopedInstruction)})},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},smalltalk.IRScopedInstruction)})},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosureInstruction', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
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
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.IRClosureInstruction)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.IRClosureInstruction)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._arguments())._copy();
_st($2)._addAll_(_st(self._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.IRClosureInstruction)})},
args: [],
source: "locals\x0a\x09^ self arguments copy\x0a\x09\x09addAll: (self tempDeclarations collect: [ :each | each name ]);\x0a\x09\x09yourself",
messageSends: ["addAll:", "copy", "arguments", "collect:", "tempDeclarations", "name", "yourself"],
referencedClasses: []
}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.IRClosureInstruction.superclass.fn.prototype._scope_.apply(_st(self), [aScope]);
_st(aScope)._instruction_(self);
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},smalltalk.IRClosureInstruction)})},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "tempDeclarations",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instructions())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isTempDeclaration();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tempDeclarations",{},smalltalk.IRClosureInstruction)})},
args: [],
source: "tempDeclarations\x0a\x09^ self instructions select: [ :each |\x0a\x09\x09each isTempDeclaration ]",
messageSends: ["select:", "instructions", "isTempDeclaration"],
referencedClasses: []
}),
smalltalk.IRClosureInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRClosureInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRClosure_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRClosure)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isClosure",{},smalltalk.IRClosure)})},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instructions())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sequence",{},smalltalk.IRClosure)})},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRClosureInstruction, ['theClass', 'source', 'selector', 'classReferences', 'sendIndexes', 'superSends', 'internalVariables'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRMethod_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRMethod)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},smalltalk.IRMethod)})},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@classReferences"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"classReferences:",{aCollection:aCollection},smalltalk.IRMethod)})},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "internalVariables",
category: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@internalVariables"];
if(($receiver = $2) == nil || $receiver == null){
self["@internalVariables"]=_st($Set())._new();
$1=self["@internalVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},smalltalk.IRMethod)})},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethod",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMethod",{},smalltalk.IRMethod)})},
args: [],
source: "isMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.IRMethod)})},
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
messageSends: ["keys", "sendIndexes"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.IRMethod)})},
args: [],
source: "method\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.IRMethod)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.IRMethod)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},smalltalk.IRMethod)})},
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes:",
category: 'accessing',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sendIndexes"]=aDictionary;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexes:",{aDictionary:aDictionary},smalltalk.IRMethod)})},
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRMethod)})},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRMethod)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"superSends",{},smalltalk.IRMethod)})},
args: [],
source: "superSends\x0a\x09^ superSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@superSends"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"superSends:",{aCollection:aCollection},smalltalk.IRMethod)})},
args: ["aCollection"],
source: "superSends: aCollection\x0a\x09superSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.IRMethod)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.IRMethod)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeAssigned",{},smalltalk.IRReturn)})},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlockReturn",{},smalltalk.IRReturn)})},
args: [],
source: "isBlockReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRReturn)})},
args: [],
source: "isLocalReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isNonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isLocalReturn())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNonLocalReturn",{},smalltalk.IRReturn)})},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isReturn",{},smalltalk.IRReturn)})},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@scope"];
if(($receiver = $2) == nil || $receiver == null){
$1=_st(self._parent())._scope();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.IRReturn)})},
args: [],
source: "scope\x0a\x09^ scope ifNil: [ self parent scope ]",
messageSends: ["ifNil:", "scope", "parent"],
referencedClasses: []
}),
smalltalk.IRReturn);



smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRBlockReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRBlockReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
messageSends: ["visitIRBlockReturn:"],
referencedClasses: []
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlockReturn",{},smalltalk.IRBlockReturn)})},
args: [],
source: "isBlockReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBlockReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JavaScript statement.\x0a\x0aSee `IRNonLocalReturnHandling` class.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRNonLocalReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLocalReturn",{},smalltalk.IRNonLocalReturn)})},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRScopedInstruction, ['name'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRTempDeclaration_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRTempDeclaration)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempDeclaration",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isTempDeclaration",{},smalltalk.IRTempDeclaration)})},
args: [],
source: "isTempDeclaration\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.IRTempDeclaration)})},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.IRTempDeclaration)})},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRSend_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRSend)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "classSend",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@classSend"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"classSend",{},smalltalk.IRSend)})},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "classSend:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@classSend"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"classSend:",{aClass:aClass},smalltalk.IRSend)})},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

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
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.IRSend)})},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.IRSend)})},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSend",{},smalltalk.IRSend)})},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

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
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.IRSend)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.IRSend)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSequence",{},smalltalk.IRSequence)})},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRBlockSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRBlockSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.IRValue.comment="I am the simplest possible instruction. I represent a value.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRValue_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRValue)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{},smalltalk.IRValue)})},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

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
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.IRValue)})},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aString:aString},smalltalk.IRValue)})},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.IRVariable.comment="I am a variable instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRVariable_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRVariable)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isVariable",{},smalltalk.IRVariable)})},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._variable())._isPseudoVar())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{},smalltalk.IRVariable)})},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ self variable isPseudoVar not",
messageSends: ["not", "isPseudoVar", "variable"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "variable",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variable",{},smalltalk.IRVariable)})},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "variable:",
category: 'accessing',
fn: function (aScopeVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variable"]=aScopeVariable;
return self}, function($ctx1) {$ctx1.fill(self,"variable:",{aScopeVariable:aScopeVariable},smalltalk.IRVariable)})},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRVerbatim_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRVerbatim)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
smalltalk.IRVerbatim);

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
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.IRVerbatim)})},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.IRVerbatim)})},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anIRInstruction)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{anIRInstruction:anIRInstruction},smalltalk.IRVisitor)})},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRAssignment);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRVisitor)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRBlockReturn:",
category: 'visiting',
fn: function (anIRBlockReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRReturn_(anIRBlockReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockReturn:",{anIRBlockReturn:anIRBlockReturn},smalltalk.IRVisitor)})},
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRBlockSequence:",
category: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRSequence_(anIRBlockSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockSequence:",{anIRBlockSequence:anIRBlockSequence},smalltalk.IRVisitor)})},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},smalltalk.IRVisitor)})},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRDynamicArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},smalltalk.IRVisitor)})},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRDynamicDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},smalltalk.IRVisitor)})},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRClosure_(anIRInlinedClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRVisitor)})},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRSequence_(anIRInlinedSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRVisitor)})},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInstruction:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anIRInstruction)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return anIRInstruction;
}, function($ctx1) {$ctx1.fill(self,"visitIRInstruction:",{anIRInstruction:anIRInstruction},smalltalk.IRVisitor)})},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},smalltalk.IRVisitor)})},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRVisitor)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: 'visiting',
fn: function (anIRNonLocalReturnHandling){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturnHandling:",{anIRNonLocalReturnHandling:anIRNonLocalReturnHandling},smalltalk.IRVisitor)})},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRVisitor)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRSend);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},smalltalk.IRVisitor)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},smalltalk.IRVisitor)})},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRTempDeclaration);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},smalltalk.IRVisitor)})},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},smalltalk.IRVisitor)})},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRVariable);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},smalltalk.IRVisitor)})},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRVerbatim);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},smalltalk.IRVisitor)})},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream', 'currentClass'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stream())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.IRJSTranslator)})},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentClass",{},smalltalk.IRJSTranslator)})},
args: [],
source: "currentClass\x0a\x09^ currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"currentClass:",{aClass:aClass},smalltalk.IRJSTranslator)})},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $JSStream(){return smalltalk.JSStream||(typeof JSStream=="undefined"?nil:JSStream)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.IRJSTranslator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st($JSStream())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.IRJSTranslator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@stream"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.IRJSTranslator)})},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stream"]=aStream;
return self}, function($ctx1) {$ctx1.fill(self,"stream:",{aStream:aStream},smalltalk.IRJSTranslator)})},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(anIRAssignment)._instructions();
$ctx1.sendIdx["instructions"]=1;
$1=_st($2)._first();
self._visit_($1);
$ctx1.sendIdx["visit:"]=1;
_st(self._stream())._nextPutAssignment();
self._visit_(_st(_st(anIRAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRJSTranslator)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutClosureWith_arguments_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutVars_(_st(_st(anIRClosure)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._name())._asVariableName();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})})));
return _st(self._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.IRJSTranslator.superclass.fn.prototype._visitIRClosure_.apply(_st(self), [anIRClosure]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),_st(anIRClosure)._arguments());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},smalltalk.IRJSTranslator)})},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream\x0a\x09\x09nextPutClosureWith: [\x0a\x09\x09\x09self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09self stream\x0a\x09\x09\x09\x09nextPutBlockContextFor: anIRClosure\x0a\x09\x09\x09\x09during: [ super visitIRClosure: anIRClosure ] ]\x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutBlockContextFor:during:", "visitIRClosure:", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutAll_("[");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(_st(anIRDynamicArray)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._stream())._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self["@stream"])._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},smalltalk.IRJSTranslator)})},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutAll_("smalltalk.HashedCollection._from_([");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(_st(anIRDynamicDictionary)._instructions())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
return _st($2)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self._stream())._nextPutAll_("])");
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},smalltalk.IRJSTranslator)})},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: 'smalltalk.HashedCollection._from_(['.\x0a\x09\x09anIRDynamicDictionary instructions\x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$8,$7,$9,$10;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutMethodDeclaration_with_(anIRMethod,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
return _st($2)._nextPutFunctionWith_arguments_((function(){
return smalltalk.withContext(function($ctx3) {
$3=self._stream();
$ctx3.sendIdx["stream"]=3;
$4=_st(_st(anIRMethod)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(each)._name())._asVariableName();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)})}));
$ctx3.sendIdx["collect:"]=1;
_st($3)._nextPutVars_($4);
$ctx3.sendIdx["nextPutVars:"]=1;
_st(_st(anIRMethod)._classReferences())._do_((function(each){
return smalltalk.withContext(function($ctx4) {
$5=self._stream();
$ctx4.sendIdx["stream"]=4;
return _st($5)._nextPutClassRefFunction_(each);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)})}));
$6=self._stream();
$ctx3.sendIdx["stream"]=5;
return _st($6)._nextPutContextFor_during_(anIRMethod,(function(){
return smalltalk.withContext(function($ctx4) {
$8=_st(anIRMethod)._internalVariables();
$ctx4.sendIdx["internalVariables"]=1;
$7=_st($8)._notEmpty();
if(smalltalk.assert($7)){
$9=self._stream();
$ctx4.sendIdx["stream"]=6;
_st($9)._nextPutVars_(_st(_st(_st(anIRMethod)._internalVariables())._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx5) {
return _st(_st(each)._variable())._alias();
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,7)})})));
};
$10=_st(_st(anIRMethod)._scope())._hasNonLocalReturn();
if(smalltalk.assert($10)){
return _st(self._stream())._nextPutNonLocalReturnHandlingWith_((function(){
return smalltalk.withContext(function($ctx5) {
return smalltalk.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
$ctx5.sendIdx["visitIRMethod:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
} else {
return smalltalk.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]);
};
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),_st(anIRMethod)._arguments());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},smalltalk.IRJSTranslator)})},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod\x0a\x09\x09with: [ self stream\x0a\x09\x09\x09nextPutFunctionWith: [\x0a\x09\x09\x09\x09self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09\x09anIRMethod classReferences do: [ :each | self stream nextPutClassRefFunction: each ].\x0a\x09\x09\x09\x09self stream nextPutContextFor: anIRMethod during: [\x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ] ]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ] ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "stream", "nextPutFunctionWith:arguments:", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "classReferences", "nextPutClassRefFunction:", "nextPutContextFor:during:", "ifTrue:", "notEmpty", "internalVariables", "asArray", "alias", "variable", "ifTrue:ifFalse:", "hasNonLocalReturn", "scope", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.IRJSTranslator.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRJSTranslator)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "stream", "visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.IRJSTranslator.superclass.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRJSTranslator)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "stream", "visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var sends;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
sends=_st(_st(_st(_st(anIRSend)._method())._sendIndexes())._at_(_st(anIRSend)._selector()))._size();
$1=_st(anIRSend)._classSend();
if(($receiver = $1) == nil || $receiver == null){
self._visitSend_(anIRSend);
} else {
self._visitSuperSend_(anIRSend);
};
$2=_st(_st(sends).__gt((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anIRSend)._index()).__lt(sends);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
if(smalltalk.assert($2)){
_st(self._stream())._nextPutSendIndexFor_(anIRSend);
};
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend,sends:sends},smalltalk.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09| sends |\x0a\x09sends := (anIRSend method sendIndexes at: anIRSend selector) size.\x0a\x09\x0a\x09anIRSend classSend\x0a\x09\x09ifNil: [ self visitSend: anIRSend ]\x0a\x09\x09ifNotNil: [ self visitSuperSend: anIRSend ].\x0a\x09\x09\x0a\x09(sends > 1 and: [ anIRSend index < sends ])\x0a\x09\x09ifTrue: [ self stream nextPutSendIndexFor: anIRSend ]",
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "ifNil:ifNotNil:", "classSend", "visitSend:", "visitSuperSend:", "ifTrue:", "and:", ">", "<", "index", "nextPutSendIndexFor:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutSequenceWith_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anIRSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(self._stream())._nextPutStatementWith_(self._visit_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},smalltalk.IRJSTranslator)})},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ] ]",
messageSends: ["nextPutSequenceWith:", "stream", "do:", "instructions", "nextPutStatementWith:", "visit:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},smalltalk.IRJSTranslator)})},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09\x22self stream\x0a\x09\x09nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';\x0a\x09\x09lf\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutAll_(_st(_st(anIRValue)._value())._asJavascript());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},smalltalk.IRJSTranslator)})},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "stream", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=_st(anIRVariable)._variable();
$ctx1.sendIdx["variable"]=1;
$2=_st($3)._name();
$1=_st($2).__eq("thisContext");
if(smalltalk.assert($1)){
$4=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($4)._nextPutAll_("smalltalk.getThisContext()");
$ctx1.sendIdx["nextPutAll:"]=1;
} else {
_st(self._stream())._nextPutAll_(_st(_st(anIRVariable)._variable())._alias());
};
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},smalltalk.IRJSTranslator)})},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a\x09\x09ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]\x0a\x09\x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
messageSends: ["ifTrue:ifFalse:", "=", "name", "variable", "nextPutAll:", "stream", "alias"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._stream())._nextPutAll_(_st(anIRVerbatim)._source());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},smalltalk.IRJSTranslator)})},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "stream", "nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReceiver:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(anIRInstruction)._needsBoxingAsReceiver();
if(! smalltalk.assert($1)){
$2=self._visit_(anIRInstruction);
$ctx1.sendIdx["visit:"]=1;
return $2;
};
$3=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($3)._nextPutAll_("_st(");
$ctx1.sendIdx["nextPutAll:"]=1;
self._visit_(anIRInstruction);
_st(self._stream())._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"visitReceiver:",{anIRInstruction:anIRInstruction},smalltalk.IRJSTranslator)})},
args: ["anIRInstruction"],
source: "visitReceiver: anIRInstruction\x0a\x09anIRInstruction needsBoxingAsReceiver ifFalse: [ ^ self visit: anIRInstruction ].\x0a\x09\x0a\x09self stream nextPutAll: '_st('.\x0a\x09self visit: anIRInstruction.\x0a\x09self stream nextPutAll: ')'",
messageSends: ["ifFalse:", "needsBoxingAsReceiver", "visit:", "nextPutAll:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5;
$2=_st(anIRSend)._instructions();
$ctx1.sendIdx["instructions"]=1;
$1=_st($2)._first();
self._visitReceiver_($1);
$3=self._stream();
$ctx1.sendIdx["stream"]=1;
$4=_st(".".__comma(_st(_st(anIRSend)._selector())._asSelector())).__comma("(");
$ctx1.sendIdx[","]=1;
_st($3)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=1;
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$5=self._stream();
$ctx2.sendIdx["stream"]=2;
return _st($5)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self._stream())._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"visitSend:",{anIRSend:anIRSend},smalltalk.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitSend: anIRSend\x0a\x09self visitReceiver: anIRSend instructions first.\x0a\x09self stream nextPutAll: '.', anIRSend selector asSelector, '('.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ')'",
messageSends: ["visitReceiver:", "first", "instructions", "nextPutAll:", "stream", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "visit:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSuperSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutAll_(_st(self._currentClass())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._nextPutAll_(".superclass.fn.prototype.");
$ctx1.sendIdx["nextPutAll:"]=2;
_st($1)._nextPutAll_(_st(_st(_st(anIRSend)._selector())._asSelector()).__comma(".apply("));
$ctx1.sendIdx["nextPutAll:"]=3;
$2=_st($1)._nextPutAll_("_st(");
$ctx1.sendIdx["nextPutAll:"]=4;
$4=_st(anIRSend)._instructions();
$ctx1.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx1.sendIdx["visit:"]=1;
$5=self._stream();
$ctx1.sendIdx["stream"]=2;
_st($5)._nextPutAll_("), [");
$ctx1.sendIdx["nextPutAll:"]=5;
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$6=self._stream();
$ctx2.sendIdx["stream"]=3;
return _st($6)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self._stream())._nextPutAll_("])");
return self}, function($ctx1) {$ctx1.fill(self,"visitSuperSend:",{anIRSend:anIRSend},smalltalk.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitSuperSend: anIRSend\x0a\x09self stream\x0a\x09\x09nextPutAll: self currentClass asJavascript;\x0a\x09\x09nextPutAll: '.superclass.fn.prototype.';\x0a\x09\x09nextPutAll: anIRSend selector asSelector, '.apply(';\x0a\x09\x09nextPutAll: '_st('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll: '), ['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "asJavascript", "currentClass", ",", "asSelector", "selector", "visit:", "first", "instructions", "do:separatedBy:", "allButFirst"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@stream"])._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.JSStream)})},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.JSStream.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=""._writeStream();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.JSStream)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._lf();
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.JSStream)})},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.JSStream)})},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.JSStream)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAssignment",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("=");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAssignment",{},smalltalk.JSStream)})},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutBlockContextFor:during:",
category: 'streaming',
fn: function (anIRClosure,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5,$9,$8,$7,$6,$13,$12,$11,$10,$14,$15,$22,$21,$20,$19,$18,$17,$16;
$4=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=1;
$3=_st($4)._alias();
$ctx1.sendIdx["alias"]=1;
$2="return smalltalk.withContext(function(".__comma($3);
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(") {");
$ctx1.sendIdx[","]=1;
self._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
$5=self._lf();
_st(aBlock)._value();
$9=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=2;
$8=_st($9)._alias();
$ctx1.sendIdx["alias"]=2;
$7="}, function(".__comma($8);
$ctx1.sendIdx[","]=4;
$6=_st($7).__comma(") {");
$ctx1.sendIdx[","]=3;
self._nextPutAll_($6);
$ctx1.sendIdx["nextPutAll:"]=2;
$13=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=3;
$12=_st($13)._alias();
$ctx1.sendIdx["alias"]=3;
$11=_st($12).__comma(".fillBlock({");
$ctx1.sendIdx[","]=5;
$10=self._nextPutAll_($11);
$ctx1.sendIdx["nextPutAll:"]=3;
_st(_st(anIRClosure)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$14=_st(each)._asVariableName();
$ctx2.sendIdx["asVariableName"]=1;
self._nextPutAll_($14);
$ctx2.sendIdx["nextPutAll:"]=4;
self._nextPutAll_(":");
$ctx2.sendIdx["nextPutAll:"]=5;
$15=self._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=6;
return $15;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._nextPutAll_("},");
$ctx1.sendIdx["nextPutAll:"]=8;
$22=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=4;
$21=_st($22)._outerScope();
$20=_st($21)._alias();
$19=_st($20).__comma(",");
$18=_st($19).__comma(_st(_st(_st(anIRClosure)._scope())._blockIndex())._asString());
$ctx1.sendIdx[","]=7;
$17=_st($18).__comma(")})");
$ctx1.sendIdx[","]=6;
$16=self._nextPutAll_($17);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutBlockContextFor:during:",{anIRClosure:anIRClosure,aBlock:aBlock},smalltalk.JSStream)})},
args: ["anIRClosure", "aBlock"],
source: "nextPutBlockContextFor: anIRClosure during: aBlock\x0a\x09self\x0a\x09\x09nextPutAll: 'return smalltalk.withContext(function(', anIRClosure scope alias, ') {'; lf.\x0a\x09\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '}, function(', anIRClosure scope alias, ') {';\x0a\x09\x09nextPutAll: anIRClosure scope alias, '.fillBlock({'.\x0a\x09\x0a\x09anIRClosure locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')})'",
messageSends: ["nextPutAll:", ",", "alias", "scope", "lf", "value", "do:separatedBy:", "locals", "asVariableName", "outerScope", "asString", "blockIndex"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutClassRefFunction:",
category: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@stream"];
_st($1)._nextPutAll_("function $");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=2;
_st($1)._nextPutAll_("(){return smalltalk.");
$ctx1.sendIdx["nextPutAll:"]=3;
_st($1)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=4;
_st($1)._nextPutAll_("||(typeof ");
$ctx1.sendIdx["nextPutAll:"]=5;
_st($1)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=6;
_st($1)._nextPutAll_("==\x22undefined\x22?nil:");
$ctx1.sendIdx["nextPutAll:"]=7;
_st($1)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=8;
_st($1)._nextPutAll_(")}");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClassRefFunction:",{aString:aString},smalltalk.JSStream)})},
args: ["aString"],
source: "nextPutClassRefFunction: aString\x0a\x09\x22Creates an inner function $aString into method and called as `$Foo()`whenever the global is accessed.\x0a\x09This ensures that undefined global access will answer `nil`\x22\x0a\x09\x0a\x09stream\x0a\x09\x09nextPutAll: 'function $';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '(){return smalltalk.';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '||(typeof ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '==\x22undefined\x22?nil:';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: ')}';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@stream"])._nextPutAll_("(function(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPut_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$ctx1.sendIdx["nextPutAll:"]=3;
$2=_st($1)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClosureWith:arguments:",{aBlock:aBlock,anArray:anArray},smalltalk.JSStream)})},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutContextFor:during:",
category: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5,$10,$9,$8,$7,$6,$14,$13,$12,$11,$15,$16,$17;
$4=_st(aMethod)._scope();
$ctx1.sendIdx["scope"]=1;
$3=_st($4)._alias();
$ctx1.sendIdx["alias"]=1;
$2="return smalltalk.withContext(function(".__comma($3);
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(") { ");
$ctx1.sendIdx[","]=1;
self._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
$5=self._lf();
_st(aBlock)._value();
$10=_st(aMethod)._scope();
$ctx1.sendIdx["scope"]=2;
$9=_st($10)._alias();
$ctx1.sendIdx["alias"]=2;
$8="}, function(".__comma($9);
$ctx1.sendIdx[","]=5;
$7=_st($8).__comma(") {");
$ctx1.sendIdx[","]=4;
$6=_st($7).__comma(_st(_st(aMethod)._scope())._alias());
$ctx1.sendIdx[","]=3;
self._nextPutAll_($6);
$ctx1.sendIdx["nextPutAll:"]=2;
$14=_st(_st(aMethod)._selector())._asJavascript();
$ctx1.sendIdx["asJavascript"]=1;
$13=".fill(self,".__comma($14);
$12=_st($13).__comma(",{");
$ctx1.sendIdx[","]=6;
$11=self._nextPutAll_($12);
$ctx1.sendIdx["nextPutAll:"]=3;
_st(_st(aMethod)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$15=_st(each)._asVariableName();
$ctx2.sendIdx["asVariableName"]=1;
self._nextPutAll_($15);
$ctx2.sendIdx["nextPutAll:"]=4;
self._nextPutAll_(":");
$ctx2.sendIdx["nextPutAll:"]=5;
$16=self._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=6;
return $16;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._nextPutAll_("},");
$ctx1.sendIdx["nextPutAll:"]=8;
self._nextPutAll_(_st(_st(aMethod)._theClass())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=9;
$17=self._nextPutAll_(")})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutContextFor:during:",{aMethod:aMethod,aBlock:aBlock},smalltalk.JSStream)})},
args: ["aMethod", "aBlock"],
source: "nextPutContextFor: aMethod during: aBlock\x0a\x09self\x0a\x09\x09nextPutAll: 'return smalltalk.withContext(function(', aMethod scope alias, ') { '; lf.\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;\x0a\x09\x09nextPutAll: '.fill(self,', aMethod selector asJavascript, ',{'.\x0a\x0a\x09aMethod locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: aMethod theClass asJavascript;\x0a\x09\x09nextPutAll: ')})'",
messageSends: ["nextPutAll:", ",", "alias", "scope", "lf", "value", "asJavascript", "selector", "do:separatedBy:", "locals", "asVariableName", "theClass"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("fn: function(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(anArray)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPut_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$ctx1.sendIdx["nextPutAll:"]=3;
$2=_st($1)._lf();
$ctx1.sendIdx["lf"]=1;
$3=self["@stream"];
_st($3)._nextPutAll_("var self=this;");
$ctx1.sendIdx["nextPutAll:"]=4;
$4=_st($3)._lf();
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutFunctionWith:arguments:",{aBlock:aBlock,anArray:anArray},smalltalk.JSStream)})},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutIf:with:",
category: 'streaming',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@stream"])._nextPutAll_("if(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$ctx1.sendIdx["nextPutAll:"]=2;
$2=_st($1)._lf();
_st(anotherBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIf:with:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSStream)})},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutIfElse:with:with:",
category: 'streaming',
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@stream"])._nextPutAll_("if(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
$1=self["@stream"];
_st($1)._nextPutAll_("){");
$ctx1.sendIdx["nextPutAll:"]=2;
$2=_st($1)._lf();
$ctx1.sendIdx["lf"]=1;
_st(ifBlock)._value();
$ctx1.sendIdx["value"]=2;
$3=self["@stream"];
_st($3)._nextPutAll_("} else {");
$ctx1.sendIdx["nextPutAll:"]=3;
$4=_st($3)._lf();
_st(elseBlock)._value();
_st(self["@stream"])._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIfElse:with:with:",{aBlock:aBlock,ifBlock:ifBlock,elseBlock:elseBlock},smalltalk.JSStream)})},
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
category: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3,$6,$9,$8,$7,$10,$11,$12,$15,$14,$13,$16,$19,$18,$17,$20,$23,$22,$21,$24,$25,$26;
$1=self["@stream"];
_st($1)._nextPutAll_("smalltalk.method({");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._lf();
$ctx1.sendIdx["lf"]=1;
$2=$1;
$5=_st(_st(aMethod)._selector())._asJavascript();
$ctx1.sendIdx["asJavascript"]=1;
$4="selector: ".__comma($5);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(",");
$ctx1.sendIdx[","]=1;
_st($2)._nextPutAll_($3);
$ctx1.sendIdx["nextPutAll:"]=2;
_st($1)._lf();
$ctx1.sendIdx["lf"]=2;
$6=$1;
$9=_st(_st(aMethod)._source())._asJavascript();
$ctx1.sendIdx["asJavascript"]=2;
$8="source: ".__comma($9);
$ctx1.sendIdx[","]=4;
$7=_st($8).__comma(",");
$ctx1.sendIdx[","]=3;
_st($6)._nextPutAll_($7);
$ctx1.sendIdx["nextPutAll:"]=3;
$10=_st($1)._lf();
$ctx1.sendIdx["lf"]=3;
_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
$11=self["@stream"];
$12=$11;
$15=_st($String())._lf();
$ctx1.sendIdx["lf"]=4;
$14=",".__comma($15);
$ctx1.sendIdx[","]=6;
$13=_st($14).__comma("messageSends: ");
$ctx1.sendIdx[","]=5;
_st($12)._nextPutAll_($13);
$ctx1.sendIdx["nextPutAll:"]=4;
$16=$11;
$19=_st(_st(aMethod)._messageSends())._asArray();
$ctx1.sendIdx["asArray"]=1;
$18=_st($19)._asJavascript();
$ctx1.sendIdx["asJavascript"]=3;
$17=_st($18).__comma(",");
$ctx1.sendIdx[","]=7;
_st($16)._nextPutAll_($17);
$ctx1.sendIdx["nextPutAll:"]=5;
_st($11)._lf();
$ctx1.sendIdx["lf"]=5;
$20=$11;
$23=_st(_st(_st(_st(aMethod)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._asArray())._asJavascript();
$ctx1.sendIdx["asJavascript"]=4;
$22="args: ".__comma($23);
$21=_st($22).__comma(",");
$ctx1.sendIdx[","]=8;
_st($20)._nextPutAll_($21);
$ctx1.sendIdx["nextPutAll:"]=6;
_st($11)._lf();
$24=_st($11)._nextPutAll_("referencedClasses: [");
$ctx1.sendIdx["nextPutAll:"]=7;
_st(_st(aMethod)._classReferences())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(_st(each)._asJavascript());
$ctx2.sendIdx["nextPutAll:"]=8;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$25=self["@stream"];
_st($25)._nextPutAll_("]");
$ctx1.sendIdx["nextPutAll:"]=10;
$26=_st($25)._nextPutAll_("})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutMethodDeclaration:with:",{aMethod:aMethod,aBlock:aBlock},smalltalk.JSStream)})},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences\x0a\x09\x09do: [ :each | stream nextPutAll: each asJavascript ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream\x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@stream"];
_st($1)._nextPutAll_("var $early={};");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._lf();
$ctx1.sendIdx["lf"]=1;
_st($1)._nextPutAll_("try {");
$ctx1.sendIdx["nextPutAll:"]=2;
$2=_st($1)._lf();
$ctx1.sendIdx["lf"]=2;
_st(aBlock)._value();
$3=self["@stream"];
_st($3)._nextPutAll_("}");
$ctx1.sendIdx["nextPutAll:"]=3;
_st($3)._lf();
$ctx1.sendIdx["lf"]=3;
_st($3)._nextPutAll_("catch(e) {if(e===$early)return e[0]; throw e}");
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnHandlingWith:",{aBlock:aBlock},smalltalk.JSStream)})},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("throw $early=[");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnWith:",{aBlock:aBlock},smalltalk.JSStream)})},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutReturn",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("return ");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturn",{},smalltalk.JSStream)})},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutReturn();
_st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturnWith:",{aBlock:aBlock},smalltalk.JSStream)})},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutSendIndexFor:",
category: 'streaming',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._nextPutAll_(";");
$ctx1.sendIdx["nextPutAll:"]=1;
self._lf();
self._nextPutAll_(_st(_st(anIRSend)._scope())._alias());
$ctx1.sendIdx["nextPutAll:"]=2;
self._nextPutAll_(".sendIdx[");
$ctx1.sendIdx["nextPutAll:"]=3;
self._nextPutAll_(_st(_st(anIRSend)._selector())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=4;
self._nextPutAll_("]=");
$ctx1.sendIdx["nextPutAll:"]=5;
$1=self._nextPutAll_(_st(_st(anIRSend)._index())._asString());
return self}, function($ctx1) {$ctx1.fill(self,"nextPutSendIndexFor:",{anIRSend:anIRSend},smalltalk.JSStream)})},
args: ["anIRSend"],
source: "nextPutSendIndexFor: anIRSend\x0a\x09self \x0a\x09\x09nextPutAll: ';'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias;\x0a\x09\x09nextPutAll: '.sendIdx[';\x0a\x09\x09nextPutAll: anIRSend selector asJavascript;\x0a\x09\x09nextPutAll: ']=';\x0a\x09\x09nextPutAll: anIRSend index asString",
messageSends: ["nextPutAll:", "lf", "alias", "scope", "asJavascript", "selector", "asString", "index"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutSequenceWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutSequenceWith:",{aBlock:aBlock},smalltalk.JSStream)})},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream\x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream\x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutStatementWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutStatementWith:",{aBlock:aBlock},smalltalk.JSStream)})},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutVars:",
category: 'streaming',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(aCollection)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[self];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(self["@stream"])._nextPutAll_("var ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(each);
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextPutVars:",{aCollection:aCollection},smalltalk.JSStream)})},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09aCollection ifEmpty: [ ^ self ].\x0a\x09\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["ifEmpty:", "nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);


smalltalk.addMethod(
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler-IR',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anIRInstruction)._appendBlock_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToInstruction:",{anIRInstruction:anIRInstruction},smalltalk.BlockClosure)})},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a\x09anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asVariableName",
category: '*Compiler-IR',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st($Smalltalk())._current())._reservedWords())._includes_(self);
if(smalltalk.assert($2)){
$1=self.__comma("_");
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asVariableName",{},smalltalk.String)})},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk current reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", "current", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.String);

});
