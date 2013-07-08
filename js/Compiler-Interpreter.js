smalltalk.addPackage('Compiler-Interpreter');
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['methodContext', 'outerContext', 'pc', 'locals', 'method'], 'Compiler-Interpreter');
smalltalk.AIContext.comment="I am like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, my instances are not read-only.\x0a\x0aWhen debugging, my instances are created by copying the current `MethodContext` (thisContext)";
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@methodContext"])._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.AIContext)})},
args: [],
source: "asString\x0a\x09^ methodContext asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
category: 'accessing',
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
args: [],
source: "home\x0a\x09^ self isBlockContext \x0a\x09\x09ifTrue: [ self outerContext methodContext ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "methodContext", "outerContext", "isBlockContext"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'initialization',
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
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x09methodContext := aMethodContext.\x0a\x09\x0a\x09self pc: aMethodContext pc.\x0a\x09self receiver: aMethodContext receiver.\x0a\x09self method: aMethodContext method.\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
messageSends: ["pc:", "pc", "receiver:", "receiver", "method:", "method", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "methodContext", "keysAndValuesDo:", "at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeLocals",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@locals"]=_st($Dictionary())._new();
_st(self["@locals"])._at_put_("thisContext",self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeLocals",{},smalltalk.AIContext)})},
args: [],
source: "initializeLocals\x0a\x09locals := Dictionary new.\x0a\x09locals at: 'thisContext' put: self.",
messageSends: ["new", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@methodContext"])._isBlockContext();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.AIContext)})},
args: [],
source: "isBlockContext\x0a\x09^ methodContext isBlockContext",
messageSends: ["isBlockContext"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:",
category: 'accessing',
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
args: ["aString"],
source: "localAt: aString\x0a\x09^ self locals at: aString ifAbsent: [ nil ]",
messageSends: ["at:ifAbsent:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._locals())._at_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject},smalltalk.AIContext)})},
args: ["aString", "anObject"],
source: "localAt: aString put: anObject\x0a\x09self locals at: aString put: anObject",
messageSends: ["at:put:", "locals"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
category: 'accessing',
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
args: [],
source: "locals\x0a\x09locals ifNil: [ self initializeLocals ].\x0a\x09\x0a\x09^ locals",
messageSends: ["ifNil:", "initializeLocals"],
referencedClasses: []
}),
smalltalk.AIContext);

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
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.AIContext)})},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.AIContext)})},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@outerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.AIContext)})},
args: [],
source: "outerContext\x0a\x09^ outerContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext:",
category: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@outerContext"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext},smalltalk.AIContext)})},
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
category: 'accessing',
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
args: [],
source: "pc\x0a\x09^ pc ifNil: [ pc := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger},smalltalk.AIContext)})},
args: ["anInteger"],
source: "pc: anInteger\x0a\x09pc := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._localAt_("self");
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.AIContext)})},
args: [],
source: "receiver\x0a\x09^ self localAt: 'self'",
messageSends: ["localAt:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._localAt_put_("self",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.AIContext)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self localAt: 'self' put: anObject",
messageSends: ["localAt:put:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
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
args: [],
source: "selector\x0a\x09^ self method\x0a\x09\x09ifNotNil: [ self method selector ]",
messageSends: ["ifNotNil:", "selector", "method"],
referencedClasses: []
}),
smalltalk.AIContext);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMethodContext:",
category: 'instance creation',
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
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTDebugger', smalltalk.Object, ['interpreter', 'context'], 'Compiler-Interpreter');
smalltalk.ASTDebugger.comment="I am a stepping debugger interface for Amber code.\x0aI internally use an instance of `ASTSteppingInterpreter` to actually step through node and interpret them.\x0a\x0aMy instances are created from a `MethodContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0a## API\x0a\x0aUse the methods of the `'stepping'` protocol to do stepping.";
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._atEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.ASTDebugger)})},
args: [],
source: "atEnd\x0a\x09^ self interpreter atEnd",
messageSends: ["atEnd", "interpreter"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "buildAST",
category: 'initialization',
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
args: [],
source: "buildAST\x0a\x09\x22Build the AST tree from the method source code.\x0a\x09The AST is annotated with a SemanticAnalyzer,\x0a\x09to know the semantics and bindings of each node needed for later debugging\x22\x0a\x09\x0a\x09| ast |\x0a\x09\x0a\x09ast := Smalltalk current parse: self method source.\x0a\x09(SemanticAnalyzer on: self context receiver class)\x0a\x09\x09visit: ast.\x0a\x09\x0a\x09^ ast",
messageSends: ["parse:", "source", "method", "current", "visit:", "on:", "class", "receiver", "context"],
referencedClasses: ["Smalltalk", "SemanticAnalyzer"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTDebugger)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTDebugger)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInterpreterClass",
category: 'defaults',
fn: function (){
var self=this;
function $ASTSteppingInterpreter(){return smalltalk.ASTSteppingInterpreter||(typeof ASTSteppingInterpreter=="undefined"?nil:ASTSteppingInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$ASTSteppingInterpreter();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultInterpreterClass",{},smalltalk.ASTDebugger)})},
args: [],
source: "defaultInterpreterClass\x0a\x09^ ASTSteppingInterpreter",
messageSends: [],
referencedClasses: ["ASTSteppingInterpreter"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
category: 'initialization',
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
args: [],
source: "initializeInterpreter\x0a\x09| ast next |\x0a\x09ast := self buildAST.\x0a\x09next := ASTPCNodeVisitor new\x0a\x09\x09context: self context;\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode.\x0a\x09self interpreter interpret: next",
messageSends: ["buildAST", "context:", "context", "new", "visit:", "currentNode", "interpret:", "interpreter"],
referencedClasses: ["ASTPCNodeVisitor"]
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithContext:",
category: 'initialization',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._context_(aContext);
self._initializeInterpreter();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithContext:",{aContext:aContext},smalltalk.ASTDebugger)})},
args: ["aContext"],
source: "initializeWithContext: aContext\x0a\x09\x22TODO: do we need to handle block contexts?\x22\x0a\x09\x0a\x09self context: aContext.\x0a\x09self initializeInterpreter",
messageSends: ["context:", "initializeInterpreter"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
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
args: [],
source: "interpreter\x0a\x09^ interpreter ifNil: [ interpreter := self defaultInterpreterClass new ]",
messageSends: ["ifNil:", "new", "defaultInterpreterClass"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:",
category: 'accessing',
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interpreter"]=anInterpreter;
return self}, function($ctx1) {$ctx1.fill(self,"interpreter:",{anInterpreter:anInterpreter},smalltalk.ASTDebugger)})},
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.ASTDebugger)})},
args: [],
source: "method\x0a\x09^ self context method",
messageSends: ["method", "context"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._interpreter())._nextNode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.ASTDebugger)})},
args: [],
source: "nextNode\x0a\x09^ self interpreter nextNode",
messageSends: ["nextNode", "interpreter"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.ASTDebugger)})},
args: [],
source: "proceed\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.ASTDebugger)})},
args: [],
source: "restart\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'stepping',
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
args: [],
source: "step\x0a\x09\x22The ASTSteppingInterpreter stops at each node interpretation.\x0a\x09One step will interpret nodes until:\x0a\x09- we get at the end\x0a\x09- the next node is a stepping node (send, assignment, etc.)\x22\x0a\x09\x0a\x09[ (self interpreter nextNode notNil and: [ self interpreter nextNode stopOnStepping ])\x0a\x09\x09or: [ self interpreter atEnd not ] ]\x0a\x09\x09\x09whileFalse: [\x0a\x09\x09\x09\x09self interpreter step.\x0a\x09\x09\x09\x09self step ]",
messageSends: ["whileFalse:", "step", "interpreter", "or:", "not", "atEnd", "and:", "stopOnStepping", "nextNode", "notNil"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepInto",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{},smalltalk.ASTDebugger)})},
args: [],
source: "stepInto\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._step();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.ASTDebugger)})},
args: [],
source: "stepOver\x0a\x09self step",
messageSends: ["step"],
referencedClasses: []
}),
smalltalk.ASTDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'instance creation',
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
args: ["aContext"],
source: "context: aContext\x0a\x09^ self new\x0a\x09\x09initializeWithContext: aContext;\x0a\x09\x09yourself",
messageSends: ["initializeWithContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ASTDebugger.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.Object, ['currentNode', 'context', 'shouldReturn', 'result'], 'Compiler-Interpreter');
smalltalk.ASTInterpreter.comment="I am like a `NodeVisitor`, interpreting nodes one after each other.\x0aI am built using Continuation Passing Style for stepping purposes.\x0a\x0a## Usage example:\x0a\x0a\x09| ast interpreter |\x0a\x09ast := Smalltalk current parse: 'foo 1+2+4'.\x0a\x09(SemanticAnalyzer on: Object) visit: ast.\x0a\x0a\x09ASTInterpreter new\x0a\x09\x09interpret: ast nodes first;\x0a\x09\x09result \x22Answers 7\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
category: 'private',
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
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09^ aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value put: anObject ]",
messageSends: ["ifTrue:ifFalse:", "instVarAt:put:", "value", "receiver", "context", "localAt:put:", "isInstanceVar", "binding"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
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
args: [],
source: "context\x0a\x09^ context ifNil: [ context := AIContext new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["AIContext"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anAIContext:anAIContext},smalltalk.ASTInterpreter)})},
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "continue:value:",
category: 'private',
fn: function (aBlock,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@result"]=anObject;
_st(aBlock)._value_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"continue:value:",{aBlock:aBlock,anObject:anObject},smalltalk.ASTInterpreter)})},
args: ["aBlock", "anObject"],
source: "continue: aBlock value: anObject\x0a\x09result := anObject.\x0a\x09aBlock value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "currentNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{},smalltalk.ASTInterpreter)})},
args: [],
source: "currentNode\x0a\x09^ currentNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
category: 'private',
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
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})() })' ].\x0a\x09\x09\x09\x0a\x09function := Compiler new eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"],
referencedClasses: ["String", "Compiler"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ASTInterpreter.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shouldReturn"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ASTInterpreter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09shouldReturn := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
category: 'interpreting',
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
args: ["aNode"],
source: "interpret: aNode\x0a\x09shouldReturn := false.\x0a\x09self interpret: aNode continue: [ :value |\x0a\x09\x09result := value ]",
messageSends: ["interpret:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09shouldReturn ifTrue: [ ^ self ].\x0a\x0a\x09aNode isNode\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09currentNode := aNode.\x0a\x09\x09\x09self interpretNode: aNode continue: [ :value |\x0a\x09\x09\x09\x09self continue: aBlock value: value ] ]\x0a\x09\x09ifFalse: [ self continue: aBlock value: aNode ]",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "interpretNode:continue:", "continue:value:", "isNode"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAll:continue:",
category: 'private',
fn: function (aCollection,aBlock){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_result_(aCollection,aBlock,_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:",{aCollection:aCollection,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aCollection", "aBlock"],
source: "interpretAll: aCollection continue: aBlock\x0a\x09self\x0a\x09\x09interpretAll: aCollection\x0a\x09\x09continue: aBlock\x0a\x09\x09result: OrderedCollection new",
messageSends: ["interpretAll:continue:result:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAll:continue:result:",
category: 'private',
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
args: ["nodes", "aBlock", "aCollection"],
source: "interpretAll: nodes continue: aBlock result: aCollection\x0a\x09nodes isEmpty\x0a\x09\x09ifTrue: [ self continue: aBlock value: aCollection ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self interpret: nodes first continue: [:value |\x0a\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09interpretAll: nodes allButFirst\x0a\x09\x09\x09\x09\x09continue: aBlock\x0a\x09\x09\x09\x09\x09result: aCollection, { value } ] ]",
messageSends: ["ifTrue:ifFalse:", "continue:value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ",", "isEmpty"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretAssignmentNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_continue_(_st(aNode)._right(),(function(value){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,self._assign_to_(_st(aNode)._left(),value));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretAssignmentNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretAssignmentNode: aNode continue: aBlock\x0a\x09self interpret: aNode right continue: [ :value |\x0a\x09\x09self\x0a\x09\x09\x09continue: aBlock\x0a\x09\x09\x09value: (self assign: aNode left to: value) ]",
messageSends: ["interpret:continue:", "right", "continue:value:", "assign:to:", "left"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretBlockNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretBlockNode: aNode continue: aBlock\x0a\x09self\x0a\x09\x09continue: aBlock\x0a\x09\x09value: [ \x0a\x09\x09\x09self withBlockContext: [ \x0a\x09\x09\x09\x09self interpret: aNode nodes first; result ] ]",
messageSends: ["continue:value:", "withBlockContext:", "interpret:", "first", "nodes", "result"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretBlockSequenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretSequenceNode_continue_(aNode,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretBlockSequenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretBlockSequenceNode: aNode continue: aBlock\x0a\x09self interpretSequenceNode: aNode continue: aBlock",
messageSends: ["interpretSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretCascadeNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretCascadeNode: aNode continue: aBlock\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09\x0a\x09self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09\x22Only interpret the receiver once\x22\x0a\x09\x09aNode nodes do: [ :each | each receiver: receiver ].\x0a\x0a\x09\x09self\x0a\x09\x09\x09interpretAll: aNode nodes allButLast\x0a\x09\x09\x09continue: [\x0a\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09interpret: aNode nodes last\x0a\x09\x09\x09\x09\x09continue: [ :val | self continue: aBlock value: val ] ] ]",
messageSends: ["interpret:continue:", "receiver", "do:", "receiver:", "nodes", "interpretAll:continue:", "allButLast", "last", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretClassReferenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
self._continue_value_(aBlock,_st(_st($Smalltalk())._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretClassReferenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretClassReferenceNode: aNode continue: aBlock\x0a\x09self continue: aBlock value: (Smalltalk current at: aNode value)",
messageSends: ["continue:value:", "at:", "value", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretDynamicArrayNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,array);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretDynamicArrayNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretDynamicArrayNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a\x09\x09self\x0a\x09\x09\x09continue: aBlock\x0a\x09\x09\x09value: array ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretDynamicDictionaryNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretDynamicDictionaryNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array | | hashedCollection |\x0a\x09\x09hashedCollection := HashedCollection new.\x0a\x09\x09array do: [ :each | hashedCollection add: each ].\x0a\x09\x09self\x0a\x09\x09\x09continue: aBlock\x0a\x09\x09\x09value: hashedCollection ]",
messageSends: ["interpretAll:continue:", "nodes", "new", "do:", "add:", "continue:value:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretJSStatementNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldReturn"]=true;
self._continue_value_(aBlock,self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"interpretJSStatementNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretJSStatementNode: aNode continue: aBlock\x0a\x09shouldReturn := true.\x0a\x09self continue: aBlock value: (self eval: aNode source)",
messageSends: ["continue:value:", "eval:", "source"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretMethodNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,_st(array)._first());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretMethodNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretMethodNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a\x09\x09self continue: aBlock value: array first ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "first"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._interpreter_continue_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"interpretNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretNode: aNode continue: aBlock\x0a\x09aNode interpreter: self continue: aBlock",
messageSends: ["interpreter:continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretReturnNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretReturnNode: aNode continue: aBlock\x0a\x09self interpret: aNode nodes first continue: [ :value |\x0a\x09\x09shouldReturn := true.\x0a\x09\x09self continue: aBlock value: value ]",
messageSends: ["interpret:continue:", "first", "nodes", "continue:value:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSendNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretSendNode: aNode continue: aBlock\x0a\x09self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09self interpretAll: aNode arguments continue: [ :args |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09messageFromSendNode: aNode\x0a\x09\x09\x09\x09arguments: args\x0a\x09\x09\x09\x09do: [ :message |\x0a\x09\x09\x09\x09\x09self context pc: self context pc + 1.\x0a\x09\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09\x09continue: aBlock\x0a\x09\x09\x09\x09\x09\x09value: (self sendMessage: message to: receiver superSend: aNode superSend) ] ] ]",
messageSends: ["interpret:continue:", "receiver", "interpretAll:continue:", "arguments", "messageFromSendNode:arguments:do:", "pc:", "+", "pc", "context", "continue:value:", "sendMessage:to:superSend:", "superSend"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSequenceNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {
return self._continue_value_(aBlock,_st(array)._last());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSequenceNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretSequenceNode: aNode continue: aBlock\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a\x09\x09self continue: aBlock value: array last ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:value:", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretValueNode:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._continue_value_(aBlock,_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"interpretValueNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretValueNode: aNode continue: aBlock\x0a\x09self continue: aBlock value: aNode value",
messageSends: ["continue:value:", "value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretVariableNode:continue:",
category: 'interpreting',
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
args: ["aNode", "aBlock"],
source: "interpretVariableNode: aNode continue: aBlock\x0a\x09self\x0a\x09\x09continue: aBlock\x0a\x09\x09value: (aNode binding isInstanceVar\x0a\x09\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09\x09ifFalse: [ self context localAt: aNode value ])",
messageSends: ["continue:value:", "ifTrue:ifFalse:", "instVarAt:", "value", "receiver", "context", "localAt:", "isInstanceVar", "binding"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageFromSendNode:arguments:do:",
category: 'private',
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
args: ["aSendNode", "aCollection", "aBlock"],
source: "messageFromSendNode: aSendNode arguments: aCollection do: aBlock\x0a\x09self\x0a\x09\x09continue: aBlock\x0a\x09\x09value: (Message new\x0a\x09\x09\x09selector: aSendNode selector;\x0a\x09\x09\x09arguments: aCollection;\x0a\x09\x09\x09yourself)",
messageSends: ["continue:value:", "selector:", "selector", "new", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.ASTInterpreter)})},
args: [],
source: "result\x0a\x09^ result",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "sendMessage:to:superSend:",
category: 'private',
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
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method fn applyTo: anObject arguments: aMessage arguments\x0a\x09\x09\x0a\x09\x0a\x09",
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "messageNotUnderstood:receiver:", "superclass", "class", "at:ifAbsent:", "selector", "methodDictionary", "applyTo:arguments:", "arguments", "fn"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn",
category: 'testing',
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
args: [],
source: "shouldReturn\x0a\x09^ shouldReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "withBlockContext:",
category: 'private',
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
args: ["aBlock"],
source: "withBlockContext: aBlock\x0a\x09\x22Evaluate aBlock with a BlockContext:\x0a\x09- a context is pushed before aBlock evaluation.\x0a\x09- the context is poped after aBlock evaluation\x0a\x09- the result of aBlock evaluation is answered\x22\x0a\x09\x0a\x09| blockResult |\x0a\x09\x09\x09\x0a\x09self context: (AIContext new\x0a\x09\x09outerContext: self context;\x0a\x09\x09yourself).\x0a\x09\x0a\x09blockResult := aBlock value.\x0a\x09\x0a\x09self context: self context outerContext.\x0a\x09^ blockResult",
messageSends: ["context:", "outerContext:", "context", "new", "yourself", "value", "outerContext"],
referencedClasses: ["AIContext"]
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTSteppingInterpreter', smalltalk.ASTInterpreter, ['continuation', 'nextNode'], 'Compiler-Interpreter');
smalltalk.ASTSteppingInterpreter.comment="I am an interpreter with stepping capabilities. The higher level `ASTDebugger` class should be used as a debugger model, as it provides convenience methods for debugging.\x0a\x0a## API\x0a\x0aUse `#step` to actually interpret the next node. Interpretation stops at each node evaluation, weither it's a message node or not.\x0a\x0a\x0a## Usage example:\x0a\x0a\x09| ast interpreter |\x0a\x09ast := Smalltalk current parse: 'foo 1+2+4'.\x0a\x09(SemanticAnalyzer on: Object) visit: ast.\x0a\x0a\x09interpreter := ASTSteppingInterpreter new\x0a\x09\x09interpret: ast nodes first;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09interpreter step; step.\x0a\x09interpreter step; step.\x0a\x09interpreter result.\x22Answers 1\x22\x0a\x09interpreter step.\x0a\x09interpreter result. \x22Answers 3\x22\x0a\x09interpreter step.\x0a\x09interpreter result. \x22Answers 7\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
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
args: [],
source: "atEnd\x0a\x09^ self shouldReturn or: [ self nextNode == self currentNode ]",
messageSends: ["or:", "==", "currentNode", "nextNode", "shouldReturn"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ASTSteppingInterpreter.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09continuation := []",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextNode"]=aNode;
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.ASTSteppingInterpreter.superclass.fn.prototype._interpret_continue_.apply(_st(self), [aNode,aBlock]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTSteppingInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09nextNode := aNode.\x0a\x09continuation := [\x0a\x09\x09super interpret: aNode continue: aBlock ]",
messageSends: ["interpret:continue:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nextNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "nextNode\x0a\x09^ nextNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@continuation"])._value();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "step\x0a\x09continuation value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreter);



smalltalk.addClass('ASTPCNodeVisitor', smalltalk.NodeVisitor, ['useInlinings', 'pc', 'context', 'currentNode'], 'Compiler-Interpreter');
smalltalk.ASTPCNodeVisitor.comment="I visit an AST until I get to the current pc node and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node corresponding to the `pc` is answered by `#currentNode`";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTPCNodeVisitor)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "currentNode",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentNode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentNode",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "currentNode\x0a\x09^ currentNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
category: 'accessing',
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
args: [],
source: "pc\x0a\x09^ pc ifNil: [ 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "pc:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pc"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger},smalltalk.ASTPCNodeVisitor)})},
args: ["anInteger"],
source: "pc: anInteger\x0a\x09pc := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "useInlinings",
category: 'accessing',
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
args: [],
source: "useInlinings\x0a\x09^ useInlinings ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "useInlinings:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@useInlinings"]=aBoolean;
return self}, function($ctx1) {$ctx1.fill(self,"useInlinings:",{aBoolean:aBoolean},smalltalk.ASTPCNodeVisitor)})},
args: ["aBoolean"],
source: "useInlinings: aBoolean\x0a\x09useInlinings := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.ASTPCNodeVisitor)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09currentNode := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.ASTPCNodeVisitor.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
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
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self pc = self context pc ifFalse: [\x0a\x09\x09aNode shouldBeInlined ifFalse: [ \x0a\x09\x09\x09self pc: self pc + 1.\x0a\x09\x09\x09currentNode := aNode ] ]",
messageSends: ["visitSendNode:", "ifFalse:", "pc:", "+", "pc", "shouldBeInlined", "=", "context"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);



smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.Node)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretNode: self continue: aBlock",
messageSends: ["interpretNode:continue:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.Node)})},
args: [],
source: "isSteppingNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretAssignmentNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.AssignmentNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretAssignmentNode: self continue: aBlock",
messageSends: ["interpretAssignmentNode:continue:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.AssignmentNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretBlockNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.BlockNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretBlockNode: self continue: aBlock",
messageSends: ["interpretBlockNode:continue:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.BlockNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretCascadeNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.CascadeNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretCascadeNode: self continue: aBlock",
messageSends: ["interpretCascadeNode:continue:"],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretDynamicArrayNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.DynamicArrayNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretDynamicArrayNode: self continue: aBlock",
messageSends: ["interpretDynamicArrayNode:continue:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.DynamicArrayNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretDynamicDictionaryNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.DynamicDictionaryNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretDynamicDictionaryNode: self continue: aBlock",
messageSends: ["interpretDynamicDictionaryNode:continue:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.DynamicDictionaryNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretJSStatementNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.JSStatementNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretJSStatementNode: self continue: aBlock",
messageSends: ["interpretJSStatementNode:continue:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.JSStatementNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretMethodNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.MethodNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretMethodNode: self continue: aBlock",
messageSends: ["interpretMethodNode:continue:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretReturnNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ReturnNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretReturnNode: self continue: aBlock",
messageSends: ["interpretReturnNode:continue:"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretSendNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.SendNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretSendNode: self continue: aBlock",
messageSends: ["interpretSendNode:continue:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
category: '*Compiler-Interpreter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isSteppingNode",{},smalltalk.SendNode)})},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.SequenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretSequenceNode: self continue: aBlock",
messageSends: ["interpretSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretBlockSequenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.BlockSequenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretBlockSequenceNode: self continue: aBlock",
messageSends: ["interpretBlockSequenceNode:continue:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretValueNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ValueNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretValueNode: self continue: aBlock",
messageSends: ["interpretValueNode:continue:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretVariableNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.VariableNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretVariableNode: self continue: aBlock",
messageSends: ["interpretVariableNode:continue:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:continue:",
category: '*Compiler-Interpreter',
fn: function (anInterpreter,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anInterpreter)._interpretClassReferenceNode_continue_(self,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter:continue:",{anInterpreter:anInterpreter,aBlock:aBlock},smalltalk.ClassReferenceNode)})},
args: ["anInterpreter", "aBlock"],
source: "interpreter: anInterpreter continue: aBlock\x0a\x09^ anInterpreter interpretClassReferenceNode: self continue: aBlock",
messageSends: ["interpretClassReferenceNode:continue:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);

