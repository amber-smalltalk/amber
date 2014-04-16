define("amber_core/Compiler-IR", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Compiler-Core", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-IR');
smalltalk.packages["Compiler-IR"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('IRASTTranslator', globals.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
globals.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.";
smalltalk.addMethod(
smalltalk.method({
selector: "alias:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var variable;
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
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
}, function($ctx1) {$ctx1.fill(self,"alias:",{aNode:aNode,variable:variable},globals.IRASTTranslator)})},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isImmutable ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new\x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias);\x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["ifTrue:", "isImmutable", "visit:", "variable:", "new", "name:", ",", "nextAlias", "yourself", "add:", "sequence", "internalVariables", "method"],
referencedClasses: ["IRVariable", "AliasVar", "IRAssignment"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "aliasTemporally:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
var threshold,result;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
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
}, function($ctx1) {$ctx1.fill(self,"aliasTemporally:",{aCollection:aCollection,threshold:threshold,result:result},globals.IRASTTranslator)})},
args: ["aCollection"],
source: "aliasTemporally: aCollection\x0a\x09\x22https://github.com/NicolasPetton/amber/issues/296\x0a\x09\x0a\x09If a node is aliased, all preceding ones are aliased as well.\x0a\x09The tree is iterated twice. First we get the aliasing dependency,\x0a\x09then the aliasing itself is done\x22\x0a\x0a\x09| threshold result |\x0a\x09threshold := 0.\x0a\x09\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09each subtreeNeedsAliasing\x0a\x09\x09\x09ifTrue: [ threshold := i ] ].\x0a\x0a\x09result := OrderedCollection new.\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09result add: (i <= threshold\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ]) ].\x0a\x0a\x09^ result",
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "<=", "alias:", "visit:"],
referencedClasses: ["OrderedCollection"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;
},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
protocol: 'accessing',
fn: function (anIRMethod){
var self=this;
self["@method"]=anIRMethod;
return self},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAlias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@nextAlias"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
$1;
};
self["@nextAlias"]=_st(self["@nextAlias"]).__plus((1));
$2=_st(self["@nextAlias"])._asString();
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextAlias",{},globals.IRASTTranslator)})},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sequence"];
return $1;
},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence:",
protocol: 'accessing',
fn: function (anIRSequence){
var self=this;
self["@sequence"]=anIRSequence;
return self},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

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
globals.IRASTTranslator);

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
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var left,right,assignment;
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
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
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,left:left,right:right,assignment:assignment},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "sequence", "new", "yourself"],
referencedClasses: ["IRAssignment"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var closure;
function $IRClosure(){return globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRTempDeclaration(){return globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=_st($IRClosure())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._arguments_(_st(aNode)._parameters());
_st($1)._requiresSmalltalkContext_(_st(aNode)._requiresSmalltalkContext());
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
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,closure:closure},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "new", "parameters", "requiresSmalltalkContext:", "requiresSmalltalkContext", "scope:", "scope", "yourself", "do:", "temps", "add:", "name:", "name", "nodes", "visit:"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRBlockSequence(){return globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
function $IRBlockReturn(){return globals.IRBlockReturn||(typeof IRBlockReturn=="undefined"?nil:IRBlockReturn)}
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
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09\x09\x09\x09self sequence add: (self visitOrAlias: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode\x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visitOrAlias: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visitOrAlias: aNode nodes last) ] ]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "nodes", "do:", "allButLast", "add:", "sequence", "visitOrAlias:", "ifFalse:ifTrue:", "isReturnNode", "last", "yourself"],
referencedClasses: ["IRBlockSequence", "IRBlockReturn"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var alias,receiver;
function $VariableNode(){return globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
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
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode,alias:alias,receiver:receiver},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias receiver |\x0a\x0a\x09aNode receiver isImmutable \x0a\x09\x09ifTrue: [ receiver := aNode receiver ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09\x09receiver := VariableNode new binding: alias variable ].\x0a\x09\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: receiver ].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifTrue:ifFalse:", "isImmutable", "receiver", "alias:", "binding:", "new", "variable", "do:", "nodes", "receiver:", "allButLast", "add:", "sequence", "visit:", "last"],
referencedClasses: ["VariableNode"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var array;
function $IRDynamicArray(){return globals.IRDynamicArray||(typeof IRDynamicArray=="undefined"?nil:IRDynamicArray)}
return smalltalk.withContext(function($ctx1) { 
var $1;
array=_st($IRDynamicArray())._new();
_st(self._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(array)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | array add: each ].\x0a\x09^ array",
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"],
referencedClasses: ["IRDynamicArray"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var dictionary;
function $IRDynamicDictionary(){return globals.IRDynamicDictionary||(typeof IRDynamicDictionary=="undefined"?nil:IRDynamicDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
dictionary=_st($IRDynamicDictionary())._new();
_st(self._aliasTemporally_(_st(aNode)._nodes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,dictionary:dictionary},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | dictionary add: each ].\x0a\x09^ dictionary",
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"],
referencedClasses: ["IRDynamicDictionary"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRVerbatim(){return globals.IRVerbatim||(typeof IRVerbatim=="undefined"?nil:IRVerbatim)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRVerbatim())._new();
_st($2)._source_(_st(_st(aNode)._source())._crlfSanitized());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source crlfSanitized;\x0a\x09\x09yourself",
messageSends: ["source:", "new", "crlfSanitized", "source", "yourself"],
referencedClasses: ["IRVerbatim"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRMethod(){return globals.IRMethod||(typeof IRMethod=="undefined"?nil:IRMethod)}
function $IRTempDeclaration(){return globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
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
_st($2)._requiresSmalltalkContext_(_st(aNode)._requiresSmalltalkContext());
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
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source crlfSanitized;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09sendIndexes: aNode sendIndexes;\x0a\x09\x09superSends: aNode superSends;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "new", "crlfSanitized", "source", "theClass:", "theClass", "arguments:", "arguments", "selector:", "selector", "sendIndexes:", "sendIndexes", "superSends:", "superSends", "requiresSmalltalkContext:", "requiresSmalltalkContext", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "temps", "add:", "method", "name:", "name", "nodes", "visit:", "ifFalse:", "hasLocalReturn", "variable:", "at:", "pseudoVars"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRReturn", "IRVariable"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOrAlias:",
protocol: 'visiting',
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
}, function($ctx1) {$ctx1.fill(self,"visitOrAlias:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitOrAlias: aNode\x0a\x09^ aNode shouldBeAliased\x0a\x09\x09ifTrue: [ self alias: aNode ]\x0a\x09\x09ifFalse: [ self visit: aNode ]",
messageSends: ["ifTrue:ifFalse:", "shouldBeAliased", "alias:", "visit:"],
referencedClasses: []
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var return_;
function $IRNonLocalReturn(){return globals.IRNonLocalReturn||(typeof IRNonLocalReturn=="undefined"?nil:IRNonLocalReturn)}
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
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
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode,return_:return_},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn\x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "nonLocalReturn", "new", "scope:", "scope", "do:", "nodes", "add:", "alias:"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var send,all,receiver,arguments;
function $IRSend(){return globals.IRSend||(typeof IRSend=="undefined"?nil:IRSend)}
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
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,send:send,all:all,receiver:receiver,arguments:arguments},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send all receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send\x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x09\x0a\x09all := self aliasTemporally: { aNode receiver }, aNode arguments.\x0a\x09receiver := all first.\x0a\x09arguments := all allButFirst.\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "superSend", "classSend:", "superclass", "theClass", "aliasTemporally:", ",", "receiver", "arguments", "first", "allButFirst", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRSequence(){return globals.IRSequence||(typeof IRSequence=="undefined"?nil:IRSequence)}
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
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visitOrAlias: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ] ]]",
messageSends: ["withSequence:do:", "new", "do:", "nodes", "visitOrAlias:", "ifFalse:", "isVariable", "add:", "sequence"],
referencedClasses: ["IRSequence"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRValue(){return globals.IRValue||(typeof IRValue=="undefined"?nil:IRValue)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRValue())._new();
_st($2)._value_(_st(aNode)._value());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new\x0a\x09\x09value: aNode value;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "value", "yourself"],
referencedClasses: ["IRValue"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRVariable())._new();
_st($2)._variable_(_st(aNode)._binding());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},globals.IRASTTranslator)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new\x0a\x09\x09variable: aNode binding;\x0a\x09\x09yourself",
messageSends: ["variable:", "new", "binding", "yourself"],
referencedClasses: ["IRVariable"]
}),
globals.IRASTTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "withSequence:do:",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"withSequence:do:",{aSequence:aSequence,aBlock:aBlock,outerSequence:outerSequence},globals.IRASTTranslator)})},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
globals.IRASTTranslator);



smalltalk.addClass('IRInstruction', globals.Object, ['parent', 'instructions'], 'Compiler-IR');
globals.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInstruction_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInstruction)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'building',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anObject)._parent_(self);
$1=_st(self._instructions())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.IRInstruction)})},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAssigned",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "instructions",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@instructions"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instructions"]=_st($OrderedCollection())._new();
$1=self["@instructions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instructions",{},globals.IRInstruction)})},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosure",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethod",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isMethod\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isSend",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequence",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempDeclaration",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariable",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._parent())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},globals.IRInstruction)})},
args: [],
source: "method\x0a\x09^ self parent method",
messageSends: ["method", "parent"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

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
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@parent"]=anIRInstruction;
return self},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'building',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._remove_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.IRInstruction)})},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'building',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._instructions())._remove_(anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anIRInstruction:anIRInstruction},globals.IRInstruction)})},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
protocol: 'building',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anotherIRInstruction)._parent_(self);
$1=self._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._at_put_(_st(self._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replace:with:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRInstruction)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions\x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "instructions", "indexOf:"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceWith:",
protocol: 'building',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._parent())._replace_with_(self,anIRInstruction);
return self}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{anIRInstruction:anIRInstruction},globals.IRInstruction)})},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
globals.IRInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
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
$1=_st(node)._scope();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},globals.IRInstruction)})},
args: [],
source: "scope\x0a\x09^ self parent ifNotNil: [ :node | \x0a\x09\x09node scope ]",
messageSends: ["ifNotNil:", "parent", "scope"],
referencedClasses: []
}),
globals.IRInstruction);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._builder_(aBuilder);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder},globals.IRInstruction.klass)})},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
globals.IRInstruction.klass);


smalltalk.addClass('IRAssignment', globals.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRAssignment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
globals.IRAssignment);



smalltalk.addClass('IRDynamicArray', globals.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRDynamicArray_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRDynamicArray)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
messageSends: ["visitIRDynamicArray:"],
referencedClasses: []
}),
globals.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', globals.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRDynamicDictionary)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
messageSends: ["visitIRDynamicDictionary:"],
referencedClasses: []
}),
globals.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', globals.IRInstruction, ['scope'], 'Compiler-IR');
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
globals.IRScopedInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aScope){
var self=this;
self["@scope"]=aScope;
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
globals.IRScopedInstruction);



smalltalk.addClass('IRClosureInstruction', globals.IRScopedInstruction, ['arguments', 'requiresSmalltalkContext'], 'Compiler-IR');
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
}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.IRClosureInstruction)})},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.IRClosureInstruction);

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
globals.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"locals",{},globals.IRClosureInstruction)})},
args: [],
source: "locals\x0a\x09^ self arguments copy\x0a\x09\x09addAll: (self tempDeclarations collect: [ :each | each name ]);\x0a\x09\x09yourself",
messageSends: ["addAll:", "copy", "arguments", "collect:", "tempDeclarations", "name", "yourself"],
referencedClasses: []
}),
globals.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSmalltalkContext",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@requiresSmalltalkContext"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{},globals.IRClosureInstruction)})},
args: [],
source: "requiresSmalltalkContext\x0a\x09^ requiresSmalltalkContext ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "requiresSmalltalkContext:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@requiresSmalltalkContext"]=anObject;
return self},
args: ["anObject"],
source: "requiresSmalltalkContext: anObject\x0a\x09requiresSmalltalkContext := anObject",
messageSends: [],
referencedClasses: []
}),
globals.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.IRClosureInstruction.superclass.fn.prototype._scope_.apply(_st(self), [aScope]));
$ctx1.supercall = false;
_st(aScope)._instruction_(self);
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},globals.IRClosureInstruction)})},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
globals.IRClosureInstruction);

smalltalk.addMethod(
smalltalk.method({
selector: "tempDeclarations",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instructions())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isTempDeclaration();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tempDeclarations",{},globals.IRClosureInstruction)})},
args: [],
source: "tempDeclarations\x0a\x09^ self instructions select: [ :each |\x0a\x09\x09each isTempDeclaration ]",
messageSends: ["select:", "instructions", "isTempDeclaration"],
referencedClasses: []
}),
globals.IRClosureInstruction);



smalltalk.addClass('IRClosure', globals.IRClosureInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRClosure_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRClosure)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
globals.IRClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "isClosure",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "sequence",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instructions())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sequence",{},globals.IRClosure)})},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
globals.IRClosure);



smalltalk.addClass('IRMethod', globals.IRClosureInstruction, ['theClass', 'source', 'selector', 'classReferences', 'sendIndexes', 'superSends', 'requiresSmalltalkContext', 'internalVariables'], 'Compiler-IR');
globals.IRMethod.comment="I am a method instruction";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRMethod_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRMethod)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@internalVariables"];
if(($receiver = $2) == null || $receiver.isNil){
self["@internalVariables"]=_st($Set())._new();
$1=self["@internalVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},globals.IRMethod)})},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
globals.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethod",
protocol: 'accessing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRMethod);

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
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},globals.IRMethod)})},
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
messageSends: ["keys", "sendIndexes"],
referencedClasses: []
}),
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

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
globals.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
globals.IRMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.IRMethod);



smalltalk.addClass('IRReturn', globals.IRScopedInstruction, [], 'Compiler-IR');
globals.IRReturn.comment="I am a local return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAssigned",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isLocalReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isNonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isLocalReturn())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNonLocalReturn",{},globals.IRReturn)})},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@scope"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._parent())._scope();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},globals.IRReturn)})},
args: [],
source: "scope\x0a\x09^ scope ifNil: [ self parent scope ]",
messageSends: ["ifNil:", "scope", "parent"],
referencedClasses: []
}),
globals.IRReturn);



smalltalk.addClass('IRBlockReturn', globals.IRReturn, [], 'Compiler-IR');
globals.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRBlockReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRBlockReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
messageSends: ["visitIRBlockReturn:"],
referencedClasses: []
}),
globals.IRBlockReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRBlockReturn);



smalltalk.addClass('IRNonLocalReturn', globals.IRReturn, [], 'Compiler-IR');
globals.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JavaScript statement.\x0a\x0aSee `IRNonLocalReturnHandling` class.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRNonLocalReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
globals.IRNonLocalReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRNonLocalReturn);



smalltalk.addClass('IRTempDeclaration', globals.IRScopedInstruction, ['name'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRTempDeclaration_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRTempDeclaration)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
globals.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempDeclaration",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isTempDeclaration\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
globals.IRTempDeclaration);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
globals.IRTempDeclaration);



smalltalk.addClass('IRSend', globals.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
globals.IRSend.comment="I am a message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRSend_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRSend)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
globals.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "classSend",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classSend"];
return $1;
},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
globals.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "classSend:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@classSend"]=aClass;
return self},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
globals.IRSend);

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
globals.IRSend);

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
globals.IRSend);

smalltalk.addMethod(
smalltalk.method({
selector: "isSend",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRSend);

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
globals.IRSend);

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
globals.IRSend);



smalltalk.addClass('IRSequence', globals.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
globals.IRSequence);

smalltalk.addMethod(
smalltalk.method({
selector: "isSequence",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRSequence);



smalltalk.addClass('IRBlockSequence', globals.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRBlockSequence_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRBlockSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
globals.IRBlockSequence);



smalltalk.addClass('IRValue', globals.IRInstruction, ['value'], 'Compiler-IR');
globals.IRValue.comment="I am the simplest possible instruction. I represent a value.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRValue_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRValue)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
globals.IRValue);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.IRValue);

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
globals.IRValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
globals.IRValue);



smalltalk.addClass('IRVariable', globals.IRInstruction, ['variable'], 'Compiler-IR');
globals.IRVariable.comment="I am a variable instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRVariable_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRVariable)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
globals.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._variable())._isPseudoVar())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{},globals.IRVariable)})},
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ self variable isPseudoVar not",
messageSends: ["not", "isPseudoVar", "variable"],
referencedClasses: []
}),
globals.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "variable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variable"];
return $1;
},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
globals.IRVariable);

smalltalk.addMethod(
smalltalk.method({
selector: "variable:",
protocol: 'accessing',
fn: function (aScopeVariable){
var self=this;
self["@variable"]=aScopeVariable;
return self},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
globals.IRVariable);



smalltalk.addClass('IRVerbatim', globals.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRVerbatim_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRVerbatim)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
globals.IRVerbatim);

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
globals.IRVerbatim);

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
globals.IRVerbatim);



smalltalk.addClass('IRVisitor', globals.Object, [], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
protocol: 'visiting',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anIRInstruction)._accept_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visit:",{anIRInstruction:anIRInstruction},globals.IRVisitor)})},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRAssignment);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},globals.IRVisitor)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRBlockReturn:",
protocol: 'visiting',
fn: function (anIRBlockReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRReturn_(anIRBlockReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockReturn:",{anIRBlockReturn:anIRBlockReturn},globals.IRVisitor)})},
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRBlockSequence:",
protocol: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRSequence_(anIRBlockSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockSequence:",{anIRBlockSequence:anIRBlockSequence},globals.IRVisitor)})},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRClosure:",
protocol: 'visiting',
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},globals.IRVisitor)})},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicArray:",
protocol: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRDynamicArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},globals.IRVisitor)})},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicDictionary:",
protocol: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRDynamicDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},globals.IRVisitor)})},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedClosure:",
protocol: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRClosure_(anIRInlinedClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},globals.IRVisitor)})},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedSequence:",
protocol: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRSequence_(anIRInlinedSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},globals.IRVisitor)})},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInstruction:",
protocol: 'visiting',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anIRInstruction)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return anIRInstruction;
}, function($ctx1) {$ctx1.fill(self,"visitIRInstruction:",{anIRInstruction:anIRInstruction},globals.IRVisitor)})},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "instructions", "visit:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRMethod:",
protocol: 'visiting',
fn: function (anIRMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},globals.IRVisitor)})},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},globals.IRVisitor)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
protocol: 'visiting',
fn: function (anIRNonLocalReturnHandling){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturnHandling:",{anIRNonLocalReturnHandling:anIRNonLocalReturnHandling},globals.IRVisitor)})},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},globals.IRVisitor)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRSend);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},globals.IRVisitor)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSequence:",
protocol: 'visiting',
fn: function (anIRSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRSequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},globals.IRVisitor)})},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRTempDeclaration:",
protocol: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRTempDeclaration);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},globals.IRVisitor)})},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRValue:",
protocol: 'visiting',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},globals.IRVisitor)})},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVariable:",
protocol: 'visiting',
fn: function (anIRVariable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRVariable);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},globals.IRVisitor)})},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVerbatim:",
protocol: 'visiting',
fn: function (anIRVerbatim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._visitIRInstruction_(anIRVerbatim);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},globals.IRVisitor)})},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
globals.IRVisitor);



smalltalk.addClass('IRJSTranslator', globals.IRVisitor, ['stream', 'currentClass'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stream())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.IRJSTranslator)})},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;
},
args: [],
source: "currentClass\x0a\x09^ currentClass",
messageSends: [],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $JSStream(){return globals.JSStream||(typeof JSStream=="undefined"?nil:JSStream)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@stream"]=_st($JSStream())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.IRJSTranslator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stream"];
return $1;
},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "stream:",
protocol: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},globals.IRJSTranslator)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRClosure:",
protocol: 'visiting',
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
return ($ctx3.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._visitIRClosure_.apply(_st(self), [anIRClosure]));
$ctx3.supercall = false;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),_st(anIRClosure)._arguments());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},globals.IRJSTranslator)})},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream\x0a\x09\x09nextPutClosureWith: [\x0a\x09\x09\x09self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09self stream\x0a\x09\x09\x09\x09nextPutBlockContextFor: anIRClosure\x0a\x09\x09\x09\x09during: [ super visitIRClosure: anIRClosure ] ]\x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutBlockContextFor:during:", "visitIRClosure:", "arguments"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicArray:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},globals.IRJSTranslator)})},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRDynamicDictionary:",
protocol: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutAll_("globals.HashedCollection._newFromPairs_([");
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},globals.IRJSTranslator)})},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: 'globals.HashedCollection._newFromPairs_(['.\x0a\x09\x09anIRDynamicDictionary instructions\x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRMethod:",
protocol: 'visiting',
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
_st($9)._nextPutVars_(_st(_st(_st(anIRMethod)._internalVariables())._asSet())._collect_((function(each){
return smalltalk.withContext(function($ctx5) {
return _st(_st(each)._variable())._alias();
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,7)})})));
};
$10=_st(_st(anIRMethod)._scope())._hasNonLocalReturn();
if(smalltalk.assert($10)){
return _st(self._stream())._nextPutNonLocalReturnHandlingWith_((function(){
return smalltalk.withContext(function($ctx5) {
return ($ctx5.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]));
$ctx5.supercall = false;
$ctx5.sendIdx["visitIRMethod:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
} else {
return ($ctx4.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply(_st(self), [anIRMethod]));
$ctx4.supercall = false;
};
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),_st(anIRMethod)._arguments());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},globals.IRJSTranslator)})},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod\x0a\x09\x09with: [ self stream\x0a\x09\x09\x09nextPutFunctionWith: [\x0a\x09\x09\x09\x09self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09\x09anIRMethod classReferences do: [ :each | self stream nextPutClassRefFunction: each ].\x0a\x09\x09\x09\x09self stream nextPutContextFor: anIRMethod during: [\x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asSet collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ] ]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ] ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "stream", "nextPutFunctionWith:arguments:", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "classReferences", "nextPutClassRefFunction:", "nextPutContextFor:during:", "ifTrue:", "notEmpty", "internalVariables", "asSet", "alias", "variable", "ifTrue:ifFalse:", "hasNonLocalReturn", "scope", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "arguments"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},globals.IRJSTranslator)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "stream", "visitIRNonLocalReturn:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.IRJSTranslator.superclass.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},globals.IRJSTranslator)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "stream", "visitIRReturn:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
var sends;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
sends=_st(_st(_st(_st(anIRSend)._method())._sendIndexes())._at_(_st(anIRSend)._selector()))._size();
$1=_st(anIRSend)._classSend();
if(($receiver = $1) == null || $receiver.isNil){
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend,sends:sends},globals.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09| sends |\x0a\x09sends := (anIRSend method sendIndexes at: anIRSend selector) size.\x0a\x09\x0a\x09anIRSend classSend\x0a\x09\x09ifNil: [ self visitSend: anIRSend ]\x0a\x09\x09ifNotNil: [ self visitSuperSend: anIRSend ].\x0a\x09\x09\x0a\x09(sends > 1 and: [ anIRSend index < sends ])\x0a\x09\x09ifTrue: [ self stream nextPutSendIndexFor: anIRSend ]",
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "ifNil:ifNotNil:", "classSend", "visitSend:", "visitSuperSend:", "ifTrue:", "and:", ">", "<", "index", "nextPutSendIndexFor:", "stream"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSequence:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},globals.IRJSTranslator)})},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ] ]",
messageSends: ["nextPutSequenceWith:", "stream", "do:", "instructions", "nextPutStatementWith:", "visit:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRTempDeclaration:",
protocol: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
return self},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09\x22self stream\x0a\x09\x09nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';\x0a\x09\x09lf\x22",
messageSends: [],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRValue:",
protocol: 'visiting',
fn: function (anIRValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutAll_(_st(_st(anIRValue)._value())._asJavascript());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},globals.IRJSTranslator)})},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "stream", "asJavascript", "value"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVariable:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},globals.IRJSTranslator)})},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a\x09\x09ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]\x0a\x09\x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
messageSends: ["ifTrue:ifFalse:", "=", "name", "variable", "nextPutAll:", "stream", "alias"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRVerbatim:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},globals.IRJSTranslator)})},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "stream", "nextPutAll:", "source"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReceiver:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitReceiver:",{anIRInstruction:anIRInstruction},globals.IRJSTranslator)})},
args: ["anIRInstruction"],
source: "visitReceiver: anIRInstruction\x0a\x09anIRInstruction needsBoxingAsReceiver ifFalse: [ ^ self visit: anIRInstruction ].\x0a\x09\x0a\x09self stream nextPutAll: '_st('.\x0a\x09self visit: anIRInstruction.\x0a\x09self stream nextPutAll: ')'",
messageSends: ["ifFalse:", "needsBoxingAsReceiver", "visit:", "nextPutAll:", "stream"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSend:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitSend:",{anIRSend:anIRSend},globals.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitSend: anIRSend\x0a\x09self visitReceiver: anIRSend instructions first.\x0a\x09self stream nextPutAll: '.', anIRSend selector asSelector, '('.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ')'",
messageSends: ["visitReceiver:", "first", "instructions", "nextPutAll:", "stream", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "visit:"],
referencedClasses: []
}),
globals.IRJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSuperSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$3,$7,$8,$9,$11,$10,$12,$13,$14,$15;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
$2=$1;
$6=_st(anIRSend)._scope();
$ctx1.sendIdx["scope"]=1;
$5=_st($6)._alias();
$ctx1.sendIdx["alias"]=1;
$4="(".__comma($5);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(".supercall = true, ");
$ctx1.sendIdx[","]=1;
_st($2)._nextPutAll_($3);
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._nextPutAll_(_st(self._currentClass())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=2;
_st($1)._nextPutAll_(".superclass.fn.prototype.");
$ctx1.sendIdx["nextPutAll:"]=3;
$7=$1;
$8=_st(_st(_st(anIRSend)._selector())._asSelector()).__comma(".apply(");
$ctx1.sendIdx[","]=3;
_st($7)._nextPutAll_($8);
$ctx1.sendIdx["nextPutAll:"]=4;
$9=_st($1)._nextPutAll_("_st(");
$ctx1.sendIdx["nextPutAll:"]=5;
$11=_st(anIRSend)._instructions();
$ctx1.sendIdx["instructions"]=1;
$10=_st($11)._first();
self._visit_($10);
$ctx1.sendIdx["visit:"]=1;
$12=self._stream();
$ctx1.sendIdx["stream"]=2;
_st($12)._nextPutAll_("), [");
$ctx1.sendIdx["nextPutAll:"]=6;
_st(_st(_st(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$13=self._stream();
$ctx2.sendIdx["stream"]=3;
return _st($13)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$14=self._stream();
_st($14)._nextPutAll_("]));");
$ctx1.sendIdx["nextPutAll:"]=8;
_st($14)._lf();
$15=_st($14)._nextPutAll_(_st(_st(_st(anIRSend)._scope())._alias()).__comma(".supercall = false"));
return self}, function($ctx1) {$ctx1.fill(self,"visitSuperSend:",{anIRSend:anIRSend},globals.IRJSTranslator)})},
args: ["anIRSend"],
source: "visitSuperSend: anIRSend\x0a\x09self stream\x0a\x09\x09nextPutAll: '(', anIRSend scope alias, '.supercall = true, ';\x0a\x09\x09nextPutAll: self currentClass asJavascript;\x0a\x09\x09nextPutAll: '.superclass.fn.prototype.';\x0a\x09\x09nextPutAll: anIRSend selector asSelector, '.apply(';\x0a\x09\x09nextPutAll: '_st('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll: '), ['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream \x0a\x09\x09nextPutAll: ']));'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias, '.supercall = false'",
messageSends: ["nextPutAll:", "stream", ",", "alias", "scope", "asJavascript", "currentClass", "asSelector", "selector", "visit:", "first", "instructions", "do:separatedBy:", "allButFirst", "lf"],
referencedClasses: []
}),
globals.IRJSTranslator);



smalltalk.addClass('JSStream', globals.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@stream"])._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.JSStream)})},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.JSStream.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@stream"]=""._writeStream();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.JSStream)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._lf();
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},globals.JSStream)})},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
protocol: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},globals.JSStream)})},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
protocol: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},globals.JSStream)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAssignment",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("=");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAssignment",{},globals.JSStream)})},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutBlockContextFor:during:",
protocol: 'streaming',
fn: function (anIRClosure,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$3,$7,$11,$10,$9,$8,$15,$14,$13,$12,$16,$17,$24,$23,$22,$21,$20,$19,$18;
$1=_st(anIRClosure)._requiresSmalltalkContext();
if(! smalltalk.assert($1)){
$2=_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
return $2;
};
$6=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=1;
$5=_st($6)._alias();
$ctx1.sendIdx["alias"]=1;
$4="return smalltalk.withContext(function(".__comma($5);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(") {");
$ctx1.sendIdx[","]=1;
self._nextPutAll_($3);
$ctx1.sendIdx["nextPutAll:"]=1;
$7=self._lf();
_st(aBlock)._value();
$11=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=2;
$10=_st($11)._alias();
$ctx1.sendIdx["alias"]=2;
$9="}, function(".__comma($10);
$ctx1.sendIdx[","]=4;
$8=_st($9).__comma(") {");
$ctx1.sendIdx[","]=3;
self._nextPutAll_($8);
$ctx1.sendIdx["nextPutAll:"]=2;
$15=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=3;
$14=_st($15)._alias();
$ctx1.sendIdx["alias"]=3;
$13=_st($14).__comma(".fillBlock({");
$ctx1.sendIdx[","]=5;
$12=self._nextPutAll_($13);
$ctx1.sendIdx["nextPutAll:"]=3;
_st(_st(anIRClosure)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$16=_st(each)._asVariableName();
$ctx2.sendIdx["asVariableName"]=1;
self._nextPutAll_($16);
$ctx2.sendIdx["nextPutAll:"]=4;
self._nextPutAll_(":");
$ctx2.sendIdx["nextPutAll:"]=5;
$17=self._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=6;
return $17;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
self._nextPutAll_("},");
$ctx1.sendIdx["nextPutAll:"]=8;
$24=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=4;
$23=_st($24)._outerScope();
$22=_st($23)._alias();
$21=_st($22).__comma(",");
$20=_st($21).__comma(_st(_st(_st(anIRClosure)._scope())._blockIndex())._asString());
$ctx1.sendIdx[","]=7;
$19=_st($20).__comma(")})");
$ctx1.sendIdx[","]=6;
$18=self._nextPutAll_($19);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutBlockContextFor:during:",{anIRClosure:anIRClosure,aBlock:aBlock},globals.JSStream)})},
args: ["anIRClosure", "aBlock"],
source: "nextPutBlockContextFor: anIRClosure during: aBlock\x0a\x09anIRClosure requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09self\x0a\x09\x09nextPutAll: 'return smalltalk.withContext(function(', anIRClosure scope alias, ') {'; lf.\x0a\x09\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '}, function(', anIRClosure scope alias, ') {';\x0a\x09\x09nextPutAll: anIRClosure scope alias, '.fillBlock({'.\x0a\x09\x0a\x09anIRClosure locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')})'",
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", ",", "alias", "scope", "lf", "do:separatedBy:", "locals", "asVariableName", "outerScope", "asString", "blockIndex"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutClassRefFunction:",
protocol: 'streaming',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@stream"];
_st($1)._nextPutAll_("function $");
$ctx1.sendIdx["nextPutAll:"]=1;
_st($1)._nextPutAll_(aString);
$ctx1.sendIdx["nextPutAll:"]=2;
_st($1)._nextPutAll_("(){return globals.");
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClassRefFunction:",{aString:aString},globals.JSStream)})},
args: ["aString"],
source: "nextPutClassRefFunction: aString\x0a\x09\x22Creates an inner function $aString into method and called as `$Foo()`whenever the global is accessed.\x0a\x09This ensures that undefined global access will answer `nil`\x22\x0a\x09\x0a\x09stream\x0a\x09\x09nextPutAll: 'function $';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '(){return globals.';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '||(typeof ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '==\x22undefined\x22?nil:';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: ')}';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutClosureWith:arguments:",{aBlock:aBlock,anArray:anArray},globals.JSStream)})},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutContextFor:during:",
protocol: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$3,$7,$12,$11,$10,$9,$8,$16,$15,$14,$13,$17,$18,$19;
$1=_st(aMethod)._requiresSmalltalkContext();
if(! smalltalk.assert($1)){
$2=_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
return $2;
};
$6=_st(aMethod)._scope();
$ctx1.sendIdx["scope"]=1;
$5=_st($6)._alias();
$ctx1.sendIdx["alias"]=1;
$4="return smalltalk.withContext(function(".__comma($5);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma(") { ");
$ctx1.sendIdx[","]=1;
self._nextPutAll_($3);
$ctx1.sendIdx["nextPutAll:"]=1;
$7=self._lf();
_st(aBlock)._value();
$12=_st(aMethod)._scope();
$ctx1.sendIdx["scope"]=2;
$11=_st($12)._alias();
$ctx1.sendIdx["alias"]=2;
$10="}, function(".__comma($11);
$ctx1.sendIdx[","]=5;
$9=_st($10).__comma(") {");
$ctx1.sendIdx[","]=4;
$8=_st($9).__comma(_st(_st(aMethod)._scope())._alias());
$ctx1.sendIdx[","]=3;
self._nextPutAll_($8);
$ctx1.sendIdx["nextPutAll:"]=2;
$16=_st(_st(aMethod)._selector())._asJavascript();
$ctx1.sendIdx["asJavascript"]=1;
$15=".fill(self,".__comma($16);
$14=_st($15).__comma(",{");
$ctx1.sendIdx[","]=6;
$13=self._nextPutAll_($14);
$ctx1.sendIdx["nextPutAll:"]=3;
_st(_st(aMethod)._locals())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$17=_st(each)._asVariableName();
$ctx2.sendIdx["asVariableName"]=1;
self._nextPutAll_($17);
$ctx2.sendIdx["nextPutAll:"]=4;
self._nextPutAll_(":");
$ctx2.sendIdx["nextPutAll:"]=5;
$18=self._nextPutAll_(_st(each)._asVariableName());
$ctx2.sendIdx["nextPutAll:"]=6;
return $18;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
self._nextPutAll_("},");
$ctx1.sendIdx["nextPutAll:"]=8;
self._nextPutAll_(_st(_st(aMethod)._theClass())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=9;
$19=self._nextPutAll_(")})");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutContextFor:during:",{aMethod:aMethod,aBlock:aBlock},globals.JSStream)})},
args: ["aMethod", "aBlock"],
source: "nextPutContextFor: aMethod during: aBlock\x0a\x09aMethod requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: 'return smalltalk.withContext(function(', aMethod scope alias, ') { '; lf.\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;\x0a\x09\x09nextPutAll: '.fill(self,', aMethod selector asJavascript, ',{'.\x0a\x0a\x09aMethod locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: aMethod theClass asJavascript;\x0a\x09\x09nextPutAll: ')})'",
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", ",", "alias", "scope", "lf", "asJavascript", "selector", "do:separatedBy:", "locals", "asVariableName", "theClass"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutFunctionWith:arguments:",{aBlock:aBlock,anArray:anArray},globals.JSStream)})},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutIf:with:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIf:with:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.JSStream)})},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutIfElse:with:with:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutIfElse:with:with:",{aBlock:aBlock,ifBlock:ifBlock,elseBlock:elseBlock},globals.JSStream)})},
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
protocol: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutMethodDeclaration:with:",{aMethod:aMethod,aBlock:aBlock},globals.JSStream)})},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences\x0a\x09\x09do: [ :each | stream nextPutAll: each asJavascript ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream\x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnHandlingWith:",{aBlock:aBlock},globals.JSStream)})},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("throw $early=[");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aBlock)._value();
_st(self["@stream"])._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnWith:",{aBlock:aBlock},globals.JSStream)})},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutReturn",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_("return ");
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturn",{},globals.JSStream)})},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutReturnWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutReturn();
_st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutReturnWith:",{aBlock:aBlock},globals.JSStream)})},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutSendIndexFor:",
protocol: 'streaming',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextPutSendIndexFor:",{anIRSend:anIRSend},globals.JSStream)})},
args: ["anIRSend"],
source: "nextPutSendIndexFor: anIRSend\x0a\x09self \x0a\x09\x09nextPutAll: ';'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias;\x0a\x09\x09nextPutAll: '.sendIdx[';\x0a\x09\x09nextPutAll: anIRSend selector asJavascript;\x0a\x09\x09nextPutAll: ']=';\x0a\x09\x09nextPutAll: anIRSend index asString",
messageSends: ["nextPutAll:", "lf", "alias", "scope", "asJavascript", "selector", "asString", "index"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutSequenceWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutSequenceWith:",{aBlock:aBlock},globals.JSStream)})},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream\x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream\x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutStatementWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(aBlock)._value();
$1=self["@stream"];
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"nextPutStatementWith:",{aBlock:aBlock},globals.JSStream)})},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
globals.JSStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutVars:",
protocol: 'streaming',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(aCollection)._ifEmpty_((function(){
throw $early=[self];
}));
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
}, function($ctx1) {$ctx1.fill(self,"nextPutVars:",{aCollection:aCollection},globals.JSStream)})},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09aCollection ifEmpty: [ ^ self ].\x0a\x09\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["ifEmpty:", "nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
globals.JSStream);


smalltalk.addMethod(
smalltalk.method({
selector: "appendToInstruction:",
protocol: '*Compiler-IR',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anIRInstruction)._appendBlock_(self);
return self}, function($ctx1) {$ctx1.fill(self,"appendToInstruction:",{anIRInstruction:anIRInstruction},globals.BlockClosure)})},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a\x09anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
globals.BlockClosure);

});
