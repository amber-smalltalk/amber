define("amber_core/Compiler-Semantic", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Compiler-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-Semantic');
smalltalk.packages["Compiler-Semantic"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('LexicalScope', globals.Object, ['node', 'instruction', 'temps', 'args', 'outerScope', 'blockIndex'], 'Compiler-Semantic');
globals.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope.";
smalltalk.addMethod(
smalltalk.method({
selector: "addArg:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $ArgVar(){return globals.ArgVar||(typeof ArgVar=="undefined"?nil:ArgVar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._args();
$ctx1.sendIdx["args"]=1;
_st($1)._at_put_(aString,_st($ArgVar())._on_(aString));
_st(_st(self._args())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addArg:",{aString:aString},globals.LexicalScope)})},
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
messageSends: ["at:put:", "args", "on:", "scope:", "at:"],
referencedClasses: ["ArgVar"]
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "addTemp:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $TempVar(){return globals.TempVar||(typeof TempVar=="undefined"?nil:TempVar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._temps();
$ctx1.sendIdx["temps"]=1;
_st($1)._at_put_(aString,_st($TempVar())._on_(aString));
_st(_st(self._temps())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addTemp:",{aString:aString},globals.LexicalScope)})},
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
messageSends: ["at:put:", "temps", "on:", "scope:", "at:"],
referencedClasses: ["TempVar"]
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="$ctx".__comma(_st(self._scopeLevel())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.LexicalScope)})},
args: [],
source: "alias\x0a\x09^ '$ctx', self scopeLevel asString",
messageSends: [",", "asString", "scopeLevel"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "allVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._args())._keys();
$ctx1.sendIdx["keys"]=1;
$1=_st($2).__comma(_st(self._temps())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},globals.LexicalScope)})},
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
messageSends: [",", "keys", "args", "temps"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "args",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@args"];
if(($receiver = $2) == null || $receiver.isNil){
self["@args"]=_st($Dictionary())._new();
$1=self["@args"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"args",{},globals.LexicalScope)})},
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingFor:",
protocol: 'accessing',
fn: function (aStringOrNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=self._pseudoVars();
$3=_st(aStringOrNode)._value();
$ctx1.sendIdx["value"]=1;
$1=_st($2)._at_ifAbsent_($3,(function(){
return smalltalk.withContext(function($ctx2) {
$4=self._args();
$5=_st(aStringOrNode)._value();
$ctx2.sendIdx["value"]=2;
return _st($4)._at_ifAbsent_($5,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._temps())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return nil;
}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["at:ifAbsent:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["at:ifAbsent:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aStringOrNode:aStringOrNode},globals.LexicalScope)})},
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [\x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
messageSends: ["at:ifAbsent:", "pseudoVars", "value", "args", "temps"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "blockIndex",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@blockIndex"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockIndex",{},globals.LexicalScope)})},
args: [],
source: "blockIndex\x0a\x09^ blockIndex ifNil: [ 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "blockIndex:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@blockIndex"]=anInteger;
return self},
args: ["anInteger"],
source: "blockIndex: anInteger \x0a\x09blockIndex := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "canInlineNonLocalReturns",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._outerScope())._canInlineNonLocalReturns();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{},globals.LexicalScope)})},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
messageSends: ["and:", "isInlined", "canInlineNonLocalReturns", "outerScope"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "instruction",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instruction"];
return $1;
},
args: [],
source: "instruction\x0a\x09^ instruction",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "instruction:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@instruction"]=anIRInstruction;
return self},
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockScope",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockScope",{},globals.LexicalScope)})},
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
messageSends: ["not", "isMethodScope"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._instruction();
$ctx1.sendIdx["instruction"]=1;
$2=_st($3)._notNil();
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._instruction())._isInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},globals.LexicalScope)})},
args: [],
source: "isInlined\x0a\x09^ self instruction notNil and: [\x0a\x09\x09self instruction isInlined ]",
messageSends: ["and:", "notNil", "instruction", "isInlined"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethodScope",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isMethodScope\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupVariable:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
var lookup;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
lookup=self._bindingFor_(aNode);
$1=lookup;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._outerScope();
$ctx1.sendIdx["outerScope"]=1;
if(($receiver = $2) == null || $receiver.isNil){
lookup=$2;
} else {
lookup=_st(self._outerScope())._lookupVariable_(aNode);
};
lookup;
} else {
$1;
};
$3=lookup;
return $3;
}, function($ctx1) {$ctx1.fill(self,"lookupVariable:",{aNode:aNode,lookup:lookup},globals.LexicalScope)})},
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [\x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "outerScope", "lookupVariable:"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "methodScope",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._outerScope();
$ctx1.sendIdx["outerScope"]=1;
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
$1=_st(self._outerScope())._methodScope();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodScope",{},globals.LexicalScope)})},
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
messageSends: ["ifNotNil:", "outerScope", "methodScope"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@node"];
return $1;
},
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@node"]=aNode;
return self},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "outerScope",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@outerScope"];
return $1;
},
args: [],
source: "outerScope\x0a\x09^ outerScope",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "outerScope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@outerScope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVars",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodScope())._pseudoVars();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},globals.LexicalScope)})},
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
messageSends: ["pseudoVars", "methodScope"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "scopeLevel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$receiver;
$1=self._outerScope();
$ctx1.sendIdx["outerScope"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return (1);
} else {
$1;
};
$2=self._isInlined();
if(smalltalk.assert($2)){
$4=self._outerScope();
$ctx1.sendIdx["outerScope"]=2;
$3=_st($4)._scopeLevel();
$ctx1.sendIdx["scopeLevel"]=1;
return $3;
};
$5=_st(_st(self._outerScope())._scopeLevel()).__plus((1));
return $5;
}, function($ctx1) {$ctx1.fill(self,"scopeLevel",{},globals.LexicalScope)})},
args: [],
source: "scopeLevel\x0a\x09self outerScope ifNil: [ ^ 1 ].\x0a\x09self isInlined ifTrue: [ ^ self outerScope scopeLevel ].\x0a\x09\x0a\x09^ self outerScope scopeLevel + 1",
messageSends: ["ifNil:", "outerScope", "ifTrue:", "isInlined", "scopeLevel", "+"],
referencedClasses: []
}),
globals.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@temps"];
if(($receiver = $2) == null || $receiver.isNil){
self["@temps"]=_st($Dictionary())._new();
$1=self["@temps"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},globals.LexicalScope)})},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.LexicalScope);



smalltalk.addClass('MethodLexicalScope', globals.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
globals.MethodLexicalScope.comment="I represent a method scope.";
smalltalk.addMethod(
smalltalk.method({
selector: "addIVar:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $InstanceVar(){return globals.InstanceVar||(typeof InstanceVar=="undefined"?nil:InstanceVar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._iVars();
$ctx1.sendIdx["iVars"]=1;
_st($1)._at_put_(aString,_st($InstanceVar())._on_(aString));
_st(_st(self._iVars())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addIVar:",{aString:aString},globals.MethodLexicalScope)})},
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
messageSends: ["at:put:", "iVars", "on:", "scope:", "at:"],
referencedClasses: ["InstanceVar"]
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "addNonLocalReturn:",
protocol: 'adding',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nonLocalReturns())._add_(aScope);
return self}, function($ctx1) {$ctx1.fill(self,"addNonLocalReturn:",{aScope:aScope},globals.MethodLexicalScope)})},
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
messageSends: ["add:", "nonLocalReturns"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "allVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.MethodLexicalScope.superclass.fn.prototype._allVariableNames.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2).__comma(_st(self._iVars())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},globals.MethodLexicalScope)})},
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
messageSends: [",", "allVariableNames", "keys", "iVars"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingFor:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=($ctx1.supercall = true, globals.MethodLexicalScope.superclass.fn.prototype._bindingFor_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
if(($receiver = $2) == null || $receiver.isNil){
$1=_st(self._iVars())._at_ifAbsent_(_st(aNode)._value(),(function(){
return nil;
}));
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aNode:aNode},globals.MethodLexicalScope)})},
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
messageSends: ["ifNil:", "bindingFor:", "at:ifAbsent:", "iVars", "value"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "canInlineNonLocalReturns",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._localReturn();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLocalReturn",{},globals.MethodLexicalScope)})},
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
messageSends: ["localReturn"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "hasNonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._nonLocalReturns())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNonLocalReturn",{},globals.MethodLexicalScope)})},
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
messageSends: ["notEmpty", "nonLocalReturns"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "iVars",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@iVars"];
if(($receiver = $2) == null || $receiver.isNil){
self["@iVars"]=_st($Dictionary())._new();
$1=self["@iVars"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iVars",{},globals.MethodLexicalScope)})},
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethodScope",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isMethodScope\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "localReturn",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@localReturn"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"localReturn",{},globals.MethodLexicalScope)})},
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "localReturn:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@localReturn"]=aBoolean;
return self},
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "methodScope",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "methodScope\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "nonLocalReturns",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@nonLocalReturns"];
if(($receiver = $2) == null || $receiver.isNil){
self["@nonLocalReturns"]=_st($OrderedCollection())._new();
$1=self["@nonLocalReturns"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturns",{},globals.MethodLexicalScope)})},
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVars",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $PseudoVar(){return globals.PseudoVar||(typeof PseudoVar=="undefined"?nil:PseudoVar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
$1=self["@pseudoVars"];
if(($receiver = $1) == null || $receiver.isNil){
self["@pseudoVars"]=_st($Dictionary())._new();
self["@pseudoVars"];
_st(_st($Smalltalk())._pseudoVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st($PseudoVar())._on_(each);
_st($2)._scope_(self._methodScope());
$3=_st($2)._yourself();
return _st(self["@pseudoVars"])._at_put_(each,$3);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
} else {
$1;
};
$4=self["@pseudoVars"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},globals.MethodLexicalScope)})},
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
messageSends: ["ifNil:", "new", "do:", "pseudoVariableNames", "at:put:", "scope:", "on:", "methodScope", "yourself"],
referencedClasses: ["Dictionary", "Smalltalk", "PseudoVar"]
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "removeNonLocalReturn:",
protocol: 'adding',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"removeNonLocalReturn:",{aScope:aScope},globals.MethodLexicalScope)})},
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
messageSends: ["remove:ifAbsent:", "nonLocalReturns"],
referencedClasses: []
}),
globals.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@unknownVariables"];
if(($receiver = $2) == null || $receiver.isNil){
self["@unknownVariables"]=_st($OrderedCollection())._new();
$1=self["@unknownVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{},globals.MethodLexicalScope)})},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.MethodLexicalScope);



smalltalk.addClass('ScopeVar', globals.Object, ['scope', 'name'], 'Compiler-Semantic');
globals.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.\x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.";
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name())._asVariableName();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.ScopeVar)})},
args: [],
source: "alias\x0a\x09^ self name asVariableName",
messageSends: ["asVariableName", "name"],
referencedClasses: []
}),
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isArgVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isArgVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassRefVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isClassRefVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

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
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isInstanceVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isInstanceVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isPseudoVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isPseudoVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isTempVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnknownVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isUnknownVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.ScopeVar);

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
globals.ScopeVar);

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
globals.ScopeVar);

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
globals.ScopeVar);

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
globals.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "validateAssignment",
protocol: 'testing',
fn: function (){
var self=this;
function $InvalidAssignmentError(){return globals.InvalidAssignmentError||(typeof InvalidAssignmentError=="undefined"?nil:InvalidAssignmentError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._isArgVar())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isPseudoVar();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
$2=_st($InvalidAssignmentError())._new();
_st($2)._variableName_(self._name());
$3=_st($2)._signal();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"validateAssignment",{},globals.ScopeVar)})},
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
messageSends: ["ifTrue:", "or:", "isArgVar", "isPseudoVar", "variableName:", "new", "name", "signal"],
referencedClasses: ["InvalidAssignmentError"]
}),
globals.ScopeVar);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},globals.ScopeVar.klass)})},
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
globals.ScopeVar.klass);


smalltalk.addClass('AliasVar', globals.ScopeVar, ['node'], 'Compiler-Semantic');
globals.AliasVar.comment="I am an internally defined variable by the compiler";
smalltalk.addMethod(
smalltalk.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@node"];
return $1;
},
args: [],
source: "node\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
globals.AliasVar);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@node"]=aNode;
return self},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
globals.AliasVar);



smalltalk.addClass('ArgVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.ArgVar.comment="I am an argument of a method or block.";
smalltalk.addMethod(
smalltalk.method({
selector: "isArgVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isArgVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ArgVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ArgVar);



smalltalk.addClass('ClassRefVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.ClassRefVar.comment="I am an class reference variable";
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("$".__comma(self._name())).__comma("()");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.ClassRefVar)})},
args: [],
source: "alias\x0a\x09\x22Fixes issue #190.\x0a\x09A function is created in the method definition, answering the class or nil.\x0a\x09See JSStream >> #nextPutClassRefFunction:\x22\x0a\x09\x0a\x09^ '$', self name, '()'",
messageSends: [",", "name"],
referencedClasses: []
}),
globals.ClassRefVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassRefVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClassRefVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ClassRefVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.ClassRefVar);



smalltalk.addClass('InstanceVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.InstanceVar.comment="I am an instance variable of a method or block.";
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("self[\x22@".__comma(self._name())).__comma("\x22]");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.InstanceVar)})},
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
messageSends: [",", "name"],
referencedClasses: []
}),
globals.InstanceVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isInstanceVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInstanceVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.InstanceVar);



smalltalk.addClass('PseudoVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'";
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},globals.PseudoVar)})},
args: [],
source: "alias\x0a\x09^ self name",
messageSends: ["name"],
referencedClasses: []
}),
globals.PseudoVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.PseudoVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isPseudoVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isPseudoVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.PseudoVar);



smalltalk.addClass('TempVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.TempVar.comment="I am an temporary variable of a method or block.";
smalltalk.addMethod(
smalltalk.method({
selector: "isTempVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isTempVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.TempVar);



smalltalk.addClass('UnknownVar', globals.ScopeVar, [], 'Compiler-Semantic');
globals.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals";
smalltalk.addMethod(
smalltalk.method({
selector: "isUnknownVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isUnknownVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', globals.NodeVisitor, ['currentScope', 'blockIndex', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler-Semantic');
globals.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.";
smalltalk.addMethod(
smalltalk.method({
selector: "classReferences",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@classReferences"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classReferences"]=_st($Set())._new();
$1=self["@classReferences"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},globals.SemanticAnalyzer)})},
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "errorShadowingVariable:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $ShadowingVariableError(){return globals.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ShadowingVariableError())._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"errorShadowingVariable:",{aString:aString},globals.SemanticAnalyzer)})},
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
messageSends: ["variableName:", "new", "signal"],
referencedClasses: ["ShadowingVariableError"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "errorUnknownVariable:",
protocol: 'error handling',
fn: function (aNode){
var self=this;
var identifier;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $UnknownVariableError(){return globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
identifier=_st(aNode)._value();
$ctx1.sendIdx["value"]=1;
$1=_st(_st(_st(_st($Smalltalk())._globalJsVariables())._includes_(identifier))._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isVariableGloballyUndefined_(identifier);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
$2=_st($UnknownVariableError())._new();
$3=$2;
$4=_st(aNode)._value();
$ctx1.sendIdx["value"]=2;
_st($3)._variableName_($4);
$5=_st($2)._signal();
$5;
} else {
_st(_st(_st(self["@currentScope"])._methodScope())._unknownVariables())._add_(_st(aNode)._value());
};
return self}, function($ctx1) {$ctx1.fill(self,"errorUnknownVariable:",{aNode:aNode,identifier:identifier},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window).\x0a\x09We allow all variables listed by Smalltalk>>#globalJsVariables.\x0a\x09This list includes: `jQuery`, `window`, `document`,  `process` and `global`\x0a\x09for nodejs and browser environments.\x0a\x09\x0a\x09This is only to make sure compilation works on both browser-based and nodejs environments.\x0a\x09The ideal solution would be to use a pragma instead\x22\x0a\x0a\x09| identifier |\x0a\x09identifier := aNode value.\x0a\x09\x0a\x09((Smalltalk globalJsVariables includes: identifier) not\x0a\x09\x09and: [ self isVariableGloballyUndefined: identifier ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09\x09signal ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09currentScope methodScope unknownVariables add: aNode value ]",
messageSends: ["value", "ifTrue:ifFalse:", "and:", "not", "includes:", "globalJsVariables", "isVariableGloballyUndefined:", "variableName:", "new", "signal", "add:", "unknownVariables", "methodScope"],
referencedClasses: ["Smalltalk", "UnknownVariableError"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableGloballyUndefined:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return eval('typeof ' + aString + ' == "undefined"');
return self}, function($ctx1) {$ctx1.fill(self,"isVariableGloballyUndefined:",{aString:aString},globals.SemanticAnalyzer)})},
args: ["aString"],
source: "isVariableGloballyUndefined: aString\x0a\x09<return eval('typeof ' + aString + ' == \x22undefined\x22')>",
messageSends: [],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@messageSends"];
if(($receiver = $2) == null || $receiver.isNil){
self["@messageSends"]=_st($Dictionary())._new();
$1=self["@messageSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},globals.SemanticAnalyzer)})},
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newBlockScope",
protocol: 'factory',
fn: function (){
var self=this;
function $LexicalScope(){return globals.LexicalScope||(typeof LexicalScope=="undefined"?nil:LexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newScopeOfClass_($LexicalScope());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBlockScope",{},globals.SemanticAnalyzer)})},
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["LexicalScope"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMethodScope",
protocol: 'factory',
fn: function (){
var self=this;
function $MethodLexicalScope(){return globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newScopeOfClass_($MethodLexicalScope());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMethodScope",{},globals.SemanticAnalyzer)})},
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["MethodLexicalScope"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newScopeOfClass:",
protocol: 'factory',
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newScopeOfClass:",{aLexicalScopeClass:aLexicalScopeClass},globals.SemanticAnalyzer)})},
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new\x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
messageSends: ["outerScope:", "new", "yourself"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextBlockIndex",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@blockIndex"];
if(($receiver = $1) == null || $receiver.isNil){
self["@blockIndex"]=(0);
self["@blockIndex"];
} else {
$1;
};
self["@blockIndex"]=_st(self["@blockIndex"]).__plus((1));
$2=self["@blockIndex"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextBlockIndex",{},globals.SemanticAnalyzer)})},
args: [],
source: "nextBlockIndex\x0a\x09blockIndex ifNil: [ blockIndex := 0 ].\x0a\x09\x0a\x09blockIndex := blockIndex + 1.\x0a\x09^ blockIndex",
messageSends: ["ifNil:", "+"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "popScope",
protocol: 'scope',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@currentScope"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self["@currentScope"]=_st(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self}, function($ctx1) {$ctx1.fill(self,"popScope",{},globals.SemanticAnalyzer)})},
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
messageSends: ["ifNotNil:", "outerScope"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "pushScope:",
protocol: 'scope',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"pushScope:",{aScope:aScope},globals.SemanticAnalyzer)})},
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
messageSends: ["outerScope:"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@superSends"];
if(($receiver = $2) == null || $receiver.isNil){
self["@superSends"]=_st($Dictionary())._new();
$1=self["@superSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{},globals.SemanticAnalyzer)})},
args: [],
source: "superSends\x0a\x09^ superSends ifNil: [ superSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.SemanticAnalyzer);

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
globals.SemanticAnalyzer);

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
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "validateVariableScope:",
protocol: 'scope',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._errorShadowingVariable_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"validateVariableScope:",{aString:aString},globals.SemanticAnalyzer)})},
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
messageSends: ["ifNotNil:", "lookupVariable:", "errorShadowingVariable:"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
_st(_st(aNode)._left())._beAssigned();
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
messageSends: ["visitAssignmentNode:", "beAssigned", "left"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._pushScope_(self._newBlockScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(self["@currentScope"])._blockIndex_(self._nextBlockIndex());
_st(_st(aNode)._parameters())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
self._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09currentScope blockIndex: self nextBlockIndex.\x0a\x0a\x09aNode parameters do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "blockIndex:", "nextBlockIndex", "do:", "parameters", "validateVariableScope:", "addArg:", "visitBlockNode:", "popScope"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitCascadeNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
$3=_st(aNode)._nodes();
$ctx1.sendIdx["nodes"]=1;
$2=_st($3)._first();
$1=_st($2)._superSend();
if(smalltalk.assert($1)){
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._superSend_(true);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09super visitCascadeNode: aNode.\x0a\x09aNode nodes first superSend ifTrue: [\x0a\x09\x09aNode nodes do: [ :each | each superSend: true ] ]",
messageSends: ["visitCascadeNode:", "ifTrue:", "superSend", "first", "nodes", "do:", "superSend:"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._pushScope_(self._newMethodScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(self._theClass())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@currentScope"])._addIVar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(aNode)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitMethodNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
_st(aNode)._classReferences_(self._classReferences());
_st(aNode)._sendIndexes_(self._messageSends());
$1=_st(aNode)._superSends_(_st(self._superSends())._keys());
self._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [ :each |\x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode\x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09sendIndexes: self messageSends;\x0a\x09\x09superSends: self superSends keys.\x0a\x09self popScope",
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "allInstanceVariableNames", "theClass", "addIVar:", "arguments", "validateVariableScope:", "addArg:", "visitMethodNode:", "classReferences:", "classReferences", "sendIndexes:", "messageSends", "superSends:", "keys", "superSends", "popScope"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aNode)._scope_(self["@currentScope"]);
$1=_st(self["@currentScope"])._isMethodScope();
if(smalltalk.assert($1)){
_st(self["@currentScope"])._localReturn_(true);
} else {
_st(_st(self["@currentScope"])._methodScope())._addNonLocalReturn_(self["@currentScope"]);
};
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitReturnNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
messageSends: ["scope:", "ifTrue:ifFalse:", "isMethodScope", "localReturn:", "addNonLocalReturn:", "methodScope", "visitReturnNode:"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
function $IRSendInliner(){return globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$5,$6,$8,$9,$7,$11,$12,$10,$13,$14,$15,$17,$18,$16,$receiver;
$3=_st(aNode)._receiver();
$ctx1.sendIdx["receiver"]=1;
$2=_st($3)._value();
$1=_st($2).__eq("super");
if(smalltalk.assert($1)){
_st(aNode)._superSend_(true);
$4=_st(aNode)._receiver();
$ctx1.sendIdx["receiver"]=2;
_st($4)._value_("self");
$5=self._superSends();
$ctx1.sendIdx["superSends"]=1;
$6=_st(aNode)._selector();
$ctx1.sendIdx["selector"]=1;
_st($5)._at_ifAbsentPut_($6,(function(){
return smalltalk.withContext(function($ctx2) {
return _st($Set())._new();
$ctx2.sendIdx["new"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["at:ifAbsentPut:"]=1;
$8=self._superSends();
$9=_st(aNode)._selector();
$ctx1.sendIdx["selector"]=2;
$7=_st($8)._at_($9);
$ctx1.sendIdx["at:"]=1;
_st($7)._add_(aNode);
$ctx1.sendIdx["add:"]=1;
} else {
$11=_st($IRSendInliner())._inlinedSelectors();
$12=_st(aNode)._selector();
$ctx1.sendIdx["selector"]=3;
$10=_st($11)._includes_($12);
if(smalltalk.assert($10)){
_st(aNode)._shouldBeInlined_(true);
$13=_st(aNode)._receiver();
if(($receiver = $13) == null || $receiver.isNil){
$13;
} else {
var receiver;
receiver=$receiver;
_st(receiver)._shouldBeAliased_(true);
};
};
};
$14=self._messageSends();
$ctx1.sendIdx["messageSends"]=1;
$15=_st(aNode)._selector();
$ctx1.sendIdx["selector"]=4;
_st($14)._at_ifAbsentPut_($15,(function(){
return smalltalk.withContext(function($ctx2) {
return _st($Set())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$17=self._messageSends();
$ctx1.sendIdx["messageSends"]=2;
$18=_st(aNode)._selector();
$ctx1.sendIdx["selector"]=5;
$16=_st($17)._at_($18);
$ctx1.sendIdx["at:"]=2;
_st($16)._add_(aNode);
_st(aNode)._index_(_st(_st(self._messageSends())._at_(_st(aNode)._selector()))._size());
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super'\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aNode superSend: true.\x0a\x09\x09\x09aNode receiver value: 'self'.\x0a\x09\x09\x09self superSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09\x09\x09(self superSends at: aNode selector) add: aNode ]\x0a\x09\x09\x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver ifNotNil: [ :receiver |\x0a\x09\x09\x09\x09receiver shouldBeAliased: true ] ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
messageSends: ["ifTrue:ifFalse:", "=", "value", "receiver", "superSend:", "value:", "at:ifAbsentPut:", "superSends", "selector", "new", "add:", "at:", "ifTrue:", "includes:", "inlinedSelectors", "shouldBeInlined:", "ifNotNil:", "shouldBeAliased:", "messageSends", "index:", "size", "visitSendNode:"],
referencedClasses: ["Set", "IRSendInliner"]
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
($ctx1.supercall = true, globals.SemanticAnalyzer.superclass.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
messageSends: ["do:", "temps", "validateVariableScope:", "addTemp:", "visitSequenceNode:"],
referencedClasses: []
}),
globals.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var binding;
function $ClassRefVar(){return globals.ClassRefVar||(typeof ClassRefVar=="undefined"?nil:ClassRefVar)}
function $UnknownVar(){return globals.UnknownVar||(typeof UnknownVar=="undefined"?nil:UnknownVar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$7,$8,$9,$10,$11,$receiver;
binding=_st(self["@currentScope"])._lookupVariable_(aNode);
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
$3=_st(aNode)._value();
$ctx1.sendIdx["value"]=1;
$2=_st($3)._isCapitalized();
if(smalltalk.assert($2)){
$4=_st($ClassRefVar())._new();
$ctx1.sendIdx["new"]=1;
$5=$4;
$6=_st(aNode)._value();
$ctx1.sendIdx["value"]=2;
_st($5)._name_($6);
$ctx1.sendIdx["name:"]=1;
$7=_st($4)._yourself();
$ctx1.sendIdx["yourself"]=1;
binding=$7;
binding;
$8=self._classReferences();
$9=_st(aNode)._value();
$ctx1.sendIdx["value"]=3;
_st($8)._add_($9);
} else {
self._errorUnknownVariable_(aNode);
$10=_st($UnknownVar())._new();
_st($10)._name_(_st(aNode)._value());
$11=_st($10)._yourself();
binding=$11;
binding;
};
} else {
$1;
};
_st(aNode)._binding_(binding);
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode,binding:binding},globals.SemanticAnalyzer)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error.\x22\x0a\x0a\x09| binding |\x0a\x09binding := currentScope lookupVariable: aNode.\x0a\x09\x0a\x09binding ifNil: [\x0a\x09\x09aNode value isCapitalized\x0a\x09\x09\x09ifTrue: [ \x22Capital letter variables might be globals.\x22\x0a\x09\x09\x09\x09binding := ClassRefVar new name: aNode value; yourself.\x0a\x09\x09\x09\x09self classReferences add: aNode value]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09\x09\x09binding := UnknownVar new name: aNode value; yourself ] ].\x0a\x09\x09\x0a\x09aNode binding: binding.",
messageSends: ["lookupVariable:", "ifNil:", "ifTrue:ifFalse:", "isCapitalized", "value", "name:", "new", "yourself", "add:", "classReferences", "errorUnknownVariable:", "binding:"],
referencedClasses: ["ClassRefVar", "UnknownVar"]
}),
globals.SemanticAnalyzer);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass},globals.SemanticAnalyzer.klass)})},
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
globals.SemanticAnalyzer.klass);

});
