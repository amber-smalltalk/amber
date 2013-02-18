smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'method'], 'Compiler-Interpreter');
smalltalk.AIContext.comment="AIContext is like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, it is not read-only.\x0a\x0aWhen debugging, `AIContext` instances are created by copying the current `MethodContext` (thisContext)"
smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'initialization',
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
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x09self pc: aMethodContext pc.\x0a    self receiver: aMethodContext receiver.\x0a    self method: aMethodContext method.\x0a    aMethodContext outerContext ifNotNil: [\x0a\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a    aMethodContext locals keysAndValuesDo: [ :key :value |\x0a    \x09self locals at: key put: value ]\x0a    ",
messageSends: ["pc:", "pc", "receiver:", "receiver", "method:", "method", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "keysAndValuesDo:", "at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_",
smalltalk.method({
selector: "localAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString}, smalltalk.AIContext)})},
args: ["aString"],
source: "localAt: aString\x0a\x09^ self locals at: aString ifAbsent: [ nil ]",
messageSends: ["at:ifAbsent:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_put_",
smalltalk.method({
selector: "localAt:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._locals())._at_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject}, smalltalk.AIContext)})},
args: ["aString", "anObject"],
source: "localAt: aString put: anObject\x0a\x09self locals at: aString put: anObject",
messageSends: ["at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
category: 'accessing',
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
args: [],
source: "locals\x0a\x09^ locals ifNil: [ locals := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{}, smalltalk.AIContext)})},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod}, smalltalk.AIContext)})},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@outerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerContext",{}, smalltalk.AIContext)})},
args: [],
source: "outerContext\x0a\x09^ outerContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext_",
smalltalk.method({
selector: "outerContext:",
category: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@outerContext"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext}, smalltalk.AIContext)})},
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
category: 'accessing',
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
args: [],
source: "pc\x0a\x09^ pc ifNil: [ pc := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc_",
smalltalk.method({
selector: "pc:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger}, smalltalk.AIContext)})},
args: ["anInteger"],
source: "pc: anInteger\x0a\x09pc := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._localAt_("self");
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.AIContext)})},
args: [],
source: "receiver\x0a\x09^ self localAt: 'self'",
messageSends: ["localAt:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._localAt_put_("self",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.AIContext)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self localAt: 'self' put: anObject",
messageSends: ["localAt:put:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
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
args: [],
source: "selector\x0a\x09^ self metod\x0a    \x09ifNotNil: [ self method selector ]",
messageSends: ["ifNotNil:", "selector", "method", "metod"],
referencedClasses: []
}),
smalltalk.AIContext);


smalltalk.addMethod(
"_fromMethodContext_",
smalltalk.method({
selector: "fromMethodContext:",
category: 'instance creation',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext}, smalltalk.AIContext.klass)})},
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new\x0a    \x09initializeFromMethodContext: aMethodContext;\x0a        yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTDebugger', smalltalk.Object, ['interpreter', 'context'], 'Compiler-Interpreter');
smalltalk.ASTDebugger.comment="ASTDebugger is a debugger to Amber.\x0aIt uses an AST interpreter to step through the code.\x0a\x0aASTDebugger instances are created from a `MethodContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0aUse the methods of the 'stepping' protocol to do stepping."
smalltalk.addMethod(
"_buildAST",
smalltalk.method({
selector: "buildAST",
category: 'initialization',
fn: function (){
var self=this;
var ast;
return smalltalk.withContext(function($ctx1) { var $1;
ast=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(_st(_st(self)._method())._source());
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(_st(_st(_st(self)._context())._receiver())._class()))._visit_(ast);
$1=ast;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildAST",{ast:ast}, smalltalk.ASTDebugger)})},
args: [],
source: "buildAST\x0a\x09\x22Build the AST tree from the method source code.\x0a    The AST is annotated with a SemanticAnalyzer, \x0a    to know the semantics and bindings of each node needed for later debugging\x22\x0a    \x0a    | ast |\x0a    \x0a    ast := Smalltalk current parse: self method source.\x0a    (SemanticAnalyzer on: self context receiver class)\x0a    \x09visit: ast.    \x0a    \x0a    ^ ast",
messageSends: ["parse:", "source", "method", "current", "visit:", "on:", "class", "receiver", "context"],
referencedClasses: ["Smalltalk", "SemanticAnalyzer"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.ASTDebugger)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=_st((smalltalk.AIContext || AIContext))._new();
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext}, smalltalk.ASTDebugger)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context := AIContext new.",
messageSends: ["new"],
referencedClasses: ["AIContext"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_defaultInterpreterClass",
smalltalk.method({
selector: "defaultInterpreterClass",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.ASTSteppingInterpreter || ASTSteppingInterpreter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInterpreterClass",{}, smalltalk.ASTDebugger)})},
args: [],
source: "defaultInterpreterClass\x0a\x09^ ASTSteppingInterpreter",
messageSends: [],
referencedClasses: ["ASTSteppingInterpreter"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_initializeInterpreter",
smalltalk.method({
selector: "initializeInterpreter",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._interpreter())._interpret_(_st(_st(_st(self)._buildAST())._nodes())._first());
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{}, smalltalk.ASTDebugger)})},
args: [],
source: "initializeInterpreter\x0a\x09self interpreter interpret: self buildAST nodes first",
messageSends: ["interpret:", "first", "nodes", "buildAST", "interpreter"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_initializeWithContext_",
smalltalk.method({
selector: "initializeWithContext:",
category: 'initialization',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._context_(_st((smalltalk.AIContext || AIContext))._fromMethodContext_(aMethodContext));
_st(self)._initializeInterpreter();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithContext:",{aMethodContext:aMethodContext}, smalltalk.ASTDebugger)})},
args: ["aMethodContext"],
source: "initializeWithContext: aMethodContext\x0a\x09\x22TODO: do we need to handle block contexts?\x22\x0a    \x0a    self context: (AIContext fromMethodContext: aMethodContext).\x0a    self initializeInterpreter",
messageSends: ["context:", "fromMethodContext:", "initializeInterpreter"],
referencedClasses: ["AIContext"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpreter",
smalltalk.method({
selector: "interpreter",
category: 'accessing',
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
args: [],
source: "interpreter\x0a\x09^ interpreter ifNil: [ interpreter := self defaultInterpreterClass new ]",
messageSends: ["ifNil:", "new", "defaultInterpreterClass"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpreter_",
smalltalk.method({
selector: "interpreter:",
category: 'accessing',
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@interpreter"]=anInterpreter;
return self}, function($ctx1) {$ctx1.fill(self,"interpreter:",{anInterpreter:anInterpreter}, smalltalk.ASTDebugger)})},
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._context())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{}, smalltalk.ASTDebugger)})},
args: [],
source: "method\x0a\x09^ self context method",
messageSends: ["method", "context"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_restart",
smalltalk.method({
selector: "restart",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{}, smalltalk.ASTDebugger)})},
args: [],
source: "restart\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"resume",{}, smalltalk.ASTDebugger)})},
args: [],
source: "resume\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_step",
smalltalk.method({
selector: "step",
category: 'stepping',
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
args: [],
source: "step\x0a\x09\x22The ASTSteppingInterpreter stops at each node interpretation. \x0a    One step will interpret nodes until:\x0a    - we get at the end\x0a    - the next node is a stepping node (send, assignment, etc.)\x22\x0a    \x0a\x09[ (self interpreter nextNode notNil and: [ self interpreter nextNode stopOnStepping ])\x0a\x09\x09or: [ self interpreter atEnd not ] ] \x0a \x09\x09\x09whileFalse: [\x0a\x09\x09\x09\x09self interpreter step. \x0a                self step ]",
messageSends: ["whileFalse:", "step", "interpreter", "or:", "not", "atEnd", "and:", "stopOnStepping", "nextNode", "notNil"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_stepInto",
smalltalk.method({
selector: "stepInto",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{}, smalltalk.ASTDebugger)})},
args: [],
source: "stepInto\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_stepOver",
smalltalk.method({
selector: "stepOver",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._step();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{}, smalltalk.ASTDebugger)})},
args: [],
source: "stepOver\x0a\x09self step",
messageSends: ["step"],
referencedClasses: []
}),
smalltalk.ASTDebugger);


smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: 'instance creation',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._initializeWithContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"context:",{aMethodContext:aMethodContext}, smalltalk.ASTDebugger.klass)})},
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09^ self new\x0a    \x09initializeWithContext: aMethodContext;\x0a        yourself",
messageSends: ["initializeWithContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ASTDebugger.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.Object, ['currentNode', 'context', 'shouldReturn', 'result'], 'Compiler-Interpreter');
smalltalk.ASTInterpreter.comment="ASTIntepreter is like a `NodeVisitor`, interpreting nodes one after each other.\x0aIt is built using Continuation Passing Style for stepping purposes.\x0a\x0aUsage example:\x0a\x0a    | ast interpreter |\x0a    ast := Smalltalk current parse: 'foo 1+2+4'.\x0a    (SemanticAnalyzer on: Object) visit: ast.\x0a\x0a    ASTInterpreter new\x0a        interpret: ast nodes first;\x0a        result \x22Answers 7\x22"
smalltalk.addMethod(
"_assign_to_",
smalltalk.method({
selector: "assign:to:",
category: 'private',
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
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09^ aNode binding isInstanceVar \x0a    \x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a      \x09ifFalse: [ self context localAt: aNode value put: anObject ]",
messageSends: ["ifTrue:ifFalse:", "instVarAt:put:", "value", "receiver", "context", "localAt:put:", "isInstanceVar", "binding"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
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
args: [],
source: "context\x0a\x09^ context ifNil: [ context := AIContext new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["AIContext"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anAIContext:anAIContext}, smalltalk.ASTInterpreter)})},
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_continue_value_",
smalltalk.method({
selector: "continue:value:",
category: 'private',
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@result"]=anObject;
_st(aBlock)._value_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"continue:value:",{aBlock:aBlock,anObject:anObject}, smalltalk.ASTInterpreter)})},
args: ["aBlock", "anObject"],
source: "continue: aBlock value: anObject\x0a\x09result := anObject.\x0a    aBlock value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_currentNode",
smalltalk.method({
selector: "currentNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{}, smalltalk.ASTInterpreter)})},
args: [],
source: "currentNode\x0a\x09^ currentNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'private',
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
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function. \x0a    aString is not sandboxed.\x22\x0a    \x0a    | source function |\x0a    \x0a    source := String streamContents: [ :str |\x0a    \x09str nextPutAll: '(function('.\x0a        self context locals keys \x0a        \x09do: [ :each | str nextPutAll: each ]\x0a          \x09separatedBy: [ str nextPutAll: ',' ].\x0a        str \x0a        \x09nextPutAll: '){ return (function() {';\x0a        \x09nextPutAll: aString;\x0a            nextPutAll: '})() })' ].\x0a            \x0a\x09function := Compiler new eval: source.\x0a    \x0a\x09^ function valueWithPossibleArguments: self context locals values",
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"],
referencedClasses: ["String", "Compiler"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTInterpreter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    shouldReturn := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
category: 'interpreting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldReturn"]=false;
_st(self)._interpret_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {self["@result"]=value;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "interpret: aNode\x0a\x09shouldReturn := false.\x0a    self interpret: aNode continue: [ :value |\x0a    \x09result := value ]",
messageSends: ["interpret:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09shouldReturn ifTrue: [ ^ self ].\x0a\x0a\x09aNode isNode \x0a    \x09ifTrue: [ \x09\x0a        \x09currentNode := aNode.\x0a            self interpretNode: aNode continue: [ :value |\x0a  \x09\x09\x09\x09self continue: aBlock value: value ] ]\x0a        ifFalse: [ self continue: aBlock value: aNode ]",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "interpretNode:continue:", "continue:value:", "isNode"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_",
smalltalk.method({
selector: "interpretAll:continue:",
category: 'private',
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_result_(aCollection,aBlock,_st((smalltalk.OrderedCollection || OrderedCollection))._new());
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:",{aCollection:aCollection,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aCollection", "aBlock"],
source: "interpretAll: aCollection continue: aBlock\x0a\x09self \x0a    \x09interpretAll: aCollection \x0a        continue: aBlock \x0a        result: OrderedCollection new",
messageSends: ["interpretAll:continue:result:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_result_",
smalltalk.method({
selector: "interpretAll:continue:result:",
category: 'private',
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
args: ["nodes", "aBlock", "aCollection"],
source: "interpretAll: nodes continue: aBlock result: aCollection\x0a\x09nodes isEmpty \x0a    \x09ifTrue: [ self continue: aBlock value: aCollection ]\x0a    \x09ifFalse: [\x0a    \x09\x09self interpret: nodes first continue: [:value |\x0a    \x09\x09\x09self \x0a                \x09interpretAll: nodes allButFirst \x0a                    continue: aBlock\x0a  \x09\x09\x09\x09\x09result: aCollection, { value } ] ]",
messageSends: ["ifTrue:ifFalse:", "continue:value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ",", "isEmpty"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAssignmentNode_continue_",
smalltalk.method({
selector: "interpretAssignmentNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._right(),(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(self)._assign_to_(_st(aNode)._left(),value));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretAssignmentNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretAssignmentNode: aNode continue: aBlock\x0a\x09self interpret: aNode right continue: [ :value |\x0a    \x09self \x0a        \x09continue: aBlock\x0a            value: (self assign: aNode left to: value) ]",
messageSends: ["interpret:continue:", "right", "continue:value:", "assign:to:", "left"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretBlockNode_continue_",
smalltalk.method({
selector: "interpretBlockNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretBlockNode: aNode continue: aBlock\x0a\x09\x22TODO: Context should be set\x22\x0a    \x0a    self \x0a    \x09continue: aBlock \x0a        value: [ self interpret: aNode nodes first; result ]",
messageSends: ["continue:value:", "interpret:", "first", "nodes", "result"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretBlockSequenceNode_continue_",
smalltalk.method({
selector: "interpretBlockSequenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretSequenceNode_continue_(aNode,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockSequenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretBlockSequenceNode: aNode continue: aBlock\x0a\x09self interpretSequenceNode: aNode continue: aBlock",
messageSends: ["interpretSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretCascadeNode_continue_",
smalltalk.method({
selector: "interpretCascadeNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretCascadeNode: aNode continue: aBlock\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09\x0a    self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09\x22Only interpret the receiver once\x22\x0a        aNode nodes do: [ :each | each receiver: receiver ].\x0a  \x0a    \x09self \x0a        \x09interpretAll: aNode nodes allButLast\x0a    \x09\x09continue: [\x0a              \x09self \x0a                \x09interpret: aNode nodes last\x0a                \x09continue: [ :val | self continue: aBlock value: val ] ] ]",
messageSends: ["interpret:continue:", "receiver", "do:", "receiver:", "nodes", "interpretAll:continue:", "allButLast", "last", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretClassReferenceNode_continue_",
smalltalk.method({
selector: "interpretClassReferenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_value_(aBlock,_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretClassReferenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretClassReferenceNode: aNode continue: aBlock\x0a\x09self continue: aBlock value: (Smalltalk current at: aNode value)",
messageSends: ["continue:value:", "at:", "value", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretDynamicArrayNode_continue_",
smalltalk.method({
selector: "interpretDynamicArrayNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,array);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicArrayNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretDynamicArrayNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a    \x09self \x0a        \x09continue: aBlock\x0a\x09\x09\x09value: array ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretDynamicDictionaryNode_continue_",
smalltalk.method({
selector: "interpretDynamicDictionaryNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretDynamicDictionaryNode: aNode continue: aBlock\x0a    self interpretAll: aNode nodes continue: [ :array | | hashedCollection |\x0a    \x09hashedCollection := HashedCollection new.\x0a        array do: [ :each | hashedCollection add: each ].\x0a        self \x09\x0a        \x09continue: aBlock\x0a            value: hashedCollection ]",
messageSends: ["interpretAll:continue:", "nodes", "new", "do:", "add:", "continue:value:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretJSStatementNode_continue_",
smalltalk.method({
selector: "interpretJSStatementNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldReturn"]=true;
_st(self)._continue_value_(aBlock,_st(self)._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretJSStatementNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretJSStatementNode: aNode continue: aBlock\x0a\x09shouldReturn := true.\x0a\x09self continue: aBlock value: (self eval: aNode source)",
messageSends: ["continue:value:", "eval:", "source"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretMethodNode_continue_",
smalltalk.method({
selector: "interpretMethodNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(array)._first());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretMethodNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretMethodNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a    \x09self continue: aBlock value: array first ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "first"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretNode_continue_",
smalltalk.method({
selector: "interpretNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aNode)._interpreter_continue_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretNode: aNode continue: aBlock\x0a    aNode interpreter: self continue: aBlock",
messageSends: ["interpreter:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretReturnNode_continue_",
smalltalk.method({
selector: "interpretReturnNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(_st(aNode)._nodes())._first(),(function(value){
return smalltalk.withContext(function($ctx2) {self["@shouldReturn"]=true;
self["@shouldReturn"];
return _st(self)._continue_value_(aBlock,value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretReturnNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretReturnNode: aNode continue: aBlock\x0a    self interpret: aNode nodes first continue: [ :value |\x0a    \x09shouldReturn := true.\x0a\x09\x09self continue: aBlock value: value ]",
messageSends: ["interpret:continue:", "first", "nodes", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretSendNode_continue_",
smalltalk.method({
selector: "interpretSendNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretSendNode: aNode continue: aBlock\x0a\x09\x22TODO: Handle super sends\x22\x0a    \x0a    self interpret: aNode receiver continue: [ :receiver |\x0a    \x09self interpretAll: aNode arguments continue: [ :args |\x0a    \x09\x09self \x0a            \x09messageFromSendNode: aNode \x0a                arguments: args\x0a                do: [ :message |\x0a        \x09\x09\x09self context pc: self context pc + 1.\x0a        \x09\x09\x09self \x0a            \x09\x09\x09continue: aBlock \x0a                \x09\x09value: (message sendTo: receiver) ] ] ]",
messageSends: ["interpret:continue:", "receiver", "interpretAll:continue:", "arguments", "messageFromSendNode:arguments:do:", "pc:", "+", "pc", "context", "continue:value:", "sendTo:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretSequenceNode_continue_",
smalltalk.method({
selector: "interpretSequenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_value_(aBlock,_st(array)._last());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSequenceNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretSequenceNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a    \x09self continue: aBlock value: array last ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretValueNode_continue_",
smalltalk.method({
selector: "interpretValueNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_value_(aBlock,_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"interpretValueNode:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretValueNode: aNode continue: aBlock\x0a\x09self continue: aBlock value: aNode value",
messageSends: ["continue:value:", "value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretVariableNode_continue_",
smalltalk.method({
selector: "interpretVariableNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretVariableNode: aNode continue: aBlock\x0a    self \x0a    \x09continue: aBlock\x0a        value: (aNode binding isInstanceVar\x0a\x09\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09\x09ifFalse: [ self context localAt: aNode value ])",
messageSends: ["continue:value:", "ifTrue:ifFalse:", "instVarAt:", "value", "receiver", "context", "localAt:", "isInstanceVar", "binding"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_arguments_do_",
smalltalk.method({
selector: "messageFromSendNode:arguments:do:",
category: 'private',
fn: function (aSendNode,aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Message || Message))._new();
_st($1)._selector_(_st(aSendNode)._selector());
_st($1)._arguments_(aCollection);
$2=_st($1)._yourself();
_st(self)._continue_value_(aBlock,$2);
return self}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:do:",{aSendNode:aSendNode,aCollection:aCollection,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aSendNode", "aCollection", "aBlock"],
source: "messageFromSendNode: aSendNode arguments: aCollection do: aBlock\x0a    self \x0a        continue: aBlock\x0a        value: (Message new\x0a    \x09\x09selector: aSendNode selector;\x0a        \x09arguments: aCollection;\x0a        \x09yourself)",
messageSends: ["continue:value:", "selector:", "selector", "new", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{}, smalltalk.ASTInterpreter)})},
args: [],
source: "result\x0a\x09^ result",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_shouldReturn",
smalltalk.method({
selector: "shouldReturn",
category: 'testing',
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
args: [],
source: "shouldReturn\x0a\x09^ shouldReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTSteppingInterpreter', smalltalk.ASTInterpreter, ['continuation', 'nextNode'], 'Compiler-Interpreter');
smalltalk.ASTSteppingInterpreter.comment="ASTSteppingInterpreter is an interpreter with stepping capabilities.\x0aUse `#step` to actually interpret the next node.\x0a\x0aUsage example:\x0a\x0a    | ast interpreter |\x0a    ast := Smalltalk current parse: 'foo 1+2+4'.\x0a    (SemanticAnalyzer on: Object) visit: ast.\x0a\x0a    interpreter := ASTSteppingInterpreter new\x0a        interpret: ast nodes first;\x0a        yourself.\x0a        \x0a    debugger step; step.\x0a    debugger step; step.\x0a    debugger result.\x22Answers 1\x22\x0a    debugger step.\x0a    debugger result. \x22Answers 3\x22\x0a    debugger step.\x0a    debugger result. \x22Answers 7\x22\x0a    "
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._shouldReturn())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._nextNode()).__eq_eq(_st(self)._currentNode());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{}, smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "atEnd\x0a\x09^ self shouldReturn or: [ self nextNode == self currentNode ]",
messageSends: ["or:", "==", "currentNode", "nextNode", "shouldReturn"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ASTInterpreter.fn.prototype._initialize.apply(_st(self), []);
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    continuation := [  ]",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nextNode"]=aNode;
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.ASTInterpreter.fn.prototype._interpret_continue_.apply(_st(self), [aNode,aBlock]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTSteppingInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09nextNode := aNode.\x0a\x09continuation := [ \x0a    \x09super interpret: aNode continue: aBlock ]",
messageSends: ["interpret:continue:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_nextNode",
smalltalk.method({
selector: "nextNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@nextNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{}, smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "nextNode\x0a\x09^ nextNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
"_step",
smalltalk.method({
selector: "step",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@continuation"])._value();
return self}, function($ctx1) {$ctx1.fill(self,"step",{}, smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "step\x0a\x09continuation value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);



smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.Node)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretNode: self continue: aBlock",
messageSends: ["interpretNode:continue:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.Node)})},
args: [],
source: "isSteppingNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretAssignmentNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.AssignmentNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretAssignmentNode: self continue: aBlock",
messageSends: ["interpretAssignmentNode:continue:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.AssignmentNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretBlockNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.BlockNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretBlockNode: self continue: aBlock",
messageSends: ["interpretBlockNode:continue:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.BlockNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretCascadeNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.CascadeNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretCascadeNode: self continue: aBlock",
messageSends: ["interpretCascadeNode:continue:"],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretDynamicArrayNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.DynamicArrayNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretDynamicArrayNode: self continue: aBlock",
messageSends: ["interpretDynamicArrayNode:continue:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.DynamicArrayNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretDynamicDictionaryNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.DynamicDictionaryNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretDynamicDictionaryNode: self continue: aBlock",
messageSends: ["interpretDynamicDictionaryNode:continue:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.DynamicDictionaryNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretJSStatementNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.JSStatementNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretJSStatementNode: self continue: aBlock",
messageSends: ["interpretJSStatementNode:continue:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.JSStatementNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretMethodNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.MethodNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretMethodNode: self continue: aBlock",
messageSends: ["interpretMethodNode:continue:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretReturnNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ReturnNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretReturnNode: self continue: aBlock",
messageSends: ["interpretReturnNode:continue:"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretSendNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.SendNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretSendNode: self continue: aBlock",
messageSends: ["interpretSendNode:continue:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSteppingNode",
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{}, smalltalk.SendNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.SequenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretSequenceNode: self continue: aBlock",
messageSends: ["interpretSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretBlockSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.BlockSequenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretBlockSequenceNode: self continue: aBlock",
messageSends: ["interpretBlockSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretValueNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ValueNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretValueNode: self continue: aBlock",
messageSends: ["interpretValueNode:continue:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretVariableNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.VariableNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretVariableNode: self continue: aBlock",
messageSends: ["interpretVariableNode:continue:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_interpreter_continue_",
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anInterpreter)._interpretClassReferenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock}, smalltalk.ClassReferenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretClassReferenceNode: self continue: aBlock",
messageSends: ["interpretClassReferenceNode:continue:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);

