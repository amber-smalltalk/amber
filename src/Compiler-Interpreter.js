define("amber_core/Compiler-Interpreter", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Methods", "amber_core/Compiler-Semantic", "amber_core/Kernel-Objects", "amber_core/Compiler-Core", "amber_core/Kernel-Exceptions", "amber_core/Compiler-AST"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-Interpreter');
smalltalk.packages["Compiler-Interpreter"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AIBlockClosure', globals.BlockClosure, ['node', 'outerContext'], 'Compiler-Interpreter');
globals.AIBlockClosure.comment="I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.\x0a\x0aWhile I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.\x0a\x0aEvaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).";
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpreterError();
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},globals.AIBlockClosure)})},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09self interpreterError",
messageSends: ["interpreterError"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
protocol: 'accessing',
fn: function (){
var self=this;
return "[ AST Block closure ]";
},
args: [],
source: "compiledSource\x0a\x09\x22Unlike blocks, the receiver doesn't represent a JS function\x22\x0a\x09\x0a\x09^ '[ AST Block closure ]'",
messageSends: [],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpreterError();
return self}, function($ctx1) {$ctx1.fill(self,"currySelf",{},globals.AIBlockClosure)})},
args: [],
source: "currySelf\x0a\x09self interpreterError",
messageSends: ["interpreterError"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithContext:node:",
protocol: 'initialization',
fn: function (aContext,aNode){
var self=this;
self["@node"]=aNode;
self["@outerContext"]=aContext;
return self},
args: ["aContext", "aNode"],
source: "initializeWithContext: aContext node: aNode\x0a\x09node := aNode.\x0a\x09outerContext := aContext",
messageSends: [],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreterError",
protocol: 'error handling',
fn: function (){
var self=this;
function $ASTInterpreterError(){return globals.ASTInterpreterError||(typeof ASTInterpreterError=="undefined"?nil:ASTInterpreterError)}
return smalltalk.withContext(function($ctx1) { 
_st($ASTInterpreterError())._signal_("Method cannot be interpreted by the interpreter.");
return self}, function($ctx1) {$ctx1.fill(self,"interpreterError",{},globals.AIBlockClosure)})},
args: [],
source: "interpreterError\x0a\x09ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'",
messageSends: ["signal:"],
referencedClasses: ["ASTInterpreterError"]
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@node"])._temps())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numArgs",{},globals.AIBlockClosure)})},
args: [],
source: "numArgs\x0a\x09^ node temps size",
messageSends: ["size", "temps"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.AIBlockClosure)})},
args: [],
source: "value\x0a\x09^ self valueWithPossibleArguments: #()",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([anArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anArgument:anArgument},globals.AIBlockClosure)})},
args: ["anArgument"],
source: "value: anArgument\x0a\x09^ self valueWithPossibleArguments: {anArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([firstArgument,secondArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},globals.AIBlockClosure)})},
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueWithPossibleArguments_([firstArgument,secondArgument,thirdArgument]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},globals.AIBlockClosure)})},
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}",
messageSends: ["valueWithPossibleArguments:"],
referencedClasses: []
}),
globals.AIBlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
var context,sequenceNode;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
context=_st(self["@outerContext"])._newInnerContext();
$1=_st(_st(_st(self["@node"])._nodes())._first())._copy();
_st($1)._parent_(nil);
$2=_st($1)._yourself();
sequenceNode=$2;
_st(_st(sequenceNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(context)._defineLocal_(each);
$ctx2.sendIdx["defineLocal:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(_st(self["@node"])._parameters())._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
_st(context)._defineLocal_(each);
return _st(context)._localAt_put_(each,_st(aCollection)._at_ifAbsent_(index,(function(){
return nil;
})));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,2)})}));
$3=_st(context)._interpreter();
$ctx1.sendIdx["interpreter"]=1;
_st($3)._node_(_st(sequenceNode)._nextChild());
$4=_st($3)._proceed();
$5=_st(self["@outerContext"])._interpreter();
$ctx1.sendIdx["interpreter"]=2;
_st($5)._setNonLocalReturnFromContext_(context);
$6=_st(_st(context)._interpreter())._pop();
return $6;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection,context:context,sequenceNode:sequenceNode},globals.AIBlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09| context sequenceNode |\x0a\x09context := outerContext newInnerContext.\x0a\x0a\x09\x22Interpret a copy of the sequence node to avoid creating a new AIBlockClosure\x22\x0a\x09sequenceNode := node nodes first copy\x0a\x09\x09parent: nil;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Define locals in the context\x22\x0a\x09sequenceNode temps do: [ :each |\x0a\x09\x09context defineLocal: each ].\x0a\x09\x09\x0a\x09\x22Populate the arguments into the context locals\x22\x09\x0a\x09node parameters withIndexDo: [ :each :index |\x0a\x09\x09context defineLocal: each.\x0a\x09\x09context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].\x0a\x0a\x09\x22Interpret the first node of the BlockSequenceNode\x22\x0a\x09context interpreter\x0a\x09\x09node: sequenceNode nextChild;\x0a\x09\x09proceed.\x0a\x09\x09\x0a\x09outerContext interpreter\x0a\x09\x09setNonLocalReturnFromContext: context.\x0a\x09\x09\x0a\x09^ context interpreter pop",
messageSends: ["newInnerContext", "parent:", "copy", "first", "nodes", "yourself", "do:", "temps", "defineLocal:", "withIndexDo:", "parameters", "localAt:put:", "at:ifAbsent:", "node:", "interpreter", "nextChild", "proceed", "setNonLocalReturnFromContext:", "pop"],
referencedClasses: []
}),
globals.AIBlockClosure);


smalltalk.addMethod(
smalltalk.method({
selector: "forContext:node:",
protocol: 'instance creation',
fn: function (aContext,aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeWithContext_node_(aContext,aNode);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forContext:node:",{aContext:aContext,aNode:aNode},globals.AIBlockClosure.klass)})},
args: ["aContext", "aNode"],
source: "forContext: aContext node: aNode\x0a\x09^ self new\x0a\x09\x09initializeWithContext: aContext node: aNode;\x0a\x09\x09yourself",
messageSends: ["initializeWithContext:node:", "new", "yourself"],
referencedClasses: []
}),
globals.AIBlockClosure.klass);


smalltalk.addClass('AIContext', globals.MethodContext, ['outerContext', 'innerContext', 'pc', 'locals', 'selector', 'index', 'sendIndexes', 'evaluatedSelector', 'ast', 'interpreter', 'supercall'], 'Compiler-Interpreter');
globals.AIContext.comment="I am like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, my instances are not read-only.\x0a\x0aWhen debugging, my instances are created by copying the current `MethodContext` (thisContext)";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._ast())._arguments())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._localAt_ifAbsent_(each,(function(){
return smalltalk.withContext(function($ctx3) {
return self._error_("Argument not in context");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.AIContext)})},
args: [],
source: "arguments\x0a\x09^ self ast arguments collect: [ :each |\x0a\x09\x09self localAt: each ifAbsent: [ self error: 'Argument not in context' ] ]",
messageSends: ["collect:", "arguments", "ast", "localAt:ifAbsent:", "error:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "ast",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$receiver;
$1=self._isBlockContext();
if(smalltalk.assert($1)){
$3=self._outerContext();
if(($receiver = $3) == null || $receiver.isNil){
$2=$3;
} else {
var context;
context=$receiver;
$2=_st(context)._ast();
};
return $2;
};
$4=self["@ast"];
if(($receiver = $4) == null || $receiver.isNil){
self._initializeAST();
} else {
$4;
};
$5=self["@ast"];
return $5;
}, function($ctx1) {$ctx1.fill(self,"ast",{},globals.AIContext)})},
args: [],
source: "ast\x0a\x09self isBlockContext ifTrue: [ \x0a\x09\x09^ self outerContext ifNotNil: [ :context | context ast ] ].\x0a\x0a\x09ast ifNil: [ self initializeAST ].\x0a\x09^ ast",
messageSends: ["ifTrue:", "isBlockContext", "ifNotNil:", "outerContext", "ast", "ifNil:", "initializeAST"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "basicLocalAt:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._locals())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:",{aString:aString},globals.AIContext)})},
args: ["aString"],
source: "basicLocalAt: aString\x0a\x09^ self locals at: aString",
messageSends: ["at:", "locals"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "basicLocalAt:put:",
protocol: 'private',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._locals())._at_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:put:",{aString:aString,anObject:anObject},globals.AIContext)})},
args: ["aString", "anObject"],
source: "basicLocalAt: aString put: anObject\x0a\x09self locals at: aString put: anObject",
messageSends: ["at:put:", "locals"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "basicReceiver",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._localAt_("self");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{},globals.AIContext)})},
args: [],
source: "basicReceiver\x0a\x09^ self localAt: 'self'",
messageSends: ["localAt:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "defineLocal:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._locals())._at_put_(aString,nil);
return self}, function($ctx1) {$ctx1.fill(self,"defineLocal:",{aString:aString},globals.AIContext)})},
args: ["aString"],
source: "defineLocal: aString\x0a\x09self locals at: aString put: nil",
messageSends: ["at:put:", "locals"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:",
protocol: 'evaluating',
fn: function (aString,anEvaluator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anEvaluator)._evaluate_context_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator},globals.AIContext)})},
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ anEvaluator evaluate: aString context: self",
messageSends: ["evaluate:context:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateNode:",
protocol: 'evaluating',
fn: function (aNode){
var self=this;
function $ASTInterpreter(){return globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ASTInterpreter())._new();
_st($2)._context_(self);
_st($2)._node_(_st(aNode)._nextChild());
_st($2)._proceed();
$3=_st($2)._result();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateNode:",{aNode:aNode},globals.AIContext)})},
args: ["aNode"],
source: "evaluateNode: aNode\x0a\x09^ ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09node: aNode nextChild;\x0a\x09\x09proceed;\x0a\x09\x09result",
messageSends: ["context:", "new", "node:", "nextChild", "proceed", "result"],
referencedClasses: ["ASTInterpreter"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@evaluatedSelector"];
return $1;
},
args: [],
source: "evaluatedSelector\x0a\x09^ evaluatedSelector",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@evaluatedSelector"]=aString;
return self},
args: ["aString"],
source: "evaluatedSelector: aString\x0a\x09evaluatedSelector := aString",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@index"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},globals.AIContext)})},
args: [],
source: "index\x0a\x09^ index ifNil: [ 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAST",
protocol: 'initialization',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._method();
$ctx1.sendIdx["method"]=1;
self["@ast"]=_st($1)._ast();
_st(_st($SemanticAnalyzer())._on_(_st(self._method())._methodClass()))._visit_(self["@ast"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeAST",{},globals.AIContext)})},
args: [],
source: "initializeAST\x0a\x09ast := self method ast.\x0a\x09(SemanticAnalyzer on: self method methodClass)\x0a\x09\x09visit: ast",
messageSends: ["ast", "method", "visit:", "on:", "methodClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethodContext:",
protocol: 'initialization',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
self._evaluatedSelector_(_st(aMethodContext)._evaluatedSelector());
self._index_(_st(aMethodContext)._index());
self._sendIndexes_(_st(aMethodContext)._sendIndexes());
self._receiver_(_st(aMethodContext)._receiver());
self._supercall_(_st(aMethodContext)._supercall());
$1=self._selector_(_st(aMethodContext)._selector());
$2=_st(aMethodContext)._outerContext();
$ctx1.sendIdx["outerContext"]=1;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
var outer;
outer=$receiver;
$3=_st(outer)._methodContext();
if(($receiver = $3) == null || $receiver.isNil){
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
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},globals.AIContext)})},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x0a\x09self\x0a\x09\x09evaluatedSelector: aMethodContext evaluatedSelector;\x0a\x09\x09index: aMethodContext index;\x0a\x09\x09sendIndexes: aMethodContext sendIndexes;\x0a\x09\x09receiver: aMethodContext receiver;\x0a\x09\x09supercall: aMethodContext supercall;\x0a\x09\x09selector: aMethodContext selector.\x0a\x09\x09\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
messageSends: ["evaluatedSelector:", "evaluatedSelector", "index:", "index", "sendIndexes:", "sendIndexes", "receiver:", "receiver", "supercall:", "supercall", "selector:", "selector", "ifNotNil:", "outerContext", "methodContext", "outerContext:", "fromMethodContext:", "class", "keysAndValuesDo:", "locals", "at:put:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
protocol: 'initialization',
fn: function (){
var self=this;
function $ASTInterpreter(){return globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
$1=_st($ASTInterpreter())._new();
_st($1)._context_(self);
$2=_st($1)._yourself();
self["@interpreter"]=$2;
$3=self._innerContext();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
self._setupInterpreter_(self["@interpreter"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{},globals.AIContext)})},
args: [],
source: "initializeInterpreter\x0a\x09interpreter := ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self innerContext ifNotNil: [\x0a\x09\x09self setupInterpreter: interpreter ]",
messageSends: ["context:", "new", "yourself", "ifNotNil:", "innerContext", "setupInterpreter:"],
referencedClasses: ["ASTInterpreter"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeLocals",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@locals"]=_st($Dictionary())._new();
_st(self["@locals"])._at_put_("thisContext",self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeLocals",{},globals.AIContext)})},
args: [],
source: "initializeLocals\x0a\x09locals := Dictionary new.\x0a\x09locals at: 'thisContext' put: self.",
messageSends: ["new", "at:put:"],
referencedClasses: ["Dictionary"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "innerContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@innerContext"];
return $1;
},
args: [],
source: "innerContext\x0a\x09^ innerContext",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "innerContext:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
self["@innerContext"]=anAIContext;
return self},
args: ["anAIContext"],
source: "innerContext: anAIContext\x0a\x09innerContext := anAIContext",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@interpreter"];
if(($receiver = $1) == null || $receiver.isNil){
self._initializeInterpreter();
} else {
$1;
};
$2=self["@interpreter"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},globals.AIContext)})},
args: [],
source: "interpreter\x0a\x09interpreter ifNil: [ self initializeInterpreter ].\x0a\x09^ interpreter",
messageSends: ["ifNil:", "initializeInterpreter"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter:",
protocol: 'interpreting',
fn: function (anInterpreter){
var self=this;
self["@interpreter"]=anInterpreter;
return self},
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isTopContext",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._innerContext())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isTopContext",{},globals.AIContext)})},
args: [],
source: "isTopContext\x0a\x09^ self innerContext isNil",
messageSends: ["isNil", "innerContext"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
var $1;
context=self._lookupContextForLocal_(aString);
$1=_st(context)._basicLocalAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString,context:context},globals.AIContext)})},
args: ["aString"],
source: "localAt: aString\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09^ context basicLocalAt: aString",
messageSends: ["lookupContextForLocal:", "basicLocalAt:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
context=self._lookupContextForLocal_ifNone_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value();
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st(context)._basicLocalAt_(aString);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"localAt:ifAbsent:",{aString:aString,aBlock:aBlock,context:context},globals.AIContext)})},
args: ["aString", "aBlock"],
source: "localAt: aString ifAbsent: aBlock\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self \x09\x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ ^ aBlock value ].\x0a\x09\x0a\x09^ context basicLocalAt: aString",
messageSends: ["lookupContextForLocal:ifNone:", "value", "basicLocalAt:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "localAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
context=self._lookupContextForLocal_(aString);
_st(context)._basicLocalAt_put_(aString,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject,context:context},globals.AIContext)})},
args: ["aString", "anObject"],
source: "localAt: aString put: anObject\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09context basicLocalAt: aString put: anObject",
messageSends: ["lookupContextForLocal:", "basicLocalAt:put:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@locals"];
if(($receiver = $1) == null || $receiver.isNil){
self._initializeLocals();
} else {
$1;
};
$2=self["@locals"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"locals",{},globals.AIContext)})},
args: [],
source: "locals\x0a\x09locals ifNil: [ self initializeLocals ].\x0a\x09\x0a\x09^ locals",
messageSends: ["ifNil:", "initializeLocals"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupContextForLocal:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._lookupContextForLocal_ifNone_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return self._variableNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:",{aString:aString},globals.AIContext)})},
args: ["aString"],
source: "lookupContextForLocal: aString\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self \x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ self variableNotFound ]",
messageSends: ["lookupContextForLocal:ifNone:", "variableNotFound"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupContextForLocal:ifNone:",
protocol: 'private',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._locals())._at_ifPresent_ifAbsent_(aString,(function(){
return self;
}),(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._outerContext();
return _st($2)._ifNil_ifNotNil_(aBlock,(function(context){
return smalltalk.withContext(function($ctx3) {
return _st(context)._lookupContextForLocal_(aString);
}, function($ctx3) {$ctx3.fillBlock({context:context},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:ifNone:",{aString:aString,aBlock:aBlock},globals.AIContext)})},
args: ["aString", "aBlock"],
source: "lookupContextForLocal: aString ifNone: aBlock\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self locals \x0a\x09\x09at: aString\x0a\x09\x09ifPresent: [ self ]\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09self outerContext \x0a\x09\x09\x09\x09ifNil: aBlock\x0a\x09\x09\x09\x09ifNotNil: [ :context | \x0a\x09\x09\x09\x09\x09context lookupContextForLocal: aString ] ]",
messageSends: ["at:ifPresent:ifAbsent:", "locals", "ifNil:ifNotNil:", "outerContext", "lookupContextForLocal:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "newInnerContext",
protocol: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._class())._new();
_st($2)._outerContext_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newInnerContext",{},globals.AIContext)})},
args: [],
source: "newInnerContext\x0a\x09^ self class new\x0a\x09\x09outerContext: self;\x0a\x09\x09yourself",
messageSends: ["outerContext:", "new", "class", "yourself"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@outerContext"];
return $1;
},
args: [],
source: "outerContext\x0a\x09^ outerContext",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
self["@outerContext"]=anAIContext;
$1=self["@outerContext"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var context;
context=$receiver;
_st(context)._innerContext_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext},globals.AIContext)})},
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext.\x0a\x09outerContext ifNotNil: [ :context | \x0a\x09\x09context innerContext: self ]",
messageSends: ["ifNotNil:", "innerContext:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'interpreting',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._locals())._at_put_("self",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},globals.AIContext)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self locals at: 'self' put: anObject",
messageSends: ["at:put:", "locals"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sendIndexes())._at_ifAbsent_(aString,(function(){
return (0);
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aString:aString},globals.AIContext)})},
args: ["aString"],
source: "sendIndexAt: aString\x0a\x09^ self sendIndexes at: aString ifAbsent: [ 0 ]",
messageSends: ["at:ifAbsent:", "sendIndexes"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@sendIndexes"];
if(($receiver = $2) == null || $receiver.isNil){
$1=_st($Dictionary())._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},globals.AIContext)})},
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes ifNil: [ Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes:",
protocol: 'accessing',
fn: function (aDictionary){
var self=this;
self["@sendIndexes"]=aDictionary;
return self},
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "setupInterpreter:",
protocol: 'interpreting',
fn: function (anInterpreter){
var self=this;
var currentNode;
function $ASTPCNodeVisitor(){return globals.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$8,$7,$6,$receiver;
$1=_st($ASTPCNodeVisitor())._new();
_st($1)._selector_(self._evaluatedSelector());
_st($1)._context_(self);
$2=$1;
$3=self._ast();
$ctx1.sendIdx["ast"]=1;
_st($2)._visit_($3);
$4=_st($1)._currentNode();
currentNode=$4;
$5=_st(self._ast())._sequenceNode();
if(($receiver = $5) == null || $receiver.isNil){
$5;
} else {
var sequence;
sequence=$receiver;
_st(_st(sequence)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._defineLocal_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
};
_st(anInterpreter)._node_(currentNode);
$8=self._innerContext();
$ctx1.sendIdx["innerContext"]=1;
$7=_st($8)._arguments();
$6=_st($7)._reversed();
_st($6)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(anInterpreter)._push_(each);
$ctx2.sendIdx["push:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
_st(anInterpreter)._push_(_st(self._innerContext())._receiver());
return self}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter,currentNode:currentNode},globals.AIContext)})},
args: ["anInterpreter"],
source: "setupInterpreter: anInterpreter\x0a\x09| currentNode |\x0a\x09\x0a\x09\x22Retrieve the current node\x22\x0a\x09currentNode := ASTPCNodeVisitor new\x0a\x09\x09\x09selector: self evaluatedSelector;\x0a\x09\x09\x09context: self;\x0a\x09\x09\x09visit: self ast;\x0a\x09\x09\x09currentNode.\x0a\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09self ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09self defineLocal: each ] ].\x0a\x09\x0a\x09anInterpreter node: currentNode.\x0a\x0a\x09\x22Push the send args and receiver to the interpreter stack\x22\x09\x0a\x09self innerContext arguments reversed do: [ :each | \x0a\x09\x09anInterpreter push: each ].\x0a\x09\x09\x0a\x09anInterpreter push: (self innerContext receiver)",
messageSends: ["selector:", "new", "evaluatedSelector", "context:", "visit:", "ast", "currentNode", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "node:", "reversed", "arguments", "innerContext", "push:", "receiver"],
referencedClasses: ["ASTPCNodeVisitor"]
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "supercall",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@supercall"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"supercall",{},globals.AIContext)})},
args: [],
source: "supercall\x0a\x09^ supercall ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "supercall:",
protocol: 'interpreting',
fn: function (aBoolean){
var self=this;
self["@supercall"]=aBoolean;
return self},
args: ["aBoolean"],
source: "supercall: aBoolean\x0a\x09supercall := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "variableNotFound",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Variable missing");
return self}, function($ctx1) {$ctx1.fill(self,"variableNotFound",{},globals.AIContext)})},
args: [],
source: "variableNotFound\x0a\x09\x22Error thrown whenever a variable lookup fails\x22\x0a\x09\x0a\x09self error: 'Variable missing'",
messageSends: ["error:"],
referencedClasses: []
}),
globals.AIContext);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMethodContext:",
protocol: 'instance creation',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext},globals.AIContext.klass)})},
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
globals.AIContext.klass);


smalltalk.addClass('AISemanticAnalyzer', globals.SemanticAnalyzer, ['context'], 'Compiler-Interpreter');
globals.AISemanticAnalyzer.comment="I perform the same semantic analysis than `SemanticAnalyzer`, with the difference that provided an `AIContext` context, variables are bound with the context variables.";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.AISemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
self["@context"]=anAIContext;
return self},
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
messageSends: [],
referencedClasses: []
}),
globals.AISemanticAnalyzer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $ASTContextVar(){return globals.ASTContextVar||(typeof ASTContextVar=="undefined"?nil:ASTContextVar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._context())._localAt_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=($ctx2.supercall = true, globals.AISemanticAnalyzer.superclass.fn.prototype._visitVariableNode_.apply(_st(self), [aNode]));
$ctx2.supercall = false;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(aNode)._binding_(_st($ASTContextVar())._new());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},globals.AISemanticAnalyzer)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09self context \x0a\x09\x09localAt: aNode value \x0a\x09\x09ifAbsent: [ ^ super visitVariableNode: aNode ].\x0a\x0a\x09aNode binding: ASTContextVar new",
messageSends: ["localAt:ifAbsent:", "context", "value", "visitVariableNode:", "binding:", "new"],
referencedClasses: ["ASTContextVar"]
}),
globals.AISemanticAnalyzer);



smalltalk.addClass('ASTContextVar', globals.ScopeVar, ['context'], 'Compiler-Interpreter');
globals.ASTContextVar.comment="I am a variable defined in a `context`.";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.ASTContextVar);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@context"]=anObject;
return self},
args: ["anObject"],
source: "context: anObject\x0a\x09context := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ASTContextVar);



smalltalk.addClass('ASTDebugger', globals.Object, ['interpreter', 'context', 'result'], 'Compiler-Interpreter');
globals.ASTDebugger.comment="I am a stepping debugger interface for Amber code.\x0aI internally use an instance of `ASTInterpreter` to actually step through node and interpret them.\x0a\x0aMy instances are created from an `AIContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0a## API\x0a\x0aUse the methods of the `'stepping'` protocol to do stepping.";
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self._context();
$ctx1.sendIdx["context"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return true;
} else {
$1;
};
$2=_st(_st(self._interpreter())._atEnd())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._context())._isTopContext();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},globals.ASTDebugger)})},
args: [],
source: "atEnd\x09\x0a\x09self context ifNil: [ ^ true ].\x0a\x09\x0a\x09^ self interpreter atEnd and: [ \x0a\x09\x09self context isTopContext ]",
messageSends: ["ifNil:", "context", "and:", "atEnd", "interpreter", "isTopContext"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "flushInnerContexts",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._context();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var cxt;
cxt=$receiver;
_st(cxt)._innerContext_(nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"flushInnerContexts",{},globals.ASTDebugger)})},
args: [],
source: "flushInnerContexts\x0a\x09\x22When stepping, the inner contexts are not relevent anymore,\x0a\x09and can be flushed\x22\x0a\x09\x0a\x09self context ifNotNil: [ :cxt | \x0a\x09\x09cxt innerContext: nil ]",
messageSends: ["ifNotNil:", "context", "innerContext:"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._context();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var ctx;
ctx=$receiver;
$1=_st(ctx)._interpreter();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},globals.ASTDebugger)})},
args: [],
source: "interpreter\x0a\x09^ self context ifNotNil: [ :ctx | \x0a\x09\x09ctx interpreter ]",
messageSends: ["ifNotNil:", "context", "interpreter"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},globals.ASTDebugger)})},
args: [],
source: "method\x0a\x09^ self context method",
messageSends: ["method", "context"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._interpreter();
$ctx1.sendIdx["interpreter"]=1;
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
$1=_st(self._interpreter())._node();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"node",{},globals.ASTDebugger)})},
args: [],
source: "node\x0a\x09^ self interpreter ifNotNil: [\x0a\x09\x09self interpreter node ]",
messageSends: ["ifNotNil:", "interpreter", "node"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "onStep",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$receiver;
$1=self._interpreter();
$ctx1.sendIdx["interpreter"]=1;
self["@result"]=_st($1)._result();
$3=self._interpreter();
$ctx1.sendIdx["interpreter"]=2;
$2=_st($3)._atEnd();
$ctx1.sendIdx["atEnd"]=1;
if(smalltalk.assert($2)){
$4=_st(self._context())._outerContext();
if(($receiver = $4) == null || $receiver.isNil){
$4;
} else {
var outerContext;
outerContext=$receiver;
self._context_(outerContext);
};
$6=self._interpreter();
$ctx1.sendIdx["interpreter"]=3;
$5=_st($6)._atEnd();
if(! smalltalk.assert($5)){
_st(self._interpreter())._skip();
};
};
self._flushInnerContexts();
return self}, function($ctx1) {$ctx1.fill(self,"onStep",{},globals.ASTDebugger)})},
args: [],
source: "onStep\x0a\x09\x22After each step, check if the interpreter is at the end,\x0a\x09and if it is move to its outer context if any, skipping its \x0a\x09current node (which was just evaluated by the current \x0a\x09interpreter).\x0a\x09\x0a\x09After each step we also flush inner contexts.\x22\x0a\x09\x0a\x09result := self interpreter result.\x0a\x09\x0a\x09self interpreter atEnd ifTrue: [\x0a\x09\x09self context outerContext ifNotNil: [ :outerContext | \x0a\x09\x09\x09self context: outerContext ].\x0a\x09\x09self interpreter atEnd ifFalse: [ self interpreter skip ] ].\x0a\x09\x09\x0a\x09self flushInnerContexts",
messageSends: ["result", "interpreter", "ifTrue:", "atEnd", "ifNotNil:", "outerContext", "context", "context:", "ifFalse:", "skip", "flushInnerContexts"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
protocol: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._stepOver();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},globals.ASTDebugger)})},
args: [],
source: "proceed\x0a\x09[ self atEnd ] whileFalse: [ self stepOver ]",
messageSends: ["whileFalse:", "atEnd", "stepOver"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._interpreter())._restart();
self._flushInnerContexts();
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.ASTDebugger)})},
args: [],
source: "restart\x0a\x09self interpreter restart.\x0a\x09self flushInnerContexts",
messageSends: ["restart", "interpreter", "flushInnerContexts"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;
},
args: [],
source: "result\x0a\x09^ result",
messageSends: [],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepInto",
protocol: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{},globals.ASTDebugger)})},
args: [],
source: "stepInto\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
globals.ASTDebugger);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
protocol: 'stepping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._context())._isTopContext();
if(smalltalk.assert($1)){
_st(self._interpreter())._stepOver();
} else {
$2=self._interpreter();
$ctx1.sendIdx["interpreter"]=1;
_st($2)._skip();
};
self._onStep();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},globals.ASTDebugger)})},
args: [],
source: "stepOver\x0a\x09self context isTopContext \x0a\x09\x09ifFalse: [ self interpreter skip ]\x0a\x09\x09ifTrue: [ self interpreter stepOver ].\x0a\x09self onStep",
messageSends: ["ifFalse:ifTrue:", "isTopContext", "context", "skip", "interpreter", "stepOver", "onStep"],
referencedClasses: []
}),
globals.ASTDebugger);


smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'instance creation',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._context_(aContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},globals.ASTDebugger.klass)})},
args: ["aContext"],
source: "context: aContext\x0a\x09^ self new\x0a\x09\x09context: aContext;\x0a\x09\x09yourself",
messageSends: ["context:", "new", "yourself"],
referencedClasses: []
}),
globals.ASTDebugger.klass);


smalltalk.addClass('ASTInterpreter', globals.NodeVisitor, ['node', 'context', 'stack', 'returnValue', 'returned', 'forceAtEnd'], 'Compiler-Interpreter');
globals.ASTInterpreter.comment="I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.\x0a\x0a## API\x0a\x0aWhile my instances should be used from within an `ASTDebugger`, which provides a more high level interface,\x0ayou can use methods from the `interpreting` protocol:\x0a\x0a- `#step` evaluates the current `node` only\x0a- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)\x0a- `#proceed` evaluates eagerly the AST\x0a- `#restart` select the first node of the AST\x0a- `#skip` skips the current node, moving to the next one if any";
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
protocol: 'private',
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
return self}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject},globals.ASTInterpreter)})},
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value put: anObject ]",
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@forceAtEnd"];
if(smalltalk.assert($1)){
return true;
};
$2=_st(self._hasReturned())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},globals.ASTInterpreter)})},
args: [],
source: "atEnd\x0a\x09forceAtEnd ifTrue: [ ^ true ].\x0a\x09\x0a\x09^ self hasReturned or: [ self node isNil ]",
messageSends: ["ifTrue:", "or:", "hasReturned", "isNil", "node"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
protocol: 'private',
fn: function (aString){
var self=this;
var source,function_;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
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
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},globals.ASTInterpreter)})},
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})() })' ].\x0a\x09\x09\x09\x0a\x09function := Compiler new eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"],
referencedClasses: ["String", "Compiler"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "hasReturned",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@returned"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasReturned",{},globals.ASTInterpreter)})},
args: [],
source: "hasReturned\x0a\x09^ returned ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ASTInterpreter.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@forceAtEnd"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ASTInterpreter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09forceAtEnd := false",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(self._node());
return self}, function($ctx1) {$ctx1.fill(self,"interpret",{},globals.ASTInterpreter)})},
args: [],
source: "interpret\x0a\x09\x22Interpret the next node to be evaluated\x22\x0a\x09\x0a\x09self visit: self node",
messageSends: ["visit:", "node"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
protocol: 'interpreting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(aNode);
self._interpret();
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "interpret: aNode\x0a\x09self node: aNode.\x0a\x09self interpret",
messageSends: ["node:", "interpret"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageFromSendNode:arguments:",
protocol: 'private',
fn: function (aSendNode,aCollection){
var self=this;
function $Message(){return globals.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Message())._new();
_st($2)._selector_(_st(aSendNode)._selector());
_st($2)._arguments_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,aCollection:aCollection},globals.ASTInterpreter)})},
args: ["aSendNode", "aCollection"],
source: "messageFromSendNode: aSendNode arguments: aCollection\x0a\x09^ Message new\x0a\x09\x09selector: aSendNode selector;\x0a\x09\x09arguments: aCollection;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "selector", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "messageNotUnderstood:receiver:",
protocol: 'private',
fn: function (aMessage,anObject){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._meesage_(aMessage);
_st($1)._receiver_(anObject);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject},globals.ASTInterpreter)})},
args: ["aMessage", "anObject"],
source: "messageNotUnderstood: aMessage receiver: anObject\x0a\x09MessageNotUnderstood new\x0a\x09\x09meesage: aMessage;\x0a\x09\x09receiver: anObject;\x0a\x09\x09signal",
messageSends: ["meesage:", "new", "receiver:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(self._node())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"next",{},globals.ASTInterpreter)})},
args: [],
source: "next\x0a\x09self node: self node nextNode",
messageSends: ["node:", "nextNode", "node"],
referencedClasses: []
}),
globals.ASTInterpreter);

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
source: "node\x0a\x09\x22Answer the next node, ie the node to be evaluated in the next step\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

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
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
protocol: 'stack',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=self._stack();
$ctx1.sendIdx["stack"]=1;
_st($1)._ifEmpty_((function(){
throw $early=[nil];
}));
$2=_st(self._stack())._last();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"peek",{},globals.ASTInterpreter)})},
args: [],
source: "peek\x0a\x09\x22Peek the top object of the context stack\x22\x0a\x09\x0a\x09self stack ifEmpty: [ ^ nil ].\x0a\x09\x0a\x09^ self stack last",
messageSends: ["ifEmpty:", "stack", "last"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "pop",
protocol: 'stack',
fn: function (){
var self=this;
var peekedValue;
return smalltalk.withContext(function($ctx1) { 
var $1;
peekedValue=self._peek();
_st(self._stack())._removeLast();
$1=peekedValue;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pop",{peekedValue:peekedValue},globals.ASTInterpreter)})},
args: [],
source: "pop\x0a\x09\x22Pop an object from the context stack\x22\x0a\x09\x0a\x09| peekedValue |\x0a\x09\x0a\x09peekedValue := self peek.\x0a\x09self stack removeLast.\x0a\x09^ peekedValue",
messageSends: ["peek", "removeLast", "stack"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
protocol: 'interpreting',
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
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},globals.ASTInterpreter)})},
args: [],
source: "proceed\x0a\x09\x22Eagerly evaluate the ast\x22\x0a\x09\x0a\x09[ self atEnd ] \x0a\x09\x09whileFalse: [ self step ]",
messageSends: ["whileFalse:", "atEnd", "step"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "push:",
protocol: 'stack',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._stack())._add_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject},globals.ASTInterpreter)})},
args: ["anObject"],
source: "push: anObject\x0a\x09\x22Push an object to the context stack\x22\x0a\x09\x0a\x09^ self stack add: anObject",
messageSends: ["add:", "stack"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(_st(self._context())._ast())._nextChild());
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},globals.ASTInterpreter)})},
args: [],
source: "restart\x0a\x09self node: self context ast nextChild",
messageSends: ["node:", "nextChild", "ast", "context"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"result",{},globals.ASTInterpreter)})},
args: [],
source: "result\x0a\x09^ self hasReturned \x0a\x09\x09ifTrue: [ self returnValue ] \x0a\x09\x09ifFalse: [ self context receiver ]",
messageSends: ["ifTrue:ifFalse:", "hasReturned", "returnValue", "receiver", "context"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@returnValue"];
return $1;
},
args: [],
source: "returnValue\x0a\x09^ returnValue",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@returnValue"]=anObject;
return self},
args: ["anObject"],
source: "returnValue: anObject\x0a\x09returnValue := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "sendMessage:to:superSend:",
protocol: 'private',
fn: function (aMessage,anObject,aBoolean){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$receiver;
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
if(($receiver = $2) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},globals.ASTInterpreter)})},
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method sendTo: anObject arguments: aMessage arguments",
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "sendTo:arguments:", "arguments"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "setNonLocalReturnFromContext:",
protocol: 'interpreting',
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
return self}, function($ctx1) {$ctx1.fill(self,"setNonLocalReturnFromContext:",{aContext:aContext},globals.ASTInterpreter)})},
args: ["aContext"],
source: "setNonLocalReturnFromContext: aContext\x0a\x09aContext interpreter hasReturned ifTrue: [\x0a\x09\x09returned := true.\x0a\x09\x09self returnValue: aContext interpreter returnValue ]",
messageSends: ["ifTrue:", "hasReturned", "interpreter", "returnValue:", "returnValue"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._next();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},globals.ASTInterpreter)})},
args: [],
source: "skip\x0a\x09self next",
messageSends: ["next"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stack",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@stack"];
if(($receiver = $2) == null || $receiver.isNil){
self["@stack"]=_st($OrderedCollection())._new();
$1=self["@stack"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},globals.ASTInterpreter)})},
args: [],
source: "stack\x0a\x09^ stack ifNil: [ stack := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._interpret();
$1=self._next();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},globals.ASTInterpreter)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09interpret; \x0a\x09\x09next",
messageSends: ["interpret", "next"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
protocol: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._step();
$ctx1.sendIdx["step"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._node();
$ctx2.sendIdx["node"]=1;
$1=_st($2)._isNil();
return _st($1)._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._node())._isSteppingNode();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},globals.ASTInterpreter)})},
args: [],
source: "stepOver\x0a\x09self step.\x0a\x09\x0a\x09[ self node isNil or: [ self node isSteppingNode ] ] whileFalse: [ \x0a\x09\x09self step ]",
messageSends: ["step", "whileFalse:", "or:", "isNil", "node", "isSteppingNode"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasReturned();
if(! smalltalk.assert($1)){
($ctx1.supercall = true, globals.ASTInterpreter.superclass.fn.prototype._visit_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
};
return self}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visit: aNode\x0a\x09self hasReturned ifFalse: [ super visit: aNode ]",
messageSends: ["ifFalse:", "hasReturned", "visit:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var poppedValue;
return smalltalk.withContext(function($ctx1) { 
poppedValue=self._pop();
$ctx1.sendIdx["pop"]=1;
self._pop();
self._push_(poppedValue);
self._assign_to_(_st(aNode)._left(),poppedValue);
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,poppedValue:poppedValue},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| poppedValue |\x0a\x09\x0a\x09poppedValue := self pop.\x0a\x09\x0a\x09\x22Pop the left side of the assignment.\x0a\x09It already has been visited, and we don't need its value.\x22\x0a\x09self pop.\x0a\x09\x0a\x09self push: poppedValue.\x0a\x09self assign: aNode left to: poppedValue",
messageSends: ["pop", "push:", "assign:to:", "left"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var block;
function $AIBlockClosure(){return globals.AIBlockClosure||(typeof AIBlockClosure=="undefined"?nil:AIBlockClosure)}
return smalltalk.withContext(function($ctx1) { 
block=_st($AIBlockClosure())._forContext_node_(self._context(),aNode);
self._push_(block);
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,block:block},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Do not evaluate the block node.\x0a\x09Instead, put all instructions into a block that we push to the stack for later evaluation\x22\x0a\x09\x0a\x09| block |\x0a\x09\x0a\x09block := AIBlockClosure forContext: self context node: aNode.\x0a\x09\x0a\x09self push: block",
messageSends: ["forContext:node:", "context", "push:"],
referencedClasses: ["AIBlockClosure"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ASTInterpreter.superclass.fn.prototype._visitBlockSequenceNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
self["@forceAtEnd"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09\x22If the receiver is actually visiting a BlockSequenceNode,\x0a\x09it means the the context is a block context. Evaluation should \x0a\x09stop right after evaluating the block sequence and the outer\x0a\x09context's interpreter should take over. \x0a\x09Therefore we force #atEnd.\x22\x0a\x09\x0a\x09super visitBlockSequenceNode: aNode.\x0a\x09forceAtEnd := true",
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09\x0a\x09array := #().\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09array addFirst: self pop ].\x0a\x09\x0a\x09self push: array",
messageSends: ["do:", "nodes", "addFirst:", "pop", "push:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var keyValueList;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
keyValueList=_st($OrderedCollection())._new();
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(keyValueList)._add_(self._pop());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._push_(_st($HashedCollection())._newFromPairs_(_st(keyValueList)._reversed()));
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,keyValueList:keyValueList},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| keyValueList |\x0a\x09\x0a\x09keyValueList := OrderedCollection new.\x0a\x09\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09keyValueList add: self pop ].\x0a\x09\x0a\x09self push: (HashedCollection newFromPairs: keyValueList reversed)",
messageSends: ["new", "do:", "nodes", "add:", "pop", "push:", "newFromPairs:", "reversed"],
referencedClasses: ["OrderedCollection", "HashedCollection"]
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returned"]=true;
self._returnValue_(self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: (self eval: aNode source)",
messageSends: ["returnValue:", "eval:", "source"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return self},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09\x22Do nothing by default. Especially, do not visit children recursively.\x22",
messageSends: [],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returned"]=true;
self._returnValue_(self._pop());
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: self pop",
messageSends: ["returnValue:", "pop"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| receiver args message result |\x0a\x09\x0a\x09args := aNode arguments collect: [ :each | self pop ].\x0a\x09receiver := self pop.\x0a\x09\x0a\x09message := self\x0a\x09\x09messageFromSendNode: aNode\x0a\x09\x09arguments: args reversed.\x0a\x09\x0a\x09result := self sendMessage: message to: receiver superSend: aNode superSend.\x0a\x09\x0a\x09\x22For cascade sends, push the reciever if the send is not the last one\x22\x0a\x09(aNode isCascadeSendNode and: [ aNode isLastChild not ])\x0a\x09\x09ifTrue: [ self push: receiver ]\x0a\x09\x09ifFalse: [ self push: result ]",
messageSends: ["collect:", "arguments", "pop", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "ifTrue:ifFalse:", "and:", "isCascadeSendNode", "not", "isLastChild", "push:"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._temps())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._context())._defineLocal_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self context defineLocal: each ]",
messageSends: ["do:", "temps", "defineLocal:", "context"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self push: aNode value",
messageSends: ["push:", "value"],
referencedClasses: []
}),
globals.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
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
$16=_st($Smalltalk())._globals();
$ctx2.sendIdx["globals"]=2;
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
return self}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},globals.ASTInterpreter)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09aNode binding isUnknownVar ifTrue: [\x0a\x09\x09^ self push: (PlatformInterface globals at: aNode value ifAbsent: [ self error: 'Unknown variable' ]) ].\x0a\x09\x09\x0a\x09self push: (aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09ifFalse: [ self context \x0a\x09\x09\x09localAt: aNode value\x0a\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09aNode value isCapitalized\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09Smalltalk globals \x0a\x09\x09\x09\x09\x09\x09\x09at: aNode value \x0a\x09\x09\x09\x09\x09\x09\x09ifAbsent: [ PlatformInterface globals at: aNode value ] ] ] ])",
messageSends: ["ifTrue:", "isUnknownVar", "binding", "push:", "at:ifAbsent:", "globals", "value", "error:", "ifTrue:ifFalse:", "isInstanceVar", "instVarAt:", "receiver", "context", "localAt:ifAbsent:", "isCapitalized", "at:"],
referencedClasses: ["PlatformInterface", "Smalltalk"]
}),
globals.ASTInterpreter);



smalltalk.addClass('ASTInterpreterError', globals.Error, [], 'Compiler-Interpreter');
globals.ASTInterpreterError.comment="I get signaled when an AST interpreter is unable to interpret a node.";


smalltalk.addClass('ASTPCNodeVisitor', globals.NodeVisitor, ['context', 'index', 'selector', 'currentNode'], 'Compiler-Interpreter');
globals.ASTPCNodeVisitor.comment="I visit an AST until I get to the current node for the `context` and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node is answered by `#currentNode`";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "currentNode",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentNode"];
return $1;
},
args: [],
source: "currentNode\x0a\x09^ currentNode",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseIndex",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=_st(self._index()).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndex",{},globals.ASTPCNodeVisitor)})},
args: [],
source: "increaseIndex\x0a\x09index := self index + 1",
messageSends: ["+", "index"],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@index"];
if(($receiver = $2) == null || $receiver.isNil){
self["@index"]=(0);
$1=self["@index"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},globals.ASTPCNodeVisitor)})},
args: [],
source: "index\x0a\x09^ index ifNil: [ index := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
self["@currentNode"]=aNode;
return self},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09\x22If a JSStatementNode is encountered, it always is the current node.\x0a\x09Stop visiting the AST there\x22\x0a\x09\x0a\x09currentNode := aNode",
messageSends: [],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var sendIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=self._context();
$2=self._selector();
$ctx1.sendIdx["selector"]=1;
sendIndex=_st($1)._sendIndexAt_($2);
($ctx1.supercall = true, globals.ASTPCNodeVisitor.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]));
$ctx1.supercall = false;
$4=self._selector();
$ctx1.sendIdx["selector"]=2;
$3=_st($4).__eq(_st(aNode)._selector());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($3)){
$5=_st(self._index()).__eq(sendIndex);
if(smalltalk.assert($5)){
self["@currentNode"]=aNode;
self["@currentNode"];
};
self._increaseIndex();
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,sendIndex:sendIndex},globals.ASTPCNodeVisitor)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| sendIndex |\x0a\x09sendIndex := self context sendIndexAt: self selector.\x0a\x09\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self selector = aNode selector ifTrue: [\x0a\x09\x09self index = sendIndex ifTrue: [ currentNode := aNode ].\x0a\x09\x09self increaseIndex ]",
messageSends: ["sendIndexAt:", "context", "selector", "visitSendNode:", "ifTrue:", "=", "index", "increaseIndex"],
referencedClasses: []
}),
globals.ASTPCNodeVisitor);


smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.AssignmentNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.BlockNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.DynamicArrayNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.DynamicDictionaryNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.JSStatementNode);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSteppingNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Node);

smalltalk.addMethod(
smalltalk.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSteppingNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.SendNode);

});
