smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._args())._at_put_(aString,_st((smalltalk.ArgVar || ArgVar))._on_(aString));
_st(_st(_st(self)._args())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addArg:",{aString:aString}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._temps())._at_put_(aString,_st((smalltalk.TempVar || TempVar))._on_(aString));
_st(_st(_st(self)._temps())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addTemp:",{aString:aString}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("$ctx").__comma(_st(_st(self)._scopeLevel())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._args())._keys()).__comma(_st(_st(self)._temps())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@args"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@args"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@args"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"args",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aStringOrNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._pseudoVars())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._args())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._temps())._at_ifAbsent_(_st(aStringOrNode)._value(),(function(){
return smalltalk.withContext(function($ctx4) {return nil;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aStringOrNode:aStringOrNode}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isInlined())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._outerScope())._canInlineNonLocalReturns();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@instruction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"instruction",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@instruction"]=anIRInstruction;
return self}, function($ctx1) {$ctx1.fill(self,"instruction:",{anIRInstruction:anIRInstruction}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isMethodScope())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockScope",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instruction())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._instruction())._isInlined();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isMethodScope",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
fn: function (aNode){
var self=this;
var lookup;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
lookup=_st(self)._bindingFor_(aNode);
$1=lookup;
$2=(function(){
return smalltalk.withContext(function($ctx2) {$3=_st(self)._outerScope();
if(($receiver = $3) == nil || $receiver == undefined){
lookup=$3;
} else {
lookup=_st(_st(self)._outerScope())._lookupVariable_(aNode);
};
return lookup;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._ifNil_($2);
$4=lookup;
return $4;
}, function($ctx1) {$ctx1.fill(self,"lookupVariable:",{aNode:aNode,lookup:lookup}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
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
}, function($ctx1) {$ctx1.fill(self,"methodScope",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerScope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerScope",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerScope"]=aLexicalScope;
return self}, function($ctx1) {$ctx1.fill(self,"outerScope:",{aLexicalScope:aLexicalScope}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodScope())._pseudoVars();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
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
}, function($ctx1) {$ctx1.fill(self,"scopeLevel",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@temps"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@temps"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@temps"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{}, smalltalk.LexicalScope)})}
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._iVars())._at_put_(aString,_st((smalltalk.InstanceVar || InstanceVar))._on_(aString));
_st(_st(_st(self)._iVars())._at_(aString))._scope_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addIVar:",{aString:aString}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._add_(aScope);
return self}, function($ctx1) {$ctx1.fill(self,"addNonLocalReturn:",{aScope:aScope}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.LexicalScope.fn.prototype._allVariableNames.apply(_st(self), [])).__comma(_st(_st(self)._iVars())._keys());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=smalltalk.LexicalScope.fn.prototype._bindingFor_.apply(_st(self), [aNode]);
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._iVars())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aNode:aNode}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localReturn();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLocalReturn",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._nonLocalReturns())._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNonLocalReturn",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@iVars"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@iVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@iVars"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iVars",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isMethodScope",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@localReturn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"localReturn",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@localReturn"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"localReturn:",{aBoolean:aBoolean}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodScope",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@nonLocalReturns"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nonLocalReturns"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@nonLocalReturns"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturns",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=self["@pseudoVars"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@pseudoVars"]=_st((smalltalk.Dictionary || Dictionary))._new();
self["@pseudoVars"];
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._pseudoVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$2=_st((smalltalk.PseudoVar || PseudoVar))._on_(each);
_st($2)._scope_(_st(self)._methodScope());
$3=_st($2)._yourself();
return _st(self["@pseudoVars"])._at_put_(each,$3);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
} else {
$1;
};
$4=self["@pseudoVars"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeNonLocalReturn:",{aScope:aScope}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@unknownVariables"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@unknownVariables"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@unknownVariables"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{}, smalltalk.MethodLexicalScope)})}
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._name())._asVariableName();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isArgVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isClassRefVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isInstanceVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isPseudoVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isTempVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isUnknownVar",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@scope"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scope",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@scope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._isArgVar())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._isPseudoVar();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.InvalidAssignmentError || InvalidAssignmentError))._new();
_st($2)._variableName_(_st(self)._name());
$3=_st($2)._signal();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"validateAssignment",{}, smalltalk.ScopeVar)})}
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._name_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString}, smalltalk.ScopeVar.klass)})}
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{}, smalltalk.AliasVar)})}
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode}, smalltalk.AliasVar)})}
}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isArgVar",{}, smalltalk.ArgVar)})}
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st("(smalltalk.").__comma(_st(self)._name())).__comma(" || ")).__comma(_st(self)._name())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{}, smalltalk.ClassRefVar)})}
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isClassRefVar",{}, smalltalk.ClassRefVar)})}
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("self[\x22@").__comma(_st(self)._name())).__comma("\x22]");
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{}, smalltalk.InstanceVar)})}
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInstanceVar",{}, smalltalk.InstanceVar)})}
}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"alias",{}, smalltalk.PseudoVar)})}
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isPseudoVar",{}, smalltalk.PseudoVar)})}
}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isTempVar",{}, smalltalk.TempVar)})}
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isUnknownVar",{}, smalltalk.UnknownVar)})}
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends', 'superSends'], 'Compiler-Semantic');
smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classReferences"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classReferences"]=_st((smalltalk.Set || Set))._new();
$1=self["@classReferences"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferences",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.ShadowingVariableError || ShadowingVariableError))._new();
_st($1)._variableName_(aString);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"errorShadowingVariable:",{aString:aString}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
fn: function (aNode){
var self=this;
var identifier;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
identifier=_st(aNode)._value();
$1=_st(_st(_st(["jQuery", "window", "process", "global"])._includes_(identifier))._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._isVariableGloballyUndefined_(identifier);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=_st((smalltalk.UnknownVariableError || UnknownVariableError))._new();
_st($2)._variableName_(_st(aNode)._value());
$3=_st($2)._signal();
$3;
} else {
_st(_st(_st(self["@currentScope"])._methodScope())._unknownVariables())._add_(_st(aNode)._value());
};
return self}, function($ctx1) {$ctx1.fill(self,"errorUnknownVariable:",{aNode:aNode,identifier:identifier}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_isVariableGloballyUndefined_",
smalltalk.method({
selector: "isVariableGloballyUndefined:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return eval('typeof ' + aString + ' == "undefined"');
return self}, function($ctx1) {$ctx1.fill(self,"isVariableGloballyUndefined:",{aString:aString}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@messageSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@messageSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@messageSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.LexicalScope || LexicalScope));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBlockScope",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._newScopeOfClass_((smalltalk.MethodLexicalScope || MethodLexicalScope));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMethodScope",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
fn: function (aLexicalScopeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(aLexicalScopeClass)._new();
_st($2)._outerScope_(self["@currentScope"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newScopeOfClass:",{aLexicalScopeClass:aLexicalScopeClass}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentScope"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self["@currentScope"]=_st(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self}, function($ctx1) {$ctx1.fill(self,"popScope",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
fn: function (aScope){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self}, function($ctx1) {$ctx1.fill(self,"pushScope:",{aScope:aScope}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@superSends"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@superSends"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@superSends"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"superSends",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._errorShadowingVariable_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"validateVariableScope:",{aString:aString}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._visitAssignmentNode_.apply(_st(self), [aNode]);
_st(_st(aNode)._left())._beAssigned();
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._pushScope_(_st(self)._newBlockScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(aNode)._parameters())._do_((function(each){
return smalltalk.withContext(function($ctx2) {_st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.NodeVisitor.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
_st(self)._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._receiver_(_st(aNode)._receiver());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.NodeVisitor.fn.prototype._visitCascadeNode_.apply(_st(self), [aNode]);
$1=_st(_st(_st(aNode)._nodes())._first())._superSend();
if(smalltalk.assert($1)){
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._superSend_(true);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classReferences())._add_(_st(aNode)._value());
$1=_st((smalltalk.ClassRefVar || ClassRefVar))._new();
_st($1)._name_(_st(aNode)._value());
$2=_st($1)._yourself();
_st(aNode)._binding_($2);
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._pushScope_(_st(self)._newMethodScope());
_st(aNode)._scope_(self["@currentScope"]);
_st(self["@currentScope"])._node_(aNode);
_st(_st(_st(self)._theClass())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self["@currentScope"])._addIVar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(aNode)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {_st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addArg_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.NodeVisitor.fn.prototype._visitMethodNode_.apply(_st(self), [aNode]);
$1=aNode;
_st($1)._classReferences_(_st(self)._classReferences());
_st($1)._messageSends_(_st(_st(self)._messageSends())._keys());
$2=_st($1)._superSends_(_st(_st(self)._superSends())._keys());
_st(self)._popScope();
return self}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
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
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
$1=_st(_st(_st(aNode)._receiver())._value()).__eq("super");
$2=(function(){
return smalltalk.withContext(function($ctx2) {_st(aNode)._superSend_(true);
_st(_st(aNode)._receiver())._value_("self");
_st(_st(self)._superSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.Set || Set))._new();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(_st(_st(self)._superSends())._at_(_st(aNode)._selector()))._add_(aNode);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$3=(function(){
return smalltalk.withContext(function($ctx2) {$4=_st(_st((smalltalk.IRSendInliner || IRSendInliner))._inlinedSelectors())._includes_(_st(aNode)._selector());
if(smalltalk.assert($4)){
_st(aNode)._shouldBeInlined_(true);
return _st(_st(aNode)._receiver())._shouldBeAliased_(true);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._ifTrue_ifFalse_($2,$3);
_st(_st(self)._messageSends())._at_ifAbsentPut_(_st(aNode)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Set || Set))._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._add_(aNode);
_st(aNode)._index_(_st(_st(_st(self)._messageSends())._at_(_st(aNode)._selector()))._size());
smalltalk.NodeVisitor.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {_st(self)._validateVariableScope_(each);
return _st(self["@currentScope"])._addTemp_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
smalltalk.NodeVisitor.fn.prototype._visitSequenceNode_.apply(_st(self), [aNode]);
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
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
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode}, smalltalk.SemanticAnalyzer)})}
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass}, smalltalk.SemanticAnalyzer.klass)})}
}),
smalltalk.SemanticAnalyzer.klass);


