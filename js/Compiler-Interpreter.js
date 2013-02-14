smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
category: 'accessing',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._pc_(_st(aMethodContext)._pc());
_st(self)._receiver_(_st(aMethodContext)._receiver());
_st(self)._selector_(_st(aMethodContext)._selector());
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
source: "initializeFromMethodContext: aMethodContext\x0a\x09self pc: aMethodContext pc.\x0a    self receiver: aMethodContext receiver.\x0a    self selector: aMethodContext selector.\x0a    aMethodContext outerContext ifNotNil: [\x0a\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a    aMethodContext locals keysAndValuesDo: [ :key :value |\x0a    \x09self locals at: key put: value ]\x0a    ",
messageSends: ["pc:", "pc", "receiver:", "receiver", "selector:", "selector", "ifNotNil:", "outerContext:", "fromMethodContext:", "outerContext", "class", "keysAndValuesDo:", "at:put:", "locals"],
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
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.AIContext)})},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.AIContext)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AIContext)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString}, smalltalk.AIContext)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
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
source: "fromMethodContext: aMethodContext\x0a\x09^ self new \x0a    \x09initializeFromMethodContext: aMethodContext;\x0a        yourself",
messageSends: ["initializeFromMethodContext:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn', 'currentValue'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_assign_to_",
smalltalk.method({
selector: "assign:to:",
category: 'interpreting',
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
"_continue_",
smalltalk.method({
selector: "continue:",
category: 'interpreting',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@currentValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"continue:",{anObject:anObject}, smalltalk.ASTInterpreter)})},
args: ["anObject"],
source: "continue: anObject\x0a\x09currentValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_currentValue",
smalltalk.method({
selector: "currentValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@currentValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentValue",{}, smalltalk.ASTInterpreter)})},
args: [],
source: "currentValue\x0a\x09^ currentValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'interpreting',
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
return smalltalk.withContext(function($ctx1) { smalltalk.NodeVisitor.fn.prototype._initialize.apply(_st(self), []);
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
return smalltalk.withContext(function($ctx2) {self["@currentValue"]=value;
return self["@currentValue"];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "interpret: aNode\x0a\x09shouldReturn := false.\x0a    self interpret: aNode continue: [ :value |\x0a    \x09currentValue := value ]",
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
_st(self)._visit_(aNode);
} else {
self["@currentValue"]=aNode;
self["@currentValue"];
};
_st(aBlock)._value_(_st(self)._currentValue());
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x0a\x09shouldReturn ifTrue: [ ^ self ].\x0a\x0a\x09aNode isNode \x0a    \x09ifTrue: [ self visit: aNode ]\x0a        ifFalse: [ currentValue := aNode ].\x0a\x09aBlock value: self currentValue",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "visit:", "isNode", "value:", "currentValue"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_",
smalltalk.method({
selector: "interpretAll:continue:",
category: 'interpreting',
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
category: 'interpreting',
fn: function (nodes,aBlock,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(nodes)._isEmpty();
if(smalltalk.assert($1)){
_st(aBlock)._value_(aCollection);
} else {
_st(self)._interpret_continue_(_st(nodes)._first(),(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._interpretAll_continue_result_(_st(nodes)._allButFirst(),aBlock,_st(aCollection).__comma([value]));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:result:",{nodes:nodes,aBlock:aBlock,aCollection:aCollection}, smalltalk.ASTInterpreter)})},
args: ["nodes", "aBlock", "aCollection"],
source: "interpretAll: nodes continue: aBlock result: aCollection\x0a\x09nodes isEmpty \x0a    \x09ifTrue: [ aBlock value: aCollection ]\x0a    \x09ifFalse: [\x0a    \x09\x09self interpret: nodes first continue: [:value |\x0a    \x09\x09\x09self \x0a                \x09interpretAll: nodes allButFirst \x0a                    continue: aBlock\x0a  \x09\x09\x09\x09\x09result: aCollection, { value } ] ]",
messageSends: ["ifTrue:ifFalse:", "value:", "interpret:continue:", "first", "interpretAll:continue:result:", "allButFirst", ",", "isEmpty"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_do_",
smalltalk.method({
selector: "messageFromSendNode:do:",
category: 'interpreting',
fn: function (aSendNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._interpretAll_continue_(_st(aSendNode)._arguments(),(function(args){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.Message || Message))._new();
_st($1)._selector_(_st(aSendNode)._selector());
_st($1)._arguments_(args);
$2=_st($1)._yourself();
return _st(aBlock)._value_($2);
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:do:",{aSendNode:aSendNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})},
args: ["aSendNode", "aBlock"],
source: "messageFromSendNode: aSendNode do: aBlock\x0a\x09self interpretAll: aSendNode arguments continue: [ :args |\x0a    \x09aBlock value: (Message new\x0a    \x09\x09selector: aSendNode selector;\x0a        \x09arguments: args;\x0a        \x09yourself) ]",
messageSends: ["interpretAll:continue:", "arguments", "value:", "selector:", "selector", "new", "arguments:", "yourself"],
referencedClasses: ["Message"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._right(),(function(value){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_(_st(self)._assign_to_(_st(aNode)._left(),value));
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09self interpret: aNode right continue: [ :value |\x0a    \x09self continue: (self assign: aNode left to: value) ]",
messageSends: ["interpret:continue:", "right", "continue:", "assign:to:", "left"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._continue_((function(){
return smalltalk.withContext(function($ctx2) {$1=self;
_st($1)._interpret_(_st(_st(aNode)._nodes())._first());
$2=_st($1)._currentValue();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22TODO: Context should be set\x22\x0a    self continue: [ self interpret: aNode nodes first; currentValue ]",
messageSends: ["continue:", "interpret:", "first", "nodes", "currentValue"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {_st(_st(aNode)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._receiver_(receiver);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._interpretAll_continue_(_st(_st(aNode)._nodes())._allButLast(),(function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._interpret_continue_(_st(_st(aNode)._nodes())._last(),(function(val){
return smalltalk.withContext(function($ctx4) {return _st(self)._continue_(val);
}, function($ctx4) {$ctx4.fillBlock({val:val},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a\x09\x0a    self interpret: aNode receiver continue: [ :receiver |\x0a\x09\x09\x22Only interpret the receiver once\x22\x0a        aNode nodes do: [ :each | each receiver: receiver ].\x0a  \x0a    \x09self \x0a        \x09interpretAll: aNode nodes allButLast\x0a    \x09\x09continue: [\x0a              \x09self \x0a                \x09interpret: aNode nodes last\x0a                \x09continue: [ :val | self continue: val ] ] ]",
messageSends: ["interpret:continue:", "receiver", "do:", "receiver:", "nodes", "interpretAll:continue:", "allButLast", "last", "continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aNode)._value()));
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self continue: (Smalltalk current at: aNode value)",
messageSends: ["continue:", "at:", "value", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_(array);
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a    \x09self continue: array ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
var hashedCollection;
return smalltalk.withContext(function($ctx2) {hashedCollection=_st((smalltalk.HashedCollection || HashedCollection))._new();
hashedCollection;
_st(array)._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(hashedCollection)._add_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._continue_(hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({array:array,hashedCollection:hashedCollection},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09\x0a    self interpretAll: aNode nodes continue: [ :array | | hashedCollection |\x0a    \x09hashedCollection := HashedCollection new.\x0a        array do: [ :each | hashedCollection add: each ].\x0a        self continue: hashedCollection ]",
messageSends: ["interpretAll:continue:", "nodes", "new", "do:", "add:", "continue:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shouldReturn"]=true;
_st(self)._continue_(_st(self)._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09shouldReturn := true.\x0a\x09self continue: (self eval: aNode source)",
messageSends: ["continue:", "eval:", "source"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(_st(aNode)._nodes())._first(),(function(value){
return smalltalk.withContext(function($ctx2) {self["@shouldReturn"]=true;
self["@shouldReturn"];
return _st(self)._continue_(value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a    self interpret: aNode nodes first continue: [ :value |\x0a    \x09shouldReturn := true.\x0a\x09\x09self continue: value ]",
messageSends: ["interpret:continue:", "first", "nodes", "continue:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_continue_(_st(aNode)._receiver(),(function(receiver){
return smalltalk.withContext(function($ctx2) {return _st(self)._messageFromSendNode_do_(aNode,(function(message){
return smalltalk.withContext(function($ctx3) {_st(_st(self)._context())._pc_(_st(_st(_st(self)._context())._pc()).__plus((1)));
return _st(self)._continue_(_st(message)._sendTo_(receiver));
}, function($ctx3) {$ctx3.fillBlock({message:message},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09\x22TODO: Handle super sends\x22\x0a    \x0a    self interpret: aNode receiver continue: [ :receiver |\x0a    \x09self messageFromSendNode: aNode do: [ :message |\x0a        \x09self context pc: self context pc + 1.\x0a        \x09self continue: (message sendTo: receiver) ] ]",
messageSends: ["interpret:continue:", "receiver", "messageFromSendNode:do:", "pc:", "+", "pc", "context", "continue:", "sendTo:"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpretAll_continue_(_st(aNode)._nodes(),(function(array){
return smalltalk.withContext(function($ctx2) {return _st(self)._continue_(_st(array)._last());
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09self interpretAll: aNode nodes continue: [ :array |\x0a    \x09self continue: array last ]",
messageSends: ["interpretAll:continue:", "nodes", "continue:", "last"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._continue_(_st(aNode)._value());
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self continue: aNode value",
messageSends: ["continue:", "value"],
referencedClasses: []
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTDebugger', smalltalk.ASTInterpreter, ['continuation'], 'Compiler-Interpreter');
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTDebugger)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    continuation := [  ]",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
category: 'interpreting',
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.ASTInterpreter.fn.prototype._interpret_continue_.apply(_st(self), [aNode,aBlock]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTDebugger)})},
args: ["aNode", "aBlock"],
source: "interpret: aNode continue: aBlock\x0a\x09continuation := [ super interpret: aNode continue: aBlock ]",
messageSends: ["interpret:continue:"],
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
return smalltalk.withContext(function($ctx1) { _st(self["@continuation"])._value();
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{}, smalltalk.ASTDebugger)})},
args: [],
source: "stepOver\x0a\x09continuation value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.ASTDebugger);



