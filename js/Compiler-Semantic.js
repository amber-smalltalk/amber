smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope."
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
category: 'adding',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._args())._at_put_(aString,_st((smalltalk.ArgVar || ArgVar))._on_(aString));
_st(_st(_st(self)._args())._at_(aString))._scope_(self);
return self}, self, "addArg:", [aString], smalltalk.LexicalScope)},
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
messageSends: ["at:put:", "on:", "args", "scope:", "at:"],
referencedClasses: ["ArgVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
category: 'adding',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._temps())._at_put_(aString,_st((smalltalk.TempVar || TempVar))._on_(aString));
_st(_st(_st(self)._temps())._at_(aString))._scope_(self);
return self}, self, "addTemp:", [aString], smalltalk.LexicalScope)},
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
messageSends: ["at:put:", "on:", "temps", "scope:", "at:"],
referencedClasses: ["TempVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("$ctx").__comma(_st(_st(self)._scopeLevel())._asString());
return $1;
}, self, "alias", [], smalltalk.LexicalScope)},
args: [],
source: "alias\x0a\x09^ '$ctx', self scopeLevel asString",
messageSends: [",", "asString", "scopeLevel"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._args())._keys()).__comma(_st(_st(self)._temps())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.LexicalScope)},
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
messageSends: [",", "keys", "temps", "args"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@args"]) == nil || $receiver == undefined){
self["@args"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@args"];
} else {
$1=self["@args"];
};
return $1;
}, self, "args", [], smalltalk.LexicalScope)},
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aStringOrNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._pseudoVars())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._args())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx3) { return _st(_st(self)._temps())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx4) { return nil;
})}));
})}));
})}));
return $1;
}, self, "bindingFor:", [aStringOrNode], smalltalk.LexicalScope)},
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [ \x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
messageSends: ["at:ifAbsent:", "value", "temps", "args", "pseudoVars"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._outerScope())._canInlineNonLocalReturns();
})}));
return $1;
}, self, "canInlineNonLocalReturns", [], smalltalk.LexicalScope)},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
messageSends: ["and:", "canInlineNonLocalReturns", "outerScope", "isInlined"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@instruction"];
return $1;
}, self, "instruction", [], smalltalk.LexicalScope)},
args: [],
source: "instruction\x0a\x09^ instruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@instruction"]=anIRInstruction;
return self}, self, "instruction:", [anIRInstruction], smalltalk.LexicalScope)},
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isMethodScope())._not();
return $1;
}, self, "isBlockScope", [], smalltalk.LexicalScope)},
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
messageSends: ["not", "isMethodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instruction())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._instruction())._isInlined();
})}));
return $1;
}, self, "isInlined", [], smalltalk.LexicalScope)},
args: [],
source: "isInlined\x0a\x09^ self instruction notNil and: [\x0a      \x09self instruction isInlined ]",
messageSends: ["and:", "isInlined", "instruction", "notNil"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isMethodScope", [], smalltalk.LexicalScope)},
args: [],
source: "isMethodScope\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.locals.lookup=nil;
$ctx1.locals.lookup=_st(self)._bindingFor_(aNode);
if(($receiver = $ctx1.locals.lookup) == nil || $receiver == undefined){
$1=_st(self)._outerScope();
if(($receiver = $1) == nil || $receiver == undefined){
$ctx1.locals.lookup=$1;
} else {
$ctx1.locals.lookup=_st(_st(self)._outerScope())._lookupVariable_(aNode);
};
$ctx1.locals.lookup;
} else {
$ctx1.locals.lookup;
};
$2=$ctx1.locals.lookup;
return $2;
}, self, "lookupVariable:", [aNode], smalltalk.LexicalScope)},
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [ \x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "lookupVariable:", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._outerScope();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(self)._outerScope())._methodScope();
};
return $1;
}, self, "methodScope", [], smalltalk.LexicalScope)},
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
messageSends: ["ifNotNil:", "methodScope", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.LexicalScope)},
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.LexicalScope)},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerScope"];
return $1;
}, self, "outerScope", [], smalltalk.LexicalScope)},
args: [],
source: "outerScope\x0a\x09^ outerScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerScope"]=aLexicalScope;
return self}, self, "outerScope:", [aLexicalScope], smalltalk.LexicalScope)},
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodScope())._pseudoVars();
return $1;
}, self, "pseudoVars", [], smalltalk.LexicalScope)},
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
messageSends: ["pseudoVars", "methodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self)._outerScope();
if(($receiver = $1) == nil || $receiver == undefined){
return (1);
} else {
$1;
};
$2=_st(self)._isInlined();
if(smalltalk.assert($2)){
$3=_st(_st(self)._outerScope())._scopeLevel();
return $3;
};
$4=_st(_st(_st(self)._outerScope())._scopeLevel()).__plus((1));
return $4;
}, self, "scopeLevel", [], smalltalk.LexicalScope)},
args: [],
source: "scopeLevel\x0a\x09self outerScope ifNil: [ ^ 1 ].\x0a\x09self isInlined ifTrue: [ ^ self outerScope scopeLevel ].\x0a    \x0a\x09^ self outerScope scopeLevel + 1",
messageSends: ["ifNil:", "outerScope", "ifTrue:", "scopeLevel", "isInlined", "+"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@temps"]) == nil || $receiver == undefined){
self["@temps"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@temps"];
} else {
$1=self["@temps"];
};
return $1;
}, self, "temps", [], smalltalk.LexicalScope)},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.MethodLexicalScope.comment="I represent a method scope."
smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
category: 'adding',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._iVars())._at_put_(aString,_st((smalltalk.InstanceVar || InstanceVar))._on_(aString));
_st(_st(_st(self)._iVars())._at_(aString))._scope_(self);
return self}, self, "addIVar:", [aString], smalltalk.MethodLexicalScope)},
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
messageSends: ["at:put:", "on:", "iVars", "scope:", "at:"],
referencedClasses: ["InstanceVar"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
category: 'adding',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._add_(aScope);
return self}, self, "addNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)},
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
messageSends: ["add:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.LexicalScope.fn.prototype._allVariableNames.apply(_st(self), [])).__comma(_st(_st(self)._iVars())._keys());
return $1;
}, self, "allVariableNames", [], smalltalk.MethodLexicalScope)},
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
messageSends: [",", "keys", "iVars", "allVariableNames"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=smalltalk.LexicalScope.fn.prototype._bindingFor_.apply(_st(self), [aNode]);
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._iVars())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) { return nil;
})}));
} else {
$1=$2;
};
return $1;
}, self, "bindingFor:", [aNode], smalltalk.MethodLexicalScope)},
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
messageSends: ["ifNil:", "at:ifAbsent:", "value", "iVars", "bindingFor:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canInlineNonLocalReturns", [], smalltalk.MethodLexicalScope)},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localReturn();
return $1;
}, self, "hasLocalReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
messageSends: ["localReturn"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._nonLocalReturns())._notEmpty();
return $1;
}, self, "hasNonLocalReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
messageSends: ["notEmpty", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@iVars"]) == nil || $receiver == undefined){
self["@iVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@iVars"];
} else {
$1=self["@iVars"];
};
return $1;
}, self, "iVars", [], smalltalk.MethodLexicalScope)},
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isMethodScope", [], smalltalk.MethodLexicalScope)},
args: [],
source: "isMethodScope\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@localReturn"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@localReturn"];
};
return $1;
}, self, "localReturn", [], smalltalk.MethodLexicalScope)},
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@localReturn"]=aBoolean;
return self}, self, "localReturn:", [aBoolean], smalltalk.MethodLexicalScope)},
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, self, "methodScope", [], smalltalk.MethodLexicalScope)},
args: [],
source: "methodScope\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@nonLocalReturns"]) == nil || $receiver == undefined){
self["@nonLocalReturns"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@nonLocalReturns"];
} else {
$1=self["@nonLocalReturns"];
};
return $1;
}, self, "nonLocalReturns", [], smalltalk.MethodLexicalScope)},
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
if(($receiver = self["@pseudoVars"]) == nil || $receiver == undefined){
self["@pseudoVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
self["@pseudoVars"];
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._pseudoVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st((smalltalk.PseudoVar || PseudoVar))._on_(each);
_st($1)._scope_(_st(self)._methodScope());
$2=_st($1)._yourself();
return _st(self["@pseudoVars"])._at_put_(each,$2);
})}));
} else {
self["@pseudoVars"];
};
$3=self["@pseudoVars"];
return $3;
}, self, "pseudoVars", [], smalltalk.MethodLexicalScope)},
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk current pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
messageSends: ["ifNil:", "new", "do:", "at:put:", "scope:", "methodScope", "on:", "yourself", "pseudoVariableNames", "current"],
referencedClasses: ["Dictionary", "PseudoVar", "Smalltalk"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
category: 'adding',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "removeNonLocalReturn:", [aScope], smalltalk.MethodLexicalScope)},
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
messageSends: ["remove:ifAbsent:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@unknownVariables"]) == nil || $receiver == undefined){
self["@unknownVariables"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@unknownVariables"];
} else {
$1=self["@unknownVariables"];
};
return $1;
}, self, "unknownVariables", [], smalltalk.MethodLexicalScope)},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  \x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._name())._asVariableName();
return $1;
}, self, "alias", [], smalltalk.ScopeVar)},
args: [],
source: "alias\x0a\x09^ self name asVariableName",
messageSends: ["asVariableName", "name"],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isArgVar", [], smalltalk.ScopeVar)},
args: [],
source: "isArgVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClassRefVar", [], smalltalk.ScopeVar)},
args: [],
source: "isClassRefVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isInstanceVar", [], smalltalk.ScopeVar)},
args: [],
source: "isInstanceVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isPseudoVar", [], smalltalk.ScopeVar)},
args: [],
source: "isPseudoVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isTempVar", [], smalltalk.ScopeVar)},
args: [],
source: "isTempVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isUnknownVar", [], smalltalk.ScopeVar)},
args: [],
source: "isUnknownVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, self, "name", [], smalltalk.ScopeVar)},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, self, "name:", [aString], smalltalk.ScopeVar)},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

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
}, self, "scope", [], smalltalk.ScopeVar)},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, self, "scope:", [aScope], smalltalk.ScopeVar)},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._isArgVar())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._isPseudoVar();
})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.InvalidAssignmentError || InvalidAssignmentError))._new();
_st($2)._variableName_(_st(self)._name());
$3=_st($2)._signal();
$3;
};
return self}, self, "validateAssignment", [], smalltalk.ScopeVar)},
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
messageSends: ["ifTrue:", "variableName:", "name", "new", "signal", "or:", "isPseudoVar", "isArgVar"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aString], smalltalk.ScopeVar.klass)},
args: ["aString"],
source: "on: aString\x0a\x09^ self new \x0a\x09\x09name: aString;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.AliasVar.comment="I am an internally defined variable by the compiler"
smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, self, "node", [], smalltalk.AliasVar)},
args: [],
source: "node\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, self, "node:", [aNode], smalltalk.AliasVar)},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ArgVar.comment="I am an argument of a method or block."
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isArgVar", [], smalltalk.ArgVar)},
args: [],
source: "isArgVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ClassRefVar.comment="I am an class reference variable"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st("(smalltalk.").__comma(_st(self)._name())).__comma(" || ")).__comma(_st(self)._name())).__comma(")");
return $1;
}, self, "alias", [], smalltalk.ClassRefVar)},
args: [],
source: "alias\x0a\x09^ '(smalltalk.', self name, ' || ', self name, ')'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClassRefVar", [], smalltalk.ClassRefVar)},
args: [],
source: "isClassRefVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.InstanceVar.comment="I am an instance variable of a method or block."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("self[\x22@").__comma(_st(self)._name())).__comma("\x22]");
return $1;
}, self, "alias", [], smalltalk.InstanceVar)},
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isInstanceVar", [], smalltalk.InstanceVar)},
args: [],
source: "isInstanceVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, self, "alias", [], smalltalk.PseudoVar)},
args: [],
source: "alias\x0a\x09^ self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isPseudoVar", [], smalltalk.PseudoVar)},
args: [],
source: "isPseudoVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.TempVar.comment="I am an temporary variable of a method or block."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._scope())._alias()).__comma(".locals.")).__comma(smalltalk.ScopeVar.fn.prototype._alias.apply(_st(self), []));
return $1;
}, self, "alias", [], smalltalk.TempVar)},
args: [],
source: "alias\x0a\x09^ self scope alias, '.locals.', super alias",
messageSends: [",", "alias", "scope"],
referencedClasses: []
}),
smalltalk.TempVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isTempVar", [], smalltalk.TempVar)},
args: [],
source: "isTempVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals"
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isUnknownVar", [], smalltalk.UnknownVar)},
args: [],
source: "isUnknownVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler-Semantic');
smalltalk.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes."
smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@classReferences"]) == nil || $receiver == undefined){
self["@classReferences"]=_st((smalltalk.Set || Set))._new();
$1=self["@classReferences"];
} else {
$1=self["@classReferences"];
};
return $1;
}, self, "classReferences", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
category: 'error handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.ShadowingVariableError || ShadowingVariableError))._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, self, "errorShadowingVariable:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
messageSends: ["variableName:", "new", "signal"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
category: 'error handling',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.locals.identifier=nil;
$ctx1.locals.identifier=_st(aNode)._value();
$1=_st(_st(_st(["jQuery", "window", "process", "global"])._includes_($ctx1.locals.identifier))._not())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._isVariableGloballyUndefined_($ctx1.locals.identifier);
})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.UnknownVariableError || UnknownVariableError))._new();
_st($2)._variableName_(_st(aNode)._value());
$3=_st($2)._signal();
$3;
} else {
_st(_st(_st(self["@currentScope"])._methodScope())._unknownVariables())._add_(_st(aNode)._value());
};
return self}, self, "errorUnknownVariable:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window)\x22\x0a\x0a\x09| identifier |\x0a    identifier := aNode value.\x0a\x09((#('jQuery' 'window' 'process' 'global') includes: identifier) not and: [ self isVariableGloballyUndefined: identifier ]) ifTrue: [\x0a\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09signal ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09currentScope methodScope unknownVariables add: aNode value. ]",
messageSends: ["value", "ifTrue:ifFalse:", "variableName:", "new", "signal", "add:", "unknownVariables", "methodScope", "and:", "isVariableGloballyUndefined:", "not", "includes:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_isVariableGloballyUndefined_",
smalltalk.method({
selector: "isVariableGloballyUndefined:",
category: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval('typeof ' + aString + ' == "undefined"');
;
return self}, self, "isVariableGloballyUndefined:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "isVariableGloballyUndefined: aString\x0a\x09<return eval('typeof ' + aString + ' == \x22undefined\x22')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@messageSends"]) == nil || $receiver == undefined){
self["@messageSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@messageSends"];
} else {
$1=self["@messageSends"];
};
return $1;
}, self, "messageSends", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.LexicalScope || LexicalScope));
return $1;
}, self, "newBlockScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["LexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.MethodLexicalScope || MethodLexicalScope));
return $1;
}, self, "newMethodScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["MethodLexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
category: 'factory',
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "newScopeOfClass:", [aLexicalScopeClass], smalltalk.SemanticAnalyzer)},
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new \x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
messageSends: ["outerScope:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
category: 'scope',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@currentScope"]) == nil || $receiver == undefined){
self["@currentScope"];
} else {
self["@currentScope"]=_st(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self}, self, "popScope", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
messageSends: ["ifNotNil:", "outerScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
category: 'scope',
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, self, "pushScope:", [aScope], smalltalk.SemanticAnalyzer)},
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
messageSends: ["outerScope:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@superSends"]) == nil || $receiver == undefined){
self["@superSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@superSends"];
} else {
$1=self["@superSends"];
};
return $1;
}, self, "superSends", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "superSends\x0a\x09^ superSends ifNil: [ superSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, self, "theClass", [], smalltalk.SemanticAnalyzer)},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.SemanticAnalyzer)},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
category: 'scope',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._errorShadowingVariable_(aString);
};
return self}, self, "validateVariableScope:", [aString], smalltalk.SemanticAnalyzer)},
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
messageSends: ["ifNotNil:", "errorShadowingVariable:", "lookupVariable:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]);
_st(_st(aNode)._left())._beAssigned();
return self}, self, "visitAssignmentNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
messageSends: ["visitAssignmentNode:", "beAssigned", "left"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._pushScope_(_st(self)._newBlockScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(aNode)._parameters())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
_st(self)._popScope();
return self}, self, "visitBlockNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09\x0a\x09aNode parameters do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "do:", "validateVariableScope:", "addArg:", "parameters", "visitBlockNode:", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._receiver_(_st(aNode)._receiver());
})}));
smalltalk.NodeVisitor.fn.prototype._visitCascadeNode_.apply(_st(self), [aNode]);
$1=_st(_st(_st(aNode)._nodes())._first())._superSend();
if(smalltalk.assert($1)){
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._superSend_(true);
})}));
};
return self}, self, "visitCascadeNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22Populate the receiver into all children\x22\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09each receiver: aNode receiver ].\x0a\x09super visitCascadeNode: aNode.\x0a\x09aNode nodes first superSend ifTrue: [\x0a\x09\x09aNode nodes do: [ :each | each superSend: true ]]",
messageSends: ["do:", "receiver:", "receiver", "nodes", "visitCascadeNode:", "ifTrue:", "superSend:", "superSend", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classReferences())._add_(_st(aNode)._value());
$1=_st((smalltalk.ClassRefVar || ClassRefVar))._new();
_st($1)._name_(_st(aNode)._value());
$2=_st($1)._yourself();
_st(aNode)._binding_($2);
return self}, self, "visitClassReferenceNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self classReferences add: aNode value.\x0a\x09aNode binding: (ClassRefVar new name: aNode value; yourself)",
messageSends: ["add:", "value", "classReferences", "binding:", "name:", "new", "yourself"],
referencedClasses: ["ClassRefVar"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._pushScope_(_st(self)._newMethodScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(_st(self)._theClass())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self["@currentScope"])._addIVar_(each);
})}));
_st(_st(aNode)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitMethodNode_.apply(_st(self), [aNode]);
$1=aNode;
_st($1)._classReferences_(_st(self)._classReferences());
_st($1)._messageSends_(_st(_st(self)._messageSends())._keys());
$2=_st($1)._superSends_(_st(_st(self)._superSends())._keys());
_st(self)._popScope();
return self}, self, "visitMethodNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [:each | \x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode \x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09messageSends: self messageSends keys;\x0a        superSends: self superSends keys.\x0a\x09self popScope",
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "addIVar:", "allInstanceVariableNames", "theClass", "validateVariableScope:", "addArg:", "arguments", "visitMethodNode:", "classReferences:", "classReferences", "messageSends:", "keys", "messageSends", "superSends:", "superSends", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(aNode)._scope_(self["@currentScope"]);
$1=_st(self["@currentScope"])._isMethodScope();
if(smalltalk.assert($1)){
_st(self["@currentScope"])._localReturn_(true);
} else {
_st(_st(self["@currentScope"])._methodScope())._addNonLocalReturn_(self["@currentScope"]);
};
smalltalk.NodeVisitor.fn.prototype._visitReturnNode_.apply(_st(self), [aNode]);
return self}, self, "visitReturnNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
messageSends: ["scope:", "ifTrue:ifFalse:", "localReturn:", "addNonLocalReturn:", "methodScope", "isMethodScope", "visitReturnNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(aNode)._receiver())._value()).__eq("super");
if(smalltalk.assert($1)){
_st(aNode)._superSend_(true);
_st(_st(aNode)._receiver())._value_("self");
_st(_st(self)._superSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.Set || Set))._new();
})}));
_st(_st(_st(self)._superSends())._at_(_st(aNode)._selector()))._add_(aNode);
} else {
$2=_st(_st((smalltalk.IRSendInliner || IRSendInliner))._inlinedSelectors())._includes_(_st(aNode)._selector());
if(smalltalk.assert($2)){
_st(aNode)._shouldBeInlined_(true);
_st(_st(aNode)._receiver())._shouldBeAliased_(true);
};
};
_st(_st(self)._messageSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.Set || Set))._new();
})}));
_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._add_(aNode);
_st(aNode)._index_(_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._size());
smalltalk.NodeVisitor.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
return self}, self, "visitSendNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super' \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aNode superSend: true.\x0a\x09\x09\x09aNode receiver value: 'self'.\x0a\x09\x09\x09self superSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09\x09\x09(self superSends at: aNode selector) add: aNode ]\x0a          \x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver shouldBeAliased: true ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
messageSends: ["ifTrue:ifFalse:", "superSend:", "value:", "receiver", "at:ifAbsentPut:", "selector", "new", "superSends", "add:", "at:", "ifTrue:", "shouldBeInlined:", "shouldBeAliased:", "includes:", "inlinedSelectors", "=", "value", "messageSends", "index:", "size", "visitSendNode:"],
referencedClasses: ["Set", "IRSendInliner"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) { _st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
})}));
smalltalk.NodeVisitor.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]);
return self}, self, "visitSequenceNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
messageSends: ["do:", "validateVariableScope:", "addTemp:", "temps", "visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2;
$1=aNode;
$3=_st(self["@currentScope"])._lookupVariable_(aNode);
if(($receiver = $3) == nil || $receiver == undefined){
_st(self)._errorUnknownVariable_(aNode);
$4=_st((smalltalk.UnknownVar || UnknownVar))._new();
_st($4)._name_(_st(aNode)._value());
$5=_st($4)._yourself();
$2=$5;
} else {
$2=$3;
};
_st($1)._binding_($2);
return self}, self, "visitVariableNode:", [aNode], smalltalk.SemanticAnalyzer)},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error\x22\x0a\x0a\x09aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ \x0a\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09UnknownVar new name: aNode value; yourself ])",
messageSends: ["binding:", "ifNil:", "errorUnknownVariable:", "name:", "value", "new", "yourself", "lookupVariable:"],
referencedClasses: ["UnknownVar"]
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aClass], smalltalk.SemanticAnalyzer.klass)},
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer.klass);


