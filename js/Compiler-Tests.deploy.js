smalltalk.addPackage('Compiler-Tests');
smalltalk.addClass('ASTVisitorTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
$1=aNode;
return $1;
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},smalltalk.ASTVisitorTest)})},
messageSends: ["visit:", "on:"]}),
smalltalk.ASTVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ASTVisitorTest)})},
messageSends: ["parse:", "current"]}),
smalltalk.ASTVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:forClass:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._analyze_forClass_(self._parse_(aString),aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},smalltalk.ASTVisitorTest)})},
messageSends: ["analyze:forClass:", "parse:"]}),
smalltalk.ASTVisitorTest);



smalltalk.addClass('ASTPCNodeVisitorTest', smalltalk.ASTVisitorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._astPCNodeVisitorForPC_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitor",{},smalltalk.ASTPCNodeVisitorTest)})},
messageSends: ["astPCNodeVisitorForPC:"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitorForPC:",
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
messageSends: ["pc:", "new", "context:", "yourself"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJSStatementNode",
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
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
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
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForPC:", "currentNode"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSendWithInlining",
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
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForPC:", "currentNode"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNoMessageSend",
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
messageSends: ["parse:forClass:", "assert:", "isNil", "visit:", "astPCNodeVisitor", "currentNode"]}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPC",
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
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"]}),
smalltalk.ASTPCNodeVisitorTest);



smalltalk.addClass('AbstractASTInterpreterTest', smalltalk.ASTVisitorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpret:",
fn: function (aString){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._interpret_withArguments_(aString,_st($Dictionary())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:",{aString:aString},smalltalk.AbstractASTInterpreterTest)})},
messageSends: ["interpret:withArguments:", "new"]}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:receiver:withArguments:",
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
messageSends: ["new", "receiver:", "keysAndValuesDo:", "localAt:put:", "context:", "interpreter", "interpret:", "first", "nodes", "parse:forClass:", "class", "result"]}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:withArguments:",
fn: function (aString,aDictionary){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._interpret_receiver_withArguments_(aString,_st($Object())._new(),aDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:withArguments:",{aString:aString,aDictionary:aDictionary},smalltalk.AbstractASTInterpreterTest)})},
messageSends: ["interpret:receiver:withArguments:", "new"]}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.AbstractASTInterpreterTest)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AbstractASTInterpreterTest);



smalltalk.addClass('ASTInterpreterTest', smalltalk.AbstractASTInterpreterTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
function $ASTInterpreter(){return smalltalk.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ASTInterpreter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["new"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBinarySend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo 2+3+4"),(9));
return self}, function($ctx1) {$ctx1.fill(self,"testBinarySend",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBlockLiteral",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
self._assert_equals_(self._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
self._assert_equals_(self._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testBlockLiteral",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascade",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ OrderedCollection new add: 2; add: 3; yourself"),_st($OrderedCollection())._with_with_((2),(3)));
return self}, function($ctx1) {$ctx1.fill(self,"testCascade",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:", "with:with:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ {1+1. 2+2}"),[(2), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArray",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo ^ #{1->1. 2->3}"),smalltalk.HashedCollection._from_([(1).__minus_gt((1)),(2).__minus_gt((3))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionary",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:", "->"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInlinedJSStatement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo <return 2+3>"),(5));
self._assert_equals_(self._interpret_withArguments_("foo: anInteger <return 2 + anInteger>",smalltalk.HashedCollection._from_(["anInteger".__minus_gt((3))])),(5));
return self}, function($ctx1) {$ctx1.fill(self,"testInlinedJSStatement",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:", "interpret:withArguments:", "->"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVarAccess",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ x",(2).__at((3)),smalltalk.HashedCollection._from_([])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAccess",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVarAssignment",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo: anInteger x := anInteger. ^ x",_st($Point())._new(),smalltalk.HashedCollection._from_(["anInteger".__minus_gt((2))])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAssignment",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "new", "->"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonlocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo true ifTrue: [ ^ 1 ]. ^2"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testNonlocalReturn",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReceiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ self",(2).__at((3)),smalltalk.HashedCollection._from_([])),(2).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testReceiver",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSuper",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_receiver_withArguments_("foo ^ super isBoolean",true,_st($Dictionary())._new()),false);
return self}, function($ctx1) {$ctx1.fill(self,"testSuper",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "new"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._interpret_("foo | a | a := 2. ^ a"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTempAssignment",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:equals:", "interpret:"]}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testThisContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._interpret_("foo ^ thisContext"))._outerContext())._isNil());
self._assert_(_st(_st(self._interpret_("foo ^ [ thisContext ] value"))._outerContext())._notNil());
self._assert_(self._interpret_("foo ^ [ thisContext ] value outerContext == thisContext"));
return self}, function($ctx1) {$ctx1.fill(self,"testThisContext",{},smalltalk.ASTInterpreterTest)})},
messageSends: ["assert:", "isNil", "outerContext", "interpret:", "notNil"]}),
smalltalk.ASTInterpreterTest);



smalltalk.addClass('ASTSteppingInterpreterTest', smalltalk.AbstractASTInterpreterTest, ['interpreter'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtEnd",
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
messageSends: ["interpret:", "deny:", "atEnd", "interpreter", "step", "assert:"]}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
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
messageSends: ["interpret:", "step", "interpreter", "assert:equals:", "value", "currentNode", "result"]}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSimpleStepping",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._interpret_("foo 1");
_st(self._interpreter())._step();
self._assert_(_st(_st(self._interpreter())._result())._isNil());
_st(self._interpreter())._step();
self._assert_equals_(_st(self._interpreter())._result(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleStepping",{},smalltalk.ASTSteppingInterpreterTest)})},
messageSends: ["interpret:", "step", "interpreter", "assert:", "isNil", "result", "assert:equals:"]}),
smalltalk.ASTSteppingInterpreterTest);



smalltalk.addClass('CodeGeneratorTest', smalltalk.TestCase, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
function $CodeGenerator(){return smalltalk.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CodeGenerator();
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.CodeGeneratorTest)})},
messageSends: []}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "compiler",
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
messageSends: ["codeGeneratorClass:", "codeGeneratorClass", "new", "yourself"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=_st(self._targetClass())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["new", "targetClass"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
fn: function (aString,anObject){
var self=this;
var method,result;
return smalltalk.withContext(function($ctx1) { 
method=_st(self._compiler())._install_forClass_category_(aString,self._targetClass(),"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(self._targetClass())._removeCompiledMethod_(method);
self._assert_equals_(anObject,result);
return self}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject,method:method,result:result},smalltalk.CodeGeneratorTest)})},
messageSends: ["install:forClass:category:", "targetClass", "compiler", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass",
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$DoIt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"targetClass",{},smalltalk.CodeGeneratorTest)})},
messageSends: []}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.CodeGeneratorTest)})},
messageSends: []}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
self._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self}, function($ctx1) {$ctx1.fill(self,"testAssignment",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBackslashSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("\x5c arg ^ 4",(4));
self._should_return_("\x5c\x5c arg ^ 42",(42));
return self}, function($ctx1) {$ctx1.fill(self,"testBackslashSelectors",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBlockReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
self._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testBlockReturn",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCascades",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testCascades",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicArrayElementsOrdered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaryElementsOrdered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'->1.\x0a\x09^ #{ x. (true ifTrue: [ x := 'bar'->2 ]) }\x0a",smalltalk.HashedCollection._from_(["foo".__minus_gt((1)),"bar".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:", "->"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInnerTemporalDependentElementsOrdered",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",["foo".__minus_gt($Array()),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",["foo".__minus_gt((1)),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",["foo".__minus_gt((1)),"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",smalltalk.HashedCollection._from_(["foo".__minus_gt((1)),"bar".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:", "->"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLiterals",
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
messageSends: ["should:return:", "->"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1",(1));
self._should_return_("foo ^ 1 + 1",(2));
self._should_return_("foo ",self["@receiver"]);
self._should_return_("foo self asString",self["@receiver"]);
self._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self}, function($ctx1) {$ctx1.fill(self,"testLocalReturn",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 asString","1");
self._should_return_("foo ^ 1 + 1",(2));
self._should_return_("foo ^ 1 + 2 * 3",(9));
self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
self._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSends",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMutableLiterals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ #( 1 2 ) at: 1 put: 3; yourself",[(3), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testMutableLiterals",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNestedIfTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
self._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testNestedIfTrue",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo [ ^ 1 ] value",(1));
self._should_return_("foo [ ^ 1 + 1 ] value",(2));
self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
self._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPascalCaseGlobal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^Object",_st(smalltalk)._at_("Object"));
self._should_return_("foo ^NonExistent",nil);
return self}, function($ctx1) {$ctx1.fill(self,"testPascalCaseGlobal",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:", "at:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSendReceiverAndArgumentsOrdered",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a",[$Array(),(2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testSendReceiverAndArgumentsOrdered",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo true ifFalse: [ ^ 1 ]",self["@receiver"]);
self._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
self._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
self._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalse",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifFalseIfTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
self._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalseIfTrue",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
self._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
self._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
self._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNil",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNilIfNotNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
self._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNilIfNotNil",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
self._should_return_("foo nil ifNotNil: [ ^ 2 ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testifNotNil",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifNotNilWithArgument",
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
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo false ifTrue: [ ^ 1 ]",self["@receiver"]);
self._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
self._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
self._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrue",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testifTrueIfFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
self._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrueIfFalse",{},smalltalk.CodeGeneratorTest)})},
messageSends: ["should:return:"]}),
smalltalk.CodeGeneratorTest);



smalltalk.addClass('InliningCodeGeneratorTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
function $InliningCodeGenerator(){return smalltalk.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$InliningCodeGenerator();
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.InliningCodeGeneratorTest)})},
messageSends: []}),
smalltalk.InliningCodeGeneratorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testClassRefVar",
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
messageSends: ["value:", "new", "yourself", "visit:", "assert:", "isClassRefVar", "binding"]}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVar",
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
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"]}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPseudoVar",
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
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"]}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempVar",
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
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"]}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVar",
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
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"]}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
self["@analyzer"]=_st($SemanticAnalyzer())._on_($Object());
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["on:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssignment",
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
messageSends: ["parse:", "should:raise:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. ^ a";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonLocalReturn2",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ ^ a] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._assert_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScope2",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
self._deny_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testScopeLevel",
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
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "nodes", "last"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariables",
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
messageSends: ["parse:", "should:raise:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnknownVariablesWithScope",
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
messageSends: ["parse:", "should:raise:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing2",
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
messageSends: ["parse:", "should:raise:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing3",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ | b | b := 2 ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing3",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing4",
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { 
src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing4",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
messageSends: ["parse:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariableShadowing5",
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
messageSends: ["parse:", "should:raise:", "visit:"]}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVariablesLookup",
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
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"]}),
smalltalk.SemanticAnalyzerTest);



