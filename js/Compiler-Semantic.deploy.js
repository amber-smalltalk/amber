smalltalk.addPackage('Compiler-Semantic');
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "addArg:",
fn: function (aString){
var self=this;
function $ArgVar(){return smalltalk.ArgVar||(typeof ArgVar=="undefined"?nil:ArgVar)}
return smalltalk.withContext(function($ctx1) { 
_st(self._args())._at_put_(aString,_st($ArgVar())._on_(aString));
_st(_st(self._args())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addArg:",{aString:aString},smalltalk.LexicalScope)})},
messageSends: ["at:put:", "on:", "args", "scope:", "at:"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "addTemp:",
fn: function (aString){
var self=this;
function $TempVar(){return smalltalk.TempVar||(typeof TempVar=="undefined"?nil:TempVar)}
return smalltalk.withContext(function($ctx1) { 
_st(self._temps())._at_put_(aString,_st($TempVar())._on_(aString));
_st(_st(self._temps())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addTemp:",{aString:aString},smalltalk.LexicalScope)})},
messageSends: ["at:put:", "on:", "temps", "scope:", "at:"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="$ctx".__comma(_st(self._scopeLevel())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.LexicalScope)})},
messageSends: [",", "asString", "scopeLevel"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._args())._keys()).__comma(_st(self._temps())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},smalltalk.LexicalScope)})},
messageSends: [",", "keys", "temps", "args"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "args",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@args"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@args"]=_st($Dictionary())._new();
$1=self["@args"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"args",{},smalltalk.LexicalScope)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingFor:",
fn: function (aStringOrNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._pseudoVars())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._args())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._temps())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx4) {
return nil;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aStringOrNode:aStringOrNode},smalltalk.LexicalScope)})},
messageSends: ["at:ifAbsent:", "value", "temps", "args", "pseudoVars"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._outerScope())._canInlineNonLocalReturns();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{},smalltalk.LexicalScope)})},
messageSends: ["and:", "canInlineNonLocalReturns", "outerScope", "isInlined"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "instruction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@instruction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"instruction",{},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "instruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instruction"]=anIRInstruction;
return self}, function($ctx1) {$ctx1.fill(self,"instruction:",{anIRInstruction:anIRInstruction},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockScope",{},smalltalk.LexicalScope)})},
messageSends: ["not", "isMethodScope"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._instruction())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._instruction())._isInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.LexicalScope)})},
messageSends: ["and:", "isInlined", "instruction", "notNil"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMethodScope",{},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupVariable:",
fn: function (aNode){
var self=this;
var lookup;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lookup=self._bindingFor_(aNode);
$1=lookup;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._outerScope();
if(($receiver = $2) == nil || $receiver == undefined){
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
}, function($ctx1) {$ctx1.fill(self,"lookupVariable:",{aNode:aNode,lookup:lookup},smalltalk.LexicalScope)})},
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "lookupVariable:", "outerScope"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "methodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._outerScope();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(self._outerScope())._methodScope();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodScope",{},smalltalk.LexicalScope)})},
messageSends: ["ifNotNil:", "methodScope", "outerScope"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "outerScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@outerScope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerScope",{},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "outerScope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerScope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"outerScope:",{aLexicalScope:aLexicalScope},smalltalk.LexicalScope)})},
messageSends: []}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodScope())._pseudoVars();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},smalltalk.LexicalScope)})},
messageSends: ["pseudoVars", "methodScope"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "scopeLevel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._outerScope();
if(($receiver = $1) == nil || $receiver == undefined){
return (1);
} else {
$1;
};
$2=self._isInlined();
if(smalltalk.assert($2)){
$3=_st(self._outerScope())._scopeLevel();
return $3;
};
$4=_st(_st(self._outerScope())._scopeLevel()).__plus((1));
return $4;
}, function($ctx1) {$ctx1.fill(self,"scopeLevel",{},smalltalk.LexicalScope)})},
messageSends: ["ifNil:", "outerScope", "ifTrue:", "scopeLevel", "isInlined", "+"]}),
smalltalk.LexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@temps"]=_st($Dictionary())._new();
$1=self["@temps"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.LexicalScope)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "addIVar:",
fn: function (aString){
var self=this;
function $InstanceVar(){return smalltalk.InstanceVar||(typeof InstanceVar=="undefined"?nil:InstanceVar)}
return smalltalk.withContext(function($ctx1) { 
_st(self._iVars())._at_put_(aString,_st($InstanceVar())._on_(aString));
_st(_st(self._iVars())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addIVar:",{aString:aString},smalltalk.MethodLexicalScope)})},
messageSends: ["at:put:", "on:", "iVars", "scope:", "at:"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "addNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nonLocalReturns())._add_(aScope);
return self}, function($ctx1) {$ctx1.fill(self,"addNonLocalReturn:",{aScope:aScope},smalltalk.MethodLexicalScope)})},
messageSends: ["add:", "nonLocalReturns"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.MethodLexicalScope.superclass.fn.prototype._allVariableNames.apply(_st(self), [])).__comma(_st(self._iVars())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},smalltalk.MethodLexicalScope)})},
messageSends: [",", "keys", "iVars", "allVariableNames"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=smalltalk.MethodLexicalScope.superclass.fn.prototype._bindingFor_.apply(_st(self), [aNode]);
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._iVars())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aNode:aNode},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:", "at:ifAbsent:", "value", "iVars", "bindingFor:"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{},smalltalk.MethodLexicalScope)})},
messageSends: []}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._localReturn();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLocalReturn",{},smalltalk.MethodLexicalScope)})},
messageSends: ["localReturn"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "hasNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._nonLocalReturns())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNonLocalReturn",{},smalltalk.MethodLexicalScope)})},
messageSends: ["notEmpty", "nonLocalReturns"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "iVars",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@iVars"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@iVars"]=_st($Dictionary())._new();
$1=self["@iVars"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iVars",{},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMethodScope",{},smalltalk.MethodLexicalScope)})},
messageSends: []}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "localReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@localReturn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"localReturn",{},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "localReturn:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@localReturn"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"localReturn:",{aBoolean:aBoolean},smalltalk.MethodLexicalScope)})},
messageSends: []}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "methodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodScope",{},smalltalk.MethodLexicalScope)})},
messageSends: []}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "nonLocalReturns",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@nonLocalReturns"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nonLocalReturns"]=_st($OrderedCollection())._new();
$1=self["@nonLocalReturns"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturns",{},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $PseudoVar(){return smalltalk.PseudoVar||(typeof PseudoVar=="undefined"?nil:PseudoVar)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@pseudoVars"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@pseudoVars"]=_st($Dictionary())._new();
self["@pseudoVars"];
_st(_st(_st($Smalltalk())._current())._pseudoVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st($PseudoVar())._on_(each);
_st($2)._scope_(self._methodScope());
$3=_st($2)._yourself();
return _st(self["@pseudoVars"])._at_put_(each,$3);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
} else {
$1;
};
$4=self["@pseudoVars"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:", "new", "do:", "at:put:", "scope:", "methodScope", "on:", "yourself", "pseudoVariableNames", "current"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "removeNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeNonLocalReturn:",{aScope:aScope},smalltalk.MethodLexicalScope)})},
messageSends: ["remove:ifAbsent:", "nonLocalReturns"]}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@unknownVariables"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@unknownVariables"]=_st($OrderedCollection())._new();
$1=self["@unknownVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{},smalltalk.MethodLexicalScope)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name())._asVariableName();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.ScopeVar)})},
messageSends: ["asVariableName", "name"]}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isArgVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isClassRefVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isInstanceVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPseudoVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isTempVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isUnknownVar",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope},smalltalk.ScopeVar)})},
messageSends: []}),
smalltalk.ScopeVar);

smalltalk.addMethod(
smalltalk.method({
selector: "validateAssignment",
fn: function (){
var self=this;
function $InvalidAssignmentError(){return smalltalk.InvalidAssignmentError||(typeof InvalidAssignmentError=="undefined"?nil:InvalidAssignmentError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._isArgVar())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isPseudoVar();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=_st($InvalidAssignmentError())._new();
_st($2)._variableName_(self._name());
$3=_st($2)._signal();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"validateAssignment",{},smalltalk.ScopeVar)})},
messageSends: ["ifTrue:", "variableName:", "name", "new", "signal", "or:", "isPseudoVar", "isArgVar"]}),
smalltalk.ScopeVar);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},smalltalk.ScopeVar.klass)})},
messageSends: ["name:", "new", "yourself"]}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{},smalltalk.AliasVar)})},
messageSends: []}),
smalltalk.AliasVar);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode},smalltalk.AliasVar)})},
messageSends: []}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isArgVar",{},smalltalk.ArgVar)})},
messageSends: []}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("$".__comma(self._name())).__comma("()");
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.ClassRefVar)})},
messageSends: [",", "name"]}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isClassRefVar",{},smalltalk.ClassRefVar)})},
messageSends: []}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("self[\x22@".__comma(self._name())).__comma("\x22]");
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.InstanceVar)})},
messageSends: [",", "name"]}),
smalltalk.InstanceVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInstanceVar",{},smalltalk.InstanceVar)})},
messageSends: []}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{},smalltalk.PseudoVar)})},
messageSends: ["name"]}),
smalltalk.PseudoVar);

smalltalk.addMethod(
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPseudoVar",{},smalltalk.PseudoVar)})},
messageSends: []}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isTempVar",{},smalltalk.TempVar)})},
messageSends: []}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isUnknownVar",{},smalltalk.UnknownVar)})},
messageSends: []}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler-Semantic');
smalltalk.addMethod(
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classReferences"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classReferences"]=_st($Set())._new();
$1=self["@classReferences"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "errorShadowingVariable:",
fn: function (aString){
var self=this;
function $ShadowingVariableError(){return smalltalk.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ShadowingVariableError())._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"errorShadowingVariable:",{aString:aString},smalltalk.SemanticAnalyzer)})},
messageSends: ["variableName:", "new", "signal"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "errorUnknownVariable:",
fn: function (aNode){
var self=this;
var identifier;
function $UnknownVariableError(){return smalltalk.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
identifier=_st(aNode)._value();
$1=_st(_st(_st(_st(_st($Smalltalk())._current())._globalJsVariables())._includes_(identifier))._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isVariableGloballyUndefined_(identifier);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=_st($UnknownVariableError())._new();
_st($2)._variableName_(_st(aNode)._value());
$3=_st($2)._signal();
$3;
} else {
_st(_st(_st(self["@currentScope"])._methodScope())._unknownVariables())._add_(_st(aNode)._value());
};
return self}, function($ctx1) {$ctx1.fill(self,"errorUnknownVariable:",{aNode:aNode,identifier:identifier},smalltalk.SemanticAnalyzer)})},
messageSends: ["value", "ifTrue:ifFalse:", "variableName:", "new", "signal", "add:", "unknownVariables", "methodScope", "and:", "isVariableGloballyUndefined:", "not", "includes:", "globalJsVariables", "current"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "isVariableGloballyUndefined:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return eval('typeof ' + aString + ' == "undefined"');
return self}, function($ctx1) {$ctx1.fill(self,"isVariableGloballyUndefined:",{aString:aString},smalltalk.SemanticAnalyzer)})},
messageSends: []}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@messageSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@messageSends"]=_st($Dictionary())._new();
$1=self["@messageSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newBlockScope",
fn: function (){
var self=this;
function $LexicalScope(){return smalltalk.LexicalScope||(typeof LexicalScope=="undefined"?nil:LexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newScopeOfClass_($LexicalScope());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBlockScope",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["newScopeOfClass:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMethodScope",
fn: function (){
var self=this;
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newScopeOfClass_($MethodLexicalScope());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMethodScope",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["newScopeOfClass:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "newScopeOfClass:",
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newScopeOfClass:",{aLexicalScopeClass:aLexicalScopeClass},smalltalk.SemanticAnalyzer)})},
messageSends: ["outerScope:", "new", "yourself"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "popScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentScope"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self["@currentScope"]=_st(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self}, function($ctx1) {$ctx1.fill(self,"popScope",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifNotNil:", "outerScope"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "pushScope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"pushScope:",{aScope:aScope},smalltalk.SemanticAnalyzer)})},
messageSends: ["outerScope:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@superSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@superSends"]=_st($Dictionary())._new();
$1=self["@superSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.SemanticAnalyzer)})},
messageSends: []}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.SemanticAnalyzer)})},
messageSends: []}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "validateVariableScope:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._errorShadowingVariable_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"validateVariableScope:",{aString:aString},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifNotNil:", "errorShadowingVariable:", "lookupVariable:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]);
_st(_st(aNode)._left())._beAssigned();
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["visitAssignmentNode:", "beAssigned", "left"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._pushScope_(self._newBlockScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(aNode)._parameters())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
self._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "do:", "validateVariableScope:", "addArg:", "parameters", "visitBlockNode:", "popScope"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._receiver_(_st(aNode)._receiver());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitCascadeNode_.apply(_st(self), [aNode]);
$1=_st(_st(_st(aNode)._nodes())._first())._superSend();
if(smalltalk.assert($1)){
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._superSend_(true);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["do:", "receiver:", "receiver", "nodes", "visitCascadeNode:", "ifTrue:", "superSend:", "superSend", "first"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
function $ClassRefVar(){return smalltalk.ClassRefVar||(typeof ClassRefVar=="undefined"?nil:ClassRefVar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._classReferences())._add_(_st(aNode)._value());
$1=_st($ClassRefVar())._new();
_st($1)._name_(_st(aNode)._value());
$2=_st($1)._yourself();
_st(aNode)._binding_($2);
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["add:", "value", "classReferences", "binding:", "name:", "new", "yourself"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._pushScope_(self._newMethodScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(self._theClass())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@currentScope"])._addIVar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(aNode)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitMethodNode_.apply(_st(self), [aNode]);
$1=aNode;
_st($1)._classReferences_(self._classReferences());
_st($1)._messageSends_(_st(self._messageSends())._keys());
$2=_st($1)._superSends_(_st(self._superSends())._keys());
self._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "addIVar:", "allInstanceVariableNames", "theClass", "validateVariableScope:", "addArg:", "arguments", "visitMethodNode:", "classReferences:", "classReferences", "messageSends:", "keys", "messageSends", "superSends:", "superSends", "popScope"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
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
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitReturnNode_.apply(_st(self), [aNode]);
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["scope:", "ifTrue:ifFalse:", "localReturn:", "addNonLocalReturn:", "methodScope", "isMethodScope", "visitReturnNode:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
function $IRSendInliner(){return smalltalk.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aNode)._receiver())._value()).__eq("super");
if(smalltalk.assert($1)){
_st(aNode)._superSend_(true);
_st(_st(aNode)._receiver())._value_("self");
_st(self._superSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($Set())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self._superSends())._at_(_st(aNode)._selector()))._add_(aNode);
} else {
$2=_st(_st($IRSendInliner())._inlinedSelectors())._includes_(_st(aNode)._selector());
if(smalltalk.assert($2)){
_st(aNode)._shouldBeInlined_(true);
_st(_st(aNode)._receiver())._shouldBeAliased_(true);
};
};
_st(self._messageSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($Set())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self._messageSends())._at_(_st(aNode)._selector()))._add_(aNode);
_st(aNode)._index_(_st(_st(self._messageSends())._at_(_st(aNode)._selector()))._size());
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["ifTrue:ifFalse:", "superSend:", "value:", "receiver", "at:ifAbsentPut:", "selector", "new", "superSends", "add:", "at:", "ifTrue:", "shouldBeInlined:", "shouldBeAliased:", "includes:", "inlinedSelectors", "=", "value", "messageSends", "index:", "size", "visitSendNode:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.SemanticAnalyzer.superclass.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]);
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["do:", "validateVariableScope:", "addTemp:", "temps", "visitSequenceNode:"]}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
function $UnknownVar(){return smalltalk.UnknownVar||(typeof UnknownVar=="undefined"?nil:UnknownVar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=aNode;
$3=_st(self["@currentScope"])._lookupVariable_(aNode);
if(($receiver = $3) == nil || $receiver == undefined){
self._errorUnknownVariable_(aNode);
$4=_st($UnknownVar())._new();
_st($4)._name_(_st(aNode)._value());
$5=_st($4)._yourself();
$2=$5;
} else {
$2=$3;
};
_st($1)._binding_($2);
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.SemanticAnalyzer)})},
messageSends: ["binding:", "ifNil:", "errorUnknownVariable:", "name:", "value", "new", "yourself", "lookupVariable:"]}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass},smalltalk.SemanticAnalyzer.klass)})},
messageSends: ["theClass:", "new", "yourself"]}),
smalltalk.SemanticAnalyzer.klass);


