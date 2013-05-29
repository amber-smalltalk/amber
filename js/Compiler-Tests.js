smalltalk.addPackage('Compiler-Tests');
smalltalk.addClass('ASTVisitorTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
category: 'convenience',
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
$1=aNode;
return $1;
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},smalltalk.ASTVisitorTest)})},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.ASTVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'parsing',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ASTVisitorTest)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:forClass:",
category: 'parsing',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._analyze_forClass_(self._parse_(aString),aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},smalltalk.ASTVisitorTest)})},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.ASTVisitorTest);



smalltalk.addClass('ASTPCNodeVisitorTest', smalltalk.ASTVisitorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitor",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._astPCNodeVisitorForPC_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitor",{},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "astPCNodeVisitor\x0a\x09^ self astPCNodeVisitorForPC: 0",
messageSends: ["astPCNodeVisitorForPC:"],
referencedClasses: []
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitorForPC:",
category: 'factory',
fn: function (anInteger){
var self=this;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($ASTPCNodeVisitor())._new();
_st($2)._pc_((0));
$3=_st($AIContext())._new();
_st($3)._pc_(anInteger);
$4=_st($3)._yourself();
_st($2)._context_($4);
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitorForPC:",{anInteger:anInteger},smalltalk.ASTPCNodeVisitorTest)})},
args: ["anInteger"],
source: "astPCNodeVisitorForPC: anInteger\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09pc: 0;\x0a\x09\x09context: (AIContext new \x0a\x09\x09\x09pc: anInteger; \x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
messageSends: ["pc:", "new", "context:", "yourself"],
referencedClasses: ["ASTPCNodeVisitor", "AIContext"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJSStatementNode",
category: 'tests',
fn: function (){
var self=this;
var ast,visitor;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._parse_forClass_("foo <consolee.log(1)>",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isJSStatementNode());
return self}, function($ctx1) {$ctx1.fill(self,"testJSStatementNode",{ast:ast,visitor:visitor},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testJSStatementNode\x0a\x09| ast visitor |\x0a\x09\x0a\x09ast := self parse: 'foo <consolee.log(1)>' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isJSStatementNode",
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._parse_forClass_("foo self asString yourself. ^ self asBoolean",$Object());
$1=self._astPCNodeVisitorForPC_((2));
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForPC: 2)\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForPC:", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSendWithInlining",
category: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
$1=self._astPCNodeVisitorForPC_((2));
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
$3=self._astPCNodeVisitorForPC_((3));
_st($3)._visit_(ast);
$4=_st($3)._currentNode();
self._assert_equals_(_st($4)._selector(),"asBoolean");
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithInlining",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testMessageSendWithInlining\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForPC: 2)\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'.\x0a\x09\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForPC: 3)\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'asBoolean'",
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForPC:", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNoMessageSend",
category: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._parse_forClass_("foo ^ self",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testNoMessageSend",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testNoMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo ^ self' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isNil",
messageSends: ["parse:forClass:", "assert:", "isNil", "visit:", "astPCNodeVisitor", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPC",
category: 'tests',
fn: function (){
var self=this;
var ast,visitor;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._parse_forClass_("foo <console.log(1)>",$Object());
$1=self._astPCNodeVisitor();
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_(_st($2)._isJSStatementNode());
return self}, function($ctx1) {$ctx1.fill(self,"testPC",{ast:ast,visitor:visitor},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testPC\x0a\x09| ast visitor |\x0a\x09\x0a\x09ast := self parse: 'foo <console.log(1)>' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isJSStatementNode",
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);



smalltalk.addClass('AbstractASTInterpreterTest', smalltalk.ASTVisitorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
category: 'interpreting',
fn: function (aString){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._interpret_withArguments_(aString,_st($Dictionary())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:",{aString:aString},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString"],
source: "interpret: aString\x0a\x09^ self\x0a\x09\x09interpret: aString\x0a\x09\x09withArguments: Dictionary new",
messageSends: ["interpret:withArguments:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:receiver:withArguments:",
category: 'interpreting',
fn: function (aString,anObject,aDictionary){
var self=this;
var ctx;
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
ctx=_st($AIContext())._new();
_st(ctx)._receiver_(anObject);
_st(aDictionary)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(ctx)._localAt_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$2=self._interpreter();
_st($2)._context_(ctx);
_st($2)._interpret_(_st(_st(self._parse_forClass_(aString,_st(anObject)._class()))._nodes())._first());
$3=_st($2)._result();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:receiver:withArguments:",{aString:aString,anObject:anObject,aDictionary:aDictionary,ctx:ctx},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString", "anObject", "aDictionary"],
source: "interpret: aString receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx |\x0a\x09\x0a\x09ctx := AIContext new.\x0a\x09ctx receiver: anObject.\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09ctx localAt: key put: value ].\x0a\x09\x0a\x09^ self interpreter\x0a\x09\x09context: ctx;\x0a\x09\x09interpret: (self parse: aString forClass: anObject class)\x0a\x09\x09\x09nodes first;\x0a\x09\x09result",
messageSends: ["new", "receiver:", "keysAndValuesDo:", "localAt:put:", "context:", "interpreter", "interpret:", "first", "nodes", "parse:forClass:", "class", "result"],
referencedClasses: ["AIContext"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:withArguments:",
category: 'interpreting',
fn: function (aString,aDictionary){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._interpret_receiver_withArguments_(aString,_st($Object())._new(),aDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:withArguments:",{aString:aString,aDictionary:aDictionary},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString", "aDictionary"],
source: "interpret: aString withArguments: aDictionary\x0a\x09^ self\x0a\x09\x09interpret: aString\x0a\x09\x09receiver: Object new\x0a\x09\x09withArguments: aDictionary",
messageSends: ["interpret:receiver:withArguments:", "new"],
referencedClasses: ["Object"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.AbstractASTInterpreterTest)})},
args: [],
source: "interpreter\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractASTInterpreterTest);



smalltalk.addClass('ASTInterpreterTest', smalltalk.AbstractASTInterpreterTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
function $ASTInterpreter(){return smalltalk.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ASTInterpreter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "interpreter\x0a\x09^ ASTInterpreter new",
messageSends: ["new"],
referencedClasses: ["ASTInterpreter"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBinarySend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo 2+3+4"),(9));
return self}, function($ctx1) {$ctx1.fill(self,"testBinarySend",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testBinarySend\x0a\x09self assert: (self interpret: 'foo 2+3+4') equals: 9",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBlockLiteral",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
self._assert_equals_(self._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
self._assert_equals_(self._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testBlockLiteral",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testBlockLiteral\x0a\x09self assert: (self interpret: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a\x09self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a\x09self assert: (self interpret: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 2",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascade",
category: 'tests',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ OrderedCollection new add: 2; add: 3; yourself"),_st($OrderedCollection())._with_with_((2),(3)));
return self}, function($ctx1) {$ctx1.fill(self,"testCascade",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testCascade\x0a\x09self assert: (self interpret: 'foo ^ OrderedCollection new add: 2; add: 3; yourself') equals: (OrderedCollection with: 2 with: 3)",
messageSends: ["assert:equals:", "interpret:", "with:with:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicArray",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ {1+1. 2+2}"),[(2), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArray",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testDynamicArray\x0a\x09self assert: (self interpret: 'foo ^ {1+1. 2+2}') equals: #(2 4)",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionary",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ #{1->1. 2->3}"),smalltalk.HashedCollection._from_([(1).__minus_gt((1)),(2).__minus_gt((3))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionary",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testDynamicDictionary\x0a\x09self assert: (self interpret: 'foo ^ #{1->1. 2->3}') equals: #{1->1. 2->3}",
messageSends: ["assert:equals:", "interpret:", "->"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInlinedJSStatement",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo <return 2+3>"),(5));
self._assert_equals_(self._interpret_withArguments_("foo: anInteger <return 2 + anInteger>",smalltalk.HashedCollection._from_(["anInteger".__minus_gt((3))])),(5));
return self}, function($ctx1) {$ctx1.fill(self,"testInlinedJSStatement",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInlinedJSStatement\x0a\x09self assert: (self interpret: 'foo <return 2+3>') equals: 5.\x0a\x09\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo: anInteger <return 2 + anInteger>'\x0a\x09\x09\x09withArguments: #{ 'anInteger' -> 3})\x0a\x09\x09equals: 5",
messageSends: ["assert:equals:", "interpret:", "interpret:withArguments:", "->"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVarAccess",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ x",(2).__at((3)),smalltalk.HashedCollection._from_([])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAccess",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInstVarAccess\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo ^ x'\x0a\x09\x09\x09receiver: 2@3\x0a\x09\x09\x09withArguments: #{})\x0a\x09\x09equals: 2",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVarAssignment",
category: 'tests',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo: anInteger x := anInteger. ^ x",_st($Point())._new(),smalltalk.HashedCollection._from_(["anInteger".__minus_gt((2))])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAssignment",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInstVarAssignment\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo: anInteger x := anInteger. ^ x'\x0a\x09\x09\x09receiver: Point new\x0a\x09\x09\x09withArguments: #{'anInteger' -> 2})\x0a\x09\x09equals: 2",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "new", "->"],
referencedClasses: ["Point"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonlocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo true ifTrue: [ ^ 1 ]. ^2"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testNonlocalReturn",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testNonlocalReturn\x0a\x09self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ]. ^2') equals: 1",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReceiver",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ self",(2).__at((3)),smalltalk.HashedCollection._from_([])),(2).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testReceiver",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testReceiver\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo ^ self'\x0a\x09\x09\x09receiver: 2@3\x0a\x09\x09\x09withArguments: #{})\x0a\x09\x09equals: 2@3",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSuper",
category: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ super isBoolean",true,_st($Dictionary())._new()),false);
return self}, function($ctx1) {$ctx1.fill(self,"testSuper",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testSuper\x0a\x09self \x0a\x09\x09assert: (self \x0a\x09\x09\x09interpret: 'foo ^ super isBoolean' \x0a\x09\x09\x09receiver: true \x0a\x09\x09\x09withArguments: Dictionary new) \x0a\x09\x09equals: false",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempAssignment",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo | a | a := 2. ^ a"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTempAssignment",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testTempAssignment\x0a\x09self assert: (self interpret: 'foo | a | a := 2. ^ a') equals: 2",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testThisContext",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._interpret_("foo ^ thisContext"))._outerContext())._isNil());
self._assert_(_st(_st(self._interpret_("foo ^ [ thisContext ] value"))._outerContext())._notNil());
self._assert_(self._interpret_("foo ^ [ thisContext ] value outerContext == thisContext"));
return self}, function($ctx1) {$ctx1.fill(self,"testThisContext",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testThisContext\x0a\x09self assert: (self interpret: 'foo ^ thisContext') outerContext isNil.\x0a\x09self assert: (self interpret: 'foo ^ [ thisContext ] value') outerContext notNil.\x0a\x09self assert: (self interpret: 'foo ^ [ thisContext ] value outerContext == thisContext')",
messageSends: ["assert:", "isNil", "outerContext", "interpret:", "notNil"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);



smalltalk.addClass('ASTSteppingInterpreterTest', smalltalk.AbstractASTInterpreterTest, ['interpreter'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
function $ASTSteppingInterpreter(){return smalltalk.ASTSteppingInterpreter||(typeof ASTSteppingInterpreter=="undefined"?nil:ASTSteppingInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@interpreter"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@interpreter"]=_st($ASTSteppingInterpreter())._new();
$1=self["@interpreter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "interpreter\x0a\x09^ interpreter ifNil: [ interpreter := ASTSteppingInterpreter new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["ASTSteppingInterpreter"]
}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtEnd",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_("foo 1 + 2");
self._deny_(_st(self._interpreter())._atEnd());
_st(self._interpreter())._step();
self._deny_(_st(self._interpreter())._atEnd());
_st(self._interpreter())._step();
self._deny_(_st(self._interpreter())._atEnd());
_st(self._interpreter())._step();
self._deny_(_st(self._interpreter())._atEnd());
_st(self._interpreter())._step();
self._assert_(_st(self._interpreter())._atEnd());
return self}, function($ctx1) {$ctx1.fill(self,"testAtEnd",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testAtEnd\x0a\x09self interpret: 'foo 1 + 2'.\x0a\x09self deny: self interpreter atEnd.\x0a\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter atEnd",
messageSends: ["interpret:", "deny:", "atEnd", "interpreter", "step", "assert:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_("foo 1 + 2");
_st(self._interpreter())._step();
_st(self._interpreter())._step();
_st(self._interpreter())._step();
self._assert_equals_(_st(_st(self._interpreter())._currentNode())._value(),(1));
_st(self._interpreter())._step();
self._assert_equals_(_st(_st(self._interpreter())._currentNode())._value(),(2));
_st(self._interpreter())._step();
self._assert_equals_(_st(self._interpreter())._result(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testMessageSend\x0a\x09self interpret: 'foo 1 + 2'.\x0a\x09\x0a\x09\x22SequenceNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09\x22SendNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter currentNode value equals: 1.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter currentNode value equals: 2.\x0a\x09\x0a\x09\x22Result\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter result equals: 3",
messageSends: ["interpret:", "step", "interpreter", "assert:equals:", "value", "currentNode", "result"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSimpleStepping",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_("foo 1");
_st(self._interpreter())._step();
self._assert_(_st(_st(self._interpreter())._result())._isNil());
_st(self._interpreter())._step();
self._assert_equals_(_st(self._interpreter())._result(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleStepping",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testSimpleStepping\x0a\x09self interpret: 'foo 1'.\x0a\x09\x0a\x09\x22SequenceNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09self assert: self interpreter result isNil.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09self assert: self interpreter result equals: 1",
messageSends: ["interpret:", "step", "interpreter", "assert:", "isNil", "result", "assert:equals:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);



smalltalk.addClass('CodeGeneratorTest', smalltalk.TestCase, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
function $CodeGenerator(){return smalltalk.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CodeGenerator();
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
messageSends: [],
referencedClasses: ["CodeGenerator"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "compiler",
category: 'factory',
fn: function (){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Compiler())._new();
_st($2)._codeGeneratorClass_(self._codeGeneratorClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compiler",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
messageSends: ["codeGeneratorClass:", "codeGeneratorClass", "new", "yourself"],
referencedClasses: ["Compiler"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=_st(self._targetClass())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "setUp\x0a\x09receiver := self targetClass new",
messageSends: ["new", "targetClass"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
category: 'testing',
fn: function (aString,anObject){
var self=this;
var method,result;
return smalltalk.withContext(function($ctx1) { 
method=_st(self._compiler())._install_forClass_category_(aString,self._targetClass(),"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(self._targetClass())._removeCompiledMethod_(method);
self._assert_equals_(anObject,result);
return self}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject,method:method,result:result},smalltalk.CodeGeneratorTest)})},
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09| method result |\x0a\x0a\x09method := self compiler install: aString forClass: self targetClass category: 'tests'.\x0a\x09result := receiver perform: method selector.\x0a\x09self targetClass removeCompiledMethod: method.\x0a\x09self assert: anObject equals: result",
messageSends: ["install:forClass:category:", "targetClass", "compiler", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass",
category: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$DoIt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"targetClass",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "targetClass\x0a\x09^ DoIt",
messageSends: [],
referencedClasses: ["DoIt"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "tearDown\x0a\x09\x22receiver := nil\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
self._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self}, function($ctx1) {$ctx1.fill(self,"testAssignment",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testAssignment\x0a\x09self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.\x0a\x09self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.\x0a\x0a\x09self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBackslashSelectors",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("\x5c arg ^ 4",(4));
self._should_return_("\x5c\x5c arg ^ 42",(42));
return self}, function($ctx1) {$ctx1.fill(self,"testBackslashSelectors",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testBackslashSelectors\x0a\x09\x0a\x09self should: '\x5c arg ^ 4' return: 4.\x0a\x09self should: '\x5c\x5c arg ^ 42' return: 42",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBlockReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
self._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testBlockReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testBlockReturn\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascades",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testCascades",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testCascades\x0a\x09\x0a\x09self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicArrayElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicArrayElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a' return: #(1 2).",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaryElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'->1.\x0a\x09^ #{ x. (true ifTrue: [ x := 'bar'->2 ]) }\x0a",smalltalk.HashedCollection._from_(["foo".__minus_gt((1)),"bar".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicDictionaryElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := ''foo''->1.\x0a\x09^ #{ x. (true ifTrue: [ x := ''bar''->2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInnerTemporalDependentElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",["foo".__minus_gt($Array()),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",["foo".__minus_gt((1)),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",["foo".__minus_gt((1)),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",smalltalk.HashedCollection._from_(["foo".__minus_gt((1)),"bar".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testInnerTemporalDependentElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: ["Array"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLiterals",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1",(1));
self._should_return_("foo ^ 'hello'","hello");
self._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
self._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
self._should_return_("foo ^ true",true);
self._should_return_("foo ^ false",false);
self._should_return_("foo ^ #{1->2. 3->4}",smalltalk.HashedCollection._from_([(1).__minus_gt((2)),(3).__minus_gt((4))]));
self._should_return_("foo ^ #hello","hello");
self._should_return_("foo ^ -123.456",(-123.456));
return self}, function($ctx1) {$ctx1.fill(self,"testLiterals",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ -123.456' return: -123.456",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1",(1));
self._should_return_("foo ^ 1 + 1",(2));
self._should_return_("foo ",self["@receiver"]);
self._should_return_("foo self asString",self["@receiver"]);
self._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self}, function($ctx1) {$ctx1.fill(self,"testLocalReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testLocalReturn\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ' return: receiver.\x0a\x09self should: 'foo self asString' return: receiver.\x0a\x09self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSends",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 asString","1");
self._should_return_("foo ^ 1 + 1",(2));
self._should_return_("foo ^ 1 + 2 * 3",(9));
self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
self._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSends",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testMessageSends\x0a\x09self should: 'foo ^ 1 asString' return: '1'.\x0a\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ^ 1 + 2 * 3' return: 9.\x0a\x0a\x09self should: 'foo ^ 1 to: 3' return: #(1 2 3).\x0a\x09self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMutableLiterals",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ #( 1 2 ) at: 1 put: 3; yourself",[(3), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testMutableLiterals",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testMutableLiterals\x0a\x09\x22Mutable literals must be aliased in cascades.\x0a\x09See https://github.com/amber-smalltalk/amber/issues/428\x22\x0a\x09\x0a\x09self \x0a\x09\x09should: 'foo ^ #( 1 2 ) at: 1 put: 3; yourself' \x0a\x09\x09return: #(3 2)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNestedIfTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
self._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testNestedIfTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testNestedIfTrue\x0a\x09self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.\x0a\x0a\x09self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.\x0a\x09self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo [ ^ 1 ] value",(1));
self._should_return_("foo [ ^ 1 + 1 ] value",(2));
self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
self._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testNonLocalReturn\x0a\x09self should: 'foo [ ^ 1 ] value' return: 1.\x0a\x09self should: 'foo [ ^ 1 + 1 ] value' return: 2.\x0a\x09self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.\x0a\x09self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPascalCaseGlobal",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^Object",_st(smalltalk)._at_("Object"));
self._should_return_("foo ^NonExistent",nil);
return self}, function($ctx1) {$ctx1.fill(self,"testPascalCaseGlobal",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testPascalCaseGlobal\x0a\x09self should: 'foo ^Object' return: (smalltalk at: 'Object').\x0a\x09self should: 'foo ^NonExistent' return: nil",
messageSends: ["should:return:", "at:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSendReceiverAndArgumentsOrdered",
category: 'tests',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a",[$Array(),(2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testSendReceiverAndArgumentsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testSendReceiverAndArgumentsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a' return: {Array. 2}.",
messageSends: ["should:return:"],
referencedClasses: ["Array"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo true ifFalse: [ ^ 1 ]",self["@receiver"]);
self._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
self._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
self._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalse",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifFalse\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalseIfTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
self._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalseIfTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifFalseIfTrue\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
self._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
self._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
self._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNilIfNotNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
self._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNilIfNotNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNilIfNotNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
self._should_return_("foo nil ifNotNil: [ ^ 2 ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testifNotNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNotNil\x0a\x09self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.\x0a\x0a\x09self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNilWithArgument",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ]",(3));
self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ]",nil);
self._should_return_("foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(3));
self._should_return_("foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(5));
self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(3));
self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(5));
return self}, function($ctx1) {$ctx1.fill(self,"testifNotNilWithArgument",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNotNilWithArgument\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ]' return: nil.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 5.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 5",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo false ifTrue: [ ^ 1 ]",self["@receiver"]);
self._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
self._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
self._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifTrue\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrueIfFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
self._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrueIfFalse",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifTrueIfFalse\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.\x0a\x09self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);



smalltalk.addClass('InliningCodeGeneratorTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
function $InliningCodeGenerator(){return smalltalk.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$InliningCodeGenerator();
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.InliningCodeGeneratorTest)})},
args: [],
source: "codeGeneratorClass\x0a\x09^ InliningCodeGenerator",
messageSends: [],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.InliningCodeGeneratorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testClassRefVar",
category: 'tests',
fn: function (){
var self=this;
var node;
function $ClassReferenceNode(){return smalltalk.ClassReferenceNode||(typeof ClassReferenceNode=="undefined"?nil:ClassReferenceNode)}
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ClassReferenceNode())._new();
_st($1)._value_("Object");
$2=_st($1)._yourself();
node=$2;
_st(_st($SemanticAnalyzer())._new())._visit_(node);
self._assert_(_st(_st(node)._binding())._isClassRefVar());
return self}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node},smalltalk.ScopeVarTest)})},
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := ClassReferenceNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new visit: node.\x0a\x09self assert: node binding isClassRefVar",
messageSends: ["value:", "new", "yourself", "visit:", "assert:", "isClassRefVar", "binding"],
referencedClasses: ["ClassReferenceNode", "SemanticAnalyzer"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVar",
category: 'tests',
fn: function (){
var self=this;
var node,scope;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($VariableNode())._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st($MethodLexicalScope())._new();
_st(scope)._addIVar_("bzzz");
self._assert_(_st(_st(scope)._bindingFor_(node))._isInstanceVar());
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVar",{node:node,scope:scope},smalltalk.ScopeVarTest)})},
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPseudoVar",
category: 'tests',
fn: function (){
var self=this;
var node,pseudoVars;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
pseudoVars=["self", "super", "true", "false", "nil"];
_st(pseudoVars)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st($VariableNode())._new();
_st($1)._value_(each);
$2=_st($1)._yourself();
node=$2;
node;
return self._assert_(_st(_st(_st($MethodLexicalScope())._new())._bindingFor_(node))._isPseudoVar());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testPseudoVar",{node:node,pseudoVars:pseudoVars},smalltalk.ScopeVarTest)})},
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]",
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempVar",
category: 'tests',
fn: function (){
var self=this;
var node,scope;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($VariableNode())._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st($MethodLexicalScope())._new();
_st(scope)._addTemp_("bzzz");
self._assert_(_st(_st(scope)._bindingFor_(node))._isTempVar());
return self}, function($ctx1) {$ctx1.fill(self,"testTempVar",{node:node,scope:scope},smalltalk.ScopeVarTest)})},
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVar",
category: 'tests',
fn: function (){
var self=this;
var node;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($VariableNode())._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
self._assert_(_st(_st(_st($MethodLexicalScope())._new())._bindingFor_(node))._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVar",{node:node},smalltalk.ScopeVarTest)})},
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
self["@analyzer"]=_st($SemanticAnalyzer())._on_($Object());
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
messageSends: ["on:"],
referencedClasses: ["Object", "SemanticAnalyzer"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
function $InvalidAssignmentError(){return smalltalk.InvalidAssignmentError||(typeof InvalidAssignmentError=="undefined"?nil:InvalidAssignmentError)}
return smalltalk.withContext(function($ctx1) { 
src="foo self := 1";
ast=_st(smalltalk)._parse_(src);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$InvalidAssignmentError());
return self}, function($ctx1) {$ctx1.fill(self,"testAssignment",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self := 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. ^ a";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ ^ a] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._assert_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScopeLevel",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._assert_equals_(_st(_st(ast)._scope())._scopeLevel(),(1));
self._assert_equals_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope())._scopeLevel(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testScopeLevel",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel equals: 1.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel equals: 3",
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariables",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
function $UnknownVariableError(){return smalltalk.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
return smalltalk.withContext(function($ctx1) { 
src="foo | a | b + a";
ast=_st(smalltalk)._parse_(src);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$UnknownVariableError());
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVariables",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := smalltalk parse: src.\x0a\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariablesWithScope",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
function $UnknownVariableError(){return smalltalk.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
return smalltalk.withContext(function($ctx1) { 
src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
ast=_st(smalltalk)._parse_(src);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$UnknownVariableError());
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVariablesWithScope",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
function $ShadowingVariableError(){return smalltalk.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | a | a := 2 ]";
ast=_st(smalltalk)._parse_(src);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$ShadowingVariableError());
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing3",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | b | b := 2 ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing3",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing3\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | b | b := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing4",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing4",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing4\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing5",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
function $ShadowingVariableError(){return smalltalk.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$ShadowingVariableError());
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing5",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariablesLookup",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._assert_(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._isTempVar());
self._assert_(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._scope()).__eq_eq(_st(ast)._scope()));
self._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._isTempVar());
self._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._scope()).__eq_eq(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testVariablesLookup",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);



