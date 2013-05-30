smalltalk.addPackage('Compiler-Interpreter');
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'innerContext', 'pc', 'locals', 'method', 'ast', 'interpreter', 'methodContext'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._ast())._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._localAt_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.AIContext)})},
messageSends: ["collect:", "arguments", "ast", "localAt:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@methodContext"])._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.AIContext)})},
messageSends: ["asString"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "ast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@ast"];
if(($receiver = $1) == nil || $receiver == undefined){
self._initializeAST();
} else {
$1;
};
$2=self["@ast"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"ast",{},smalltalk.AIContext)})},
messageSends: ["ifNil:", "initializeAST"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isBlockContext();
if(smalltalk.assert($2)){
$1=_st(self._outerContext())._methodContext();
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"home",{},smalltalk.AIContext)})},
messageSends: ["ifTrue:ifFalse:", "methodContext", "outerContext", "isBlockContext"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAST",
fn: function (){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
self["@ast"]=_st(self._method())._ast();
_st(_st($SemanticAnalyzer())._on_(_st(self._method())._methodClass()))._visit_(self["@ast"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeAST",{},smalltalk.AIContext)})},
messageSends: ["ast", "method", "visit:", "on:", "methodClass"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@methodContext"]=aMethodContext;
self._pc_(_st(aMethodContext)._pc());
self._receiver_(_st(aMethodContext)._receiver());
self._method_(_st(aMethodContext)._method());
$1=_st(aMethodContext)._outerContext();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var outer;
outer=$receiver;
$2=_st(outer)._methodContext();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
self._outerContext_(_st(self._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
_st(_st(aMethodContext)._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self._locals())._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},smalltalk.AIContext)})},
messageSends: ["pc:", "pc", "receiver:", "receiver", "method:", "method", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "methodContext", "keysAndValuesDo:", "at:put:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
fn: function (){
var self=this;
function $Interpreter(){return smalltalk.Interpreter||(typeof Interpreter=="undefined"?nil:Interpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($Interpreter())._new();
_st($1)._context_(self);
_st($1)._node_(self._retrieveNode());
$2=_st($1)._yourself();
self["@interpreter"]=$2;
$3=_st(self._innerContext())._isBlockContext();
if(! smalltalk.assert($3)){
self._setupInterpreter_(self["@interpreter"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{},smalltalk.AIContext)})},
messageSends: ["context:", "new", "node:", "retrieveNode", "yourself", "ifFalse:", "setupInterpreter:", "isBlockContext", "innerContext"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeLocals",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@locals"]=_st($Dictionary())._new();
_st(self["@locals"])._at_put_("thisContext",self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeLocals",{},smalltalk.AIContext)})},
messageSends: ["new", "at:put:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "innerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerContext",{},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "innerContext:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerContext"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"innerContext:",{anAIContext:anAIContext},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@interpreter"];
if(($receiver = $1) == nil || $receiver == undefined){
self._initializeInterpreter();
} else {
$1;
};
$2=self["@interpreter"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.AIContext)})},
messageSends: ["ifNil:", "initializeInterpreter"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@methodContext"])._isBlockContext();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.AIContext)})},
messageSends: ["isBlockContext"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString},smalltalk.AIContext)})},
messageSends: ["at:ifAbsent:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._locals())._at_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject},smalltalk.AIContext)})},
messageSends: ["at:put:", "locals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@locals"];
if(($receiver = $1) == nil || $receiver == undefined){
self._initializeLocals();
} else {
$1;
};
$2=self["@locals"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.AIContext)})},
messageSends: ["ifNil:", "initializeLocals"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@outerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerContext"]=anAIContext;
_st(self["@outerContext"])._innerContext_(self);
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext},smalltalk.AIContext)})},
messageSends: ["innerContext:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@pc"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@pc"]=(0);
$1=self["@pc"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pc",{},smalltalk.AIContext)})},
messageSends: ["ifNil:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger},smalltalk.AIContext)})},
messageSends: []}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._localAt_("self");
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.AIContext)})},
messageSends: ["localAt:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._localAt_put_("self",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.AIContext)})},
messageSends: ["localAt:put:"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "retrieveNode",
fn: function (){
var self=this;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ASTPCNodeVisitor())._new();
_st($2)._context_(self);
_st($2)._visit_(self._ast());
$3=_st($2)._currentNode();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"retrieveNode",{},smalltalk.AIContext)})},
messageSends: ["context:", "new", "visit:", "ast", "currentNode"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._method();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(self._method())._selector();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.AIContext)})},
messageSends: ["ifNotNil:", "selector", "method"]}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "setupInterpreter:",
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self._innerContext())._arguments())._reversed())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(anInterpreter)._push_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anInterpreter)._push_(_st(self._innerContext())._receiver());
return self}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter},smalltalk.AIContext)})},
messageSends: ["do:", "push:", "reversed", "arguments", "innerContext", "receiver"]}),
smalltalk.AIContext);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext},smalltalk.AIContext.klass)})},
messageSends: ["initializeFromMethodContext:", "new", "yourself"]}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTDebugger', smalltalk.Object, ['interpreter', 'context'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._atEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.ASTDebugger)})},
messageSends: ["atEnd", "interpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "buildAST",
fn: function (){
var self=this;
var ast;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ast=_st(_st($Smalltalk())._current())._parse_(_st(self._method())._source());
_st(_st($SemanticAnalyzer())._on_(_st(_st(self._context())._receiver())._class()))._visit_(ast);
$1=ast;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildAST",{ast:ast},smalltalk.ASTDebugger)})},
messageSends: ["parse:", "current", "source", "method", "visit:", "on:", "class", "receiver", "context"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInterpreterClass",
fn: function (){
var self=this;
function $ASTSteppingInterpreter(){return smalltalk.ASTSteppingInterpreter||(typeof ASTSteppingInterpreter=="undefined"?nil:ASTSteppingInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$ASTSteppingInterpreter();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInterpreterClass",{},smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
fn: function (){
var self=this;
var ast,next;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._buildAST();
$1=_st($ASTPCNodeVisitor())._new();
_st($1)._context_(self._context());
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
next=$2;
_st(self._interpreter())._interpret_(next);
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{ast:ast,next:next},smalltalk.ASTDebugger)})},
messageSends: ["buildAST", "context:", "new", "context", "visit:", "currentNode", "interpret:", "interpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._context_(aContext);
self._initializeInterpreter();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithContext:",{aContext:aContext},smalltalk.ASTDebugger)})},
messageSends: ["context:", "initializeInterpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@interpreter"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@interpreter"]=_st(self._defaultInterpreterClass())._new();
$1=self["@interpreter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.ASTDebugger)})},
messageSends: ["ifNil:", "new", "defaultInterpreterClass"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:",
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interpreter"]=anInterpreter;
return self}, function($ctx1) {$ctx1.fill(self,"interpreter:",{anInterpreter:anInterpreter},smalltalk.ASTDebugger)})},
messageSends: []}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.ASTDebugger)})},
messageSends: ["method", "context"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._nextNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.ASTDebugger)})},
messageSends: ["nextNode", "interpreter"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(self._interpreter())._nextNode())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self._interpreter())._nextNode())._stopOnStepping();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self._interpreter())._atEnd())._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._interpreter())._step();
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ASTDebugger)})},
messageSends: ["whileFalse:", "or:", "and:", "notNil", "nextNode", "interpreter", "stopOnStepping", "not", "atEnd", "step"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepInto",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{},smalltalk.ASTDebugger)})},
messageSends: ["shouldBeImplemented"]}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._step();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.ASTDebugger)})},
messageSends: ["step"]}),
smalltalk.ASTDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeWithContext_(aContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTDebugger.klass)})},
messageSends: ["initializeWithContext:", "new", "yourself"]}),
smalltalk.ASTDebugger.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.Object, ['currentNode', 'nextNode', 'context', 'shouldReturn', 'result'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
fn: function (aNode,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($2)){
$1=_st(_st(self._context())._receiver())._instVarAt_put_(_st(aNode)._value(),anObject);
} else {
$1=_st(self._context())._localAt_put_(_st(aNode)._value(),anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject},smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@context"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@context"]=_st($AIContext())._new();
$1=self["@context"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTInterpreter)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anAIContext:anAIContext},smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "continue:value:",
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@result"]=anObject;
_st(aBlock)._value_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"continue:value:",{aBlock:aBlock,anObject:anObject},smalltalk.ASTInterpreter)})},
messageSends: ["value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "currentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{},smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
var source,function_;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
source=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(str)._nextPutAll_("(function(");
_st(_st(_st(self._context())._locals())._keys())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(",");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})}));
function_=_st(_st($Compiler())._new())._eval_(source);
$3=_st(function_)._valueWithPossibleArguments_(_st(_st(self._context())._locals())._values());
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},smalltalk.ASTInterpreter)})},
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ASTInterpreter)})},
messageSends: ["initialize"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldReturn"]=false;
self._interpret_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {
self["@result"]=value;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode},smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@shouldReturn"];
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(aNode)._isNode();
if(smalltalk.assert($3)){
self["@currentNode"]=aNode;
self["@currentNode"];
self._interpretNode_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
} else {
self._continue_value_(aBlock,aNode);
};
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "isNode", "interpretNode:continue:", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAll:continue:",
fn: function (aCollection,aBlock){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_result_(aCollection,aBlock,_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:",{aCollection:aCollection,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:result:", "new"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAll:continue:result:",
fn: function (nodes,aBlock,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(nodes)._isEmpty();
if(smalltalk.assert($1)){
self._continue_value_(aBlock,aCollection);
} else {
self._interpret_continue_(_st(nodes)._first(),(function(value){
return smalltalk.withContext(function($ctx2) {
return self._interpretAll_continue_result_(_st(nodes)._allButFirst(),aBlock,_st(aCollection).__comma([value]));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:result:",{nodes:nodes,aBlock:aBlock,aCollection:aCollection},smalltalk.ASTInterpreter)})},
messageSends: ["ifTrue:ifFalse:", "isEmpty", "continue:value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ","]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAssignmentNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_continue_(_st(aNode)._right(),(function(value){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,self._assign_to_(_st(aNode)._left(),value));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretAssignmentNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "right", "continue:value:", "assign:to:", "left"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretBlockNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._continue_value_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return self._withBlockContext_((function(){
return smalltalk.withContext(function($ctx3) {
$1=self;
_st($1)._interpret_(_st(_st(aNode)._nodes())._first());
$2=_st($1)._result();
return $2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "withBlockContext:", "interpret:", "first", "nodes", "result"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretBlockSequenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretSequenceNode_continue_(aNode,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockSequenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretSequenceNode:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretCascadeNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._receiver_(receiver);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
return self._interpretAll_continue_(_st(_st(aNode)._nodes())._allButLast(),(function(){
return smalltalk.withContext(function($ctx3) {
return self._interpret_continue_(_st(_st(aNode)._nodes())._last(),(function(val){
return smalltalk.withContext(function($ctx4) {
return self._continue_value_(aBlock,val);
}, function($ctx4) {$ctx4.fillBlock({val:val},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretCascadeNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "receiver", "do:", "nodes", "receiver:", "interpretAll:continue:", "allButLast", "last", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretClassReferenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
self._continue_value_(aBlock,_st(_st($Smalltalk())._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretClassReferenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "at:", "current", "value"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretDynamicArrayNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,array);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicArrayNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretDynamicDictionaryNode:continue:",
fn: function (aNode,aBlock){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
var hashedCollection;
return smalltalk.withContext(function($ctx2) {
hashedCollection=_st($HashedCollection())._new();
hashedCollection;
_st(array)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(hashedCollection)._add_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
return self._continue_value_(aBlock,hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({array:array,hashedCollection:hashedCollection},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicDictionaryNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "new", "do:", "add:", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretJSStatementNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldReturn"]=true;
self._continue_value_(aBlock,self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretJSStatementNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "eval:", "source"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretMethodNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,_st(array)._first());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretMethodNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "first"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._interpreter_continue_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpreter:continue:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretReturnNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_continue_(_st(_st(aNode)._nodes())._first(),(function(value){
return smalltalk.withContext(function($ctx2) {
self["@shouldReturn"]=true;
self["@shouldReturn"];
return self._continue_value_(aBlock,value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretReturnNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "first", "nodes", "continue:value:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSendNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {
return self._interpretAll_continue_(_st(aNode)._arguments(),(function(args){
return smalltalk.withContext(function($ctx3) {
return self._messageFromSendNode_arguments_do_(aNode,args,(function(message){
return smalltalk.withContext(function($ctx4) {
_st(self._context())._pc_(_st(_st(self._context())._pc()).__plus((1)));
return self._continue_value_(aBlock,self._sendMessage_to_superSend_(message,receiver,_st(aNode)._superSend()));
}, function($ctx4) {$ctx4.fillBlock({message:message},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({args:args},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSendNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpret:continue:", "receiver", "interpretAll:continue:", "arguments", "messageFromSendNode:arguments:do:", "pc:", "context", "+", "pc", "continue:value:", "sendMessage:to:superSend:", "superSend"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSequenceNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,_st(array)._last());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSequenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "last"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretValueNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._continue_value_(aBlock,_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"interpretValueNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "value"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretVariableNode:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=self;
$2=aBlock;
$4=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($4)){
$3=_st(_st(self._context())._receiver())._instVarAt_(_st(aNode)._value());
} else {
$3=_st(self._context())._localAt_(_st(aNode)._value());
};
_st($1)._continue_value_($2,$3);
return self}, function($ctx1) {$ctx1.fill(self,"interpretVariableNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:", "receiver", "context", "value", "localAt:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageFromSendNode:arguments:do:",
fn: function (aSendNode,aCollection,aBlock){
var self=this;
function $Message(){return smalltalk.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Message())._new();
_st($1)._selector_(_st(aSendNode)._selector());
_st($1)._arguments_(aCollection);
$2=_st($1)._yourself();
self._continue_value_(aBlock,$2);
return self}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:do:",{aSendNode:aSendNode,aCollection:aCollection,aBlock:aBlock},smalltalk.ASTInterpreter)})},
messageSends: ["continue:value:", "selector:", "new", "selector", "arguments:", "yourself"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@nextNode"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._currentNode();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.ASTInterpreter)})},
messageSends: ["ifNil:", "currentNode"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.ASTInterpreter)})},
messageSends: []}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "sendMessage:to:superSend:",
fn: function (aMessage,anObject,aBoolean){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
$1=aBoolean;
if(! smalltalk.assert($1)){
$2=_st(aMessage)._sendTo_(anObject);
return $2;
};
$3=_st(_st(anObject)._class())._superclass();
if(($receiver = $3) == nil || $receiver == undefined){
$4=self._messageNotUnderstood_receiver_(aMessage,anObject);
return $4;
} else {
$3;
};
method=_st(_st(_st(_st(anObject)._class())._superclass())._methodDictionary())._at_ifAbsent_(_st(aMessage)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
$5=self._messageNotUnderstood_receiver_(aMessage,anObject);
throw $early=[$5];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st(_st(method)._fn())._applyTo_arguments_(anObject,_st(aMessage)._arguments());
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},smalltalk.ASTInterpreter)})},
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "applyTo:arguments:", "fn", "arguments"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@shouldReturn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldReturn",{},smalltalk.ASTInterpreter)})},
messageSends: ["ifNil:"]}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "withBlockContext:",
fn: function (aBlock){
var self=this;
var blockResult;
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($AIContext())._new();
_st($1)._outerContext_(self._context());
$2=_st($1)._yourself();
self._context_($2);
blockResult=_st(aBlock)._value();
self._context_(_st(self._context())._outerContext());
$3=blockResult;
return $3;
}, function($ctx1) {$ctx1.fill(self,"withBlockContext:",{aBlock:aBlock,blockResult:blockResult},smalltalk.ASTInterpreter)})},
messageSends: ["context:", "outerContext:", "new", "context", "yourself", "value", "outerContext"]}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTSteppingInterpreter', smalltalk.ASTInterpreter, ['continuation', 'nextNode'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shouldReturn())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._nextNode()).__eq_eq(self._currentNode());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.ASTSteppingInterpreter)})},
messageSends: ["or:", "shouldReturn", "==", "nextNode", "currentNode"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ASTInterpreter.fn.prototype._initialize.apply(_st(self), []);
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ASTSteppingInterpreter)})},
messageSends: ["initialize"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextNode"]=aNode;
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.ASTInterpreter.fn.prototype._interpret_continue_.apply(_st(self), [aNode,aBlock]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTSteppingInterpreter)})},
messageSends: ["interpret:continue:"]}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nextNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.ASTSteppingInterpreter)})},
messageSends: []}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@continuation"])._value();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ASTSteppingInterpreter)})},
messageSends: ["value"]}),
smalltalk.ASTSteppingInterpreter);



smalltalk.addClass('ASTPCNodeVisitor', smalltalk.NodeVisitor, ['useInlinings', 'pc', 'context', 'currentNode'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "currentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@pc"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pc",{},smalltalk.ASTPCNodeVisitor)})},
messageSends: ["ifNil:"]}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "pc:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "useInlinings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@useInlinings"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"useInlinings",{},smalltalk.ASTPCNodeVisitor)})},
messageSends: ["ifNil:"]}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "useInlinings:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@useInlinings"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"useInlinings:",{aBoolean:aBoolean},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.ASTPCNodeVisitor)})},
messageSends: []}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.NodeVisitor.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
$1=_st(self._pc()).__eq(_st(self._context())._pc());
if(! smalltalk.assert($1)){
$2=_st(aNode)._shouldBeInlined();
if(! smalltalk.assert($2)){
self._pc_(_st(self._pc()).__plus((1)));
self["@currentNode"]=aNode;
self["@currentNode"];
};
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},smalltalk.ASTPCNodeVisitor)})},
messageSends: ["visitSendNode:", "ifFalse:", "pc:", "+", "pc", "shouldBeInlined", "=", "context"]}),
smalltalk.ASTPCNodeVisitor);



smalltalk.addClass('Interpreter', smalltalk.NodeVisitor, ['node', 'context', 'stack', 'returnValue'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
fn: function (aNode,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($1)){
_st(_st(self._context())._receiver())._instVarAt_put_(_st(aNode)._value(),anObject);
} else {
_st(self._context())._localAt_put_(_st(aNode)._value(),anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject},smalltalk.Interpreter)})},
messageSends: ["ifTrue:ifFalse:", "instVarAt:put:", "value", "receiver", "context", "localAt:put:", "isInstanceVar", "binding"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shouldReturn())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Interpreter)})},
messageSends: ["or:", "isNil", "node", "shouldReturn"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
var source,function_;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
source=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(str)._nextPutAll_("(function(");
_st(_st(_st(self._context())._locals())._keys())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(",");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})}));
function_=_st(_st($Compiler())._new())._eval_(source);
$3=_st(function_)._valueWithPossibleArguments_(_st(_st(self._context())._locals())._values());
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},smalltalk.Interpreter)})},
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(self._node());
return self}, function($ctx1) {$ctx1.fill(self,"interpret",{},smalltalk.Interpreter)})},
messageSends: ["visit:", "node"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(aNode);
self._interpret();
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["node:", "interpret"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageFromSendNode:arguments:",
fn: function (aSendNode,aCollection){
var self=this;
function $Message(){return smalltalk.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Message())._new();
_st($2)._selector_(_st(aSendNode)._selector());
_st($2)._arguments_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,aCollection:aCollection},smalltalk.Interpreter)})},
messageSends: ["selector:", "selector", "new", "arguments:", "yourself"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageNotUnderstood:receiver:",
fn: function (aMessage,anObject){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._meesage_(aMessage);
_st($1)._receiver_(anObject);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject},smalltalk.Interpreter)})},
messageSends: ["meesage:", "new", "receiver:", "signal"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(self._node())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Interpreter)})},
messageSends: ["node:", "nextNode", "node"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "node",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stack())._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"peek",{},smalltalk.Interpreter)})},
messageSends: ["last", "stack"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "pop",
fn: function (){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=self._peek();
_st(self._stack())._removeLast();
$1=value;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pop",{value:value},smalltalk.Interpreter)})},
messageSends: ["peek", "removeLast", "stack"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.Interpreter)})},
messageSends: ["whileFalse:", "atEnd", "step"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "push:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stack())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject},smalltalk.Interpreter)})},
messageSends: ["add:", "stack"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(_st(self._context())._ast())._nextChild());
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.Interpreter)})},
messageSends: ["node:", "nextChild", "ast", "context"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._returnValue();
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._context())._receiver();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.Interpreter)})},
messageSends: ["ifNil:", "returnValue", "receiver", "context"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@returnValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"returnValue",{},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returnValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"returnValue:",{anObject:anObject},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "sendMessage:to:superSend:",
fn: function (aMessage,anObject,aBoolean){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
$1=aBoolean;
if(! smalltalk.assert($1)){
$2=_st(aMessage)._sendTo_(anObject);
return $2;
};
$3=_st(_st(anObject)._class())._superclass();
if(($receiver = $3) == nil || $receiver == undefined){
$4=self._messageNotUnderstood_receiver_(aMessage,anObject);
return $4;
} else {
$3;
};
method=_st(_st(_st(_st(anObject)._class())._superclass())._methodDictionary())._at_ifAbsent_(_st(aMessage)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
$5=self._messageNotUnderstood_receiver_(aMessage,anObject);
throw $early=[$5];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st(method)._sendTo_arguments_(anObject,_st(aMessage)._arguments());
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},smalltalk.Interpreter)})},
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "messageNotUnderstood:receiver:", "superclass", "class", "at:ifAbsent:", "selector", "methodDictionary", "sendTo:arguments:", "arguments"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._returnValue())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldReturn",{},smalltalk.Interpreter)})},
messageSends: ["notNil", "returnValue"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._next();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},smalltalk.Interpreter)})},
messageSends: ["next"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stack",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@stack"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@stack"]=_st($OrderedCollection())._new();
$1=self["@stack"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},smalltalk.Interpreter)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._interpret();
$2=_st($1)._next();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.Interpreter)})},
messageSends: ["interpret", "next"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._step();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isSteppingNode();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.Interpreter)})},
messageSends: ["step", "whileFalse:", "isSteppingNode", "node"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shouldReturn();
if(! smalltalk.assert($1)){
smalltalk.NodeVisitor.fn.prototype._visit_.apply(_st(self), [aNode]);
};
return self}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["ifFalse:", "visit:", "shouldReturn"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
value=self._pop();
self._pop();
self._push_(value);
self._assign_to_(_st(aNode)._left(),value);
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,value:value},smalltalk.Interpreter)})},
messageSends: ["pop", "push:", "assign:to:", "left"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
var blockNode,blockContext,block,interpreter;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
blockNode=_st(_st(_st(aNode)._nodes())._first())._copy();
_st(blockNode)._parent_(nil);
$1=_st(_st(self._context())._class())._new();
_st($1)._outerContext_(self._context());
$2=_st($1)._yourself();
blockContext=$2;
block=(function(){
return smalltalk.withContext(function($ctx2) {
interpreter=_st(self._class())._new();
interpreter;
$3=interpreter;
_st($3)._context_(blockContext);
_st($3)._node_(_st(blockNode)._nextChild());
$4=_st($3)._proceed();
$4;
self._returnValue_(_st(interpreter)._returnValue());
$5=_st(_st(interpreter)._stack())._isEmpty();
if(smalltalk.assert($5)){
return nil;
} else {
return _st(interpreter)._pop();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
self._push_(block);
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,blockNode:blockNode,blockContext:blockContext,block:block,interpreter:interpreter},smalltalk.Interpreter)})},
messageSends: ["copy", "first", "nodes", "parent:", "outerContext:", "new", "class", "context", "yourself", "context:", "node:", "nextChild", "proceed", "returnValue:", "returnValue", "ifTrue:ifFalse:", "isEmpty", "stack", "pop", "push:"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(_st($Smalltalk())._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["push:", "at:", "value", "current"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=[];
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(array)._addFirst_(self._pop());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._push_(array);
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},smalltalk.Interpreter)})},
messageSends: ["do:", "nodes", "addFirst:", "pop", "push:"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
var hashedCollection;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
hashedCollection=_st($HashedCollection())._new();
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(hashedCollection)._add_(self._pop());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._push_(hashedCollection);
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,hashedCollection:hashedCollection},smalltalk.Interpreter)})},
messageSends: ["new", "do:", "nodes", "add:", "pop", "push:"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._returnValue_(self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["returnValue:", "eval:", "source"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: []}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._returnValue_(self._pop());
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["returnValue:", "pop"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
var receiver,args,message,result;
return smalltalk.withContext(function($ctx1) { 
var $1;
args=_st(_st(aNode)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._pop();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
receiver=self._pop();
message=self._messageFromSendNode_arguments_(aNode,_st(args)._reversed());
result=self._sendMessage_to_superSend_(message,receiver,_st(aNode)._superSend());
_st(self._context())._pc_(_st(_st(self._context())._pc()).__plus((1)));
$1=_st(_st(aNode)._isCascadeSendNode())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aNode)._isLastChild())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self._push_(receiver);
} else {
self._push_(result);
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result},smalltalk.Interpreter)})},
messageSends: ["collect:", "arguments", "pop", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "pc:", "context", "+", "pc", "ifTrue:ifFalse:", "and:", "isCascadeSendNode", "not", "isLastChild", "push:"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["push:", "value"]}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
$1=_st(_st(aNode)._binding())._isUnknownVar();
if(smalltalk.assert($1)){
$2=self._push_(_st(window)._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Unknown variable");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return $2;
};
$3=self;
$5=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($5)){
$4=_st(_st(self._context())._receiver())._instVarAt_(_st(aNode)._value());
} else {
$4=_st(self._context())._localAt_(_st(aNode)._value());
};
_st($3)._push_($4);
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.Interpreter)})},
messageSends: ["ifTrue:", "isUnknownVar", "binding", "push:", "at:ifAbsent:", "value", "error:", "ifTrue:ifFalse:", "isInstanceVar", "instVarAt:", "receiver", "context", "localAt:"]}),
smalltalk.Interpreter);



smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.Node)})},
messageSends: ["interpretNode:continue:"]}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.Node)})},
messageSends: []}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretAssignmentNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.AssignmentNode)})},
messageSends: ["interpretAssignmentNode:continue:"]}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.AssignmentNode)})},
messageSends: []}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretBlockNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.BlockNode)})},
messageSends: ["interpretBlockNode:continue:"]}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.BlockNode)})},
messageSends: []}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretCascadeNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.CascadeNode)})},
messageSends: ["interpretCascadeNode:continue:"]}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretDynamicArrayNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.DynamicArrayNode)})},
messageSends: ["interpretDynamicArrayNode:continue:"]}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.DynamicArrayNode)})},
messageSends: []}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretDynamicDictionaryNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.DynamicDictionaryNode)})},
messageSends: ["interpretDynamicDictionaryNode:continue:"]}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.DynamicDictionaryNode)})},
messageSends: []}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretJSStatementNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.JSStatementNode)})},
messageSends: ["interpretJSStatementNode:continue:"]}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.JSStatementNode)})},
messageSends: []}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretMethodNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.MethodNode)})},
messageSends: ["interpretMethodNode:continue:"]}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretReturnNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ReturnNode)})},
messageSends: ["interpretReturnNode:continue:"]}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretSendNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.SendNode)})},
messageSends: ["interpretSendNode:continue:"]}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.SendNode)})},
messageSends: []}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.SequenceNode)})},
messageSends: ["interpretSequenceNode:continue:"]}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretBlockSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.BlockSequenceNode)})},
messageSends: ["interpretBlockSequenceNode:continue:"]}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretValueNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ValueNode)})},
messageSends: ["interpretValueNode:continue:"]}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretVariableNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.VariableNode)})},
messageSends: ["interpretVariableNode:continue:"]}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretClassReferenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ClassReferenceNode)})},
messageSends: ["interpretClassReferenceNode:continue:"]}),
smalltalk.ClassReferenceNode);

