define("amber_core/Compiler-Interpreter", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Methods", "amber_core/Kernel-Objects", "amber_core/Compiler-Core", "amber_core/Kernel-Exceptions", "amber_core/Compiler-AST"], function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-Interpreter');
smalltalk.packages["Compiler-Interpreter"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AIBlockClosure', smalltalk.BlockClosure, ['node', 'outerContext'], 'Compiler-Interpreter');
smalltalk.AIBlockClosure.comment="I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.\x0a\x0aWhile I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.\x0a\x0aEvaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).";
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
category: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpreterError();
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.AIBlockClosure)})},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09self interpreterError",
messageSends: ["interpreterError"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "[ AST Block closure ]";
}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},smalltalk.AIBlockClosure)})},
args: [],
source: "compiledSource\x0a\x09\x22Unlike blocks, the receiver doesn't represent a JS function\x22\x0a\x09\x0a\x09^ '[ AST Block closure ]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpreterError();
return self}, function($ctx1) {$ctx1.fill(self,"currySelf",{},smalltalk.AIBlockClosure)})},
args: [],
source: "currySelf\x0a\x09self interpreterError",
messageSends: ["interpreterError"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithContext:node:",
category: 'initialization',
fn: function (aContext,aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
self["@outerContext"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithContext:node:",{aContext:aContext,aNode:aNode},smalltalk.AIBlockClosure)})},
args: ["aContext", "aNode"],
source: "initializeWithContext: aContext node: aNode\x0a\x09node := aNode.\x0a\x09outerContext := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreterError",
category: 'error handling',
fn: function (){
var self=this;
function $ASTInterpreterError(){return smalltalk.ASTInterpreterError||(typeof ASTInterpreterError=="undefined"?nil:ASTInterpreterError)}
return smalltalk.withContext(function($ctx1) { 
_st($ASTInterpreterError())._signal_("Method cannot be interpreted by the interpreter.");
return self}, function($ctx1) {$ctx1.fill(self,"interpreterError",{},smalltalk.AIBlockClosure)})},
args: [],
source: "interpreterError\x0a\x09ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'",
messageSends: ["signal:"],
referencedClasses: ["ASTInterpreterError"]
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@node"])._temps())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.AIBlockClosure)})},
args: [],
source: "numArgs\x0a\x09^ node temps size",
messageSends: ["size", "temps"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.AIBlockClosure)})},
args: [],
source: "value\x0a\x09^ self valueWithPossibleArguments: #()",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([anArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anArgument:anArgument},smalltalk.AIBlockClosure)})},
args: ["anArgument"],
source: "value: anArgument\x0a\x09^ self valueWithPossibleArguments: {anArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
fn: function (firstArgument,secondArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([firstArgument,secondArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},smalltalk.AIBlockClosure)})},
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([firstArgument,secondArgument,thirdArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},smalltalk.AIBlockClosure)})},
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
var context,sequenceNode;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
context=_st(self["@outerContext"])._newBlockContext();
$1=_st(_st(_st(self["@node"])._nodes())._first())._copy();
_st($1)._parent_(nil);
$2=_st($1)._yourself();
sequenceNode=$2;
_st(_st(self["@node"])._parameters())._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(context)._localAt_put_(each,_st(aCollection)._at_ifAbsent_(index,(function(){
return smalltalk.withContext(function($ctx3) {
return nil;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
$3=_st(context)._interpreter();
$ctx1.sendIdx["interpreter"]=1;
_st($3)._node_(_st(sequenceNode)._nextChild());
$4=_st($3)._proceed();
$5=_st(self["@outerContext"])._interpreter();
$ctx1.sendIdx["interpreter"]=2;
_st($5)._setNonLocalReturnFromContext_(context);
$6=_st(_st(context)._interpreter())._pop();
return $6;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection,context:context,sequenceNode:sequenceNode},smalltalk.AIBlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09| context sequenceNode |\x0a\x09context := outerContext newBlockContext.\x0a\x0a\x09\x22Interpret a copy of the sequence node to avoid creating a new AIBlockClosure\x22\x0a\x09sequenceNode := node nodes first copy\x0a\x09\x09parent: nil;\x0a\x09\x09yourself.\x0a\x0a\x09\x22Populate the arguments into the context locals\x22\x09\x0a\x09node parameters withIndexDo: [ :each :index |\x0a\x09\x09context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].\x0a\x0a\x09\x22Interpret the first node of the BlockSequenceNode\x22\x0a\x09context interpreter\x0a\x09\x09node: sequenceNode nextChild;\x0a\x09\x09proceed.\x0a\x09\x09\x0a\x09outerContext interpreter\x0a\x09\x09setNonLocalReturnFromContext: context.\x0a\x09\x09\x0a\x09^ context interpreter pop",
messageSends: ["newBlockContext", "parent:", "copy", "first", "nodes", "yourself", "withIndexDo:", "parameters", "localAt:put:", "at:ifAbsent:", "node:", "interpreter", "nextChild", "proceed", "setNonLocalReturnFromContext:", "pop"],
referencedClasses: []
}),
smalltalk.AIBlockClosure);


smalltalk.addMethod(
smalltalk.method({
selector: "forContext:node:",
category: 'instance creation',
fn: function (aContext,aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeWithContext_node_(aContext,aNode);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forContext:node:",{aContext:aContext,aNode:aNode},smalltalk.AIBlockClosure.klass)})},
args: ["aContext", "aNode"],
source: "forContext: aContext node: aNode\x0a\x09^ self new\x0a\x09\x09initializeWithContext: aContext node: aNode;\x0a\x09\x09yourself",
messageSends: ["initializeWithContext:node:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AIBlockClosure.klass);


smalltalk.addClass('AIContext', smalltalk.MethodContext, ['outerContext', 'innerContext', 'pc', 'locals', 'selector', 'index', 'sendIndexes', 'evaluatedSelector', 'ast', 'interpreter'], 'Compiler-Interpreter');
smalltalk.AIContext.comment="I am like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, my instances are not read-only.\x0a\x0aWhen debugging, my instances are created by copying the current `MethodContext` (thisContext)";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._ast())._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._localAt_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.AIContext)})},
args: [],
source: "arguments\x0a\x09^ self ast arguments collect: [ :each |\x0a\x09\x09self localAt: each ]",
messageSends: ["collect:", "arguments", "ast", "localAt:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "ast",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5;
$1=self._isBlockContext();
if(smalltalk.assert($1)){
$3=self._outerContext();
if(($receiver = $3) == nil || $receiver == null){
$2=$3;
} else {
var context;
context=$receiver;
$2=_st(context)._ast();
};
return $2;
};
$4=self["@ast"];
if(($receiver = $4) == nil || $receiver == null){
self._initializeAST();
} else {
$4;
};
$5=self["@ast"];
return $5;
}, function($ctx1) {$ctx1.fill(self,"ast",{},smalltalk.AIContext)})},
args: [],
source: "ast\x0a\x09self isBlockContext ifTrue: [ \x0a\x09\x09^ self outerContext ifNotNil: [ :context | context ast ] ].\x0a\x0a\x09ast ifNil: [ self initializeAST ].\x0a\x09^ ast",
messageSends: ["ifTrue:", "isBlockContext", "ifNotNil:", "outerContext", "ast", "ifNil:", "initializeAST"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@evaluatedSelector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluatedSelector",{},smalltalk.AIContext)})},
args: [],
source: "evaluatedSelector\x0a\x09^ evaluatedSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@evaluatedSelector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"evaluatedSelector:",{aString:aString},smalltalk.AIContext)})},
args: ["aString"],
source: "evaluatedSelector: aString\x0a\x09evaluatedSelector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@index"];
if(($receiver = $2) == nil || $receiver == null){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.AIContext)})},
args: [],
source: "index\x0a\x09^ index ifNil: [ 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anInteger:anInteger},smalltalk.AIContext)})},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAST",
category: 'initialization',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._method();
$ctx1.sendIdx["method"]=1;
self["@ast"]=_st($1)._ast();
_st(_st($SemanticAnalyzer())._on_(_st(self._method())._methodClass()))._visit_(self["@ast"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeAST",{},smalltalk.AIContext)})},
args: [],
source: "initializeAST\x0a\x09ast := self method ast.\x0a\x09(SemanticAnalyzer on: self method methodClass)\x0a\x09\x09visit: ast",
messageSends: ["ast", "method", "visit:", "on:", "methodClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'initialization',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self._evaluatedSelector_(_st(aMethodContext)._evaluatedSelector());
self._index_(_st(aMethodContext)._index());
self._sendIndexes_(_st(aMethodContext)._sendIndexes());
self._receiver_(_st(aMethodContext)._receiver());
$1=self._selector_(_st(aMethodContext)._selector());
$2=_st(aMethodContext)._outerContext();
$ctx1.sendIdx["outerContext"]=1;
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
var outer;
outer=$receiver;
$3=_st(outer)._methodContext();
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
self._outerContext_(_st(self._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
$4=_st(aMethodContext)._locals();
$ctx1.sendIdx["locals"]=1;
_st($4)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self._locals())._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},smalltalk.AIContext)})},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x0a\x09self\x0a\x09\x09evaluatedSelector: aMethodContext evaluatedSelector;\x0a\x09\x09index: aMethodContext index;\x0a\x09\x09sendIndexes: aMethodContext sendIndexes;\x0a\x09\x09receiver: aMethodContext receiver;\x0a\x09\x09selector: aMethodContext selector.\x0a\x09\x09\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
messageSends: ["evaluatedSelector:", "evaluatedSelector", "index:", "index", "sendIndexes:", "sendIndexes", "receiver:", "receiver", "selector:", "selector", "ifNotNil:", "outerContext", "methodContext", "outerContext:", "fromMethodContext:", "class", "keysAndValuesDo:", "locals", "at:put:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
category: 'initialization',
fn: function (){
var self=this;
function $ASTInterpreter(){return smalltalk.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($ASTInterpreter())._new();
_st($1)._context_(self);
$2=_st($1)._yourself();
self["@interpreter"]=$2;
$3=self._innerContext();
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
self._setupInterpreter_(self["@interpreter"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{},smalltalk.AIContext)})},
args: [],
source: "initializeInterpreter\x0a\x09interpreter := ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self innerContext ifNotNil: [\x0a\x09\x09self setupInterpreter: interpreter ]",
messageSends: ["context:", "new", "yourself", "ifNotNil:", "innerContext", "setupInterpreter:"],
referencedClasses: ["ASTInterpreter"]
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
selector: "innerContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerContext",{},smalltalk.AIContext)})},
args: [],
source: "innerContext\x0a\x09^ innerContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "innerContext:",
category: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerContext"]=anAIContext;
return self}, function($ctx1) {$ctx1.fill(self,"innerContext:",{anAIContext:anAIContext},smalltalk.AIContext)})},
args: ["anAIContext"],
source: "innerContext: anAIContext\x0a\x09innerContext := anAIContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@interpreter"];
if(($receiver = $1) == nil || $receiver == null){
self._initializeInterpreter();
} else {
$1;
};
$2=self["@interpreter"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.AIContext)})},
args: [],
source: "interpreter\x0a\x09interpreter ifNil: [ self initializeInterpreter ].\x0a\x09^ interpreter",
messageSends: ["ifNil:", "initializeInterpreter"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:",
category: 'interpreting',
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interpreter"]=anInterpreter;
return self}, function($ctx1) {$ctx1.fill(self,"interpreter:",{anInterpreter:anInterpreter},smalltalk.AIContext)})},
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
messageSends: [],
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
var $2,$1;
$1=_st(self._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._outerContext();
if(($receiver = $2) == nil || $receiver == null){
return $2;
} else {
var context;
context=$receiver;
return _st(context)._localAt_(aString);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString},smalltalk.AIContext)})},
args: ["aString"],
source: "localAt: aString\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09^ self locals at: aString ifAbsent: [ \x0a\x09\x09self outerContext ifNotNil: [ :context | \x0a\x09\x09\x09context localAt: aString ] ]",
messageSends: ["at:ifAbsent:", "locals", "ifNotNil:", "outerContext", "localAt:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._outerContext();
if(($receiver = $2) == nil || $receiver == null){
return _st(aBlock)._value();
} else {
var context;
context=$receiver;
return _st(context)._localAt_ifAbsent_(aString,aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:ifAbsent:",{aString:aString,aBlock:aBlock},smalltalk.AIContext)})},
args: ["aString", "aBlock"],
source: "localAt: aString ifAbsent: aBlock\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09^ self locals at: aString ifAbsent: [ \x0a\x09\x09self outerContext \x0a\x09\x09\x09ifNotNil: [ :context | context localAt: aString ifAbsent: aBlock ]\x0a\x09\x09\x09ifNil: [ aBlock value ] ]",
messageSends: ["at:ifAbsent:", "locals", "ifNotNil:ifNil:", "outerContext", "localAt:ifAbsent:", "value"],
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
if(($receiver = $1) == nil || $receiver == null){
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
var $2,$5,$4,$3,$1;
$2=self._methodContext();
$ctx1.sendIdx["methodContext"]=1;
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
$5=self._methodContext();
$ctx1.sendIdx["methodContext"]=2;
$4=_st($5)._receiver();
$3=_st($4)._class();
$1=_st($3)._lookupSelector_(_st(self._methodContext())._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.AIContext)})},
args: [],
source: "method\x0a\x09^ self methodContext ifNotNil: [\x0a\x09\x09self methodContext receiver class lookupSelector: self methodContext selector ]",
messageSends: ["ifNotNil:", "methodContext", "lookupSelector:", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "newBlockContext",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._class())._new();
_st($2)._outerContext_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBlockContext",{},smalltalk.AIContext)})},
args: [],
source: "newBlockContext\x0a\x09^ self class new\x0a\x09\x09outerContext: self;\x0a\x09\x09yourself",
messageSends: ["outerContext:", "new", "class", "yourself"],
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
_st(self["@outerContext"])._innerContext_(self);
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext},smalltalk.AIContext)})},
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext.\x0a\x09outerContext innerContext: self",
messageSends: ["innerContext:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'interpreting',
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
category: 'interpreting',
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
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.AIContext)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.AIContext)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sendIndexes())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aString:aString},smalltalk.AIContext)})},
args: ["aString"],
source: "sendIndexAt: aString\x0a\x09^ self sendIndexes at: aString ifAbsent: [ 0 ]",
messageSends: ["at:ifAbsent:", "sendIndexes"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@sendIndexes"];
if(($receiver = $2) == nil || $receiver == null){
$1=_st($Dictionary())._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},smalltalk.AIContext)})},
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes ifNil: [ Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes:",
category: 'accessing',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sendIndexes"]=aDictionary;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexes:",{aDictionary:aDictionary},smalltalk.AIContext)})},
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "setupInterpreter:",
category: 'interpreting',
fn: function (anInterpreter){
var self=this;
var currentNode;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=_st($ASTPCNodeVisitor())._new();
_st($1)._selector_(self._evaluatedSelector());
_st($1)._context_(self);
_st($1)._visit_(self._ast());
$2=_st($1)._currentNode();
currentNode=$2;
_st(anInterpreter)._node_(currentNode);
$5=self._innerContext();
$ctx1.sendIdx["innerContext"]=1;
$4=_st($5)._arguments();
$3=_st($4)._reversed();
_st($3)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(anInterpreter)._push_(each);
$ctx2.sendIdx["push:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anInterpreter)._push_(_st(self._innerContext())._receiver());
return self}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter,currentNode:currentNode},smalltalk.AIContext)})},
args: ["anInterpreter"],
source: "setupInterpreter: anInterpreter\x0a\x09| currentNode |\x0a\x09\x0a\x09\x22Retrieve the current node\x22\x0a\x09currentNode := ASTPCNodeVisitor new\x0a\x09\x09\x09selector: self evaluatedSelector;\x0a\x09\x09\x09context: self;\x0a\x09\x09\x09visit: self ast;\x0a\x09\x09\x09currentNode.\x0a\x09\x0a\x09anInterpreter node: currentNode.\x0a\x0a\x09\x22Push the send args and receiver to the interpreter stack\x22\x09\x0a\x09self innerContext arguments reversed do: [ :each | \x0a\x09\x09anInterpreter push: each ].\x0a\x09\x09\x0a\x09anInterpreter push: (self innerContext receiver)",
messageSends: ["selector:", "new", "evaluatedSelector", "context:", "visit:", "ast", "currentNode", "node:", "do:", "reversed", "arguments", "innerContext", "push:", "receiver"],
referencedClasses: ["ASTPCNodeVisitor"]
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
smalltalk.ASTDebugger.comment="I am a stepping debugger interface for Amber code.\x0aI internally use an instance of `ASTInterpreter` to actually step through node and interpret them.\x0a\x0aMy instances are created from an `AIContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0a## API\x0a\x0aUse the methods of the `'stepping'` protocol to do stepping.";
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
messageSends: ["parse:", "current", "source", "method", "visit:", "on:", "class", "receiver", "context"],
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
function $ASTInterpreter(){return smalltalk.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
return $ASTInterpreter();
}, function($ctx1) {$ctx1.fill(self,"defaultInterpreterClass",{},smalltalk.ASTDebugger)})},
args: [],
source: "defaultInterpreterClass\x0a\x09^ ASTInterpreter",
messageSends: [],
referencedClasses: ["ASTInterpreter"]
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
_st(self._interpreter())._node_(next);
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{ast:ast,next:next},smalltalk.ASTDebugger)})},
args: [],
source: "initializeInterpreter\x0a\x09| ast next |\x0a\x09ast := self buildAST.\x0a\x09next := ASTPCNodeVisitor new\x0a\x09\x09context: self context;\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode.\x0a\x09self interpreter node: next",
messageSends: ["buildAST", "context:", "new", "context", "visit:", "currentNode", "node:", "interpreter"],
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
if(($receiver = $2) == nil || $receiver == null){
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
_st(self._interpreter())._restart();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.ASTDebugger)})},
args: [],
source: "restart\x0a\x09self interpreter restart",
messageSends: ["restart", "interpreter"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
category: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._interpreter())._skip();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},smalltalk.ASTDebugger)})},
args: [],
source: "skip\x0a\x09self interpreter skip",
messageSends: ["skip", "interpreter"],
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
_st(self._interpreter())._stepOver();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.ASTDebugger)})},
args: [],
source: "stepOver\x0a\x09self interpreter stepOver",
messageSends: ["stepOver", "interpreter"],
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


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['node', 'context', 'stack', 'returnValue', 'returned'], 'Compiler-Interpreter');
smalltalk.ASTInterpreter.comment="I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.\x0a\x0a## API\x0a\x0aWhile my instances should be used from within an `ASTDebugger`, which provides a more high level interface,\x0ayou can use methods from the `interpreting` protocol:\x0a\x0a- `#step` evaluates the current `node` only\x0a- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)\x0a- `#proceed` evaluates eagerly the AST\x0a- `#restart` select the first node of the AST\x0a- `#skip` skips the current node, moving to the next one if any";
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
category: 'private',
fn: function (aNode,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
$1=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($1)){
$3=self._context();
$ctx1.sendIdx["context"]=1;
$2=_st($3)._receiver();
$4=_st(aNode)._value();
$ctx1.sendIdx["value"]=1;
_st($2)._instVarAt_put_($4,anObject);
} else {
_st(self._context())._localAt_put_(_st(aNode)._value(),anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject},smalltalk.ASTInterpreter)})},
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value put: anObject ]",
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._hasReturned())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.ASTInterpreter)})},
args: [],
source: "atEnd\x0a\x09^ self hasReturned or: [ self node isNil ]",
messageSends: ["or:", "hasReturned", "isNil", "node"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

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
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.ASTInterpreter)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.ASTInterpreter)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
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
var $3,$2,$1,$4,$5;
source=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(str)._nextPutAll_("(function(");
$ctx2.sendIdx["nextPutAll:"]=1;
$3=self._context();
$ctx2.sendIdx["context"]=1;
$2=_st($3)._locals();
$ctx2.sendIdx["locals"]=1;
$1=_st($2)._keys();
_st($1)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(each);
$ctx3.sendIdx["nextPutAll:"]=2;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(",");
$ctx3.sendIdx["nextPutAll:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
_st(str)._nextPutAll_("){ return (function() {");
$ctx2.sendIdx["nextPutAll:"]=4;
_st(str)._nextPutAll_(aString);
$ctx2.sendIdx["nextPutAll:"]=5;
$4=_st(str)._nextPutAll_("})() })");
return $4;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
function_=_st(_st($Compiler())._new())._eval_(source);
$5=_st(function_)._valueWithPossibleArguments_(_st(_st(self._context())._locals())._values());
return $5;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},smalltalk.ASTInterpreter)})},
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})() })' ].\x0a\x09\x09\x09\x0a\x09function := Compiler new eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"],
referencedClasses: ["String", "Compiler"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "hasReturned",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@returned"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasReturned",{},smalltalk.ASTInterpreter)})},
args: [],
source: "hasReturned\x0a\x09^ returned ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(self._node());
return self}, function($ctx1) {$ctx1.fill(self,"interpret",{},smalltalk.ASTInterpreter)})},
args: [],
source: "interpret\x0a\x09\x22Interpret the next node to be evaluated\x22\x0a\x09\x0a\x09self visit: self node",
messageSends: ["visit:", "node"],
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
self._node_(aNode);
self._interpret();
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "interpret: aNode\x0a\x09self node: aNode.\x0a\x09self interpret",
messageSends: ["node:", "interpret"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageFromSendNode:arguments:",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,aCollection:aCollection},smalltalk.ASTInterpreter)})},
args: ["aSendNode", "aCollection"],
source: "messageFromSendNode: aSendNode arguments: aCollection\x0a\x09^ Message new\x0a\x09\x09selector: aSendNode selector;\x0a\x09\x09arguments: aCollection;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "selector", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageNotUnderstood:receiver:",
category: 'private',
fn: function (aMessage,anObject){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._meesage_(aMessage);
_st($1)._receiver_(anObject);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject},smalltalk.ASTInterpreter)})},
args: ["aMessage", "anObject"],
source: "messageNotUnderstood: aMessage receiver: anObject\x0a\x09MessageNotUnderstood new\x0a\x09\x09meesage: aMessage;\x0a\x09\x09receiver: anObject;\x0a\x09\x09signal",
messageSends: ["meesage:", "new", "receiver:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(self._node())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.ASTInterpreter)})},
args: [],
source: "next\x0a\x09self node: self node nextNode",
messageSends: ["node:", "nextNode", "node"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@node"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{},smalltalk.ASTInterpreter)})},
args: [],
source: "node\x0a\x09\x22Answer the next node, ie the node to be evaluated in the next step\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
category: 'stack',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=self._stack();
$ctx1.sendIdx["stack"]=1;
_st($1)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st(self._stack())._last();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"peek",{},smalltalk.ASTInterpreter)})},
args: [],
source: "peek\x0a\x09\x22Peek the top object of the context stack\x22\x0a\x09\x0a\x09self stack ifEmpty: [ ^ nil ].\x0a\x09\x0a\x09^ self stack last",
messageSends: ["ifEmpty:", "stack", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "pop",
category: 'stack',
fn: function (){
var self=this;
var peekedValue;
return smalltalk.withContext(function($ctx1) { 
var $1;
peekedValue=self._peek();
_st(self._stack())._removeLast();
$1=peekedValue;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pop",{peekedValue:peekedValue},smalltalk.ASTInterpreter)})},
args: [],
source: "pop\x0a\x09\x22Pop an object from the context stack\x22\x0a\x09\x0a\x09| peekedValue |\x0a\x09\x0a\x09peekedValue := self peek.\x0a\x09self stack removeLast.\x0a\x09^ peekedValue",
messageSends: ["peek", "removeLast", "stack"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.ASTInterpreter)})},
args: [],
source: "proceed\x0a\x09\x22Eagerly evaluate the ast\x22\x0a\x09\x0a\x09[ self atEnd ] \x0a\x09\x09whileFalse: [ self step ]",
messageSends: ["whileFalse:", "atEnd", "step"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "push:",
category: 'stack',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stack())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject},smalltalk.ASTInterpreter)})},
args: ["anObject"],
source: "push: anObject\x0a\x09\x22Push an object to the context stack\x22\x0a\x09\x0a\x09^ self stack add: anObject",
messageSends: ["add:", "stack"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(_st(self._context())._ast())._nextChild());
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.ASTInterpreter)})},
args: [],
source: "restart\x0a\x09self node: self context ast nextChild",
messageSends: ["node:", "nextChild", "ast", "context"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._hasReturned();
if(smalltalk.assert($2)){
$1=self._returnValue();
} else {
$1=_st(self._context())._receiver();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.ASTInterpreter)})},
args: [],
source: "result\x0a\x09^ self hasReturned \x0a\x09\x09ifTrue: [ self returnValue ] \x0a\x09\x09ifFalse: [ self context receiver ]",
messageSends: ["ifTrue:ifFalse:", "hasReturned", "returnValue", "receiver", "context"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@returnValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"returnValue",{},smalltalk.ASTInterpreter)})},
args: [],
source: "returnValue\x0a\x09^ returnValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returnValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"returnValue:",{anObject:anObject},smalltalk.ASTInterpreter)})},
args: ["anObject"],
source: "returnValue: anObject\x0a\x09returnValue := anObject",
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
var $1,$3,$2,$4,$5,$6;
var $early={};
try {
if(! smalltalk.assert(aBoolean)){
$1=_st(aMessage)._sendTo_(anObject);
return $1;
};
$3=_st(anObject)._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3)._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $2) == nil || $receiver == null){
$4=self._messageNotUnderstood_receiver_(aMessage,anObject);
$ctx1.sendIdx["messageNotUnderstood:receiver:"]=1;
return $4;
} else {
$2;
};
method=_st(_st(_st(_st(anObject)._class())._superclass())._methodDictionary())._at_ifAbsent_(_st(aMessage)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
$5=self._messageNotUnderstood_receiver_(aMessage,anObject);
throw $early=[$5];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$6=_st(method)._sendTo_arguments_(anObject,_st(aMessage)._arguments());
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},smalltalk.ASTInterpreter)})},
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method sendTo: anObject arguments: aMessage arguments",
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "sendTo:arguments:", "arguments"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "setNonLocalReturnFromContext:",
category: 'interpreting',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aContext)._interpreter();
$ctx1.sendIdx["interpreter"]=1;
$1=_st($2)._hasReturned();
if(smalltalk.assert($1)){
self["@returned"]=true;
self["@returned"];
self._returnValue_(_st(_st(aContext)._interpreter())._returnValue());
};
return self}, function($ctx1) {$ctx1.fill(self,"setNonLocalReturnFromContext:",{aContext:aContext},smalltalk.ASTInterpreter)})},
args: ["aContext"],
source: "setNonLocalReturnFromContext: aContext\x0a\x09aContext interpreter hasReturned ifTrue: [\x0a\x09\x09returned := true.\x0a\x09\x09self returnValue: aContext interpreter returnValue ]",
messageSends: ["ifTrue:", "hasReturned", "interpreter", "returnValue:", "returnValue"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._next();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},smalltalk.ASTInterpreter)})},
args: [],
source: "skip\x0a\x09self next",
messageSends: ["next"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stack",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@stack"];
if(($receiver = $2) == nil || $receiver == null){
self["@stack"]=_st($OrderedCollection())._new();
$1=self["@stack"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},smalltalk.ASTInterpreter)})},
args: [],
source: "stack\x0a\x09^ stack ifNil: [ stack := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._interpret();
$1=self._next();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ASTInterpreter)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09interpret; \x0a\x09\x09next",
messageSends: ["interpret", "next"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._step();
$ctx1.sendIdx["step"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isSteppingNode();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.ASTInterpreter)})},
args: [],
source: "stepOver\x0a\x09self step.\x0a\x09\x0a\x09[ self node isSteppingNode ] whileFalse: [ \x0a\x09\x09self step ]",
messageSends: ["step", "whileFalse:", "isSteppingNode", "node"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasReturned();
if(! smalltalk.assert($1)){
smalltalk.ASTInterpreter.superclass.fn.prototype._visit_.apply(_st(self), [aNode]);
};
return self}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visit: aNode\x0a\x09self hasReturned ifFalse: [ super visit: aNode ]",
messageSends: ["ifFalse:", "hasReturned", "visit:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var poppedValue;
return smalltalk.withContext(function($ctx1) { 
poppedValue=self._pop();
$ctx1.sendIdx["pop"]=1;
self._pop();
self._push_(poppedValue);
self._assign_to_(_st(aNode)._left(),poppedValue);
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,poppedValue:poppedValue},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| poppedValue |\x0a\x09\x0a\x09poppedValue := self pop.\x0a\x09\x0a\x09\x22Pop the left side of the assignment.\x0a\x09It already has been visited, and we don't need its value.\x22\x0a\x09self pop.\x0a\x09\x0a\x09self push: poppedValue.\x0a\x09self assign: aNode left to: poppedValue",
messageSends: ["pop", "push:", "assign:to:", "left"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var block;
function $AIBlockClosure(){return smalltalk.AIBlockClosure||(typeof AIBlockClosure=="undefined"?nil:AIBlockClosure)}
return smalltalk.withContext(function($ctx1) { 
block=_st($AIBlockClosure())._forContext_node_(self._context(),aNode);
self._push_(block);
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,block:block},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Do not evaluate the block node.\x0a\x09Instead, put all instructions into a block that we push to the stack for later evaluation\x22\x0a\x09\x0a\x09| block |\x0a\x09\x0a\x09block := AIBlockClosure forContext: self context node: aNode.\x0a\x09\x0a\x09self push: block",
messageSends: ["forContext:node:", "context", "push:"],
referencedClasses: ["AIBlockClosure"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=[];
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(array)._addFirst_(self._pop());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._push_(array);
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09\x0a\x09array := #().\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09array addFirst: self pop ].\x0a\x09\x0a\x09self push: array",
messageSends: ["do:", "nodes", "addFirst:", "pop", "push:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var associations,hashedCollection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
associations=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
hashedCollection=_st($HashedCollection())._new();
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(associations)._add_(self._pop());
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(associations)._reversed())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(hashedCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
self._push_(hashedCollection);
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,associations:associations,hashedCollection:hashedCollection},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| associations hashedCollection |\x0a\x09\x0a\x09associations := OrderedCollection new.\x0a\x09hashedCollection := HashedCollection new.\x0a\x09\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09associations add: self pop ].\x0a\x09\x0a\x09associations reversed do: [ :each |\x0a\x09\x09hashedCollection add: each ].\x0a\x09\x0a\x09self push: hashedCollection",
messageSends: ["new", "do:", "nodes", "add:", "pop", "reversed", "push:"],
referencedClasses: ["OrderedCollection", "HashedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returned"]=true;
self._returnValue_(self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: (self eval: aNode source)",
messageSends: ["returnValue:", "eval:", "source"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09\x22Do nothing by default. Especially, do not visit children recursively.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returned"]=true;
self._returnValue_(self._pop());
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: self pop",
messageSends: ["returnValue:", "pop"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var receiver,args,message,result;
return smalltalk.withContext(function($ctx1) { 
var $1;
args=_st(_st(aNode)._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._pop();
$ctx2.sendIdx["pop"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
receiver=self._pop();
message=self._messageFromSendNode_arguments_(aNode,_st(args)._reversed());
result=self._sendMessage_to_superSend_(message,receiver,_st(aNode)._superSend());
$1=_st(_st(aNode)._isCascadeSendNode())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aNode)._isLastChild())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(smalltalk.assert($1)){
self._push_(receiver);
$ctx1.sendIdx["push:"]=1;
} else {
self._push_(result);
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| receiver args message result |\x0a\x09\x0a\x09args := aNode arguments collect: [ :each | self pop ].\x0a\x09receiver := self pop.\x0a\x09\x0a\x09message := self\x0a\x09\x09messageFromSendNode: aNode\x0a\x09\x09arguments: args reversed.\x0a\x09\x0a\x09result := self sendMessage: message to: receiver superSend: aNode superSend.\x0a\x09\x0a\x09\x22For cascade sends, push the reciever if the send is not the last one\x22\x0a\x09(aNode isCascadeSendNode and: [ aNode isLastChild not ])\x0a\x09\x09ifTrue: [ self push: receiver ]\x0a\x09\x09ifFalse: [ self push: result ]",
messageSends: ["collect:", "arguments", "pop", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "ifTrue:ifFalse:", "and:", "isCascadeSendNode", "not", "isLastChild", "push:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self push: aNode value",
messageSends: ["push:", "value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$6,$4,$3,$8,$10,$9,$11,$12,$13,$15,$14,$16,$17,$7;
$2=_st(aNode)._binding();
$ctx1.sendIdx["binding"]=1;
$1=_st($2)._isUnknownVar();
if(smalltalk.assert($1)){
$5=_st($PlatformInterface())._globals();
$ctx1.sendIdx["globals"]=1;
$6=_st(aNode)._value();
$ctx1.sendIdx["value"]=1;
$4=_st($5)._at_ifAbsent_($6,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Unknown variable");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["at:ifAbsent:"]=1;
$3=self._push_($4);
$ctx1.sendIdx["push:"]=1;
return $3;
};
$8=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($8)){
$10=self._context();
$ctx1.sendIdx["context"]=1;
$9=_st($10)._receiver();
$11=_st(aNode)._value();
$ctx1.sendIdx["value"]=2;
$7=_st($9)._instVarAt_($11);
} else {
$12=self._context();
$13=_st(aNode)._value();
$ctx1.sendIdx["value"]=3;
$7=_st($12)._localAt_ifAbsent_($13,(function(){
return smalltalk.withContext(function($ctx2) {
$15=_st(aNode)._value();
$ctx2.sendIdx["value"]=4;
$14=_st($15)._isCapitalized();
if(smalltalk.assert($14)){
$16=_st($Smalltalk())._current();
$17=_st(aNode)._value();
$ctx2.sendIdx["value"]=5;
return _st($16)._at_ifAbsent_($17,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($PlatformInterface())._globals())._at_(_st(aNode)._value());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
};
self._push_($7);
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09aNode binding isUnknownVar ifTrue: [\x0a\x09\x09^ self push: (PlatformInterface globals at: aNode value ifAbsent: [ self error: 'Unknown variable' ]) ].\x0a\x09\x09\x0a\x09self push: (aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09ifFalse: [ self context \x0a\x09\x09\x09localAt: aNode value\x0a\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09aNode value isCapitalized\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09Smalltalk current \x0a\x09\x09\x09\x09\x09\x09\x09at: aNode value \x0a\x09\x09\x09\x09\x09\x09\x09ifAbsent: [ PlatformInterface globals at: aNode value ] ] ] ])",
messageSends: ["ifTrue:", "isUnknownVar", "binding", "push:", "at:ifAbsent:", "globals", "value", "error:", "ifTrue:ifFalse:", "isInstanceVar", "instVarAt:", "receiver", "context", "localAt:ifAbsent:", "isCapitalized", "current", "at:"],
referencedClasses: ["PlatformInterface", "Smalltalk"]
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTInterpreterError', smalltalk.Error, [], 'Compiler-Interpreter');
smalltalk.ASTInterpreterError.comment="I get signaled when an AST interpreter is unable to interpret a node.";


smalltalk.addClass('ASTPCNodeVisitor', smalltalk.NodeVisitor, ['context', 'index', 'selector', 'currentNode'], 'Compiler-Interpreter');
smalltalk.ASTPCNodeVisitor.comment="I visit an AST until I get to the current node for the `context` and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node is answered by `#currentNode`";
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
selector: "increaseIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=_st(self._index()).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndex",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "increaseIndex\x0a\x09index := self index + 1",
messageSends: ["+", "index"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@index"];
if(($receiver = $2) == nil || $receiver == null){
self["@index"]=(0);
$1=self["@index"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "index\x0a\x09^ index ifNil: [ index := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.ASTPCNodeVisitor)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
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
source: "visitJSStatementNode: aNode\x0a\x09\x22If a JSStatementNode is encountered, it always is the current node.\x0a\x09Stop visiting the AST there\x22\x0a\x09\x0a\x09currentNode := aNode",
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
var sendIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5,$7;
$1=self._context();
$2=self._selector();
$ctx1.sendIdx["selector"]=1;
sendIndex=_st($1)._sendIndexAt_($2);
smalltalk.ASTPCNodeVisitor.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
$4=self._selector();
$ctx1.sendIdx["selector"]=2;
$3=_st($4).__eq(_st(aNode)._selector());
if(smalltalk.assert($3)){
$6=self._index();
$ctx1.sendIdx["index"]=1;
$5=_st($6).__lt(sendIndex);
if(! smalltalk.assert($5)){
$7=_st(self._index()).__gt(sendIndex);
if(! smalltalk.assert($7)){
self["@currentNode"]=aNode;
self["@currentNode"];
};
};
self._increaseIndex();
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,sendIndex:sendIndex},smalltalk.ASTPCNodeVisitor)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| sendIndex |\x0a\x09sendIndex := self context sendIndexAt: self selector.\x0a\x09\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self selector = aNode selector ifTrue: [\x0a\x09\x09self index < sendIndex ifFalse: [ \x0a\x09\x09\x09self index > sendIndex ifFalse: [ currentNode := aNode ] ].\x0a\x09\x09self increaseIndex ]",
messageSends: ["sendIndexAt:", "context", "selector", "visitSendNode:", "ifTrue:", "=", "ifFalse:", "<", "index", ">", "increaseIndex"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);


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

});
