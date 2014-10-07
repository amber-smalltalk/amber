define("amber_core/Compiler-IR", ["amber/boot", "amber_core/Compiler-Core", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Compiler-IR');
$core.packages["Compiler-IR"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('IRASTTranslator', $globals.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var variable;
function $IRVariable(){return $globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return $globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
function $IRAssignment(){return $globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$10,$11,$9,$12;
$1=$recv(aNode)._isImmutable();
if($core.assert($1)){
$2=self._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return $2;
};
$3=$recv($IRVariable())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv($AliasVar())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._name_("$".__comma(self._nextAlias()));
$recv($4)._variable_($5);
$7=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
variable=$7;
$8=self._sequence();
$10=$recv($IRAssignment())._new();
$recv($10)._add_(variable);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($10)._add_(self._visit_(aNode));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$11=$recv($10)._yourself();
$9=$11;
$recv($8)._add_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._method())._internalVariables())._add_(variable);
$12=variable;
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias:",{aNode:aNode,variable:variable},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isImmutable ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new\x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias);\x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
referencedClasses: ["IRVariable", "AliasVar", "IRAssignment"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isImmutable", "visit:", "variable:", "new", "name:", ",", "nextAlias", "yourself", "add:", "sequence", "internalVariables", "method"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "aliasTemporally:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
var threshold,result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
threshold=(0);
$recv(aCollection)._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._subtreeNeedsAliasing();
if($core.assert($1)){
threshold=i;
return threshold;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
result=$recv($OrderedCollection())._new();
$recv(aCollection)._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=result;
$4=$recv(i).__lt_eq(threshold);
if($core.assert($4)){
$3=self._alias_(each);
} else {
$3=self._visit_(each);
};
return $recv($2)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$5=result;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aliasTemporally:",{aCollection:aCollection,threshold:threshold,result:result},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "aliasTemporally: aCollection\x0a\x09\x22https://github.com/NicolasPetton/amber/issues/296\x0a\x09\x0a\x09If a node is aliased, all preceding ones are aliased as well.\x0a\x09The tree is iterated twice. First we get the aliasing dependency,\x0a\x09then the aliasing itself is done\x22\x0a\x0a\x09| threshold result |\x0a\x09threshold := 0.\x0a\x09\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09each subtreeNeedsAliasing\x0a\x09\x09\x09ifTrue: [ threshold := i ] ].\x0a\x0a\x09result := OrderedCollection new.\x0a\x09aCollection withIndexDo: [ :each :i |\x0a\x09\x09result add: (i <= threshold\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ]) ].\x0a\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "<=", "alias:", "visit:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'accessing',
fn: function (anIRMethod){
var self=this;
self["@method"]=anIRMethod;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "nextAlias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@nextAlias"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
$1;
};
self["@nextAlias"]=$recv(self["@nextAlias"]).__plus((1));
$2=$recv(self["@nextAlias"])._asString();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextAlias",{},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "+", "asString"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "sequence",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sequence"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequence\x0a\x09^ sequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "sequence:",
protocol: 'accessing',
fn: function (anIRSequence){
var self=this;
self["@sequence"]=anIRSequence;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
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
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
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
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var left,right,assignment;
function $IRAssignment(){return $globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5;
right=self._visit_($recv(aNode)._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
left=self._visit_($recv(aNode)._left());
$1=self._sequence();
$3=$recv($IRAssignment())._new();
$recv($3)._add_(left);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($3)._add_(right);
$4=$recv($3)._yourself();
$2=$4;
$recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$5=left;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,left:left,right:right,assignment:assignment},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
referencedClasses: ["IRAssignment"],
//>>excludeEnd("ide");
messageSends: ["visit:", "right", "left", "add:", "sequence", "new", "yourself"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var closure;
function $IRClosure(){return $globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRTempDeclaration(){return $globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=$recv($IRClosure())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._arguments_($recv(aNode)._parameters());
$recv($1)._requiresSmalltalkContext_($recv(aNode)._requiresSmalltalkContext());
$2=$1;
$3=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$recv($2)._scope_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
closure=$4;
$6=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._temps();
$recv($5)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($IRTempDeclaration())._new();
$recv($7)._name_($recv(each)._name());
$recv($7)._scope_($recv(aNode)._scope());
$8=$recv($7)._yourself();
return $recv(closure)._add_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(closure)._add_(self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$9=closure;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,closure:closure},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
referencedClasses: ["IRClosure", "IRTempDeclaration"],
//>>excludeEnd("ide");
messageSends: ["arguments:", "new", "parameters", "requiresSmalltalkContext:", "requiresSmalltalkContext", "scope:", "scope", "yourself", "do:", "temps", "add:", "name:", "name", "nodes", "visit:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRBlockSequence(){return $globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
function $IRBlockReturn(){return $globals.IRBlockReturn||(typeof IRBlockReturn=="undefined"?nil:IRBlockReturn)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$7,$10,$9,$8,$11,$13,$14,$17,$16,$15,$18,$12,$1;
$2=$recv($IRBlockSequence())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=self._withSequence_do_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
return $recv($3)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nodes"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._allButLast();
$recv($4)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$6=self._sequence();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["sequence"]=1;
//>>excludeEnd("ctx");
$7=self._visitOrAlias_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["visitOrAlias:"]=1;
//>>excludeEnd("ctx");
return $recv($6)._add_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}));
$10=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nodes"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._isReturnNode();
if($core.assert($8)){
return $recv(self._sequence())._add_(self._visitOrAlias_($recv($recv(aNode)._nodes())._last()));
} else {
$11=self._sequence();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sequence"]=2;
//>>excludeEnd("ctx");
$13=$recv($IRBlockReturn())._new();
$14=$13;
$17=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nodes"]=4;
//>>excludeEnd("ctx");
$16=$recv($17)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$15=self._visitOrAlias_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["visitOrAlias:"]=2;
//>>excludeEnd("ctx");
$recv($14)._add_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$18=$recv($13)._yourself();
$12=$18;
return $recv($11)._add_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09\x09\x09\x09self sequence add: (self visitOrAlias: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode\x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visitOrAlias: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visitOrAlias: aNode nodes last) ] ]]",
referencedClasses: ["IRBlockSequence", "IRBlockReturn"],
//>>excludeEnd("ide");
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "nodes", "do:", "allButLast", "add:", "sequence", "visitOrAlias:", "ifFalse:ifTrue:", "isReturnNode", "last", "yourself"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var alias,receiver;
function $VariableNode(){return $globals.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$6;
$2=$recv(aNode)._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isImmutable();
if($core.assert($1)){
receiver=$recv(aNode)._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=2;
//>>excludeEnd("ctx");
receiver;
} else {
alias=self._alias_($recv(aNode)._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias:"]=1;
//>>excludeEnd("ctx");
alias;
receiver=$recv($recv($VariableNode())._new())._binding_($recv(alias)._variable());
receiver;
};
$3=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
$recv($3)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._receiver_(receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$5=$recv(aNode)._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._allButLast();
$recv($4)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._sequence())._add_(self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$6=self._alias_($recv($recv(aNode)._nodes())._last());
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode,alias:alias,receiver:receiver},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias receiver |\x0a\x0a\x09aNode receiver isImmutable \x0a\x09\x09ifTrue: [ receiver := aNode receiver ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09\x09receiver := VariableNode new binding: alias variable ].\x0a\x09\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: receiver ].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
referencedClasses: ["VariableNode"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isImmutable", "receiver", "alias:", "binding:", "new", "variable", "do:", "nodes", "receiver:", "allButLast", "add:", "sequence", "visit:", "last"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var array;
function $IRDynamicArray(){return $globals.IRDynamicArray||(typeof IRDynamicArray=="undefined"?nil:IRDynamicArray)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
array=$recv($IRDynamicArray())._new();
$recv(self._aliasTemporally_($recv(aNode)._nodes()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=array;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | array add: each ].\x0a\x09^ array",
referencedClasses: ["IRDynamicArray"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var dictionary;
function $IRDynamicDictionary(){return $globals.IRDynamicDictionary||(typeof IRDynamicDictionary=="undefined"?nil:IRDynamicDictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
dictionary=$recv($IRDynamicDictionary())._new();
$recv(self._aliasTemporally_($recv(aNode)._nodes()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(dictionary)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=dictionary;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,dictionary:dictionary},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a\x09(self aliasTemporally: aNode nodes) do: [ :each | dictionary add: each ].\x0a\x09^ dictionary",
referencedClasses: ["IRDynamicDictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "aliasTemporally:", "nodes", "add:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRVerbatim(){return $globals.IRVerbatim||(typeof IRVerbatim=="undefined"?nil:IRVerbatim)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($IRVerbatim())._new();
$recv($2)._source_($recv($recv(aNode)._source())._crlfSanitized());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source crlfSanitized;\x0a\x09\x09yourself",
referencedClasses: ["IRVerbatim"],
//>>excludeEnd("ide");
messageSends: ["source:", "new", "crlfSanitized", "source", "yourself"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRMethod(){return $globals.IRMethod||(typeof IRMethod=="undefined"?nil:IRMethod)}
function $IRTempDeclaration(){return $globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRReturn(){return $globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
function $IRVariable(){return $globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $IRVerbatim(){return $globals.IRVerbatim||(typeof IRVerbatim=="undefined"?nil:IRVerbatim)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$7,$6,$8,$10,$11,$12,$13,$9,$14,$16,$15,$17,$18,$20,$21,$23,$24,$22,$25,$19,$27,$28,$26,$29;
$2=$recv($IRMethod())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._source_($recv(self._source())._crlfSanitized());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source:"]=1;
//>>excludeEnd("ctx");
$recv($2)._theClass_(self._theClass());
$recv($2)._arguments_($recv(aNode)._arguments());
$recv($2)._selector_($recv(aNode)._selector());
$recv($2)._sendIndexes_($recv(aNode)._sendIndexes());
$recv($2)._superSends_($recv(aNode)._superSends());
$recv($2)._requiresSmalltalkContext_($recv(aNode)._requiresSmalltalkContext());
$recv($2)._classReferences_($recv(aNode)._classReferences());
$3=$2;
$4=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$recv($3)._scope_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope:"]=1;
//>>excludeEnd("ctx");
$5=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$5;
self._method_($1);
$7=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._temps();
$recv($6)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["method"]=1;
//>>excludeEnd("ctx");
$10=$recv($IRTempDeclaration())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($10)._name_($recv(each)._name());
$11=$10;
$12=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
$recv($11)._scope_($12);
$13=$recv($10)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$9=$13;
return $recv($8)._add_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["method"]=2;
//>>excludeEnd("ctx");
return $recv($14)._add_(self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$16=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=4;
//>>excludeEnd("ctx");
$15=$recv($16)._hasLocalReturn();
if(!$core.assert($15)){
$17=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=3;
//>>excludeEnd("ctx");
$18=$17;
$20=$recv($IRReturn())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$21=$20;
$23=$recv($IRVariable())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($23)._variable_($recv($recv($recv(aNode)._scope())._pseudoVars())._at_("self"));
$24=$recv($23)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$22=$24;
$recv($21)._add_($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$25=$recv($20)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
$19=$25;
$recv($18)._add_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$27=$recv($IRVerbatim())._new();
$recv($27)._source_("");
$28=$recv($27)._yourself();
$26=$recv($17)._add_($28);
$26;
};
$29=self._method();
return $29;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source crlfSanitized;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09sendIndexes: aNode sendIndexes;\x0a\x09\x09superSends: aNode superSends;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [self method\x0a\x09\x09add: (IRReturn new\x0a\x09\x09\x09add: (IRVariable new\x0a\x09\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself);\x0a\x09\x09add: (IRVerbatim new source: ''; yourself) ].\x0a\x0a\x09^ self method",
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRReturn", "IRVariable", "IRVerbatim"],
//>>excludeEnd("ide");
messageSends: ["method:", "source:", "new", "crlfSanitized", "source", "theClass:", "theClass", "arguments:", "arguments", "selector:", "selector", "sendIndexes:", "sendIndexes", "superSends:", "superSends", "requiresSmalltalkContext:", "requiresSmalltalkContext", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "temps", "add:", "method", "name:", "name", "nodes", "visit:", "ifFalse:", "hasLocalReturn", "variable:", "at:", "pseudoVars"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitOrAlias:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aNode)._shouldBeAliased();
if($core.assert($2)){
$1=self._alias_(aNode);
} else {
$1=self._visit_(aNode);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOrAlias:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitOrAlias: aNode\x0a\x09^ aNode shouldBeAliased\x0a\x09\x09ifTrue: [ self alias: aNode ]\x0a\x09\x09ifFalse: [ self visit: aNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldBeAliased", "alias:", "visit:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var return_;
function $IRNonLocalReturn(){return $globals.IRNonLocalReturn||(typeof IRNonLocalReturn=="undefined"?nil:IRNonLocalReturn)}
function $IRReturn(){return $globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aNode)._nonLocalReturn();
if($core.assert($1)){
return_=$recv($IRNonLocalReturn())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
} else {
return_=$recv($IRReturn())._new();
};
$recv(return_)._scope_($recv(aNode)._scope());
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(return_)._add_(self._alias_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$2=return_;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode,return_:return_},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn\x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
referencedClasses: ["IRNonLocalReturn", "IRReturn"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "nonLocalReturn", "new", "scope:", "scope", "do:", "nodes", "add:", "alias:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var send,all,receiver,arguments;
function $IRSend(){return $globals.IRSend||(typeof IRSend=="undefined"?nil:IRSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
send=$recv($IRSend())._new();
$1=send;
$recv($1)._selector_($recv(aNode)._selector());
$2=$recv($1)._index_($recv(aNode)._index());
$3=$recv(aNode)._superSend();
if($core.assert($3)){
$recv(send)._classSend_($recv(self._theClass())._superclass());
};
all=self._aliasTemporally_($recv([$recv(aNode)._receiver()]).__comma($recv(aNode)._arguments()));
receiver=$recv(all)._first();
arguments=$recv(all)._allButFirst();
$recv(send)._add_(receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(arguments)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(send)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$4=send;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,send:send,all:all,receiver:receiver,arguments:arguments},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send all receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send\x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x09\x0a\x09all := self aliasTemporally: { aNode receiver }, aNode arguments.\x0a\x09receiver := all first.\x0a\x09arguments := all allButFirst.\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
referencedClasses: ["IRSend"],
//>>excludeEnd("ide");
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "superSend", "classSend:", "superclass", "theClass", "aliasTemporally:", ",", "receiver", "arguments", "first", "allButFirst", "add:", "do:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRSequence(){return $globals.IRSequence||(typeof IRSequence=="undefined"?nil:IRSequence)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=self._withSequence_do_($recv($IRSequence())._new(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aNode)._nodes())._do_((function(each){
var instruction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
instruction=self._visitOrAlias_(each);
instruction;
$2=$recv(instruction)._isVariable();
if(!$core.assert($2)){
return $recv(self._sequence())._add_(instruction);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,instruction:instruction},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visitOrAlias: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ] ]]",
referencedClasses: ["IRSequence"],
//>>excludeEnd("ide");
messageSends: ["withSequence:do:", "new", "do:", "nodes", "visitOrAlias:", "ifFalse:", "isVariable", "add:", "sequence"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRValue(){return $globals.IRValue||(typeof IRValue=="undefined"?nil:IRValue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($IRValue())._new();
$recv($2)._value_($recv(aNode)._value());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new\x0a\x09\x09value: aNode value;\x0a\x09\x09yourself",
referencedClasses: ["IRValue"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "value", "yourself"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRVariable(){return $globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($IRVariable())._new();
$recv($2)._variable_($recv(aNode)._binding());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new\x0a\x09\x09variable: aNode binding;\x0a\x09\x09yourself",
referencedClasses: ["IRVariable"],
//>>excludeEnd("ide");
messageSends: ["variable:", "new", "binding", "yourself"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "withSequence:do:",
protocol: 'accessing',
fn: function (aSequence,aBlock){
var self=this;
var outerSequence;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
outerSequence=self._sequence();
self._sequence_(aSequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sequence:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
self._sequence_(outerSequence);
return aSequence;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withSequence:do:",{aSequence:aSequence,aBlock:aBlock,outerSequence:outerSequence},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sequence", "sequence:", "value"]
}),
$globals.IRASTTranslator);



$core.addClass('IRInstruction', $globals.Object, ['parent', 'instructions'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRInstruction_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'building',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(anObject)._parent_(self);
$1=$recv(self._instructions())._add_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "add:", "instructions"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "canBeAssigned",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeAssigned\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "instructions",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@instructions"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instructions"]=$recv($OrderedCollection())._new();
$1=self["@instructions"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instructions",{},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isClosure",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClosure\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLocalReturn\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isMethod",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethod\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturn\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isSend",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSend\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isSequence",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequence\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isTempDeclaration",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempDeclaration\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isVariable",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._parent())._method();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self parent method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "parent"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
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
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@parent"]=anIRInstruction;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'building',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._remove_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self parent remove: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "parent"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'building',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._instructions())._remove_(anIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anIRInstruction:anIRInstruction},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "instructions"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: 'building',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(anotherIRInstruction)._parent_(self);
$1=self._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_($recv(self._instructions())._indexOf_(anIRInstruction),anotherIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions\x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "at:put:", "instructions", "indexOf:"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "replaceWith:",
protocol: 'building',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._replace_with_(self,anIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{anIRInstruction:anIRInstruction},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "parent"]
}),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._parent();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var node;
node=$receiver;
$1=$recv(node)._scope();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope",{},$globals.IRInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ self parent ifNotNil: [ :node | \x0a\x09\x09node scope ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "parent", "scope"]
}),
$globals.IRInstruction);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBuilder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._builder_(aBuilder);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder},$globals.IRInstruction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["builder:", "new", "yourself"]
}),
$globals.IRInstruction.klass);


$core.addClass('IRAssignment', $globals.IRInstruction, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRAssignment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRAssignment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRAssignment:"]
}),
$globals.IRAssignment);



$core.addClass('IRDynamicArray', $globals.IRInstruction, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRDynamicArray_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRDynamicArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRDynamicArray:"]
}),
$globals.IRDynamicArray);



$core.addClass('IRDynamicDictionary', $globals.IRInstruction, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRDynamicDictionary_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRDynamicDictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRDynamicDictionary:"]
}),
$globals.IRDynamicDictionary);



$core.addClass('IRScopedInstruction', $globals.IRInstruction, ['scope'], 'Compiler-IR');
$core.addMethod(
$core.method({
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
$globals.IRScopedInstruction);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aScope){
var self=this;
self["@scope"]=aScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRScopedInstruction);



$core.addClass('IRClosureInstruction', $globals.IRScopedInstruction, ['arguments', 'requiresSmalltalkContext'], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
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
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.IRClosureInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
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
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "locals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(self._arguments())._copy();
$recv($2)._addAll_($recv(self._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"locals",{},$globals.IRClosureInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09^ self arguments copy\x0a\x09\x09addAll: (self tempDeclarations collect: [ :each | each name ]);\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "copy", "arguments", "collect:", "tempDeclarations", "name", "yourself"]
}),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@requiresSmalltalkContext"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{},$globals.IRClosureInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ requiresSmalltalkContext ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@requiresSmalltalkContext"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "requiresSmalltalkContext: anObject\x0a\x09requiresSmalltalkContext := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aScope){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRClosureInstruction.superclass.fn.prototype._scope_.apply($recv(self), [aScope]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aScope)._instruction_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},$globals.IRClosureInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scope:", "instruction:"]
}),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "tempDeclarations",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instructions())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isTempDeclaration();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tempDeclarations",{},$globals.IRClosureInstruction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tempDeclarations\x0a\x09^ self instructions select: [ :each |\x0a\x09\x09each isTempDeclaration ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "instructions", "isTempDeclaration"]
}),
$globals.IRClosureInstruction);



$core.addClass('IRClosure', $globals.IRClosureInstruction, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRClosure_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRClosure:"]
}),
$globals.IRClosure);

$core.addMethod(
$core.method({
selector: "isClosure",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClosure\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRClosure);

$core.addMethod(
$core.method({
selector: "sequence",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instructions())._last();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sequence",{},$globals.IRClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequence\x0a\x09^ self instructions last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "instructions"]
}),
$globals.IRClosure);



$core.addClass('IRMethod', $globals.IRClosureInstruction, ['theClass', 'source', 'selector', 'classReferences', 'sendIndexes', 'superSends', 'requiresSmalltalkContext', 'internalVariables'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRMethod.comment="I am a method instruction";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRMethod_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRMethod:"]
}),
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@internalVariables"];
if(($receiver = $2) == null || $receiver.isNil){
self["@internalVariables"]=$recv($Set())._new();
$1=self["@internalVariables"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},$globals.IRMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "isMethod",
protocol: 'accessing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethod\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._sendIndexes())._keys();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},$globals.IRMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "sendIndexes"]
}),
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
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
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRMethod);



$core.addClass('IRReturn', $globals.IRScopedInstruction, [], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRReturn.comment="I am a local return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRReturn_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRReturn:"]
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "canBeAssigned",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeAssigned\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "isBlockReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockReturn\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLocalReturn\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "isNonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isLocalReturn())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNonLocalReturn",{},$globals.IRReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isLocalReturn"]
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "isReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturn\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@scope"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(self._parent())._scope();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope",{},$globals.IRReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope ifNil: [ self parent scope ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "scope", "parent"]
}),
$globals.IRReturn);



$core.addClass('IRBlockReturn', $globals.IRReturn, [], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRBlockReturn_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRBlockReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRBlockReturn:"]
}),
$globals.IRBlockReturn);

$core.addMethod(
$core.method({
selector: "isBlockReturn",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockReturn\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRBlockReturn);



$core.addClass('IRNonLocalReturn', $globals.IRReturn, [], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JavaScript statement.\x0a\x0aSee `IRNonLocalReturnHandling` class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRNonLocalReturn_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRNonLocalReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRNonLocalReturn:"]
}),
$globals.IRNonLocalReturn);

$core.addMethod(
$core.method({
selector: "isLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLocalReturn\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRNonLocalReturn);



$core.addClass('IRTempDeclaration', $globals.IRScopedInstruction, ['name'], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRTempDeclaration_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRTempDeclaration)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRTempDeclaration:"]
}),
$globals.IRTempDeclaration);

$core.addMethod(
$core.method({
selector: "isTempDeclaration",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempDeclaration\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRTempDeclaration);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRTempDeclaration);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRTempDeclaration);



$core.addClass('IRSend', $globals.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRSend.comment="I am a message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRSend_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRSend:"]
}),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "classSend",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classSend"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classSend\x0a\x09^ classSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "classSend:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@classSend"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSend);

$core.addMethod(
$core.method({
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
$globals.IRSend);

$core.addMethod(
$core.method({
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
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "isSend",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSend\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSend);

$core.addMethod(
$core.method({
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
$globals.IRSend);

$core.addMethod(
$core.method({
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
$globals.IRSend);



$core.addClass('IRSequence', $globals.IRInstruction, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRSequence_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRSequence)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRSequence:"]
}),
$globals.IRSequence);

$core.addMethod(
$core.method({
selector: "isSequence",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequence\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSequence);



$core.addClass('IRBlockSequence', $globals.IRSequence, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRBlockSequence_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRBlockSequence)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRBlockSequence:"]
}),
$globals.IRBlockSequence);



$core.addClass('IRValue', $globals.IRInstruction, ['value'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRValue.comment="I am the simplest possible instruction. I represent a value.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRValue_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRValue:"]
}),
$globals.IRValue);

$core.addMethod(
$core.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRValue);

$core.addMethod(
$core.method({
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
$globals.IRValue);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRValue);



$core.addClass('IRVariable', $globals.IRInstruction, ['variable'], 'Compiler-IR');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRVariable.comment="I am a variable instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRVariable_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRVariable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRVariable:"]
}),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "isVariable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "needsBoxingAsReceiver",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._variable())._isPseudoVar())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{},$globals.IRVariable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "needsBoxingAsReceiver\x0a\x09^ self variable isPseudoVar not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isPseudoVar", "variable"]
}),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "variable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variable"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variable\x0a\x09^ variable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "variable:",
protocol: 'accessing',
fn: function (aScopeVariable){
var self=this;
self["@variable"]=aScopeVariable;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRVariable);



$core.addClass('IRVerbatim', $globals.IRInstruction, ['source'], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRVerbatim_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRVerbatim)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRVerbatim:"]
}),
$globals.IRVerbatim);

$core.addMethod(
$core.method({
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
$globals.IRVerbatim);

$core.addMethod(
$core.method({
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
$globals.IRVerbatim);



$core.addClass('IRVisitor', $globals.Object, [], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "visit:",
protocol: 'visiting',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anIRInstruction)._accept_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{anIRInstruction:anIRInstruction},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accept:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRAssignment);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRBlockReturn:",
protocol: 'visiting',
fn: function (anIRBlockReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRReturn_(anIRBlockReturn);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockReturn:",{anIRBlockReturn:anIRBlockReturn},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRReturn:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRBlockSequence:",
protocol: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRSequence_(anIRBlockSequence);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockSequence:",{anIRBlockSequence:anIRBlockSequence},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRSequence:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRClosure:",
protocol: 'visiting',
fn: function (anIRClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRDynamicArray:",
protocol: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRDynamicArray);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRDynamicDictionary:",
protocol: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRDynamicDictionary);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRInlinedClosure:",
protocol: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRClosure_(anIRInlinedClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRClosure:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRInlinedSequence:",
protocol: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRSequence_(anIRInlinedSequence);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRSequence:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRInstruction:",
protocol: 'visiting',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(anIRInstruction)._instructions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return anIRInstruction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInstruction:",{anIRInstruction:anIRInstruction},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "instructions", "visit:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRMethod:",
protocol: 'visiting',
fn: function (anIRMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturn);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturnHandling:",
protocol: 'visiting',
fn: function (anIRNonLocalReturnHandling){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRNonLocalReturnHandling);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturnHandling:",{anIRNonLocalReturnHandling:anIRNonLocalReturnHandling},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRReturn);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRSend);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRSequence:",
protocol: 'visiting',
fn: function (anIRSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRSequence);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRTempDeclaration:",
protocol: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRTempDeclaration);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRValue:",
protocol: 'visiting',
fn: function (anIRValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRValue);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRVariable:",
protocol: 'visiting',
fn: function (anIRVariable){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRVariable);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRVerbatim:",
protocol: 'visiting',
fn: function (anIRVerbatim){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRInstruction_(anIRVerbatim);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInstruction:"]
}),
$globals.IRVisitor);



$core.addClass('IRJSTranslator', $globals.IRVisitor, ['stream', 'currentClass'], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._stream())._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ self stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents", "stream"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $JSStream(){return $globals.JSStream||(typeof JSStream=="undefined"?nil:JSStream)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@stream"]=$recv($JSStream())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
referencedClasses: ["JSStream"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "stream",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stream"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stream\x0a\x09^ stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "stream:",
protocol: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(anIRAssignment)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._first();
self._visit_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
$recv(self._stream())._nextPutAssignment();
self._visit_($recv($recv(anIRAssignment)._instructions())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRClosure:",
protocol: 'visiting',
fn: function (anIRClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutClosureWith_arguments_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($2)._nextPutVars_($recv($recv(anIRClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
})));
return $recv(self._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRClosure_.apply($recv(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$recv(anIRClosure)._arguments());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream\x0a\x09\x09nextPutClosureWith: [\x0a\x09\x09\x09self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09self stream\x0a\x09\x09\x09\x09nextPutBlockContextFor: anIRClosure\x0a\x09\x09\x09\x09during: [ super visitIRClosure: anIRClosure ] ]\x0a\x09\x09arguments: anIRClosure arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutClosureWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutBlockContextFor:during:", "visitIRClosure:", "arguments"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRDynamicArray:",
protocol: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($recv(anIRDynamicArray)._instructions())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@stream"])._nextPutAll_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRDynamicDictionary:",
protocol: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("$globals.HashedCollection._newFromPairs_([");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($recv(anIRDynamicDictionary)._instructions())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
return $recv($2)._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self._stream())._nextPutAll_("])");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: '$globals.HashedCollection._newFromPairs_(['.\x0a\x09\x09anIRDynamicDictionary instructions\x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "instructions", "visit:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRMethod:",
protocol: 'visiting',
fn: function (anIRMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$8,$7,$9,$10;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutMethodDeclaration_with_(anIRMethod,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
return $recv($2)._nextPutFunctionWith_arguments_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["stream"]=3;
//>>excludeEnd("ctx");
$4=$recv($recv(anIRMethod)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutVars_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutVars:"]=1;
//>>excludeEnd("ctx");
$recv($recv(anIRMethod)._classReferences())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$5=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["stream"]=4;
//>>excludeEnd("ctx");
return $recv($5)._nextPutClassRefFunction_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)});
//>>excludeEnd("ctx");
}));
$6=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["stream"]=5;
//>>excludeEnd("ctx");
return $recv($6)._nextPutContextFor_during_(anIRMethod,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(anIRMethod)._internalVariables();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["internalVariables"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._notEmpty();
if($core.assert($7)){
$9=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["stream"]=6;
//>>excludeEnd("ctx");
$recv($9)._nextPutVars_($recv($recv($recv(anIRMethod)._internalVariables())._asSet())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv(each)._variable())._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,7)});
//>>excludeEnd("ctx");
})));
};
$10=$recv($recv(anIRMethod)._scope())._hasNonLocalReturn();
if($core.assert($10)){
return $recv(self._stream())._nextPutNonLocalReturnHandlingWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply($recv(self), [anIRMethod]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["visitIRMethod:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)});
//>>excludeEnd("ctx");
}));
} else {
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRMethod_.apply($recv(self), [anIRMethod]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.supercall = false;
//>>excludeEnd("ctx");;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$recv(anIRMethod)._arguments());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod\x0a\x09\x09with: [ self stream\x0a\x09\x09\x09nextPutFunctionWith: [\x0a\x09\x09\x09\x09self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09\x09anIRMethod classReferences do: [ :each | self stream nextPutClassRefFunction: each ].\x0a\x09\x09\x09\x09self stream nextPutContextFor: anIRMethod during: [\x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asSet collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ] ]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ] ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutMethodDeclaration:with:", "stream", "nextPutFunctionWith:arguments:", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "classReferences", "nextPutClassRefFunction:", "nextPutContextFor:during:", "ifTrue:", "notEmpty", "internalVariables", "asSet", "alias", "variable", "ifTrue:ifFalse:", "hasNonLocalReturn", "scope", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "arguments"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._stream())._nextPutNonLocalReturnWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRNonLocalReturn_.apply($recv(self), [anIRNonLocalReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutNonLocalReturnWith:", "stream", "visitIRNonLocalReturn:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._stream())._nextPutReturnWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRReturn_.apply($recv(self), [anIRReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutReturnWith:", "stream", "visitIRReturn:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
var sends;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
sends=$recv($recv($recv($recv(anIRSend)._method())._sendIndexes())._at_($recv(anIRSend)._selector()))._size();
$1=$recv(anIRSend)._classSend();
if(($receiver = $1) == null || $receiver.isNil){
self._visitSend_(anIRSend);
} else {
self._visitSuperSend_(anIRSend);
};
$2=$recv($recv(sends).__gt((1)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anIRSend)._index()).__lt(sends);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$recv(self._stream())._nextPutSendIndexFor_(anIRSend);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend,sends:sends},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09| sends |\x0a\x09sends := (anIRSend method sendIndexes at: anIRSend selector) size.\x0a\x09\x0a\x09anIRSend classSend\x0a\x09\x09ifNil: [ self visitSend: anIRSend ]\x0a\x09\x09ifNotNil: [ self visitSuperSend: anIRSend ].\x0a\x09\x09\x0a\x09(sends > 1 and: [ anIRSend index < sends ])\x0a\x09\x09ifTrue: [ self stream nextPutSendIndexFor: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "at:", "sendIndexes", "method", "selector", "ifNil:ifNotNil:", "classSend", "visitSend:", "visitSuperSend:", "ifTrue:", "and:", ">", "<", "index", "nextPutSendIndexFor:", "stream"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRSequence:",
protocol: 'visiting',
fn: function (anIRSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutSequenceWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anIRSequence)._instructions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutStatementWith_(self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutSequenceWith:", "stream", "do:", "instructions", "nextPutStatementWith:", "visit:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRTempDeclaration:",
protocol: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09\x22self stream\x0a\x09\x09nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';\x0a\x09\x09lf\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRValue:",
protocol: 'visiting',
fn: function (anIRValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._stream())._nextPutAll_($recv($recv(anIRValue)._value())._asJavascript());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "stream", "asJavascript", "value"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRVariable:",
protocol: 'visiting',
fn: function (anIRVariable){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=$recv(anIRVariable)._variable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["variable"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
$1=$recv($2).__eq("thisContext");
if($core.assert($1)){
$4=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($4)._nextPutAll_("$core.getThisContext()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(self._stream())._nextPutAll_($recv($recv(anIRVariable)._variable())._alias());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a\x09\x09ifTrue: [ self stream nextPutAll: '$core.getThisContext()' ]\x0a\x09\x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "name", "variable", "nextPutAll:", "stream", "alias"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRVerbatim:",
protocol: 'visiting',
fn: function (anIRVerbatim){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutStatementWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutAll_($recv(anIRVerbatim)._source());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutStatementWith:", "stream", "nextPutAll:", "source"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitReceiver:",
protocol: 'visiting',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(anIRInstruction)._needsBoxingAsReceiver();
if(!$core.assert($1)){
$2=self._visit_(anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return $2;
};
$3=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_("$recv(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._visit_(anIRInstruction);
$recv(self._stream())._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReceiver:",{anIRInstruction:anIRInstruction},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "visitReceiver: anIRInstruction\x0a\x09anIRInstruction needsBoxingAsReceiver ifFalse: [ ^ self visit: anIRInstruction ].\x0a\x09\x0a\x09self stream nextPutAll: '$recv('.\x0a\x09self visit: anIRInstruction.\x0a\x09self stream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "needsBoxingAsReceiver", "visit:", "nextPutAll:", "stream"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5;
$2=$recv(anIRSend)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._first();
self._visitReceiver_($1);
$3=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$4=$recv(".".__comma($recv($recv(anIRSend)._selector())._asJavaScriptMethodName())).__comma("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
return $recv($5)._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self._stream())._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSend:",{anIRSend:anIRSend},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitSend: anIRSend\x0a\x09self visitReceiver: anIRSend instructions first.\x0a\x09self stream nextPutAll: '.', anIRSend selector asJavaScriptMethodName, '('.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitReceiver:", "first", "instructions", "nextPutAll:", "stream", ",", "asJavaScriptMethodName", "selector", "do:separatedBy:", "allButFirst", "visit:"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitSuperSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6,$7,$8,$10,$9,$11,$12,$13,$14;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$2=$1;
$5=$recv(anIRSend)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(".supercall = true, ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv(self._currentClass())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(".superclass.fn.prototype.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$6=$1;
$7=$recv($recv($recv(anIRSend)._selector())._asJavaScriptMethodName()).__comma(".apply(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($6)._nextPutAll_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$8=$recv($1)._nextPutAll_("$recv(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$10=$recv(anIRSend)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._first();
self._visit_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
$11=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($11)._nextPutAll_("), [");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv($recv($recv(anIRSend)._instructions())._allButFirst())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=3;
//>>excludeEnd("ctx");
return $recv($12)._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$13=self._stream();
$recv($13)._nextPutAll_("]));");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
$recv($13)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$recv($13)._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
$recv($13)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=6;
//>>excludeEnd("ctx");
$recv($13)._nextPutAll_($recv($recv($recv(anIRSend)._scope())._alias()).__comma(".supercall = false;"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=13;
//>>excludeEnd("ctx");
$recv($13)._lf();
$14=$recv($13)._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSuperSend:",{anIRSend:anIRSend},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitSuperSend: anIRSend\x0a\x09self stream\x0a\x09\x09nextPutAll: '('; lf;\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias, '.supercall = true, '; lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'; lf;\x0a\x09\x09nextPutAll: self currentClass asJavascript;\x0a\x09\x09nextPutAll: '.superclass.fn.prototype.';\x0a\x09\x09nextPutAll: anIRSend selector asJavaScriptMethodName, '.apply(';\x0a\x09\x09nextPutAll: '$recv('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll: '), ['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream \x0a\x09\x09nextPutAll: ']));'; lf;\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias, '.supercall = false;'; lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "stream", "lf", ",", "alias", "scope", "asJavascript", "currentClass", "asJavaScriptMethodName", "selector", "visit:", "first", "instructions", "do:separatedBy:", "allButFirst"]
}),
$globals.IRJSTranslator);



$core.addClass('JSStream', $globals.Object, ['stream'], 'Compiler-IR');
$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@stream"])._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.JSStream.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@stream"]=""._writeStream();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "writeStream"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "lf",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09stream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'streaming',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPut_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: 'streaming',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutAssignment",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPutAll_("=");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAssignment",{},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutBlockContextFor:during:",
protocol: 'streaming',
fn: function (anIRClosure,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3,$7,$11,$10,$9,$8,$15,$14,$13,$12,$16,$17,$23,$22,$21,$20,$19,$18,$24;
$1=$recv(anIRClosure)._requiresSmalltalkContext();
if(!$core.assert($1)){
$2=$recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $2;
};
self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$6=$recv(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=1;
//>>excludeEnd("ctx");
$4="return $core.withContext(function(".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(") {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$7=self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$11=$recv(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=2;
//>>excludeEnd("ctx");
$9="}, function(".__comma($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(") {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
self._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$15=$recv(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
$14=$recv($15)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=3;
//>>excludeEnd("ctx");
$13=$recv($14).__comma(".fillBlock({");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$12=self._nextPutAll_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv($recv(anIRClosure)._locals())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$16=$recv(each)._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asVariableName"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
self._nextPutAll_(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$17=self._nextPutAll_($recv(each)._asVariableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._nextPutAll_("},");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
$23=$recv(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=4;
//>>excludeEnd("ctx");
$22=$recv($23)._outerScope();
$21=$recv($22)._alias();
$20=$recv($21).__comma(",");
$19=$recv($20).__comma($recv($recv($recv(anIRClosure)._scope())._blockIndex())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$18=$recv($19).__comma(")});");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
self._nextPutAll_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
self._lf();
$24=self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutBlockContextFor:during:",{anIRClosure:anIRClosure,aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure", "aBlock"],
source: "nextPutBlockContextFor: anIRClosure during: aBlock\x0a\x09anIRClosure requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'return $core.withContext(function(', anIRClosure scope alias, ') {';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);';\x0a\x09\x09lf.\x0a\x09\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}, function(', anIRClosure scope alias, ') {';\x0a\x09\x09nextPutAll: anIRClosure scope alias, '.fillBlock({'.\x0a\x09\x0a\x09anIRClosure locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')});';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", "lf", ",", "alias", "scope", "do:separatedBy:", "locals", "asVariableName", "outerScope", "asString", "blockIndex"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutClassRefFunction:",
protocol: 'streaming',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@stream"];
$recv($1)._nextPutAll_("function $");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("(){return $globals.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("||(typeof ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("==\x22undefined\x22?nil:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_(")}");
$2=$recv($1)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutClassRefFunction:",{aString:aString},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutClassRefFunction: aString\x0a\x09\x22Creates an inner function $aString into method and called as `$Foo()`whenever the global is accessed.\x0a\x09This ensures that undefined global access will answer `nil`\x22\x0a\x09\x0a\x09stream\x0a\x09\x09nextPutAll: 'function $';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '(){return $globals.';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '||(typeof ';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '==\x22undefined\x22?nil:';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: ')}';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutClosureWith:arguments:",
protocol: 'streaming',
fn: function (aBlock,anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(self["@stream"])._nextPutAll_("(function(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(anArray)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_($recv(each)._asVariableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPut_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=self["@stream"];
$recv($1)._nextPutAll_("){");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
$3=self["@stream"];
$recv($3)._lf();
$4=$recv($3)._nextPutAll_("})");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutClosureWith:arguments:",{aBlock:aBlock,anArray:anArray},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream lf; nextPutAll: '})'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutContextFor:during:",
protocol: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3,$7,$12,$11,$10,$9,$8,$16,$15,$14,$13,$17,$18,$19;
$1=$recv(aMethod)._requiresSmalltalkContext();
if(!$core.assert($1)){
$2=$recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $2;
};
self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$6=$recv(aMethod)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=1;
//>>excludeEnd("ctx");
$4="return $core.withContext(function(".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(") { ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$7=self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$12=$recv(aMethod)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alias"]=2;
//>>excludeEnd("ctx");
$10="}, function(".__comma($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(") {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$8=$recv($9).__comma($recv($recv(aMethod)._scope())._alias());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
self._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$16=$recv($recv(aMethod)._selector())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=1;
//>>excludeEnd("ctx");
$15=".fill(self,".__comma($16);
$14=$recv($15).__comma(",{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$13=self._nextPutAll_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv($recv(aMethod)._locals())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$17=$recv(each)._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asVariableName"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
self._nextPutAll_(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$18=self._nextPutAll_($recv(each)._asVariableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
return $18;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._nextPutAll_("},");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
self._nextPutAll_($recv($recv(aMethod)._theClass())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
self._nextPutAll_(")});");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=13;
//>>excludeEnd("ctx");
self._lf();
$19=self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutContextFor:during:",{aMethod:aMethod,aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aBlock"],
source: "nextPutContextFor: aMethod during: aBlock\x0a\x09aMethod requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'return $core.withContext(function(', aMethod scope alias, ') { ';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);';\x0a\x09\x09lf.\x0a\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;\x0a\x09\x09nextPutAll: '.fill(self,', aMethod selector asJavascript, ',{'.\x0a\x0a\x09aMethod locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: aMethod theClass asJavascript;\x0a\x09\x09nextPutAll: ')});';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", "lf", ",", "alias", "scope", "asJavascript", "selector", "do:separatedBy:", "locals", "asVariableName", "theClass"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutFunctionWith:arguments:",
protocol: 'streaming',
fn: function (aBlock,anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv(self["@stream"])._nextPutAll_("fn: function(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(anArray)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_($recv(each)._asVariableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPut_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=self["@stream"];
$recv($1)._nextPutAll_("){");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=self["@stream"];
$recv($3)._nextPutAll_("var self=this;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$4=$recv($3)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
$5=self["@stream"];
$recv($5)._lf();
$6=$recv($5)._nextPutAll_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutFunctionWith:arguments:",{aBlock:aBlock,anArray:anArray},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream lf; nextPutAll: '}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutIf:with:",
protocol: 'streaming',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@stream"])._nextPutAll_("if(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$1=self["@stream"];
$recv($1)._nextPutAll_("){");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._lf();
$recv(anotherBlock)._value();
$recv(self["@stream"])._nextPutAll_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutIf:with:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "value", "lf"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutIfElse:with:with:",
protocol: 'streaming',
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(self["@stream"])._nextPutAll_("if(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$1=self["@stream"];
$recv($1)._nextPutAll_("){");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(ifBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$3=self["@stream"];
$recv($3)._nextPutAll_("} else {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$4=$recv($3)._lf();
$recv(elseBlock)._value();
$recv(self["@stream"])._nextPutAll_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutIfElse:with:with:",{aBlock:aBlock,ifBlock:ifBlock,elseBlock:elseBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "value", "lf"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutMethodDeclaration:with:",
protocol: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6,$9,$8,$7,$10,$11,$12,$15,$14,$13,$16,$19,$18,$17,$20,$23,$22,$21,$24,$25,$26;
$1=self["@stream"];
$recv($1)._nextPutAll_("$core.method({");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2=$1;
$5=$recv($recv(aMethod)._selector())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=1;
//>>excludeEnd("ctx");
$4="selector: ".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$6=$1;
$9=$recv($recv(aMethod)._source())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=2;
//>>excludeEnd("ctx");
$8="source: ".__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($6)._nextPutAll_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$10=$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$11=self["@stream"];
$12=$11;
$15=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$14=",".__comma($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$13=$recv($14).__comma("messageSends: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv($12)._nextPutAll_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$16=$11;
$19=$recv($recv(aMethod)._messageSends())._asArray();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asArray"]=1;
//>>excludeEnd("ctx");
$18=$recv($19)._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=3;
//>>excludeEnd("ctx");
$17=$recv($18).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$recv($16)._nextPutAll_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($11)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$20=$11;
$23=$recv($recv($recv($recv(aMethod)._arguments())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asArray())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=4;
//>>excludeEnd("ctx");
$22="args: ".__comma($23);
$21=$recv($22).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$recv($20)._nextPutAll_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv($11)._lf();
$24=$recv($11)._nextPutAll_("referencedClasses: [");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv($recv(aMethod)._classReferences())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_($recv(each)._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$25=self["@stream"];
$recv($25)._nextPutAll_("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$26=$recv($25)._nextPutAll_("})");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutMethodDeclaration:with:",{aMethod:aMethod,aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: '$core.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences\x0a\x09\x09do: [ :each | stream nextPutAll: each asJavascript ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream\x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutNonLocalReturnHandlingWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self["@stream"];
$recv($1)._nextPutAll_("var $early={};");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("try {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
$3=self["@stream"];
$recv($3)._nextPutAll_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($3)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_("catch(e) {if(e===$early)return e[0]; throw e}");
$4=$recv($3)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnHandlingWith:",{aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf", "value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutNonLocalReturnWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPutAll_("throw $early=[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
$recv(self["@stream"])._nextPutAll_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnWith:",{aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutReturn",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPutAll_("return ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutReturn",{},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutReturnWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._nextPutReturn();
$recv(aBlock)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutReturnWith:",{aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutReturn", "value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutSendIndexFor:",
protocol: 'streaming',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_(";");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_($recv($recv(anIRSend)._scope())._alias());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
self._nextPutAll_(".sendIdx[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
self._nextPutAll_($recv($recv(anIRSend)._selector())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
self._nextPutAll_("]=");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
self._nextPutAll_($recv($recv(anIRSend)._index())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
self._nextPutAll_(";");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
self._lf();
$1=self._nextPutAll_("//>>excludeEnd(\x22ctx\x22)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutSendIndexFor:",{anIRSend:anIRSend},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "nextPutSendIndexFor: anIRSend\x0a\x09self \x0a\x09\x09nextPutAll: ';'; lf;\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);'; lf;\x0a\x09\x09nextPutAll: anIRSend scope alias;\x0a\x09\x09nextPutAll: '.sendIdx[';\x0a\x09\x09nextPutAll: anIRSend selector asJavascript;\x0a\x09\x09nextPutAll: ']=';\x0a\x09\x09nextPutAll: anIRSend index asString;\x0a\x09\x09nextPutAll: ';'; lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf", "alias", "scope", "asJavascript", "selector", "asString", "index"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutSequenceWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutSequenceWith:",{aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream\x0a\x09\x09nextPutAll: 'switch($core.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream\x0a\x09\x09nextPutAll: '};'; lf\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutStatementWith:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(aBlock)._value();
$1=self["@stream"];
$recv($1)._nextPutAll_(";");
$2=$recv($1)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutStatementWith:",{aBlock:aBlock},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "nextPutAll:", "lf"]
}),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutVars:",
protocol: 'streaming',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$recv(aCollection)._ifEmpty_((function(){
throw $early=[self];

}));
$recv(self["@stream"])._nextPutAll_("var ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aCollection)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=self["@stream"];
$recv($1)._nextPutAll_(";");
$2=$recv($1)._lf();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutVars:",{aCollection:aCollection},$globals.JSStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09aCollection ifEmpty: [ ^ self ].\x0a\x09\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "nextPutAll:", "do:separatedBy:", "lf"]
}),
$globals.JSStream);


$core.addMethod(
$core.method({
selector: "appendToInstruction:",
protocol: '*Compiler-IR',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anIRInstruction)._appendBlock_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToInstruction:",{anIRInstruction:anIRInstruction},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a\x09anIRInstruction appendBlock: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendBlock:"]
}),
$globals.BlockClosure);

});
