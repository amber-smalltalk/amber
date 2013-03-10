smalltalk.addPackage('Compiler-Tests');
smalltalk.addClass('AbstractASTInterpreterTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
category: 'interpreting',
fn: function (aNode,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
$1=aNode;
return $1;
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},smalltalk.AbstractASTInterpreterTest)})},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
category: 'interpreting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._interpret_withArguments_(aString,_st((smalltalk.Dictionary || Dictionary))._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:",{aString:aString},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString"],
source: "interpret: aString\x0a\x09^ self\x0a\x09\x09interpret: aString\x0a\x09\x09withArguments: Dictionary new",
messageSends: ["interpret:withArguments:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
"_interpret_receiver_withArguments_",
smalltalk.method({
selector: "interpret:receiver:withArguments:",
category: 'interpreting',
fn: function (aString,anObject,aDictionary){
var self=this;
var ctx;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
ctx=_st((smalltalk.AIContext || AIContext))._new();
_st(ctx)._receiver_(anObject);
_st(aDictionary)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(ctx)._localAt_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$2=_st(self)._interpreter();
_st($2)._context_(ctx);
_st($2)._interpret_(_st(_st(_st(self)._parse_forClass_(aString,_st(anObject)._class()))._nodes())._first());
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
"_interpret_withArguments_",
smalltalk.method({
selector: "interpret:withArguments:",
category: 'interpreting',
fn: function (aString,aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._interpret_receiver_withArguments_(aString,_st((smalltalk.Object || Object))._new(),aDictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpret:withArguments:",{aString:aString,aDictionary:aDictionary},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString", "aDictionary"],
source: "interpret: aString withArguments: aDictionary\x0a\x09^ self\x0a\x09\x09interpret: aString\x0a\x09\x09receiver: Object new\x0a\x09\x09withArguments: aDictionary",
messageSends: ["interpret:receiver:withArguments:", "new"],
referencedClasses: ["Object"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
"_interpreter",
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.AbstractASTInterpreterTest)})},
args: [],
source: "interpreter\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'parsing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractASTInterpreterTest);

smalltalk.addMethod(
"_parse_forClass_",
smalltalk.method({
selector: "parse:forClass:",
category: 'parsing',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._analyze_forClass_(_st(self)._parse_(aString),aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},smalltalk.AbstractASTInterpreterTest)})},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.AbstractASTInterpreterTest);



smalltalk.addClass('ASTInterpreterTest', smalltalk.AbstractASTInterpreterTest, [], 'Compiler-Tests');
smalltalk.addMethod(
"_interpreter",
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.ASTInterpreter || ASTInterpreter))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "interpreter\x0a\x09^ ASTInterpreter new",
messageSends: ["new"],
referencedClasses: ["ASTInterpreter"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBinarySend",
smalltalk.method({
selector: "testBinarySend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self}, function($ctx1) {$ctx1.fill(self,"testBinarySend",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testBinarySend\x0a\x09self assert: (self interpret: 'foo 2+3+4') equals: 9",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]"),(1));
_st(self)._assert_equals_(_st(self)._interpret_("foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testBlockLiteral",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testBlockLiteral\x0a\x09self assert: (self interpret: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a\x09self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]') equals: 1.\x0a\x09self assert: (self interpret: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 2",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testCascade",
smalltalk.method({
selector: "testCascade",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ OrderedCollection new add: 2; add: 3; yourself"),_st((smalltalk.OrderedCollection || OrderedCollection))._with_with_((2),(3)));
return self}, function($ctx1) {$ctx1.fill(self,"testCascade",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testCascade\x0a\x09self assert: (self interpret: 'foo ^ OrderedCollection new add: 2; add: 3; yourself') equals: (OrderedCollection with: 2 with: 3)",
messageSends: ["assert:equals:", "interpret:", "with:with:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testDynamicArray",
smalltalk.method({
selector: "testDynamicArray",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ {1+1. 2+2}"),[(2), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArray",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testDynamicArray\x0a\x09self assert: (self interpret: 'foo ^ {1+1. 2+2}') equals: #(2 4)",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testDynamicDictionary",
smalltalk.method({
selector: "testDynamicDictionary",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo ^ #{1->1. 2->3}"),smalltalk.HashedCollection._fromPairs_([_st((1)).__minus_gt((1)),_st((2)).__minus_gt((3))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionary",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testDynamicDictionary\x0a\x09self assert: (self interpret: 'foo ^ #{1->1. 2->3}') equals: #{1->1. 2->3}",
messageSends: ["assert:equals:", "interpret:", "->"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testInlinedJSStatement",
smalltalk.method({
selector: "testInlinedJSStatement",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo <return 2+3>"),(5));
_st(self)._assert_equals_(_st(self)._interpret_withArguments_("foo: anInteger <return 2 + anInteger>",smalltalk.HashedCollection._fromPairs_([_st("anInteger").__minus_gt((3))])),(5));
return self}, function($ctx1) {$ctx1.fill(self,"testInlinedJSStatement",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInlinedJSStatement\x0a\x09self assert: (self interpret: 'foo <return 2+3>') equals: 5.\x0a\x09\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo: anInteger <return 2 + anInteger>'\x0a\x09\x09\x09withArguments: #{ 'anInteger' -> 3})\x0a\x09\x09equals: 5",
messageSends: ["assert:equals:", "interpret:", "interpret:withArguments:", "->"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testInstVarAccess",
smalltalk.method({
selector: "testInstVarAccess",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_receiver_withArguments_("foo ^ x",_st((2)).__at((3)),smalltalk.HashedCollection._fromPairs_([])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAccess",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInstVarAccess\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo ^ x'\x0a\x09\x09\x09receiver: 2@3\x0a\x09\x09\x09withArguments: #{})\x0a\x09\x09equals: 2",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testInstVarAssignment",
smalltalk.method({
selector: "testInstVarAssignment",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_receiver_withArguments_("foo: anInteger x := anInteger. ^ x",_st((smalltalk.Point || Point))._new(),smalltalk.HashedCollection._fromPairs_([_st("anInteger").__minus_gt((2))])),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVarAssignment",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testInstVarAssignment\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo: anInteger x := anInteger. ^ x'\x0a\x09\x09\x09receiver: Point new\x0a\x09\x09\x09withArguments: #{'anInteger' -> 2})\x0a\x09\x09equals: 2",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "new", "->"],
referencedClasses: ["Point"]
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testNonlocalReturn",
smalltalk.method({
selector: "testNonlocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo true ifTrue: [ ^ 1 ]. ^2"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testNonlocalReturn",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testNonlocalReturn\x0a\x09self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ]. ^2') equals: 1",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testReceiver",
smalltalk.method({
selector: "testReceiver",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_receiver_withArguments_("foo ^ self",_st((2)).__at((3)),smalltalk.HashedCollection._fromPairs_([])),_st((2)).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testReceiver",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testReceiver\x0a\x09self\x0a\x09\x09assert: (self\x0a\x09\x09\x09interpret: 'foo ^ self'\x0a\x09\x09\x09receiver: 2@3\x0a\x09\x09\x09withArguments: #{})\x0a\x09\x09equals: 2@3",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:", "@"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);

smalltalk.addMethod(
"_testTempAssignment",
smalltalk.method({
selector: "testTempAssignment",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._interpret_("foo | a | a := 2. ^ a"),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTempAssignment",{},smalltalk.ASTInterpreterTest)})},
args: [],
source: "testTempAssignment\x0a\x09self assert: (self interpret: 'foo | a | a := 2. ^ a') equals: 2",
messageSends: ["assert:equals:", "interpret:"],
referencedClasses: []
}),
smalltalk.ASTInterpreterTest);



smalltalk.addClass('ASTSteppingInterpreterTest', smalltalk.AbstractASTInterpreterTest, ['interpreter'], 'Compiler-Tests');
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
self["@interpreter"]=_st((smalltalk.ASTSteppingInterpreter || ASTSteppingInterpreter))._new();
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
"_testAtEnd",
smalltalk.method({
selector: "testAtEnd",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_("foo 1 + 2");
_st(self)._deny_(_st(_st(self)._interpreter())._atEnd());
_st(_st(self)._interpreter())._step();
_st(self)._deny_(_st(_st(self)._interpreter())._atEnd());
_st(_st(self)._interpreter())._step();
_st(self)._deny_(_st(_st(self)._interpreter())._atEnd());
_st(_st(self)._interpreter())._step();
_st(self)._deny_(_st(_st(self)._interpreter())._atEnd());
_st(_st(self)._interpreter())._step();
_st(self)._assert_(_st(_st(self)._interpreter())._atEnd());
return self}, function($ctx1) {$ctx1.fill(self,"testAtEnd",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testAtEnd\x0a\x09self interpret: 'foo 1 + 2'.\x0a\x09self deny: self interpreter atEnd.\x0a\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self deny: self interpreter atEnd.\x0a\x09\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter atEnd",
messageSends: ["interpret:", "deny:", "atEnd", "interpreter", "step", "assert:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_("foo 1 + 2");
_st(_st(self)._interpreter())._step();
_st(_st(self)._interpreter())._step();
_st(_st(self)._interpreter())._step();
_st(self)._assert_equals_(_st(_st(_st(self)._interpreter())._currentNode())._value(),(1));
_st(_st(self)._interpreter())._step();
_st(self)._assert_equals_(_st(_st(_st(self)._interpreter())._currentNode())._value(),(2));
_st(_st(self)._interpreter())._step();
_st(self)._assert_equals_(_st(_st(self)._interpreter())._result(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testMessageSend\x0a\x09self interpret: 'foo 1 + 2'.\x0a\x09\x0a\x09\x22SequenceNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09\x22SendNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter currentNode value equals: 1.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter currentNode value equals: 2.\x0a\x09\x0a\x09\x22Result\x22\x0a\x09self interpreter step.\x0a\x09self assert: self interpreter result equals: 3",
messageSends: ["interpret:", "step", "interpreter", "assert:equals:", "value", "currentNode", "result"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);

smalltalk.addMethod(
"_testSimpleStepping",
smalltalk.method({
selector: "testSimpleStepping",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._interpret_("foo 1");
_st(_st(self)._interpreter())._step();
_st(self)._assert_(_st(_st(_st(self)._interpreter())._result())._isNil());
_st(_st(self)._interpreter())._step();
_st(self)._assert_equals_(_st(_st(self)._interpreter())._result(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleStepping",{},smalltalk.ASTSteppingInterpreterTest)})},
args: [],
source: "testSimpleStepping\x0a\x09self interpret: 'foo 1'.\x0a\x09\x0a\x09\x22SequenceNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09self assert: self interpreter result isNil.\x0a\x09\x0a\x09\x22ValueNode\x22\x0a\x09self interpreter step.\x0a\x09\x0a\x09self assert: self interpreter result equals: 1",
messageSends: ["interpret:", "step", "interpreter", "assert:", "isNil", "result", "assert:equals:"],
referencedClasses: []
}),
smalltalk.ASTSteppingInterpreterTest);



smalltalk.addClass('CodeGeneratorTest', smalltalk.TestCase, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.CodeGenerator || CodeGenerator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
messageSends: [],
referencedClasses: ["CodeGenerator"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_compiler",
smalltalk.method({
selector: "compiler",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Compiler || Compiler))._new();
_st($2)._codeGeneratorClass_(_st(self)._codeGeneratorClass());
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
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=_st(_st(self)._targetClass())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "setUp\x0a\x09receiver := self targetClass new",
messageSends: ["new", "targetClass"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_should_return_",
smalltalk.method({
selector: "should:return:",
category: 'testing',
fn: function (aString,anObject){
var self=this;
var method,result;
return smalltalk.withContext(function($ctx1) { method=_st(_st(self)._compiler())._install_forClass_category_(aString,_st(self)._targetClass(),"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(_st(self)._targetClass())._removeCompiledMethod_(method);
_st(self)._assert_equals_(anObject,result);
return self}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject,method:method,result:result},smalltalk.CodeGeneratorTest)})},
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09| method result |\x0a\x0a\x09method := self compiler install: aString forClass: self targetClass category: 'tests'.\x0a\x09result := receiver perform: method selector.\x0a\x09self targetClass removeCompiledMethod: method.\x0a\x09self assert: anObject equals: result",
messageSends: ["install:forClass:category:", "targetClass", "compiler", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_targetClass",
smalltalk.method({
selector: "targetClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.DoIt || DoIt);
return $1;
}, function($ctx1) {$ctx1.fill(self,"targetClass",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "targetClass\x0a\x09^ DoIt",
messageSends: [],
referencedClasses: ["DoIt"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "tearDown\x0a\x09\x22receiver := nil\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
_st(self)._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
_st(self)._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self}, function($ctx1) {$ctx1.fill(self,"testAssignment",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testAssignment\x0a\x09self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.\x0a\x09self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.\x0a\x0a\x09self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testBlockReturn",
smalltalk.method({
selector: "testBlockReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
_st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
_st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testBlockReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testBlockReturn\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testCascades",
smalltalk.method({
selector: "testCascades",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testCascades",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testCascades\x0a\x09\x0a\x09self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testDynamicArrayElementsOrdered",
smalltalk.method({
selector: "testDynamicArrayElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicArrayElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a' return: #(1 2).",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testDynamicDictionaryElementsOrdered",
smalltalk.method({
selector: "testDynamicDictionaryElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'->1.\x0a\x09^ #{ x. (true ifTrue: [ x := 'bar'->2 ]) }\x0a",smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt((1)),_st("bar").__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicDictionaryElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := ''foo''->1.\x0a\x09^ #{ x. (true ifTrue: [ x := ''bar''->2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testInnerTemporalDependentElementsOrdered",
smalltalk.method({
selector: "testInnerTemporalDependentElementsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",[_st("foo").__minus_gt((smalltalk.Array || Array)),_st("bar").__minus_gt((2))]);
_st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",[_st("foo").__minus_gt((1)),_st("bar").__minus_gt((2))]);
_st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",[_st("foo").__minus_gt((1)),_st("bar").__minus_gt((2))]);
_st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt((1)),_st("bar").__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testInnerTemporalDependentElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: ["Array"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLiterals",
smalltalk.method({
selector: "testLiterals",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1",(1));
_st(self)._should_return_("foo ^ 'hello'","hello");
_st(self)._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
_st(self)._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
_st(self)._should_return_("foo ^ true",true);
_st(self)._should_return_("foo ^ false",false);
_st(self)._should_return_("foo ^ #{1->2. 3->4}",smalltalk.HashedCollection._fromPairs_([_st((1)).__minus_gt((2)),_st((3)).__minus_gt((4))]));
_st(self)._should_return_("foo ^ #hello",smalltalk.symbolFor("hello"));
_st(self)._should_return_("foo ^ -123.456",(-123.456));
return self}, function($ctx1) {$ctx1.fill(self,"testLiterals",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ -123.456' return: -123.456",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLocalReturn",
smalltalk.method({
selector: "testLocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1",(1));
_st(self)._should_return_("foo ^ 1 + 1",(2));
_st(self)._should_return_("foo ",self["@receiver"]);
_st(self)._should_return_("foo self asString",self["@receiver"]);
_st(self)._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self}, function($ctx1) {$ctx1.fill(self,"testLocalReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testLocalReturn\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ' return: receiver.\x0a\x09self should: 'foo self asString' return: receiver.\x0a\x09self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testMessageSends",
smalltalk.method({
selector: "testMessageSends",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1 asString","1");
_st(self)._should_return_("foo ^ 1 + 1",(2));
_st(self)._should_return_("foo ^ 1 + 2 * 3",(9));
_st(self)._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
_st(self)._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSends",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testMessageSends\x0a\x09self should: 'foo ^ 1 asString' return: '1'.\x0a\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ^ 1 + 2 * 3' return: 9.\x0a\x0a\x09self should: 'foo ^ 1 to: 3' return: #(1 2 3).\x0a\x09self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNestedIfTrue",
smalltalk.method({
selector: "testNestedIfTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
_st(self)._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
_st(self)._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
_st(self)._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testNestedIfTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testNestedIfTrue\x0a\x09self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.\x0a\x0a\x09self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.\x0a\x09self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo [ ^ 1 ] value",(1));
_st(self)._should_return_("foo [ ^ 1 + 1 ] value",(2));
_st(self)._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
_st(self)._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testNonLocalReturn\x0a\x09self should: 'foo [ ^ 1 ] value' return: 1.\x0a\x09self should: 'foo [ ^ 1 + 1 ] value' return: 2.\x0a\x09self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.\x0a\x09self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testSendReceiverAndArgumentsOrdered",
smalltalk.method({
selector: "testSendReceiverAndArgumentsOrdered",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)]);
_st(self)._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a",[(smalltalk.Array || Array),(2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testSendReceiverAndArgumentsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testSendReceiverAndArgumentsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a' return: {Array. 2}.",
messageSends: ["should:return:"],
referencedClasses: ["Array"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalse",
smalltalk.method({
selector: "testifFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo true ifFalse: [ ^ 1 ]",self["@receiver"]);
_st(self)._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
_st(self)._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
_st(self)._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalse",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifFalse\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalseIfTrue",
smalltalk.method({
selector: "testifFalseIfTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
_st(self)._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
_st(self)._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
_st(self)._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifFalseIfTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifFalseIfTrue\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNil",
smalltalk.method({
selector: "testifNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
_st(self)._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
_st(self)._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
_st(self)._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNilIfNotNil",
smalltalk.method({
selector: "testifNilIfNotNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
_st(self)._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
_st(self)._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
_st(self)._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifNilIfNotNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNilIfNotNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNotNil",
smalltalk.method({
selector: "testifNotNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
_st(self)._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
_st(self)._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
_st(self)._should_return_("foo nil ifNotNil: [ ^ 2 ]",self["@receiver"]);
return self}, function($ctx1) {$ctx1.fill(self,"testifNotNil",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifNotNil\x0a\x09self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.\x0a\x0a\x09self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrue",
smalltalk.method({
selector: "testifTrue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo false ifTrue: [ ^ 1 ]",self["@receiver"]);
_st(self)._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
_st(self)._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
_st(self)._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrue",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifTrue\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrueIfFalse",
smalltalk.method({
selector: "testifTrueIfFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
_st(self)._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
_st(self)._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
_st(self)._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self}, function($ctx1) {$ctx1.fill(self,"testifTrueIfFalse",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testifTrueIfFalse\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.\x0a\x09self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);



smalltalk.addClass('InliningCodeGeneratorTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
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
"_testClassRefVar",
smalltalk.method({
selector: "testClassRefVar",
category: 'tests',
fn: function (){
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.ClassReferenceNode || ClassReferenceNode))._new();
_st($1)._value_("Object");
$2=_st($1)._yourself();
node=$2;
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._new())._visit_(node);
_st(self)._assert_(_st(_st(node)._binding())._isClassRefVar());
return self}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node},smalltalk.ScopeVarTest)})},
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := ClassReferenceNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new visit: node.\x0a\x09self assert: node binding isClassRefVar",
messageSends: ["value:", "new", "yourself", "visit:", "assert:", "isClassRefVar", "binding"],
referencedClasses: ["ClassReferenceNode", "SemanticAnalyzer"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testInstanceVar",
smalltalk.method({
selector: "testInstanceVar",
category: 'tests',
fn: function (){
var self=this;
var node,scope;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new();
_st(scope)._addIVar_("bzzz");
_st(self)._assert_(_st(_st(scope)._bindingFor_(node))._isInstanceVar());
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVar",{node:node,scope:scope},smalltalk.ScopeVarTest)})},
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testPseudoVar",
smalltalk.method({
selector: "testPseudoVar",
category: 'tests',
fn: function (){
var self=this;
var node,pseudoVars;
return smalltalk.withContext(function($ctx1) { var $1,$2;
pseudoVars=["self", "super", "true", "false", "nil"];
_st(pseudoVars)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_(each);
$2=_st($1)._yourself();
node=$2;
node;
return _st(self)._assert_(_st(_st(_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new())._bindingFor_(node))._isPseudoVar());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testPseudoVar",{node:node,pseudoVars:pseudoVars},smalltalk.ScopeVarTest)})},
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]",
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testTempVar",
smalltalk.method({
selector: "testTempVar",
category: 'tests',
fn: function (){
var self=this;
var node,scope;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new();
_st(scope)._addTemp_("bzzz");
_st(self)._assert_(_st(_st(scope)._bindingFor_(node))._isTempVar());
return self}, function($ctx1) {$ctx1.fill(self,"testTempVar",{node:node,scope:scope},smalltalk.ScopeVarTest)})},
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testUnknownVar",
smalltalk.method({
selector: "testUnknownVar",
category: 'tests',
fn: function (){
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
_st(self)._assert_(_st(_st(_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new())._bindingFor_(node))._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVar",{node:node},smalltalk.ScopeVarTest)})},
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@analyzer"]=_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_((smalltalk.Object || Object));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
messageSends: ["on:"],
referencedClasses: ["Object", "SemanticAnalyzer"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo self := 1";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.InvalidAssignmentError || InvalidAssignmentError));
return self}, function($ctx1) {$ctx1.fill(self,"testAssignment",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self := 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. ^ a";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ [ ^ a] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope",
smalltalk.method({
selector: "testScope",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope2",
smalltalk.method({
selector: "testScope2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope()).__eq_eq(_st(ast)._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testScope2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScopeLevel",
smalltalk.method({
selector: "testScopeLevel",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_equals_(_st(_st(ast)._scope())._scopeLevel(),(1));
_st(self)._assert_equals_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope())._scopeLevel(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testScopeLevel",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel equals: 1.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel equals: 3",
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariables",
smalltalk.method({
selector: "testUnknownVariables",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | b + a";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.UnknownVariableError || UnknownVariableError));
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVariables",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := smalltalk parse: src.\x0a\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesWithScope",
smalltalk.method({
selector: "testUnknownVariablesWithScope",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.UnknownVariableError || UnknownVariableError));
return self}, function($ctx1) {$ctx1.fill(self,"testUnknownVariablesWithScope",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing",
smalltalk.method({
selector: "testVariableShadowing",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1";
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
"_testVariableShadowing2",
smalltalk.method({
selector: "testVariableShadowing2",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ | a | a := 2 ]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.ShadowingVariableError || ShadowingVariableError));
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing2",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing3",
smalltalk.method({
selector: "testVariableShadowing3",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ | b | b := 2 ]";
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
"_testVariableShadowing4",
smalltalk.method({
selector: "testVariableShadowing4",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
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
"_testVariableShadowing5",
smalltalk.method({
selector: "testVariableShadowing5",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@analyzer"])._visit_(ast);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.ShadowingVariableError || ShadowingVariableError));
return self}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing5",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariablesLookup",
smalltalk.method({
selector: "testVariablesLookup",
category: 'tests',
fn: function (){
var self=this;
var src,ast;
return smalltalk.withContext(function($ctx1) { src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._isTempVar());
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._scope()).__eq_eq(_st(ast)._scope()));
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._isTempVar());
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._scope()).__eq_eq(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()));
return self}, function($ctx1) {$ctx1.fill(self,"testVariablesLookup",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);



