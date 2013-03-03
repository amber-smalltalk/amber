smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'method'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._pc_(_st(aMethodContext)._pc());
_st(self)._receiver_(_st(aMethodContext)._receiver());
_st(self)._method_(_st(aMethodContext)._method());
$1=_st(aMethodContext)._outerContext();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._outerContext_(_st(_st(self)._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
_st(_st(aMethodContext)._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._locals())._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext}, smalltalk.AIContext)})},
messageSends: ["pc:", "pc", "receiver:", "receiver", "method:", "method", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "keysAndValuesDo:", "at:put:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_",
smalltalk.method({
selector: "localAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString}, smalltalk.AIContext)})},
messageSends: ["at:ifAbsent:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_put_",
smalltalk.method({
selector: "localAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._locals())._at_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject}, smalltalk.AIContext)})},
messageSends: ["at:put:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@locals"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@locals"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@locals"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"locals",{}, smalltalk.AIContext)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{}, smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod}, smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerContext",{}, smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext_",
smalltalk.method({
selector: "outerContext:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerContext"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext}, smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@pc"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@pc"]=(0);
$1=self["@pc"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pc",{}, smalltalk.AIContext)})},
messageSends: ["ifNil:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc_",
smalltalk.method({
selector: "pc:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger}, smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localAt_("self");
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.AIContext)})},
messageSends: ["localAt:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._localAt_put_("self",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.AIContext)})},
messageSends: ["localAt:put:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._metod();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(self)._method())._selector();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AIContext)})},
messageSends: ["ifNotNil:", "selector", "method", "metod"]}),
smalltalk.AIContext);


smalltalk.addMethod(
"_fromMethodContext_",
smalltalk.method({
selector: "fromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext}, smalltalk.AIContext.klass)})},
messageSends: ["initializeFromMethodContext:", "new", "yourself"]}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTDebugger', smalltalk.Object, ['interpreter', 'context'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_buildAST",
smalltalk.method({
selector: "buildAST",
fn: function (){
var self=this;
var ast;
return smalltalk.withContext(function($ctx1) { var $1;
ast=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(_st(_st(self)._method())._source());
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(_st(_st(_st(self)._context())._receiver())._class()))._visit_(ast);
$1=ast;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildAST",{ast:ast}, smalltalk.ASTDebugger)})},
messageSends: ["parse:", "source", "method", "current", "visit:", "on:", "class", "receiver", "context"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=_st((smalltalk.AIContext || AIContext))._new();
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext}, smalltalk.ASTDebugger)})},
messageSends: ["new"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_defaultInterpreterClass",
smalltalk.method({
selector: "defaultInterpreterClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.ASTSteppingInterpreter || ASTSteppingInterpreter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInterpreterClass",{}, smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_initializeInterpreter",
smalltalk.method({
selector: "initializeInterpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._interpreter())._interpret_(_st(_st(_st(self)._buildAST())._nodes())._first());
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{}, smalltalk.ASTDebugger)})},
messageSends: ["interpret:", "first", "nodes", "buildAST", "interpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_initializeWithContext_",
smalltalk.method({
selector: "initializeWithContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._context_(_st((smalltalk.AIContext || AIContext))._fromMethodContext_(aMethodContext));
_st(self)._initializeInterpreter();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithContext:",{aMethodContext:aMethodContext}, smalltalk.ASTDebugger)})},
messageSends: ["context:", "fromMethodContext:", "initializeInterpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpreter",
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@interpreter"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@interpreter"]=_st(_st(self)._defaultInterpreterClass())._new();
$1=self["@interpreter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{}, smalltalk.ASTDebugger)})},
messageSends: ["ifNil:", "new", "defaultInterpreterClass"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpreter_",
smalltalk.method({
selector: "interpreter:",
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@interpreter"]=anInterpreter;
return self}, function($ctx1) {$ctx1.fill(self,"interpreter:",{anInterpreter:anInterpreter}, smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._context())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{}, smalltalk.ASTDebugger)})},
messageSends: ["method", "context"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_restart",
smalltalk.method({
selector: "restart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{}, smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"resume",{}, smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_step",
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(_st(self)._interpreter())._nextNode())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._interpreter())._nextNode())._stopOnStepping();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(self)._interpreter())._atEnd())._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._interpreter())._step();
return _st(self)._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{}, smalltalk.ASTDebugger)})},
messageSends: ["whileFalse:", "step", "interpreter", "or:", "not", "atEnd", "and:", "stopOnStepping", "nextNode", "notNil"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_stepInto",
smalltalk.method({
selector: "stepInto",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{}, smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_stepOver",
smalltalk.method({
selector: "stepOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._step();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{}, smalltalk.ASTDebugger)})},
messageSends: ["step"]}),
smalltalk.ASTDebugger);


smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeWithContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"context:",{aMethodContext:aMethodContext}, smalltalk.ASTDebugger.klass)})},
messageSends: ["initializeWithContext:", "new", "yourself"]}),
smalltalk.ASTDebugger.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.Object, ['currentNode', 'context', 'shouldReturn', 'result'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_assign_to_",
smalltalk.method({
selector: "assign:to:",
fn: function (aNode,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._context())._receiver())._instVarAt_put_(_st(aNode)._value(),anObject);
} else {
$1=_st(_st(self)._context())._localAt_put_(_st(aNode)._value(),anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject}, smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:ifFalse:", "instVarAt:put:", "value", "receiver", "context", "localAt:put:", "isInstanceVar", "binding"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@context"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@context"]=_st((smalltalk.AIContext || AIContext))._new();
$1=self["@context"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.ASTInterpreter)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anAIContext:anAIContext}, smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_continue_value_",
smalltalk.method({
selector: "continue:value:",
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@result"]=anObject;
_st(aBlock)._value_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"continue:value:",{aBlock:aBlock,anObject:anObject}, smalltalk.ASTInterpreter)})},
messageSends: ["value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_currentNode",
smalltalk.method({
selector: "currentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{}, smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
var source,function_;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
source=_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {_st(str)._nextPutAll_("(function(");
_st(_st(_st(_st(self)._context())._locals())._keys())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_(",");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})}));
function_=_st(_st((smalltalk.Compiler || Compiler))._new())._eval_(source);
$3=_st(function_)._valueWithPossibleArguments_(_st(_st(_st(self)._context())._locals())._values());
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_}, smalltalk.ASTInterpreter)})},
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTInterpreter)})},
messageSends: ["initialize"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldReturn"]=false;
_st(self)._interpret_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {self["@result"]=value;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=self["@shouldReturn"];
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(aNode)._isNode();
if(smalltalk.assert($3)){
self["@currentNode"]=aNode;
self["@currentNode"];
_st(self)._interpretNode_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
} else {
_st(self)._continue_value_(aBlock,aNode);
};
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "interpretNode:continue:", "continue:value:", "isNode"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_",
smalltalk.method({
selector: "interpretAll:continue:",
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_result_(aCollection,aBlock,_st((smalltalk.OrderedCollection || OrderedCollection))._new());
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:",{aCollection:aCollection,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:result:", "new"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_result_",
smalltalk.method({
selector: "interpretAll:continue:result:",
fn: function (nodes,aBlock,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(nodes)._isEmpty();
if(smalltalk.assert($1)){
_st(self)._continue_value_(aBlock,aCollection);
} else {
_st(self)._interpret_continue_(_st(nodes)._first(),(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._interpretAll_continue_result_(_st(nodes)._allButFirst(),aBlock,_st(aCollection).__comma([value]));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:result:",{nodes:nodes,aBlock:aBlock,aCollection:aCollection}, smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:ifFalse:", "continue:value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ",", "isEmpty"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAssignmentNode_continue_",
smalltalk.method({
selector: "interpretAssignmentNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._right(),(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(self)._assign_to_(_st(aNode)._left(),value));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretAssignmentNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "right", "continue:value:", "assign:to:", "left"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretBlockNode_continue_",
smalltalk.method({
selector: "interpretBlockNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._continue_value_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {$1=self;
_st($1)._interpret_(_st(_st(aNode)._nodes())._first());
$2=_st($1)._result();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "interpret:", "first", "nodes", "result"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretBlockSequenceNode_continue_",
smalltalk.method({
selector: "interpretBlockSequenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretSequenceNode_continue_(aNode,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockSequenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretSequenceNode:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretCascadeNode_continue_",
smalltalk.method({
selector: "interpretCascadeNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._receiver_(receiver);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._interpretAll_continue_(_st(_st(aNode)._nodes())._allButLast(),(function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._interpret_continue_(_st(_st(aNode)._nodes())._last(),(function(val){
return smalltalk.withContext(function($ctx4) {return _st(self)._continue_value_(aBlock,val);
}, function($ctx4) {$ctx4.fillBlock({val:val},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretCascadeNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "receiver", "do:", "receiver:", "nodes", "interpretAll:continue:", "allButLast", "last", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretClassReferenceNode_continue_",
smalltalk.method({
selector: "interpretClassReferenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_value_(aBlock,_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretClassReferenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "at:", "value", "current"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretDynamicArrayNode_continue_",
smalltalk.method({
selector: "interpretDynamicArrayNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,array);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicArrayNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretDynamicDictionaryNode_continue_",
smalltalk.method({
selector: "interpretDynamicDictionaryNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
var hashedCollection;
return smalltalk.withContext(function($ctx2) {hashedCollection=_st((smalltalk.HashedCollection || HashedCollection))._new();
hashedCollection;
_st(array)._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(hashedCollection)._add_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._continue_value_(aBlock,hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({array:array,hashedCollection:hashedCollection},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicDictionaryNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "new", "do:", "add:", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretJSStatementNode_continue_",
smalltalk.method({
selector: "interpretJSStatementNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldReturn"]=true;
_st(self)._continue_value_(aBlock,_st(self)._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretJSStatementNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "eval:", "source"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretMethodNode_continue_",
smalltalk.method({
selector: "interpretMethodNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(array)._first());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretMethodNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "first"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretNode_continue_",
smalltalk.method({
selector: "interpretNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aNode)._interpreter_continue_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpreter:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretReturnNode_continue_",
smalltalk.method({
selector: "interpretReturnNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(_st(aNode)._nodes())._first(),(function(value){
return smalltalk.withContext(function($ctx2) {self["@shouldReturn"]=true;
self["@shouldReturn"];
return _st(self)._continue_value_(aBlock,value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretReturnNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "first", "nodes", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretSendNode_continue_",
smalltalk.method({
selector: "interpretSendNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {return _st(self)._interpretAll_continue_(_st(aNode)._arguments(),(function(args){
return smalltalk.withContext(function($ctx3) {return _st(self)._messageFromSendNode_arguments_do_(aNode,args,(function(message){
return smalltalk.withContext(function($ctx4) {_st(_st(self)._context())._pc_(_st(_st(_st(self)._context())._pc()).__plus((1)));
return _st(self)._continue_value_(aBlock,_st(message)._sendTo_(receiver));
}, function($ctx4) {$ctx4.fillBlock({message:message},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({args:args},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSendNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "receiver", "interpretAll:continue:", "arguments", "messageFromSendNode:arguments:do:", "pc:", "+", "pc", "context", "continue:value:", "sendTo:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretSequenceNode_continue_",
smalltalk.method({
selector: "interpretSequenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(array)._last());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSequenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "last"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretValueNode_continue_",
smalltalk.method({
selector: "interpretValueNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_value_(aBlock,_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"interpretValueNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "value"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretVariableNode_continue_",
smalltalk.method({
selector: "interpretVariableNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
$1=self;
$2=aBlock;
$4=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($4)){
$3=_st(_st(_st(self)._context())._receiver())._instVarAt_(_st(aNode)._value());
} else {
$3=_st(_st(self)._context())._localAt_(_st(aNode)._value());
};
_st($1)._continue_value_($2,$3);
return self}, function($ctx1) {$ctx1.fill(self,"interpretVariableNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "ifTrue:ifFalse:", "instVarAt:", "value", "receiver", "context", "localAt:", "isInstanceVar", "binding"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_arguments_do_",
smalltalk.method({
selector: "messageFromSendNode:arguments:do:",
fn: function (aSendNode,aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Message || Message))._new();
_st($1)._selector_(_st(aSendNode)._selector());
_st($1)._arguments_(aCollection);
$2=_st($1)._yourself();
_st(self)._continue_value_(aBlock,$2);
return self}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:do:",{aSendNode:aSendNode,aCollection:aCollection,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "selector:", "selector", "new", "arguments:", "yourself"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{}, smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_shouldReturn",
smalltalk.method({
selector: "shouldReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@shouldReturn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldReturn",{}, smalltalk.ASTInterpreter)})},
messageSends: ["ifNil:"]}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTSteppingInterpreter', smalltalk.ASTInterpreter, ['continuation', 'nextNode'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._shouldReturn())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._nextNode()).__eq_eq(_st(self)._currentNode());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{}, smalltalk.ASTSteppingInterpreter)})},
messageSends: ["or:", "==", "currentNode", "nextNode", "shouldReturn"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ASTInterpreter.fn.prototype._initialize.apply(_st(self), []);
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTSteppingInterpreter)})},
messageSends: ["initialize"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nextNode"]=aNode;
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.ASTInterpreter.fn.prototype._interpret_continue_.apply(_st(self), [aNode,aBlock]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTSteppingInterpreter)})},
messageSends: ["interpret:continue:"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_nextNode",
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@nextNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{}, smalltalk.ASTSteppingInterpreter)})},
messageSends: []}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_step",
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@continuation"])._value();
return self}, function($ctx1) {$ctx1.fill(self,"step",{}, smalltalk.ASTSteppingInterpreter)})},
messageSends: ["value"]}),
smalltalk.ASTSteppingInterpreter);



smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.Node)})},
messageSends: ["interpretNode:continue:"]}),
smalltalk.Node);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretAssignmentNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.AssignmentNode)})},
messageSends: ["interpretAssignmentNode:continue:"]}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretBlockNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.BlockNode)})},
messageSends: ["interpretBlockNode:continue:"]}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretCascadeNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.CascadeNode)})},
messageSends: ["interpretCascadeNode:continue:"]}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretDynamicArrayNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.DynamicArrayNode)})},
messageSends: ["interpretDynamicArrayNode:continue:"]}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.DynamicArrayNode)})},
messageSends: []}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretDynamicDictionaryNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.DynamicDictionaryNode)})},
messageSends: ["interpretDynamicDictionaryNode:continue:"]}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.DynamicDictionaryNode)})},
messageSends: []}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretJSStatementNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.JSStatementNode)})},
messageSends: ["interpretJSStatementNode:continue:"]}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.JSStatementNode)})},
messageSends: []}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretMethodNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.MethodNode)})},
messageSends: ["interpretMethodNode:continue:"]}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretReturnNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ReturnNode)})},
messageSends: ["interpretReturnNode:continue:"]}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretSendNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.SendNode)})},
messageSends: ["interpretSendNode:continue:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.SequenceNode)})},
messageSends: ["interpretSequenceNode:continue:"]}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretBlockSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.BlockSequenceNode)})},
messageSends: ["interpretBlockSequenceNode:continue:"]}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretValueNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ValueNode)})},
messageSends: ["interpretValueNode:continue:"]}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretVariableNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.VariableNode)})},
messageSends: ["interpretVariableNode:continue:"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretClassReferenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ClassReferenceNode)})},
messageSends: ["interpretClassReferenceNode:continue:"]}),
smalltalk.ClassReferenceNode);

