define("amber_core/Compiler-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-Tests');
smalltalk.packages["Compiler-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ASTParsingTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
category: 'convenience',
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
return aNode;
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},smalltalk.ASTParsingTest)})},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.ASTParsingTest);

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
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ASTParsingTest)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ASTParsingTest);

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
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},smalltalk.ASTParsingTest)})},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.ASTParsingTest);



smalltalk.addClass('ASTPCNodeVisitorTest', smalltalk.ASTParsingTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitor",
category: 'factory',
fn: function (){
var self=this;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($ASTPCNodeVisitor())._new();
$ctx1.sendIdx["new"]=1;
$3=$2;
$4=_st(_st($AIContext())._new())._yourself();
$ctx1.sendIdx["yourself"]=1;
_st($3)._context_($4);
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitor",{},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "astPCNodeVisitor\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
messageSends: ["context:", "new", "yourself"],
referencedClasses: ["ASTPCNodeVisitor", "AIContext"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "astPCNodeVisitorForSelector:",
category: 'factory',
fn: function (aString){
var self=this;
function $ASTPCNodeVisitor(){return smalltalk.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($ASTPCNodeVisitor())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._selector_(aString);
$3=$2;
$4=_st(_st($AIContext())._new())._yourself();
$ctx1.sendIdx["yourself"]=1;
_st($3)._context_($4);
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitorForSelector:",{aString:aString},smalltalk.ASTPCNodeVisitorTest)})},
args: ["aString"],
source: "astPCNodeVisitorForSelector: aString\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09selector: aString;\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "context:", "yourself"],
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
$1=self._astPCNodeVisitorForSelector_("yourself");
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"],
referencedClasses: ["Object"]
}),
smalltalk.ASTPCNodeVisitorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSendWithBlocks",
category: 'tests',
fn: function (){
var self=this;
var ast;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ast=self._parse_forClass_("foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean",$Object());
$1=self._astPCNodeVisitorForSelector_("yourself");
_st($1)._visit_(ast);
$2=_st($1)._currentNode();
self._assert_equals_(_st($2)._selector(),"yourself");
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithBlocks",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testMessageSendWithBlocks\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"],
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
var $3,$4,$2,$1,$5,$6;
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
$ctx1.sendIdx["parse:forClass:"]=1;
$3=self._astPCNodeVisitorForSelector_("yourself");
$ctx1.sendIdx["astPCNodeVisitorForSelector:"]=1;
_st($3)._visit_(ast);
$ctx1.sendIdx["visit:"]=1;
$4=_st($3)._currentNode();
$ctx1.sendIdx["currentNode"]=1;
$2=$4;
$1=_st($2)._selector();
$ctx1.sendIdx["selector"]=1;
self._assert_equals_($1,"yourself");
$ctx1.sendIdx["assert:equals:"]=1;
ast=self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$Object());
$5=self._astPCNodeVisitorForSelector_("asBoolean");
_st($5)._visit_(ast);
$6=_st($5)._currentNode();
self._assert_equals_(_st($6)._selector(),"asBoolean");
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithInlining",{ast:ast},smalltalk.ASTPCNodeVisitorTest)})},
args: [],
source: "testMessageSendWithInlining\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'.\x0a\x09\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'asBoolean')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'asBoolean'",
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"],
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



smalltalk.addClass('CodeGeneratorTest', smalltalk.ASTParsingTest, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
function $CodeGenerator(){return smalltalk.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return smalltalk.withContext(function($ctx1) { 
return $CodeGenerator();
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
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"],
referencedClasses: ["Compiler"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=_st($DoIt())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "setUp\x0a\x09receiver := DoIt new",
messageSends: ["new"],
referencedClasses: ["DoIt"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:receiver:return:",
category: 'testing',
fn: function (aString,anObject,aResult){
var self=this;
var method,result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@receiver"]=anObject;
$1=self._compiler();
$2=_st(anObject)._class();
$ctx1.sendIdx["class"]=1;
method=_st($1)._install_forClass_category_(aString,$2,"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(_st(anObject)._class())._removeCompiledMethod_(method);
self._assert_equals_(aResult,result);
return self}, function($ctx1) {$ctx1.fill(self,"should:receiver:return:",{aString:aString,anObject:anObject,aResult:aResult,method:method,result:result},smalltalk.CodeGeneratorTest)})},
args: ["aString", "anObject", "aResult"],
source: "should: aString receiver: anObject return: aResult\x0a\x09| method result |\x0a\x0a\x09receiver := anObject.\x0a\x09method := self compiler install: aString forClass: anObject class category: 'tests'.\x0a\x09result := receiver perform: method selector.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09self assert: aResult equals: result",
messageSends: ["install:forClass:category:", "compiler", "class", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
category: 'testing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._should_receiver_return_(aString,self["@receiver"],anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject},smalltalk.CodeGeneratorTest)})},
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09^ self \x0a\x09\x09should: aString \x0a\x09\x09receiver: receiver \x0a\x09\x09return: anObject",
messageSends: ["should:receiver:return:"],
referencedClasses: []
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
$ctx1.sendIdx["should:return:"]=2;
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
$ctx1.sendIdx["should:return:"]=1;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
$ctx1.sendIdx["should:return:"]=2;
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
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a",[(1), (2)]);
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicArrayElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a' return: #(1 2).",
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
var $2,$1;
$2="foo".__minus_gt((1));
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'->1.\x0a\x09^ #{ x. (true ifTrue: [ x := 'bar'->2 ]) }\x0a",$1);
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testDynamicDictionaryElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := ''foo''->1.\x0a\x09^ #{ x. (true ifTrue: [ x := ''bar''->2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGlobalVar",
category: 'tests',
fn: function (){
var self=this;
function $BlockClosure(){return smalltalk.BlockClosure||(typeof BlockClosure=="undefined"?nil:BlockClosure)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ eval class",$BlockClosure());
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ Math cos: 0",(1));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ NonExistingVar",nil);
return self}, function($ctx1) {$ctx1.fill(self,"testGlobalVar",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testGlobalVar\x0a\x09self should: 'foo ^ eval class' return: BlockClosure.\x0a\x09self should: 'foo ^ Math cos: 0' return: 1.\x0a\x09self should: 'foo ^ NonExistingVar' return: nil",
messageSends: ["should:return:"],
referencedClasses: ["BlockClosure"]
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
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$13;
$2="foo".__minus_gt($Array());
$ctx1.sendIdx["->"]=1;
$3="bar".__minus_gt((2));
$ctx1.sendIdx["->"]=2;
$1=[$2,$3];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(x := 2)\x0a",$1);
$ctx1.sendIdx["should:return:"]=1;
$5="foo".__minus_gt($Array());
$ctx1.sendIdx["->"]=3;
$6="bar".__minus_gt((2));
$ctx1.sendIdx["->"]=4;
$4=[$5,$6];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$4);
$ctx1.sendIdx["should:return:"]=2;
$8="foo".__minus_gt((1));
$ctx1.sendIdx["->"]=5;
$9="bar".__minus_gt((2));
$ctx1.sendIdx["->"]=6;
$7=[$8,$9];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$7);
$ctx1.sendIdx["should:return:"]=3;
$11="foo".__minus_gt((1));
$ctx1.sendIdx["->"]=7;
$12="bar".__minus_gt((2));
$ctx1.sendIdx["->"]=8;
$10=[$11,$12];
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",$10);
$ctx1.sendIdx["should:return:"]=4;
$14="foo".__minus_gt((1));
$ctx1.sendIdx["->"]=9;
$13=smalltalk.HashedCollection._from_([$14,"bar".__minus_gt((2))]);
self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",$13);
return self}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testInnerTemporalDependentElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(x := 2)\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
messageSends: ["should:return:", "->"],
referencedClasses: ["Array"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJSStatement",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo <return 2+3>",(5));
return self}, function($ctx1) {$ctx1.fill(self,"testJSStatement",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testJSStatement\x0a\x09self should: 'foo <return 2+3>' return: 5",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLiterals",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._should_return_("foo ^ 1",(1));
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ 'hello'","hello");
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
$ctx1.sendIdx["should:return:"]=3;
self._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
$ctx1.sendIdx["should:return:"]=4;
self._should_return_("foo ^ true",true);
$ctx1.sendIdx["should:return:"]=5;
self._should_return_("foo ^ false",false);
$ctx1.sendIdx["should:return:"]=6;
$2=(1).__minus_gt((2));
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,(3).__minus_gt((4))]);
self._should_return_("foo ^ #{1->2. 3->4}",$1);
$ctx1.sendIdx["should:return:"]=7;
self._should_return_("foo ^ #hello","hello");
$ctx1.sendIdx["should:return:"]=8;
self._should_return_("foo ^ -123.456",(-123.456));
$ctx1.sendIdx["should:return:"]=9;
self._should_return_("foo ^ -2.5e4",(-25000));
return self}, function($ctx1) {$ctx1.fill(self,"testLiterals",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ -123.456' return: -123.456.\x0a\x09self should: 'foo ^ -2.5e4' return: -25000.",
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ 1 + 1",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ",self["@receiver"]);
$ctx1.sendIdx["should:return:"]=3;
self._should_return_("foo self asString",self["@receiver"]);
$ctx1.sendIdx["should:return:"]=4;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ 1 + 1",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ 1 + 2 * 3",(9));
$ctx1.sendIdx["should:return:"]=3;
self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
$ctx1.sendIdx["should:return:"]=4;
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
selector: "testMultipleSequences",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6",(30));
return self}, function($ctx1) {$ctx1.fill(self,"testMultipleSequences",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testMultipleSequences\x0a\x09self should: 'foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6' return: 30",
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
$ctx1.sendIdx["should:return:"]=3;
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
selector: "testNestedSends",
category: 'tests',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString",_st(_st($Point())._x_y_((2).__at((3)),(4)))._asString());
return self}, function($ctx1) {$ctx1.fill(self,"testNestedSends",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testNestedSends\x0a\x09self should: 'foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString' return: (Point x: (2@3) y: 4) asString",
messageSends: ["should:return:", "asString", "x:y:", "@"],
referencedClasses: ["Point"]
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo [ ^ 1 + 1 ] value",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
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
$ctx1.sendIdx["should:return:"]=1;
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
selector: "testSuperSend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_receiver_return_("foo ^ super isBoolean",true,false);
return self}, function($ctx1) {$ctx1.fill(self,"testSuperSend",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testSuperSend\x0a\x09self \x0a\x09\x09should: 'foo ^ super isBoolean' \x0a\x09\x09receiver: true\x0a\x09\x09return: false",
messageSends: ["should:receiver:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTempVariables",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo | a | ^ a",nil);
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo | AVariable | ^ AVariable",nil);
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo | a b c | ^ c",nil);
$ctx1.sendIdx["should:return:"]=3;
self._should_return_("foo | a | [ | d | ^ d ] value",nil);
$ctx1.sendIdx["should:return:"]=4;
self._should_return_("foo | a | a:= 1. ^ a",(1));
$ctx1.sendIdx["should:return:"]=5;
self._should_return_("foo | AVariable | AVariable := 1. ^ AVariable",(1));
return self}, function($ctx1) {$ctx1.fill(self,"testTempVariables",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testTempVariables\x0a\x09self should: 'foo | a | ^ a' return: nil.\x0a\x09self should: 'foo | AVariable | ^ AVariable' return: nil.\x0a\x09self should: 'foo | a b c | ^ c' return: nil.\x0a\x09self should: 'foo | a | [ | d | ^ d ] value' return: nil.\x0a\x09\x0a\x09self should: 'foo | a | a:= 1. ^ a' return: 1.\x0a\x09self should: 'foo | AVariable | AVariable := 1. ^ AVariable' return: 1.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testThisContext",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._should_return_("foo ^ [ thisContext ] value outerContext == thisContext",true);
return self}, function($ctx1) {$ctx1.fill(self,"testThisContext",{},smalltalk.CodeGeneratorTest)})},
args: [],
source: "testThisContext\x0a\x09self should: 'foo ^ [ thisContext ] value outerContext == thisContext' return: true",
messageSends: ["should:return:"],
referencedClasses: []
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ]",nil);
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(3));
$ctx1.sendIdx["should:return:"]=3;
self._should_return_("foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(5));
$ctx1.sendIdx["should:return:"]=4;
self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(3));
$ctx1.sendIdx["should:return:"]=5;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
$ctx1.sendIdx["should:return:"]=3;
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
$ctx1.sendIdx["should:return:"]=1;
self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
$ctx1.sendIdx["should:return:"]=2;
self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
$ctx1.sendIdx["should:return:"]=3;
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
return $InliningCodeGenerator();
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},smalltalk.InliningCodeGeneratorTest)})},
args: [],
source: "codeGeneratorClass\x0a\x09^ InliningCodeGenerator",
messageSends: [],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.InliningCodeGeneratorTest);



smalltalk.addClass('InterpreterTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "analyze:forClass:",
category: 'parsing',
fn: function (aNode,aClass){
var self=this;
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($SemanticAnalyzer())._on_(aClass))._visit_(aNode);
return aNode;
}, function($ctx1) {$ctx1.fill(self,"analyze:forClass:",{aNode:aNode,aClass:aClass},smalltalk.InterpreterTest)})},
args: ["aNode", "aClass"],
source: "analyze: aNode forClass: aClass\x0a\x09(SemanticAnalyzer on: aClass) visit: aNode.\x0a\x09^ aNode",
messageSends: ["visit:", "on:"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.InterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "interpret:receiver:withArguments:",
category: 'private',
fn: function (aString,anObject,aDictionary){
var self=this;
var ctx,interpreter;
function $ASTInterpreter(){return smalltalk.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
function $AIContext(){return smalltalk.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
interpreter=_st($ASTInterpreter())._new();
$ctx1.sendIdx["new"]=1;
$1=_st($AIContext())._new();
_st($1)._receiver_(anObject);
_st($1)._interpreter_(interpreter);
$2=_st($1)._yourself();
ctx=$2;
_st(aDictionary)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(ctx)._localAt_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$4=interpreter;
_st($4)._context_(ctx);
_st($4)._interpret_(_st(self._parse_forClass_(aString,_st(anObject)._class()))._nextChild());
_st($4)._proceed();
$5=_st($4)._result();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"interpret:receiver:withArguments:",{aString:aString,anObject:anObject,aDictionary:aDictionary,ctx:ctx,interpreter:interpreter},smalltalk.InterpreterTest)})},
args: ["aString", "anObject", "aDictionary"],
source: "interpret: aString receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx interpreter |\x0a\x09\x0a\x09interpreter := ASTInterpreter new.\x0a\x09\x0a\x09ctx := AIContext new\x0a\x09\x09receiver: anObject;\x0a\x09\x09interpreter: interpreter;\x0a\x09\x09yourself.\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09ctx localAt: key put: value ].\x0a\x09\x0a\x09^ interpreter\x0a\x09\x09context: ctx;\x0a\x09\x09interpret: (self parse: aString forClass: anObject class) nextChild;\x0a\x09\x09proceed;\x0a\x09\x09result",
messageSends: ["new", "receiver:", "interpreter:", "yourself", "keysAndValuesDo:", "localAt:put:", "context:", "interpret:", "nextChild", "parse:forClass:", "class", "proceed", "result"],
referencedClasses: ["ASTInterpreter", "AIContext"]
}),
smalltalk.InterpreterTest);

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
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.InterpreterTest)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.InterpreterTest);

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
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass},smalltalk.InterpreterTest)})},
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ self analyze: (self parse: aString) forClass: aClass",
messageSends: ["analyze:forClass:", "parse:"],
referencedClasses: []
}),
smalltalk.InterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:receiver:return:",
category: 'testing',
fn: function (aString,anObject,aResult){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@receiver"]=anObject;
$1=self._assert_equals_(self._interpret_receiver_withArguments_(aString,self["@receiver"],smalltalk.HashedCollection._from_([])),aResult);
return $1;
}, function($ctx1) {$ctx1.fill(self,"should:receiver:return:",{aString:aString,anObject:anObject,aResult:aResult},smalltalk.InterpreterTest)})},
args: ["aString", "anObject", "aResult"],
source: "should: aString receiver: anObject return: aResult\x0a\x09receiver := anObject.\x0a\x09\x0a\x09^ self \x0a\x09\x09assert: (self interpret: aString receiver: receiver withArguments: #{})\x0a\x09\x09equals: aResult",
messageSends: ["assert:equals:", "interpret:receiver:withArguments:"],
referencedClasses: []
}),
smalltalk.InterpreterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "should:return:",
category: 'testing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._should_receiver_return_(aString,self["@receiver"],anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject},smalltalk.InterpreterTest)})},
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09^ self \x0a\x09\x09should: aString\x0a\x09\x09receiver: receiver\x0a\x09\x09return: anObject",
messageSends: ["should:receiver:return:"],
referencedClasses: []
}),
smalltalk.InterpreterTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testClassRefVar",
category: 'tests',
fn: function (){
var self=this;
var node;
function $VariableNode(){return smalltalk.VariableNode||(typeof VariableNode=="undefined"?nil:VariableNode)}
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
function $MethodLexicalScope(){return smalltalk.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($VariableNode())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._value_("Object");
$2=_st($1)._yourself();
node=$2;
$3=_st($SemanticAnalyzer())._new();
$ctx1.sendIdx["new"]=2;
_st($3)._pushScope_(_st($MethodLexicalScope())._new());
$4=_st($3)._visit_(node);
self._assert_(_st(_st(node)._binding())._isClassRefVar());
return self}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node},smalltalk.ScopeVarTest)})},
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new \x0a\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09visit: node.\x0a\x09self assert: node binding isClassRefVar",
messageSends: ["value:", "new", "yourself", "pushScope:", "visit:", "assert:", "isClassRefVar", "binding"],
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope"]
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
$ctx1.sendIdx["new"]=1;
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
$ctx2.sendIdx["new"]=1;
_st($1)._value_(each);
$2=_st($1)._yourself();
node=$2;
node;
return self._assert_(_st(_st(_st($MethodLexicalScope())._new())._bindingFor_(node))._isPseudoVar());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
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
$ctx1.sendIdx["new"]=1;
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
$ctx1.sendIdx["new"]=1;
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
function $SemanticAnalyzer(){return smalltalk.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
self["@analyzer"]=_st($SemanticAnalyzer())._on_($Object());
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
messageSends: ["on:"],
referencedClasses: ["SemanticAnalyzer", "Object"]
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$InvalidAssignmentError());
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
var $4,$3,$2,$1;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$4=_st(_st(_st(ast)._nodes())._first())._nodes();
$ctx1.sendIdx["nodes"]=1;
$3=_st($4)._last();
$2=_st($3)._scope();
$ctx1.sendIdx["scope"]=1;
$1=_st($2).__eq_eq(_st(ast)._scope());
self._deny_($1);
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
var $8,$7,$6,$5,$4,$3,$2,$1;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$8=_st(_st(_st(ast)._nodes())._first())._nodes();
$ctx1.sendIdx["nodes"]=3;
$7=_st($8)._last();
$6=_st($7)._nodes();
$ctx1.sendIdx["nodes"]=2;
$5=_st($6)._first();
$ctx1.sendIdx["first"]=2;
$4=_st($5)._nodes();
$ctx1.sendIdx["nodes"]=1;
$3=_st($4)._first();
$ctx1.sendIdx["first"]=1;
$2=_st($3)._scope();
$ctx1.sendIdx["scope"]=1;
$1=_st($2).__eq_eq(_st(ast)._scope());
self._deny_($1);
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
var $2,$1,$10,$9,$8,$7,$6,$5,$4,$3;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$2=_st(ast)._scope();
$ctx1.sendIdx["scope"]=1;
$1=_st($2)._scopeLevel();
$ctx1.sendIdx["scopeLevel"]=1;
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$10=_st(_st(_st(ast)._nodes())._first())._nodes();
$ctx1.sendIdx["nodes"]=3;
$9=_st($10)._last();
$8=_st($9)._nodes();
$ctx1.sendIdx["nodes"]=2;
$7=_st($8)._first();
$ctx1.sendIdx["first"]=2;
$6=_st($7)._nodes();
$ctx1.sendIdx["nodes"]=1;
$5=_st($6)._first();
$ctx1.sendIdx["first"]=1;
$4=_st($5)._scope();
$3=_st($4)._scopeLevel();
self._assert_equals_($3,(3));
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$UnknownVariableError());
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$UnknownVariableError());
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$ShadowingVariableError());
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$ShadowingVariableError());
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
var $7,$6,$5,$4,$3,$2,$1,$15,$14,$13,$12,$11,$10,$9,$16,$8,$27,$26,$25,$24,$23,$22,$21,$20,$19,$18,$17,$39,$38,$37,$36,$35,$34,$33,$32,$31,$30,$29,$42,$41,$40,$28;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
$7=_st(ast)._nodes();
$ctx1.sendIdx["nodes"]=2;
$6=_st($7)._first();
$ctx1.sendIdx["first"]=2;
$5=_st($6)._nodes();
$ctx1.sendIdx["nodes"]=1;
$4=_st($5)._first();
$ctx1.sendIdx["first"]=1;
$3=_st($4)._receiver();
$ctx1.sendIdx["receiver"]=1;
$2=_st($3)._binding();
$ctx1.sendIdx["binding"]=1;
$1=_st($2)._isTempVar();
$ctx1.sendIdx["isTempVar"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$15=_st(ast)._nodes();
$ctx1.sendIdx["nodes"]=4;
$14=_st($15)._first();
$ctx1.sendIdx["first"]=4;
$13=_st($14)._nodes();
$ctx1.sendIdx["nodes"]=3;
$12=_st($13)._first();
$ctx1.sendIdx["first"]=3;
$11=_st($12)._receiver();
$10=_st($11)._binding();
$ctx1.sendIdx["binding"]=2;
$9=_st($10)._scope();
$ctx1.sendIdx["scope"]=1;
$16=_st(ast)._scope();
$ctx1.sendIdx["scope"]=2;
$8=_st($9).__eq_eq($16);
$ctx1.sendIdx["=="]=1;
self._assert_($8);
$ctx1.sendIdx["assert:"]=2;
$27=_st(ast)._nodes();
$ctx1.sendIdx["nodes"]=8;
$26=_st($27)._first();
$ctx1.sendIdx["first"]=7;
$25=_st($26)._nodes();
$ctx1.sendIdx["nodes"]=7;
$24=_st($25)._last();
$ctx1.sendIdx["last"]=1;
$23=_st($24)._nodes();
$ctx1.sendIdx["nodes"]=6;
$22=_st($23)._first();
$ctx1.sendIdx["first"]=6;
$21=_st($22)._nodes();
$ctx1.sendIdx["nodes"]=5;
$20=_st($21)._first();
$ctx1.sendIdx["first"]=5;
$19=_st($20)._left();
$ctx1.sendIdx["left"]=1;
$18=_st($19)._binding();
$ctx1.sendIdx["binding"]=3;
$17=_st($18)._isTempVar();
self._assert_($17);
$ctx1.sendIdx["assert:"]=3;
$39=_st(ast)._nodes();
$ctx1.sendIdx["nodes"]=12;
$38=_st($39)._first();
$ctx1.sendIdx["first"]=10;
$37=_st($38)._nodes();
$ctx1.sendIdx["nodes"]=11;
$36=_st($37)._last();
$ctx1.sendIdx["last"]=2;
$35=_st($36)._nodes();
$ctx1.sendIdx["nodes"]=10;
$34=_st($35)._first();
$ctx1.sendIdx["first"]=9;
$33=_st($34)._nodes();
$ctx1.sendIdx["nodes"]=9;
$32=_st($33)._first();
$ctx1.sendIdx["first"]=8;
$31=_st($32)._left();
$30=_st($31)._binding();
$29=_st($30)._scope();
$ctx1.sendIdx["scope"]=3;
$42=_st(_st(_st(ast)._nodes())._first())._nodes();
$ctx1.sendIdx["nodes"]=13;
$41=_st($42)._last();
$40=_st($41)._scope();
$28=_st($29).__eq_eq($40);
self._assert_($28);
return self}, function($ctx1) {$ctx1.fill(self,"testVariablesLookup",{src:src,ast:ast},smalltalk.SemanticAnalyzerTest)})},
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);


});
