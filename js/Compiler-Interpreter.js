(function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-Interpreter');

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
source: "compiledSource\x0a\x09\x22Unlike blocks, the receiver doesn't represent a JS function\x22\x0a\x09\x0a\x09^ '[ AST Block closure ]' ",
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
function $AIInterpreterError(){return smalltalk.AIInterpreterError||(typeof AIInterpreterError=="undefined"?nil:AIInterpreterError)}
return smalltalk.withContext(function($ctx1) { 
_st($AIInterpreterError())._signal_("Method cannot be interpreted by the interpreter.");
return self}, function($ctx1) {$ctx1.fill(self,"interpreterError",{},smalltalk.AIBlockClosure)})},
args: [],
source: "interpreterError\x0a\x09AIInterpreterError signal: 'Method cannot be interpreted by the interpreter.'",
messageSends: ["signal:"],
referencedClasses: ["AIInterpreterError"]
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
var $1,$2,$3,$4,$5;
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
_st($3)._node_(_st(sequenceNode)._nextChild());
$4=_st($3)._proceed();
_st(_st(self["@outerContext"])._interpreter())._returnValue_(_st(_st(context)._interpreter())._returnValue());
_st(console)._log_(_st(_st(context)._interpreter())._returnValue());
$5=_st(_st(context)._interpreter())._pop();
return $5;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection,context:context,sequenceNode:sequenceNode},smalltalk.AIBlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09| context sequenceNode |\x0a\x09context := outerContext newBlockContext.\x0a\x0a\x09\x22Interpret a copy of the sequence node to avoid creating a new AIBlockClosure\x22\x0a\x09sequenceNode := node nodes first copy\x0a\x09\x09parent: nil;\x0a\x09\x09yourself.\x0a\x0a\x09\x22Populate the arguments into the context locals\x22\x09\x0a\x09node parameters withIndexDo: [ :each :index |\x0a\x09\x09context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].\x0a\x0a\x09\x22Interpret the first node of the BlockSequenceNode\x22\x0a\x09context interpreter\x0a\x09\x09node: sequenceNode nextChild;\x0a\x09\x09proceed.\x0a\x09\x09\x0a\x09outerContext interpreter\x0a\x09\x09returnValue: context interpreter returnValue.\x0a\x09\x09\x0a\x09console log: context interpreter returnValue.\x0a\x09\x09\x0a\x09^ context interpreter pop",
messageSends: ["newBlockContext", "parent:", "copy", "first", "nodes", "yourself", "withIndexDo:", "parameters", "localAt:put:", "at:ifAbsent:", "node:", "interpreter", "nextChild", "proceed", "returnValue:", "returnValue", "log:", "pop"],
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


smalltalk.addClass('AIContext', smalltalk.Object, ['outerContext', 'innerContext', 'pc', 'locals', 'method', 'index', 'ast', 'interpreter'], 'Compiler-Interpreter');
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
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isBlockContext();
if(smalltalk.assert($2)){
$1=_st("a block (in ".__comma(_st(self._methodContext())._asString())).__comma(")");
} else {
$1=_st(_st(_st(_st(self._receiver())._class())._name()).__comma(" >> ")).__comma(self._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.AIContext)})},
args: [],
source: "asString\x0a\x09^self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext asString, ')' ]\x0a\x09\x09ifFalse: [ self receiver class name, ' >> ', self selector ]",
messageSends: ["ifTrue:ifFalse:", "isBlockContext", ",", "asString", "methodContext", "name", "class", "receiver", "selector"],
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
var $1,$2,$3,$4;
$1=self._isBlockContext();
if(smalltalk.assert($1)){
$2=_st(self._outerContext())._ast();
return $2;
};
$3=self["@ast"];
if(($receiver = $3) == nil || $receiver == undefined){
self._initializeAST();
} else {
$3;
};
$4=self["@ast"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"ast",{},smalltalk.AIContext)})},
args: [],
source: "ast\x0a\x09self isBlockContext ifTrue: [ ^ self outerContext ast ].\x0a\x0a\x09ast ifNil: [ self initializeAST ].\x0a\x09^ ast",
messageSends: ["ifTrue:", "isBlockContext", "ast", "outerContext", "ifNil:", "initializeAST"],
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
if(($receiver = $2) == nil || $receiver == undefined){
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
self["@ast"]=_st(self._method())._ast();
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
$1=self;
_st($1)._pc_(_st(aMethodContext)._pc());
_st($1)._index_(_st(aMethodContext)._index());
_st($1)._receiver_(_st(aMethodContext)._receiver());
$2=_st($1)._method_(_st(aMethodContext)._method());
$3=_st(aMethodContext)._outerContext();
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
var outer;
outer=$receiver;
$4=_st(outer)._methodContext();
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
self._outerContext_(_st(self._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
_st(_st(aMethodContext)._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self._locals())._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},smalltalk.AIContext)})},
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x0a\x09self \x0a\x09\x09pc: aMethodContext pc;\x0a\x09\x09index: aMethodContext index;\x0a\x09\x09receiver: aMethodContext receiver;\x0a\x09\x09method: aMethodContext method.\x0a\x09\x09\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
messageSends: ["pc:", "pc", "index:", "index", "receiver:", "receiver", "method:", "method", "ifNotNil:", "outerContext", "methodContext", "outerContext:", "fromMethodContext:", "class", "keysAndValuesDo:", "locals", "at:put:"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInterpreter",
category: 'initialization',
fn: function (){
var self=this;
function $Interpreter(){return smalltalk.Interpreter||(typeof Interpreter=="undefined"?nil:Interpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($Interpreter())._new();
_st($1)._context_(self);
$2=_st($1)._yourself();
self["@interpreter"]=$2;
$3=self["@ast"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self["@interpreter"])._node_(self._retrieveNode());
};
$4=_st(_st(self._innerContext())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._innerContext())._isBlockContext())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(smalltalk.assert($4)){
self._setupInterpreter_(self["@interpreter"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{},smalltalk.AIContext)})},
args: [],
source: "initializeInterpreter\x0a\x09interpreter := Interpreter new\x0a\x09\x09context: self;\x0a\x09\x09yourself.\x0a\x09ast ifNotNil: [ interpreter node: self retrieveNode ].\x0a\x09\x0a\x09(self innerContext notNil and: [ \x0a\x09\x09self innerContext isBlockContext not ]) ifTrue: [\x0a\x09\x09\x09self setupInterpreter: interpreter ]",
messageSends: ["context:", "new", "yourself", "ifNotNil:", "node:", "retrieveNode", "ifTrue:", "and:", "notNil", "innerContext", "not", "isBlockContext", "setupInterpreter:"],
referencedClasses: ["Interpreter"]
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
if(($receiver = $1) == nil || $receiver == undefined){
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
selector: "isBlockContext",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.AIContext)})},
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
messageSends: ["isNil", "selector"],
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
$2=self._isBlockContext();
if(smalltalk.assert($2)){
return nil;
} else {
return _st(self._outerContext())._localAt_(aString);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString},smalltalk.AIContext)})},
args: ["aString"],
source: "localAt: aString\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09^ self locals at: aString ifAbsent: [ \x0a\x09\x09self isBlockContext \x0a\x09\x09\x09ifTrue: [ nil ]\x0a\x09\x09\x09ifFalse: [ self outerContext localAt: aString ] ]",
messageSends: ["at:ifAbsent:", "locals", "ifTrue:ifFalse:", "isBlockContext", "localAt:", "outerContext"],
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
selector: "methodContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=self._isBlockContext();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$4=self._outerContext();
if(($receiver = $4) == nil || $receiver == undefined){
$3=$4;
} else {
var outer;
outer=$receiver;
$3=_st(outer)._methodContext();
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},smalltalk.AIContext)})},
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self outerContext ifNotNil: [ :outer |\x0a\x09\x09outer methodContext ]",
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "outerContext", "methodContext"],
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
selector: "pc",
category: 'interpreting',
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
category: 'interpreting',
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
selector: "retrieveNode",
category: 'interpreting',
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
args: [],
source: "retrieveNode\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09context: self;\x0a\x09\x09visit: self ast;\x0a\x09\x09currentNode",
messageSends: ["context:", "new", "visit:", "ast", "currentNode"],
referencedClasses: ["ASTPCNodeVisitor"]
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
source: "selector\x0a\x09^ self method ifNotNil: [ \x0a\x09\x09self method selector ]",
messageSends: ["ifNotNil:", "method", "selector"],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
smalltalk.method({
selector: "setupInterpreter:",
category: 'interpreting',
fn: function (anInterpreter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self._innerContext())._arguments())._reversed())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(anInterpreter)._push_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anInterpreter)._push_(_st(self._innerContext())._receiver());
return self}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter},smalltalk.AIContext)})},
args: ["anInterpreter"],
source: "setupInterpreter: anInterpreter\x0a\x09\x22Push the send args and receiver to the interpreter stack\x22\x0a\x09\x0a\x09self innerContext arguments reversed do: [ :each | \x0a\x09\x09anInterpreter push: each ].\x0a\x09\x09\x0a\x09anInterpreter push: (self innerContext receiver)",
messageSends: ["do:", "reversed", "arguments", "innerContext", "push:", "receiver"],
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


smalltalk.addClass('AIInterpreterError', smalltalk.Error, [], 'Compiler-Interpreter');
smalltalk.AIInterpreterError.comment="I get signaled when an AST interpreter is unable to interpret a node.";


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
messageSends: ["buildAST", "context:", "new", "context", "visit:", "currentNode", "interpret:", "interpreter"],
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self._interpreter())._atEnd())._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._interpreter())._step();
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ASTDebugger)})},
args: [],
source: "step\x0a\x09\x22The ASTSteppingInterpreter stops at each node interpretation.\x0a\x09One step will interpret nodes until:\x0a\x09- we get at the end\x0a\x09- the next node is a stepping node (send, assignment, etc.)\x22\x0a\x09\x0a\x09[ (self interpreter nextNode notNil and: [ self interpreter nextNode stopOnStepping ])\x0a\x09\x09or: [ self interpreter atEnd not ] ]\x0a\x09\x09\x09whileFalse: [\x0a\x09\x09\x09\x09self interpreter step.\x0a\x09\x09\x09\x09self step ]",
messageSends: ["whileFalse:", "or:", "and:", "notNil", "nextNode", "interpreter", "stopOnStepping", "not", "atEnd", "step"],
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


smalltalk.addClass('ASTInterpreter', smalltalk.Object, ['currentNode', 'nextNode', 'context', 'shouldReturn', 'result'], 'Compiler-Interpreter');
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
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"],
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
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(",");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,3)})}));
} else {
self._continue_value_(aBlock,aNode);
};
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09shouldReturn ifTrue: [ ^ self ].\x0a\x0a\x09aNode isNode\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09currentNode := aNode.\x0a\x09\x09\x09self interpretNode: aNode continue: [ :value |\x0a\x09\x09\x09\x09self continue: aBlock value: value ] ]\x0a\x09\x09ifFalse: [ self continue: aBlock value: aNode ]",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "isNode", "interpretNode:continue:", "continue:value:"],
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
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,3)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:result:",{nodes:nodes,aBlock:aBlock,aCollection:aCollection},smalltalk.ASTInterpreter)})},
args: ["nodes", "aBlock", "aCollection"],
source: "interpretAll: nodes continue: aBlock result: aCollection\x0a\x09nodes isEmpty\x0a\x09\x09ifTrue: [ self continue: aBlock value: aCollection ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self interpret: nodes first continue: [:value |\x0a\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09interpretAll: nodes allButFirst\x0a\x09\x09\x09\x09\x09continue: aBlock\x0a\x09\x09\x09\x09\x09result: aCollection, { value } ] ]",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "continue:value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ","],
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
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,1)})}));
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
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
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
return self._interpretAll_continue_(_st(_st(aNode)._nodes())._allButLast(),(function(){
return smalltalk.withContext(function($ctx3) {
return self._interpret_continue_(_st(_st(aNode)._nodes())._last(),(function(val){
return smalltalk.withContext(function($ctx4) {
return self._continue_value_(aBlock,val);
}, function($ctx4) {$ctx4.fillBlock({val:val},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretCascadeNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretCascadeNode: aNode continue: aBlock\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09\x0a\x09self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09\x22Only interpret the receiver once\x22\x0a\x09\x09aNode nodes do: [ :each | each receiver: receiver ].\x0a\x0a\x09\x09self\x0a\x09\x09\x09interpretAll: aNode nodes allButLast\x0a\x09\x09\x09continue: [\x0a\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09interpret: aNode nodes last\x0a\x09\x09\x09\x09\x09continue: [ :val | self continue: aBlock value: val ] ] ]",
messageSends: ["interpret:continue:", "receiver", "do:", "nodes", "receiver:", "interpretAll:continue:", "allButLast", "last", "continue:value:"],
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
messageSends: ["continue:value:", "at:", "current", "value"],
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
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1,1)})}));
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
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
return self._continue_value_(aBlock,hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({array:array,hashedCollection:hashedCollection},$ctx1,1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1,1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,1)})}));
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
}, function($ctx4) {$ctx4.fillBlock({message:message},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({args:args},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSendNode:continue:",{aNode:aNode,aBlock:aBlock},smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpretSendNode: aNode continue: aBlock\x0a\x09self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09self interpretAll: aNode arguments continue: [ :args |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09messageFromSendNode: aNode\x0a\x09\x09\x09\x09arguments: args\x0a\x09\x09\x09\x09do: [ :message |\x0a\x09\x09\x09\x09\x09self context pc: self context pc + 1.\x0a\x09\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09\x09continue: aBlock\x0a\x09\x09\x09\x09\x09\x09value: (self sendMessage: message to: receiver superSend: aNode superSend) ] ] ]",
messageSends: ["interpret:continue:", "receiver", "interpretAll:continue:", "arguments", "messageFromSendNode:arguments:do:", "pc:", "context", "+", "pc", "continue:value:", "sendMessage:to:superSend:", "superSend"],
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
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1,1)})}));
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
messageSends: ["continue:value:", "ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:", "receiver", "context", "value", "localAt:"],
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
messageSends: ["continue:value:", "selector:", "new", "selector", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode",
category: 'accessing',
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
args: [],
source: "nextNode\x0a\x09^ nextNode ifNil: [ self currentNode ]",
messageSends: ["ifNil:", "currentNode"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nextNode"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"nextNode:",{aNode:aNode},smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "nextNode: aNode\x0a\x09nextNode := aNode",
messageSends: [],
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$6=_st(_st(method)._fn())._applyTo_arguments_(anObject,_st(aMessage)._arguments());
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},smalltalk.ASTInterpreter)})},
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method fn applyTo: anObject arguments: aMessage arguments\x0a\x09\x09\x0a\x09\x0a\x09",
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "applyTo:arguments:", "fn", "arguments"],
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
messageSends: ["context:", "outerContext:", "new", "context", "yourself", "value", "outerContext"],
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.ASTSteppingInterpreter)})},
args: [],
source: "atEnd\x0a\x09^ self shouldReturn or: [ self nextNode == self currentNode ]",
messageSends: ["or:", "shouldReturn", "==", "nextNode", "currentNode"],
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
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



smalltalk.addClass('ASTPCNodeVisitor', smalltalk.NodeVisitor, ['useInlinings', 'pc', 'context', 'blockIndex', 'currentNode'], 'Compiler-Interpreter');
smalltalk.ASTPCNodeVisitor.comment="I visit an AST until I get to the current pc node and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node corresponding to the `pc` is answered by `#currentNode`";
smalltalk.addMethod(
smalltalk.method({
selector: "blockIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@blockIndex"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@blockIndex"]=(0);
$1=self["@blockIndex"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockIndex",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "blockIndex\x0a\x09^ blockIndex ifNil: [ blockIndex := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);

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
selector: "increaseBlockIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@blockIndex"]=_st(self._blockIndex()).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseBlockIndex",{},smalltalk.ASTPCNodeVisitor)})},
args: [],
source: "increaseBlockIndex\x0a\x09blockIndex := self blockIndex + 1",
messageSends: ["+", "blockIndex"],
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
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5;
$1=_st(aNode)._shouldBeInlined();
$2=(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(self._blockIndex()).__gt_eq(_st(self._context())._index());
$4=(function(){
return smalltalk.withContext(function($ctx3) {
self._increaseBlockIndex();
return smalltalk.ASTPCNodeVisitor.superclass.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})});
return _st($3)._ifFalse_($4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
$5=(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.ASTPCNodeVisitor.superclass.fn.prototype._visitBlockNode_.apply(_st(self), [aNode]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
_st($1)._ifFalse_ifTrue_($2,$5);
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},smalltalk.ASTPCNodeVisitor)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09aNode shouldBeInlined \x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self blockIndex >= self context index ifFalse: [\x0a\x09\x09\x09\x09self increaseBlockIndex.\x0a\x09\x09\x09\x09super visitBlockNode: aNode ] ]\x0a\x09\x09ifTrue: [ super visitBlockNode: aNode ]",
messageSends: ["ifFalse:ifTrue:", "shouldBeInlined", "ifFalse:", ">=", "blockIndex", "index", "context", "increaseBlockIndex", "visitBlockNode:"],
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
var $1,$3,$5,$6,$4,$2;
smalltalk.ASTPCNodeVisitor.superclass.fn.prototype._visitSendNode_.apply(_st(self), [aNode]);
$1=_st(self._pc()).__eq(_st(self._context())._pc());
$2=(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(aNode)._shouldBeInlined();
$4=(function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(self._blockIndex()).__eq(_st(self._context())._index());
$6=(function(){
return smalltalk.withContext(function($ctx4) {
self._pc_(_st(self._pc()).__plus((1)));
self["@currentNode"]=aNode;
return self["@currentNode"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})});
return _st($5)._ifTrue_($6);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})});
return _st($3)._ifFalse_($4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
_st($1)._ifFalse_($2);
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},smalltalk.ASTPCNodeVisitor)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self pc = self context pc ifFalse: [\x0a\x09\x09aNode shouldBeInlined ifFalse: [\x0a\x09\x09\x09self blockIndex = self context index ifTrue: [\x0a\x09\x09\x09\x09self pc: self pc + 1.\x0a\x09\x09\x09\x09currentNode := aNode ] ] ]",
messageSends: ["visitSendNode:", "ifFalse:", "=", "pc", "context", "shouldBeInlined", "ifTrue:", "blockIndex", "index", "pc:", "+"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitor);



smalltalk.addClass('Interpreter', smalltalk.NodeVisitor, ['node', 'context', 'stack', 'returnValue'], 'Compiler-Interpreter');
smalltalk.addMethod(
smalltalk.method({
selector: "assign:to:",
category: 'private',
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
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value put: anObject ]",
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
return _st(self._node())._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Interpreter)})},
args: [],
source: "atEnd\x0a\x09^ self shouldReturn or: [ self node isNil ]",
messageSends: ["or:", "shouldReturn", "isNil", "node"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.Interpreter)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.Interpreter)})},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_(",");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
function_=_st(_st($Compiler())._new())._eval_(source);
$3=_st(function_)._valueWithPossibleArguments_(_st(_st(self._context())._locals())._values());
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},smalltalk.Interpreter)})},
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})() })' ].\x0a\x09\x09\x09\x0a\x09function := Compiler new eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"],
referencedClasses: ["String", "Compiler"]
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(self._node());
return self}, function($ctx1) {$ctx1.fill(self,"interpret",{},smalltalk.Interpreter)})},
args: [],
source: "interpret\x0a\x09\x22Interpret the next node to be evaluated\x22\x0a\x09\x0a\x09self visit: self node",
messageSends: ["visit:", "node"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
category: 'interpreting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(aNode);
self._interpret();
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "interpret: aNode\x0a\x09self node: aNode.\x0a\x09self interpret",
messageSends: ["node:", "interpret"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,aCollection:aCollection},smalltalk.Interpreter)})},
args: ["aSendNode", "aCollection"],
source: "messageFromSendNode: aSendNode arguments: aCollection\x0a\x09^ Message new\x0a\x09\x09selector: aSendNode selector;\x0a\x09\x09arguments: aCollection;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "selector", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.Interpreter);

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
return self}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject},smalltalk.Interpreter)})},
args: ["aMessage", "anObject"],
source: "messageNotUnderstood: aMessage receiver: anObject\x0a\x09MessageNotUnderstood new\x0a\x09\x09meesage: aMessage;\x0a\x09\x09receiver: anObject;\x0a\x09\x09signal",
messageSends: ["meesage:", "new", "receiver:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(self._node())._nextNode());
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Interpreter)})},
args: [],
source: "next\x0a\x09self node: self node nextNode",
messageSends: ["node:", "nextNode", "node"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"node",{},smalltalk.Interpreter)})},
args: [],
source: "node\x0a\x09\x22Answer the next node, ie the node to be evaluated in the next step\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@node"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"node:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
category: 'stack',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._stack())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=_st(self._stack())._last();
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"peek",{},smalltalk.Interpreter)})},
args: [],
source: "peek\x0a\x09\x22Peek the top object of the context stack\x22\x0a\x09\x0a\x09self stack ifEmpty: [ ^ nil ].\x0a\x09\x0a\x09^ self stack last",
messageSends: ["ifEmpty:", "stack", "last"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"pop",{peekedValue:peekedValue},smalltalk.Interpreter)})},
args: [],
source: "pop\x0a\x09\x22Pop an object from the context stack\x22\x0a\x09\x0a\x09| peekedValue |\x0a\x09\x0a\x09peekedValue := self peek.\x0a\x09self stack removeLast.\x0a\x09^ peekedValue",
messageSends: ["peek", "removeLast", "stack"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.Interpreter)})},
args: [],
source: "proceed\x0a\x09\x22Eagerly evaluate the ast\x22\x0a\x09\x0a\x09[ self atEnd ] whileFalse: [ \x0a\x09\x09self step ]",
messageSends: ["whileFalse:", "atEnd", "step"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject},smalltalk.Interpreter)})},
args: ["anObject"],
source: "push: anObject\x0a\x09\x22Push an object to the context stack\x22\x0a\x09\x0a\x09^ self stack add: anObject",
messageSends: ["add:", "stack"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "restart",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._node_(_st(_st(self._context())._ast())._nextChild());
return self}, function($ctx1) {$ctx1.fill(self,"restart",{},smalltalk.Interpreter)})},
args: [],
source: "restart\x0a\x09self node: self context ast nextChild",
messageSends: ["node:", "nextChild", "ast", "context"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
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
args: [],
source: "result\x0a\x09^ self returnValue ifNil: [ self context receiver ]",
messageSends: ["ifNil:", "returnValue", "receiver", "context"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx1) {$ctx1.fill(self,"returnValue",{},smalltalk.Interpreter)})},
args: [],
source: "returnValue\x0a\x09^ returnValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "returnValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@returnValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"returnValue:",{anObject:anObject},smalltalk.Interpreter)})},
args: ["anObject"],
source: "returnValue: anObject\x0a\x09returnValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$6=_st(method)._sendTo_arguments_(anObject,_st(aMessage)._arguments());
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},smalltalk.Interpreter)})},
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method sendTo: anObject arguments: aMessage arguments",
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "sendTo:arguments:", "arguments"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._returnValue())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldReturn",{},smalltalk.Interpreter)})},
args: [],
source: "shouldReturn\x0a\x09^ self returnValue notNil",
messageSends: ["notNil", "returnValue"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "skip",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._next();
return self}, function($ctx1) {$ctx1.fill(self,"skip",{},smalltalk.Interpreter)})},
args: [],
source: "skip\x0a\x09self next",
messageSends: ["next"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
if(($receiver = $2) == nil || $receiver == undefined){
self["@stack"]=_st($OrderedCollection())._new();
$1=self["@stack"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},smalltalk.Interpreter)})},
args: [],
source: "stack\x0a\x09^ stack ifNil: [ stack := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._interpret();
$2=_st($1)._next();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.Interpreter)})},
args: [],
source: "step\x0a\x09self \x0a\x09\x09interpret; \x0a\x09\x09next",
messageSends: ["interpret", "next"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
category: 'interpreting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._step();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._node())._isSteppingNode();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{},smalltalk.Interpreter)})},
args: [],
source: "stepOver\x0a\x09self step.\x0a\x09\x0a\x09[ self node isSteppingNode ] whileFalse: [ \x0a\x09\x09self step ]",
messageSends: ["step", "whileFalse:", "isSteppingNode", "node"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shouldReturn();
if(! smalltalk.assert($1)){
smalltalk.Interpreter.superclass.fn.prototype._visit_.apply(_st(self), [aNode]);
};
return self}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visit: aNode\x0a\x09self shouldReturn ifFalse: [ super visit: aNode ]",
messageSends: ["ifFalse:", "shouldReturn", "visit:"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var poppedValue;
return smalltalk.withContext(function($ctx1) { 
poppedValue=self._pop();
self._pop();
self._push_(poppedValue);
self._assign_to_(_st(aNode)._left(),poppedValue);
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,poppedValue:poppedValue},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| poppedValue |\x0a\x09\x0a\x09poppedValue := self pop.\x0a\x09\x0a\x09\x22Pop the left side of the assignment.\x0a\x09It already has been visited, and we don't need its value.\x22\x0a\x09self pop.\x0a\x09\x0a\x09self push: poppedValue.\x0a\x09self assign: aNode left to: poppedValue",
messageSends: ["pop", "push:", "assign:to:", "left"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,block:block},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Do not evaluate the block node.\x0a\x09Instead, put all instructions into a block that we push to the stack for later evaluation\x22\x0a\x09\x0a\x09| block |\x0a\x09\x0a\x09block := AIBlockClosure forContext: self context node: aNode.\x0a\x09\x0a\x09self push: block",
messageSends: ["forContext:node:", "context", "push:"],
referencedClasses: ["AIBlockClosure"]
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(_st($Smalltalk())._current())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($PlatformInterface())._globals())._at_(_st(aNode)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self push: (Smalltalk current \x0a\x09\x09at: aNode value \x0a\x09\x09ifAbsent: [ PlatformInterface globals at: aNode value ])",
messageSends: ["push:", "at:ifAbsent:", "current", "value", "at:", "globals"],
referencedClasses: ["Smalltalk", "PlatformInterface"]
}),
smalltalk.Interpreter);

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
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09\x0a\x09array := #().\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09array addFirst: self pop ].\x0a\x09\x0a\x09self push: array",
messageSends: ["do:", "nodes", "addFirst:", "pop", "push:"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var hashedCollection;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
hashedCollection=_st($HashedCollection())._new();
_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(hashedCollection)._add_(self._pop());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._push_(hashedCollection);
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,hashedCollection:hashedCollection},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| hashedCollection |\x0a\x09\x0a\x09hashedCollection := HashedCollection new.\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09hashedCollection add: self pop ].\x0a\x09\x0a\x09self push: hashedCollection",
messageSends: ["new", "do:", "nodes", "add:", "pop", "push:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._returnValue_(self._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09self returnValue: (self eval: aNode source)",
messageSends: ["returnValue:", "eval:", "source"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09\x22Do nothing by default. Especially, do not visit children recursively.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._returnValue_(self._pop());
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09self returnValue: self pop",
messageSends: ["returnValue:", "pop"],
referencedClasses: []
}),
smalltalk.Interpreter);

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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
receiver=self._pop();
message=self._messageFromSendNode_arguments_(aNode,_st(args)._reversed());
result=self._sendMessage_to_superSend_(message,receiver,_st(aNode)._superSend());
_st(self._context())._pc_(_st(_st(self._context())._pc()).__plus((1)));
$1=_st(_st(aNode)._isCascadeSendNode())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aNode)._isLastChild())._not();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(smalltalk.assert($1)){
self._push_(receiver);
} else {
self._push_(result);
};
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| receiver args message result |\x0a\x09\x0a\x09args := aNode arguments collect: [ :each | self pop ].\x0a\x09receiver := self pop.\x0a\x09\x0a\x09message := self\x0a\x09\x09messageFromSendNode: aNode\x0a\x09\x09arguments: args reversed.\x0a\x09\x0a\x09result := self sendMessage: message to: receiver superSend: aNode superSend.\x0a\x09\x0a\x09self context pc: self context pc + 1.\x0a\x09\x0a\x09\x22For cascade sends, push the reciever if the send is not the last one\x22\x0a\x09(aNode isCascadeSendNode and: [ aNode isLastChild not ])\x0a\x09\x09ifTrue: [ self push: receiver ]\x0a\x09\x09ifFalse: [ self push: result ]",
messageSends: ["collect:", "arguments", "pop", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "pc:", "context", "+", "pc", "ifTrue:ifFalse:", "and:", "isCascadeSendNode", "not", "isLastChild", "push:"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._push_(_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self push: aNode value",
messageSends: ["push:", "value"],
referencedClasses: []
}),
smalltalk.Interpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$7,$8,$5;
var $early={};
try {
$1=_st(_st(aNode)._binding())._isUnknownVar();
$2=(function(){
return smalltalk.withContext(function($ctx2) {
$3=self._push_(_st(_st($PlatformInterface())._globals())._at_ifAbsent_(_st(aNode)._value(),(function(){
return smalltalk.withContext(function($ctx3) {
return self._error_("Unknown variable");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})));
throw $early=[$3];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
_st($1)._ifTrue_($2);
$4=self;
$6=_st(_st(aNode)._binding())._isInstanceVar();
$7=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._context())._receiver())._instVarAt_(_st(aNode)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
$8=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._context())._localAt_(_st(aNode)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})});
$5=_st($6)._ifTrue_ifFalse_($7,$8);
_st($4)._push_($5);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},smalltalk.Interpreter)})},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09aNode binding isUnknownVar ifTrue: [\x0a\x09\x09^ self push: (PlatformInterface globals at: aNode value ifAbsent: [ self error: 'Unknown variable' ]) ].\x0a\x09\x09\x0a\x09self push: (aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value ])",
messageSends: ["ifTrue:", "isUnknownVar", "binding", "push:", "at:ifAbsent:", "globals", "value", "error:", "ifTrue:ifFalse:", "isInstanceVar", "instVarAt:", "receiver", "context", "localAt:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.Interpreter);


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

})(global_smalltalk,global_nil,global__st);
